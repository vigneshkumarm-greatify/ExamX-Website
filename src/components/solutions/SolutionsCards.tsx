"use client";

import SvgIcon from "@/components/common/SvgIcon";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

/* ── Theme config per card ── */
interface CardTheme {
  /** Tailwind gradient end color */
  gradientTo: string;
  /** Icon background color class */
  iconBg: string;
  /** Icon stroke color (hex) for SvgIcon */
  iconColor: string;
  /** Bullet dot color class */
  dotColor: string;
  /** Border-bottom color on the title divider */
  borderColor: string;
  /** CTA arrow circle bg */
  arrowBg: string;
  /** Optional card border */
  cardBorder?: string;
  /** Optional card shadow */
  cardShadow?: string;
  /** Decorative gradient color */
  decorGradientColor: string;
}

interface SolutionCard {
  icon: string;
  title: string;
  subtitle: string;
  bullets: string[];
  cta: string;
  href: string;
  theme: CardTheme;
}

const solutionCards: SolutionCard[] = [
  {
    icon: "/images/home/icons/icon-book-reading.svg",
    title: "Universities & Colleges",
    subtitle: "Accreditation-ready exams, at any scale.",
    bullets: [
      "Semester Examinations",
      "Entrance & Placement Tests",
      "PhD Vivas and Subjective Evaluation",
      "Accreditation & Outcome Mapping",
    ],
    cta: "Explore University Solutions",
    href: "/solutions/universities",
    theme: {
      gradientTo: "to-purple-50",
      iconBg: "bg-[#D3CAF0]/20",
      iconColor: "#6240c8",
      dotColor: "bg-purple-500",
      borderColor: "border-[rgba(211,202,240,0.5)]",
      arrowBg: "bg-purple-500",
      decorGradientColor: "bg-linear-to-r from-purple-500/20 to-transparent",
    },
  },
  {
    icon: "/images/home/icons/icon-school.svg",
    title: "K-12 Schools",
    subtitle: "So simple teachers love it, so smart principals trust it",
    bullets: [
      "Periodic Assessments",
      "Board Exam Preparations",
      "Competitive Exam Prep",
      "Parent Progress Reports",
    ],
    cta: "Explore School Solutions",
    href: "/solutions/k12-schools",
    theme: {
      gradientTo: "to-orange-50",
      iconBg: "bg-[rgba(255,222,200,0.2)]",
      iconColor: "#ff8a3b",
      dotColor: "bg-orange-500",
      borderColor: "border-[rgba(255,222,200,0.5)]",
      arrowBg: "bg-orange-500",
      cardBorder: "border border-orange-200",
      cardShadow: "shadow-[0px_0px_80px_0px_rgba(0,0,0,0.1)]",
      decorGradientColor: "bg-linear-to-r from-orange-500/20 to-transparent",
    },
  },
  {
    icon: "/images/home/icons/icon-building.svg",
    title: "Government & Public Sector",
    subtitle: "National scale exams, Zero paper leaks",
    bullets: [
      "Civil Service Recruitment",
      "Professional Licensing",
      "Promotion Testing",
      "Psychometric & Aptitude Screening",
      "Skill Certification",
      "Regulatory Compliance",
    ],
    cta: "Explore Government Solutions",
    href: "/solutions/government",
    theme: {
      gradientTo: "to-green-50",
      iconBg: "bg-green-200",
      iconColor: "#00DC46",
      dotColor: "bg-green-500",
      borderColor: "border-[rgba(184,245,203,0.5)]",
      arrowBg: "bg-green-500",
      decorGradientColor: "bg-linear-to-r from-green-500/20 to-transparent",
    },
  },
  {
    icon: "/images/home/icons/icon-bag-suitcase.svg",
    title: "Corporate & Enterprise",
    subtitle: "Hire smarter, train faster, measure everything",
    bullets: [
      "Pre Hiring Screening",
      "Psychometric Testing",
      "Skill Gap Assessment",
      "Promotion & Internal Mobility",
      "Compliance Training",
      "Learning & Development",
      "Leadership Assessment",
    ],
    cta: "Explore Enterprise Solutions",
    href: "/solutions/corporate",
    theme: {
      gradientTo: "to-creme-500",
      iconBg: "bg-[rgba(240,239,226,0.5)]",
      iconColor: "#c9c8bb",
      dotColor: "bg-creme-700",
      borderColor: "border-[rgba(219,217,204,0.5)]",
      arrowBg: "bg-creme-700",
      decorGradientColor: "bg-linear-to-r from-creme-700/20 to-transparent",
    },
  },
  {
    icon: "/images/home/icons/icon-warranty-badge.svg",
    title: "Certification & Licensure Bodies",
    subtitle: "High stakes credentials, psychometric precision",
    bullets: [
      "Professional Certification",
      "Licensure & Board Exams",
      "Continuing Education",
      "Digital Credentialing",
    ],
    cta: "Explore Certification",
    href: "/solutions/certification",
    theme: {
      gradientTo: "to-purple-50",
      iconBg: "bg-[rgba(211,202,240,0.2)]",
      iconColor: "#6240c8",
      dotColor: "bg-purple-500",
      borderColor: "border-[rgba(211,202,240,0.5)]",
      arrowBg: "bg-purple-500",
      decorGradientColor: "bg-linear-to-r from-purple-500/20 to-transparent",
    },
  },
  {
    icon: "/images/home/icons/icon-deepfake.svg",
    title: "Coaching & EdTech",
    subtitle: "Launch test series in hours, not months",
    bullets: [
      "Mock Test Series",
      "Adaptive Practice",
      "Live Contests",
      "White-Label Platform",
    ],
    cta: "Explore EdTech Solutions",
    href: "/solutions/coaching-institutes",
    theme: {
      gradientTo: "to-chalk-green-100",
      iconBg: "bg-[rgba(145,169,170,0.12)]",
      iconColor: "#00373a",
      dotColor: "bg-chalk-green-500",
      borderColor: "border-[rgba(211,202,240,0.5)]",
      arrowBg: "bg-chalk-green-500",
      decorGradientColor: "bg-linear-to-r from-chalk-green-500/20 to-transparent",
    },
  },
];



