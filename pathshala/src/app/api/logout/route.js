import { cors } from "@/lib/cors";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const isCorsHandled = cors(req, res);
  if (isCorsHandled) return;
  try {
    console.log("logout");

    const response = NextResponse.json({
      message: "Logout Successful",
      success: true,
    });

    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
