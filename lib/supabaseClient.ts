import { createClient } from "@supabase/supabase-js";

// Safe to expose in the browser: the anon key only grants what the Row Level
// Security policies in supabase/schema.sql allow (a student's own rows, nothing more).
//
// Falls back to a placeholder so builds and pages that don't touch auth still
// work before NEXT_PUBLIC_SUPABASE_URL / _ANON_KEY are set in .env.local /
// Vercel project settings. Once those are real, this becomes a real client.
const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

export const supabase = createClient(url, anonKey);
