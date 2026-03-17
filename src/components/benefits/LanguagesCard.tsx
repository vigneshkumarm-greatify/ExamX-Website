export default function LanguagesCard() {
  const activeLangs = ["English", "Hindi", "Tamil", "Spanish", "Spanish", "French", "Bengali"];
  const moreLangs = "+23 more";

  return (
    <div
      className="relative overflow-hidden rounded-[20px] md:h-[313px]"
      style={{
        background: "linear-gradient(135deg, #f5f2ff 0%, #ede8ff 50%, #e8deff 100%)",
      }}
    >
      {/* Title block */}
      <div className="px-8 pt-8">
        <h3 className="text-[23.04px] font-semibold leading-[1.2] tracking-[-0.46px] text-chalk-green-500">
          30+ languages. One platform
        </h3>
        <p className="mt-2 max-w-[411px] text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a]">
          Conduct exams in Hindi, Tamil, Bengali, Arabic, Spanish, French, and
          25+ more. Full RTL support. Regional language question authoring built
          in.
        </p>
      </div>

      {/* Language pills */}
      <div className="px-8 pt-6 pb-8">
        <div className="flex flex-wrap gap-2.5">
          {activeLangs.map((lang, i) => (
            <span
              key={`${lang}-${i}`}
              className="rounded-full border border-purple-400/40 bg-white/60 px-4 py-2 text-[14px] font-semibold text-purple-500"
            >
              {lang}
            </span>
          ))}
          <span className="rounded-full border border-purple-400/25 bg-white/40 px-4 py-2 text-[14px] font-medium text-purple-400">
            {moreLangs}
          </span>
        </div>

        {/* Ghost pills — faded row */}
        <div className="mt-2.5 flex gap-2.5">
          {[80, 96, 72, 88, 64].map((w, i) => (
            <div
              key={i}
              className="rounded-full border border-purple-100 bg-white/30"
              style={{ width: `${w}px`, height: "36px" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
