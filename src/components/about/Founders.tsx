import Image from "next/image";

const petals = [
  { angle: -30, xOffset: -300, color: "#00DC46",  },
  { angle: -15, xOffset: -150, color: "#00DC46",  },
  { angle: 0, xOffset: 0, color: "#00DC46",},
  { angle: 15, xOffset: 150, color: "#00DC46",  },
  { angle: 30, xOffset: 300, color: "#00DC46", },
];

const founders = [
  {
    name: "Dinesh Kumar",
    title: "CEO, CTO & Co-founder",
    image: "/images/about/founder-dinesh.png",
    bio: "Dinesh Kumar, the CEO, CTO and Co-founder of Greatify, holds a Master's degree in Computer Science from the University of Southern California. With over 10 years of experience in software engineering at NVIDIA, he brings deep expertise in cloud computing and artificial intelligence to make education more accessible and impactful. As a Silicon Valley professional and USC alumnus, he is committed to leveraging technology to solve real-world challenges. Dinesh's passion for driving transformative advancements in education fuels his mission to reshape the future of learning.",
  },
  {
    name: "Vyshnavi Narayanan",
    title: "CCO & Co-founder",
    image: "/images/about/founder-vyshnavi.png",
    bio: "Vyshnavi Narayanan, CCO of Greatify, is an alumna of the Academy of Art University, San Francisco. With extensive experience, including working for a Fortune 100 company, she brings a deep passion for product design and an exceptional eye for detail. Recognized with multiple awards for her innovative designs, Vyshnavi has built a strong track record in conceptualizing and developing creative product solutions. She constantly pushes the boundaries of design by experimenting with new processes to achieve excellence. Her mission is to merge creativity and expertise to revolutionize education, crafting programs and solutions that make learning more engaging and impactful for institutions.",
    readMore: true,
  },
];

export default function Founders() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(153.27deg, #00373a 41.58%, #00dc46 118.1%)",
        }}
      />

      {/* Decorative arcs at top — CSS border-based */}
      <div className="pointer-events-none absolute top-6 md:top-10 lg:top-15 inset-0">
        {/* Outer arc — dark teal */}
        <div
          className="absolute left-1/2 z-100 -translate-x-1/2 w-[250%] h-[120%] sm:h-[150%] md:w-[180%] md:h-[200%] lg:w-[150%] lg:h-[300%] rounded-[50%] "
          style={{ border: "150px solid #00373a", bottom: "calc(100% - 80px)" }}
        />
        {/* Inner arc — green gradient stroke */}
        <div
          className="absolute left-1/2 z-20 -translate-x-1/2 w-[200%] h-[100%] sm:h-[130%] md:w-[150%] md:h-[180%] lg:w-[120%] lg:h-[250%] rounded-[50%]"
          style={{
            bottom: "calc(100% - 100px)",
            padding: "120px",
            background: "linear-gradient(90deg, #04AA39 0%, #80FFA9 49%, #04AA39 100%)",
            WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 120px), #000 calc(100% - 120px))",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 120px), #000 calc(100% - 120px))",
          }}
        />
          
        <div className="z-10 w-[400px] h-[712px] absolute -top-[40%] left-[50%] -translate-x-1/2 bg-green-500 rounded-[60%_60%_60%_60%_/_60%_60%_60%_60%] blur-[100px] opacity-80"></div>
       
      </div>

      {/* Decorative leaf/petal fan at bottom — 5 petals with separate origins */}
      <div className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2  block">
        {petals.map((petal) => (
          <div
            key={petal.angle}
            className="absolute bottom-0 rounded-[80%_80%_80%_80%_/_60%_60%_60%_60%] blur-[20px] opacity-20"
            style={{
              height: 500, 
              width: 110, 
              backgroundColor: petal.color,
              left: `calc(50% + ${petal.xOffset}px)`,
              transformOrigin: "bottom center",
              transform: `translateX(-50%) rotate(${petal.angle}deg)`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-10 md:px-12 md:py-16 xl:px-[100px] xl:py-24 mt-40">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-stretch lg:justify-center">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="w-full max-w-[486px] rounded-2xl p-5 md:p-6 lg:p-8 bg-[#002B2D]/20 border-white/20 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-md"
              style={{
                border: "0.7px solid #315D5F"
              }}
            >
              {/* Header: avatar + name/title */}
              <div className="flex items-center gap-3 md:gap-4">
                <div className="size-[80px] md:size-[100px] lg:size-[120px] shrink-0 overflow-hidden rounded-xl bg-green-500">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={132}
                    height={132}
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[19px] md:text-[22px] font-semibold leading-[1.2] tracking-[-0.553px] text-creme-500 lg:text-[25px] xl:text-[27.65px]">
                    {founder.name}
                  </p>
                  <p className="text-[12px] text-chalk-green-100 font-medium leading-[1.5] tracking-[-0.133px] text-chalk-green-200 md:text-[13.33px]">
                    {founder.title}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <p className="mt-4 md:mt-6 text-[14px] md:text-[16px] font-medium leading-[1.5] tracking-[-0.18px] text-chalk-green-50 xl:text-[18px]">
                {founder.bio}
              </p>

              {/* Read more link */}
              {founder.readMore && (
                <p className="mt-4 text-[18px] font-bold leading-[1.5] text-green-500">
                  Read more
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
