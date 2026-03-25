"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// ── Spark particle pool ──────────────────────────────────────────────────────

const POOL_SIZE = 60;

interface Spark {
  el: SVGCircleElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  radius: number;
  alive: boolean;
}

function createSparkPool(svg: SVGSVGElement, filterId: string): Spark[] {
  const NS = "http://www.w3.org/2000/svg";

  // Soft glow filter for sparks
  const filter = document.createElementNS(NS, "filter");
  filter.setAttribute("id", filterId);
  filter.setAttribute("x", "-200%");
  filter.setAttribute("y", "-200%");
  filter.setAttribute("width", "500%");
  filter.setAttribute("height", "500%");
  const blur = document.createElementNS(NS, "feGaussianBlur");
  blur.setAttribute("stdDeviation", "2");
  blur.setAttribute("result", "glow");
  const merge = document.createElementNS(NS, "feMerge");
  const m1 = document.createElementNS(NS, "feMergeNode");
  m1.setAttribute("in", "glow");
  const m2 = document.createElementNS(NS, "feMergeNode");
  m2.setAttribute("in", "SourceGraphic");
  merge.appendChild(m1);
  merge.appendChild(m2);
  filter.appendChild(blur);
  filter.appendChild(merge);
  let defs = svg.querySelector("defs");
  if (!defs) {
    defs = document.createElementNS(NS, "defs");
    svg.prepend(defs);
  }
  defs.appendChild(filter);

  const sparks: Spark[] = [];
  for (let i = 0; i < POOL_SIZE; i++) {
    const el = document.createElementNS(NS, "circle");
    el.setAttribute("r", "0");
    el.setAttribute("fill", "#01ff80");
    el.setAttribute("filter", `url(#${filterId})`);
    el.setAttribute("opacity", "0");
    svg.appendChild(el);
    sparks.push({
      el,
      x: 0, y: 0, vx: 0, vy: 0,
      life: 1, maxLife: 1, radius: 0,
      alive: false,
    });
  }
  return sparks;
}

const SPARK_COLORS = ["#01ff80", "#00ff66", "#aaffcc", "#00DC46", "#66ffaa"];

function spawnSpark(
  pool: Spark[],
  pathEl: SVGPathElement,
  headDist: number,
  totalLength: number,
) {
  const spark = pool.find((s) => !s.alive);
  if (!spark) return;

  // Spawn along bright segment (20% behind head)
  const behind = Math.random() * totalLength * 0.20;
  const d = Math.max(0, Math.min(headDist - behind, totalLength));
  const pt = pathEl.getPointAtLength(d);

  // Path tangent for perpendicular offset direction
  const ptA = pathEl.getPointAtLength(Math.min(d + 2, totalLength));
  const ptB = pathEl.getPointAtLength(Math.max(d - 2, 0));
  const dx = ptA.x - ptB.x;
  const dy = ptA.y - ptB.y;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;

  // Wider spawn offset (0-15px from path center)
  const side = Math.random() > 0.5 ? 1 : -1;
  const perpOffset = Math.random() * 15;

  spark.x = pt.x + nx * perpOffset * side;
  spark.y = pt.y + ny * perpOffset * side;

  // Random 360° velocity — electricity scatters freely
  const angle = Math.random() * Math.PI * 2;
  const speed = 20 + Math.random() * 40; // 20-60 px/s
  spark.vx = Math.cos(angle) * speed;
  spark.vy = Math.sin(angle) * speed;

  // Mix of spark types for electric feel
  const type = Math.random();
  if (type < 0.4) {
    // Fast flashes — tiny, short-lived
    spark.maxLife = 0.15 + Math.random() * 0.15;
    spark.radius = 0.5 + Math.random() * 1.0;
  } else if (type < 0.8) {
    // Medium sparks
    spark.maxLife = 0.3 + Math.random() * 0.3;
    spark.radius = 1.5 + Math.random() * 1.5;
  } else {
    // Large flares — bigger, longer-lived
    spark.maxLife = 0.5 + Math.random() * 0.5;
    spark.radius = 2.5 + Math.random() * 2.0;
  }

  spark.life = 0;
  spark.alive = true;

  spark.el.setAttribute("fill", SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)]);
}

function updateSparks(pool: Spark[], dt: number) {
  for (const s of pool) {
    if (!s.alive) continue;
    s.life += dt / s.maxLife;
    if (s.life >= 1) {
      s.alive = false;
      s.el.setAttribute("opacity", "0");
      s.el.setAttribute("r", "0");
      continue;
    }
    s.x += s.vx * dt;
    s.y += s.vy * dt;
    s.vx *= 0.97;
    s.vy *= 0.97;

    // Smooth fade with gentle brightness variation
    const fade = s.life < 0.2 ? s.life / 0.2 : 1 - (s.life - 0.2) / 0.8;
    const opacity = fade * (0.7 + Math.random() * 0.1);

    s.el.setAttribute("cx", String(s.x));
    s.el.setAttribute("cy", String(s.y));
    s.el.setAttribute("r", String(s.radius * (1 - s.life * 0.3)));
    s.el.setAttribute("opacity", String(Math.max(0, opacity)));
  }
}

