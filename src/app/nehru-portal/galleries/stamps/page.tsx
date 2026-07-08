"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";
import stampsData from "@/data/stamps.json";
import { useApp } from "@/context/AppContext";

export default function StampsPage() {
  const { lang, t } = useApp();
  const [selectedCategory, setSelectedCategory] = useState("42");
  const [activeIndex, setActiveIndex] = useState(0);

  // Filter stamps by selected category
  const stamps = useMemo(() => {
    return stampsData.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  // Reset index when category changes
  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setActiveIndex(0);
  };

  const current = stamps[activeIndex];

  // Helper to get image src (local vs remote)
  const getStampImageSrc = (href: string, category: string) => {
    if (category === "42") {
      // Indian is local
      const filename = href.substring(href.lastIndexOf("/") + 1);
      const decodedFilename = decodeURIComponent(filename);
      return `/sites/default/files/stamps/${decodedFilename}`;
    }
    // Remote URLs for others
    return href;
  };

  const prev = () => setActiveIndex((i) => (i > 0 ? i - 1 : stamps.length - 1));
  const next = () => setActiveIndex((i) => (i < stamps.length - 1 ? i + 1 : 0));

  return (
    <>
      <TopBar />
      <Header />
      <main id="main-content" className="w-full flex-1 innerContent text-left select-none">
        <div className="container">
          {/* Breadcrumb */}
          <div className="breadCrumbArea cf">
            <div className="breadcrumb">
              <Link href="/">{lang === "hi" ? "होम" : "Home"}</Link>
              <Link href="/nehru-portal/galleries">{lang === "hi" ? "गैलरी" : "Galleries"}</Link>
              <span>{lang === "hi" ? "टिकट" : "Stamps"}</span>
            </div>
          </div>

          <div className="spaceArea">
            <h2 style={{ color: "#a52216" }}>{lang === "hi" ? "टिकट" : "Stamps"}</h2>

            {/* Category Filter */}
            <div
              className="gallerySearchArea cf"
              style={{
                background: "#dbc992",
                padding: "14px 20px",
                marginBottom: 0,
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <label
                style={{
                  fontWeight: 600,
                  color: "#312502",
                  fontSize: "14px",
                  whiteSpace: "nowrap",
                }}
              >
                {lang === "hi" ? "श्रेणी" : "Category"}
              </label>
              <div className="searchSelect" style={{ flex: 1, maxWidth: "400px" }}>
                <select
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "6px 32px 6px 10px",
                    border: "1px solid #c0a84e",
                    borderRadius: "4px",
                    background: "#fff",
                    fontSize: "13px",
                    color: "#312502",
                    appearance: "auto",
                    cursor: "pointer",
                  }}
                >
                  <option value="42">{t("indian")}</option>
                  <option value="43">{t("foreign")}</option>
                </select>
              </div>
            </div>

            {stamps.length === 0 ? (
              <div
                style={{
                  padding: "40px 20px",
                  textAlign: "center",
                  color: "#755700",
                  fontSize: "15px",
                }}
              >
                {lang === "hi" ? "इस श्रेणी में कोई टिकट उपलब्ध नहीं है।" : "No stamps available for this category yet."}
              </div>
            ) : (
              <>
                {/* Main Slideshow Frame */}
                <div
                  style={{
                    position: "relative",
                    background: "#f9f4e3",
                    padding: "30px 60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "420px",
                  }}
                >
                  {/* Prev Arrow */}
                  <button
                    onClick={prev}
                    aria-label="Previous"
                    style={{
                      position: "absolute",
                      left: "15px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "50px",
                      color: "#755700",
                      lineHeight: 1,
                      padding: "4px 12px",
                      userSelect: "none",
                    }}
                  >
                    &#8249;
                  </button>

                  {/* Stamp Display Area */}
                  <div
                    style={{
                      border: "8px solid #e8e0c4",
                      background: "#fff",
                      padding: "16px",
                      maxWidth: "460px",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                      textAlign: "center",
                    }}
                  >
                    {current && (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        key={current.href}
                        src={getStampImageSrc(current.href, current.category)}
                        alt={current.description || "Nehru Stamp"}
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          maxHeight: "460px",
                          margin: "0 auto",
                          objectFit: "contain",
                        }}
                      />
                    )}
                  </div>

                  {/* Next Arrow */}
                  <button
                    onClick={next}
                    aria-label="Next"
                    style={{
                      position: "absolute",
                      right: "15px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "50px",
                      color: "#755700",
                      lineHeight: 1,
                      padding: "4px 12px",
                      userSelect: "none",
                    }}
                  >
                    &#8250;
                  </button>
                </div>

                {/* Info Block (Description, Place, Source) */}
                {current && (
                  <div
                    className="gallery_inner cf"
                    style={{
                      background: "#f5eed6",
                      padding: "14px 20px",
                      borderTop: "1px solid #dbc992",
                    }}
                  >
                    {current.description && (
                      <div style={{ fontSize: "14px", color: "#312502", marginBottom: "6px" }}>
                        <span className="mark" style={{ fontWeight: 700, color: "#a42318", marginRight: "6px" }}>
                          {lang === "hi" ? "विवरण:" : "Description:"}
                        </span>
                        <span className="rightDetails">{current.description}</span>
                      </div>
                    )}
                    {current.place && (
                      <div style={{ fontSize: "14px", color: "#312502", marginBottom: "6px" }}>
                        <span className="mark" style={{ fontWeight: 700, color: "#a42318", marginRight: "6px" }}>
                          {lang === "hi" ? "स्थान:" : "Place:"}
                        </span>
                        <span className="rightDetails">{current.place}</span>
                      </div>
                    )}
                    {current.source && (
                      <div style={{ fontSize: "14px", color: "#312502" }}>
                        <span className="mark" style={{ fontWeight: 700, color: "#a42318", marginRight: "6px" }}>
                          {lang === "hi" ? "स्रोत:" : "Source:"}
                        </span>
                        <span className="rightDetails">{current.source}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Thumbnails Filmstrip Carousel */}
                <div
                  style={{
                    background: "#dbc992",
                    padding: "16px 40px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      overflowX: "auto",
                      scrollbarWidth: "thin",
                      justifyContent: stamps.length < 10 ? "center" : "flex-start",
                      paddingBottom: "4px",
                    }}
                  >
                    {stamps.map((stamp, idx) => (
                      <button
                        key={stamp.href + idx}
                        onClick={() => setActiveIndex(idx)}
                        style={{
                          flexShrink: 0,
                          padding: 0,
                          border: idx === activeIndex ? "3px solid #a42318" : "3px solid transparent",
                          borderRadius: "2px",
                          background: "none",
                          cursor: "pointer",
                          transition: "border-color 0.2s, transform 0.1s",
                          transform: idx === activeIndex ? "scale(1.05)" : "none",
                        }}
                        aria-label={`View stamp ${idx + 1}`}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={getStampImageSrc(stamp.href, stamp.category)}
                          alt={stamp.description || `Stamp ${idx + 1}`}
                          style={{
                            display: "block",
                            width: "80px",
                            height: "60px",
                            objectFit: "cover",
                            opacity: idx === activeIndex ? 1 : 0.7,
                          }}
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
