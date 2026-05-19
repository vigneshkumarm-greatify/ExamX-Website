import Image from "next/image";
import DetectionCard from "./helperComps/DetectionCard";

/*
  Cards mirror the Figma layout at 588×380 (standard), 588×784 (Tab/Window — tall),
  and 1200×290 (Copy-Paste — wide). Illustrations are placeholder images that the
  Figma file positions bottom-anchored with intentional bleed past the card edge;
  we recreate that by absolutely positioning each <Image> at bottom-center with a
  per-card width % that matches the original illustration bounds. Cards use
  aspect-ratio so they scale fluidly from mobile to desktop.
*/

interface CardImageProps {
  src: string;
  alt: string;
  /** width % of the card the illustration should occupy (matches Figma bounds). */
  widthPct: number;
  /** height % of the card the illustration should occupy. */
  heightPct: number;
  /** Horizontal anchor — defaults to center. */
  align?: "center" | "right";
  /** Vertical anchor — defaults to bottom. */
  vAlign?: "bottom" | "center";
  /** Vertical bleed in % — illustration extends this far past the bottom edge. Only applies when vAlign="bottom". */
  bleedBottomPct?: number;
}

function buildTransform(
  align: "center" | "right",
  vAlign: "bottom" | "center"
): string | undefined {
  const x = align === "center" ? "-50%" : "0";
  const y = vAlign === "center" ? "-50%" : "0";
  if (x === "0" && y === "0") return undefined;
  return `translate(${x}, ${y})`;
}

