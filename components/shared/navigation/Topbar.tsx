"use client";
import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {
  DashboardIcon,
  DiscordLogoIcon,
  FaceIcon,
  ImageIcon,
  SunIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import {ModeToggle} from "@/components/ui/ModeToggle";

function Topbar() {
  const githubUrl = "https://github.com/Bjerkeset/fed2-javascript-2-odin";
  const discordUrl = "https://discord.com";

  return (
    <nav className="topbar">
      {/* Left side logo*/}
      <Link href="/" className="flex items-center gap-4">
        <Image src="/favicon.ico" alt="logo" width={80} height={80} />
      </Link>
      {/* Right side links and Mode Toggle */}
      <div className="flex items-center gap-1">
        <Link href={githubUrl} rel="noopener noreferrer" target="_blank">
          <Button variant="ghost" size="icon">
            <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </Link>
        {/* <Link
          href={discordUrl}
          rel="noopener noreferrer"
          target="_blank"
          className=""
        >
          <Button variant="ghost" size="icon">
            <DiscordLogoIcon className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </Link> */}
        <ModeToggle />
      </div>
    </nav>
  );
}

export default Topbar;
