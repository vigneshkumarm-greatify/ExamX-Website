"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CloseButton, Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

/* ── Solutions dropdown items ── */
const solutionItems = [
  {
    title: "Universities & Colleges",
    description: "Accreditation-ready exams, at any scale",
    href: "/solutions/universities",
  },
  {
    title: "K-12 Schools",
    description: "So simple teachers love it, so smart principals trust it",
    href: "/solutions/k12-schools",
  },
  {
    title: "Government & Public Sector",
    description: "National-scale exams, zero paper leaks",
    href: "/solutions/government",
  },
  {
    title: "Corporate & Enterprise",
    description: "Hire smarter, train faster, measure everything",
    href: "/solutions/corporate",
  },
  {
    title: "Certification & Licensure Bodies",
    description: "High-stakes credentials, psychometric precision",
    href: "/solutions/certification",
  },
  {
    title: "Coaching & EdTech",
    description: "Launch test series in hours, not months",
    href: "/solutions/coaching-institutes",
  },
];

/* ── Plain nav links ── */
const plainLinks = [
  { label: "Platform", href: "#platform", hasDropdown: true },
  { label: "AI", href: "#ai", hasDropdown: true },
  { label: "Resources", href: "#resources" },
  { label: "About us", href: "#about" },
  { label: "Contact us", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  return (
    <nav className="absolute inset-x-0 top-0 z-50 mx-auto flex max-w-[1440px] items-center justify-between px-4 py-6 min-[768px]:px-12 xl:px-12">
      {/* Logo */}
      <div className="flex shrink-0 items-center">
        <Link href="/" className="flex h-[49px] items-center">
          <Image
            src="/images/common/logos/examx/greatify-logo.svg"
            alt="Greatify"
            width={0}
            height={48}
            className="h-8 w-auto"
            priority
          />
        </Link>
      </div>

      {/* ── Desktop Nav Links ── */}
      <div className="hidden items-center gap-7 lg:flex">
        {/* Solutions — Headless UI Popover */}
        <Popover className="relative">
          {({ open }) => (
            <>
              <PopoverButton className="flex cursor-pointer items-center gap-1 whitespace-nowrap text-base font-semibold leading-[1.2] tracking-[-0.16px] text-creme-500 outline-none transition-colors hover:text-white">
                Solutions
                <ChevronDownIcon
                  className={`h-[11px] w-[11px] transition-transform ${open ? "rotate-180" : ""}`}
                />
              </PopoverButton>

              <PopoverPanel
                transition
                anchor="bottom start"
                className="z-[60] mt-4 w-[380px] origin-top-left rounded-2xl border border-gray-100 bg-white p-4 shadow-[0px_16px_40px_rgba(0,0,0,0.12)] transition data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="flex flex-col gap-1">
                  {solutionItems.map((item) => (
                    <CloseButton
                      as={Link}
                      key={item.href}
                      href={item.href}
                      className="group rounded-xl px-3 py-2.5 transition-colors hover:bg-neutral-100"
                    >
                      <p className="text-[14px] font-semibold leading-[1.3] tracking-[-0.14px] text-chalk-green-500">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-[12px] font-medium leading-[1.4] tracking-[-0.12px] text-[#71717a]">
                        {item.description}
                      </p>
                    </CloseButton>
                  ))}
                </div>

                {/* All Solutions link */}
                <div className="mt-3 border-t border-gray-100 pt-3">
                  <CloseButton
                    as={Link}
                    href="/solutions"
                    className="flex items-center gap-1.5 rounded-xl px-3 py-2 text-[13px] font-semibold leading-[1.2] tracking-[-0.13px] text-green-600 transition-colors hover:text-green-800"
                  >
                    View all solutions
                    <ChevronDownIcon className="h-3 w-3 -rotate-90" />
                  </CloseButton>
                </div>
              </PopoverPanel>
            </>
          )}
        </Popover>

        {/* Other nav links */}
        {plainLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="flex items-center gap-1 whitespace-nowrap text-base font-semibold leading-[1.2] tracking-[-0.16px] text-creme-500 transition-colors hover:text-white"
          >
            {link.label}
            {link.hasDropdown && (
              <ChevronDownIcon className="h-[11px] w-[11px]" />
            )}
          </a>
        ))}
      </div>

      {/* ── Desktop CTA Buttons ── */}
      <div className="hidden shrink-0 items-center gap-2 lg:flex">
        <a
          href="#trial"
          className="rounded-lg bg-white px-3 py-2 text-[11.11px] font-semibold leading-[1.2] tracking-[-0.01em] text-chalk-green-500 shadow-[0px_4px_15px_rgba(25,0,100,0.5)] transition-shadow hover:shadow-[0px_6px_20px_rgba(25,0,100,0.6)]"
        >
          Start free trial
        </a>
        <a
          href="#demo"
          className="rounded-lg border border-purple-400 px-3 py-2 text-[11.11px] font-semibold leading-[1.2] tracking-[-0.01em] text-creme-500 transition-colors hover:border-creme-500"
        >
          Book a demo
        </a>
      </div>

      {/* ── Mobile Menu Button ── */}
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

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div className="absolute left-0 top-full z-50 -mt-4 flex w-full flex-col gap-4 bg-chalk-green-500/95 px-6 py-6 backdrop-blur-md lg:hidden">
          {/* Solutions accordion */}
          <div>
            <button
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              className="flex w-full items-center justify-between text-base font-semibold text-creme-500"
            >
              Solutions
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileSolutionsOpen && (
              <div className="mt-2 flex flex-col gap-1 pl-3">
                {solutionItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-2 py-2 text-[14px] font-medium text-creme-700 transition-colors hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
                <Link
                  href="/solutions"
                  className="mt-1 rounded-lg px-2 py-2 text-[13px] font-semibold text-green-300"
                  onClick={() => setMobileOpen(false)}
                >
                  View all solutions
                </Link>
              </div>
            )}
          </div>

          {/* Other links */}
          {plainLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
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
              className="w-full rounded-lg border border-purple-400 px-3 py-2 text-center text-sm font-semibold text-creme-500"
            >
              Book a demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