function CardImage({
  src,
  alt,
  widthPct,
  heightPct,
  align = "center",
  vAlign = "bottom",
  bleedBottomPct = 0,
}: CardImageProps) {
  const objectPositionClass =
    vAlign === "center" ? "object-center" : "object-bottom";

  return (
    <>
      {/* Mobile (<lg): natural flow — image is a flex item under the text, height auto via aspect-ratio. */}
      <div
        className="pointer-events-none relative w-full lg:hidden"
        style={{
          // Roughly 16:9-ish aspect ratio; the original Figma illustrations are
          // wider than tall (520-580 wide × 200-220 tall ≈ 2.5:1 to 3:1).
          aspectRatio: "2.4 / 1",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-contain object-bottom"
        />
      </div>

      {/* lg+: absolute positioning anchored to bottom/center per Figma percentages. */}
      <div
        className="pointer-events-none absolute hidden lg:block"
        style={{
          width: `${widthPct}%`,
          height: `${heightPct}%`,
          left: align === "center" ? "50%" : "auto",
          right: align === "right" ? 0 : "auto",
          top: vAlign === "center" ? "50%" : "auto",
          bottom: vAlign === "bottom" ? `${-bleedBottomPct}%` : "auto",
          transform: buildTransform(align, vAlign),
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="50vw"
          className={`object-contain ${objectPositionClass}`}
        />
      </div>
    </>
  );
}

/*
  Sizing strategy:
  - Mobile + tablet (<1024): single column. Card height is auto (content + image flow naturally).
  - lg+ (≥1024): Figma aspect ratios kick in (cards are 588×380 / 588×784 / 1200×290 in proportion).
*/
const STANDARD_RATIO = "lg:aspect-[588/380]";
const TALL_RATIO = "lg:aspect-[588/784]";
const WIDE_RATIO = "lg:aspect-[1200/290]";

export default function DetectionCapabilities() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-16  md:py-20  xl:py-[120px]">
        <h2 className="mb-12 text-center text-[34px] font-semibold leading-[1.2] tracking-[-0.95px] text-chalk-green-500 md:text-[42px] xl:text-[47.78px]">
          AI Detection Capabilities
        </h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:grid-rows-[auto_auto_auto_auto]">
          {/* Row 1 — Face Detection (dark) + Multiple Person (light-creme) */}
          <DetectionCard
            theme="dark"
            title="Face Detection & Identity Verification"
            description="Continuous face matching against the registered photo ID. Detects face swaps, deepfakes, and proxy test-takers using advanced biometric AI."
            className={STANDARD_RATIO}
          >
            <CardImage
              src="/images/platform-ai-proctoring/cards/face-detection-identity-verification.png"
              alt="Face detection and identity verification illustration"
              widthPct={75}
              heightPct={58}
              bleedBottomPct={5}
            />
          </DetectionCard>

          <DetectionCard
            theme="light-green"
            title="Multiple Person Detection"
            description="Instantly flags when additional people enter the camera frame. AI distinguishes between the registered candidate and unauthorized individuals."
            className={STANDARD_RATIO}
          >
            <CardImage
              src="/images/platform-ai-proctoring/cards/multiple-person-detection.png"
              alt="Multiple person detection illustration"
              widthPct={88}
              heightPct={58}
              bleedBottomPct={3}
            />
          </DetectionCard>

          {/* Row 2: Gaze (single row, left) + Tab/Window (spans 2 rows, right) */}
          <DetectionCard
            theme="light-purple"
            title="Gaze Tracking & Head Movement"
            description="Tracks eye movement patterns and head orientation in real-time. Flags sustained off-screen gazing, suspicious head movements, and potential reference material usage."
            className={STANDARD_RATIO}
          >
            <CardImage
              src="/images/platform-ai-proctoring/cards/gaze-tracking-head-movement.png"
              alt="Gaze tracking and head movement illustration"
              widthPct={82}
              heightPct={62}
              bleedBottomPct={8}
            />
          </DetectionCard>

          <DetectionCard
            theme="light-creme-warm"
            title="Tab/Window Switch Monitoring"
            description="Logs every tab switch, window change, and application access attempt. Configurable thresholds, auto-warn, auto-pause, or auto-terminate based on severity."
            className={`lg:row-span-2 ${TALL_RATIO}`}
          >
            <CardImage
              src="/images/platform-ai-proctoring/cards/tab-window-switch-monitoring.png"
              alt="Tab and window switch monitoring illustration"
              widthPct={84}
              heightPct={70}
              vAlign="center"
            />
          </DetectionCard>

          {/* Row 3: Audio (left) */}
          <DetectionCard
            theme="light-creme"
            title="Audio Anomaly Detection"
            description="Analyzes ambient audio for whispered conversations, voice coaching, text-to-speech playback, and background noise anomalies with timestamped evidence."
            className={STANDARD_RATIO}
          >
            <CardImage
              src="/images/platform-ai-proctoring/cards/audio-anomaly-detection.png"
              alt="Audio anomaly detection illustration"
              widthPct={94}
              heightPct={52}
              bleedBottomPct={4}
            />
          </DetectionCard>

          {/* Row 4 — Screen Share (dark) + Object Detection (orange) */}
          <DetectionCard
            theme="dark"
            title="Screen Sharing & Recording Detection"
            description="Detects active screen sharing sessions, screen recording software, and mirroring tools. Blocks attempts and generates instant alerts with forensic evidence."
            className={STANDARD_RATIO}
          >
            <CardImage
              src="/images/platform-ai-proctoring/cards/copy-paste-prevention.png"
              alt="Screen sharing and recording detection illustration"
              widthPct={58}
              heightPct={58}
              bleedBottomPct={6}
            />
          </DetectionCard>

          <DetectionCard
            theme="light-orange"
            title="Object Detection"
            description="AI-powered visual detection of prohibited objects, books, phones, earphones, smartwatches, and more. Real-time alerts with snapshot evidence."
            className={STANDARD_RATIO}
          >
            <CardImage
              src="/images/platform-ai-proctoring/cards/object-detection.png"
              alt="Object detection illustration"
              widthPct={100}
              heightPct={54}
              bleedBottomPct={0}
            />
          </DetectionCard>

          {/* Row 5 — Wide Copy-Paste (spans 2 cols) */}
          <DetectionCard
            theme="light-green"
            title="Copy-Paste Prevention"
            description="Complete clipboard lockdown blocks copy, paste, and drag-drop operations. Prevents content extraction from the exam window to external applications."
            className={`lg:col-span-2 ${WIDE_RATIO}`}
          >
            <CardImage
              src="/images/platform-ai-proctoring/cards/screen-sharing-recording-detection.png"
              alt="Copy-paste prevention illustration"
              widthPct={62}
              heightPct={95}
              align="right"
              bleedBottomPct={0}
            />
          </DetectionCard>
        </div>
      </div>
    </section>
  );
}
