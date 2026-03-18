export default function LanguagesCard() {
  const activeLangs = [
    "English",
    "Hindi",
    "Tamil",
    "Spanish",
    "Spanish",
    "French",
    "Bengali",
    "+23 more",
  ];

  const ghostPills = [
    0.55, 0.44, 0.44, 0.33, 0.33, 0.22, 0.22, 0.22, 0.22, 0.22, 0.22,
  ];

  return (
    <div
      className="relative overflow-hidden rounded-[20px] md:h-[313px]"
      style={{
        backgroundImage:
          "linear-gradient(-69.97deg, #d5ccf0 5.69%, #f6f4fc 49.42%, #fff 95.89%)",
      }}
    >
      {/* Title block */}
      <div className="absolute left-[36px] top-[36px] flex w-[516px] flex-col gap-2">
        <h3 className="text-[21.67px] font-semibold leading-[normal] tracking-[-0.43px] text-chalk-green-500">
          30+ languages. One platform
        </h3>
        <p className="w-[411px] text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a]">
          Conduct exams in Hindi, Tamil, Bengali, Arabic, Spanish, French, and
          25+ more. Full RTL support. Regional language question authoring built
          in.
        </p>
      </div>

      {/* Language pills — centered flex-wrap */}
      <div className="absolute -left-[5px] top-[204px] flex w-[593px] flex-wrap content-center items-center justify-center gap-[11.89px]">
        {activeLangs.map((lang, i) => (
          <span
            key={`${lang}-${i}`}
            className="rounded-[11.26px] border-[1.5px] border-[#b7a7e6] bg-[#efecfa] px-[11.26px] py-[5.63px] text-[18.76px] font-semibold leading-[1.2] tracking-[-0.19px] text-[#6240c8]"
          >
            {lang}
          </span>
        ))}
        {ghostPills.map((opacity, i) => (
          <div
            key={`ghost-${i}`}
            className="h-[34.26px] w-[77.52px] rounded-[11.26px] border-[1.5px] border-[#b7a7e6] bg-[#efecfa]"
            style={{ opacity }}
          />
        ))}
      </div>
    </div>
  );
}
