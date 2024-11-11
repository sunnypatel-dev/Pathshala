import { connect } from "@/dbConfig/dbConfig";
import Course from "@/models/courseModel";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(NextRequest) {
  try {
    const reqBody = await NextRequest.json();

    const { userId, courseId } = reqBody;

    // Find user by ID
    const user = await User.findById(userId);

    // is that course already exist in the 'course'(array of object) in User model
    const isCourseExistsAlready = user.courses.some(
      (course) => course._id.toString() === courseId
    );

    if (isCourseExistsAlready) {
      return new NextResponse("Already Enrolled!", {
        status: 409, // Set your desired status code
        headers: {
          "Content-Type": "text/plain", // Set the content type (optional)
        },
      });
    }

    const course = await Course.findById(courseId);

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { courses: course } },
      { new: true }
    );

    return NextResponse.json({
      message: "Course Subscribed!",
      user: updatedUser,
      status: 200,
    });
  } catch (err) {
    return NextResponse.json({ message: "Internal Error" });
  }
}

// if (!course) {
//   throw new Error("Course not found");
// }
