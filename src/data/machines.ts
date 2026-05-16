import cnc from "@/assets/machine-cnc.jpg";
import press from "@/assets/machine-press.jpg";
import laser from "@/assets/machine-laser.jpg";
import packaging from "@/assets/machine-packaging.jpg";
import welding from "@/assets/machine-welding.jpg";
import forklift from "@/assets/machine-forklift.jpg";

export type Machine = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  image: string;
  gallery: string[];
  description: string[];
  specs: { label: string; value: string }[];
};

export const categories = [
  "All",
  "CNC & Machining",
  "Hydraulic Press",
  "Cutting",
  "Packaging",
  "Welding",
  "Material Handling",
] as const;

export const machines: Machine[] = [
  {
    slug: "vmc-820-cnc-machining-center",
    name: "VMC-820 Vertical Machining Center",
    category: "CNC & Machining",
    summary:
      "High-rigidity 3-axis vertical machining center for precision metal cutting in production environments.",
    image: cnc,
    gallery: [cnc, cnc, cnc],
    description: [
      "The VMC-820 delivers consistent micron-level accuracy for high-volume machining of steel, aluminium, and exotic alloys. Built on a meehanite cast iron base, the machine resists vibration and maintains thermal stability over long shifts.",
      "A 24-tool arm-type ATC, direct-drive 12,000 RPM spindle, and integrated coolant-through-spindle system enable demanding aerospace, automotive, and mould-making applications.",
    ],
    specs: [
      { label: "Travel (X / Y / Z)", value: "820 × 520 × 540 mm" },
      { label: "Spindle Speed", value: "12,000 RPM" },
      { label: "Tool Magazine", value: "24 tools, ATC" },
      { label: "Rapid Traverse", value: "36 m/min" },
      { label: "Positioning Accuracy", value: "±0.005 mm" },
      { label: "Power Supply", value: "380V / 50Hz / 25 kVA" },
      { label: "Machine Weight", value: "5,800 kg" },
    ],
  },
  {
    slug: "hp-200-hydraulic-press",
    name: "HP-200 Heavy-Duty Hydraulic Press",
    category: "Hydraulic Press",
    summary:
      "200-ton four-column hydraulic press for forming, stamping, and deep drawing operations.",
    image: press,
    gallery: [press, press, press],
    description: [
      "The HP-200 is engineered for continuous duty in metal forming workshops. A high-stiffness welded frame and four-column guidance system ensure parallelism under maximum load.",
      "PLC-controlled cycle, dual-hand safety controls, and a programmable stroke make the HP-200 suitable for both batch production and prototyping.",
    ],
    specs: [
      { label: "Nominal Force", value: "200 tons" },
      { label: "Stroke", value: "600 mm" },
      { label: "Daylight", value: "900 mm" },
      { label: "Table Size", value: "1200 × 1000 mm" },
      { label: "Approach Speed", value: "180 mm/s" },
      { label: "Press Speed", value: "12 mm/s" },
      { label: "Motor Power", value: "22 kW" },
    ],
  },
  {
    slug: "fl-3015-fiber-laser-cutter",
    name: "FL-3015 Fiber Laser Cutter",
    category: "Cutting",
    summary:
      "Enclosed fiber laser cutting system for high-speed precision cutting of sheet metal up to 25 mm.",
    image: laser,
    gallery: [laser, laser, laser],
    description: [
      "Powered by an IPG fiber source and a high-acceleration linear-motor gantry, the FL-3015 produces clean, oxide-free cuts in carbon steel, stainless steel, aluminium, brass, and copper.",
      "An automatic shuttle table, capacitive height sensor, and integrated extraction make it a turnkey solution for production cutting cells.",
    ],
    specs: [
      { label: "Working Area", value: "3000 × 1500 mm" },
      { label: "Laser Power", value: "6 kW (configurable)" },
      { label: "Max Cutting Thickness", value: "25 mm (carbon steel)" },
      { label: "Positioning Speed", value: "120 m/min" },
      { label: "Repeatability", value: "±0.03 mm" },
      { label: "Cooling", value: "Industrial chiller" },
      { label: "Power", value: "380V / 50Hz" },
    ],
  },
  {
    slug: "pk-500-rotary-filler",
    name: "PK-500 Rotary Filling Line",
    category: "Packaging",
    summary:
      "Automatic rotary filling and capping line for food, cosmetic, and chemical applications.",
    image: packaging,
    gallery: [packaging, packaging, packaging],
    description: [
      "The PK-500 integrates filling, capping, and labelling into a single hygienic stainless-steel platform. Quick-change tooling supports a wide range of bottle and cap formats.",
      "Servo-driven fill heads ensure dosing accuracy across viscosities; the HMI provides recipe storage, OEE reporting, and audit logs.",
    ],
    specs: [
      { label: "Output", value: "Up to 6,000 bottles/hour" },
      { label: "Fill Volume", value: "50 – 1,000 ml" },
      { label: "Fill Heads", value: "8 servo-driven" },
      { label: "Capping Heads", value: "4 station" },
      { label: "Material Contact", value: "AISI 316L stainless steel" },
      { label: "Air Consumption", value: "300 NL/min @ 6 bar" },
      { label: "Footprint", value: "4.8 × 2.4 m" },
    ],
  },
  {
    slug: "rw-7-robotic-welding-cell",
    name: "RW-7 Robotic Welding Cell",
    category: "Welding",
    summary:
      "Pre-engineered 6-axis robotic MIG welding cell with positioner and safety enclosure.",
    image: welding,
    gallery: [welding, welding, welding],
    description: [
      "The RW-7 cell shortens deployment time with a factory-tested base, dual-station positioner, and offline programming support. The 6-axis arm delivers repeatable weld quality across complex geometries.",
      "Built-in safety light curtains, fume extraction, and torch cleaning station are included as standard.",
    ],
    specs: [
      { label: "Robot Reach", value: "1.7 m" },
      { label: "Payload", value: "8 kg" },
      { label: "Axes", value: "6 + 2 positioner" },
      { label: "Welding Process", value: "MIG / MAG / TIG ready" },
      { label: "Repeatability", value: "±0.05 mm" },
      { label: "Cell Footprint", value: "4.0 × 3.0 m" },
      { label: "Power Source", value: "Inverter 400 A" },
    ],
  },
  {
    slug: "fl-30d-diesel-forklift",
    name: "FL-30D 3-Ton Diesel Forklift",
    category: "Material Handling",
    summary:
      "Robust 3-ton diesel forklift for warehousing, ports, and outdoor industrial sites.",
    image: forklift,
    gallery: [forklift, forklift, forklift],
    description: [
      "Powered by a low-emission turbo diesel engine, the FL-30D combines high lifting capacity with operator comfort and excellent visibility through the three-stage mast.",
      "Wet disc brakes, a reinforced overhead guard, and an ergonomic cabin reduce operator fatigue across long shifts.",
    ],
    specs: [
      { label: "Load Capacity", value: "3,000 kg" },
      { label: "Lift Height", value: "4,500 mm (3-stage)" },
      { label: "Engine", value: "Turbo diesel, Stage V" },
      { label: "Transmission", value: "Powershift, 2F/2R" },
      { label: "Turning Radius", value: "2,350 mm" },
      { label: "Travel Speed", value: "21 km/h" },
      { label: "Operating Weight", value: "4,650 kg" },
    ],
  },
];

export const findMachine = (slug: string) =>
  machines.find((m) => m.slug === slug);

export const relatedMachines = (m: Machine) =>
  machines.filter((x) => x.category === m.category && x.slug !== m.slug).slice(0, 3);
