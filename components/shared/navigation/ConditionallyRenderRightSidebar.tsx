"use client";
import {usePathname, useRouter} from "next/navigation";
import RightSidebar from "./RightSidebar";

export default function ConditionallyRenderRightSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <>
      {/* Conditionally render LeftSidebar */}
      {pathname !== "/welcome" && <RightSidebar />}
    </>
  );
}
