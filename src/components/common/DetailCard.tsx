import Image from "next/image";

/* ── Theme config per card ── */

export interface CardTheme {
  /** CSS gradient for the card background */
  cardGradient: string;
  /** Badge background color (rgba string) */
  badgeBg?: string;
  /** Badge border color (rgba string) */
  badgeBorder?: string;
  /** Badge text color (hex) */
  badgeTextColor?: string;
  /** Checkmark circle background (Tailwind class) */
  checkBg: string;
  /** Checkmark text color (Tailwind class) */
  checkColor: string;
  /** Feature list bottom divider (Tailwind border class) */
  dividerColor: string;
  /** CTA text color (Tailwind class) */
  ctaColor?: string;
  /** CTA arrow circle bg (hex) */
  ctaArrowBg?: string;
  /** Testimonial left-border color (Tailwind class) */
  testimonialBorder?: string;
  /** Image container background gradient (CSS string) */
  imageBg: string;
}

export interface DetailCardData {
  badge?: string;
  heading: string;
  description: string;
  features: string[];
  cta?: string;
  ctaHref?: string;
  dashboardImage: string;
  dashboardAlt: string;
  testimonial?: { quote: string };
  theme: CardTheme;
  /** Whether the image goes on the left (true) or right (false/default) */
  imageLeft?: boolean;
}

export default function DetailCard({ card }: { card: DetailCardData }) {
  const { theme } = card;

  const textContent = (
    <div className="flex w-full flex-col gap-8 lg:flex-1">
      {/* Badge */}
      {card.badge && (
        <div className="flex items-start">
          <span
            className="inline-flex items-center rounded-lg px-2 py-1.5"
            style={{
              backgroundColor: theme.badgeBg,
              border: `1px solid ${theme.badgeBorder}`,
            }}
          >
            <span
              className="text-[11.11px] font-semibold leading-[1.2] tracking-[-0.11px]"
              style={{ color: theme.badgeTextColor }}
            >
              {card.badge}
            </span>
          </span>
        </div>
      )}

      {/* Heading */}
      <h3 className="text-[24px] font-semibold leading-[1.2] tracking-[-0.553px] text-chalk-green-500 md:text-[27.65px]">
        {card.heading}
      </h3>

      {/* Description */}
      <p className="text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a]">
        {card.description}
      </p>

      {/* Feature checklist — only show bottom divider when CTA or testimonial follows */}
      <div
        className={
          card.cta || card.testimonial
            ? `border-b pb-5 ${theme.dividerColor}`
            : ""
        }
      >
        <ul className="flex flex-col gap-4">
          {card.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <span
                className={`mt-0.5 flex size-[22px] shrink-0 items-center justify-center rounded-[11px] ${theme.checkBg}`}
              >
                <span
                  className={`text-xs font-bold leading-none ${theme.checkColor}`}
                >
                  ✓
                </span>
              </span>
              <span className="text-[13.33px] font-medium leading-[1.5] tracking-[-0.133px] text-chalk-green-500">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      {card.cta && (
        <div className="flex items-center gap-2">
          <a
            href={card.ctaHref}
            className={`text-lg font-semibold leading-[1.5] tracking-[-0.18px] ${theme.ctaColor}`}
          >
            {card.cta}
          </a>
          <span
            className="flex size-[27px] items-center justify-center rounded-full"
            style={{ backgroundColor: theme.ctaArrowBg }}
          >
            <svg
              width="9"
              height="8"
              viewBox="0 0 9 8"
              fill="none"
              className="rotate-180"
            >
              <path
                d="M7.5 4H1.5M4.5 1L1.5 4L4.5 7"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      )}

      {/* Testimonial */}
      {card.testimonial && (
        <div className={`border-l-2 pl-3 ${theme.testimonialBorder}`}>
          <p className="text-[13.33px] font-medium leading-[1.5] tracking-[-0.133px] text-[#71717a]">
            {card.testimonial.quote}
          </p>
        </div>
      )}
    </div>
  );

  const dashboardContent = (
    <div className="relative min-h-[300px] md:min-h-[400px] w-full h-full flex items-center justify-center">
      <Image
        src={card.dashboardImage}
        alt={card.dashboardAlt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        draggable={false}
        className="object-contain select-none"
      />
      <div className="absolute inset-0 z-10" />
    </div>
  );

  return (
    <div
      className="overflow-hidden rounded-[24px] p-6 lg:rounded-[32px] lg:p-8 h-full"
      style={{ background: theme.cardGradient }}
    >
      <div
        className={`flex flex-col items-center lg:items-stretch gap-8 lg:gap-12 ${
          card.imageLeft ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        {textContent}
        <div
          className="w-full lg:w-[50%] self-stretch rounded-2xl overflow-hidden"
          style={{ background: theme.imageBg }}
        >
          {dashboardContent}
        </div>
      </div>
    </div>
  );
}
