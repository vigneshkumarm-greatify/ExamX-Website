"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const CANVAS_W = 1440;
const CANVAS_H = 1090;
const DASHBOARD_TOP = 500; // approx where dashboard content starts

export default function HeroScaleWrapper({ children }: { children: ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [topOffset, setTopOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w >= CANVAS_W) {
        // Damped scale-up: 1.0 at 1440px → 1.2 at 1920px+
        const ratio = Math.min((w - CANVAS_W) / 480, 1);
        setScale(1 + ratio * 0.2);
        setTopOffset(ratio * -80); // shift up to -80px on 1920px+
      } else if (w >= 1024) {
        setScale(1);
        setTopOffset(0);
      } else {
        setScale(w / 1024);
        setTopOffset(0);
      }
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
      style={{ height: visibleH * scale + topOffset }}
    >
      <div
        className="absolute top-0"
        style={{
          width: CANVAS_W,
          height: CANVAS_H,
          left: "50%",
          marginLeft: -(CANVAS_W / 2),
          marginTop: -(crop * scale) + topOffset,
          transform: `scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        {children}
      </div>
    </div>
  );
}
