// Deterministic hash for per-tile opacity (same result every render)
function getTileOpacity(index: number): number {
  const levels = [0.02, 0.02, 0.05, 0.05, 0.05, 0.08, 0.08, 0.11, 0.14];
  let x = index;
  x = ((x >> 16) ^ x) * 0x45d9f3b;
  x = ((x >> 16) ^ x) * 0x45d9f3b;
  x = (x >> 16) ^ x;
  return levels[Math.abs(x) % levels.length];
}

const COLS = 40;
const ROWS = 30;
const CELL = 11; // 8px rect + 3px gap

function generateHeatmapSvg(): string {
  const w = COLS * CELL;
  const h = ROWS * CELL;
  let rects = "";
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const i = row * COLS + col;
      const opacity = getTileOpacity(i);
      rects += `<rect x="${col * CELL}" y="${row * CELL}" width="8" height="8" rx="2" fill="rgba(255,255,255,${opacity})"/>`;
    }
  }
  return `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'>${rects}</svg>`;
}

const heatmapDataUri = `url("data:image/svg+xml,${encodeURIComponent(generateHeatmapSvg())}")`;

const cards = [
  {
    title: "Our Vision",
    body: "Leading the revolution towards a global digital-first, paperless educational landscape, where innovation meets aspiration and decisions are crafted from insights.",
  },
  {
    title: "Our Mission",
    body: "To relentlessly drive institutions into the future by architecting state-of-the-art digital platforms, promoting data-driven decision-making, eliminating paper-tails, and setting the goals standard for modern, sustainable education.",
  },
];

export default function VisionMission() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(129.58deg, #00373a 2.76%, #00dc46 141%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(114deg, #00373A 3.99%, rgba(0, 55, 58, 0.00) 47.91%, #00373A 99.14%)",
        }}
      />

      <div className="z-10 w-30 h-100 bg-green-500/20 rotate-135 rounded-[80%_80%_80%_80%_/_60%_60%_60%_60%] absolute top-1/2 -translate-1/2 -left-10 blur-xl"></div>
      <div className="z-10 w-30 h-100 bg-green-500/20 rotate-45 rounded-[80%_80%_80%_80%_/_60%_60%_60%_60%] absolute top-1/2 -translate-1/2 -right-10 blur-xl"></div>

      {/* Heatmap grid overlay — large pre-computed SVG tile with per-cell random opacity */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: heatmapDataUri,
          backgroundSize: `${COLS * CELL}px ${ROWS * CELL}px`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-12 xl:px-[100px] py-16 md:py-20 xl:py-24">
        {/* Heading */}
        <p className="mx-auto max-w-[791px] text-center text-[22px] md:text-[25px] xl:text-[27.65px] font-semibold leading-[1.2] tracking-[-0.553px] text-creme-500">
          At Greatify, we believe in leveraging technology to make education
          more accessible, sustainable and future-ready.
        </p>

        {/* Cards */}
        <div className="mt-12 md:mt-16 flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`w-full max-w-[486px] rounded-xl  p-8 md:p-10${
                i === 1 ? " lg:mt-[120px]" : ""
              }`}
              style={{
                background:
                  "linear-gradient(149.04deg, rgba(0,220,70,0.8) 0.73%, rgba(0,118,38,0.8) 97.83%)",
                border: "0.722px solid #00dc46",
              }}
            >
              <h3 className="text-[22px] md:text-[25px] xl:text-[27.65px] font-semibold leading-[1.2] text-creme-500">
                {card.title}
              </h3>
              <p className="mt-4 text-[15px] xl:text-[16px] font-medium leading-[1.5] text-green-100">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
