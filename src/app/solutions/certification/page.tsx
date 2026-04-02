import OrgHero from "@/components/common/OrgHero";
import type { OrgHeroProps } from "@/components/common/OrgHero";
import TrustedBy from "@/components/home/TrustedBy";
import UseCases from "@/components/certification/UseCases";
import SolutionsTrustedBy from "@/components/solutions/SolutionsTrustedBy";

const heroData: OrgHeroProps = {
  badge: "Certification & Licensure Bodies",
  heading: "High-stakes credentials,\npsychometric precision.",
  description:
    "Design defensible licensing exams and professional certifications with validated psychometric item banking, IRT-based adaptive testing, forensic data analysis, and verifiable digital credentials that stand up to legal and regulatory scrutiny.",
  ctaLabel: "Request certification demo",
  ctaHref: "#request-demo",
  stats: [
    { value: "50K+", label: "Certificates issued" },
    { value: "0.92", label: "IRT reliability" },
    { value: "Forensic-grade", label: "Security" },
    { value: "Global", label: "Delivery" },
  ],
  centerIconPath: "/images/home/icons/icon-warranty-badge.svg",
  arcSvgPath: "/images/common/hero-arc.svg",
  theme: {
    bgGradient: "linear-gradient(180deg, #3b2678 0%, #7e62d2 100%)",
    badgeBorderColor: "#b7a7e6",
    badgeBgColor: "rgba(255, 255, 255, 0.22)",
    descriptionColor: "#d3caf0",
    statCardColors: [
      "rgba(126, 98, 210, 0.2)",
      "#b7a7e6",
      "#9b85dc",
      "#b7a7e6",
    ],
    centerIconBg: "#b7a7e6",
  },
  arcColor: "#6240C8",
};

export default function CertificationPage() {
  return (
    <main>
      <OrgHero {...heroData} />
      <SolutionsTrustedBy />
      <UseCases />
    </main>
  );
}
