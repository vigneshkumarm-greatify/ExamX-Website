import DetailCard from "@/components/common/DetailCard";
import type { DetailCardData } from "@/components/common/DetailCard";

const useCaseCards: DetailCardData[] = [
  {
    heading: "Civil Service Recruitment UPSC/State PSC-scale",
    description:
      "Conduct national-scale civil service recruitment exams with tamper-proof question delivery encrypted until exam start with zero human access. Scale from 10,000 to 100,000+ concurrent candidates with zero downtime.",
    features: [
      "Tamper-proof question delivery encrypted until exam start zero human access",
      "100K+ concurrent candidates with auto-scaling, zero-downtime infrastructure",
      "Randomized question sets with section-level shuffling per candidate",
      "Biometric verification at exam start with continuous AI monitoring",
      "Instant result computation with merit lists rank-ordered across categories",
    ],
    dashboardImage: "/images/solutions/government/civil-service-recruitment.png",
    dashboardAlt: "Civil service recruitment dashboard",
    imageLeft: false,
    theme: {
      cardGradient:
        "linear-gradient(270deg, #e6fced 0%, rgba(230,252,237,0) 100%)",
      checkBg: "bg-green-100",
      checkColor: "text-green-600",
      dividerColor: "border-green-100",
      imageBg: "linear-gradient(to bottom, #b8f5cb, #5ce989)",
    },
  },
  {
    heading: "Professional Licensing Exams Medical, legal, engineering boards",
    description:
      "Deliver board exams for medical, legal, engineering, and other regulated professions with OS-level secure browser lockdown, forensic-grade anomaly detection, and complete audit trails for regulatory compliance.",
    features: [
      "OS-level secure browser lockdown blocks screen capture, VMs & remote access",
      "Forensic-grade anomaly detection for collusion & pre-knowledge patterns",
      "Multi-shift exam support with unique question sets per shift",
      "Category-wise cut-off computation with reservation logic built in",
      "Complete audit trail for RTI compliance every click timestamped",
    ],
    dashboardImage: "/images/solutions/government/professional-licensing.png",
    dashboardAlt: "Professional licensing exams dashboard",
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
    heading: "Skill Certification Programs Government skill development",
    description:
      "Deliver government skill development assessments aligned to National Skills Qualification Framework (NSQF) levels. Mix practical and theory assessments with multi-language delivery in 30+ languages including Indic scripts.",
    features: [
      "Aligned to National Skills Qualification Framework (NSQF) levels",
      "Practical + theory combo assessment with mixed question types",
      "Multi-language delivery in 30+ languages including Indic scripts & RTL",
      "Digital certificates with QR verification for instant employer verification",
      "Bulk candidate management with center-wise allocation & scheduling",
    ],
    dashboardImage: "/images/solutions/government/skill-certification.png",
    dashboardAlt: "Skill certification programs dashboard",
    imageLeft: false,
    theme: {
      cardGradient:
        "linear-gradient(270deg, #e6fced 0%, rgba(230,252,237,0) 100%)",
      checkBg: "bg-green-100",
      checkColor: "text-green-600",
      dividerColor: "border-green-100",
      imageBg: "linear-gradient(to bottom, #b8f5cb, #5ce989)",
    },
  },
  {
    heading: "Regulatory Compliance Testing Mandatory training verification",
    description:
      "Deliver mandatory compliance training and verification (GST, labor law, regulatory training) with auto-enrollment, deadline tracking, and evidence-grade audit trails for regulatory submissions.",
    features: [
      "Mandatory compliance modules with auto-enrollment & deadline tracking",
      "Configurable passing criteria with retry policies & cooldown periods",
      "Evidence-grade audit trails for regulatory submissions",
      "Department-wise completion tracking with escalation workflows",
      "On-premise or Indian cloud deployment for complete data sovereignty",
    ],
    dashboardImage: "/images/solutions/government/regulatory-compliance.png",
    dashboardAlt: "Regulatory compliance testing dashboard",
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
  {
    heading: "Departmental Promotion Testing Merit-based internal promotions",
    description:
      "Conduct transparent, tamper-proof promotion exams for government employees moving to higher grades. Combine domain knowledge tests, aptitude assessments, and seniority-weighted scoring with full audit trails for grievance redressal and RTI compliance.",
    features: [
      "Role-specific promotion exams with configurable weightage for seniority, domain knowledge & aptitude",
      "Psychometric & cognitive ability testing for leadership readiness assessment",
      "Multi-tier exam support departmental, zonal & central promotion boards",
      "Reservation-compliant merit list generation with category-wise cut-offs",
      "Grievance-proof audit trails with answer sheet access for RTI requests",
    ],
    dashboardImage: "/images/solutions/government/departmental-promotion.png",
    dashboardAlt: "Departmental promotion testing dashboard",
    imageLeft: false,
    theme: {
      cardGradient:
        "linear-gradient(270deg, #e6fced 0%, rgba(230,252,237,0) 100%)",
      checkBg: "bg-green-100",
      checkColor: "text-green-600",
      dividerColor: "border-green-100",
      imageBg: "linear-gradient(to bottom, #b8f5cb, #5ce989)",
    },
  },
  {
    heading:
      "Psychometric & Aptitude Screening Behavioral & cognitive assessment",
    description:
      "Deploy validated psychometric instruments for government recruitment and placement. Assess cognitive ability, behavioral traits, stress tolerance, and decision-making aptitude for roles in defense, law enforcement, administration, and public service.",
    features: [
      "Validated psychometric instruments personality, cognitive ability & situational judgment",
      "Stress tolerance & decision-making aptitude tests for defense & law enforcement",
      "Behavioral profiling for administrative & leadership roles",
      "Norm-referenced scoring benchmarked against government role requirements",
      "Confidential result delivery with restricted access controls & encryption",
    ],
    dashboardImage: "/images/solutions/government/psychometric-screening.png",
    dashboardAlt: "Psychometric and aptitude screening dashboard",
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
