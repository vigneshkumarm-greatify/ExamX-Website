import Image from "next/image";

export default function FinalCta() {
  return (
    <section
      id="request-demo"
      className="relative overflow-hidden bg-gradient-to-b from-[#002b2d] to-chalk-green-500 px-6 pt-20 md:px-12 md:pt-24 xl:px-[100px] xl:pt-[96px]"
    >
      {/* Decorative radial light */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[80%] -translate-x-1/2 rounded-full bg-green-500/15 blur-[100px]" />

      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center gap-16 border-b border-chalk-green-300 pb-20 md:pb-24 xl:pb-[96px]">
        {/* Glass-effect icon */}
        <Image
          src="/images/ai-proctoring/final-cta-icon.svg"
          alt=""
          width={136}
          height={136}
          className="h-[100px] w-[100px] md:h-[120px] md:w-[120px] xl:h-[136px] xl:w-[136px]"
        />

        {/* Heading + button */}
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-center text-[32px] font-semibold leading-[1.2] tracking-[-0.64px] text-creme-500 md:text-[40px] xl:text-[47.78px] xl:tracking-[-0.96px]">
            Ready to Deploy AI Proctoring?
          </h2>
          <a
            href="#book-demo"
            className="inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-base font-semibold leading-[1.2] tracking-[-0.32px] text-white shadow-[0px_4px_15px_rgba(0,55,58,0.3)] transition-shadow hover:shadow-[0px_6px_20px_rgba(0,55,58,0.5)] sm:w-[278px]"
            style={{
              backgroundImage:
                "linear-gradient(124.32deg, #00dc46 1.33%, #008f2e 98.18%)",
            }}
          >
            Book a demo
          </a>
        </div>
      </div>
    </section>
  );
}
