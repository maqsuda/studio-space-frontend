import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { footerColumns } from "@/lib/data";

const socials = [
  { label: "Instagram", href: "#", Icon: FaInstagram },
  { label: "X (Twitter)", href: "#", Icon: FaXTwitter },
  { label: "Facebook", href: "#", Icon: FaFacebookF },
  { label: "YouTube", href: "#", Icon: FaYoutube },
  { label: "LinkedIn", href: "#", Icon: FaLinkedinIn },
];

export async function Footer() {
  "use cache";
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-white shadow-xs ring-1 ring-border">
                <Image
                  src="/logo.png"
                  alt="StudioSpace logo"
                  width={26}
                  height={26}
                  className="size-6.5 object-contain"
                />
              </span>
              <span className="text-lg font-heading font-semibold tracking-tight">
                Studio<span className="text-violet-600">Space</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Book photo studios, podcast rooms, film sets and galleries by the
              hour — verified spaces, instant confirmation, fair prices.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex size-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-violet-600 hover:bg-violet-600 hover:text-white"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-semibold tracking-widest text-foreground uppercase">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-violet-700"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} StudioSpace. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built for photographers, podcasters, filmmakers &amp; teams.
          </p>
        </div>
      </div>
    </footer>
  );
}
