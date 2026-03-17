export default function ConcurrentUsersCard() {
  return (
    <div
      className="relative overflow-hidden rounded-[20px] md:h-[313px]"
      style={{
        background: "linear-gradient(160deg, #f0fdf4 0%, #dcfce7 50%, #d1fae5 100%)",
      }}
    >
      {/* Title block */}
      <div className="px-8 pt-8">
        <h3 className="text-[23.04px] font-semibold leading-[1.2] tracking-[-0.46px] text-chalk-green-500">
          100,000+ concurrent users. Zero downtime
        </h3>
        <p className="mt-2 max-w-[411px] text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a]">
          Cloud-native architecture built for peak loads. Auto-scaling servers,
          CDN delivery, &amp; bandwidth optimization for low-connectivity
          regions.
        </p>
      </div>

      {/* Progress bars */}
      <div className="relative mt-6 px-8 pb-8">
        <div className="flex flex-col gap-4">
          <BarRow label="10K" percent={95} />
          <BarRow label="50K" percent={80} />
          <BarRow label="100K+" percent={65} />
        </div>

        {/* Decorative sparkle stars — top right */}
        <div className="absolute -top-2 right-4 flex flex-col items-end gap-3">
          <SparkleIcon size={28} opacity={0.6} />
          <SparkleIcon size={22} opacity={0.4} />
          <SparkleIcon size={16} opacity={0.25} />
        </div>
      </div>
    </div>
  );
}

function BarRow({ label, percent }: { label: string; percent: number }) {
  return (
    <div className="flex items-center gap-4">
      <span className="w-12 text-right text-[14px] font-semibold text-chalk-green-500">
        {label}
      </span>
      <div className="h-[14px] flex-1 overflow-hidden rounded-full bg-green-500/10">
        <div
          className="h-full rounded-full"
          style={{
            width: `${percent}%`,
            background: "linear-gradient(90deg, #00dc46 0%, #00b63a 100%)",
          }}
        />
      </div>
    </div>
  );
}

function SparkleIcon({ size, opacity }: { size: number; opacity: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{ opacity }}
    >
      <path
        d="M12 2C12 2 13.5 8.5 15.5 10.5C17.5 12.5 24 12 24 12C24 12 17.5 13.5 15.5 15.5C13.5 17.5 12 24 12 24C12 24 10.5 17.5 8.5 15.5C6.5 13.5 0 12 0 12C0 12 6.5 10.5 8.5 8.5C10.5 6.5 12 2 12 2Z"
        fill="#00dc46"
      />
    </svg>
  );
}
