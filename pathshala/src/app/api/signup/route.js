import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
// import { sendEmail } from "@/helpers/mailer";

connect();

export async function POST(NextRequest) {
  try {
    const reqBody = await NextRequest.json();

    const { firstName, lastName, email, password, phone } = reqBody;

    const name = firstName + " " + lastName;

    //check if user already exist
    const user = await User.findOne({ email });

    console.log(user);

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
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

    // send email

    // await sendEmail({email, emailType: "VERIFY", userId: savedUser._id.toString()})

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
