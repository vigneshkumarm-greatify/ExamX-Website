/*
  Quiz Dashboard Mock — recreated 1:1 from Figma node 559:2560 (742.76 × 418 frame).
  All sizes match Figma scaled to the parent width; the mock auto-scales by virtue
  of `aspect-[743/418]` on the outer card.
*/

export default function QuizDashboardMock() {
  return (
    <div
      className="relative mx-auto w-full max-w-[742px] overflow-hidden rounded-t-xl bg-neutral-100 "
      style={{ aspectRatio: "743 / 418" }}
    >
      <div className="w-full h-full z-1 absolute shadow30"></div>
      <div>
        {/* Top header bar (48px) */}
        <div className="absolute inset-x-0 top-0 flex h-12 items-center gap-[225px] bg-chalk-green-500 px-[10.69px] py-[8.55px]">
          <div className="flex w-[43px] shrink-0 flex-col gap-1">
            <div className="h-1.5 w-full rounded-lg bg-white opacity-30" />
            <div className="h-1.5 w-[24px] rounded-lg bg-white opacity-30" />
          </div>
          <div className="h-1.5 w-[71px] shrink-0 rounded-lg bg-white opacity-30" />
          <div className="flex w-[43px] shrink-0 flex-col gap-1">
            <div className="h-1.5 w-full rounded-lg bg-white opacity-30" />
            <div className="h-1.5 w-[24px] rounded-lg bg-white opacity-30" />
          </div>
        </div>

        {/* Main column wrapper */}
        <div className="absolute inset-x-0 top-12 bottom-0 flex">
          {/* Left content area */}
          <div className="relative flex-1 pl-[10.01px] pr-[10.01px]">
            {/* Breadcrumbs (top: 47.56-48 ≈ 0) */}
            <div className="flex items-center gap-[5px] py-[5px] text-[6.95px] font-medium leading-[1.3] tracking-[-0.07px] text-neutral-400">
              <span>My Courses</span>
              <Chevron />
              <span>Quiz</span>
              <Chevron />
              <span className="text-green-600">Kinematics</span>
            </div>

            {/* Quiz 1 row */}
            <div className="mt-[19px] flex items-center justify-between border-b border-neutral-200 pb-[7.5px]">
              <p className="text-[14.42px] font-semibold leading-[1.2] tracking-[-0.29px] text-chalk-green-500">
                Quiz 1
              </p>
              <div className="h-1.5 w-[52px] rounded-lg bg-[#e7e7e7]" />
            </div>

            {/* Question header + bookmark */}
            <div className="mt-[20px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <p className="border-r border-neutral-400 pr-[7.5px] text-[10.01px] font-medium leading-[1.5] tracking-[-0.1px] text-green-600">
                    Section A Question 1
                  </p>
                  <p className="pl-[7.5px] text-[10.01px] font-medium leading-[1.5] tracking-[-0.1px] text-neutral-400">
                    Upload Image
                  </p>
                </div>
                <p className="text-[8.34px] font-medium leading-[1.5] tracking-[-0.08px] text-green-600">
                  3 MARK
                </p>
              </div>

              {/* Question bars + bookmark */}
              <div className="mt-[5px] flex items-start justify-between">
                <div className="flex w-[280px] flex-col gap-[4px]">
                  <div className="h-1.5 w-full rounded-lg bg-[#e7e7e7]" />
                  <div className="h-1.5 w-[174px] rounded-lg bg-[#e7e7e7]" />
                </div>
                <BookmarkIcon />
              </div>
            </div>

            {/* Answer textarea (h=125.15 in Figma, scaled) */}
            <div className="relative mt-[10px] flex h-[125px] flex-col justify-between rounded-[5px] border-[0.626px] border-green-500 bg-white p-[7.5px] shadow-[0px_0px_0.94px_rgba(0,220,70,0.7)]">
              <p className="flex-1 text-[8.34px] font-medium leading-[1.5] tracking-[-0.08px] text-black">
                This is the answer you are currently entering.
              </p>
              {/* Format toolbar */}
              <div className="flex items-start gap-[7.5px] rounded-[2.5px] border-[0.626px] border-neutral-100 bg-neutral-50 p-[2.5px] self-start">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="size-[10px]">
                    <FormatGlyph index={i} />
                  </div>
                ))}
              </div>
            </div>

            {/* Previous / Next buttons */}
            <div className="mt-[10px] flex items-start justify-end gap-[5px] border-t border-neutral-100 pt-[10px]">
              <button
                type="button"
                className="rounded-[5px] border-[0.626px] border-neutral-200 bg-neutral-50 px-[10.01px] py-[7.5px] text-[10.01px] font-semibold leading-[1.2] tracking-[-0.2px] text-chalk-green-500"
              >
                Previous
              </button>
              <button
                type="button"
                className="rounded-[5px] border-[0.626px] border-green-600 px-[10.01px] py-[7.5px] text-[10.01px] font-semibold leading-[1.2] tracking-[-0.2px] text-white"
                style={{
                  backgroundImage:
                    "linear-gradient(94.43deg, #00dc46 0.45%, #00c13d 100.96%)",
                }}
              >
                Next
              </button>
            </div>
          </div>

          {/* Right side panel */}
          <aside className="flex h-full w-[181px] shrink-0 flex-col gap-[7.5px] bg-neutral-50 px-[10.01px] pt-[10.01px]">
            {/* Time left row */}
            <div className="flex items-center justify-between">
              <p className="text-[10.01px] font-medium leading-[1.5] tracking-[-0.1px] text-neutral-500">
                Time left:
              </p>
              <div className="flex items-center gap-[7.5px]">
                <LoaderRing />
                <p className="text-[12.01px] font-semibold leading-[1.2] tracking-[-0.24px] text-orange-500">
                  0:18:32
                </p>
              </div>
            </div>

            {/* Exam details — chalk-green card with 2 cols */}
            <div className="flex w-[160.82px] items-stretch rounded-[7.5px] bg-chalk-green-500 p-[7.5px]">
              <div className="flex flex-1 flex-col justify-end gap-2 border-r-[0.626px] border-chalk-green-400 px-[12.5px] py-[5px]">
                <p className="text-[6.95px] font-medium leading-[1.3] tracking-[-0.07px] text-chalk-green-100">
                  Total time
                </p>
                <div className="h-1.5 w-full rounded-lg bg-chalk-green-300" />
              </div>
              <div className="flex flex-1 flex-col justify-end gap-2 px-[12.5px] py-[5px]">
                <p className="text-[6.95px] font-medium leading-[1.3] tracking-[-0.07px] text-chalk-green-100">
                  Total marks
                </p>
                <div className="h-1.5 w-full rounded-lg bg-chalk-green-300" />
              </div>
            </div>

            {/* Answer sheet card */}
            <div className="flex w-[160.82px] flex-col gap-[12px] rounded-[7.5px] border-[0.626px] border-neutral-200 bg-white p-[7.5px] shadow-[0px_1.25px_7.82px_rgba(0,0,0,0.04)]">
              <p className="text-[12.01px] font-semibold leading-[1.2] tracking-[-0.24px] text-chalk-green-500">
                Questions
              </p>
              <div className="h-1.5 w-full rounded-lg bg-neutral-200" />

              {/* 3×5 grid of question tiles */}
              <div className="flex flex-wrap items-start gap-[5px]">
                {/* 1-6 green border */}
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div
                    key={n}
                    className="flex size-[25px] items-center justify-center rounded-[5px] border-[0.626px] border-green-500"
                  >
                    <span className="text-[6.95px] font-medium leading-[1.3] text-chalk-green-500">
                      {n}
                    </span>
                  </div>
                ))}
                {/* 7 orange border */}
                <div className="flex size-[25px] items-center justify-center rounded-[5px] border-[0.626px] border-orange-500">
                  <span className="text-[6.95px] font-medium leading-[1.3] text-chalk-green-500">
                    7
                  </span>
                </div>
                {/* 8 active — chalk-green solid */}
                <div className="flex size-[25px] items-center justify-center rounded-[5px] bg-chalk-green-500">
                  <span className="text-[6.95px] font-medium leading-[1.3] text-white">
                    8
                  </span>
                </div>
                {/* 9-15 unanswered: gray bar */}
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex size-[25px] items-center justify-center rounded-[5px] border-[0.626px] border-neutral-200"
                  >
                    <div className="h-[3px] w-[9px] rounded-lg bg-[#e7e7e7]" />
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

