export default function UploadSyllabusCard() {
  return (
    <div
      className="relative overflow-hidden rounded-[20px] md:h-[313px]"
      style={{
        background: "linear-gradient(135deg, #f3f0ff 0%, #ede8ff 40%, #f8f6ff 100%)",
      }}
    >
      {/* Title block */}
      <div className="px-8 pt-8">
        <h3 className="text-[23.04px] font-semibold leading-[1.2] tracking-[-0.46px] text-chalk-green-500">
          Upload syllabus. Get exam-ready
        </h3>
        <p className="mt-2 max-w-[411px] text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a]">
          AI generates MCQs, essays, case studies, calibrated by difficulty and
          Bloom&apos;s taxonomy. Create exams in minutes, not days.
        </p>
      </div>

      {/* Illustration area */}
      <div className="relative mt-6 flex items-center justify-center pb-8">
        {/* Radiating lines from center */}
        <div className="absolute left-[20%] top-1/2 -translate-y-1/2">
          {[0, 15, 30, 45, 60, -15, -30].map((angle) => (
            <div
              key={angle}
              className="absolute left-0 top-0 h-px w-24 origin-left"
              style={{
                transform: `rotate(${angle}deg)`,
                background:
                  "linear-gradient(90deg, #7e62d2 0%, transparent 100%)",
                opacity: 0.25,
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
          <FloatingTag label="30+ Languages" offset="right-4" />
          <FloatingTag label="20+ Question types" offset="right-12" />
          <FloatingTag label="Bulk Generate" offset="right-2" />
          <FloatingTag label="Bloom Taxonomy" offset="right-10" />
        </div>
      </div>
    </div>
  );
}

function FloatingTag({ label, offset }: { label: string; offset: string }) {
  return (
    <span
      className={`relative ${offset} rounded-lg border border-green-500/20 bg-white/80 px-3 py-1.5 text-[12px] font-semibold text-green-600 shadow-[0_2px_8px_rgba(0,0,0,0.04)]`}
    >
      {label}
    </span>
  );
}
