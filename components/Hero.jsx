"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { fadeUp, stagger } from "@/components/motion";

const ROUTE_D = "M 60 300 C 140 340, 180 200, 210 190 S 320 60, 370 40";

const HEADLINE_PART_1 = "Global import & export";
const HEADLINE_ACCENT = " solutions";
const HEADLINE_PART_2 = " you can trust";
const HEADLINE_FULL = HEADLINE_PART_1 + HEADLINE_ACCENT + HEADLINE_PART_2;

function useTypewriter(text, { startDelay = 500, speed = 45 } = {}) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setCount(text.length);
      setDone(true);
      return;
    }

    let i = 0;
    let intervalId;

    const startTimeout = setTimeout(() => {
      intervalId = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) {
          clearInterval(intervalId);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(intervalId);
    };
  }, [text, startDelay, speed]);

  return { count, done };
}

export default function Hero() {
  const { count: typedCount, done: typingDone } = useTypewriter(
    HEADLINE_FULL,
    { startDelay: 550, speed: 40 }
  );

  const part1End = HEADLINE_PART_1.length;
  const accentEnd = part1End + HEADLINE_ACCENT.length;

  const typedPart1 = HEADLINE_FULL.slice(0, Math.min(typedCount, part1End));
  const typedAccent = HEADLINE_FULL.slice(
    part1End,
    Math.min(typedCount, accentEnd)
  );
  const typedPart2 = HEADLINE_FULL.slice(accentEnd, typedCount);

  return (
    <section
      id="top"
      className="relative bg-ink text-white bg-route-grid bg-[length:22px_22px] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <motion.div initial="hidden" animate="show" variants={stagger(0.12, 0.05)}>
          <motion.p
            variants={fadeUp}
            className="eyebrow text-[12px] tracking-[0.25em] text-white/60 font-semibold mb-6"
          >
            IMPORT &amp; EXPORT · NAVI MUMBAI, INDIA
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display font-semibold text-[2.5rem] leading-[1.08] md:text-[3.4rem] md:leading-[1.06]"
          >
            <span aria-hidden="true">
              {typedPart1}
              <span className="text-primary">{typedAccent}</span>
              {typedPart2}
              <span
                className={`inline-block w-[3px] md:w-[4px] -mb-1 md:-mb-1.5 h-[0.85em] ml-1 bg-primary align-middle ${
                  typingDone ? "animate-pulse" : "opacity-100"
                }`}
              />
            </span>
            <span className="sr-only">{HEADLINE_FULL}</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-white/70 text-[15px] md:text-base leading-relaxed max-w-xl"
          >
            SJFK FINTECH PRIVATE LIMITED sources high-quality agricultural
            commodities and custom-branded products for buyers across the
            globe &mdash; backed by an extensive supplier network and
            dependable logistics partners.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-ink font-semibold text-sm px-6 py-3.5 rounded-md hover:bg-primary-light transition-colors"
            >
              Get a Sourcing Quote
              <ArrowUpRight size={16} />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#products"
              className="inline-flex items-center gap-2 border border-white/25 text-white text-sm font-semibold px-6 py-3.5 rounded-md hover:border-white/60 transition-colors"
            >
              View Products
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex items-center gap-2.5 text-white/50 text-xs tracking-wide"
          >
            <ShieldCheck size={16} className="text-primary" />
            CIN: U68100MH2024PTC433105
          </motion.div>
        </motion.div>

        {/* Signature: animated trade route */}
        <motion.div
          className="relative h-72 md:h-96"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <svg
            viewBox="0 0 420 380"
            className="w-full h-full"
            role="img"
            aria-label="Trade route from Navi Mumbai to global markets"
          >
            <path
              d={ROUTE_D}
              fill="none"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="1.5"
              className="route-path"
              id="tradeRoute"
            />
            <circle cx="60" cy="300" r="5" fill="#00B98E">
              <animate
                attributeName="r"
                values="5;6.5;5"
                dur="2.4s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="210" cy="190" r="4" fill="#FF6922" />
            <circle cx="370" cy="40" r="5" fill="#00B98E">
              <animate
                attributeName="r"
                values="5;6.5;5"
                dur="2.4s"
                begin="1.2s"
                repeatCount="indefinite"
              />
            </circle>

            <text x="70" y="322" fill="rgba(255,255,255,0.55)" fontSize="10" letterSpacing="1">
              NAVI MUMBAI
            </text>
            <text x="222" y="182" fill="rgba(255,255,255,0.4)" fontSize="9" letterSpacing="1">
              IN TRANSIT
            </text>
            <text x="330" y="32" fill="rgba(255,255,255,0.55)" fontSize="10" letterSpacing="1">
              GLOBAL MARKETS
            </text>

            <circle r="4.5" fill="#ffffff">
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                rotate="auto"
                path={ROUTE_D}
              />
            </circle>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}