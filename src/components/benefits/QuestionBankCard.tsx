export default function QuestionBankCard() {
  return (
    <div className="relative overflow-hidden rounded-[20px] bg-chalk-green-500 p-9 md:h-[500px]">
      {/* Green radial glow */}
      <div
        className="pointer-events-none absolute left-[-33px] top-[279px] h-[618px] w-[618px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,220,70,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Title block */}
      <h3 className="relative z-10 text-[23.04px] font-semibold leading-[1.2] tracking-[-0.46px] text-creme-500">
        Organize 100K+ questions. Find any in seconds
      </h3>
      <p className="relative z-10 mt-2 max-w-[411px] text-base font-medium leading-[1.5] tracking-[-0.16px] text-chalk-green-100">
        Tag by subject, topic, difficulty, and Bloom&apos;s level. Version
        control, review workflows, and duplicate detection. Import from Word,
        Excel, or PDF in bulk.
      </p>

      {/* File/folder columns illustration (SVG from Figma) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        src="/images/illustrations/question-bank-columns.svg"
        className="pointer-events-none absolute"
        style={{
          width: "814.254px",
          height: "483px",
          left: "calc(50% - 14.87px)",
          top: "202.67px",
          transform: "translateX(-50%)",
        }}
      />

      {/* Floating glass tags */}
      <div className="absolute left-[325px] top-[354px] z-10 flex flex-col gap-2">
        {/* Import tag */}
        <span
          className="rounded-lg px-4 py-2 text-[11.11px] font-semibold text-[#5ce989]"
          style={{
            backdropFilter: "blur(6.6px)",
            WebkitBackdropFilter: "blur(6.6px)",
            background: "rgba(26,184,84,0.1)",
            border: "0.864px solid #00dc46",
          }}
        >
          Import
        </span>

        {/* Physics tag */}
        <span
          className="rounded-lg px-4 py-2 text-[11.11px] font-semibold text-[#5ce989]"
          style={{
            backdropFilter: "blur(6.6px)",
            WebkitBackdropFilter: "blur(6.6px)",
            background: "rgba(26,184,84,0.1)",
            border: "0.864px solid #00dc46",
          }}
        >
          Physics
        </span>

        {/* Level tag with mini bar chart */}
        <span
          className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-[11.11px] font-semibold text-[#5ce989]"
          style={{
            backdropFilter: "blur(6.6px)",
            WebkitBackdropFilter: "blur(6.6px)",
            background: "rgba(26,184,84,0.1)",
            border: "0.864px solid #00dc46",
          }}
        >
          Level:
          {/* Mini orange bar chart built with divs */}
          <span className="flex items-end gap-[2px]" style={{ height: "9px" }}>
            <span
              className="w-[1.5px] rounded-full bg-[#ff8a3b]"
              style={{ height: "3.75px" }}
            />
            <span
              className="w-[1.5px] rounded-full bg-[#ff8a3b]"
              style={{ height: "5.25px" }}
            />
            <span
              className="w-[1.5px] rounded-full bg-[#ff8a3b]"
              style={{ height: "6.75px" }}
            />
            <span
              className="w-[1.5px] rounded-full bg-[#ff8a3b]"
              style={{ height: "9px" }}
            />
          </span>
        </span>
      </div>
    </div>
  );
}
