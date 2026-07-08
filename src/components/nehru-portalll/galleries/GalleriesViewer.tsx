"use client";

import React, { useState, useEffect } from "react";
import { useApp } from "@/context/AppContext";

interface PhotoItem {
  src: string;
  title: string;
  place?: string;
  source?: string;
}

interface VideoItem {
  ytId: string;
  title: string;
  description: string;
  source: string;
}

export default function GalleriesViewer() {
  const { t } = useApp();
  const [activeTab, setActiveTab] = useState<string>("photos");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<string>("0MvS0q_p2sE");

  // Load hash if present
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.substring(1);
      if (["photos", "audios", "videos", "cartoons", "stamps"].includes(hash)) {
        setActiveTab(hash);
      }
    }
  }, []);

  const tabs = [
    { id: "photos", label: t("photos") },
    { id: "audios", label: t("audios") },
    { id: "videos", label: t("videos") },
    { id: "cartoons", label: t("cartoons") },
    { id: "stamps", label: t("stamps") },
  ];

  const photos: PhotoItem[] = [
    { src: "/sites/default/files/3_6.jpg", title: "Jawaharlal Nehru with an elephant calf which was presented to him in New Delhi", place: "New Delhi", source: "Nehru Memorial Museum & Library" },
    { src: "/sites/default/files/18_4.jpg", title: "Jawaharlal Nehru with tiger cubs", source: "Nehru Memorial Museum & Library" },
    { src: "/sites/default/files/4_7.jpg", title: "Jawaharlal Nehru with a pigeon", source: "Nehru Memorial Museum & Library" },
    { src: "/sites/default/files/5_6.jpg", title: "Jawaharlal Nehru feeding a horse", source: "Nehru Memorial Museum & Library" },
    { src: "/sites/default/files/6_6.jpg", title: "Jawaharlal Nehru feeding pandas", source: "Nehru Memorial Museum & Library" },
    { src: "/sites/default/files/7_6.jpg", title: "Jawaharlal Nehru feeding pandas (Close-up)", source: "Nehru Memorial Museum & Library" },
    { src: "/sites/default/files/8_6.jpg", title: "Jawaharlal Nehru being conducted round the Goshala during his Gujarat tour", place: "Gujarat", source: "Nehru Memorial Museum & Library" },
    { src: "/sites/default/files/9_6.jpg", title: "Jawaharlal Nehru with one of the three Mongolian horses presented to him", place: "New Delhi", source: "Nehru Memorial Museum & Library" },
    { src: "/sites/default/files/10_6.jpg", title: "Jawaharlal Nehru with two red pandas", source: "Nehru Memorial Museum & Library" },
    { src: "/sites/default/files/11_5.jpg", title: "Jawaharlal Nehru on horseback in Achkan and chooridar", source: "Nehru Memorial Museum & Library" },
    { src: "/sites/default/files/12_5.jpg", title: "The Prime Minister, Jawaharlal Nehru, playing with tiger cubs at the PM’s House", source: "Nehru Memorial Museum & Library" },
    { src: "/sites/default/files/13_5.jpg", title: "Jawaharlal Nehru with a leopard", source: "Nehru Memorial Museum & Library" },
    { src: "/sites/default/files/14_5.jpg", title: "Jawaharlal Nehru with Raja and Rani, 2-4 month old tiger cubs", source: "Nehru Memorial Museum & Library" },
    { src: "/sites/default/files/15_4.jpg", title: "Jawaharlal Nehru playing with his pet dog", source: "Nehru Memorial Museum & Library" },
    { src: "/sites/default/files/1_12.jpg", title: "Jawaharlal Nehru with Tiger cubs at Teen Murti House", place: "New Delhi", source: "Nehru Memorial Museum & Library" },
    { src: "/sites/default/files/16_4.jpg", title: "An elephant garlanding Jawaharlal Nehru", source: "Nehru Memorial Museum & Library" },
    { src: "/sites/default/files/2_5.jpg", title: "Jawaharlal Nehru, Dalai Lama, and Panchan Lama with an elephant at Rashtrapati Bhavan", place: "New Delhi", source: "Nehru Memorial Museum & Library" },
    { src: "/sites/default/files/17_4.jpg", title: "Jawaharlal Nehru and U. Nu, Prime Minister of Burma, with a fawn", source: "Nehru Memorial Museum & Library" }
  ];

  const audios = [
    {
      title: "The Light Has Gone Out (Mahatma Gandhi Assassination Address)",
      date: "30 January 1948",
      src: "/sites/default/files/audios/audio--light-has-gone-30-jan-1948.mp3",
      source: "All India Radio (AIR)",
      description: "The historic address by Prime Minister Jawaharlal Nehru to the nation following the tragic assassination of Mahatma Gandhi, broadcast live from All India Radio."
    }
  ];

  const videos: VideoItem[] = [
    { ytId: "0MvS0q_p2sE", title: "AICC Meeting in Madurai, 1961", description: "Prime Minister Jawaharlal Nehru addressing the All India Congress Committee meeting held in Madurai, 1961.", source: "Nehru Memorial Museum & Library" },
    { ytId: "Mwee_zOgYOk", title: "Indian Film Golden Jubilee, 1963", description: "Jawaharlal Nehru participating and speaking at the Golden Jubilee celebrations of Indian Cinema in 1963.", source: "Nehru Memorial Museum & Library" },
    { ytId: "eBGPyIlsWMk", title: "68th Congress Session, 1964", description: "Video records of the 68th session of the Indian National Congress in 1964, featuring Nehru's final session.", source: "Nehru Memorial Museum & Library" },
    { ytId: "Lt-JXOzkqxk", title: "Dadra & Nagar Haveli Merger, 1961", description: "Historic footage documenting the integration and merger of Dadra and Nagar Haveli into the Indian Union in 1961.", source: "Nehru Memorial Museum & Library" }
  ];

  const cartoons = [
    { src: "/sites/default/files/Cartoons/( A 1) Eastern World November 1954 (2)_1.jpg", title: "Eastern World Cartoon (November 1954)" },
    { src: "/sites/default/files/Cartoons/(A 10) 08 May 1960_0.jpg", title: "May 8, 1960 Cartoon" },
    { src: "/sites/default/files/Cartoons/(A 11) 22 January 1961_0.jpg", title: "January 22, 1961 Cartoon" },
    { src: "/sites/default/files/Cartoons/(A 12) 29 April 1962_0.jpg", title: "April 29, 1962 Cartoon" },
    { src: "/sites/default/files/Cartoons/(A 13) 02 December 1962 (2)_0.jpg", title: "December 2, 1962 Cartoon" },
    { src: "/sites/default/files/Cartoons/(A 3) 25 August 1957_0.jpg", title: "August 25, 1957 Cartoon" },
    { src: "/sites/default/files/Cartoons/(A 4) 27 July 1958_0.jpg", title: "July 27, 1958 Cartoon" },
    { src: "/sites/default/files/Cartoons/(A 5) 23 November 1958_0.jpg", title: "November 23, 1958 Cartoon" },
    { src: "/sites/default/files/Cartoons/(A 8) 06 September 1959_0.jpg", title: "September 6, 1959 Cartoon" },
    { src: "/sites/default/files/Cartoons/(A14) 21 July 1963_0.jpg", title: "July 21, 1963 Cartoon" },
    { src: "/sites/default/files/Cartoons/A19_0.jpg", title: "Nehru Editorial Cartoon" },
  ];

  const stamps = Array.from({ length: 17 }, (_, i) => ({
    src: `/sites/default/files/stamps/${i === 7 || i === 9 ? i + 1 + '_0' : i + 1}.jpg`,
    title: `Commemorative Nehru Stamp ${i + 1}`,
  }));

  const activeMediaList = activeTab === "photos" ? photos : activeTab === "cartoons" ? cartoons : stamps;

  return (
    <div className="w-full flex flex-col md:flex-row items-start gap-8 select-none text-left">
      {/* Sidebar Navigation */}
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

      {/* Media Content Display */}
      <div className="flex-1 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm w-full overflow-hidden">
        
        {/* TAB: PHOTOS / CARTOONS / STAMPS */}
        {(activeTab === "photos" || activeTab === "cartoons" || activeTab === "stamps") && (
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-primary capitalize">{activeTab} Gallery</h3>
            <div className="w-8 h-1 bg-secondary rounded" />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {activeMediaList.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative rounded-xl overflow-hidden aspect-[4/3] border border-slate-100 shadow-sm bg-slate-50 cursor-pointer"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 text-left">
                    <span className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">Click to Zoom</span>
                    <h5 className="text-white font-medium text-[11px] leading-tight line-clamp-2">{item.title}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB: AUDIOS */}
        {activeTab === "audios" && (
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-primary">{t("audios")}</h3>
            <div className="w-8 h-1 bg-secondary rounded" />

            <div className="space-y-6 max-w-2xl">
              {audios.map((audio, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-4">
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-secondary bg-secondary/15 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Audio Broadcast
                    </span>
                    <h4 className="font-serif text-md md:text-lg font-bold text-primary pt-1">
                      {audio.title}
                    </h4>
                    <div className="flex items-center space-x-3 text-[10px] text-slate-400 font-bold uppercase">
                      <span>Date: {audio.date}</span>
                      <span>|</span>
                      <span>Source: {audio.source}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 text-xs sm:text-xs md:text-sm leading-relaxed text-justify">
                    {audio.description}
                  </p>

                  <div className="pt-2">
                    <audio controls className="w-full">
                      <source src={audio.src} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB: VIDEOS */}
        {activeTab === "videos" && (
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-primary">{t("videos")}</h3>
            <div className="w-8 h-1 bg-secondary rounded" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Main Player */}
              <div className="lg:col-span-8 space-y-4">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-900">
                  <iframe
                    src={`https://www.youtube.com/embed/${activeVideo}`}
                    title="Video Player"
                    className="w-full h-full border-none"
                    allowFullScreen
                  />
                </div>
                {(() => {
                  const activeItem = videos.find((v) => v.ytId === activeVideo);
                  if (!activeItem) return null;
                  return (
                    <div className="space-y-2">
                      <h4 className="font-serif text-lg font-bold text-primary">{activeItem.title}</h4>
                      <p className="text-slate-600 text-xs sm:text-xs md:text-sm leading-relaxed">{activeItem.description}</p>
                      <span className="text-[10px] font-bold text-slate-400 uppercase block">Source: {activeItem.source}</span>
                    </div>
                  );
                })()}
              </div>

              {/* Thumbnails Sidebar */}
              <div className="lg:col-span-4 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block border-b pb-1">Video Catalog</span>
                <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
                  {videos.map((vid) => (
                    <div
                      key={vid.ytId}
                      onClick={() => setActiveVideo(vid.ytId)}
                      className={`flex gap-3 p-2.5 rounded-xl border cursor-pointer transition-all items-center ${
                        activeVideo === vid.ytId ? "bg-secondary/10 border-secondary" : "bg-white hover:bg-slate-50 border-slate-100"
                      }`}
                    >
                      <div className="relative w-20 aspect-video rounded overflow-hidden shadow shrink-0 bg-slate-100 border border-slate-200">
                        <img
                          src={`https://img.youtube.com/vi/${vid.ytId}/hqdefault.jpg`}
                          alt={vid.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-left space-y-0.5">
                        <h5 className="font-serif font-bold text-[11px] text-primary leading-tight line-clamp-1">
                          {vid.title}
                        </h5>
                        <p className="text-[10px] text-slate-500 line-clamp-2 leading-normal">
                          {vid.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col justify-between p-6">
          {/* Header Close button */}
          <div className="flex justify-between items-center text-white/80">
            <span className="text-xs font-bold font-mono tracking-wider">
              {lightboxIndex + 1} of {activeMediaList.length}
            </span>
            <button
              onClick={() => setLightboxIndex(null)}
              className="text-white hover:text-slate-300 text-sm font-bold border-none bg-transparent cursor-pointer"
            >
              {t("close")} (ESC)
            </button>
          </div>

          {/* Image */}
          <div className="flex-1 flex items-center justify-center py-4 relative">
            <button
              onClick={() => setLightboxIndex((prev) => (prev! - 1 + activeMediaList.length) % activeMediaList.length)}
              className="absolute left-2 lg:left-6 text-white hover:text-slate-300 bg-black/40 hover:bg-black/60 p-2.5 rounded-full border border-white/10 cursor-pointer shrink-0"
            >
              &larr;
            </button>

            <img
              src={activeMediaList[lightboxIndex].src}
              alt={activeMediaList[lightboxIndex].title}
              className="max-h-[70vh] lg:max-h-[80vh] max-w-[85vw] object-contain rounded border border-white/10 shadow-2xl"
            />

            <button
              onClick={() => setLightboxIndex((prev) => (prev! + 1) % activeMediaList.length)}
              className="absolute right-2 lg:right-6 text-white hover:text-slate-300 bg-black/40 hover:bg-black/60 p-2.5 rounded-full border border-white/10 cursor-pointer shrink-0"
            >
              &rarr;
            </button>
          </div>

          {/* Footer Info details */}
          {(() => {
            const currentItem = activeMediaList[lightboxIndex] as any;
            return (
              <div className="text-white/90 text-center max-w-2xl mx-auto space-y-1 select-text">
                <h4 className="font-serif text-sm md:text-base font-bold text-secondary">
                  {currentItem.title}
                </h4>
                {(currentItem.place || currentItem.source) && (
                  <div className="flex justify-center items-center space-x-3 text-[10px] text-white/50 font-bold uppercase pt-1">
                    {currentItem.place && (
                      <span>Place: {currentItem.place}</span>
                    )}
                    {currentItem.place && currentItem.source && (
                      <span>|</span>
                    )}
                    {currentItem.source && (
                      <span>Source: {currentItem.source}</span>
                    )}
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}
