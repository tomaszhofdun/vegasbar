import type { Metadata } from "next";
import { Anton, Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const anton = Anton({
  weight: "400",
  subsets: ["latin-ext"],
  variable: "--font-anton",
  display: "swap",
});

const work = Work_Sans({
  subsets: ["latin-ext"],
  variable: "--font-work",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bar Vegas | Skoki",
  description:
    "Bar Vegas w Skokach – chrupiące kurczak burgery, hot-dogi amerykańskie, zapiekanki na świeżej bagietce i panierowany kurczak. Wpadaj na jedyne w swoim rodzaju smaki!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={`${anton.variable} ${work.variable} font-body`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
