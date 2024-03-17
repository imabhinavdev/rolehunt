import { NextResponse } from "next/server";
import { supabase } from "@/db/supabase";


// get method
export async function GET(req) {
  const { data, error } = await supabase.from("test").select("*");
  if (error) {
    return NextResponse.error(error.message);
  }
  return NextResponse.json(data);
}


//post method

export async function POST(req) {
  const { name, email } = await req.json();

  const { data, error } = await supabase
    .from("test")
    .insert([
      {
        name,
        email,
      },
    ])
    .select();
  if (error) {
    return NextResponse.error(error);
  }
  return NextResponse.json(data);
}

// put method

export async function PUT(req) {
  const { name, email } = await req.json();
  const { data, error } = await supabase
    .from("test")
    .update([
      {
        name,
        email,
      },
    ])
    .eq("email", email)
    .select();

  if (error) {
    return NextResponse.error(error.message);
  }
  return NextResponse.json(data);
}

// delete method
export async function DELETE(req) {
  const { email } = await req.json();
  const { data, error } = await supabase
    .from("test")
    .delete()
    .eq("email", email);

  if (error) {
    return NextResponse.error(error.message);
  }
  return NextResponse.json(data);
}
