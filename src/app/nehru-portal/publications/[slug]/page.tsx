"use client";

import React, { use } from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";
import BookReader from "@/components/writings/BookReader";
import publicationsData from "@/data/publications.json";
import { useApp } from "@/context/AppContext";

interface PublicationItem {
  title: string;
  link: string;
  cover: string;
  author: string;
  bookDisplayPath?: string;
  totalImages?: number;
  highResCover?: string;
}

export default function PublicationVolumePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { lang, t } = useApp();
  const publications = publicationsData as PublicationItem[];

  // Find publication by slug
  const volume = publications.find((w) => {
    return w.link.toLowerCase() === slug.toLowerCase();
  });

  const title = volume ? volume.title : slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const bookDisplayPath = volume?.bookDisplayPath || "";
  const totalPages = volume?.totalImages || 150;
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
              <Link href="/nehru-portal/publications">{t("nmmlPublications")}</Link>
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
                backHref="/publications"
                backLabel={lang === "hi" ? "पीछे एनएमएमएल प्रकाशन पर जाएं" : "Back to Publications"}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
