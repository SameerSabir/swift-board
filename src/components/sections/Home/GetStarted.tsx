import Image from "next/image";
import Link from "next/link";
import left from "@/assets/left-start.webp";
import right from "@/assets/start-right.webp";

export default function GetStarted() {
  return (
    <section className="relative overflow-hidden bg-primary/60 py-12 px-6 mt-40 flex items-center justify-center min-h-107.5">
      
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

      <div className="relative z-10 flex flex-col items-center gap-6 text-center px-70">
        <h2 className="text-3xl md:text-7xl font-bold text-neutral-900">
          Get started{" "}
          <span
            className="italic font-bold font-shantell-sans"
          >
            today!
          </span>
        </h2>

       <div className="flex items-center gap-4 sm:gap-4 md:gap-6">
  <Link href="#" aria-label="Download on App Store" className="text-white hover:opacity-80 transition-opacity">
    <svg
      width="62" height="62"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10  md:w-14 md:h-14 "
    >
      <path d="M23.2 18.1c0-3.8 3.1-5.6 3.2-5.7-1.7-2.5-4.4-2.9-5.4-2.9-2.3-.2-4.5 1.4-5.6 1.4-1.2 0-2.9-1.3-4.8-1.3-2.5 0-4.8 1.5-6 3.7-2.6 4.5-.7 11.1 1.8 14.7 1.2 1.8 2.7 3.7 4.6 3.7 1.8-.1 2.5-1.2 4.7-1.2 2.2 0 2.8 1.2 4.7 1.1 2-.0 3.3-1.8 4.5-3.5 1.4-2 2-4 2-4.1-.1 0-3.7-1.5-3.7-5.9zM19.6 6.4c1-1.2 1.6-2.9 1.4-4.6-1.4.1-3.1.9-4.1 2.1-.9 1-1.7 2.7-1.5 4.3 1.6.1 3.2-.8 4.2-1.8z" fill="white"/>
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
      <path d="M1.5 0.8L16.2 15.5L1.5 30.2C0.9 29.9 0.5 29.2 0.5 28.4V2.6C0.5 1.8 0.9 1.1 1.5 0.8Z" fill="white"/>
      <path d="M21.5 10.5L4.5 0.3L17.5 13.3L21.5 10.5Z" fill="white"/>
      <path d="M26.3 13.5C27.2 14 27.7 14.7 27.7 15.5C27.7 16.3 27.2 17 26.3 17.5L22.5 19.7L18.8 16L22.5 12.3L26.3 13.5Z" fill="white"/>
      <path d="M4.5 30.7L17.5 17.7L21.5 20.5L4.5 30.7Z" fill="white"/>
    </svg>
  </Link>
</div>
      </div>
    </section>
  );
}