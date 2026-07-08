"use client";

import React, { useState } from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";
import oralHistoryData from "@/data/oralHistory.json";

interface Interviewee {
  srNo: string;
  name: string;
  link: string;
  birth: string;
  death: string;
  folder: string;
  pages: number;
}

export default function OralHistoryPage() {
  const interviews = oralHistoryData as Interviewee[];
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter items based on search query
  const filteredInterviews = interviews.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // We sort them naturally by their standard index (srNo)
  const sortedInterviews = [...filteredInterviews].sort((a, b) => {
    return (parseInt(a.srNo) || 99) - (parseInt(b.srNo) || 99);
  });

  // Pagination math
  const totalItems = sortedInterviews.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedInterviews = sortedInterviews.slice(startIndex, startIndex + itemsPerPage);

  const getSlug = (link: string) => {
    return link.split("?")[0].replace(".html", "").replace("oral-history/", "");
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
              <Link href="/">Home</Link>
              <span>Oral History</span>
            </div>
          </div>

          <div className="spaceArea">
            <h2 style={{ color: "#a52216", marginBottom: "15px" }}>Oral History</h2>

            {/* Legacy Style Search Area */}
            <div className="gallerySearchArea cf" style={{ marginTop: 0, marginBottom: "20px", display: "flex", alignItems: "center" }}>
              <div className="searchCol" style={{ display: "flex", alignItems: "center", gap: "10px", float: "none", margin: 0 }}>
                <label style={{ margin: 0, lineHeight: "27px" }}>Search Interviewee:</label>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1);
                  }}
                  style={{
                    border: "1px solid #78620b",
                    borderRadius: "20px",
                    fontSize: "14px",
                    height: "27px",
                    padding: "0 12px",
                    width: "260px",
                    background: "#fff",
                    color: "#312502",
                    outline: "none"
                  }}
                  placeholder="Enter name..."
                />
              </div>
            </div>

            {/* Table block */}
            {paginatedInterviews.length > 0 ? (
              <table className="tableData" style={{ width: "100%", marginBottom: "20px" }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "center", width: "10%" }}>Sr. No.</th>
                    <th style={{ textAlign: "left" }}>Interviewee's Name</th>
                    <th style={{ textAlign: "center", width: "18%" }}>Year of Birth</th>
                    <th style={{ textAlign: "center", width: "18%" }}>Year of Death</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedInterviews.map((item, idx) => {
                    const slug = getSlug(item.link);
                    const rowClass = idx % 2 === 1 ? "evenRow" : "";
                    return (
                      <tr key={idx} className={rowClass}>
                        <td style={{ textAlign: "center" }}>{item.srNo}</td>
                        <td style={{ textAlign: "left" }}>
                          <Link href={`/nehru-portal/oral-history/${slug}`}>
                            {item.name}
                          </Link>
                        </td>
                        <td style={{ textAlign: "center" }}>{item.birth || "-"}</td>
                        <td style={{ textAlign: "center" }}>{item.death || "-"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <p style={{ fontStyle: "italic", padding: "20px", color: "#312502" }}>
                No records found matching your search.
              </p>
            )}

            {/* Legacy Pager Pagination */}
            {totalPages > 1 && (
              <div className="item-list cf" style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
                <ul className="pager" style={{ display: "flex", listStyle: "none", padding: 0, margin: 0, alignItems: "center" }}>
                  {/* Previous button */}
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

                  {/* Next button */}
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
