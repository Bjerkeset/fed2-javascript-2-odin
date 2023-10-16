"use client";

import React, { useEffect, useState } from "react";
import { fetchAllPostsWithProfiles, fetchCurrentUser } from "@/lib/db/index";
import Post from "@/components/shared/cards/Post";
import SkeletonUi from "../profile/skeletonUi";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

export default function Feed({ profileId, currentUserId }) {
  const { toast } = useToast();
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [oldestToNewest, setOldestToNewest] = useState(false);

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

  const toggleSortOrder = () => {
    setOldestToNewest(!oldestToNewest);
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

  const sortedPosts = oldestToNewest
    ? [...filteredPosts].sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
      )
    : filteredPosts;

  const searchResults = sortedPosts.filter((post) => {
    const contentMatch = (post.content || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const authorMatch = post.profiles.meta.user_name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return contentMatch || authorMatch;
  });

  return (
    <article className="flex flex-col gap-2 w-full p-3">
      <div className="flex items-center justify-between">
        <input
          type="text"
          placeholder="Search posts or authors..."
          onChange={handleSearch}
          value={searchTerm}
          className="w-full p-2 py-2 px-4 rounded-full border border-gray-300 shadow-md focus:ring-2 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-400"
        />
      </div>
      <div className="flex items-center m-2">
        <input
          type="checkbox"
          id="oldestToNewestCheckbox"
          className="hidden"
          checked={oldestToNewest}
          onChange={toggleSortOrder}
        />
        <label
          htmlFor="oldestToNewestCheckbox"
          className="flex items-center cursor-pointer"
        >
          <span className="mr-2">Oldest to Newest Posts</span>
          <div className="w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center">
            {oldestToNewest && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
        </label>
      </div>
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
