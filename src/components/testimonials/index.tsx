"use client";

import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import avatar1 from "@/assets/iconauthorm.svg";

const testimonials = [
  {
    quote:
      "SwiftBoard has completely simplified how our team organizes information. Instead of jumping between chat apps, documents, and links, everything now lives inside one board. It has made collaboration smoother and our projects much easier to manage.",
    name: "Daniel Carter",
    role: "Product Manager",
    date: "Jan 12, 2026",
    bg: "bg-purple-100",
    avatar: "bg-yellow-400",
    avatarImage:avatar1
  },
  {
    quote:
      "SwiftBoard makes collaboration feel structured and effortless. Being able to control who can edit or view boards gives our team the clarity we were missing with other tools.",
    name: "Michael Grant",
    role: "Operations Manager",
    date: "Jan 18, 2026",
    bg: "bg-blue-100",
    avatar: "bg-blue-500",
      avatarImage:avatar1
  },
  {
    quote:
      "Before SwiftBoard, our resources were scattered across multiple tools. Now we keep documents, images, links, and notes all inside one board, which saves our team a huge amount of time and keeps everyone aligned.",
    name: "Amanda Lewis",
    role: "Marketing Lead",
    date: "Jan 5, 2026",
    bg: "bg-green-100",
    avatar: "bg-green-500",
      avatarImage:avatar1
  },

  {
    quote:
      "I love how easy it is to share content with my team. Whether it's a document, video, or quick note, everything is organized inside the board and accessible whenever we need it.",
    name: "Rachel Simmons",
    role: "Engineering Lead",
    date: "Feb 2, 2026",
    bg: "bg-pink-100",
    avatar: "bg-pink-500",
      avatarImage:avatar1
  },
  {
    quote:
      "The board messaging feature is incredibly useful. Our conversations stay connected to the content we're discussing, which keeps communication focused and productive.",
    name: "Sophia Bennett",
    role: "Team Lead",
    date: "Jan 30, 2026",
    bg: "bg-teal-100",
    avatar: "bg-teal-500",
      avatarImage:avatar1
  },
  {
    quote:
      "SwiftBoard has become our central workspace. Instead of searching through multiple apps, we know exactly where to go for project updates, files, and team discussions.",
    name: "Kevin Alvarez",
    role: "Project Coordinator",
    date: "Feb 2, 2026",
    bg: "bg-orange-100",
    avatar: "bg-red-400",
    avatarImage:avatar1
  },

  {
    quote:
      "What impressed me most about SwiftBoard is how simple it is to invite new members and assign roles. Our team can collaborate without worrying about accidental edits or confusion.",
    name: "Chris Donovan",
    role: "Creative Director",
    date: "Feb 10, 2026",
    bg: "bg-indigo-100",
    avatar: "bg-indigo-500",
      avatarImage:avatar1
  },
  {
    quote:
      "SwiftBoard has helped our team stay organized and work more efficiently. Everything from project resources to discussions is available in one place.",
    name: "Olivia Harper",
    role: "Startup Founder",
    date: "Dec 28, 2025",
    bg: "bg-yellow-100",
    avatar: "bg-orange-400",
      avatarImage:avatar1
      
  },
  {
    quote:
      "We replaced several tools with SwiftBoard and the difference is huge. Boards, content sharing, and real-time activity tracking make it easy to stay on top of everything.",
    name: "Nathan Cole",
    role: "Operations Head",
    date: "Feb 6, 2026",
    bg: "bg-rose-100",
    avatar: "bg-rose-500",
      avatarImage:avatar1
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "center",
    },
    [WheelGesturesPlugin({ forceWheelAxis: "x" })],
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((api: any) => {
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-0 pb-6 text-center relative">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-neutral-900 text-center">
          Don&apos;t take our <br />
          <span className="relative inline-block">
            <span>word</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 170 40"
              preserveAspectRatio="xMidYMid meet"
              className="absolute left-[5%] w-[90%] -bottom-4 lg:-bottom-9.5 h-auto block"
            >
              <defs>
                <style>{`
      @keyframes waveScroll {
        from { transform: translateX(0); }
        to   { transform: translateX(-69.374px); }
      }
      .wave-group {
        animation: waveScroll 1s linear infinite;
      }
    `}</style>

                <clipPath id="lottie-clip">
                  <rect x="0" y="0" width="220" height="40" />
                </clipPath>

                <mask
                  id="wave-mask"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="400"
                  height="40"
                >
                  <g className="wave-group" transform="translate(10.335,8.668)">
                    <g transform="translate(-52.654,0)">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="miter"
                        fillOpacity={0}
                        strokeMiterlimit={4}
                        stroke="white"
                        strokeOpacity={1}
                        strokeWidth={10}
                        fill="none"
                        d="M5.256,11.926 C14.43,2.752 29.304,2.752 38.478,11.926 C47.651,21.1 62.525,21.1 71.699,11.926 C80.873,2.752 95.747,2.752 104.921,11.926 C114.095,21.1 128.969,21.1 138.143,11.926 C147.316,2.752 162.19,2.752 171.364,11.926 C180.538,21.1 195.412,21.1 204.586,11.926 C213.76,2.752 228.634,2.752 237.808,11.926 C246.982,21.1 261.855,21.1 271.029,11.926 C280.203,2.752 295.077,2.752 304.251,11.926 C313.425,21.1 328.299,21.1 337.473,11.926 C346.647,2.752 361.52,2.752 370.694,11.926 C379.868,21.1 394.742,21.1 403.916,11.926 C413.09,2.752 427.964,2.752 437.138,11.926 C446.312,21.1 461.185,21.1 470.359,11.926 C479.533,2.752 494.407,2.752 503.581,11.926 C512.755,21.1 527.629,21.1 536.803,11.926 C545.977,2.752 560.85,2.752 570.024,11.926 C579.198,21.1 594.072,21.1 603.246,11.926"
                      />
                    </g>
                  </g>
                </mask>
              </defs>

              <g clipPath="url(#lottie-clip)">
                <g mask="url(#wave-mask)">
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="40"
                    fill="rgb(71,71,71)"
                  />
                </g>
              </g>
            </svg>
          </span>{" "}
          for it.
        </h2>

        <div className="flex justify-center gap-3 mt-10">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="flex items-center justify-center w-10 h-10 cursor-pointer rounded-full bg-secondary hover:bg-neutral-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft size={18} className="text-white" strokeWidth={2.5} />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="flex items-center justify-center w-10 h-10 cursor-pointer rounded-full bg-secondary hover:bg-neutral-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowRight size={18} className="text-white" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      <div className="mt-4">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 sm:gap-10 my-2">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_20%] min-w-0"
              >
                <div
                  className={`${t.bg} rounded-2xl p-6 sm:p-12 flex flex-col justify-between`}
                >
                  <p className="text-neutral-800 text-lg lg:text-xl leading-7.5 mb-8">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div
                      className={`${t.avatar} w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0`}
                    >
                      <Image
                        src={t.avatarImage}
                        alt={t.name}
                        width={24}
                        height={24}
                        className=" object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900 text-base leading-6.25">
                        {t.name}
                      </p>
                      <p className="text-neutral-500 text-sm leading-6.25">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
