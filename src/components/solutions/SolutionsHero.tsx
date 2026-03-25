"use client";

import Image from "next/image";
import SvgIcon from "@/components/common/SvgIcon";

/* ── Industry card data ── */

const industryCards = [
  { label: "Universities", icon: "/images/home/icons/icon-book-reading.svg", iconSize:28, glowColor: "#6240C8", glowBlur: 10 },
  { label: "K-12 Schools", icon: "/images/home/icons/icon-school.svg", iconSize: 28, glowColor: "#FF8A3B", glowBlur: 15 },
  { label: "Government", icon: "/images/home/icons/icon-building.svg", iconSize: 28, glowColor: "#00DC46", glowBlur: 15 },
  { label: "EdTech", icon: "/images/home/icons/icon-deepfake.svg", iconSize: 28, glowColor: "#618385", glowBlur: 15 },
  { label: "Certification", icon: "/images/home/icons/icon-warranty-badge.svg", iconSize: 28, glowColor: "#6240C8", glowBlur: 10 },
  { label: "Enterprise", icon: "/images/home/icons/icon-bag-suitcase.svg", iconSize: 28, glowColor: "#C9C8BB", glowBlur: 15 },
];

/* Percentage-based positions for 6 cards orbiting the circles */
const cardPositions = [
  "top-[5%] left-[10%]",          // Universities — top-left
  "top-[2%] right-[8%]",          // K-12 Schools — top-right
  "top-[38%] left-[-5%]",         // Government — mid-left
  "top-[40%] right-[-2%]",        // EdTech — mid-right
  "bottom-[12%] left-[5%]",       // Certification — bottom-left
  "bottom-[8%] right-[12%]",      // Enterprise — bottom-right
];

export default function SolutionsHero() {
  return (
    <section
      className="relative overflow-hidden px-6 md:px-12 desktop:px-[100px]"
      style={{
        backgroundImage:
          "linear-gradient(177.69deg, #00373a 32.951%, #00dc46 122.01%)",
      }}
    >
      {/* Content wrapper */}
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-[1200px] flex-col justify-center py-24 lg:py-32">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">

          {/* ── LEFT — Text content ── */}
          <div className="flex w-full flex-col gap-9 lg:w-[45%] lg:max-w-[489px]">
            {/* Badge */}
            <div className="flex items-start">
              <span className="inline-flex items-center rounded-lg border border-[rgba(0,220,70,0.4)] bg-[rgba(0,220,70,0.2)] px-2 py-1.5">
                <span className="text-[11.11px] font-semibold leading-[1.2] tracking-[-0.01em] text-green-500">
                  Solutions Hub
                </span>
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[32px] font-semibold leading-[1.2] tracking-[-0.9556px] text-creme-500 md:text-[40px] desktop:text-[47.78px]">
              Find the right ExamX solution for your organization.
            </h1>

            {/* Description */}
            <p className="max-w-[444px] text-base font-medium leading-[1.5] tracking-[-0.16px] text-chalk-green-100">
              Each industry gets purpose-built workflows, compliance tools, and
              analytics designed to meet your unique assessment needs.
            </p>

            {/* CTA Button */}
            <div>
              <a
                href="#request-demo"
                className="inline-block rounded-lg px-4 py-3 text-base font-semibold leading-[1.2] tracking-[-0.32px] text-chalk-green-500 shadow-[0px_4px_15px_rgba(0,0,0,0.15)]"
                style={{
                  backgroundImage:
                    "linear-gradient(108.09deg, #ffffff 1.33%, #f7f7f7 98.18%)",
                }}
              >
                Request demo
              </a>
            </div>

            {/* Trust line */}
            <p className="text-[13.33px] font-medium leading-[1.5] text-chalk-green-100">
              Trusted by{" "}
              <span className="font-bold text-green-500">
                500+ organizations
              </span>{" "}
              across education, government &amp; enterprise
            </p>
          </div>

          {/* ── RIGHT — Concentric circles illustration ── */}
          <div className="relative hidden aspect-square w-full max-w-[600px] lg:flex lg:w-[55%] lg:items-center lg:justify-center">

            {/* Outer circle (ring 3) */}
            <div className="absolute inset-0 rounded-full border border-[rgba(255,255,255,0.08)]" />

            {/* Middle circle (ring 2) */}
            <div className="absolute inset-[15%] rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.02)]" />

            {/* Inner circle (ring 1) */}
            <div className="absolute inset-[30%] rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.03)]" />

            {/* Center — Greatify "G" watermark */}
            <div className="absolute inset-[38%] flex items-center justify-center opacity-[0.08]">
              <Image
                src="/images/home/decoratives/ai-watermark.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            {/* Floating industry cards */}
            {industryCards.map((card, i) => (
              <div
                key={card.label}
                className={`absolute flex h-[74px] w-[84px] flex-col items-center justify-center gap-1.5 rounded-xl bg-[rgba(211,202,240,0.2)] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-sm ${cardPositions[i]}`}
              >
                {/* Glow effect behind icon */}
                <div
                  className="pointer-events-none absolute inset-0 m-auto h-[52px] w-[52px] rounded-full opacity-40"
                  style={{
                    backgroundColor: card.glowColor,
                    filter: `blur(${card.glowBlur}px)`,
                  }}
                />
                <span className="">
                  <SvgIcon
                    svgPath={card.icon}
                    color="#ffffff"
                    width={card.iconSize}
                    height={card.iconSize}
                  />
                </span>
                <span className="relative text-center text-[11.11px] font-semibold leading-[1.2] text-white">
                  {card.label}
                </span>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
