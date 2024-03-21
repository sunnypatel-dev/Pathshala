import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(NextRequest) {
  try {
    const reqBody = await NextRequest.json();

    const { userId, courseId, currentChapterId, topicId } = reqBody;

    // Find the user by userId
    const user = await User.findOne({ _id: userId });

    if (!user) {
      return NextResponse.json({
        message: "User Not Found!",
        status: 404,
      });
    }

    // Find the course within the user's courses array by courseId
    const course = user.courses.find(
      (item) => item._id.toString() === courseId
    );

    if (!course) {
      return NextResponse.json({
        message: "Course Not Found!",
        status: 404,
      });
    }

    // const topic = course.syllabus.find((item) => item._id.toString() === topicId)

    // course.syllabus.topics.map((item, index) => console.log(item.topicName));
    // const topic = course.syllabus.topics.find(
    //   (item) => item._id.toString() === topicId
    // );

    // Iterate over the course's syllabus
    for (const chapter of course.syllabus) {
      // Iterate over the topics in each chapter
      for (const topic of chapter.topics) {
        // Check if the topic's _id matches the given topicId
        if (topic._id.toString() === topicId) {
          console.log("Found Topic:", topic.topicName);
          // Update the topic's progress to true
          topic.topicProgress = true;
          console.log("Updated topicProgress:", topic.topicProgress);
          break; // Assuming there is only one topic with a given topicId in each chapter
        }
      }
    }

    // Save the updated user object
    await user.save();

    // Save the updated user object
    // await user.save();

    return NextResponse.json({
      message: "Topic updated successfully!",
      status: 200,
      user: user,
    });
  } catch (err) {
    return NextResponse.json({ message: "Internal Error" });
  }
}

// if (!course) {
//   throw new Error("Course not found");
// }
