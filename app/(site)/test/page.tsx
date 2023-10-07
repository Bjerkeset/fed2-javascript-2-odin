"use client";
import {createClient} from "@supabase/supabase-js";
import {useEffect, useState} from "react";

function page() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl as any, supabaseKey as any);
  const [posts, setPosts] = useState([]);

  const makeNewPost = async () => {
    const {data, error} = await supabase
      .from("posts")
      .insert([{title: "titlevalue", content: "otherValue"}])
      .select();
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const {data: posts, error} = await supabase.from("posts").select();
        // setPosts(posts);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchPosts();
  }, []);

  // const {data: posts, error} = await supabase.from("posts").select();
  return <div>{JSON.stringify(posts, null, 2)}</div>;
}

export default page;
