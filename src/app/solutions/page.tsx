import SolutionsHero from "@/components/solutions/SolutionsHero";
import SolutionsStats from "@/components/solutions/SolutionsStats";
import SolutionsCards from "@/components/solutions/SolutionsCards";
import SolutionsDetail from "@/components/solutions/SolutionsDetail";
import WhySwitchSection from "@/components/solutions/WhySwitchSection";
import ExamXComparison from "@/components/solutions/ExamXComparison";
import PricingTable from "@/components/solutions/PricingTable";
import GetStartedCta from "@/components/solutions/GetStartedCta";
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
      <GetStartedCta />
    </main>
  );
}
