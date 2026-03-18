import Image from "next/image";
import ExamMockup from "./ExamMockup";

export default function FairExamsCard() {
  return (
    <div className="relative overflow-hidden rounded-[20px] bg-white md:h-[500px]">
      {/* Title block */}
      <div className="absolute left-[36px] top-[36px] z-10 flex w-[516px] flex-col gap-2">
        <h3 className="text-[23.04px] font-semibold leading-[1.2] tracking-[-0.46px] text-chalk-green-500">
          Fair exams for every candidate
        </h3>
        <p className="max-w-[411px] text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a]">
          Extra time accommodations, screen reader support, font size controls,
          high-contrast mode, and configurable breaks. WCAG 2.1 AA compliant.
        </p>
      </div>

      {/* Green gradient background area */}
      <div className="absolute left-[24px] top-[187px] h-[486px] w-[540px] overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 h-[486px] w-[540px] -translate-x-1/2 rounded-[23px]"
          style={{
            backgroundImage:
              "linear-gradient(-53.07deg, #00373a 6.07%, #00dc46 86.84%)",
          }}
        />

        {/* Glass panel overlay */}
        <div
          className="absolute left-[44px] top-[71px] h-[564px] w-[735px] rounded-bl-[16px] rounded-tl-[16px] border-b border-l border-t border-white"
          style={{
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            backgroundImage:
              "linear-gradient(114.92deg, rgba(255,255,255,0.5) 3.78%, rgba(0,118,38,0.5) 92.35%)",
          }}
        />

        {/* Exam UI mockup */}
        <div className="absolute bottom-[33px] left-[52px]">
          <ExamMockup />
        </div>
      </div>

      {/* Floating header bar — Time Left + Submit */}
      <div className="absolute left-[38px] top-[206px] z-10 flex items-center rounded-[6.8px] bg-chalk-green-500 px-4 py-2">
        <div className="flex items-center gap-[6.9px]">
          <div className="flex items-center gap-[5.2px]">
            <Image src="/images/fair-exam-loader.svg" alt="" width={17} height={17} />
            <div className="flex flex-col leading-[1.2]">
              <span className="text-[4.8px] font-bold uppercase tracking-[0.05px] text-[#00dc46]">
                Time left
              </span>
              <span className="text-[9.9px] font-semibold tracking-[-0.2px] text-white">
                0:18:32
              </span>
            </div>
          </div>
          <div
            className="flex w-[63px] items-center justify-center rounded-[3.4px] border border-[#00b63a] px-[6.9px] py-[5.2px] text-[6.87px] font-semibold leading-[1.2] tracking-[-0.14px] text-white"
            style={{
              backgroundImage: "linear-gradient(99.91deg, #00dc46 0.45%, #00c13d 101%)",
            }}
          >
            Submit exam
          </div>
        </div>
      </div>

      {/* Floating Question list panel */}
      <div className="absolute left-[350px] top-[220px] z-10 flex w-[152px] flex-col gap-[15px] rounded-[6.4px] border border-[#e4e4e7] bg-white p-[6.4px] shadow-[0px_0px_20px_rgba(0,0,0,0.1)]">
        <p className="text-[10.3px] font-semibold leading-[1.2] tracking-[-0.2px] text-chalk-green-500">
          Question list
        </p>
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="text-[5.9px] font-bold uppercase leading-[1.2] tracking-[0.06px] text-chalk-green-500">
              Section a
            </span>
            <div className="h-[3px] w-[30px] rounded-[8px] bg-[#e7e7e7]" />
          </div>
          <div className="flex flex-wrap gap-1">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="flex h-6 w-6 items-center justify-center rounded-[4.3px] border border-[#00dc46] text-[8px] font-medium leading-[1.3] tracking-[-0.06px] text-chalk-green-500"
              >
                {n}
              </div>
            ))}
            <div className="flex h-6 w-6 items-center justify-center rounded-[4.3px] border border-[#ff8a3b] text-[8px] font-medium leading-[1.3] tracking-[-0.06px] text-chalk-green-500">
              7
            </div>
            <div className="flex h-6 w-6 items-center justify-center rounded-[4.3px] bg-chalk-green-500 text-[8px] font-medium leading-[1.3] tracking-[-0.06px] text-white">
              8
            </div>
            {Array.from({ length: 7 }, (_, i) => (
              <div
                key={i + 9}
                className="flex h-6 w-6 items-center justify-center rounded-[4.3px] border border-[#e4e4e7]"
              >
                <div className="h-[3px] w-[9px] rounded-[8px] bg-[#e7e7e7]" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pen tool + text file icons */}
      <div className="absolute left-[488px] top-[386px] z-10 flex flex-col items-end gap-[8.7px]">
        <div className="flex size-[59.3px] items-center justify-center overflow-hidden rounded-[5.4px] border border-[#dcdcdc] bg-white shadow-[0px_0.87px_8.66px_rgba(0,0,0,0.15)]">
          <Image src="/images/fair-exam-pen.svg" alt="" width={30} height={80} className="mt-7" />
        </div>
        <div className="relative size-[32px] rounded-full border border-[#dcdcdc] bg-white shadow-[0px_0.87px_8.66px_rgba(0,0,0,0.15)]">
          <Image src="/images/fair-exam-text-file.svg" alt="" width={12} height={12} className="absolute left-[10px] top-[10px]" />
        </div>
      </div>
    </div>
  );
}
