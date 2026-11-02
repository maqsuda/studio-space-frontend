import { AuthGuard } from "@/components/auth/auth-guard";
import { DashboardNav } from "@/components/dashboard/dashboard-nav";

export default function DashboardLayout(props: LayoutProps<"/dashboard">) {
  return (
    <AuthGuard>
      <div className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <DashboardNav />
        <div className="mt-8">{props.children}</div>
      </div>
    </AuthGuard>
  );
}
