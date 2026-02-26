"use client";

const problems = [
  {
    number: "01",
    title: "They Scattered Your Team Across Tools…",
    description:
      "Most teams use one app for files, another for chat, another for notes, and another for sharing links.Ideas get lost. Files get buried. Communication breaks. Productivity drops.",
  },
  {
    number: "02",
    title: "They Don't Control Who Does What…",
    description:
      "Many board and content apps let everyone edit everything — or restrict too much.Without clear roles like Admin, Editor, and Viewer, collaboration turns into confusion.",
  },
  {
    number: "03",
    title: "They Store Content — But Don't Structure It…",
    description:
      "Uploading files is easy. Organizing them properly isn't.Without structured boards, real-time updates, and clear activity tracking, teamwork becomes messy and reactive.",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="mx-auto max-w-7xl border border-gray-300 rounded-3xl px-10 py-16">

        <div className="text-center mb-4">
          <p className="text-3xl md:text-5xl font-bold text-neutral-900 ">
            The{" "}
            <span className="inline-block bg-[#9B32FF] text-white px-2 py-1 rounded-lg">
              Problem
            </span>{" "}
            With Current
            <br />
            Productivity Apps
          </p>
        </div>


        <p className="text-center text-neutral-500 text-sm md:text-base mb-14">
          and Why They&apos;re Not Working For You
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {problems.map((p) => (
            <div
              key={p.number}
              className={` ${p.number === "01" ? "bg-[#F5FAEC]" : p.number === "02" ? "bg-[#EFF6FF]" : "bg-[#FFF7ED]"} rounded-2xl p-7 flex flex-col gap-4`}
            >
              <span className="text-black text-3xl md:text-5xl font-bold leading-none">
                {p.number}
              </span>
              <h3 className="text-black text-xl font-semibold leading-snug">
                {p.title}
              </h3>
              <p className="text-neutral-500 text-base leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}