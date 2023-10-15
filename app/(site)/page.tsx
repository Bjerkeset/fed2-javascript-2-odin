import Feed from "@/components/pages/home/Feed";
import NewPostForm from "@/components/pages/home/NewPostForm";
import AuthButtonServer from "@/components/shared/buttons/AuthButtonServer";
import ProfileList from "@/components/shared/cards/ProfileList";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {fetchAllPosts} from "@/lib/db/index";

export default async function Home() {
  return (
    <section className="flex flex-col items-center w-full max-w-xl">
      <NewPostForm />
      <div>{/* <AuthButtonServer /> */}</div>
      {/* <pre> {JSON.stringify(posts, null, 2)} </pre> */}
      <Feed currentUserId={null} profileId={null} />
    </section>
  );
}
