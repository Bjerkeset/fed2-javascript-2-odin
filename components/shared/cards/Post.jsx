"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Comment from "@/components/shared/cards/Comment";
import {MessageSquarePlus, Heart, Eye} from "lucide-react";
import {useEffect} from "react";
import {fetchAllPosts, fetchAllPostsWithProfiles} from "@/constants/db/index";
import {useState} from "react";

export default function Post() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllPostsWithProfiles()
      .then((data) => setPosts(data))
      .catch((err) => setError(err));
  }, []);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-3">
        <Avatar>
          <AvatarImage src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg" />
          <AvatarFallback>OD</AvatarFallback>
        </Avatar>
        <CardTitle>Username</CardTitle>
        <CardDescription className="ml-auto">2 hours ago</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          asperiores nam quas quo praesentium harum fugit quos accusantium
          consequuntur saepe quae vero, impedit facilis ea!
        </p>
      </CardContent>
      <CardFooter className="flex flex-col">
        <p className="flex flex-row justify-around w-2/3 text-muted-foreground">
          <MessageSquarePlus className="post-card_icon" />
          <Heart className="post-card_icon" />
          <Eye className=" post-card_icon" />
        </p>
        {/* Comment Component */}
        {/* <Comment /> */}
      </CardFooter>
    </Card>
  );
}
