"use client";

export default function Solution() {
  return (
    <section className="relative overflow-hidden bg-secondary flex flex-col items-center pb-12 sm:pb-16 lg:pb-20 ">
      <div className="absolute top-0 left-1/2 -translate-x-1/2  bg-[radial-gradient(ellipse,rgba(155,50,255,0.18)_0%,transparent_70%)] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(155,50,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(155,50,255,0.04) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase
             bg-purple-100 text-purple-600 border border-purple-200"
          >
            <span className="w-1.5 h-1.5 rounded-full inline-block bg-primary" />
            Solutions
          </span>
        </div>

        <div className="mb-4">
          <p className="text-4xl lg:text-5xl font-bold text-secondary">
            The Features{" "}
            <span className="block mt-1">
              Collaboration —{" "}
              <span className="text-primary">Without The Chaos.</span>
            </span>
          </p>
        </div>
        <p className="text-neutral-500 text-sm md:text-base mb-14 max-w-2xl">
          Most tools scatter your team across chats, files, and apps. SwiftBoard
          brings everything into structured boards with clear roles, real-time
          updates, and controlled access.
        </p>
      </div>
    </section>
  );
}
