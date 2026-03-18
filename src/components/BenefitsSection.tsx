import GradeEssaysCard from "./benefits/GradeEssaysCard";
import CatchesCard from "./benefits/CatchesCard";
import UploadSyllabusCard from "./benefits/UploadSyllabusCard";
import LanguagesCard from "./benefits/LanguagesCard";
import FairExamsCard from "./benefits/FairExamsCard";
import MultiDeviceCard from "./benefits/MultiDeviceCard";
import AIProctorCard from "./benefits/AIProctorCard";
import ExamToResultCard from "./benefits/ExamToResultCard";
import ConcurrentUsersCard from "./benefits/ConcurrentUsersCard";
import QuestionBankCard from "./benefits/QuestionBankCard";
import LockdownCard from "./benefits/LockdownCard";
import AnalyticsCard from "./benefits/AnalyticsCard";

export default function BenefitsSection() {
  return (
    <section className="bg-creme-500 px-6 py-24 md:px-12 lg:px-[120px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-[607px] text-center">
          <h2 className="text-[32px] font-semibold leading-[1.2] tracking-[-0.96px] text-chalk-green-500 md:text-[47.78px]">
            Why ExamX?
            <br />
            Discover the key benefits
          </h2>
          <p className="mt-3 text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a]">
            Every feature designed to make exams faster, fairer, and more secure.
          </p>
        </div>

        {/* 2-column grid — left col then right col, cards stack per Figma order */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            <GradeEssaysCard />
            <CatchesCard />
            <UploadSyllabusCard />
            <LanguagesCard />
            <FairExamsCard />
            <MultiDeviceCard />
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            <AIProctorCard />
            <ExamToResultCard />
            <ConcurrentUsersCard />
            <QuestionBankCard />
            <LockdownCard />
            <AnalyticsCard />
          </div>
        </div>
      </div>
    </section>
  );
}
