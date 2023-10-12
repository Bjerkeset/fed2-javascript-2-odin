"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Comment from "@/components/shared/cards/Comment";
import {MessageSquarePlus, Heart, Eye, Trash2} from "lucide-react";
import Link from "next/link";
import PostSettings from "@/components/shared/cards/PostSettings";

export default function Post({post}) {
  const isUserCreatorOfPost = true;
  const doesCommentsExist = false;
  return (
    <Card className="">
      <CardHeader className="flex flex-row items-center gap-3">
        <Link
          className="flex flex-row items-center gap-3 cursor-pointer"
          href={`/profile/${post.user_id}`}
        >
          <Avatar>
            <AvatarImage
              src={
                post.profiles.meta.avatar_url ||
                "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
              }
            />
            <AvatarFallback>
              {post.profiles.meta.user_name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <CardTitle>{post.profiles.meta.user_name || "Username"}</CardTitle>
        </Link>
        <CardDescription className="ml-auto">
          {new Date(post.created_at).toLocaleString()}
        </CardDescription>
        <div>
          {isUserCreatorOfPost ? (
            <PostSettings postId={post.id} currentContent={post.content} />
          ) : null}
        </div>
      </CardHeader>
      <CardContent>
        <p>{post.content || "Default content here."}</p>
      </CardContent>
      <CardFooter className="flex flex-col">
        <div className="flex w-3/4">
          <p className="flex flex-row justify-around w-full text-muted-foreground">
            <MessageSquarePlus className="post-card_icon" />
            <Heart className="post-card_icon" />
            <Eye className="post-card_icon" />
          </p>
        </div>
        {doesCommentsExist ? <Comment /> : null}
      </CardFooter>
    </Card>
  );
}
