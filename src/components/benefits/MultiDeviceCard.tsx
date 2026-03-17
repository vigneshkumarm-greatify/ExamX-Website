export default function MultiDeviceCard() {
  return (
    <div className="relative overflow-hidden rounded-[20px] bg-chalk-green-500 md:h-[500px]">
      {/* Green glow ellipse — offset center-right */}
      <div
        className="pointer-events-none absolute h-[348px] w-[348px]"
        style={{
          left: "calc(50% + 45px)",
          top: "calc(50% + 76px)",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(0,220,70,0.25) 0%, transparent 65%)",
        }}
      />

      {/* Title block — at x=36, y=35 */}
      <div className="relative z-10 px-9 pt-9">
        <h3 className="text-[21.67px] font-semibold leading-normal tracking-[-0.43px] text-creme-500">
          Greatify Multi-device Compatibility
        </h3>
        <p className="mt-2 max-w-[411px] text-base font-medium leading-[1.5] tracking-[-0.16px] text-chalk-green-100">
          Whether your candidates are in a computer lab, at home, or on the go,
          ExamX delivers a secure, consistent exam experience across every
          screen.
        </p>
      </div>

      {/* ── Device mockups — absolute positioned from card top ── */}

      {/* Green gradient backdrop behind desktop */}
      <div
        className="absolute h-[261px] w-[437px] rounded-[12px]"
        style={{
          left: "calc(50% - 57px)",
          top: "221px",
          transform: "translateX(-50%)",
          background:
            "linear-gradient(121deg, rgba(0,220,70,0.2) 4%, rgba(0,118,38,0.2) 92%)",
        }}
      />

      {/* ── DESKTOP (Windows) ── */}
      <div
        className="absolute h-[246px] w-[423px] overflow-hidden rounded-[8px]"
        style={{
          left: "calc(50% - 57px)",
          top: "228px",
          transform: "translateX(-50%)",
        }}
      >
        {/* Background blobs inside desktop */}
        <div
          className="absolute h-[334px] w-[334px] rounded-full"
          style={{
            left: "calc(75% + 15px)",
            top: "-202px",
            background:
              "radial-gradient(circle, rgba(0,220,70,0.4) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute h-[175px] w-[175px] rounded-full"
          style={{
            left: "-16px",
            top: "-68px",
            background:
              "radial-gradient(circle, rgba(0,220,70,0.3) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute h-[175px] w-[175px] rounded-full"
          style={{
            left: "calc(25% + 28px)",
            top: "160px",
            background:
              "radial-gradient(circle, rgba(0,220,70,0.3) 0%, transparent 70%)",
          }}
        />

        {/* Glass blur overlay */}
        <div
          className="absolute inset-0"
          style={{
            backdropFilter: "blur(88px)",
            WebkitBackdropFilter: "blur(88px)",
            backgroundColor: "rgba(0,55,58,0.44)",
          }}
        />

        {/* Windows tag */}
        <div className="absolute left-2 top-2 z-20 rounded bg-[rgba(230,252,237,0.2)] px-1 py-0.5">
          <span className="text-[11.11px] font-semibold leading-[1.2] tracking-[-0.11px] text-white">
            Windows
          </span>
        </div>

        {/* Green logo mark at bottom — large curved shape */}
        <svg
          className="absolute bottom-0 left-[35%] z-10"
          width="300"
          height="240"
          viewBox="0 0 300 240"
          fill="none"
          style={{ transform: "translateX(-50%) scaleY(-1)" }}
        >
          <path
            d="M150 0C67 0 0 67 0 150c0 30 10 58 25 80h250c15-22 25-50 25-80C300 67 233 0 150 0z"
            fill="url(#logoGrad)"
            opacity="0.6"
          />
          <defs>
            <linearGradient id="logoGrad" x1="0" y1="0" x2="300" y2="240">
              <stop offset="0%" stopColor="#00dc46" />
              <stop offset="100%" stopColor="#00373a" />
            </linearGradient>
          </defs>
        </svg>

        {/* Content layout — centered */}
        <div
          className="absolute z-20 flex items-center gap-6"
          style={{
            left: "calc(54% - 3px)",
            top: "calc(50% - 4px)",
            transform: "translate(-50%, -50%)",
            width: "351px",
          }}
        >
          {/* Left — branding + hero text */}
          <div className="w-[154px] shrink-0">
            <div className="flex items-center gap-[2.5px]">
              <div className="h-[23px] w-[23px] shrink-0 rounded-full bg-green-500/30" />
              <div>
                <p className="text-[10.6px] font-semibold leading-[1.2] tracking-[-0.21px] text-white">
                  Greatify
                </p>
                <p className="text-[7.2px] font-semibold leading-[1.2] tracking-[-0.14px] text-green-500">
                  ExamX Platform
                </p>
              </div>
            </div>
            <p className="mt-[9px] w-[169px] text-[14.97px] font-semibold leading-[1.2] tracking-[-0.3px] text-white">
              Revolutionise your academic experience with Greatify
            </p>
          </div>

          {/* Right — popup form */}
          <PopupForm
            type="signup"
            className="w-[158px] shrink-0 rounded-[3.8px] border-[0.31px] border-[#e4e4e7] bg-white p-[6.3px] shadow-[0_0.6px_7.8px_rgba(0,0,0,0.1)]"
          />
        </div>
      </div>

      {/* ── TABLET ── */}
      <div
        className="absolute z-20 w-[180px]"
        style={{ left: "366px", top: "184px" }}
      >
        {/* Tablet tag */}
        <div className="absolute -top-2 right-0 z-30 rounded bg-[rgba(230,252,237,0.2)] px-1 py-0.5">
          <span className="text-[11.11px] font-semibold leading-[1.2] tracking-[-0.11px] text-white">
            Tablet
          </span>
        </div>

        {/* Outer shadow */}
        <div
          className="rounded-[9.8px] p-[6px] shadow-[0_4px_15px_rgba(0,0,0,0.5)]"
          style={{
            background:
              "linear-gradient(106deg, rgba(0,220,70,0.2) 4%, rgba(0,118,38,0.2) 92%)",
          }}
        >
          {/* Screen */}
          <div
            className="relative overflow-hidden rounded-[7.1px]"
            style={{
              background: "linear-gradient(106deg, #00dc46 21%, #00373a 68%)",
            }}
          >
            {/* Branding */}
            <div className="flex items-center justify-center gap-[2px] pt-[26px]">
              <div className="h-[18px] w-[18px] shrink-0 rounded-full bg-green-500/30" />
              <div>
                <p className="text-[8.4px] font-semibold leading-[1.2] tracking-[-0.17px] text-white">
                  Greatify
                </p>
                <p className="text-[5.7px] font-semibold leading-[1.2] tracking-[-0.11px] text-creme-500">
                  ExamX Platform
                </p>
              </div>
            </div>

            {/* Login form popup */}
            <div className="relative mx-auto mt-[12px] w-[120px]">
              {/* User icon circle */}
              <div className="absolute -top-[17px] left-1/2 z-10 h-[23px] w-[23px] -translate-x-1/2 rounded-full bg-creme-500">
                <svg
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-purple-400"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <circle cx="7" cy="5" r="2.5" stroke="currentColor" strokeWidth="1" />
                  <path d="M3 12c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>

              <div className="rounded-[2.8px] border-[0.24px] border-[#e4e4e7] bg-white p-[4.7px] pt-[11px] shadow-[0_1.3px_6.7px_rgba(0,0,0,0.2)]">
                <div className="text-center">
                  <p className="text-[2.6px] font-bold uppercase tracking-[0.03px] text-green-500">
                    Login
                  </p>
                  <div className="mx-auto mt-[1px] h-[1.3px] w-[30px] rounded-full bg-[#e7e7e7]" />
                </div>

                {/* School org row */}
                <div className="mt-[4.7px] flex items-center gap-[1.9px]">
                  <div className="flex h-[8.5px] w-[8.5px] items-center justify-center rounded-full bg-purple-50">
                    <svg width="4.5" height="4.5" viewBox="0 0 10 10" fill="none">
                      <path d="M5 1L1 4v5h3V7h2v2h3V4L5 1z" stroke="#7e62d2" strokeWidth="0.8" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-[1.3px]">
                    <div className="h-[1.3px] w-[17px] rounded-full bg-purple-50" />
                    <div className="h-[1.3px] w-[10.7px] rounded-full bg-purple-50" />
                  </div>
                </div>

                {/* Form fields */}
                <div className="mt-[4.7px] space-y-[3px]">
                  <TabletField label="User ID" />
                  <TabletField label="Password" isPassword />
                </div>

                {/* Login button */}
                <div
                  className="mt-[4.7px] rounded-[1.9px] border-[0.24px] border-green-600 py-[1.9px] text-center"
                  style={{
                    background:
                      "linear-gradient(119deg, #00dc46 0%, #00c13d 100%)",
                  }}
                >
                  <span className="text-[3.8px] font-semibold text-white">
                    Login
                  </span>
                </div>
              </div>
            </div>

            {/* Home indicator */}
            <div className="mx-auto mb-[1.5px] mt-[5px] h-[0.9px] w-[52px] rounded-full bg-white" />
          </div>
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div
        className="absolute z-20"
        style={{ left: "481px", top: "320px" }}
      >
        {/* Mobile tag */}
        <div className="absolute -top-2 right-0 z-30 rounded-[2.5px] bg-[rgba(230,252,237,0.2)] px-1 py-0.5">
          <span className="text-[6.9px] font-semibold leading-[1.2] tracking-[-0.07px] text-white">
            Mobile
          </span>
        </div>

        {/* Outer shadow */}
        <div
          className="w-[81px] rounded-[6.1px] p-[3px] shadow-[0_2.5px_9.3px_rgba(0,0,0,0.5)]"
          style={{
            background:
              "linear-gradient(102deg, rgba(0,220,70,0.2) 4%, rgba(0,118,38,0.2) 92%)",
          }}
        >
          <div
            className="relative overflow-hidden rounded-[4.4px]"
            style={{
              background: "linear-gradient(102deg, #00dc46 21%, #00373a 68%)",
            }}
          >
            {/* Branding */}
            <div className="flex items-center justify-center gap-[1.2px] pt-[14px]">
              <div className="h-[11px] w-[11px] shrink-0 rounded-full bg-green-500/30" />
              <div>
                <p className="text-[5.2px] font-semibold leading-[1.2] tracking-[-0.1px] text-white">
                  Greatify
                </p>
                <p className="text-[3.6px] font-semibold leading-[1.2] tracking-[-0.07px] text-creme-500">
                  ExamX Platform
                </p>
              </div>
            </div>

            {/* Mini popup form */}
            <div className="relative mx-auto mt-[8px] w-[58px]">
              {/* User icon */}
              <div className="absolute -top-[9.5px] left-1/2 z-10 h-[12.8px] w-[12.8px] -translate-x-1/2 rounded-full bg-creme-500">
                <svg
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-purple-400"
                  width="8"
                  height="8"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <circle cx="7" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M3 12c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </div>

              <div className="rounded-[1.6px] border-[0.13px] border-[#e4e4e7] bg-white p-[2.7px] pt-[6px] shadow-[0_0.75px_3.8px_rgba(0,0,0,0.2)]">
                <div className="text-center">
                  <p className="text-[1.5px] font-bold uppercase text-green-500">
                    Login
                  </p>
                  <div className="mx-auto mt-px h-[0.75px] w-[17px] rounded-full bg-[#e7e7e7]" />
                </div>
                <div className="mt-[2.7px] space-y-[1.5px]">
                  <MobileField label="User ID" />
                  <MobileField label="Password" isPassword />
                </div>
                <div
                  className="mt-[2.7px] rounded-[1px] border-[0.13px] border-green-600 py-[1px] text-center"
                  style={{
                    background:
                      "linear-gradient(119deg, #00dc46 0%, #00c13d 100%)",
                  }}
                >
                  <span className="text-[2.1px] font-semibold text-white">
                    Login
                  </span>
                </div>
              </div>
            </div>

            {/* Home indicator */}
            <div className="mx-auto mb-[1px] mt-[3px] h-[0.56px] w-[32px] rounded-full bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Popup form for Desktop (signup) ── */
function PopupForm({ type, className }: { type: "signup"; className: string }) {
  return (
    <div className={className}>
      {/* Green wave decoration at top */}
      <svg
        className="absolute left-0 top-0 w-full opacity-10"
        viewBox="0 0 158 50"
        fill="none"
        preserveAspectRatio="none"
      >
        <path d="M0 50C40 20 80 40 120 10L158 30V0H0z" fill="#00dc46" />
      </svg>

      <div className="relative text-center">
        <p className="text-[3.5px] font-bold uppercase tracking-[0.03px] text-green-600">
          Create Profile
        </p>
        <p className="text-[6px] font-semibold tracking-[-0.12px] text-chalk-green-500">
          Welcome!
        </p>
      </div>
      <div className="mt-[6.3px] space-y-[6.3px]">
        <DesktopField placeholder="Enter" />
        <DesktopField placeholder="Select" hasDropdown />
        <DesktopField isPassword />
        <DesktopField isPassword />
      </div>
      <div
        className="mt-[6.3px] rounded-[2.5px] border-[0.31px] border-green-600 py-[2.5px] text-center"
        style={{
          background: "linear-gradient(119deg, #00dc46 0%, #00c13d 100%)",
        }}
      >
        <span className="text-[5px] font-semibold tracking-[-0.1px] text-white">
          Sign up
        </span>
      </div>
    </div>
  );
}

function DesktopField({
  placeholder,
  hasDropdown,
  isPassword,
}: {
  placeholder?: string;
  hasDropdown?: boolean;
  isPassword?: boolean;
}) {
  return (
    <div>
      <div className="h-[3px] w-[33px] rounded-full bg-[#e4e4e7]" />
      <div className="mt-[1px] flex h-[13.8px] items-center justify-between rounded-[2.5px] border-[0.31px] border-[#e4e4e7] bg-white px-[2.5px]">
        {isPassword ? (
          <>
            <div className="flex gap-[2.5px]">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="h-[2.5px] w-[2.5px] rounded-full bg-[#000606]"
                />
              ))}
            </div>
            <svg width="6" height="6" viewBox="0 0 10 10" fill="none">
              <rect x="1" y="2.5" width="8" height="5.5" rx="1.2" stroke="#00373a" strokeWidth="0.6" />
              <circle cx="5" cy="5.3" r="1" stroke="#00373a" strokeWidth="0.5" />
            </svg>
          </>
        ) : (
          <>
            <span className="text-[4.2px] font-medium text-[#a1a1aa]">
              {placeholder}
            </span>
            {hasDropdown && (
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none">
                <path
                  d="M1.5 2L2.5 3L3.5 2"
                  stroke="#a1a1aa"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function TabletField({ label, isPassword }: { label: string; isPassword?: boolean }) {
  return (
    <div>
      <p className="px-[1.9px] text-[2.6px] font-bold uppercase tracking-[0.03px] text-[#71717a]">
        {label}
      </p>
      <div className="mt-[1px] flex h-[10.4px] items-center justify-between rounded-[1.9px] border-[0.24px] border-[#e4e4e7] bg-white px-[1.9px]">
        {isPassword ? (
          <>
            <div className="flex gap-[1.9px]">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="h-[1.9px] w-[1.9px] rounded-full bg-[#e7e7e7]"
                />
              ))}
            </div>
            <svg width="4.5" height="4.5" viewBox="0 0 10 10" fill="none">
              <rect x="1" y="2.5" width="8" height="5.5" rx="1.2" stroke="#00373a" strokeWidth="0.7" />
              <circle cx="5" cy="5.3" r="1" stroke="#00373a" strokeWidth="0.5" />
            </svg>
          </>
        ) : (
          <div className="h-[1.3px] w-[10.7px] rounded-full bg-[#e7e7e7]" />
        )}
      </div>
    </div>
  );
}

function MobileField({ label, isPassword }: { label: string; isPassword?: boolean }) {
  return (
    <div>
      <p className="px-[1px] text-[1.5px] font-bold uppercase tracking-[0.01px] text-[#71717a]">
        {label}
      </p>
      <div className="mt-px flex h-[5.9px] items-center justify-between rounded-[1px] border-[0.13px] border-[#e4e4e7] bg-white px-[1px]">
        {isPassword ? (
          <>
            <div className="flex gap-[1px]">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="h-[1px] w-[1px] rounded-full bg-[#e7e7e7]"
                />
              ))}
            </div>
            <svg width="2.5" height="2.5" viewBox="0 0 10 10" fill="none">
              <rect x="1" y="2.5" width="8" height="5.5" rx="1.2" stroke="#00373a" strokeWidth="1" />
              <circle cx="5" cy="5.3" r="1" stroke="#00373a" strokeWidth="0.7" />
            </svg>
          </>
        ) : (
          <div className="h-[0.75px] w-[6px] rounded-full bg-[#e7e7e7]" />
        )}
      </div>
    </div>
  );
}
