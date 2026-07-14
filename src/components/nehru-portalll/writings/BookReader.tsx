"use client";

import React, { useState, useEffect, useRef } from "react";
import { useApp } from "@/context/AppContext";
import Link from "next/link";

interface BookReaderProps {
  title: string;
  bookDisplayPath?: string;
  totalPages: number;
  backHref: string;
  backLabel: string;
  cover?: string;
}

export default function BookReader({
  title,
  bookDisplayPath = "",
  totalPages = 450,
  backHref,
  backLabel,
  cover = "",
}: BookReaderProps) {
  const { lang, t } = useApp();
  const [currentPage, setCurrentPage] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [pageInput, setPageInput] = useState("1");
  const [bookmarks, setBookmarks] = useState<number[]>([]);
  const [zoom, setZoom] = useState(1.0);
  const [isDoublePage, setIsDoublePage] = useState(true);
  const playIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Check window size to toggle double page view on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setIsDoublePage(false);
      } else {
        setIsDoublePage(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle URL hash changes like #page/1/mode/2up
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith("#page/")) {
        const parts = hash.split("/");
        const pageNum = parseInt(parts[1], 10);
        if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
          setCurrentPage(pageNum);
        }
      }
    };

    handleHashChange(); // Run on mount
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [totalPages]);

  // Update hash when page changes
  useEffect(() => {
    const mode = isDoublePage ? "2up" : "1up";
    window.history.replaceState(null, "", `#page/${currentPage}/mode/${mode}`);
  }, [currentPage, isDoublePage]);

  // Load bookmarks
  useEffect(() => {
    const saved = localStorage.getItem(`bookmark_${title}`);
    if (saved) {
      try {
        setBookmarks(JSON.parse(saved));
      } catch (e) {
        // ignore
      }
    }
  }, [title]);

  // Handle autoplay slideshow
  useEffect(() => {
    if (isPlaying) {
      playIntervalRef.current = setInterval(() => {
        setCurrentPage((prev) => {
          const step = isDoublePage ? 2 : 1;
          if (prev + step > totalPages) {
            setIsPlaying(false);
            return prev;
          }
          return prev + step;
        });
      }, 5000);
    } else {
      if (playIntervalRef.current) {
        clearInterval(playIntervalRef.current);
      }
    }

    return () => {
      if (playIntervalRef.current) {
        clearInterval(playIntervalRef.current);
      }
    };
  }, [isPlaying, totalPages, isDoublePage]);

  // Sync input value with current page changes
  useEffect(() => {
    setPageInput(currentPage.toString());
  }, [currentPage]);

  const handlePageChange = (pageNum: number) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  const handleNextPage = () => {
    const step = isDoublePage ? (currentPage === 1 ? 2 : 2) : 1;
    const nextPage = currentPage + step;
    if (nextPage <= totalPages) {
      setCurrentPage(nextPage);
    } else if (currentPage < totalPages) {
      setCurrentPage(totalPages);
    }
  };

  const handlePrevPage = () => {
    const step = isDoublePage ? (currentPage === 3 ? 2 : 2) : 1;
    const prevPage = currentPage - step;
    if (prevPage >= 1) {
      setCurrentPage(prevPage);
    } else if (currentPage > 1) {
      setCurrentPage(1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageInput(e.target.value);
  };

  const handleInputGo = (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseInt(pageInput, 10);
    if (!isNaN(num) && num >= 1 && num <= totalPages) {
      setCurrentPage(num);
    } else {
      setPageInput(currentPage.toString());
    }
  };

  const toggleBookmark = () => {
    let newBookmarks = [...bookmarks];
    if (bookmarks.includes(currentPage)) {
      newBookmarks = newBookmarks.filter((p) => p !== currentPage);
    } else {
      if (newBookmarks.length < 20) {
        newBookmarks.push(currentPage);
        newBookmarks.sort((a, b) => a - b);
      }
    }
    setBookmarks(newBookmarks);
    localStorage.setItem(`bookmark_${title}`, JSON.stringify(newBookmarks));
  };

  const handleZoomIn = () => {
    setZoom((z) => Math.min(z + 0.1, 1.5));
  };

  const handleZoomOut = () => {
    setZoom((z) => Math.max(z - 0.1, 0.7));
  };

  // Logic to determine what images to show
  // If double-page:
  // p is the current page.
  // If p is odd (1, 3, 5): Left is p-1 (blank if 0), Right is p.
  // If p is even (2, 4, 6): Left is p, Right is p+1.
  const leftPageNum = isDoublePage
    ? currentPage % 2 === 1
      ? currentPage - 1
      : currentPage
    : 0;

  const rightPageNum = isDoublePage
    ? currentPage % 2 === 1
      ? currentPage
      : currentPage + 1
    : currentPage;

  // Build absolute page image URLs from live site
  const getPageImgUrl = (pageNum: number) => {
    let url = "";
    if (pageNum === 1 && cover) {
      url = cover.startsWith("/") || cover.startsWith("http") ? cover : `/${cover}`;
    } else if (pageNum >= 1 && pageNum <= totalPages && bookDisplayPath) {
      url = `${bookDisplayPath}/${pageNum}.jpg`;
    } else {
      return null;
    }

    if (url.startsWith("http://nehruportal.nic.in") || url.startsWith("https://nehruportal.nic.in")) {
      return `/api/proxy-image?url=${encodeURIComponent(url)}`;
    }
    return url;
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {/* Book Reader Control Toolbar */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#dfd2a7",
          border: "1px solid #c2b588",
          padding: "8px 12px",
          gap: "10px",
          borderRadius: "4px",
        }}
      >
        {/* Left Side Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {/* Autoplay button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            style={{
              background: isPlaying ? "#a52216" : "#fcfcfc",
              border: "1px solid #c2b588",
              color: isPlaying ? "#fff" : "#4a3e15",
              borderRadius: "4px",
              padding: "5px 10px",
              fontSize: "12px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            title={isPlaying ? "Pause Slideshow" : "Start Slideshow"}
          >
            {isPlaying ? (lang === "hi" ? "रोकें" : "Pause") : (lang === "hi" ? "चलाएं" : "Play")}
          </button>

          <span style={{ width: "1px", height: "18px", background: "#c2b588" }} />

          {/* Toggle View Mode */}
          <button
            onClick={() => setIsDoublePage(!isDoublePage)}
            style={{
              background: "#fcfcfc",
              border: "1px solid #c2b588",
              color: "#4a3e15",
              borderRadius: "4px",
              padding: "5px 10px",
              fontSize: "12px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {isDoublePage
              ? (lang === "hi" ? "सिंगल पेज व्यू" : "Single Page View")
              : (lang === "hi" ? "डबल पेज व्यू" : "Double Page View")}
          </button>

          <span style={{ width: "1px", height: "18px", background: "#c2b588" }} />

          {/* Zoom Buttons */}
          <button
            onClick={handleZoomIn}
            style={{
              background: "#fcfcfc",
              border: "1px solid #c2b588",
              color: "#4a3e15",
              borderRadius: "4px",
              width: "28px",
              height: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            title="Zoom In"
          >
            +
          </button>
          <button
            onClick={handleZoomOut}
            style={{
              background: "#fcfcfc",
              border: "1px solid #c2b588",
              color: "#4a3e15",
              borderRadius: "4px",
              width: "28px",
              height: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            title="Zoom Out"
          >
            -
          </button>
        </div>

        {/* Center: Go To Page Form */}
        <form onSubmit={handleInputGo} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ fontSize: "12px", color: "#4a3e15", fontWeight: "bold" }}>
            {lang === "hi" ? "पेज:" : "Page:"}
          </span>
          <input
            type="text"
            value={pageInput}
            onChange={handleInputChange}
            style={{
              width: "45px",
              padding: "4px 6px",
              border: "1px solid #c2b588",
              borderRadius: "4px",
              textAlign: "center",
              fontSize: "12px",
              fontWeight: "bold",
              outline: "none",
            }}
          />
          <span style={{ fontSize: "12px", color: "#4a3e15" }}>
            {lang === "hi" ? "कुल" : "of"} {totalPages}
          </span>
          <button
            type="submit"
            style={{
              background: "#a52216",
              border: "none",
              color: "#fff",
              borderRadius: "12px",
              padding: "4px 14px",
              fontSize: "11px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {lang === "hi" ? "जाएं" : "Go"}
          </button>
        </form>

        {/* Right Side Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {/* Bookmark Button */}
          <button
            onClick={toggleBookmark}
            style={{
              background: bookmarks.includes(currentPage) ? "#4a3e15" : "#fcfcfc",
              border: "1px solid #c2b588",
              color: bookmarks.includes(currentPage) ? "#fff" : "#4a3e15",
              borderRadius: "4px",
              padding: "5px 10px",
              fontSize: "12px",
              fontWeight: "bold",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <span>★</span>
            <span>
              {bookmarks.includes(currentPage)
                ? (lang === "hi" ? "बुकमार्क किया गया" : "Bookmarked")
                : (lang === "hi" ? "बुकमार्क" : "Bookmark")}
            </span>
          </button>

          {/* Back button */}
          <Link
            href={backHref}
            style={{
              background: "#fcfcfc",
              border: "1px solid #c2b588",
              color: "#4a3e15",
              borderRadius: "4px",
              padding: "5px 10px",
              fontSize: "12px",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            {backLabel}
          </Link>
        </div>
      </div>

      {/* Bookreader main view container */}
      <div style={{ display: "flex", gap: "16px", alignItems: "stretch" }}>
        {/* Bookmarks Sidebar */}
        {bookmarks.length > 0 && (
          <div
            style={{
              width: "150px",
              flexShrink: 0,
              background: "#fff",
              border: "1px solid #eedfad",
              padding: "12px",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                fontWeight: "bold",
                color: "#a52216",
                borderBottom: "1px solid #eedfad",
                paddingBottom: "4px",
              }}
            >
              {lang === "hi" ? "बुकमार्क्स" : "Bookmarks"}
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", overflowY: "auto", maxHeight: "400px" }}>
              {bookmarks.map((p) => (
                <button
                  key={p}
                  onClick={() => handlePageChange(p)}
                  style={{
                    background: p === currentPage ? "#a52216" : "#fbf9ea",
                    border: "1px solid #eedfad",
                    color: p === currentPage ? "#fff" : "#4a3e15",
                    fontSize: "11px",
                    fontWeight: "bold",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                >
                  {lang === "hi" ? `पेज ${p}` : `Page ${p}`}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Viewer Area */}
        <div
          style={{
            flex: 1,
            background: "#f5ede3",
            border: "1px solid #eedfad",
            borderRadius: "4px",
            padding: "30px 20px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "450px",
            overflow: "hidden",
          }}
        >
          {/* Previous Overlay Trigger */}
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "rgba(0,0,0,0.6)",
              border: "2px solid #fff",
              color: "#fff",
              fontSize: "20px",
              fontWeight: "bold",
              display: currentPage === 1 ? "none" : "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
            }}
            title="Previous Page"
          >
            ‹
          </button>

          {/* Book Layout Spread */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch",
              width: "100%",
              maxWidth: isDoublePage ? `${860 * zoom}px` : `${430 * zoom}px`,
              transition: "max-width 0.2s ease-out",
            }}
          >
            {/* Left Page (Double view only) */}
            {isDoublePage && (
              <div
                style={{
                  flex: 1,
                  background: leftPageNum > 0 ? "#fff" : "transparent",
                  border: leftPageNum > 0 ? "1px solid #ddd" : "none",
                  borderRight: leftPageNum > 0 ? "1px solid #eee" : "none",
                  boxShadow: leftPageNum > 0 ? "-3px 4px 10px rgba(0,0,0,0.15)" : "none",
                  position: "relative",
                  aspectRatio: "1 / 1.414",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                {leftPageNum > 0 ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    {getPageImgUrl(leftPageNum) && (
                      <img
                        src={getPageImgUrl(leftPageNum) || ""}
                        alt={`Page ${leftPageNum}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "fill",
                        }}
                        loading="lazy"
                      />
                    )}
                    {/* Center crease gradient overlay on right edge */}
                    <div
                      style={{
                        position: "absolute",
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: "25px",
                        background: "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.12))",
                        pointerEvents: "none",
                      }}
                    />
                    {/* Page number */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "8px",
                        left: "12px",
                        fontSize: "11px",
                        color: "#888",
                        fontFamily: "var(--font-serif)",
                      }}
                    >
                      {leftPageNum}
                    </div>
                  </>
                ) : (
                  <div />
                )}
              </div>
            )}

            {/* Right Page */}
            <div
              style={{
                flex: 1,
                background: rightPageNum <= totalPages ? "#fff" : "transparent",
                border: rightPageNum <= totalPages ? "1px solid #ddd" : "none",
                borderLeft: rightPageNum <= totalPages ? "1px solid #eee" : "none",
                boxShadow: rightPageNum <= totalPages ? "3px 4px 10px rgba(0,0,0,0.15)" : "none",
                position: "relative",
                aspectRatio: "1 / 1.414",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {getPageImgUrl(rightPageNum) && (
                    <img
                      src={getPageImgUrl(rightPageNum) || ""}
                      alt={`Page ${rightPageNum}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "fill",
                      }}
                      loading="lazy"
                    />
                  )}
                  {/* Center crease gradient overlay on left edge (double view only) */}
                  {isDoublePage && (
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: "25px",
                        background: "linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,0.15))",
                        pointerEvents: "none",
                      }}
                    />
                  )}
                  {/* Page number */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "8px",
                      right: "12px",
                      fontSize: "11px",
                      color: "#888",
                      fontFamily: "var(--font-serif)",
                    }}
                  >
                    {rightPageNum}
                  </div>
                </div>
              </div>

              {/* Next Overlay Trigger */}
              <button
                onClick={handleNextPage}
                disabled={rightPageNum >= totalPages}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "rgba(0,0,0,0.6)",
                  border: "2px solid #fff",
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: "bold",
                  display: rightPageNum >= totalPages ? "none" : "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  zIndex: 10,
                }}
                title="Next Page"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      );
    }
