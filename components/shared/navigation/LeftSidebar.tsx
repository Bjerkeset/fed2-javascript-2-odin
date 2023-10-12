"use client";
import {sidebarLinks} from "@/constants";
import Link from "next/link";
import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import RightSidebarSheet from "./RightSidebarSheet";

function LeftSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          const IconComponent = link.Component;

          return (
            <Link key={link.label} href={link.route}>
              <div
                className={`leftsidebar_link ${
                  isActive && `bg-secondary`
                } cursor-pointer flex items-center gap-4`}
              >
                <IconComponent className="text-primary self-center w-5 h-5" />
                <p className="text-foreground max-lg:hidden">{link.label}</p>
              </div>
            </Link>
          );
        })}
        <RightSidebarSheet />
      </div>
      <div className="mt-10 px-6">
        <p>TODO: Replace me</p>
        <Button>
          <div className="flex cursor-pointer gap-4 p-4">
            {/* <Image
              src="/assets/logout.svg"
              alt="logout"
              width={24}
              height={24}
            /> */}
            <p className="text-light-2 max-lg-hidden">Logout</p>
          </div>
        </Button>
      </div>
    </section>
  );
}

export default LeftSidebar;
