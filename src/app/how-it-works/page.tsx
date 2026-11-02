import Link from "next/link";
import { ArrowRight, CircleCheck, Handshake } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { HowBookingWorks } from "@/components/home/how-booking-works";
import { buttonVariants } from "@/components/ui/button";

const faqs = [
  {
    question: "How far in advance should I book?",
    answer: "Most hosts confirm instantly, but popular weekend slots go fast — 3 to 7 days ahead is a safe bet for big shoots.",
  },
  {
    question: "Can I cancel or reschedule?",
    answer: "Yes. Cancel up to 48 hours before your slot for a full refund, and reschedule from your booking page at no extra cost.",
  },
  {
    question: "Are utilities and gear included?",
    answer: "Every listing spells out what is included — power, Wi-Fi, backdrops and lighting are standard, while pro gear can be added at checkout.",
  },
  {
    question: "When does the host get paid?",
    answer: "Payouts are released 24 hours after the session ends and typically arrive within 1–2 business days.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="A booking flow that respects your shoot day"
        description="Search, compare, book and create — four steps, zero phone calls, with support standing by the whole way."
      />

      <HowBookingWorks />

      <section className="border-y border-border bg-muted/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="For hosts"
            title="List your space, earn on your schedule"
            description="Turn an idle studio into steady income while keeping full control of your calendar."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Publish in minutes",
                description:
                  "Add photos, amenities and hourly pricing. Our team reviews new listings within a day.",
              },
              {
                title: "Stay in control",
                description:
                  "Set availability, minimum hours and house rules. Approve requests or enable instant book.",
              },
              {
                title: "Get paid securely",
                description:
                  "Card details are verified up front and payouts land in your account after every session.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <Handshake aria-hidden className="size-5" />
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/about"
              className={buttonVariants({
                size: "lg",
                className:
                  "h-11 bg-violet-600 px-6 text-white shadow-lg shadow-violet-600/25 hover:bg-violet-700",
              })}
            >
              Become a host
              <ArrowRight aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Good to know"
          title="Frequently asked questions"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="flex items-start gap-2 font-heading text-base font-semibold">
                <CircleCheck
                  aria-hidden
                  className="mt-0.5 size-4 shrink-0 text-violet-600"
                />
                {faq.question}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
