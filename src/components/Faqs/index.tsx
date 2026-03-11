"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "@/constants/faq.constant";
import Image from "next/image";

const FAQs = ({}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const togglePanel = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="pt-10 sm:pt-14 lg:mb-2">
      <div className="mx-auto bg-gray-100 px-10 pt-10 pb-10 lg:pt-30 lg:pb-14 rounded-3xl  relative">
        <Image
          src="/arrow-down.svg"
          alt="arrow down"
          width={180}
          height={180}
          className="absolute top-0 left-1/2 -translate-x-1/2 hidden lg:block z-10 pointer-events-none"
        />

        <Image
          src="/arrow-downb.svg"
          alt="arrow down"
          width={180}
          height={180}
          className="absolute -bottom-17 left-1/2 z-40 -translate-x-1/2 hidden lg:block  pointer-events-none"
        />

        <div className="grid max-w-7xl mx-auto grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 relative">
          <div className="max-w-lg h-fit">
            <p className="font-extrabold text-secondary leading-tight mb-4 text-4xl text-center lg:text-left lg:text-6xl">
              {faqData.title}
            </p>

            {faqData.description && (
              <p className="mt-4 text-neutral-900 text-sm md:text-base max-w-sm">
                {faqData.description}
              </p>
            )}

            <Image
              src="/backgrounddaqs.svg"
              alt="FAQ Illustration"
              width={300}
              height={300}
              className="relative top-65 ml-20 hidden lg:block"
            />
          </div>

          <div className="lg:min-h-225">
            {faqData.data.map((item, index) => {
              const isOpen = index === activeIndex;

              return (
                <div
                  key={index}
                  className={`mb-4 rounded-2xl bg-white shadow-sm  transition `}
                >
                  <button
                    onClick={() => togglePanel(index)}
                    className="flex w-full items-center justify-between px-5 py-6 text-left text-slate-800 font-semibold text-lg"
                    aria-expanded={isOpen}
                  >
                    <span>
                      {item.question}
                    </span>

                    <span
                      className={`ml-3 flex size-7 items-center justify-center rounded-full bg-gray-100 transition-transform duration-300 ${
                        isOpen ? "rotate-90 text-slate-800" : "text-neutral-500"
                      }`}
                    >
                      <ChevronRight size={18} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden px-5 pb-4"
                      >
                        <p
                          dangerouslySetInnerHTML={{ __html: item.answer }}
                          className="text-slate-700 text-lg"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
