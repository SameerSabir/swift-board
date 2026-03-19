"use client";

import { problems } from "@/constants/problem.constant";

export default function Problem() {
  return (
    <section
      className="bg-white px-4 sm:px-6 lg:px-8 py-10 sm:py-14"
      id="problem"
      aria-label="Problem with current productivity apps"
    >
      <div className="mx-auto max-w-7xl border border-gray-300 rounded-3xl px-10 py-16">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary ">
            The{" "}
            <span className="inline-block bg-primary text-white px-2 py-1 rounded-lg">
              Problem
            </span>{" "}
            With Current
            <br />
            Productivity Apps
          </h2>
        </div>

        <p className="text-center text-neutral-800 text-sm md:text-base mb-10 sm:mb-14">
          and Why They&apos;re Not Working For You
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {problems.map((p) => (
            <div
              key={p.number}
              className={` ${
                p.number === "01"
                  ? "bg-[#F5FAEC]"
                  : p.number === "02"
                  ? "bg-[#EFF6FF]"
                  : "bg-[#FFF7ED]"
              } rounded-2xl p-7 flex flex-col gap-4`}
            >
              <span className="text-black text-3xl md:text-5xl font-bold leading-none">
                {p.number}
              </span>
              <h3 className="text-black text-xl font-semibold leading-snug">
                {p.title}
              </h3>
              <p className="text-neutral-800 text-base leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
