"use client";
import React from "react";
// import {useAllUsers} from "@/lib/my-api";
// import UserContext from "@/lib/userContext";
import {Skeleton} from "@/components/ui/skeleton";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Card, CardContent} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {AiOutlineMessage} from "react-icons/ai";
import {CgProfile} from "react-icons/cg";

function ProfileList() {
  //   const {status, error, data: userData = {users: []}} = useAllUsers(); // default value for postData is an empty array

  //   if (status === "loading") {
  //     return (
  //       <div className="w-full max-w-xl mt-12 flex flex-col gap-4 ">
  //         <Skeleton className="w-96 h-72" />
  //       </div>
  //     );
  //   }

  //   if (error) {
  //     return <span>Error: {error.message}</span>;
  //   }

  const userData = {
    users: [
      {
        id: 1,
        image:
          "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg",
        username: "Username1",
      },
      {
        id: 2,
        image: "https://link-to-another-image.jpg",
        username: "Username2",
      },
      // ... Add more users if needed
    ],
  };

  return (
    <section className="flex flex-col w-full items-center md:w-fit">
      <ScrollArea className="h-[500px] border-none sm:w-[250px] w-[290px] rounded-md flex flex-col  border ">
        {userData?.users?.map((user) => (
          <Card
            key={user.id}
            className="flex p-1 px-4 border-none rounded-md items-center"
          >
            <div className="w-full flex justify-between items-center text-center mb-auto">
              <div className="flex items-center gap-1">
                <Avatar className="bg-secondary h-8 w-8">
                  <AvatarImage src={user.image} />
                </Avatar>
                <p className="text-sm">{user.username}</p>
              </div>
              <div className="flex gap-2">
                <Button variant={"outline"} className=" h-8 rounded-full">
                  <AiOutlineMessage className="absolute" />
                </Button>
                <Button className="rounded-full h-8">
                  <CgProfile className="absolute " />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </ScrollArea>
    </section>
  );
}

export default ProfileList;
