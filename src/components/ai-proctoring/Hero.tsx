import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-700 to-[#7557cc] pb-20 pt-32 md:pb-24 md:pt-36 lg:pb-28 lg:pt-44">
      {/* Decorative ellipse blobs (top-center) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-full lg:block">
        <div className="absolute left-[40%] top-[-20%] h-[110%] w-[15%] rounded-full bg-white/[0.04] blur-3xl" />
        <div className="absolute left-[55%] top-[-25%] h-[110%] w-[35%] -rotate-12 rounded-full bg-white/[0.05] blur-3xl" />
        <div className="absolute left-[15%] top-[-25%] h-[110%] w-[35%] rotate-12 rounded-full bg-white/[0.04] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center gap-12 px-6 md:px-12 lg:flex-row lg:items-center lg:gap-16 xl:px-12">
        {/* Left — text block */}
        <div className="flex w-full flex-col items-start gap-9 lg:max-w-[500px]">
          <div className="flex flex-col items-start gap-3">
            {/* Badge */}
            <span className="inline-flex items-center rounded-lg border border-purple-200 bg-white/[0.22] px-2 py-1.5">
              <span className="text-[11.11px] font-semibold leading-[1.2] tracking-[-0.11px] text-white">
                AI Proctoring
              </span>
            </span>

            {/* Heading */}
            <h1 className="text-[28px] font-semibold leading-[1.15] tracking-[-0.56px] text-creme-500 sm:text-[32px] sm:tracking-[-0.64px] md:text-[42px] md:tracking-[-0.84px] xl:text-[47.78px] xl:tracking-[-0.96px]">
              AI That Watches Every Exam. Invisibly.
            </h1>

            {/* Description */}
            <p className="text-base font-medium leading-[1.5] tracking-[-0.16px] text-purple-100">
              Deep learning-powered proctoring with face recognition, gaze tracking,
              and real-time environmental analysis. Detect threats before they impact
              exam integrity.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="#request-demo"
              className="inline-flex items-center justify-center rounded-lg px-4 py-3 text-base font-semibold leading-[1.2] tracking-[-0.32px] text-chalk-green-500 shadow-[0px_4px_7.5px_rgba(0,0,0,0.15)]"
              style={{
                backgroundImage:
                  "linear-gradient(117.94deg, #ffffff 1.33%, #f7f7f7 98.18%)",
              }}
            >
              See AI proctoring in action
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg border border-purple-300 px-4 py-3 text-base font-semibold leading-[1.2] tracking-[-0.32px] text-creme-500 transition-colors hover:bg-white/5"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* Right — dashboard mock */}
        <div className="relative w-full lg:flex-1">
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}

/* ── Dashboard mock — matches Figma node 29232:3144 (full hero composition) ──
   Reference aspect: 743 × 418 ≈ 1.78:1 ── */
