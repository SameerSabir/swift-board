"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import step2 from "@/assets/h1-app-screen-1.webp";
import step3a from "@/assets/h1-app-screen-6.webp";
import step3b from "@/assets/h1-app-screen-6.webp";
import step3c from "@/assets/h1-app-screen-6.webp";
import step3d from "@/assets/h1-app-screen-6.webp";
import step3f from "@/assets/h1-app-screen-6.webp";


const stepsData = [
  {
    number: "1",
    title: "They Scattered Your Team Across Tools…",
    description:
      "Most teams use one app for files, another for chat, another for notes, and another for sharing links. Ideas get lost. Files get buried. Communication breaks. Productivity drops.",
  },
  {
    number: "2",
    title: "They Don't Control Who Does What…",
    description:
      "Many board and content apps let everyone edit everything — or restrict too much. Without clear roles like Admin, Editor, and Viewer, collaboration turns into confusion.",
  },
  {
    number: "3",
    title: "They Store Content — But Don't Structure It…",
    description:
      "Uploading files is easy. Organizing them properly isn't. Without structured boards, real-time updates, and clear activity tracking, teamwork becomes messy and reactive.",
  },
];


const stepBgs  = ["#F5FAEC", "#EFF6FF", "#FFF7ED", "#F5F3FF"];
const stepDots = ["#D9E8C8", "#C7DBF5", "#F2D9C3", "#DAD4F0"];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const midY = window.innerHeight * 0.5;
      const els = containerRef.current.querySelectorAll<HTMLElement>("[data-step]");
      let current = 0;
      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < midY) current = Number(el.dataset.step);
      });
      setActiveStep(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  <section className="relative">
 
  <div className="hidden lg:flex absolute top-20 py-90 left-20 h-full flex-col gap-4">
    <div className="sticky top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {stepsData.map((_, index) => {
        const isActive = activeStep === index;
        return (
          <div key={index} className="relative flex h-4 w-4 items-center justify-center">
            <div
              className={`absolute h-4 w-4 rounded-full border transition-colors duration-300 ${
                isActive ? "border-neutral-900" : "border-neutral-400"
              }`}
            />
            <motion.div
              className="absolute h-3.5 w-3.5 rounded-full"
              style={{ backgroundColor: isActive ? stepDots[activeStep] : "transparent" }}
              initial={false}
              animate={{ scale: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            />
          </div>
        );
      })}
    </div>
  </div>

      <motion.div
        className="mx-auto max-w-7xl px-6 py-24 lg:rounded-3xl"
        animate={{ backgroundColor: stepBgs[activeStep] }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <div className="relative mb-20 text-center">
          <p className="text-3xl md:text-5xl font-bold max-w-lg text-neutral-900 inline-block relative">
            The Problem with Current Productivity Apps
          </p>
        </div>

        <div ref={containerRef} className="space-y-20 md:space-y-40">


          <div data-step="0" className="grid gap-20 lg:grid-cols-2">
            <div className="flex justify-center items-center ">
              <div className="max-w-md">
                <div className="mb-4 flex items-start gap-4">
                  <span className="flex h-8 w-8 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-white">
                    {stepsData[0].number}
                  </span>
                  <p className="text-xl md:text-3xl font-bold leading-snug text-neutral-800">
                    {stepsData[0].title}
                  </p>
                </div>
                <p className="ml-14 text-base md:text-lg text-neutral-600">
                  {stepsData[0].description}
                </p>
              </div>
            </div>
            <div className="relative flex justify-center items-center">
              <div className="absolute inset-0 m-auto right-10 bg-[url('/how_it_work/chart.svg')] bg-cover bg-center bg-no-repeat" />
              <Image
                src="/how_it_work/step1.svg"
                alt="Step 1 illustration"
                width={640}
                height={420}
                className="relative z-10 rounded-2xl"
              />
            </div>
          </div>


          <div data-step="1" className="relative grid items-center gap-20 lg:grid-cols-2">
            <div className="absolute inset-0 right-25 bg-[url('/how_it_work/chart.svg')] bg-contain bg-center bg-no-repeat" />
            <div className="flex justify-center items-center ">
              <div className="max-w-md">
                <div className="mb-4 flex items-start gap-4">
                  <span className="flex h-8 w-8 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-white">
                    {stepsData[1].number}
                  </span>
                  <p className="text-xl md:text-3xl font-bold leading-snug text-neutral-800">
                    {stepsData[1].title}
                  </p>
                </div>
                <p className="ml-14 text-base md:text-lg text-neutral-600">
                  {stepsData[1].description}
                </p>
              </div>
            </div>
            <div className="relative justify-center">
              <Image
                src={step2}
                alt="step2"
                width={640}
                height={420}
                className="relative z-10 rounded-2xl"
              />
            </div>
          </div>


          <div data-step="2" className="relative grid gap-20 lg:grid-cols-2">
            <div className="absolute inset-0 lg:h-175 lg:w-200 m-auto bg-[url('/how_it_work/background-step3.svg')] bg-cover bg-center bg-no-repeat" />
            <div className="flex justify-center">
              <div className="sticky top-32 h-fit max-w-md">
                <div className="mb-4 flex items-start gap-4">
                  <span className="flex h-8 w-8 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-white">
                    {stepsData[2].number}
                  </span>
                  <p className="text-xl md:text-3xl font-bold leading-snug text-neutral-800">
                    {stepsData[2].title}
                  </p>
                </div>
                <p className="ml-14 text-base md:text-lg text-neutral-600">
                  {stepsData[2].description}
                </p>
              </div>
            </div>
            <div className="relative flex flex-col items-center justify-center">
              <div className="space-y-24">
                {[step3a, step3b, step3c, step3d, step3f].map((img, i) => (
                  <div key={i} className="relative flex justify-center">
                    <div className="absolute h-90 w-90 rounded-full" />
                    <Image
                      src={img}
                      alt=""
                      width={420}
                      height={420}
                      className="relative z-10 rounded-2xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}