import {
  Aperture,
  Building2,
  CalendarCheck,
  Camera,
  Clapperboard,
  Guitar,
  LayoutDashboard,
  Mic,
  Palette,
  PlusCircle,
  Presentation,
  Speaker,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Explore Space", href: "/explore" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About Us", href: "/about" },
];

export type AccountMenuItem = NavItem & {
  icon: LucideIcon;
};

/** Links shown in the signed-in user menu of the navbar. */
export const accountMenuItems: AccountMenuItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Add New Studio", href: "/dashboard/studios/new", icon: PlusCircle },
  { label: "My Studio Listings", href: "/dashboard/studios", icon: Building2 },
  { label: "My Bookings", href: "/dashboard/bookings", icon: CalendarCheck },
];

/**
 * Active state for account menu links. `/dashboard` owns the whole section,
 * the other routes only highlight on an exact match so
 * `/dashboard/studios/new` does not light up "My Studio Listings" as well.
 */
export function isAccountItemActive(pathname: string, href: string) {
  if (href === "/dashboard") {
    return pathname === "/dashboard" || pathname.startsWith("/dashboard/");
  }
  return pathname === href;
}

export type Studio = {
  id: string;
  name: string;
  location: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  tags: string[];
  image: string;
  icon: LucideIcon;
  instantBook: boolean;
};

export const studios: Studio[] = [
  {
    id: "loft-photo-studio",
    name: "The Loft Photo Studio",
    location: "Banani, Dhaka",
    category: "Photo Studio",
    price: 45,
    rating: 4.9,
    reviews: 128,
    tags: ["Cyclorama", "Wi-Fi", "Parking"],
    image: "from-violet-500 via-indigo-500 to-sky-400",
    icon: Camera,
    instantBook: true,
  },
  {
    id: "neon-nights-set",
    name: "Neon Nights Film Set",
    location: "Panchlaish, Chattogram",
    category: "Film Set",
    price: 60,
    rating: 4.8,
    reviews: 96,
    tags: ["LED wall", "Blackout", "4K cameras"],
    image: "from-fuchsia-500 via-pink-500 to-rose-400",
    icon: Clapperboard,
    instantBook: false,
  },
  {
    id: "echo-podcast-room",
    name: "Echo Podcast Room",
    location: "Gulshan, Dhaka",
    category: "Podcast Room",
    price: 30,
    rating: 5,
    reviews: 74,
    tags: ["4 mics", "Acoustic panels", "Live stream"],
    image: "from-teal-400 via-emerald-500 to-green-500",
    icon: Mic,
    instantBook: true,
  },
  {
    id: "velvet-recording-booth",
    name: "Velvet Recording Booth",
    location: "Zindabazar, Sylhet",
    category: "Music Studio",
    price: 55,
    rating: 4.7,
    reviews: 61,
    tags: ["Isolation booth", "Engineer add-on", "Monitor mix"],
    image: "from-amber-400 via-orange-500 to-red-400",
    icon: Guitar,
    instantBook: false,
  },
  {
    id: "sunlit-gallery-hall",
    name: "Sunlit Gallery Hall",
    location: "Dhanmondi, Dhaka",
    category: "Art Gallery",
    price: 40,
    rating: 4.9,
    reviews: 52,
    tags: ["Daylight", "200 m²", "Event ready"],
    image: "from-sky-400 via-blue-500 to-indigo-600",
    icon: Palette,
    instantBook: true,
  },
  {
    id: "the-white-box",
    name: "The White Box Studio",
    location: "Khalishpur, Khulna",
    category: "Photo Studio",
    price: 35,
    rating: 4.8,
    reviews: 87,
    tags: ["Infinity wall", "Props included", "Gear rental"],
    image: "from-slate-500 via-slate-600 to-zinc-700",
    icon: Aperture,
    instantBook: false,
  },
];

export type Category = {
  name: string;
  count: number;
  icon: LucideIcon;
  href: string;
};

export const categories: Category[] = [
  { name: "Photo Studio", count: 412, icon: Camera, href: "/explore" },
  { name: "Film & Video", count: 168, icon: Clapperboard, href: "/explore" },
  { name: "Podcast Rooms", count: 96, icon: Mic, href: "/explore" },
  { name: "Music & Recording", count: 74, icon: Guitar, href: "/explore" },
  { name: "Art Galleries", count: 53, icon: Palette, href: "/explore" },
  { name: "Meeting Rooms", count: 210, icon: Presentation, href: "/explore" },
  { name: "Rehearsal Spaces", count: 45, icon: Speaker, href: "/explore" },
  { name: "Creator Pods", count: 130, icon: Sparkles, href: "/explore" },
];

export type FooterColumn = {
  title: string;
  links: NavItem[];
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Explore",
    links: [
      { label: "All spaces", href: "/explore" },
      { label: "Categories", href: "/#categories" },
      { label: "Featured studios", href: "/#featured" },
      { label: "Book in minutes", href: "/how-it-works" },
    ],
  },
  {
    title: "Host",
    links: [
      { label: "Become a host", href: "/how-it-works" },
      { label: "Host guarantee", href: "/#guarantee" },
      { label: "Creator support", href: "/#guarantee" },
      { label: "Hosting tips", href: "/about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Careers", href: "/about" },
      { label: "Contact", href: "/about" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help center", href: "/how-it-works" },
      { label: "Cancellation policy", href: "/how-it-works" },
      { label: "Terms of service", href: "/about" },
      { label: "Privacy policy", href: "/about" },
    ],
  },
];
