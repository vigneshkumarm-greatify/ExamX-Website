"use client";

import { useRef } from "react";
import SvgIcon from "@/components/common/SvgIcon";

import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

/* ── Card data ── */

interface WhySwitchCard {
  icon: string;
  iconColor: string;
  iconBg: string;
  title: string;
  description: string;
  statValue: string;
  statColor: string;
  statLabel: string;
  statLabelColor: string;
  borderTopColor: string;
  variant: "dark" | "light";
  glowColor: string;
  glowBlur: number;
}

const cards: WhySwitchCard[] = [
  {
    icon: "/images/solutions/icon-ai-scanner.svg",
    iconColor: "#00DC46",
    iconBg: "bg-green-200",
    title: "Agentic AI Proctoring",
    description:
      "Not just flagging, our AI actively intervenes in real time. Detects face-swaps, second screens, voice anomalies, and browser exploits before they compromise your exam.",
    statValue: "99.9%",
    statColor: "text-green-500",
    statLabel: "Fraud detection accuracy",
    statLabelColor: "text-[#91A9AA]",
    borderTopColor: "border-chalk-green-400",
    variant: "dark",
    glowColor: "#00DC46",
    glowBlur: 20,
  },
  {
    icon: "/images/home/icons/icon-signal-full.svg",
    iconColor: "#71717a",
    iconBg: "bg-[rgba(184,182,171,0.2)]",
    title: "Actionable Data, Not Noise",
    description:
      "Go beyond scores. ExamX maps every response to competency frameworks, accreditation standards, and learning outcomes, turning exam data into institutional intelligence.",
    statValue: "5x",
    statColor: "text-green-600",
    statLabel: "Faster accreditation reporting",
    statLabelColor: "text-[#71717a]",
    borderTopColor: "border-[#f0efe2]",
    variant: "light",
    glowColor: "#B8B6AB",
    glowBlur: 22,
  },
  {
    icon: "/images/solutions/icon-ai-scanner.svg",
    iconColor: "#00DC46",
    iconBg: "bg-green-200",
    title: "Agentic AI Proctoring",
    description:
      "Not just flagging, our AI actively intervenes in real time. Detects face-swaps, second screens, voice anomalies, and browser exploits before they compromise your exam.",
    statValue: "99.9%",
    statColor: "text-green-500",
    statLabel: "Fraud detection accuracy",
    statLabelColor: "text-[#91A9AA]",
    borderTopColor: "border-chalk-green-400",
    variant: "dark",
    glowColor: "#00DC46",
    glowBlur: 20,
  },
  {
    icon: "/images/home/icons/icon-signal-full.svg",
    iconColor: "#71717a",
    iconBg: "bg-[rgba(184,182,171,0.2)]",
    title: "Actionable Data, Not Noise",
    description:
      "Go beyond scores. ExamX maps every response to competency frameworks, accreditation standards, and learning outcomes, turning exam data into institutional intelligence.",
    statValue: "5x",
    statColor: "text-green-600",
    statLabel: "Faster accreditation reporting",
    statLabelColor: "text-[#71717a]",
    borderTopColor: "border-[#f0efe2]",
    variant: "light",
    glowColor: "#B8B6AB",
    glowBlur: 22,
  },
];

/* ── Card component ── */

