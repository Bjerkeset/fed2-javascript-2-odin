import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export default function Comment() {
  return (
    <Card className="w-full border-none">
      <CardHeader className="flex flex-row items-center gap-3">
        <Avatar>
          <AvatarImage src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg" />
          <AvatarFallback>OD</AvatarFallback>
        </Avatar>
        <CardTitle>Username</CardTitle>
        <CardDescription className="ml-auto">2 hours ago</CardDescription>
      </CardHeader>
      <CardContent className="text-muted-foreground">dalsdlasld</CardContent>
    </Card>
  );
}
