"use client";
import React, { useEffect, useState } from "react";
import { fetchAllPostsWithProfiles, fetchCurrentUser } from "@/lib/db/index";
import Post from "@/components/shared/cards/Post";
import SkeletonUi from "../profile/skeletonUi";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function Feed({ currentUserId }) {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const post = await fetchAllPostsWithProfiles();
        setPosts(post.reverse());
        const user = await fetchCurrentUser();
        setCurrentUser(user);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-wrap justify-center items-center gap-6 mt-6">
        <SkeletonUi />
        <SkeletonUi />
        <SkeletonUi />
        <SkeletonUi />
      </div>
    );
  }

  if (!posts || !currentUser) {
    return <div>Loading...</div>;
  }

  const filteredPosts = currentUserId
    ? posts.filter((post) => post.user_id === currentUserId)
    : posts;

  return (
    <article className="flex flex-col gap-2 w-full ">
      {filteredPosts.map((post) => (
        <Dialog key={post.id}>
          <DialogTrigger>
            <Post
              post={post}
              isAuthorOfPost={post.user_id === currentUser.id}
            />
          </DialogTrigger>
          <DialogContent>
            <Post
              post={post}
              isAuthorOfPost={post.user_id === currentUser.id}
              isExpanded={true}
            />
          </DialogContent>
        </Dialog>
      ))}
    </article>
  );
}
