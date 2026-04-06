import ConcentricCircles from "./ConcentricCircles";

export default function AboutHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 xl:px-[120px] pt-28 md:pt-32 xl:pt-44">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-[32px] md:text-[40px] xl:text-[47.78px] font-semibold leading-[1.2] tracking-[-0.96px] text-chalk-green-500">
            About Greatify
          </h1>
          <p className="mt-3 max-w-[761px] text-[16px] xl:text-[18px] font-medium leading-[1.5] tracking-[-0.18px] text-[#71717a]">
            Greatify is revolutionizing education with AI-powered solutions that
            drive efficiency, enhance learning experiences and promote a
            paperless campus. Since our founding in 2021, we have been dedicated
            to helping schools, colleges, and universities streamline
            administration, optimize learning and simplify assessments.
          </p>
        </div>
      </div>
      <ConcentricCircles />
    </section>
  );
}
