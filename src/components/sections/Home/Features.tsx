"use client";

import ThemeButton from "@/components/ui/ThemeButton";
import { TESTIMONIALS } from "@/constants/feature.constant";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Stars } from "@/components/ui/dynamicstars";
import frame from "@/assets/frame.png"
import Lottie from 'lottie-react'
import animationData from "@/assets/arrow-up.json"

export default function Features() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-secondary flex flex-col items-center pb-12 sm:pb-16 lg:pb-20 " aria-label="Features">
      <div className="absolute top-0 left-1/2 -translate-x-1/2  bg-[radial-gradient(ellipse,rgba(155,50,255,0.18)_0%,transparent_70%)] pointer-events-none" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(155,50,255,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(155,50,255,0.06) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-0 py-10 sm:py-14">
        <div
          className={`
            flex justify-between sm:flex-row flex-col  gap-4 mb-10 sm:mb-14
            transition-all duration-700
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className={`
                flex flex-col items-center text-center
                ${i !== 0 ? "hidden sm:flex" : ""}
              `}
            >
              <Stars count={5} />
              <p className="text-xs sm:text-sm leading-relaxed text-white/80 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          ))}

          {TESTIMONIALS.slice(1).map((t, i) => (
            <div
              key={`mob-${i}`}
              className="flex flex-col items-center text-center px-3 sm:hidden"
            >
              <Stars count={5} />
              <p className="text-xs leading-relaxed text-white/70 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>

        <div
          className={`
            text-center mb-6 sm:mb-8
            transition-all duration-700 delay-100
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}
          `}
        >
          <h2 className="font-extrabold text-white leading-tight mb-4 text-3xl md:text-4xl lg:text-5xl">
            Collaboration{" "}
            <span className="whitespace-nowrap">
              — <span className="text-primary">Made Swift.</span>
            </span>
            <br className="hidden sm:block" />
            <span className="block sm:inline"> Organize. Share. Execute.</span>
          </h2>
          <p className="text-sm sm:text-base md:text-xl max-w-3xl text-white/80  mx-auto leading-relaxed px-2">
            Create boards, add content, assign roles, and collaborate instantly
            with real-time activity and smart notifications.
          </p>
        </div>

        <div
          className={`
            flex flex-col items-center gap-3 mb-2
            transition-all duration-700 delay-200
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          <ThemeButton
                text="Download App"
                as="a"
                variant="glow"
                href="https://apps.apple.com/us/app/swiftboard-work-keyboard/id6757534203"
              />
          <div className="flex items-center mt-3 gap-1.5 text-sm sm:text-base text-white/80">
            <CheckCircle
              className="w-4 h-4 shrink-0 text-purple-600"
              strokeWidth={1.8}
            />
            Includes a 60-day money-back guarantee
          </div>
        </div>

        <div
          className={`
          flex justify-center mb-8 sm:mb-10
          transition-opacity duration-1000 delay-500
          ${visible ? "opacity-100" : "opacity-0"}
          `}
        >
          <div className="relative flex flex-col items-center gap-y-1 justify-center">
            <Lottie animationData={animationData} className={'w-20'} loop={true} autoplay={true} />

            <p className="text-sm text-white/80 text-center font-medium">
              everything in <br /> one place
            </p>
          </div>
        </div>

        <div
          className={`
            w-full
            transition-all duration-1000 delay-300
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }
          `}
        >
          <div className="relative w-full max-w-5xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
            <Image
              src={frame}
              alt="SwiftBoard app — boards, roles, real-time activity"
              width={1200}
              height={680}
              priority
              className="w-full h-auto object-cover object-top"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
            />

            <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-linear-to-t from-secondary to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
