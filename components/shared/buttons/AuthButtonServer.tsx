import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {create} from "domain";
import {cookies} from "next/headers";
import AuthButtonClient from "./AuthButtonClient";
export const dynamic = "force-dynamic";

export default async function AuthButtonServer() {
  const supabase = createServerComponentClient({cookies});
  const {
    data: {session},
  } = await supabase.auth.getSession();

  return <AuthButtonClient session={session} />;
}
