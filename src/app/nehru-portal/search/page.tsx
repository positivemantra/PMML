"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";

import booksData from "@/data/books.json";
import familyTreeData from "@/data/familyTree.json";
import tributesData from "@/data/tributes.json";
import writingsData from "@/data/writings.json";
import oralHistoryData from "@/data/oralHistory.json";
import archivesData from "@/data/archives.json";

interface SearchItem {
  title: string;
  description: string;
  link: string;
  meta: string;
}

function getSearchDatabase(): SearchItem[] {
  const items: SearchItem[] = [];

  // 1. Static Pages
  const staticPages = [
    { title: "Home | Nehru Portal", description: "Nehru Portal website Home Page. Dedicated to the life, writings, works, and legacy of Jawaharlal Nehru.", link: "/nehru-portal" },
    { title: "About Us | Nehru Portal", description: "About the Nehru Portal. Under the Ministry of Culture, Government of India, the Nehru Portal serves as a digital repository of Jawaharlal Nehru's legacy.", link: "/nehru-portal/about" },
    { title: "Family Tree | Nehru Portal", description: "Complete Family Tree of the Nehru family, featuring Motilal Nehru, Jawaharlal Nehru, Kamala Nehru, Indira Gandhi, and others.", link: "/nehru-portal/family-tree" },
    { title: "Places of Residence", description: "Swaraj Bhawan, Anand Bhawan, Teen Murti House. Explore the residences associated with Jawaharlal Nehru's life.", link: "/nehru-portal/places" },
    { title: "Swaraj Bhawan", description: "Swaraj Bhawan (formerly Anand Bhawan), ancestral home of the Nehru family in Allahabad, Uttar Pradesh.", link: "/nehru-portal/swaraj-bhawan" },
    { title: "Anand Bhawan", description: "Anand Bhawan museum in Allahabad. Historic house museum associated with the Nehru-Gandhi family.", link: "/nehru-portal/anand-bhawan" },
    { title: "Teen Murti House", description: "Teen Murti Bhavan, the residence of the first Prime Minister of India, Jawaharlal Nehru, now a museum.", link: "/nehru-portal/teen-murti-house" },
    { title: "Important Dates", description: "Important timeline events in the life of Jawaharlal Nehru, including early life, marriage, freedom struggle, prison, and Prime Minister years.", link: "/nehru-portal/important-dates" }
  ];

  staticPages.forEach(p => {
    items.push({
      title: p.title,
      description: p.description,
      link: p.link,
      meta: "System Page"
    });
  });

  // 2. Family Tree Members
  if (Array.isArray(familyTreeData)) {
    familyTreeData.forEach((item: any) => {
      items.push({
        title: `${item.name} | Family Tree Details`,
        description: `Back to Family Tree ${item.name} ... ${item.dates ? "Dates: " + item.dates + " ... " : ""}${item.description || ""}`,
        link: "/nehru-portal/family-tree",
        meta: "NhpAdmin - 12/28/2017 - 16:38"
      });
    });
  }

  // 3. Books
  if (Array.isArray(booksData)) {
    booksData.forEach((item: any) => {
      items.push({
        title: `${item.title} | Publications`,
        description: `Book title: ${item.title}. Author: ${item.author || "Jawaharlal Nehru"}. Explore publications on the Nehru Portal.`,
        link: "/nehru-portal/books",
        meta: "NhpAdmin - 12/28/2017 - 16:45"
      });
    });
  }

  // 4. Writings
  if (Array.isArray(writingsData)) {
    writingsData.forEach((item: any) => {
      const slug = item.link.replace(".html", "");
      items.push({
        title: `${item.title} | Writings`,
        description: `Selected writings and works of Jawaharlal Nehru. Volume published by the Nehru Memorial Museum & Library. ${item.title}`,
        link: `/nehru-portal/writings/${slug}`,
        meta: "NhpAdmin - 01/15/2018 - 14:22"
      });
    });
  }

  // 5. Tributes
  if (Array.isArray(tributesData)) {
    tributesData.forEach((item: any) => {
      const slug = item.link.replace("../", "").split("?")[0].replace(".html", "").replace("tributes/", "");
      items.push({
        title: `${item.name} | Tributes`,
        description: `${item.type || "General"} Tribute. Album containing tribute pages and memories for Jawaharlal Nehru. Tribute by ${item.name}`,
        link: `/nehru-portal/tributes/${slug}`,
        meta: "NhpAdmin - 12/28/2017 - 17:01"
      });
    });
  }

  // 6. Oral History
  if (Array.isArray(oralHistoryData)) {
    oralHistoryData.forEach((item: any) => {
      const slug = item.link.replace(".html", "");
      items.push({
        title: `${item.name} | Oral History`,
        description: `Oral History Transcript of ${item.name} (${item.birth ? "b. " + item.birth : ""}${item.death ? " - d. " + item.death : ""}). Pages: ${item.pages || 1}.`,
        link: `/nehru-portal/oral-history`,
        meta: "NhpAdmin - 12/28/2017 - 17:05"
      });
    });
  }

  // 7. Archives (Nehru Papers)
  if (archivesData && typeof archivesData === "object") {
    const papers = (archivesData as any).nehruPapers;
    if (Array.isArray(papers)) {
      papers.forEach((item: any) => {
        items.push({
          title: `${item.description} | Archives & Papers`,
          description: `Archive document from Nehru Papers. Category: ${item.category || ""}. Place: ${item.place || "New Delhi"}.`,
          link: "/nehru-portal/nehru-papers",
          meta: "NhpAdmin - 01/02/2018 - 11:20"
        });
      });
    }
  }

  return items;
}

