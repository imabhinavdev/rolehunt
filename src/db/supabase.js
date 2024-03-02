import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://cnzscciunmvxmxyrxaeb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNuenNjY2l1bm12eG14eXJ4YWViIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwODE0NDk1NywiZXhwIjoyMDIzNzIwOTU3fQ.RE0KZ_DxdiKgvQobKq1SZgsaE-XAro5qfe7tewBcOjM"
);