function disposeSparks(pool: Spark[]) {
  for (const s of pool) {
    s.el.remove();
    s.alive = false;
  }
}

// ── Tube configuration ──────────────────────────────────────────────────────

const TUBES = [
  {
    position: "left-[50px] top-[597px]",
    container: { w: 375, h: 870 },
    rotation: "-rotate-[15deg] -scale-y-100",
    ellipse: { cx: 139.091, cy: 489.158, rx: 79.0909, ry: 429.158 },
    viewBox: "0 0 278.182 978.316",
    filterSize: { w: 278.182, h: 978.316 },
    blur: 30,
  },
  {
    position: "left-[-150px] top-[621px]",
    container: { w: 566, h: 822 },
    rotation: "-rotate-[30deg] -scale-y-100",
    ellipse: { cx: 169.091, cy: 519.158, rx: 79.0909, ry: 429.158 },
    viewBox: "0 0 338.182 1038.32",
    filterSize: { w: 338.182, h: 1038.32 },
    blur: 45,
  },
  {
    position: "left-[calc(50%+451px)] top-[621px]",
    container: { w: 566, h: 822 },
    rotation: "rotate-[30deg] -scale-y-100",
    ellipse: { cx: 169.091, cy: 519.158, rx: 79.0909, ry: 429.158 },
    viewBox: "0 0 338.182 1038.32",
    filterSize: { w: 338.182, h: 1038.32 },
    blur: 45,
  },
  {
    position: "left-[calc(50%+213px)] top-[597px]",
    container: { w: 375, h: 870 },
    rotation: "rotate-[15deg] -scale-y-100",
    ellipse: { cx: 139.091, cy: 489.158, rx: 79.0909, ry: 429.158 },
    viewBox: "0 0 278.182 978.316",
    filterSize: { w: 278.182, h: 978.316 },
    blur: 30,
  },
];

const LEFT_SVG = { w: 77, h: 1150 };
const RIGHT_SVG = { w: 477, h: 1183 };

const LEFT_PATH_D = "M17.4938 10.3047L64.2317 1159.84";
const RIGHT_PATH_D =
  "M487.343 1200.11L449.066 65.8139C448.145 38.5284 425.508 17.0257 398.211 17.508L10.1325 24.3646";

// ── Component ────────────────────────────────────────────────────────────────

