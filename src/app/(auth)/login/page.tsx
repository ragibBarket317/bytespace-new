import type { Metadata } from "next";
import { AuthLayout } from "@/components/sections/auth/auth-layout";
import { LoginForm } from "@/components/sections/auth/login-form";

export const metadata: Metadata = { title: "Login" };

// Figma: Login.png
export default function LoginPage() {
  return (
    <AuthLayout
      title="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <LoginForm />
    </AuthLayout>
  );
}
