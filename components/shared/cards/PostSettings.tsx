"use client";

import * as React from "react";
import {DropdownMenuCheckboxItemProps} from "@radix-ui/react-dropdown-menu";
import {Button} from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {Settings} from "lucide-react";
import UpdatePost from "./UpdatePost";
import DeletePost from "./DeletePost";

// type Checked = DropdownMenuCheckboxItemProps["checked"]
type UpdatePostProps = {
  postId: string | number;
  currentContent: string;
};

export default function PostSettings({
  postId,
  currentContent,
}: UpdatePostProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="">
          {<Settings className="w-4 h-4" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col ml-auto p-1">
        <DropdownMenuLabel>Setting</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <UpdatePost postId={postId} currentContent={currentContent} />
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="hover:bg-destructive">
          <DeletePost postId={postId} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
