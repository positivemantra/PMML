import React from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";

export const metadata = {
  title: "Copyright Policy | Nehru Portal",
  description: "Copyright policy and content reproduction guidelines for the Nehru Heritage Portal",
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
              <span>Copyright Policy</span>
            </div>
          </div>
          
          <div className="spaceArea">
            <h2 style={{ color: "#a52216", marginBottom: "20px" }}>Copyright Policy</h2>
            <div className="font-sans text-justify" style={{ fontSize: "14px", lineHeight: "1.7", color: "#000000" }}>
              
              <p style={{ marginBottom: "20px" }}>
                Material featured on this Website may be reproduced free of charge. However, the material has to be reproduced accurately and not to be used in a derogatory manner or in a misleading context. Wherever the material is being published or issued to others, the source must be prominently acknowledged. However, the permission to reproduce this material shall not extend to any material which is identified as being copyright of a third party. Authorization to reproduce such material must be obtained from the departments/copyright holders concerned.
              </p>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
