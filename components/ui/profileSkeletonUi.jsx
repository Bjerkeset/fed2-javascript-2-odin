import { Skeleton } from "@/components/ui/skeleton"

export default function ProfileSkeletonUi() {
    return(
        <> <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[150px]" />
        </div>
      </div>
        </>
    );
}