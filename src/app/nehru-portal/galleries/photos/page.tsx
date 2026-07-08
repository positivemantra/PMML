"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";

// ── Photo data extracted from legacy photo-gallery.html ──────────────────────
const allPhotos: {
  src: string;
  description: string;
  place?: string;
  source: string;
  category: string;
}[] = [
  // Jawaharlal Nehru and Animals (cat 125)
  { src: "/sites/default/files/17_4.jpg", description: "Jawaharlal Nehru and U. Nu, Prime Minister of Burma with a fawn", source: "Nehru Memorial Museum & Library", category: "animals" },
  { src: "/sites/default/files/3_6.jpg",  description: "Jawaharlal Nehru with an elephant calf which was presented to him in New Delhi, 29 October 1961", place: "New Delhi", source: "Nehru Memorial Museum & Library", category: "animals" },
  { src: "/sites/default/files/18_4.jpg", description: "Jawaharlal Nehru with tiger cubs", source: "Nehru Memorial Museum & Library", category: "animals" },
  { src: "/sites/default/files/4_7.jpg",  description: "Jawaharlal Nehru with a pigeon", source: "Nehru Memorial Museum & Library", category: "animals" },
  { src: "/sites/default/files/5_6.jpg",  description: "Jawaharlal Nehru feeding horse", source: "Nehru Memorial Museum & Library", category: "animals" },
  { src: "/sites/default/files/6_6.jpg",  description: "Jawaharlal Nehru feeding pandas", source: "Nehru Memorial Museum & Library", category: "animals" },
  { src: "/sites/default/files/7_6.jpg",  description: "Jawaharlal Nehru feeding pandas", source: "Nehru Memorial Museum & Library", category: "animals" },
  { src: "/sites/default/files/8_6.jpg",  description: "Jawaharlal Nehru being conducted round the Goshala during his Gujarat tour on 12-13 Feb, 1949", place: "Gujarat", source: "Nehru Memorial Museum & Library", category: "animals" },
  { src: "/sites/default/files/9_6.jpg",  description: "Jawaharlal Nehru with one of the three Mongolian horses which were presented to The Prime Minister of India at Prime Minister's House, New Delhi on Dec. 16, 1958.", place: "New Delhi", source: "Nehru Memorial Museum & Library", category: "animals" },
  { src: "/sites/default/files/10_6.jpg", description: "Jawaharlal Nehru with two red pandas, 1 January 1958", source: "Nehru Memorial Museum & Library", category: "animals" },
  { src: "/sites/default/files/11_5.jpg", description: "Jawaharlal Nehru on horseback in Achkan and chooridar.", source: "Nehru Memorial Museum & Library", category: "animals" },
  { src: "/sites/default/files/12_5.jpg", description: "The Prime Minister, Jawaharlal Nehru, playing with tiger cubs at the PM's House on 12/8/55", source: "Nehru Memorial Museum & Library", category: "animals" },
  { src: "/sites/default/files/13_5.jpg", description: "Jawaharlal Nehru with a leopard, 21 January 1961", source: "Nehru Memorial Museum & Library", category: "animals" },
  { src: "/sites/default/files/14_5.jpg", description: "Jawaharlal Nehru with Raja and Rani, 2-4 month old tiger cubs, presented to him by Algural Shastri, U.P. Forest Minister, New Delhi, 17 May 1961", place: "New Delhi", source: "Nehru Memorial Museum & Library", category: "animals" },
  { src: "/sites/default/files/15_4.jpg", description: "Jawaharlal Nehru playing with his pet dog", source: "Nehru Memorial Museum & Library", category: "animals" },
  { src: "/sites/default/files/1_12.jpg", description: "Jawaharlal Nehru with Tiger cubs at Teen Murti House", place: "New Delhi", source: "Nehru Memorial Museum & Library", category: "animals" },
  { src: "/sites/default/files/2_5.jpg",  description: "Jawaharlal Nehru with pandas", source: "Nehru Memorial Museum & Library", category: "animals" },
  { src: "/sites/default/files/16_4.jpg", description: "Jawaharlal Nehru with a deer", source: "Nehru Memorial Museum & Library", category: "animals" },
];

const categories = [
  { value: "ex-legacy",    label: "Exhibition on 'The Legacy of Pandit Jawaharlal Nehru'" },
  { value: "ex-newiit",    label: "Exhibition on 'New India and the First IIT'" },
  { value: "ex-chandigarh",label: "Exhibition on 'Chandigarh: The City of Hope'" },
  { value: "ex-discovery", label: "Exhibition on 'The Making of The Discovery of India'" },
  { value: "ex-purnaswaraj",label: "Exhibition on 'Towards Purna Swaraj: The Lahore Congress, 1929'" },
  { value: "ex-bandung",   label: "Exhibition on 'Asian-African Conference, Bandung, 1955'" },
  { value: "ex-asian",     label: "Exhibition on 'Asian Relations Conference, 1947'" },
  { value: "ex-temples",   label: "Exhibition on 'Temples of Modern India'" },
  { value: "ex-cabinet",   label: "Exhibition on 'The First Union Cabinet, 1947'" },
  { value: "animals",      label: "Jawaharlal Nehru and Animals" },
  { value: "general",      label: "Jawaharlal Nehru Photos (General)" },
  { value: "portraits",    label: "Jawaharlal Nehru Portraits" },
  { value: "family",       label: "Jawaharlal Nehru with family members" },
  { value: "foreign",      label: "Jawaharlal Nehru with foreign dignitaries" },
  { value: "leaders",      label: "Jawaharlal Nehru with other Indian leaders" },
  { value: "teen",         label: "Teen Murti House" },
];

