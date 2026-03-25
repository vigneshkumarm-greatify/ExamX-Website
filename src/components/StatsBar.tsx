const stats = [
  { value: "10M+", label: "Exams delivered\nglobally" },
  { value: "500+", label: "Organisations trust ExamX" },
  { value: "50+", label: "Countries\nserved" },
  { value: "30+", label: "Languages supported" },
];

export default function StatsBar() {
  return (
    <section className="border-b border-[#e2e8f0] bg-creme-500 px-6 pb-24 pt-16 md:px-12 desktop:px-[100px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-10 desktop:gap-4 desktop:flex-row lg:items-center  ">
        <h2 className=" text-[28px] font-semibold leading-[1.2] tracking-[-0.68px] text-[#0f172a] md:text-[33.81px] desktop:w-[342px]">
          The exam platform that delivers results.
        </h2>
        <div className="grid w-full flex-1 grid-cols-2 justify-items-center gap-4 sm:grid-cols-3 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="relative flex w-full max-w-[200px] h-[239px] flex-col items-center overflow-hidden justify-center gap-2.5 rounded-2xl border border-creme-600 px-6 py-2.5"
            >
              {/* Decorative wave arcs — CSS divs */}
              <div
          className=" absolute w-120 -top-10 -left-28 h-100 -rotate-6 rounded-full m  border-70 border-transparent 
            border-t-[#F0EFE2]   border-r-[#F0EFE2]"
        ></div>


<div
          className=" absolute w-120 -bottom-10 -right-28 h-100 -rotate-6 rounded-full m  border-70 border-transparent 
            border-b-[#F0EFE2]   border-l-[#F0EFE2]"
        ></div>

   
        
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
