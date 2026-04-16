"use client";
import { AnimatePresence, motion } from "motion/react";
import { easeOut } from "motion";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import OptimizedImage from "@/components/ui/OptimizedImage";
import phoneMockup1 from "@/assets/mockups/phone-mockup-1.webp";
import phoneMockup2 from "@/assets/mockups/phone-mockup-2.webp";
import phoneMockup3 from "@/assets/mockups/phone-mockup-3.webp";

const impactTexts = [
  "Organise Your Team\nThrough One\nPlatform",
  "Transform Leads\ninto Smart Decisions\nin Minutes",
];

const stats = [
  { value: "50K+", top: "ACTIVE", bottom: "USERS" },
  { value: "10K+", top: "TEAMS", bottom: "ONBOARDED" },
  { value: "4.8+", top: "APP STORE", bottom: "RATING" },
];

export default function HeroV2() {
  const [current, setCurrent] = useState(0);
  const [hoveredPhone, setHoveredPhone] = useState<number | null>(null);

  React.useEffect(() => {
    const charCount = impactTexts[current].replace(/\n/g, "").length;
    const typingDuration = (charCount * 0.05 + 0.1) * 1000; // stagger + delay
    const pauseAfterTyping = 1500; // pause after typing completes

    const timeout = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % impactTexts.length);
    }, typingDuration + pauseAfterTyping);

    return () => clearTimeout(timeout);
  }, [current]);

  const variants = {
    initial: { y: 16, opacity: 0, filter: "blur(4px)" },
    animate: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.45, ease: easeOut },
    },
    exit: {
      y: -16,
      opacity: 0,
      filter: "blur(4px)",
      transition: { duration: 0.3, ease: easeOut },
    },
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const letterVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.1, ease: easeOut },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.05 },
    },
  };

  const letters = impactTexts[current].split("").map((char, idx) => ({
    char,
    isLineBreak: char === "\n",
    key: idx,
  }));

  return (
    <section
      id="home"
      className="relative flex flex-col bg-primary-light pt-32 sm:pt-37 rounded-2xl overflow-visible"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-6 left-6 right-6 h-[66%] sm:h-[58%] bg-white rounded-2xl" />
      </div>

      <Image
        src="/line.svg"
        alt="Decorative line"
        width={1600}
        height={183}
        className="absolute bottom-12 w-full h-auto pointer-events-none object-cover object-[50%_80%]"
        priority
      />

      <div className="relative z-10 w-full mx-auto max-w-7xl flex flex-col px-4 sm:px-6">
        <div className="flex justify-between w-full pt-6 sm:pt-8 max-w-5xl px-2 sm:px-0 mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-18">
          {stats.map((stat, i) => (
            <div key={i} className="text-left">
              <div className="font-plus-jakarta font-black text-secondary leading-none tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                {stat.value}
              </div>
              <div className="font-plus-jakarta font-normal italic text-secondary/60 uppercase leading-snug mt-1 text-sm sm:text-base md:text-xl lg:text-2xl tracking-widest">
                {stat.top}
                <br />
                {stat.bottom}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-start md:gap-6 lg:gap-8 pb-8 sm:pb-10 md:pb-12 lg:pb-16 p-3 sm:p-0">
          <div className="order-1 md:order-2 w-full md:w-[50%] mt-10 sm:mt-0">
            <div
              className="relative w-full mx-auto overflow-visible"
              style={{ aspectRatio: "1 / 0.85", maxWidth: "560px" }}
            >
              <motion.div
                initial={{ opacity: 0, x: 120 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
                style={{
                  zIndex: hoveredPhone === 1 ? 50 : hoveredPhone === 3 ? 5 : 30,
                }}
                className="absolute left-[5%] sm:left-[10%] bottom-0 w-[46%]"
                onMouseEnter={() => setHoveredPhone(1)}
                onMouseLeave={() => setHoveredPhone(null)}
              >
                <motion.div
                  animate={{
                    scale:
                      hoveredPhone === 1
                        ? 1.0
                        : hoveredPhone !== null
                        ? 0.96
                        : 1,
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  style={{
                    willChange: "transform, opacity",
                    transformOrigin: "bottom center",
                  }}
                >
                  <OptimizedImage
                    src={phoneMockup1}
                    alt="SwiftBoard Boards"
                    imageclassName="w-full h-auto rounded-[1.25rem] sm:rounded-3xl shadow-lg"
                    priority
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 120 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: easeOut }}
                style={{
                  zIndex:
                    hoveredPhone === 2
                      ? 50
                      : hoveredPhone === 1 || hoveredPhone === 3
                      ? 40
                      : 20,
                }}
                className="absolute left-[32%] sm:left-[38%] bottom-0 w-[42%]"
                onMouseEnter={() => setHoveredPhone(2)}
                onMouseLeave={() => setHoveredPhone(null)}
              >
                <motion.div
                  animate={{
                    scale:
                      hoveredPhone === 2
                        ? 1.0
                        : hoveredPhone !== null
                        ? 0.96
                        : 1,
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  style={{
                    willChange: "transform, opacity",
                    transformOrigin: "bottom center",
                  }}
                >
                  <OptimizedImage
                    src={phoneMockup2}
                    alt="SwiftBoard Pages"
                    imageclassName="w-full h-auto rounded-[1.25rem] sm:rounded-3xl shadow-lg"
                    priority
                  />
                </motion.div>
              </motion.div>

              {/* Phone 3 — right */}
              <motion.div
                initial={{ opacity: 0, x: 120 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.8, ease: easeOut }}
                style={{
                  zIndex: hoveredPhone === 3 ? 50 : hoveredPhone === 1 ? 5 : 10,
                }}
                className="absolute right-[6%] sm:right-0 bottom-0 w-[38%]"
                onMouseEnter={() => setHoveredPhone(3)}
                onMouseLeave={() => setHoveredPhone(null)}
              >
                <motion.div
                  animate={{
                    scale:
                      hoveredPhone === 3
                        ? 1.0
                        : hoveredPhone !== null
                        ? 0.96
                        : 1,
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  style={{
                    willChange: "transform, opacity",
                    transformOrigin: "bottom center",
                  }}
                >
                  <OptimizedImage
                    src={phoneMockup3}
                    alt="SwiftBoard Messages"
                    imageclassName="w-full h-auto rounded-[1.25rem] sm:rounded-3xl shadow-lg"
                    priority
                  />
                </motion.div>
              </motion.div>

              <div className="absolute left-1/2 bottom-[10%] w-[70%] h-[50%] rounded-full bg-primary/6 blur-3xl z-0 pointer-events-none" />
            </div>
          </div>

          <div className="order-2 md:order-1 w-full md:w-[50%] shrink-0 flex flex-col items-center md:items-start text-center md:text-left pt-6 sm:pt-8 md:pt-0 pb-2 md:pb-0 px-2 sm:px-4 md:px-0 mt-10">
            {/* <div style={{ perspective: 1000 }}>
              <AnimatePresence mode="wait">
                <motion.h1
                  key={current}
                  className="font-plus-jakarta font-extrabold tracking-tight mb-4 md:mb-6 text-secondary leading-[1.08] text-3xl sm:text-4xl md:text-5xl"
                  style={{
                    backfaceVisibility: "hidden",
                    willChange: "transform, opacity, filter",
                  }}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {impactTexts[current]}
                </motion.h1>
              </AnimatePresence>
            </div> */}
            {/* Typing Animation - Letter by Letter */}
            <div style={{ perspective: 1000 }}>
              <AnimatePresence mode="wait">
                <motion.h1
                  key={current}
                  className="font-plus-jakarta font-extrabold tracking-tight mb-4 md:mb-6 text-secondary leading-[1.08] text-3xl sm:text-4xl md:text-5xl"
                  variants={containerVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {letters.map((item, index) => {
                    if (item.isLineBreak) {
                      return <br key={index} />;
                    }
                    return (
                      <motion.span key={index} variants={letterVariants}>
                        {item.char === " " ? "\u00A0" : item.char}
                      </motion.span>
                    );
                  })}
                </motion.h1>
              </AnimatePresence>
            </div>
            <p className="mb-6 md:mb-10 leading-relaxed text-secondary/80 font-medium text-sm md:text-base lg:text-lg max-w-xl">
              Create ideas, get instant voting, and make clear decisions quickly
              available right on your keyboard on Android or iOS.
            </p>

            <div className="flex flex-row gap-3 w-full max-w-md md:max-w-none">
              <Link
                href="https://apps.apple.com/us/app/swiftboard-work-keyboard/id6757534203"
                target="_blank"
                className="inline-flex items-center justify-center gap-3 px-4 sm:px-5 py-2.5 bg-black text-white rounded-xl transition duration-300 flex-1 md:flex-initial"
              >
                <span className="w-8 h-8 flex items-center justify-center shrink-0">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M318.7 268.6c-.4-42.6 34.8-62.9 36.4-63.9-19.9-29-50.8-33-61.6-33.4-26.2-2.7-51.2 15.4-64.6 15.4-13.3 0-33.9-15-55.7-14.6-28.6.4-55 16.6-69.7 42.2-29.8 51.7-7.6 128.4 21.4 170.3 14.2 20.4 31.1 43.3 53.3 42.4 21.4-.9 29.5-13.8 55.4-13.8 25.9 0 33.1 13.8 55.7 13.4 23-.4 37.6-20.8 51.7-41.4 16.3-23.8 23-46.8 23.4-48.1-.5-.2-44.8-17.2-45.2-68.5zM259.4 87.2c11.8-14.3 19.7-34.1 17.5-53.9-17 .7-37.6 11.3-49.8 25.6-11 12.8-20.6 33.1-18 52.6 18.9 1.5 38.5-9.6 50.3-24.3z"
                    />
                  </svg>
                </span>
                <div className="flex flex-col leading-tight text-left">
                  <span className="text-[10px] text-white/70">
                    Download on the
                  </span>
                  <span className="font-semibold text-sm">App Store</span>
                </div>
              </Link>

              <Link
                href="https://play.google.com/store/apps/details?id=com.easymt.swiftboard.contentkeyboard"
                target="_blank"
                className="inline-flex items-center justify-center gap-3 px-4 sm:px-5 py-2.5 bg-black text-white rounded-xl transition duration-300 flex-1 md:flex-initial"
              >
                <span className="w-7.5 h-7.5 flex items-center justify-center shrink-0">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#00A0FF"
                      d="M61.1 1.7c-3.6 3.9-5.9 10-5.9 18.3v472c0 8.3 2.3 14.4 5.9 18.3l.9.9L310.5 256 62 .8z"
                    />
                    <path
                      fill="#00E676"
                      d="M372.1 318.5L310.5 256 62 511.2c5.7 6.1 15.2 7.6 26.1 1.5l284-164.2z"
                    />
                    <path
                      fill="#FFEA00"
                      d="M372.1 193.5L88.1 29.3c-10.9-6.1-20.4-4.6-26.1 1.5L310.5 256l61.6-62.5z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M451.9 233.9l-79.8-40.4L310.5 256l61.6 62.5 79.8-40.4c21.4-10.8 21.4-33.4 0-44.2z"
                    />
                  </svg>
                </span>
                <div className="flex flex-col leading-tight text-left">
                  <span className="text-[10px] text-white/70">Get it on</span>
                  <span className="font-semibold text-sm">Google Play</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
