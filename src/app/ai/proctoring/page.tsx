import Hero from "@/components/ai-proctoring/Hero";
import FeatureGrid from "@/components/ai-proctoring/FeatureGrid";
import Pipeline from "@/components/ai-proctoring/Pipeline";
import StatsBar from "@/components/ai-proctoring/StatsBar";
import FinalCta from "@/components/ai-proctoring/FinalCta";

export default function AiProctoringPage() {
  return (
    <main>
      <Hero />
      <FeatureGrid />
      <Pipeline />
      <StatsBar />
      <FinalCta />
    </main>
  );
}
