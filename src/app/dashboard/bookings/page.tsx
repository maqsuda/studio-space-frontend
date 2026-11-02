import { CalendarCheck } from "lucide-react";
import { DashboardPlaceholder } from "@/components/dashboard/dashboard-placeholder";

export const metadata = {
  title: "My Bookings",
  description: "Your upcoming and past studio bookings.",
};

export default function MyBookingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-heading font-semibold tracking-tight">
          My Bookings
        </h1>
        <p className="mt-2 text-muted-foreground">
          Upcoming shoots and your booking history.
        </p>
      </div>

      <DashboardPlaceholder
        icon={CalendarCheck}
        title="No bookings yet"
        description="When you book a space it will show up here with the date, address, host details and receipt."
      />
    </div>
  );
}
