"use client";
import { useEffect, useState } from "react";
import {fetchAllPostsWithProfiles, fetchProfileById } from "@/constants/db/index";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfileComponent() {
  const [profile, setProfile] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profileId = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
        const getSingleProfile = await fetchProfileById(profileId);
        console.log("ProfileId: " + profileId);
        console.log("testing", getSingleProfile);
        setProfile(getSingleProfile); // Update profile state
      } catch (err) {
        setError(err);
      }
    };
    fetchUserProfile(); // Call the async function
  }, []);
  

  return (
    <>
      <div>
      {profile?.map((users) => (
          <Card key={users.user_id} className="max-">
            <CardHeader className="">
              <div className="CardComponents flex justify-center flex-row items-center ">
                <div className="flex  flex-col items-center px-6 justify-evenly ">
                  <div className="flex flex-col justify-center items-center gap-4">
                    <Avatar className="">
                      <AvatarImage src={users.meta.avatar_url} />
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
                      {users.meta.preferred_username}
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
        ))}
      </div>
    </>
  );
}
