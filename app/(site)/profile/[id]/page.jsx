"use client";
import {useEffect, useState} from "react";
import TestProfileComponent from "@/components/pages/profile/TestProfileComponent";
import SkeletonUi from "../../../../components/pages/profile/skeletonUi";
import {fetchCurrentUser} from "@/lib/db";
import {useContext} from "react";
import {
  RefreshProvider,
  refreshKey,
  RefreshContext,
} from "@/lib/RefreshContext";

export default function Page() {
  const {refreshKey, setRefreshKey} = useContext(RefreshContext);

  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [getCurrentUser, setGetCurrentUser] = useState(); // Changed the initial state to an empty array

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const currentUserData = await fetchCurrentUser();
        setGetCurrentUser(currentUserData);
      } catch (err) {
        setIsError(err);
      } finally {
        setIsLoading(false);
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
      <div>
        <span>{isError?.message}</span>
      </div>
    );
  }

  return (
    <>
      <RefreshProvider>
        <div>
          <TestProfileComponent />
          <h1>Profile Page</h1>
          {getCurrentUser && (
            <div>
              <p>Name: {getCurrentUser.identities[0].identity_data.name}</p>
              <p>Email: {getCurrentUser.email}</p>
            </div>
          )}
        </div>
      </RefreshProvider>
    </>
  );
}
