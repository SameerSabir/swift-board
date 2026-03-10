"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";

import logo1 from "@/assets/carousel/lufthansa-group.png";
import logo2 from "@/assets/carousel/lufthansa.png";
import logo3 from "@/assets/carousel/mdlive.png";
import logo4 from "@/assets/carousel/memd.png";
import logo5 from "@/assets/carousel/micron.png";
import logo6 from "@/assets/carousel/philips.png";
import logo7 from "@/assets/carousel/simplidata.png";

const logos = [
  { name: "Lufthansa Group", src: logo1 },
  { name: "Lufthansa", src: logo2 },
  { name: "MDLive", src: logo3 },
  { name: "MEMD", src: logo4 },
  { name: "Micron", src: logo5 },
  { name: "Philips", src: logo6 },
  { name: "Simplidata", src: logo7 },
];

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [
      AutoScroll({
        speed: 2,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  );

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <p className="text-center text-3xl text-neutral-900 font-bold mb-8">
        Syncs with calender, tasks apps, and your health data
      </p>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex items-center">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-none flex items-center justify-center px-8"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                className="h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
