import { Telescope, Compass } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/motion";

export default function VisionMission() {
  return (
    <section className="bg-white">
      <RevealGroup
        staggerChildren={0.12}
        className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-6"
      >
        <RevealItem className="p-8 md:p-10 rounded-xl bg-surface border border-primary/15">
          <Telescope size={24} className="text-primary" />
          <h3 className="mt-5 font-display font-semibold text-xl text-ink">
            Our Vision
          </h3>
          <p className="mt-3 text-ink/70 text-[15px] leading-relaxed">
            To become a globally recognized import-export company by
            delivering quality products, dependable sourcing, and
            exceptional customer satisfaction.
          </p>
        </RevealItem>

        <RevealItem className="p-8 md:p-10 rounded-xl bg-ink text-white">
          <Compass size={24} className="text-primary" />
          <h3 className="mt-5 font-display font-semibold text-xl">
            Our Mission
          </h3>
          <p className="mt-3 text-white/70 text-[15px] leading-relaxed">
            To provide efficient international sourcing solutions with
            transparency, competitive pricing, superior quality, and timely
            delivery while creating lasting value for our clients worldwide.
          </p>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
