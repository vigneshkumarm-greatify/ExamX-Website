import OrgHero from "@/components/common/OrgHero";
import type { OrgHeroProps } from "@/components/common/OrgHero";
import UseCases from "@/components/k12-schools/UseCases";
import ExploreOtherSolutions from "@/components/common/ExploreOtherSolutions";
import SolutionsTrustedBy from "@/components/solutions/SolutionsTrustedBy";

const heroData: OrgHeroProps = {
  badge: "K-12 Schools",
  heading: "So simple teachers love it,\nso smart principals trust it.",
  description:
    "Give teachers the exam builder they've always wanted, no training needed. Create any test in 3 minutes with AI-powered question generation from syllabus chapters. Auto-grade instantly, track class weakness patterns, and email branded parent reports automatically.",
  ctaLabel: "Request school demo",
  ctaHref: "#request-demo",
  stats: [
    { value: "94%", label: "Avg. completion rate" },
    { value: "3 min", label: "Exam creation" },
    { value: "8+ hrs", label: "Saved per week" },
    { value: "20+", label: "Regional languages" },
  ],
  centerIconPath: "/images/home/icons/icon-school.svg",
  arcSvgPath: "/images/common/hero-arc.svg",
  theme: {
    bgGradient: "linear-gradient(180deg, #663718 0%, #ff8a3b 100%)",
    badgeBorderColor: "rgba(255,201,165,0.5)",
    badgeBgColor: "rgba(255,255,255,0.1)",
    descriptionColor: "#fff3eb",
    statCardColors: [
      "rgba(255,138,59,0.2)",
      "rgba(255,138,59,0.2)",
      "rgba(255,138,59,0.2)",
      "rgba(255,138,59,0.2)",
    ],
    centerIconBg: "rgba(255,138,59,0.2)",
  },
  arcColor: "#cc6e2f",
};

export default function K12SchoolsPage() {
  return (
    <main>
      <OrgHero {...heroData} />
      <SolutionsTrustedBy />
      <UseCases />
      <ExploreOtherSolutions currentSlug="/solutions/k12-schools" />
    </main>
  );
}
