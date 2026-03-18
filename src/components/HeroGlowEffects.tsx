"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// ── Particle type & helpers ──────────────────────────────────────────────────

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;       // 0→1 fraction of lifetime elapsed
  maxLife: number;     // total lifetime in seconds
  size: number;        // radius in px
  baseOpacity: number; // starting opacity
}

function deadParticle(): Particle {
  return { x: 0, y: 0, vx: 0, vy: 0, life: 1, maxLife: 1, size: 0, baseOpacity: 0 };
}

/** Find the first dead particle in the pool and recycle it */
function spawnParticleAt(
  pool: Particle[],
  pathEl: SVGPathElement,
  headDistance: number,
  totalLength: number,
) {
  // Find a dead slot
  const slot = pool.find((p) => p.life >= 1);
  if (!slot) return;

  // Clamp head distance to valid range
  const d = Math.max(0, Math.min(headDistance, totalLength));

  // Get position and tangent at head
  const pt = pathEl.getPointAtLength(d);
  const ptAhead = pathEl.getPointAtLength(Math.min(d + 2, totalLength));
  const ptBehind = pathEl.getPointAtLength(Math.max(d - 2, 0));

  const dx = ptAhead.x - ptBehind.x;
  const dy = ptAhead.y - ptBehind.y;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const tx = dx / len; // tangent
  const ty = dy / len;
  const nx = -ty;      // normal (perpendicular)
  const ny = tx;

  // Random side: +1 or -1
  const side = Math.random() > 0.5 ? 1 : -1;

  // Perpendicular drift speed 15-40 px/s
  const perpSpeed = 15 + Math.random() * 25;
  // Backward drift (opposite to flow) 5-15 px/s
  const backSpeed = 5 + Math.random() * 10;

  // Small random offset from the path center (0-4px)
  const offset = Math.random() * 4;

  slot.x = pt.x + nx * offset * side;
  slot.y = pt.y + ny * offset * side;
  slot.vx = nx * perpSpeed * side - tx * backSpeed;
  slot.vy = ny * perpSpeed * side - ty * backSpeed;
  slot.life = 0;
  slot.maxLife = 0.6 + Math.random() * 0.6; // 0.6-1.2s
  slot.size = 1 + Math.random() * 2;        // 1-3px
  slot.baseOpacity = 0.4 + Math.random() * 0.4; // 0.4-0.8
}

const POOL_SIZE = 50;

function createParticleSystem(
  canvas: HTMLCanvasElement,
  pathEl: SVGPathElement,
  totalLength: number,
) {
  const ctx = canvas.getContext("2d")!;
  const particles: Particle[] = Array.from({ length: POOL_SIZE }, () => deadParticle());
  let spawnAccum = 0;

  return {
    update(dt: number, headDistance: number) {
      // Spawn ~8-12 particles per second (one every ~0.08-0.12s)
      spawnAccum += dt;
      while (spawnAccum > 0.09) {
        spawnParticleAt(particles, pathEl, headDistance, totalLength);
        spawnAccum -= 0.09;
      }

      // Update living particles
      for (const p of particles) {
        if (p.life >= 1) continue;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.life += dt / p.maxLife;
      }
    },

    draw(dpr: number) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.globalCompositeOperation = "screen";

      for (const p of particles) {
        if (p.life >= 1) continue;
        const alpha = p.baseOpacity * Math.pow(1 - p.life, 1.5);

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 220, 70, ${alpha})`;
        ctx.fill();

        // Soft glow halo
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 220, 70, ${alpha * 0.25})`;
        ctx.fill();
      }

      ctx.restore();
    },

    dispose() {
      // Mark all particles dead
      for (const p of particles) p.life = 1;
    },
  };
}

/**
 * Convert the current strokeDashoffset value into the "head distance" along the path.
 *
 * The GSAP tween goes:  offset = (totalLength + brightLength) → -(totalLength + brightLength)
 * The bright segment is drawn by stroke-dasharray: `brightLength gapLength`
 *
 * At offset = totalLength + brightLength → head is at distance 0 (off-screen start)
 * At offset = 0 → head is at distance (totalLength + brightLength) which wraps
 * At offset = -(totalLength + brightLength) → head has fully passed
 *
 * The "head" of the bright segment (leading edge) is at:
 *   headDistance = (totalLength + brightLength) - offset
 * But we need to clamp to [0, totalLength].
 */
function offsetToHeadDistance(
  offset: number,
  totalLength: number,
  brightLength: number,
): number {
  const head = (totalLength + brightLength) - offset;
  return Math.max(0, Math.min(head, totalLength));
}

// ── Tube configuration (unchanged) ──────────────────────────────────────────

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

// ── Canvas dimensions matching SVG sizes ─────────────────────────────────────

const LEFT_CANVAS = { w: 77, h: 1150 };
const RIGHT_CANVAS = { w: 477, h: 1183 };

// ── Component ────────────────────────────────────────────────────────────────

