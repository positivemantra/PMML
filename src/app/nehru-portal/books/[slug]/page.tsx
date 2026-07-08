import React from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";
import booksData from "@/data/books.json";

export const metadata = {
  title: "Book Detail | Nehru Portal",
  description: "Detailed publication information and description for books by Jawaharlal Nehru",
};

interface BookItem {
  title: string;
  link: string;
  cover: string;
  author: string;
  highResCover?: string;
}

const bookDescriptions: Record<string, string[]> = {
  "letters-father-his-daughter-0": [
    "When Indira Gandhi was a little girl of ten, she spent the summer in Mussoorie, while her father, Jawaharlal Nehru, was busy working in Allahabad. Over the summer, Nehru wrote her a series of letters in which he told her the story of how and when the earth was made, how human and animal life began, and how civilizations and societies evolved all over the world.",
    "Written in 1928, these letters remain fresh and vibrant, and capture Nehru's love for people and for nature, whose story was for him 'more interesting than any other story or novel that you may have read'."
  ],
  "autobiography-0": [
    "Jawaharlal Nehru's life was closely intertwined with the history and destiny of modern India. His Autobiography, written between 1934 and 1935 when he was in prison, is more than the personal story of an individual- it is also an account of the political awakening of a nation, its struggle for freedom from British rule, and its search to reshape itself as a modern society, rid of the cultural and economic shackles of the past.",
    "Through this narrative, written with extraordinary eloquence and honesty, and illuminated with vibrant descriptions of Mahatma Gandhi and other leaders of the national movement, emerges the portrait of the author himself- a complex and introspective personality with a brilliant and questing mind, a deep love of nature, an engaging zest for life and, above all, a passionate commitment to democracy and secularism."
  ],
  "glimpses-world-history-0": [
    "On New Year's Day, 1931, Jawaharlal Nehru began a remarkable series of letters on the history of the world to his daughter Indira, then thirteen years old. Over the next thirty months, Nehru wrote nearly two hundred letters in this series, which were later published as Glimpses of World History.",
    "With its panoramic sweep and its gripping narrative flow, all the more remarkable for being written in prison where Nehru has no recourse to reference books or a library, Glimpses of World History covers the rise and fall of empires and civilizations from Greece and Rome to China and West Asia; great figures such as Ashoka and Chengiz Khan, Gandhi and Lenin; wars and revolutions, democracies and dictatorships. An enduring classic this book is dazzling testimony to the breadth of Nehru's world view, his grasp of the lessons of history, and of the forces and personalities that shape it."
  ],
  "discovery-india-1": [
    "Written over five months when Jawaharlal Nehru was imprisoned in the Ahmadnagar Fort, The Discovery of India has acquired the status of a classic since it was first published in 1946.",
    "In this work of prodigious scope and scholarship, one of the greatest figures of Indian history unfolds the panorama of the country's rich and complex past, from prehistory to the last years of British colonial rule. Analysing texts like the Vedas and the Arthashastra, and personalities like the Buddha and Mahatma Gandhi, Nehru brings alive an ancient culture that has seen the flowering of the world's great traditions of philosophy, science and art, and almost all its major religions.",
    "Nehru's brilliant intellect, deep humanity and lucid style make The Discovery of India essential reading for anyone interested in India, both its past and its present."
  ]
};

const highResCovers: Record<string, string> = {
  "letters-father-his-daughter-0": "/sites/default/files/styles/scal_writing_image/public/books/Letters%20from%20a%20Father%20to%20his%20Daughterbdcc.jpg",
  "autobiography-0": "/sites/default/files/styles/scal_writing_image/public/books/An%20Autobiographyd65e.jpg",
  "glimpses-world-history-0": "/sites/default/files/styles/scal_writing_image/public/books/Glimpses%20of%20World%20Historyf628.jpg",
  "discovery-india-1": "/sites/default/files/styles/scal_writing_image/public/books/The%20Discovery%20of%20India99e5.jpg"
};

export default function BookVolumePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params);
  const slug = resolvedParams.slug;
  
  const books = booksData as BookItem[];

  // Find book by slug
  const volume = books.find((w) => {
    const wSlug = w.link.replace(".html", "");
    return wSlug.toLowerCase() === slug.toLowerCase();
  });

  const title = volume ? volume.title : slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const cover = highResCovers[slug.toLowerCase()] || volume?.cover || "";
  const author = volume?.author || "Jawaharlal Nehru";

  const paragraphs = bookDescriptions[slug.toLowerCase()] || ["A book written by Jawaharlal Nehru."];

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
              <Link href="/nehru-portal/publications">NMML Publications</Link>
              <Link href="/nehru-portal/books">Books</Link>
              <span>{title}</span>
            </div>
          </div>

          {/* Book Detail View */}
          <div className="spaceArea">
            <h2 style={{ color: "#a52216", marginBottom: "20px" }}>{title}</h2>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", maxWidth: "800px", margin: "0 auto" }}>
              {/* Centered Large Cover Image */}
              <div
                style={{
                  width: "100%",
                  maxWidth: "480px",
                  border: "1px solid #eedfad",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                  background: "#fff",
                  padding: "10px",
                  borderRadius: "4px",
                }}
              >
                {cover ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={cover}
                    alt={title}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                ) : null}
              </div>

              {/* Book Info Header */}
              <div style={{ textAlign: "center", borderBottom: "1px solid #eedfad", width: "100%", paddingBottom: "12px" }}>
                <p style={{ margin: 0, fontSize: "15px", fontWeight: "bold", fontStyle: "italic", color: "#000000" }}>
                  {title}:-  {author}
                </p>
              </div>

              {/* Book Description Paragraphs */}
              <div className="font-sans text-justify" style={{ width: "100%", fontSize: "14px", color: "#000000", lineHeight: "1.7" }}>
                {paragraphs.map((p, idx) => (
                  <p key={idx} style={{ marginBottom: "16px" }}>
                    {p}
                  </p>
                ))}
              </div>

              {/* Back Link */}
              <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                <Link
                  href="/nehru-portal/books"
                  style={{
                    background: "#a52216",
                    color: "#fff",
                    padding: "8px 24px",
                    borderRadius: "4px",
                    fontWeight: "bold",
                    textDecoration: "none",
                    fontSize: "13px",
                  }}
                  className="hover:opacity-90"
                >
                  Back to Books
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
