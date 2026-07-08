"use client";

import React, { use } from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";
import BookReader from "@/components/writings/BookReader";
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

export default function OralHistoryVolumePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const interviews = oralHistoryData as Interviewee[];

  // Find interviewee by slug
  const volume = interviews.find((item) => {
    const iSlug = item.link.split("?")[0].replace(".html", "").replace("oral-history/", "");
    return iSlug.toLowerCase() === slug.toLowerCase();
  });

  const title = volume ? volume.name : slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const bookPath = volume ? `https://nehruportal.nic.in/sites/default/files/oralhistory/${volume.folder}` : "";
  const totalPages = volume ? volume.pages : 30;

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
              <Link href="/nehru-portal/oral-history">Oral History</Link>
              <span>{title}</span>
            </div>
          </div>

          <div className="spaceArea">
            <h2 style={{ color: "#a52216", marginBottom: "15px" }}>Oral History</h2>
            <h3 style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "18px",
              color: "#312502",
              fontWeight: "bold",
              marginBottom: "20px"
            }}>
              {title}
            </h3>

            {/* Book Reader View */}
            <div className="w-full">
              <BookReader
                title={title}
                bookDisplayPath={bookPath}
                totalPages={totalPages}
                backHref="/oral-history"
                backLabel="Back to Oral History"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
