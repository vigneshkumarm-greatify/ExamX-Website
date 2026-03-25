export default function AIProctorCard() {
  return (
    <div className="relative overflow-hidden rounded-[20px] bg-chalk-green-500 lg:h-[313px]">
      {/* Horizontal grid lines — dashed */}
      <div className="pointer-events-none absolute inset-x-0 top-[156px]">
        {[0, 40.44, 80.89, 121.33, 161.78].map((offset) => (
          <div
            key={offset}
            className="absolute left-0 w-full"
            style={{
              top: `${offset}px`,
              borderTop: "1px dashed rgba(0,220,70,0.10)",
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
      <div className="relative z-10 px-6 pt-6 lg:px-9 lg:pt-9">
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
      <div className="relative z-10 mt-6 flex items-center gap-4 px-6 pb-6 lg:px-9 lg:pb-9">
        {/* AI graphic */}
        <img
          src="/images/home/illustrations/ai-proctored-graphic.svg"
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
        className="absolute left-[103px] top-[229px] h-[6px] w-[6px] rounded-full bg-green-500"
        style={{ boxShadow: "0 0 6px 2px rgba(0,220,70,0.5)" }}
      />
      <span
        className="absolute left-[200px] top-[248px] h-[6px] w-[6px] rounded-full bg-green-500"
        style={{ boxShadow: "0 0 6px 2px rgba(0,220,70,0.5)" }}
      />
      <span
        className="absolute left-[461px] top-[172px] h-[6px] w-[6px] rounded-full bg-green-500"
        style={{ boxShadow: "0 0 6px 2px rgba(0,220,70,0.5)" }}
      />

      {/* Chart line — CSS polygon (avoids SVG sub-pixel aliasing) */}
      <div
        className="pointer-events-none absolute z-0"
        style={{
          left: "-3px",
          top: "126px",
          width: "592px",
          height: "157px",
          background: "#00DC46",
          opacity: 0.5,
          clipPath:
            "polygon(0.02% 100%, 18.4% 67.5%, 34.8% 79.6%, 60.14% 29.0%, 78.88% 31.19%, 99.98% 0.21%, 99.98% 0.85%, 78.88% 31.83%, 60.14% 29.64%, 34.8% 80.24%, 18.4% 68.14%, 0.02% 100%)",
        }}
      />
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
