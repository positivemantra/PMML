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

              <span>Recent Updates & Announcements</span>
            </div>
          </div>
          
          <div className="spaceArea">
            <h2 style={{ color: "#a52216" }}>Recent Updates & Announcements</h2>
            <div className="text-slate-600 text-xs sm:text-xs md:text-sm leading-relaxed text-justify max-w-none">
              
      <div className="space-y-6">
        <div className="border-b pb-4 space-y-1">
          <span className="text-[10px] font-bold text-secondary uppercase">June 16, 2018</span>
          <h4 className="font-serif font-bold text-primary text-sm md:text-base">
            <Link href="/nehru-portal/writings/strategy-trap-india-and-pakistan-under-nuclear-shadow-lt-gen-prakash-menon" className="hover:underline">
              The Strategy Trap India and Pakistan under the Nuclear Shadow by Lt Gen Prakash Menon
            </Link>
          </h4>
          <p className="text-slate-600 text-xs mt-1">Book release lecture and catalog details.</p>
        </div>
        <div className="border-b pb-4 space-y-1">
          <span className="text-[10px] font-bold text-secondary uppercase">June 14, 2018</span>
          <h4 className="font-serif font-bold text-primary text-sm md:text-base">
            <Link href="/nehru-portal/writings/forging-nation-congress-demand-representative-bodies-and-muslim-opposition-1885-1892-14th-june18" className="hover:underline">
              Forging the Nation: The Congress Demand for Representative Bodies and the Muslim Opposition (1885-1892), 14th June'18
            </Link>
          </h4>
          <p className="text-slate-600 text-xs mt-1">Lecture transcript and archival details.</p>
        </div>
      </div>
    
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
