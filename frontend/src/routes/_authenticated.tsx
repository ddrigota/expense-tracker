import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Outlet,
  createFileRoute,
  useRouteContext,
} from "@tanstack/react-router";

const Login = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Please Login</CardTitle>
        <CardDescription>To see your expenses</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild>
          <a href="/api/login">Login</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

const Component = () => {
  const { user } = useRouteContext({ from: "__root__" });
  if (!user) {
    return <Login />;
  }
  return <Outlet />;
};

export const Route = createFileRoute("/_authenticated")({
  component: Component,
});
