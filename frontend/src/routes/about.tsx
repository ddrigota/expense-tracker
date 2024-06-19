import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="p-2">
      <p>This app allows you to manage and analyze your expenses</p>
    </div>
  );
}
