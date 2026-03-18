"use client";

import { useEffect, useId, useRef, useState } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

interface AnimatedBeamProps {
  containerRef: React.RefObject<HTMLElement | null>;
  fromRef: React.RefObject<HTMLElement | null>;
  toRef: React.RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
  className?: string;
}

export function AnimatedBeam({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 2,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#00dc46",
  gradientStopColor = "#00373a",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  className,
}: AnimatedBeamProps) {
  const id = useId();
  const gradientId = `beam-gradient-${id}`;
  const gradientRef = useRef<SVGLinearGradientElement>(null);
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const from = fromRef.current;
    const to = toRef.current;

    if (!container || !from || !to) return;

    const updatePath = () => {
      const containerRect = container.getBoundingClientRect();
      const fromRect = from.getBoundingClientRect();
      const toRect = to.getBoundingClientRect();

      const svgWidth = containerRect.width;
      const svgHeight = containerRect.height;
      setSvgDimensions({ width: svgWidth, height: svgHeight });

      const startX =
        fromRect.left - containerRect.left + fromRect.width / 2 + startXOffset;
      const startY =
        fromRect.top - containerRect.top + fromRect.height / 2 + startYOffset;
      const endX =
        toRect.left - containerRect.left + toRect.width / 2 + endXOffset;
      const endY =
        toRect.top - containerRect.top + toRect.height / 2 + endYOffset;

      // Cubic bezier: straight from start, curves only near the end
      // cp1 keeps the line traveling straight from its origin
      const cp1X = startX + (endX - startX) * 0.7;
      const cp1Y = startY;
      // cp2 pulls the line into the destination point
      const cp2X = endX;
      const cp2Y = endY + curvature * 0.4;

      const d = `M ${startX},${startY} C ${cp1X},${cp1Y} ${cp2X},${cp2Y} ${endX},${endY}`;
      setPathD(d);
    };

    updatePath();

    const resizeObserver = new ResizeObserver(updatePath);
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
  ]);

  useEffect(() => {
    const gradientEl = gradientRef.current;
    if (!gradientEl) return;

    const fromVals = reverse
      ? { x1: "100%", x2: "110%" }
      : { x1: "-10%", x2: "0%" };
    const toVals = reverse
      ? { x1: "-10%", x2: "0%" }
      : { x1: "100%", x2: "110%" };

    gsap.set(gradientEl, { attr: fromVals });

    const tween = gsap.to(gradientEl, {
      attr: toVals,
      duration,
      delay,
      repeat: -1,
      ease: "none",
    });

    return () => {
      tween.kill();
    };
  }, [reverse, duration, delay]);

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "pointer-events-none absolute left-0 top-0 transform-gpu",
        className,
      )}
    >
      <defs>
        <linearGradient
          ref={gradientRef}
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          x1="0%"
          x2="0%"
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} />
          <stop offset="32.5%" stopColor={gradientStopColor} />
          <stop
            offset="100%"
            stopColor={gradientStopColor}
            stopOpacity="0"
          />
        </linearGradient>
      </defs>

      {pathD && (
        <>
          <path
            d={pathD}
            stroke={pathColor}
            strokeWidth={pathWidth}
            strokeOpacity={pathOpacity}
            strokeLinecap="round"
          />
          <path
            d={pathD}
            stroke={`url(#${gradientId})`}
            strokeWidth={pathWidth}
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}
