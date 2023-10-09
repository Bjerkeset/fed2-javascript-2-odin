"use client";
import {Button} from "@/components/ui/button";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import {useRouter} from "next/navigation";

export default function AuthButtonClient({session}: {session: Session | null}) {
  console.log("session", session);
  const router = useRouter();
  const supabase = createClientComponentClient();
  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/api/auth/callback",
      },
    });
  };
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };
  return session ? (
    <Button onClick={handleSignOut}>Sign Out</Button>
  ) : (
    <Button onClick={handleSignIn}>Sign in</Button>
  );
}
