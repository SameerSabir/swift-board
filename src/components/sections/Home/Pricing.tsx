"use client";

import { useState, useEffect } from "react";
import { PRICING_FEATURES, PRICING_GUARANTEES } from "@/constants/pricing.constant";

function SpeedometerGauge() {
    return (
        <svg viewBox="0 0 160 96" width="160" height="96" aria-hidden="true">
            {/* Background track */}
            <path
                d="M 18 88 A 62 62 0 0 1 142 88"
                fill="none"
                stroke="#ede9fe"
                strokeWidth="15"
                strokeLinecap="round"
            />
            {/* Filled track — nearly maxed for lifetime supreme plan */}
            <path
                d="M 18 88 A 62 62 0 0 1 133 50"
                fill="none"
                stroke="#9b32ff"
                strokeWidth="15"
                strokeLinecap="round"
            />
            {/* Needle */}
            <line
                x1="80" y1="88"
                x2="128" y2="50"
                stroke="#7c3aed"
                strokeWidth="3"
                strokeLinecap="round"
            />
            {/* Center base */}
            <circle cx="80" cy="88" r="9" fill="#7c3aed" />
            <circle cx="80" cy="88" r="4" fill="white" />
            {/* Needle tip */}
            <circle cx="128" cy="50" r="4.5" fill="#7c3aed" />
        </svg>
    );
}

export default function Pricing() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 80);
        return () => clearTimeout(t);
    }, []);

    return (
        <section className="relative overflow-hidden bg-white flex flex-col items-center py-16 sm:py-20 lg:py-28">
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">

                {/* Header */}
                <div
                    className={`flex flex-col items-center text-center mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                >
                    <h2 className="font-extrabold text-secondary leading-tight mb-4 text-4xl lg:text-5xl">
                        Get SwiftBoard{" "}
                        <span className="text-primary">Forever</span>
                    </h2>
                    <p className="text-neutral-500 text-base sm:text-lg max-w-xl">
                        One-time payment. No monthly fees. No subscriptions.{" "}
                    </p>
                    <p className="text-base sm:text-lg max-w-xl font-semibold text-secondary">
                        This limited-time offer won&apos;t last.
                    </p>
                </div>

                {/* Main grid: card + two lists */}
                <div
                    className={`flex flex-col lg:flex-row gap-5 transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    {/* ── Pricing card (mirrors image card style) ── */}
                    <div className="lg:w-72 xl:w-80 shrink-0">
                        <div className="rounded-3xl bg-[#f5f0ff] p-7 flex flex-col h-full">

                            {/* Plan label row */}
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-base font-extrabold text-secondary tracking-wide uppercase">
                                    LIFETIME DEAL
                                </span>
                                <span className="text-base font-semibold italic text-primary">
                                    Limited Time
                                </span>
                            </div>

                            {/* Gauge */}
                            <div className="flex justify-center my-4">
                                <SpeedometerGauge />
                            </div>

                            {/* Price */}
                            <div className="text-center mb-1">
                                <div className="flex items-baseline justify-center gap-2">
                                    <span className="text-6xl font-extrabold text-secondary leading-none">$99</span>
                                </div>
                                <div className="flex items-center justify-center gap-2 mt-1.5">
                                    <span className="text-base text-neutral-500 line-through">$299</span>
                                    <span className="text-sm font-semibold text-emerald-500">(Save $200)</span>
                                </div>
                                <p className="text-xs text-neutral-500 mt-1">one-time payment</p>
                            </div>

                            {/* CTA */}
                            <button className="w-full mt-5 py-3.5 rounded-xl bg-secondary text-white text-sm font-bold tracking-wide hover:bg-secondary/85 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                                Get Lifetime Access Now — $99
                            </button>

                            {/* Separator */}
                            <div className="border-t border-purple-200/60 my-5" />

                            {/* Quick pill list */}
                            <ul className="space-y-2.5">
                                {["One-time payment", "No recurring fees", "Lifetime access"].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-base text-neutral-600">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* ── Right column: features + guarantees ── */}
                    <div className="flex-1 flex flex-col gap-5">

                        {/* Everything It Includes */}
                        <div className="rounded-3xl border border-neutral-100 bg-white p-7 shadow-sm">
                            <p className="text-base font-bold text-secondary mb-4 tracking-wide">
                                Everything It Includes
                            </p>
                            <ul className="space-y-3">
                                {PRICING_FEATURES.map((feature) => (
                                    <li key={feature.title} className="flex items-start gap-2.5 text-sm">
                                        <span className="text-primary font-bold mt-px leading-snug">•</span>
                                        <span>
                                            <span className="font-semibold text-base text-secondary">{feature.title}</span>
                                            <span className="text-neutral-500 text-base"> — {feature.description}</span>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Included With Your Purchase */}
                        <div className="rounded-3xl border border-neutral-100 bg-white p-7 shadow-sm">
                            <p className="text-base font-bold text-secondary mb-4 tracking-wide">
                                Included With Your Purchase
                            </p>
                            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                                {PRICING_GUARANTEES.map((item) => (
                                    <li key={item.title} className="flex items-start gap-2.5 text-base">
                                        <span className="text-primary font-bold mt-px leading-snug">•</span>
                                        <span>
                                            <span className="font-semibold text-base text-secondary">{item.title}</span>
                                            <span className="text-neutral-500 text-base"> {item.description}</span>
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