/* ── Single card component ── */
function SolutionCardItem({ card }: { card: SolutionCard }) {
  const { theme } = card;

  return (
    <div
      className={`relative flex flex-col overflow-hidden justify-between rounded-2xl bg-gradient-to-b from-white ${theme.gradientTo} px-6 pt-6 pb-8 ${theme.cardBorder ?? ""} ${theme.cardShadow ?? ""}`}
    >
      {/* Icon */}
      <div>
        <div
          className={`flex size-16 items-center justify-center rounded-xl ${theme.iconBg}`}
        >
          <span className="w-8 h-auto">
            <SvgIcon
              svgPath={card.icon}
              color={theme.iconColor}
              fillColor={theme.iconColor}
            />
          </span>
        </div>

        {/* Title + Subtitle */}
        <div
          className={`mt-3 border-b pb-4 ${theme.borderColor}`}
        >
          <h3 className="text-[19.2px] font-semibold leading-[1.2] tracking-[-0.384px] text-chalk-green-500">
            {card.title}
          </h3>
          <p className="mt-1 text-[13.33px] font-medium leading-[1.5] tracking-[-0.13px] text-[#71717a]">
            {card.subtitle}
          </p>
        </div>

        {/* Bullet list */}
        <ul className="mt-4 flex flex-col gap-2">
          {card.bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-2">
              <span
                className={`size-2 shrink-0 rounded-full ${theme.dotColor}`}
              />
              <span className="text-base font-medium leading-[1.5] tracking-[-0.16px] text-chalk-green-500">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <Link href={card.href} className="mt-10 flex items-center gap-2 z-10 ">
        <span className="text-lg font-semibold leading-[1.5] cursor-pointer tracking-[-0.18px] text-chalk-green-500">
          {card.cta}
        </span>
        <ChevronRightIcon className={`w-6 h-auto text-white bg-chalk-green-500 rounded-full p-1 ${theme.dotColor}`} />
      </Link>

      <div className="absolute -bottom-5 -left-9 w-full -rotate-45  flex flex-col gap-6 items-start justify-between">
        <div className={`w-[50%] h-35 ${theme.decorGradientColor}`}></div>
        <div className={`w-[80%] h-8 ${theme.decorGradientColor}`}></div>
      </div>
    </div>

    
  );
}

/* ── Section ── */
export default function SolutionsCards() {
  return (
    <section className="bg-[#fafafa] px-6 py-16 md:px-12 md:py-20 xl:px-[100px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
        {solutionCards.map((card) => (
          <SolutionCardItem key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}
