import Image from "next/image";
import ExamMockup from "./ExamMockup";

const lockdownIcons = [
  { src: "/images/lockdown-icon-screen.svg", size: 24 },
  { src: "/images/lockdown-icon-device.svg", size: 24 },
  { src: "/images/lockdown-icon-iris.svg", size: 26 },
  { src: "/images/lockdown-icon-network.svg", size: 26 },
  { src: "/images/lockdown-icon-padlock.svg", size: 26 },
];

export default function LockdownCard() {
  return (
    <div className="relative overflow-hidden rounded-[20px] bg-white md:h-[500px]">
      {/* Title block */}
      <div className="absolute left-[36px] top-[36px] z-10 flex w-[516px] flex-col gap-2">
        <h3 className="text-[23.04px] font-semibold leading-[1.2] tracking-[-0.46px] text-chalk-green-500">
          Lockdown mode. Zero loopholes
        </h3>
        <p className="max-w-[411px] text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a]">
          Blocks tab switching, screen capture, clipboard access, and external
          applications during exams. Full-screen lockdown on every device.
        </p>
      </div>

      {/* Orange gradient background area */}
      <div className="absolute left-[24px] top-[187px] h-[486px] w-[540px] overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 h-[486px] w-[540px] -translate-x-1/2 rounded-[23px]"
          style={{
            backgroundImage:
              "linear-gradient(173.87deg, #fff3eb 12.03%, #ff8a3b 92.82%)",
          }}
        />

        {/* Glass panel overlay */}
        <div
          className="absolute left-[37px] top-[150px] h-[564px] w-[735px] rounded-bl-[16px] rounded-tl-[16px] border-b border-l border-t border-white"
          style={{
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            backgroundImage:
              "linear-gradient(114.92deg, rgba(255,255,255,0.5) 3.78%, rgba(255,138,59,0.5) 92.35%)",
          }}
        />

        {/* Exam UI mockup */}
        <div className="absolute -bottom-[46px] left-[45px]">
          <ExamMockup />
        </div>

        {/* Shadow lockdown icons (behind the main card) */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[5.8px] border border-[#ff8a3b] bg-white p-[14.5px]"
          style={{ top: "calc(50% - 129px)", left: "calc(50% + 15.5px)" }}
        >
          <div className="flex gap-[6.4px]">
            {lockdownIcons.map((icon, i) => (
              <div
                key={`shadow-${i}`}
                className="flex size-[47px] items-center justify-center rounded-[8px] border border-[#ff8a3b]"
                style={{ background: "rgba(255,138,59,0.08)" }}
              >
                <Image src={icon.src} alt="" width={icon.size} height={icon.size} />
              </div>
            ))}
          </div>
        </div>

        {/* Main lockdown mode card (floating on top) */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-[16.4px] rounded-[7px] bg-white p-[12.3px]"
          style={{ top: "calc(50% - 124px)", left: "calc(50% - 0.3px)" }}
        >
          <span className="text-[16.42px] font-semibold leading-[1.2] tracking-[-0.16px] text-[#ff8a3b]">
            Lockdown mode on
          </span>
          <div className="flex gap-[7.7px]">
            {lockdownIcons.map((icon, i) => (
              <div
                key={i}
                className="flex size-[56.8px] items-center justify-center rounded-[9.6px] border border-[#ff8a3b]"
                style={{ background: "rgba(255,138,59,0.08)" }}
              >
                <Image src={icon.src} alt="" width={icon.size} height={icon.size} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
