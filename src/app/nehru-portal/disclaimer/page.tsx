import React from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";

export const metadata = {
  title: "Disclaimer | Nehru Portal",
  description: "Disclaimer and external link policies for the Nehru Heritage Portal",
};

export default function Page() {
  return (
    <>
      <TopBar />
      <Header />
      <main id="main-content" className="w-full flex-1 innerContent text-left select-none">
        <div className="container">
          <div className="breadCrumbArea cf">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span>Disclaimer</span>
            </div>
          </div>
          
          <div className="spaceArea">
            <h2 style={{ color: "#a52216", marginBottom: "20px" }}>Disclaimer</h2>
            <div className="font-sans text-justify" style={{ fontSize: "14px", lineHeight: "1.7", color: "#000000" }}>
              
              <p style={{ marginBottom: "20px" }}>
                This web site is brought to you by the <strong>Nehru Memorial Museum and Library</strong>. While surfing through this site you will come across directories and links to Government and Private organizations. The contents of these sites are not to be construed as a responsibility of or endorsement by the <strong>Nehru Memorial Museum and Library</strong> and are owned by the respective organizations which may be contacted for any further information or suggestion.
              </p>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
