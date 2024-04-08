import { NextResponse } from "next/server";
import { supabase } from "@/db/supabase";
// GET Function if id present then return the jobs details otherwise return all jobs
export async function GET(req) {
  const id = req.nextUrl.searchParams.get("id");

  try {
    if (id) {
      const { data: jobData, error: jobError } = await supabase
        .from("jobs")
        .select(`*,company(*)`)
        .eq("id", id);

      if (jobError) {
        return NextResponse.json(jobError.message);
      }

      return NextResponse.json({ jobData });
    } else {
      const { data, error } = await supabase
        .from("jobs")
        .select(`*,company(name)`);

      if (error) {
        return NextResponse.json(error.message);
      }

      return NextResponse.json(data);
    }
  } catch (error) {
    return NextResponse.json("An unexpected error occurred");
  }
}
