interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "99.2%", label: "Detection Accuracy" },
  { value: "<0.1%", label: "False Positive Rate" },
  { value: "50ms", label: "Response Time" },
  { value: "100K+", label: "Concurrent Sessions" },
];

export default function StatsBar() {
  return (
    <section className="bg-creme-500 px-6 py-16 md:px-12 md:py-24 xl:px-[100px] xl:py-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-16">
        {/* Left — heading */}
        <h2 className="shrink-0 text-[28px] font-semibold leading-[1.2] tracking-[-0.56px] text-[#0f172a] md:text-[32px] lg:max-w-[252px] xl:text-[33.81px] xl:tracking-[-0.68px]">
          Platform that delivers results.
        </h2>

        {/* Right — stat cards */}
        <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex h-[180px] flex-col items-center justify-center gap-2 rounded-2xl border border-creme-600 bg-creme-500 p-6 md:h-[200px] xl:h-[239px]"
            >
              <span className="text-[32px] font-semibold leading-[1.2] tracking-[-0.64px] text-green-600 md:text-[36px] xl:text-[39.81px] xl:tracking-[-0.8px]">
                {stat.value}
              </span>
              <span className="text-center text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
