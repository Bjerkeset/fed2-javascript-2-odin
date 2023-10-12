"use client";
import {useEffect, useState} from "react";
import {
  fetchAllPostsWithProfiles,
  fetchProfileById,
  insertNewPostInDB,
  fetchCurrentUser,
  fetchCurrentUser2,
} from "@/lib/db/index";
import Post from "@/components/shared/cards/Post";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Feed() {
  const [posts, setPosts] = useState(null);
  const [profile, setProfile] = useState(null);
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const post = await fetchAllPostsWithProfiles();
        // Reverse the array to show the latest post on top.

        setPosts(post.reverse());
        const user = await fetchCurrentUser();
        setCurrentUser(user);

        console.log("post: ", post);
        console.log("Current user: ", user);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

  if (!posts || !currentUser) return <div>Loading...</div>;

  return (
    <>
      <article className="flex flex-col gap-2 w-full ">
        {posts.map((post) => (
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
    </>
  );
}
