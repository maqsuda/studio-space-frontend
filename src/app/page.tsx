import { Banner } from "@/components/home/banner";
import { Categories } from "@/components/home/categories";
import { FeaturedStudios } from "@/components/home/featured-studios";
import { HowBookingWorks } from "@/components/home/how-booking-works";
import { HostGuarantee } from "@/components/home/host-guarantee";

export default function Home() {
  return (
    <>
      <Banner />
      <FeaturedStudios />
      <Categories />
      <HowBookingWorks />
      <HostGuarantee />
    </>
  );
}
