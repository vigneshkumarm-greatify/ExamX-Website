export default function FairExamsCard() {
  return (
    <div
      className="relative overflow-hidden rounded-[20px] bg-creme-50 md:h-[500px]"
    >
      {/* Title block */}
      <div className="px-8 pt-8">
        <h3 className="text-[23.04px] font-semibold leading-[1.2] tracking-[-0.46px] text-chalk-green-500">
          Fair exams for every candidate
        </h3>
        <p className="mt-2 max-w-[411px] text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a]">
          Extra time accommodations, screen reader support, font size controls,
          high-contrast mode, and configurable breaks. WCAG 2.1 AA compliant.
        </p>
      </div>

      {/* Exam UI mockup */}
      <div className="relative mt-6 px-4 pb-0">
        <div className="overflow-hidden rounded-t-[12px] border border-b-0 border-green-500/15 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-gray-100 bg-chalk-green-500 px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-green-500">
                Time Left
              </span>
              <span className="rounded-md bg-chalk-green-400 px-2 py-0.5 text-[12px] font-bold text-white">
                0:18:32
              </span>
            </div>
            <span className="rounded-md border border-green-500/30 bg-green-500/10 px-3 py-1 text-[11px] font-semibold text-green-500">
              Submit exam
            </span>
          </div>

          {/* Content area */}
          <div className="relative flex">
            {/* Left — question area */}
            <div className="flex-1 p-4">
              <div className="flex items-center gap-2 text-[12px]">
                <span className="font-semibold text-green-600">
                  Section A Question 8
                </span>
                <span className="text-[#71717a]">|</span>
                <span className="text-[#71717a]">Descriptive Answer</span>
              </div>

              {/* Answer box */}
              <div className="mt-3 h-20 rounded-lg border border-gray-200 bg-gray-50" />

              {/* Toolbar */}
              <div className="mt-2 flex gap-3">
                {["B", "I", "≡", "≡", "⊞"].map((t, i) => (
                  <span
                    key={i}
                    className="text-[13px] font-bold text-[#94a3b8]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — question list panel */}
            <div className="w-[160px] border-l border-gray-100 bg-gray-50/50 p-3">
              <p className="text-[11px] font-bold text-chalk-green-500">
                Question list
              </p>
              <p className="mt-1.5 text-[9px] font-semibold uppercase tracking-wider text-[#94a3b8]">
                Section A
              </p>
              <div className="mt-1.5 grid grid-cols-5 gap-1">
                {Array.from({ length: 8 }, (_, i) => (
                  <span
                    key={i}
                    className={`flex h-6 w-6 items-center justify-center rounded text-[10px] font-medium ${
                      i === 7
                        ? "bg-green-500 text-white"
                        : i < 5
                          ? "border border-green-500/30 bg-green-500/10 text-green-600"
                          : "border border-gray-200 bg-white text-gray-400"
                    }`}
                  >
                    {i + 1}
                  </span>
                ))}
              </div>

              {/* Marks */}
              <div className="mt-3 text-right text-[10px] font-semibold text-green-600">
                3 MARK
              </div>
            </div>
          </div>
        </div>

        {/* Accessibility icon — pen/contrast */}
        <div className="absolute bottom-4 right-8 flex h-12 w-12 items-center justify-center rounded-xl bg-chalk-green-500 shadow-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 4L4 20h16L12 4z" fill="white" />
            <path d="M12 4L4 20h8V4z" fill="#1a1a1a" />
          </svg>
        </div>
      </div>
    </div>
  );
}
