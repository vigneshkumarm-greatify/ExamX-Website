export default function ConcurrentUsersCard() {
  return (
    <div
      className="relative overflow-hidden rounded-[20px] md:h-[313px]"
      style={{
        background: "linear-gradient(-60.73deg, #b8f5cb 1.9%, #fff 78.07%)",
      }}
    >
      {/* Background gradient overlay */}
      <div
        className="pointer-events-none absolute rounded-[16px] overflow-hidden"
        style={{
          left: "calc(50% - 52.5px)",
          transform: "translateX(-50%)",
          top: "166px",
          width: "571px",
          height: "293px",
          background:
            "linear-gradient(159.46deg, rgba(184,245,203,0.16) 6.7%, rgba(0,220,70,0.16) 57.64%)",
        }}
      >
        {/* Decorative background shape */}

        <div
          className=" absolute -right-32 -bottom-10 w-68 h-68 rounded-full rotate-270 border-[60px] border-transparent opacity-10
            border-t-green-500 border-r-green-500"
        ></div>
      </div>
      {/* Title block */}
      <div className="px-9 pt-9">
        <h3 className="text-[21.67px] font-semibold leading-[1.2] tracking-[-0.43px] text-chalk-green-500">
          100,000+ concurrent users. Zero downtime
        </h3>
        <p className="mt-2 max-w-[411px] text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a]">
          Cloud-native architecture built for peak loads. Auto-scaling servers,
          CDN delivery, &amp; bandwidth optimization for low-connectivity
          regions.
        </p>
      </div>

      {/* Progress bars */}
      <div className="relative mt-13 flex w-[501px] flex-col gap-3 px-9">
        <BarRow label="10K" rightInset="17.71%" />
        <BarRow label="50K" rightInset="9.26%" />
        <BarRow label="100K+" rightInset="3.27%" />
      </div>

      {/* Sparkle stars illustration */}
      <img
        src="/images/decoratives/sparkle-stars.svg"
        alt=""
        className="pointer-events-none absolute"
        style={{
          left: "504px",
          top: "184px",
          width: "60px",
          height: "60px",
        }}
      />
    </div>
  );
}

function BarRow({ label, rightInset }: { label: string; rightInset: string }) {
  return (
    <div className="flex w-full items-center justify-between">
      <span className="w-[47px] text-right text-base font-medium leading-[1.5] tracking-[-0.16px] text-green-700">
        {label}
      </span>
      <div className="h-2 w-[367px] overflow-hidden rounded-full bg-green-50">
        <div
          className="h-full rounded-full"
          style={{
            marginRight: rightInset,
            background: "linear-gradient(170.43deg, #5ce989 0%, #1fca55 100%)",
          }}
        />
      </div>
    </div>
  );
}
