"use client";

import { useState, useEffect } from "react";

import { Menu, X, Zap, Sparkles, ChevronRight } from "lucide-react";

const navItems = [
  { name: "Problem", id: "problem" },
  { name: "Solution", id: "solution" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <nav
        className="mx-auto max-w-7xl px-4 py-4 lg:px-8 lg:py-4"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex lg:flex-none">
            <button
              onClick={() => scrollToSection("home")}
              className="-m-1.5 p-1.5 flex items-center space-x-2 cursor-pointer"
            >
              <Zap className="w-7 h-7 text-slate-900" />
              <span className="text-2xl font-bold text-slate-900 hidden sm:inline">
                Swift Board
              </span>
            </button>
          </div>

          {/* Desktop navigation - centered */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex gap-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-base font-semibold transition-colors duration-300 relative cursor-pointer ${
                    activeSection === item.id
                      ? "text-slate-900"
                      : "text-slate-600 hover:text-slate-900"
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 ${
                    activeSection === item.id
                      ? "after:bg-slate-900"
                      : "after:bg-slate-600"
                  } after:transition-all after:duration-300`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop right side */}
          <div className="hidden lg:flex lg:flex-none lg:items-center lg:gap-x-4">
            <button
              onClick={() => scrollToSection("download")}
              className="rounded-full bg-slate-900 px-8 py-3 text-base font-bold text-white shadow-lg hover:bg-slate-800 transition-all duration-300 flex items-center gap-2 hover:shadow-2xl hover:scale-105 hover:-translate-y-0.5 cursor-pointer"
            >
              Download App
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <button
                onClick={() => scrollToSection("home")}
                className="-m-1.5 p-1.5 flex items-center space-x-2"
              >
                <Zap className="w-5 h-5 text-indigo-600" />
                <span className="text-xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Swift Board
                </span>
              </button>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Mobile top bar info */}
            <div className="mt-4 flex items-center space-x-2 bg-slate-50 p-3 rounded-lg">
              <button
                onClick={() => scrollToSection("focuzed")}
                className="flex items-center"
              >
                <Sparkles className="w-4 h-4 text-violet-600 mr-1" />
                <span className="text-base font-medium text-slate-900">
                  Focuzed.io
                </span>
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => scrollToSection("problem")}
                className="text-sm text-slate-600 hover:text-violet-600"
              >
                Problem
              </button>
              <ChevronRight className="w-3 h-3 text-gray-300" />
              <button
                onClick={() => scrollToSection("solution")}
                className="text-sm text-slate-600 hover:text-violet-600"
              >
                Solution
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 flex flex-col items-center">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full rounded-lg px-3 py-3 text-lg font-semibold leading-7 ${
                        activeSection === item.id
                          ? "text-violet-600 bg-violet-50"
                          : "text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
                <div className="py-6 space-y-3">
                  <button
                    onClick={() => scrollToSection("download")}
                    className="flex w-full items-center justify-center rounded-lg px-3 py-3 text-lg font-semibold leading-7 text-violet-600 hover:bg-slate-50"
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download App
                  </button>
                  <button
                    onClick={() => scrollToSection("deal")}
                    className="flex w-full items-center justify-center rounded-lg bg-linear-to-r from-violet-600 to-purple-600 px-3 py-3 text-lg font-semibold leading-7 text-white shadow-md"
                  >
                    <Sparkles className="w-5 h-5 mr-3" />
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
