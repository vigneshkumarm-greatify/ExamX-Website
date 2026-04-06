import Image from "next/image";

const coreValues = [
  {
    title: "Innovative EdTech solutions",
    icon: "/images/about/icons/icon-lightbulb.svg",
    bg: "bg-[#FFC9A5]/20",
  },
  {
    title: "Leadership in educational technology",
    icon: "/images/about/icons/icon-star-circle.svg",
    bg: "bg-[rgba(211,202,240,0.2)]",
  },
  {
    title: "Customer-centric approach",
    icon: "/images/about/icons/icon-user-group.svg",
    bg: "bg-[rgba(201,200,187,0.2)]",
  },
  {
    title: "Passion for educational innovation",
    icon: "/images/about/icons/icon-book.svg",
    bg: "bg-[rgba(184,245,203,0.2)]",
  },
  {
    title: "Ownership and accountability",
    icon: "/images/about/icons/icon-ai-spark.svg",
    bg: "bg-[rgba(145,169,170,0.12)]",
  },
];

export default function CoreValues() {
  return (
    <section className="relative overflow-hidden bg-creme-500">
      {/* Decorative green arc — CSS border-based curve */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-[-50%] top-[50%]  rounded-[50%] border-[60px] border-green-500 sm:left-[-40%] sm:top-[50%]  sm:border-[100px] md:left-[-30%] md:top-[45%] sm:h-[280%] h-[180%] w-[220%] sm:w-[200%] md::w-[180%] md:border-[150px] xl:border-[170px]"
          style={{ borderColor: '#00DC46' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-16 md:px-12 md:py-20 xl:px-[100px] xl:py-24">
        <div className="flex flex-col gap-10 lg:flex-row  lg:gap-16">
          {/* Left — heading */}
          <h2 className="shrink-0 text-[32px] font-semibold leading-[1.2] tracking-[-0.96px] text-chalk-green-500 md:text-[40px] xl:text-[47.78px]">
            Our core values
          </h2>

          {/* Right — card */}
          <div className="w-full rounded-xl bg-white p-5 md:p-8 shadow-[0px_12px_250px_0px_rgba(0,0,0,0.1)] lg:max-w-[486px]">
            <div className="flex flex-col">
              {coreValues.map((value, index) => (
                <div key={value.title}>
                  <div className="flex items-center gap-3 md:gap-5">
                    <div
                      className={`flex size-[44px] md:size-[56px] shrink-0 items-center justify-center rounded-xl ${value.bg}`}
                    >
                      <Image
                        src={value.icon}
                        alt=""
                        width={28}
                        height={28}
                        className="size-[22px] md:size-[28px]"
                      />
                    </div>
                    <p className="text-[16px] md:text-[20px] font-semibold leading-[1.2] tracking-[-0.46px] text-chalk-green-500 xl:text-[23.04px]">
                      {value.title}
                    </p>
                  </div>
                  {index < coreValues.length - 1 && (
                    <div className="my-3 md:my-4 border-b border-[#f4f4f5]" />
                  )}
                </div>
              ))}
            </div>

            {/* Footer paragraph */}
            <p className="mt-4 md:mt-6 text-[13px] md:text-[14px] font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a] xl:text-[16px]">
              We pride ourselves on delivering reliable Educational OS, LMS,
              ERP, and digital exam services that exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
