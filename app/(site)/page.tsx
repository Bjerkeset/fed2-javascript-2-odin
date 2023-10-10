import Feed from "@/components/pages/home/Feed";
import AuthButtonServer from "@/components/shared/buttons/AuthButtonServer";
import ProfileList from "@/components/shared/cards/ProfileList";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

export default async function Home() {
  const supabase = createServerComponentClient({cookies});
  const {data: session} = await supabase.auth.getSession();

  // if (!session || session === null) {
  //   redirect("/login");
  // }

  const {data: posts} = await supabase.from("posts").select();

  return (
    <section className="flex flex-col items-center max-w-3xl">
      <h1 className="text-4xl">Homepage</h1>
      <div>
        <AuthButtonServer />
      </div>
      <pre> {JSON.stringify(posts, null, 2)} </pre>
      <Feed />
    </section>
  );
}
