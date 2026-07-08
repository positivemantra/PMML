"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";
import archivesData from "@/data/archives.json";

// ─── Types ────────────────────────────────────────────────────────────────────
interface ArchiveEntry {
  category: string;
  description: string;
  place: string;
  images: string[];
}
interface ArchivesData {
  nehruPapers: ArchiveEntry[];
  contemporariesPapers: ArchiveEntry[];
}

const data = archivesData as ArchivesData;

// ─── Sepia Document Placeholder ───────────────────────────────────────────────
function SepiaDoc({ seed = 0, small = false }: { seed?: number; small?: boolean }) {
  const shades = ["hsl(35,28%,68%)", "hsl(35,22%,72%)", "hsl(35,25%,65%)"];
  const bg = shades[seed % shades.length];
  const s = small ? 0.55 : 1;
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <svg
        width={36 * s}
        height={46 * s}
        viewBox="0 0 36 46"
        fill="none"
        style={{ opacity: 0.45 }}
      >
        <rect x="1" y="1" width="34" height="44" rx="1.5" fill="hsl(35,18%,52%)" />
        <line x1="6" y1="12" x2="30" y2="12" stroke="hsl(35,12%,32%)" strokeWidth="1.4" />
        <line x1="6" y1="17" x2="30" y2="17" stroke="hsl(35,12%,32%)" strokeWidth="1.4" />
        <line x1="6" y1="22" x2="30" y2="22" stroke="hsl(35,12%,32%)" strokeWidth="1.4" />
        <line x1="6" y1="27" x2="26" y2="27" stroke="hsl(35,12%,32%)" strokeWidth="1.4" />
        <line x1="6" y1="32" x2="22" y2="32" stroke="hsl(35,12%,32%)" strokeWidth="1.4" />
      </svg>
    </div>
  );
}

// ─── Image with sepia fallback ────────────────────────────────────────────────
function DocImage({
  src,
  alt,
  seed,
  small,
  style,
}: {
  src: string;
  alt: string;
  seed?: number;
  small?: boolean;
  style?: React.CSSProperties;
}) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [src]);
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", ...style }}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      ) : (
        <SepiaDoc seed={seed} small={small} />
      )}
    </div>
  );
}

