"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    name: "Dr. Rajesh Mehta",
    role: "Director of Examinations, National University",
    quote:
      "\u201CExamX transformed how we conduct semester exams. What used to take our team three weeks of evaluation now happens in under 48 hours. The AI proctoring gave us confidence to go fully remote without compromising integrity\u201D",
    logo: "/images/home/logos/national-university-logo.png",
    logoBg: "bg-purple-50",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  return (
    <section className="bg-white px-6 py-16 md:px-12 md:py-[120px] xl:px-[100px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 lg:flex-row lg:items-center lg:gap-6">
        {/* Left column — heading + "View all" + arrows (desktop only) */}
        <div className="flex shrink-0 flex-col justify-between lg:w-[384px] lg:self-stretch">
          <div className="flex flex-col gap-4">
            <h2 className="text-[32px] font-semibold leading-[1.2] tracking-[-0.96px] text-chalk-green-500 md:text-[47.78px]">
              Success stories with AI-powered exam solutions
            </h2>
            <button
              type="button"
              className="w-fit rounded-lg border border-chalk-green-100 px-4 py-3 text-base font-semibold leading-[1.2] tracking-[-0.32px] text-chalk-green-500"
            >
              View all
            </button>
          </div>

          {/* Nav arrows — xl bottom of left column */}
          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() =>
                setCurrent((c) =>
                  c === 0 ? testimonials.length - 1 : c - 1
                )
              }
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-[0px_4px_15px_0px_rgba(0,0,0,0.1)]"
            >
              <ChevronLeftIcon className="h-7 w-7 text-green-500" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() =>
                setCurrent((c) =>
                  c === testimonials.length - 1 ? 0 : c + 1
                )
              }
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-[0px_4px_15px_0px_rgba(0,0,0,0.1)]"
            >
              <ChevronRightIcon className="h-7 w-7 text-green-500" />
            </button>
          </div>
        </div>

        {/* Right column — cards */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          {/* Logo card */}
          <div
            className={`flex h-[280px] w-full items-center justify-center overflow-hidden rounded-[20px] sm:h-[400px] sm:w-[282px] ${t.logoBg}`}
          >
            <Image
              src={t.logo}
              alt={`${t.name} organization logo`}
              width={169}
              height={166}
              className="object-contain"
            />
          </div>

          {/* Quote card */}
          <div className="flex h-auto min-h-[320px] w-full flex-col justify-between gap-8 overflow-hidden rounded-[20px] bg-chalk-green-500 p-6 sm:h-[400px] sm:min-h-0 sm:w-[486px] sm:gap-0 sm:p-8">
            <div className="flex flex-col gap-6 sm:gap-10">
              <div className="flex flex-col gap-1">
                <p className="text-[19.2px] font-semibold leading-[1.2] tracking-[-0.38px] text-white">
                  {t.name}
                </p>
                <p className="text-base font-medium leading-[1.5] tracking-[-0.16px] text-chalk-green-100">
                  {t.role}
                </p>
              </div>
              <p className="text-[19.2px] font-semibold leading-[1.2] tracking-[-0.38px] text-white">
                {t.quote}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold leading-[1.5] tracking-[-0.18px] text-green-500">
                Learn more
              </span>
              <span className="flex h-[27px] w-[27px] items-center justify-center rounded-full bg-chalk-green-400">
                <ChevronRightIcon className="h-4 w-4 text-green-500" />
              </span>
            </div>
          </div>
        </div>

        {/* Nav arrows — mobile: below the cards */}
        <div className="flex items-center justify-center gap-3 lg:hidden">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() =>
              setCurrent((c) =>
                c === 0 ? testimonials.length - 1 : c - 1
              )
            }
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-[0px_4px_15px_0px_rgba(0,0,0,0.1)]"
          >
            <ChevronLeftIcon className="h-7 w-7 text-green-500" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() =>
              setCurrent((c) =>
                c === testimonials.length - 1 ? 0 : c + 1
              )
            }
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-[0px_4px_15px_0px_rgba(0,0,0,0.1)]"
          >
            <ChevronRightIcon className="h-7 w-7 text-green-500" />
          </button>
        </div>
      </div>
    </section>
  );
}
