import Image from "next/image";
import ExamMockup from "../helperComps/ExamMockup";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

export default function FairExamsCard() {
  return (
    <div className="relative overflow-hidden rounded-[20px] bg-white md:h-[500px] flex flex-col gap-10">
      {/* Title block */}
      <div className=" relative z-10 flex max-w-[516px] flex-col gap-2 px-6 pt-6 lg:px-9 lg:pt-9 ">
        <h3 className="text-[23.04px] font-semibold leading-[1.2] tracking-[-0.46px] text-chalk-green-500">
          Fair exams for every candidate
        </h3>
        <p className="max-w-[411px] text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a]">
          Extra time accommodations, screen reader support, font size controls,
          high-contrast mode, and configurable breaks. WCAG 2.1 AA compliant.
        </p>
      </div>

      {/* Green gradient background area */}
      <div className="relative h-[320px] md:h-[486px] w-full  overflow-hidden  flex justify-center px-6">
        <div
          className="relative h-full w-full max-w-[573px] rounded-l-[23px] rounded-tr-[23px] overflow-hidden "
          style={{
            backgroundImage:
              "linear-gradient(-53.07deg, #00373a 6.07%, #00dc46 86.84%)",
          }}
        >
          {/* Glass panel overlay */}
          <div
            className="absolute left-[34px] top-[71px] h-auto w-full rounded-bl-[16px] rounded-tl-[16px]  border-b border-l border-t border-white p-2"
            style={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              backgroundImage:
                "linear-gradient(114.92deg, rgba(255,255,255,0.5) 3.78%, rgba(0,118,38,0.5) 92.35%)",
            }}
          >
            {/* Exam UI mockup */}
            <div className="overflow-hidden w-full h-full ">
              <ExamMockup />
            </div>
          </div>
          {/* Floating header bar — Time Left + Submit */}
          <div className="absolute left-[18px] top-[16px] z-10 flex items-center rounded-[6.8px] bg-chalk-green-500 px-4 py-2">
            <div className="flex items-center gap-[6.9px]">
              <div className="flex items-center gap-[5.2px]">
                <Image
                  src="/images/home/illustrations/fair-exam-loader.svg"
                  alt=""
                  width={17}
                  height={17}
                  draggable={false}
                  className="select-none"
                />
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
                  backgroundImage:
                    "linear-gradient(99.91deg, #00dc46 0.45%, #00c13d 101%)",
                }}
              >
                Submit exam
              </div>
            </div>
          </div>

          {/* Floating Question list panel */}
          <div className="absolute left-[260px] top-[30px] z-10 flex w-[152px] flex-col gap-[15px] rounded-[6.4px] border border-[#e4e4e7] bg-white p-[6.4px] shadow-[0px_0px_20px_rgba(0,0,0,0.1)]">
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
          <div className="absolute right-[18px] top-[200px] z-10 flex flex-col items-end gap-[8.7px]">
            <div className="flex size-[59.3px] items-center justify-center overflow-hidden rounded-[5.4px] border border-[#dcdcdc] bg-white shadow-[0px_0.87px_8.66px_rgba(0,0,0,0.15)]">
              <Image
                src="/images/home/illustrations/fair-exam-pen.svg"
                alt=""
                width={30}
                height={80}
                draggable={false}
                className="mt-7 select-none"
              />
            </div>
            <div className="relative size-[32px] flex items-center justify-center rounded-full border border-[#dcdcdc] bg-white shadow-[0px_0.87px_8.66px_rgba(0,0,0,0.15)]">
              <DocumentTextIcon className="h-4 w-4 text-chalk-green-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
