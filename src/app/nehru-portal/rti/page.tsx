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

              <span>Right to Information (RTI)</span>
            </div>
          </div>
          
          <div className="spaceArea">
            <h2 style={{ color: "#a52216" }}>Right to Information (RTI)</h2>
            <div className="text-slate-600 text-xs sm:text-xs md:text-sm leading-relaxed text-justify max-w-none">
              
      <div className="space-y-4">
        <p>Under the Right to Information Act, 2005, citizens can request information regarding the administration and activities of the Nehru Memorial Museum & Library.</p>
        <div className="bg-slate-50 border p-5 rounded-xl space-y-4 font-semibold text-xs text-primary uppercase max-w-md">
          <p className="font-bold text-sm">Public Information Officer</p>
          <div className="normal-case text-slate-600 text-xs space-y-2 font-medium">
            <p>Shri Ramesh Kumar, Administrative Officer</p>
            <p>Nehru Memorial Museum & Library, New Delhi - 110011</p>
            <p>Email: <a href="mailto:ao.nmml@gov.in" className="text-secondary hover:underline">ao.nmml@gov.in</a></p>
          </div>
        </div>
        <p>You can also download disclosures:</p>
        <div className="flex gap-4 flex-wrap">
          <a href="/sites/default/files/Right to Information Act, 2005 (389KB).pdf" target="_blank" className="inline-flex bg-primary hover:bg-primary-hover text-white text-xs font-bold px-4 py-2.5 rounded shadow-sm uppercase tracking-wider">
            RTI Act Handbook (PDF)
          </a>
          <a href="/sites/default/files/Proactive Disclosure (389KB).pdf" target="_blank" className="inline-flex bg-white hover:bg-slate-100 text-primary border border-slate-200 text-xs font-bold px-4 py-2.5 rounded shadow-sm uppercase tracking-wider">
            Proactive Disclosure (PDF)
          </a>
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
