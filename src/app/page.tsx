import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import StatsBar from "@/components/StatsBar";
import ExperienceSection from "@/components/ExperienceSection";
import FiveStages from "@/components/FiveStages";
import BuiltOnAI from "@/components/BuiltOnAI";
import BuiltForOrgs from "@/components/BuiltForOrgs";
import BenefitsSection from "@/components/BenefitsSection";
import Testimonials from "@/components/Testimonials";
import Integrations from "@/components/Integrations";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className="relative min-h-[1090px] overflow-hidden bg-[linear-gradient(176.9deg,#00373a_43.715%,#00dc46_141.44%)]">
        <Navbar />
        <HeroSection />
      </div>
      <TrustedBy />
      <StatsBar />
      <ExperienceSection />
      <FiveStages />
      <BuiltOnAI />
      <BuiltForOrgs />
      <BenefitsSection />
      <Testimonials />
      <Integrations />
      <CtaSection />
      <Footer />
    </main>
  );
}
