import Footer from "@/components/Footer";
import Navbar from "@/components/Header";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/sonner";
import { userQueryOptions } from "@/lib/api";
import { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  beforeLoad: async ({ context }) => {
    const queryClient = context.queryClient;
    try {
      const data = await queryClient.fetchQuery(userQueryOptions);
      return data;
    } catch (error) {
      return { user: null };
    }
  },
  component: Root,
});

function Root() {
  return (
    <>
      <div className="container flex min-h-dvh w-full flex-col">
        <Navbar />
        <Separator />
        <main className="container mt-6 max-w-2xl flex-1 p-2">
          <Outlet />
        </main>
        <Separator />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}
