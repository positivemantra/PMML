import React from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";

export const metadata = {
  title: "Help | Nehru Portal",
  description: "Help and navigation support instructions for the Nehru Heritage Portal",
};

const ExtLink: React.FC<{ href: string; label: string; tagColor?: string; tagText?: string }> = ({ href, label, tagColor, tagText }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    style={{ color: "#b68a35", textDecoration: "none", display: "inline-flex", alignItems: "center" }}
    className="hover:underline"
  >
    {tagText && (
      <span
        style={{
          backgroundColor: tagColor || "#ccc",
          color: "#ffffff",
          padding: "1px 4px",
          fontSize: "9px",
          fontWeight: "bold",
          borderRadius: "2px",
          marginRight: "6px",
          fontFamily: "monospace",
          lineHeight: "1.1",
        }}
      >
        {tagText}
      </span>
    )}
    {label}
    <svg 
      style={{ display: "inline-block", marginLeft: "5px", width: "11px", height: "11px", fill: "none", stroke: "#b68a35", strokeWidth: "2" }}
      viewBox="0 0 24 24"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeLinecap="round" strokeLinejoin="round"></path>
      <polyline points="15 3 21 3 21 9" strokeLinecap="round" strokeLinejoin="round"></polyline>
      <line x1="10" y1="14" x2="21" y2="3" strokeLinecap="round" strokeLinejoin="round"></line>
    </svg>
  </a>
);

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
              <span>Help</span>
            </div>
          </div>
          
          <div className="spaceArea">
            <h2 style={{ color: "#a52216", marginBottom: "20px" }}>Help</h2>
            <div className="font-sans text-justify" style={{ fontSize: "14px", lineHeight: "1.7", color: "#000000" }}>
              
              {/* File Formats */}
              <h3 style={{ color: "#a52216", fontWeight: "bold", fontSize: "1.05em", marginTop: "10px", marginBottom: "12px" }}>
                Viewing Information for Various File Formats
              </h3>
              <p style={{ marginBottom: "16px" }}>
                This website includes some content that is available in non-HTML format. They might not be visible properly if your browser does not have the required plug-ins.
              </p>
              <p style={{ marginBottom: "20px" }}>
                For example Acrobat Reader software is required to view Adobe Acrobat PDF files. If you do not have this software installed on your computer, you can download it for free. The following table lists some plug-ins that you will require.
              </p>

              {/* Formats Table */}
              <div style={{ overflowX: "auto", margin: "20px 0 30px 0" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #e0e0e0", fontSize: "13px" }}>
                  <thead>
                    <tr style={{ background: "#f5f5f5", borderBottom: "1px solid #e0e0e0", textAlign: "left" }}>
                      <th style={{ padding: "10px 12px", fontWeight: "bold", borderRight: "1px solid #e0e0e0", width: "25%" }}>Document Type</th>
                      <th style={{ padding: "10px 12px", fontWeight: "bold", width: "75%" }}>Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* PDF */}
                    <tr style={{ borderBottom: "1px solid #e0e0e0" }}>
                      <td style={{ padding: "10px 12px", borderRight: "1px solid #e0e0e0", color: "#333" }}>PDF content</td>
                      <td style={{ padding: "10px 12px" }}>
                        <ExtLink href="https://get.adobe.com/reader/" label="Adobe Acrobat Reader" tagText="PDF" tagColor="#e22123" />
                      </td>
                    </tr>
                    {/* Word */}
                    <tr style={{ borderBottom: "1px solid #e0e0e0" }}>
                      <td style={{ padding: "10px 12px", borderRight: "1px solid #e0e0e0", color: "#333" }}>Word files</td>
                      <td style={{ padding: "10px 12px" }}>
                        <div style={{ marginBottom: "8px" }}>
                          If You have already installed MS Word [Version 2003, 2007 or 2010] or Open Office then you can directly view Word files or you can download from below links.
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                          <div>
                            <ExtLink href="https://www.microsoft.com/" label="Word Viewer 2003 (in any version till 2003)" tagText="Word" tagColor="#2b579a" />
                          </div>
                          <div>
                            <ExtLink href="https://www.microsoft.com/" label="Microsoft Office Compatibility Pack for Word (for 2007 version)" />
                          </div>
                          <div>
                            <ExtLink href="https://www.openoffice.org/download/" label="Open Office" tagText="Open" tagColor="#0093dd" />
                          </div>
                        </div>
                      </td>
                    </tr>
                    {/* Excel */}
                    <tr style={{ borderBottom: "1px solid #e0e0e0" }}>
                      <td style={{ padding: "10px 12px", borderRight: "1px solid #e0e0e0", color: "#333" }}>Excel files</td>
                      <td style={{ padding: "10px 12px" }}>
                        <div style={{ marginBottom: "8px" }}>
                          If You have already installed MS Excel [Version 2003, 2007 or 2010] or Open Office then you can directly view Excel files or you can download from below links.
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                          <div>
                            <ExtLink href="https://www.microsoft.com/" label="Excel Viewer 2003 (in any version till 2003)" tagText="Excel" tagColor="#217346" />
                          </div>
                          <div>
                            <ExtLink href="https://www.microsoft.com/" label="Microsoft Office Compatibility Pack for Excel (for 2007 version)" />
                          </div>
                          <div>
                            <ExtLink href="https://www.openoffice.org/download/" label="Open Office" tagText="Open" tagColor="#0093dd" />
                          </div>
                        </div>
                      </td>
                    </tr>
                    {/* PPT */}
                    <tr style={{ borderBottom: "1px solid #e0e0e0" }}>
                      <td style={{ padding: "10px 12px", borderRight: "1px solid #e0e0e0", color: "#333" }}>PowerPoint presentations</td>
                      <td style={{ padding: "10px 12px" }}>
                        <div style={{ marginBottom: "8px" }}>
                          If You have already installed MS PowerPoint [Version 2003, 2007 or 2010] or Open Office then you can directly view PowerPoint files or you can download from below links.
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                          <div>
                            <ExtLink href="https://www.microsoft.com/" label="PowerPoint Viewer 2003 (in any version till 2003)" tagText="PPT" tagColor="#d24726" />
                          </div>
                          <div>
                            <ExtLink href="https://www.microsoft.com/" label="Microsoft Office Compatibility Pack for PowerPoint (for 2007 version)" />
                          </div>
                          <div>
                            <ExtLink href="https://www.openoffice.org/download/" label="Open Office" tagText="Open" tagColor="#0093dd" />
                          </div>
                        </div>
                      </td>
                    </tr>
                    {/* Flash */}
                    <tr style={{ borderBottom: "1px solid #e0e0e0" }}>
                      <td style={{ padding: "10px 12px", borderRight: "1px solid #e0e0e0", color: "#333" }}>Flash content</td>
                      <td style={{ padding: "10px 12px" }}>
                        <ExtLink href="https://get.adobe.com/flashplayer/" label="Adobe Flash Player" tagText="Flash" tagColor="#d11116" />
                      </td>
                    </tr>
                    {/* Audio/Video */}
                    <tr style={{ borderBottom: "1px solid #e0e0e0" }}>
                      <td style={{ padding: "10px 12px", borderRight: "1px solid #e0e0e0", color: "#333" }}>Audio/Video Files</td>
                      <td style={{ padding: "10px 12px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                          <div>
                            <ExtLink href="https://support.microsoft.com/" label="Windows Media Player" tagText="Media" tagColor="#0078d7" />
                          </div>
                          <div>
                            <ExtLink href="https://www.real.com/" label="Real Player" tagText="Real" tagColor="#e81123" />
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Screen Reader Access */}
              <h3 style={{ color: "#a52216", fontWeight: "bold", fontSize: "1.05em", marginTop: "25px", marginBottom: "12px" }}>
                Screen Reader Access
              </h3>
              <p style={{ marginBottom: "20px" }}>
                The Nehru Memorial Museum and Library website complies with World Wide Web Consortium (W3C) Web Content Accessibility Guidelines (WCAG) 2.0 level AA. This will enable people with visual impairments access the website using assistive technologies, such as screen readers. The information of the website is accessible with different screen readers, such as JAWS.{" "}
                <Link href="/nehru-portal/screen-reader-access" style={{ color: "#a52216", textDecoration: "underline" }}>
                  Read More
                </Link>
              </p>

              {/* Using the Search Facility */}
              <h3 style={{ color: "#a52216", fontWeight: "bold", fontSize: "1.05em", marginTop: "25px", marginBottom: "12px" }}>
                Using the Search Facility
              </h3>
              <p style={{ marginBottom: "20px" }}>
                The Search facility is located at the top right hand corner of all the pages. The Basic Search enables you to search for a website using word OR phrase in site Title OR URL.
              </p>

              {/* What is RSS Feed */}
              <h3 style={{ color: "#a52216", fontWeight: "bold", fontSize: "1.05em", marginTop: "25px", marginBottom: "12px" }}>
                What is RSS Feed and how to use it?
              </h3>
              <p style={{ marginBottom: "12px" }}>
                RSS (Rich Site Summary) is a format for delivering regularly changing web content. Many news-related sites, web blogs and other online publishers syndicate their content as an RSS Feed to whoever wants it.
              </p>
              <p style={{ marginBottom: "12px" }}>
                RSS solves any problem for people who regularly use the web. It allows you to easily stay informed by retrieving the latest content from the sites you are interested in. You save time by not needing to visit each site individually. You ensure your privacy, by not needing to join each site's email newsletter.
              </p>
              <p style={{ marginBottom: "12px" }}>
                Feed Reader or News Aggregator software allow you to grab the RSS feeds from various sites and display them for you to read and use.
              </p>
              <p style={{ marginBottom: "12px" }}>
                A variety of RSS Readers are available for different platforms. Some popular feed readers include{" "}
                <ExtLink href="http://www.amphetadesk.com/" label="Amphetadesk" /> (Windows, Linux, Mac),{" "}
                <ExtLink href="http://www.feedreader.com/" label="Feed Reader" /> (Windows), and{" "}
                <ExtLink href="https://www.newsgator.com/" label="News Gator" /> (Windows - integrates with Outlook). There are also a number of web-based feed readers available.{" "}
                <ExtLink href="https://my.yahoo.com/" label="MyYahoo" />,{" "}
                <ExtLink href="http://www.bloglines.com/" label="Bloglines" />, and{" "}
                <ExtLink href="http://google.com/reader" label="Google Reader" /> are popular web-based feed readers. Once you have your Feed Reader, it is a matter of finding sites that syndicate content and adding their RSS feed to the list of feeds your Feed Reader checks. Many sites display a small icon with the acronyms RSS, XML, or RDF to let you know a feed is available.
              </p>
              <p style={{ marginBottom: "20px" }}>
                Once you pick an RSS feed reader, it is time to subscribe to RSS feeds.
              </p>

              {/* How to Subscribe RSS Feed */}
              <h3 style={{ color: "#a52216", fontWeight: "bold", fontSize: "1.05em", marginTop: "25px", marginBottom: "12px" }}>
                How to Subscribe RSS Feed?
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "25px" }}>
                {[
                  "Follow the instructions of your RSS feed reader. Each RSS feed reader is a little different.",
                  "On a website or blog with a feed, find the RSS icon or button, left click, and see if the RSS Feed has information to help subscribe.",
                  "On a website or blog with a feed, find the RSS icon or button, right click, copy link location, and paste the URL into your RSS feed reader.",
                  "On a website or blog with a feed, find the button for your particular RSS Feed Reader, click and follow instructions."
                ].map((item, index) => (
                  <div key={index} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <span style={{ color: "#a52216", fontWeight: "bold", userSelect: "none" }}>&gt;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Sitemap */}
              <h3 style={{ color: "#a52216", fontWeight: "bold", fontSize: "1.05em", marginTop: "25px", marginBottom: "12px" }}>
                Sitemap
              </h3>
              <p style={{ marginBottom: "20px" }}>
                You can visit{" "}
                <Link href="/nehru-portal/sitemap" style={{ color: "#a52216", textDecoration: "underline" }}>
                  Sitemap
                </Link>{" "}
                page to get an overall view of the contents of this site. You can also navigate around the site by clicking on the Sitemap link.
              </p>

              {/* Feedback/Suggestion */}
              <h3 style={{ color: "#a52216", fontWeight: "bold", fontSize: "1.05em", marginTop: "25px", marginBottom: "12px" }}>
                Feedback/Suggestion
              </h3>
              <p style={{ marginBottom: "20px" }}>
                You can use the{" "}
                <Link href="/nehru-portal/feedback" style={{ color: "#a52216", textDecoration: "underline" }}>
                  Feedback Form
                </Link>{" "}
                to submit your comments, feedback, suggestions and ideas for improvements to The Nehru Memorial Museum and Library.
              </p>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
