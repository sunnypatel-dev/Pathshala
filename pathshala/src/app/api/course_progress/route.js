import { connect } from "@/dbConfig/dbConfig";
import Certificate from "@/models/certificateModal";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "@firebase/storage";
// fixed the error by adding @

import { app } from "@/firebase";

import { PDFDocument, rgb } from "pdf-lib";
import fs from "fs";

connect();

export async function POST(NextRequest) {
  try {
    const reqBody = await NextRequest.json();

    const { userId, courseId, topicId } = reqBody;

    const user = await User.findOne({ _id: userId });

    if (!user) {
      return NextResponse.json({
        message: "User Not Found!",
        status: 404,
      });
    }

    const course = user.courses.find(
      (item) => item._id.toString() === courseId
    );

    if (!course) {
      return NextResponse.json({
        message: "Course Not Found!",
        status: 404,
      });
    }

    // Updating each topic progress here

    for (const chapter of course.syllabus) {
      for (const topic of chapter.topics) {
        if (topic._id.toString() === topicId) {
          console.log("Found Topic:", topic.topicName);

          topic.topicProgress = true;
          console.log("Updated topicProgress:", topic.topicProgress);
          break;
        }
      }
    }

    // Calculating Percetage Completed -

    const totalTopics = course.syllabus.reduce((acc, chapter) => {
      return acc + chapter.topics.length;
    }, 0);

    const topicsWithProgress = course.syllabus.reduce((acc, chapter) => {
      return acc + chapter.topics.filter((topic) => topic.topicProgress).length;
    }, 0);

    const percentageCompleted = Math.floor(
      (topicsWithProgress / totalTopics) * 100 || 0
    );

    // Finally updating the course progress

    course.progress_status = percentageCompleted;

    const savedUser = await user.save();

    const { password, ...rest } = user._doc;

    // If user Completed 100% any of course we will generate the Certificate instantly

    if (percentageCompleted == 100) {
      function generateCustomCertificateId() {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        const length = 7;
        let customId = "";

        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          customId += characters[randomIndex];
        }

        const certificateId = customId + "-PATHSHALA";

        return certificateId;
      }

      const customCertificateId = generateCustomCertificateId();

      // Protecting from duplication of certificate here

      const existingCertificate = await Certificate.findOne({
        user_id: userId,
        course_id: course._id.toString(),
      });

      if (!existingCertificate) {
        // Creating Pdf for certificate ->

        const existingPdfBytes = fs.readFileSync(
          "public/certificate_example.pdf"
        );
        const pdfDoc = await PDFDocument.load(existingPdfBytes);

        const page = pdfDoc.getPages()[0]; // Get the first page

        page.drawRectangle({
          x: 330,
          y: 430,
          width: 200,
          height: 50,
          color: rgb(1, 1, 1),
        });

        page.drawText(user.name, {
          x: 400,
          y: 442,
          size: 27,
          color: rgb(64 / 255, 64 / 255, 64 / 255), // Black color
        });

        page.drawRectangle({
          x: 100,
          y: 345,
          width: 700,
          height: 90,
          color: rgb(1, 1, 1),
        });

        page.drawText(
          `For successfully completing the Pathshala ${course.name} course on`,
          {
            x: 230,
            y: 400,
            size: 15,
            color: rgb(51 / 255, 49 / 255, 53 / 255),
          }
        );

        const currentDate = new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });

        page.drawText(`${currentDate}.`, {
          x: 410,
          y: 380,
          size: 15,
          color: rgb(51 / 255, 49 / 255, 53 / 255),
        });

        page.drawText(
          "Pathshala wishes you the best for your future endeavours.",
          {
            x: 280,
            y: 340,
            size: 15,
            color: rgb(51 / 255, 49 / 255, 53 / 255),
          }
        );

        page.drawRectangle({
          x: 170,
          y: 80,
          width: 560,
          height: 50,
          color: rgb(1, 1, 1),
        });

        page.drawText(
          `Verifiy here: ${process.env.NEXT_PUBLIC_API_BASE_URL}/api/verifiy_certificate/`,
          {
            x: 250,
            y: 96,
            size: 10,
            color: rgb(141 / 255, 137 / 255, 144 / 255),
          }
        );

        page.drawText(`Date of certification: ${currentDate}`, {
          x: 220,
          y: 120,
          size: 10,
          color: rgb(141 / 255, 137 / 255, 144 / 255),
        });

        page.drawText(`Certificate Id: ${customCertificateId}`, {
          x: 560,
          y: 120,
          size: 10,
          color: rgb(141 / 255, 137 / 255, 144 / 255),
        });

        const modifiedPdfBytes = await pdfDoc.save();

        // fs.writeFileSync(
        //   `certificates/${customCertificateId}.pdf`,
        //   modifiedPdfBytes
        // );

        console.log("PDF file modified successfully!");

        const storage = getStorage(app);
        const bucket = ref(storage, `certificates/${customCertificateId}.pdf`);

        // Read the PDF file
        // const pdfFile = fs.readFileSync(
        //   `certificates/${customCertificateId}.pdf`
        // );

        // Upload the PDF to Firebase Storage with progress tracking
        const uploadTask = uploadBytesResumable(bucket, modifiedPdfBytes);

        // Listen for state changes, errors, and completion of the upload
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload is ${progress}% done`);
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            console.error("Error uploading PDF:", error);
          },
          async () => {
            console.log("PDF uploaded successfully!");

            // Get the download URL of the uploaded file
            const downloadURL = await getDownloadURL(bucket);

            const newCertificate = new Certificate({
              user_id: userId,
              username: user.name,
              course_id: course._id.toString(),
              course_name: course.name,
              course_category: course.category,
              certificateId: customCertificateId,
              certificateDownloadUrl: downloadURL,
            });

            await newCertificate.save();
          }
        );
      }
    }

    return NextResponse.json({
      message: "Topic updated successfully!",
      status: 200,
      user: rest,
    });
  } catch (err) {
    return NextResponse.json({ message: "Internal Error" });
  }
}

// if (!course) {
//   throw new Error("Course not found");
// }
