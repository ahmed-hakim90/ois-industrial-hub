/**
 * All site images — swap files under src/assets/ to update the UI.
 *
 * Machine categories: machine-cnc.jpg, machine-press.jpg, machine-laser.jpg,
 *   machine-packaging.jpg, machine-welding.jpg, machine-forklift.jpg
 * Part categories: parts-rotating.jpg, parts-hydraulics.jpg, parts-power-transmission.jpg,
 *   parts-conveying.jpg, parts-electrical.jpg, parts-automation.jpg
 * Page heroes: hero-machinery.jpg, about-team.jpg
 * OG: public/og.jpg (path only)
 */
import heroMachinery from "@/assets/hero-machinery.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import machineCnc from "@/assets/machine-cnc.jpg";
import machinePress from "@/assets/machine-press.jpg";
import machineLaser from "@/assets/machine-laser.jpg";
import machinePackaging from "@/assets/machine-packaging.jpg";
import machineWelding from "@/assets/machine-welding.jpg";
import machineForklift from "@/assets/machine-forklift.jpg";
import partsRotating from "@/assets/parts-rotating.jpg";
import partsHydraulics from "@/assets/parts-hydraulics.jpg";
import partsPowerTransmission from "@/assets/parts-power-transmission.jpg";
import partsConveying from "@/assets/parts-conveying.jpg";
import partsElectrical from "@/assets/parts-electrical.jpg";
import partsAutomation from "@/assets/parts-automation.jpg";

export const images = {
  hero: heroMachinery,
  about: aboutTeam,
  og: "/og.jpg",
  machineCategories: {
    cnc: machineCnc,
    hydraulicPress: machinePress,
    cutting: machineLaser,
    packaging: machinePackaging,
    welding: machineWelding,
    materialHandling: machineForklift,
  },
  partCategories: {
    rotating: partsRotating,
    hydraulics: partsHydraulics,
    powerTransmission: partsPowerTransmission,
    conveying: partsConveying,
    electrical: partsElectrical,
    automation: partsAutomation,
  },
} as const;
