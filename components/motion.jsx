"use client";

import { motion } from "framer-motion";

/**
 * Shared animation variants so every section reveals the same way —
 * one consistent motion language instead of scattered one-off effects.
 */
export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const stagger = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});

export const viewport = { once: true, amount: 0.25 };

/**
 * Reveal — fades + lifts content into view once, as the user scrolls
 * to it. Wrap a section heading or a whole block with this.
 */
export function Reveal({ as: Tag = motion.div, className, children, delay = 0 }) {
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </Tag>
  );
}

/**
 * RevealGroup — wraps a grid/list; children (as RevealItem) stagger in
 * together rather than each firing its own independent tween.
 */
export function RevealGroup({ as: Tag = motion.div, className, children, staggerChildren = 0.08, delay = 0 }) {
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={stagger(staggerChildren, delay)}
    >
      {children}
    </Tag>
  );
}

export function RevealItem({ as: Tag = motion.div, className, children }) {
  return (
    <Tag className={className} variants={fadeUp}>
      {children}
    </Tag>
  );
}
