import Image from "next/image";

/* ── Comparison card data ── */

interface ComparisonCard {
  category: string;
  heading: string;
  description: string;
  checkpoints: string[];
}

const comparisonCards: ComparisonCard[] = [
  {
    category: "Vs. Legacy proctoring tools",
    heading: "Beyond flag-and-review",
    description:
      "Traditional proctoring creates thousands of flags for human review. ExamX\u2019s agentic AI intervenes in real time reducing false flags by 90%.",
    checkpoints: [
      "Real-time intervention, not post-exam review",
      "AI handles 95% of incidents autonomously",
      "Face-swap & deepfake detection built-in",
    ],
  },
  {
    category: "Vs. Point solution platforms",
    heading: "One platform, not five",
    description:
      "Stop paying for separate tools for authoring, proctoring, delivery, analytics, and certificates. ExamX replaces your entire stack.",
    checkpoints: [
      "Unified workflow from creation to certification",
      "Single dashboard for all assessment data",
      "70% lower total cost of ownership",
    ],
  },
  {
    category: "Vs. Enterprise assessment suites",
    heading: "Enterprise power, startup speed",
    description:
      "Legacy enterprise platforms take months to deploy and require dedicated IT teams. ExamX deploys in days with self-serve setup.",
    checkpoints: [
      "Go live in days, not months",
      "Self-serve setup, no IT team required",
      "API-first architecture for custom integrations",
    ],
  },
];

/* ── Single comparison card ── */

function ComparisonCardItem({ card }: { card: ComparisonCard }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl  p-6 lg:p-8  border border-white/20 bg-[rgba(211,202,240,0.2)] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-sm">
      {/* Category label */}
      <div className="border-b border-chalk-green-300 pb-4">
        <p className="text-[13.33px] font-semibold leading-[1.2] tracking-[-0.133px] text-chalk-green-100">
          {card.category}
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between gap-6 pt-4">
        {/* Heading + description */}
        <div className="flex flex-col gap-3">
          <h3 className="text-[19.2px] font-semibold leading-[1.2] tracking-[-0.384px] text-white">
            {card.heading}
          </h3>
          <p className="text-base font-medium leading-[1.5] tracking-[-0.16px] text-chalk-green-100">
            {card.description}
          </p>
        </div>

        {/* Checkpoints */}
        <ul className="flex flex-col gap-4">
          {card.checkpoints.map((checkpoint) => (
            <li key={checkpoint} className="flex items-center gap-3">
              {/* Green circle with checkmark */}
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-green-500">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                >
                  <path
                    d="M2 5l2.5 2.5L8 3"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-[13.33px] font-medium leading-[1.5] tracking-[-0.133px] text-white">
                {checkpoint}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ── Section ── */

export default function ExamXComparison() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-24 xl:py-[120px]"
      style={{
        backgroundImage:
          "linear-gradient(124.77deg, #00373a 24.863%, #00dc46 139.71%)",
      }}
    >
      {/* Decorative background vector */}
      <Image
        src="/images/solutions/vector-bg.svg"
        alt=""
        width={1345}
        height={1163}
        className="pointer-events-none absolute left-[50%] -translate-x-1/2 -bottom-40 sm:-bottom-70 md:-bottom-90 lg:-bottom-[100%] h-auto w-[150%] sm:w-[120%] md:w-[100%] lg:w-[80%] rotate-90 opacity-100"
      />

      {/* Content */}
      <div className="relative mx-auto max-w-[1280px] px-6 md:px-12 xl:px-[100px]">
        <div className="flex flex-col items-center gap-12">
          {/* Header */}
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="text-[32px] font-semibold leading-[1.2] tracking-[-0.9556px] text-creme-500 md:text-[40px] xl:text-[47.78px]">
              ExamX vs. the alternatives
            </h2>
            <p className="max-w-[600px] text-base font-medium leading-[1.5] tracking-[-0.16px] text-chalk-green-100">
              See why organizations switch from legacy platforms to a unified,
              AI-native assessment solution.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {comparisonCards.map((card) => (
              <ComparisonCardItem key={card.category} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
