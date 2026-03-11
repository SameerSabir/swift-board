"use client";

import { useEffect, useRef, useState } from "react";

export default function ArrowLottie() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full h-full">
      {visible && (
        <svg
          key="arrow-lottie"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 150 270"
          width="130"
          height="180"
          preserveAspectRatio="xMidYMid meet"
          className="w-32.5 h-65"
        >
          <defs>
            <style>{`
              @keyframes drawArrow {
                0%   { stroke-dashoffset: 400; opacity: 0; }
                10%  { opacity: 1; }
                100% { stroke-dashoffset: 0; opacity: 1; }
              }
              @keyframes drawArrowHead1 {
                0%, 60%  { stroke-dashoffset: -30; opacity: 0; }
                70%      { opacity: 1; }
                100%     { stroke-dashoffset: -3.95; opacity: 1; }
              }
              @keyframes drawArrowHead2 {
                0%, 60%  { stroke-dashoffset: 30; opacity: 0; }
                70%      { opacity: 1; }
                100%     { stroke-dashoffset: 3.95; opacity: 1; }
              }
              .arrow-path {
                stroke-dasharray: 400 400;
                stroke-dashoffset: 400;
                animation: drawArrow 2s ease-out forwards;
              }
              .arrow-head-1 {
                stroke-dasharray: 30 30;
                stroke-dashoffset: -30;
                animation: drawArrowHead1 2s ease-out forwards;
              }
              .arrow-head-2 {
                stroke-dasharray: 30 30;
                stroke-dashoffset: 30;
                animation: drawArrowHead2 2s ease-out forwards;
              }
            `}</style>
            <clipPath id="arrow-clip">
              <rect x="0" y="0" width="130" height="180" />
            </clipPath>
          </defs>
          <g clipPath="url(#arrow-clip)">
            <g transform="matrix(1,0,0,1,10,5)">
              <path
                className="arrow-path"
                strokeLinecap="round"
                strokeLinejoin="miter"
                fillOpacity={0}
                strokeMiterlimit={4}
                stroke="rgb(71,71,71)"
                strokeOpacity={1}
                strokeWidth={10}
                fill="none"
                d="M87.863,164.729 C98.332,63.691 54.304,35.075 21.643,63.691 C-11.018,92.307 9.087,126.088 45.711,96.705 C76.875,71.702 82.2,31.817 82.2,5.404"
              />
            </g>
            <g transform="matrix(1,0,0,1,74.271,140.5)">
              <path
                className="arrow-head-1"
                strokeLinecap="round"
                strokeLinejoin="round"
                fillOpacity={0}
                stroke="rgb(71,71,71)"
                strokeOpacity={1}
                strokeWidth={10}
                fill="none"
                d="M44.601,5.85 C44.601,5.85 23.722,29.33 23.722,29.33"
              />
            </g>
            <g transform="matrix(1,0,0,1,74.271,140.5)">
              <path
                className="arrow-head-2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fillOpacity={0}
                stroke="rgb(71,71,71)"
                strokeOpacity={1}
                strokeWidth={10}
                fill="none"
                d="M23.722,29.33 C23.722,29.33 5.729,5.85 5.729,5.85"
              />
            </g>
          </g>
        </svg>
      )}
    </div>
  );
}