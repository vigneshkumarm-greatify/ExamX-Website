export default function QuestionBankCard() {
  return (
    <div className="relative overflow-hidden rounded-[20px] bg-chalk-green-500 p-9 md:h-[500px]">
      {/* Title block */}
      <h3 className="text-[23.04px] font-semibold leading-[1.2] tracking-[-0.46px] text-white">
        Organize 100K+ questions. Find any in seconds
      </h3>
      <p className="mt-2 max-w-[411px] text-base font-medium leading-[1.5] tracking-[-0.16px] text-chalk-green-100">
        Tag by subject, topic, difficulty, and Bloom&apos;s level. Version
        control, review workflows, and duplicate detection. Import from Word,
        Excel, or PDF in bulk.
      </p>

      {/* File/folder illustration */}
      <div className="relative mt-8 flex items-end justify-center h-[220px]">
        {/* Vertical columns (folder/file shapes) */}
        {[
          { h: 180, x: 0, opacity: 0.08 },
          { h: 200, x: 48, opacity: 0.1 },
          { h: 220, x: 96, opacity: 0.12 },
          { h: 200, x: 144, opacity: 0.1 },
          { h: 180, x: 192, opacity: 0.08 },
          { h: 160, x: 240, opacity: 0.06 },
          { h: 140, x: 288, opacity: 0.05 },
        ].map((col, i) => (
          <div
            key={i}
            className="absolute bottom-0 w-[40px] rounded-t-[6px]"
            style={{
              height: `${col.h}px`,
              left: `calc(50% - 168px + ${col.x}px)`,
              background: `rgba(255,255,255,${col.opacity})`,
            }}
          />
        ))}

        {/* Active/highlighted folder */}
        <div
          className="absolute bottom-0 w-[40px] rounded-t-[6px] border-t border-l border-r border-green-500/40"
          style={{
            height: "220px",
            left: "calc(50% - 72px)",
            background: "rgba(0,220,70,0.05)",
          }}
        >
          {/* Green top connector */}
          <div className="absolute -top-px left-0 right-0 h-[2px] bg-green-500/60" />
          <div className="absolute -top-[40px] left-1/2 -translate-x-1/2 w-px h-[40px] bg-green-500/40" />
          <div className="absolute -top-[40px] left-1/2 -translate-x-1/2 w-px h-[40px] bg-green-500/40">
            <div className="absolute -top-0 left-1/2 -translate-x-1/2 h-px w-[80px] bg-green-500/40" />
          </div>
        </div>

        {/* Floating tags */}
        <div className="absolute bottom-[30%] right-[10%] flex flex-col gap-2">
          <span className="rounded-lg border border-green-500/25 bg-chalk-green-400/40 px-3 py-1.5 text-[11px] font-semibold text-green-500">
            Import
          </span>
          <span className="rounded-lg border border-green-500/25 bg-chalk-green-400/40 px-3 py-1.5 text-[11px] font-semibold text-green-500">
            Physics
          </span>
          <span className="flex items-center gap-1.5 rounded-lg border border-green-500/25 bg-chalk-green-400/40 px-3 py-1.5 text-[11px] font-semibold text-green-500">
            Level:
            {/* Mini bar chart icon */}
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <rect x="0" y="8" width="3" height="4" rx="0.5" fill="#ff8a3b" />
              <rect x="4.5" y="4" width="3" height="8" rx="0.5" fill="#ff8a3b" />
              <rect x="9" y="0" width="3" height="12" rx="0.5" fill="#ff8a3b" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
