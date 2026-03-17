export default function LockdownCard() {
  return (
    <div
      className="relative overflow-hidden rounded-[20px] bg-creme-50 md:h-[500px]"
    >
      {/* Title block */}
      <div className="px-8 pt-8">
        <h3 className="text-[23.04px] font-semibold leading-[1.2] tracking-[-0.46px] text-chalk-green-500">
          Lockdown mode. Zero loopholes
        </h3>
        <p className="mt-2 max-w-[411px] text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a]">
          Blocks tab switching, screen capture, clipboard access, and external
          applications during exams. Full-screen lockdown on every device.
        </p>
      </div>

      {/* Lockdown UI mockup */}
      <div className="relative mt-6 px-4 pb-0">
        <div className="overflow-hidden rounded-t-[12px] border border-b-0 border-orange-200/50 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
          {/* Lockdown banner */}
          <div className="flex flex-col items-center border-b border-gray-100 px-4 py-4">
            <p className="text-[14px] font-bold text-green-600">
              Lockdown mode on
            </p>
            {/* 5 lockdown icons */}
            <div className="mt-3 flex gap-3">
              <LockdownIcon type="screen" />
              <LockdownIcon type="tab" />
              <LockdownIcon type="clipboard" />
              <LockdownIcon type="browser" />
              <LockdownIcon type="lock" />
            </div>
          </div>

          {/* Exam question row */}
          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-2.5">
            <div className="flex items-center gap-2 text-[12px]">
              <span className="font-semibold text-green-600">
                Section A Question 8
              </span>
              <span className="text-[#d1d5db]">|</span>
              <span className="text-[#71717a]">Descriptive Answer</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-semibold text-green-600">
                3 MARK
              </span>
              {/* Bookmark icon */}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="text-[#94a3b8]"
              >
                <path
                  d="M3 2h8v10l-4-2.5L3 12V2z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
            </div>
          </div>

          {/* Answer area */}
          <div className="h-16 bg-gray-50/50" />
        </div>
      </div>
    </div>
  );
}

function LockdownIcon({ type }: { type: "screen" | "tab" | "clipboard" | "browser" | "lock" }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-orange-200 bg-white">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        {type === "screen" && (
          <>
            <rect x="3" y="4" width="16" height="11" rx="1.5" stroke="#ff8a3b" strokeWidth="1.4" />
            <path d="M8 18h6" stroke="#ff8a3b" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M11 15v3" stroke="#ff8a3b" strokeWidth="1.4" />
            <circle cx="11" cy="9" r="2" stroke="#ff8a3b" strokeWidth="1.2" strokeDasharray="1.5 1.5" />
          </>
        )}
        {type === "tab" && (
          <>
            <rect x="3" y="5" width="12" height="14" rx="1.5" stroke="#ff8a3b" strokeWidth="1.4" />
            <rect x="7" y="3" width="12" height="14" rx="1.5" stroke="#ff8a3b" strokeWidth="1.4" />
          </>
        )}
        {type === "clipboard" && (
          <>
            <circle cx="11" cy="11" r="7" stroke="#ff8a3b" strokeWidth="1.4" />
            <circle cx="11" cy="11" r="3" stroke="#ff8a3b" strokeWidth="1.2" />
            <path d="M11 4v2M11 16v2M4 11h2M16 11h2" stroke="#ff8a3b" strokeWidth="1.2" strokeLinecap="round" />
          </>
        )}
        {type === "browser" && (
          <>
            <circle cx="11" cy="11" r="7" stroke="#ff8a3b" strokeWidth="1.4" />
            <path d="M4 11h14M11 4c-2 2-3 4.5-3 7s1 5 3 7M11 4c2 2 3 4.5 3 7s-1 5-3 7" stroke="#ff8a3b" strokeWidth="1.2" />
          </>
        )}
        {type === "lock" && (
          <>
            <rect x="5" y="10" width="12" height="9" rx="1.5" stroke="#ff8a3b" strokeWidth="1.4" />
            <path d="M8 10V7a3 3 0 0 1 6 0v3" stroke="#ff8a3b" strokeWidth="1.4" strokeLinecap="round" />
            <circle cx="11" cy="14.5" r="1.5" fill="#ff8a3b" />
          </>
        )}
      </svg>
    </div>
  );
}
