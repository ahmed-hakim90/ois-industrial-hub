import { Award, ShieldCheck, Truck, Wrench } from "lucide-react";
import { images } from "./images";

export const home = {
  heroImage: images.hero,
  heroImageAlt: "Industrial machinery factory floor",
  values: [
    {
      icon: ShieldCheck,
      title: "Engineered Reliability",
      desc: "Equipment specified for continuous-duty industrial operation and long service life.",
    },
    {
      icon: Wrench,
      title: "Lifetime Support",
      desc: "Spare parts, technical service, and operator training delivered by our in-house engineers.",
    },
    {
      icon: Truck,
      title: "Global Logistics",
      desc: "Turnkey shipping, installation, and commissioning to your facility anywhere in the region.",
    },
    {
      icon: Award,
      title: "Trusted Partner",
      desc: "Authorized representative for leading European, American, and Asian manufacturers.",
    },
  ],
  industries: [
    "Automotive",
    "Steel & Metal",
    "Food & Beverage",
    "Oil & Gas",
    "Construction",
    "Pharmaceuticals",
  ],
  stats: [
    { value: "20+", label: "Years of Experience" },
    { value: "1,200+", label: "Machines Delivered" },
    { value: "35", label: "Countries Served" },
    { value: "500+", label: "Active B2B Clients" },
  ],
  partners: ["MEKANIX", "FERROCAST", "TECHLINE", "AXIOM", "NORDMET", "PRECISA"],
} as const;
