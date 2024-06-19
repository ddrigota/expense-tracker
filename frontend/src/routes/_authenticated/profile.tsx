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
        <CardTitle>Hello {data.user.given_name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <p>Email: {data.user.email}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button type="button">
          <a href="/api/logout">Logout</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
