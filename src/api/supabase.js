import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

const session = useSession();
const supabase = useSupabaseClient();
