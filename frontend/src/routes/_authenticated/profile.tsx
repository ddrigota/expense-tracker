import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { userQueryOptions } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/profile")({
  component: Profile,
});

function Profile() {
  const { isPending, error, data } = useQuery(userQueryOptions);

  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Avatar>
            {data.user.picture && (
              <AvatarImage
                // src={data.user.picture.toString()}
                alt={data.user.given_name}
              />
            )}
            <AvatarFallback className="text-sm">{`${data.user.given_name[0]}${data.user.family_name[0]}`}</AvatarFallback>
          </Avatar>
          {`${data.user.given_name} ${data.user.family_name}`}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <p>Email: {data.user.email}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <a href="/api/logout">Logout</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