function highlightText(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;
  const keywords = query.split(/\s+/).filter(Boolean);
  if (keywords.length === 0) return text;

  // Find index of the first keyword to construct a focused snippet
  const lowerText = text.toLowerCase();
  let firstIndex = -1;
  keywords.forEach(kw => {
    const idx = lowerText.indexOf(kw.toLowerCase());
    if (idx !== -1 && (firstIndex === -1 || idx < firstIndex)) {
      firstIndex = idx;
    }
  });

  let snippet = text;
  if (firstIndex !== -1 && text.length > 200) {
    const start = Math.max(0, firstIndex - 50);
    const end = Math.min(text.length, firstIndex + 150);
    snippet = (start > 0 ? "... " : "") + text.substring(start, end) + (end < text.length ? " ..." : "");
  } else if (text.length > 200) {
    snippet = text.substring(0, 200) + " ...";
  }

  // Escape regex characters in keywords for safe replacement matching
  const regexStr = keywords.map(kw => kw.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")).join("|");
  const regex = new RegExp(`(${regexStr})`, "gi");
  const parts = snippet.split(regex);

  return (
    <>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <strong key={index} style={{ color: "#a52216", fontWeight: "bold" }}>{part}</strong>
        ) : (
          part
        )
      )}
    </>
  );
}

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const queryParam = searchParams.get("q") || "";
  
  const [searchQuery, setSearchQuery] = useState(queryParam);
  const [results, setResults] = useState<SearchItem[]>([]);

  useEffect(() => {
    setSearchQuery(queryParam);
    if (!queryParam.trim()) {
      setResults([]);
      return;
    }

    const db = getSearchDatabase();
    const keywords = queryParam.toLowerCase().split(/\s+/).filter(Boolean);

    const scored = db.map((item) => {
      let score = 0;
      const titleLower = item.title.toLowerCase();
      const descLower = item.description.toLowerCase();

      keywords.forEach((kw) => {
        if (titleLower.includes(kw)) score += 10;
        if (descLower.includes(kw)) score += 2;
      });

      return { ...item, score };
    }).filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score);

    setResults(scored);
  }, [queryParam]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/nehru-portal/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="spaceArea">
      <h2 style={{ color: "#a52216", fontSize: "24px", marginBottom: "20px", fontFamily: "Georgia, serif" }}>Search</h2>
      
      {/* Search Input Bar */}
      <form onSubmit={handleSearchSubmit} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "30px", flexWrap: "wrap" }}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "100%",
            maxWidth: "450px",
            padding: "6px 12px",
            fontSize: "14px",
            border: "1px solid #cccccc",
            borderRadius: "2px",
            outline: "none",
            boxSizing: "border-box"
          }}
          placeholder="Enter search keywords..."
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#3b3614",
            color: "#ffffff",
            border: "none",
            padding: "7px 18px",
            fontSize: "13px",
            fontWeight: "bold",
            cursor: "pointer",
            borderRadius: "2px",
            textTransform: "uppercase"
          }}
        >
          Search
        </button>
        <span style={{ fontSize: "13px", color: "#5c4033", cursor: "pointer" }} className="hover:underline">
          ▸ Advanced search
        </span>
      </form>

      <h3 style={{ color: "#333333", fontSize: "18px", borderBottom: "1px solid #e5e7eb", paddingBottom: "8px", marginBottom: "20px" }}>
        Search results
      </h3>

      {/* Results Container */}
      <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
        {results.length > 0 ? (
          results.map((res, index) => (
            <div key={index} style={{ textAlign: "left" }}>
              <h4 style={{ margin: "0 0 5px 0" }}>
                <Link
                  href={res.link}
                  style={{
                    color: "#b68a35",
                    fontSize: "16px",
                    fontWeight: "600",
                    textDecoration: "none"
                  }}
                  className="hover:underline"
                >
                  {res.title}
                </Link>
              </h4>
              <p style={{ margin: "0 0 4px 0", fontSize: "13.5px", color: "#555555", lineHeight: "1.5" }}>
                {highlightText(res.description, queryParam)}
              </p>
              <div style={{ fontSize: "11px", color: "#888888" }}>
                {res.meta}
              </div>
            </div>
          ))
        ) : (
          <div style={{ padding: "10px 0", color: "#666666" }}>
            <p>No matches were found. Try expanding your search queries with different keywords or names.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <TopBar />
      <Header />
      <main id="main-content" className="w-full flex-1 innerContent text-left select-none">
        <div className="container">
          <div className="breadCrumbArea cf">
            <div className="breadcrumb">
              <Link href="/nehru-portal">Home</Link>
              <span>Search</span>
            </div>
          </div>
          <Suspense fallback={<div className="spaceArea">Loading search results...</div>}>
            <SearchContent />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
