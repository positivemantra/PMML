"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Spectral } from "next/font/google";
import LibraryHeroSlider from "@/components/library/LibraryHeroSlider";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const EXPLORE_ITEMS = [
  {
    label: "Microfilm",
    imageSrc: "/Frame 301.png",
    href: "#microfilm",
  },
  {
    label: "Microfiche",
    imageSrc: "/Frame 300.png",
    href: "#microfiche",
  },
  {
    label: "List of Holding Periodicals",
    imageSrc: "/Frame 302.png",
    href: "#list-of-holdings",
  },
  {
    label: "Personal Collections",
    imageSrc: "/Frame 303.png",
    href: "#personal",
  },
  {
    label: "Rare Book Collections",
    imageSrc: "/Frame 304.png",
    href: "#rare-book",
  },
  {
    label: "Rules & Regulations",
    imageSrc: "/Frame 306.png",
    href: "#rules-regulations",
  },
];

const TEAM_DATA = [
  {
    id: "librarian",
    role: "LIBRARIAN",
    name: "Shri Vikas Kumar",
    contact: "21411895",
    email: "lio@nmml.gov.in",
  },
  {
    id: "staff",
    role: "OFFICE STAFF",
    name: "Shri Vikas Kumar",
    contact: "21411895",
    email: "lio@nmml.gov.in",
  },
];

const GALLERY_IMAGES = [
  { src: "/DSC_3203 copy.jpg", alt: "Research Study Area" },
  { src: "/library.jpg", alt: "Library Corridor" },
  { src: "/DSC_3206 copy.jpg", alt: "Book Stacks" },
  { src: "/hero section/Library_Panorama1.jpg", alt: "Main Reading Hall" },
  { src: "/DSC_3203 copy.jpg", alt: "Periodicals & Reference Section" }
];

const EXTENDED_GALLERY_IMAGES = [...GALLERY_IMAGES, ...GALLERY_IMAGES.slice(0, 3)];

