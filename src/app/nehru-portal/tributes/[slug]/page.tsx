"use client";

import React, { use } from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";
import BookReader from "@/components/writings/BookReader";
import tributesData from "@/data/tributes.json";

interface TributeItem {
  name: string;
  link: string;
  img: string;
  type: string;
  folder?: string;
  pages?: number;
}

export default function TributeVolumePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const tributes = tributesData as TributeItem[];

  // Find tribute volume by slug
  const volume = tributes.find((t) => {
    const tSlug = t.link.replace("../", "").split("?")[0].replace(".html", "").replace("tributes/", "");
    return tSlug.toLowerCase() === slug.toLowerCase();
  });

  const title = volume ? volume.name : slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const bookPath = volume && volume.folder ? `https://nehruportal.nic.in/sites/default/files/tributes/${volume.folder}` : "";
  const totalPages = volume && volume.pages ? volume.pages : 5;

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
              <Link href="/nehru-portal/tributes">Tributes</Link>
              <span>{title}</span>
            </div>
          </div>

          <div className="spaceArea">
            <h2 style={{ color: "#a52216", marginBottom: "15px" }}>Tributes</h2>
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
                backHref="/tributes"
                backLabel="Back to Tributes"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
