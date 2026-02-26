"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "@/constants/faq.constant";

const FAQs = ({}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const togglePanel = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="max-w-lg h-fit">
          <p className="font-extrabold text-secondary leading-tight mb-4 text-4xl lg:text-5xl">
            {faqData.title}
          </p>

          {faqData?.description && (
            <p className="mt-5 font-medium text-xl text-secondary max-w-sm">
              {faqData?.description}
            </p>
          )}
        </div>

        <div>
          {faqData?.data.map((item, index) => {
            const isOpen = index === activeIndex;

            return (
              <div
                key={index}
                className={`mb-4 rounded-2xl bg-gray-100 border transition ${
                  isOpen ? "border-gray-300" : "border-transparent "
                }`}
              >
                <button
                  onClick={() => togglePanel(index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-slate-800 font-semibold text-lg cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>
                    {index + 1}. {item.question}
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
                      className="overflow-hidden px-5 pb-4 "
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
  );
};

export default FAQs;
