"use client";

import Image from "next/image";
import SvgIcon from "@/components/common/SvgIcon";

/* ── Industry card data ── */

const industryCards = [
  {
    label: "Universities",
    icon: "/images/home/icons/icon-book-reading.svg",
    glowColor: "#a48ced",
    glowBlur: 15,
  },
  {
    label: "EdTech",
    icon: "/images/home/icons/icon-deepfake.svg",
    glowColor: "#C9C8BB",
    glowBlur: 22,
  },
  {
    label: "K-12 Schools",
    icon: "/images/home/icons/icon-school.svg",
    glowColor: "#f59a5d",
    glowBlur: 15,
  },
  {
    label: "Certification",
    icon: "/images/home/icons/icon-warranty-badge.svg",
    glowColor: "#a48ced",
    glowBlur: 15,
  },
  {
    label: "Government",
    icon: "/images/home/icons/icon-building.svg",
    glowColor: "#00DC46",
    glowBlur: 15,
  },
  {
    label: "Enterprise",
    icon: "/images/home/icons/icon-bag-suitcase.svg",
    glowColor: "#C9C8BB",
    glowBlur: 15,
  },
];

/* Percentage-based positions for 6 cards orbiting the circles */
const cardPositions = [
  "-top-[2%] left-[18%]", // Universities — top-left
  "top-[5%] right-[5%]", // EdTech — top-right
  "top-[38%] left-[-9%]", // K-12 Schools — mid-left
  "top-[40%] right-[-10%]", // Certification — mid-right
  "bottom-[12%] left-[3%]", // Government — bottom-left
  "bottom-[8%] right-[6%]", // Enterprise — bottom-right
];

export default function SolutionsHero() {
  return (
    <section
      className="solutions-hero-bg relative overflow-hidden  "
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .solutions-hero-bg {
          background-image: linear-gradient(177.69deg, #00373a 32.951%, #00dc46 160%);
        }
        @media (min-width: 1024px) {
          .solutions-hero-bg {
            background-image: linear-gradient(177.69deg, #00373a 32.951%, #00dc46 122.01%);
          }
        }
      `}} />
      {/* Content wrapper */}
      <div className="mx-auto flex max-w-[1440px] w-full flex-col justify-center py-28 md:py-38 lg:py-48 px-6 min-[768px]:px-12 xl:px-12 ">
        <div className="w-full flex flex-col gap-28 lg:flex-row md:items-center lg:gap-16 justify-between">
          {/* ── LEFT — Text content ── */}
          <div className="flex w-full flex-col gap-9  lg:max-w-[500px]  ">
            {/* Badge */}
            <div className="flex items-start">
              <span className="inline-flex items-center rounded-lg border border-[rgba(0,220,70,0.4)] bg-[rgba(0,220,70,0.2)] px-2 py-1.5">
                <span className="text-[11.11px] font-semibold leading-[1.2] tracking-[-0.01em] text-green-500">
                  Solutions Hub
                </span>
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[32px] font-semibold leading-[1.2] tracking-[-0.9556px] text-creme-500 md:text-[40px] xl:text-[50px]">
              Find the right ExamX solution for your organization.
            </h1>

            {/* Description */}
            <p className="max-w-[504px] text-base font-medium leading-[1.5] tracking-[-0.16px] text-chalk-green-100 xl:text-lg">
              Each industry gets purpose-built workflows, compliance tools, and
              analytics designed to meet your unique assessment needs.
            </p>

            {/* CTA Button */}
            <div>
              <a
                href="#request-demo"
                className="inline-block rounded-lg px-4 py-3 cursor-pointer text-base font-semibold leading-[1.2] tracking-[-0.32px] text-chalk-green-500 shadow-[0px_4px_15px_rgba(0,0,0,0.15)]"
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

          <div className=" w-full lg:w-full flex items-center justify-center px-6 sm:px-12 lg:pr-12 ">
            <div className="relative  aspect-square w-full max-w-[600px] flex ">
              {/* Outer circle (ring 3) */}
              <div
                className="absolute inset-0 rounded-full border border-white/10"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(184,245,203,0.05) 0%, rgba(255,255,255,0.03) 100%)",
                }}
              />

              {/* Middle circle (ring 2) */}
              <div
                className="absolute inset-[15%] rounded-full border border-white/10"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(138,239,170,0.07) 0%, rgba(255,255,255,0.04) 100%)",
                }}
              />

              {/* Inner circle (ring 1) */}
              <div
                className="absolute inset-[30%] rounded-full border border-white/10"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(0,220,70,0.10) 0%, rgba(255,255,255,0.05) 100%)",
                }}
              />

              {/* Center — Green glow */}
              <div
                className="pointer-events-none absolute inset-[40%] sm:inset-[38%] m-auto rounded-full  flex items-center justify-center opacity-[0.7] "
                style={{ backgroundColor: "#00DC46", filter: "blur(30px)" }}
              />
       
              {/* Center — Greatify "G" watermark */}
              <div className="absolute inset-[40%] sm:inset-[38%] flex items-center justify-center ">
                <Image
                  src="/images/common/ai-logo.svg"
                  alt=""
                  width={120}
                  height={120}
                  className="object-contain "
                />
              </div>

              {/* Floating industry cards */}
              {industryCards.map((card, i) => (
                <div
                  key={card.label}
                  className={`absolute flex h-[60px] w-[70px]  min-[768px]:h-[74px] min-[1024px]:h-[60px] xl:h-[74px] min-[768px]:w-[84px] min-[1024px]:w-[70px] xl:w-[84px] flex-col items-center justify-center gap-1.5 rounded-xl border border-white/30 bg-[rgba(211,202,240,0.2)] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-md ${cardPositions[i]}`}
                >
                  {/* Glow effect behind icon */}
                  <div
                    className="pointer-events-none absolute inset-0 m-auto h-[70px] w-[70px] rounded-full opacity-60"
                    style={{
                      backgroundColor: card.glowColor,
                      filter: `blur(${card.glowBlur}px)`,
                    }}
                  />
                  <span className="w-[20px] min-[768px]:w-[28px]   min-[1024px]:w-[22px] xl:w-[28px] h-auto">
                    <SvgIcon
                      svgPath={card.icon}
                      color="#ffffff"
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
      </div>
    </section>
  );
}
