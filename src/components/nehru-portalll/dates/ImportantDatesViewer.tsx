"use client";

import React, { useState, useEffect } from "react";
import lifePeriodsData from "@/data/lifePeriods.json";

interface PrisonTerm {
  term: string;
  id: string;
  period: string;
  details: string;
  link: string;
}

interface LifePeriods {
  earlyLife: string;
  marriage: string;
  freedomStruggle: string;
  primeMinister: string;
  prisonTerms: PrisonTerm[];
}

export default function ImportantDatesViewer() {
  const data = lifePeriodsData as LifePeriods;
  const [activeTab, setActiveTab] = useState<string>("early-life");

  // Map prison images to terms
  const prisonImages: Record<string, string[]> = {
    first: ["/sites/default/files/inprison/First Imprisonment, Lucknow District Jail.jpg"],
    second: ["/sites/default/files/inprison/Second Imprisonment, A view from inside the cell in which Jawaharlal Nehru was kept in Lucknow District jail.jpg"],
    fourth: ["/sites/default/files/inprison/The diagram of his barrack in Naini Central Prison.jpg"],
    fifth: ["/sites/default/files/inprison/Fifth Imprisonment, Jawaharlal Nehru in Naini Central Prison.jpg"],
    sixth: [
      "/sites/default/files/inprison/Sixth Imprisonment, Dehradun jail.jpg",
      "/sites/default/files/inprison/Sixth Imprisonment, Locking system of Bareilly Jail where Nehru was kept during his imprisonment .jpg"
    ],
    seventh: [
      "/sites/default/files/inprison/Seventh Imprisonment, Alipur Central Jail where Nehru was imprisoned during 1934.jpg",
      "/sites/default/files/inprison/Seventh Imprisonment, The bed, the table and chair allotted to Jawaharlal Nehru in Almora Jail.jpg"
    ],
    ninth: [
      "/sites/default/files/inprison/Nineth Imprisonment, Ahmednagar Fort.jpg",
      "/sites/default/files/inprison/Nineth Imprisonment, Ahmednagar Fort Prison.jpg"
    ]
  };

  // For navigating directly to hash if present in URL
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.substring(1);
      if (["early-life", "marriage", "freedom-struggle", "prison", "prime-minister"].includes(hash)) {
        setActiveTab(hash);
      }
    }
  }, []);

  const tabs = [
    { id: "early-life", label: "Early Life" },
    { id: "marriage", label: "Marriage" },
    { id: "freedom-struggle", label: "Freedom Struggle" },
    { id: "prison", label: "In Prison" },
    { id: "prime-minister", label: "Prime Minister" },
  ];

  const getCleanHtml = (htmlContent: string) => {
    if (!htmlContent) return "";
    // Clean up basic Drupal markup if any
    return htmlContent
      .replace(/<p>&nbsp;<\/p>/g, "")
      .replace(/href="([^"]*)\.html"/g, 'href="/$1"') // replace html links with next links
      .replace(/sites\/default\/files/g, "/sites/default/files"); // absolute asset links
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-start gap-8 select-none text-left">
      {/* Sidebar Tabs */}
      <div className="w-full md:w-60 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm shrink-0 flex flex-col">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              window.location.hash = tab.id;
            }}
            className={`w-full text-left px-4 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-all border cursor-pointer border-none mb-1.5 last:mb-0 ${
              tab.id === activeTab
                ? "bg-primary text-white shadow-sm"
                : "bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
        {/* Tab 1: Early Life */}
        {activeTab === "early-life" && (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-primary">Early Life</h2>
            <div className="w-8 h-1 bg-secondary rounded" />
            <div 
              className="prose prose-slate max-w-none text-slate-600 text-xs sm:text-xs md:text-sm leading-relaxed text-justify"
              dangerouslySetInnerHTML={{ __html: getCleanHtml(data.earlyLife) }}
            />
          </div>
        )}

        {/* Tab 2: Marriage */}
        {activeTab === "marriage" && (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-primary">Marriage</h2>
            <div className="w-8 h-1 bg-secondary rounded" />
            <div 
              className="prose prose-slate max-w-none text-slate-600 text-xs sm:text-xs md:text-sm leading-relaxed text-justify"
              dangerouslySetInnerHTML={{ __html: getCleanHtml(data.marriage) }}
            />
          </div>
        )}

        {/* Tab 3: Freedom Struggle */}
        {activeTab === "freedom-struggle" && (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-primary">Freedom Struggle</h2>
            <div className="w-8 h-1 bg-secondary rounded" />
            <div 
              className="prose prose-slate max-w-none text-slate-600 text-xs sm:text-xs md:text-sm leading-relaxed text-justify"
              dangerouslySetInnerHTML={{ __html: getCleanHtml(data.freedomStruggle) }}
            />
          </div>
        )}

        {/* Tab 4: In Prison (Dashboard) */}
        {activeTab === "prison" && (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-primary">In Prison</h2>
            <div className="w-8 h-1 bg-secondary rounded" />
            
            <p className="text-slate-700 font-serif text-sm md:text-base border-l-2 border-secondary pl-4 italic">
              “Jawaharlal Nehru was imprisoned nine times during the freedom struggle and was in jail for 3259 days.”
            </p>

            {/* Prison Terms Accordion/Timeline */}
            <div className="space-y-4 pt-4">
              {data.prisonTerms.map((term, idx) => {
                const images = prisonImages[term.id] || [];
                return (
                  <div 
                    key={idx}
                    className="border border-slate-100 rounded-xl overflow-hidden shadow-sm bg-white"
                  >
                    {/* Header */}
                    <div className="bg-[#f8fafc] px-5 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-100">
                      <div>
                        <h4 className="font-serif text-md font-bold text-primary">
                          {term.term}
                        </h4>
                        <span className="text-[10px] font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full uppercase tracking-wider mt-1.5 inline-block">
                          {term.details}
                        </span>
                      </div>
                      <div className="text-[11px] font-bold text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-md">
                        {term.period}
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-5 space-y-4 text-xs sm:text-xs md:text-sm text-slate-600 leading-relaxed text-left">
                      <p>Imprisonment Term details inside the prison facilities.</p>
                      
                      {/* Prison Images Grid if present */}
                      {images.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                          {images.map((imgUrl, imgIdx) => (
                            <div 
                              key={imgIdx} 
                              className="relative rounded-lg overflow-hidden border border-slate-200 shadow-sm aspect-[4/3] bg-slate-50"
                            >
                              <img
                                src={imgUrl}
                                alt={`${term.term} Cell View`}
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 5: Prime Minister */}
        {activeTab === "prime-minister" && (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-primary">Prime Minister</h2>
            <div className="w-8 h-1 bg-secondary rounded" />
            <div 
              className="prose prose-slate max-w-none text-slate-600 text-xs sm:text-xs md:text-sm leading-relaxed text-justify"
              dangerouslySetInnerHTML={{ __html: getCleanHtml(data.primeMinister) }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