export default function LibraryAboutContent() {
  const [activeTab, setActiveTab] = useState("librarian");
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [galleryVisible, setGalleryVisible] = useState(3);
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
  const [isPausedGallery, setIsPausedGallery] = useState(false);
  const [galleryTransitionEnabled, setGalleryTransitionEnabled] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setGalleryVisible(1);
      else if (window.innerWidth < 1024) setGalleryVisible(2);
      else setGalleryVisible(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Infinite Gallery Carousel auto-moving logic
  useEffect(() => {
    if (isPausedGallery) return;
    const interval = setInterval(() => {
      setGalleryTransitionEnabled(true);
      setGalleryIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPausedGallery]);

  useEffect(() => {
    if (galleryIndex === GALLERY_IMAGES.length) {
      const timer = setTimeout(() => {
        setGalleryTransitionEnabled(false);
        setGalleryIndex(0);
      }, 300); // Wait for transition duration (300ms)
      return () => clearTimeout(timer);
    }
  }, [galleryIndex]);

  useEffect(() => {
    if (!galleryTransitionEnabled) {
      const timer = setTimeout(() => {
        setGalleryTransitionEnabled(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [galleryTransitionEnabled]);

  const handlePrevGallery = () => {
    if (galleryIndex === 0) {
      setGalleryTransitionEnabled(false);
      setGalleryIndex(GALLERY_IMAGES.length);
      setTimeout(() => {
        setGalleryTransitionEnabled(true);
        setGalleryIndex(GALLERY_IMAGES.length - 1);
      }, 50);
    } else {
      setGalleryTransitionEnabled(true);
      setGalleryIndex((prev) => prev - 1);
    }
  };

  const handleNextGallery = () => {
    setGalleryTransitionEnabled(true);
    setGalleryIndex((prev) => prev + 1);
  };

  const galleryGap = 20;
  const galleryTransformX = `calc(-${galleryIndex} * ( (100% - ${(galleryVisible - 1) * galleryGap}px) / ${galleryVisible} + ${galleryGap}px ))`;

  return (
    <div className="w-full flex flex-col bg-white">
      {/* ── Subpage Hero Banner ── */}
      <LibraryHeroSlider />

      {/* ── About Section ── */}
      <section className="w-full py-12 lg:py-16 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Image column */}
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-slate-50 w-full">
              <Image
                src="/DSC_3203 copy.jpg"
                alt="Research Reading Room inside the Library"
                fill
                sizes="(max-w-1024px) 100vw, 550px"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Right text content column */}
            <div className="lg:col-span-6 flex flex-col text-left justify-start">
              {/* Orange Accent Line */}
              <div className="w-12 h-1 bg-[#f37021] mb-2.5" />

              {/* Heading matching welcome section in home page */}
              <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight mb-6`}>
                About
              </h2>

              <p className="text-sm sm:text-[15px] text-gray-600 font-medium leading-relaxed mb-6 text-justify">
                The Library of the Prime Ministers Museum and Library is one of the foremost research libraries in the country for the study of Modern and Contemporary Indian History. Established as a core component of the institution in 1966, the Library supports advanced research and scholarly inquiry across disciplines related to India's political, social, economic, institutional and cultural development. The Library holds an extensive and diverse collection of printed and reference material, including books, journals, newspapers, government publications, reports, pamphlets, and new publications. Its holdings cover a wide range of subjects such as the Indian national movement, constitutional and political history, public administration, international relations, economic  ...
              </p>

              <div>
                <button
                  onClick={() => setIsReadMoreOpen(true)}
                  className="inline-flex items-center gap-2 bg-[#E88B1D] hover:bg-[#d85c15] text-white font-bold text-[11px] sm:text-[12px] tracking-wider uppercase rounded-lg px-5 py-2.5 shadow-md hover:shadow-lg transition-all duration-200 active:scale-98 cursor-pointer select-none outline-none"
                >
                  <span>Read More</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Explore Section ── */}
      <section className="w-full py-12 lg:py-16 bg-white text-left border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10 text-left">
            <div className="w-16 h-[5px] bg-[#f37021] mb-4.5" />
            <h3 className={`${spectral.className} text-3xl sm:text-[38px] font-bold text-[#052356] tracking-tight`}>
              Explore
            </h3>
          </div>

          {/* Grid Container */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {EXPLORE_ITEMS.map((item) => {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex flex-col items-center select-none cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 w-full text-center"
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-square transition-transform duration-500 group-hover:scale-[1.03] mb-3">
                    <Image
                      src={item.imageSrc}
                      alt={item.label}
                      fill
                      priority
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      className="object-contain"
                    />
                  </div>

                  {/* Label */}
                  <span className="text-[12px] sm:text-[13px] font-bold text-[#052356] group-hover:text-[#f37021] transition-colors tracking-wide leading-tight text-center min-h-[34px] flex items-center justify-center">
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Library Team Section ── */}
      <section className="w-full py-6 lg:py-8 bg-[#FDFBF7] border-t border-b border-[#F4EFE6]/60 text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full pt-4 sm:pt-5">
            {/* Heading */}
            <div>
              <div className="w-12 h-1 bg-[#f37021] mb-2" />
              <h3 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight mb-6`}>
                Library Team
              </h3>
            </div>

            {/* Grid for Tabs & Details */}
            <div className="grid grid-cols-1 md:grid-cols-[190px_1fr] gap-6 items-stretch w-full">
              {/* Vertical Tabs (Left - OUTSIDE the white box) */}
              <div className="flex flex-col gap-2.5 justify-start pt-1.5">
                {TEAM_DATA.map((member) => (
                  <button
                    key={member.id}
                    type="button"
                    onClick={() => setActiveTab(member.id)}
                    className={`text-left text-xs font-bold py-2.5 px-4 transition-all duration-200 w-fit ${activeTab === member.id
                        ? "bg-white text-[#f37021] rounded-lg shadow-sm border border-gray-100/50"
                        : "text-[#052356]/60 hover:text-[#052356] bg-transparent"
                      }`}
                  >
                    {member.role}
                  </button>
                ))}
              </div>

              {/* Details Panel (Right - INSIDE the white box) */}
              <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.02)] flex flex-col justify-center">
                {(() => {
                  const activeMember = TEAM_DATA.find((m) => m.id === activeTab) || TEAM_DATA[0];
                  return (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-1">
                      <div className="border-b md:border-b-0 md:border-r border-gray-100 pb-3 md:pb-0 md:pr-6 text-left">
                        <span className="block text-xs font-bold text-[#052356] mb-1.5 uppercase tracking-wider">Name</span>
                        <span className="text-sm sm:text-base font-semibold text-gray-700">{activeMember.name}</span>
                      </div>
                      <div className="border-b md:border-b-0 md:border-r border-gray-100 pb-3 md:pb-0 md:pr-6 text-left">
                        <span className="block text-xs font-bold text-[#052356] mb-1.5 uppercase tracking-wider">Contact Number</span>
                        <span className="text-sm sm:text-base font-semibold text-gray-700">{activeMember.contact}</span>
                      </div>
                      <div className="text-left">
                        <span className="block text-xs font-bold text-[#052356] mb-1.5 uppercase tracking-wider">Email ID</span>
                        <span className="text-sm sm:text-base font-semibold text-gray-700 break-all">{activeMember.email}</span>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Library Photos Section ── */}
      <section className="w-full py-12 lg:py-16 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-left">
            <div className="w-12 h-1 bg-[#f37021] mb-2.5" />
            <h3 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
              Library Photos
            </h3>
          </div>

          {/* Photos Carousel/Row */}
          <div 
            onMouseEnter={() => setIsPausedGallery(true)}
            onMouseLeave={() => setIsPausedGallery(false)}
            className="relative -mx-4 sm:-mx-10 lg:-mx-14 px-4 sm:px-10 lg:px-14"
          >
            {/* Left Chevron */}
            <button
              type="button"
              onClick={handlePrevGallery}
              className="absolute left-1 sm:left-2 lg:left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center text-[#f37021] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              aria-label="Previous image"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Right Chevron */}
            <button
              type="button"
              onClick={handleNextGallery}
              className="absolute right-1 sm:right-2 lg:right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center text-[#f37021] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              aria-label="Next image"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* Inner Images Row */}
            <div className="w-full overflow-hidden">
              <div
                className={`flex w-full ${galleryTransitionEnabled ? 'transition-transform duration-300 ease-in-out' : ''}`}
                style={{
                  transform: `translateX(${galleryTransformX})`,
                  gap: `${galleryGap}px`,
                }}
              >
                {EXTENDED_GALLERY_IMAGES.map((img, idx) => (
                  <div
                    key={`${img.src}-${idx}`}
                    style={{
                      width: `calc((100% - ${(galleryVisible - 1) * galleryGap}px) / ${galleryVisible})`,
                    }}
                    className="flex-shrink-0 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md bg-gray-100 hover:shadow-lg transition-shadow duration-300 group"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Caption directly on image in white color */}
                    <div className="absolute bottom-4 left-0 right-0 text-left px-6 pointer-events-none z-10">
                      <p className="text-white text-xs sm:text-sm font-bold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        {img.alt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Read More Modal */}
      {isReadMoreOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 sm:p-6 transition-opacity duration-300">
          <div className="relative max-w-2xl w-full max-h-[85vh] bg-white rounded-3xl shadow-2xl flex flex-col p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 flex-shrink-0">
              <h3 className={`${spectral.className} text-xl md:text-2xl font-bold text-[#052356]`}>
                About the Library
              </h3>
              <button
                onClick={() => setIsReadMoreOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer outline-none"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Scrollable Text Content */}
            <div className="flex-grow overflow-y-auto mt-4 pr-2 text-sm sm:text-[15px] text-gray-600 font-medium leading-relaxed space-y-4 text-justify">
              <p>
                The Library of the Prime Ministers Museum and Library is one of the foremost research libraries in the country for the study of Modern and Contemporary Indian History. Established as a core component of the institution in 1966, the Library supports advanced research and scholarly inquiry across disciplines related to India&apos;s political, social, economic, and cultural development. The Library holds an extensive and diverse collection of printed and reference material, including books, journals, newspapers, government publications, reports, pamphlets, and rare publications. Its holdings cover a wide range of subjects such as the Indian national movement, constitutional and political history, public administration, international relations, economic development, social change, culture, and science and technology.
              </p>
              <p>
                The collection is continuously expanded and updated to meet evolving research requirements. The Library provides reading and research facilities to scholars, faculty members, students, and other authorised users in a dedicated Library building inaugurated in January 1974. Professional library staff offer reference and research support, assist users in accessing catalogues and databases, and facilitate coordinated use of archival, manuscript, and oral history resources within the institution.
              </p>
              <p>
                The Library is integrated with the One Nation One Subscription (ONOS) programme, enabling access to a wide range of national and international academic journals and digital resources. The Library is also undertaking systematic digitisation of its collections. At present, 3.5 lakh pages of newspapers, 167 Microfilm rolls of Sardar Patel Papers, 41,690 Pages of Dharmyug magazine, 70 lakh pages of India House Collection, 1.5 lakh (approx.) pages of rare books have been digitized.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
