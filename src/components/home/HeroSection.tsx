import Image from "next/image";
import HeroGlowEffects from "./HeroGlowEffects";
import HeroScaleWrapper from "./HeroScaleWrapper";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(176.9deg,#00373a_43.715%,#00dc46_141.44%)]">
    

      {/* ===== HERO TEXT CONTENT — independently responsive ===== */}
      <div className="absolute left-[100px] top-[141px] z-10 flex w-[665px] flex-col gap-9 max-desktop:left-12 max-lg:top-[100px] max-lg:w-[min(90%,500px)] max-md:static max-md:w-full max-md:px-4 max-md:pt-24 max-md:pb-8">
        {/* AI Empowered Badge */}
        <div className="flex flex-col gap-3">
          <div className="flex items-start">
            <span className="inline-flex items-center gap-1 rounded-lg border border-[rgba(0,220,70,0.4)] bg-[rgba(0,220,70,0.2)] px-2 py-1.5">
              <Image src="/images/home/illustrations/greatify-ai.svg" alt="" width={15} height={15} />
              <span className="text-[11.11px] font-semibold leading-[1.2] tracking-[-0.01em] text-green-500">
                AI Empowered
              </span>
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-[47.78px] font-semibold leading-[1.2] tracking-[-0.02em] max-lg:text-[38px] max-md:text-[32px]">
            <span className="text-green-500">
              AI that creates, proctors, &amp; grades exams
            </span>{" "}
            <span className="text-creme-500">end-to-end</span>
          </h1>

          {/* Description */}
          <p className="w-[444px] text-base font-medium leading-[1.5] tracking-[-0.01em] text-chalk-green-100 max-lg:w-full">
            From question authoring to result analytics, ExamX replaces your
            entire exam stack with one intelligent platform. Trusted by
            universities, governments, and enterprises in 50+ countries.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2">
          <a
            href="#get-started"
            className="rounded-lg px-4 py-3 text-base font-semibold leading-[1.2] tracking-[-0.02em] text-creme-500 shadow-[0px_4px_15px_rgba(0,0,0,0.15)]"
            style={{
              backgroundImage:
                "linear-gradient(109.4deg, #00dc46 1.33%, #008f2e 98.18%)",
            }}
          >
            Get started free
          </a>
          <a
            href="#demo"
            className="rounded-lg border border-chalk-green-400 px-4 py-3 text-base font-semibold leading-[1.2] tracking-[-0.02em] text-creme-500 transition-colors hover:border-creme-500"
          >
            Book a demo
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex items-center gap-6 max-md:flex-wrap max-md:gap-4">
          <div className="flex items-center gap-1">
            <Image
              src="/images/home/decoratives/star-circle.svg"
              alt=""
              width={14}
              height={14}
            />
            <span className="text-[13.33px] font-medium leading-[1.5] tracking-[-0.01em] text-chalk-green-100">
              SOC 2
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/images/home/decoratives/star-circle.svg"
              alt=""
              width={14}
              height={14}
            />
            <span className="text-[13.33px] font-medium leading-[1.5] tracking-[-0.01em] text-chalk-green-100">
              GDPR
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/images/home/decoratives/star-circle.svg"
              alt=""
              width={14}
              height={14}
            />
            <span className="text-[13.33px] font-medium leading-[1.5] tracking-[-0.01em] text-chalk-green-100">
              ISO 27001
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/images/home/illustrations/countdown-timer.svg"
              alt=""
              width={14}
              height={14}
            />
            <span className="text-[13.33px] font-medium leading-[1.5] tracking-[-0.01em] text-chalk-green-100">
              99.9% Uptime
            </span>
          </div>
        </div>
      </div>


        {/* Scaled dashboard canvas — shrinks proportionally on smaller screens */}
        <HeroScaleWrapper>
        {/* Union Pattern - isometric grid background */}
        <div className="pointer-events-none absolute left-[-680px] top-[127px] flex h-[1616px] w-[2800px] items-center justify-center">
          <div className="-rotate-[30deg] skew-x-[30deg] scale-y-[0.87]">
            <Image
              src="/images/home/decoratives/union-pattern.svg"
              alt=""
              width={1889}
              height={1343}
              className="opacity-[0.5]"
              priority
            />
          </div>
        </div>

        {/* Animated Glow Effects - tubes, grid lines, dots */}
        <HeroGlowEffects />

        {/* ===== ISOMETRIC DASHBOARD ===== */}

        {/* Green Glass Backdrop */}
        <div className="pointer-events-none absolute left-[150px] top-[527px] flex h-[728px] w-[1260px] items-center justify-center">
          <div className="-rotate-[30deg] skew-x-[30deg] scale-y-[0.87]">
            <div
              className="h-[697px] w-[758px] rounded-2xl border-b border-l border-t border-white/30 shadow-[-4px_4px_15px_rgba(0,55,58,0.2)] backdrop-blur-[10px]"
              style={{
                backgroundImage:
                  "linear-gradient(111.2deg, rgba(4,152,51,0.5) 3.78%, rgba(0,118,38,0.5) 92.35%)",
              }}
            />
          </div>
        </div>

        {/* Main Dashboard Panel */}
        <div className="pointer-events-none absolute left-[165px] top-[535px] flex h-[711px] w-[1231px] items-center justify-center">
          <div className="-rotate-[30deg] skew-x-[30deg] scale-y-[0.87]">
            <div
              className="h-[678px] w-[743px] overflow-hidden rounded-[14px]"
              style={{
                backgroundImage:
                  "linear-gradient(145.1deg, rgba(0,43,45,0.8) 2.52%, rgba(0,43,45,0.3) 43.38%, rgba(0,43,45,0.8) 91.08%)",
              }}
            >
              {/* Test Statistics Row */}
              <div className="flex gap-[13px] p-[14px]">
                {/* Attempted Tests */}
                <div className="w-[133px] rounded-[10px] border border-dashed border-white/30 bg-[rgba(0,55,58,0.1)] p-[17px]">
                  <div className="mb-[10px] opacity-0">
                    <Image
                      src="/images/home/icons/hero-icon-attempted.svg"
                      alt=""
                      width={17}
                      height={17}
                      className="mb-[7px]"
                    />
                    <p className="text-[9.3px] text-chalk-green-100">
                      Attempted Tests
                    </p>
                  </div>
                  <div className="h-[7px] w-[70px] rounded-full bg-white/0" />
                </div>
                {/* Unattempted Tests */}
                <div className="w-[133px] rounded-[10px] border border-white/10 bg-[rgba(0,55,58,0.5)] p-[17px]">
                  <div className="mb-[10px]">
                    <Image
                      src="/images/home/icons/hero-icon-failed.svg"
                      alt=""
                      width={17}
                      height={17}
                      className="mb-[7px]"
                    />
                    <p className="text-[9.3px] font-medium text-chalk-green-100">
                      Unattempted Tests
                    </p>
                  </div>
                  <div className="h-[7px] w-[70px] rounded-full bg-white/20" />
                </div>
                {/* Reattempted Tests */}
                <div className="w-[133px] rounded-[10px] border border-white/10 bg-[rgba(0,55,58,0.5)] p-[17px]">
                  <div className="mb-[10px]">
                    <Image src="/images/home/icons/hero-icon-reattempted.svg" alt="" width={17} height={17} className="mb-[7px]" />
                    <p className="text-[9.3px] font-medium text-chalk-green-100">
                      Reattempted Tests
                    </p>
                  </div>
                  <div className="h-[7px] w-[70px] rounded-full bg-white/20" />
                </div>
                {/* Passed Tests */}
                <div className="relative w-[133px] rounded-[10px] border border-white/10 bg-[rgba(0,55,58,0.5)] p-[17px]">
                  <div className="mb-[10px]">
                    <Image
                      src="/images/home/icons/hero-icon-passed.svg"
                      alt=""
                      width={17}
                      height={17}
                      className="mb-[7px]"
                    />
                    <p className="text-[9.3px] font-medium text-chalk-green-100">
                      Passed Tests
                    </p>
                  </div>
                  <div className="h-[7px] w-[70px] rounded-full bg-white/20" />
                </div>
                {/* Failed Tests (hidden) */}
                <div className="w-[133px] rounded-[10px] border border-white/20 bg-[rgba(0,55,58,0.5)] p-[17px] opacity-0">
                  <div className="mb-[10px]">
                    <Image
                      src="/images/home/icons/hero-icon-failed.svg"
                      alt=""
                      width={17}
                      height={17}
                      className="mb-[7px]"
                    />
                    <p className="text-[9.3px] font-medium text-chalk-green-100">
                      Failed Tests
                    </p>
                  </div>
                  <div className="h-[7px] w-[70px] rounded-full bg-white/20" />
                </div>
              </div>

              {/* Middle Row - Skills to Focus + AI Card */}
              <div className="flex gap-[13px] px-[14px]">
                {/* Skills to Focus Card */}
                <div className="w-[370px] rounded-[10px] border border-white/20 bg-[rgba(0,55,58,0.5)] p-[17px]">
                  <div className="mb-[10px] flex items-center justify-between">
                    <p className="text-[16px] font-semibold text-white">
                      Skills to focus
                    </p>
                    <div className="rounded-[7px] border border-white/10 px-[7px] ">
                      <span className="text-[9.3px] font-semibold text-[#71717a]">
                        All
                      </span>
                    </div>
                  </div>
                  {/* Indicators */}
                  <div className="mb-5 flex gap-[13px]">
                    <div className="flex items-center gap-[3px]">
                      <div className="h-[8px] w-[8px] rounded-[2px] bg-green-500" />
                      <div className="h-[5px] w-[70px] rounded-full bg-white/20" />
                    </div>
                    <div className="flex items-center gap-[3px]">
                      <div className="h-[8px] w-[8px] rounded-[2px] bg-purple-500" />
                      <div className="h-[5px] w-[70px] rounded-full bg-white/20" />
                    </div>
                    <div className="flex items-center gap-[3px]">
                      <div className="h-[8px] w-[8px] rounded-[2px] bg-orange-600" />
                      <div className="h-[7px] w-[70px] rounded-full bg-white/20" />
                    </div>
                  </div>
                  {/* Bars */}
                  <div className="space-y-[7px]">
                    {/* Bar 1 - 30% orange */}
                    <div>
                      <div className="mb-[7px] h-[7px] w-[70px] rounded-full bg-white/20" />
                      <div className="h-[18px] w-full overflow-hidden rounded-[3px] bg-white/20">
                        <div className="flex h-full w-[74px] items-center justify-end rounded-[3px] bg-orange-600 p-[3px]">
                          <span className="text-[9.3px] font-bold uppercase tracking-wide text-white">
                            30%
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Bar 2 - 61% purple */}
                    <div>
                      <div className="mb-[7px] h-[7px] w-[70px] rounded-full bg-white/20" />
                      <div className="h-[18px] w-full overflow-hidden rounded-[3px] bg-white/20">
                        <div className="flex h-full w-[176px] items-center justify-end rounded-[3px] bg-purple-400 p-[3px]">
                          <span className="text-[9.3px] font-bold uppercase tracking-wide text-white">
                            61%
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Bar 3 - 89% green (hidden) */}
                    <div className="opacity-0">
                      <div className="mb-[7px] h-[7px] w-[70px] rounded-full bg-white/20" />
                      <div className="h-[18px] w-full overflow-hidden rounded-[3px] ">
                        <div className="flex h-full w-[271px] items-center justify-end rounded-[3px] bg-green-600 p-[3px]">
                          <span className="text-[9.3px] font-bold uppercase tracking-wide text-chalk-green-500">
                            89%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Card */}
                <div
                  className="w-[334px] overflow-hidden rounded-[10px]"
                  style={{
                    backgroundImage:
                      "linear-gradient(128.9deg, #00373a 47.72%, #00dc46 117.25%)",
                  }}
                >
                  <div className="flex flex-col gap-[15px] p-0">
                    <div className="space-y-[13px] px-[17px] pt-[17px]">
                      <Image
                        src="/images/home/illustrations/ai-proctored-graphic.svg"
                        alt=""
                        width={64}
                        height={64}
                      />
                      <p className="w-[272px] text-[16px] font-semibold leading-[1.2] text-white">
                        Let Greatify AI help you identifying your skills
                      </p>
                    </div>
                    <div className="space-y-[13px]">
                      <p className="px-[17px] text-[9.3px] font-bold uppercase tracking-wide text-green-500">
                        Improve your skills like:-
                      </p>
                      <div className="relative h-[42px] overflow-hidden">
                        <div className="flex flex-wrap gap-[5px_7px] px-0">
                          <div className="flex h-[17px] items-center rounded-[7px] border border-green-700 bg-green-800 px-[7px]">
                            <div className="h-[5px] w-[60px] rounded-full bg-white/20" />
                          </div>
                          <div className="flex h-[17px] items-center rounded-[7px] border border-purple-500 bg-purple-700 px-[7px]">
                            <div className="h-[5px] w-[65px] rounded-full bg-white/20" />
                          </div>
                          <div className="flex h-[17px] items-center rounded-[7px] border border-orange-600 bg-orange-700 px-[7px]">
                            <div className="h-[5px] w-[61px] rounded-full bg-white/20" />
                          </div>
                          <div className="flex h-[17px] items-center rounded-[7px] border border-creme-800 bg-creme-900 px-[7px]">
                            <div className="h-[5px] w-[50px] rounded-full bg-white/20" />
                          </div>
                          <div className="flex h-[19px] items-center rounded-[7px] border border-creme-800 bg-creme-900 px-[7px]">
                            <div className="h-[5px] w-[64px] rounded-full bg-white/20" />
                          </div>
                          <div className="flex h-[19px] items-center rounded-[7px] border border-green-700 bg-green-800 px-[7px]">
                            <div className="h-[5px] w-[78px] rounded-full bg-white/20" />
                          </div>
                          <div className="flex h-[19px] items-center rounded-[7px] border border-green-700 bg-green-800 px-[7px]">
                            <div className="h-[5px] w-[78px] rounded-full bg-white/20" />
                          </div>
                          <div className="flex h-[17px] items-center rounded-[7px] border border-creme-800 bg-creme-900 px-[7px]">
                            <div className="h-[5px] w-[50px] rounded-full bg-white/20" />
                          </div>
                        </div>
                        {/* Gradient fade overlay */}
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage:
                              "linear-gradient(90deg, #00373a 3.28%, transparent 30.72%, transparent 66.79%, #00aa42 99.48%)",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Row - Test Performance */}
              <div className="mx-[14px] mt-[13px] flex overflow-hidden rounded-[10px] border border-white/20 bg-[rgba(0,55,58,0.5)]">
                {/* Pie Chart Section */}
                <div className="flex w-[339px] flex-col items-center gap-5 px-[17px] pb-[27px] pt-[17px]">
                  <div className="w-full">
                    <div className="mb-[10px]">
                      <div className="h-[7px] w-[70px] rounded-full bg-white/20" />
                    </div>
                    {/* Pie chart placeholder */}
                    <div className="relative mx-auto h-[189px] w-[189px]">
                      {/* Outer circle */}
                      <Image
                        src="/images/home/illustrations/hero-piechart.svg"
                        alt=""
                        width={189}
                        height={189}
                        className="absolute inset-0 h-full w-full"
                      />
                      {/* Inner ring */}
                      <div className="absolute inset-[21.24%]">
                        <Image
                          src="/images/home/illustrations/hero-pie-ring.svg"
                          alt=""
                          width={109}
                          height={109}
                          className="h-full w-full"
                        />
                      </div>
                      {/* Orange segment */}
                      <div className="absolute inset-[2.65%]">
                        <div className="absolute inset-[0_15.42%_0_0]">
                          <Image
                            src="/images/home/illustrations/hero-pie-seg1.svg"
                            alt=""
                            width={151}
                            height={179}
                            className="h-full w-full"
                          />
                        </div>
                      </div>
                      {/* Purple segment */}
                      <div className="absolute inset-[2.65%]">
                        <div
                          className="absolute"
                          style={{ inset: "49.69% 0 3.15% 60.91%" }}
                        >
                          <Image
                            src="/images/home/illustrations/hero-pie-seg2.svg"
                            alt=""
                            width={70}
                            height={84}
                            className="h-full w-full"
                          />
                        </div>
                      </div>
                      {/* Green segment */}
                      <div className="absolute inset-[2.65%]">
                        <div
                          className="absolute"
                          style={{ inset: "17.01% 0.17% 51.63% 74.73%" }}
                        >
                          <Image
                            src="/images/home/illustrations/hero-pie-seg3.svg"
                            alt=""
                            width={45}
                            height={56}
                            className="h-full w-full"
                          />
                        </div>
                      </div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-[23px] font-semibold text-white">
                          20
                        </span>
                        <div className="h-[5px] w-[30px] rounded-full bg-white/20" />
                      </div>
                    </div>
                  </div>
                  {/* Info dots */}
                  <div className="flex gap-5">
                    <div className="flex items-center gap-[3px]">
                      <div className="h-[8px] w-[8px] rounded-sm bg-green-500" />
                      <div className="h-[5px] w-[30px] rounded-full bg-chalk-green-300" />
                    </div>
                    <div className="flex items-center gap-[3px]">
                      <div className="h-[8px] w-[8px] rounded-sm bg-orange-500" />
                      <div className="h-[5px] w-[30px] rounded-full bg-chalk-green-300" />
                    </div>
                    <div className="flex items-center gap-[3px]">
                      <div className="h-[8px] w-[8px] rounded-sm bg-purple-500" />
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-auto h-[271px] w-px bg-white/20" />

                {/* Test List Section */}
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-end gap-[3px] px-[23px] pb-[17px] pt-[17px]">
                    <div className="rounded-[7px] border border-white/10 px-[7px] ">
                      <span className="text-[9.3px] font-semibold text-white/50">
                        First year
                      </span>
                    </div>
                    <div className="rounded-[7px] border border-white/10 px-[7px] ">
                      <span className="text-[9.3px] font-semibold text-white/50">
                        Average
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 space-y-[7px] px-[23px]">
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between rounded-[7px] border border-white/10 bg-white/10 px-[7px] py-[7px]"
                      >
                        <div className="h-[5px] w-[30px] rounded-full bg-chalk-green-300/50" />
                        <div className="h-[5px] w-[30px] rounded-full bg-chalk-green-300/50" />
                        <span className="text-[9.3px] font-medium text-orange-500">
                          Average
                        </span>
                      </div>
                    ))}
                    {/* Last row - dashed border */}
                    <div className="flex items-center justify-between rounded-[7px] border border-dashed border-white/10 bg-white/[0.02] px-[7px] py-[7px]">
                      <div className="h-[5px] w-[30px] rounded-full bg-chalk-green-300/50 opacity-0" />
                      <div className="h-[5px] w-[30px] rounded-full bg-chalk-green-300/50 opacity-0" />
                      <span className="text-[9.3px] font-medium text-orange-500 opacity-0">
                        Average
                      </span>
                    </div>
                  </div>
                  {/* Scrollbar */}
                  <div className="absolute right-[4px] top-1/2 h-[241px] w-[3px] -translate-y-1/2 rounded-[3px] bg-chalk-green-400">
                    <div className="h-[106px] w-[3px] rounded-[3px] bg-green-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Card - AI Proctored (top right) */}
        <div className="pointer-events-none absolute left-[942px] top-[373px] flex h-[183px] w-[316px] items-center justify-center">
          <div className="-rotate-[30deg] skew-x-[30deg] scale-y-[0.87]">
            <div
              className="relative h-[146px] w-[219px] overflow-hidden rounded-xl border border-green-500 shadow-[0px_4px_15px_rgba(0,55,58,0.25)]"
              style={{
                backgroundImage:
                  "linear-gradient(118.6deg, rgba(0,220,70,0.5) 33.3%, rgba(0,118,38,0.5) 63.6%)",
              }}
            >
              {/* Decorative ellipses */}
              <div className="absolute -bottom-4 -left-8 h-[152px] w-[28px] rotate-[42.8deg] opacity-30">
                <div className="h-full w-full rounded-full bg-green-500/20" />
              </div>
              <div className="absolute -bottom-8 right-4 h-[152px] w-[28px] rotate-[42.8deg] opacity-30">
                <div className="h-full w-full rounded-full bg-green-500/30" />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/home/illustrations/ai-proctored-graphic.svg"
                    alt=""
                    width={38}
                    height={38}
                    className="mb-2"
                  />
                  <p className="text-[16px] font-medium leading-[1.5] text-chalk-green-50 opacity-80">
                    AI Proctored
                  </p>
                </div>
                <p className="text-[33.81px] font-semibold leading-[1.2] tracking-[-0.02em] text-white opacity-80">
                  2,847
                </p>
                <p className="text-[16px] font-medium leading-[1.5] text-creme-50 opacity-80">
                  sessions today
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Card - Cheating Blocked (bottom left) */}
        <div className="pointer-events-none absolute left-[68px] top-[666px] flex h-[175px] w-[303px] items-center justify-center">
          <div className="-rotate-[30deg] skew-x-[30deg] scale-y-[0.87]">
            <div
              className="relative h-[130px] w-[219px] overflow-hidden rounded-xl shadow-[0px_4px_15px_rgba(0,55,58,0.25)] border border-white/10"
              style={{
                backgroundImage:
                  "linear-gradient(121deg, rgba(0,220,70,0.2) 3.78%, rgba(0,118,38,0.2) 92.35%)",
              }}
            >
              {/* Decorative ellipses */}
              <div className="absolute -bottom-4 -left-8 h-[152px] w-[28px] rotate-[42.8deg] opacity-30">
                <div className="h-full w-full rounded-full bg-green-500/30" />
              </div>
              <div className="absolute -bottom-8 right-4 h-[152px] w-[28px] rotate-[42.8deg] opacity-30">
                <div className="h-full w-full rounded-full bg-green-500/20" />
              </div>
              <div className="p-4">
                <div className="flex gap-2">
                  <Image
                    src="/images/home/icons/hero-icon-failed.svg"
                    alt=""
                    width={17}
                    height={17}
                    className="mb-[7px]"
                  />
                  <p className="text-[16px] font-medium leading-[1.5] text-green-50 opacity-70">
                    Cheating blocked
                  </p>
                </div>
                <p className="text-[33.81px] font-semibold leading-[1.2] tracking-[-0.02em] text-white opacity-80">
                  99.2%
                </p>
                <p className="text-[16px] font-medium leading-[1.5] text-green-50 opacity-80">
                  detection accuracy
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Card - Attempted Tests (bottom left) */}
        <div className="pointer-events-none absolute left-[89px] top-[905px] flex h-[110px] w-[190px] items-center justify-center">
          <div className="-rotate-[30deg] skew-x-[30deg] scale-y-[0.87]">
            <div
              className="flex h-[86px] w-[133px] flex-col justify-between rounded-[7px] p-4 shadow-[0px_4px_15px_rgba(0,55,58,0.25)] border border-white/20"
              style={{
                backgroundImage:
                  "linear-gradient(118.8deg, rgba(0,220,70,0.2) 3.78%, rgba(0,118,38,0.2) 92.35%)",
              }}
            >
              <div className="space-y-[7px]">
                <Image
                  src="/images/home/icons/hero-icon-attempted.svg"
                  alt=""
                  width={17}
                  height={17}
                />
                <p className="text-[9.3px] font-medium text-creme-500">
                  Attempted Tests
                </p>
              </div>
              <div className="h-[7px] w-[70px] rounded-full bg-white/20" />
            </div>
          </div>
        </div>

        {/* Floating Card - Failed Tests (right) */}
        <div className="pointer-events-none absolute left-[707px] top-[594px] flex h-[110px] w-[190px] items-center justify-center">
          <div className="-rotate-[30deg] skew-x-[30deg] scale-y-[0.87]">
            <div className="w-[133px] rounded-[10px] border border-white/20 bg-gradient-to-b from-green-500/20 to-green-700/20 p-[17px] shadow-[0px_4px_15px_rgba(0,0,0,0.15)] border border-white/10">
              <div className="space-y-[7px]">
                <Image
                  src="/images/home/icons/hero-icon-failed.svg"
                  alt=""
                  width={17}
                  height={17}
                />
                <p className="text-[9.3px] font-medium text-chalk-green-100">
                  Failed Tests
                </p>
              </div>
              <div className="mt-[10px] h-[7px] w-[70px] rounded-full bg-white/20" />
            </div>
          </div>
        </div>

        {/* Floating Bar - 89% (bottom center) */}
        <div className="pointer-events-none absolute left-[541px] top-[847px] flex h-[196px] w-[340px] items-center justify-center">
          <div className="-rotate-[30deg] skew-x-[30deg] scale-y-[0.87]">
            <div className="w-[337px] space-y-[7px] rounded-xl bg-white/10 p-3 shadow-[0px_4px_25px_rgba(0,0,0,0.15)]  border border-white/20">
              <div className="h-[7px] w-[70px] rounded-full bg-white/20" />
              <div className="h-[18px] w-full overflow-hidden rounded-[3px] bg-white/20">
                <div className="flex h-full w-[271px] items-center justify-end rounded-[3px] bg-green-600 p-[3px]">
                  <span className="text-[9.3px] font-bold uppercase tracking-wide text-chalk-green-500">
                    89%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Card - Pass (bottom right) */}
        <div className="pointer-events-none absolute left-[1166px] top-[832px] flex h-[152px] w-[263px] items-center justify-center">
          <div className="-rotate-[30deg] skew-x-[30deg] scale-y-[0.87]">
            <div
              className="flex h-[32px] w-[271px] items-center rounded-[7px] px-2 border border-white/20"
              style={{
                backgroundImage:
                  "linear-gradient(161.5deg, rgba(0,220,70,0.2) 3.78%, rgba(0,118,38,0.2) 92.35%)",
              }}
            >
              <div className="h-[5px] w-[30px] rounded-full bg-white/30 " />
              <div className="ml-[86px] h-[5px] w-[30px] rounded-full bg-white/30" />
              <p className="ml-auto text-[9.3px] font-medium text-green-300">
                Pass
              </p>
            </div>
          </div>
        </div>
      </HeroScaleWrapper>
    </section>
  );
}
