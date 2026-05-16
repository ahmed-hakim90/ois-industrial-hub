import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { site } from "@/constants";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { QuoteButton } from "./CTAButtons";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors",
        scrolled
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent bg-background"
      )}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2.5" aria-label={site.name}>
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground font-display text-sm font-bold">
            OIS
          </span>
          <span className="hidden sm:inline font-display text-base font-semibold tracking-tight text-foreground">
            {site.name}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {site.nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-foreground after:scale-x-100" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="relative px-4 py-2 text-sm font-medium tracking-tight transition-colors hover:text-foreground after:absolute after:left-4 after:right-4 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <QuoteButton size="sm" className="hidden md:inline-flex" />
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid h-10 w-10 place-items-center rounded-md border border-border lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="flex w-[min(100vw-2rem,20rem)] flex-col gap-0 p-0 sm:max-w-xs"
        >
          <SheetHeader className="border-b border-border px-6 py-5 text-left">
            <SheetTitle className="font-display text-base">{site.name}</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-1 flex-col px-2 py-2">
            {site.nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "bg-muted text-foreground" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="rounded-md px-4 py-3 text-base font-medium transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="border-t border-border px-6 py-5" onClick={() => setOpen(false)}>
            <QuoteButton className="w-full" />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
