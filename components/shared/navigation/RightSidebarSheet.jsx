import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {Users} from "lucide-react";
import ProfileList from "../cards/ProfileList";

export default function RightSidebarSheet() {
  return (
    <Sheet>
      <SheetTrigger className="bottombar_link hidden max-md:flex">
        <Users className="text-primary self-center w-5 h-5" />
        <p className="text-subtle-medium text-light-1 max-sm:hidden">
          {/* Only display the first word */}
          {"people".split(/\s+/)[0]}
        </p>
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center">
        <SheetHeader>
          <SheetTitle>Friend List</SheetTitle>
          <SheetDescription>
            <ProfileList />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
