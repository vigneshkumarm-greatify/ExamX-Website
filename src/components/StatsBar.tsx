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
              <Image
                src="/images/stats-decoration.svg"
                alt=""
                width={818}
                height={475}
                className="pointer-events-none absolute -left-[329px] -top-[31px] -rotate-[2.3deg] opacity-100"
              />
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
