"use client";

import { ChevronRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { useState } from "react";
import SvgIcon from "./SvgIcon";

const ICON_BOOK_READING = {
  viewBox: "0 0 27.3464 27.8043",
  strokeWidth: 2,
  paths: [
    "M12.9636 6.19114C10.4706 3.44776 7.12528 1.62529 3.46838 1.01836C2.41794 0.869601 1.56115 1.72155 1.44887 2.77214C0.853308 8.34482 0.84745 11.4601 1.44887 17.0327C1.44356 17.9086 2.15492 18.7079 3.0255 18.8042C5.07864 19.0827 7.04376 19.745 8.82514 20.7408",
    "M12.9648 9.42636V6.1912",
    "M24.4796 17.0328C25.175 11.4642 25.2138 8.34116 24.4796 2.77224C24.3916 2.10456 23.5106 0.869695 22.46 1.01846C18.8032 1.62539 15.4578 3.44784 12.9648 6.19124",
    "M26.3246 26.8042C26.6706 22.6214 22.836 19.8591 18.3247 19.8591V14.6126C18.3247 13.2319 17.2054 12.1126 15.8247 12.1126C14.444 12.1126 13.3247 13.2319 13.3247 14.6126V22.8042L12.3238 23.2332C10.7863 23.892 9.9423 25.3304 9.90038 26.8042",
  ],
};

const ICON_SCHOOL = {
  viewBox: "0 0 16.1904 17.1192",
  strokeWidth: 1.33333,
  paths: [
    "M8.16671 3.33678C9.19041 3.41834 10.1104 3.41834 11.1341 3.33678C11.2267 2.43916 11.2267 1.62545 11.1341 0.727831C10.1104 0.646279 9.19041 0.646279 8.16671 0.72783C8.0742 1.62545 8.0742 2.43916 8.16671 3.33678Z",
    "M4.37153 9.83055C3.51703 9.8513 2.98319 9.87915 2.10736 9.91407C1.46658 9.93961 0.923777 10.431 0.837517 11.102C0.609717 12.874 0.609717 13.3634 0.837517 15.1355C0.923778 15.8065 1.46658 16.2978 2.10736 16.3234C6.42846 16.4956 9.76194 16.4956 14.083 16.3234C14.7238 16.2978 15.2667 15.8065 15.3529 15.1355C15.5807 13.3634 15.5807 12.874 15.3529 11.102C15.2667 10.431 14.7238 9.93962 14.083 9.91407C13.2069 9.87914 12.6777 9.85129 11.823 9.83053C11.8057 9.45968 11.7841 9.07995 11.7583 8.68689C11.5543 4.12723 4.64121 4.11667 4.43669 8.67938C4.41061 9.07513 4.38889 9.45734 4.37153 9.83055Z",
    "M8.09733 2.03255V5.26232",
    "M4.39643 9.40549V16.4014",
    "M8.09505 13.7311V16.4523",
    "M11.7933 9.40549V16.4014",
    "M8.09478 10.4928C8.96668 10.4928 9.45713 9.97491 9.45713 9.05416C9.45713 8.13343 8.96668 7.61552 8.09478 7.61552C7.22287 7.61552 6.73242 8.13343 6.73242 9.05416C6.73242 9.97491 7.22287 10.4928 8.09478 10.4928Z",
  ],
};

const ICON_BUILDING = {
  viewBox: "0 0 15.1427 16.2849",
  strokeWidth: 1.33333,
  paths: [
    "M1.29488 2.66738C0.659268 6.22805 0.492566 11.3166 0.856196 14.6156C0.920248 15.1968 1.42126 15.6181 2.00596 15.6181H13.1367C13.7215 15.6181 14.2224 15.1968 14.2865 14.6156C14.6501 11.3166 14.4834 6.22805 13.8478 2.66738C13.6925 1.79765 13.014 1.13931 12.1392 1.01548C10.9009 0.840156 9.14935 0.666667 7.57133 0.666667C5.99331 0.666667 4.24181 0.840156 3.00345 1.01548C2.12869 1.13931 1.45014 1.79765 1.29488 2.66738Z",
    "M9.36535 8.74031H10.5615",
    "M5.77666 13.5251V15.6182H9.365V13.5251C9.365 12.5342 8.56173 11.7309 7.57083 11.7309C6.57994 11.7309 5.77666 12.5342 5.77666 13.5251Z",
    "M4.58088 5.15207H5.777",
    "M9.36535 5.15207H10.5615",
    "M4.58088 8.74031H5.777",
  ],
};

const ICON_DEEPFAKE = {
  viewBox: "0 0 16.7692 15.935",
  strokeWidth: 1.375,
  paths: [
    "M14.2075 12.8189V10.7701C14.8995 10.7991 15.2462 10.7351 15.6629 10.446C16.0355 10.1876 16.1593 9.70032 16.0373 9.26367C14.8439 4.99794 12.9919 0.6875 7.65318 0.6875V15.2475H11.7789C13.1201 15.2475 14.2075 14.1602 14.2075 12.8189Z",
    "M11.9411 7.37189V7.56833",
    "M3.50726 4.40803C4.1772 4.40803 4.55405 4.03119 4.55405 3.36124C4.55405 2.69129 4.1772 2.31445 3.50726 2.31445C2.83731 2.31445 2.46047 2.69129 2.46047 3.36124C2.46047 4.03119 2.83731 4.40803 3.50726 4.40803Z",
    "M1.73429 9.29492C2.40423 9.29492 2.78108 8.91808 2.78108 8.24814C2.78108 7.57819 2.40423 7.20135 1.73429 7.20135C1.06434 7.20135 0.6875 7.57819 0.6875 8.24814C0.6875 8.91808 1.06434 9.29492 1.73429 9.29492Z",
    "M2.57153 14.1818C3.24148 14.1818 3.61832 13.805 3.61832 13.1351C3.61832 12.4652 3.24148 12.0882 2.57153 12.0882C1.90159 12.0882 1.52475 12.4652 1.52475 13.1351C1.52475 13.805 1.90159 14.1818 2.57153 14.1818Z",
    "M4.55453 3.36073H7.65333",
    "M5.78305 6.00453H7.65299",
    "M5.63615 13.1348V10.7047H4.30607",
    "M3.61956 13.1349H7.65337",
    "M2.78175 8.24763H7.65342",
  ],
};

const ICON_WARRANTY_BADGE = {
  viewBox: "0 0 16.3202 16.3202",
  strokeWidth: 1.375,
  paths: [
    "M0.974312 8.92062C0.592058 8.47588 0.591848 7.81953 0.973972 7.37467C1.2475 7.05623 1.52151 6.74341 1.79669 6.43551C1.71348 6.03644 1.63357 5.63356 1.5567 5.22589C1.44803 4.6496 1.77602 4.08109 2.32938 3.88689C2.72547 3.74787 3.11917 3.61398 3.51142 3.48493C3.63889 3.09771 3.77114 2.70885 3.9084 2.31734C4.10243 1.76393 4.67074 1.43557 5.24707 1.54407C5.65262 1.62042 6.05368 1.69987 6.45118 1.7827C6.75402 1.51222 7.06162 1.24286 7.37467 0.973972C7.81953 0.591848 8.47588 0.592058 8.92062 0.974312C9.23524 1.24473 9.54421 1.51539 9.84823 1.78699C10.2525 1.70262 10.6604 1.62173 11.0729 1.54407C11.6492 1.43557 12.2175 1.76393 12.4116 2.31734C12.5488 2.70885 12.681 3.09771 12.8085 3.48493C13.2008 3.61398 13.5945 3.74787 13.9906 3.88689C14.544 4.08109 14.8719 4.6496 14.7633 5.22589C14.6851 5.64056 14.6037 6.05027 14.519 6.45606C14.7953 6.7652 15.0707 7.07945 15.3459 7.39956C15.7281 7.84432 15.7284 8.50066 15.3462 8.94552C15.0727 9.26401 14.7986 9.57687 14.5233 9.8848C14.6066 10.2839 14.6865 10.6867 14.7634 11.0944C14.8721 11.6707 14.5441 12.2393 13.9907 12.4334C13.5945 12.5725 13.2007 12.7064 12.8084 12.8355C12.6809 13.2226 12.5487 13.6115 12.4114 14.003C12.2174 14.5564 11.6491 14.8847 11.0728 14.7763C10.6673 14.6999 10.2663 14.6205 9.86886 14.5377C9.56606 14.8081 9.25851 15.0774 8.94552 15.3462C8.50065 15.7284 7.84432 15.7281 7.39956 15.3459C7.08496 15.0755 6.77602 14.8048 6.47203 14.5333C6.06774 14.6177 5.65977 14.6985 5.24717 14.7763C4.67084 14.8847 4.10254 14.5564 3.9085 14.003C3.77125 13.6115 3.63901 13.2226 3.51154 12.8355C3.11921 12.7064 2.72545 12.5725 2.32927 12.4334C1.77591 12.2393 1.44792 11.6707 1.5566 11.0944C1.63481 10.6796 1.71617 10.2698 1.80095 9.86386C1.52466 9.5548 1.24937 9.24065 0.974312 8.92062Z",
    "M5.26955 9.05576L7.20374 11.0504C8.1139 8.4359 8.87189 7.28863 10.5886 5.73137",
  ],
};

const ICON_BAG_SUITCASE = {
  viewBox: "0 0 14.4785 14.1695",
  strokeWidth: 1.3125,
  paths: [
    "M7.23911 3.48464C5.55327 3.48464 3.79104 3.48464 2.31377 3.73217C1.60567 3.8508 1.04784 4.35775 0.895817 5.01688C0.656252 6.05549 0.656252 7.02429 0.656252 8.49893C0.656252 9.97358 0.656252 10.9423 0.895817 11.981C1.04784 12.6401 1.60567 13.147 2.31377 13.2657C3.79104 13.5132 5.55327 13.5132 7.23911 13.5132C8.92496 13.5132 10.6872 13.5132 12.1644 13.2657C12.8726 13.147 13.4304 12.6401 13.5824 11.981C13.8219 10.9423 13.8219 9.97358 13.8219 8.49893C13.8219 7.02429 13.8219 6.05549 13.5824 5.01688C13.4304 4.35775 12.8726 3.8508 12.1644 3.73217C10.6872 3.48464 8.92496 3.48464 7.23911 3.48464Z",
    "M4.49543 3.48482V2.79911C4.49543 1.61564 5.51878 0.65625 6.78115 0.65625H7.69543C8.9578 0.65625 9.98114 1.61564 9.98114 2.79911V3.48482",
    "M0.66433 7.08482L6.51945 8.91725C6.98922 9.06427 7.49722 9.06427 7.96699 8.91725L13.8221 7.08482",
  ],
};

const tabs = [
  {
    id: "universities",
    label: "Universities",
    iconData: ICON_BOOK_READING,
    activeIconColor: "#7c3aed",
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
      { icon: "/images/icons/icon-graduation-cap.svg", text: "Semester exam scheduling & delivery" },
      { icon: "/images/icons/icon-iris-scan-sm.svg", text: "AI proctoring for remote exams" },
      { icon: "/images/icons/icon-contact-book.svg", text: "Question bank with 20+ question types" },
      { icon: "/images/icons/icon-signal-full.svg", text: "Real-time analytics & result dashboards" },
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
    iconData: ICON_SCHOOL,
    activeIconColor: "#16a34a",
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
      { icon: "/images/icons/icon-graduation-cap.svg", text: "Grade-wise assessment scheduling" },
      { icon: "/images/icons/icon-iris-scan-sm.svg", text: "Safe exam browser for students" },
      { icon: "/images/icons/icon-contact-book.svg", text: "Curriculum-aligned question banks" },
      { icon: "/images/icons/icon-signal-full.svg", text: "Parent & teacher report cards" },
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
    iconData: ICON_BUILDING,
    activeIconColor: "#ea580c",
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
      { icon: "/images/icons/icon-graduation-cap.svg", text: "National exam scheduling at scale" },
      { icon: "/images/icons/icon-iris-scan-sm.svg", text: "Biometric identity verification" },
      { icon: "/images/icons/icon-contact-book.svg", text: "Multi-language question delivery" },
      { icon: "/images/icons/icon-signal-full.svg", text: "Compliance & audit dashboards" },
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
    iconData: ICON_DEEPFAKE,
    activeIconColor: "#00373a",
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
      { icon: "/images/icons/icon-graduation-cap.svg", text: "Technical skill assessments" },
      { icon: "/images/icons/icon-iris-scan-sm.svg", text: "AI-powered candidate screening" },
      { icon: "/images/icons/icon-contact-book.svg", text: "Custom branded exam portals" },
      { icon: "/images/icons/icon-signal-full.svg", text: "Hiring analytics & insights" },
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
    iconData: ICON_WARRANTY_BADGE,
    activeIconColor: "#7c3aed",
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
      { icon: "/images/icons/icon-graduation-cap.svg", text: "Professional certification delivery" },
      { icon: "/images/icons/icon-iris-scan-sm.svg", text: "Secure browser lockdown" },
      { icon: "/images/icons/icon-contact-book.svg", text: "Digital badge & certificate issuing" },
      { icon: "/images/icons/icon-signal-full.svg", text: "Psychometric item analysis" },
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
    iconData: ICON_BAG_SUITCASE,
    activeIconColor: "#16a34a",
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
      { icon: "/images/icons/icon-graduation-cap.svg", text: "AI-powered mock test creation" },
      { icon: "/images/icons/icon-iris-scan-sm.svg", text: "Adaptive practice exams" },
      { icon: "/images/icons/icon-contact-book.svg", text: "Performance tracking dashboards" },
      { icon: "/images/icons/icon-signal-full.svg", text: "White-label student portals" },
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
    <section className="relative overflow-hidden bg-gradient-to-b from-green-500 to-chalk-green-500 px-6 pb-[120px] pt-24 md:px-12 desktop:px-[120px]">
      {/* Decorative blobs */}
      <Image
        src="/images/decoratives/org-blob-1.svg"
        alt=""
        width={800}
        height={919}
        className="pointer-events-none absolute hidden -bottom-120 -right-100 rotate-[100deg] scale-x-[-1] lg:block"
      />
      <Image
        src="/images/decoratives/org-blob-1.svg"
        alt=""
        width={800}
        height={919}
  className="pointer-events-none absolute hidden -bottom-120 -left-100 -rotate-[80deg] scale-x-[-1] lg:block"
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
              className={`flex flex-1 cursor-pointer items-center justify-center gap-3 whitespace-nowrap px-6 py-4 text-base font-semibold leading-[1.2] tracking-[-0.32px] transition-colors ${
                i === activeTab
                  ? `bg-white text-chalk-green-500 ${tab.activeTabBorder}`
                  : "border-t border-r border-[rgba(255,255,255,0.2)] text-white"
              } ${i === 0 ? "rounded-tl-[20px]" : ""} ${i === tabs.length - 1 ? "rounded-tr-[20px]" : ""}`}
            >
              <span className={`flex h-7 w-7 items-center justify-center overflow-hidden rounded-[5.33px] ${
                i === activeTab ? "bg-[rgba(211,202,240,0.2)]" : "bg-[rgba(184,245,203,0.2)]"
              }`}>
                <SvgIcon
                  paths={tab.iconData.paths}
                  viewBox={tab.iconData.viewBox}
                  color={i === activeTab ? tab.activeIconColor : "#ffffff"}
                  width={16}
                  height={16}
                  strokeWidth={tab.iconData.strokeWidth}
                />
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
                  <ChevronRightIcon className="h-5 w-5 text-white" />
                </span>
              </div>
            </div>

            {/* Right — floating pills */}
            <div className="relative hidden h-auto lg:block lg:w-[48%] p-6">
              <div className={`h-full w-full rounded-2xl ${active.pillBg}`}>
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
