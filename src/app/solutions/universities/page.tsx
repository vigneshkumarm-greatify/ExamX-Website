import OrgHero from "@/components/common/OrgHero";
import type { OrgHeroProps } from "@/components/common/OrgHero";
import ExploreOtherSolutions from "@/components/common/ExploreOtherSolutions";
import CtaSection from "@/components/common/CtaSection";
import SolutionsTrustedBy from "@/components/solutions/SolutionsTrustedBy";
import UseCases from "@/components/universities/UseCases";
import WhyChoose from "@/components/universities/WhyChoose";
import FeaturesGrid from "@/components/universities/FeaturesGrid";

const heroData: OrgHeroProps = {
  badge: "Universities & Colleges",
  heading: "Accreditation-ready exams, at any scale.",
  description:
    "From semester exams to entrance tests to PhD evaluations run every assessment type with AI-powered integrity monitoring and accreditation-aligned analytics that map directly to NAAC, NBA & ABET outcomes.",
  ctaLabel: "Request university demo",
  ctaHref: "#request-demo",
  stats: [
    { value: "12,400", label: "Active exam sessions" },
    { value: "5x", label: "Faster accreditation" },
    { value: "400+", label: "Faculty hours saved/year" },
    { value: "99.2%", label: "Integrity score" },
  ],
  centerIconPath: "/images/home/icons/icon-book-reading.svg",
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
  arcColor:"#6240C8"
};

export default function UniversitiesPage() {
  return (
    <main>
      <OrgHero {...heroData} />
      <SolutionsTrustedBy />
 
      <UseCases />
      <WhyChoose />
      <FeaturesGrid />
      <ExploreOtherSolutions currentSlug="/solutions/universities" />
      <CtaSection bgColor="bg-creme-500" id="request-demo" />
 
    </main>
  );
}
