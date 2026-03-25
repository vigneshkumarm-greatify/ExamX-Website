import Image from "next/image";

export default function MultiDeviceCard() {
  return (
    <div className="relative overflow-hidden rounded-[20px] bg-chalk-green-500 lg:h-[500px] flex flex-col justify-between">
      {/* Title block */}
      <div className="relative z-10 px-6 pt-6 lg:px-9 lg:pt-9">
        <h3 className="text-[21.67px] font-semibold leading-normal tracking-[-0.43px] text-creme-500">
          Greatify Multi-device Compatibility
        </h3>
        <p className="mt-2 max-w-[411px] text-base font-medium leading-[1.5] tracking-[-0.16px] text-chalk-green-100">
          Whether your candidates are in a computer lab, at home, or on the go,
          ExamX delivers a secure, consistent exam experience across every
          screen.
        </p>
      </div>

      {/* Device mockups illustration */}
      <div className="relative overflow-hidden flex justify-center">
        <Image
          src="/images/home/illustrations/multi-device.png"
          alt="Greatify platform on desktop, tablet, and mobile devices"
          width={1072}
          height={587}
          className=" w-full object-contain object-bottom max-w-[500px] px-6 py-6"
        />
      </div>
    </div>
  );
}
