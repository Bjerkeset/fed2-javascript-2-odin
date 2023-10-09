import * as React from "react";
import {useState, useEffect} from "react";
import {MoonIcon, SunIcon} from "@radix-ui/react-icons";
import {useTheme} from "next-themes";
import {Button} from "@/components/ui/button";
import {LoaderIcon} from "lucide-react";

export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme} = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="icon">
        <LoaderIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <>
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Switch to Light Mode</span>
        </>
      ) : (
        <>
          <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Switch to Dark Mode</span>
        </>
      )}
    </Button>
  );
}
