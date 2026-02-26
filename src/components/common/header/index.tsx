"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import Image from "next/image";
import LogoLight from "@/assets/logo-light.png";
import ThemeButton from "@/components/ui/ThemeButton";

const navItems = [
  { name: "Problem", id: "problem" },
  { name: "Solution", id: "solution" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = item.id;
            break;
          }
        }
      }
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="bg-secondary">
        <div className="flex items-center justify-center py-2.5 px-4">
          <a
            href="#"
            className="text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors duration-200 text-center"
          >
            ✦ Swift Board v2.0 is here — faster, smarter, beautiful.{" "}
            <span className="underline underline-offset-2">Read more →</span>
          </a>
        </div>
      </div>

      <nav
        className="bg-white border-b border-gray-100 px-4 py-4 lg:px-8"
        aria-label="Global"
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="-m-1.5 p-1.5 flex items-center space-x-2 cursor-pointer"
          >
            <Image
              src={LogoLight}
              alt="Swift Board Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold text-secondary hidden sm:inline">
              Swift Board
            </span>
          </button>

          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex gap-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                      relative px-4 py-2 text-base font-semibold cursor-pointer transition-colors duration-300

                      ${
                        activeSection === item.id
                          ? "text-primary"
                          : "text-secondary hover:text-primary"
                      }

                      after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 
                      after:w-0 hover:after:w-full after:transition-all after:duration-300
                      ${
                        activeSection === item.id
                          ? "after:w-full after:bg-primary"
                          : "after:bg-primary"
                      }
                    `}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

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

          <div className="hidden lg:flex items-center gap-x-4">
            <ThemeButton
              text="Download App"
              variant="shimmer"
              onClick={() => scrollToSection("download")}
            />
          </div>
        </div>
      </nav>

      <div
        className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        <div
          className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection("home")}
              className="-m-1.5 p-1.5 flex items-center space-x-2"
            >
              <Image
                src={LogoLight}
                alt="Swift Board Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold text-secondary hidden sm:inline">
                Swift Board
              </span>
            </button>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-secondary cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className=" flex flex-col min-h-[calc(100vh-120px)]">
              {/* Navigation Items at the top */}
              <div className="space-y-2 py-6 flex flex-col">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full relative rounded-lg text-left cursor-pointer px-3 py-3 text-lg font-semibold leading-7 transition-all duration-200 ${
                      activeSection === item.id
                        ? "text-primary"
                        : "text-secondary hover:text-primary"
                    }
                        
                    
                      after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 
                      after:w-0 hover:after:w-full after:transition-all after:duration-300
                      ${
                        activeSection === item.id
                          ? "after:w-full after:bg-primary"
                          : "after:bg-primary"
                      }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              <div className="mt-auto">
                <div className="w-full h-px bg-gray-200 my-2"></div>

                <div className="py-6 space-y-3">
                  <ThemeButton
                    text="Download App"
                    variant="shimmer"
                    onClick={() => scrollToSection("download")}
                    className="w-full"
                  />
                  <ThemeButton
                    text="Get Started"
                    onClick={() => scrollToSection("deal")}
                    icon={<Sparkles className="w-5 h-5" />}
                    variant="primary"
                    className="w-full rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
