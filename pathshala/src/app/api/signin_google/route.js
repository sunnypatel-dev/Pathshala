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

    const { name, email, photoUrl } = reqBody;

    const user = await User.findOne({ email });

    if (user) {
      const tokenData = {
        id: user._id,
        username: user.username,
        email: user.email,
      };

      // create token
      const token = jwt.sign(tokenData, "slfjskdfowru030nfowe", {
        expiresIn: "1d",
      });

      const { password: hashedPassword, ...rest } = user._doc;

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
    } else {
      const generatedPassword = Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);

      const newUser = new User({
        name: name,
        email: email,
        password: hashedPassword,
        photoUrl: photoUrl,
      });

      const savedUser = await newUser.save();

      const tokenData = {
        email: email,
      };

      // create token
      const token = jwt.sign(tokenData, "slfjskdfowru030nfowe", {
        expiresIn: "1d",
      });

      const { password, ...rest } = newUser._doc;

      const response = NextResponse.json({
        message: "User Created Successfully!",
        success: true,
        status: 200,
        user: rest,
      });

      response.cookies.set("token", token, {
        httpOnly: true,
      });

      return response;
    }
  } catch (error) {
    return NextResponse.json({ message: "Internal Error!" }, { status: 500 });
  }
}
