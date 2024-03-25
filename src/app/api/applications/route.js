import { NextResponse } from "next/server";
import { supabase } from "@/db/supabase";

export async function POST(req) {
  const { job_id, email } = await req.json();

  try {
    const { data, error } = await supabase
      .from("applications")
      .insert([{ job_id, email }]);

    if (error) {
      return NextResponse.json({ status: 500, error: error.message });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ status: 500, error: error.message });
  }
}

export async function GET(req) {
  const id = req.nextUrl.searchParams.get("id");
  try {
    const { data, error } = await supabase
      .from("applications")
      .select("email")
      .eq("job_id", id);

    if (error) {
      return NextResponse.json({ status: 500, error: error.message });
    }
    const extractEmails = data.map((item) => item.email);

    const { data: userData, error: userError } = await supabase
      .from("students")
      .select("*")
      .in("email", extractEmails);

    return NextResponse.json(userData);
  } catch (error) {
    return NextResponse.json({ status: 500, error: error.message });
  }
}
