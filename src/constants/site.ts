export const site = {
  name: "OIS Machinery",
  short: "OIS",
  tagline: "Industrial Machinery Solutions Built for Performance",
  url: "https://oismachinery.com",
  ogImagePath: "/og.jpg",
  description:
    "OIS Machinery supplies premium industrial machinery, heavy equipment, and auxiliary parts to manufacturers worldwide. Request a quotation today.",
  email: "info@oismachinery.com",
  phoneDisplay: "+20 100 000 0000",
  whatsappNumber: "201000000000", // E.164 without +, used for wa.me
  facebook: "https://facebook.com/oismachinery",
  address: "Industrial Zone, Cairo, Egypt",
  nav: [
    { label: "Home", to: "/" as const },
    { label: "About", to: "/about" as const },
    { label: "Services", to: "/services" as const },
    { label: "Machines", to: "/machines" as const },
    { label: "Auxiliary Parts", to: "/parts" as const },
    { label: "Contact", to: "/contact" as const },
  ],
};

export const waLink = (msg?: string) =>
  `https://wa.me/${site.whatsappNumber}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;

export const mailLink = (subject?: string, body?: string) => {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const q = params.toString();
  return `mailto:${site.email}${q ? `?${q}` : ""}`;
};
