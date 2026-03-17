"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const logos = [
  { src: "/images/trusted-logos/adani-university.png", alt: "Adani University", width: 113, height: 38, containerWidth: 149 },
  { src: "/images/trusted-logos/srm.png", alt: "SRM University", width: 120, height: 41, containerWidth: 132 },
  { src: "/images/trusted-logos/middlesex-university.png", alt: "Middlesex University London", width: 108, height: 43, containerWidth: 128 },
  { src: "/images/trusted-logos/koshys.png", alt: "Koshys Group of Institutions", width: 155, height: 26, containerWidth: 155 },
  { src: "/images/trusted-logos/jsw.png", alt: "JSW", width: 89, height: 42, containerWidth: 110 },
  { src: "/images/trusted-logos/narayana.png", alt: "Narayana", width: 66, height: 66, containerWidth: 78, blend: true },
  { src: "/images/trusted-logos/dgsom.png", alt: "DGSOM School of Management", width: 127, height: 42, containerWidth: 139, blend: true },
  { src: "/images/trusted-logos/viewsonic.png", alt: "ViewSonic", width: 172, height: 28, containerWidth: 172 },
];

function LogoItem({ logo }: { logo: (typeof logos)[number] }) {
  return (
    <div
      className="marquee-item flex h-[52px] shrink-0 items-center justify-center"
      style={{ width: logo.containerWidth }}
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        className={`object-contain${logo.blend ? " mix-blend-darken" : ""}`}
      />
    </div>
  );
}

export default function TrustedBy() {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const items = track.querySelectorAll<HTMLElement>(".marquee-item");
    const gap = 64; // gap-16 = 64px
    const totalItems = items.length;
    const half = totalItems / 2; // we duplicate logos, so half = one full set

    // Calculate the width of one full set (first half of items + gaps)
    let setWidth = 0;
    for (let i = 0; i < half; i++) {
      setWidth += items[i].offsetWidth + gap;
    }

    // Position each item absolutely using GSAP
    let xPos = 0;
    items.forEach((item, i) => {
      gsap.set(item, { x: xPos, position: "absolute", left: 0, top: 0 });
      xPos += item.offsetWidth + gap;
    });

    // Set track height to match items
    track.style.height = "52px";

    // Animate: move each item left by setWidth, then wrap using modX
    const totalWidth = xPos; // total width of all items

    // Offset so logos scroll fully off the left edge before wrapping
    const wrapOffset = 200; // slightly more than widest logo container

    tweenRef.current = gsap.to(items, {
      x: `-=${setWidth}`,
      duration: 25,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x: number) => {
          const val = parseFloat(String(x));
          return ((val + wrapOffset) % totalWidth) - wrapOffset;
        }),
      },
    });

    // Pause on hover
    const handleEnter = () => tweenRef.current?.pause();
    const handleLeave = () => tweenRef.current?.resume();
    track.addEventListener("mouseenter", handleEnter);
    track.addEventListener("mouseleave", handleLeave);

    // Respect prefers-reduced-motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) tweenRef.current.pause();
    const handleMotion = (e: MediaQueryListEvent) => {
      if (e.matches) tweenRef.current?.pause();
      else tweenRef.current?.resume();
    };
    mq.addEventListener("change", handleMotion);

    return () => {
      tweenRef.current?.kill();
      track.removeEventListener("mouseenter", handleEnter);
      track.removeEventListener("mouseleave", handleLeave);
      mq.removeEventListener("change", handleMotion);
    };
  }, []);

  return (
    <section className="bg-creme-500 py-12 md:py-16 lg:py-24">
      <div className="flex flex-col items-center gap-[41px]">
        <h2 className="text-center text-[19.2px] font-semibold leading-[1.2] tracking-[-0.384px] text-chalk-green-500">
          Trusted by leading universities worldwide
        </h2>
        <div className="w-full overflow-x-clip">
          <div ref={trackRef} className="relative w-full">
            {[...logos, ...logos].map((logo, i) => (
              <LogoItem key={`${logo.alt}-${i}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
