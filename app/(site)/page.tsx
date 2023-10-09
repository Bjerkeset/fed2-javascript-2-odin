import AuthButtonServer from "@/components/shared/buttons/AuthButtonServer";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

export default async function Home() {
  const supabase = createServerComponentClient({cookies});
  const {data: session} = await supabase.auth.getSession();

  if (!session || session === null) {
    redirect("/login");
  }

  const {data: posts} = await supabase.from("posts").select();

  return (
    <section>
      <h1 className="text-4xl">Homepage</h1>
      <AuthButtonServer />
      <pre> {JSON.stringify(posts, null, 2)} </pre>
    </section>
  );
}
