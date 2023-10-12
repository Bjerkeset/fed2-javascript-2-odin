"use client";
import React from "react";
import {useEffect, useState} from "react";
// import {useAllUsers} from "@/lib/my-api";
// import UserContext from "@/lib/userContext";
import {Skeleton} from "@/components/ui/skeleton";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Card, CardContent} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {AiOutlineMessage} from "react-icons/ai";
import {CgProfile} from "react-icons/cg";
import {fetchAllProfiles} from "@/lib/db/index";
import Link from "next/link";

function ProfileList() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const users = await fetchAllProfiles();
        setUsers(users);
      } catch (err) {
        setError(err);
      }
    })();
  }, []);

  return (
    <section className="flex flex-col w-full items-center md:w-fit">
      <ScrollArea className="h-[500px] border-none sm:w-[250px] w-[290px] rounded-md flex flex-col  border ">
        {users?.map((user) => (
          <Card
            key={user.id}
            className="flex p-1 px-4 border-none rounded-md items-center"
          >
            <div className="w-full flex justify-between items-center text-center mb-auto">
              <div className="flex items-center gap-1">
                <Avatar className="bg-secondary h-8 w-8">
                  <AvatarImage src={user.meta.avatar_url} />
                </Avatar>
                <p className="text-sm">{user.meta.user_name}</p>
              </div>
              <div className="flex gap-2">
                <Button variant={"outline"} className=" h-8 rounded-full">
                  <AiOutlineMessage className="absolute" />
                </Button>
                <Link href={`/profile/${user.id}`}>
                  <Button className="rounded-full h-8">
                    <CgProfile className="absolute " />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </ScrollArea>
    </section>
  );
}

export default ProfileList;
