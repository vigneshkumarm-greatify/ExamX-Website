"use client";

import SvgIcon from "@/components/common/SvgIcon";

/* ── Column definitions ── */

interface OrgColumn {
  icon: string;
  iconBg: string;
  label: string;
  iconColor: string;
}

const columns: OrgColumn[] = [
  { icon: "/images/home/icons/icon-book-reading.svg", iconBg: "bg-[rgba(211,202,240,0.2)]", label: "Universities", iconColor: "#6240c8" },
  { icon: "/images/home/icons/icon-school.svg", iconBg: "bg-[rgba(255,222,200,0.4)]", label: "Schools", iconColor: "#ff8a3b" },
  { icon: "/images/home/icons/icon-building.svg", iconBg: "bg-[rgba(184,245,203,0.2)]", label: "Government", iconColor: "#00DC46" },
  { icon: "/images/home/icons/icon-bag-suitcase.svg", iconBg: "bg-[rgba(219,217,204,0.2)]", label: "Enterprises", iconColor: "#c9c8bb" },
  { icon: "/images/home/icons/icon-warranty-badge.svg", iconBg: "bg-[rgba(211,202,240,0.2)]", label: "Certification", iconColor: "#6240c8" },
  { icon: "/images/home/icons/icon-deepfake.svg", iconBg: "bg-[rgba(145,169,170,0.12)]", label: "EdTech", iconColor: "#00373a" },
];

/* ── Cell value: true = checkmark, false = dash, string = text like "Optional" ── */
type CellValue = true | false | string;

interface FeatureRow {
  name: string;
  /** Values per column: [Universities, Schools, Government, Enterprises, Certification, EdTech] */
  values: [CellValue, CellValue, CellValue, CellValue, CellValue, CellValue];
}

interface CategoryGroup {
  category: string;
  categoryBg: string;
  categoryTextColor: string;
  features: FeatureRow[];
}

const tableData: CategoryGroup[] = [
  {
    category: "AI & Proctoring",
    categoryBg: "bg-green-50",
    categoryTextColor: "text-green-600",
    features: [
      { name: "Agentic AI Proctoring", values: [true, "Optional", true, true, true, "Optional"] },
      { name: "AI Question Generation", values: [true, true, true, true, true, true] },
      { name: "AI Essay & Rubric Evaluation", values: [true, false, true, true, true, false] },
      { name: "Forensic Anomaly Detection", values: [true, false, true, true, true, false] },
    ],
  },
  {
    category: "Delivery & Scale",
    categoryBg: "bg-green-50",
    categoryTextColor: "text-green-600",
    features: [
      { name: "Secure Browser Lockdown (OS-level)", values: [true, "Optional", true, true, true, false] },
      { name: "100K+ Concurrent Scale", values: [true, false, true, true, true, true] },
      { name: "30+ Language Support", values: [true, true, true, true, true, true] },
      { name: "Adaptive Testing (IRT/CAT)", values: [false, false, false, false, true, true] },
    ],
  },
  {
    category: "Analytics & Reporting",
    categoryBg: "bg-orange-50",
    categoryTextColor: "text-orange-600",
    features: [
      { name: "Accreditation Reporting (NAAC/ABET)", values: [true, false, false, false, true, false] },
      { name: "Psychometric Item Analysis", values: [true, false, true, false, true, true] },
      { name: "Competency & Skills Mapping", values: [true, true, true, true, true, true] },
    ],
  },
  {
    category: "Integrations & Security",
    categoryBg: "bg-green-50",
    categoryTextColor: "text-green-600",
    features: [
      { name: "LMS Integrations", values: [true, true, false, false, false, true] },
      { name: "HRMS / ATS Integrations", values: [false, false, false, true, false, false] },
      { name: "White-Label Branding", values: [false, false, true, true, true, true] },
      { name: "On-Premise / Gov-Cloud Deploy", values: [false, false, true, true, false, false] },
    ],
  },
  {
    category: "Credentials & Monetization",
    categoryBg: "bg-creme-500",
    categoryTextColor: "text-chalk-green-500",
    features: [
      { name: "Digital Certificates (QR/Blockchain)", values: [true, true, true, true, true, true] },
      { name: "Built-in Payment & Monetization", values: [false, false, false, false, false, true] },
      { name: "API-First Architecture", values: [true, false, true, true, true, true] },
    ],
  },
];

/* ── Cell renderer ── */

