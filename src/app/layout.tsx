import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Susmita Das",
  description: "CS student & full-stack developer",
};

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-[#fff0f5] text-[#1e1e1e] ${urbanist.className}`}
      >
        {children}
      </body>
    </html>
  );
}
