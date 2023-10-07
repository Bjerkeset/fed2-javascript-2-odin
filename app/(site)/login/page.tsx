import AuthButtonClient from "@/components/AuthButtonClient";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import React from "react";

export default async function page() {
  const supabase = createServerComponentClient({cookies});
  const {data: session} = await supabase.auth.getSession();

  if (session) {
    redirect("/test");
  }
  return (
    <div>
      <AuthButtonClient session={session} />
    </div>
  );
}
