import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { cors } from "@/lib/cors";
// import { sendEmail } from "@/helpers/mailer";

connect();

export async function POST(req, res) {
  const isCorsHandled = cors(req, res);
  if (isCorsHandled) return;
  try {
    const reqBody = await NextRequest.json();

    const { firstName, lastName, email, password, phone } = reqBody;

    const name = firstName + " " + lastName;

    //check if user already exist
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json({
        message: "User Already Exists!",
        status: 409,
      });
    }

    // hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phone,
    });

    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
      status: 200,
    });
  } catch (error) {
    console.log("hi");
    return NextResponse.json(
      { message: "Internal Error Bro!" },
      { status: 500 }
    );
  }
}
