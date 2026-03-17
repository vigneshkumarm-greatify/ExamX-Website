import Image from "next/image";

const stages = [
  {
    stage: 1,
    title: "Author",
    description:
      "Create questions with 20+ types, AI generation, and collaborative question banks organized by topic and difficulty.",
    icon: "/images/icon-pen-tool.svg",
    iconBg: "bg-[rgba(255,138,59,0.2)]",
    stageColor: "text-orange-500",
    offset: "lg:mt-0",
  },
  {
    stage: 2,
    title: "Deliver",
    description:
      "Schedule and deliver exams across desktops, tablets, and mobiles. Support 100K+ concurrent test-takers.",
    icon: "/images/icon-star-circle.svg",
    iconBg: "bg-[rgba(98,64,200,0.2)]",
    stageColor: "text-purple-500",
    offset: "lg:mt-[30px]",
  },
  {
    stage: 3,
    title: "Proctor",
    description:
      "AI monitors every session with face detection, gaze tracking, audio analysis, and real-time cheating alerts.",
    icon: "/images/icon-iris-scan.svg",
    iconBg: "bg-[rgba(175,173,145,0.2)]",
    stageColor: "text-creme-900",
    offset: "lg:mt-[60px]",
  },
  {
    stage: 4,
    title: "Evaluate",
    description:
      "Auto-grade objective answers instantly. AI evaluates essays using rubric-aware scoring with faculty override.",
    icon: "/images/icon-book-reading.svg",
    iconBg: "bg-[rgba(0,220,70,0.2)]",
    stageColor: "text-green-600",
    offset: "lg:mt-[90px]",
  },
  {
    stage: 5,
    title: "Report",
    description:
      "Real-time dashboards, item analysis, performance trends, incident logs, and downloadable certificates.",
    icon: "/images/icon-ai-generate.svg",
    iconBg: "bg-chalk-green-100",
    stageColor: "text-chalk-green-300",
    offset: "lg:mt-[120px]",
  },
];

export default function FiveStages() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[120px] pt-24 md:px-12 lg:px-[120px]">
      {/* Decorative wave */}
      <Image
        src="/images/stages-wave.svg"
        alt=""
        width={1811}
        height={478}
        className="pointer-events-none absolute -left-[264px] bottom-0 w-[1811px] max-w-none"
      />

      <div className="relative mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <h2 className="text-[32px] font-semibold leading-[1.2] tracking-[-0.96px] text-chalk-green-500 md:text-[47.78px]">
            One platform.
            <br />
            Five powerful stages.
          </h2>
          <p className="max-w-[411px] text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a]">
            Stop juggling tools for question banks, exam delivery, proctoring,
            grading, and analytics. ExamX handles every step in one place.
          </p>
        </div>

        {/* Stage cards — stair-step layout on desktop */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-[42px] lg:grid-cols-5 lg:items-start">
          {stages.map((s) => (
            <div
              key={s.stage}
              className={`flex flex-col gap-2 rounded-2xl border border-creme-600 bg-creme-100 p-6 lg:h-[281px] ${s.offset}`}
            >
              <div className="flex flex-col gap-5">
                <div
                  className={`flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl ${s.iconBg}`}
                >
                  <Image src={s.icon} alt="" width={28} height={28} />
                </div>
                <p
                  className={`text-[11.11px] font-bold uppercase leading-[1.2] tracking-[0.11px] ${s.stageColor}`}
                >
                  Stage {s.stage}
                </p>
              </div>
              <h3 className="text-[23.04px] font-semibold leading-[1.2] tracking-[-0.46px] text-chalk-green-500">
                {s.title}
              </h3>
              <p className="text-[13.33px] font-medium leading-[1.5] tracking-[-0.13px] text-[#71717a]">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
