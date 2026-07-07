"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Spectral } from "next/font/google";
import ArchivesHeroSlider from "@/components/archives/ArchivesHeroSlider";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

interface CatalogueItem {
  title: string;
  href: string;
}

const LEFT_ITEMS: CatalogueItem[] = [
  {
    title: "Institutional Collections",
    href: "/archives/catalogue-holdings/institutional-collections",
  },
   {
    title: "Individual Collections",
    href: "/archives/catalogue-holdings/individual-collections",
  },
  
  {
    title: "PMML Manuscripts",
    href: "#",
  },
  {
    title: "Digital Archives",
    href: "/archives/catalogue-holdings/digital-archives",
  },
];

const RIGHT_ITEMS: CatalogueItem[] = [
 {
    title: "Miscellaneous Collections",
    href: "/archives/catalogue-holdings/miscellaneous-collections",
  },
  {
    title: "Recent Acquisitions",
    href: "/archives/catalogue-holdings/recent-acquisitions",
  },
  {
    title: "Oral History Transcripts",
    href: "/archives/catalogue-holdings/oral-history-transcripts",
  },
  {
    title: "Reading Room",
    href: "/archives/catalogue-holdings/reading-room",
  },
];

export default function CatalogueOfHoldingsContent() {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* ── Subpage Hero Banner ── */}
      <ArchivesHeroSlider />

      {/* ── Main Content Section ── */}
      <section className="w-full py-12 lg:py-16 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Page Heading */}
          <div className="mb-10 text-left">
            <div className="w-12 h-1 bg-[#f37021] mb-2.5" />
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
              Catalogue of private papers
            </h2>
          </div>

          {/* Book-like Structure Outer Container */}
          <div className="relative w-full my-10 p-0">
            
            {/* Symmetrical stacked pages wrapper */}
            <div className="relative p-0 flex flex-col md:flex-row items-stretch z-10 gap-0">
              
              {/* LEFT PAGE STACK */}
              <div className="relative flex-1 flex flex-col min-h-[400px] md:min-h-[490px] z-20">
                {/* Bottom Page Sheet (Left) */}
                <div className="absolute inset-y-[6px] left-[8px] right-[6px] md:right-0 bg-[#ebdec6] border border-gray-300/40 rounded-[16px] md:rounded-l-[16px] md:rounded-r-none z-10 pointer-events-none shadow-md md:shadow-[-12px_16px_28px_rgba(0,0,0,0.08)]" />
                {/* Middle Page Sheet (Left) */}
                <div className="absolute inset-y-[3px] left-[4px] right-[3px] md:right-0 bg-[#f7f1e3] border border-gray-200/60 rounded-[18px] md:rounded-l-[18px] md:rounded-r-none z-20 pointer-events-none" />
                {/* Top Page Sheet (Left) */}
                <div className="relative flex-1 bg-[#fffdfa] border border-gray-200 md:border-r-0 rounded-[20px] md:rounded-l-[20px] md:rounded-r-none p-5 sm:p-7 md:py-10 md:pl-20 md:pr-24 z-30 shadow-sm flex flex-col justify-between overflow-hidden">
                  
                  {/* Curvature Page Gradient (creates 3D bend towards spine on right) */}
                  <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-black/[0.04] pointer-events-none z-30 hidden md:block" />
                  
                  {/* Left Column (2x2 Grid of Cards) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 z-20">
                    {LEFT_ITEMS.map((item) => (
                      <div 
                        key={item.title} 
                        className="relative bg-white border border-gray-200 border-r-[6px] border-r-[#f37021] rounded-[20px] p-5 flex flex-col justify-end shadow-[0_10px_25px_rgba(0,0,0,0.03)] min-h-[170px] sm:min-h-[180px] hover:shadow-md transition-all duration-300 overflow-hidden group/card z-20"
                      >
                        {/* Bookmark Ribbon */}
                        <div 
                          className="absolute top-0 right-5 w-4 h-8 bg-[#ffd5a6] z-10 transition-transform duration-300 group-hover/card:translate-y-0.5 drop-shadow-[0_2px_3px_rgba(0,0,0,0.08)]"
                          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)' }}
                        />
                        
                        {/* Title */}
                        <span className="text-[12.5px] sm:text-[13px] font-bold text-[#052356] uppercase tracking-wide leading-snug max-w-[75%] mb-2.5 mt-1">
                          {item.title}
                        </span>

                        {/* View Button */}
                        <Link
                          href={item.href}
                          className="inline-flex items-center gap-1.5 border-[1.5px] border-[#f37021] text-[#f37021] hover:bg-[#f37021] hover:text-white rounded-[8px] px-3.5 py-1 text-[11px] font-bold transition-all duration-300 cursor-pointer w-fit group"
                        >
                          <span>View</span>
                          <svg className="w-3.5 h-3.5 text-[#f37021] group-hover:text-white transition-colors stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.644C3.764 7.733 7.828 4.5 12 4.5c4.172 0 8.236 3.233 9.964 7.178.07.158.07.344 0 .502-1.728 3.945-5.792 7.248-9.964 7.248-4.172 0-8.236-3.233-9.964-7.22z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CENTER SPINE / CREASE (Desktop only) */}
              <div className="relative w-full md:w-0 z-40 flex-shrink-0">
                {/* Central deep fold shadow */}
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[36px] bg-gradient-to-r from-transparent via-black/15 to-transparent pointer-events-none z-40 hidden md:block" />
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[12px] bg-gradient-to-r from-transparent via-black/25 to-transparent pointer-events-none z-40 hidden md:block" />
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-black/40 pointer-events-none z-40 hidden md:block" />
              </div>

              {/* RIGHT PAGE STACK */}
              <div className="relative flex-1 flex flex-col min-h-[400px] md:min-h-[490px] z-20 mt-6 md:mt-0">
                {/* Bottom Page Sheet (Right) */}
                <div className="absolute inset-y-[6px] right-[8px] left-[6px] md:left-0 bg-[#ebdec6] border border-gray-300/40 rounded-[16px] md:rounded-r-[16px] md:rounded-l-none z-10 pointer-events-none shadow-md md:shadow-[12px_16px_28px_rgba(0,0,0,0.08)]" />
                {/* Middle Page Sheet (Right) */}
                <div className="absolute inset-y-[3px] right-[4px] left-[3px] md:left-0 bg-[#f7f1e3] border border-gray-200/60 rounded-[18px] md:rounded-r-[18px] md:rounded-l-none z-20 pointer-events-none" />
                {/* Top Page Sheet (Right) */}
                <div className="relative flex-1 bg-[#fffdfa] border border-gray-200 md:border-l-0 rounded-[20px] md:rounded-r-[20px] md:rounded-l-none p-5 sm:p-7 md:py-10 md:pl-24 md:pr-20 z-30 shadow-sm flex flex-col justify-between overflow-hidden">
                  
                  {/* Curvature Page Gradient (creates 3D bend towards spine on left) */}
                  <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-l from-transparent to-black/[0.04] pointer-events-none z-30 hidden md:block" />
                  
                  {/* Right Column (2x2 Grid of Cards) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 z-20">
                    {RIGHT_ITEMS.map((item) => (
                      <div 
                        key={item.title} 
                        className="relative bg-white border border-gray-200 border-r-[6px] border-r-[#f37021] rounded-[20px] p-5 flex flex-col justify-end shadow-[0_10px_25px_rgba(0,0,0,0.03)] min-h-[170px] sm:min-h-[180px] hover:shadow-md transition-all duration-300 overflow-hidden group/card z-20"
                      >
                        {/* Bookmark Ribbon */}
                        <div 
                          className="absolute top-0 right-5 w-4 h-8 bg-[#ffd5a6] z-10 transition-transform duration-300 group-hover/card:translate-y-0.5 drop-shadow-[0_2px_3px_rgba(0,0,0,0.08)]"
                          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)' }}
                        />
                        
                        {/* Title */}
                        <span className="text-[12.5px] sm:text-[13px] font-bold text-[#052356] uppercase tracking-wide leading-snug max-w-[75%] mb-2.5 mt-1">
                          {item.title}
                        </span>

                        {/* View Button */}
                        <Link
                          href={item.href}
                          className="inline-flex items-center gap-1.5 border-[1.5px] border-[#f37021] text-[#f37021] hover:bg-[#f37021] hover:text-white rounded-[8px] px-3.5 py-1 text-[11px] font-bold transition-all duration-300 cursor-pointer w-fit group"
                        >
                          <span>View</span>
                          <svg className="w-3.5 h-3.5 text-[#f37021] group-hover:text-white transition-colors stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.644C3.764 7.733 7.828 4.5 12 4.5c4.172 0 8.236 3.233 9.964 7.178.07.158.07.344 0 .502-1.728 3.945-5.792 7.248-9.964 7.248-4.172 0-8.236-3.233-9.964-7.22z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
