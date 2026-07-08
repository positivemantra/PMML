import React from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";

export const metadata = {
  title: "Screen Reader Access | Nehru Portal",
  description: "Screen reader accessibility compliance details",
};

interface ScreenReaderRow {
  name: string;
  url: string;
  type: "Free" | "Commercial";
}

const readers: ScreenReaderRow[] = [
  { name: "Screen Access For All (SAFA)", url: "http://safa-reader.software.informer.com/download/", type: "Free" },
  { name: "Non Visual Desktop Access (NVDA)", url: "http://www.nvda-project.org/", type: "Free" },
  { name: "System Access To Go", url: "http://www.satogo.com/", type: "Free" },
  { name: "Thunder", url: "http://www.screenreader.net/index.php?pageid=2", type: "Free" },
  { name: "Hal", url: "http://www.yourdolphin.co.uk/productdetail.asp?id=5", type: "Commercial" },
  { name: "JAWS", url: "http://www.freedomscientific.com/jaws-hq.asp", type: "Commercial" },
  { name: "Supernova", url: "http://www.yourdolphin.co.uk/productdetail.asp?id=1", type: "Commercial" },
  { name: "Window-Eyes", url: "http://www.gwmicro.com/Window-Eyes/", type: "Commercial" },
];

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
              <span>Screen Reader Access</span>
            </div>
          </div>
          
          <div className="spaceArea">
            <h2 style={{ color: "#a52216", marginBottom: "20px" }}>Screen Reader Access</h2>
            <div className="font-sans" style={{ fontSize: "14px", lineHeight: "1.6", color: "#2d200e" }}>
              <p style={{ marginBottom: "20px" }}>
                Nehru Memorial Museum & Library website complies with World Wide Web Consortium (W3C) Web Content Accessibility Guidelines (WCAG) 2.0 level AA. This will enable people with visual impairments access the website using assistive technologies, such as screen readers. The information of the website is accessible with different screen readers.
              </p>

              <h3 style={{ color: "#a52216", fontWeight: "bold", fontSize: "1.05em", marginTop: "25px", marginBottom: "15px" }}>
                Various Screen Readers to choose from
              </h3>

              <div style={{ overflowX: "auto", margin: "20px 0" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #e0e0e0", fontSize: "13px" }}>
                  <thead>
                    <tr style={{ background: "#f5f5f5", borderBottom: "1px solid #e0e0e0", textAlign: "left" }}>
                      <th style={{ padding: "10px 12px", fontWeight: "bold", borderRight: "1px solid #e0e0e0", width: "30%" }}>Screen Reader</th>
                      <th style={{ padding: "10px 12px", fontWeight: "bold", borderRight: "1px solid #e0e0e0", width: "50%" }}>Website</th>
                      <th style={{ padding: "10px 12px", fontWeight: "bold", width: "20%" }}>Free / Commercial</th>
                    </tr>
                  </thead>
                  <tbody>
                    {readers.map((row, idx) => (
                      <tr key={idx} style={{ borderBottom: "1px solid #e0e0e0" }}>
                        <td style={{ padding: "10px 12px", borderRight: "1px solid #e0e0e0", color: "#333" }}>{row.name}</td>
                        <td style={{ padding: "10px 12px", borderRight: "1px solid #e0e0e0" }}>
                          <a
                            href={row.url}
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: "#b68a35", textDecoration: "none", display: "inline-flex", alignItems: "center" }}
                            className="hover:underline"
                          >
                            {row.url}
                            <svg 
                              style={{ display: "inline-block", marginLeft: "6px", width: "11px", height: "11px", fill: "none", stroke: "#b68a35", strokeWidth: "2" }}
                              viewBox="0 0 24 24"
                            >
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeLinecap="round" strokeLinejoin="round"></path>
                              <polyline points="15 3 21 3 21 9" strokeLinecap="round" strokeLinejoin="round"></polyline>
                              <line x1="10" y1="14" x2="21" y2="3" strokeLinecap="round" strokeLinejoin="round"></line>
                            </svg>
                          </a>
                        </td>
                        <td style={{ padding: "10px 12px", color: "#333" }}>{row.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
