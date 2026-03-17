"use client";

import Image from "next/image";
import { useState } from "react";

const tabs = [
  {
    id: "universities",
    label: "Universities",
    icon: "/images/icon-book-reading.svg",
    heading: "Exam integrity at scale,\nevery semester.",
    description:
      "Run semester exams, entrance tests, PhD evaluations, and accreditation assessments across departments all from one platform that integrates with your existing LMS.",
    checklist: [
      "Conduct 100K+ concurrent online exams",
      "AI proctoring with face & gaze detection",
      "Integrates with Moodle, Canvas & Blackboard",
      "Auto-grading with rubric-aware AI evaluation",
    ],
    cta: "Explore Solution",
    pills: [
      { icon: "/images/icon-graduation-cap.svg", text: "Semester exam scheduling & delivery" },
      { icon: "/images/icon-iris-scan-sm.svg", text: "AI proctoring for remote exams" },
      { icon: "/images/icon-contact-book.svg", text: "Question bank with 20+ question types" },
      { icon: "/images/icon-signal-full.svg", text: "Real-time analytics & result dashboards" },
    ],
    pillBg: "bg-gradient-to-b from-purple-100 to-[#b7a7e6]",
    pillTextColor: "text-purple-500",
    pillIconBg: "bg-[rgba(211,202,240,0.2)]",
    checkColor: "bg-purple-100 text-purple-500",
    activeTabBorder: "border-b-2 border-purple-500",
  },
  {
    id: "k12",
    label: "K-12 Schools",
    icon: "/images/icon-school.svg",
    heading: "Simple, secure assessments\nfor every grade.",
    description:
      "From weekly quizzes to board exam prep, give teachers the tools to create, deliver, and grade assessments without IT overhead.",
    checklist: [
      "Age-appropriate exam interfaces",
      "Parent & teacher dashboards",
      "Automated progress tracking",
      "Offline exam support for low-connectivity areas",
    ],
    cta: "Explore Solution",
    pills: [
      { icon: "/images/icon-graduation-cap.svg", text: "Grade-wise assessment scheduling" },
      { icon: "/images/icon-iris-scan-sm.svg", text: "Safe exam browser for students" },
      { icon: "/images/icon-contact-book.svg", text: "Curriculum-aligned question banks" },
      { icon: "/images/icon-signal-full.svg", text: "Parent & teacher report cards" },
    ],
    pillBg: "bg-gradient-to-b from-green-50 to-green-300",
    pillTextColor: "text-green-700",
    pillIconBg: "bg-[rgba(184,245,203,0.2)]",
    checkColor: "bg-green-50 text-green-600",
    activeTabBorder: "border-b-2 border-green-500",
  },
  {
    id: "government",
    label: "Government",
    icon: "/images/icon-building.svg",
    heading: "National-scale recruitment,\nzero compromise.",
    description:
      "Conduct civil service exams, defense recruitment, and public sector assessments with military-grade security and complete auditability.",
    checklist: [
      "Multi-language exam delivery (30+ languages)",
      "Geo-fenced test center management",
      "Complete audit trail & compliance logs",
      "Biometric authentication support",
    ],
    cta: "Explore Solution",
    pills: [
      { icon: "/images/icon-graduation-cap.svg", text: "National exam scheduling at scale" },
      { icon: "/images/icon-iris-scan-sm.svg", text: "Biometric identity verification" },
      { icon: "/images/icon-contact-book.svg", text: "Multi-language question delivery" },
      { icon: "/images/icon-signal-full.svg", text: "Compliance & audit dashboards" },
    ],
    pillBg: "bg-gradient-to-b from-orange-500/20 to-orange-500/40",
    pillTextColor: "text-orange-600",
    pillIconBg: "bg-[rgba(255,138,59,0.15)]",
    checkColor: "bg-orange-500/20 text-orange-600",
    activeTabBorder: "border-b-2 border-orange-500",
  },
  {
    id: "enterprise",
    label: "Enterprise",
    icon: "/images/icon-deepfake.svg",
    heading: "Hire smarter with\nAI-powered assessments.",
    description:
      "From technical coding tests to behavioral assessments, screen candidates at scale with unbiased, data-driven evaluations.",
    checklist: [
      "Custom branding & white-label exams",
      "ATS & HRMS integrations",
      "Skill-based adaptive testing",
      "Candidate experience analytics",
    ],
    cta: "Explore Solution",
    pills: [
      { icon: "/images/icon-graduation-cap.svg", text: "Technical skill assessments" },
      { icon: "/images/icon-iris-scan-sm.svg", text: "AI-powered candidate screening" },
      { icon: "/images/icon-contact-book.svg", text: "Custom branded exam portals" },
      { icon: "/images/icon-signal-full.svg", text: "Hiring analytics & insights" },
    ],
    pillBg: "bg-gradient-to-b from-chalk-green-50 to-chalk-green-100",
    pillTextColor: "text-chalk-green-500",
    pillIconBg: "bg-chalk-green-50",
    checkColor: "bg-chalk-green-50 text-chalk-green-500",
    activeTabBorder: "border-b-2 border-chalk-green-500",
  },
  {
    id: "certification",
    label: "Certification",
    icon: "/images/icon-warranty-badge.svg",
    heading: "Certify with confidence,\nglobally recognized.",
    description:
      "Deliver professional certification exams that meet international standards with secure, scalable infrastructure.",
    checklist: [
      "ISO-compliant exam delivery",
      "Digital certificate generation",
      "Global test center network support",
      "Item banking with psychometric analysis",
    ],
    cta: "Explore Solution",
    pills: [
      { icon: "/images/icon-graduation-cap.svg", text: "Professional certification delivery" },
      { icon: "/images/icon-iris-scan-sm.svg", text: "Secure browser lockdown" },
      { icon: "/images/icon-contact-book.svg", text: "Digital badge & certificate issuing" },
      { icon: "/images/icon-signal-full.svg", text: "Psychometric item analysis" },
    ],
    pillBg: "bg-gradient-to-b from-purple-100 to-[#b7a7e6]",
    pillTextColor: "text-purple-500",
    pillIconBg: "bg-[rgba(211,202,240,0.2)]",
    checkColor: "bg-purple-100 text-purple-500",
    activeTabBorder: "border-b-2 border-purple-500",
  },
  {
    id: "coaching",
    label: "Coaching & EdTech",
    icon: "/images/icon-bag-suitcase.svg",
    heading: "Scale test prep without\nscaling headcount.",
    description:
      "Run mock tests, practice exams, and competitive prep at scale with AI-powered question generation and performance insights.",
    checklist: [
      "AI-generated practice questions",
      "Adaptive difficulty adjustment",
      "Student performance leaderboards",
      "White-label exam portals",
    ],
    cta: "Explore Solution",
    pills: [
      { icon: "/images/icon-graduation-cap.svg", text: "AI-powered mock test creation" },
      { icon: "/images/icon-iris-scan-sm.svg", text: "Adaptive practice exams" },
      { icon: "/images/icon-contact-book.svg", text: "Performance tracking dashboards" },
      { icon: "/images/icon-signal-full.svg", text: "White-label student portals" },
    ],
    pillBg: "bg-gradient-to-b from-green-50 to-green-300",
    pillTextColor: "text-green-700",
    pillIconBg: "bg-[rgba(184,245,203,0.2)]",
    checkColor: "bg-green-50 text-green-600",
    activeTabBorder: "border-b-2 border-green-500",
  },
];

