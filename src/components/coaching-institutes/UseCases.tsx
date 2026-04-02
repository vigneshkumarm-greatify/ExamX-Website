import DetailCard from "@/components/common/DetailCard";
import type { DetailCardData } from "@/components/common/DetailCard";

const useCaseCards: DetailCardData[] = [
  {
    heading:
      "Full-Length Mock Test Series JEE, NEET, UPSC & national exams",
    description:
      "Launch pre-built test templates matching real JEE, NEET, UPSC & GATE exam patterns. National-rank leaderboards, section-wise analytics, bulk test scheduling & difficulty-calibrated question pools all ready to white-label.",
    features: [
      "Pre-built test templates matching JEE, NEET, UPSC, GATE & CAT exam patterns",
      "National-rank leaderboards with percentile scoring & peer benchmarking",
      "Section-wise time tracking & attempt analytics per student",
      "Difficulty-calibrated question pools with auto-balanced test generation",
      "Bulk test scheduling with configurable access windows & pricing tiers",
    ],
    dashboardImage:
      "/images/solutions/coaching-institutes/mock-test-series.png",
    dashboardAlt: "Full-length mock test series dashboard",
    imageLeft: false,
    theme: {
      cardGradient:
        "linear-gradient(270deg, #f2f5f5 4.25%, rgba(242,245,245,0) 100%)",
      checkBg: "bg-chalk-green-50",
      checkColor: "text-creme-500",
      dividerColor: "border-chalk-green-50",
      imageBg: "linear-gradient(to bottom, #c2cfd0, #91a9aa)",
    },
  },
  {
    heading:
      "Adaptive Practice Tests AI-powered personalized learning paths",
    description:
      "AI identifies weak topics from test performance & recommends targeted practice. Difficulty automatically adjusts based on student progress. Chapter-wise micro-assessments & spaced repetition ensure long-term retention.",
    features: [
      "AI identifies weak topics from test performance & recommends targeted practice",
      "Difficulty auto-adjusts based on student's evolving ability level",
      "Chapter-wise & concept-wise micro-assessments for deep practice",
      "Learning path visualization showing progress from weak to strong topics",
      "Spaced repetition integration for long-term knowledge retention",
    ],
    dashboardImage:
      "/images/solutions/coaching-institutes/adaptive-practice.png",
    dashboardAlt: "Adaptive practice engine dashboard",
    imageLeft: true,
    theme: {
      cardGradient:
        "linear-gradient(90deg, #f9f7e8 0%, rgba(249,247,232,0) 100%)",
      checkBg: "bg-creme-700",
      checkColor: "text-creme-500",
      dividerColor: "border-creme-700",
      imageBg: "linear-gradient(to bottom, #f0efe2, #dbd9cc)",
    },
  },
  {
    heading:
      "Live Test Events & Contests timed competitions with instant results",
    description:
      "Run timed exam events with live countdown timers, instant result reveal & real-time rank updates. Students can share scores & achievements on social media. Configurable prize announcements & event landing pages drive viral growth.",
    features: [
      "Live countdown timer exams with instant result reveal upon completion",
      "Real-time rank updates during exam with peer comparison",
      "Social sharing of scores & ranks to drive organic virality",
      "Configurable prize announcements & achievement badges",
      "Event landing pages with registration countdown & test preview",
    ],
    dashboardImage:
      "/images/solutions/coaching-institutes/live-contests.png",
    dashboardAlt: "Live test events and contests dashboard",
    imageLeft: false,
    theme: {
      cardGradient:
        "linear-gradient(270deg, #f2f5f5 4.25%, rgba(242,245,245,0) 100%)",
      checkBg: "bg-chalk-green-50",
      checkColor: "text-creme-500",
      dividerColor: "border-chalk-green-50",
      imageBg: "linear-gradient(to bottom, #c2cfd0, #91a9aa)",
    },
  },
  {
    heading:
      "White-Label Monetized Platform your brand, your domain, built-in payments",
    description:
      "Fully white-labeled platform with your logo, domain & app branding. Built-in payment gateway supporting UPI, cards, net banking & subscriptions. Student dashboard with purchase history & revenue analytics. API-first architecture for embedding into your existing website or mobile app.",
    features: [
      "Fully white-labeled with your brand logo, domain & custom app branding",
      "Built-in payment gateway supporting UPI, cards, net banking & subscription plans",
      "Student dashboard with purchase history, online subscription & test history",
      "API-first architecture for embedding tests into your existing website or mobile app",
      "Revenue analytics dashboard with conversion funnels & student LTV tracking",
    ],
    dashboardImage:
      "/images/solutions/coaching-institutes/white-label-platform.png",
    dashboardAlt: "White-label monetized platform dashboard",
    imageLeft: true,
    theme: {
      cardGradient:
        "linear-gradient(270deg, rgba(249,247,232,0) 0%, #f9f7e8 100%)",
      checkBg: "bg-creme-700",
      checkColor: "text-creme-500",
      dividerColor: "border-creme-700",
      imageBg: "linear-gradient(to bottom, #f0efe2, #dbd9cc)",
    },
  },
];

export default function UseCases() {
  return (
    <section className="bg-white px-6 py-16 md:px-12 md:py-20 xl:px-[120px] xl:py-24">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-12 text-center text-[36px] font-semibold leading-[1.2] tracking-[-0.5px] text-chalk-green-500 md:mb-16 md:text-[47.78px]">
          Use cases
        </h2>

        <div className="flex flex-col gap-6">
          {useCaseCards.map((card, i) => (
            <DetailCard key={i} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
