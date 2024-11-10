import { connect } from "@/dbConfig/dbConfig";
import Certificate from "@/models/certificateModal";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(NextRequest) {
  try {
    const reqBody = await NextRequest.json();

    const { verificationId } = reqBody;

    console.log(reqBody);

    // Find user by ID
    const certificate = await Certificate.findOne({
      certificateId: verificationId.toUpperCase(),
    });

    if (certificate) {
      return NextResponse.json({
        message: "I got your certificate!",
        certificate,
        status: 200,
      });
    } else {
      return NextResponse.json({
        message: "Invalid CertificateId",
        certificate,
        status: 403,
      });
    }
  } catch (err) {
    return NextResponse.json({ message: "Internal Error" });
  }
}
