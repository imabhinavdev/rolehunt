import { NextResponse } from "next/server";
import { supabase } from "@/db/supabase";
// GET Function if id present then return the jobs details otherwise return all jobs
export async function GET(req) {
  const id = req.nextUrl.searchParams.get("id");
  if (id) {
    const { data, error } = await supabase
      .from("jobs")
      .select("*")
      .eq("id", id);
    if (error) {
      return NextResponse.error(error.message);
    }
    return NextResponse.json(data);
  } else {
    const { data, error } = await supabase.from("jobs").select("*");
    if (error) {
      return NextResponse.error(error.message);
    }
    return NextResponse.json(data);
  }
}

// POST Function to add new job
// jobs has title,description,salary,company,technologies,criteria,location,is_fulltime,inhand_salary,date_of_coming, is_active,is_open,period_of_joining

export async function POST(req) {
  const {
    title,
    description,
    salary,
    company,
    technologies,
    criteria,
    location,
    is_fulltime,
    inhand_salary,
    date_of_coming,
    is_active,
    is_open,
  } = await req.json();

  const { data, error } = await supabase.from("jobs").insert([
    {
      title,
      description,
      salary,
      company,
      technologies,
      criteria,
      location,
      is_fulltime,
      inhand_salary,
      date_of_coming,
      is_active,
      is_open,
    },
  ]);
  if (error) {
    return NextResponse.error(error.message);
  }
  return NextResponse.json(data);
}

// PUT Function to update job
export async function PUT(req) {
  const {
    id,
    title,
    description,
    salary,
    company,
    technologies,
    criteria,
    location,
    is_fulltime,
    inhand_salary,
    date_of_coming,
    is_active,
    is_open,
  } = await req.json();

  const { data, error } = await supabase
    .from("jobs")
    .update({
      title,
      description,
      salary,
      company,
      technologies,
      criteria,
      location,
      is_fulltime,
      inhand_salary,
      date_of_coming,
      is_active,
      is_open,
    })
    .eq("id", id);
  if (error) {
    return NextResponse.error(error.message);
  }
  return NextResponse.json(data);
}

// DELETE Function to delete job
export async function DELETE(req) {
  const { id } = await req.json();
  const { data, error } = await supabase.from("jobs").delete().eq("id", id);
  if (error) {
    return NextResponse.error(error.message);
  }
  return NextResponse.json(data);
}
