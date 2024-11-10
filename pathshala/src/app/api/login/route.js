import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { cors } from "@/lib/cors";
// import { sendEmail } from "@/helpers/mailer";

connect();

export async function POST(req, res) {
  const isCorsHandled = cors(req, res);
  if (isCorsHandled) return;
  try {
    const reqBody = await NextRequest.json();

    console.log(reqBody);

    const { email, password } = reqBody;

    //check if user already exist

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({
        message: "User Not Found",
        success: false,
        status: 404,
      });
    }

    // check if password is correct
    const validPassword = await bcryptjs.compare(password, user.password);

    if (!validPassword) {
      return NextResponse.json({
        message: "Invalid Password",
        success: false,
        status: 400,
      });
    }

    const { password: hashedPassword, ...rest } = user._doc;

    // create token data

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    // create token
    const token = jwt.sign(tokenData, "slfjskdfowru030nfowe", {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "Login successful",
      success: true,
      status: 200,
      user: rest,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
