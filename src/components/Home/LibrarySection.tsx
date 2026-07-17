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

const IMAGES = [
  {
    src: '/hero section/Library_Panorama1.jpg',
    label: 'Library Panorama',
    alt: 'PMML Library Main Hall',
  },
  {
    src: '/library.jpg',
    label: 'Library Main Hall',
    alt: 'PMML Library Main Hall',
  },
  {
    src: '/DSC_3203 copy.jpg',
    label: 'Library Seating & Shelves',
    alt: 'PMML Library',
  },
  {
    src: '/DSC_3206 copy.jpg',
    label: 'Library Book Stacks',
    alt: 'PMML Library',
  }
];

export default function LibrarySection() {
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
    <section className="w-full py-10 lg:py-12 bg-white relative flex flex-col items-center overflow-hidden">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Two-column layout */}
        <div className="w-full flex flex-col md:flex-row gap-12 md:gap-16 items-center justify-between">
          
          {/* Left Side: Header, Content, CTA */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10">
            <div className="w-full flex flex-col items-center md:items-start mb-6">
              <div className="w-16 h-[5px] bg-[#f37021] mb-4"></div>
              <h2 className={`${spectral.className} text-3xl md:text-[40px] font-bold text-[#0a1835] leading-tight text-left md:text-left w-full`}>
                Library
              </h2>
              <p className="text-sm md:text-[15px] text-gray-600 font-light leading-relaxed mt-4 max-w-[480px] text-justify">
                The Library of the Prime Ministers Museum and Library is one of the foremost research libraries in the country for the study of modern and contemporary Indian history. Established as a core component of the institution in 1966, the Library supports advanced research and scholarly inquiry across disciplines related to India's political, social, economic, and cultural development. The Library holds an extensive and diverse collection of printed and reference material, including books, journals, newspapers, government publications, reports, pamphlets, and new publications. Its holdings cover a wide range of subjects such as the Indian national movement, constitutional and political history, public administration, international relations, economic 
              </p>
            </div>

            {/* Explore & Koha OPAC CTAs */}
            <div className="flex flex-row items-center gap-6 justify-center md:justify-start mt-2">
              <a
                href="/library"
                className="flex items-center gap-3 text-[#0a1835] hover:text-[#f37021] font-bold text-sm tracking-wide transition-colors group cursor-pointer"
              >
                <span className="text-xs sm:text-sm font-bold">Visit Library</span>
                <div className="bg-[#f37021] group-hover:bg-[#d85c15] w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all shadow-md active:scale-95">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </a>

              <button
                onClick={() => {
                  const confirmLeave = window.confirm(
                    'This would take you to an external website that opens in a new tab. Do you want to continue anyway?'
                  );
                  if (confirmLeave) {
                    window.open('https://pmmlcatalog.ltsinformatics.com/', '_blank', 'noopener,noreferrer');
                  }
                }}
                className="flex items-center gap-1.5 text-[#f37021] hover:text-[#d85c15] font-extrabold text-xs sm:text-sm tracking-wider transition-colors cursor-pointer bg-transparent border-none p-0"
              >
                <span className="uppercase tracking-wide font-bold">Koha Opac</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side: Image Slider */}
          <div className="w-full md:w-[50%] flex-shrink-0 flex items-center justify-center md:justify-end py-6">
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
