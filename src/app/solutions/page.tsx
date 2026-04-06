import SolutionsHero from "@/components/solutions/SolutionsHero";
import SolutionsStats from "@/components/solutions/SolutionsStats";
import SolutionsCards from "@/components/solutions/SolutionsCards";
import SolutionsDetail from "@/components/solutions/SolutionsDetail";
import WhySwitchSection from "@/components/solutions/WhySwitchSection";
import ExamXComparison from "@/components/solutions/ExamXComparison";
import PricingTable from "@/components/solutions/PricingTable";
import GetStartedCta from "@/components/common/GetStartedCta";
import SolutionsTrustedBy from "@/components/solutions/SolutionsTrustedBy";

export default function SolutionsPage() {
  return (
    <main>
      <SolutionsHero />
      <SolutionsStats />
      <SolutionsCards />
      <WhySwitchSection />
      <SolutionsDetail />
      <SolutionsTrustedBy/>
      <ExamXComparison />
      <PricingTable />
      <GetStartedCta
        heading="Not sure which solution fits?"
        description="Talk to our team. We'll map ExamX to your exact assessment workflow and show you how organizations like yours made the switch."
        buttonLabel="Talk to sales"
        buttonHref="#request-demo"
      />
    </main>
  );
}
