import { PlayIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section className="bg-creme-500 px-6 pb-[120px] pt-24 md:px-12 lg:px-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-9">
        <h2 className="text-center text-[32px] font-semibold leading-[1.2] tracking-[-0.96px] text-chalk-green-500 md:text-[47.78px]">
          Experience Greatify
        </h2>
        <div
          className="relative w-full overflow-hidden rounded-[20px]"
          style={{
            backgroundImage:
              "linear-gradient(114.14deg, #00373a 59.585%, #00dc46 100.58%)",
          }}
        >
          <div className="relative aspect-[1200/538]">
            <Image
              src="/images/home/illustrations/experience-video-bg.png"
              alt="Greatify platform preview"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              draggable={false}
              className="object-cover opacity-100 select-none"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 z-[1]" />
            <button
              type="button"
              aria-label="Play video"
              className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="flex items-center justify-center rounded-full bg-white p-6 cursor-pointer">
                <PlayIcon className="h-6 w-6 text-green-500" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
