import Image from "next/image";

const integrations = [
  { name: "Moodle", logo: "/images/logos/integrations/logo-moodle.png", w: 50, h: 50, offset: "desktop:mt-[119px]" },
  { name: "Canvas", logo: "/images/logos/integrations/logo-canvas.png", w: 50, h: 50, offset: "desktop:mt-[69px]" },
  { name: "Blackboard", logo: "/images/logos/integrations/logo-blackboard.png", w: 76, h: 58, offset: "desktop:mt-[20px]" },
  {
    name: "Google\nClassroom",
    logo: "/images/logos/integrations/logo-google-classroom.png",
    w: 62,
    h: 54,
    offset: "desktop:mt-0",
  },
  {
    name: "SAP\nSuccessFactors",
    logo: "/images/logos/integrations/logo-sap.png",
    w: 84,
    h: 47,
    offset: "desktop:mt-[20px]",
  },
  { name: "Workday", logo: "/images/logos/integrations/logo-workday.png", w: 49, h: 50, offset: "desktop:mt-[69px]" },
  { name: "REST API", logo: "/images/logos/integrations/logo-rest-api.png", w: 61, h: 50, offset: "desktop:mt-[119px]" },
];

export default function Integrations() {
  return (
    <section className="bg-white px-6 pb-16 pt-16 md:px-12 md:pb-[112px] md:pt-24 desktop:px-[100px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-[591px] text-center md:mb-16">
          <h2 className="text-[32px] font-semibold leading-[1.2] tracking-[-0.96px] text-chalk-green-500 md:text-[47.78px]">
            Works with our existing tools
          </h2>
          <p className="mt-3 text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a]">
            No rip-and-replace. ExamX plugs into your LMS, HRMS, or custom
            system seamlessly.
          </p>
        </div>

        {/* Integration cards — flex wrap on mobile, 7-col grid with arc on desktop */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 desktop:grid desktop:grid-cols-7 desktop:items-start desktop:gap-[43px]">
          {integrations.map((item) => (
            <div
              key={item.name}
              className={`flex   h-[120px] w-[120px] flex-col items-center justify-center gap-2 rounded-xl border border-creme-600 bg-creme-100 px-3 lg:h-[152px] lg:w-[152px] lg:gap-3 lg:px-4 ${item.offset}`}
            >
              <Image
                src={item.logo}
                alt={item.name.replace("\n", " ")}
                width={item.w}
                height={item.h}
                className="object-contain "
              />
              <p className="whitespace-pre-line text-center text-[11px] font-medium leading-[1.5] tracking-[-0.13px] text-[#71717a] lg:text-[13.33px]">
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
