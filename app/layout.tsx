import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/lib/lenis";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vivek Raheja | Software Engineer",
  description:
    "Portfolio of Vivek Raheja - Software Engineer in AI, MLand Full-Stack Development. USC graduate in Applied Mathematics and ML.",
  keywords: [
    "Vivek Raheja",
    "Software Engineer",
    "Machine Learning",
    "AI",
    "Full-Stack Developer",
    "USC",
  ],
  authors: [{ name: "Vivek Raheja" }],
  openGraph: {
    title: "Vivek Raheja | Software Engineer & ML Specialist",
    description:
      "Portfolio showcasing work at HappyRobot, Scale AI, Whatnot, and more",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
