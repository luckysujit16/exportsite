"use client";

import {
  Globe2,
  BadgePercent,
  BadgeCheck,
  ClipboardList,
  FileText,
  Truck,
  Boxes,
} from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, RevealGroup, RevealItem, fadeUp } from "@/components/motion";

const POINTS = [
  { text: "Source products from virtually any part of the world", icon: Globe2 },
  { text: "Deliver the most competitive market pricing", icon: BadgePercent },
  { text: "Ensure consistent product quality", icon: BadgeCheck },
  { text: "Manage complete international procurement", icon: ClipboardList },
  { text: "Handle logistics and documentation efficiently", icon: FileText },
  { text: "Provide reliable and timely shipments", icon: Truck },
  { text: "Support both small and large volume orders", icon: Boxes },
];

export default function Expertise() {
  return (
    <section id="expertise" className="bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28 grid lg:grid-cols-[0.85fr_1.15fr] gap-14">
        <Reveal>
          <p className="eyebrow text-[12px] tracking-[0.25em] text-secondary font-semibold mb-4">
            OUR EXPERTISE
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink leading-tight">
            Global sourcing capability at the core
          </h2>
          <p className="mt-5 text-ink/70 text-[15px] leading-relaxed">
            Our strength lies in our global sourcing capabilities. Experienced
            sourcing partners across multiple countries let us identify the
            best suppliers while optimizing procurement costs for our
            customers.
          </p>
        </Reveal>

        <RevealGroup as={motion.ul} className="grid sm:grid-cols-2 gap-4">
          {POINTS.map(({ text, icon: Icon }) => (
            <RevealItem
              as={motion.li}
              key={text}
              className="flex items-start gap-3 p-5 rounded-lg border border-ink/10 hover:border-primary/40 hover:bg-surface/60 transition-colors"
            >
              <span className="w-9 h-9 rounded-md bg-surface flex items-center justify-center shrink-0">
                <Icon size={16} className="text-primary" />
              </span>
              <span className="text-sm text-ink/75 leading-relaxed pt-1.5">
                {text}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
