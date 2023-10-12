// "use server";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lb2Nra2llYnZra2VwZGZudGJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY1MDQ4MzksImV4cCI6MjAxMjA4MDgzOX0.32BPCcVYsN-4CooMXsIz40r3B0xwLBymqWUr2Gm2uBQ";

export async function fetchAllPosts() {
  const SUPABASE_ENDPOINT =
    "https://meockkiebvkkepdfntbz.supabase.co/rest/v1/posts?select=*";
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
    "https://meockkiebvkkepdfntbz.supabase.co/rest/v1/posts?select=*,profiles(meta)";

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

export async function fetchAllProfiles() {
  const SUPABASE_ENDPOINT =
    "https://meockkiebvkkepdfntbz.supabase.co/rest/v1/profiles?select=*";
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

export async function fetchProfileById(profileId) {
  const SUPABASE_ENDPOINT = `https://meockkiebvkkepdfntbz.supabase.co/rest/v1/profiles?id=eq.${profileId}`;

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
    console.log(`Fetched Profile by ID ${profileId}:`, data);
    return data;
  } catch (error) {
    console.error(
      "There was a problem with the fetch operation:",
      error.message
    );
    return null;
  }
}

export async function insertNewPostInDB(user_id, contentValue) {
  const SUPABASE_ENDPOINT =
    "https://meockkiebvkkepdfntbz.supabase.co/rest/v1/posts";

  try {
    const response = await fetch(SUPABASE_ENDPOINT, {
      method: "POST",
      headers: {
        apiKey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        // title: titleValue,
        user_id: user_id,
        content: contentValue,
      }),
    });

    if (!response.ok) {
      const responseBody = await response.json();
      console.error("Server response:", responseBody);
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    console.log("insertNewPostInDB>>>", response);
    return true;
  } catch (error) {
    console.error(
      "There was a problem with the insert operation:",
      error.message
    );
    return false;
  }
}

// export async function fetchCurrentUser(token) {
//   const SUPABASE_ENDPOINT =
//     "https://meockkiebvkkepdfntbz.supabase.co/auth/v1/user";

//   try {
//     const response = await fetch(SUPABASE_ENDPOINT, {
//       method: "GET",
//       headers: {
//         apikey: SUPABASE_KEY,
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//     console.log("fetchCurrentUser>>>", data);
//     return data;
//   } catch (error) {
//     console.error(
//       "There was a problem fetching the current user:",
//       error.message
//     );
//     return null;
//   }
// }

export async function fetchCurrentUser() {
  const SUPABASE_ENDPOINT =
    "https://meockkiebvkkepdfntbz.supabase.co/auth/v1/user";

  // Retrieve the token from localStorage
  const sessionToken = JSON.parse(
    localStorage.getItem("supabase.auth.token") || "{}"
  );

  // Check if the token exists
  if (!sessionToken) {
    console.error("Token not found in local storage.");
    return null;
  }

  try {
    const response = await fetch(SUPABASE_ENDPOINT, {
      method: "GET",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${sessionToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("fetchCurrentUser>>>", data);
    return data;
  } catch (error) {
    console.error(
      "There was a problem fetching the current user:",
      error.message
    );
    return null;
  }
}

export async function deleteMatchingRows(postId) {
  console.log("Attempting to delete post with ID:", postId);

  const SUPABASE_ENDPOINT =
    "https://meockkiebvkkepdfntbz.supabase.co/rest/v1/posts";
  const url = `${SUPABASE_ENDPOINT}?id=eq.${postId}`;
  console.log("URL:", url);

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
    });

    if (!response.ok) {
      const responseBody = await response.json();
      console.error("Server response:", responseBody);
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    console.log(`Rows with id=${postId} have been deleted.`);

    return true;
  } catch (error) {
    console.error(
      "There was a problem with the delete operation:",
      error.message
    );
    return false;
  }
}

export async function updateMatchingRows(postId, updatedContent) {
  console.log("Attempting to update post with ID:", postId);

  const SUPABASE_ENDPOINT =
    "https://meockkiebvkkepdfntbz.supabase.co/rest/v1/posts";
  const url = `${SUPABASE_ENDPOINT}?id=eq.${postId}`;
  console.log("URL:", url);

  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
      body: JSON.stringify({
        content: updatedContent,
      }),
    });

    if (!response.ok) {
      const responseBody = await response.json();
      console.error("Server response:", responseBody);
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    console.log(`Post with id=${postId} has been updated.`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      "There was a problem with the update operation:",
      error.message
    );
    return null;
  }
}

// export async function fetchPostById(postId) {
//   const SUPABASE_ENDPOINT = `https://meockkiebvkkepdfntbz.supabase.co/rest/v1/posts?id=eq.${postId}&select=*`;

//   try {
//     const response = await fetch(SUPABASE_ENDPOINT, {
//       method: "GET",
//       headers: {
//         apiKey: SUPABASE_KEY,
//         Range: "0-100",
//       },
//     });

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     const data = await response.json();
//     console.log(`Fetched Post by ID ${postId}:`, data);
//     return data;
//   } catch (error) {
//     console.error(
//       "There was a problem with the fetch operation:",
//       error.message
//     );
//     return null;
//   }
// }
