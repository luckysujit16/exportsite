"use client";

import { motion } from "framer-motion";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion";

const REASONS = [
  "Global Supplier Network",
  "Competitive Pricing",
  "Reliable International Logistics",
  "Quality Assurance",
  "On-Time Delivery",
  "Professional Documentation Support",
  "Customer-Centric Service",
  "Flexible Order Quantities",
  "Private Label & Branding Solutions",
  "Long-Term Business Partnerships",
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <Reveal>
          <p className="eyebrow text-[12px] tracking-[0.25em] text-primary font-semibold mb-4">
            WHY CHOOSE US
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl leading-tight max-w-2xl">
            A partner built for reliable, long-term sourcing
          </h2>
        </Reveal>

        <RevealGroup
          staggerChildren={0.05}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 rounded-xl overflow-hidden"
        >
          {REASONS.map((reason, i) => (
            <RevealItem key={reason}>
              <motion.div
                whileHover={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                className="bg-ink p-6 flex flex-col gap-6 min-h-[140px]"
              >
                <span className="font-display text-primary text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium leading-snug">
                  {reason}
                </span>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
