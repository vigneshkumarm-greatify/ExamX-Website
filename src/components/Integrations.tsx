import Image from "next/image";

const integrations = [
  { name: "Moodle", logo: "/images/logos/integrations/logo-moodle.png", w: 50, h: 50 },
  { name: "Canvas", logo: "/images/logos/integrations/logo-canvas.png", w: 50, h: 50 },
  { name: "Blackboard", logo: "/images/logos/integrations/logo-blackboard.png", w: 76, h: 58 },
  {
    name: "Google\nClassroom",
    logo: "/images/logos/integrations/logo-google-classroom.png",
    w: 62,
    h: 54,
  },
  {
    name: "SAP\nSuccessFactors",
    logo: "/images/logos/integrations/logo-sap.png",
    w: 84,
    h: 47,
  },
  { name: "Workday", logo: "/images/logos/integrations/logo-workday.png", w: 49, h: 50 },
  { name: "REST API", logo: "/images/logos/integrations/logo-rest-api.png", w: 61, h: 50 },
];

// Arc offsets matching Figma's staggered layout (top margin per card)
const arcOffsets = [119, 69, 20, 0, 20, 69, 119];

export default function Integrations() {
  return (
    <section className="bg-white px-6 pb-[112px] pt-24 md:px-12 lg:px-[120px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-[591px] text-center">
          <h2 className="text-[32px] font-semibold leading-[1.2] tracking-[-0.96px] text-chalk-green-500 md:text-[47.78px]">
            Works with our existing tools
          </h2>
          <p className="mt-3 text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a]">
            No rip-and-replace. ExamX plugs into your LMS, HRMS, or custom
            system seamlessly.
          </p>
        </div>

        {/* Integration cards — arc layout */}
        <div className="flex items-start justify-center gap-[43px]">
          {integrations.map((item, i) => (
            <div
              key={item.name}
              className="flex h-[152px] w-[152px] shrink-0 flex-col items-center justify-center gap-3 rounded-xl border border-creme-600 bg-creme-100 px-4"
              style={{ marginTop: arcOffsets[i] }}
            >
              <Image
                src={item.logo}
                alt={item.name.replace("\n", " ")}
                width={item.w}
                height={item.h}
                className="object-contain"
              />
              <p className="whitespace-pre-line text-center text-[13.33px] font-medium leading-[1.5] tracking-[-0.13px] text-[#71717a]">
                {item.name}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center gap-6">
          <p className="text-center text-[19.2px] font-semibold leading-[1.2] tracking-[-0.38px] text-chalk-green-500">
            Need a custom integration?
          </p>
          <button
            type="button"
            className="rounded-lg border border-chalk-green-400 px-4 py-3 text-base font-semibold leading-[1.2] tracking-[-0.32px] text-chalk-green-500"
          >
            Explore our API Documentation
          </button>
        </div>
      </div>
    </section>
  );
}
