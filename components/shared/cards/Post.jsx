"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Comment from "@/components/shared/cards/Comment";
import { MessageSquarePlus, Heart, Eye, Trash2 } from "lucide-react";
import Link from "next/link";
import PostSettings from "@/components/shared/cards/PostSettings";
import { Button } from "@/components/ui/button";

export default function Post({ post, isExpanded = false, isAuthorOfPost }) {
  function timeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);

    const intervals = [
      { label: "year", seconds: 31536000 },
      { label: "month", seconds: 2592000 },
      { label: "week", seconds: 604800 },
      { label: "day", seconds: 86400 },
      { label: "hour", seconds: 3600 },
      { label: "minute", seconds: 60 },
    ];

    for (let interval of intervals) {
      const count = Math.floor(seconds / interval.seconds);
      if (count >= 1) {
        return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
      }
    }

    return "just now";
  }

  // Prevents card to expand when clicking things.
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  return (
    // <div onClick={onSelect}>
    <Card
      className={`flex flex-col flex-wrap ${isExpanded ? "border-none" : ""}`}
    >
      <CardHeader className="flex flex-row flex-wrap items-center gap-0 md:gap-3">
        <Link
          className="flex flex-row items-center  gap-3 cursor-pointer"
          href={`/profile/${post.user_id}`}
        >
          <Avatar className="md:w-10 md:h-10 w-7 h-7">
            <AvatarImage
              src={
                post.profiles.meta.avatar_url ||
                "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
              }
            />
          </Avatar>
          <CardTitle className="text-sm md:text-base ">
            {post.profiles.meta.user_name || "Username"}
          </CardTitle>
        </Link>
        <CardDescription className="ml-auto text-sm md:text-base">
          {timeAgo(new Date(post.created_at))}
        </CardDescription>
        <div>
          {isAuthorOfPost ? (
            <PostSettings postId={post.id} currentContent={post.content} />
          ) : null}
        </div>
      </CardHeader>
      <CardContent className="flex">
        <p className="text-left text-sm md:text-base">
          {post.content || "Default content here."}
        </p>
      </CardContent>
      <CardFooter className="flex flex-col">
        <div className="flex  md:w-3/4 w-full">
          <p className="flex flex-row justify-around w-full text-muted-foreground">
            <Button onClick={stopPropagation} variant="link">
              <MessageSquarePlus className="post-card_icon" />
            </Button>
            <Button onClick={stopPropagation} variant="link">
              <Heart className="post-card_icon" />
            </Button>
            <Button onClick={stopPropagation} variant="link">
              <Eye className="post-card_icon" />
            </Button>
          </p>
        </div>
        {isExpanded ? <Comment /> : null}
      </CardFooter>
    </Card>
    // </div>
  );
}
