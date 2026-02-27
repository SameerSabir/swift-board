"use client";

import { useState, useEffect, useRef } from "react";
import { Check, ShieldCheck } from "lucide-react";
import {
  PRICING_FEATURES,
  PRICING_GUARANTEES,
} from "@/constants/pricing.constant";
import ThemeButton from "@/components/ui/ThemeButton";

export default function Pricing() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden" id="pricing">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4  sm:px-0 py-10 sm:py-14">
        <div
          className={`flex flex-col items-center text-center mb-10 sm:mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-purple-50 text-purple-600 border border-purple-200/60">
            <span className="w-2 h-2 rounded-full relative pulse-ring shrink-0 bg-primary" />{" "}
            Limited Time Offer
          </span>

          <h2 className="font-extrabold text-secondary leading-tight mb-4 text-3xl md:text-4xl lg:text-5xl mt-1 ">
            Get SwiftBoard <span className="text-primary">Forever</span>
          </h2>
          <p className="text-neutral-500 text-sm md:text-base max-w-md leading-relaxed">
            One-time payment. No monthly fees. No subscriptions. Own it for
            life.
          </p>
        </div>

        <div
          className={`grid lg:grid-cols-[380px_1fr] gap-6 transition-all duration-700 delay-150 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative rounded-3xl bg-secondary p-8 flex flex-col overflow-hidden">
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-primary/10 blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-bold tracking-widest uppercase text-white/50">
                  Lifetime Deal
                </span>
                <span className="text-xs font-semibold bg-primary/20 text-primary border border-primary/30 rounded-full px-3 py-1">
                  Most Popular
                </span>
              </div>

              <div className="mb-2">
                <div className="flex items-end gap-3">
                  <span className="text-7xl font-black text-white leading-none tracking-tight">
                    $99
                  </span>
                  <div className="flex flex-col mb-2">
                    <span className="text-white/40 line-through text-lg font-medium">
                      $299
                    </span>
                    <span className="text-emerald-400 text-sm font-bold">
                      Save $200
                    </span>
                  </div>
                </div>
                <p className="text-white/40 text-sm mt-2 font-medium">
                  one-time · no renewals · ever
                </p>
              </div>

              <div className="border-t border-white/10 my-6" />

              <ul className="space-y-3 mb-8">
                {[
                  "One-time payment",
                  "No recurring fees",
                  "Lifetime updates",
                  "Priority support",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-white/70 font-medium"
                  >
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <ThemeButton
                text=" Get Lifetime Access — $99"
                variant="glow"
                className="w-full mt-auto rounded-2xl! text-sm"
              />

              <p className="text-center text-white/30 text-xs mt-4 font-medium">
                30-day money-back guarantee
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="rounded-3xl border border-neutral-100 bg-white/80 backdrop-blur-sm p-7 shadow-sm hover:shadow-md transition-shadow duration-300 flex-1">
              <div className="flex items-center gap-2 mb-6">
                <p className="text-sm font-bold text-secondary tracking-wide uppercase">
                  Everything Included
                </p>
                <div className="flex-1 h-px bg-neutral-100" />
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {PRICING_FEATURES.map((feature) => (
                  <li key={feature.title} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-secondary leading-snug">
                        {feature.title}
                      </span>
                      <span className="block text-xs text-neutral-400 mt-0.5 leading-relaxed">
                        {feature.description}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-neutral-100 bg-white/80 backdrop-blur-sm p-7 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-2 mb-6">
                <p className="text-sm font-bold text-secondary tracking-wide uppercase">
                  Included With Your Purchase
                </p>
                <div className="flex-1 h-px bg-neutral-100" />
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {PRICING_GUARANTEES.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-3 h-3 text-primary" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-secondary leading-snug">
                        {item.title}
                      </span>
                      <span className="block text-xs text-neutral-400 mt-0.5 leading-relaxed">
                        {item.description}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
