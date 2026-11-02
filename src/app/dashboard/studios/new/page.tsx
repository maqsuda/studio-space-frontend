import { PlusCircle } from "lucide-react";
import { DashboardPlaceholder } from "@/components/dashboard/dashboard-placeholder";

export const metadata = {
  title: "Add New Studio",
  description: "Publish a new studio space on StudioSpace.",
};

export default function AddStudioPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-heading font-semibold tracking-tight">
          Add New Studio
        </h1>
        <p className="mt-2 text-muted-foreground">
          List a photo studio, podcast room, film set or gallery by the hour.
        </p>
      </div>

      <DashboardPlaceholder
        icon={PlusCircle}
        title="The listing form is on its way"
        description="This page will walk you through photos, pricing, house rules and availability, then submit your space for review."
      />
    </div>
  );
}
