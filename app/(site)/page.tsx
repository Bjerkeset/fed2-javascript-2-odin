import Feed from "@/components/pages/home/Feed";
import NewPostForm from "@/components/pages/home/NewPostForm";
import AuthButtonServer from "@/components/shared/buttons/AuthButtonServer";
import ProfileList from "@/components/shared/cards/ProfileList";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {redirect} from "next/navigation";
import {fetchAllPosts} from "@/lib/db/index";
import {RefreshProvider} from "@/lib/RefreshContext";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <RefreshProvider>
      <section className="flex flex-col items-center w-full max-w-xl">
        <NewPostForm />
        <Feed currentUserId={null} profileId={null} />
      </section>
    </RefreshProvider>
  );
}
