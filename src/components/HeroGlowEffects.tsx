"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Dot coordinates extracted from SVG transform matrices
// Each transform="matrix(0.866025 -0.5 0.866025 0.5 X Y)" maps to position (X + r*0.866, Y - r*0.5) approximately
const LEFT_DOTS = [
  { x: 1.2, y: 3.1 },
  { x: 22.2, y: 6.1 },
  { x: 24.2, y: 47.1 },
  { x: 91.2, y: 79.1 },
  { x: 126.2, y: 95.1 },
  { x: 137.2, y: 107.1 },
  { x: 170.2, y: 118.1 },
  { x: 185.2, y: 130.1 },
  { x: 333.2, y: 206.1 },
  { x: 353.2, y: 218.1 },
  { x: 356.2, y: 226.1 },
  { x: 360.2, y: 183.1 },
  { x: 364.2, y: 197.1 },
  { x: 371.2, y: 198.1 },
  { x: 394.2, y: 212.1 },
];

const RIGHT_DOTS = [
  { x: 1.2, y: 161.1 },
  { x: 11.2, y: 159.1 },
  { x: 29.2, y: 143.1 },
  { x: 35.2, y: 174.1 },
  { x: 39.2, y: 167.1 },
  { x: 236.2, y: 22.1 },
  { x: 241.2, y: 14.1 },
  { x: 261.2, y: 36.1 },
  { x: 266.2, y: 10.1 },
  { x: 276.2, y: 34.1 },
  { x: 283.2, y: 6.1 },
  { x: 298.2, y: 24.1 },
  { x: 306.2, y: 3.1 },
  { x: 308.2, y: 26.1 },
  { x: 324.2, y: 27.1 },
  { x: 341.2, y: 7.1 },
  { x: 348.2, y: 13.1 },
  { x: 348.2, y: 37.1 },
  { x: 357.2, y: 50.1 },
  { x: 372.2, y: 53.1 },
  { x: 375.2, y: 25.1 },
  { x: 391.2, y: 63.1 },
  { x: 394.2, y: 32.1 },
  { x: 394.2, y: 72.1 },
  { x: 399.2, y: 41.1 },
  { x: 402.2, y: 72.1 },
  { x: 418.2, y: 76.1 },
  { x: 422.2, y: 54.1 },
  { x: 431.2, y: 84.1 },
  { x: 432.2, y: 56.1 },
];

// Tube configuration - same positions/sizes as original SVGs
const TUBES = [
  {
    // Tube 1 - left inner (glow-1)
    position: "left-[50px] top-[597px]",
    container: { w: 375, h: 870 },
    rotation: "-rotate-[15deg] -scale-y-100",
    ellipse: { cx: 139.091, cy: 489.158, rx: 79.0909, ry: 429.158 },
    viewBox: "0 0 278.182 978.316",
    filterSize: { w: 278.182, h: 978.316 },
    blur: 30,
  },
  {
    // Tube 2 - left outer (glow-2)
    position: "left-[-150px] top-[621px]",
    container: { w: 566, h: 822 },
    rotation: "-rotate-[30deg] -scale-y-100",
    ellipse: { cx: 169.091, cy: 519.158, rx: 79.0909, ry: 429.158 },
    viewBox: "0 0 338.182 1038.32",
    filterSize: { w: 338.182, h: 1038.32 },
    blur: 45,
  },
  {
    // Tube 3 - right outer (glow-3)
    position: "left-[calc(50%+451px)] top-[621px]",
    container: { w: 566, h: 822 },
    rotation: "rotate-[30deg] -scale-y-100",
    ellipse: { cx: 169.091, cy: 519.158, rx: 79.0909, ry: 429.158 },
    viewBox: "0 0 338.182 1038.32",
    filterSize: { w: 338.182, h: 1038.32 },
    blur: 45,
  },
  {
    // Tube 4 - right inner (glow-4)
    position: "left-[calc(50%+213px)] top-[597px]",
    container: { w: 375, h: 870 },
    rotation: "rotate-[15deg] -scale-y-100",
    ellipse: { cx: 139.091, cy: 489.158, rx: 79.0909, ry: 429.158 },
    viewBox: "0 0 278.182 978.316",
    filterSize: { w: 278.182, h: 978.316 },
    blur: 30,
  },
];

