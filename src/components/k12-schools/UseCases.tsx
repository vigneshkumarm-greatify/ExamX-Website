import DetailCard from "@/components/common/DetailCard";
import type { DetailCardData } from "@/components/common/DetailCard";

const useCaseCards: DetailCardData[] = [
  {
    heading: "Periodic Assessments unit tests, mid-terms & finals",
    description:
      "Teachers create chapter tests, unit exams, mid-terms, and finals in 3 minutes using our AI question generator. Just select a chapter from the syllabus and the AI generates questions across all Bloom's levels. Auto-grade in seconds and get instant class-level analytics showing exactly which topics need reteaching.",
    features: [
      "Create any exam in 3 minutes from syllabus chapter selection",
      "AI generates questions at all Bloom's taxonomy levels automatically",
      "Auto-grading with instant feedback to students",
      "Class-level analytics pinpointing weakness by topic",
      "Mobile-friendly for low-bandwidth areas with offline support",
    ],
    dashboardImage: "/images/solutions/k12-schools/periodic-assessments.png",
    dashboardAlt: "Periodic assessments dashboard",
    imageLeft: false,
    theme: {
      cardGradient:
        "linear-gradient(270deg, #fff3eb 4.25%, rgba(255,243,235,0) 100%)",
      checkBg: "bg-orange-100",
      checkColor: "text-orange-500",
      dividerColor: "border-orange-100",
      imageBg: "linear-gradient(to bottom, #ffdec8, #ffb482)",
    },
  },
  {
    heading: "Board Exam Preparation CBSE, ICSE, IB & state boards",
    description:
      "Access pre-built question banks aligned to CBSE, ICSE, IB, and 15+ state board curricula. Deliver chapter-wise and topic-wise mock tests, analyze previous year papers, and give students detailed performance reports by difficulty level and topic. Everything updated every academic year.",
    features: [
      "Pre-built board-aligned question banks (CBSE, ICSE, IB, State boards)",
      "Chapter-wise & topic-wise mock tests ready to deploy",
      "Previous year paper analysis with marking schemes",
      "Detailed performance reports by topic & difficulty level",
      "Multi-language support for regional board exams",
    ],
    dashboardImage: "/images/solutions/k12-schools/board-exam-prep.png",
    dashboardAlt: "Board exam preparation dashboard",
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
    heading: "Competitive Exam Prep JEE, NEET, Olympiads & more",
    description:
      "Deliver full-length mock tests matching real JEE, NEET, and Olympiad exam patterns. Show students their national rank percentile, adapt difficulty based on performance, and gamify the experience with badges and daily streaks to keep them motivated.",
    features: [
      "Full-length mock tests matching actual exam patterns",
      "National-rank leaderboards with percentile scoring",
      "Adaptive difficulty that adjusts to student performance",
      "Time management analytics & section-wise breakdown",
      "Gamified badges, streaks & achievement tracking",
    ],
    dashboardImage: "/images/solutions/k12-schools/competitive-exam-prep.png",
    dashboardAlt: "Competitive exam preparation dashboard",
    imageLeft: false,
    theme: {
      cardGradient:
        "linear-gradient(270deg, #fff3eb 4.25%, rgba(255,243,235,0) 100%)",
      checkBg: "bg-orange-100",
      checkColor: "text-orange-500",
      dividerColor: "border-orange-100",
      imageBg: "linear-gradient(to bottom, #ffdec8, #ffb482)",
    },
  },
  {
    heading: "Parent Progress Reports auto-generated & branded",
    description:
      "Every exam automatically generates a beautiful branded parent report that gets emailed on your schedule. Show subject-wise progress, skill-wise learning outcomes mapped to Bloom's Taxonomy, and year-over-year improvement trends. Replace WhatsApp result sharing with professional, data-rich reports.",
    features: [
      "Beautiful branded report cards generated automatically",
      "Emailed to parents on configurable schedule",
      "Subject-wise & skill-wise progress tracking",
      "Bloom's taxonomy-aligned learning outcome mapping",
      "Year-over-year progress comparison & trend analysis",
    ],
    dashboardImage: "/images/solutions/k12-schools/parent-reports.png",
    dashboardAlt: "Parent progress reports dashboard",
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
