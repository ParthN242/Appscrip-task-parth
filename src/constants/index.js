import {
  Shopping,
  Profile,
  Search,
  Heart,
  Gpay,
  MasterCard,
  Paypal,
  Amex,
  ApplePay,
  ZPay,
} from "@/assets";

export const NAVBAR_ICONS = [
  { icon: Search, alt: "Search" },
  { icon: Heart, alt: "Heart" },
  { icon: Shopping, alt: "Shopping" },
  { icon: Profile, alt: "Profile" },
];

export const NAVBAR_LINKS = [
  { href: "#", key: "home", label: "Shop" },
  { href: "#", key: "skills", label: "Skills" },
  { href: "#", key: "stories", label: "Stories" },
  { href: "#", key: "about", label: "About" },
  { href: "#", key: "contact-us", label: "Contact Us" },
];

export const SORTING_MENU = [
  { value: "recommended", label: "Recommended" },
  { value: "newest_first", label: "Newest first" },
  { value: "popular", label: "popular" },
  { value: "highToLow", label: "Price : high to low" },
  { value: "lowToHigh", label: "Price : low to high" },
];

export const FILTER_DATA = [
  { title: "Ideal For", options: ["Men", "Women", "Baby & Kids"] },
  {
    title: "Occasion",
    options: ["Rainy Season", "Casual", "Wedding", "Party", "Regular"],
  },
  { title: "Work", options: ["French Knot", "Zardosi", "Fancy", "Embroidery"] },
  {
    title: "Fabric",
    options: [
      "Muslin",
      "Satin Blend",
      "Satin",
      "Tericoat",
      "Linen",
      "Raw Silk",
      "Cotton",
      "Silk",
    ],
  },
  { title: "Segment", options: ["Silver", "Ethnic", "Contemporary"] },
  {
    title: "Suitable For",
    options: ["Formal Wear", "Western Wear", "Casual Wear"],
  },
  {
    title: "Materials",
    options: ["Wool", "Silk", "Leather", "Cotton", "Cellulosic Fibers"],
  },
  {
    title: "Pattern",
    options: [
      "Windowpane",
      "Pinstripes",
      "Solid",
      "Chalk Stripes",
      "Slim Fit",
      "Tartan",
    ],
  },
];

export const FOOTER_LEFT_LINKS = [
  { href: "#", key: "aboutus", label: "About Us" },
  { href: "#", key: "stories", label: "Stories" },
  { href: "#", key: "artisans", label: "Artisans" },
  { href: "#", key: "boutiques", label: "Boutiques" },
  { href: "#", key: "contact-us", label: "Contact Us" },
  { href: "#", key: "docs", label: "EU Compliances Docs" },
];

export const FOOTER_QUICK_LINKS = [
  { href: "#", key: "ordershipping", label: "Orders & Shipping" },
  { href: "#", key: "seller", label: "Join/Login as a Seller" },
  { href: "#", key: "payment", label: "Payment & Pricing" },
  { href: "#", key: "return", label: "Return & Refunds" },
  { href: "#", key: "faqs", label: "FAQs" },
  { href: "#", key: "privacy-policy", label: "Privacy Policy" },
  { href: "#", key: "termsandconditions", label: "Terms & Conditions" },
];

export const PAYMENT_ICONS = [
  { href: "#", icon: Gpay, label: "Google Pay" },
  { href: "#", icon: MasterCard, label: "Master Card" },
  { href: "#", icon: Paypal, label: "Paypal" },
  { href: "#", icon: Amex, label: "Amex" },
  { href: "#", icon: ApplePay, label: "Apple Pay" },
  { href: "#", icon: ZPay, label: "Zero Pay" },
];
