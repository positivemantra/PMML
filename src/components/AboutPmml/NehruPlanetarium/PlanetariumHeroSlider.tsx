"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    src: "/npp.jpg",
    alt: "Nehru Planetarium Exhibition Area",
  },
  {
    src: "/hero section/h1.jpg",
    alt: "block 1",
  },
  {
    src: "/hero section/Picture Museum copy.jpg",
    alt: "block 2",
  },
];

const INTERVAL_MS = 3000;

export default function PlanetariumHeroSlider() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || index === current) return;
      setPrev(current);
      setCurrent(index);
      setIsTransitioning(true);
      setTimeout(() => {
        setPrev(null);
        setIsTransitioning(false);
      }, 800);
    },
    [current, isTransitioning]
  );

  const goNext = useCallback(() => {
    goTo((current + 1) % SLIDES.length);
  }, [current, goTo]);

  const goPrev = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length);
  }, [current, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(goNext, INTERVAL_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [goNext, paused, current]);

  return (
    <section
      className="relative w-full aspect-[16/7.5] sm:aspect-[2.6/1] lg:aspect-[3.8/1] min-h-[280px] lg:h-auto overflow-hidden bg-slate-950"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Nehru Planetarium Hero image carousel"
    >
      {SLIDES.map((slide, i) => {
        const isActive = i === current;
        const isPrev = i === prev;
        return (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-[800ms] ease-in-out"
            style={{
              opacity: isActive ? 1 : isPrev ? 0 : 0,
              zIndex: isActive ? 2 : isPrev ? 1 : 0,
            }}
            aria-hidden={!isActive}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0 || i === 1}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        );
      })}

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="transition-all duration-300 rounded-full cursor-pointer"
            style={{
              width: i === current ? `16px` : `6px`,
              height: `6px`,
              backgroundColor: i === current ? `#f37021` : `rgba(255,255,255,0.5)`,
            }}
          />
        ))}
      </div>

      <button
        onClick={goPrev}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/35 backdrop-blur-xs border border-white/10 text-white flex items-center justify-center hover:bg-[#f37021] hover:border-[#f37021] hover:scale-105 transition-all cursor-pointer z-30 shadow-lg active:scale-95"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
      </button>

      <button
        onClick={goNext}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/35 backdrop-blur-xs border border-white/10 text-white flex items-center justify-center hover:bg-[#f37021] hover:border-[#f37021] hover:scale-105 transition-all cursor-pointer z-30 shadow-lg active:scale-95"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
      </button>
    </section>
  );
}
