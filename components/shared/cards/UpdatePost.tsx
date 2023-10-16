"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";

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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {Input} from "@/components/ui/input";
import {useForm} from "react-hook-form";
import {Textarea} from "@/components/ui/textarea";
import {updateMatchingRows} from "@/lib/db/index";
import {RefreshContext} from "@/lib/RefreshContext";
import {useContext} from "react";
import {useToast} from "@/components/ui/use-toast";

const formSchema = z.object({
  post: z.string().min(2, {
    message: "post must be at least 2 characters.",
  }),
});

type UpdatePostProps = {
  postId: string | number;
  currentContent: string;
};

export default function UpdatePost({postId, currentContent}: UpdatePostProps) {
  const {setRefreshKey} = useContext(RefreshContext);
  const {toast} = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      post: currentContent,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    try {
      const updatedPost = await updateMatchingRows(postId, values.post);
      if (updatedPost) {
        // Handle successful update (e.g., show a success toast).
      } else {
        // Handle unsuccessful update (e.g., show an error toast).
      }
    } catch {
      console.error("Error updating post");
    } finally {
      setRefreshKey((prevKey: number) => prevKey + 1);
      toast({
        title: "success",
        description: "you just updated the post.",
      });
    }
  }
  return (
    <Dialog>
      <DialogTrigger className="text-left px-1 hover:bg-secondary rounded py-2">
        Update
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Do you want to update your post?</DialogTitle>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="post"
                render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormDescription>Update post here</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Update</Button>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
