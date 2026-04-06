"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SvgIcon from "../common/SvgIcon";

const CANVAS_SIZE = 838;

/* ── Icon bubble data ── */
const iconBubbles = [
  {
    src: "/images/about/icons/icon-analytics.svg",
    alt: "Analytics",
    glow: "bg-purple-500",
    top: 8.7,
    left: 80.2,
  },
  {
    src: "/images/about/icons/icon-activity.svg",
    alt: "Activity",
    glow: "bg-orange-500",
    top: 2.0,
    left: 36.3,
  },
  {
    src: "/images/about/icons/icon-edit.svg",
    alt: "Edit",
    glow: "bg-purple-400",
    top: 15.8,
    left: 13.4,
  },
  {
    src: "/images/about/icons/icon-document.svg",
    alt: "Document",
    glow: "bg-chalk-green-500",
    top: 44.9,
    left: 0.0,
  },
  {
    src: "/images/about/icons/icon-scan.svg",
    alt: "Scan",
    glow: "bg-green-500",
    top: 37.1,
    left: 19.9,
  },
  {
    src: "/images/about/icons/icon-graph.svg",
    alt: "Graph",
    glow: "bg-chalk-green-500",
    top: 18.3,
    left: 40.8,
  },
  {
    src: "/images/about/icons/icon-meeting.svg",
    alt: "Meeting",
    glow: "bg-orange-500",
    top: 29.6,
    left: 95.5,
  },
  {
    src: "/images/about/icons/icon-clipboard-check.svg",
    alt: "Clipboard-Check",
    glow: "bg-green-500",
    top: 9.2,
    left: 59.2,
  },
  {
    src: "/images/about/icons/icon-task-list.svg",
    alt: "Task-List",
    glow: "bg-gray-500",
    top: 26.5,
    left: 73.2,
  },
  {
    src: "/images/about/icons/icon-strategy.svg",
    alt: "Strategy",
    glow: "bg-chalk-green-500",
    top: 51.1,
    left: 90.1,
  },
];

export default function ConcentricCircles() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function update() {
      const available = Math.min(window.innerWidth - 48, 1200);
      setScale(available < CANVAS_SIZE ? available / CANVAS_SIZE : 1);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div
      className="relative mx-auto w-full pt-8 md:pt-14"
      style={{ height: CANVAS_SIZE * scale * 0.67 }}
    >
      <div
        className="absolute left-1/2"
        style={{
          width: CANVAS_SIZE,
          height: CANVAS_SIZE,
          marginLeft: -(CANVAS_SIZE / 2),
          transform: `scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        {/* ── Concentric circles ── */}
        {/* Outer — 838px */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full  bg-linear-to-b from-[#E6FCED]/40 from-10% to-[#FFFFFF]/10 to-80% border border-green-200/50"
          style={{
            width: 838,
            height: 838,
          }}
        />
        {/* 2nd — 692px */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full  bg-linear-to-b from-[#B8F5CB]/20 from-10% to-[#FFFFFF] to-80% border border-green-200/50"
          style={{
            width: 692,
            height: 692,
          }}
        />
        {/* 3rd — 546px */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full  bg-linear-to-b from-[#8AEFAA]/10 from-10% to-[#FFFFFF]/20 to-80% border border-green-200/50"
          style={{
            width: 546,
            height: 546,
          }}
        />
        {/* Inner — 400px */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-b from-[#00DC46]/10 from-10% to-[#FFFFFF]/20 to-80% border border-green-200/50 "
          style={{
            width: 400,
            height: 400,
          }}
        />

        {/* ── Center logo ── */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <Image
            src="/images/common/ai-logo.svg"
            alt=""
            width={80}
            height={65}
            className="h-[100px] w-auto"
          />
        </div>

        {/* ── Floating icon bubbles ── */}
        {iconBubbles.map((icon) => (
          <div
            key={icon.alt}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{
              top: `${icon.top}%`,
              left: `${icon.left}%`,
              width: 76,
              height: 76,
            }}
          >
            {/* Glow */}


            <div
              className={`pointer-events-none absolute inset-0 m-auto h-[50%] w-[50%] rounded-full opacity-60 blur-md ${icon.glow}`}
            />
            {/* White container */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-16 w-16 items-center justify-center rounded-full  border border-[#FAFAFA]/50 bg-white/50  shadow-[0px_0px_4px_0px_rgba(0,0,0,0.1)]  ">
              <SvgIcon svgPath={icon.src} width={30} className="h-auto  " />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
