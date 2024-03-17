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
