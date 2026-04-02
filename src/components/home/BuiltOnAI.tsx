import Image from "next/image";

const stats = [
  {
    value: "85%",
    valueColor: "text-green-600",
    label: "Reduction in cheating incidents",
    description:
      "AI proctoring catches behavioral anomalies, phone usage, and unauthorized assistance that human proctors miss.",
  },
  {
    value: "70%",
    valueColor: "text-purple-500",
    label: "Faster evaluation turnaround",
    description:
      "AI auto-grades objective questions instantly & evaluates subjective answers with rubric-aware scoring models.",
  },
  {
    value: "60%",
    valueColor: "text-orange-500",
    label: "Cost savings vs manual processes",
    description:
      "Eliminate paper logistics, manual invigilation, and hand-grading. One platform replaces your entire exam operation.",
  },
];

export default function BuiltOnAI() {
  return (
    <section className="relative overflow-hidden bg-creme-500 px-6 py-24 md:px-12 xl:px-[100px]">
      {/* Decorative watermark */}
      <Image
        src="/images/home/decoratives/ai-watermark.svg"
        alt=""
        width={675}
        height={583}
        className="pointer-events-none absolute -left-[163px] bottom-0  block"
      />

      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        {/* Left column — heading */}
        <div className="flex shrink-0 flex-col gap-3 lg:w-[392px]">
          <h2 className="max-w-[342px] text-[32px] font-semibold leading-[1.2] tracking-[-0.8px] text-chalk-green-500 md:text-[39.81px]">
            Built on AI.
            <br />
            Designed for trust.
          </h2>
          <p className="max-w-[342px] text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a]">
            AI isn&apos;t a feature we added. It&apos;s the foundation ExamX is
            built on. Every exam is smarter, faster, &amp; fairer because of it.
          </p>
        </div>

        {/* Right column — stat cards */}
        <div className="flex flex-col gap-4 lg:w-[689px]">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-creme-600 px-6 py-8 sm:flex-row sm:items-center"
            >
              {/* Stat + label */}
              <div className="flex shrink-0 flex-col gap-3 sm:w-[40%] pr-2">
                <p
                  className={`text-[32px] font-semibold leading-[1.2] tracking-[-0.8px] md:text-[39.81px] ${stat.valueColor}`}
                >
                  {stat.value}
                </p>
                <p className="max-w-[204px] text-[19.2px] font-semibold leading-[1.2] tracking-[-0.38px] text-[#3f3f46]">
                  {stat.label}
                </p>
              </div>

              {/* Vertical divider — full card height */}
              <div className="absolute left-[40%] top-0 hidden h-full w-px bg-creme-600 sm:block" />

              {/* Description */}
              <p className="text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a] sm:w-[60%]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
