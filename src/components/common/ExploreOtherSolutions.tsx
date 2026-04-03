"use client";

import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import SvgIcon from "@/components/common/SvgIcon";

interface SolutionCard {
  title: string;
  icon: string;
  iconColor: string;
  iconBg: string;
  href: string;
}

const solutions: SolutionCard[] = [
  {
    title: "Universities",
    icon: "/images/home/icons/icon-book-reading.svg",
    iconColor: "#6240c8",
    iconBg: "rgba(211,202,240,0.2)",
    href: "/solutions/universities",
  },
  {
    title: "K-12 Schools",
    icon: "/images/home/icons/icon-school.svg",
    iconColor: "#ff8a3b",
    iconBg: "rgba(255,222,200,0.4)",
    href: "/solutions/k12-schools",
  },
  {
    title: "Government",
    icon: "/images/home/icons/icon-building.svg",
    iconColor: "#00b63a",
    iconBg: "rgba(184,245,203,0.2)",
    href: "/solutions/government",
  },
  {
    title: "Enterprise",
    icon: "/images/home/icons/icon-bag-suitcase.svg",
    iconColor: "#c9c8bb",
    iconBg: "rgba(219,217,204,0.2)",
    href: "/solutions/corporate",
  },
  {
    title: "Certification",
    icon: "/images/home/icons/icon-warranty-badge.svg",
    iconColor: "#6240c8",
    iconBg: "rgba(211,202,240,0.2)",
    href: "/solutions/certification",
  },
  {
    title: "EdTech",
    icon: "/images/home/icons/icon-deepfake.svg",
    iconColor: "#00373a",
    iconBg: "rgba(145,169,170,0.12)",
    href: "/solutions/coaching-institutes",
  },
];

interface ExploreOtherSolutionsProps {
  currentSlug: string;
}

export default function ExploreOtherSolutions({
  currentSlug,
}: ExploreOtherSolutionsProps) {
  const filtered = solutions.filter((s) => s.href !== currentSlug);

  return (
    <section className="border-b border-creme-600 bg-creme-500 py-[80px] px-6  md:py-[100px] md:px-12 xl:py-[120px] xl:px-[120px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="mb-12 max-w-[607px] md:mb-16">
          <h2 className="text-[32px] font-semibold leading-[1.2] tracking-[-0.96px] text-chalk-green-500 md:text-[47.78px]">
            Explore other solutions
          </h2>
          <p className="mt-3 text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a]">
            Purpose-built for higher education with the depth that generic quiz
            tools can&apos;t match.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:flex">
          {filtered.map((card) => (
            <div
              key={card.href}
              className="flex flex-1 flex-col justify-between rounded-2xl bg-white p-4 md:p-8"
            >
              {/* Icon + Title */}
              <div className="flex flex-col gap-5">
                <span
                  className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-lg md:rounded-2xl"
                  style={{ backgroundColor: card.iconBg }}
                >
                  <span className="flex h-7 w-7 items-center justify-center md:h-10 md:w-10 ">
                    <SvgIcon
                      svgPath={card.icon}
                      color={card.iconColor}
                      fillColor={card.iconColor}
                    />
                  </span>
                </span>
                <h3 className=" text-base sm:text-[20px] font-semibold leading-[1.2] tracking-[-0.46px] text-chalk-green-500 md:text-[23.04px]">
                  {card.title}
                </h3>
              </div>

              {/* Explore CTA */}
              <Link
                href={card.href}
                className="mt-8 flex items-center gap-2"
              >
                <span className="text-base font-semibold leading-[1.5] tracking-[-0.16px] text-chalk-green-500">
                  Explore
                </span>
                <span className="flex h-[27px] w-[27px] items-center justify-center rounded-full bg-white shadow-[0px_2px_8px_0px_rgba(0,0,0,0.12)]">
                  <ChevronRightIcon className="h-4 w-4 text-chalk-green-500" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
