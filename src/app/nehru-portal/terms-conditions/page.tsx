import React from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";

export const metadata = {
  title: "Terms & Conditions | Nehru Portal",
  description: "Terms and conditions of use for the Nehru Heritage Portal",
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
              <span>Terms & Conditions</span>
            </div>
          </div>
          
          <div className="spaceArea">
            <h2 style={{ color: "#a52216", marginBottom: "20px" }}>Terms & Conditions</h2>
            <div className="font-sans text-justify" style={{ fontSize: "14px", lineHeight: "1.7", color: "#000000" }}>
              
              <p style={{ marginBottom: "18px" }}>
                This Portal has been developed by NIC & hosted at{" "}
                <a
                  href="http://www.nic.in/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#b68a35", textDecoration: "none", display: "inline-flex", alignItems: "center" }}
                  className="hover:underline"
                >
                  NIC Data Centre
                  <svg 
                    style={{ display: "inline-block", marginLeft: "5px", width: "11px", height: "11px", fill: "none", stroke: "#b68a35", strokeWidth: "2" }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeLinecap="round" strokeLinejoin="round"></path>
                    <polyline points="15 3 21 3 21 9" strokeLinecap="round" strokeLinejoin="round"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3" strokeLinecap="round" strokeLinejoin="round"></line>
                  </svg>
                </a>
                . All of the content and information is provided by the Nehru Memorial Museum and Library (NMML).
              </p>

              <p style={{ marginBottom: "18px" }}>
                Though all efforts have been made to ensure the accuracy of the content on this Portal, the same should not be construed as a statement of law or used for any legal purposes. <strong>The Nehru Memorial Museum and Library (NMML)</strong> accepts no responsibility in relation to the usefulness of the contents and users are advised to verify/check any information, and to obtain any appropriate professional advice before acting on the information provided in the Portal.
              </p>

              <p style={{ marginBottom: "18px" }}>
                In no event will the NMML be liable for any expense, loss or damage including, without limitation, indirect or consequential loss or damage, or any expense, loss or damage whatsoever arising from use, or loss of use, of data, arising out of or in connection with the use of this Portal.
              </p>

              <p style={{ marginBottom: "18px" }}>
                These terms of use shall be governed by and construed in accordance with the Indian Laws. Any dispute arising under these terms and conditions shall be subject to the exclusive jurisdiction of the courts of India.
              </p>

              <p style={{ marginBottom: "18px" }}>
                Please refer following Policies of this Portal related to Privacy, Copyright and Hyper linking. If you need any more information please visit following or feel free to{" "}
                <Link
                  href="/nehru-portal/contact-us"
                  style={{ color: "#b68a35", textDecoration: "none", display: "inline-flex", alignItems: "center" }}
                  className="hover:underline"
                >
                  Contact Us
                  <svg 
                    style={{ display: "inline-block", marginLeft: "5px", width: "11px", height: "11px", fill: "none", stroke: "#b68a35", strokeWidth: "2" }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeLinecap="round" strokeLinejoin="round"></path>
                    <polyline points="15 3 21 3 21 9" strokeLinecap="round" strokeLinejoin="round"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3" strokeLinecap="round" strokeLinejoin="round"></line>
                  </svg>
                </Link>
                .
              </p>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
