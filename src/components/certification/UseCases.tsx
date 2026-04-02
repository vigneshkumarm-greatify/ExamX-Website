import DetailCard from "@/components/common/DetailCard";
import type { DetailCardData } from "@/components/common/DetailCard";

const useCaseCards: DetailCardData[] = [
  {
    heading:
      "Professional Certification Exams\nIRT-calibrated item banks with adaptive delivery",
    description:
      "Build defensible certification exams backed by rigorous psychometric science. Develop calibrated item banks with classical and IRT metrics, deliver exams via Computerized Adaptive Testing (CAT) for precise ability estimation, and maintain consistent scoring standards across test forms and years.",
    features: [
      "Psychometric item banking with classical & IRT calibration metrics",
      "Computerized Adaptive Testing (CAT) with real-time ability estimation",
      "Item exposure control & content balancing across forms",
      "Equating across test forms for consistent scoring over time",
      "Detailed item performance analytics: difficulty, discrimination & guessing parameters",
    ],
    dashboardImage: "/images/solutions/certification/professional-certification-irt-item-banking.png",
    dashboardAlt: "IRT Item Banking Dashboard",
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
    heading:
      "Licensure & Board Exams\nOS-level secure browser with forensic detection",
    description:
      "Protect the integrity of high-stakes licensing exams with forensic-grade security. Deploy OS-level secure browser lockdown, detect face-swaps and deepfakes in real time, analyze anomalies for collusion and pre-knowledge, and maintain complete audit trails for regulatory compliance and litigation defense.",
    features: [
      "OS-level secure browser lockdown blocks screen capture, VMs & remote access",
      "Face-swap & deepfake detection with continuous identity verification",
      "Forensic data analysis detects collusion, pre-knowledge & score anomalies",
      "Multi-shift delivery with unique statistically equivalent test forms",
      "Complete chain-of-custody audit trail for every exam interaction",
    ],
    dashboardImage: "/images/solutions/certification/licensure-board-exams-forensic-security.png",
    dashboardAlt: "Forensic Security Control dashboard",
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
      "Continuing Education (CE/CPD)\nautomated credit tracking & compliance",
    description:
      "Automate CE and CPD credit tracking, renewal deadlines, and compliance reporting. Auto-enroll credential holders in required programs, track progress in real-time, send reminder notifications, and generate bulk reports in required formats for regulatory bodies.",
    features: [
      "Configurable CE/CPD credit rules per certification program",
      "Auto-enrollment with renewal deadline tracking & reminder notifications",
      "Progress dashboards for credential holders to track requirements",
      "Bulk reporting to regulatory bodies in required formats",
      "Integration with professional association member databases",
    ],
    dashboardImage: "/images/solutions/certification/continuing-education-ce-cpd-compliance.png",
    dashboardAlt: "CE/CPD Compliance Dashboard",
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
    heading:
      "Digital Credentialing\nblockchain-verified certificates",
    description:
      "Issue tamper-proof, blockchain-anchored digital credentials that employers and third parties can instantly verify. Attach QR codes and unique URLs to certificates, provide API-based verification for integration with HR systems, and offer customizable branding for every certification program.",
    features: [
      "Blockchain-anchored digital credentials with tamper-proof verification",
      "QR code & unique URL verification for instant employer validation",
      "API-based credential verification for third-party platforms",
      "Customizable certificate templates with organization branding",
      "Automated issuance triggers based on passing scores & completion",
    ],
    dashboardImage: "/images/solutions/certification/digital-credentialing-blockchain-verification.png",
    dashboardAlt: "Digital Credential Platform dashboard",
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
