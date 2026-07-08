"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";
import tributesData from "@/data/tributes.json";

interface TributeItem {
  name: string;
  link: string;
  img: string;
  type: string;
  folder?: string;
  pages?: number;
}

export function TributesList({ defaultFilter = "Indian" }: { defaultFilter?: "Indian" | "Foreign" }) {
  const tributes = tributesData as TributeItem[];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const router = useRouter();

  const filter = defaultFilter;

  // Filter based on selected tab
  const filteredTributes = tributes.filter((item) => item.type === filter);

  // We sort them alphabetically by name
  const sortedTributes = [...filteredTributes].sort((a, b) => a.name.localeCompare(b.name));

  // Pagination
  const totalItems = sortedTributes.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTributes = sortedTributes.slice(startIndex, startIndex + itemsPerPage);

  const getSlug = (link: string) => {
    return link.replace("../", "").split("?")[0].replace(".html", "").replace("tributes/", "");
  };

  const getImgUrl = (img: string) => {
    if (!img) return "";
    return img.split("?")[0].replace("../", "/");
  };

  // Helper to determine alternate backgrounds exactly matching the checkerboard pattern
  const getItemBg = (idx: number) => {
    const bgColors = ["#ffffff", "#ddd7c6", "#ddd7c6", "#ffffff"];
    return bgColors[idx % 4] || "#ffffff";
  };

  return (
    <>
      <TopBar />
      <Header />
      <main id="main-content" className="w-full flex-1 innerContent text-left select-none">
        <div className="container">
          {/* Breadcrumb Strap */}
          <div className="breadCrumbArea cf">
            <div className="breadcrumb">
              <Link href="/nehru-portal">Home</Link>
              <span>Tributes</span>
            </div>
          </div>

          <div className="spaceArea">
            <h2 style={{ color: "#a52216", marginBottom: "20px" }}>Tributes</h2>

            {/* Legacy Style Tabs */}
            <div style={{ display: "flex", width: "100%", borderBottom: "1px solid #ddd7c6", marginBottom: "25px" }}>
              <button
                onClick={() => {
                  router.push("/nehru-portal/tributes/indian");
                }}
                style={{
                  flex: 1,
                  padding: "12px",
                  background: filter === "Indian" ? "#f2eee3" : "#312502",
                  color: filter === "Indian" ? "#312502" : "#ffffff",
                  border: "none",
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                  textAlign: "center",
                  outline: "none",
                  transition: "all 0.2s ease"
                }}
              >
                Indian
              </button>
              <button
                onClick={() => {
                  router.push("/nehru-portal/tributes/foreign");
                }}
                style={{
                  flex: 1,
                  padding: "12px",
                  background: filter === "Foreign" ? "#f2eee3" : "#312502",
                  color: filter === "Foreign" ? "#312502" : "#ffffff",
                  border: "none",
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                  textAlign: "center",
                  outline: "none",
                  transition: "all 0.2s ease"
                }}
              >
                Foreign
              </button>
            </div>

            {/* Grid Layout using legacy styles */}
            <div className="view-tributes">
              <div className="view-content">
                <ul className="cf" style={{ display: "flex", flexWrap: "wrap", gap: "2% 0", padding: 0, margin: 0 }}>
                  {paginatedTributes.map((item, idx) => {
                    const slug = getSlug(item.link);
                    const imgUrl = getImgUrl(item.img);
                    const itemBg = getItemBg(idx);

                    return (
                      <li
                        key={idx}
                        style={{
                          listStyle: "none",
                          width: "48%",
                          padding: "12px",
                          background: itemBg,
                          border: "1px solid #ddd7c6",
                          margin: "0 1% 15px 1%",
                          boxSizing: "border-box",
                          transition: "box-shadow 0.3s ease",
                        }}
                        className="tribute-card"
                      >
                        {/* CSS hover effect */}
                        <style>{`
                          .tribute-card:hover {
                            box-shadow: 0 0 8px #b2b2b2;
                          }
                        `}</style>

                        <Link
                          href={`/nehru-portal/tributes/${slug}`}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            width: "100%",
                            textDecoration: "none",
                          }}
                        >
                          {/* Person Image */}
                          <div className="views-field-field-person-image" style={{ width: "100px", marginRight: "15px", flexShrink: 0 }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={imgUrl}
                              alt={item.name}
                              style={{ width: "100px", height: "125px", objectFit: "cover", border: "1px solid #ddd7c6" }}
                              onError={(e) => {
                                (e.target as HTMLElement).style.display = "none";
                              }}
                            />
                          </div>

                          {/* Title */}
                          <div className="views-field-title" style={{ flex: 1 }}>
                            <span
                              style={{
                                color: "#9b251b",
                                fontSize: "17px",
                                fontWeight: "bold",
                                fontFamily: "Georgia, serif"
                              }}
                              className="hover:underline"
                            >
                              {item.name}
                            </span>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Legacy Pager Pagination */}
            {totalPages > 1 && (
              <div className="item-list cf" style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                <ul className="pager" style={{ display: "flex", listStyle: "none", padding: 0, margin: 0, alignItems: "center" }}>
                  {/* Previous Button */}
                  {currentPage > 1 && (
                    <li className="pager-previous" style={{ margin: "0 2px" }}>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(currentPage - 1);
                        }}
                        title="Go to previous page"
                      >
                        ‹
                      </a>
                    </li>
                  )}

                  {/* Page numbers */}
                  {Array.from({ length: totalPages }).map((_, i) => {
                    const pageNum = i + 1;
                    const isCurrent = pageNum === currentPage;
                    return (
                      <li
                        key={i}
                        className={isCurrent ? "pager-current" : "pager-item"}
                        style={{ margin: "0 2px" }}
                      >
                        {isCurrent ? (
                          <span>{pageNum}</span>
                        ) : (
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setCurrentPage(pageNum);
                            }}
                          >
                            {pageNum}
                          </a>
                        )}
                      </li>
                    );
                  })}

                  {/* Next Button */}
                  {currentPage < totalPages && (
                    <li className="pager-next" style={{ margin: "0 2px" }}>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(currentPage + 1);
                        }}
                        title="Go to next page"
                      >
                        ›
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            )}

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function Page() {
  return <TributesList defaultFilter="Indian" />;
}
