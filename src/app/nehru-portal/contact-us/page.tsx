import React from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";

export const metadata = {
  title: "Contact Us | Nehru Portal",
  description: "Contact details for Nehru Memorial Museum & Library",
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
              <span>Contact Us</span>
            </div>
          </div>
          
          <div className="spaceArea">
            <h2 style={{ color: "#a52216", marginBottom: "30px" }}>Contact Us</h2>
            <div className="font-sans" style={{ fontSize: "13.5px", lineHeight: "1.6" }}>
              
              {/* Row 1 */}
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "20px" }}>
                {/* Column 1: General Enquiry */}
                <div style={{ flex: "1 1 30%", minWidth: "250px" }}>
                  <h3 style={{ color: "#a52216", fontWeight: "bold", fontSize: "1.15em", marginBottom: "12px" }}>General Enquiry</h3>
                  <p style={{ margin: "3px 0", color: "#000000" }}>Deputy Director's Office</p>
                  <p style={{ margin: "3px 0", color: "#000000" }}>Nehru Memorial Museum and Library</p>
                  <p style={{ margin: "3px 0", color: "#000000" }}>Teen Murti Bhawan</p>
                  <p style={{ margin: "3px 0", color: "#000000" }}>New Delhi - 110011</p>
                  <div style={{ margin: "12px 0 3px 0", color: "#000000" }}>
                    <strong>Phone :</strong> +91-11-23017599
                  </div>
                  <p style={{ margin: "3px 0", color: "#000000" }}>
                    <strong>Email :</strong> deputydirector[dot]nmml[at]gov[dot]in
                  </p>
                  <p style={{ margin: "3px 0", color: "#000000" }}>
                    <strong>Fax :</strong> +91-11-23793296
                  </p>
                </div>

                {/* Column 2: Academic Programmes */}
                <div style={{ flex: "1 1 30%", minWidth: "250px" }}>
                  <h3 style={{ color: "#a52216", fontWeight: "bold", fontSize: "1.15em", marginBottom: "12px" }}>Academic Programmes and Events</h3>
                  <p style={{ margin: "3px 0", color: "#000000" }}>Centre for Contemporary Studies</p>
                  <p style={{ margin: "3px 0", color: "#000000" }}>Nehru Memorial Museum and Library</p>
                  <p style={{ margin: "3px 0", color: "#000000" }}>Teen Murti Bhawan</p>
                  <p style={{ margin: "3px 0", color: "#000000" }}>New Delhi - 110011</p>
                  <div style={{ margin: "12px 0 3px 0", color: "#000000" }}>
                    <strong>Phone :</strong> +91-11-23010666
                  </div>
                  <p style={{ margin: "3px 0", color: "#000000" }}>
                    <strong>Email :</strong> nmmlccs@gmail.com
                  </p>
                </div>

                {/* Column 3: Library and Membership */}
                <div style={{ flex: "1 1 30%", minWidth: "250px" }}>
                  <h3 style={{ color: "#a52216", fontWeight: "bold", fontSize: "1.15em", marginBottom: "12px" }}>Library and Membership</h3>
                  <p style={{ margin: "3px 0", color: "#000000" }}>Lib. & Info. Officer</p>
                  <p style={{ margin: "3px 0", color: "#000000" }}>Nehru Memorial Museum and Library</p>
                  <p style={{ margin: "3px 0", color: "#000000" }}>Teen Murti Bhawan</p>
                  <p style={{ margin: "3px 0", color: "#000000" }}>New Delhi - 110011</p>
                  <div style={{ margin: "12px 0 3px 0", color: "#000000" }}>
                    <strong>Phone :</strong> +91-11-23794407 and 23794407
                  </div>
                  <p style={{ margin: "3px 0", color: "#000000" }}>
                    <strong>Email :</strong> lio[dot]nmml[at]gov[dot]in
                  </p>
                </div>
              </div>

              <hr style={{ border: "0", borderTop: "1px solid #ddd", margin: "25px 0" }} />

              {/* Row 2 */}
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "20px" }}>
                {/* Column 1: Museum and Tours */}
                <div style={{ flex: "1 1 30%", minWidth: "250px" }}>
                  <h3 style={{ color: "#a52216", fontWeight: "bold", fontSize: "1.15em", marginBottom: "12px" }}>Museum and Tours</h3>
                  <p style={{ margin: "3px 0", color: "#000000" }}>Museum Curator</p>
                  <p style={{ margin: "3px 0", color: "#000000" }}>Nehru Memorial Museum and Library</p>
                  <p style={{ margin: "3px 0", color: "#000000" }}>Teen Murti Bhawan</p>
                  <p style={{ margin: "3px 0", color: "#000000" }}>New Delhi - 110011</p>
                  <div style={{ margin: "12px 0 3px 0", color: "#000000" }}>
                    <strong>Email :</strong> curator[dot]nmml[at]gov[dot]in
                  </div>
                </div>

                {/* Column 2: Children and Youth Events */}
                <div style={{ flex: "1 1 30%", minWidth: "250px" }}>
                  <h3 style={{ color: "#a52216", fontWeight: "bold", fontSize: "1.15em", marginBottom: "12px" }}>Children and Youth Events</h3>
                  <p style={{ margin: "3px 0", color: "#000000" }}>Children Resource Centre</p>
                  <p style={{ margin: "3px 0", color: "#000000" }}>Nehru Memorial Museum and Library</p>
                  <p style={{ margin: "3px 0", color: "#000000" }}>Teen Murti Bhawan</p>
                  <p style={{ margin: "3px 0", color: "#000000" }}>New Delhi - 110011</p>
                  <div style={{ margin: "12px 0 3px 0", color: "#000000" }}>
                    <strong>Phone :</strong> +91-11-23013946
                  </div>
                  <p style={{ margin: "3px 0", color: "#000000" }}>
                    <strong>Email :</strong> childrencentrenmml@gmail.com
                  </p>
                </div>

                {/* Column 3: Nehru Planetarium */}
                <div style={{ flex: "1 1 30%", minWidth: "250px" }}>
                  <h3 style={{ color: "#a52216", fontWeight: "bold", fontSize: "1.15em", marginBottom: "12px" }}>Nehru Planetarium</h3>
                  <p style={{ margin: "3px 0", color: "#000000" }}>Show Timings and Exhibitions</p>
                  <p style={{ margin: "3px 0", color: "#000000" }}>Nehru Memorial Museum and Library</p>
                  <p style={{ margin: "3px 0", color: "#000000" }}>Teen Murti Bhawan</p>
                  <p style={{ margin: "3px 0", color: "#000000" }}>New Delhi - 110011</p>
                  <div style={{ margin: "12px 0 3px 0", color: "#000000" }}>
                    <strong>Email :</strong> dnp[dot]nmml[at]gov[dot]in
                  </div>
                </div>
              </div>

              <hr style={{ border: "0", borderTop: "1px solid #ddd", margin: "25px 0" }} />

              {/* Row 3 */}
              <div style={{ width: "100%" }}>
                <h3 style={{ color: "#a52216", fontWeight: "bold", fontSize: "1.15em", marginBottom: "12px" }}>Meeting Timing</h3>
                <p style={{ margin: "3px 0", color: "#000000" }}>10:00 AM to 5:00 PM</p>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
