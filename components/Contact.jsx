"use client";

import { MapPin, Package2, Mail, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-surface">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28 grid lg:grid-cols-[1fr_1fr] gap-14">
        <Reveal>
          <p className="eyebrow text-[12px] tracking-[0.25em] text-secondary font-semibold mb-4">
            CONTACT US
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink leading-tight">
            Let&rsquo;s start your sourcing partnership
          </h2>
          <p className="mt-5 text-ink/70 text-[15px] leading-relaxed max-w-lg">
            We welcome importers, exporters, wholesalers, distributors,
            retailers, supermarkets, and institutional buyers from around
            the world to partner with us for reliable sourcing and
            international trade solutions.
          </p>

          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="mailto:info@sjfkfintech.com"
            className="mt-8 inline-flex items-center gap-2 bg-primary text-ink font-semibold text-sm px-6 py-3.5 rounded-md hover:bg-primary-light transition-colors"
          >
            <Mail size={16} />
            Enquire Now
          </motion.a>
        </Reveal>

        <RevealGroup
          delay={0.1}
          staggerChildren={0.1}
          className="bg-white rounded-xl border border-ink/10 p-8 space-y-7"
        >
          <RevealItem className="flex gap-4">
            <span className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center shrink-0">
              <MapPin size={17} className="text-primary" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">
                Corporate Address
              </p>
              <p className="mt-1.5 text-sm text-ink/65 leading-relaxed">
                SJFK FINTECH PRIVATE LIMITED
                <br />
                OFF, No. 6, Plot No. 48 &amp; 49, Jay Ambe Oil Compound
                <br />
                MAFCO Road, Above Green Field Hotel, Vashi
                <br />
                Navi Mumbai, Thane, Maharashtra &ndash; 400703, India
              </p>
            </div>
          </RevealItem>

          <RevealItem className="flex gap-4">
            <span className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center shrink-0">
              <Package2 size={17} className="text-primary" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">Business</p>
              <p className="mt-1.5 text-sm text-ink/65">
                Import &amp; Export &mdash; Pulses, Spices, Vegetables, Onion
                &amp; Potato
              </p>
            </div>
          </RevealItem>

          <RevealItem className="flex gap-4">
            <span className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center shrink-0">
              <Users size={17} className="text-primary" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">
                We Partner With
              </p>
              <p className="mt-1.5 text-sm text-ink/65">
                Importers, exporters, wholesalers, distributors, retailers,
                supermarkets &amp; institutional buyers
              </p>
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
