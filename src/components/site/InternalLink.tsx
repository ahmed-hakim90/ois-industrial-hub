import { Link, type LinkProps } from "@tanstack/react-router";
import { site } from "@/constants";
import { cn } from "@/lib/utils";

/** In-app route link; renders non-navigating markup when previewMode is on. */
export function InternalLink({ className, children, ...props }: LinkProps) {
  if (site.previewMode) {
    return (
      <span className={cn(className, "cursor-default")} aria-disabled="true">
        {children}
      </span>
    );
  }

  return (
    <Link className={className} {...props}>
      {children}
    </Link>
  );
}
