"use client";

import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

const testimonials = [
  {
    quote:
      "SwiftBoard has completely simplified how our team organizes information. Instead of jumping between chat apps, documents, and links, everything now lives inside one board. It has made collaboration smoother and our projects much easier to manage.",
    name: "Daniel Carter",
    role: "Product Manager",
    date: "Jan 12, 2026",
    bg: "bg-purple-100",
    avatar: "bg-yellow-400",
  },
  {
    quote:
      "Before SwiftBoard, our resources were scattered across multiple tools. Now we keep documents, images, links, and notes all inside one board, which saves our team a huge amount of time and keeps everyone aligned.",
    name: "Amanda Lewis",
    role: "Marketing Lead",
    date: "Jan 5, 2026",
    bg: "bg-green-100",
    avatar: "bg-green-500",
  },
  {
    quote:
     "SwiftBoard makes collaboration feel structured and effortless. Being able to control who can edit or view boards gives our team the clarity we were missing with other tools.",
    name: "Michael Grant",
    role: "Operations Manager",
    date: "Jan 18, 2026",
    bg: "bg-blue-100",
    avatar: "bg-blue-500",
  },
  {
    quote:
      "I love how easy it is to share content with my team. Whether it's a document, video, or quick note, everything is organized inside the board and accessible whenever we need it.",
    name: "Rachel Simmons",
    role: "Engineering Lead",
    date: "Feb 2, 2026",
    bg: "bg-pink-100",
    avatar: "bg-pink-500",
  },
  {
    quote:
      "SwiftBoard has become our central workspace. Instead of searching through multiple apps, we know exactly where to go for project updates, files, and team discussions.",
    name: "Kevin Alvarez",
    role: "Project Coordinator",
    date: "Feb 2, 2026",
    bg: "bg-orange-100",
    avatar: "bg-red-400",
  },
  {
    quote:
      "The board messaging feature is incredibly useful. Our conversations stay connected to the content we're discussing, which keeps communication focused and productive.",
    name: "Sophia Bennett",
    role: "Team Lead",
    date: "Jan 30, 2026",
    bg: "bg-teal-100",
    avatar: "bg-teal-500",
  },
  {
    quote:
      "What impressed me most about SwiftBoard is how simple it is to invite new members and assign roles. Our team can collaborate without worrying about accidental edits or confusion.",
    name: "Chris Donovan",
    role: "Creative Director",
    date: "Feb 10, 2026",
    bg: "bg-indigo-100",
    avatar: "bg-indigo-500",
  },
  {
    quote:
     "SwiftBoard has helped our team stay organized and work more efficiently. Everything from project resources to discussions is available in one place.",
    name: "Olivia Harper",
    role: "Startup Founder",
    date: "Dec 28, 2025",
    bg: "bg-yellow-100",
    avatar: "bg-orange-400",
  },
  {
    quote:
      "We replaced several tools with SwiftBoard and the difference is huge. Boards, content sharing, and real-time activity tracking make it easy to stay on top of everything.",
    name: "Nathan Cole",
    role: "Operations Head",
    date: "Feb 6, 2026",
    bg: "bg-rose-100",
    avatar: "bg-rose-500",
  },
  
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "center",
    },
    [WheelGesturesPlugin({ forceWheelAxis: "x" })]
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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 text-center">
          Don&apos;t take our <br />
          <span className="relative inline-block">
            <span className="">word</span>
            <svg
              className="absolute left-0 -bottom-2 w-full"
              height="14"
              viewBox="0 0 120 14"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#171717"
                strokeWidth="5.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <animate
                  attributeName="d"
                  dur="2s"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keyTimes="0; 0.5; 1"
                  keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                  values="
                    M0,7 C8,2 16,12 24,7 C32,2 40,12 48,7 C56,2 64,12 72,7 C80,2 88,12 96,7 C104,2 112,12 120,7;
                    M0,7 C8,12 16,2 24,7 C32,12 40,2 48,7 C56,12 64,2 72,7 C80,12 88,2 96,7 C104,12 112,2 120,7;
                    M0,7 C8,2 16,12 24,7 C32,2 40,12 48,7 C56,2 64,12 72,7 C80,2 88,12 96,7 C104,2 112,12 120,7
                  "
                />
              </path>
            </svg>
          </span>{" "}
          for it.
        </h2>

        <div className="flex justify-center gap-3 mt-8">
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
                      {t.name[0]}
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
