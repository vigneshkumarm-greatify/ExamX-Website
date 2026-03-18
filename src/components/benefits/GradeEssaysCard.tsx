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
        <div className="mt-4 mb-8 flex gap-2">
          <span className="rounded-lg border border-orange-200 bg-orange-50 px-3 py-1 text-[12.6px] font-semibold text-orange-500">
            Rubric Mapping
          </span>
          <span className="rounded-lg border border-orange-200 bg-orange-50 px-3 py-1 text-[12.6px] font-semibold text-orange-500">
            Plagiarism Check
          </span>
        </div>
      </div>

      {/* ── Decorative diamond sparkles ── */}
      {/* Bottom-left trail */}
      <Sparkle left={9} top={198} />
      <Sparkle left={20} top={201} opacity={0.6} />
      <Sparkle left={21} top={242} />
      <Sparkle left={58} top={274} />
      <Sparkle left={76} top={290} />
      <Sparkle left={82} top={302} />
      <Sparkle left={100} top={290} opacity={0.7} />
      <Sparkle left={108} top={278} />
      <Sparkle left={35} top={260} opacity={0.7} />
      <Sparkle left={48} top={285} />
      <Sparkle left={65} top={305} opacity={0.6} />
      <Sparkle left={90} top={268} />
      <Sparkle left={15} top={225} opacity={0.7} />
      <Sparkle left={42} top={248} />
      <Sparkle left={72} top={258} opacity={0.6} />
      <Sparkle left={55} top={310} opacity={0.5} />
      <Sparkle left={95} top={300} opacity={0.7} />
      <Sparkle left={28} top={295} opacity={0.6} />

      {/* Right-side sparkles — white, bottom area */}
      <Sparkle left={534} top={155} color="white" />
      <Sparkle left={545} top={161} color="white" />
      <Sparkle left={547} top={153} color="white" />
      <Sparkle left={567} top={165} color="white" />
      <Sparkle left={549} top={185} color="white" />
      <Sparkle left={551} top={176} color="white" />
      <Sparkle left={555} top={175} color="white" />
      <Sparkle left={520} top={200} color="white" />
      <Sparkle left={560} top={210} color="white" />
      <Sparkle left={540} top={220} color="white" opacity={0.7} />
      <Sparkle left={570} top={195} color="white" opacity={0.7} />
      <Sparkle left={525} top={170} color="white" />
      <Sparkle left={510} top={215} color="white" opacity={0.6} />
      <Sparkle left={565} top={230} color="white" opacity={0.7} />
      <Sparkle left={545} top={240} color="white" opacity={0.6} />

      {/* ── Wavy lines at bottom ── */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-[120px] overflow-hidden">
        {/* Upper wave — solid #FFB482, rotated 180° */}
        <svg
          className="absolute bottom-[38px] w-full rotate-180"
          viewBox="0 0 604.946 35.5997"
          fill="none"
          preserveAspectRatio="none"
        >
          <g filter="url(#blur-upper)">
            <path
              d="M4.503 28.129C51.716 18.324 163.301 0.293 231.938 6.612C317.733 14.511 536.03 37.389 600.503 28.129"
              stroke="#FFB482"
              strokeWidth="2"
            />
          </g>
          <defs>
            <filter
              id="blur-upper"
              x="0"
              y="0"
              width="604.946"
              height="35.6"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="bg" />
              <feBlend in="SourceGraphic" in2="bg" result="shape" />
              <feGaussianBlur stdDeviation="2.15" result="blur" />
            </filter>
          </defs>
        </svg>

        {/* Bottom wave — orange-to-white gradient stroke */}
        <svg
          className="absolute bottom-[6px] w-full"
          viewBox="0 0 614.228 58.6"
          fill="none"
          preserveAspectRatio="none"
        >
          <g filter="url(#blur-bottom)">
            <path
              d="M4.666 49.132C52.592 30.306 165.862 -4.313 235.534 7.819C322.626 22.985 544.218 66.912 609.666 49.132"
              stroke="url(#wave-grad)"
              strokeWidth="2"
            />
          </g>
          <defs>
            <filter
              id="blur-bottom"
              x="0"
              y="0"
              width="614.228"
              height="58.6"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="bg" />
              <feBlend in="SourceGraphic" in2="bg" result="shape" />
              <feGaussianBlur stdDeviation="2.15" result="blur" />
            </filter>
            <linearGradient
              id="wave-grad"
              x1="117.523"
              y1="-96.151"
              x2="475.902"
              y2="174.367"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF8A3B" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Sparkle({
  left,
  top,
  opacity = 1,
  color = "#FFB482",
}: {
  left: number;
  top: number;
  opacity?: number;
  color?: string;
}) {
  return (
    <span
      className="pointer-events-none absolute h-[2px] w-[2px] rotate-45"
      style={{ left: `${left}px`, top: `${top}px`, opacity, background: color }}
    />
  );
}
