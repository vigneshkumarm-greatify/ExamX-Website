import SvgIcon from "@/components/common/SvgIcon";

const stats = [
  {
    iconPath: "/images/common/icons/icon-signal-full.svg",
    iconSize: 36,
    iconBg: "bg-[rgba(255,222,200,0.4)]",
    iconColor: "#ff8a3b", // orange-500
    label: "False positive reduction metrics",
  },
  {
    iconPath: "/images/common/icons/icon-shield-check.svg",
    iconSize: 36,
    iconBg: "bg-[rgba(184,245,203,0.4)]",
    iconColor: "#00b63a", // green-600
    label: ["Privacy-first approach", "data encryption, auto-deletion policies"],
  },
  {
    iconPath: "/images/common/icons/icon-hierarchy-2.svg",
    iconSize: 38,
    iconBg: "bg-[rgba(219,217,204,0.2)]",
    iconColor: "#a6a59a", // creme-900
    label: "Comparison with industry benchmarks",
  },
] as const;

export default function TrustAccuracy() {
  return (
    <section className="bg-gradient-to-b from-white to-creme-500 pt-16 md:pt-24 xl:pt-[96px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 ">
        {/* Heading */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-[34px] font-semibold leading-[1.2] tracking-[-0.95px] text-chalk-green-500 md:text-[42px] xl:text-[47.78px]">
            Trust &amp; Accuracy
          </h2>
          <p className="max-w-[438px] text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a]">
            Independently benchmarked detection accuracy, privacy-first data handling, and full compliance with global standards.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 border-b border-creme-600 pb-16 md:grid-cols-3 md:pb-24 xl:pb-[120px]">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-start gap-5 rounded-2xl bg-white p-8"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center overflow-hidden rounded-[12px] ${stat.iconBg}`}
              >
                <SvgIcon
                  svgPath={stat.iconPath}
                  color={stat.iconColor}
                  fillColor={stat.iconColor}
                  width={stat.iconSize}
                  height={stat.iconSize}
                />
              </div>
              <p className="text-[23.04px] font-semibold leading-[1.2] tracking-[-0.46px] text-chalk-green-500">
                {Array.isArray(stat.label) ? (
                  <>
                    {stat.label[0]}
                    <br />
                    {stat.label[1]}
                  </>
                ) : (
                  stat.label
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
