"use client";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Card, CardContent} from "@/components/ui/card";
import {Textarea} from "@/components/ui/textarea";
import {onSubmit} from "@/constants/submitHandler";
import {useEffect, useState} from "react";
import {fetchCurrentUser, insertNewPostInDB} from "@/lib/db";
import {useForm} from "react-hook-form";

const formSchema = z.object({
  post: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function NewPostForm() {
  const [profile, setProfile] = useState<any | null>(null);
  const [content, setContent] = useState<any | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      post: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const fetchedProfile = await fetchCurrentUser();
      setProfile(fetchedProfile);
      console.log("fetchedProfile", fetchedProfile);

      if (fetchedProfile?.id) {
        const postedContent = await insertNewPostInDB(
          fetchedProfile.id,
          values.post
        );
        setContent(postedContent);
      } else {
        console.log("No profile found");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1 w-full">
        <FormField
          control={form.control}
          name="post"
          render={({field}) => (
            <FormItem className="flex flex-col items-center">
              <FormLabel className="text-2xl sm:text-3xl">
                Share Your Thoughts
              </FormLabel>
              <FormMessage />
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              {/* <FormDescription>This is your post</FormDescription> */}
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Post It!
        </Button>
      </form>
    </Form>
  );
}
