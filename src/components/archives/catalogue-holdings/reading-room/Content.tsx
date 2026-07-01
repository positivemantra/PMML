"use client";

import React from "react";
import Image from "next/image";
import { Spectral } from "next/font/google";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export default function ReadingRoomContent() {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* ── Subpage Hero Banner ── */}
      <section className="relative w-full aspect-[16/7.5] sm:aspect-[2.6/1] lg:aspect-[3.8/1] min-h-[280px] lg:h-auto overflow-hidden">
        {/* Background Image */}
        <Image
          src="/NMM_2386.jpg"
          alt="PMML Archives and Records Section"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>

      {/* ── Main Content Section ── */}
      <section className="w-full py-12 lg:py-16 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Page Heading */}
          <div className="mb-10 text-left">
            <div className="w-12 h-1 bg-[#f37021] mb-2.5" />
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
              Reading Room
            </h2>
          </div>

          {/* Placeholder for Content */}
          <div className="text-gray-600 leading-relaxed min-h-[200px]">
            <p className="text-base sm:text-lg mb-4">
              Welcome to the Reading Room of the Prime Ministers Museum & Library.
            </p>
            <p className="text-sm sm:text-base">
              Details for this section will be updated soon.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
