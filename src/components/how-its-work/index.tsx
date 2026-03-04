"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import step1 from "@/assets/h1-app-screen-6.webp";
import step2 from "@/assets/h1-app-screen-1.webp";
import step3a from "@/assets/h1-app-screen-6.webp";
import step3b from "@/assets/h1-app-screen-6.webp";
import step3c from "@/assets/h1-app-screen-6.webp";
import step3d from "@/assets/h1-app-screen-6.webp";
import step3f from "@/assets/h1-app-screen-6.webp";

const stepsData = [
  {
    number: "01",
    title: "Create Your Board",
    description:
      "Start by creating a dedicated board for your project, client, or idea. Give it a name, add an emoji, and instantly set up a focused workspace. Every project begins with clarity.",
    image: step1,
  },
  {
    number: "02",
    title: "Add All Your Content",
    description:
      "Bring everything into one structured space. Upload images, write text notes, attach videos, add audio recordings, share documents, or paste important links — all organized inside your board. No switching apps. No scattered files.",
    image: step2,
  },
  {
    number: "03",
    title: "Invite Your Team",
    description:
      "Collaboration is just one click away. Add members to your board and assign roles — Admin, Editor, or Viewer — so everyone has the right level of access. Full control. Zero confusion.",
    image: [step3a, step3b, step3c, step3d, step3f],
  },
  {
    number: "04",
    title: "Chat Inside The Board",
    description:
      "Discuss where the work happens. Every board includes built-in messaging, so all members can communicate in context — share updates, clarify tasks, and reference content without leaving the workspace. Conversations stay connected to the project.",
    image: step2,
  },
  {
    number: "05",
    title: "Duplicate When Needed",
    description:
      "Need to reuse a structure? Duplicate boards instantly to replicate workflows, templates, or recurring projects — saving time and keeping consistency across teams. Work smarter, not harder.",
    image: step1,
  },
  {
    number: "06",
    title: "Keep Things Clean",
    description:
      "When a project is complete, move the board to trash. Restore it anytime or permanently delete it when it’s no longer needed. Stay organized without losing control.",
    image: step2,
  },
  {
    number: "07",
    title: "Access Anywhere (Even From Extension)",
    description:
      "Your boards don’t stay locked inside one tab. Access and create boards directly from the SwiftBoard browser extension — so you can capture ideas and organize work instantly, from anywhere on the web.",
    image: step1,
  },
];

const stepBgs = [
  "#ECFDF5",
  "#EFF6FF",
  "#FFF7ED",
  "#F5F3FF",
  "#F0F9FF",
  "#FEF3C7",
  "#FEE2E2",
];

const stepDots = [
  "#86EFAC",
  "#60A5FA",
  "#FDBA74",
  "#C4B5FD",
  "#67E8F9",
  "#FACC15",
  "#F87171",
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const midY = window.innerHeight * 0.5;
      const els =
        containerRef.current.querySelectorAll<HTMLElement>("[data-step]");
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
      <div className="hidden lg:flex absolute py-40 top-20 left-20 h-full flex-col gap-4">
        <div className="sticky top-1/2 -translate-y-1/2 flex flex-col gap-2">
          {stepsData.map((_, index) => {
            const isActive = activeStep === index;
            return (
              <div
                key={index}
                className="relative flex h-4 w-4 items-center justify-center"
              >
                <div
                  className={`absolute h-3.5 w-3.5 rounded-full transition-colors duration-300 ${
                    isActive ? "bg-transparent" : "bg-gray-300"
                  }`}
                />
                <motion.div
                  className="absolute h-3.5 w-3.5 rounded-full"
                  style={{ backgroundColor: stepDots[activeStep] }}
                  initial={false}
                  animate={{
                    scale: isActive ? 1 : 0,
                    opacity: isActive ? 1 : 0,
                  }}
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
            How It Works
          </p>
          <p className="text-lg text-neutral-600 mt-8 max-w-4xl mx-auto">
            SwiftBoard keeps collaboration simple. Create a board, add content,
            invite your team, and everything stays structured in one place.
          </p>
        </div>

        <div ref={containerRef} className="space-y-20 md:space-y-40">
          {stepsData.map((step, i) => (
            <div
              key={i}
              data-step={i}
              className="grid gap-20 lg:grid-cols-2 relative"
            >
              {i === 1 && (
                <div className="absolute left-90 inset-0 lg:h-80 lg:w-120  bg-[url('/how_it_work/chart.svg')] bg-cover bg-center bg-no-repeat" />
              )}
              {i === 2 && (
                <div className="absolute left-90 inset-0 lg:h-110 lg:w-150  bg-[url('/how_it_work/background-step3.svg')] bg-cover bg-center bg-no-repeat" />
              )}
              <div className="flex justify-center items-start">
                <div
                  className={`max-w-md ${
                    i === 2 ? "sticky top-1/2 -translate-y-1/2 h-fit" : ""
                  }`}
                >
                  <div className="mb-4 flex items-start gap-4">
                    <span className="flex h-8 w-8 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-white">
                      {step.number}
                    </span>
                    <p className="text-xl md:text-3xl font-bold leading-snug text-neutral-800">
                      {step.title}
                    </p>
                  </div>
                  <p className="ml-14 text-base md:text-lg text-neutral-600">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="relative flex justify-center items-center">
                {i === 2 ? (
                  <div className="space-y-24 flex flex-col items-center">
                    {[step3a, step3b, step3c, step3d, step3f].map(
                      (img, idx) => (
                        <div key={idx} className="relative flex justify-center">
                          <div className="absolute h-90 w-90 rounded-full" />
                          <Image
                            src={img}
                            alt={`Step 3 image ${idx + 1}`}
                            width={420}
                            height={420}
                            className="relative z-10 rounded-2xl"
                          />
                        </div>
                      )
                    )}
                  </div>
                ) : (
                  <Image
                    src={step.image as any}
                    alt={`Step ${step.number} illustration`}
                    width={420}
                    height={420}
                    className="relative z-10 rounded-2xl"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
