"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  data: FAQItem[];
  title?: string;
  description?: string;
}

const FAQs = ({
  data,
  title = "Frequently Asked Questions",
  description,
}: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const togglePanel = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="py-10 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="  max-w-lg h-fit ">
            <p className="lg:text-7xl text-slate-900  font-bold">{title}</p>

            {description && (
              <p className="mt-8 font-medium   text-xl text-slate-700 max-w-sm">
                {description}
              </p>
            )}
          </div>

          <div>
            {data.map((item, index) => {
              const isOpen = index === activeIndex;

              return (
                <div
                  key={index}
                  className={`mb-4 rounded-2xl bg-gray-100 border transition ${
                    isOpen
                      ? "border-gray-300"
                      : "border-transparent "
                  }`}
                >
                  <button
                    onClick={() => togglePanel(index)}
                    className="flex w-full items-center justify-between px-5 py-4 text-left text-slate-800 font-semibold text-lg"
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
                        transition={{ duration: 0.25, ease: "easeInOut" }}
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
