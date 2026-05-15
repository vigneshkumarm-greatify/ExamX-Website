import Image from "next/image";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface Step {
  icon: string;
  title: string;
  titleColor: string;
  description: string;
  cardBorder: string;
  cardBg: string;
}

const steps: Step[] = [
  {
    icon: "/images/common/icons/icon-video-clip.svg",
    title: "Video Feed",
    titleColor: "text-chalk-green-500",
    description: "Real-time video capture from candidate device",
    cardBorder: "border-chalk-green-100",
    cardBg:
      "linear-gradient(-77.84deg, #ffffff 6.95%, #c2cfd0 156.16%)",
  },
  {
    icon: "/images/common/icons/icon-focus-frame.svg",
    title: "Frame Extraction",
    titleColor: "text-green-600",
    description: "Optimized frame sampling for processing",
    cardBorder: "border-[#b8f5cb]",
    cardBg:
      "linear-gradient(-63.30deg, #ffffff 1.20%, #e6fced 83.87%)",
  },
  {
    icon: "/images/common/icons/icon-browser.svg",
    title: "Multi-Model Analysis",
    titleColor: "text-purple-500",
    description: "Parallel execution of detection models",
    cardBorder: "border-purple-100",
    cardBg:
      "linear-gradient(-65.64deg, #ffffff 11.86%, #efecfa 70.80%)",
  },
  {
    icon: "/images/common/icons/icon-shield-check.svg",
    title: "Risk Scoring",
    titleColor: "text-orange-500",
    description: "Threat level evaluation and correlation",
    cardBorder: "border-orange-200",
    cardBg:
      "linear-gradient(-71.81deg, #ffffff 1.63%, #fff3eb 100%)",
  },
  {
    icon: "/images/common/icons/icon-warning.svg",
    title: "Alert/Report",
    titleColor: "text-creme-900",
    description: "Proctor notification and evidence logging",
    cardBorder: "border-[#dbd9cc]",
    cardBg:
      "linear-gradient(-61.38deg, #ffffff 2.04%, #f9f7e8 72.14%)",
  },
];

export default function Pipeline() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-chalk-green-500 from-[22.8%] to-green-500/95 to-[100%] px-6 py-20 md:px-12 md:py-24 xl:px-[100px] xl:py-[120px]">
      <div className="relative z-10 mx-auto max-w-[1200px]">
        <h2 className="text-center text-[32px] font-semibold leading-[1.2] tracking-[-0.64px] text-creme-500 md:text-[40px] xl:text-[47.78px] xl:tracking-[-0.96px]">
          AI Pipeline Architecture
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:mt-14 xl:grid-cols-5 xl:gap-2">
          {steps.map((step, idx) => {
            const isLast = idx === steps.length - 1;
            return (
              <div
                key={step.title}
                className="flex h-full flex-col items-stretch gap-3 xl:flex-row xl:gap-2"
              >
                <article className="flex h-full w-full flex-1 flex-col gap-4 rounded-2xl bg-white p-4 md:p-5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md">
                    <Image
                      src={step.icon}
                      alt=""
                      width={32}
                      height={32}
                      className="h-8 w-8"
                    />
                  </div>
                  <h3
                    className={`text-[13.33px] font-semibold leading-[1.2] tracking-[-0.13px] ${step.titleColor}`}
                  >
                    {step.title}
                  </h3>
                  <div
                    className={`flex flex-1 rounded-md border px-4 pb-6 pt-4 md:px-6 md:pb-8 md:pt-6 ${step.cardBorder} shadow-[0px_2px_80px_0px_rgba(0,0,0,0.1)]`}
                    style={{ backgroundImage: step.cardBg }}
                  >
                    <p className="text-[15px] font-medium leading-[1.5] tracking-[-0.16px] text-chalk-green-500 md:text-base">
                      {step.description}
                    </p>
                  </div>
                </article>

                {/* Arrow connector — only renders where it represents real flow direction:
                    • mobile single-column (<sm): down chevron between cards
                    • xl horizontal row: right chevron between cards
                    Hidden at sm/md/lg multi-column layouts (flow direction isn't meaningful per-card)
                    and on the last item. */}
                {!isLast && (
                  <>
                    <ChevronDownIcon
                      aria-hidden
                      className="h-5 w-5 shrink-0 text-green-500 sm:hidden"
                    />
                    <ChevronRightIcon
                      aria-hidden
                      className="hidden h-5 w-5 shrink-0 self-center text-green-500 xl:block"
                    />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
