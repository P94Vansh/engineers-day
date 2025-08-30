"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

export const Meteors = ({ number = 20, className }) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const meteors = new Array(number).fill(true);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteors.map((_, idx) => {
        const left = Math.random() * windowSize.width; // random X position
        const delay = Math.random() * 5; // random start delay
        const duration = Math.random() * 5 + 5; // 5-10s duration

        return (
          <motion.span
            key={"meteor" + idx}
            className={cn(
              "absolute h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
              "before:absolute before:bottom-full before:left-1/2 before:h-[50px] before:w-[1px] before:-translate-x-1/2 before:bg-gradient-to-t before:from-[#64748b] before:to-transparent before:content-['']",
              className
            )}
            style={{ left: left + "px" }}
            initial={{ y: -50 }}
            animate={{ y: windowSize.height + 50 }}
            transition={{
              delay,
              duration,
              repeat: Infinity,
              ease: "linear",
            }}
          ></motion.span>
        );
      })}
    </motion.div>
  );
};
