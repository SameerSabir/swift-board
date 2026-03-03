"use client";

import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

const testimonials = [
  {
    quote:
      "I used to manage projects across chat apps, docs, and random tools. Things would get lost all the time. With SwiftBoard, everything lives inside one board. It's simple, structured, and my team finally knows where to look.",
    name: "Arjun",
    role: "Product Manager",
    date: "Jan 12, 2026",
    bg: "bg-purple-100",
    avatar: "bg-yellow-400",
  },
  {
    quote:
      "What I love most is the real-time activity tracking. I can see updates instantly without asking for status reports. It saves so much back-and-forth.",
    name: "Daniel",
    role: "Marketing Lead",
    date: "Jan 5, 2026",
    bg: "bg-green-100",
    avatar: "bg-green-500",
  },
  {
    quote:
      "We replaced three tools with SwiftBoard. Boards, content, messaging, and permissions — everything works together. It just feels organized.",
    name: "Sophia",
    role: "Operations Manager",
    date: "Jan 18, 2026",
    bg: "bg-blue-100",
    avatar: "bg-blue-500",
  },
  {
    quote:
      "SwiftBoard has completely changed how our remote team communicates. No more endless threads — everything is tied to a board and visible at a glance.",
    name: "Lena",
    role: "Engineering Lead",
    date: "Feb 2, 2026",
    bg: "bg-pink-100",
    avatar: "bg-pink-500",
  },
  {
    quote:
      "Before SwiftBoard, we constantly asked, 'Where is that file?' or 'Who updated this?' Now everything is inside one board, clearly organized. It has reduced confusion across our entire team.",
    name: "Rohan",
    role: "Project Coordinator",
    date: "Feb 2, 2026",
    bg: "bg-orange-100",
    avatar: "bg-red-400",
  },
  {
    quote:
      "I love how simple the permissions are. As an admin, I can control who edits and who just views. It gives me peace of mind without micromanaging.",
    name: "Ananya",
    role: "Team Lead",
    date: "Jan 30, 2026",
    bg: "bg-teal-100",
    avatar: "bg-teal-500",
  },
  {
    quote:
      "The built-in board messaging changed everything for us. We no longer switch between chat apps and project tools. Conversations stay connected to the work.",
    name: "Marcus",
    role: "Creative Director",
    date: "Feb 10, 2026",
    bg: "bg-indigo-100",
    avatar: "bg-indigo-500",
  },
  {
    quote:
      "As a startup founder, I need control without slowing my team down. The role system in SwiftBoard is perfect — I can assign editors and viewers easily, and nothing gets accidentally changed.",
    name: "Meera",
    role: "Startup Founder",
    date: "Dec 28, 2025",
    bg: "bg-yellow-100",
    avatar: "bg-orange-400",
  },
  {
    quote:
      "The activity section is incredibly useful. I can filter updates by board or date and instantly see what's happening. It saves me hours every week.",
    name: "Priya",
    role: "Operations Head",
    date: "Feb 6, 2026",
    bg: "bg-rose-100",
    avatar: "bg-rose-500",
  },
  {
    quote:
      "Inviting new members is seamless. If they're already on SwiftBoard, they join instantly. If not, they're automatically added once they sign up. It's smooth and professional.",
    name: "Ethan",
    role: "Startup Co-Founder",
    date: "Jan 25, 2026",
    bg: "bg-amber-100",
    avatar: "bg-amber-500",
  },
  {
    quote:
      "We used to rely on three different platforms for collaboration. Now everything — content, roles, discussions — lives in one structured space. SwiftBoard just makes sense.",
    name: "Isabella",
    role: "Product Designer",
    date: "Feb 14, 2026",
    bg: "bg-cyan-100",
    avatar: "bg-cyan-500",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "center",
      loop: false,
      slidesToScroll: 1,
      skipSnaps: false,
      dragThreshold: 1,
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
              <div key={i} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_20%] min-w-0">
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