// Stagger positions for the 4 floating pills
const pillPositions = [
  "left-[26%] top-[12%]",
  "left-[-7%] top-[32%]",
  "left-[32%] top-[53%]",
  "left-[10%] top-[73%]",
];

export default function BuiltForOrgs() {
  const [activeTab, setActiveTab] = useState(0);
  const active = tabs[activeTab];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-500 to-chalk-green-500 px-6 pb-[120px] pt-24 md:px-12 lg:px-[120px]">
      {/* Decorative blobs */}
      <Image
        src="/images/org-blob-1.svg"
        alt=""
        width={1066}
        height={919}
        className="pointer-events-none absolute bottom-[-60%] right-[-45%] hidden rotate-[170deg] lg:block"
      />
      <Image
        src="/images/org-blob-2.svg"
        alt=""
        width={1066}
        height={919}
        className="pointer-events-none absolute bottom-[-64%] left-[-37%] hidden -scale-y-100 rotate-[-88deg] lg:block"
      />

      <div className="relative mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-[607px] text-center">
          <h2 className="text-[32px] font-semibold leading-[1.2] tracking-[-0.96px] text-white md:text-[47.78px]">
            Built for every organization
            <br />
            that assesses.
          </h2>
          <p className="mt-3 text-base font-medium leading-[1.5] tracking-[-0.16px] text-chalk-green-50">
            Whether you&apos;re a university running semester exams or a
            government conducting national recruitment, ExamX adapts to your
            scale and needs.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto rounded-t-[20px]">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(i)}
              className={`flex flex-1 items-center justify-center gap-3 whitespace-nowrap px-6 py-4 text-base font-semibold leading-[1.2] tracking-[-0.32px] transition-colors ${
                i === activeTab
                  ? `bg-white text-chalk-green-500 ${tab.activeTabBorder}`
                  : "border-t border-r border-[rgba(255,255,255,0.2)] text-white"
              } ${i === 0 ? "rounded-tl-[20px]" : ""} ${i === tabs.length - 1 ? "rounded-tr-[20px]" : ""}`}
            >
              <span className={`flex h-7 w-7 items-center justify-center overflow-hidden rounded-[5.33px] ${
                i === activeTab ? "bg-[rgba(211,202,240,0.2)]" : "bg-[rgba(184,245,203,0.2)]"
              }`}>
                <Image src={tab.icon} alt="" width={16} height={16} />
              </span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content card */}
        <div className="overflow-hidden rounded-b-[20px] bg-purple-50">
          <div className="flex flex-col lg:flex-row">
            {/* Left content */}
            <div className="flex flex-col gap-8 p-10 lg:w-[52%] lg:p-16">
              <div>
                <h3 className="whitespace-pre-line text-[28px] font-semibold leading-[1.2] tracking-[-0.68px] text-chalk-green-500 md:text-[33.81px]">
                  {active.heading}
                </h3>
                <p className="mt-3 max-w-[426px] text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a]">
                  {active.description}
                </p>
              </div>

              {/* Checklist */}
              <div className="flex flex-col gap-4">
                {active.checklist.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span
                      className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[11px] text-xs font-bold ${active.checkColor}`}
                    >
                      ✓
                    </span>
                    <span className="text-base font-medium leading-[1.5] tracking-[-0.16px] text-chalk-green-500">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold leading-[1.5] tracking-[-0.18px] text-chalk-green-500">
                  {active.cta}
                </span>
                <span className="flex h-[27px] w-[27px] items-center justify-center rounded-full bg-purple-500">
                  <Image
                    src="/images/arrow-right-circle.svg"
                    alt=""
                    width={8}
                    height={8}
                    className="rotate-180"
                  />
                </span>
              </div>
            </div>

            {/* Right — floating pills */}
            <div className="relative hidden min-h-[392px] lg:block lg:w-[48%]">
              <div className={`absolute bottom-0 right-0 top-4 w-[507px] rounded-2xl ${active.pillBg}`}>
                {active.pills.map((pill, i) => (
                  <div
                    key={pill.text}
                    className={`absolute flex items-center gap-2.5 rounded-xl bg-white px-6 py-4 shadow-[0px_4px_50px_0px_rgba(74,38,182,0.2)] ${pillPositions[i]}`}
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-[6px] ${active.pillIconBg}`}
                    >
                      <Image src={pill.icon} alt="" width={16} height={16} />
                    </span>
                    <span
                      className={`whitespace-nowrap text-base font-semibold leading-[1.2] tracking-[-0.16px] ${active.pillTextColor}`}
                    >
                      {pill.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
