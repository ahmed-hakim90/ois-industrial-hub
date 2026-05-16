import parts from "@/assets/parts-hero.jpg";

export type Part = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  image: string;
};

export const parts_list: Part[] = [
  {
    slug: "industrial-bearings",
    name: "Industrial Precision Bearings",
    category: "Rotating Parts",
    summary:
      "OEM-grade roller and ball bearings for high-load, high-speed machinery applications.",
    image: parts,
  },
  {
    slug: "hydraulic-cylinders",
    name: "Heavy-Duty Hydraulic Cylinders",
    category: "Hydraulics",
    summary:
      "Double-acting hydraulic cylinders with chrome-plated rods for presses and material handlers.",
    image: parts,
  },
  {
    slug: "drive-gears",
    name: "Hardened Drive Gears & Sprockets",
    category: "Power Transmission",
    summary:
      "Case-hardened spur and helical gears matched to industrial gearboxes and conveyors.",
    image: parts,
  },
  {
    slug: "conveyor-belts",
    name: "Industrial Conveyor Belts",
    category: "Conveying",
    summary:
      "Multi-ply rubber and modular belts for mining, packaging, and food-grade conveying.",
    image: parts,
  },
  {
    slug: "electric-motors",
    name: "AC Industrial Electric Motors",
    category: "Electrical",
    summary:
      "IE3 high-efficiency three-phase induction motors from 0.75 kW to 250 kW.",
    image: parts,
  },
  {
    slug: "control-panels",
    name: "Custom PLC Control Panels",
    category: "Automation",
    summary:
      "Turnkey electrical cabinets with PLC, HMI, and VFD integration to your specifications.",
    image: parts,
  },
];
