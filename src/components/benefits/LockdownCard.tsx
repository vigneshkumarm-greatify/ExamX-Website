import Image from "next/image";
import ExamMockup from "../helperComps/ExamMockup";

const lockdownIcons = [
  { src: "/images/icons/lockdown-icon-screen.svg", size: 24 },
  { src: "/images/icons/lockdown-icon-device.svg", size: 24 },
  { src: "/images/icons/lockdown-icon-iris.svg", size: 26 },
  { src: "/images/icons/lockdown-icon-network.svg", size: 26 },
  { src: "/images/icons/lockdown-icon-padlock.svg", size: 26 },
];

export default function LockdownCard() {
  return (
    <div className="relative overflow-hidden rounded-[20px] bg-white md:h-[500px] flex flex-col gap-10">
      {/* Title block */}
      <div className="relative z-10 flex max-w-[516px] flex-col gap-2 px-6 pt-6 lg:px-9 lg:pt-9">
        <h3 className="text-[23.04px] font-semibold leading-[1.2] tracking-[-0.46px] text-chalk-green-500">
          Lockdown mode. Zero loopholes
        </h3>
        <p className="max-w-[411px] text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a]">
          Blocks tab switching, screen capture, clipboard access, and external
          applications during exams. Full-screen lockdown on every device.
        </p>
      </div>

      {/* Orange gradient background area */}
      <div className="relative h-[320px] md:h-[486px] w-full overflow-hidden px-6 flex justify-center">
        <div
          className="relative h-full w-full max-w-[573px] rounded-l-[23px] rounded-tr-[23px] overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(173.87deg, #fff3eb 12.03%, #ff8a3b 92.82%)",
          }}
        >
            {/* Glass panel overlay */}
            <div
            className="absolute left-[34px] top-[140px] h-auto w-full rounded-bl-[16px] rounded-tl-[16px]  border-b border-l border-t border-white p-2"
            style={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              backgroundImage:
              "linear-gradient(114.92deg, rgba(255,255,255,0.5) 3.78%, rgba(255,138,59,0.5) 92.35%)",
            }}
          >
            {/* Exam UI mockup */}
            <div className="overflow-hidden w-full h-full ">
              <ExamMockup />
            </div>
          </div>

          {/* Main lockdown mode card (floating on top) */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-[16.4px] rounded-[7px] bg-white p-[12.3px]"
            style={{ top: "calc(50% - 50px)", left: "calc(50% - 0.3px)" }}
          >
            <span className="text-[16.42px] font-semibold leading-[1.2] tracking-[-0.16px] text-[#ff8a3b]">
              Lockdown mode on
            </span>
            <div className="flex gap-[7.7px]">
              {lockdownIcons.map((icon, i) => (
                <div
                  key={i}
                  className="flex size-[40px] lg:size-[56.8px] items-center justify-center rounded-[9.6px] border border-[#ff8a3b]"
                  style={{ background: "rgba(255,138,59,0.08)" }}
                >
                  <Image src={icon.src} alt="" width={icon.size} height={icon.size} className="p-1 lg:p-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
