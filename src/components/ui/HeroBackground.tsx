import { delays, VERT_LINES } from "@/constants/hero.constant";
import React from "react";

export const HeroBackground = ({
  canvasRef,
}: {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
}) => (
  <>
    <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-75"
    />

    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse 65% 55% at 50% 45%,rgba(155,50,255,.09) 0%,transparent 70%)",
      }}
    />

    {/* {BACKGROUND_BLOBS.map((style, i) => (
      <div key={i} className="absolute pointer-events-none" style={style} />
    ))} */}

    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {VERT_LINES.map((l, i) => (
        <div
          key={i}
          className="absolute w-px origin-top animate-[lineGrow_1.3s_ease_both]"
          style={{
            left: l.left,
            top: l.top,
            height: l.height,
            animationDelay: `${delays[i]}s`,
            background: `linear-gradient(to bottom, transparent, rgba(155,50,255,${
              l.opacity * 3
            }), rgba(155,50,255,${l.opacity}), transparent)`,
          }}
        />
      ))}
    </div>
  </>
);
