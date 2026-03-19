import Image from "next/image";
import left from "@/assets/left-start.webp";
import right from "@/assets/start-right.webp";
import ArrowLottie from "@/components/ui/arrowLottie";

export default function GetStarted() {
  return (
    <section className="relative overflow-hidden py-20  px-6 flex items-center justify-center bg-linear-to-b from-gray-100 to-white">
      
      <Image
        src="/arrow-down.svg"
        alt="arrow down"
        width={180}
        height={180}
        className="absolute top-0 left-1/2 -translate-x-1/2 hidden lg:block z-10 pointer-events-none"
      />


      <div className="absolute left-10 w-24 sm:w-28 md:w-36 hidden lg:block">
        <Image
          src={left}
          alt="left image"
          width={168}
          height={168}
          className="w-full h-auto object-contain"
        />
      </div>


      <div className="absolute right-0 bottom-20 w-20 sm:w-28 md:w-36 xl:w-52 hidden lg:block">
        <Image
          src={right}
          alt="right image"
          width={208}
          height={208}
          className="w-full h-auto object-contain"
        />
      </div>


      <div className="absolute w-150 h-150 bg-primary/20 blur-[160px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-2xl">
     
        <div className="w-42 h-42">
          <ArrowLottie />
        </div>


        <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
          Try{" "}
          <span className="font-shantell-sans text-primary">SwiftBoard</span>
        </h2>


        <p className="text-lg md:text-xl text-neutral-800">
          Get started{" "}
          <span className="italic font-shantell-sans text-neutral-900">
            today
          </span>{" "}
          and streamline your workflow.
        </p>


        {/* <Link
          href="#"
          className="group flex items-center gap-3 lg:px-8 px-6 py-3 lg:py-4 bg-neutral-900 text-white text-sm lg:text-lg font-medium rounded-full hover:bg-neutral-800 transition-all"
        >
          Get SwiftBoard Free
          <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
        </Link> */}

        <div className="flex items-center gap-6 pt-4">
          <a
            href="https://apps.apple.com/us/app/swiftboard-work-keyboard/id6757534203"
            target="_blank"
            aria-label="Download on App Store"
            className="hover:scale-105 transition-transform duration-100"
          >
            <svg
              width="62"
              height="62"
              viewBox="0 0 38 38"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 md:w-14 md:h-14"
            >
              <path
                d="M23.2 18.1c0-3.8 3.1-5.6 3.2-5.7-1.7-2.5-4.4-2.9-5.4-2.9-2.3-.2-4.5 1.4-5.6 1.4-1.2 0-2.9-1.3-4.8-1.3-2.5 0-4.8 1.5-6 3.7-2.6 4.5-.7 11.1 1.8 14.7 1.2 1.8 2.7 3.7 4.6 3.7 1.8-.1 2.5-1.2 4.7-1.2 2.2 0 2.8 1.2 4.7 1.1 2-.0 3.3-1.8 4.5-3.5 1.4-2 2-4 2-4.1-.1 0-3.7-1.5-3.7-5.9zM19.6 6.4c1-1.2 1.6-2.9 1.4-4.6-1.4.1-3.1.9-4.1 2.1-.9 1-1.7 2.7-1.5 4.3 1.6.1 3.2-.8 4.2-1.8z"
                fill="black"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
