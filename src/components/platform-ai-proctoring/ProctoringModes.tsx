import SvgIcon from "@/components/common/SvgIcon";

const modes = [
  {
    eyebrow: "Mode 1",
    eyebrowColor: "text-orange-500",
    iconBg: "bg-[rgba(145,169,170,0.12)]",
    iconPath: "/images/common/icons/icon-ai-scanner.svg",
    iconColor: "#91A9AA",
    iconSize: 34,
    title: "AI Auto-Proctor",
    description: "Fully automated monitoring",
  },
  {
    eyebrow: "Mode 2",
    eyebrowColor: "text-creme-900",
    iconBg: "bg-[rgba(201,200,187,0.2)]",
    iconPath: "/images/common/icons/icon-Magnifying-Glass-with-chip.svg",
    iconColor: "#a6a59a",
    iconSize: 36,
    title: "AI + Live Proctor",
    description: "Human-assisted with AI support",
  },
  {
    eyebrow: "Mode 3",
    eyebrowColor: "text-purple-500",
    iconBg: "bg-[rgba(211,202,240,0.2)]",
    iconPath: "/images/common/icons/icon-Cashing-Check.svg",
    iconColor: "#6240c8",
    iconSize: 34,
    title: "Record & Review",
    description: "AI-flagged recordings for manual review",
  },
] as const;

export default function ProctoringModes() {
  return (
    <section className="bg-gradient-to-b from-creme-500 to-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 py-16 md:py-20 lg:grid-cols-[306px_1fr] lg:gap-16 xl:py-[120px]">
        {/* Left intro */}
        <div className="flex flex-col gap-3">
          <h2 className="text-[34px] font-semibold leading-[1.2] tracking-[-0.95px] text-chalk-green-500 md:text-[42px] xl:text-[47.78px]">
            Proctoring Modes
          </h2>
          <p className="text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a]">
            Choose how you proctor — from fully automated AI to human-assisted oversight to post-exam review.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {modes.map((mode) => (
            <div
              key={mode.title}
              className="flex flex-col gap-2 rounded-2xl border border-creme-600 bg-creme-100 p-6"
            >
              <div className="flex flex-col items-start gap-5">
                <div
                  className={`flex h-16 w-16 items-center justify-center overflow-hidden rounded-[12px] ${mode.iconBg}`}
                >
                  <SvgIcon
                    svgPath={mode.iconPath}
                    color={mode.iconColor}
                    fillColor={mode.iconColor}
                    width={mode.iconSize}
                    height={mode.iconSize}
                  />
                </div>
                <p
                  className={`text-[11.11px] font-bold uppercase leading-[1.2] tracking-[1px] ${mode.eyebrowColor}`}
                >
                  {mode.eyebrow}
                </p>
              </div>
              <p className="text-[23.04px] font-semibold leading-[1.2] tracking-[-0.46px] text-chalk-green-500">
                {mode.title}
              </p>
              <p className="text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a]">
                {mode.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
