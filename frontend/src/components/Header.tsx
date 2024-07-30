import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./Theme/ThemeToggle";
import { Button } from "./ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/create-expense", label: "Add New" },
  { to: "/expenses", label: "All Expenses" },
  { to: "/profile", label: "Profile" },
  { to: "/about", label: "About" },
];

function Navbar() {
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
              className="[&.active]:font-bold"
              aria-label={link.label}
            >
              {link.label}
            </Link>
          </Button>
        ))}
      </div>
      <ThemeToggle />
    </div>
  );
}

export default Navbar;
