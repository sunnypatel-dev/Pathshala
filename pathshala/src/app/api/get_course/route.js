import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Course from "@/models/courseModel";

connect();
NextResponse;
export async function POST(NextRequest) {
  try {
    const courses = await Course.find();

    return NextResponse.json({
      message: "Courses fetched successfully",
      success: true,
      courses,
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
