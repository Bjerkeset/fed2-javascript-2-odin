"use client";
import React, {useEffect, useState} from "react";
import {fetchAllPostsWithProfiles, fetchCurrentUser} from "@/lib/db/index";
import Post from "@/components/shared/cards/Post";
import SkeletonUi from "../profile/skeletonUi";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";
import {useToast} from "@/components/ui/use-toast";

export default function Feed({profileId, currentUserId}) {
  const {toast} = useToast();
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const post = await fetchAllPostsWithProfiles();
        setPosts(post.reverse());
        const user = await fetchCurrentUser();
        setCurrentUser(user);
      } catch (error) {
        toast({
          title: "Error fetching user or post",
          description: error.message,
          variant: "destructive",
        });
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

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

  const getFilteredPosts = () => {
    if (profileId === 1) {
      return posts.filter((post) => post.user_id === currentUserId);
    }
    if (typeof profileId === "string" && profileId.length > 5) {
      return posts.filter((post) => post.user_id === profileId);
    }
    return posts;
  };

  const filteredPosts = getFilteredPosts();

  const searchResults = filteredPosts.filter((post) => {
    const contentMatch = (post.content || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const authorMatch = (post.author_name || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return contentMatch || authorMatch;
  });

  return (
    <article className="flex flex-col gap-2 w-full p-3 ">
      <input
        type="text"
        placeholder="Search posts or authors..."
        onChange={handleSearch}
        value={searchTerm}
        className="w-full p-2 py-2 px-4 rounded-full border border-gray-300 shadow-md focus:ring-2 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-400"
      />
      {searchResults.map((post) => (
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