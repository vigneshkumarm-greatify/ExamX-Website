/* eslint-disable @next/next/no-img-element */

import Image from "next/image";

export default function MultiDeviceCard() {
  return (
    <div className="relative overflow-hidden rounded-[20px] bg-chalk-green-500 md:h-[500px]">
      {/* Green glow ellipse — offset center-right */}
      <div
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
        style={{
          left: "calc(50% + 45px)",
          top: "calc(50% + 75.67px)",
          width: "348px",
          height: "348px",
        }}
      >
        <div className="absolute inset-[-31.13%]">
          <img
            alt=""
            className="block size-full max-w-none"
            src="/images/decoratives/multi-device-glow.svg"
          />
        </div>
      </div>

      {/* Title block */}
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
        className="absolute h-[261px] w-[437px] -translate-x-1/2 rounded-[12px]"
        style={{
          left: "calc(50% - 57.5px)",
          top: "220.67px",
          backgroundImage:
            "linear-gradient(120.83deg, rgba(0,220,70,0.2) 3.78%, rgba(0,118,38,0.2) 92.35%)",
        }}
      />

      {/* ── DESKTOP (Windows) ── */}
      <div
        className="absolute h-[246px] w-[423px] -translate-x-1/2 overflow-hidden rounded-[8px] bg-[#002b2d]"
        style={{
          left: "calc(50% - 57.5px)",
          top: "227.67px",
        }}
      >
        {/* Desktop blob — large, top-right */}
        <div
          className="absolute"
          style={{
            left: "calc(75% + 14.94px)",
            top: "-202.04px",
            width: "333.911px",
            height: "333.911px",
          }}
        >
          <div className="absolute inset-[-0.64%]">
            <img
              alt=""
              className="block size-full max-w-none"
              src="/images/decoratives/multi-device-blob-sm.svg"
            />
          </div>
        </div>

        {/* Desktop blob — small, top-left */}
        <div
          className="absolute"
          style={{
            left: "-15.51px",
            top: "-67.97px",
            width: "175.1px",
            height: "175.1px",
          }}
        >
          <div className="absolute inset-[-1.22%]">
            <img
              alt=""
              className="block size-full max-w-none"
              src="/images/decoratives/multi-device-blob-sm.svg"
            />
          </div>
        </div>

        {/* Desktop blob — small, bottom-center */}
        <div
          className="absolute"
          style={{
            left: "calc(25% + 28.47px)",
            top: "159.75px",
            width: "175.1px",
            height: "175.1px",
          }}
        >
          <div className="absolute inset-[-1.22%]">
            <img
              alt=""
              className="block size-full max-w-none"
              src="/images/decoratives/multi-device-blob-sm.svg"
            />
          </div>
        </div>

        {/* Small decorative dot */}
        <div
          className="absolute"
          style={{
            left: "calc(41.67% + 1.99px)",
            top: "51.22px",
            width: "33.978px",
            height: "33.978px",
          }}
        >

        </div>

        {/* Glass blur overlay */}
        <div
          className="absolute left-0 top-0 h-[246px] w-[455px] rounded-[8px]"
          style={{
            backdropFilter: "blur(87.706px)",
            WebkitBackdropFilter: "blur(87.706px)",
            backgroundColor: "rgba(0,55,58,0.44)",
          }}
        />

        {/* Windows tag */}
        <div
          className="absolute left-2 top-2 z-20 rounded px-2 border border-white/30 bg-white/10 shadow-[0_1.5px_8px_rgba(0,0,0,0.07)] backdrop-blur-[8px]"
          style={{
            WebkitBackdropFilter: "blur(8px)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 2px 12px 0 rgba(0,0,0,0.10)",
          }}
        >
          <span className="text-xs font-medium text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.18)]">
            Windows
          </span>
        </div>


        {/* Green logo mark at bottom */}
        <div
          className="absolute"
          style={{ inset: "65.59% -21.49% -63.15% 50.9%" }}
        >
          <div className="flex size-full items-center justify-center">
            <div className="h-[240.005px] w-[298.621px] -scale-y-100 flex-none">
              <div className="relative size-full">
                <img
                  alt=""
                  className="absolute block size-full max-w-none"
                  src="/images/decoratives/multi-device-logo-mark.svg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content layout — centered */}
        <div
          className="absolute z-20 flex w-[350.826px] items-center gap-[24.433px] -translate-x-1/2 -translate-y-1/2"
          style={{
            left: "calc(54.17% - 3.13px)",
            top: "calc(50% - 3.5px)",
          }}
        >
          {/* Left — branding + hero text */}
          <div className="w-[154px] shrink-0">
            <Image
              src="/images/logos/examx-logo.svg"
              alt=""
              width={100}
              height={100}
            />

            <p className="mt-[9.084px] w-[168.835px] text-[14.966px] font-semibold leading-[1.2] tracking-[-0.3px] text-white">
              Revolutionise your academic experience with Greatify
            </p>
          </div>

          {/* Right — popup form */}
          <DesktopPopupForm />
        </div>
      </div>

      {/* ── TABLET ── */}
      {/* Tablet outer frame (gradient border) */}
      <div
        className="absolute -translate-x-1/2 rounded-[9.763px] shadow-[0_4px_15px_rgba(0,0,0,0.5)]"
        style={{
          left: "calc(50% + 162px)",
          top: "191.33px",
          width: "180px",
          height: "227px",
          backgroundImage:
            "linear-gradient(105.79deg, rgba(0,220,70,0.2) 3.78%, rgba(0,118,38,0.2) 92.35%)",
        }}
      />

      {/* Tablet inner screen */}
      <div
        className="absolute z-20 -translate-x-1/2 overflow-hidden rounded-[7.137px]"
        style={{
          left: "calc(50% + 160.9px)",
          top: "197.03px",
          width: "168.419px",
          height: "215.609px",
          backgroundImage:
            "linear-gradient(106.49deg, #00dc46 21.38%, #00373a 68.01%)",
        }}
      >
        {/* Tablet decorative blobs */}
        <TabletBlobs />

        {/* Tablet branding */}
        <div
          className="absolute -translate-x-1/2 flex flex-wrap items-start justify-center gap-[1.993px]"
          style={{ left: "calc(50% - 3.37px)", top: "33.01px" }}
        >
         <Image
              src="/images/logos/examx-logo.svg"
              alt=""
              width={60}
              height={80}
            />
        </div>

        {/* Tablet login form */}
        <div
          className="absolute -translate-x-1/2"
          style={{
            left: "calc(50% - 3.03px)",
            top: "69.58px",
            width: "119.537px",
            height: "118.588px",
          }}
        >
          <TabletPopupForm />
        </div>

        {/* Tablet home indicator */}
        <div
          className="absolute -translate-x-1/2"
          style={{
            left: "calc(50% - 3.03px)",
            bottom: "1.51px",
            width: "198.837px",
            height: "3.122px",
          }}
        >
          <div
            className="absolute -translate-x-1/2 flex items-center justify-center"
            style={{
              left: "calc(50% + 0.08px)",
              bottom: "1.15px",
              width: "51.763px",
              height: "0.904px",
            }}
          >
            <div className="h-[0.904px] w-[51.763px] rounded-[100px] bg-white" />
          </div>
        </div>
      </div>

      {/* Tablet tag — absolute on the card level */}
      <div
        className="absolute z-30 rounded backdrop-blur-sm bg-white/20 border border-white/30 shadow-[0_1px_8px_0_rgba(0,0,0,0.12)] px-1 "
        style={{
          left: "434px",
          top: "184.33px",
          boxShadow: "0 4px 24px 0 rgba(108, 255, 188, 0.20)",
        }}
      >
        <span className="text-xs text-white font-medium">Tablet</span>
      </div>

      {/* ── MOBILE ── */}
      {/* Mobile outer frame (gradient border) */}
      <div
        className="absolute -translate-x-1/2 rounded-[6.065px] shadow-[0_2.485px_9.317px_rgba(0,0,0,0.5)]"
        style={{
          left: "calc(50% + 227.5px)",
          top: "319.67px",
          width: "81px",
          height: "139px",
          backgroundImage:
            "linear-gradient(101.74deg, rgba(0,220,70,0.2) 3.78%, rgba(0,118,38,0.2) 92.35%)",
        }}
      />

      {/* Mobile inner screen */}
      <div
        className="absolute z-20 -translate-x-1/2 overflow-hidden rounded-[4.433px]"
        style={{
          left: "calc(50% + 227.5px)",
          top: "322.67px",
          width: "75px",
          height: "133px",
          backgroundImage:
            "linear-gradient(102.06deg, #00dc46 21.38%, #00373a 68.01%)",
        }}
      >
        {/* Mobile decorative blobs */}
        <MobileBlobs />

        {/* Mobile branding */}
        <div
          className="absolute -translate-x-1/2 flex flex-wrap items-start justify-center gap-[1.238px] mt-2"
          style={{ left: "calc(50% - 2.27px)", top: "20.04px" }}
        >
          <Image
              src="/images/logos/examx-logo.svg"
              alt=""
              width={50}
              height={100}
            />
        </div>

        {/* Mobile login form */}
        <div
          className="absolute -translate-x-1/2"
          style={{
            left: "calc(50% - 0.5px)",
            top: "46.42px",
            width: "58px",
            height: "66.156px",
          }}
        >
          <MobilePopupForm />
        </div>

        {/* Mobile home indicator */}
        <div
          className="absolute -translate-x-1/2"
          style={{
            left: "calc(50% - 2.06px)",
            bottom: "2.48px",
            width: "123.507px",
            height: "1.939px",
          }}
        >
          <div
            className="absolute -translate-x-1/2 flex items-center justify-center"
            style={{
              left: "calc(50% + 0.05px)",
              bottom: "0.71px",
              width: "32.153px",
              height: "0.561px",
            }}
          >
            <div className="h-[0.561px] w-[32.153px] rounded-[100px] bg-white" />
          </div>
        </div>
      </div>

      <div
        className="absolute z-30 rounded backdrop-blur-sm bg-white/20 border border-white/30 shadow-[0_1px_8px_0_rgba(0,0,0,0.12)] px-1  "
        style={{
          left: "calc(50% + 207.48px)",
          top: "315.67px",
          boxShadow: "0 4px 24px 0 rgba(108, 255, 188, 0.20)",
        }}
      >
        <span className="text-xs text-white font-medium">Mobile</span>
      </div>
    </div>
  );
}

