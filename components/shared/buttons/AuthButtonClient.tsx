"use client";
import {useEffect} from "react"; // Add this import
import {Button} from "@/components/ui/button";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import {useRouter, usePathname} from "next/navigation";

export default function AuthButtonClient({session}: {session: Session | null}) {
  // console.log("session", session);
  const router = useRouter();
  const supabase = createClientComponentClient();
  const pathname = usePathname();

  useEffect(() => {
    if (session) {
      localStorage.setItem(
        "supabase.auth.token",
        JSON.stringify(session.access_token)
      );
    } else {
      localStorage.removeItem("supabase.auth.token");
    }
  }, [session]);

  const handleSignIn = async () => {
    const signinFunc = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/api/auth/callback`,
        // redirectTo: "http://localhost:3000/api/auth/callback",
      },
    });
    console.log("sign in function:", signinFunc);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/register");
  };

  // if (pathname === "/register") return null;

  return session ? (
    <Button
      className="fixed right-2 top-16 z-10 md:bottom-14 md:left-10 my-6 w-28 "
      onClick={handleSignOut}
    >
      Sign Out
    </Button>
  ) : (
    <Button
      className="fixed right-2 top-16 z-20 md:bottom-14 md:left-10 my-6  w-28"
      onClick={handleSignIn}
    >
      Sign in
    </Button>
  );
}