// ─── Image Viewer (carousel) ──────────────────────────────────────────────────
function ImageViewer({ entry }: { entry: ArchiveEntry }) {
  const [idx, setIdx] = useState(0);
  const thumbRef = useRef<HTMLDivElement>(null);

  // reset when entry changes
  useEffect(() => setIdx(0), [entry]);

  const prev = useCallback(
    () => setIdx((i) => (i - 1 + entry.images.length) % entry.images.length),
    [entry.images.length]
  );
  const next = useCallback(
    () => setIdx((i) => (i + 1) % entry.images.length),
    [entry.images.length]
  );

  const hasMultiple = entry.images.length > 1;

  return (
    <div>
      {/* ── Main viewer ── */}
      <div
        style={{
          position: "relative",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 380,
          padding: "24px 64px",
          boxSizing: "border-box",
        }}
      >
        {/* Prev arrow */}
        {hasMultiple && (
          <button
            onClick={prev}
            aria-label="Previous"
            style={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              width: 48,
              height: 72,
              background: "rgba(255,255,255,0.9)",
              border: "none",
              borderRight: "1px solid #e0e0e0",
              cursor: "pointer",
              fontSize: 32,
              color: "#555",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
            }}
          >
            ‹
          </button>
        )}

        {/* Main image */}
        <div
          style={{
            width: "100%",
            maxWidth: 460,
            aspectRatio: "3 / 4",
            overflow: "hidden",
            border: "1px solid #ddd",
            background: "#f5f0e8",
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
          }}
        >
          <DocImage
            src={entry.images[idx]}
            alt={entry.description}
            seed={idx}
          />
        </div>

        {/* Next arrow */}
        {hasMultiple && (
          <button
            onClick={next}
            aria-label="Next"
            style={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              width: 48,
              height: 72,
              background: "rgba(255,255,255,0.9)",
              border: "none",
              borderLeft: "1px solid #e0e0e0",
              cursor: "pointer",
              fontSize: 32,
              color: "#555",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
            }}
          >
            ›
          </button>
        )}
      </div>

      {/* ── Metadata ── */}
      <div
        style={{
          background: "#fff",
          padding: "14px 24px 18px",
          borderTop: "1px solid #eee",
          fontSize: 14,
        }}
      >
        <div style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "flex-start" }}>
          <span style={{ fontWeight: 700, color: "#4a3000", minWidth: 110 }}>Description:</span>
          <span style={{ color: "#444" }}>{entry.description}</span>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
          <span style={{ fontWeight: 700, color: "#4a3000", minWidth: 110 }}>Place:</span>
          <span style={{ color: "#444" }}>{entry.place}</span>
        </div>
      </div>

      {/* ── Thumbnail strip ── */}
      {hasMultiple && (
        <div
          ref={thumbRef}
          style={{
            background: "#c8b06a",
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "12px 16px",
            overflowX: "auto",
          }}
        >
          {entry.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`View page ${i + 1}`}
              style={{
                flexShrink: 0,
                width: 76,
                height: 76,
                padding: 2,
                background: "#fff",
                border: i === idx ? "2px solid #8b1a1a" : "2px solid rgba(255,255,255,0.6)",
                cursor: "pointer",
                overflow: "hidden",
                outline: "none",
                boxSizing: "border-box",
              }}
            >
              <DocImage
                src={img}
                alt={`Page ${i + 1}`}
                seed={i}
                small
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ArchivesPage({ defaultTab = "nehru" }: { defaultTab?: "nehru" | "contemporaries" }) {
  const [activeTab, setActiveTab] = useState<"nehru" | "contemporaries">(defaultTab);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    defaultTab === "nehru" ? (data.nehruPapers[0]?.category ?? "") : (data.contemporariesPapers[0]?.category ?? "")
  );

  useEffect(() => {
    setActiveTab(defaultTab);
    const papers = defaultTab === "nehru" ? data.nehruPapers : data.contemporariesPapers;
    setSelectedCategory(papers[0]?.category ?? "");
  }, [defaultTab]);

  const currentPapers =
    activeTab === "nehru" ? data.nehruPapers : data.contemporariesPapers;

  const selectedEntry =
    currentPapers.find((p) => p.category === selectedCategory) ?? currentPapers[0];

  const pageTitle =
    activeTab === "nehru" ? "Nehru Papers" : "Papers of Nehru's Contemporaries";

  return (
    <>
      <TopBar />
      <Header />

      <main id="main-content" className="w-full flex-1 innerContent text-left select-none">
        <div className="container">
          {/* ── Yellow breadcrumb strap ── */}
          <div className="breadCrumbArea cf">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <Link href="/nehru-portal/nehru-papers">Archives</Link>
              <span>{pageTitle}</span>
            </div>
          </div>

          <div className="spaceArea">
          {/* Page heading */}
          <h1
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 28,
              fontWeight: 700,
              color: "#8b1a1a",
              marginBottom: 20,
            }}
          >
            {pageTitle}
          </h1>

          {/* Tabbing Container */}
          <div className="tabbing placesResidence cf" style={{ padding: 0 }}>
            <ul className="tabNav">
              <li className={activeTab === "nehru" ? "tabsStateActive" : "tabsStateDefault"}>
                <Link href="/nehru-portal/nehru-papers">
                  Nehru Papers
                </Link>
              </li>
              <li className={activeTab === "contemporaries" ? "tabsStateActive" : "tabsStateDefault"}>
                <Link href="/nehru-portal/contemporaries">
                  Papers of Nehru&rsquo;s Contemporaries
                </Link>
              </li>
            </ul>

            <div className="mask">
              <div className="tabContainer cf">
                <div className="tabPanel tabsStateActive" style={{ display: "block", padding: "20px 20px 30px" }}>
                  
                  {/* Category selection bar */}
                  <div className="gallerySearchArea cf" style={{ marginTop: 0, display: "flex", alignItems: "center" }}>
                    <div className="searchCol" style={{ display: "flex", alignItems: "center", gap: "10px", float: "none", margin: 0 }}>
                      <label style={{ margin: 0, lineHeight: "27px" }}>Category</label>
                      <div style={{ float: "none" }}>
                        <select
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          style={{
                            border: "1px solid #78620b",
                            borderRadius: "20px",
                            fontSize: "14px",
                            height: "27px",
                            lineHeight: "24px",
                            padding: "0 27px 0 8px",
                            width: "414px",
                            background: "#fff url(/sites/all/themes/nhp/images/search-arrow.png) no-repeat 95% center",
                            color: "#312502",
                            cursor: "pointer",
                            appearance: "none",
                            WebkitAppearance: "none",
                            outline: "none"
                          }}
                        >
                          {currentPapers.map((p) => (
                            <option key={p.category} value={p.category}>
                              {p.category}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* ── Viewer card ── */}
                  <div
                    style={{
                      border: "1px solid #dcc893",
                      background: "#fff",
                      marginTop: 20,
                      boxShadow: "0 2px 5px rgba(0,0,0,0.06)",
                    }}
                  >
                    {selectedEntry && (
                      <ImageViewer key={selectedEntry.category} entry={selectedEntry} />
                    )}
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* ── Scroll to top ── */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 12 }}>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              style={{
                width: 44,
                height: 44,
                background: "#2d1f00",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                fontSize: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
              }}
            >
              ↑
            </button>
          </div>
          </div>{/* end spaceArea */}
        </div>{/* end container */}
      </main>

      <Footer />
    </>
  );
}
