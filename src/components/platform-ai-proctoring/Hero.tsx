import Image from "next/image";
import QuizDashboardMock from "./helperComps/QuizDashboardMock";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-0 md:pt-40 xl:pt-48"
      style={{
        background:
          "linear-gradient(176.9deg, #00373a 43.715%, #00dc46 141.44%)",
      }}
    >

      <div className="pointer-events-none absolute bottom-0 hidden h-[25%] w-full lg:block">
        <Image
          src="/images/common/logo-glass-effect.svg"
          alt=""
          width={1000}
          height={1000}
          className="pointer-events-none absolute -top-20 right-[48%] h-auto w-[80%] max-w-[1200px] translate-x-1/2 rotate-60"
        />
      </div>

   
      {/* Decorative chalk-green sweeping arcs (top corners) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 left-[23%] hidden h-[112px] w-[353px] rounded-[100%] border-t-2 border-chalk-green-400/30 md:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 right-[23%] hidden h-[112px] w-[353px] rounded-[100%] border-t-2 border-chalk-green-400/30 md:block"
      />

      {/* Decorative bottom ellipses (large radial glows) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[40%] left-[15%] hidden h-[870px] w-[567px] rounded-full bg-green-500/15 blur-[120px] md:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[40%] right-[15%] hidden h-[870px] w-[567px] rounded-full bg-green-500/15 blur-[120px] md:block"
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-12 xl:px-[100px]">
        {/* Heading */}
        <h1 className="mx-auto max-w-[600px] text-center text-[34px] font-semibold leading-[1.15] tracking-[-0.95px] text-white md:text-[42px] xl:text-[47.78px]">
          AI Eyes on Every Exam.
          <br />
          Zero Compromise
        </h1>

        {/* Dashboard + AI badge overlay */}
        <div className="relative mt-16 md:mt-28 xl:mt-32">
          <QuizDashboardMock />

          {/* AI badge — sits above the dashboard with its bottom edge flush to the dashboard top */}
          <div className="pointer-events-none absolute -top-[50px] left-1/2 z-20 -translate-x-1/2 md:-top-[68px]">
            <div className="relative">
              <SparkleCluster side="left" />
              <SparkleCluster side="right" />

              <AiBadge />
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}

const SPARKLE_DOTS = [
  { x: 0, y: 12, size: 4, opacity: 1 },
  { x: 8, y: 2, size: 3, opacity: 0.8 },
  { x: 20, y: 6, size: 3, opacity: 0.8 },
  { x: 30, y: 0, size: 3, opacity: 0.7 },
  { x: 42, y: 6, size: 3, opacity: 0.65 },
  { x: 18, y: 20, size: 3, opacity: 0.8 },
  { x: 30, y: 24, size: 3, opacity: 0.7 },
  { x: 44, y: 18, size: 3, opacity: 0.6 },
  { x: 50, y: 28, size: 3, opacity: 0.55 },
];

function SparkleCluster({ side }: { side: "left" | "right" }) {
  const isLeft = side === "left";
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute top-[18px] h-[32px] w-[55px] md:top-[25px] ${
        isLeft ? "right-full mr-[6px] md:mr-[10px]" : "left-full ml-[6px] md:ml-[10px]"
      }`}
    >
      {SPARKLE_DOTS.map((dot, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-green-300"
          style={{
            [isLeft ? "right" : "left"]: `${dot.x}px`,
            top: `${dot.y}px`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            opacity: dot.opacity,
            boxShadow: `0 0 6px 1px rgba(134, 239, 172, ${dot.opacity * 0.9}), 0 0 2px rgba(220, 255, 230, ${dot.opacity})`,
          }}
        />
      ))}
    </div>
  );
}

function AiBadge() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/40 blur-2xl md:h-[260px] md:w-[260px]"
      />
      <div
        className="relative h-[100px] w-[100px] overflow-hidden rounded-[22%] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)] md:h-[136px] md:w-[136px]"
        style={{
          background:
            "linear-gradient(180deg,#06302f 0%,#07332f 20%,#0a4a35 42%,#0f7a3f 64%,#18b24c 84%,#36cf63 100%)",
        }}
      >
        {/* Concave glow band at the bottom */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%]">
          <svg
            viewBox="0 0 200 120"
            preserveAspectRatio="none"
            className="block h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="aiBadgeGlow" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="rgb(235,253,240)" stopOpacity="0.95" />
                <stop offset="35%" stopColor="rgb(205,247,219)" stopOpacity="0.72" />
                <stop offset="65%" stopColor="rgb(165,235,194)" stopOpacity="0.38" />
                <stop offset="100%" stopColor="rgb(120,215,165)" stopOpacity="0" />
              </linearGradient>
              <filter id="aiBadgeGlowSoft" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" />
              </filter>
            </defs>
            <path
              d="M0,120 L0,55 Q100,95 200,55 L200,120 Z"
              fill="url(#aiBadgeGlow)"
              filter="url(#aiBadgeGlowSoft)"
            />
          </svg>
        </div>

        {/* Top vignette for depth */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[22%]"
          style={{
            background:
              "radial-gradient(120% 100% at 50% 0%, rgba(0,0,0,0.30) 0%, transparent 48%)",
          }}
        />

        {/* Centered AI logo */}
        <div className="absolute inset-0 z-5 flex items-center justify-center">
          <Image
            src="/images/common/icons/icon-greatify-ai.svg"
            alt="AI"
            width={80}
            height={80}
            className="h-[60%] w-auto"
          />
        </div>
      </div>
    </div>
  );
}
