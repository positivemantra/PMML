import React from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";

export const metadata = {
  title: "Privacy Policy | Nehru Portal",
  description: "Privacy policy and site visit data information for the Nehru Heritage Portal",
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
              <span>Privacy Policy</span>
            </div>
          </div>
          
          <div className="spaceArea">
            <h2 style={{ color: "#a52216", marginBottom: "20px" }}>Privacy Policy</h2>
            <div className="font-sans text-justify" style={{ fontSize: "14px", lineHeight: "1.7", color: "#000000" }}>
              
              <p style={{ marginBottom: "20px" }}>
                As a general rule, this website does not collect Personal Information about you when you visit the site. You can generally visit the site without revealing Personal Information, unless you choose to provide such information.
              </p>

              {/* Site Visit Data */}
              <h3 style={{ color: "#a52216", fontWeight: "bold", fontSize: "1.05em", marginTop: "22px", marginBottom: "12px" }}>
                Site Visit Data
              </h3>
              <p style={{ marginBottom: "12px" }}>
                This website records your visit and logs the following information for statistical purposes: your server's address; the name of the top-level domain from which you access the Internet (for example, .gov, .com, .in, etc.); the type of browser you use; the date and time you access the site; the pages you have accessed and the documents downloaded and the previous Internet Address from which you linked directly to the site.
              </p>
              <p style={{ marginBottom: "20px" }}>
                We will not identify users or their browsing activities, except when a law enforcement agency may exercise a warrant to inspect the service provider's logs.
              </p>

              {/* Cookies */}
              <h3 style={{ color: "#a52216", fontWeight: "bold", fontSize: "1.05em", marginTop: "22px", marginBottom: "12px" }}>
                Cookies
              </h3>
              <p style={{ marginBottom: "20px" }}>
                A cookie is a piece of software code that an internet web site sends to your browser when you access information at that site. This site does not use cookies.
              </p>

              {/* Email Management */}
              <h3 style={{ color: "#a52216", fontWeight: "bold", fontSize: "1.05em", marginTop: "22px", marginBottom: "12px" }}>
                Email Management
              </h3>
              <p style={{ marginBottom: "20px" }}>
                Your email address will only be recorded if you choose to send a message. It will only be used for the purpose for which you have provided it and will not be added to a mailing list. Your email address will not be used for any other purpose, and will not be disclosed, without your consent.
              </p>

              {/* Collection of Personal Information */}
              <h3 style={{ color: "#a52216", fontWeight: "bold", fontSize: "1.05em", marginTop: "22px", marginBottom: "12px" }}>
                Collection of Personal Information
              </h3>
              <p style={{ marginBottom: "16px" }}>
                If you are asked for any other Personal Information you will be informed how it will be used if you choose to give it, and adequate security measures will be taken to protect your personal information. If at any time you believe the principles referred to in this privacy statement have not been followed, or have any other comments on these principles, please notify the webmaster through the Contact Us page.
              </p>
              <p style={{ marginBottom: "20px" }}>
                <strong>Note:</strong> The use of the term "Personal Information" in this privacy statement refers to any information from which your identity is apparent or can be reasonably ascertained.
              </p>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
