import { NextResponse } from "next/server";
export async function POST(req) {
  try {
    const response = NextResponse.json({
      message: "Logout Successful",
      success: true,
    });

    response.cookies.set("token", "", {
      path: "/",
      httpOnly: true,
      expires: new Date(0),
    });

    console.log("sending logout");

    return response;
  } catch (err) {
    console.error(err);
    return NextResponse.json(err);
  }
}
