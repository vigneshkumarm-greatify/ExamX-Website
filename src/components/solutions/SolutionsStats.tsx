const stats = [
  { value: "10M+", label: "Exams delivered securely" },
  { value: "500+", label: "Organizations worldwide" },
  { value: "99.9%", label: "AI fraud detection accuracy" },
  { value: "50+", label: "Countries served till now" },
  { value: "70%", label: "Avg. admin time saved" },
];

function Connector() {
  return (
    <div className="hidden items-center z-10 -mx-1 lg:flex" aria-hidden="true">
      {/* Left dot */}
      <div className="h-2 w-2 rounded-full bg-green-600" />
      {/* Line */}
      <div className="h-[2px] w-12  bg-green-600" />
      {/* Right dot */}
      <div className="h-2 w-2 rounded-full bg-green-600" />
    </div>
  );
}

export default function SolutionsStats() {
  return (
    <section className="bg-creme-500 px-6 py-16 md:px-12 md:py-20 xl:px-[100px]">
      <div className="mx-auto max-w-[1200px]">
        {/* xl flex row with connectors */}
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-0">
          {stats.map((stat, i) => (
            <div key={stat.value} className="flex items-center">
              {/* Card */}
              <div className="relative flex h-[180px] w-[180px] flex-col items-center justify-center overflow-hidden rounded-2xl bg-white shadow-[0px_4px_50px_rgba(166,165,154,0.2)]">


                <p className="relative text-[39.81px] font-semibold leading-[1.2] tracking-[-0.8px] text-green-600">
                  {stat.value}
                </p>
                <p className="relative mt-1 px-3 text-center text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a] ">
                  {stat.label}
                </p>
              </div>

              {/* Connector after each card except the last */}
              {i < stats.length - 1 && <Connector />}
            </div>
          ))}
        </div>

        {/* Tablet / Mobile: grid layout, no connectors */}
        <div className="grid grid-cols-2 justify-items-center gap-4 md:grid-cols-3 lg:hidden">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="relative flex h-[180px] w-full max-w-[180px] flex-col items-center justify-center overflow-hidden rounded-2xl bg-white shadow-[0px_4px_50px_rgba(166,165,154,0.2)]"
            >
              
              <p className="relative text-[32px] font-semibold leading-[1.2] tracking-[-0.8px] text-green-600 md:text-[39.81px]">
                {stat.value}
              </p>
              <p className="relative mt-1 px-3 text-center text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
