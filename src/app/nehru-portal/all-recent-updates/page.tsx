import React from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";

export const metadata = {
  title: "Recent Updates | Nehru Portal",
  description: "Recent Updates | Nehru Portal",
};

export default function AllRecentUpdatesPage() {
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
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", width: "100%" }}>
              <div style={{ flex: "1 1 70%", minWidth: "300px" }}>
                <ul style={{ listStyleType: "disc", paddingLeft: "20px", margin: "0" }}>
                  <li style={{ marginBottom: "15px", lineHeight: "1.6" }}>
                    <Link 
                      href="/nehru-portal/strategy-trap-india-and-pakistan-under-nuclear-shadow-lt-gen-prakash-menon" 
                      style={{ color: "#b68a35", fontWeight: "normal", textDecoration: "none", fontSize: "1.05em" }}
                      className="hover:underline"
                    >
                      The Strategy Trap India and Pakistan under the Nuclear Shadow by Lt Gen Prakash Menon
                    </Link>
                  </li>
                  <li style={{ marginBottom: "15px", lineHeight: "1.6" }}>
                    <Link 
                      href="/nehru-portal/forging-nation-congress-demand-representative-bodies-and-muslim-opposition-1885-1892-14th-june18" 
                      style={{ color: "#b68a35", fontWeight: "normal", textDecoration: "none", fontSize: "1.05em" }}
                      className="hover:underline"
                    >
                      Forging the Nation: The Congress Demand for Representative Bodies and the Muslim Opposition (1885-1892), 14th June'18
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div style={{ flex: "0 0 auto", minWidth: "200px", textAlign: "right" }}>
                <Link 
                  href="/nehru-portal/archive-recent-updates" 
                  style={{ 
                    fontFamily: "var(--font-serif), Georgia, serif", 
                    fontSize: "1.8em", 
                    color: "#392b15", 
                    fontWeight: "bold", 
                    textDecoration: "none",
                    display: "block"
                  }}
                  className="hover:text-[#a52216]"
                >
                  Archive Updates
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
