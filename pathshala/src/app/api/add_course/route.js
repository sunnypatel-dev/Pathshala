import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Course from "@/models/courseModel";
import { cors } from "@/lib/cors";

connect();

export async function POST(req, res) {
  const isCorsHandled = cors(req, res);
  if (isCorsHandled) return;

  try {
    const reqBody = await NextRequest.json();

    const { category, name, duration, img1, img2, description, syllabus } =
      reqBody;

    console.log(reqBody);

    const newCourse = new Course({
      category,
      name,
      duration,
      img1,
      img2,
      description,
      syllabus,
    });

    const savedCourse = await newCourse.save();

    return NextResponse.json({
      message: "Course created successfully",
      success: true,
      savedCourse,
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
