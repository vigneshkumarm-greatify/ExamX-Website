import DetailCard from "@/components/common/DetailCard";
import type { DetailCardData } from "@/components/common/DetailCard";

const useCaseCards: DetailCardData[] = [
  {
    heading:
      "Pre-Hiring Screening psychometric & technical assessment",
    description:
      "Screen candidates with research-backed psychometric tests, cognitive ability assessments, and domain-specific technical evaluations. Integrate directly with your ATS to auto-shortlist and filter candidates by weighted criteria before they even reach interviews.",
    features: [
      "200+ research-backed psychometric & aptitude assessment templates",
      "Cognitive ability, coding, skill-based & domain-specific test libraries",
      "Culture-fit analysis with personality profiling & motivation inventory",
      "Deep ATS integration (SAP SuccessFactors, Workday, BambooHR, Greenhouse)",
      "Auto-shortlisting with configurable cut-off scores & weighted criteria",
    ],
    dashboardImage: "/images/solutions/corporate/pre-hiring-screening.png",
    dashboardAlt: "Pre-hiring screening dashboard",
    imageLeft: false,
    theme: {
      cardGradient:
        "linear-gradient(270deg, #dbd9cc 0%, rgba(219,217,204,0) 100%)",
      checkBg: "bg-creme-700",
      checkColor: "text-creme-500",
      dividerColor: "border-creme-700",
      imageBg:
        "linear-gradient(92deg, #f7f6ef 1.05%, #f0efe2 98.6%)",
    },
  },
  {
    heading:
      "Compliance & Mandatory Training certification & audit trails",
    description:
      "Auto-enroll employees in mandatory compliance modules with deadline tracking, escalation workflows, and retry policies. Track certifications across departments with audit-ready evidence trails and digital certificates for every trained employee.",
    features: [
      "Configurable compliance modules for safety, ethics, POSH, anti-bribery, data privacy",
      "Auto-enrollment with deadline tracking & escalation to managers",
      "Retry policies with cooldown periods & progressive difficulty",
      "Department-wise completion dashboards with real-time compliance rates",
      "Audit-ready evidence trails with certificate of completion storage",
    ],
    dashboardImage: "/images/solutions/corporate/compliance-training.png",
    dashboardAlt: "Compliance and mandatory training dashboard",
    imageLeft: true,
    theme: {
      cardGradient:
        "linear-gradient(90deg, #dbd9cc 0%, rgba(219,217,204,0) 100%)",
      checkBg: "bg-creme-700",
      checkColor: "text-creme-500",
      dividerColor: "border-creme-700",
      imageBg:
        "linear-gradient(92deg, #f7f6ef 1.05%, #f0efe2 98.6%)",
    },
  },
  {
    heading:
      "Learning & Development skill progression & certification paths",
    description:
      "Create role-based skill assessments mapped to competency frameworks. Run pre/post training evaluations to measure L&D effectiveness. Build certification paths with progressive levels, badges, and integrate with your corporate LMS.",
    features: [
      "Skill gap assessments mapped to role competency frameworks",
      "Pre & post training evaluation to measure L&D program effectiveness",
      "Certification paths with progressive levels & milestone badges",
      "Manager dashboards showing team readiness & development trajectories",
      "Integration with corporate LMS platforms (Cornerstone, SAP, Litmos, Docebo)",
    ],
    dashboardImage: "/images/solutions/corporate/learning-development.png",
    dashboardAlt: "Learning and development dashboard",
    imageLeft: false,
    theme: {
      cardGradient:
        "linear-gradient(270deg, rgba(249,247,232,0) 0%, #f9f7e8 100%)",
      checkBg: "bg-creme-700",
      checkColor: "text-creme-500",
      dividerColor: "border-creme-700",
      imageBg: "linear-gradient(to bottom, #f0efe2, #dbd9cc)",
    },
  },
  {
    heading:
      "Leadership & Succession Planning 360-degree feedback & HiPO identification",
    description:
      "Run 360-degree feedback assessments with multi-rater workflows. Identify high-potential employees using validated psychometric instruments. Generate succession readiness reports with gap analysis and development plans benchmarked against industry norms.",
    features: [
      "360-degree feedback assessments with multi-rater workflows",
      "High-potential (HiPO) identification using validated psychometric instruments",
      "Succession readiness scoring with gap analysis & development plans",
      "Benchmarking against industry norms & internal top performers",
      "Confidential results delivery with coaching-ready summary reports",
    ],
    dashboardImage: "/images/solutions/corporate/leadership-succession.png",
    dashboardAlt: "Leadership and succession planning dashboard",
    imageLeft: true,
    theme: {
      cardGradient:
        "linear-gradient(270deg, #dbd9cc 0%, rgba(219,217,204,0) 100%)",
      checkBg: "bg-creme-700",
      checkColor: "text-creme-500",
      dividerColor: "border-creme-700",
      imageBg:
        "linear-gradient(92deg, #f7f6ef 1.05%, #f0efe2 98.6%)",
    },
  },
  {
    heading:
      "Psychometric Testing Personality, cognitive & behavioral assessment",
    description:
      "Deploy scientifically validated psychometric instruments to measure personality traits, cognitive ability, emotional intelligence, and behavioral tendencies. Use Big-5, DISC, and situational judgment tests to make data-driven hiring and development decisions backed by research.",
    features: [
      "Big-5 personality, DISC, 16PF & custom psychometric instruments",
      "Cognitive ability tests verbal, numerical, abstract & logical reasoning",
      "Emotional intelligence (EQ) & situational judgment tests (SJT)",
      "Norm-referenced scoring benchmarked against industry & role-specific norms",
      "Anti-faking measures with consistency checks & social desirability scales",
    ],
    dashboardImage: "/images/solutions/corporate/psychometric-testing.png",
    dashboardAlt: "Psychometric testing dashboard",
    imageLeft: false,
    theme: {
      cardGradient:
        "linear-gradient(270deg, rgba(249,247,232,0) 0%, #f9f7e8 100%)",
      checkBg: "bg-creme-700",
      checkColor: "text-creme-500",
      dividerColor: "border-creme-700",
      imageBg: "linear-gradient(to bottom, #f0efe2, #dbd9cc)",
    },
  },
  {
    heading:
      "Skill Gap Assessment Competency mapping & workforce readiness",
    description:
      "Map your workforce's current skills against role requirements and identify critical skill gaps. Run organization-wide competency assessments to inform training budgets, restructuring plans, and hiring priorities with data-driven precision.",
    features: [
      "Role-specific competency frameworks with multi-level proficiency scales",
      "Organization-wide skill mapping across departments, teams & individuals",
      "Gap analysis heatmaps showing critical skill shortages by role & department",
      "Training recommendation engine linking gaps to specific L&D programs",
      "Quarterly re-assessment tracking to measure skill development over time",
    ],
    dashboardImage: "/images/solutions/corporate/skill-gap-assessment.png",
    dashboardAlt: "Skill gap assessment dashboard",
    imageLeft: true,
    theme: {
      cardGradient:
        "linear-gradient(270deg, #dbd9cc 0%, rgba(219,217,204,0) 100%)",
      checkBg: "bg-creme-700",
      checkColor: "text-creme-500",
      dividerColor: "border-creme-700",
      imageBg:
        "linear-gradient(92deg, #f7f6ef 1.05%, #f0efe2 98.6%)",
    },
  },
  {
    heading:
      "Promotion & Internal Mobility Testing Merit-based advancement decisions",
    description:
      "Replace subjective promotion decisions with standardized, data-driven assessments. Combine domain expertise tests, leadership aptitude evaluations, and psychometric profiling to ensure the right people advance with full transparency and audit trails.",
    features: [
      "Structured promotion exams combining domain knowledge + leadership aptitude",
      "Psychometric profiling for management readiness & leadership potential",
      "Weighted scoring with configurable criteria (performance, tenure, test scores)",
      "Internal job posting assessments for lateral moves & cross-functional roles",
      "Transparent merit lists with audit trails to eliminate bias complaints",
    ],
    dashboardImage: "/images/solutions/corporate/promotion-mobility.png",
    dashboardAlt: "Promotion and internal mobility testing dashboard",
    imageLeft: false,
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