export default function HeroGlowEffects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftPathRef = useRef<SVGPathElement>(null);
  const rightPathRef = useRef<SVGPathElement>(null);
  const leftSvgRef = useRef<SVGSVGElement>(null);
  const rightSvgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const leftPath = leftPathRef.current;
    const rightPath = rightPathRef.current;
    const leftSvg = leftSvgRef.current;
    const rightSvg = rightSvgRef.current;

    if (!leftPath || !rightPath || !leftSvg || !rightSvg) return;

    const leftTotalLength = leftPath.getTotalLength();
    const rightTotalLength = rightPath.getTotalLength();
    const leftBrightLength = leftTotalLength * 0.25;
    const rightBrightLength = rightTotalLength * 0.25;

    const leftSparks = createSparkPool(leftSvg, "spark-glow-left");
    const rightSparks = createSparkPool(rightSvg, "spark-glow-right");

    const ctx = gsap.context(() => {
      // Left bright segment
      gsap.set(leftPath, {
        strokeDasharray: `${leftBrightLength} ${leftTotalLength}`,
        strokeDashoffset: leftTotalLength + leftBrightLength,
      });
      gsap.to(leftPath, {
        strokeDashoffset: -(leftTotalLength + leftBrightLength),
        duration: 4,
        ease: "none",
        repeat: -1,
        delay: 0,
      });

      // Right bright segment
      gsap.set(rightPath, {
        strokeDasharray: `${rightBrightLength} ${rightTotalLength}`,
        strokeDashoffset: rightTotalLength + rightBrightLength,
      });
      gsap.to(rightPath, {
        strokeDashoffset: -(rightTotalLength + rightBrightLength),
        duration: 4,
        ease: "none",
        repeat: -1,
        delay: 0.5,
      });
    }, containerRef);

    // Ticker: spawn + update sparks each frame
    let leftSpawnAccum = 0;
    let rightSpawnAccum = 0;

    function readOffset(el: SVGPathElement): number {
      const v = el.style.strokeDashoffset;
      if (v) return parseFloat(v);
      return parseFloat(getComputedStyle(el).strokeDashoffset || "0");
    }

    // Find all visible bright segment head positions.
    // The dasharray pattern wraps, so multiple segments can be on-path at once.
    function headsFromElement(el: SVGPathElement, T: number, B: number): number[] {
      const offset = readOffset(el);
      const C = B + T;
      const heads: number[] = [];
      for (let n = -2; n <= 2; n++) {
        const head = (T + B) - offset + n * C;
        if (head >= 0 && head <= T) heads.push(head);
      }
      return heads;
    }

    const tickerFn = (_time: number, deltaTime: number) => {
      const dt = Math.min(deltaTime / 1000, 0.1);

      const leftHeads = headsFromElement(leftPath, leftTotalLength, leftBrightLength);
      const rightHeads = headsFromElement(rightPath, rightTotalLength, rightBrightLength);

      if (leftHeads.length > 0) {
        leftSpawnAccum += dt;
        while (leftSpawnAccum > 0.033) {
          const head = leftHeads[Math.floor(Math.random() * leftHeads.length)];
          spawnSpark(leftSparks, leftPath, head, leftTotalLength);
          leftSpawnAccum -= 0.033;
        }
      } else {
        leftSpawnAccum = 0;
      }

      if (rightHeads.length > 0) {
        rightSpawnAccum += dt;
        while (rightSpawnAccum > 0.033) {
          const head = rightHeads[Math.floor(Math.random() * rightHeads.length)];
          spawnSpark(rightSparks, rightPath, head, rightTotalLength);
          rightSpawnAccum -= 0.033;
        }
      } else {
        rightSpawnAccum = 0;
      }

      updateSparks(leftSparks, dt);
      updateSparks(rightSparks, dt);
    };

    gsap.ticker.add(tickerFn);

    return () => {
      gsap.ticker.remove(tickerFn);
      disposeSparks(leftSparks);
      disposeSparks(rightSparks);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef}>
      {/* ===== GLOW TUBES ===== */}
      {TUBES.map((tube, i) => (
        <div
          key={`tube-${i}`}
          className={`glow-tube-${i + 1} pointer-events-none absolute ${tube.position} flex items-center justify-center ${tube.rotation}`}
          style={{ width: tube.container.w, height: tube.container.h }}
        >
          <svg
            viewBox={tube.viewBox}
            preserveAspectRatio="none"
            width="100%"
            height="100%"
            overflow="visible"
            style={{ display: "block" }}
          >
            <defs>
              <filter
                id={`tube-blur-${i}`}
                x="0"
                y="0"
                width={tube.filterSize.w}
                height={tube.filterSize.h}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation={tube.blur}
                  result="effect1_foregroundBlur"
                />
              </filter>
            </defs>
            <g opacity="0.4" filter={`url(#tube-blur-${i})`}>
              <ellipse
                cx={tube.ellipse.cx}
                cy={tube.ellipse.cy}
                rx={tube.ellipse.rx}
                ry={tube.ellipse.ry}
                fill="#00DC46"
              />
            </g>
          </svg>
        </div>
      ))}

      {/* ===== GRID LINE LEFT ===== */}
      <div className="glow-grid-line-left pointer-events-none absolute left-[-67px] top-[543px] flex h-[598px] w-[1036px] items-center justify-center">
        <div className="-rotate-[30deg] skew-x-[30deg] scale-y-[0.87] relative">
          <svg
            ref={leftSvgRef}
            viewBox="0 0 81.7255 1170.14"
            preserveAspectRatio="none"
            width={LEFT_SVG.w}
            height={LEFT_SVG.h}
            overflow="visible"
            style={{ display: "block" }}
          >
            <defs>
              <filter
                id="flow-glow-left"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="6" result="blur1" />
                <feGaussianBlur stdDeviation="12" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              d={LEFT_PATH_D}
              stroke="#00DC46"
              strokeOpacity="0.2"
              strokeWidth="15"
            />
            <path
              ref={leftPathRef}
              d={LEFT_PATH_D}
              stroke="#01ff80"
              strokeWidth="15"
              strokeLinecap="round"
              filter="url(#flow-glow-left)"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* ===== GRID LINE RIGHT ===== */}
      <div className="glow-grid-line-right pointer-events-none absolute left-[836px] top-[352px] flex h-[830px] w-[1438px] items-center justify-center">
        <div className="-rotate-[30deg] skew-x-[30deg] scale-y-[0.87] relative">
          <svg
            ref={rightSvgRef}
            viewBox="0 0 504.839 1210.36"
            preserveAspectRatio="none"
            width={RIGHT_SVG.w}
            height={RIGHT_SVG.h}
            overflow="visible"
            style={{ display: "block" }}
          >
            <defs>
              <filter
                id="flow-glow-right"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="6" result="blur1" />
                <feGaussianBlur stdDeviation="12" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              d={RIGHT_PATH_D}
              stroke="#00DC46"
              strokeOpacity="0.2"
              strokeWidth="15"
              fill="none"
            />
            <path
              ref={rightPathRef}
              d={RIGHT_PATH_D}
              stroke="#01ff80"
              strokeWidth="15"
              strokeLinecap="round"
              filter="url(#flow-glow-right)"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
