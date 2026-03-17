export default function CatchesCard() {
  return (
    <div className="relative overflow-hidden rounded-[20px] bg-chalk-green-500 p-9 md:h-[500px]">
      {/* Title block */}
      <h3 className="text-[23.04px] font-semibold leading-[1.2] tracking-[-0.46px] text-white">
        Catches what humans miss
      </h3>
      <p className="mt-2 max-w-[411px] text-base font-medium leading-[1.5] tracking-[-0.16px] text-chalk-green-100">
        Monitors tab switches, detects phones and earpieces, flags copy-paste
        attempts, and identifies suspicious behavioral patterns across sessions.
      </p>

      {/* Detection grid */}
      <div className="relative mt-8">
        {/* Outer frame with green border */}
        <div className="rounded-[12px] border border-green-500/30 p-3">
          {/* 3x2 icon grid */}
          <div className="grid grid-cols-3 gap-3">
            <IconCell icon="iris" status="ok" />
            <IconCell icon="device" status="ok" />
            <IconCell icon="screen" status="alert" />
            <IconCell icon="headphone" status="alert" />
            <IconCell icon="face" status="ok" />
            <IconCell icon="search" status="ok" />
          </div>
        </div>

        {/* Horizontal scan line */}
        <div
          className="pointer-events-none absolute left-0 right-0 top-[55%] h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #00dc46 30%, #00dc46 70%, transparent 100%)",
            boxShadow: "0 0 8px 1px rgba(0,220,70,0.3)",
          }}
        />
      </div>
    </div>
  );
}

function IconCell({
  icon,
  status,
}: {
  icon: "iris" | "device" | "screen" | "headphone" | "face" | "search";
  status: "ok" | "alert";
}) {
  const borderColor =
    status === "ok" ? "border-green-500/30" : "border-orange-500/50";
  const badgeColor =
    status === "ok" ? "bg-green-500 text-white" : "bg-orange-500 text-white";

  return (
    <div
      className={`relative flex aspect-square items-center justify-center rounded-[10px] border bg-chalk-green-400/30 ${borderColor}`}
    >
      {/* Badge */}
      <span
        className={`absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full text-[10px] ${badgeColor}`}
      >
        {status === "ok" ? "✓" : "!"}
      </span>

      {/* Icon — pure CSS/SVG */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        className="text-green-500"
      >
        {icon === "iris" && (
          <>
            <circle cx="18" cy="18" r="7" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="18" cy="18" r="3" fill="currentColor" />
            <path d="M18 7V4M18 32v-3M7 18H4M32 18h-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <rect x="6" y="6" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <rect x="24" y="6" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <rect x="6" y="24" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <rect x="24" y="24" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </>
        )}
        {icon === "device" && (
          <>
            <rect x="8" y="6" width="14" height="22" rx="2" stroke="currentColor" strokeWidth="1.8" />
            <rect x="18" y="10" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="15" cy="24" r="1.5" fill="currentColor" />
          </>
        )}
        {icon === "screen" && (
          <>
            <rect x="6" y="8" width="24" height="16" rx="2" stroke={status === "alert" ? "#ff8a3b" : "currentColor"} strokeWidth="1.8" />
            <path d="M14 28h8" stroke={status === "alert" ? "#ff8a3b" : "currentColor"} strokeWidth="1.8" strokeLinecap="round" />
            <path d="M18 24v4" stroke={status === "alert" ? "#ff8a3b" : "currentColor"} strokeWidth="1.8" />
            <circle cx="18" cy="16" r="3" stroke={status === "alert" ? "#ff8a3b" : "currentColor"} strokeWidth="1.5" strokeDasharray="2 2" />
          </>
        )}
        {icon === "headphone" && (
          <>
            <path d="M8 20v-4a10 10 0 0 1 20 0v4" stroke="#ff8a3b" strokeWidth="1.8" strokeLinecap="round" />
            <rect x="5" y="20" width="5" height="8" rx="2" stroke="#ff8a3b" strokeWidth="1.8" />
            <rect x="26" y="20" width="5" height="8" rx="2" stroke="#ff8a3b" strokeWidth="1.8" />
          </>
        )}
        {icon === "face" && (
          <>
            <circle cx="18" cy="16" r="8" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="15" cy="14" r="1" fill="currentColor" />
            <circle cx="21" cy="14" r="1" fill="currentColor" />
            <path d="M14 19a4 4 0 0 0 8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M10 28c0-3 3.5-5 8-5s8 2 8 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </>
        )}
        {icon === "search" && (
          <>
            <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="1.8" />
            <path d="M22 22l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </>
        )}
      </svg>
    </div>
  );
}
