"use client";

import { useParticleCanvas } from "@/components/hooks/useParticleCanvas";
import { HeroBackground } from "@/components/ui/HeroBackground";
import ThemeButton from "@/components/ui/ThemeButton";

export default function Hero() {
  const canvasRef = useParticleCanvas();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[linear-gradient(160deg,#faf5ff_0%,#ffffff_45%,#fdf8ff_100%)] pt-37">
      <HeroBackground canvasRef={canvasRef} />

      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-center">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto w-full">
            <div className="anim-center [animation-delay:0.1s] mb-7">
              <span className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold bg-secondary text-white tracking-[0.01em]">
                <span className="w-2 h-2 rounded-full relative pulse-ring shrink-0 bg-primary" />
                Trending apps on play store
              </span>
            </div>

            <h1 className="anim-center [animation-delay:0.25s] font-extrabold tracking-tight mb-6 text-secondary leading-[1.08] text-5xl lg:text-7xl ">
              Unlock Growth Potential Customer Experience
            </h1>

            <p
              className="anim-center [animation-delay:0.4s] mb-10 leading-relaxed
             text-gray-900 font-medium
             text-xl max-w-3xl mx-auto w-full
              "
            >
              The autonomous customer service platform designed for commerce.
              Combine the best of human empathy and AI to transform your
              customer experience.
            </p>

            <div className="anim-center [animation-delay:0.55s]">
              <ThemeButton
                text="Download App"
                variant="shimmer"
                onClick={() => {
                  console.log("Download clicked");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
