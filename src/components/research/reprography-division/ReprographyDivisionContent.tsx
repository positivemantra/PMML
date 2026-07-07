"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Spectral } from "next/font/google";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export default function ReprographyDivisionContent() {
  const [activeProcessTab, setActiveProcessTab] = useState(0);

  interface ProcessCard {
    src: string;
    title: string;
    desc?: string;
  }

  interface ProcessTab {
    tabLabel: string;
    singleTitle?: string;
    singleDesc?: string;
    cards: ProcessCard[];
  }

  const PROCESS_DATA: ProcessTab[] = [
    {
      tabLabel: "PROCESSING AND DUPLICATING",
      cards: [
        {
          src: "/Reprography/DSC_7730.JPG",
          title: "Processing of Microfilm",
          desc: "Processing of Microfilms: A processor is used to develop exposed microfilms and produce permanent images."
        },
        {
          src: "/Reprography/DSC_7740.JPG",
          title: "Duplicating of Master Records",
          desc: "Duplicating from Master Records: A duplicator is used to create copies of master microfilms for supply to the Library for scholarly consultation."
        }
      ]
    },
    {
      tabLabel: "QUALITY CHECKING AND ACCESSIONING",
      cards: [
        {
          src: "/Reprography/DSC_9434.JPG",
          title: "Quality Checking of Microfilms"
        },
        {
          src: "/Reprography/DSC_9489.JPG",
          title: "Accessioning of Microfilms"
        }
      ]
    },
    {
      tabLabel: "QUALITY CONTROL OF OLD MASTER RECORDS",
      singleTitle: "Checking Of Old Microfilms For Quality Of Control & Longevity",
      singleDesc: "Old microfilms are periodically checked to ensure quality control and longevity. The technical quality of microfilms is crucial, as they serve as substitutes for original documents. Quality checks assess the archival condition of the film and detect residual chemicals accumulated during long-term storage in the repository. Microfilms are examined for scratches, spots, chemical residues, and other defects. If required, films are sent for rewashing to maintain prescribed archival standards.",
      cards: [
        {
          src: "/Reprography/01 1.jpg",
          title: ""
        },
        {
          src: "/Reprography/01 1.jpg",
          title: ""
        }
      ]
    }
  ];

  return (
    <div className="w-full flex flex-col bg-white">
      {/* ── Subpage Hero Banner (CCS image) ── */}
      <section className="relative w-full aspect-[16/7.5] sm:aspect-[2.6/1] lg:aspect-[3.8/1] min-h-[280px] lg:h-auto overflow-hidden">
        {/* Background Image */}
        <Image
          src="/hero section/ccs-building.jpg"
          alt="PMML Research and Reprography Division"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>

      {/* ── Reprography Main Content Section ── */}
      <section className="w-full py-10 lg:py-12 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Column: Single Main Image (Taking 01 1.jpg from public/Reprography) */}
            <div className="lg:col-span-5 w-full flex flex-col h-full min-h-[320px] sm:min-h-[380px] lg:min-h-0">
              <div className="relative flex-1 w-full h-full rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-slate-50 min-h-[320px] sm:min-h-[380px] lg:min-h-0">
                <Image
                  src="/Reprography/01 1.jpg"
                  alt="Reprography Division Archive Storage"
                  fill
                  priority
                  sizes="(max-w-1024px) 100vw, 550px"
                  className="object-cover hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            </div>

            {/* Right Column: Text & Stats */}
            <div className="lg:col-span-7 flex flex-col text-left justify-between h-full">
              <div>
                {/* Orange Accent Line */}
                <div className="w-12 h-1 bg-[#f37021] mb-4" />

                {/* Title (matching Welcome Section heading on home page) */}
                <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight mb-6`}>
                  Reprography
                </h2>

                {/* Description (matching Welcome Section body font size, family, color, and leading) */}
                <p className="text-sm sm:text-[15px] lg:text-[16px] text-gray-500 font-medium leading-relaxed mb-5 text-justify">
                  The Reprography Division is engaged in the microfilming of old and current newspapers, periodicals, and archival records with the objective of preserving and strengthening the Library's research resources and making them accessible to scholars. The Division has been providing reprographic services to researchers visiting the Library since 1968. At present, the Reprography Section holds approximately 23,000 microfilm rolls, including 5,000 duplicate microfilm rolls, and about 7,000 microfiche sheets.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-1 w-full">
                
                {/* Stat Box 1 */}
                <div className="flex flex-col items-center justify-center bg-white rounded-[11px] border-b-[4px] sm:border-b-[6px] border-[#E88B1D] shadow-[0_4px_20px_rgba(0,0,0,0.05)] w-full h-[80px] sm:h-[90px] lg:h-[95px] px-2 text-center transition-all duration-200 hover:shadow-md">
                  <span className="text-lg sm:text-xl lg:text-[24px] font-bold text-[#052356] leading-none mb-1 sm:mb-1.5">~ 58,000</span>
                  <span className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#444651] font-bold tracking-wider uppercase">Microfiche Collection</span>
                </div>

                {/* Stat Box 2 */}
                <div className="flex flex-col items-center justify-center bg-white rounded-[11px] border-b-[4px] sm:border-b-[6px] border-[#E88B1D] shadow-[0_4px_20px_rgba(0,0,0,0.05)] w-full h-[80px] sm:h-[90px] lg:h-[95px] px-2 text-center transition-all duration-200 hover:shadow-md">
                  <span className="text-lg sm:text-xl lg:text-[24px] font-bold text-[#052356] leading-none mb-1 sm:mb-1.5">~ 10,000</span>
                  <span className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#444651] font-bold tracking-wider uppercase">Digitized Microfilms</span>
                </div>

                {/* Stat Box 3 */}
                <div className="flex flex-col items-center justify-center bg-white rounded-[11px] border-b-[4px] sm:border-b-[6px] border-[#E88B1D] shadow-[0_4px_20px_rgba(0,0,0,0.05)] w-full h-[80px] sm:h-[90px] lg:h-[95px] px-2 text-center transition-all duration-200 hover:shadow-md">
                  <span className="text-lg sm:text-xl lg:text-[24px] font-bold text-[#052356] leading-none mb-1 sm:mb-1.5">~ 75 lakh</span>
                  <span className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#444651] font-bold tracking-wider uppercase">Digitized Images</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── Microfilming Section ── */}
      <section className="w-full py-10 lg:py-12 bg-white border-t border-gray-100 text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Text Content */}
            <div className="lg:col-span-5 flex flex-col text-left justify-start">
              {/* Orange Accent Line */}
              <div className="w-12 h-1 bg-[#f37021] mb-4" />

              {/* Title */}
              <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight mb-6`}>
                Microfilming
              </h2>

              {/* Descriptions */}
              <div className="text-sm sm:text-[15px] lg:text-[16px] text-gray-500 font-medium leading-relaxed text-justify">
                <p className="mb-2">
                  Microfilming remains the most reliable and long-term method for preserving archival records. Roll microfilms are stored on reels. Standard roll lengths are 30.5 metres (100 feet) for both 35 mm and 16 mm films.
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-3">
                  <li>One 35 mm roll can contain approximately 600 images.</li>
                  <li>One 16 mm roll can contain approximately 1,200 images.</li>
                  <li>Images are recorded as a continuous sequence along the length of the film, with lines of text aligned parallel to the film edges.</li>
                </ul>
                
                <div className="mt-3">
                  <h4 className="font-bold text-[#052356] text-sm sm:text-[15px] lg:text-[16px] mb-1">Techniques Used:</h4>
                  <ul className="space-y-0.5 pl-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#f37021]">•</span>
                      <span><strong>Conventional technique:</strong> Microfilming through microfilm camera</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#f37021]">•</span>
                      <span><strong>Latest technique:</strong> Microfilming through Archive Writer (from digital data)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: Two side-by-side images from public/Reprography */}
            <div className="lg:col-span-7 w-full pt-4 lg:pt-0">
              <div className="grid grid-cols-2 gap-4 w-full">
                {/* Image 1 */}
                <div className="flex flex-col">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-slate-50">
                    <Image
                      src="/Reprography/DSC_9434.JPG"
                      alt="Conventional technique for Microfilming Left"
                      fill
                      sizes="(max-w-768px) 50vw, 300px"
                      className="object-cover scale-[1.03] hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[11px] text-gray-500 font-bold text-left mt-3 leading-tight w-full px-1">
                    Conventional technique for Microfilming Through Camera
                  </span>
                </div>
                
                {/* Image 2 */}
                <div className="flex flex-col">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-slate-50">
                    <Image
                      src="/Reprography/DSC_9569.jpg"
                      alt="Conventional technique for Microfilming Right"
                      fill
                      sizes="(max-w-768px) 50vw, 300px"
                      className="object-cover scale-[1.03] hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[11px] text-gray-500 font-bold text-left mt-3 leading-tight w-full px-1">
                    Latest technique for Microfilming through camera
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Process Section ── */}
      <section className="w-full py-10 lg:py-12 bg-white border-t border-gray-100 text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Navigation Tabs */}
            <div className="lg:col-span-5 flex flex-col text-left justify-start">
              {/* Orange Accent Line */}
              <div className="w-12 h-1 bg-[#f37021] mb-4" />

              {/* Title */}
              <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight mb-8`}>
                Process
              </h2>

              {/* Interactive Tabs */}
              <div className="flex flex-col gap-3.5 w-full items-start">
                {PROCESS_DATA.map((tab, idx) => {
                  const isActive = activeProcessTab === idx;
                  return (
                    <button
                      key={tab.tabLabel}
                      onClick={() => setActiveProcessTab(idx)}
                      className={`text-left py-2.5 px-4 rounded-xl font-bold tracking-wider text-[11px] sm:text-[12.5px] transition-all select-none border-none cursor-pointer flex items-center w-fit ${
                        isActive
                          ? "bg-[#f4f4f4] text-[#f37021]"
                          : "bg-transparent text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      {isActive && (
                        <span className="text-[#052356] text-[12px] mr-2">●</span>
                      )}
                      {tab.tabLabel}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Symmetrical Content Box */}
            <div className="lg:col-span-7 w-full pt-4 lg:pt-0">
              <div className="bg-[#fcfbf9] border border-gray-200/70 rounded-2xl p-5 sm:p-6 shadow-[0_4px_15px_rgba(0,0,0,0.01)] w-full">
                
                <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full">
                  {PROCESS_DATA[activeProcessTab].cards.map((card, cIdx) => (
                    <div key={cIdx} className="flex flex-col text-left">
                      {/* Image container */}
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-200/60 shadow-sm bg-white">
                        <Image
                          src={card.src}
                          alt={card.title || "Process microfilm"}
                          fill
                          sizes="(max-w-768px) 50vw, 300px"
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      
                      {/* Title (Only if singleTitle is not present) */}
                      {!PROCESS_DATA[activeProcessTab].singleTitle && card.title && (
                        <h4 className="text-xs sm:text-[13.5px] font-bold text-[#052356] mt-4 mb-1.5 leading-snug">
                          {card.title}
                        </h4>
                      )}
                      
                      {/* Subtext description (Only if singleDesc is not present) */}
                      {!PROCESS_DATA[activeProcessTab].singleDesc && card.desc && (
                        <p className="text-[10px] sm:text-[11.5px] text-gray-500 font-medium leading-relaxed text-justify">
                          {card.desc}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Optional Single Title below the images (e.g. for Tab 2) */}
                {PROCESS_DATA[activeProcessTab].singleTitle && (
                  <h4 className="text-xs sm:text-[13.5px] font-bold text-[#052356] mt-4 mb-1 w-full text-left leading-snug">
                    {PROCESS_DATA[activeProcessTab].singleTitle}
                  </h4>
                )}

                {/* Optional Single Description at the Bottom (e.g. for Tab 2) */}
                {PROCESS_DATA[activeProcessTab].singleDesc && (
                  <p className="text-[10px] sm:text-[11.5px] text-[#444651] font-medium leading-relaxed text-justify mt-2">
                    {PROCESS_DATA[activeProcessTab].singleDesc}
                  </p>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Preservation Section ── */}
      <section className="w-full py-10 lg:py-12 bg-white border-t border-gray-100 text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Row */}
          <div className="w-full mb-8">
            {/* Orange Accent Line */}
            <div className="w-12 h-1 bg-[#f37021] mb-4" />
            
            {/* Title */}
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight mb-3`}>
              Preservation Of Archival Record On Microfilms
            </h2>
            
            {/* Subtitle */}
            <p className="text-sm sm:text-[15px] lg:text-[16px] font-bold text-[#052356] tracking-wide mb-6">
              Microfilming Is The Only Option Where We Can Protect Our Archival Record For Long Time
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {/* Row 1: Text on Left, Image on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Text Column */}
              <div className="lg:col-span-7 flex flex-col text-left justify-start">
                <div className="text-sm sm:text-[15px] lg:text-[16px] text-gray-500 font-medium leading-relaxed text-justify space-y-4">
                  <p>
                    With the expansion of collections, the Preservation Section was set up in 1970 to undertake systematic conservation of library and archival materials. The Section carries out a wide range of preservation and preventive conservation activities, including minor and tissue repairs, binding and repair of books, lamination, fumigation, guarding, flattening, stitching, and encapsulation. These sustained efforts ensure the long-term physical stability of the collections and their continued availability for research and reference.
                  </p>
                  
                  <div>
                    <h4 className="font-bold text-[#052356] text-sm sm:text-[15px] lg:text-[16px] uppercase tracking-wide mb-1.5 mt-2">
                      WORK AND SERVICES OF THE PRESERVATION UNIT
                    </h4>
                    <p>
                      The Preservation Unit is responsible for the systematic conservation and preventive care of library and archival materials to ensure their long-term physical stability and usability for research and reference. The Unit employs scientific methods and archival-quality materials in accordance with established conservation standards.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#052356] text-sm sm:text-[15px] lg:text-[16px] mb-1.5 mt-2">
                      Conservation and Repair Services
                    </h4>
                    <p>
                      The Unit undertakes a wide range of conservation treatments, including: Minor repairs and tissue repair of fragile documents
                    </p>
                  </div>
                </div>
              </div>

              {/* Image Column */}
              <div className="lg:col-span-5 w-full">
                <div className="flex flex-col">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-slate-50">
                    <Image
                      src="/Reprography/01 1.jpg"
                      alt="Processing of Microfilms"
                      fill
                      sizes="(max-w-768px) 100vw, 450px"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[11px] text-gray-500 font-bold text-left mt-3 leading-tight w-full px-1">
                    Processing of Microfilms: A processor is used to develop exposed microfilms and produce permanent images.
                  </span>
                </div>
              </div>
            </div>

            {/* Row 2: Image and Text in continuation (wrapping around floated image) */}
            <div className="block w-full mt-4">
              {/* Float Image Container */}
              <div className="float-left mr-6 sm:mr-8 mb-4 sm:mb-6 w-full sm:w-[45%] lg:w-[40%] max-w-[450px]">
                <div className="flex flex-col">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-slate-50">
                    <Image
                      src="/Reprography/01 1.jpg"
                      alt="Archival Record Preservation"
                      fill
                      sizes="(max-w-768px) 100vw, 450px"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[11px] text-gray-500 font-bold text-left mt-3 leading-tight w-full px-1">
                    Processing of Microfilms: A processor is used to develop exposed microfilms and produce permanent images.
                  </span>
                </div>
              </div>

              {/* Text content flowing around the floated image */}
              <div className="text-sm sm:text-[15px] lg:text-[16px] text-gray-500 font-medium leading-relaxed text-justify space-y-4">
                <p>
                  Binding and repair of books using rexine, leather, and cloth Lamination and full pasting of weakened papers Guarding, flattening, stitching, and reinforcement of damaged documents Paper Conservation Practices: Paper conservation is carried out through a systematic, multi-stage process to strengthen and stabilize brittle and fragile documents. Key practices include:
                </p>
                <div className="space-y-2.5 my-3 pl-1">
                  <div className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1.5 text-xs">•</span>
                    <span><strong>Pagination:</strong> Arranging and numbering documents to maintain their correct order and sequence.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1.5 text-xs">•</span>
                    <span><strong>Deacidification:</strong> Treatment carried out to stabilize paper, reduce deterioration, and improve longevity.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1.5 text-xs">•</span>
                    <span><strong>Repair:</strong> Mending of tears, cracks, and damaged areas to restore structural integrity of documents.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1.5 text-xs">•</span>
                    <span><strong>Adhesive Application:</strong> Use of stable and reversible adhesives to ensure safe and long-lasting repairs.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1.5 text-xs">•</span>
                    <span><strong>Strengthening of Fragile Papers:</strong> Special treatment applied to reinforce weak and brittle documents for continued use and preservation.</span>
                  </div>
                </div>
                <p>
                  <strong>Photograph Conservation and Encapsulation:</strong> The Preservation Unit also undertakes conservation of photographic materials. Photographs are transferred from acidic albums and preserved through polyester encapsulation, which provides physical support and protection from environmental and biological damage. Specialized equipment is used to prepare polyester envelopes to ensure safe long-term storage.
                </p>
              </div>
              <div className="clear-both" />
            </div>
          </div>

        </div>
      </section>

      {/* ── Reprographic Services Section ── */}
      <section className="w-full py-10 lg:py-12 bg-white border-t border-gray-100 text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Text & List */}
            <div className="lg:col-span-5 flex flex-col text-left justify-start">
              {/* Orange Accent Line */}
              <div className="w-12 h-1 bg-[#f37021] mb-4" />
              
              {/* Title */}
              <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight mb-4`}>
                Reprographic Services
              </h2>
              
              {/* Description */}
              <p className="text-sm sm:text-[15px] lg:text-[16px] text-gray-500 font-medium leading-relaxed mb-4 text-justify">
                The Reprography Division provides the following services to scholars, institutions, and Library users:
              </p>
              
              {/* List */}
              <ul className="text-sm sm:text-[15px] lg:text-[16px] text-gray-500 font-medium leading-relaxed text-justify pl-4 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#f37021] mt-1.5">•</span>
                  <span><strong>Microfilm Scanning:</strong> For Library scholars.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f37021] mt-1.5">•</span>
                  <span><strong>Supply of Positive Microfilms:</strong> For scholarly research purposes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f37021] mt-1.5">•</span>
                  <span><strong>Photography of Academic and Official Events:</strong> Coverage of talks, public lectures, panel discussions, VIP visits, and other institutional events.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f37021] mt-1.5">•</span>
                  <span><strong>Design and Printing Support:</strong> Preparation of posters, brochures, leaflets, and other related materials.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f37021] mt-1.5">•</span>
                  <span><strong>Photography Services:</strong> Photography services at Picture Point Sangrahalaya for visitors.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f37021] mt-1.5">•</span>
                  <span><strong>Photocopying Services:</strong> At the Reprography Section for official work. At the Library for scholars.</span>
                </li>
              </ul>
            </div>

            {/* Right Column: 2x2 Grid of Image Cards */}
            <div className="lg:col-span-7 w-full">
              <div className="grid grid-cols-2 gap-4 w-full">
                
                {/* Card 1 */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-slate-50 group">
                  <Image
                    src="/Reprography/01 1.jpg"
                    alt="Photostate"
                    fill
                    sizes="(max-w-768px) 50vw, 350px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex items-end p-4 lg:p-5">
                    <span className="text-white font-bold text-xs sm:text-[13.5px] lg:text-sm tracking-wide">
                      Photostate(PH)
                    </span>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-slate-50 group">
                  <Image
                    src="/Reprography/01 1.jpg"
                    alt="Microfilm Scanning"
                    fill
                    sizes="(max-w-768px) 50vw, 350px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex items-end p-4 lg:p-5">
                    <span className="text-white font-bold text-xs sm:text-[13.5px] lg:text-sm tracking-wide">
                      Microfilm Scanning(PH)
                    </span>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-slate-50 group">
                  <Image
                    src="/Reprography/01 1.jpg"
                    alt="Positive Microfilm Supplying"
                    fill
                    sizes="(max-w-768px) 50vw, 350px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex items-end p-4 lg:p-5">
                    <span className="text-white font-bold text-xs sm:text-[13.5px] lg:text-sm tracking-wide">
                      Positive Microfilm Supplying(PH)
                    </span>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-slate-50 group">
                  <Image
                    src="/Reprography/01 1.jpg"
                    alt="Photography of Official Events"
                    fill
                    sizes="(max-w-768px) 50vw, 350px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex items-end p-4 lg:p-5">
                    <span className="text-white font-bold text-xs sm:text-[13.5px] lg:text-sm tracking-wide">
                      Photography of Official Events(PH)
                    </span>
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
