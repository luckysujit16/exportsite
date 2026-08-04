"use client";

import {
  Package,
  Factory,
  Palette,
  Tag,
  PackageCheck,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion";

const SERVICES = [
  { name: "Custom Packaging", icon: Package },
  { name: "Private Label Manufacturing", icon: Factory },
  { name: "Brand Printing", icon: Palette },
  { name: "Product Label Design", icon: Tag },
  { name: "Export Ready Packaging", icon: PackageCheck },
  { name: "Bulk Packaging Solutions", icon: Layers },
];

export default function Branding() {
  return (
    <section id="branding" className="bg-surface">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-[12px] tracking-[0.25em] text-secondary font-semibold mb-4">
            CUSTOM BRANDING SERVICES
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink leading-tight">
            We help businesses build their own brand identity
          </h2>
          <p className="mt-4 text-ink/70 text-[15px] leading-relaxed">
            Whether you are launching a new brand or expanding an existing
            one, our private labeling and custom branding services can be
            tailored to your business requirements.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map(({ name, icon: Icon }) => (
            <RevealItem key={name}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-4 p-5 rounded-xl bg-white border border-ink/10 hover:border-secondary/40 transition-colors"
              >
                <span className="w-11 h-11 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <Icon size={19} className="text-secondary" />
                </span>
                <span className="text-sm font-semibold text-ink">{name}</span>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
