import React from "react";

export default function page() {
  return <div>page</div>;
}

// import LoginForm from "@/components/LoginForm";

// import AuthButtonClient from "@/components/shared/buttons/AuthButtonClient";

// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

// import { cookies } from "next/headers";

// import { redirect } from "next/navigation";

// import React from "react";

// export default async function page() {
//   const supabase = createServerComponentClient({ cookies });

//   const { data: session } = await supabase.auth.getSession();

//   {
//     /* {

//     if (session) {

//       redirect("/test");

//     } */
//   }

//   return (
//     <div>
//       <LoginForm />

//       {/* <AuthButtonClient session={session}  /> */}
//     </div>
//   );
// }