/* ── Desktop signup popup form ── */
function DesktopPopupForm() {
  return (
    <div className="relative h-[167.582px] w-[157.872px] shrink-0">
      <div className="absolute left-0 top-0 flex w-[157.872px] flex-col items-center gap-[6.265px] rounded-[3.759px] border-[0.313px] border-[#e4e4e7] bg-white p-[6.265px] shadow-[0_0.626px_7.831px_rgba(0,0,0,0.1)]">
        {/* Form content */}
        <div className="relative flex w-full shrink-0 flex-col items-center gap-[6.265px]">
          {/* Heading */}
          <div className="flex shrink-0 flex-col items-center gap-[1.253px]">
            <p className="text-[3.48px] font-bold uppercase leading-[1.2] tracking-[0.035px] text-green-600">
              Create Profile
            </p>
            <p className="text-[6.014px] font-semibold leading-[1.2] tracking-[-0.12px] text-chalk-green-500">
              Welcome!
            </p>
          </div>

          {/* Field: Enter */}
          <DesktopField placeholder="Enter" />

          {/* Field: Select with dropdown */}
          <DesktopField placeholder="Select" hasDropdown />

          {/* Two password fields */}
          <div className="flex w-full shrink-0 flex-col items-center gap-[3.759px]">
            <DesktopPasswordField />
            <DesktopPasswordField />
          </div>
        </div>

        {/* Sign up button */}
        <div
          className="flex h-[13.469px] w-[145.342px] shrink-0 items-center justify-center rounded-[2.506px] border-[0.313px] border-green-600 px-[3.132px] py-[2.506px]"
          style={{
            backgroundImage:
              "linear-gradient(118.82deg, #00dc46 0.45%, #00c13d 100.96%)",
          }}
        >
          <span className="text-[5.01px] font-semibold leading-[1.2] tracking-[-0.1px] text-white">
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
}

function DesktopField({
  placeholder,
  hasDropdown,
}: {
  placeholder: string;
  hasDropdown?: boolean;
}) {
  return (
    <div className="flex w-full shrink-0 flex-col items-start gap-[2.506px]">
      <div className="h-[3px] w-[33px] shrink-0 rounded-[8px] bg-[#e4e4e7]" />
      {hasDropdown ? (
        <div className="flex w-full shrink-0 items-center justify-between rounded-[2.506px] border-[0.313px] border-[#e4e4e7] bg-white px-[2.506px] py-[3.759px]">
          <span className="text-[4.175px] font-medium leading-[1.5] tracking-[-0.04px] text-[#a1a1aa]">
            {placeholder}
          </span>
        </div>
      ) : (
        <div className="flex h-[13.782px] w-full shrink-0 items-center rounded-[2.506px] border-[0.313px] border-[#e4e4e7] bg-white p-[2.506px]">
          <span className="text-[4.175px] font-medium leading-[1.5] tracking-[-0.04px] text-[#a1a1aa]">
            {placeholder}
          </span>
        </div>
      )}
    </div>
  );
}

function DesktopPasswordField() {
  return (
    <div className="flex h-[20.36px] w-full shrink-0 flex-col items-start gap-[2.506px]">
      <div className="h-[3px] w-[33px] shrink-0 rounded-[8px] bg-[#e4e4e7]" />
      <div className="flex w-full shrink-0 items-center justify-between rounded-[2.506px] border-[0.313px] border-[#e4e4e7] bg-white py-[3.759px] pl-[2.506px] pr-[3.759px]">
        <div className="flex min-h-px min-w-px flex-1 items-center gap-[2.506px]">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-[2px] h-[2px] shrink-0 rounded-full bg-[#000606]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Tablet login popup form ── */
function TabletPopupForm() {
  return (
    <div
      className="absolute flex w-[119.537px] flex-col items-center gap-[4.744px] rounded-[2.846px] border-[0.237px] border-[#e4e4e7] bg-white pb-[4.744px] pt-[11.384px] px-[4.744px] shadow-[0_1.338px_6.691px_rgba(0,0,0,0.2)]"
      style={{ left: "0px", top: "16.6px" }}
    >
      {/* User avatar circle */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-[#f9f7e8] p-[6px]"
        style={{
          left: "calc(50% + 0.68px)",
          top: "calc(50% - 50.91px)",
          width: "22.769px",
          height: "22.769px",
        }}
      >
        <img
          alt=""
          className="w-full h-full object-cover"
          src="/images/illustrations/multi-device-user-sync-tablet.svg"
          style={{ inset: "22.63% 25.01% 25% 24.97%" }}
        />
      </div>

      <div className="relative flex w-full shrink-0 flex-col items-center gap-[4.744px]">
        {/* Heading */}
        <div className="flex shrink-0 flex-col items-center gap-[0.949px]">
          <p className="text-[2.635px] font-bold uppercase leading-[1.2] tracking-[0.026px] text-green-500">
            Login
          </p>
          <div className="h-[1.338px] w-[30.33px] shrink-0 rounded-[3.568px] bg-[#e7e7e7]" />
        </div>

        {/* School org row */}
        <div className="flex shrink-0 items-center gap-[1.897px]">
          <div className="relative size-[8.538px] shrink-0 rounded-full bg-[#d3caf0]">
            <div className="absolute left-[2.1px] top-[2px] size-[4.46px] overflow-hidden">
              <img
                alt=""
                className="absolute block size-full max-w-none"
                src="/images/illustrations/multi-device-school.svg"
                style={{ inset: "3.57%" }}
              />
            </div>
          </div>
          <div className="flex shrink-0 flex-col gap-[1.338px]">
            <div className="h-[1.338px] w-[16.949px] shrink-0 rounded-[3.568px] bg-[#efecfa]" />
            <div className="h-[1.338px] w-[10.705px] shrink-0 rounded-[3.568px] bg-[#efecfa]" />
          </div>
        </div>

        {/* User ID field */}
        <TabletField label="User ID" />

        {/* Password field + forgot password line */}
        <div className="flex w-full shrink-0 flex-col items-end gap-[2.846px]">
          <TabletPasswordField />
          <div className="h-[1.338px] w-[10.705px] shrink-0 rounded-[3.568px] bg-[#e7e7e7]" />
        </div>
      </div>

      {/* Login button */}
      <div
        className="flex h-[10.199px] w-full shrink-0 items-center justify-center rounded-[1.897px] border-[0.237px] border-green-600 bg-red-300 "
        style={{
          backgroundImage:
            "linear-gradient(118.82deg, #00dc46 0.45%, #00c13d 100.96%)",
        }}
      >
        <span className="text-[3.79px]  font-semibold leading-[1.2] tracking-[-0.076px] text-white">
          Login
        </span>
      </div>
    </div>
  );
}

function TabletField({ label }: { label: string }) {
  return (
    <div className="flex w-full shrink-0 flex-col items-start gap-[1.897px]">
      <div className="flex shrink-0 items-center justify-center px-[1.897px]">
        <p className="text-[2.635px] font-bold uppercase leading-[1.2] tracking-[0.026px] text-[#71717a]">
          {label}
        </p>
      </div>
      <div className="flex h-[10.436px] w-full shrink-0 items-center rounded-[1.897px] border-[0.237px] border-[#e4e4e7] bg-white p-[1.897px]">
        <div className="h-[1.338px] w-[10.705px] shrink-0 rounded-[3.568px] bg-[#e7e7e7]" />
      </div>
    </div>
  );
}

function TabletPasswordField() {
  return (
    <div className="flex h-[15.416px] w-full shrink-0 flex-col items-start gap-[1.897px]">
      <div className="flex shrink-0 items-center justify-center px-[1.897px]">
        <p className="text-[2.635px] font-bold uppercase leading-[1.2] tracking-[0.026px] text-[#71717a]">
          Password
        </p>
      </div>
      <div className="flex w-full shrink-0 items-center justify-between rounded-[1.897px] border-[0.237px] border-[#e4e4e7] bg-white py-[2.846px] pl-[1.897px] pr-[2.846px]">
        <div className="flex min-h-px min-w-px flex-1 items-center gap-[1.897px]">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-[2px] w-[2px] shrink-0 rounded-full bg-[#e7e7e7]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Mobile login popup form ── */
function MobilePopupForm() {
  return (
    <div
      className="absolute flex w-[67.289px] flex-col items-center gap-[2.67px] rounded-[1.602px] border-[0.134px] border-[#e4e4e7] bg-white pb-[2.67px] pt-[6.408px] px-[2.67px] shadow-[0_0.753px_3.766px_rgba(0,0,0,0.2)]"
      style={{ left: "-4.53px", top: "9.13px" }}
    >


      {/* User avatar circle */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-[#f9f7e8] w-[13.95px] h-[13.95px]  p-[4px] "
        style={{
          left: "calc(50% + 0.88px)",
          top: "calc(50% - 28px)",
        }}
      >
        <img
          alt=""
          className="w-full h-full object-cover"
          src="/images/illustrations/multi-device-user-sync-tablet.svg"
        />
      </div>

      <div className="relative flex w-full shrink-0 flex-col items-center gap-[2.67px]">
        {/* Heading */}
        <div className="flex shrink-0 flex-col items-center gap-[0.534px]">
          <p className="text-[1.483px] font-bold uppercase leading-[1.2] tracking-[0.015px] text-green-500">
            Login
          </p>
          <div className="h-[0.753px] w-[17.073px] shrink-0 rounded-[2.009px] bg-[#e7e7e7]" />
        </div>

        {/* School org row */}
        <div className="flex shrink-0 items-center gap-[1.068px]">
          <div className="relative size-[4.806px] shrink-0 rounded-full bg-[#d3caf0]">
            <div className="absolute left-[1.18px] top-[1.13px] size-[2.511px] overflow-hidden">
              <img
                alt=""
                className="absolute block size-full max-w-none"
                src="/images/illustrations/multi-device-school.svg"
                style={{ inset: "3.57%" }}
              />
            </div>
          </div>
          <div className="flex shrink-0 flex-col gap-[0.753px]">
            <div className="h-[0.753px] w-[9.541px] shrink-0 rounded-[2.009px] bg-[#efecfa]" />
            <div className="h-[0.753px] w-[6.026px] shrink-0 rounded-[2.009px] bg-[#efecfa]" />
          </div>
        </div>

        {/* User ID field */}
        <MobileField label="User ID" />

        {/* Password field + forgot password line */}
        <div className="flex w-full shrink-0 flex-col items-end gap-[1.602px]">
          <MobilePasswordField />
          <div className="h-[0.753px] w-[6.026px] shrink-0 rounded-[2.009px] bg-[#e7e7e7]" />
        </div>
      </div>

      {/* Login button */}
      <div
        className="flex h-[5.741px] w-[61.949px] shrink-0 items-center justify-center rounded-[1.068px] border-[0.134px] border-green-600 px-[1.335px] py-[1.068px]"
        style={{
          backgroundImage:
            "linear-gradient(118.82deg, #00dc46 0.45%, #00c13d 100.96%)",
        }}
      >
        <span className="text-[2.14px] font-semibold leading-[1.2] tracking-[-0.043px] text-white">
          Login
        </span>
      </div>
    </div>
  );
}

function MobileField({ label }: { label: string }) {
  return (
    <div className="flex w-full shrink-0 flex-col items-start gap-[1.068px]">
      <div className="flex shrink-0 items-center justify-center px-[1.068px]">
        <p className="text-[1.483px] font-bold uppercase leading-[1.2] tracking-[0.015px] text-[#71717a]">
          {label}
        </p>
      </div>
      <div className="flex h-[5.874px] w-full shrink-0 items-center rounded-[1.068px] border-[0.134px] border-[#e4e4e7] bg-white p-[1.068px]">
        <div className="h-[0.753px] w-[6.026px] shrink-0 rounded-[2.009px] bg-[#e7e7e7]" />
      </div>
    </div>
  );
}

function MobilePasswordField() {
  return (
    <div className="flex h-[8.678px] w-full shrink-0 flex-col items-start gap-[1.068px]">
      <div className="flex shrink-0 items-center justify-center px-[1.068px]">
        <p className="text-[1.483px] font-bold uppercase leading-[1.2] tracking-[0.015px] text-[#71717a]">
          Password
        </p>
      </div>
      <div className="flex w-full shrink-0 items-center justify-between rounded-[1.068px] border-[0.134px] border-[#e4e4e7] bg-white py-[1.602px] pl-[1.068px] pr-[1.602px]">
        <div className="flex min-h-px min-w-px flex-1 items-center gap-[1.068px]">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="size-[1.068px] shrink-0 rounded-full bg-[#e7e7e7]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Tablet decorative blobs (rotated 42.8deg) ── */
function TabletBlobs() {
  return (
    <>
      <div
        className="absolute -translate-x-1/2 flex items-center justify-center"
        style={{
          left: "calc(50% - 94.55px)",
          bottom: "-41.79px",
          width: "118.486px",
          height: "124.927px",
        }}
      >
        <div className="flex-none rotate-[42.8deg]">
          <div className="relative h-[145.452px] w-[26.794px]">
            <div className="absolute inset-[-15.33%_-83.23%]">
              <img
                alt=""
                className="block size-full max-w-none"
                src="/images/decoratives/multi-device-glow.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute -translate-x-1/2 flex items-center justify-center"
        style={{
          left: "calc(50% + 63.79px)",
          bottom: "167.85px",
          width: "118.486px",
          height: "124.927px",
        }}
      >
        <div className="flex-none rotate-[42.8deg]">
          <div className="relative h-[145.452px] w-[26.794px]">
            <div className="absolute inset-[-15.33%_-83.23%]">
              <img
                alt=""
                className="block size-full max-w-none"
                src="/images/decoratives/multi-device-glow.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute -translate-x-1/2 flex items-center justify-center"
        style={{
          left: "calc(50% - 52.09px)",
          bottom: "-62.23px",
          width: "118.486px",
          height: "124.927px",
        }}
      >
        <div className="flex-none rotate-[42.8deg]">
          <div className="relative h-[145.452px] w-[26.794px]">
            <div className="absolute inset-[-15.33%_-83.23%]">
              <img
                alt=""
                className="block size-full max-w-none"
                src="/images/decoratives/multi-device-glow.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute -translate-x-1/2 flex items-center justify-center"
        style={{
          left: "calc(50% + 73.61px)",
          bottom: "113.88px",
          width: "118.486px",
          height: "124.927px",
        }}
      >
        <div className="flex-none rotate-[42.8deg]">
          <div className="relative h-[145.452px] w-[26.794px]">
            <div className="absolute inset-[-15.33%_-83.23%]">
              <img
                alt=""
                className="block size-full max-w-none"
                src="/images/decoratives/multi-device-glow.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ── Mobile decorative blobs (rotated 42.8deg) ── */
function MobileBlobs() {
  return (
    <>
      <div
        className="absolute -translate-x-1/2 flex items-center justify-center"
        style={{
          left: "calc(50% - 58.91px)",
          bottom: "-26.42px",
          width: "73.597px",
          height: "77.598px",
        }}
      >
        <div className="flex-none rotate-[42.8deg]">
          <div className="relative h-[90.347px] w-[16.643px]">
            <div className="absolute inset-[-15.33%_-83.23%]">
              <img
                alt=""
                className="block size-full max-w-none"
                src="/images/decoratives/multi-device-glow.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute -translate-x-1/2 flex items-center justify-center"
        style={{
          left: "calc(50% + 39.45px)",
          bottom: "103.79px",
          width: "73.597px",
          height: "77.598px",
        }}
      >
        <div className="flex-none rotate-[42.8deg]">
          <div className="relative h-[90.347px] w-[16.643px]">
            <div className="absolute inset-[-15.33%_-83.23%]">
              <img
                alt=""
                className="block size-full max-w-none"
                src="/images/decoratives/multi-device-glow.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute -translate-x-1/2 flex items-center justify-center"
        style={{
          left: "calc(50% - 32.54px)",
          bottom: "-39.12px",
          width: "73.597px",
          height: "77.598px",
        }}
      >
        <div className="flex-none rotate-[42.8deg]">
          <div className="relative h-[90.347px] w-[16.643px]">
            <div className="absolute inset-[-15.33%_-83.23%]">
              <img
                alt=""
                className="block size-full max-w-none"
                src="/images/decoratives/multi-device-glow.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute -translate-x-1/2 flex items-center justify-center"
        style={{
          left: "calc(50% + 45.54px)",
          bottom: "70.27px",
          width: "73.597px",
          height: "77.598px",
        }}
      >
        <div className="flex-none rotate-[42.8deg]">
          <div className="relative h-[90.347px] w-[16.643px]">
            <div className="absolute inset-[-15.33%_-83.23%]">
              <img
                alt=""
                className="block size-full max-w-none"
                src="/images/decoratives/multi-device-glow.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
