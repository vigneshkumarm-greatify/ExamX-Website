import type { ReactNode } from "react";

interface DetectionCardProps {
  title: string;
  description: string;
  theme: "dark" | "light-creme" | "light-green" | "light-purple" | "light-orange" | "light-creme-warm";
  className?: string;
  children?: ReactNode;
}

const themeStyles: Record<DetectionCardProps["theme"], { bg: string; title: string; desc: string }> = {
  dark: {
    bg: "bg-[#00373a]",
    title: "text-creme-500",
    desc: "text-chalk-green-100",
  },
  "light-creme": {
    bg: "bg-gradient-to-br from-creme-100 to-creme-500",
    title: "text-chalk-green-500",
    desc: "text-[#71717a]",
  },
  "light-creme-warm": {
    bg: "bg-gradient-to-br from-[#f0efe2] to-creme-600",
    title: "text-chalk-green-500",
    desc: "text-[#71717a]",
  },
  "light-green": {
    bg: "bg-gradient-to-br from-green-50 to-[#b8f5cb]",
    title: "text-chalk-green-500",
    desc: "text-[#71717a]",
  },
  "light-purple": {
    bg: "bg-gradient-to-br from-purple-50 to-purple-100",
    title: "text-chalk-green-500",
    desc: "text-[#71717a]",
  },
  "light-orange": {
    bg: "bg-gradient-to-br from-orange-50 to-orange-100",
    title: "text-chalk-green-500",
    desc: "text-[#71717a]",
  },
};

export default function DetectionCard({
  title,
  description,
  theme,
  className = "",
  children,
}: DetectionCardProps) {
  const styles = themeStyles[theme];
  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-2xl lg:block ${styles.bg} ${className}`}
    >
      <div className="relative z-10 flex flex-col gap-2 p-6 md:p-8">
        <p
          className={`text-[23.04px] font-semibold leading-[1.2] tracking-[-0.46px] ${styles.title}`}
        >
          {title}
        </p>
        <p
          className={`max-w-[524px] text-base font-medium leading-[1.5] tracking-[-0.16px] ${styles.desc}`}
        >
          {description}
        </p>
      </div>
      {children}
    </div>
  );
}
