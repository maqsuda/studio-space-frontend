import Image from "next/image";
import { LoginForm } from "@/components/auth/login-form";

export const metadata = {
  title: "Log in",
  description: "Log in to your StudioSpace account.",
};

export default function LoginPage() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-4 py-16 sm:px-6">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <div className="flex flex-col items-center text-center">
          <span className="flex size-12 items-center justify-center rounded-xl bg-white shadow-xs ring-1 ring-border">
            <Image
              src="/logo.png"
              alt="StudioSpace logo"
              width={30}
              height={30}
              className="size-7 object-contain"
            />
          </span>
          <h1 className="mt-5 font-heading text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Log in to manage your studios and bookings.
          </p>
        </div>

        <div className="mt-7">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
