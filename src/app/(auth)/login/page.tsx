import type { Metadata } from "next";

import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = {
  title: "Log In",
  description: "Sign in to your EduTube account.",
};

export default function LoginPage() {
  return <LoginForm />;
}
