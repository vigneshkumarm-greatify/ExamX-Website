export default function AIProctorCard() {
  return (
    <div className="relative overflow-hidden rounded-[20px] bg-chalk-green-500 md:h-[313px]">
      {/* Horizontal grid lines */}
      <div className="pointer-events-none absolute inset-x-0 top-[156px]">
        {[0, 40.44, 80.89, 121.33, 161.78].map((offset) => (
          <div
            key={offset}
            className="absolute left-0 h-px w-full opacity-10"
            style={{
              top: `${offset}px`,
              background:
                "linear-gradient(90deg, transparent 0%, #00dc46 30%, #00dc46 70%, transparent 100%)",
            }}
          />
        ))}
      </div>

      {/* Green glow — bottom-left */}
      <div
        className="pointer-events-none absolute -left-[100px] top-[140px] h-[317px] w-[317px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,220,70,0.25) 0%, transparent 70%)",
        }}
      />
      {/* Green glow — top-right */}
      <div
        className="pointer-events-none absolute -top-[150px] right-[-80px] h-[317px] w-[317px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,220,70,0.2) 0%, transparent 70%)",
        }}
      />

      {/* Title block */}
      <div className="relative z-10 px-9 pt-9">
        <h3 className="text-[23.04px] font-semibold leading-[1.2] tracking-[-0.46px] text-white">
          AI eyes on every exam. Zero compromise
        </h3>
        <p className="mt-2 w-full max-w-[411px] text-base font-medium leading-[1.5] tracking-[-0.16px] text-chalk-green-100">
          Continuous real-time monitoring using computer vision. Face detection
          verifies identity, gaze tracking follows attention, and multi-person
          detection flags unauthorized help, all without a human proctor.
        </p>
      </div>

      {/* Inner UI — stats & tags */}
      <div className="relative z-10 mt-6 flex items-center gap-4 px-9 pb-9">
        {/* AI graphic */}
        <img
          src="/images/ai-proctored-graphic.svg"
          alt=""
          className="h-[63px] w-[63px] shrink-0"
        />

        {/* Stats + tags */}
        <div className="flex flex-1 flex-col gap-2">
          {/* Stat boxes */}
          <div className="flex gap-2">
            <StatBox value="99.2%" label="Detection accuracy" />
            <StatBox value="<0.5s" label="Alert response" />
            <StatBox value="85%" label="Less cheating" />
          </div>
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <Tag label="Object Detection" />
            <Tag label="Audio Analysis" />
            <Tag label="Gaze Tracking" />
            <Tag label="Face Detection" />
          </div>
        </div>
      </div>

      {/* Decorative green dots */}
      <span
        className="absolute left-[132px] top-[229px] h-[6px] w-[6px] rounded-full bg-green-500"
        style={{ boxShadow: "0 0 6px 2px rgba(0,220,70,0.5)" }}
      />
      <span
        className="absolute left-[229px] top-[252px] h-[6px] w-[6px] rounded-full bg-green-500"
        style={{ boxShadow: "0 0 6px 2px rgba(0,220,70,0.5)" }}
      />
      <span
        className="absolute left-[461px] top-[172px] h-[6px] w-[6px] rounded-full bg-green-500"
        style={{ boxShadow: "0 0 6px 2px rgba(0,220,70,0.5)" }}
      />

      {/* Connecting line — decorative path from iris to stats */}
      <svg
        className="pointer-events-none absolute left-[80px] top-[200px] z-0 opacity-20"
        width="200"
        height="100"
        fill="none"
      >
        <path
          d="M0 50 C30 50, 40 10, 80 10 L180 10"
          stroke="#00dc46"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M0 50 C30 50, 40 80, 80 80 L180 80"
          stroke="#00dc46"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
      </svg>
    </div>
  );
}

function StatBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center rounded-[6px] border border-green-500 bg-chalk-green-500 px-2 py-2">
      <span className="text-[14.69px] font-semibold leading-[1.2] tracking-[-0.29px] text-[#38d276]">
        {value}
      </span>
      <span className="mt-0.5 text-[9.18px] font-medium leading-[1.3] tracking-[-0.09px] text-chalk-green-100 opacity-60">
        {label}
      </span>
    </div>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span
      className="rounded-[5.6px] border px-2.5 py-1 text-[9.22px] font-semibold leading-none text-[#38d276]"
      style={{
        background: "rgba(26,184,84,0.1)",
        borderColor: "rgba(26,184,84,0.15)",
      }}
    >
      {label}
    </span>
  );
}
