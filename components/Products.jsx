"use client";

import { Wheat, Flame, Carrot, CircleDot, Sprout } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion";

const PRODUCTS = [
  {
    name: "Pulses",
    desc: "Bulk-grade lentils and legumes sourced for consistent quality and supply.",
    icon: Wheat,
  },
  {
    name: "Spices",
    desc: "Aromatic, export-grade spices sourced from trusted regional growers.",
    icon: Flame,
  },
  {
    name: "Fresh Vegetables",
    desc: "Farm-fresh produce handled and shipped to preserve freshness in transit.",
    icon: Carrot,
  },
  {
    name: "Onion",
    desc: "Reliable bulk onion supply with consistent grading and packing.",
    icon: CircleDot,
  },
  {
    name: "Potato",
    desc: "Quality-graded potatoes for wholesale, retail and institutional buyers.",
    icon: Sprout,
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-[12px] tracking-[0.25em] text-primary font-semibold mb-4">
            OUR PRODUCTS
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl leading-tight">
            Premium-quality agricultural commodities
          </h2>
          <p className="mt-4 text-white/65 text-[15px] leading-relaxed">
            We specialize in the import and export of premium-quality
            agricultural commodities. Beyond these, we can source a wide
            variety of products based on customer requirements through our
            worldwide supplier network.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PRODUCTS.map(({ name, desc, icon: Icon }) => (
            <RevealItem key={name}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group h-full p-6 rounded-xl bg-white/[0.04] border border-white/10 hover:border-primary/50 hover:bg-white/[0.06] transition-colors"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-base">
                  {name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/55">
                  {desc}
                </p>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
