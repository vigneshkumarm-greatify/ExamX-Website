interface CtaSectionProps {
  bgColor?: string;
  id?: string;
}

export default function CtaSection({
  bgColor = "bg-white",
  id,
}: CtaSectionProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden ${bgColor} px-6 py-16 md:px-12 md:py-[120px] xl:px-[100px]`}
    >
      {/* Background curves — rainbow/arc shape */}
      <div className="pointer-events-none absolute inset-0">
        {/* Green accent arc — large ellipse, only top visible */}
        <div
          className="absolute left-[50%] top-[60%] h-[150%] min-[768px]:h-[250%] xl:h-[400%] w-[200%] -translate-x-1/2 rounded-l-[100%] rounded-r-[100%] bg-green-500 md:top-[45%]"
        />
        {/* Dark teal arc — slightly smaller ellipse on top */}
        <div
          className="absolute left-[50%] top-[65%] h-[150%] min-[768px]:h-[250%] xl:h-[400%] w-[195%] -translate-x-1/2 rounded-l-[100%] rounded-r-[82%] min-[768px]:rounded-r-[89%] xl:rounded-r-[93%] bg-chalk-green-500 md:top-[50%]"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
        {/* Left — heading */}
        <div className="flex shrink-0 flex-col gap-3 lg:max-w-[486px]">
          <h2 className="text-[32px] font-semibold leading-[1.2] tracking-[-0.96px] text-chalk-green-500 md:text-[47.78px]">
            Ready to transform your exams with AI?
          </h2>
          <p className="max-w-[410px] text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a]">
            Join 500+ organizations that trust ExamX to author, deliver, proctor,
          </p>
        </div>

        {/* Right — form card */}
        <div className="w-full rounded-xl border border-[#f4f4f5] bg-white p-6 shadow-[0px_4px_50px_0px_rgba(0,0,0,0.05)] lg:w-[486px]">
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
            Book a demo
          </button>
        </div>
      </div>
    </section>
  );
}
