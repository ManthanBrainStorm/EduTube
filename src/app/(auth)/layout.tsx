import Link from "next/link";

import { APP_NAME } from "@/lib/constants";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/30 px-4">
      <Link
        href="/"
        className="mb-8 text-xl font-semibold transition-opacity hover:opacity-80"
      >
        {APP_NAME}
      </Link>
      {children}
    </div>
  );
}