export default function PhotoGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("animals");
  const [activeIndex, setActiveIndex] = useState(0);

  const photos = useMemo(
    () => allPhotos.filter((p) => p.category === selectedCategory),
    [selectedCategory]
  );

  // Reset index when category changes
  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setActiveIndex(0);
  };

  const current = photos[activeIndex];

  const prev = () => setActiveIndex((i) => (i > 0 ? i - 1 : photos.length - 1));
  const next = () => setActiveIndex((i) => (i < photos.length - 1 ? i + 1 : 0));

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
              <span>Photo Gallery</span>
            </div>
          </div>

          <div className="spaceArea">
            <h2 style={{ color: "#a52216" }}>Photo Gallery</h2>

            {/* Category filter row */}
            <div className="gallerySearchArea cf" style={{ background: "#dbc992", padding: "14px 20px", marginBottom: 0, display: "flex", alignItems: "center", gap: "16px" }}>
              <label style={{ fontWeight: 600, color: "#312502", fontSize: "14px", whiteSpace: "nowrap" }}>Category</label>
              <div className="searchSelect" style={{ flex: 1, maxWidth: "400px" }}>
                <select
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "6px 32px 6px 10px",
                    border: "1px solid #c0a84e",
                    borderRadius: "4px",
                    background: "#fff url('/sites/default/files/gallery/galleryCartoons.png') no-repeat right 8px center",
                    fontSize: "13px",
                    color: "#312502",
                    appearance: "auto",
                    cursor: "pointer",
                  }}
                >
                  {categories.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {photos.length === 0 ? (
              <div style={{ padding: "40px 20px", textAlign: "center", color: "#755700", fontSize: "15px" }}>
                No photos available for this category yet.
              </div>
            ) : (
              <>
                {/* Main image viewer */}
                <div style={{ position: "relative", background: "#f9f4e3", padding: "20px 60px", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "380px" }}>
                  {/* Prev arrow */}
                  <button
                    onClick={prev}
                    aria-label="Previous"
                    style={{
                      position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)",
                      background: "none", border: "none", cursor: "pointer",
                      fontSize: "40px", color: "#755700", lineHeight: 1, padding: "4px 10px",
                    }}
                  >&#8249;</button>

                  {/* Main photo */}
                  <div style={{ border: "6px solid #e8e0c4", background: "#fff", padding: "6px", maxWidth: "460px", textAlign: "center" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      key={current.src}
                      src={current.src}
                      alt={current.description}
                      style={{ display: "block", maxWidth: "100%", maxHeight: "420px", margin: "0 auto", objectFit: "contain" }}
                    />
                  </div>

                  {/* Next arrow */}
                  <button
                    onClick={next}
                    aria-label="Next"
                    style={{
                      position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)",
                      background: "none", border: "none", cursor: "pointer",
                      fontSize: "40px", color: "#755700", lineHeight: 1, padding: "4px 10px",
                    }}
                  >&#8250;</button>
                </div>

                {/* Description + Source */}
                {current && (
                  <div className="gallery_inner cf" style={{ background: "#f5eed6", padding: "14px 20px", borderTop: "1px solid #dbc992" }}>
                    <div className="description" style={{ marginBottom: "6px", fontSize: "13px", color: "#312502" }}>
                      <span className="mark" style={{ fontWeight: 700, color: "#a42318", marginRight: "6px" }}>Description:</span>
                      <span className="rightDetails">{current.description}</span>
                    </div>
                    {current.place && (
                      <div className="description" style={{ marginBottom: "6px", fontSize: "13px", color: "#312502" }}>
                        <span className="mark" style={{ fontWeight: 700, color: "#a42318", marginRight: "6px" }}>Place:</span>
                        <span className="rightDetails">{current.place}</span>
                      </div>
                    )}
                    <div className="description" style={{ fontSize: "13px", color: "#312502" }}>
                      <span className="mark" style={{ fontWeight: 700, color: "#a42318", marginRight: "6px" }}>Source:</span>
                      <span className="rightDetails">{current.source}</span>
                    </div>
                  </div>
                )}

                {/* Thumbnail filmstrip */}
                <div style={{ background: "#dbc992", padding: "12px 40px", position: "relative", overflow: "hidden" }}>
                  <div style={{ display: "flex", gap: "6px", overflowX: "auto", scrollbarWidth: "thin", justifyContent: photos.length < 8 ? "center" : "flex-start" }}>
                    {photos.map((photo, idx) => (
                      <button
                        key={photo.src + idx}
                        onClick={() => setActiveIndex(idx)}
                        style={{
                          flexShrink: 0,
                          padding: 0,
                          border: idx === activeIndex ? "3px solid #a42318" : "3px solid transparent",
                          borderRadius: "2px",
                          background: "none",
                          cursor: "pointer",
                          transition: "border-color 0.2s",
                        }}
                        aria-label={`View photo ${idx + 1}`}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={photo.src}
                          alt={photo.description}
                          style={{ display: "block", width: "72px", height: "54px", objectFit: "cover", opacity: idx === activeIndex ? 1 : 0.75 }}
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
