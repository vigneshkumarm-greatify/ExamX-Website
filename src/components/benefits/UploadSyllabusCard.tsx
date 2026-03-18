"use client";

import { useRef } from "react";
import { AnimatedBeam } from "@/components/AnimatedBeam";

export default function UploadSyllabusCard() {
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
        background:
          "linear-gradient(-69.97deg, #d5ccf0 5.69%, #f6f4fc 49.42%, #fff 95.89%)",
      }}
    >
      {/* Title block */}
      <div className="px-8 pt-8">
        <h3 className="text-[21.67px] font-semibold leading-[1.2] tracking-[-0.43px] text-chalk-green-500">
          Upload syllabus. Get exam-ready
        </h3>
        <p className="mt-2 max-w-[411px] text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#3f3f46] opacity-70">
          AI generates MCQs, essays, case studies, calibrated by difficulty and
          Bloom&apos;s taxonomy. Create exams in minutes, not days.
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
            src="/images/ai-graphic.svg"
            alt=""
            className="h-[91px] w-[91px]"
          />
        </div>

        {/* Right anchor — at left edge of doc card group */}
        <div
          ref={outputRef}
          className="absolute right-[2%] top-[55%] z-[100] h-px w-px"
        />

        {/* 7 beams: left → center (straight lines, fan from geometry) */}
        {[
          { ref: left1Ref, delay: 0 },
          { ref: left2Ref, delay: 0.25 },
          { ref: left3Ref, delay: 0.5 },
          { ref: left4Ref, delay: 0.75 },
          { ref: left5Ref, delay: 1.0 },
          { ref: left6Ref, delay: 1.25 },
          { ref: left7Ref, delay: 1.5 },
        ].map((beam, i) => (
          <AnimatedBeam
            key={`left-${i}`}
            containerRef={containerRef}
            fromRef={beam.ref}
            toRef={centerRef}
            curvature={0}
            delay={beam.delay}
            duration={2.5}
            pathColor="#c4b5e0"
            pathOpacity={0.5}
            pathWidth={1.5}
            gradientStartColor="#7e62d2"
            gradientStopColor="#9b7fe8"
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
          pathColor="#c4b5e0"
          pathOpacity={0.5}
          pathWidth={1.5}
          gradientStartColor="#7e62d2"
          gradientStopColor="#9b7fe8"
        />

        {/* Floating tags — positioned to match Figma */}
        <FloatingTag
          label="30+ Languages"
          className="absolute left-[81%] top-[0%] z-10"
        />
        <FloatingTag
          label="20+ Question types"
          className="absolute left-[59%] top-[25%] z-10"
        />
        <FloatingTag
          label="Bulk Generate"
          className="absolute left-[80%] top-[47%] z-10"
        />
        <FloatingTag
          label="Bloom Taxonomy"
          className="absolute left-[59%] top-[72%] z-10"
        />

        {/* Document cards */}
        <div className="absolute -right-[2%] top-[10%] flex gap-3">
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
      className={`rounded-lg border border-green-200 bg-green-50 px-2 py-1 text-[12.62px] font-semibold leading-[1.2] tracking-[-0.13px] text-green-600 ${className ?? ""}`}
    >
      {label}
    </span>
  );
}

function DocumentMini() {
  return (
    <div className="flex h-[111px] w-[90px] flex-col gap-[8.8px] rounded-md bg-purple-50 p-2.5 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
      <div className="h-[2.6px] w-[76%] rounded-full bg-white" />
      <div className="h-[2.6px] w-full rounded-full bg-white" />
      <div className="h-[2.6px] w-full rounded-full bg-white" />
      <div className="h-[2.6px] w-full rounded-full bg-white" />
      <div className="h-[2.6px] w-full rounded-full bg-white" />
      <div className="h-[2.6px] w-full rounded-full bg-white" />
      <div className="h-[2.6px] w-full rounded-full bg-white" />
    </div>
  );
}
