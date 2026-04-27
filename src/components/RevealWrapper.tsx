"use client";

import { motion } from "framer-motion";
import { CSSProperties, ReactNode } from "react";

const revealVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -60px 0px" }}
      variants={revealVariants}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.2, 0.8, 0.2, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
