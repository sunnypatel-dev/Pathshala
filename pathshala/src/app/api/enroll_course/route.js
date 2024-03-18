import { connect } from "@/dbConfig/dbConfig";
import Course from "@/models/courseModel";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(NextRequest) {
  try {
    console.log("getting");
    const reqBody = await NextRequest.json();

    const { userId, courseId } = reqBody;

    const course = await Course.findById(courseId);

    if (!course) {
      throw new Error("Course not found");
    }

    const user = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { courses: course } },
      { new: true }
    );

    return NextResponse.json({ message: "done", user });
  } catch (err) {
    console.error(err);
    // Handle the error
  }
}
