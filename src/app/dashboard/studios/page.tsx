import { Building2 } from "lucide-react";
import { DashboardPlaceholder } from "@/components/dashboard/dashboard-placeholder";

export const metadata = {
  title: "My Studio Listings",
  description: "Manage the studios you host on StudioSpace.",
};

export default function MyStudiosPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-heading font-semibold tracking-tight">
          My Studio Listings
        </h1>
        <p className="mt-2 text-muted-foreground">
          Every space you host, in one place.
        </p>
      </div>

      <DashboardPlaceholder
        icon={Building2}
        title="Your listings will appear here"
        description="Once you publish a studio, you will be able to edit its photos, pricing, amenities and availability from this page."
      />
    </div>
  );
}
