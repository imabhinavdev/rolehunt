import { NextResponse } from "next/server";
import { supabase } from "@/db/supabase";

export async function GET(req) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) {
    const { data, error } = await supabase.from("company").select();
    if (error) {
      return NextResponse.error(error.message);
    }
    return NextResponse.json(data);
  }
  const { data, error } = await supabase.from("company").select().eq("id", id);
  if (error) {
    return NextResponse.error(error.message);
  }
  return NextResponse.json(data);
}

export async function POST(req) {
  const {
    name,
    description,
    vision,
    mission,
    location,
    country,
    size,
    is_active,
  } = await req.json();

  const { data, error } = await supabase
    .from("company")
    .insert([
      {
        name,
        description,
        vision,
        mission,
        location,
        country,
        size,
        is_active,
      },
    ])
    .select();
  if (error) {
    return NextResponse.error(error.message);
  }
  return NextResponse.json(data);
}

// PUT function
export async function PUT(req) {
  const {
    id,
    name,
    description,
    vision,
    mission,
    location,
    country,
    size,
    is_active,
  } = await req.json();

  const { data, error } = await supabase
    .from("company")
    .update({
      name,
      description,
      vision,
      mission,
      location,
      country,
      size,
      is_active,
    })
    .eq("id", id)
    .select();
  if (error) {
    return NextResponse.error(error.message);
  }
  return NextResponse.json(data);
}

// DELETE function
export async function DELETE(req) {
  const { id } = await req.json();
  const { data, error } = await supabase
    .from("company")
    .delete()
    .eq("id", id)
    .select();
  if (error) {
    return NextResponse.error(error.message);
  }
  return NextResponse.json(data);
}
