import DetailCard, {
  type CardTheme,
  type DetailCardData,
} from "@/components/common/DetailCard";

/* ── Card data ── */

const solutionCards: DetailCardData[] = [
  {
    badge: "Universities & Colleges",
    heading: "Accreditation-ready exams, at any scale.",
    description:
      "From semester exams to entrance tests to PhD evaluations run every assessment type with AI-powered integrity monitoring, rubric-aware evaluation, and accreditation-aligned analytics that map directly to NAAC, NBA, and ABET outcomes.",
    features: [
      "100K+ concurrent online exams with zero-downtime delivery",
      "AI proctoring: face match, gaze tracking, audio anomaly & second-screen detection",
      "Category tagging for accreditation auto-maps to NAAC, NBA, ABET standards",
      "Rubric-aware AI evaluation for essays, case studies & vivas",
      "One-click LMS sync with Moodle, Canvas & Blackboard",
    ],
    cta: "Request University Demo",
    ctaHref: "#request-demo",
    dashboardImage: "/images/solutions/cards/Universities-Colleges.png",
    dashboardAlt: "University Dashboard — live exam monitoring and accreditation analytics",
    testimonial: {
      quote:
        "\u201CWe spend 3 months every year compiling exam data for accreditation reports. Half our faculty time goes into manual grading.\u201D",
    },
    theme: {
      cardGradient:
        "linear-gradient(270deg, #efecfa 0%, rgba(239,236,250,0) 100%)",
      badgeBg: "rgba(211,202,240,0.5)",
      badgeBorder: "rgba(183,167,230,0.5)",
      badgeTextColor: "#6240c8",
      checkBg: "bg-purple-100",
      checkColor: "text-purple-500",
      dividerColor: "border-purple-100",
      ctaColor: "text-purple-500",
      ctaArrowBg: "#6240c8",
      testimonialBorder: "border-purple-500",
      imageBg: "linear-gradient(to bottom, #d3caf0, #b7a7e6)",
    },
  },
  {
    badge: "K-12 School",
    heading: "So simple teachers love it, so smart principals trust it.",
    description:
      "Give every teacher a 3-minute exam builder with AI question generation, auto-grading, and beautifully formatted parent reports  while giving school leaders real-time visibility into learning outcomes across classes, subjects, and terms.",
    features: [
      "3-minute exam creation with AI-powered question generation from syllabus",
      "Auto-graded assessments with instant student feedback",
      "Board-aligned for CBSE, ICSE, IB, and state boards",
      "Auto-generated progress reports emailed to parents",
      "Multi-language support for 20+ regional languages",
    ],
    cta: "Get started for Schools",
    ctaHref: "#request-demo",
    dashboardImage: "/images/solutions/cards/K-12-School.png",
    dashboardAlt: "Teacher Dashboard — class performance and progress tracking",
    testimonial: {
      quote:
        "\u201COur teachers shouldn\u2019t need IT training to create a test. And parents keep asking for progress updates we don\u2019t have time to compile.\u201D",
    },
    theme: {
      cardGradient:
        "linear-gradient(270deg, #fff3eb 0%, rgba(255,243,235,0) 100%)",
      badgeBg: "rgba(255,222,200,0.5)",
      badgeBorder: "rgba(255,180,130,0.5)",
      badgeTextColor: "#ff8a3b",
      checkBg: "bg-orange-100",
      checkColor: "text-orange-500",
      dividerColor: "border-orange-100",
      ctaColor: "text-orange-600",
      ctaArrowBg: "#ff8a3b",
      testimonialBorder: "border-orange-500",
      imageBg: "linear-gradient(to bottom, #ffdec8, #ffb482)",
    },
    imageLeft: true,
  },
  {
    badge: "Government & Public Sector",
    heading: "National-scale exams, zero paper leaks.",
    description:
      "Conduct civil service recruitment, licensing exams, and regulatory assessments with military-grade question paper security, 30+ language delivery, complete data sovereignty with on-premise deployment, and tamper-proof audit trails for RTI compliance.",
    features: [
      "Tamper-proof question delivery encrypted until exam start, no human access",
      "30+ language support with full RTL, Indic script, and regional dialect authoring",
      "Complete data sovereignty: on-premise or Indian government cloud deployment",
      "100K+ concurrent candidates with auto-scaling and zero-downtime architecture",
      "Full audit trails for RTI compliance, every click logged and timestamped",
    ],
    cta: "Talk to Government Team",
    ctaHref: "#request-demo",
    dashboardImage: "/images/solutions/cards/Government-Public-Sector.png",
    dashboardAlt: "Recruitment Exam Control — national-scale monitoring and compliance",
    testimonial: {
      quote:
        "\u201CPaper leaks have derailed three of our national exams in the past year. We need a system that\u2019s provably tamper-proof and auditable.\u201D",
    },
    theme: {
      cardGradient:
        "linear-gradient(270deg, #e6fced 0%, rgba(230,252,237,0) 100%)",
      badgeBg: "rgba(184,245,203,0.5)",
      badgeBorder: "rgba(90,233,137,0.5)",
      badgeTextColor: "#00b63a",
      checkBg: "bg-green-200",
      checkColor: "text-green-600",
      dividerColor: "border-green-200",
      ctaColor: "text-green-600",
      ctaArrowBg: "#00b63a",
      testimonialBorder: "border-green-600",
      imageBg: "linear-gradient(to bottom, #b8f5cb, #5ce989)",
    },
  },
  {
    badge: "Corporate & Enterprise",
    heading: "Hire smarter, train faster, measure everything.",
    description:
      "Give every teacher a 3-minute exam builder with AI question generation, auto-grading, and beautifully formatted parent reports  while giving school leaders real-time visibility into learning outcomes across classes, subjects, and terms.",
    features: [
      "3-minute exam creation with AI-powered question generation from syllabus",
      "Auto-graded assessments with instant student feedback",
      "Board-aligned for CBSE, ICSE, IB, and state boards",
      "Auto-generated progress reports emailed to parents",
      "Multi-language support for 20+ regional languages",
    ],
    cta: "Request Enterprise Demo",
    ctaHref: "#request-demo",
    dashboardImage: "/images/solutions/cards/Corporate-Enterprise.png",
    dashboardAlt: "HR Assessment Portal — hiring, L&D and compliance hub",
    testimonial: {
      quote:
        "\u201CWe screen 50,000 candidates a quarter but our hiring assessments are still disconnected from our HRMS. And compliance training completion tracking is a nightmare.\u201D",
    },
    theme: {
      cardGradient:
        "linear-gradient(270deg, #f0efe2 0%, rgba(240,239,226,0) 100%)",
      badgeBg: "rgba(219,217,204,0.5)",
      badgeBorder: "rgba(201,200,187,0.5)",
      badgeTextColor: "#71717a",
      checkBg: "bg-creme-600",
      checkColor: "text-chalk-green-500",
      dividerColor: "border-creme-600",
      ctaColor: "text-chalk-green-500",
      ctaArrowBg: "#00373a",
      testimonialBorder: "border-creme-800",
      imageBg: "linear-gradient(to bottom, #f0efe2, #dbd9cc)",
    },
    imageLeft: true,
  },
  {
    badge: "Certification & Licensure Bodies",
    heading: "High-stakes credentials, psychometric precision.",
    description:
      "Professional certifications, licensure exams, and continuing education programs with validated psychometric item banking, IRT-based adaptive testing, forensic data analysis for anomaly detection, and globally recognized verifiable digital credentials.",
    features: [
      "Psychometric item banking with IRT calibration & difficulty analysis",
      "Computerized Adaptive Testing (CAT) with real-time ability estimation",
      "OS-level secure browser lockdown blocks screen capture, virtual machines & remote access",
      "Forensic data analysis: detect collusion, pre-knowledge & score anomalies",
      "Blockchain-verified digital credentials with QR & API verification",
    ],
    cta: "Partner with ExamX",
    ctaHref: "#request-demo",
    dashboardImage: "/images/solutions/cards/Certification-Licensure-Bodies.png",
    dashboardAlt: "Certification Manager — psychometric analytics and credential issuance",
    testimonial: {
      quote:
        "\u201COur credentialing exams need IRT-calibrated item banks, adaptive delivery, and forensic-level security. Most platforms give us a glorified quiz tool.\u201D",
    },
    theme: {
      cardGradient:
        "linear-gradient(90deg, #efecfa 0%, rgba(239,236,250,0) 100%)",
      badgeBg: "rgba(211,202,240,0.5)",
      badgeBorder: "rgba(183,167,230,0.5)",
      badgeTextColor: "#6240c8",
      checkBg: "bg-purple-100",
      checkColor: "text-purple-500",
      dividerColor: "border-purple-100",
      ctaColor: "text-purple-500",
      ctaArrowBg: "#6240c8",
      testimonialBorder: "border-purple-500",
      imageBg: "linear-gradient(to bottom, #d3caf0, #b7a7e6)",
    },
  },
  {
    badge: "Coaching Institutes & EdTech",
    heading: "Launch test series in hours, not months.",
    description:
      "White-label mock tests, competitive exam prep, and monetizable test series with your branding, built-in payment processing, student leaderboards, and API-first architecture that lets you embed assessments directly into your app or website.",
    features: [
      "White-label test series platform, your brand, your domain, your app",
      "Built-in payment gateway & subscription management for monetization",
      "National-rank leaderboards with percentile scoring & peer benchmarking",
      "API-first architecture: embed exams into any website or mobile app",
      "AI-powered performance analytics & personalized study recommendations",
    ],
    cta: "Explore EdTech Solutions",
    ctaHref: "#request-demo",
    dashboardImage: "/images/solutions/cards/Coaching-Institutes-EdTech.png",
    dashboardAlt: "Test Series Builder — cross-department scheduling and monitoring",
    testimonial: {
      quote:
        "\u201CWe need to launch JEE/NEET mock tests for 100K students yesterday. Building our own system would take 6 months and a full dev team.\u201D",
    },
    theme: {
      cardGradient:
        "linear-gradient(270deg, #f2f5f5 0%, rgba(242,245,245,0) 100%)",
      badgeBg: "rgba(194,207,208,0.5)",
      badgeBorder: "rgba(145,169,170,0.5)",
      badgeTextColor: "#00373a",
      checkBg: "bg-chalk-green-500",
      checkColor: "text-creme-500",
      dividerColor: "border-[rgba(194,207,208,0.5)]",
      ctaColor: "text-chalk-green-500",
      ctaArrowBg: "#00373a",
      testimonialBorder: "border-chalk-green-500",
      imageBg: "linear-gradient(to bottom, #c2cfd0, #91a9aa)",
    },
    imageLeft: true,
  },
];

/* ── Section ── */

export default function SolutionsDetail() {
  return (
    <section className="bg-white px-6 py-16 md:px-12 md:py-20 xl:px-[100px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8">
        {solutionCards.map((card) => (
          <DetailCard key={card.heading} card={card} />
        ))}
      </div>
    </section>
  );
}
