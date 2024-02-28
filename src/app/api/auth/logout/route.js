import { NextResponse } from "next/server";
export async function GET(req) {
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

    console.log("sending logout")

    return response;
  } catch (err) {
    console.error(err);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
