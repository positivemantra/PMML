"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Spectral } from "next/font/google";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import HeroSection from "@/components/Home/HeroSection";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

interface Show {
  id: string;
  title: string;
  menuLabel: string;
  description: string;
  image: string;
}

const SHOWS: Show[] = [
   {
    id: "light-sound-show",
    title: "Light and Sound Show",
    menuLabel: "Light and Sound Show",
    description: "Watch an Immersive tale of Valliant Women Warriors, &quot;Veeranganaon ki Mahagatha&quot; who strived to uphold the nation&apos;s pride, in Hindi at 6:30 pm. Also, watch the story of India&apos;s space programme and other important achievements of the last 75 years with the help of laser lights, sound and visuals in English at 7:15 pm.",
    image: "/special shows/light and sound show.jpg"
  },
   {
    id: "suraksha-show",
    title: "Suraksha",
    menuLabel: "Suraksha",
    description: "An immersive 360-degree cinematic experience that takes you on a journey through India&apos;s advancements in science and technology.",
    image: "/special shows/suraksha.jpg"
  },
  {
    id: "bhavishya-jhalkiyan",
    title: "Bhavishya ki Jhalkiyan",
    menuLabel: "Bhavishya ki Jhalkiyan",
    description: "Take a seat in the helicopter pod and prepare yourselves for a splendid, 360-degree virtual reality projection of the nation&apos;s exciting futuristic developments.",
    image: "/special shows/bhavishya.jpg"
  },
  {
    id: "time-machine-show",
    title: "Time Machine",
    menuLabel: "Nuclear Journey Dream to Reality",
    description: "Ride back in time and relive the past through our time machine. Watch India change and transform before your eyes.",
    image: "/special shows/timemachine.jpg"
  },
 
  {
    id: "lal-qila-prachir",
    title: "Lal Qile ki Prachir Se",
    menuLabel: "Lal Qile ki Prachir Se",
    description: "Witness the memorable speeches given by the Prime Ministers at the Red Fort.",
    image: "/special shows/pokhran.jpg"
  },
  {
    id: "parichay-show",
    title: "Parichay",
    menuLabel: "Parichay",
    description: "A state of the art 360-degree immersive room ushers you into the world of Indian Prime Ministers, showcasing their key contributions that shaped the nation.",
    image: "/special shows/parichay.jpg"
  },
  {
    id: "freedom-unity",
    title: "Freedom & Unity",
    menuLabel: "Freedom & Unity",
    description: "This room tells the story of the freedom struggle led by Mahatma Gandhi, the story of Netaji Subhas Chandra Bose and Indian National Army, and the integration of the states achieved by Sardar Vallabhbhai Patel.",
    image: "/special shows/freedom and unity.jpg"
  }
];

export default function SpecialShowsContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeId, setActiveId] = useState("bhavishya-jhalkiyan");

  // Filter shows by search query
  const filteredShows = SHOWS.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Find the active index in the filtered list
  const activeIndex = filteredShows.findIndex((item) => item.id === activeId);

  // If active item gets filtered out, auto-select first available filtered item
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash && SHOWS.some((show) => show.id === hash)) {
        setActiveId(hash);
      }
    }
  }, []);

  useEffect(() => {
    if (filteredShows.length > 0 && activeIndex === -1) {
      setActiveId(filteredShows[0].id);
    }
  }, [searchQuery, filteredShows, activeIndex]);

  const activeShow = SHOWS.find((item) => item.id === activeId) || SHOWS[0];

  const handlePrev = () => {
    if (filteredShows.length === 0) return;
    const prevIndex = (activeIndex - 1 + filteredShows.length) % filteredShows.length;
    setActiveId(filteredShows[prevIndex].id);
  };

  const handleNext = () => {
    if (filteredShows.length === 0) return;
    const nextIndex = (activeIndex + 1) % filteredShows.length;
    setActiveId(filteredShows[nextIndex].id);
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
              Special Shows
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
            
            {/* Left Column: Sidebar Menu */}
            <div className="col-span-1 lg:col-span-4 flex flex-col select-none w-full gap-1">
              {filteredShows.length > 0 ? (
                filteredShows.map((item) => {
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
                  No shows match your search.
                </div>
              )}
            </div>

            {/* Right Column: Active Show Display Card */}
            <div className="col-span-1 lg:col-span-8 flex flex-col items-center justify-center relative w-full">
              {filteredShows.length > 0 ? (
                <div className="relative w-full flex items-center justify-between gap-4">
                  {/* Left Arrow Button */}
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full border border-[#f37021] text-[#f37021] flex items-center justify-center hover:bg-[#f37021] hover:text-white transition-colors cursor-pointer flex-shrink-0"
                    aria-label="Previous show"
                  >
                    <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                  </button>

                  {/* Show Display Box */}
                  <div className="flex-1 flex flex-col items-start text-left gap-4">
                    {/* Show Heading Above Image */}
                    <div className="w-full px-2">
                      <h2 className={`${spectral.className} text-xl sm:text-2xl font-bold text-[#052356]`}>
                        {activeShow.title}
                      </h2>
                    </div>

                    {/* Image Container with Description Overlay */}
                    <div className="relative w-full aspect-[16/10] sm:aspect-[1.8/1] rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50">
                      <Image
                        src={activeShow.image}
                        alt={activeShow.title}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 800px"
                        className="object-cover"
                      />
                      
                      {/* Gradient Overlay at Bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

                      {/* Description Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col items-start text-left">
                        <p className="text-white/95 text-xs sm:text-[14px] leading-relaxed max-w-xl font-medium">
                          {activeShow.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Arrow Button */}
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full border border-[#f37021] text-[#f37021] flex items-center justify-center hover:bg-[#f37021] hover:text-white transition-colors cursor-pointer flex-shrink-0"
                    aria-label="Next show"
                  >
                    <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                  </button>
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
