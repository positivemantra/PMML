"use client";

import React, { useState } from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";

interface AudioTrack {
  src: string;
  title: string;
  place?: string;
  source: string;
  sizeLabel: string;
  category: string;
}

const allTracks: AudioTrack[] = [
  {
    src: "/sites/default/files/audios/audio--light-has-gone-30-jan-1948.mp3",
    title: "Jawaharlal Nehru's Speech \"The Light Has Gone Out\", 30 January, 1948",
    source: "Nehru Memorial Museum & Library",
    sizeLabel: "2.22 MB",
    category: "light",
  },
];

const categories = [
  { value: "light",  label: "Light has gone out" },
  { value: "1948",   label: "Nehru's Audios - 1948" },
  { value: "1949",   label: "Nehru's Audios - 1949" },
  { value: "other",  label: "Nehru's Other Audios" },
  { value: "tryst",  label: "Tryst With Destiny - Midnight-1947" },
];

function MicIcon() {
  return (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="#888" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="17" y="4" width="14" height="22" rx="7" />
      <path d="M8 24a16 16 0 0 0 32 0" />
      <line x1="24" y1="40" x2="24" y2="48" />
      <line x1="16" y1="48" x2="32" y2="48" />
    </svg>
  );
}

export default function AudioGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("light");
  const [activeIndex, setActiveIndex] = useState(0);

  const tracks = allTracks.filter((t) => t.category === selectedCategory);
  const current = tracks[activeIndex] ?? null;

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setActiveIndex(0);
  };

  return (
    <>
      <TopBar />
      <Header />
      <main id="main-content" className="w-full flex-1 innerContent text-left select-none">
        <div className="container">
          <div className="breadCrumbArea cf">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <Link href="/nehru-portal/galleries">Galleries</Link>
              <span>Audio Gallery</span>
            </div>
          </div>

          <div className="spaceArea">
            <h2 style={{ color: "#a52216" }}>Audio Gallery</h2>

            {/* Category filter bar */}
            <div className="gallerySearchArea cf" style={{ background: "#dbc992", padding: "14px 20px", marginBottom: 0, display: "flex", alignItems: "center", gap: "16px" }}>
              <label style={{ fontWeight: 600, color: "#312502", fontSize: "14px", whiteSpace: "nowrap" }}>Category</label>
              <div className="searchSelect" style={{ flex: 1, maxWidth: "400px" }}>
                <select
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  style={{ width: "100%", padding: "6px 10px", border: "1px solid #c0a84e", borderRadius: "4px", fontSize: "13px", color: "#312502", appearance: "auto", cursor: "pointer", background: "#fff" }}
                >
                  {categories.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {!current ? (
              <div style={{ padding: "40px 20px", textAlign: "center", color: "#755700", fontSize: "15px", background: "#f9f4e3" }}>
                No audio available for this category yet.
              </div>
            ) : (
              <>
                {/* Viewer area */}
                <div style={{ background: "#f9f4e3", padding: "20px 60px", display: "flex", flexDirection: "column", alignItems: "center", minHeight: "380px" }}>
                  {/* HTML5 Audio player */}
                  <div style={{ width: "100%", maxWidth: "480px", marginBottom: "16px" }}>
                    <audio key={current.src} controls style={{ width: "100%", outline: "none" }}>
                      <source src={current.src} type="audio/mpeg" />
                    </audio>
                  </div>
                  {/* Portrait */}
                  <div style={{ border: "6px solid #e8e0c4", background: "#fff", padding: "6px", maxWidth: "460px", width: "100%", textAlign: "center" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/sites/default/files/gallery/gallerybanner.jpg"
                      alt="Jawaharlal Nehru"
                      style={{ display: "block", maxWidth: "100%", maxHeight: "320px", margin: "0 auto", objectFit: "cover", filter: "grayscale(100%)" }}
                    />
                  </div>
                </div>

                {/* Metadata */}
                <div className="gallery_inner cf" style={{ background: "#f5eed6", padding: "14px 20px", borderTop: "1px solid #dbc992" }}>
                  <div style={{ marginBottom: "6px", fontSize: "13px", color: "#312502" }}>
                    <span style={{ fontWeight: 700, color: "#a42318", marginRight: "6px" }}>Title:</span>
                    {current.title}
                  </div>
                  {current.place && (
                    <div style={{ marginBottom: "6px", fontSize: "13px", color: "#312502" }}>
                      <span style={{ fontWeight: 700, color: "#a42318", marginRight: "6px" }}>Place:</span>
                      {current.place}
                    </div>
                  )}
                  <div style={{ marginBottom: "12px", fontSize: "13px", color: "#312502" }}>
                    <span style={{ fontWeight: 700, color: "#a42318", marginRight: "6px" }}>Source:</span>
                    {current.source}
                  </div>
                  {/* Download */}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <a
                      href={current.src}
                      download
                      style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#222", color: "#fff", padding: "7px 14px", borderRadius: "3px", fontSize: "13px", textDecoration: "none", fontWeight: 600 }}
                    >
                      <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                      Download
                    </a>
                    <span style={{ fontSize: "13px", color: "#312502" }}>[ Audio Size : {current.sizeLabel} ]</span>
                  </div>
                </div>

                {/* Thumbnail filmstrip */}
                <div style={{ background: "#dbc992", padding: "12px 40px" }}>
                  <div style={{ display: "flex", gap: "6px", overflowX: "auto", scrollbarWidth: "thin", justifyContent: tracks.length < 8 ? "center" : "flex-start" }}>
                    {tracks.map((track, idx) => (
                      <button
                        key={track.src + idx}
                        onClick={() => setActiveIndex(idx)}
                        aria-label={`Play track ${idx + 1}`}
                        style={{ flexShrink: 0, width: "80px", height: "60px", padding: 0, border: idx === activeIndex ? "3px solid #a42318" : "3px solid transparent", borderRadius: "2px", background: idx === activeIndex ? "#fff" : "#e8d98a", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "border-color 0.2s", opacity: idx === activeIndex ? 1 : 0.75 }}
                      >
                        <MicIcon />
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
