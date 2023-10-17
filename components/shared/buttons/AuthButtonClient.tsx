"use client";
import {useEffect} from "react"; // Add this import
import {Button} from "@/components/ui/button";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import {useRouter, usePathname} from "next/navigation";
import {GitHubLogoIcon} from "@radix-ui/react-icons";

export default function AuthButtonClient({session}: {session: Session | null}) {
  // console.log("session", session);
  const router = useRouter();
  const supabase = createClientComponentClient();
  const pathname = usePathname();

  useEffect(() => {
    // if (pathname === "/" && session === null) {
    //   router.push("/register");
    // }

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
      },
    });
    console.log("location>>>", location.origin);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/register");
  };

  // Define your different button pairs
  const registerButtons = !session ? (
    <div className="w-full flex flex-col items-center">
      <p>Sign-In with GitHub</p>
      <Button className="w-full" onClick={handleSignIn}>
        <GitHubLogoIcon />
      </Button>
    </div>
  ) : null;

  const defaultButtons = session ? (
    <Button
      className="mt-20 right-2 top-16 z-20 md:relative md:self-center absolute my-6 w-28 "
      onClick={handleSignOut}
    >
      Sign Out
    </Button>
  ) : (
    <Button
      className="mt-20 right-2 top-16 z-20 md:relative md:self-center absolute my-6 w-28"
      onClick={handleSignIn}
    >
      Sign in
    </Button>
  );

  // Conditionally render based on pathname
  return pathname === "/register" ? registerButtons : defaultButtons;
}
