import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const yellix = localFont({
  src: [
    { path: "../fonts/Yellix-Thin.ttf", weight: "100" },
    { path: "../fonts/Yellix-Regular.ttf", weight: "400" },
    { path: "../fonts/Yellix-Medium.ttf", weight: "500" },
    { path: "../fonts/Yellix-SemiBold.ttf", weight: "600" },
    { path: "../fonts/Yellix-Bold.ttf", weight: "700" },
    { path: "../fonts/Yellix-ExtraBold.ttf", weight: "800" },
    { path: "../fonts/Yellix-Black.ttf", weight: "900" },
  ],
  variable: "--font-yellix",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://exam-x-website.vercel.app"),
  title: "Greatify — AI-Powered Exam Platform",
  description:
    "AI that creates, proctors, and grades exams end-to-end. Enterprise-grade assessment platform with SOC 2, GDPR, and ISO 27001 compliance.",
  icons: {
    icon: "/images/common/ai-logo.svg",
    shortcut: "/images/common/ai-logo.svg",
    apple: "/images/common/ai-logo.svg",
  },
  openGraph: {
    title: "Greatify — AI-Powered Exam Platform",
    description:
      "AI that creates, proctors, and grades exams end-to-end. Enterprise-grade assessment platform with SOC 2, GDPR, and ISO 27001 compliance.",
    siteName: "Greatify",
    type: "website",
    url: "https://exam-x-website.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Greatify — AI-Powered Exam Platform",
    description:
      "AI that creates, proctors, and grades exams end-to-end. Enterprise-grade assessment platform with SOC 2, GDPR, and ISO 27001 compliance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${yellix.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
