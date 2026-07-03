"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Spectral } from "next/font/google";
import { ChevronLeft, ChevronRight, Search, Star } from "lucide-react";
import HeroSection from "@/components/Home/HeroSection";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

interface Exhibit {
  id: string;
  title: string;
  menuLabel: string;
  description: string;
  image: string;
}

const EXHIBITS: Exhibit[] = [
  {
    id: "selfie-pm",
    title: "Selfie with Prime Minister",
    menuLabel: "Selfie with Prime Minister",
    description: "Take a selfie with your favourite Prime Minister using Augmented Reality.",
    image: "/anubhuti/selfiewithpm.jpg"
  },
  {
    id: "handwriting-robot",
    title: "Letter from Prime Minister",
    menuLabel: "Letter from Prime Minister",
    description: "Receive a personalized letter handwritten in the signature style of India&apos;s great Prime Ministers.",
    image: "/anubhuti/roboticalligraphy.jpg"
  },
  {
    id: "unity-wall",
    title: "Unity Wall",
    menuLabel: "Unity Wall",
    description: "Collaborate with fellow visitors by holding hands to complete the electrical circuit and light up the Unity Chain.",
    image: "/anubhuti/unitychain.jpg"
  },
  {
    id: "shatabdi-sankalp",
    title: "Shatabdi Sankalp",
    menuLabel: "Shatabdi Sankalp",
    description: "Explore India&apos;s journey, developmental achievements, and goals as we march towards the centenary in 2047.",
    image: "/anubhuti/satabdi.jpg"
  },
  {
    id: "stroll-pm",
    title: "Lal Qile ki Prachir se",
    menuLabel: "Lal Qile ki Prachir se",
    description: "Take a journey through India&apos;s most iconic moments from the ramparts of the Red Fort, experiencing the Prime Ministers who have addressed the nation from this historic site.",
    image: "/anubhuti/hologram.jpeg"
  },
  
  {
    id: "sketch-mission",
    title: "Sketch and Bring a Mission to Life",
    menuLabel: "Sketch and Bring a Mission to Life",
    description: "Draw and color on digital tablets and watch your sketches animate on a giant shared projection screen.",
    image: "/anubhuti/drawing.jpg"
  },
  {
    id: "stroll-pm-new",
    title: "Stroll with the PM",
    menuLabel: "Stroll with the PM",
    description: "Walk alongside holographic projections of India&apos;s Prime Ministers in an immersive interactive corridor.",
    image: "/anubhuti/walk with pm.jpg"
  },
  {
    id: "ai-holobox-new",
    title: "Ask the Visionary",
    menuLabel: "Ask the Visionary/AI Holobox",
    description: "Have interactive, real-time conversations with 3D holographic projections of former Prime Ministers.",
    image: "/anubhuti/ai holobox.JPG"
  }
];

