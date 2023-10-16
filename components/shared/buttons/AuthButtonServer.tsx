// Import your necessary server libraries
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import AuthButtonClient from "./AuthButtonClient";

// Define a server action to handle cookie operations
export async function serverAction(context: {cookies: any}): Promise<any> {
  const {cookies} = context;
  const supabase = createServerComponentClient({cookies});
  const {
    data: {session},
  } = await supabase.auth.getSession();
  return session;
}

// Update your AuthButtonServer component to use the server action
export default async function AuthButtonServer(context: {cookies: any}) {
  const session = await serverAction(context);
  return <AuthButtonClient session={session} />;
}
