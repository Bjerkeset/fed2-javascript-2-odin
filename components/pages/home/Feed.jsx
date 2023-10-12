"use client";
import { useEffect, useState } from "react";
import {
  fetchAllPostsWithProfiles,
  fetchProfileById,
  insertNewPostInDB,
  fetchCurrentUser,
} from "@/constants/db/index";
import Post from "@/components/shared/cards/Post";
import SkeletonUi from "../profile/skeletonUi";

export default function Feed() {
  const [posts, setPosts] = useState(null);
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const post = await fetchAllPostsWithProfiles();
        setPosts(post);
      } catch (err) {
        setError(err);
      }
    })();
  }, []);
  if (!isLoading)
    return (
      <div className="flex flex-wrap justify-center items-center gap-6 mt-6">
        <SkeletonUi />
        <SkeletonUi />
        <SkeletonUi />
        <SkeletonUi />
      </div>
    );
  // if (!posts) return <div>Loading...</div>;

  return (
    <article className="flex flex-col gap-2 w-full max-w-xl">
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </article>
  );
}
