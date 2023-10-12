"use client";
import { useEffect, useState } from "react";
import {
  fetchAllPostsWithProfiles,
  fetchProfileById,
  insertNewPostInDB,
  fetchCurrentUser,
  fetchCurrentUser2,
} from "@/lib/db/index";
import Post from "@/components/shared/cards/Post";
import SkeletonUi from "../profile/skeletonUi";
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
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const post = await fetchAllPostsWithProfiles();
        setPosts(post);
      } catch (err) {
        setError(err);
      }finally {
        setIsLoading(false);
      }
    })();
  }, []);
  if (isLoading)
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
