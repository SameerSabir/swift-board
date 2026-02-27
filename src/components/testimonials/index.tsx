"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { Stars } from "../ui/dynamicstars";

const testimonials = [
  {
    stars: 5,
    quote:
      "I used to manage projects across chat apps, docs, and random tools. Things would get lost all the time. With SwiftBoard, everything lives inside one board. It's simple, structured, and my team finally knows where to look.",
    name: "Arjun",
    role: "Product Manager",
    date: "Jan 12, 2026",
  },
  {
    stars: 5,
    quote:
      "As a startup founder, I need control without slowing my team down. The role system in SwiftBoard is perfect — I can assign editors and viewers easily, and nothing gets accidentally changed.",
    name: "Meera",
    role: "Startup Founder",
    date: "Dec 28, 2025",
  },
  {
    stars: 5,
    quote:
      "What I love most is the real-time activity tracking. I can see updates instantly without asking for status reports. It saves so much back-and-forth.",
    name: "Daniel",
    role: "Marketing Lead",
    date: "Jan 5, 2026",
  },
  {
    stars: 5,
    quote:
      "We replaced three tools with SwiftBoard. Boards, content, messaging, and permissions — everything works together. It just feels organized.",
    name: "Sophia",
    role: "Operations Manager",
    date: "Jan 18, 2026",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: false,
  });

  const sectionRef = useRef<HTMLElement>(null);
  const scrollCooldown = useRef(false);

  useEffect(() => {
    if (!emblaApi) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (scrollCooldown.current) return;

      scrollCooldown.current = true;
      setTimeout(() => (scrollCooldown.current = false), 600);

      if (e.deltaY > 0) {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext();
        } else {
          window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
        }
      } else {
        emblaApi.scrollPrev();
      }
    };

    const viewport = emblaApi.rootNode();
    viewport.addEventListener("wheel", onWheel, { passive: false });

    return () => viewport.removeEventListener("wheel", onWheel);
  }, [emblaApi]);

  return (
    <section ref={sectionRef} className="bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-0 py-10 sm:py-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 text-center leading-tight ">
          Teams Just Like Yours Are Already Using{" "}
          <span className="inline-flex items-center">
            <span className="bg-primary text-white px-3 py-1 rounded-lg mx-1">
              SwiftBoard
            </span>
          </span>{" "}
          To Collaborate Smarter
        </h2>
      </div>

      <div className="flex justify-center items-center px-6">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex items-stretch my-2">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="flex-none w-72 md:w-80 px-2">
                <div className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm h-full">
                  <div>
                    <Stars count={t.stars} />
                    <p className="text-neutral-700 text-sm leading-relaxed">
                      {t.quote}
                    </p>
                  </div>
                  <div className="mt-6">
                    <p className="font-bold text-neutral-900 text-sm">
                      {t.name}
                    </p>
                    <p className="text-neutral-500 text-sm">{t.role}</p>
                    {t.date && (
                      <p className="text-neutral-400 text-xs mt-1">{t.date}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-3 mt-6 mr-10">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 bg-white shadow-sm hover:bg-neutral-50 transition-colors"
        >
          <ChevronLeft size={18} className="text-neutral-700" />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 bg-white shadow-sm hover:bg-neutral-50 transition-colors"
        >
          <ChevronRight size={18} className="text-neutral-700" />
        </button>
      </div>
    </section>
  );
}