export default function HeroGlowEffects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Grid line flow: animate stroke-dashoffset for flowing light
      document.querySelectorAll<SVGPathElement>(".grid-flow-path").forEach((el, i) => {
        const totalLength = el.getTotalLength();
        const brightLength = totalLength * 0.25; // bright segment is 25% of path

        gsap.set(el, {
          strokeDasharray: `${brightLength} ${totalLength}`,
          strokeDashoffset: totalLength,
        });

        gsap.to(el, {
          strokeDashoffset: -totalLength,
          duration: 4,
          ease: "none",
          repeat: -1,
          delay: i * 0.5,
        });
      });

      // Dots: sequential glow wave
      gsap.fromTo(
        ".glow-dot-left",
        { opacity: 0.3 },
        {
          opacity: 1,
          duration: 0.5,
          stagger: { each: 0.08, repeat: -1, yoyo: true },
          ease: "sine.inOut",
        }
      );

      gsap.fromTo(
        ".glow-dot-right",
        { opacity: 0.3 },
        {
          opacity: 1,
          duration: 0.5,
          stagger: { each: 0.06, repeat: -1, yoyo: true },
          ease: "sine.inOut",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* ===== GLOW TUBES ===== */}
      {TUBES.map((tube, i) => (
        <div
          key={`tube-${i}`}
          className={`glow-tube-${i + 1} pointer-events-none absolute ${tube.position} flex items-center justify-center ${tube.rotation}`}
          style={{ width: tube.container.w, height: tube.container.h }}
        >
          <svg
            viewBox={tube.viewBox}
            preserveAspectRatio="none"
            width="100%"
            height="100%"
            overflow="visible"
            style={{ display: "block" }}
          >
            <defs>
              {/* Blur filter matching original SVG */}
              <filter
                id={`tube-blur-${i}`}
                x="0"
                y="0"
                width={tube.filterSize.w}
                height={tube.filterSize.h}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation={tube.blur}
                  result="effect1_foregroundBlur"
                />
              </filter>
            </defs>
            {/* Static green glow ellipse */}
            <g opacity="0.4" filter={`url(#tube-blur-${i})`}>
              <ellipse
                cx={tube.ellipse.cx}
                cy={tube.ellipse.cy}
                rx={tube.ellipse.rx}
                ry={tube.ellipse.ry}
                fill="#00DC46"
              />
            </g>
          </svg>
        </div>
      ))}

      {/* ===== GRID LINE LEFT ===== */}
      <div className="glow-grid-line-left pointer-events-none absolute left-[-67px] top-[543px] flex h-[598px] w-[1036px] items-center justify-center">
        <div className="-rotate-[30deg] skew-x-[30deg] scale-y-[0.87]">
          <svg
            viewBox="0 0 81.7255 1170.14"
            preserveAspectRatio="none"
            width={77}
            height={1150}
            overflow="visible"
            style={{ display: "block" }}
          >
            <defs>
              <filter id="flow-glow-left" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur1" />
                <feGaussianBlur stdDeviation="12" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Base dim path - the "pipe" */}
            <path
              d="M17.4938 10.3047L64.2317 1159.84"
              stroke="#00DC46"
              strokeOpacity="0.2"
              strokeWidth="15"
            />
            {/* Flowing bright segment */}
            <path
              className="grid-flow-path"
              d="M17.4938 10.3047L64.2317 1159.84"
              stroke="#01ff80"
              strokeWidth="15"
              strokeLinecap="round"
              filter="url(#flow-glow-left)"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* ===== GRID LINE RIGHT ===== */}
      <div className="glow-grid-line-right pointer-events-none absolute left-[836px] top-[352px] flex h-[830px] w-[1438px] items-center justify-center">
        <div className="-rotate-[30deg] skew-x-[30deg] scale-y-[0.87]">
          <svg
            viewBox="0 0 504.839 1210.36"
            preserveAspectRatio="none"
            width={477}
            height={1183}
            overflow="visible"
            style={{ display: "block" }}
          >
            <defs>
              <filter id="flow-glow-right" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur1" />
                <feGaussianBlur stdDeviation="12" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Base dim path */}
            <path
              d="M487.343 1200.11L449.066 65.8139C448.145 38.5284 425.508 17.0257 398.211 17.508L10.1325 24.3646"
              stroke="#00DC46"
              strokeOpacity="0.2"
              strokeWidth="15"
              fill="none"
            />
            {/* Flowing bright segment */}
            <path
              className="grid-flow-path"
              d="M487.343 1200.11L449.066 65.8139C448.145 38.5284 425.508 17.0257 398.211 17.508L10.1325 24.3646"
              stroke="#01ff80"
              strokeWidth="15"
              strokeLinecap="round"
              filter="url(#flow-glow-right)"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* ===== GLOW DOTS LEFT ===== */}
      <div className="glow-dots-left pointer-events-none absolute left-[7px] top-[595px] h-[226px] w-[398px]">
        <svg
          viewBox="0 0 400.864 229.231"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          overflow="visible"
          style={{ display: "block" }}
        >
          <defs>
            <filter
              id="dot-glow-left"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0.862745 0 0 0 0 0.27451 0 0 0 1 0"
              />
            </filter>
          </defs>
          {LEFT_DOTS.map((dot, i) => (
            <circle
              key={`left-dot-${i}`}
              className="glow-dot-left"
              cx={dot.x + 2.73}
              cy={dot.y + 0.79}
              r="1.577"
              fill="#00DC46"
              opacity="0.3"
              filter="url(#dot-glow-left)"
            />
          ))}
        </svg>
      </div>

      {/* ===== GLOW DOTS RIGHT ===== */}
      <div className="glow-dots-right pointer-events-none absolute left-[923px] top-[371px] h-[174px] w-[436px]">
        <svg
          viewBox="0 0 438.864 177.231"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          overflow="visible"
          style={{ display: "block" }}
        >
          <defs>
            <filter
              id="dot-glow-right"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0.862745 0 0 0 0 0.27451 0 0 0 1 0"
              />
            </filter>
          </defs>
          {RIGHT_DOTS.map((dot, i) => (
            <circle
              key={`right-dot-${i}`}
              className="glow-dot-right"
              cx={dot.x + 2.73}
              cy={dot.y + 0.79}
              r="1.577"
              fill="#00DC46"
              opacity="0.3"
              filter="url(#dot-glow-right)"
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
