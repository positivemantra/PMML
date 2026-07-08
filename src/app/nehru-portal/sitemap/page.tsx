import React from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";

export default function SitemapPage() {
  const arrowIcon = (
    <span style={{ fontSize: "9px", color: "#666", marginRight: "6px", verticalAlign: "middle" }}>▼</span>
  );

  const bulletIcon = (
    <span style={{ fontSize: "12px", color: "#666", marginRight: "8px", verticalAlign: "middle" }}>•</span>
  );

  return (
    <>
      <TopBar />
      <Header />
      <main id="main-content" className="w-full flex-1 innerContent text-left select-none">
        <div className="container">
          {/* Breadcrumb */}
          <div className="breadCrumbArea cf">
            <div className="breadcrumb">
              <Link href="/nehru-portal">Home</Link>
              <span>Site map</span>
            </div>
          </div>

          <div className="spaceArea">
            <h2 style={{ color: "#a52216", marginBottom: "25px" }}>Site map</h2>

            {/* Sitemap Hierarchy Tree */}
            <div style={{ paddingLeft: "10px" }}>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "2" }}>
                {/* Home */}
                <li style={{ marginBottom: "12px" }}>
                  {arrowIcon}
                  <Link href="/nehru-portal" style={{ fontSize: "14px", fontWeight: "bold", color: "#312502", textDecoration: "none" }} className="hover:underline">
                    Home
                  </Link>
                  <ul style={{ listStyle: "none", paddingLeft: "24px", marginTop: "4px" }}>
                    <li>
                      {bulletIcon}
                      <Link href="/nehru-portal/about" style={{ color: "#8b1912" }} className="hover:underline">About Us</Link>
                    </li>
                    <li>
                      {bulletIcon}
                      <Link href="/nehru-portal/about#vision-mission" style={{ color: "#8b1912" }} className="hover:underline">Vision & Mission</Link>
                    </li>
                    <li>
                      {bulletIcon}
                      <Link href="/nehru-portal/about#objectives" style={{ color: "#8b1912" }} className="hover:underline">Objectives</Link>
                    </li>
                  </ul>
                </li>

                {/* Family Tree */}
                <li style={{ marginBottom: "12px" }}>
                  {bulletIcon}
                  <Link href="/nehru-portal/family-tree" style={{ fontSize: "14px", fontWeight: "bold", color: "#312502", textDecoration: "none" }} className="hover:underline">
                    Family Tree
                  </Link>
                </li>

                {/* Places of Residence */}
                <li style={{ marginBottom: "12px" }}>
                  {arrowIcon}
                  <Link href="/nehru-portal/places" style={{ fontSize: "14px", fontWeight: "bold", color: "#312502", textDecoration: "none" }} className="hover:underline">
                    Places of Residence
                  </Link>
                  <ul style={{ listStyle: "none", paddingLeft: "24px", marginTop: "4px" }}>
                    <li>
                      {bulletIcon}
                      <Link href="/nehru-portal/swaraj-bhawan" style={{ color: "#8b1912" }} className="hover:underline">Swaraj Bhawan</Link>
                    </li>
                    <li>
                      {bulletIcon}
                      <Link href="/nehru-portal/anand-bhawan" style={{ color: "#8b1912" }} className="hover:underline">Anand Bhawan</Link>
                    </li>
                    <li>
                      {bulletIcon}
                      <Link href="/nehru-portal/teen-murti-house" style={{ color: "#8b1912" }} className="hover:underline">Teen Murti House</Link>
                    </li>
                  </ul>
                </li>

                {/* Important Dates */}
                <li style={{ marginBottom: "12px" }}>
                  {arrowIcon}
                  <Link href="/nehru-portal/important-dates" style={{ fontSize: "14px", fontWeight: "bold", color: "#312502", textDecoration: "none" }} className="hover:underline">
                    Important Dates
                  </Link>
                  <ul style={{ listStyle: "none", paddingLeft: "24px", marginTop: "4px" }}>
                    <li>
                      {bulletIcon}
                      <Link href="/nehru-portal/early-life" style={{ color: "#8b1912" }} className="hover:underline">Early Life</Link>
                    </li>
                    <li>
                      {bulletIcon}
                      <Link href="/nehru-portal/marriage" style={{ color: "#8b1912" }} className="hover:underline">Marriage</Link>
                    </li>
                    <li>
                      {bulletIcon}
                      <Link href="/nehru-portal/freedom-struggle" style={{ color: "#8b1912" }} className="hover:underline">Freedom Struggle</Link>
                    </li>
                    <li>
                      {bulletIcon}
                      <Link href="/nehru-portal/prison" style={{ color: "#8b1912" }} className="hover:underline">In Prison</Link>
                    </li>
                    <li>
                      {bulletIcon}
                      <Link href="/nehru-portal/prime-minister" style={{ color: "#8b1912" }} className="hover:underline">Prime Minister</Link>
                    </li>
                  </ul>
                </li>

                {/* Galleries */}
                <li style={{ marginBottom: "12px" }}>
                  {arrowIcon}
                  <Link href="/nehru-portal/galleries" style={{ fontSize: "14px", fontWeight: "bold", color: "#312502", textDecoration: "none" }} className="hover:underline">
                    Galleries
                  </Link>
                  <ul style={{ listStyle: "none", paddingLeft: "24px", marginTop: "4px" }}>
                    <li>
                      {bulletIcon}
                      <Link href="/nehru-portal/photo-gallery" style={{ color: "#8b1912" }} className="hover:underline">Photos</Link>
                    </li>
                    <li>
                      {bulletIcon}
                      <Link href="/nehru-portal/audio-gallery" style={{ color: "#8b1912" }} className="hover:underline">Audios</Link>
                    </li>
                    <li>
                      {bulletIcon}
                      <Link href="/nehru-portal/video-gallery" style={{ color: "#8b1912" }} className="hover:underline">Videos</Link>
                    </li>
                    <li>
                      {bulletIcon}
                      <Link href="/nehru-portal/cartoons" style={{ color: "#8b1912" }} className="hover:underline">Cartoons</Link>
                    </li>
                    <li>
                      {bulletIcon}
                      <Link href="/nehru-portal/stamps" style={{ color: "#8b1912" }} className="hover:underline">Stamps</Link>
                    </li>
                  </ul>
                </li>

                {/* Writings */}
                <li style={{ marginBottom: "12px" }}>
                  {bulletIcon}
                  <Link href="/nehru-portal/writings" style={{ fontSize: "14px", fontWeight: "bold", color: "#312502", textDecoration: "none" }} className="hover:underline">
                    Writings
                  </Link>
                </li>

                {/* NMML Publications */}
                <li style={{ marginBottom: "12px" }}>
                  {arrowIcon}
                  <Link href="/nehru-portal/publications" style={{ fontSize: "14px", fontWeight: "bold", color: "#312502", textDecoration: "none" }} className="hover:underline">
                    NMML Publications
                  </Link>
                  <ul style={{ listStyle: "none", paddingLeft: "24px", marginTop: "4px" }}>
                    <li>
                      {bulletIcon}
                      <Link href="/nehru-portal/books" style={{ color: "#8b1912" }} className="hover:underline">Books</Link>
                    </li>
                  </ul>
                </li>

                {/* Archives */}
                <li style={{ marginBottom: "12px" }}>
                  {arrowIcon}
                  <Link href="/nehru-portal/nehru-papers" style={{ fontSize: "14px", fontWeight: "bold", color: "#312502", textDecoration: "none" }} className="hover:underline">
                    Archives
                  </Link>
                  <ul style={{ listStyle: "none", paddingLeft: "24px", marginTop: "4px" }}>
                    <li>
                      {bulletIcon}
                      <Link href="/nehru-portal/nehru-papers" style={{ color: "#8b1912" }} className="hover:underline">Nehru Papers</Link>
                    </li>
                    <li>
                      {bulletIcon}
                      <Link href="/nehru-portal/contemporaries" style={{ color: "#8b1912" }} className="hover:underline">Papers of Nehru’s Contemporaries</Link>
                    </li>
                  </ul>
                </li>

                {/* Oral History */}
                <li style={{ marginBottom: "12px" }}>
                  {bulletIcon}
                  <Link href="/nehru-portal/oral-history" style={{ fontSize: "14px", fontWeight: "bold", color: "#312502", textDecoration: "none" }} className="hover:underline">
                    Oral History
                  </Link>
                </li>

                {/* Tributes */}
                <li style={{ marginBottom: "12px" }}>
                  {arrowIcon}
                  <Link href="/nehru-portal/tributes" style={{ fontSize: "14px", fontWeight: "bold", color: "#312502", textDecoration: "none" }} className="hover:underline">
                    Tributes
                  </Link>
                  <ul style={{ listStyle: "none", paddingLeft: "24px", marginTop: "4px" }}>
                    <li>
                      {bulletIcon}
                      <Link href="/nehru-portal/tributes/indian" style={{ color: "#8b1912" }} className="hover:underline">Indian</Link>
                    </li>
                    <li>
                      {bulletIcon}
                      <Link href="/nehru-portal/tributes/foreign" style={{ color: "#8b1912" }} className="hover:underline">Foreign</Link>
                    </li>
                  </ul>
                </li>

                {/* RTI */}
                <li style={{ marginBottom: "12px" }}>
                  {bulletIcon}
                  <Link href="/nehru-portal/rti" style={{ fontSize: "14px", fontWeight: "bold", color: "#312502", textDecoration: "none" }} className="hover:underline">
                    RTI
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
