"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

import step2 from "@/assets/h1-app-screen-1.webp";
import step3a from "@/assets/h1-app-screen-6.webp";
import step3b from "@/assets/h1-app-screen-6.webp";
import step3c from "@/assets/h1-app-screen-6.webp";
import step3d from "@/assets/h1-app-screen-6.webp";
import step3f from "@/assets/h1-app-screen-6.webp";

const stepBgs = ["#F5FAEC", "#EFF6FF", "#FFF7ED", "#F5F3FF"];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const ref0 = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);

  const inView0 = useInView(ref0, { amount: 0.4 });
  const inView1 = useInView(ref1, { amount: 0.4 });
  const inView2 = useInView(ref2, { amount: 0.4 });
  const inView3 = useInView(ref3, { amount: 0.4 });

  if (inView2) activeStep !==2 && setActiveStep(2);
  else if (inView1) activeStep !== 1 && setActiveStep(1);
  else if (inView0) activeStep !== 0 && setActiveStep(0);
  

  return (
    <section >
      <motion.div
        className="mx-auto max-w-7xl  px-6 py-24 rounded-3xl"
        animate={{ backgroundColor: stepBgs[activeStep] }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <div className="relative mb-20 text-center">
          <p className="text-3xl md:text-5xl font-bold max-w-lg text-neutral-900 inline-block relative">
            The Problem with Current Productivity Apps
          </p>
        </div>

        <div className="space-y-20 md:space-y-40">
          <div ref={ref0} className="grid gap-20 lg:grid-cols-2">
            <div className="flex justify-center items-center ">
              <div className="max-w-md">
                <div className="mb-4 flex items-start gap-4">
                  <span className="flex h-8 w-8 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-white">
                    1
                  </span>
                  <p className="text-xl md:text-3xl font-bold leading-snug text-neutral-800">
                    They Scattered Your Team Across Tools…
                  </p>
                </div>
                <p className="ml-14 text-base md:text-lg text-neutral-600">
                  Most teams use one app for files, another for chat, another
                  for notes, and another for sharing links. Ideas get lost.
                  Files get buried. Communication breaks. Productivity drops.
                </p>
              </div>
            </div>
            <div className="relative hidden lg:block   justify-center">
              <div className="absolute h-95 w-95 rounded-full blur-3xl" />
              <Image
                src="/how_it_work/step1.svg"
                alt=""
                width={640}
                height={420}
                className="relative z-10 rounded-2xl"
              />
            </div>
          </div>

          <div ref={ref1} className="grid items-center gap-20 lg:grid-cols-2">
            <div className="flex justify-center items-center ">
              <div className="max-w-md">
                <div className="mb-4 flex items-start gap-4">
                  <span className="flex h-8 w-8 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-white">
                    2
                  </span>
                  <p className="text-xl md:text-3xl font-bold leading-snug text-neutral-800">
                    They Don't Control Who Does What…
                  </p>
                </div>
                <p className="ml-14 text-base md:text-lg text-neutral-600">
                  Many board and content apps let everyone edit everything — or
                  restrict too much. Without clear roles like Admin, Editor, and
                  Viewer, collaboration turns into confusion.
                </p>
              </div>
            </div>
            <div className="relative hidden lg:block justify-center">
              <div className="absolute h-95 w-95 rounded-full   " />
              <Image
                src={step2}
                alt="step2"
                width={640}
                height={420}
                className="relative z-10  rounded-2xl"
              />
            </div>
          </div>

          <div ref={ref2} className="relative grid gap-20 lg:grid-cols-2">
            <div className="flex justify-center">
              <div className="sticky top-32 h-fit max-w-md">
                <div className="mb-4 flex items-start gap-4">
                  <span className="flex h-8 w-8 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-white">
                    3
                  </span>
                  <p className="text-xl md:text-3xl font-bold leading-snug text-neutral-800">
                    They Store Content — But Don't Structure It…
                  </p>
                </div>
                <p className="ml-14 text-base md:text-lg text-neutral-600">
                  Uploading files is easy. Organizing them properly isn't.
                  Without structured boards, real-time updates, and clear
                  activity tracking, teamwork becomes messy and reactive.
                </p>
              </div>
            </div>
            <div className="relative hidden lg:block   justify-center">
              <div className="absolute h-95 w-95 rounded-full  " />
              <Image
                src={step3a}
                alt="step3a"
                width={420}
                height={420}
                className="relative z-10 rounded-2xl"
              />
            </div>
            {/* <div className="space-y-24">
              {[step3a, step3b, step3c, step3d, step3f].map((img, i) => (
                <div key={i} className="relative flex justify-center">
                  <div className="absolute h-90 w-90 rounded-full " />
                  <Image
                    src={img}
                    alt=""
                    width={420}
                    height={420}
                    className="relative z-10 rounded-2xl"
                  />
                </div>
              ))}
            </div> */}
          </div>

          {/* <div ref={ref3} className="grid items-center gap-20 lg:grid-cols-2">
            <div className="flex justify-center items-center ">
              <div className="max-w-md">
                <div className="mb-4 flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-white">
                    4
                  </span>
                  <p className="text-3xl font-semibold leading-snug text-neutral-800">
                    Start by <span className="text-lime-500">Importing</span> or{" "}
                    <span className="text-lime-500">Pasting</span> your text
                  </p>
                </div>
                <p className="ml-14 text-lg text-neutral-600">
                  Forget prompting, Napkin works directly from your text.
                </p>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="absolute h-95 w-95 rounded-full  " />
              <Image
                src={step2}
                alt="step2"
                width={640}
                height={420}
                className="relative z-10 rounded-2xl"
              />
            </div>
          </div> */}
        </div>
      </motion.div>
    </section>
  );
}
