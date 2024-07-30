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
    <div className="flex items-center justify-center">
      <Card className="min-w-96">
        <CardHeader>
          <CardTitle>Please Login</CardTitle>
          <CardDescription>To see your expenses</CardDescription>
        </CardHeader>

        <CardFooter>
          <Button asChild className="w-full">
            <a href="/api/login">Login</a>
          </Button>
        </CardFooter>
      </Card>
    </div>
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
