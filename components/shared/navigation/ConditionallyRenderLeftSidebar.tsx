"use client";
import {usePathname, useRouter} from "next/navigation";
import LeftSidebar from "./LeftSidebar";

export default function ConditionallyRenderLeftSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <>
      {/* Conditionally render LeftSidebar */}
      {pathname !== "/welcome" && <LeftSidebar />}
    </>
  );
}
