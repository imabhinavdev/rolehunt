import { NextResponse } from "next/server";
import { supabase } from "@/db/supabase";

export async function GET(req) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) {
    const { data, error } = await supabase.from("company").select();
    if (error) {
      return NextResponse.json(error.message);
    }
    return NextResponse.json(data);
  }
  const { data, error } = await supabase.from("company").select().eq("id", id);
  if (error) {
    return NextResponse.json(error.message);
  }
  return NextResponse.json(data);
}
