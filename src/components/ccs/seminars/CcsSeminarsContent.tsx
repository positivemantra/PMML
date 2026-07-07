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

export default function CcsSeminarsContent() {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* ── Hero Banner ── */}
      <CcsHeroSlider />

      {/* ── Content Section ── */}
      <section id="seminars-lectures" className="w-full py-12 lg:py-16 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Image Card */}
            <div className="lg:col-span-5 w-full">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-slate-50 w-full">
                <Image
                  src="/seminar.JPG"
                  alt="Seminars and Lectures at Center for Contemporary Studies"
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
                Seminars/Lectures
              </h2>

              <div className="space-y-4 text-sm sm:text-[15px] text-gray-600 font-medium leading-relaxed text-justify">
                <p>
                  The Centre for Contemporary Studies (CCS) at the Prime Ministers Museum and Library (PMML) regularly organizes seminars, lectures, panel discussions, conferences, book discussions, and other academic events to promote informed dialogue on themes related to Modern and Contemporary India. These programmes provide a platform for scholars, researchers, policymakers, authors, and public intellectuals to engage in meaningful discussions on India&apos;s history, politics, society, economy, governance, foreign policy, and cultural developments.
                </p>
                <p>
                  Through these academic interactions, CCS seeks to encourage interdisciplinary research, facilitate the exchange of ideas, and bridge the gap between academic scholarship and public policy. Book discussions and lectures by distinguished experts further enrich intellectual discourse by introducing new perspectives and recent research findings. By bringing together diverse voices from India and abroad, these events contribute to a deeper understanding of India&apos;s historical evolution and contemporary challenges, while strengthening PMML&apos;s role as a leading centre for research, academic engagement, and policy-oriented dialogue.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
