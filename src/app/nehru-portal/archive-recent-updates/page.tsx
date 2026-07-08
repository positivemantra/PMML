import React from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";

export const metadata = {
  title: "Recent Updates | Nehru Portal",
  description: "Recent Updates | Nehru Portal",
};

export default function ArchiveRecentUpdatesPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main id="main-content" className="w-full flex-1 innerContent text-left select-none">
        <div className="container">
          <div className="breadCrumbArea cf">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span>Recent Updates</span>
            </div>
          </div>
          
          <div className="spaceArea">
            <h2 style={{ color: "#a52216", marginBottom: "25px" }}>Recent Updates</h2>
            
            <ul style={{ listStyleType: "disc", paddingLeft: "20px", margin: "0" }}>
              <li style={{ marginBottom: "15px", lineHeight: "1.6" }}>
                <Link 
                  href="/nehru-portal/forging-nation-congress-demand-representative-bodies-and-muslim-opposition-1885-1892-15-june18" 
                  style={{ color: "#b68a35", fontWeight: "normal", textDecoration: "none", fontSize: "1.05em", display: "inline" }}
                  className="hover:underline"
                >
                  Forging the Nation: The Congress Demand for Representative Bodies and the Muslim Opposition (1885-1892), 15 June'18
                </Link>
                <span style={{ display: "block", color: "#666", fontSize: "0.9em", marginTop: "5px" }}>
                  Friday, June 8, 2018
                </span>
              </li>
            </ul>
            
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
