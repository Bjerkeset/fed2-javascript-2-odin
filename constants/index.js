// My List
import {DashboardIcon, HomeIcon} from "@radix-ui/react-icons";
import {FilePlus2, LayoutDashboard, PlaneLanding, User} from "lucide-react";

export const sidebarLinks = [
  {
    Component: HomeIcon,
    route: "/",
    label: "Feed",
  },
  {
    Component: LayoutDashboard,
    route: "/dashboard",
    label: "Dashboard",
  },
  {
    Component: FilePlus2,
    route: "/create-contract",
    label: "Create Contract",
  },
  {
    Component: User,
    route: "/profile",
    label: "Profile",
  },
  {
    Component: PlaneLanding,
    route: "/welcome",
    label: "Landing page",
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
