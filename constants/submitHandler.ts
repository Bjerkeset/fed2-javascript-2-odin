"use server";
import {z} from "zod";
import {createServerActionClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";

export const dynamic = "force-dynamic";

const formSchema = z.object({
  post: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export async function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values);
  const supabase = createServerActionClient({cookies});
}
