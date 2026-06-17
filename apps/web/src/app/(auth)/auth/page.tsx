import { AuthShell } from "@/components/views/auth/auth-shell";
import { LoginForm } from "@/components/views/auth/login-form";

export default function AuthPage() {
  return (
    <AuthShell>
      <LoginForm />
    </AuthShell>
  );
}
