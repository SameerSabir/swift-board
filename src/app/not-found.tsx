"use client";

import { useParticleCanvas } from "@/components/hooks/useParticleCanvas";
import { HeroBackground } from "@/components/ui/HeroBackground";
import ThemeButton from "@/components/ui/ThemeButton";

export default function NotFound() {
  const canvasRef = useParticleCanvas();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[linear-gradient(160deg,#faf5ff_0%,#ffffff_45%,#fdf8ff_100%)] pt-20">
      <HeroBackground canvasRef={canvasRef} />

      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-center">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto w-full">
            <div className="anim-center [animation-delay:0.1s] mb-7">
              <span className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold bg-secondary text-white tracking-[0.01em]">
                404 - Page Not Found
              </span>
            </div>

            <h1 className="anim-center [animation-delay:0.25s] font-plus-jakarta font-extrabold tracking-tight mb-6 text-secondary leading-[1.08] text-7xl lg:text-9xl">
              Lost in <span className="text-primary">Space?</span>
            </h1>

            <h2 className="anim-center [animation-delay:0.4s] font-shantell-sans font-bold text-2xl md:text-3xl text-secondary mb-6">
              The page you&apos;re looking for doesn&apos;t exist.
            </h2>

            <p className="anim-center [animation-delay:0.55s] mb-10 leading-relaxed text-secondary font-medium text-lg max-w-2xl mx-auto w-full">
              It looks like you&apos;ve taken a wrong turn. Don&apos;t worry,
              even the best explorers get lost sometimes. Let&apos;s get you
              back on track.
            </p>

            <div className="anim-center [animation-delay:0.7s]">
              <ThemeButton
                text="Back to Home"
                as="a"
                variant="shimmer"
                href="/"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
