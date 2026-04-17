"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import step1 from "@/assets/how-its-work/create-board.webp";
import step2 from "@/assets/how-its-work/add-content.webp";
import step3 from "@/assets/how-its-work/chat.webp";
import step4 from "@/assets/how-its-work/invite.webp";
import step5 from "@/assets/how-its-work/duplicate.webp";
import step6 from "@/assets/how-its-work/keep-clean.webp";
import step7 from "@/assets/how-its-work/access-boards-keyboards.webp";

const stepsData = [
  {
    number: "01",
    title2: "Make",
    title: "Customised Board",
    description:
      "Start your project with a clear roadmap. Create a board for an idea, client, or project based on specific requirements to follow. Name the board and set up a focused workspace.",
    image: step1,
  },
  {
    number: "02",
    title2: "Add All",
    title: "your content",
    description:
      "Bring everything into one organized space. Upload images, write text notes, attach videos, add audio recordings, share documents, or paste important links. Everything stays inside your board. No switching between apps and no scattered files.",
    image: step2,
  },
  {
    number: "03",
    title2: "Invite",
    title: "Team on Board",
    description:
      "Add team members and assign tasks with specific roles. Provide the assignee the right level of access. Track progress with full control over responsibilities.",
    image: step3,
  },
  {
    number: "04",
    title2: "Chat",
    title: "within the Board",
    description:
      "Stay connected with your team without leaving the workspace. No need to change the platforms to discuss the ideas. Communicate, share updates, and clarify the tasks of your ongoing project while staying at one platform.",
    image: step4,
  },
  {
    number: "05",
    title2: "Create",
    title: "Duplicate Board Easily",
    description:
      "Maintain consistency among teams with duplicate boards. Repeat templates, workflows, and recurring projects to save time. Reuse the structure to keep projects cohesive in the workspace.",
    image: step5,
  },
  {
    number: "06",
    title2: "Keep",
    title: "Workspace Organised",
    description:
      "Move boards to bin when no longer needed. You can retrieve them when required or can remove them permanently. Make your workspace clutter-free before the start of new projects.",
    image: step6,
  },
  {
    number: "07",
    title2: "Navigate",
    title: "Boards from Keyboard",
    description:
      "Access your boards anytime from the keyboard. Your images, recordings, documents, text, and links will be just a tap away. Click and share them instantly with your team while staying in the app.",
    image: step7,
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
  "text-green-500",
  "text-blue-400",
  "text-orange-500",
  "text-purple-500",
  "text-cyan-500",
  "text-yellow-500",
  "text-red-500",
];

const steppoints = [
  "#22c55e",
  "#60a5fa",
  "#f97316",
  "#a855f7",
  "#06b6d4",
  "#eab308",
  "#ef4444",
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
    <section className="relative my-20" aria-label="How it works">
      <div className="hidden xl:flex absolute py-40 top-20 left-20 h-full flex-col gap-4">
        <nav
          aria-label="Step navigation"
          className="sticky top-1/2 -translate-y-1/2 flex flex-col gap-2"
        >
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
                  style={{ backgroundColor: steppoints[activeStep] }}
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
        </nav>
      </div>

      <motion.div
        className="mx-auto max-w-7xl px-6 py-24 lg:rounded-3xl"
        animate={{ backgroundColor: stepBgs[activeStep] }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <div className="relative mb-20 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary inline-block relative">
            <span className="relative inline-block">
              How
              <svg
                viewBox="0 0 80 10"
                className="absolute left-0 right-0  overflow-visible"
                style={{ bottom: "-16px", width: "100%", height: "10px" }}
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2,6 Q40,-15 78,6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            it works
          </h2>
          {/* <p className="text-lg text-neutral-600 mt-8 max-w-4xl mx-auto">
            SwiftBoard keeps collaboration simple. Create a board, add content,
            invite your team, and everything stays structured in one place.
          </p> */}
        </div>

        <div ref={containerRef} className="space-y-20 md:space-y-40 relative">
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
                  className={`max-w-md 
                   
                  `}
                >
                  <div className="mb-4 flex items-start gap-4">
                    <span className="flex h-8 w-8 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-white">
                      {step.number}
                    </span>
                    <h3 className="text-xl md:text-4xl font-plus-jakarta font-bold leading-snug text-neutral-800">
                      <span
                        className={`font-shantell-sans! font-bold ${stepDots[i]}`}
                      >
                        {step.title2}
                      </span>{" "}
                      {step.title}
                    </h3>
                  </div>
                  <p className="ml-14 text-base md:text-lg font text-neutral-900">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="relative flex justify-center items-center">
                <Image
                  src={step.image}
                  alt={`Step ${step.number}: ${step.title2} ${step.title}`}
                  width={420}
                  height={420}
                  style={{ height: "auto" }}
                  className="relative z-10 shadow-[0_10px_20px_rgba(0,0,0,0.05)] rounded-2xl"
                />
              </div>
            </div>
          ))}
          <Image
            src="/arrow-downbhow.svg"
            alt="arrow down"
            width={180}
            height={180}
            style={{ height: "auto" }}
            className="absolute -bottom-78 left-1/2 -translate-x-1/2 hidden  lg:block z-10 pointer-events-none"
          />
        </div>
      </motion.div>
    </section>
  );
}
