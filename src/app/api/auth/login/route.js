import { serialize } from "cookie";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { supabase } from "@/db/supabase";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.error({
        status: 400,
        statusText: "Email and password are required",
      });
    }

    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("email", email);

    if (error) {
      console.log(error)
      return NextResponse.error({ status: 500, statusText: error.message });
    }

    if (!data || data.length === 0) {
      // No user found with the given email
      return NextResponse.error({
        status: 401,
        statusText: "Invalid email or password",
      });
    }

    const passwordMatch = await bcrypt.compare(password, data[0].password);

    if (!passwordMatch) {
      // Incorrect password
      return NextResponse.error({
        status: 401,
        statusText: "Invalid email or password",
      });
    }

    const token = createToken(data[0]);
    const cookies = serialize("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Set to true in production
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days (adjust as needed)
      domain: process.env.DOMAIN,
    });

    const response = NextResponse.json({ success: true });
    response.cookies.set("token", cookies);
    return response;
  } catch (error) {
    console.error(error.message);
    return NextResponse.error({ status: 500, statusText: error.message });
  }
}

function createToken(data) {
  const { email, is_active, role, name } = data;
  const tokenPayload = {
    name,
    email,
    is_active,
    role,
  };

  const secretKey = process.env.SECRET_KEY;
  const token = jwt.sign(tokenPayload, secretKey, { expiresIn: "7d" });

  return token;
}
