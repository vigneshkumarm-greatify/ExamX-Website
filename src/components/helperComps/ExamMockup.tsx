import { BookmarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function ExamMockup() {
  return (
    <div className="h-[374px] w-[770px] overflow-hidden rounded-[8.7px] bg-[#fafafa] shadow-[0px_4px_50px_rgba(0,0,0,0.25)]">
      {/* Top nav bar */}
      <div className="flex w-[573px] items-center justify-between rounded-b-[6.4px] bg-chalk-green-500 px-[10.7px] py-[8.5px]">
        <div className="relative h-[21px] w-[78px]">
          <div className="absolute left-[0.37px] top-[5.8px] h-[3px] w-[43px] rounded-[8px] bg-white/30" />
          <div className="absolute left-[0.37px] top-[11.8px] h-[3px] w-[24px] rounded-[8px] bg-white/30" />
        </div>
        <div className="h-[3px] w-[71px] rounded-[8px] bg-white/30" />
        <div className="relative h-[21px] w-[59px]">
          <div className="absolute left-[19px] top-[5.8px] h-[3px] w-[43px] rounded-[8px] bg-white/30" />
          <div className="absolute left-[19px] top-[11.8px] h-[3px] w-[24px] rounded-[8px] bg-white/30" />
        </div>
      </div>

      {/* Content area */}
      <div className="flex flex-1 border-r border-[#f4f4f5] bg-[#fafafa] px-[17px] py-[13px]">
        <div className="flex w-[469px] flex-col gap-[17px]">
          {/* Question header */}
          <div className="flex flex-col gap-[4.3px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="border-r border-[#a1a1aa] pr-[6.4px] text-[8.55px] font-medium leading-[1.5] tracking-[-0.086px] text-[#00b63a]">
                  Section A Question 8
                </span>
                <span className="pl-[6.4px] text-[8.55px] font-medium leading-[1.5] tracking-[-0.086px] text-[#a1a1aa]">
                  Descriptive Answer
                </span>
              </div>
              <span className="text-[7.1px] font-medium leading-[1.5] tracking-[-0.071px] text-[#00b63a]">
                3 MARK
              </span>
            </div>
            <div className="flex items-start justify-between">
              <div className="flex w-[280px] flex-col gap-[4px]">
                <div className="h-[3px] w-full rounded-[8px] bg-[#e7e7e7]" />
                <div className="h-[3px] w-[174px] rounded-[8px] bg-[#e7e7e7]" />
              </div>
              <BookmarkIcon className="h-4 w-4 text-purple-500" />
            </div>
          </div>

          {/* Text area box */}
          <div className="flex h-[107px] w-[469px] flex-col items-start justify-between rounded-[4.3px] border border-[#dcdcdc] bg-white p-[6.4px]">
            <div className="h-[3px] w-full rounded-[8px] bg-[#e7e7e7]" />
            <Image
              src="/images/illustrations/editor-options.svg"
              alt=""
              width={100}
              height={100}
            />
          </div>

          {/* Previous / Next buttons */}
          <div className="flex items-start justify-between border-t border-[#f4f4f5] pt-[17px]">
            <div className="flex w-[86px] items-center justify-center rounded-[4.3px] border border-[#e4e4e7] bg-[#fafafa] px-[8.5px] py-[6.4px] text-[8.55px] font-semibold leading-[1.2] tracking-[-0.17px] text-chalk-green-500">
              Previous
            </div>
            <div
              className="flex w-[86px] items-center justify-center rounded-[4.3px] border border-[#00b63a] px-[8.5px] py-[6.4px] text-[8.55px] font-semibold leading-[1.2] tracking-[-0.17px] text-white"
              style={{
                backgroundImage:
                  "linear-gradient(100.88deg, #00dc46 0.45%, #00c13d 101%)",
              }}
            >
              Next
            </div>
          </div>

          {/* Bottom progress bar */}
          <div className="flex flex-1 items-end">
            <div className="flex w-[469px] items-center justify-between border-t border-[#f4f4f5] pt-[15px]">
              <div className="flex w-[403px] items-center gap-[12px]">
                <div className="h-[3px] w-[41px] rounded-[8px] bg-[#e7e7e7]" />
                <div className="relative h-[11px] w-[224px] rounded-[2px] bg-[#f4f4f5]">
                  <p className="absolute right-[3px] top-[2px] text-right text-[5.9px] font-bold uppercase leading-[1.2] tracking-[0.06px] text-[#a1a1aa]">
                    total questions: 40
                  </p>
                  <div className="absolute left-[22px] top-1/2 flex w-[20px] -translate-y-1/2 items-center justify-end rounded-[2px] bg-[#ff8a3b] p-[2px]">
                    <span className="text-[5.9px] font-bold uppercase leading-[1.2] tracking-[0.06px] text-[#ffdec8]">
                      1
                    </span>
                  </div>
                  <div className="absolute left-[0.25px] top-1/2 flex w-[34px] -translate-y-1/2 items-center justify-end rounded-[2px] bg-[#00dc46] p-[2px]">
                    <span className="text-[5.9px] font-bold uppercase leading-[1.2] tracking-[0.06px] text-chalk-green-500">
                      6
                    </span>
                  </div>
                </div>
              </div>
              <div className="h-[3px] w-[41px] rounded-[8px] bg-[#e7e7e7]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
