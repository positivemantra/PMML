import React from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";

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

              <span>About</span>
            </div>
          </div>
          
          <div className="spaceArea">
            <h2 style={{ color: "#a52216" }}>About</h2>
            <div className="text-slate-600 text-xs sm:text-xs md:text-sm leading-relaxed text-justify max-w-none">
              
      <p>
        The Nehru Portal serves as a comprehensive digital repository dedicated to the life, writings, works, and legacy of Jawaharlal Nehru. Managed by the Nehru Memorial Museum & Library, the portal acts as a bridge connecting history with modern accessibility.
      </p>
    
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
