"use client";

import Image from "next/image";
import SvgIcon from "@/components/common/SvgIcon";

/* ── Interfaces ── */

export interface OrgHeroStat {
  value: string;
  label: string;
}

export interface OrgHeroTheme {
  bgGradient: string;
  badgeBorderColor: string;
  badgeBgColor: string;
  descriptionColor: string;
  statCardColors: [string, string, string, string];
  centerIconBg: string;
  /** Override badge text color (default: white) */
  badgeTextColor?: string;
  /** Override heading color (default: creme-500) */
  headingColor?: string;
  /** Override stat card text color (default: white) */
  statTextColor?: string;
  /** Override stat card bg (default: rgba(211,202,240,0.1)) */
  statCardBg?: string;
  /** Override stat card border color (default: white/30) */
  statBorderColor?: string;
  /** Override center icon SVG color (default: #ffffff) */
  centerIconColor?: string;
}

export interface OrgHeroProps {
  badge: string;
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  /** Exactly 4 stat cards: [left1, left2, right1, right2] */
  stats: [OrgHeroStat, OrgHeroStat, OrgHeroStat, OrgHeroStat];
  /** Thematic SVG icon for center card (path, e.g. "/images/home/icons/icon-book-reading.svg") */
  centerIconPath: string;
  /** Decorative arc/blob SVG path (user-uploaded asset) */
  arcSvgPath: string;
  theme: OrgHeroTheme;

  arcColor:string
}

/* ── Stat card sub-component ── */

function StatCard({
  stat,
  bgColor,
  textColor,
  cardBg,
  borderColor,
}: {
  stat: OrgHeroStat;
  bgColor: string;
  textColor?: string;
  cardBg?: string;
  borderColor?: string;
}) {
  return (
    <div
      className="flex h-[110px] w-[120px] flex-col items-start justify-between overflow-clip rounded-[16px] p-5 md:h-[118px] md:w-[130px] xl:h-[125px] xl:w-[137px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)] backdrop-blur-sm"
      style={{
        backgroundColor: cardBg || "rgba(211,202,240,0.1)",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: borderColor || "rgba(255,255,255,0.3)",
      }}
    >
      <span
        className="text-[22px] font-semibold leading-[1.2] tracking-[-0.553px] md:text-[25px] xl:text-[27.65px]"
        style={{ color: textColor || "#ffffff" }}
      >
        {stat.value}
      </span>
      <span
        className="text-[11px] font-semibold leading-[1.2] tracking-[-0.133px] md:text-[12px] xl:text-[13.33px]"
        style={{ color: textColor || "#ffffff" }}
      >
        {stat.label}
      </span>
    </div>
  );
}

/* ── Center icon card sub-component ── */

function CenterIconCard({
  iconPath,
  bgColor,
  iconColor,
  cardBg,
  borderColor,
}: {
  iconPath: string;
  bgColor: string;
  iconColor?: string;
  cardBg?: string;
  borderColor?: string;
}) {
  return (
    <div
      className="flex h-[110px] w-[120px] items-center justify-center overflow-clip rounded-[16px] md:h-[118px] md:w-[130px] xl:h-[125px] xl:w-[137px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)] backdrop-blur-sm"
      style={{
        backgroundColor: cardBg || "rgba(211,202,240,0.1)",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: borderColor || "rgba(255,255,255,0.3)",
      }}
    >
      <SvgIcon svgPath={iconPath} color={iconColor || "#ffffff"} width={58} height={58} />
    </div>
  );
}

/* ── Main component ── */

export default function OrgHero({
  badge,
  heading,
  description,
  ctaLabel,
  ctaHref,
  stats,
  centerIconPath,
  arcSvgPath,
  theme,
  arcColor
}: OrgHeroProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: theme.bgGradient }}
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-center px-6 pb-16 pt-28 md:px-12 md:pb-20 md:pt-32 xl:px-[120px] xl:pb-28 xl:pt-44">
        {/* ── Centered text block ── */}
        <div className="flex max-w-[577px] flex-col items-center gap-9 text-center">
          {/* Badge + heading + description group (tighter 12px gap) */}
          <div className="flex w-full flex-col items-center gap-3">
            {/* Badge */}
            <span
              className="inline-flex items-center rounded-lg px-2 py-1.5"
              style={{
                backgroundColor: theme.badgeBgColor,
                border: `1px solid ${theme.badgeBorderColor}`,
              }}
            >
              <span
                className="text-[11.11px] font-semibold leading-[1.2] tracking-[-0.11px]"
                style={{ color: theme.badgeTextColor || "#ffffff" }}
              >
                {badge}
              </span>
            </span>

            {/* Heading */}
            <h1
              className="text-[32px] font-semibold leading-[1.2] tracking-[-0.9556px] md:text-[40px] xl:text-[47.78px]"
              style={{ color: theme.headingColor || "var(--color-creme-500)" }}
            >
              {heading}
            </h1>

            {/* Description */}
            <p
              className="text-base font-medium leading-[1.5] tracking-[-0.16px]"
              style={{ color: theme.descriptionColor }}
            >
              {description}
            </p>
          </div>

          {/* CTA button */}
          <a
            href={ctaHref}
            className="inline-block rounded-lg px-4 py-3 text-base font-semibold leading-[1.2] tracking-[-0.32px] text-chalk-green-500 shadow-[0px_4px_15px_rgba(0,0,0,0.15)]"
            style={{
              backgroundImage:
                "linear-gradient(116.5deg, #ffffff 1.33%, #f7f7f7 98.18%)",
            }}
          >
            {ctaLabel}
          </a>
        </div>

        <div className="pointer-events-none absolute top-[63%] right-[45%] translate-x-1/2 rotate-[75deg]  lg:block ">
          <SvgIcon
            svgPath={"/images/common/logo-glass-effect.svg"}
            color={arcColor}
            fillColor={arcColor}
            width={800}
            height={919}
          />
        </div>
        {/* ── Stats area with decorative arc ── */}
        <div className="relative mt-12 w-full xl:mt-16">
          {/* 5 cards row */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <StatCard stat={stats[0]} bgColor={theme.statCardColors[0]} textColor={theme.statTextColor} cardBg={theme.statCardBg} borderColor={theme.statBorderColor} />
            <StatCard stat={stats[1]} bgColor={theme.statCardColors[1]} textColor={theme.statTextColor} cardBg={theme.statCardBg} borderColor={theme.statBorderColor} />
            <CenterIconCard
              iconPath={centerIconPath}
              bgColor={theme.centerIconBg}
              iconColor={theme.centerIconColor}
              cardBg={theme.statCardBg}
              borderColor={theme.statBorderColor}
            />
            <StatCard stat={stats[2]} bgColor={theme.statCardColors[2]} textColor={theme.statTextColor} cardBg={theme.statCardBg} borderColor={theme.statBorderColor} />
            <StatCard stat={stats[3]} bgColor={theme.statCardColors[3]} textColor={theme.statTextColor} cardBg={theme.statCardBg} borderColor={theme.statBorderColor} />
          </div>
        </div>
      </div>
    </section>
  );
}
