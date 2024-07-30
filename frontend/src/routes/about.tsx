import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="container mx-auto w-full">
      <h1 className="mb-6 text-4xl font-bold">About</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold">
            Made just for practice purposes.
          </h2>
          <p className="text-muted-foreground">
            This app allows you to manage and analyze your expenses. You have to
            be logged in.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-bold">Stack</h2>
          <ul className="space-y-2">
            <li>
              <h3 className="text-lg font-medium">Frontend</h3>
              <p className="text-muted-foreground">
                React, TypeScript, TailwindCSS, Tanstack (Form, Table, Router,
                Query)
              </p>
            </li>
            <li>
              <h3 className="text-lg font-medium">Backend</h3>
              <p className="text-muted-foreground">
                Zod, Bun, Hono, Drizzle, Postgres, Kinde
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
