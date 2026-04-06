"use client";

import Image from "next/image";

const bulletPoints = [
  "Tailored solutions for your institution's needs",
  "Expert guidance on AI-driven assessments",
  "Seamless onboarding and dedicated support",
  "Custom integrations with your existing systems",
];

const trustLogos = [
  {
    src: "/images/home/logos/trusted-logos/adani-university.png",
    alt: "Adani University",
    width: 113,
    height: 38,
  },
  {
    src: "/images/home/logos/trusted-logos/srm.png",
    alt: "SRM University",
    width: 120,
    height: 41,
  },
  {
    src: "/images/home/logos/trusted-logos/middlesex-university.png",
    alt: "Middlesex University London",
    width: 108,
    height: 43,
  },
  {
    src: "/images/home/logos/trusted-logos/koshys.png",
    alt: "Koshys Group of Institutions",
    width: 155,
    height: 26,
  },
];

export default function ContactHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-creme-500 px-6 pb-16 pt-[140px] md:px-12 md:pb-[120px] md:pt-[180px] xl:px-[100px]">
      {/* Background curves — rainbow/arc shape */}
      <div className="pointer-events-none absolute inset-0">
        {/* Green accent arc — large ellipse, only top visible */}
        <div
          className="absolute left-[50%] top-[75%] h-[80%] min-[768px]:h-[130%] xl:h-[200%] w-[200%] -translate-x-1/2 rounded-l-[100%] rounded-r-[100%] bg-green-500 md:top-[70%]"
        />
        {/* Dark teal arc — slightly smaller ellipse on top */}
        <div
          className="absolute left-[50%] top-[77%] h-[80%] min-[768px]:h-[130%] xl:h-[200%] w-[195%] -translate-x-1/2 rounded-l-[50%] rounded-r-[55%]  min-[768px]:rounded-r-[53%] xl:rounded-r-[53%] bg-chalk-green-500 md:top-[72%]"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
        {/* Left column — heading, bullets, logos */}
        <div className="flex shrink-0 flex-col gap-6 lg:max-w-[510px]">
          <div className="flex flex-col gap-3">
            <h1 className="text-[32px] font-semibold leading-[1.15] tracking-[-0.96px] text-chalk-green-500 md:text-[47.78px]">
              Explore the benefits of{" "}
              <span className="text-green-500">AI-Driven</span> assessment
            </h1>
            <p className="max-w-[375px] text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a]">
              We&apos;re all ears! Talk to us about your needs and
              we&apos;ll show you how Greatify can help.
            </p>
          </div>

          {/* Bullet points */}
          <ul className="flex flex-col gap-3">
            {bulletPoints.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span className="h-[11px] w-[11px] shrink-0 rounded-full bg-green-500" />
                <span className="text-[13.33px] font-medium leading-[1.4] text-chalk-green-500">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          {/* Trust logos with left fade */}
          <div className="relative mt-2">
            <div className="flex items-center gap-6">
              {trustLogos.map((logo) => (
                <div
                  key={logo.alt}
                  className="flex h-[44px] shrink-0 items-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain opacity-70 grayscale"
                  />
                </div>
              ))}
            </div>
            {/* Left-fading gradient overlay */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-creme-500 to-transparent" />
          </div>
        </div>

        {/* Right column — form card */}
        <div className="w-full rounded-xl border border-[#f4f4f5] bg-white p-6 shadow-[0px_4px_50px_0px_rgba(0,0,0,0.05)] lg:max-w-[588px]">
          <p className="mb-6 text-lg font-medium leading-[1.5] tracking-[-0.18px] text-[#71717a]">
            Trusted by more than 500+ clients worldwide
          </p>

          <form className="flex flex-col gap-3 border-y border-[#f4f4f5] py-6">
            <input
              type="text"
              placeholder="Name"
              className="rounded-lg border border-[#d4d4d8] p-3 text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#52525b] placeholder:opacity-50 focus:border-green-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email address"
              className="rounded-lg border border-[#d4d4d8] p-3 text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#52525b] placeholder:opacity-50 focus:border-green-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Institution name"
              className="rounded-lg border border-[#d4d4d8] p-3 text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#52525b] placeholder:opacity-50 focus:border-green-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Your role"
              className="rounded-lg border border-[#d4d4d8] p-3 text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#52525b] placeholder:opacity-50 focus:border-green-500 focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone no."
              className="rounded-lg border border-[#d4d4d8] p-3 text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#52525b] placeholder:opacity-50 focus:border-green-500 focus:outline-none"
            />
            <textarea
              placeholder="How we can help you?"
              rows={3}
              className="resize-none rounded-lg border border-[#d4d4d8] p-3 text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#52525b] placeholder:opacity-50 focus:border-green-500 focus:outline-none"
            />
          </form>

          <button
            type="submit"
            className="mt-6 w-full rounded-lg px-4 py-3 text-base font-semibold leading-[1.2] tracking-[-0.32px] text-white shadow-[0px_4px_15px_0px_rgba(0,0,0,0.15)]"
            style={{
              backgroundImage:
                "linear-gradient(137.09deg, #00dc46 1.33%, #008f2e 98.18%)",
            }}
          >
            Submit form
          </button>
        </div>
      </div>
    </section>
  );
}
