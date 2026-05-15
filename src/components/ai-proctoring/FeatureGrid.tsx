"use client";

import SvgIcon from "@/components/common/SvgIcon";

interface Feature {
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "/images/common/icons/icon-warranty-badge.svg",
    iconBg: "rgba(161,161,170,0.15)",
    iconColor: "#71717a",
    title: "Face Detection & Recognition",
    description:
      "Identity verification using deep learning models. Continuous face matching throughout the exam ensures the registered candidate remains present and focused on the test.",
  },
  {
    icon: "/images/common/icons/icon-star-circle.svg",
    iconBg: "rgba(255,180,130,0.2)",
    iconColor: "#ff8a3b",
    title: "Gaze Tracking Algorithms",
    description:
      "Eye movement analysis detecting off-screen looks, reading patterns, and attention drift. Machine learning models identify suspicious gaze patterns that indicate cheating attempts.",
  },
  {
    icon: "/images/common/icons/lockdown-icon-network.svg",
    iconBg: "rgba(155,133,220,0.2)",
    iconColor: "#6240c8",
    title: "Multi-Person Detection",
    description:
      "Instant alerts when additional faces or people appear in the exam environment. Advanced computer vision prevents proxy test-taking and unauthorized assistance.",
  },
  {
    icon: "/images/common/icons/icon-hierarchy-16.svg",
    iconBg: "rgba(0,220,70,0.15)",
    iconColor: "#00b63a",
    title: "Environmental Analysis",
    description:
      "Room scanning, lighting assessment, and background monitoring for exam integrity. AI evaluates environment consistency to detect suspicious setup changes mid-exam.",
  },
  {
    icon: "/images/common/icons/icon-hierarchy-2.svg",
    iconBg: "rgba(0,55,58,0.12)",
    iconColor: "#00373a",
    title: "Real-Time Alerting System",
    description:
      "Instant severity-scored alerts to proctors with evidence snapshots and timestamps. Context-aware flagging reduces false positives while ensuring critical threats are prioritized.",
  },
  {
    icon: "/images/common/icons/icon-toggle.svg",
    iconBg: "rgba(161,161,170,0.15)",
    iconColor: "#71717a",
    title: "Privacy-Preserving AI",
    description:
      "On-device processing where possible, auto-deletion policies, and GDPR-compliant data handling. Your data is your data, we process minimally and delete responsibly.",
  },
];

export default function FeatureGrid() {
  return (
    <section
      id="features"
      className="bg-creme-500 px-6 py-16 md:px-12 md:py-24 xl:px-[100px] xl:py-[120px]"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-neutral-200 p-4 md:p-8"
          >
            {/* Icon box */}
            <div
              className="flex h-16 w-16 items-center justify-center rounded-xl"
              style={{ backgroundColor: feature.iconBg }}
            >
              <SvgIcon
                svgPath={feature.icon}
                color={feature.iconColor}
                width={32}
                height={32}
              />
            </div>

            {/* Title */}
            <h3 className="mt-6 text-[19.2px] font-semibold leading-[1.3] text-chalk-green-500">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="mt-3 text-[16px] font-medium leading-[1.5] text-[#64748b]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
