import OrgHero from "@/components/common/OrgHero";
import type { OrgHeroProps } from "@/components/common/OrgHero";
import UseCases from "@/components/coaching-institutes/UseCases";
import ExploreOtherSolutions from "@/components/common/ExploreOtherSolutions";
import SolutionsTrustedBy from "@/components/solutions/SolutionsTrustedBy";

const heroData: OrgHeroProps = {
  badge: "Coaching Institutes & EdTech",
  heading: "Launch test series in\nhours, not months.",
  description:
    "White-label mock tests for JEE, NEET, UPSC & more. Monetizable test series with your branding, built-in payments, national-rank leaderboards, and API-first architecture. Go from zero to live in under 48 hours.",
  ctaLabel: "Request edtech demo",
  ctaHref: "#request-demo",
  stats: [
    { value: "10x", label: "Faster launch" },
    { value: "Rs 2Cr+", label: "Revenue tracked" },
    { value: "<48h", label: "Go live" },
    { value: "100K+", label: "Concurrent students" },
  ],
  centerIconPath: "/images/home/icons/icon-deepfake.svg",
  arcSvgPath: "/images/common/hero-arc.svg",
  theme: {
    bgGradient: "linear-gradient(180deg, #00373a 0%, #618385 100%)",
    badgeBorderColor: "#91a9aa",
    badgeBgColor: "rgba(255, 255, 255, 0.22)",
    descriptionColor: "#c2cfd0",
    statCardColors: [
      "rgba(145, 169, 170, 0.2)",
      "rgba(145, 169, 170, 0.2)",
      "rgba(145, 169, 170, 0.2)",
      "rgba(145, 169, 170, 0.2)",
    ],
    centerIconBg: "rgba(145, 169, 170, 0.2)",
  },
  arcColor: "#315d5f",
};

export default function CoachingInstitutesPage() {
  return (
    <main>
      <OrgHero {...heroData} />
      <SolutionsTrustedBy />
      <UseCases />
      <ExploreOtherSolutions currentSlug="/solutions/coaching-institutes" />
    </main>
  );
}