/* ── Inline icons ── */

function Chevron() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path
        d="M3.5 2.5L6 5L3.5 7.5"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BookmarkIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      className="shrink-0 text-neutral-400"
    >
      <path
        d="M3.5 1.5h6v10l-3-2-3 2v-10z"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LoaderRing() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
      <circle cx="6" cy="6" r="5" stroke="#e4e4e7" strokeWidth="1.2" />
      <path
        d="M6 1a5 5 0 0 1 5 5"
        stroke="#ff8a3b"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FormatGlyph({ index }: { index: number }) {
  // 4 mini placeholder format icons — bold/italic/underline/list style
  if (index === 0)
    return (
      <svg
        viewBox="0 0 10 10"
        fill="none"
        className="size-full text-neutral-500"
      >
        <path
          d="M3 2h2.5a1.5 1.5 0 0 1 0 3H3V2zm0 3h3a1.5 1.5 0 0 1 0 3H3V5z"
          stroke="currentColor"
          strokeWidth="0.6"
        />
      </svg>
    );
  if (index === 1)
    return (
      <svg
        viewBox="0 0 10 10"
        fill="none"
        className="size-full text-neutral-500"
      >
        <path
          d="M4 2h4M2 8h4M6 2L4 8"
          stroke="currentColor"
          strokeWidth="0.6"
          strokeLinecap="round"
        />
      </svg>
    );
  if (index === 2)
    return (
      <svg
        viewBox="0 0 10 10"
        fill="none"
        className="size-full text-neutral-500"
      >
        <path
          d="M3 2v3a2 2 0 0 0 4 0V2M2.5 8h5"
          stroke="currentColor"
          strokeWidth="0.6"
          strokeLinecap="round"
        />
      </svg>
    );
  return (
    <svg viewBox="0 0 10 10" fill="none" className="size-full text-neutral-500">
      <path
        d="M2 3h2M2 5h2M2 7h2M5 3h3M5 5h3M5 7h3"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
