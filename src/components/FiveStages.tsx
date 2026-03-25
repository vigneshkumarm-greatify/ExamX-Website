import Image from "next/image";

const stages = [
  {
    stage: 1,
    title: "Author",
    description:
      "Create questions with 20+ types, AI generation, and collaborative question banks organized by topic and difficulty.",
    icon: "/images/icons/icon-pen-tool.svg",
    iconBg: "bg-[rgba(255,138,59,0.2)]",
    stageColor: "text-orange-500",
    offset: "desktop:mt-0",
  },
  {
    stage: 2,
    title: "Deliver",
    description:
      "Schedule and deliver exams across desktops, tablets, and mobiles. Support 100K+ concurrent test-takers.",
    icon: "/images/icons/icon-star-circle.svg",
    iconBg: "bg-[rgba(98,64,200,0.2)]",
    stageColor: "text-purple-500",
    offset: " desktop:mt-[30px]",
  },
  {
    stage: 3,
    title: "Proctor",
    description:
      "AI monitors every session with face detection, gaze tracking, audio analysis, and real-time cheating alerts.",
    icon: "/images/icons/icon-iris-scan.svg",
    iconBg: "bg-[rgba(175,173,145,0.2)]",
    stageColor: "text-creme-900",
    offset: " desktop:mt-[60px]",
  },
  {
    stage: 4,
    title: "Evaluate",
    description:
      "Auto-grade objective answers instantly. AI evaluates essays using rubric-aware scoring with faculty override.",
    icon: "/images/icons/icon-book-reading.svg",
    iconBg: "bg-[rgba(0,220,70,0.2)]",
    stageColor: "text-green-600",
    offset: " desktop:mt-[90px]",
  },
  {
    stage: 5,
    title: "Report",
    description:
      "Real-time dashboards, item analysis, performance trends, incident logs, and downloadable certificates.",
    icon: "/images/icons/icon-ai-generate.svg",
    iconBg: "bg-chalk-green-100",
    stageColor: "text-chalk-green-300",
    offset: " desktop:mt-[120px]",
  },
];

export default function FiveStages() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-[120px] pt-24 md:px-12 desktop:px-[100px]">
      {/* Decorative wave — inline SVG arc, scales to full width */}
      <svg
        className="pointer-events-none hidden desktop:block absolute -left-1 bottom-0 w-[calc(100%+8px)]"
        viewBox="-200 0 1840 520"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ height: "clamp(100px, 25vw, 480px)" }}
      >
        <path
          d="M-200 500C180 50 700 -80 1640 420"
          stroke="url(#stages-wave-grad)"
          strokeWidth="160"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="stages-wave-grad"
            x1="200"
            y1="280"
            x2="1400"
            y2="260"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00DC46" />
            <stop offset="1" stopColor="#00373A" />
          </linearGradient>
        </defs>
      </svg>

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
        <div className="mt-10 grid  gap-4 max-[400px]:grid-cols-1 min-[401px]:max-[600px]:grid-cols-2 min-[600px]:max-desktop:grid-cols-3 desktop:grid-cols-5 lg:mt-[42px] lg:items-start">
          {stages.map((s) => (
            <div
              key={s.stage}
              className={`flex flex-col gap-2 rounded-2xl border border-creme-600 bg-creme-100 p-6 min-[600px]:max-desktop:h[310px] desktop:h-[281px] ${s.offset}`}
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
