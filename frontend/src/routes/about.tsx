import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About</CardTitle>
        <CardDescription>Made just for practice purposes.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p>
          This app allows you to manage and analyze your expenses. You have to
          be logged in.
        </p>
        <p></p>
        <p className="font-bold">Stack:</p>
        <p>
          Front: React, TypeScript, TailwindCSS, Tanstack (Form, Table, Router,
          Query),
        </p>
        <p>Back: Zod, Bun, Hono, Drizzle, Postgres, Kinde</p>{" "}
      </CardContent>
    </Card>
  );
}
