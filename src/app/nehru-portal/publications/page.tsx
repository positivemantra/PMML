"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";
import publicationsData from "@/data/publications.json";
import { useApp } from "@/context/AppContext";

interface PublicationItem {
  title: string;
  link: string;
  cover: string;
  author: string;
  bookDisplayPath: string;
  totalImages: number;
}

export default function PublicationsPage() {
  const { lang, t } = useApp();
  const publications = publicationsData as PublicationItem[];

  // Clean cover url logic
  const getCoverUrl = (imgPath: string) => {
    if (!imgPath) return null;
    return imgPath.startsWith("/") || imgPath.startsWith("http") ? imgPath : `/${imgPath}`;
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
              <Link href="/">{lang === "hi" ? "होम" : "Home"}</Link>
              <span>{t("nmmlPublications")}</span>
            </div>
          </div>

          <div className="spaceArea">
            <h2 style={{ color: "#a52216", marginBottom: "20px" }}>{t("nmmlPublications")}</h2>

            {/* Checkerboard Grid matching the original portal style */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))",
                gap: "20px",
                marginBottom: "30px",
              }}
              className="publications-grid"
            >
              {/* CSS override for small screens */}
              <style>{`
                @media (max-width: 600px) {
                  .publications-grid {
                    grid-template-columns: 1fr !important;
                  }
                  .publication-card {
                    flex-direction: column !important;
                    align-items: center !important;
                    text-align: center !important;
                  }
                }
              `}</style>

              {publications.map((item, idx) => {
                const coverUrl = getCoverUrl(item.cover);
                // Checkerboard pattern formula: Beige or White
                const isBeige = (Math.floor(idx / 2) + (idx % 2)) % 2 === 1;
                const cardBg = isBeige ? "#f1ede2" : "#ffffff";

                return (
                  <div
                    key={idx}
                    className="publication-card"
                    style={{
                      display: "flex",
                      background: cardBg,
                      border: "1px solid #eedfad",
                      padding: "16px",
                      gap: "16px",
                      borderRadius: "4px",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                      alignItems: "flex-start",
                    }}
                  >
                    {/* Left: Book Cover */}
                    <div
                      style={{
                        width: "100px",
                        height: "125px",
                        flexShrink: 0,
                        position: "relative",
                        border: "1px solid #ddd",
                        boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",
                        background: "#eaeaea",
                        overflow: "hidden",
                      }}
                    >
                      {coverUrl ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={coverUrl}
                          alt={item.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = "none";
                          }}
                        />
                      ) : null}
                    </div>

                    {/* Right: Details */}
                    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                      <h4 style={{ margin: "0 0 8px 0", fontSize: "16px", fontWeight: "bold" }}>
                        <Link
                          href={`/nehru-portal/publications/${item.link}`}
                          style={{
                            color: "#a52216",
                            textDecoration: "none",
                            fontFamily: "var(--font-serif)",
                          }}
                          className="hover:underline"
                        >
                          {item.title}
                        </Link>
                      </h4>
                      <p style={{ margin: 0, fontSize: "13px", color: "#555", lineHeight: "1.4" }}>
                        {item.author}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
