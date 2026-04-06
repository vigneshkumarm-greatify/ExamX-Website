import AboutHero from "@/components/about/AboutHero";
import VisionMission from "@/components/about/VisionMission";
import Founders from "@/components/about/Founders";
import CoreValues from "@/components/about/CoreValues";
import GetStartedCta from "@/components/common/GetStartedCta";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <VisionMission />
      <CoreValues />
      <Founders />
      <GetStartedCta
        heading="Transform your institution with Greatify"
        description="Create, manage, and update design systems effortlessly, making collaboration and consistency a breeze for your development team."
        buttonLabel="Book a demo"
        buttonHref="#request-demo"
      />
    </main>
  );
}
