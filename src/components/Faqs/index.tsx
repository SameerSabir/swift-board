"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "@/constants/faq.constant";
import Image from "next/image";

const FAQs = ({ }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const togglePanel = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="py-10 relative mb-10 ">
      <div className="mx-auto  max-w-7xl bg-gray-50 px-10 py-10 lg:py-30 rounded-3xl  overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="max-w-lg h-fit">
            <Image src="/arrow-down.svg" alt="arrow down" width={200} height={200} className=" absolute top-0 left-1/2 -translate-x-1/2 hidden lg:block" />
            <Image src="/arrow-downb.svg" alt="arrow down" width={200} height={200} className=" absolute bottom-1  left-1/2  -translate-x-1/2 hidden lg:block" />

            <p className="font-extrabold text-secondary leading-tight mb-4 text-4xl text-center lg:text-left lg:text-5xl">{faqData.title}</p>

            {faqData.description && (
              <p className="mt-5 font-medium text-xl text-secondary max-w-sm">
                {faqData.description}
              </p>
            )}

            <Image src="/backgrounddaqs.svg" alt="FAQ Illustration" width={300} height={300} className=" relative top-75 ml-20 hidden lg:block" />

          </div>

          <div className=" lg:min-h-225">
            {faqData.data.map((item, index) => {
              const isOpen = index === activeIndex;

              return (
                <div
                  key={index}
                  className={`mb-4 rounded-2xl bg-white shadow-sm border transition ${isOpen
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
                      className={`ml-3 flex size-7 items-center justify-center rounded-full bg-gray-100 transition-transform duration-300 ${isOpen ? "rotate-90 text-slate-800" : "text-neutral-500"
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
