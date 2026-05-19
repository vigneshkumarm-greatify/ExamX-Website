import Hero from "@/components/platform-ai-proctoring/Hero";
import ProctoringModes from "@/components/platform-ai-proctoring/ProctoringModes";
import DetectionCapabilities from "@/components/platform-ai-proctoring/DetectionCapabilities";
import TrustAccuracy from "@/components/platform-ai-proctoring/TrustAccuracy";
import CtaSection from "@/components/common/CtaSection";

export default function PlatformAiProctoringPage() {
  return (
    <main>
      <Hero />
      <ProctoringModes />
      <DetectionCapabilities />
      <TrustAccuracy />
      <CtaSection bgColor="bg-creme-500"  id="request-demo" />
    </main>
  );
}
