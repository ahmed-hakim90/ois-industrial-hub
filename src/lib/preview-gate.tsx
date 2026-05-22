import type { ComponentType } from "react";
import { ComingSoonPage } from "@/components/site/ComingSoonPage";
import { site } from "@/constants";

export function previewGate<T extends object>(Page: ComponentType<T>) {
  return function Gated(props: T) {
    if (site.previewMode) return <ComingSoonPage />;
    return <Page {...props} />;
  };
}
