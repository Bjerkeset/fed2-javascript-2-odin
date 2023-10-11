"use client";
import {useEffect, useState} from "react";
import {
  fetchAllPostsWithProfiles,
  fetchProfileById,
} from "@/constants/db/index";
import Post from "@/components/shared/cards/Post";

export default function Feed() {
  const [posts, setPosts] = useState(null);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const fetchedPosts = await fetchAllPostsWithProfiles();
        setPosts(fetchedPosts);

        const fetchedProfile = await fetchProfileById(
          "363b0e8b-315c-4822-9630-7f84a6e57c45"
        );
        setProfile(fetchedProfile);
      } catch (err) {
        setError(err);
      }
    })();
  }, []);

  if (!posts) return <div>Loading...</div>;

  return (
    <article>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      {/* Optionally render the profile data somewhere */}
    </article>
  );
}
