export default function ExamToResultCard() {
  return (
    <div
      className="relative overflow-hidden rounded-[20px] md:h-[313px]"
      style={{
        background: "linear-gradient(135deg, #fff5ee 0%, #ffe8d5 40%, #ffdec4 100%)",
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

      {/* Illustration area */}
      <div className="relative mt-6 flex items-center justify-center pb-8">
        {/* Radiating lines from center */}
        <div className="absolute left-[20%] top-1/2 -translate-y-1/2">
          {[0, 12, 24, 36, 48, -12, -24, -36].map((angle) => (
            <div
              key={angle}
              className="absolute left-0 top-0 h-px w-24 origin-left"
              style={{
                transform: `rotate(${angle}deg)`,
                background:
                  "linear-gradient(90deg, #ff8a3b 0%, transparent 100%)",
                opacity: 0.2,
              }}
            />
          ))}
        </div>

        {/* AI bolt circle */}
        <div className="relative z-10">
          <img
            src="/images/ai-graphic.svg"
            alt=""
            className="h-[63px] w-[63px]"
          />
        </div>

        {/* Floating tags — right side */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2.5">
          <FloatingTag label="Merit Lists" />
          <FloatingTag label="Auto-Publish" />
          <FloatingTag label="QR Certificates" />
        </div>
      </div>
    </div>
  );
}

function FloatingTag({ label }: { label: string }) {
  return (
    <span className="relative rounded-lg border border-green-500/20 bg-white/80 px-3 py-1.5 text-[12px] font-semibold text-green-600 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
      {label}
    </span>
  );
}
