import { NextResponse } from "next/server";
import { supabase } from "@/db/supabase";
import bcrypt from "bcrypt";
// if id is present then return the student details otherwise return all students
export async function GET(req) {
  const id = req.nextUrl.searchParams.get("id");
  if (id) {
    const { data, error } = await supabase
      .from("students")
      .select("*")
      .eq("id", id);
    if (error) {
      return NextResponse.error(error.message);
    }
    return NextResponse.json(data);
  } else {
    const { data, error } = await supabase.from("students").select("*");
    if (error) {
      return NextResponse.error(error.message);
    }
    return NextResponse.json(data);
  }
}

// POST Function to add new student
// students has  email,enrollment,batch,branch,cgpa,resume,linkedin,gituhub,other_links, is_active
//students has email as primary which is used as foreign key in users table, so add student first in user table then in student table
// user table has name,email,password,role, is_active
export async function POST(req) {
  const {
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
    name,
    mobile,
    role,
  } = await req.json();
  const password = await bcrypt.hash(enrollment, 10);
  const { data, error } = await supabase.from("users").insert([
    {
      name,
      email,
      password,
      mobile,
      role,
      is_active,
    },
  ]);
  if (error) {
    return NextResponse.error(error.message);
  }
  const { data1, error1 } = await supabase.from("students").insert([
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
  ]);
  if (error1 && data) {
    await supabase.from("users").delete().eq("email", email);
    return NextResponse.error(error1.message);
  }
  if (error1) {
    return NextResponse.error(error1.message);
  }
  return NextResponse.json({ success: true });
}

// DELETE Function to delete student
export async function DELETE(req) {
  const { email } = await req.json();
  const { data, error } = await supabase
    .from("users")
    .delete()
    .eq("email", email);
  if (error) {
    return NextResponse.error(error.message);
  }
  return NextResponse.json(data);
}
// PUT Function to update student
export async function PUT(req) {
  const {
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
    name,
    mobile,
    role,
  } = await req.json();
  const { data, error } = await supabase
    .from("users")
    .update({
      name,
      mobile,
      role,
      is_active,
    })
    .eq("email", email);
  if (error) {
    return NextResponse.error(error.message);
  }
  const { data1, error1 } = await supabase
    .from("students")
    .update({
      enrollment,
      batch,
      branch,
      cgpa,
      resume,
      linkedin,
      github,
      other_links,
      is_active,
    })
    .eq("email", email);
  if (error1 && data) {
    return NextResponse.error(error1.message);
  }
  return NextResponse.json(data);
}