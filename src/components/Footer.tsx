import Image from "next/image";

const socialLinks = [
  { name: "Facebook", icon: "/images/icon-facebook.svg" },
  { name: "Instagram", icon: "/images/icon-instagram.svg" },
  { name: "X", icon: "/images/icon-x.svg" },
  { name: "LinkedIn", icon: "/images/icon-linkedin.svg" },
  { name: "YouTube", icon: "/images/icon-youtube.svg" },
];

const offices = [
  {
    city: "Bangalore",
    address:
      "203, Embassy Square, Infantry road, Bangalore, Karnataka - 560001.",
  },
  {
    city: "Chennai",
    address:
      "455, 9th floor, Amarasri Building, Annasalai, Teynampet, Chennai - 600018.",
  },
  {
    city: "USA",
    address: "1323 Chandon Ct, San Jose 95125.",
  },
  {
    city: "Dubai",
    address:
      "Digital Silicon oasis, Dubai, United Arab Emirates - 341041.",
  },
];

const bottomLinks = [
  "Privacy Policy",
  "Terms of Service",
  "Refund & Cancellation Policy",
  "Cookies Settings",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-chalk-green-500 from-[22.8%] to-[#00c63e] to-[156.9%] px-6 pb-20 pt-[120px] md:px-12 lg:px-16">
      {/* Background pattern */}
      <Image
        src="/images/footer-bg-pattern.svg"
        alt=""
        width={1392}
        height={792}
        className="pointer-events-none absolute left-1/2 top-[515px] -translate-x-1/2 -scale-y-100"
      />

      <div className="relative mx-auto flex max-w-[1280px] flex-col gap-16">
        {/* Top row */}
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
          {/* Brand column */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <Image
                  src="/images/logo-icon.svg"
                  alt=""
                  width={36}
                  height={44}
                />
                <Image
                  src="/images/logo-wordmark.svg"
                  alt="Greatify"
                  width={125}
                  height={30}
                  className="brightness-0 invert"
                />
              </div>
              <p className="max-w-[251px] text-[13.33px] font-medium leading-[1.5] tracking-[-0.13px] text-chalk-green-100">
                AI-powered end-to-end examination platform by Greatify. Making
                assessment fair, intelligent, and accessible.
              </p>
            </div>

            {/* Certification badges */}
            <div className="flex gap-2.5">
              <Image
                src="/images/badge-iso.png"
                alt="ISO 27001 certified"
                width={88}
                height={88}
              />
              <Image
                src="/images/badge-gdpr.png"
                alt="GDPR compliant"
                width={88}
                height={88}
              />
              <Image
                src="/images/badge-soc2.png"
                alt="SOC 2 certified"
                width={88}
                height={88}
              />
            </div>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap gap-12 lg:gap-24">
            {/* Solutions */}
            <div className="flex flex-col">
              <p className="py-2 text-[11.11px] font-bold uppercase leading-[1.2] tracking-[0.11px] text-chalk-green-300">
                Solutions
              </p>
              {[
                "for Universities",
                "for K-12 Schools",
                "for Goverment",
                "for Enterprise",
                "for Certification",
                "for EdTech",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="py-2 text-base font-medium leading-[1.5] tracking-[-0.16px] text-white"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Company */}
            <div className="flex flex-col">
              <p className="py-2 text-[11.11px] font-bold uppercase leading-[1.2] tracking-[0.11px] text-chalk-green-300">
                Company
              </p>
              {["About Us", "Success stories", "ISO Certification"].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    className="py-2 text-base font-medium leading-[1.5] tracking-[-0.16px] text-white"
                  >
                    {link}
                  </a>
                )
              )}
            </div>

            {/* Contact */}
            <div className="flex flex-col">
              <p className="py-2 text-[11.11px] font-bold uppercase leading-[1.2] tracking-[0.11px] text-chalk-green-300">
                Contact
              </p>
              <a
                href="tel:+919164811110"
                className="py-2 text-base font-medium leading-[1.5] tracking-[-0.16px] text-white"
              >
                +91 91648 11110
              </a>
              <a
                href="mailto:info@greatify.ai"
                className="py-2 text-base font-medium leading-[1.5] tracking-[-0.16px] text-white"
              >
                info@greatify.ai
              </a>
              <div className="flex gap-3 py-5">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href="#"
                    aria-label={s.name}
                    className="flex h-6 w-6 items-center justify-center"
                  >
                    <Image
                      src={s.icon}
                      alt=""
                      width={18}
                      height={18}
                      className="brightness-0 invert"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-chalk-green-300/30" />

        {/* Offices */}
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
          {offices.map((o) => (
            <div key={o.city} className="max-w-[246px]">
              <p className="text-[11.11px] font-bold uppercase leading-[1.2] tracking-[0.11px] text-white">
                {o.city}:
              </p>
              <p className="text-[13.33px] font-medium leading-[1.5] tracking-[-0.13px] text-chalk-green-100">
                {o.address}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-chalk-green-300/30" />

        {/* Bottom credits */}
        <div className="flex flex-col items-center gap-4 text-[13.33px] font-medium leading-[1.5] tracking-[-0.13px] text-[#91a9aa] lg:flex-row lg:justify-between">
          <p>
            © 2026, Gigadesk Technologies Private Limited. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            {bottomLinks.map((link) => (
              <a key={link} href="#" className="hover:text-white">
                {link}
              </a>
            ))}
          </div>
          <p>Designed at aarts</p>
        </div>

        {/* Large Greatify wordmark */}
        <div className="flex justify-center">
          <Image
            src="/images/footer-greatify-logo-large.svg"
            alt=""
            width={1280}
            height={303}
            className="opacity-20"
          />
        </div>
      </div>
    </footer>
  );
}
