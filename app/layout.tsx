import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Fontu yapılandırıyoruz
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Bahçeden Organik Erik",
  description: "Kendi bahçemizden doğal, ilaçsız, taze erikler.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}