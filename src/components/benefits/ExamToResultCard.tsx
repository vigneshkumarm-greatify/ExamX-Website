"use client";

import { useRef } from "react";
import { AnimatedBeam } from "@/components/AnimatedBeam";

export default function ExamToResultCard() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Left anchors (7 fan sources)
  const left1Ref = useRef<HTMLDivElement>(null);
  const left2Ref = useRef<HTMLDivElement>(null);
  const left3Ref = useRef<HTMLDivElement>(null);
  const left4Ref = useRef<HTMLDivElement>(null);
  const left5Ref = useRef<HTMLDivElement>(null);
  const left6Ref = useRef<HTMLDivElement>(null);
  const left7Ref = useRef<HTMLDivElement>(null);

  // Center anchor (AI graphic)
  const centerRef = useRef<HTMLDivElement>(null);

  // Right anchor (single output beam)
  const outputRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative overflow-hidden rounded-[20px] md:h-[313px]"
      style={{
        background: "linear-gradient(-60.73deg, #ffc9a5 1.9%, #fff 78%)",
      }}
    >
      {/* Title block */}
      <div className="px-8 pt-8">
        <h3 className="text-[23.04px] font-semibold leading-[1.2] tracking-[-0.46px] text-chalk-green-500">
          Exam to result in minutes. Not weeks
        </h3>
        <p className="mt-2 max-w-[411px] text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a]">
          Auto-publish results with configurable rules. Generate branded,
          verifiable digital certificates with QR codes. Bulk result processing
          and merit list generation.
        </p>
      </div>

      {/* Illustration area with beams */}
      <div ref={containerRef} className="relative mt-2 h-[160px]">
        {/* Left anchors — evenly spaced fan, top to bottom */}
        <div ref={left1Ref} className="absolute left-0 top-[8%] h-px w-px" />
        <div ref={left2Ref} className="absolute left-0 top-[20%] h-px w-px" />
        <div ref={left3Ref} className="absolute left-0 top-[32%] h-px w-px" />
        <div ref={left4Ref} className="absolute left-0 top-[50%] h-px w-px" />
        <div ref={left5Ref} className="absolute left-0 top-[68%] h-px w-px" />
        <div ref={left6Ref} className="absolute left-0 top-[80%] h-px w-px" />
        <div ref={left7Ref} className="absolute left-0 top-[92%] h-px w-px" />

        {/* Center — AI graphic (visible) */}
        <div
          ref={centerRef}
          className="absolute right-[39.5%] top-[55%] z-50 -translate-x-1/2 -translate-y-1/2"
        >
          <img
            src="/images/illustrations/ai-proctored-graphic.svg"
            alt=""
            className="h-[91px] w-[91px]"
          />
        </div>

        {/* Right anchor — at left edge of doc card group */}
        <div ref={outputRef} className="absolute right-[2%] top-[55%] h-px w-px z-100" />

        {/* 7 beams: left → center (straight lines, fan from geometry) */}
        {[
          { ref: left1Ref, curvature: 150, delay: 0 },
          { ref: left2Ref, curvature: 110, delay: 0.25 },
          { ref: left3Ref, curvature: 70, delay: 0.5 },
          { ref: left4Ref, curvature: 0, delay: 0.75 },
          { ref: left5Ref, curvature: -70, delay: 1.0 },
          { ref: left6Ref, curvature: -110, delay: 1.25 },
          { ref: left7Ref, curvature: -150, delay: 1.5 },
        ].map((beam, i) => (
          <AnimatedBeam
            key={`left-${i}`}
            containerRef={containerRef}
            fromRef={beam.ref}
            toRef={centerRef}
            curvature={beam.curvature}
            delay={beam.delay}
            duration={2.5}
            pathColor="#FFB482"
            pathOpacity={0.5}
            pathWidth={1.5}
            gradientStartColor="#ff8a3b"
            gradientStopColor="#f97316"
          />
        ))}

        {/* 1 beam: center → right (single output) */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={outputRef}
          curvature={0}
          delay={0.4}
          duration={2.5}
          pathColor="#FFB482"
          pathOpacity={0.5}
          pathWidth={1.5}
          gradientStartColor="#ff8a3b"
          gradientStopColor="#f97316"
        />

        {/* Floating tags — absolutely positioned to match Figma */}
        <FloatingTag label="Merit Lists" className="absolute left-[76%] top-[2%] z-10" />
        <FloatingTag label="Auto-Publish" className="absolute left-[55%] top-[30%] z-10" />
        <FloatingTag label="QR Certificates" className="absolute left-[75%] top-[56%] z-10" />

        {/* Document cards — positioned between AI graphic and tags */}
        <div className="absolute -right-[2%] top-[22%] flex gap-3 ">
          <DocumentMini />
          <DocumentMini />
        </div>
      </div>
    </div>
  );
}

function FloatingTag({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={`rounded-lg border border-green-200 bg-green-50 px-2.5 py-1 text-[12.62px] font-semibold leading-[1.2] tracking-[-0.13px] text-green-600 ${className ?? ""}`}
    >
      {label}
    </span>
  );
}

function DocumentMini() {
  return (
    <div className="flex h-[111px] w-[90px] flex-col gap-[5.5px] rounded-md bg-orange-50/80 p-2.5 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
      <div className="h-[2px] w-[70%] rounded-full bg-white" />
      <div className="h-[2px] w-full rounded-full bg-white" />
      <div className="h-[2px] w-full rounded-full bg-white" />
      <div className="h-[2px] w-full rounded-full bg-white" />
      <div className="h-[2px] w-full rounded-full bg-white" />
      <div className="h-[2px] w-full rounded-full bg-white" />
    </div>
  );
}