export default function AnubhutiZoneContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeId, setActiveId] = useState("selfie-pm");

  // Filter exhibits by search query
  const filteredExhibits = EXHIBITS.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Find the active exhibit index in the filtered list
  const activeIndex = filteredExhibits.findIndex((item) => item.id === activeId);

  // If active item gets filtered out, auto-select first available filtered item
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash && EXHIBITS.some((ex) => ex.id === hash)) {
        setActiveId(hash);
      }
    }
  }, []);

  useEffect(() => {
    if (filteredExhibits.length > 0 && activeIndex === -1) {
      setActiveId(filteredExhibits[0].id);
    }
  }, [searchQuery, filteredExhibits, activeIndex]);

  const activeExhibit = EXHIBITS.find((item) => item.id === activeId) || EXHIBITS[0];

  const handlePrev = () => {
    if (filteredExhibits.length === 0) return;
    const prevIndex = (activeIndex - 1 + filteredExhibits.length) % filteredExhibits.length;
    setActiveId(filteredExhibits[prevIndex].id);
  };

  const handleNext = () => {
    if (filteredExhibits.length === 0) return;
    const nextIndex = (activeIndex + 1) % filteredExhibits.length;
    setActiveId(filteredExhibits[nextIndex].id);
  };

  return (
    <div className="w-full flex flex-col bg-white">
      {/* ── Main Hero Carousel ── */}
      <HeroSection />

      {/* ── Title Bar (Grey Band) ── */}
      <div className="w-full bg-[#f4f4f4] py-8 text-[#052356] border-t border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-start text-left">
            <div className="w-12 h-1 bg-[#f37021] mb-4" />
            <h1 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
              Anubhuti Zone
            </h1>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-[#052356] font-medium pl-4 pr-10 py-2 rounded-lg text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#f37021] placeholder-slate-400 shadow-sm"
            />
            <Search className="absolute right-3 top-3 w-4 h-4 text-[#f37021] pointer-events-none" />
          </div>
        </div>
      </div>

      {/* ── Content Layout ── */}
      <section className="w-full py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="col-span-1 lg:col-span-4 flex flex-col select-none w-full gap-1">
              {filteredExhibits.length > 0 ? (
                filteredExhibits.map((item) => {
                  const isActive = item.id === activeId;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveId(item.id)}
                      className={`flex items-center text-left transition-all duration-300 w-full cursor-pointer tracking-wider uppercase text-xs sm:text-[13px] ${
                        isActive
                          ? "my-1.5 py-4 px-5 bg-[#f4f4f4] border-r-2 border-b-2 border-t-0 border-l-0 border-[#cbd5e1] text-[#f37021] font-bold rounded-r-xl rounded-l-none shadow-xs"
                          : "py-4 px-1 text-[#052356]/60 font-semibold hover:text-[#f37021] border-b border-[#f8f8f8]"
                      }`}
                    >
                      {isActive && (
                        <svg className="w-[22px] h-[22px] mr-3.5 text-[#052356] fill-[#052356] flex-shrink-0" viewBox="0 0 24 24">
                          <path d="M12 3l1.9 2.5 3.1-.7.2 3.1 2.8 1.4-1.6 2.7 1.6 2.7-2.8 1.4-.2 3.1-3.1-.7L12 21l-1.9-2.5-3.1.7-.2-3.1-2.8-1.4 1.6-2.7-1.6-2.7 2.8-1.4.2-3.1 3.1.7z" />
                        </svg>
                      )}
                      <span>
                        {item.menuLabel}
                      </span>
                    </button>
                  );
                })
              ) : (
                <div className="py-8 text-center text-slate-400 text-sm font-medium">
                  No exhibits match your search.
                </div>
              )}
            </div>

            {/* Right Column: Active Exhibit Display Card */}
            <div className="col-span-1 lg:col-span-8 flex flex-col items-start justify-center relative w-full">
              {filteredExhibits.length > 0 ? (
                <div className="w-full flex flex-col items-start gap-4">
                  {/* Exhibit Image Display */}
                  <div className="relative w-full aspect-[16/10] sm:aspect-[2/1] rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 group">
                    <Image
                      src={activeExhibit.image}
                      alt={activeExhibit.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 800px"
                      className="object-cover"
                    />

                    {/* Left Arrow Button */}
                    <button
                      onClick={handlePrev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200/50 text-[#f37021] flex items-center justify-center hover:bg-[#f37021] hover:text-white transition-all cursor-pointer z-10 shadow-md active:scale-95"
                      aria-label="Previous exhibit"
                    >
                      <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                    </button>

                    {/* Right Arrow Button */}
                    <button
                      onClick={handleNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200/50 text-[#f37021] flex items-center justify-center hover:bg-[#f37021] hover:text-white transition-all cursor-pointer z-10 shadow-md active:scale-95"
                      aria-label="Next exhibit"
                    >
                      <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                    </button>
                  </div>

                  {/* Description below the image */}
                  <div className="w-full text-left">
                    <p className="text-[#052356]/85 text-xs sm:text-[14px] md:text-[15px] leading-relaxed text-justify font-medium">
                      {activeExhibit.description}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="w-full aspect-[16/10] rounded-3xl bg-slate-50 flex items-center justify-center border border-dashed border-slate-200">
                  <span className="text-slate-400 text-sm font-medium">Please refine your search query.</span>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
