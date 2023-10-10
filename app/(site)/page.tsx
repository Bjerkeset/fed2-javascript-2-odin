import Feed from "@/components/pages/home/Feed";
import NewPostForm from "@/components/pages/home/NewPostForm";
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

  const {data: posts} = await supabase.from("posts").select("*, profiles(*)");

  fetch("/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      post: "hello world",
    }),
  });	

  fetch("/api/profules", {

  return (
    <section className="flex flex-col items-center max-w-3xl">
      <NewPostForm />
      <div>
        <AuthButtonServer />
      </div>
      <pre> {JSON.stringify(posts, null, 2)} </pre>
      <Feed />
    </section>
  );
}
