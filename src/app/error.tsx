"use client";
import React, { useEffect } from "react";
import { useParticleCanvas } from "@/components/hooks/useParticleCanvas";
import { HeroBackground } from "@/components/ui/HeroBackground";
import ThemeButton from "@/components/ui/ThemeButton";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const canvasRef = useParticleCanvas();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[linear-gradient(160deg,#faf5ff_0%,#ffffff_45%,#fdf8ff_100%)] pt-20">
      <HeroBackground canvasRef={canvasRef} />

      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-center">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto w-full">
            <div className="anim-center [animation-delay:0.1s] mb-7">
              <span className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold bg-red-500 text-white tracking-[0.01em]">
                Something Went Wrong
              </span>
            </div>

            <h1 className="anim-center [animation-delay:0.25s] font-plus-jakarta font-extrabold tracking-tight mb-6 text-secondary leading-[1.08] text-7xl lg:text-9xl">
              Oops! <span className="text-primary">Error</span>
            </h1>

            <h2 className="anim-center [animation-delay:0.4s] font-shantell-sans font-bold text-2xl md:text-3xl text-secondary mb-6">
              An unexpected error has occurred.
            </h2>

            <p className="anim-center [animation-delay:0.55s] mb-10 leading-relaxed text-secondary font-medium text-lg max-w-2xl mx-auto w-full">
              We&apos;ve been notified about this issue and our team is looking
              into it. In the meantime, you can try refreshing the page or head
              back home.
            </p>

            <div className="anim-center [animation-delay:0.7s] flex flex-wrap justify-center gap-4">
              <ThemeButton text="Try Again" onClick={reset} variant="shimmer" />
              <ThemeButton text="Back to Home" as="a" variant="glow" href="/" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
