export const usersData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    image: "https://via.placeholder.com/150",
    tweets: [
      {
        tweetId: 101,
        content: "This is John's first tweet!",
        timestamp: "2023-10-06 10:30:00",
        likes: 10,
        retweets: 2,
      },
    ],
    friends: [2, 3],
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    image: "https://via.placeholder.com/150",
    tweets: [
      {
        tweetId: 201,
        content: "Jane's thoughts on a great book she read.",
        timestamp: "2023-10-05 18:00:00",
        likes: 8,
        retweets: 3,
      },
    ],
    friends: [1, 3],
  },
  {
    id: 3,
    name: "Bob Martin",
    email: "bob@example.com",
    image: "https://via.placeholder.com/150",
    tweets: [
      {
        tweetId: 301,
        content: "Bob sharing a great recipe he tried!",
        timestamp: "2023-10-04 12:45:00",
        likes: 15,
        retweets: 5,
      },
    ],
    friends: [1, 2],
  },
];
