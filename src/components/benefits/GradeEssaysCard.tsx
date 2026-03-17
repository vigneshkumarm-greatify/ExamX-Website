export default function GradeEssaysCard() {
  return (
    <div
      className="relative overflow-hidden rounded-[20px] md:h-[313px]"
      style={{
        background: "linear-gradient(-60.73deg, #ffc9a5 1.9%, #fff 78%)",
      }}
    >
      {/* Title block */}
      <div className="px-8 pt-8">
        <h3 className="text-[21.67px] font-semibold leading-[1.3] text-chalk-green-500">
          Grade essays. At scale
        </h3>
        <p className="mt-2 max-w-[411px] text-base font-medium leading-[1.5] text-[#71717a]">
          AI understands context, depth, and writing quality. Scores essays
          aligned to your rubrics. Faculty review always available.
        </p>
      </div>

      {/* Inner UI card */}
      <div className="relative z-10 mx-auto mt-8 mb-12 w-[calc(100%-48px)] max-w-[425px] rounded-[16px] border border-orange-100 bg-creme-50 p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        {/* Top row */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-[#475569]">
            Auto-graded
          </span>
          <span className="text-sm font-bold text-orange-500">342 / 400</span>
        </div>

        {/* Divider */}
        <div className="my-3 border-t border-orange-100" />

        {/* Progress bar */}
        <div className="h-[11px] w-full overflow-hidden rounded-full bg-[#f1f5f9]">
          <div
            className="h-full rounded-full bg-orange-400"
            style={{ width: "85%" }}
          />
        </div>

        {/* Tags */}
        <div className="mt-4 flex gap-2">
          <span className="rounded-lg border border-orange-200 bg-orange-50 px-3 py-1 text-[12.6px] font-semibold text-orange-500">
            Rubric Mapping
          </span>
          <span className="rounded-lg border border-orange-200 bg-orange-50 px-3 py-1 text-[12.6px] font-semibold text-orange-500">
            Plagiarism Check
          </span>
        </div>
      </div>

      {/* ── Decorative sparkle dots ── */}

      {/* Bottom-left cluster */}
      <span
        className="absolute bottom-24 left-6 h-[3px] w-[3px] rounded-full bg-orange-400"
        style={{ boxShadow: "0 0 6px 2px rgba(255,138,59,0.5)" }}
      />
      <span
        className="absolute bottom-20 left-10 h-[2px] w-[2px] rounded-full bg-orange-500"
        style={{ boxShadow: "0 0 5px 2px rgba(255,138,59,0.4)" }}
      />
      <span
        className="absolute bottom-28 left-14 h-[3px] w-[3px] rounded-full bg-orange-400"
        style={{ boxShadow: "0 0 6px 2px rgba(255,138,59,0.45)" }}
      />
      <span
        className="absolute bottom-16 left-4 h-[2px] w-[2px] rounded-full bg-orange-500"
        style={{ boxShadow: "0 0 4px 1px rgba(255,138,59,0.35)" }}
      />
      <span
        className="absolute bottom-32 left-8 h-[2px] w-[2px] rounded-full bg-orange-400"
        style={{ boxShadow: "0 0 5px 2px rgba(255,138,59,0.4)" }}
      />
      <span
        className="absolute bottom-22 left-16 h-[3px] w-[3px] rounded-full bg-orange-500"
        style={{ boxShadow: "0 0 6px 2px rgba(255,138,59,0.5)" }}
      />

      {/* Top-right cluster */}
      <span
        className="absolute top-8 right-8 h-[3px] w-[3px] rounded-full bg-orange-400"
        style={{ boxShadow: "0 0 6px 2px rgba(255,138,59,0.5)" }}
      />
      <span
        className="absolute top-12 right-14 h-[2px] w-[2px] rounded-full bg-orange-500"
        style={{ boxShadow: "0 0 5px 2px rgba(255,138,59,0.4)" }}
      />
      <span
        className="absolute top-6 right-20 h-[2px] w-[2px] rounded-full bg-orange-400"
        style={{ boxShadow: "0 0 4px 1px rgba(255,138,59,0.35)" }}
      />
      <span
        className="absolute top-16 right-10 h-[3px] w-[3px] rounded-full bg-orange-500"
        style={{ boxShadow: "0 0 6px 2px rgba(255,138,59,0.45)" }}
      />
      <span
        className="absolute top-10 right-24 h-[2px] w-[2px] rounded-full bg-orange-400"
        style={{ boxShadow: "0 0 5px 2px rgba(255,138,59,0.4)" }}
      />
      <span
        className="absolute top-4 right-16 h-[3px] w-[3px] rounded-full bg-orange-500"
        style={{ boxShadow: "0 0 6px 2px rgba(255,138,59,0.5)" }}
      />
      <span
        className="absolute top-14 right-6 h-[2px] w-[2px] rounded-full bg-orange-400"
        style={{ boxShadow: "0 0 4px 1px rgba(255,138,59,0.35)" }}
      />

      {/* Mid-right cluster */}
      <span
        className="absolute top-1/2 right-4 h-[3px] w-[3px] rounded-full bg-orange-400"
        style={{ boxShadow: "0 0 6px 2px rgba(255,138,59,0.5)" }}
      />
      <span
        className="absolute top-[45%] right-10 h-[2px] w-[2px] rounded-full bg-orange-500"
        style={{ boxShadow: "0 0 5px 2px rgba(255,138,59,0.4)" }}
      />
      <span
        className="absolute top-[55%] right-8 h-[2px] w-[2px] rounded-full bg-orange-400"
        style={{ boxShadow: "0 0 4px 1px rgba(255,138,59,0.35)" }}
      />
      <span
        className="absolute top-[48%] right-16 h-[3px] w-[3px] rounded-full bg-orange-500"
        style={{ boxShadow: "0 0 6px 2px rgba(255,138,59,0.45)" }}
      />
      <span
        className="absolute top-[52%] right-14 h-[2px] w-[2px] rounded-full bg-orange-400"
        style={{ boxShadow: "0 0 5px 2px rgba(255,138,59,0.4)" }}
      />
      <span
        className="absolute top-[46%] right-6 h-[3px] w-[3px] rounded-full bg-orange-500"
        style={{ boxShadow: "0 0 6px 2px rgba(255,138,59,0.5)" }}
      />
      <span
        className="absolute top-[54%] right-12 h-[2px] w-[2px] rounded-full bg-orange-400"
        style={{ boxShadow: "0 0 4px 1px rgba(255,138,59,0.35)" }}
      />

      {/* ── Wavy lines at bottom ── */}
      <div className="absolute right-0 bottom-0 left-0 h-[120px] overflow-hidden">
        {/* Bottom wave — orange-to-white gradient stroke */}
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 600 100"
          fill="none"
          preserveAspectRatio="none"
          style={{ filter: "blur(2px)" }}
        >
          <defs>
            <linearGradient
              id="wave-grad-bottom"
              x1="0"
              y1="0"
              x2="600"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#ff8a3b" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
          <path
            d="M0 70 C100 40, 200 90, 300 60 S500 80, 600 50"
            stroke="url(#wave-grad-bottom)"
            strokeWidth="2"
          />
        </svg>

        {/* Upper wave — solid #FFB482, rotated 180° */}
        <svg
          className="absolute bottom-4 w-full rotate-180"
          viewBox="0 0 600 100"
          fill="none"
          preserveAspectRatio="none"
          style={{ filter: "blur(2px)" }}
        >
          <path
            d="M0 70 C100 40, 200 90, 300 60 S500 80, 600 50"
            stroke="#FFB482"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}
