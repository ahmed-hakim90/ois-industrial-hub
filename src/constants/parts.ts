import { images } from "./images";

export const partCategories = [
  {
    id: "rotating",
    label: "Rotating Parts",
    image: images.partCategories.rotating,
  },
  {
    id: "hydraulics",
    label: "Hydraulics",
    image: images.partCategories.hydraulics,
  },
  {
    id: "powerTransmission",
    label: "Power Transmission",
    image: images.partCategories.powerTransmission,
  },
  {
    id: "conveying",
    label: "Conveying",
    image: images.partCategories.conveying,
  },
  {
    id: "electrical",
    label: "Electrical",
    image: images.partCategories.electrical,
  },
  {
    id: "automation",
    label: "Automation",
    image: images.partCategories.automation,
  },
] as const;

export type PartCategoryId = (typeof partCategories)[number]["id"];

export type PartRaw = {
  slug: string;
  name: string;
  categoryId: PartCategoryId;
  summary: string;
};

export const partCatalog: PartRaw[] = [
  {
    slug: "industrial-bearings",
    name: "Industrial Precision Bearings",
    categoryId: "rotating",
    summary:
      "OEM-grade roller and ball bearings for high-load, high-speed machinery applications.",
  },
  {
    slug: "hydraulic-cylinders",
    name: "Heavy-Duty Hydraulic Cylinders",
    categoryId: "hydraulics",
    summary:
      "Double-acting hydraulic cylinders with chrome-plated rods for presses and material handlers.",
  },
  {
    slug: "drive-gears",
    name: "Hardened Drive Gears & Sprockets",
    categoryId: "powerTransmission",
    summary:
      "Case-hardened spur and helical gears matched to industrial gearboxes and conveyors.",
  },
  {
    slug: "conveyor-belts",
    name: "Industrial Conveyor Belts",
    categoryId: "conveying",
    summary:
      "Multi-ply rubber and modular belts for mining, packaging, and food-grade conveying.",
  },
  {
    slug: "electric-motors",
    name: "AC Industrial Electric Motors",
    categoryId: "electrical",
    summary:
      "IE3 high-efficiency three-phase induction motors from 0.75 kW to 250 kW.",
  },
  {
    slug: "control-panels",
    name: "Custom PLC Control Panels",
    categoryId: "automation",
    summary:
      "Turnkey electrical cabinets with PLC, HMI, and VFD integration to your specifications.",
  },
];
