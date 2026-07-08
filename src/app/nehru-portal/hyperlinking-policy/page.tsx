import React from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";

export const metadata = {
  title: "Hyperlinking Policy | Nehru Portal",
  description: "Hyperlinking policies and guidelines for linking to the Nehru Heritage Portal",
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
              <span>Hyperlinking Policy</span>
            </div>
          </div>
          
          <div className="spaceArea">
            <h2 style={{ color: "#a52216", marginBottom: "20px" }}>Hyperlinking Policy</h2>
            <div className="font-sans text-justify" style={{ fontSize: "14px", lineHeight: "1.7", color: "#000000" }}>
              
              <p style={{ marginBottom: "22px" }}>
                At many places in this website, you shall find links to other websites/portals. These links have been placed for your convenience. <strong>Nehru Memorial Museum and Library</strong> is not responsible for the contents and reliability of the linked websites and does not necessarily endorse the views expressed in them. Mere presence of the link or its listing on this website should not be assumed as endorsement of any kind. We cannot guarantee that these links will work all the time and we have no control over availability of linked pages.
              </p>

              <h3 style={{ color: "#a52216", fontWeight: "bold", fontSize: "1.05em", marginTop: "22px", marginBottom: "12px" }}>
                Links to theNehru Memorial Museum and Library by other websites/portals
              </h3>

              <p style={{ marginBottom: "20px" }}>
                Prior permission is required before hyperlinks are directed from any website/portal to this site. Permission for the same, stating the nature of the content on the pages from where the link has to be given and the exact language of the Hyperlink should be obtained by sending a request to <strong>Nehru Memorial Museum and Library</strong> from the{" "}
                <Link
                  href="/nehru-portal/contact-us"
                  style={{ color: "#b68a35", textDecoration: "none" }}
                  className="hover:underline"
                >
                  Contact Us
                </Link>{" "}
                page
              </p>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
