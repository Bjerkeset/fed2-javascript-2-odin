"use client";
import React, { useState } from "react";
import { usersData } from "../../../constants/mockdata";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TestProfileComponent() {
  return (
    <div className="w-screen">
      {/* {usersData.map((user) => (
        <Card key={user.id}>
          <CardHeader>
            <CardTitle>{user.name}</CardTitle>
            <CardDescription>Email: {user.email}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>User ID: {user.id}</p>
            <img src={user.image} alt={user.name} />
            <h3>Tweets:</h3>
            <ul>
              {user.tweets.map((tweet) => (
                <li key={tweet.tweetId}>
                  <p>{tweet.content}</p>
                  <p>Likes: {tweet.likes}</p>
                  <p>Retweets: {tweet.retweets}</p>
                </li>
              ))}
            </ul>
            <h3>Friends:</h3>
            <ul>
              {user.friends.map((friendId) => (
                <li key={friendId}>Friend ID: {friendId}</li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      ))} */}

      {/* {usersData.map((users) => (
        <Card key={users.id} className="max-">
          <CardHeader className="">
            <div className="CardComponents flex justify-center flex-row items-center ">
              <div className="flex  flex-col items-center px-6 justify-evenly ">
                <div className="flex flex-col justify-center items-center gap-4">
                  <Avatar className="">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <div className="">
                    <CardTitle className="">Websites</CardTitle>
                  </div>
                </div>

                <div className="flex">
                  <ul className="flex p-2.5 gap-5">
                    <li className="list-none p-4">222</li>
                    <li className="list-none p-4">222</li>
                    <li className="list-none p-4">222</li>
                  </ul>
                </div>
              </div>

              <div className="BioContainer flex flex-col  items-center">
                <div className="flex flex-col my-1  px-6">
                  <h3 className="py-1.5">Bio</h3>
                  <CardDescription className="py-1.5">
                    {users.name}
                  </CardDescription>
                  <CardDescription className="py-1.5">
                    Front-End Dev
                  </CardDescription>
                  <CardDescription className="py-1.5">
                    OSLO CITY, OSLO
                  </CardDescription>
                </div>

                <div className="flex flex-row m-2 gap-4 ">
                  <div>
                    <button
                      name="follow"
                      className="border rounded-lg p-1 ml-1"
                    >
                      Follow
                    </button>
                  </div>
                  <div>
                    <button className="border rounded-lg p-1">Message</button>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      ))} */}

      <div className="border p-6 rounded w-96 !container">
        <main className="flex gap-6 w-full">
          {/* firstGroup */}
          <div className="flex flex-col justify-center items-center gap-4">
            <Avatar className="">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="websites flex flex-col justify-center items-center gap-4">
              <h3>Websites</h3>

              <ul className="list-none flex gap-6">
                <li>222</li>
                <li>222</li>
                <li>222</li>
              </ul>
            </div>
          </div>
          {/* firstGroup  */}

          {/* secondGroup  */}

          <div className="flex flex-col ">
            <h3 className="pt-2.5"> Bio</h3>
            <section className=" flex flex-col text-sm gap-2 py-4">
              <p>John Doe</p>
              <p>Front-end Dev</p>
              <p>OSLO CITY, OSLO</p>
            </section>

            <div className="">
              <button className="p-6">Follow</button>
              <button className="p-6">Message</button>
            </div>
          </div>

          {/* secondGroup  */}
        </main>
      </div>
    </div>
  );
}
