import OrgHero from "@/components/common/OrgHero";
import type { OrgHeroProps } from "@/components/common/OrgHero";
import UseCases from "@/components/government/UseCases";
import ExploreOtherSolutions from "@/components/common/ExploreOtherSolutions";
import SolutionsTrustedBy from "@/components/solutions/SolutionsTrustedBy";

const heroData: OrgHeroProps = {
  badge: "Government & Public Sector",
  heading: "National-scale exams,\nzero paper leaks.",
  description:
    "Conduct civil service recruitment, licensing exams, and skill assessments with military-grade security, tamper-proof delivery, 30+ languages, data sovereignty, and complete RTI compliance.",
  ctaLabel: "Request government demo",
  ctaHref: "#request-demo",
  stats: [
    { value: "100K+", label: "Concurrent users" },
    { value: "30+", label: "Languages" },
    { value: "0", label: "Paper leaks" },
    { value: "100%", label: "RTI compliant" },
  ],
  centerIconPath: "/images/home/icons/icon-building.svg",
  arcSvgPath: "/images/common/hero-arc.svg",
  theme: {
    bgGradient: "linear-gradient(180deg, #006921 27.885%, #00b63a 100%)",
    badgeBorderColor: "rgba(138,239,170,0.5)",
    badgeBgColor: "rgba(255,255,255,0.1)",
    descriptionColor: "#e6fced",
    statCardColors: [
      "rgba(184,245,203,0.2)",
      "rgba(184,245,203,0.2)",
      "rgba(184,245,203,0.2)",
      "rgba(184,245,203,0.2)",
    ],
    centerIconBg: "rgba(184,245,203,0.2)",
  },
  arcColor: "#00DC46",
};

export default function GovernmentPage() {
  return (
    <main>
      <OrgHero {...heroData} />
      <SolutionsTrustedBy />
      <UseCases />
      <ExploreOtherSolutions currentSlug="/solutions/government" />
    </main>
  );
}
