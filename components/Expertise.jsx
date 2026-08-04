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
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const POINTS = [
  { text: "Source products from virtually any part of the world", icon: Globe2 },
  { text: "Deliver the most competitive market pricing", icon: BadgePercent },
  { text: "Ensure consistent product quality", icon: BadgeCheck },
  { text: "Manage complete international procurement", icon: ClipboardList },
  { text: "Handle logistics and documentation efficiently", icon: FileText },
  { text: "Provide reliable and timely shipments", icon: Truck },
  { text: "Support both small and large volume orders", icon: Boxes },
];

const SLIDER1 = [
  {src: "../images/pulses-1.jpg", alt: "Agricultural Products Pulses", className:"w-full h-[350px] object-cover transition-transform duration-500 hover:scale-105"},
  {src: "../images/spices-1.jpg", alt: "Agricultural Products Spices", className:"w-full h-[350px] object-cover transition-transform duration-500 hover:scale-105"},
  {src: "../images/pulses-1.jpg", alt: "Agricultural Products vegetabels", className:"w-full h-[350px] object-cover transition-transform duration-500 hover:scale-105"},
]

export default function Expertise() {
  return (
    <section id="expertise" className="bg-white">
  <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* Left Content */}
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

      {/* Right Image Slider */}
      <Reveal delay={0.2}>
        <div className="rounded-xl overflow-hidden shadow-2xl h-[350px] ">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1}
            spaceBetween={0}
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation
          >
            {SLIDER1.map(({ src, alt, className }, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={alt}
                  className={`w-full h-[420px] object-cover bg-white ${className || ""}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Reveal>

    </div>
  </div>

  {/* Feature Points */}
  <RevealGroup
    as={motion.ul}
    className="max-w-7xl mx-auto px-5 md:px-8 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
  >
    {POINTS.map(({ text, icon: Icon }) => (
      <RevealItem
        as={motion.li}
        key={text}
        className="flex items-start gap-3 p-5 rounded-lg border border-ink/10 hover:border-primary/40 hover:bg-surface/60 transition-colors"
      >
        <span className="w-10 h-10 rounded-md bg-surface flex items-center justify-center shrink-0">
          <Icon size={18} className="text-primary" />
        </span>

        <span className="text-sm text-ink/75 leading-relaxed pt-1">
          {text}
        </span>
      </RevealItem>
    ))}
  </RevealGroup>
</section>
  );
}
