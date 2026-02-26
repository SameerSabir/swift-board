"use client";

import { Apple, Play } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#101828]  overflow-hidden">
      <div className=" px-4 sm:px-6 lg:px-8 pt-12 pb-10 grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="max-w-xs">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-white font-bold text-lg md:text-xl">
              Swift Board
            </span>
          </div>
          <p className="text-white text-sm md:text-base leading-relaxed">
            Structured collaboration for modern teams. Organize boards, control
            access, and manage content — all in one focused workspace.
          </p>
        </div>

        <div>
          <p className="text-white font-bold text-base md:text-lg mb-4">
            Product
          </p>
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="text-white text-sm md:text-base hover:text-gray-400 transition-colors"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white text-sm md:text-base hover:text-gray-400 transition-colors"
              >
                Solution
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white text-sm md:text-base hover:text-gray-400 transition-colors"
              >
                Problems
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-white font-bold text-base md:text-lg mb-4">
            Company
          </p>
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="text-white text-sm md:text-base hover:text-gray-400 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white text-sm md:text-base hover:text-gray-400 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white text-sm md:text-base hover:text-gray-400 transition-colors"
              >
                Help & Resources
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white text-sm md:text-base hover:text-gray-400 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white text-sm md:text-base hover:text-gray-400 transition-colors"
              >
                Term of use
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-white font-bold text-base md:text-lg mb-4">
            Support
          </p>
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="text-white text-sm md:text-base hover:text-gray-400 transition-colors"
              >
                support@focuzed.io
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white text-sm md:text-base hover:text-gray-400 transition-colors"
              >
                Terms Of Service
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white text-sm md:text-base hover:text-gray-400 transition-colors"
              >
                Privacy
              </Link>
            </li>
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
                <Apple size={20} />
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px]">Download on the</span>
                  <span className="font-semibold text-sm">App Store</span>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="inline-flex items-center gap-3 px-8 py-2 bg-black text-white rounded-xl  transition duration-300"
              >
                <Play size={20} />
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px]">Get it on</span>
                  <span className="font-semibold text-sm">Google Play</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative w-full h-64 flex items-center justify-center">
        <p className="absolute text-[clamp(80px,8vw,300px)] text-center font-black text-gray-200/20 select-none leading-none pointer-events-none">
          Swift Board
        </p>
      </div>
    </footer>
  );
}