function CarouselCard({ card }: { card: WhySwitchCard }) {
  const isDark = card.variant === "dark";

  return (
    <div
      className={`relative flex w-[300px] shrink-0 flex-col gap-8 overflow-hidden rounded-2xl p-8 snap-start md:w-[340px] xl:w-[368px] ${
        isDark ? "bg-chalk-green-500" : "bg-white"
      }`}
    >
      {isDark && (
        <div className="w-0 h-0 absolute top-0 left-[50%] -translate-x-1/2  border-l-[180px] border-l-transparent border-t-[50px] border-t-green-500 border-r-[180px] border-r-transparent blur-[30px]"></div>
      )}
      {/* Icon */}
      <div
        className={`relative flex size-16 items-center justify-center rounded-xl  ring ${isDark ? "ring-white/30 bg-[rgba(211,202,240,0.2)] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]" : "ring-creme-600/50 bg-[#B8B6AB]/20 shadow-[0px_0px_4px_0px_rgba(0,0,0,0)]"}  backdrop-blur-md" `}
      >
        {/* Glow effect behind icon */}
        <div
          className="pointer-events-none absolute inset-5 m-auto h-[40px] w-[40px] rounded-full "
          style={{
            backgroundColor: card.glowColor,
            filter: `blur(${card.glowBlur}px)`,
          }}
        />
        <span className="h-auto w-8">
          <SvgIcon
            svgPath={card.icon}
            color={card.iconColor}
            fillColor={card.iconColor}
          />
        </span>
      </div>

      {/* Title + description */}
      <div className="relative flex flex-1 flex-col justify-between">
        <div className="flex flex-col gap-2 pb-4">
          <h3
            className={`text-[22px] font-semibold leading-[1.2] tracking-[-0.553px] md:text-[27.65px] ${
              isDark ? "text-creme-500" : "text-chalk-green-400"
            }`}
          >
            {card.title}
          </h3>
          <p
            className={`text-base font-medium leading-[1.5] tracking-[-0.16px] ${
              isDark ? "text-white/70" : "text-[#71717a]"
            }`}
          >
            {card.description}
          </p>
        </div>

        {/* Stat */}
        <div
          className={`flex flex-col gap-1 border-t pt-4 ${card.borderTopColor}`}
        >
          <span
            className={`text-[22px] font-semibold leading-[1.2] tracking-[-0.553px] md:text-[27.65px] ${card.statColor}`}
          >
            {card.statValue}
          </span>
          <span
            className={`text-[13.33px] font-medium leading-[1.5] tracking-[-0.133px] ${card.statLabelColor}`}
          >
            {card.statLabel}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Section ── */

export default function WhySwitchSection() {
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const desktopScrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "prev" | "next") => {
    const container = mobileScrollRef.current?.offsetParent
      ? mobileScrollRef.current
      : desktopScrollRef.current;
    if (!container) return;
    const scrollAmount = 392; // card width (368) + gap (24)
    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="relative py-20 md:py-30 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(164.98deg, #00373a 18.064%, #00dc46 131.6%)",
      }}
    >
      {/* Decorative background vector */}
      <div
        className="pointer-events-none absolute -right-[10%] top-[10%] h-[80%] w-[60%] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,220,70,0.3), transparent 70%)",
        }}
      />

      <Image
        src="/images/common/logo-glass-effect.svg"
        alt=""
        width={800}
        height={919}
        className="pointer-events-none absolute -bottom-70 sm:-bottom-120 right-[30%] translate-x-1/2 rotate-[100deg]  lg:block "
      />

      <div className="relative flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-0">
        {/* ── Left column ── */}
        <div className="flex w-full flex-col  lg:w-auto lg:shrink-0 lg:py-0 xl:pl-[max(24px,calc((100vw-1200px)/2))] lg:pr-[100px]">
          <div className="flex max-w-dull lg:max-w-[392px] px-6  md:px-12 flex-col gap-4 ">
            <h2 className="text-[32px] font-semibold leading-[1.2] tracking-[-0.96px] text-white md:text-[40px] xl:text-[47.78px]">
              Why organizations switch to ExamX
            </h2>
            <p className="text-base font-medium leading-[1.5] tracking-[-0.16px] text-chalk-green-100">
              Most platforms solve one problem. ExamX replaces your entire
              assessment stack with AI-native intelligence at every step.
            </p>
          </div>

          {/* ──mobile bottom column — scrollable cards, extends to viewport right edge ── */}
          <div>
            <div
              ref={mobileScrollRef}
              className="flex w-full lg:hidden gap-6 overflow-x-auto mt-10 ml-6 pr-10 [&::-webkit-scrollbar]:hidden "
              style={{
                scrollSnapType: "x mandatory",
                scrollbarWidth: "none",
              }}
            >
              {cards.map((card, index) => (
                <CarouselCard key={card.title + index} card={card} />
              ))}
            </div>
          </div>

          {/* Nav arrows */}
          <div className="mt-12 flex  px-6  md:px-12 items-center gap-3 lg:mt-[126px]">
            <button
              onClick={() => scroll("prev")}
              className="flex size-11 items-center justify-center cursor-pointer rounded-full bg-white shadow-[0px_4px_15px_rgba(0,0,0,0.1)] transition-opacity hover:opacity-80"
              aria-label="Previous card"
            >
              <ChevronLeftIcon className="h-6 w-6 text-green-500" />
            </button>
            <button
              onClick={() => scroll("next")}
              className="flex size-11 items-center justify-center cursor-pointer rounded-full bg-white shadow-[0px_4px_15px_rgba(0,0,0,0.1)] transition-opacity hover:opacity-80"
              aria-label="Next card"
            >
              <ChevronRightIcon className="h-6 w-6 text-green-500 " />
            </button>
          </div>
        </div>

        {/* ── Right column — scrollable cards, extends to viewport right edge ── */}
        <div
          ref={desktopScrollRef}
          className="hidden w-full lg:flex gap-6 overflow-x-auto pl-6 md:pl-12 lg:w-auto lg:flex-1 lg:pl-0 lg:pr-12 [&::-webkit-scrollbar]:hidden "
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
          }}
        >
          {cards.map((card, index) => (
            <CarouselCard key={card.title + index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
