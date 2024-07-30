import { Link, useRouteContext } from "@tanstack/react-router";
import { ThemeToggle } from "./Theme/ThemeToggle";
import { Button } from "./ui/button";
import { UserMenu } from "./UserMenu";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/create-expense", label: "Add New" },
  { to: "/expenses", label: "All Expenses" },
  { to: "/about", label: "About" },
];

function Navbar() {
  const { user } = useRouteContext({ from: "__root__" });

  return (
    <div className="flex items-center justify-between px-4 py-2">
      <div className="p-2">
        <h1 className="text-2xl" aria-hidden={true}>
          LOGO
        </h1>
      </div>
      <div className="m-auto flex justify-between gap-8 p-2">
        {navLinks.map((link) => (
          <Button key={link.to} asChild variant={"ghost"}>
            <Link
              to={link.to}
              className="[&.active]:text-primary"
              aria-label={link.label}
            >
              {link.label}
            </Link>
          </Button>
        ))}
      </div>
      <div className="flex gap-2">
        {user ? (
          <UserMenu />
        ) : (
          <Button asChild variant={"default"}>
            <a href="/api/login">Login</a>
          </Button>
        )}
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Navbar;
