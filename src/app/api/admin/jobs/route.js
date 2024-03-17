import { NextResponse } from "next/server";
import { supabase } from "@/db/supabase";
// GET Function if id present then return the jobs details otherwise return all jobs
export async function GET(req) {
  const id = req.nextUrl.searchParams.get("id");

  try {
    if (id) {
      const { data: jobData, error: jobError } = await supabase
        .from("jobs")
        .select(`*`)
        .eq("id", id);

      const { data: companyData, error: companyError } = await supabase
        .from("company")
        .select();

      if (jobError) {
        return NextResponse.error(jobError.message);
      }

      if (companyError) {
        return NextResponse.error(companyError.message);
      }

      return NextResponse.json({ jobData, companyData });
    } else {
      const { data, error } = await supabase
        .from("jobs")
        .select(`*,company(name)`);

      if (error) {
        return NextResponse.error(error.message);
      }

      return NextResponse.json(data);
    }
  } catch (error) {
    return NextResponse.error("An unexpected error occurred");
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
    console.log(error);
    return NextResponse.error(error.message);
  }
  return NextResponse.json({ success: true });
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
    console.log(error);
    return NextResponse.error(error.message);
  }
  return NextResponse.json({ success: true });
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
