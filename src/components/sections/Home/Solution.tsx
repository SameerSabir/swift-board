"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { FEATURES } from "@/constants/solution.constant";
import { getPalette } from "@/utils/helper";

function FeatureCard({
  feature,
  i,
}: {
  feature: (typeof FEATURES)[0];
  i: number;
  activeIndex?: number;
}) {
  // const isActive = activeIndex === i;
  const { cardBg, iconBg, iconColor } = getPalette(i);

  return (
    <div
      className="rounded-[20px] overflow-hidden relative transition-shadow duration-400 "
      style={{
        background: cardBg,
      }}
    >
      <div className="px-9 py-7">
        <div className="flex items-start gap-4 mb-5">
          <motion.span
            animate={{
              background: iconBg,
              color: iconColor,
            }}
            transition={{ duration: 0.35 }}
            className="inline-flex items-center justify-center rounded-2xl shrink-0 w-12 h-12"
          >
            {feature.icon}
          </motion.span>

          <div className="flex-1 min-w-0">
            <span
              className="text-[11px] font-bold tracking-widest opacity-70 font-mono block mb-1"
              style={{ color: iconColor }}
            >
              {feature.number}
            </span>
            <h3 className="font-bold text-secondary leading-snug mb-0.5 text-xl">
              {feature.title}
            </h3>
            {/* <p className="text-sm text-neutral-600 font-medium">
              {feature.subtitle}
            </p> */}
          </div>
        </div>

        <p className="text-lg leading-relaxed text-secondary mb-5">
          {feature.description}
        </p>
        <ul>

          <ul className="flex flex-col gap-2.5">
            {/* <p className="text-sm  text-neutral-800 ">{feature.bulletsheading}</p> */}
            {feature.bullets.map((b, j) => (
              <motion.li
                key={j}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: j * 0.06 }}
                className="flex items-start gap-2.5 text-lg ml-2"
              >
                <span
                  className="mt-0.5 shrink-0 flex items-center justify-center rounded-full w-4.5 h-4.5"
                  style={{ background: `${iconColor}18` }}
                >
                  <Check
                    size={10}
                    strokeWidth={2.5}
                    style={{ color: iconColor }}
                  />
                </span>
                <span className="text-neutral-800">{b}</span>
              </motion.li>
            ))}
          </ul>
        </ul>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="mt-5 pt-4 border-t border-black/20 flex items-start gap-2"
          >
            <p
              className="text-base italic font-medium leading-relaxed"
              style={{ color: iconColor }}
            >
              {feature.tagline}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Solutions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const setItemRef = (el: HTMLDivElement | null, index: number) => {
    itemRefs.current[index] = el;
  };

  return (
    <section className="bg-gray-100 mt-10" id="solution">
      <div className="mx-auto max-w-7xl px-4 sm:px-0 py-10 sm:py-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          <div className="lg:w-2/5 w-full">
            <div className="lg:sticky lg:top-40">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="mb-4"
              >
                <h2 className="text-center sm:text-left text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  The Features{" "}
                  <span className="block mt-1">
                    Collaboration {" "}
                    <span className="text-primary">Without The Chaos</span>
                  </span>
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="text-secondary text-sm md:text-lg max-w-md text-center sm:text-left"
              >
                Most tools scatter your team across chats, files, and apps.
                SwiftBoard brings everything into structured boards with clear
                roles, real-time updates, and controlled access.
              </motion.p>
            </div>
          </div>

          <div className="lg:w-3/5 w-full">
            <div className="flex flex-col gap-14">
              {FEATURES.map((feature, i) => (
                <div key={i} ref={(el) => setItemRef(el, i)}>
                  <FeatureCard
                    feature={feature}
                    i={i}
                    activeIndex={activeIndex}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
