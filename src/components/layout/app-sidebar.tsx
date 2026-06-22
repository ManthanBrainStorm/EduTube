"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Library, Plus } from "lucide-react";

import { Logo } from "@/components/shared/logo";
import { cn } from "@/lib/utils";

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-full w-[240px] shrink-0 flex-col border-r border-border/40 bg-card/30 lg:flex">
      <div className="flex h-14 items-center border-b border-border/40 px-5">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div className="flex-1 p-3">
        <Link
          href="/dashboard"
          className={cn(
            "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
            pathname.startsWith("/dashboard") || pathname.startsWith("/courses")
              ? "bg-secondary text-foreground"
              : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
          )}
        >
          <Library className="h-4 w-4" />
          My Library
        </Link>
      </div>

      <div className="border-t border-border/40 p-3">
        <button
          type="button"
          className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground"
        >
          <Plus className="h-4 w-4" />
          Import Playlist
        </button>
      </div>
    </aside>
  );
}
