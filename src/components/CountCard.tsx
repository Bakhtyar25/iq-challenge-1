import React, { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { flipBottomVariants, flipTopVariants } from "@/content/data";

type Props = {
  time: number;
  label: string;
};

// Memoized CountCard component to optimize rendering.
export default memo(function CountCard({ time, label }: Props) {
  return (
    <div className="flex flex-col items-center gap-3 md:gap-6">
      <div className="relative isolate flex h-timer w-timer flex-col rounded-sm shadow-timer md:h-timer-lg md:w-timer-lg md:rounded-md md:shadow-timer-lg">
        {/* AnimatePresence component to handle animations when components are added/removed */}
        <AnimatePresence initial={false}>
          {/* Top half flip animation */}
          <motion.div
            key={crypto.randomUUID()}
            variants={flipTopVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute left-0 top-0 flex h-2/4 w-full justify-center overflow-hidden rounded-t-sm bg-corner-t bg-corner-size bg-no-repeat md:rounded-t-md md:bg-corner-t-md"
          >
            <span className="absolute top-3.5 text-4xl font-bold leading-none text-rose-300 md:top-[2.125rem] md:text-7xl">
              {time.toString().padStart(2, "0")}
            </span>
          </motion.div>
          {/* Bottom half flip animation */}
          <motion.div
            key={crypto.randomUUID()}
            variants={flipBottomVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute bottom-0 left-0 flex h-2/4 w-full justify-center overflow-hidden rounded-b-sm bg-corner-b bg-corner-size bg-no-repeat md:rounded-b-md md:bg-corner-b-md"
          >
            <span className="absolute bottom-3.5 text-4xl font-bold leading-none text-rose-300 md:bottom-[2.125rem] md:text-7xl">
              {time.toString().padStart(2, "0")}
            </span>
          </motion.div>
        </AnimatePresence>
        <span className="w-[calc(100%-8px)] absolute left-[6px] top-2/4 z-20 h-[1px] -translate-y-2/4 bg-indigo-800/40 md:w-[calc(100%-12px)]" />
      </div>
      <span className="text-[0.5rem] font-bold uppercase tracking-[0.3em] text-indigo-400 md:text-sm">
        {label}
      </span>
    </div>
  );
});
