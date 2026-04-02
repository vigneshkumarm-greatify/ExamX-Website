export default function CatchesCard() {
  return (
    <div className="relative overflow-hidden rounded-[20px] bg-chalk-green-500 p-6   lg:p-9 lg:h-[500px]">
      {/* Title block */}
      <h3 className="text-[21.67px] font-semibold leading-[1.2] tracking-[-0.43px] text-creme-500">
        Catches what humans miss
      </h3>
      <p className="mt-2 max-w-[411px] text-base font-medium leading-[1.5] tracking-[-0.16px] text-white opacity-70">
        Monitors tab switches, detects phones and earpieces, flags copy-paste
        attempts, and identifies suspicious behavioral patterns across sessions.
      </p>

      {/* Detection grid */}
      <div className="relative mx-auto mt-8 max-w-[491px]">
        {/* Outer gradient glow frame */}
        <div
          className="absolute -inset-2 rounded-[16px]"
          style={{
            background:
              "linear-gradient(124.21deg, rgba(0,220,70,0.16) 12.46%, rgba(2,19,7,0.16) 81.02%)",
          }}
        />

        {/* Inner bordered container */}
        <div className="relative overflow-hidden rounded-[10px] border border-[#36de50] -mb-8 md:mt-12 lg:mt-18">
          {/* 3×2 icon grid */}
          <div className="grid grid-cols-3 gap-[15px] p-[21px]">
            <IconCell icon="iris-scan" status="ok" />
            <IconCell icon="device" status="ok" />
            <IconCell icon="screen-alert" status="alert" />
            <IconCell icon="headphone" status="alert" />
            <IconCell icon="face-scan" status="ok" />
            <IconCell icon="magnifying-glass" status="ok" />
          </div>

          {/* Horizontal scan line — spans full width, centered between rows */}
          <div className="pointer-events-none absolute left-0 right-0 top-[calc(50%-50px)]">
            <img
              src="/images/home/decoratives/scan-line.svg"
              alt=""
              className="h-[6px] w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function IconCell({
  icon,
  status,
}: {
  icon: string;
  status: "ok" | "alert";
}) {
  const isAlert = status === "alert";

  return (
    <div
      className="relative flex aspect-square items-center justify-center rounded-[10px] border"
      style={{
        background: "rgba(26,184,84,0.08)",
        borderColor: isAlert ? "#ff8a3b" : "rgba(26,184,84,0.15)",
      }}
    >
      {/* Status badge */}
      <div
        className="absolute -right-[6px] -top-[6px] flex h-[18px] w-[18px] items-center justify-center rounded-full"
        style={{ background: isAlert ? "#ff8a3b" : "#00dc46" }}
      >
        <img
          src={
            isAlert
              ? "/images/home/icons/icon-warning-diamond.svg"
              : "/images/home/icons/icon-tick-square.svg"
          }
          alt=""
          className={isAlert ? "h-[10px] w-[3px]" : "h-[6px] w-[8px]"}
        />
      </div>

      {/* Icon */}
      <img
        src={`/images/home/icons/icon-${icon}.svg`}
        alt=""
        draggable={false}
        className="h-[36px] w-[36px] select-none"
      />
      <div className="absolute inset-0 z-10" />
    </div>
  );
}
