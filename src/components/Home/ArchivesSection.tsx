"use client";

import React, { useState, useEffect } from 'react';
import { Spectral } from 'next/font/google';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const STATS = [
  {
    value: '2.5Cr+',
    label: 'Documents & Archival Records',
  },
  {
    value: '1.3K',
    label: 'Private papers',
  },
  {
    value: '1.3Cr+',
    label: 'Digitized Documents',
  },
];

const IMAGES = [
  {
    src: '/DSC_0278.JPG',
    label: 'Archives Preservation',
    alt: 'PMML Archives Records',
  },
  {
    src: '/DSC_0561.JPG',
    label: 'Archival Documents',
    alt: 'PMML Archives Records',
  },
  {
    src: '/DSC_4568.jpg',
    label: 'Archives Storage',
    alt: 'PMML Archives Records',
  },
  {
    src: '/NMM_2386.jpg',
    label: 'Archives Microfilm Section',
    alt: 'PMML Archives Records',
  },
];

export default function ArchivesSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % IMAGES.length);
  };

  return (
    <section className="w-full py-10 lg:py-12 bg-[#f4f4f4] relative flex flex-col items-center border-t border-gray-100 overflow-hidden">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

        {/* Two-column layout: Image Slider Left | Text/Stats Right */}
        <div className="w-full flex flex-col md:flex-row-reverse gap-12 md:gap-16 items-center justify-between">

          {/* Right Side: Header + Stats + CTA */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10">
            {/* Section Header */}
            <div className="w-full flex flex-col items-center md:items-start mb-6">
              <div className="w-16 h-[5px] bg-[#f37021] mb-4"></div>
              <h2 className={`${spectral.className} text-3xl md:text-[40px] font-bold text-[#0a1835] leading-tight text-left md:text-left w-full`}>
                The Archives
              </h2>
              <p className="text-sm md:text-[15px] text-gray-600 font-light leading-relaxed mt-4 max-w-[480px] text-justify">
                The Prime Ministers Museum and Library (PMML) came into existence on 1 April 1966. One of the principal objectives of PMML was the promotion of original research in modern and contemporary Indian history. To achieve this objective, PMML established the Archives, which was created to acquire, preserve, classify, and maintain primary and non-official source material for research. The Archives was initially formed with the acquisition of two collections viz. Jawaharlal Nehru papers and the All-India Congress Committee papers.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-[560px] mb-6">
              {STATS.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-start gap-2 py-3 px-4 bg-white border border-black/5 rounded-none shadow-sm hover:shadow-md transition-shadow min-h-[85px]"
                >
                  <span className="text-2xl md:text-[28px] font-bold text-[#0a1835] tracking-tight leading-none select-none text-left">
                    {stat.value}
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold text-gray-700 leading-tight text-left">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Explore CTA */}
            <div className="flex justify-center md:justify-start mt-2">
              <a
                href="/archives"
                className="flex items-center gap-3 text-[#0a1835] hover:text-[#f37021] font-bold text-sm tracking-wide transition-colors group cursor-pointer"
              >
                <span className="text-xs sm:text-sm font-bold">Explore</span>
                <div className="bg-[#f37021] group-hover:bg-[#d85c15] w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all shadow-md active:scale-95">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Left Side: Image Slider */}
          <div className="w-full md:w-[50%] flex-shrink-0 flex items-center justify-center md:justify-start py-6">
            <div className="relative w-full max-w-[540px] h-[200px] sm:h-[280px] md:h-[300px] lg:h-[340px] rounded-2xl overflow-hidden border border-slate-200/80 shadow-md group">
              {IMAGES.map((img, idx) => (
                <div
                  key={img.src}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    idx === activeIdx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-w-7xl) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#052356]/50 via-transparent to-transparent pointer-events-none" />
                  <p className="absolute bottom-3 left-4 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider z-20">
                    {img.label}
                  </p>
                </div>
              ))}

              {/* Arrow at Right Side */}
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 active:bg-white/60 text-white p-2.5 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-md flex items-center justify-center cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>

              {/* Indicators */}
              <div className="absolute bottom-3.5 right-4 z-30 flex gap-1.5">
                {IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      idx === activeIdx ? 'bg-white w-4' : 'bg-white/50'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
