// My List
import {HomeIcon} from "@radix-ui/react-icons";
import {User} from "lucide-react";

export const sidebarLinks = [
  {
    Component: HomeIcon,
    route: "/",
    label: "Feed",
  },
  {
    Component: User,
    route: "/profile/1",
    label: "Profile",
  },
];

export const profileTabs = [
  {value: "threads", label: "Threads", icon: "/assets/reply.svg"},
  {value: "replies", label: "Replies", icon: "/assets/members.svg"},
  {value: "tagged", label: "Tagged", icon: "/assets/tag.svg"},
];

export const communityTabs = [
  {value: "threads", label: "Threads", icon: "/assets/reply.svg"},
  {value: "members", label: "Members", icon: "/assets/members.svg"},
  {value: "requests", label: "Requests", icon: "/assets/request.svg"},
];
