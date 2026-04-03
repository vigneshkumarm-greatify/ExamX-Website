import Image from "next/image";

const cards = [
  {
    icon: "/images/solutions/universities/icon-brain-chip.svg",
    iconBg: "rgba(145,169,170,0.12)",
    title: "Deep LMS integration",
    description:
      "Plug into Moodle, Canvas or Blackboard in one click — rosters, grades and content sync automatically so faculty never duplicate work.",
  },
  {
    icon: "/images/solutions/universities/icon-warranty-badge.svg",
    iconBg: "rgba(201,200,187,0.2)",
    title: "Accreditation-first design",
    description:
      "Every question maps to COs, POs and Bloom's levels out of the box, so NAAC, NBA and ABET reports generate in one click.",
  },
  {
    icon: "/images/solutions/universities/icon-ai-scanner.svg",
    iconBg: "rgba(211,202,240,0.2)",
    title: "Agentic AI proctoring",
    description:
      "Face match, gaze tracking, second-screen detection and audio analysis work together — flagging anomalies in real time without manual invigilation.",
  },
  {
    icon: "/images/solutions/universities/icon-signal-full.svg",
    iconBg: "rgba(255,180,130,0.2)",
    title: "Actionable analytics",
    description:
      "From item-level difficulty indices to department-wide outcome attainment trends — insights that drive curriculum improvement, not just dashboards.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white px-6 py-16 md:px-12 md:py-[120px] xl:px-[100px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-[36px] font-semibold leading-[1.2] tracking-[-0.5px] text-chalk-green-500 md:text-[47.78px]">
            Why universities choose ExamX?
          </h2>
          <p className="mx-auto mt-4 max-w-[640px] text-[16px] font-medium leading-[1.5] text-neutral-500">
            Purpose-built for higher education with the depth that generic quiz
            tools can&apos;t match.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid max-[500px]:grid-cols-1 grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-neutral-200 p-4 md:p-8"
            >
              {/* Icon box */}
              <div
                className="flex h-16 w-16 items-center justify-center rounded-xl"
                style={{ backgroundColor: card.iconBg }}
              >
                <Image
                  src={card.icon}
                  alt=""
                  width={32}
                  height={32}
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-[19.2px] font-semibold leading-[1.3] text-chalk-green-500">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[16px] font-medium leading-[1.5] text-[#64748b]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
