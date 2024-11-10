import { connect } from "@/dbConfig/dbConfig";
import { cors } from "@/lib/cors";
import Certificate from "@/models/certificateModal";
import Course from "@/models/courseModel";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req, res) {
  const isCorsHandled = cors(req, res);
  if (isCorsHandled) return;
  try {
    const reqBody = await NextRequest.json();

    const { userId } = reqBody;

    // Find user by ID
    const user = await User.findById(userId);

    if (user) {
      const certificates = await Certificate.find({ user_id: userId });

      return NextResponse.json({
        message: "Found Certifcate",
        certificates,
        status: 200,
      });
    } else {
      return NextResponse.json({
        message: "User not found",
        status: 400,
      });
    }
  } catch (err) {
    return NextResponse.json({ message: "Internal Error" });
  }
}

// if (!course) {
//   throw new Error("Course not found");
// }
