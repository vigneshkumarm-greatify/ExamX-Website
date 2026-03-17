export default function AnalyticsCard() {
  return (
    <div
      className="relative overflow-hidden rounded-[20px] md:h-[500px]"
      style={{
        background: "linear-gradient(160deg, #f5f2ff 0%, #ede8ff 50%, #e8deff 100%)",
      }}
    >
      {/* Title block */}
      <div className="px-8 pt-8">
        <h3 className="text-[23.04px] font-semibold leading-[1.2] tracking-[-0.46px] text-chalk-green-500">
          See everything. In real time
        </h3>
        <p className="mt-2 max-w-[411px] text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a]">
          Live exam dashboards, item-level analysis, difficulty index,
          discrimination index, and performance trends. Export to PDF, Excel, or
          CSV in one click.
        </p>
      </div>

      {/* Dashboard mockup */}
      <div className="relative mt-6 px-6 pb-6">
        <div className="rounded-[12px] border border-purple-100 bg-white/80 p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          {/* Header row */}
          <div className="flex items-center justify-between">
            <p className="text-[14px] font-bold text-chalk-green-500">
              Live Exam Dashboard
            </p>
            <span className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-[11px] font-medium text-[#71717a]">
              {/* Export icon */}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 8v2h8V8M6 2v6M3 5l3-3 3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Export
            </span>
          </div>

          {/* Legend */}
          <div className="mt-3 flex gap-4">
            <LegendDot color="#6240c8" label="Above average" />
            <LegendDot color="#7e62d2" label="Average" />
            <LegendDot color="#d3caf0" label="Poor" />
          </div>

          {/* Donut chart + side info */}
          <div className="mt-4 flex items-center gap-6">
            {/* Donut chart — pure CSS/SVG */}
            <div className="relative h-[120px] w-[120px] shrink-0">
              <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
                {/* Background track */}
                <circle
                  cx="60"
                  cy="60"
                  r="48"
                  fill="none"
                  stroke="#ede8ff"
                  strokeWidth="18"
                />
                {/* Above average — ~55% */}
                <circle
                  cx="60"
                  cy="60"
                  r="48"
                  fill="none"
                  stroke="#6240c8"
                  strokeWidth="18"
                  strokeDasharray="166 136"
                  strokeLinecap="round"
                />
                {/* Average — ~30% */}
                <circle
                  cx="60"
                  cy="60"
                  r="48"
                  fill="none"
                  stroke="#7e62d2"
                  strokeWidth="18"
                  strokeDasharray="90 212"
                  strokeDashoffset="-166"
                  strokeLinecap="round"
                />
              </svg>
              {/* Center label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[16px] font-bold text-purple-500">
                  Average
                </span>
              </div>
            </div>

            {/* Export formats */}
            <div className="flex flex-col gap-2">
              {["PDF", "Excel", "CVS"].map((fmt) => (
                <span
                  key={fmt}
                  className="rounded-lg border border-gray-200 bg-white px-4 py-1.5 text-[11px] font-medium text-[#71717a]"
                >
                  {fmt}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Item Analysis floating badge */}
        <div className="absolute bottom-12 left-2 flex items-center gap-2 rounded-lg border border-purple-100 bg-white/90 px-3 py-2 shadow-sm">
          <span className="text-[11px] font-semibold text-chalk-green-500">
            Item Analysis
          </span>
          {/* Mini sparkline */}
          <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
            <path
              d="M0 12 L8 8 L16 10 L24 4 L32 6 L40 2"
              stroke="#7e62d2"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          <span className="text-[10px] font-semibold text-purple-500">5%</span>
        </div>

        {/* Performance Trends floating badge */}
        <div className="absolute bottom-2 right-4 flex items-center gap-2 rounded-lg border border-purple-100 bg-white/90 px-3 py-2 shadow-sm">
          <span className="text-[11px] font-semibold text-chalk-green-500">
            Performance Trends
          </span>
          <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
            <path
              d="M0 14 L8 10 L16 12 L24 6 L32 8 L40 2"
              stroke="#7e62d2"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          <span className="text-[10px] font-semibold text-green-600">Good</span>
        </div>
      </div>
    </div>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span
        className="h-2.5 w-2.5 rounded-sm"
        style={{ backgroundColor: color }}
      />
      <span className="text-[10px] font-medium text-[#71717a]">{label}</span>
    </div>
  );
}
