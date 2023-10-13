"use client";
import { useEffect, useState } from "react";
import {
  fetchAllPostsWithProfiles,
  fetchProfileById,
  fetchCurrentUser,
} from "@/lib/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SkeletonUi from "../profile/skeletonUi";
import Feed from "../home/Feed";

export default function ProfileComponent() {
  const [profile, setProfile] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUserId, setCurrentUserId] = useState(null); // Declare currentUserId here

  useEffect(() => {
    const profileId = window.location.pathname.substring(
      window.location.pathname.lastIndexOf("/") + 1
    );

    const fetchUserProfile = async () => {

      try {
        const currentUser = await fetchCurrentUser();
        setCurrentUserId(currentUser.id); // Set currentUserId here
        setProfile(currentUser);
        console.log("currentUserId: " + currentUser.id);
        console.log("currentUser......id: ", currentUserId);

        if (profileId === "1") {
          const getSingleProfile = await fetchProfileById(currentUser.id);
          setProfile(getSingleProfile);
          console.log("Profile", profile);
        } else {
          const getSingleProfile = await fetchProfileById(profileId);
          setProfile(getSingleProfile);
        }

        setIsLoading(false);
      } catch (err) {
        setIsError(err);
      }
    };
    fetchUserProfile();
  }, []);

  if (isLoading) {
    return (
      <div>
        <SkeletonUi />
      </div>
    );
  }

  if (isError) {
    return (
      <span>
        Error: There was a problem with the fetch operation: {isError?.message}
      </span>
    );
  }

  return (
    <>
      <div>
        {profile?.map((users) => (
          <Card key={users.user_id} className="max-">
            <CardHeader className="">
              <div className="CardComponents flex justify-center flex-row items-center ">
                <div className="flex  flex-col items-center px-6 justify-evenly ">
                  <div className="flex flex-col justify-center items-center gap-4">
                    <Avatar className="w-14 h-14 mt-4">
                      <AvatarImage
                        className="w-14 h-14"
                        src={users.meta.avatar_url}
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <div className="mt-3 text-lg">
                      <CardTitle className="m-4">Websites</CardTitle>
                    </div>
                  </div>

                  <div className="flex">
                    <ul className="flex p-2.5 gap-2">
                      <li className="cursor-pointer list-none p-4">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* Your SVG content */}
                        </svg>
                      </li>
                      <li className="cursor-pointer list-none p-4">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* Your SVG content */}
                        </svg>
                      </li>
                      <li className="cursor-pointer list-none p-4">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* Your SVG content */}
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="BioContainer flex flex-col  items-center">
                  <div className="flex flex-col my-1  px-6">
                    <h3 className="py-1.5 text-xl">Bio</h3>
                    <CardDescription className="py-1.5 text-base">
                      {users.meta.preferred_username}
                    </CardDescription>
                    <CardDescription className="py-1.5 text-base">
                      Front-End Dev
                    </CardDescription>
                    <CardDescription className="py-1.5 text-base">
                      OSLO CITY, OSLO
                    </CardDescription>
                    <div className="flex flex-row  gap-4 mt-6">
                      <div>
                        <button
                          name="follow"
                          className="border rounded-lg p-1 "
                        >
                          Follow
                        </button>
                      </div>
                      <div>
                        <button className="border rounded-lg p-1">
                          Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
      <Feed currentUserId={currentUserId} />
    </>
  );
}
