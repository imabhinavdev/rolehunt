import { NextResponse } from "next/server";
import { supabase } from "@/db/supabase";

export async function GET() {
  const { data, error } = await supabase.from("students").select("*");
  if (error) {
    return NextResponse.error(error.message);
  }
  return NextResponse.json(data);
}

export async function POST(req) {
  const {
    email,
    // enrollment,
    // batch,
    branch,
    cgpa,
    resume,
    linkedin,
    github,
    other_links,
    is_active,
  } = await req.json();

  const { data, error } = await supabase
    .from("students")
    .insert([
      {
        email,
        enrollment,
        batch,
        branch,
        cgpa,
        resume,
        linkedin,
        github,
        other_links,
        is_active,
      },
    ])
    .select();
  if (error) {
    console.log(error);
    return NextResponse.error(error.message);
  }
  return NextResponse.message;
}
