export default function GetStartedCta() {
  return (
    <section className="relative overflow-hidden bg-creme-500 px-6 py-20 md:px-12 md:py-28 xl:px-[100px] xl:py-32">
      {/* ── Decorative perspective grid background ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top grid — converges down toward center */}
        <div className="absolute inset-x-0 top-0 h-1/2 overflow-hidden">
          <div
            className="absolute inset-0 origin-bottom opacity-40"
            style={{
              transform: "perspective(300px) rotateX(-40deg)",
              backgroundImage:
                "linear-gradient(to right, #d4d2c4 1px, transparent 1px), linear-gradient(to bottom, #d4d2c4 1px, transparent 1px)",
              backgroundSize: "25px 25px",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, #f9f7e8 85%)",
            }}
          />
        </div>

        {/* Bottom grid — converges up toward center */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden">
          <div
            className="absolute inset-0 origin-top opacity-40"
            style={{
              transform: "perspective(300px) rotateX(55deg)",
              backgroundImage:
                "linear-gradient(to right, #d4d2c4 1px, transparent 1px), linear-gradient(to bottom, #d4d2c4 1px, transparent 1px)",
              backgroundSize: "25px 25px",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, transparent 0%, #f9f7e8 85%)",
            }}
          />
        </div>

        {/* Side fade vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #f9f7e8 0%, transparent 30%, transparent 70%, #f9f7e8 100%)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center gap-8 text-center">
        {/* Text block */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="max-w-[471px] text-[32px] font-semibold leading-[1.2] tracking-[-0.96px] text-chalk-green-500 md:text-[47.78px]">
            Not sure which solution fits?
          </h2>
          <p className="max-w-[527px] text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a]">
            Talk to our team. We&apos;ll map ExamX to your exact assessment
            workflow and show you how organizations like yours made the switch.
          </p>
        </div>

        {/* CTA button */}
        <a
          href="#request-demo"
          className="inline-block w-full max-w-[278px] rounded-lg px-4 py-3 text-center text-base font-semibold leading-[1.2] tracking-[-0.32px] text-white shadow-[0px_4px_15px_0px_rgba(0,0,0,0.15)]"
          style={{
            backgroundImage:
              "linear-gradient(124.32deg, #00dc46 1.33%, #008f2e 98.18%)",
          }}
        >
          Talk to sales
        </a>
      </div>
    </section>
  );
}
