import { Outlet, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import { RouteLoading } from "@/components/site/RouteLoading";

const MIN_SKELETON_MS = 300;
const FADE_DURATION = 0.35;
const EASE = [0.22, 1, 0.36, 1] as const;

export function AnimatedOutlet() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const reduceMotion = useReducedMotion();
  const isFirstMount = useRef(true);
  const [showSkeleton, setShowSkeleton] = useState(false);

  useLayoutEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    setShowSkeleton(true);
    const timer = setTimeout(() => setShowSkeleton(false), MIN_SKELETON_MS);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (reduceMotion) {
    return <Outlet />;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      {showSkeleton ? (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: FADE_DURATION, ease: EASE }}
        >
          <RouteLoading />
        </motion.div>
      ) : (
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: FADE_DURATION, ease: EASE }}
        >
          <Outlet />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
