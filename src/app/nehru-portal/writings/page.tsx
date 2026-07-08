"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";
import writingsData from "@/data/writings.json";
import { useApp } from "@/context/AppContext";

interface WritingItem {
  title: string;
  link: string;
  cover: string;
  author: string;
}

export default function WritingsPage() {
  const { lang, t } = useApp();
  const writings = writingsData as WritingItem[];
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;

  // Filter volumes based on search
  const filtered = useMemo(() => {
    return writings.filter((w) =>
      w.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [writings, search]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = useMemo(() => {
    return filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  }, [filtered, page, itemsPerPage]);

  const handlePageChange = (pageNum: number) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setPage(pageNum);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Convert link to slug by removing .html and replacing special characters
  const getSlug = (link: string) => {
    return link.replace(".html", "");
  };

  // Helper to resolve cover image
  const getCoverUrl = (imgPath: string) => {
    if (!imgPath) return null;
    return imgPath.startsWith("/") ? imgPath : `/${imgPath}`;
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
              <span>{t("writings")}</span>
            </div>
          </div>

          <div className="spaceArea">
            <div
              style={{
                display: "flex",
                justifyContent: "between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "16px",
                marginBottom: "20px",
              }}
            >
              <h2 style={{ color: "#a52216", margin: 0, flex: 1 }}>{t("writings")}</h2>

              {/* Search input styled to match heritage portal theme */}
              <div style={{ position: "relative", minWidth: "260px" }}>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                  }}
                  placeholder={lang === "hi" ? "वॉल्यूम खोजें..." : "Search volumes..."}
                  style={{
                    width: "100%",
                    padding: "8px 12px",
                    border: "1px solid #c0a84e",
                    borderRadius: "4px",
                    background: "#fbf9ea",
                    fontSize: "13px",
                    color: "#312502",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            {filtered.length === 0 ? (
              <div
                style={{
                  padding: "40px 20px",
                  textAlign: "center",
                  color: "#755700",
                  fontSize: "15px",
                }}
              >
                {lang === "hi" ? "कोई परिणाम नहीं मिला।" : "No volumes found matching your search query."}
              </div>
            ) : (
              <>
                {/* Two-Column Grid Layout matching the original portal */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))",
                    gap: "20px",
                    marginBottom: "30px",
                  }}
                  className="writings-grid"
                >
                  {/* CSS override for small screens */}
                  <style>{`
                    @media (max-width: 600px) {
                      .writings-grid {
                        grid-template-columns: 1fr !important;
                      }
                      .writing-card {
                        flex-direction: column !important;
                        align-items: center !important;
                        text-align: center !important;
                      }
                    }
                  `}</style>

                  {paginated.map((item, idx) => {
                    const coverUrl = getCoverUrl(item.cover);
                    const slug = getSlug(item.link);
                    return (
                      <div
                        key={idx}
                        className="writing-card"
                        style={{
                          display: "flex",
                          background: "#ffffff",
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
                                // Fallback if image fails to load
                                (e.target as HTMLElement).style.display = "none";
                              }}
                            />
                          ) : null}
                        </div>

                        {/* Right: Details */}
                        <div style={{ flex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
                          <h4 style={{ margin: "0 0 8px 0", fontSize: "16px", fontWeight: "bold" }}>
                            <Link
                              href={`/nehru-portal/writings/${slug}`}
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

                {/* Pagination matching the original portal style */}
                {totalPages > 1 && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "6px",
                      marginTop: "30px",
                      marginBottom: "20px",
                      flexWrap: "wrap",
                    }}
                  >
                    {/* First Page Button */}
                    <button
                      onClick={() => handlePageChange(1)}
                      disabled={page === 1}
                      style={{
                        padding: "6px 10px",
                        border: "1px solid #c0a84e",
                        background: "#fff",
                        color: "#3b3614",
                        fontSize: "12px",
                        cursor: page === 1 ? "default" : "pointer",
                        opacity: page === 1 ? 0.5 : 1,
                        borderRadius: "2px",
                      }}
                    >
                      &laquo;
                    </button>

                    {/* Prev Button */}
                    <button
                      onClick={() => handlePageChange(page - 1)}
                      disabled={page === 1}
                      style={{
                        padding: "6px 10px",
                        border: "1px solid #c0a84e",
                        background: "#fff",
                        color: "#3b3614",
                        fontSize: "12px",
                        cursor: page === 1 ? "default" : "pointer",
                        opacity: page === 1 ? 0.5 : 1,
                        borderRadius: "2px",
                      }}
                    >
                      &lsaquo;
                    </button>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
                      const isCurrent = p === page;
                      return (
                        <button
                          key={p}
                          onClick={() => handlePageChange(p)}
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "1px solid #c0a84e",
                            background: isCurrent ? "#3b3614" : "#fff",
                            color: isCurrent ? "#fff" : "#3b3614",
                            fontSize: "12px",
                            fontWeight: isCurrent ? "bold" : "normal",
                            cursor: "pointer",
                            borderRadius: "2px",
                          }}
                        >
                          {p}
                        </button>
                      );
                    })}

                    {/* Next Button */}
                    <button
                      onClick={() => handlePageChange(page + 1)}
                      disabled={page === totalPages}
                      style={{
                        padding: "6px 10px",
                        border: "1px solid #c0a84e",
                        background: "#fff",
                        color: "#3b3614",
                        fontSize: "12px",
                        cursor: page === totalPages ? "default" : "pointer",
                        opacity: page === totalPages ? 0.5 : 1,
                        borderRadius: "2px",
                      }}
                    >
                      &rsaquo;
                    </button>

                    {/* Last Page Button */}
                    <button
                      onClick={() => handlePageChange(totalPages)}
                      disabled={page === totalPages}
                      style={{
                        padding: "6px 10px",
                        border: "1px solid #c0a84e",
                        background: "#fff",
                        color: "#3b3614",
                        fontSize: "12px",
                        cursor: page === totalPages ? "default" : "pointer",
                        opacity: page === totalPages ? 0.5 : 1,
                        borderRadius: "2px",
                      }}
                    >
                      &raquo;
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
