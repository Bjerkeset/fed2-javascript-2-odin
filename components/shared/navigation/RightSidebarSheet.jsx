import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {ArrowRightSquare} from "lucide-react";
import ProfileList from "../cards/ProfileList";

export default function RightSidebarSheet() {
  return (
    <Sheet>
      <SheetTrigger>
        <ArrowRightSquare />
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
