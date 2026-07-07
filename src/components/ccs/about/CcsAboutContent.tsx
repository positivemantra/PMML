"use client";

import React from "react";
import Image from "next/image";
import { Spectral } from "next/font/google";
import CcsHeroSlider from "@/components/ccs/CcsHeroSlider";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export default function CcsAboutContent() {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* ── Hero Banner ── */}
      <CcsHeroSlider />

      {/* ── About Section ── */}
      <section id="about" className="w-full py-12 lg:py-16 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Image Card */}
            <div className="lg:col-span-5 w-full">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-slate-50 w-full">
                <Image
                  src="/room.JPG"
                  alt="Academic Disk at Center for Contemporary Studies"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-7 flex flex-col justify-start">
              <div className="w-12 h-1 bg-[#f37021] mb-2.5" />

              <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight mb-6`}>
                Center for Contemporary Studies
              </h2>

              <div className="space-y-4 text-sm sm:text-[15px] text-gray-600 font-medium leading-relaxed text-justify">
                <p>
                 The Centre for Contemporary Studies (CCS) was set up as an advanced studies unit of NMML in 1990. It was established for the promotion of research on modern Indian and contemporary history. It offers three levels of research fellowships -Junior Fellow, Fellow and Senior Fellow to scholars engaged in advanced research. The three research areas in which fellowships are granted are 'India: Recent Historical Trends and Developments', 'India in Transition: Issues and Challenges’ and 'India and the Wider World'.  The CCS also offers fellowships like Atal Bihari Vajpayee Fellowship, Academic Research Translation and Book Writing Fellowship and NMML Visiting Fellowship. 
                </p>
                <p>
                  The Centre regularly conducts academic activities such as lectures, conferences, book discussions, panel discussions, workshops, etc. The Centre also provides research affiliation to scholars who have been awarded fellowships by other organizations like the University Grants Commission (UGC), Indian Council of Social Science Research (ICSSR), Indian Council of Historical Research (ICHR) and other similar organizations. The Centre has collaboration with the American Institute of Indian Studies (AIIS) whereby it provides research affiliation to scholars from various universities of the United States of America.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-8 w-full">

                {/* Stat Box 1 */}
                <div className="flex flex-col items-center justify-center bg-white rounded-[11px] border-b-[4px] sm:border-b-[6px] border-[#E88B1D] shadow-[0_4px_20px_rgba(0,0,0,0.05)] w-full h-[80px] sm:h-[90px] lg:h-[95px] px-2 text-center transition-all duration-200 hover:shadow-md">
                  <span className="text-lg sm:text-xl lg:text-[24px] font-bold text-[#052356] leading-none mb-1 sm:mb-1.5">30+</span>
                  <span className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#444651] font-bold tracking-wider uppercase">Fellows Annually</span>
                </div>

                {/* Stat Box 2 */}
                <div className="flex flex-col items-center justify-center bg-white rounded-[11px] border-b-[4px] sm:border-b-[6px] border-[#E88B1D] shadow-[0_4px_20px_rgba(0,0,0,0.05)] w-full h-[80px] sm:h-[90px] lg:h-[95px] px-2 text-center transition-all duration-200 hover:shadow-md">
                  <span className="text-lg sm:text-xl lg:text-[24px] font-bold text-[#052356] leading-none mb-1 sm:mb-1.5">2.5K+</span>
                  <span className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#444651] font-bold tracking-wider uppercase">Seminars Hosted</span>
                </div>

                {/* Stat Box 3 */}
                <div className="flex flex-col items-center justify-center bg-white rounded-[11px] border-b-[4px] sm:border-b-[6px] border-[#E88B1D] shadow-[0_4px_20px_rgba(0,0,0,0.05)] w-full h-[80px] sm:h-[90px] lg:h-[95px] px-2 text-center transition-all duration-200 hover:shadow-md">
                  <span className="text-lg sm:text-xl lg:text-[24px] font-bold text-[#052356] leading-none mb-1 sm:mb-1.5">150+</span>
                  <span className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#444651] font-bold tracking-wider uppercase">Papers Published</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
