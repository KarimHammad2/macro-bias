"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useAccessModal } from "./access-modal";

export function LandingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useAccessModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#030712]/90 backdrop-blur-md border-b border-slate-800" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <div className="flex items-center gap-2">
          <div className="relative h-12 w-[60px] shrink-0">
            <Image
              src="/logo.png"
              alt=""
              width={60}
              height={48}
              className="object-contain"
              aria-hidden="true"
            />
          </div>
          <span className="text-lg font-semibold tracking-wide text-white">
            MACRO BIAS
          </span>
        </div>

        <div className="hidden items-center gap-10 md:flex">
          <a
            href="#methodology"
            className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
          >
            Methodology
          </a>
          <a
            href="#pillars"
            className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
          >
            Pillars
          </a>
          <button
            onClick={openModal}
            className="group flex items-center gap-2 text-sm font-medium text-[#60a5fa] transition-colors hover:text-[#93c5fd] cursor-pointer"
          >
            Get Access
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
