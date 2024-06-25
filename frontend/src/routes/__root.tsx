import { Toaster } from "@/components/ui/sonner";
import { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: Root,
});

function Navbar() {
  return (
    <div className="flex justify-between">
      <div className="m-auto p-2">
        <h1 className="text-2xl">DD Expense Tracker</h1>
      </div>
      <div className="m-auto flex justify-between gap-8 p-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link to="/expenses" className="[&.active]:font-bold">
          Expenses
        </Link>
        <Link to="/create-expense" className="[&.active]:font-bold">
          Add
        </Link>
        <Link to="/profile" className="[&.active]:font-bold">
          Profile
        </Link>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="m-auto flex h-12 w-full max-w-2xl items-center justify-center p-2">
      <div className="text-center text-xs">
        <p>
          Made with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by Dmitry Drigota
        </p>
      </div>
    </div>
  );
}

function Root() {
  return (
    <>
      <div className="container flex min-h-dvh w-full flex-col">
        <Navbar />
        <hr />
        <main className="container mt-6 max-w-2xl flex-1 p-2">
          <Outlet />
        </main>
        <hr />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}
