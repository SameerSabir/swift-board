"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";
import LogoLight from "@/assets/logo-light.png";
import ThemeButton from "@/components/ui/ThemeButton";
import { useRouter, usePathname } from "next/navigation";

const navItems = [
  { name: "Home", id: "home", type: "scroll" },
  { name: "Problem", id: "problem", type: "scroll" },
  { name: "Solution", id: "solution", type: "scroll" },
  { name: "Blog", id: "blog", type: "route", href: "/blog" },
];

const containerVariants: Variants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.65, 0, 0.35, 1] as const,
      staggerChildren: 0,
      staggerDirection: -1,
    },
  },
};

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
  closed: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.15 },
  },
};

const footerVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
  closed: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.15 },
  },
};

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.25">
      <span
        className={`block h-0.5 transition-all duration-300 ease-in-out origin-center ${
          isOpen
            ? "w-6 translate-y-1.75 rotate-45 bg-primary"
            : "w-6 bg-gray-700"
        }`}
      />
      <span
        className={`block h-0.5 transition-all duration-200 ease-in-out ${
          isOpen ? "w-0 opacity-0 bg-primary" : "w-6 opacity-100 bg-gray-700"
        }`}
      />
      <span
        className={`block h-0.5 transition-all duration-300 ease-in-out origin-center ${
          isOpen
            ? "w-6 -translate-y-1.75 -rotate-45 bg-primary"
            : "w-6 bg-gray-700"
        }`}
      />
    </div>
  );
}

function NavButton({
  item,
  onScroll,
  isActive,
}: {
  item: (typeof navItems)[0];
  onScroll: (id: string, type: string, href?: string) => void;
  isActive: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const drawn = isActive || isHovered;

  return (
    <button
      onClick={() => onScroll(item.id, item.type, item.href)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`Navigate to ${item.name} section`}
      className={`relative px-4 py-2 text-base font-semibold cursor-pointer transition-colors duration-300 ${
        isActive ? "text-primary" : "text-secondary hover:text-primary"
      }`}
    >
      <span className="relative inline-block">
        {item.name}

        <svg
          viewBox="0 0 80 10"
          width="100%"
          height="10"
          className="absolute left-0 -bottom-1"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,6 Q40,1 80,6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            style={{
              strokeDasharray: 100,
              strokeDashoffset: drawn ? 0 : 100,
              transition: drawn
                ? "stroke-dashoffset 0.5s ease-out"
                : "stroke-dashoffset 0.3s ease-in",
            }}
          />
        </svg>
      </span>
    </button>
  );
}

function MobileNavButton({
  item,
  onScroll,
  isActive,
}: {
  item: (typeof navItems)[0];
  onScroll: (id: string, type: string, href?: string) => void;
  isActive: boolean;
}) {
  return (
    <button
      onClick={() => onScroll(item.id, item.type, item.href)}
      className={`
                      w-full text-left px-3 py-4 rounded-xl text-lg font-semibold
                      transition-colors duration-300 relative cursor-pointer
                      ${
                        isActive
                          ? "text-primary"
                          : "text-secondary hover:text-primary"
                      }
                      after:content-[''] after:absolute after:bottom-0 after:left-3 after:h-0.5
                      after:transition-all after:duration-300
                      ${
                        isActive
                          ? "after:w-[calc(100%-24px)] after:bg-primary"
                          : "after:w-0 hover:after:w-[calc(100%-24px)] after:bg-primary"
                      }
                    `}
    >
      {item.name}
    </button>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollSection, setScrollSection] = useState("");
  const isNavigating = useRef(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (id: string, type: string, href?: string) => {
    setMobileMenuOpen(false);

    if (type === "route" && href) {
      router.push(href);
      return;
    }

    isNavigating.current = true;

    if (pathname !== "/") {
      setScrollSection(id);
      router.push("/");

      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 100;
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - headerOffset,
            behavior: "smooth",
          });
        } else {
          isNavigating.current = false;
        }
      }, 600);
    } else {
      setScrollSection(id);
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 100;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - headerOffset,
          behavior: "smooth",
        });
      } else {
        isNavigating.current = false;
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isNavigating.current || pathname !== "/") return;

      let currentSection = "";
      for (const item of navItems) {
        if (item.type === "scroll") {
          const el = document.getElementById(item.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              currentSection = item.id;
              break;
            }
          }
        }
      }
      setScrollSection((prevSection) =>
        currentSection !== prevSection ? currentSection : prevSection
      );
    };

    const handleScrollEnd = () => {
      isNavigating.current = false;
    };

    // Check initial scroll position on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scrollend", handleScrollEnd);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scrollend", handleScrollEnd);
    };
  }, [pathname]);

  const isNavItemActive = (item: (typeof navItems)[0]): boolean => {
    if (item.type === "route") {
      return pathname === item.href;
    }
    if (pathname !== "/") {
      return false;
    }
    return scrollSection === item.id;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-secondary">
        <div className="flex items-center justify-center py-2.5 px-4">
          <a
            href="https://apps.apple.com/us/app/swiftboard-work-keyboard/id6757534203"
            target="_blank"
            className="text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors duration-200 text-center"
          >
            ✦ Swift Board v2.0 is here — faster, smarter, beautiful.{" "}
          </a>
        </div>
      </div>

      <nav
        className="bg-white border-b border-gray-100 px-4 py-4 lg:px-8"
        aria-label="Global"
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home", "scroll")}
            aria-label="SwiftBoard home"
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
              SwiftBoard
            </span>
          </button>

          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex gap-x-3">
              {navItems.map((item) => (
                <NavButton
                  key={item.id}
                  item={item}
                  onScroll={scrollToSection}
                  isActive={isNavItemActive(item)}
                />
              ))}
            </div>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 cursor-pointer"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <MenuIcon isOpen={mobileMenuOpen} />
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-x-4">
            <ThemeButton
              text="Download App"
              as="a"
              variant="shimmer"
              href="https://apps.apple.com/us/app/swiftboard-work-keyboard/id6757534203"
            />
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            variants={containerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="lg:hidden bg-white border-b border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-6 pt-4 pb-8 flex flex-col gap-1">
              {navItems.map((item) => (
                <motion.div key={item.id} variants={itemVariants}>
                  <MobileNavButton
                    item={item}
                    onScroll={scrollToSection}
                    isActive={isNavItemActive(item)}
                  />
                </motion.div>
              ))}

              <motion.div
                variants={itemVariants}
                className="w-full h-px bg-gray-100 my-3"
              />

              <motion.div
                variants={footerVariants}
                className="flex flex-col gap-3"
              >
                <ThemeButton
                  text="Download App"
                  as="a"
                  variant="shimmer"
                  href="https://apps.apple.com/us/app/swiftboard-work-keyboard/id6757534203"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-[-1] bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
}
