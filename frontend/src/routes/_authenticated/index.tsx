import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/")({
  component: Index,
});

async function getTotalSpent() {
  const result = await api.expenses["total-spent"].$get();
  if (!result.ok) {
    throw new Error("Failed to fetch total spent");
  }
  const data = await result.json();
  return data;
}

function Index() {
  const { isPending, error, data } = useQuery({
    queryKey: ["get-total-spent"],
    queryFn: getTotalSpent,
  });
  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Expenses</CardTitle>
            <CardDescription>Total expenses for the month</CardDescription>
          </CardHeader>
          <CardContent className="text-4xl font-bold">
            {isPending ? "..." : !data.total ? 0 : data.total}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Expenses</CardTitle>
            <CardDescription>Total expenses for the month</CardDescription>
          </CardHeader>
          <CardContent className="text-4xl font-bold">
            {isPending ? "..." : !data.total ? 0 : data.total}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Expenses</CardTitle>
            <CardDescription>Total expenses for the month</CardDescription>
          </CardHeader>
          <CardContent className="text-4xl font-bold">
            {isPending ? "..." : !data.total ? 0 : data.total}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Expenses</CardTitle>
            <CardDescription>Total expenses for the month</CardDescription>
          </CardHeader>
          <CardContent className="text-4xl font-bold">
            {isPending ? "..." : !data.total ? 0 : data.total}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
