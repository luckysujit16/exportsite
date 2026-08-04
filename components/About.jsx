import { MapPin, Globe2 } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion";

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28 grid md:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
        <Reveal>
          <p className="eyebrow text-[12px] tracking-[0.25em] text-secondary font-semibold mb-4">
            ABOUT US
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink leading-tight">
            Connecting buyers to trusted suppliers, worldwide
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="space-y-6 text-ink/75 text-[15px] leading-relaxed">
          <p>
            SJFK FINTECH PRIVATE LIMITED is based in{" "}
            <strong className="text-ink">Navi Mumbai, Maharashtra, India</strong>
            , one of the country&rsquo;s leading commercial and logistics
            hubs.
          </p>
          <p>
            Our mission is to simplify international trade by connecting
            buyers with trusted manufacturers and suppliers worldwide. We
            leverage our global sourcing network, industry expertise, and
            dependable logistics to provide cost-effective procurement
            solutions for businesses of all sizes.
          </p>
          <p>
            We believe in building long-term relationships based on
            transparency, quality, competitive pricing, and reliable
            service.
          </p>

          <RevealGroup className="grid sm:grid-cols-2 gap-4 pt-4">
            <RevealItem className="flex gap-3 p-4 rounded-lg bg-surface border border-primary/15 transition-transform hover:-translate-y-1">
              <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-ink">
                  Navi Mumbai HQ
                </p>
                <p className="text-xs text-ink/60 mt-1">
                  Positioned in a major commercial &amp; logistics hub
                </p>
              </div>
            </RevealItem>
            <RevealItem className="flex gap-3 p-4 rounded-lg bg-surface border border-primary/15 transition-transform hover:-translate-y-1">
              <Globe2 size={20} className="text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-ink">
                  Global Network
                </p>
                <p className="text-xs text-ink/60 mt-1">
                  Sourcing partners across multiple countries
                </p>
              </div>
            </RevealItem>
          </RevealGroup>
        </Reveal>
      </div>
    </section>
  );
}

