"use client";
import {useEffect, useState} from "react";
import {
  fetchAllPostsWithProfiles,
  fetchProfileById,
  insertNewPostInDB,
  fetchCurrentUser,
} from "@/lib/db/index";
import Post from "@/components/shared/cards/Post";

export default function Feed() {
  const [posts, setPosts] = useState(null);
  const [profile, setProfile] = useState(null);
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

  if (!posts) return <div>Loading...</div>;

  return (
    <article className="flex flex-col gap-2 w-full max-w-xl">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </article>
  );
}
