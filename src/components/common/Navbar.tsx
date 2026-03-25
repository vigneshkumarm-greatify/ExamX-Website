"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

const navLinks = [
  { label: "Solutions", hasDropdown: true },
  { label: "About us", href: "#about" },
  { label: "Success stories", href: "#success" },
  { label: "Contact us", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="absolute inset-x-0 top-0 z-50 flex items-center justify-between py-6  px-4 min-[768px]:px-12 desktop:px-[100px]">
      {/* Logo */}
      <div className="flex shrink-0 items-center">
        <a href="/" className="flex h-[49px] items-center gap-0">
          <Image
            src="/images/common/logos/examx/greatify-logo.svg"
            alt="Greatify"
            width={0}
            height={48}
            className="h-8 w-auto"
            priority
          />
        </a>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden items-center gap-10 lg:flex">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href ?? "#"}
            className="flex items-center gap-1 whitespace-nowrap text-base font-semibold leading-[1.2] tracking-[-0.01em] text-creme-500 transition-colors hover:text-white"
          >
            {link.label}
            {link.hasDropdown && (
              <ChevronDownIcon className="h-4 w-4" />
 
            )}
          </a>
        ))}
      </div>

      {/* Desktop CTA Buttons */}
      <div className="hidden shrink-0 items-center gap-2 lg:flex">
        <a
          href="#trial"
          className="rounded-lg bg-white px-3 py-2 text-[11.11px] font-semibold leading-[1.2] tracking-[-0.01em] text-chalk-green-500 shadow-[0px_4px_15px_rgba(1,55,58,0.66)] transition-shadow hover:shadow-[0px_6px_20px_rgba(1,55,58,0.8)]"
        >
          Start free trial
        </a>
        <a
          href="#demo"
          className="rounded-lg border border-chalk-green-400 px-3 py-2 text-[11.11px] font-semibold leading-[1.2] tracking-[-0.01em] text-creme-500 transition-colors hover:border-creme-500"
        >
          Book a demo
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="flex flex-col gap-1.5 lg:hidden"
        aria-label="Toggle menu"
      >
        <span
          className={`block h-0.5 w-6 bg-creme-500 transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 bg-creme-500 transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 bg-creme-500 transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute left-0 top-full z-50  -mt-4 flex w-full flex-col gap-4 bg-chalk-green-500/95 px-6 py-6 backdrop-blur-md lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href ?? "#"}
              className="text-base font-semibold text-creme-500"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-2">
            <a
              href="#trial"
              className="w-full rounded-lg bg-white px-3 py-2 text-center text-sm font-semibold text-chalk-green-500"
            >
              Start free trial
            </a>
            <a
              href="#demo"
              className="w-full rounded-lg border border-chalk-green-400 px-3 py-2 text-center text-sm font-semibold text-creme-500"
            >
              Book a demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
