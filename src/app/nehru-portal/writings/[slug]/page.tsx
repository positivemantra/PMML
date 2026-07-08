"use client";

import React, { use } from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";
import BookReader from "@/components/writings/BookReader";
import writingsData from "@/data/writings.json";
import { useApp } from "@/context/AppContext";

interface WritingItem {
  title: string;
  link: string;
  cover: string;
  author: string;
  bookDisplayPath?: string;
  totalImages?: number;
  highResCover?: string;
}

export default function WritingVolumePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { lang, t } = useApp();
  const writings = writingsData as WritingItem[];

  // Find writing volume by slug
  const volume = writings.find((w) => {
    const wSlug = w.link.replace(".html", "");
    return wSlug.toLowerCase() === slug.toLowerCase();
  });

  const title = volume ? volume.title : slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const bookDisplayPath = volume?.bookDisplayPath || "";
  const totalPages = volume?.totalImages || 450;
  const cover = volume?.highResCover || volume?.cover || "";

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
              <Link href="/nehru-portal/writings">{t("writings")}</Link>
              <span>{title}</span>
            </div>
          </div>

          {/* Book Reader View */}
          <div className="spaceArea">
            <h3 style={{ color: "#a52216", marginBottom: "20px" }}>{title}</h3>
            
            <div className="w-full">
              <BookReader
                title={title}
                bookDisplayPath={bookDisplayPath}
                totalPages={totalPages}
                cover={cover}
                backHref="/writings"
                backLabel={lang === "hi" ? "पीछे लेखन पर जाएं" : "Back to Writings"}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