function CellContent({ value }: { value: CellValue }) {
  if (value === true) {
    return (
      <span className="flex size-5 items-center justify-center rounded-full bg-green-500">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path
            d="M2 5l2.5 2.5L8 3"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#a1a1aa]">
        —
      </span>
    );
  }
  return (
    <span className="text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#a1a1aa]">
      {value}
    </span>
  );
}

/* ── Desktop table (hidden on mobile) ── */

function DesktopTable() {
  return (
    <div className="hidden lg:block">
      {/* Header row */}
      <div className="flex items-end gap-[26px] pb-6 pl-3">
        <p className="w-[224px] shrink-0 text-[19.2px] font-semibold leading-[1.2] tracking-[-0.384px] text-chalk-green-500">
          Capability
        </p>
        <div className="flex flex-1 items-start">
          {columns.map((col) => (
            <div key={col.label} className="flex flex-1 flex-col items-center gap-5">
              <div
                className={`flex size-16 items-center justify-center overflow-hidden rounded-xl ${col.iconBg}`}
              >
                <span className="w-8 h-auto">
                  <SvgIcon
                    svgPath={col.icon}
                    color={col.iconColor}
                    fillColor={col.iconColor}
                  />
                </span>
              </div>
              <span className="text-base font-semibold leading-[1.2] tracking-[-0.32px] text-chalk-green-500">
                {col.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Category groups */}
      {tableData.map((group) => (
        <div key={group.category}>
          {/* Category header bar */}
          <div className={`rounded px-3 py-3 ${group.categoryBg}`}>
            <p className={`text-[13.33px] font-semibold leading-[1.2] tracking-[-0.133px] ${group.categoryTextColor}`}>
              {group.category}
            </p>
          </div>

          {/* Feature rows */}
          {group.features.map((row, i) => (
            <div
              key={row.name}
              className={`flex items-center gap-[26px] pl-3 py-5 ${
                i < group.features.length - 1 ? "border-b border-[#f4f4f5]" : ""
              }`}
            >
              <p className="w-[224px] shrink-0 text-[13.33px] font-medium leading-[1.5] tracking-[-0.133px] text-chalk-green-500">
                {row.name}
              </p>
              <div className="flex flex-1">
                {row.values.map((val, j) => (
                  <div key={j} className="flex flex-1 items-center justify-center">
                    <CellContent value={val} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ── Mobile table (visible on mobile/tablet, scrollable) ── */

function MobileTable() {
  return (
    <div className="lg:hidden overflow-x-auto [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none" }}>
      <div className="min-w-[700px]">
        {/* Header row */}
        <div className="flex items-end gap-4 pb-4 pl-3">
          <p className="w-[160px] shrink-0 text-[16px] font-semibold leading-[1.2] tracking-[-0.32px] text-chalk-green-500">
            Capability
          </p>
          <div className="flex flex-1 items-start">
            {columns.map((col) => (
              <div key={col.label} className="flex flex-1 flex-col items-center gap-3">
                <div
                  className={`flex size-10 items-center justify-center overflow-hidden rounded-lg ${col.iconBg}`}
                >
                  <span className="w-[22px] h-auto">
                    <SvgIcon
                      svgPath={col.icon}
                      color={col.iconColor}
                      fillColor={col.iconColor}
                    />
                  </span>
                </div>
                <span className="text-[11.11px] font-semibold leading-[1.2] tracking-[-0.11px] text-chalk-green-500">
                  {col.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Category groups */}
        {tableData.map((group) => (
          <div key={group.category}>
            <div className={`rounded px-3 py-2.5 ${group.categoryBg}`}>
              <p className={`text-[11.11px] font-semibold leading-[1.2] tracking-[-0.11px] ${group.categoryTextColor}`}>
                {group.category}
              </p>
            </div>

            {group.features.map((row, i) => (
              <div
                key={row.name}
                className={`flex items-center gap-4 pl-3 py-3.5 ${
                  i < group.features.length - 1 ? "border-b border-[#f4f4f5]" : ""
                }`}
              >
                <p className="w-[160px] shrink-0 text-[12px] font-medium leading-[1.5] tracking-[-0.12px] text-chalk-green-500">
                  {row.name}
                </p>
                <div className="flex flex-1">
                  {row.values.map((val, j) => (
                    <div key={j} className="flex flex-1 items-center justify-center">
                      <CellContent value={val} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Section ── */

export default function PricingTable() {
  return (
    <section className="bg-white px-6 py-16 md:px-12 md:py-20 xl:px-[100px] xl:py-[120px]">
      <div className="mx-auto max-w-[1200px]">
        <DesktopTable />
        <MobileTable />
      </div>
    </section>
  );
}
