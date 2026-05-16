import type { MachineRaw } from "./machines";
import type { PartRaw } from "./parts";

export type Machine = MachineRaw & {
  category: string;
  image: string;
  gallery: string[];
};

export type Part = PartRaw & {
  category: string;
  image: string;
};
