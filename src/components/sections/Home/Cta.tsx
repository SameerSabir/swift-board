"use client";

import ArrowLottie from "@/components/ui/arrowLottie";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function CTA() {
  return (
    <section className="relative overflow-hidden md:min-h-162.5 flex items-center justify-center">
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <Image
          src="/background-shape-1.svg"
          alt="bg-image"
          width={280}
          height={340}
          className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block"
        />
        <Image
          src="/background-shape-3.svg"
          alt="bg-image"
          width={420}
          height={180}
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 "
        />
        <Image
          src="/background-shape-2.svg"
          alt="bg-image"
          width={420}
          height={180}
          className="absolute -bottom-15 left-20 hidden lg:block   "
        />
        <Image
          src="/background-shape-4.svg"
          alt="bg-image"
          width={420}
          height={180}
          className="absolute -bottom-35 right-20 hidden lg:block  "
        />
        <Image
          src="/background-shape-5.svg"
          alt="BG-3"
          width={260}
          height={320}
          className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block "
        />
      </div>

      <div className="relative md:-top-20 md:right-8 z-10 flex flex-col items-center gap-5 px-6 py-16 text-center">
        <div className="w-32 h-32">{<ArrowLottie />}</div>

        <h2 className="text-5xl md:text-7xl font-bold text-neutral-900  tracking-tight">
          Try Swift Board!
        </h2>

        <p className="text-lg md:text-xl text-neutral-800 max-w-sm">
          Get started instantly, no download required.
        </p>

        <Link
          href="#"
          className="mt-2 flex group items-center gap-6 px-4 py-3 lg:px-8 lg:py-4 bg-neutral-800 text-white text-sm md:text-lg font-medium rounded-2xl "
        >
          Get Swift Board Free
          <span className="group-hover:translate-x-2 transition-transform duration-300">
            <ArrowRight />
          </span>
        </Link>
      </div>
    </section>
  );
}
