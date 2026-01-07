import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

/**
 * Custom 404 page for better UX
 * Server Component - no client-side state needed
 */
export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="flex max-w-md flex-col items-center text-center">
        <div className="mb-6 rounded-full bg-[#7A6FB8]/20 p-4">
          <Search className="size-12 text-[#7A6FB8]" />
        </div>

        <h1 className="mb-2 text-6xl font-bold text-white">404</h1>

        <h2 className="mb-2 text-2xl font-bold text-white">
          Sidan hittades inte
        </h2>

        <p className="mb-8 text-white/70">
          Sidan du letar efter finns inte eller har flyttats.
        </p>

        <Button asChild className="rounded-xl bg-[#7A6FB8] px-6 py-3 font-semibold text-white hover:bg-[#7A6FB8]/80">
          <Link href="/">
            <Home className="mr-2 size-4" />
            Gå till startsidan
          </Link>
        </Button>
      </div>
    </div>
  );
}

