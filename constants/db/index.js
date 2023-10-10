// "use server";

export async function fetchAllPosts() {
  const SUPABASE_ENDPOINT =
    "https://meockkiebvkkepdfntbz.supabase.co/rest/v1/posts?select=*";
  const SUPABASE_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lb2Nra2llYnZra2VwZGZudGJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY1MDQ4MzksImV4cCI6MjAxMjA4MDgzOX0.32BPCcVYsN-4CooMXsIz40r3B0xwLBymqWUr2Gm2uBQ";
  try {
    const response = await fetch(SUPABASE_ENDPOINT, {
      method: "GET",
      headers: {
        apiKey: SUPABASE_KEY,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Fetched Data:", data);
    return data;
  } catch (error) {
    console.error(
      "There was a problem with the fetch operation:",
      error.message
    );
    return null;
  }
}

export async function fetchAllPostsWithProfiles() {
  const SUPABASE_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lb2Nra2llYnZra2VwZGZudGJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY1MDQ4MzksImV4cCI6MjAxMjA4MDgzOX0.32BPCcVYsN-4CooMXsIz40r3B0xwLBymqWUr2Gm2uBQ";
  const SUPABASE_ENDPOINT =
    "https://meockkiebvkkepdfntbz.supabase.co/rest/v1/posts?select=*,profiles(*)";

  try {
    const response = await fetch(SUPABASE_ENDPOINT, {
      method: "GET",
      headers: {
        apiKey: SUPABASE_KEY,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Fetched Posts with Profiles:", data);
    return data;
  } catch (error) {
    console.error(
      "There was a problem with the fetch operation:",
      error.message
    );
    return null;
  }
}
