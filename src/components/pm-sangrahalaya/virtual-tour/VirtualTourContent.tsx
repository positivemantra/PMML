"use client";

import React from "react";
import { Spectral } from "next/font/google";
import HeroSection from "@/components/Home/HeroSection";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export default function VirtualTourContent() {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* ── Main Hero Section ── */}
      <HeroSection />

      {/* ── Title Bar (Grey Band) ── */}
      <div className="w-full bg-[#f4f4f4] py-8 text-[#052356] border-t border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start text-left">
          <div className="w-12 h-1 bg-[#f37021] mb-4" />
          <h1 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
            Virtual Tour
          </h1>
        </div>
      </div>

      {/* ── Content Layout (Iframe Embed) ── */}
      <section className="w-full py-8 sm:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full aspect-[16/9] min-h-[450px] sm:min-h-[550px] lg:min-h-[650px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 relative">
            <iframe
              src="https://nmml-poc.s3-ap-south-1.amazonaws.com/PMS%20Project%20%26%20Web%20File/web/PMS/index.htm"
              title="Pradhanmantri Sangrahalaya Virtual Tour"
              className="w-full h-full border-none"
              allowFullScreen
              allow="accelerometer; gyroscope; magnetometer; device-orientation; vr"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
