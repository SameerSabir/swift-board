"use client";

import Link from "next/link";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-secondary overflow-hidden">
      {/* Main footer content */}
      <div className="px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        {/* Brand — full width on mobile, col on desktop */}
        <div className="flex flex-col items-center text-center md:hidden mb-10">
          <span className="text-white font-bold text-xl mb-3">SwiftBoard</span>
          <p className="text-white/70 text-sm leading-relaxed max-w-xs">
            Structured collaboration for modern teams. Organize boards, control
            access, and manage content — all in one focused workspace.
          </p>

          {/* Download buttons — prominent on mobile */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full max-w-xs">
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-3 px-5 py-2.5 bg-black text-white rounded-xl transition duration-300 flex-1"
            >
              <span className="w-6 h-6 flex items-center justify-center shrink-0">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M318.7 268.6c-.4-42.6 34.8-62.9 36.4-63.9-19.9-29-50.8-33-61.6-33.4-26.2-2.7-51.2 15.4-64.6 15.4-13.3 0-33.9-15-55.7-14.6-28.6.4-55 16.6-69.7 42.2-29.8 51.7-7.6 128.4 21.4 170.3 14.2 20.4 31.1 43.3 53.3 42.4 21.4-.9 29.5-13.8 55.4-13.8 25.9 0 33.1 13.8 55.7 13.4 23-.4 37.6-20.8 51.7-41.4 16.3-23.8 23-46.8 23.4-48.1-.5-.2-44.8-17.2-45.2-68.5zM259.4 87.2c11.8-14.3 19.7-34.1 17.5-53.9-17 .7-37.6 11.3-49.8 25.6-11 12.8-20.6 33.1-18 52.6 18.9 1.5 38.5-9.6 50.3-24.3z"
                  />
                </svg>
              </span>
              <div className="flex flex-col leading-tight text-left">
                <span className="text-[10px] text-white/70">
                  Download on the
                </span>
                <span className="font-semibold text-sm">App Store</span>
              </div>
            </Link>

            <Link
              href="#"
              className="inline-flex items-center justify-center gap-3 px-5 py-2.5 bg-black text-white rounded-xl transition duration-300 flex-1"
            >
              <span className="w-6 h-6 flex items-center justify-center shrink-0">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#00A0FF"
                    d="M61.1 1.7c-3.6 3.9-5.9 10-5.9 18.3v472c0 8.3 2.3 14.4 5.9 18.3l.9.9L310.5 256 62 .8z"
                  />
                  <path
                    fill="#00E676"
                    d="M372.1 318.5L310.5 256 62 511.2c5.7 6.1 15.2 7.6 26.1 1.5l284-164.2z"
                  />
                  <path
                    fill="#FFEA00"
                    d="M372.1 193.5L88.1 29.3c-10.9-6.1-20.4-4.6-26.1 1.5L310.5 256l61.6-62.5z"
                  />
                  <path
                    fill="#FF3D00"
                    d="M451.9 233.9l-79.8-40.4L310.5 256l61.6 62.5 79.8-40.4c21.4-10.8 21.4-33.4 0-44.2z"
                  />
                </svg>
              </span>
              <div className="flex flex-col leading-tight text-left">
                <span className="text-[10px] text-white/70">Get it on</span>
                <span className="font-semibold text-sm">Google Play</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Divider on mobile between brand and links */}
        <div className="border-t border-white/10 mb-8 md:hidden" />

        {/* Nav links — 3 col grid on mobile, hidden brand col */}
        <div className="grid grid-cols-2 gap-6 md:hidden mb-2">
          <div>
            <p className="text-white font-bold text-base mb-3">Product</p>
            <ul className="space-y-2">
              {[
                { label: "Pricing", id: "pricing" },
                { label: "Solution", id: "solution" },
                { label: "Problems", id: "problem" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-white/70 text-sm hover:text-white transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* <div>
            <p className="text-white font-bold text-base mb-3">Company</p>
            <ul className="space-y-2">
              {["About", "Contact", "Help", "Privacy", "Terms"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          <div>
            <p className="text-white font-bold text-base mb-3">Support</p>
            <ul className="space-y-2">
              {["Terms Of Service", "Privacy"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Desktop layout — unchanged from original */}
        <div className="max-w-7xl mx-auto hidden md:grid md:grid-cols-4 gap-10 ">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-white font-bold text-lg md:text-xl">
                SwiftBoard
              </span>
            </div>
            <p className="text-white text-sm md:text-base leading-relaxed">
              Structured collaboration for modern teams. Organize boards,
              control access, and manage content — all in one focused workspace.
            </p>
          </div>

          <div>
            <p className="text-white font-bold text-base md:text-lg mb-4">
              Product
            </p>
            <ul className="space-y-2">
              {[
                { label: "Pricing", id: "pricing" },
                { label: "Solution", id: "solution" },
                { label: "Problems", id: "problem" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-white text-sm md:text-base hover:text-gray-400 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* <div>
            <p className="text-white font-bold text-base md:text-lg mb-4">
              Company
            </p>
            <ul className="space-y-2">
              {[
                "About",
                "Contact",
                "Help & Resources",
                "Privacy Policy",
                "Term of use",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-white text-sm md:text-base hover:text-gray-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          <div>
            <p className="text-white font-bold text-base md:text-lg mb-4">
              Support
            </p>
            <ul className="space-y-2">
              {["Terms Of Service", "Privacy"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-white text-sm md:text-base hover:text-gray-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-bold text-base md:text-lg mb-4">
              Download The App
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="inline-flex items-center gap-3 px-8 py-2 bg-black text-white rounded-xl transition duration-300"
                >
                  <span className="w-7 h-7 flex items-center justify-center shrink-0">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M318.7 268.6c-.4-42.6 34.8-62.9 36.4-63.9-19.9-29-50.8-33-61.6-33.4-26.2-2.7-51.2 15.4-64.6 15.4-13.3 0-33.9-15-55.7-14.6-28.6.4-55 16.6-69.7 42.2-29.8 51.7-7.6 128.4 21.4 170.3 14.2 20.4 31.1 43.3 53.3 42.4 21.4-.9 29.5-13.8 55.4-13.8 25.9 0 33.1 13.8 55.7 13.4 23-.4 37.6-20.8 51.7-41.4 16.3-23.8 23-46.8 23.4-48.1-.5-.2-44.8-17.2-45.2-68.5zM259.4 87.2c11.8-14.3 19.7-34.1 17.5-53.9-17 .7-37.6 11.3-49.8 25.6-11 12.8-20.6 33.1-18 52.6 18.9 1.5 38.5-9.6 50.3-24.3z"
                      />
                    </svg>
                  </span>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[10px]">Download on the</span>
                    <span className="font-semibold text-sm">App Store</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="inline-flex items-center gap-3 px-8 py-2 bg-black text-white rounded-xl transition duration-300"
                >
                  <span className="w-7 h-7 flex items-center justify-center shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#00A0FF"
                        d="M61.1 1.7c-3.6 3.9-5.9 10-5.9 18.3v472c0 8.3 2.3 14.4 5.9 18.3l.9.9L310.5 256 62 .8z"
                      />
                      <path
                        fill="#00E676"
                        d="M372.1 318.5L310.5 256 62 511.2c5.7 6.1 15.2 7.6 26.1 1.5l284-164.2z"
                      />
                      <path
                        fill="#FFEA00"
                        d="M372.1 193.5L88.1 29.3c-10.9-6.1-20.4-4.6-26.1 1.5L310.5 256l61.6-62.5z"
                      />
                      <path
                        fill="#FF3D00"
                        d="M451.9 233.9l-79.8-40.4L310.5 256l61.6 62.5 79.8-40.4c21.4-10.8 21.4-33.4 0-44.2z"
                      />
                    </svg>
                  </span>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[10px]">Get it on</span>
                    <span className="font-semibold text-sm">Google Play</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom watermark */}
      <div className="relative w-full flex items-center justify-center py-12 sm:py-16 md:py-24">
        <p className="absolute text-[clamp(50px,15vw,220px)] sm:text-[clamp(80px,12vw,260px)] md:text-[clamp(100px,10vw,300px)] text-center font-black text-gray-200/20 select-none leading-none pointer-events-none px-4">
          SwiftBoard
        </p>
      </div>
    </footer>
  );
}
