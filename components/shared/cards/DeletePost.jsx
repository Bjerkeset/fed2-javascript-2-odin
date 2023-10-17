import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {Trash2} from "lucide-react";
import {deleteMatchingRows} from "@/lib/db/index";
import {RefreshContext} from "@/lib/RefreshContext";
import {useContext} from "react";
import {useToast} from "@/components/ui/use-toast";

export default function DeletePost({postId}) {
  const {setRefreshKey} = useContext(RefreshContext);
  const {toast} = useToast();
  const handleDelete = async () => {
    try {
      await deleteMatchingRows(postId);
    } catch (error) {
      console.error(error);
    } finally {
      setRefreshKey((prevKey) => prevKey + 1);
      toast({
        title: "success",
        description: "Post deleted successfully",
      });
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="text-left px-1 hover:bg-destructive rounded py-2">
        Delete
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete this post?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your Post
            and remove all Post data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
