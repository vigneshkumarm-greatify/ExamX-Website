import Image from "next/image";

const features = [
  "AI Proctoring",
  "AI Question Generation",
  "AI Essay Evaluation",
  "Secure Browser Lockdown",
  "100K+ Concurrent Scale",
  "30+ Language Support",
  "LMS Integration (Moodle, Canvas)",
  "Accreditation Reporting",
  "Digital Certificates (QR)",
  "Rubric-Based Grading",
  "Plagiarism Detection",
  "API-First Architecture",
];

function CheckIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 6L5 8.5L9.5 3.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FeaturesGrid() {
  return (
    <section
      className="relative overflow-hidden px-6 py-16 md:px-12 md:py-20 xl:px-[120px] xl:py-24"
      style={{
        background:
          "linear-gradient(165.88deg, #00373a 18.064%, #00dc46 131.6%)",
      }}
    >
      {/* Decorative rotated vector */}
      <div
        className="pointer-events-none absolute -bottom-[20%] -right-[10%] h-[600px] w-[600px] rotate-12 opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
        }}
      />

      <Image
        src="/images/common/logo-glass-effect.svg"
        alt=""
        width={800}
        height={919}
        className="pointer-events-none absolute -bottom-70 sm:-bottom-120 right-[30%] translate-x-1/2 rotate-[100deg]  lg:block "
      />

      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 lg:flex-row lg:gap-16">
        {/* Left column — heading + subtitle */}
        <div className="shrink-0 lg:w-[35%]">
          <h2 className="text-[36px] font-semibold leading-[1.2] tracking-[-0.5px] text-white md:text-[47.78px]">
            Everything universities need, built&nbsp;in
          </h2>
          <p
            className="mt-4 text-[16px] font-normal leading-[1.5]"
            style={{ color: "#c2cfd0" }}
          >
            No add-ons, no plugins, no stitching tools together.
          </p>
        </div>

        {/* Right column — feature grid */}
        <div className="grid flex-1 grid-cols-2 max-[500px]:grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-3 rounded-2xl p-4 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)] backdrop-blur-sm border border-white/20 bg-[rgba(211,202,240,0.1)]"
              style={{ background: "rgba(255,255,255,0.1)" }}
            >
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                style={{ background: "rgba(255,255,255,0.2)" }}
              >
                <CheckIcon />
              </span>
              <span className="text-[19.2px] font-semibold leading-[1.3] text-white">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
