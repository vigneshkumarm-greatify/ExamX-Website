import DetailCard from "@/components/common/DetailCard";
import type { DetailCardData } from "@/components/common/DetailCard";

const useCaseCards: DetailCardData[] = [
  {
    heading: "Semester examinations at institutional scale",
    description:
      "Digitise end-of-term assessments across every faculty — from auto-synced rosters to AI-graded subjective answers and instant result publishing.",
    features: [
      "Schedule exams across 100+ departments from one admin panel",
      "Auto-sync student rosters from Moodle, Canvas or Blackboard",
      "Rubric-aware AI grading for essays, case studies & lab reports",
      "Course Outcome (CO) mapping for every question & response",
      "Instant result publishing with grade curves & analytics",
    ],
    dashboardImage: "/images/solutions/universities/semester-exams.png",
    dashboardAlt: "Semester examinations dashboard",
    imageLeft: false,
    theme: {
      cardGradient:
        "linear-gradient(270deg, #efecfa 4.25%, rgba(239,236,250,0) 100%)",
      checkBg: "bg-purple-100",
      checkColor: "text-purple-500",
      dividerColor: "border-purple-100",
      imageBg: "linear-gradient(to bottom, #d3caf0, #b7a7e6)",
    },
  },
  {
    heading: "Entrance & placement tests high-volume, high-stakes",
    description:
      "Run large-scale entrance exams and placement drives with AI proctoring, randomised question pools and instant merit-list generation.",
    features: [
      "100K+ concurrent test-takers with zero-downtime infrastructure",
      "AI proctoring: face match, gaze tracking, second-screen & audio anomaly detection",
      "Randomized question pools with section-level shuffling",
      "Instant merit list & cut-off generation post-exam",
      "Candidate self-service portal for admit cards & results",
    ],
    dashboardImage: "/images/solutions/universities/entrance-tests.png",
    dashboardAlt: "Entrance and placement tests dashboard",
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
    heading: "PhD vivas & subjective evaluation beyond multiple choice",
    description:
      "Support complex evaluation workflows — from rubric-based AI pre-scoring to multi-evaluator blind review, plagiarism checks and viva scheduling.",
    features: [
      "Rubric-aware AI pre-scoring for essays & long-answer questions",
      "Multi-evaluator workflows with blind review & moderation",
      "Inter-rater reliability (IRR) calculations & flagging",
      "Plagiarism detection integrated into evaluation pipeline",
      "Viva scheduling with video recording & rubric capture",
    ],
    dashboardImage: "/images/solutions/universities/phd-vivas.png",
    dashboardAlt: "PhD vivas and subjective evaluation dashboard",
    imageLeft: false,
    theme: {
      cardGradient:
        "linear-gradient(270deg, rgba(239,236,250,0) 0%, #efecfa 100%)",
      checkBg: "bg-purple-100",
      checkColor: "text-purple-500",
      dividerColor: "border-purple-100",
      imageBg: "linear-gradient(to bottom, #d3caf0, #b7a7e6)",
    },
  },
  {
    heading: "Accreditation & outcome mapping NAAC, NBA & ABET ready",
    description:
      "Auto-tag every question to programme outcomes, course outcomes and Bloom's levels — then generate one-click accreditation reports.",
    features: [
      "Auto-tag questions to POs, COs & Bloom's Taxonomy levels",
      "One-click NAAC, NBA & ABET outcome attainment reports",
      "Year-over-year trend tracking for continuous improvement",
      "Department-level & program-level analytics dashboards",
      "Export-ready formats for accreditation submission portals",
    ],
    dashboardImage: "/images/solutions/universities/accreditation.png",
    dashboardAlt: "Accreditation and outcome mapping dashboard",
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
