import type { Metadata } from "next";
import { Inter, Spectral } from "next/font/google";
import { AppProvider } from "@/context/AppContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spectral = Spectral({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Nehru Portal | Nehru Memorial Museum & Library",
  description: "Nehru Portal, Nehru Memorial Museum & Library | Ministry of Culture, Government of India",
};

export const viewport = {
  width: 1200,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${inter.variable} ${spectral.variable} min-h-full flex flex-col font-sans`}>
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/legacy-css/legacy-style.css" />
      <link rel="stylesheet" href="/legacy-css/legacy-responsive.css" />
      <AppProvider>
        <section id="wrapper" className="flex-1 flex flex-col">
          {children}
        </section>
      </AppProvider>
    </div>
  );
}