function DashboardMock() {
  return (
    <div className="relative aspect-[743/418] w-full">
      {/* "Detecting" iris-scan card — floats above the dashboard, right-of-center */}
      <div className="absolute left-[9%] top-[-7%] z-20 flex h-[23%] w-[17%] flex-col items-center justify-center gap-1 rounded-[6px] bg-purple-500/20 backdrop-blur-sm md:gap-2 md:rounded-[10px]">
        <Image
          src="/images/common/icons/icon-iris-scan.svg"
          alt=""
          width={34}
          height={34}
          className="h-4 w-4 brightness-0 invert md:h-[34px] md:w-[34px]"
        />
        <div className="flex items-center gap-0.5 md:gap-1">
          <span className="text-[8px] font-semibold leading-[1.2] tracking-[-0.16px] text-creme-500 md:text-base md:tracking-[-0.32px]">
            Detecting
          </span>
          <span className="flex gap-px md:gap-[2px]">
            <span className="h-[2px] w-[2px] rounded-full bg-white md:h-[3px] md:w-[3px]" />
            <span className="h-[2px] w-[2px] rounded-full bg-white md:h-[3px] md:w-[3px]" />
            <span className="h-[2px] w-[2px] rounded-full bg-white md:h-[3px] md:w-[3px]" />
          </span>
        </div>
      </div>

      {/* "Face not matching" badge — sits at bottom of dashboard, pointing down at face card */}
      <div className="absolute left-[59%] top-[72%] z-30">
        <div className="relative flex items-center gap-1 rounded-md bg-purple-500 px-1.5 py-1 shadow-[0px_4px_8px_rgba(0,0,0,0.15)] md:px-3 md:py-2">
          <Image
            src="/images/common/icons/icon-danger-circle.svg"
            alt=""
            width={14}
            height={14}
            className="h-2 w-2 brightness-0 invert md:h-3.5 md:w-3.5"
          />
          <span className="text-[7px] font-medium leading-normal tracking-[-0.07px] text-creme-500 md:text-[13.33px] md:tracking-[-0.13px]">
            Face not matching
          </span>
          {/* Pointer tail */}
          <span className="absolute -bottom-[5px] right-3 h-0 w-0 border-x-[5px] border-t-[5px] border-x-transparent border-t-purple-500 md:right-6 md:border-x-[6px] md:border-t-[6px]" />
        </div>
      </div>

      {/* Face-photo card — overlaps bottom-right of dashboard */}
      <div className="absolute right-[-4%] top-[83%] z-20 aspect-[217/123] w-[29%] overflow-hidden rounded-[12px] border-2 border-purple-200 shadow-lg">
        <Image
          src="/images/ai-proctoring/face-photo.jpg"
          alt="Candidate face check"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 220px, 30vw"
        />
        {/* Small danger badge in top-right of card */}
        <div className="absolute right-[3%] top-[5%] flex items-center justify-center rounded-full bg-white/90 p-[2px]">
          <Image
            src="/images/common/icons/icon-danger-circle.svg"
            alt=""
            width={12}
            height={12}
          />
        </div>
      </div>

      {/* Dashboard window */}
      <div className="relative h-full w-full overflow-hidden rounded-xl bg-neutral-100 shadow-[0px_4px_100px_0px_#200375]">
        {/* Purple title bar */}
        <div className="flex h-12 items-center justify-between bg-purple-400 px-3 py-2">
          <div className="flex flex-col gap-1">
            <span className="block h-[6px] w-[43px] rounded-lg bg-white/30" />
            <span className="block h-[6px] w-[24px] rounded-lg bg-white/30" />
          </div>
          <span className="block h-[6px] w-[71px] rounded-lg bg-white/30" />
          <div className="flex flex-col items-end gap-1">
            <span className="block h-[6px] w-[43px] rounded-lg bg-white/30" />
            <span className="block h-[6px] w-[24px] rounded-lg bg-white/30" />
          </div>
        </div>

        {/* Body grid */}
        <div className="flex w-full min-w-0">
          {/* Main content */}
          <div className="min-w-0 flex-1 px-3 pt-3">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-1 text-[8px] font-medium text-[#a1a1aa]">
              <span>My Courses</span>
              <span>›</span>
              <span>Quiz</span>
              <span>›</span>
              <span className="text-green-600">Kinematics</span>
            </div>

            {/* Quiz title row */}
            <div className="mt-2 flex items-center justify-between border-b border-neutral-200 pb-2">
              <span className="text-[14px] font-semibold tracking-[-0.28px] text-chalk-green-500">
                Quiz 1
              </span>
              <span className="block h-[6px] w-[52px] rounded-lg bg-[#e7e7e7]" />
            </div>

            {/* Question header */}
            <div className="mt-3 flex items-center justify-between text-[10px] font-medium leading-[1.5]">
              <div className="flex items-center divide-x divide-[#a1a1aa]">
                <span className="pr-2 text-green-600">Section A Question 1</span>
                <span className="pl-2 text-[#a1a1aa]">Upload Image</span>
              </div>
              <span className="text-[8px] font-medium text-green-600">3 MARK</span>
            </div>

            {/* Question lines + bookmark */}
            <div className="mt-1 flex items-start justify-between">
              <div className="flex w-[60%] flex-col gap-1">
                <span className="block h-[6px] w-full rounded-lg bg-[#e7e7e7]" />
                <span className="block h-[6px] w-[62%] rounded-lg bg-[#e7e7e7]" />
              </div>
              {/* Bookmark icon */}
              <svg
                viewBox="0 0 13 13"
                className="h-[13px] w-[13px] shrink-0 text-[#71717a]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M3.5 1.5h6a1 1 0 0 1 1 1v9l-4-2.5-4 2.5v-9a1 1 0 0 1 1-1z" />
              </svg>
            </div>

            {/* Answer text area */}
            <div className="relative mt-3 rounded-md border border-green-500 bg-white p-2 shadow-[0px_0px_1px_rgba(0,220,70,0.7)]">
              <p className="text-[8.34px] leading-[1.5] tracking-[-0.08px] text-[#121212]">
                This is the answer you are currently entering.
              </p>
              <div className="mt-3 inline-flex items-center gap-2 rounded-sm border border-neutral-100 bg-neutral-50 p-1">
                {/* Bold */}
                <span className="flex h-[10px] w-[10px] items-center justify-center text-[8px] font-bold leading-none text-[#71717a]">
                  B
                </span>
                {/* Italic */}
                <span className="flex h-[10px] w-[10px] items-center justify-center text-[8px] font-medium italic leading-none text-[#71717a]">
                  I
                </span>
                {/* Bulleted list */}
                <span className="flex h-[10px] w-[10px] flex-col items-end justify-center gap-px">
                  <span className="block h-px w-[7px] rounded-sm bg-[#71717a]" />
                  <span className="block h-px w-[7px] rounded-sm bg-[#71717a]" />
                  <span className="block h-px w-[7px] rounded-sm bg-[#71717a]" />
                </span>
                {/* Numbered list */}
                <span className="flex h-[10px] w-[10px] flex-col items-end justify-center gap-px">
                  <span className="block h-px w-[5px] rounded-sm bg-[#71717a]" />
                  <span className="block h-px w-[7px] rounded-sm bg-[#71717a]" />
                  <span className="block h-px w-[5px] rounded-sm bg-[#71717a]" />
                </span>
              </div>

            </div>
          </div>

          {/* Sidebar */}
          <div className="flex w-[25%] shrink-0 flex-col gap-2 bg-neutral-50 p-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-medium text-[#71717a]">
                Time left:
              </span>
              <span className="text-[12px] font-semibold tracking-[-0.24px] text-orange-500">
                0:18:32
              </span>
            </div>

            {/* Exam details card */}
            <div className="flex gap-2 rounded-md bg-chalk-green-500 p-2">
              <div className="flex flex-1 flex-col gap-1 border-r border-chalk-green-400 px-1">
                <span className="text-[7px] font-medium text-chalk-green-300">
                  Total time
                </span>
                <span className="block h-[5px] w-full rounded-lg bg-chalk-green-300" />
              </div>
              <div className="flex flex-1 flex-col gap-1 px-1">
                <span className="text-[7px] font-medium text-chalk-green-300">
                  Total marks
                </span>
                <span className="block h-[5px] w-full rounded-lg bg-chalk-green-300" />
              </div>
            </div>

            {/* Question grid */}
            <div className="rounded-md border border-neutral-200 bg-white p-2 shadow-sm">
              <span className="text-[10px] font-semibold text-chalk-green-500">
                Questions
              </span>
              <span className="mt-2 block h-[5px] w-full rounded-lg bg-neutral-200" />
              {/* 8 active answered (green) + 1 review (orange) + 1 current (filled dark) + 7 unanswered placeholders */}
              <div className="mt-2 grid grid-cols-6 gap-1">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <span
                    key={n}
                    className="flex aspect-square items-center justify-center rounded-sm border border-green-500 text-[7px] font-medium text-chalk-green-500"
                  >
                    {n}
                  </span>
                ))}
                <span className="flex aspect-square items-center justify-center rounded-sm border border-orange-500 text-[7px] font-medium text-chalk-green-500">
                  7
                </span>
                <span className="flex aspect-square items-center justify-center rounded-sm bg-chalk-green-500 text-[7px] font-medium text-white">
                  8
                </span>
                {Array.from({ length: 7 }).map((_, i) => (
                  <span
                    key={`empty-${i}`}
                    className="flex aspect-square items-center justify-center rounded-sm border border-neutral-200"
                  >
                    <span className="block h-[2px] w-[7px] rounded bg-[#e7e7e7]" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
