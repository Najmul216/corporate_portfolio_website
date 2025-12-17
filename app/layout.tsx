import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavContainer from "@/components/Home/Navbar/NavContainer";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FCCL-Fortex Contracting Company Ltd.",
  description:
    "A company with international standards and quality by providing cutting edge services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased bg-[#041b3c]`}>
        <NavContainer />
        {children}
      </body>
    </html>
  );
}
