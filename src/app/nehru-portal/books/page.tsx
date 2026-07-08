"use client";

import React from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";
import booksData from "@/data/books.json";
import { useApp } from "@/context/AppContext";

interface BookItem {
  title: string;
  link: string;
  cover: string;
  author: string;
  highResCover?: string;
  bookDisplayPath?: string;
  totalImages?: number;
}

const bookDescriptions: Record<string, string> = {
  "letters-father-his-daughter-0": "A collection of 30 letters written by Jawaharlal Nehru in the summer of 1928 to his daughter Indira Gandhi, who was then 10 years old, to teach her about natural history and the civilizations of the world.",
  "autobiography-0": "Jawaharlal Nehru’s life was closely intertwined with the history and destiny of modern India. His Autobiography, written between 1934 and 1935 when he was in prison, is more than the personal story of an individual - it is also an account of the political awakening of a nation.",
  "glimpses-world-history-0": "Written by Nehru in prison between 1930 and 1933, Glimpses of World History is a broad overview of human history, written as a series of letters to his young daughter, providing a unique non-Eurocentric view of history.",
  "discovery-india-1": "Written by Nehru during his imprisonment at Ahmadnagar Fort between 1942 and 1945, The Discovery of India is an extensive analysis of Indian history, philosophy, culture, and its struggle for independence."
};

export default function BooksPage() {
  const { lang, t } = useApp();
  const books = booksData as BookItem[];

  const getSlug = (link: string) => {
    return link.replace(".html", "");
  };

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
              <Link href="/nehru-portal/publications">{t("nmmlPublications")}</Link>
              <span>{t("books")}</span>
            </div>
          </div>

          <div className="spaceArea">
            <h2 style={{ color: "#a52216", marginBottom: "20px" }}>{t("books")}</h2>

            {/* Checkerboard Grid matching the publications style */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))",
                gap: "20px",
                marginBottom: "30px",
              }}
              className="books-grid"
            >
              {/* CSS override for small screens */}
              <style>{`
                @media (max-width: 600px) {
                  .books-grid {
                    grid-template-columns: 1fr !important;
                  }
                  .book-card {
                    flex-direction: column !important;
                    align-items: center !important;
                    text-align: center !important;
                  }
                }
              `}</style>

              {books.map((item, idx) => {
                const coverUrl = getCoverUrl(item.cover);
                const slug = getSlug(item.link);
                const desc = bookDescriptions[slug] || "A book by Jawaharlal Nehru.";
                
                // Checkerboard pattern formula
                const isBeige = (Math.floor(idx / 2) + (idx % 2)) % 2 === 1;
                const cardBg = isBeige ? "#f1ede2" : "#ffffff";

                return (
                  <div
                    key={idx}
                    className="book-card"
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
                          href={`/nehru-portal/books/${slug}`}
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
                      <p style={{ margin: "0 0 8px 0", fontSize: "13px", color: "#000000" }}>
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
