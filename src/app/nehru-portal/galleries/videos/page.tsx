"use client";

import React, { useState } from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";

interface VideoItem {
  youtubeId: string;
  description: string;
  place?: string;
  source: string;
  published: string;
  category: string;
}

// -- Video data from legacy video-gallery.html ---------------------------------
const allVideos: VideoItem[] = [
  // Nehru in Other Functions (cat 127) - default
  { youtubeId: "0MvS0q_p2sE", description: "AICC meeting in Madurai, 1961",            source: "Nehru Memorial Museum & Library", published: "External Video (YouTube)", category: "other" },
  { youtubeId: "Mwee_zOgYOk", description: "Indian Film Golden Jubilee, 1963",          source: "Nehru Memorial Museum & Library", published: "External Video (YouTube)", category: "other" },
  { youtubeId: "eBGPyIlsWMk", description: "Congress Session, 68th Session, 1964",     source: "Nehru Memorial Museum & Library", published: "External Video (YouTube)", category: "other" },
  { youtubeId: "Lt-JXOzkqxk", description: "Dadra and Nagar Haveli merger, 1961",      source: "Nehru Memorial Museum & Library", published: "External Video (YouTube)", category: "other" },
];

const categories = [
  { value: "other",      label: "Nehru in Other Functions" },
  { value: "foreign",   label: "Nehru's Foreign Visit" },
  { value: "states",    label: "Nehru's Visits to Indian States" },
  { value: "public",    label: "Nehru in Public Functions" },
  { value: "freedom",   label: "Freedom Movement" },
  { value: "dignitaries", label: "Nehru and Foreign Dignitaries" },
];

export default function VideoGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("other");
  const [activeIndex, setActiveIndex] = useState(0);

  const videos = allVideos.filter((v) => v.category === selectedCategory);
  const current = videos[activeIndex] ?? null;

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
          {/* Breadcrumb */}
          <div className="breadCrumbArea cf">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <Link href="/nehru-portal/galleries">Galleries</Link>
              <span>Video Gallery</span>
            </div>
          </div>

          <div className="spaceArea">
            <h2 style={{ color: "#a52216" }}>Video Gallery</h2>

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
                No videos available for this category yet.
              </div>
            ) : (
              <>
                {/* YouTube iframe player */}
                <div className="videoPlayContainer" style={{ background: "#f9f4e3", padding: "20px 60px", display: "flex", justifyContent: "center" }}>
                  <div style={{ border: "6px solid #e8e0c4", background: "#fff", padding: "0", width: "100%", maxWidth: "550px" }}>
                    <iframe
                      key={current.youtubeId}
                      id="videoPlayerFrame"
                      src={`https://www.youtube.com/embed/${current.youtubeId}`}
                      width="100%"
                      height="415"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ display: "block", border: "none" }}
                      title={current.description}
                    />
                  </div>
                </div>

                {/* Metadata: Description, Source, Published */}
                <div className="gallery_inner cf" style={{ background: "#f5eed6", padding: "14px 20px", borderTop: "1px solid #dbc992" }}>
                  <div style={{ marginBottom: "6px", fontSize: "13px", color: "#312502" }}>
                    <span style={{ fontWeight: 700, color: "#a42318", marginRight: "6px" }}>Description:</span>
                    {current.description}
                  </div>
                  {current.place && (
                    <div style={{ marginBottom: "6px", fontSize: "13px", color: "#312502" }}>
                      <span style={{ fontWeight: 700, color: "#a42318", marginRight: "6px" }}>Place:</span>
                      {current.place}
                    </div>
                  )}
                  <div style={{ marginBottom: "6px", fontSize: "13px", color: "#312502" }}>
                    <span style={{ fontWeight: 700, color: "#a42318", marginRight: "6px" }}>Source:</span>
                    {current.source}
                  </div>
                  <div style={{ fontSize: "13px", color: "#312502" }}>
                    <span style={{ fontWeight: 700, color: "#a42318", marginRight: "6px" }}>Published:</span>
                    {current.published}
                  </div>
                </div>

                {/* Thumbnail filmstrip */}
                <div style={{ background: "#dbc992", padding: "12px 40px", position: "relative" }}>
                  <div style={{ display: "flex", gap: "6px", overflowX: "auto", scrollbarWidth: "thin", justifyContent: videos.length < 8 ? "center" : "flex-start" }}>
                    {videos.map((video, idx) => (
                      <button
                        key={video.youtubeId + idx}
                        onClick={() => setActiveIndex(idx)}
                        aria-label={`Play video: ${video.description}`}
                        title={video.description}
                        style={{
                          flexShrink: 0,
                          padding: 0,
                          border: idx === activeIndex ? "3px solid #a42318" : "3px solid transparent",
                          borderRadius: "2px",
                          background: "none",
                          cursor: "pointer",
                          transition: "border-color 0.2s",
                          opacity: idx === activeIndex ? 1 : 0.75,
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                          alt={video.description}
                          style={{ display: "block", width: "96px", height: "68px", objectFit: "cover" }}
                        />
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
