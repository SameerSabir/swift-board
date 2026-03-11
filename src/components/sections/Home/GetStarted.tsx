import Image from "next/image";
import Link from "next/link";
import left from "@/assets/left-start.webp";
import right from "@/assets/start-right.webp";
import { ArrowRight } from "lucide-react";
import ArrowLottie from "@/components/ui/arrowLottie";

export default function GetStarted() {
  return (
    <section className="relative overflow-hidden bg-gray-100 py-12 px-6 mt-0 flex items-center justify-center min-h-107.5">
       <Image
                src="/arrow-down.svg"
                alt="arrow down"
                width={180}
                height={180}
                className="absolute top-0 left-1/2 -translate-x-1/2 hidden lg:block z-10 pointer-events-none"
              />
     <div className="absolute left-0 bottom-0 w-24 sm:w-28 md:w-36 lg:w-42 ">

        <Image
          src={left}
          alt="left image"
          className="w-full h-auto object-contain"
        />
      </div>


      <div className="absolute right-0 bottom-0 w-20 sm:w-28 md:w-36 lg:w-44 xl:w-52">
        <Image
          src={right}
          alt="right image"
          className="w-full h-auto object-contain"
        />
      </div>
  {/* <div className="relative md:-top-20 md:right-8 z-10 flex flex-col items-center gap-5 px-6 py-16 text-center">
        <div className="w-32 h-32">{<ArrowLottie />}</div>

        <h2 className="text-5xl md:text-7xl font-bold text-neutral-900  tracking-tight">
          Try Swift Board!
        </h2>

        <p className="text-lg md:text-xl text-neutral-800 max-w-sm">
          Get started instantly, no download required.
        </p>

        <Link
          href="#"
          className="mt-2 flex group items-center gap-6 px-4 py-3 lg:px-8 lg:py-4 bg-neutral-800 text-white text-sm md:text-lg font-medium rounded-2xl "
        >
          Get Swift Board Free
          <span className="group-hover:translate-x-2 transition-transform duration-300">
            <ArrowRight />
          </span>
        </Link>
      </div> */}
      <div className="relative z-10 flex flex-col items-center gap-2 text-center px-70">
            <div className="w-32 h-32 mr-8 py-2">{<ArrowLottie />}</div>

        <p className="text-3xl md:text-7xl font-semibold text-neutral-900 mt-20  tracking-tight">
          Try 
          <span className="font-shantell-sans ml-5">SwiftBoard</span>!
        </p>
        <p className="text-2xl md:text-3xl font-bold text-neutral-600">
          Get started{" "}
          <span
            className="italic font-bold font-shantell-sans"
          >
            today!
          </span>
        </p>

       <div className="flex items-center gap-4 pb-30 sm:gap-4 md:gap-6">
  <Link href="#" aria-label="Download on App Store" className="text-white hover:opacity-80 transition-opacity">
    <svg
      width="62" height="62"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10  md:w-14 md:h-14 "
    >
      <path d="M23.2 18.1c0-3.8 3.1-5.6 3.2-5.7-1.7-2.5-4.4-2.9-5.4-2.9-2.3-.2-4.5 1.4-5.6 1.4-1.2 0-2.9-1.3-4.8-1.3-2.5 0-4.8 1.5-6 3.7-2.6 4.5-.7 11.1 1.8 14.7 1.2 1.8 2.7 3.7 4.6 3.7 1.8-.1 2.5-1.2 4.7-1.2 2.2 0 2.8 1.2 4.7 1.1 2-.0 3.3-1.8 4.5-3.5 1.4-2 2-4 2-4.1-.1 0-3.7-1.5-3.7-5.9zM19.6 6.4c1-1.2 1.6-2.9 1.4-4.6-1.4.1-3.1.9-4.1 2.1-.9 1-1.7 2.7-1.5 4.3 1.6.1 3.2-.8 4.2-1.8z" fill="black"/>
    </svg>
  </Link>

  <Link href="#" aria-label="Get it on Google Play" className="text-white hover:opacity-80 transition-opacity">
    <svg
      width="56" height="56"
      viewBox="0 0 42 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
        className="w-9 h-9  md:w-13 md:h-13 "
    >
      <path d="M1.5 0.8L16.2 15.5L1.5 30.2C0.9 29.9 0.5 29.2 0.5 28.4V2.6C0.5 1.8 0.9 1.1 1.5 0.8Z" fill="black"/>
      <path d="M21.5 10.5L4.5 0.3L17.5 13.3L21.5 10.5Z" fill="black"/>
      <path d="M26.3 13.5C27.2 14 27.7 14.7 27.7 15.5C27.7 16.3 27.2 17 26.3 17.5L22.5 19.7L18.8 16L22.5 12.3L26.3 13.5Z" fill="black"/>
      <path d="M4.5 30.7L17.5 17.7L21.5 20.5L4.5 30.7Z" fill="black"/>
    </svg>
  </Link>
</div>
      </div>
    </section>
  );
}