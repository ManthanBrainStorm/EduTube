import Link from "next/link";

import { Logo } from "@/components/shared/logo";
import { ROUTES } from "@/lib/constants";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-4">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[100px]" />

      <Link
        href={ROUTES.home}
        className="relative mb-8 transition-opacity hover:opacity-80"
      >
        <Logo />
      </Link>
      <div className="relative w-full max-w-md">{children}</div>
    </div>
  );
}
