"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const CANVAS_W = 1440;
const CANVAS_H = 1090;
const DASHBOARD_TOP = 500; // approx where dashboard content starts

export default function HeroScaleWrapper({ children }: { children: ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      setScale(w >= 1024 ? 1 : w / 1024);
      setIsMobile(w < 768); // md breakpoint
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const crop = isMobile ? DASHBOARD_TOP : 0;
  const visibleH = CANVAS_H - crop;

  return (
    <div
      ref={wrapperRef}
      className="relative w-full "
      style={{ height: visibleH * scale }}
    >
      <div
        className="absolute top-0"
        style={{
          width: CANVAS_W,
          height: CANVAS_H,
          left: "50%",
          marginLeft: -(CANVAS_W / 2),
          marginTop: -(crop * scale),
          transform: `scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        {children}
      </div>
    </div>
  );
}
