import HeroSection from "@/components/home/HeroSection";
import TrustedBy from "@/components/home/TrustedBy";
import StatsBar from "@/components/home/StatsBar";
import ExperienceSection from "@/components/home/ExperienceSection";
import FiveStages from "@/components/home/FiveStages";
import BuiltOnAI from "@/components/home/BuiltOnAI";
import BuiltForOrgs from "@/components/home/BuiltForOrgs";
import BenefitsSection from "@/components/home/BenefitsSection";
import Testimonials from "@/components/home/Testimonials";
import Integrations from "@/components/home/Integrations";
import CtaSection from "@/components/common/CtaSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustedBy />
      <StatsBar />
      <ExperienceSection />
      <FiveStages />
      <BenefitsSection />
      <BuiltOnAI />
      <BuiltForOrgs />
      <Testimonials />
      <Integrations />
      <CtaSection />
    </main>
  );
}