export default function HeroGlowEffects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftCanvasRef = useRef<HTMLCanvasElement>(null);
  const rightCanvasRef = useRef<HTMLCanvasElement>(null);
  const leftPathRef = useRef<SVGPathElement>(null);
  const rightPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    // Set up canvas DPR scaling
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const leftCanvas = leftCanvasRef.current;
    const rightCanvas = rightCanvasRef.current;
    const leftPath = leftPathRef.current;
    const rightPath = rightPathRef.current;

    if (!leftCanvas || !rightCanvas || !leftPath || !rightPath) return;

    // Scale canvases for sharp rendering
    leftCanvas.width = LEFT_CANVAS.w * dpr;
    leftCanvas.height = LEFT_CANVAS.h * dpr;
    rightCanvas.width = RIGHT_CANVAS.w * dpr;
    rightCanvas.height = RIGHT_CANVAS.h * dpr;

    const leftTotalLength = leftPath.getTotalLength();
    const rightTotalLength = rightPath.getTotalLength();
    const leftBrightLength = leftTotalLength * 0.25;
    const rightBrightLength = rightTotalLength * 0.25;

    const leftSystem = createParticleSystem(leftCanvas, leftPath, leftTotalLength);
    const rightSystem = createParticleSystem(rightCanvas, rightPath, rightTotalLength);

    // Ticker function — defined outside gsap.context so we can remove it on cleanup
    const tickerFn = (_time: number, deltaTime: number) => {
      const dt = deltaTime / 1000;
      // Clamp dt to avoid huge jumps on tab refocus
      const clampedDt = Math.min(dt, 0.1);

      // Read current dashoffset
      const leftOffset = parseFloat(
        leftPath.style.strokeDashoffset || String(leftTotalLength + leftBrightLength)
      );
      const rightOffset = parseFloat(
        rightPath.style.strokeDashoffset || String(rightTotalLength + rightBrightLength)
      );

      const leftHead = offsetToHeadDistance(leftOffset, leftTotalLength, leftBrightLength);
      const rightHead = offsetToHeadDistance(rightOffset, rightTotalLength, rightBrightLength);

      leftSystem.update(clampedDt, leftHead);
      rightSystem.update(clampedDt, rightHead);
      leftSystem.draw(dpr);
      rightSystem.draw(dpr);
    };

    const ctx = gsap.context(() => {
      // ── Grid line flow animations ──
      // Left path
      const leftGapLength = leftTotalLength * 1;
      gsap.set(leftPath, {
        strokeDasharray: `${leftBrightLength} ${leftGapLength}`,
        strokeDashoffset: leftTotalLength + leftBrightLength,
      });
      gsap.to(leftPath, {
        strokeDashoffset: -(leftTotalLength + leftBrightLength),
        duration: 4,
        ease: "none",
        repeat: -1,
        delay: 0,
      });

      // Right path
      const rightGapLength = rightTotalLength * 1;
      gsap.set(rightPath, {
        strokeDasharray: `${rightBrightLength} ${rightGapLength}`,
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

    gsap.ticker.add(tickerFn);

    return () => {
      gsap.ticker.remove(tickerFn);
      leftSystem.dispose();
      rightSystem.dispose();
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
            viewBox="0 0 81.7255 1170.14"
            preserveAspectRatio="none"
            width={LEFT_CANVAS.w}
            height={LEFT_CANVAS.h}
            overflow="visible"
            style={{ display: "block" }}
          >
            <defs>
              <filter id="flow-glow-left" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur1" />
                <feGaussianBlur stdDeviation="12" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Base dim path */}
            <path
              d="M17.4938 10.3047L64.2317 1159.84"
              stroke="#00DC46"
              strokeOpacity="0.2"
              strokeWidth="15"
            />
            {/* Flowing bright segment */}
            <path
              ref={leftPathRef}
              d="M17.4938 10.3047L64.2317 1159.84"
              stroke="#01ff80"
              strokeWidth="15"
              strokeLinecap="round"
              filter="url(#flow-glow-left)"
              fill="none"
            />
          </svg>
          <canvas
            ref={leftCanvasRef}
            className="absolute inset-0 pointer-events-none"
            style={{ width: LEFT_CANVAS.w, height: LEFT_CANVAS.h }}
          />
        </div>
      </div>

      {/* ===== GRID LINE RIGHT ===== */}
      <div className="glow-grid-line-right pointer-events-none absolute left-[836px] top-[352px] flex h-[830px] w-[1438px] items-center justify-center">
        <div className="-rotate-[30deg] skew-x-[30deg] scale-y-[0.87] relative">
          <svg
            viewBox="0 0 504.839 1210.36"
            preserveAspectRatio="none"
            width={RIGHT_CANVAS.w}
            height={RIGHT_CANVAS.h}
            overflow="visible"
            style={{ display: "block" }}
          >
            <defs>
              <filter id="flow-glow-right" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur1" />
                <feGaussianBlur stdDeviation="12" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Base dim path */}
            <path
              d="M487.343 1200.11L449.066 65.8139C448.145 38.5284 425.508 17.0257 398.211 17.508L10.1325 24.3646"
              stroke="#00DC46"
              strokeOpacity="0.2"
              strokeWidth="15"
              fill="none"
            />
            {/* Flowing bright segment */}
            <path
              ref={rightPathRef}
              d="M487.343 1200.11L449.066 65.8139C448.145 38.5284 425.508 17.0257 398.211 17.508L10.1325 24.3646"
              stroke="#01ff80"
              strokeWidth="15"
              strokeLinecap="round"
              filter="url(#flow-glow-right)"
              fill="none"
            />
          </svg>
          <canvas
            ref={rightCanvasRef}
            className="absolute inset-0 pointer-events-none"
            style={{ width: RIGHT_CANVAS.w, height: RIGHT_CANVAS.h }}
          />
        </div>
      </div>
    </div>
  );
}
