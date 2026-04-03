import OrgHero from "@/components/common/OrgHero";
import type { OrgHeroProps } from "@/components/common/OrgHero";
import UseCases from "@/components/corporate/UseCases";
import ExploreOtherSolutions from "@/components/common/ExploreOtherSolutions";
import SolutionsTrustedBy from "@/components/solutions/SolutionsTrustedBy";

const heroData: OrgHeroProps = {
  badge: "Corporate & Enterprise",
  heading: "Hire smarter, train faster,\nmeasure everything.",
  description:
    "Unify pre-hiring psychometric & skill assessments, L&D certification programs, and compliance training in one platform. Integrate seamlessly with your HRMS, ATS, and LMS. White-label with your brand. SSO-powered with audit trails.",
  ctaLabel: "Request enterprise demo",
  ctaHref: "#request-demo",
  stats: [
    { value: "60%", label: "Faster hiring" },
    { value: "85%", label: "Cost reduction" },
    { value: "200+", label: "Assessment templates" },
    { value: "6000+", label: "Corporate clients" },
  ],
  centerIconPath: "/images/home/icons/icon-bag-suitcase.svg",
  arcSvgPath: "/images/common/hero-arc.svg",
  theme: {
    bgGradient: "linear-gradient(180deg, #b8b6ab 0%, #f9f7e8 100%)",
    badgeBorderColor: "#b8b6ab",
    badgeBgColor: "rgba(255,255,255,0.1)",
    descriptionColor: "#71717a",
    statCardColors: [
      "rgba(255,255,255,0.2)",
      "rgba(255,255,255,0.2)",
      "rgba(255,255,255,0.2)",
      "rgba(255,255,255,0.2)",
    ],
    centerIconBg: "rgba(255,255,255,0.2)",
    badgeTextColor: "#00373a",
    headingColor: "#00373a",
    statTextColor: "#00373a",
    statCardBg: "rgba(255,255,255,0.2)",
    statBorderColor: "rgba(255,255,255,0.3)",
    centerIconColor: "#00373a",
  },
  arcColor: "#b8b6ab",
};

export default function CorporatePage() {
  return (
    <main>
      <OrgHero {...heroData} />
      <SolutionsTrustedBy/>
      <UseCases />
      <ExploreOtherSolutions currentSlug="/solutions/corporate" />
    </main>
  );
}
