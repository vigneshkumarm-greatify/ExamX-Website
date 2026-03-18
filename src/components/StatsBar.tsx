import Image from "next/image";

const stats = [
  { value: "10M+", label: "Exams delivered\nglobally" },
  { value: "500+", label: "Organisations trust ExamX" },
  { value: "50+", label: "Countries\nserved" },
  { value: "30+", label: "Languages supported" },
];

export default function StatsBar() {
  return (
    <section className="border-b border-[#e2e8f0] bg-creme-500 px-6 pb-24 pt-16 md:px-12 lg:px-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-10">
        <h2 className="shrink-0 text-[28px] font-semibold leading-[1.2] tracking-[-0.68px] text-[#0f172a] md:text-[33.81px] lg:w-[342px]">
          The exam platform that delivers results.
        </h2>
        <div className="grid w-full flex-1 grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="relative flex h-[200px] flex-col items-center justify-center gap-2.5 overflow-hidden rounded-2xl border border-creme-600 px-6 py-2.5 md:h-[239px]"
            >
              {/* Decorative wave arcs — coded, no image */}
              <svg
                className="pointer-events-none absolute -left-[329px] -top-[65px] -rotate-[2.3deg]"
                width="818"
                height="545"
                viewBox="0 0 880.69 546.723"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M31.4654 263.548C229.954 49.4781 626.461 -62.5872 848.671 179.67"
                  stroke="#F0EFE2"
                  strokeWidth="85.82"
                />
                <path
                  d="M31.8629 517.548C230.351 303.478 626.858 191.413 849.068 433.67"
                  stroke="#F0EFE2"
                  strokeWidth="85.82"
                />
              </svg>
              <p className="relative text-[32px] font-semibold leading-[1.2] tracking-[-0.8px] text-green-600 md:text-[39.81px]">
                {stat.value}
              </p>
              <p className="relative whitespace-pre-line text-center text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
