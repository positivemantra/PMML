"use client";

import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>

      {/* MAIN FOOTER */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className={`${styles.footerGrid} items-stretch w-full`}>

          {/* COL 1 — Important Links */}
          <div>
            <h4 className={styles.columnTitle}>
              Important Links
            </h4>
            <div className={styles.linksWrapper}>
              {[
                { name: "RTI", href: "/rti" },
                { name: "Sitemap", href: "/sitemap" },
                { name: "Disclaimer", href: "/disclaimer" },
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms & Conditions", href: "/terms-conditions" },
                { name: "Help", href: "/help" },
                { name: "Copyright Policy", href: "/copyright-policy" },
                { name: "Hyperlink Policy", href: "/hyperlink-policy" },
                { name: "Refund & Cancellation Policy", href: "/refund-cancellation-policy" },
              ].map((link, idx, arr) => (
                <React.Fragment key={link.name}>
                  {idx > 0 && <span className={styles.linkSeparator}>|</span>}
                  <a href={link.href} className={styles.linkElement}>
                    {link.name}
                  </a>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* COL 2 — Explore */}
          <div className="lg:border-l lg:border-[#1e3a6a] lg:pl-6">
            <h4 className={styles.columnTitle}>
              Explore
            </h4>
            <div className={styles.linksWrapper}>
              {([
                { name: "Nehru Portal", href: "/nehru-portal" } as { name: string; href: string; target?: string; rel?: string; },
                { name: "Tenders", href: "/tenders" },
                { name: "Vacancies", href: "/vacancies" }
              ]).map((link, idx) => (
                <React.Fragment key={link.name}>
                  {idx > 0 && <span className={styles.linkSeparator}>|</span>}
                  <a
                    href={link.href}
                    target={link.target}
                    rel={link.rel}
                    className={styles.linkElement}
                  >
                    {link.name}
                  </a>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* COL 3 — Connect With Us */}
          <div className="lg:border-l lg:border-[#1e3a6a] lg:pl-6">
            <h4 className={styles.columnTitle}>
              Connect With Us
            </h4>

            {/* Social Block */}
            <div className={styles.socialWrapper}>
              <div className={styles.socialRow}>
                {/* Facebook */}
                <a href="https://www.facebook.com/pmsangrahalaya?rdid=KTTddJ8iU4wLwF9W&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1KEEYkm99T%2F#" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.socialIconFb}`} title="Facebook">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" className={styles.svgIcon}>
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                
                {/* X (Twitter) */}
                <a href="https://x.com/PMSangrahalaya" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.socialIconX}`} title="X">
                  <svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor" className={styles.svgIcon}>
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/pmsangrahalaya" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.socialIconIg}`} title="Instagram">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>

                {/* YouTube */}
                <a href="https://www.youtube.com/@nehrumemoriallibrary" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.socialIconYt}`} title="YouTube">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" className={styles.svgIcon}>
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.122C19.528 3.545 12 3.545 12 3.545s-7.528 0-9.388.496a3.003 3.003 0 0 0-2.11 2.122A30.062 30.062 0 0 0 0 12c0 2.807.19 5.617.49 6.163a3.003 3.003 0 0 0 2.11 2.122c1.86.496 9.388.496 9.388.496s7.528 0 9.388-.496a3.002 3.002 0 0 0 2.11-2.122A30.058 30.058 0 0 0 24 12a30.058 30.058 0 0 0-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* COL 4 — Contact QR */}
          <div className="lg:border-l lg:border-[#1e3a6a] lg:pl-6 flex flex-col justify-start">
            <h4 className={styles.columnTitle}>
              Share Feedback
            </h4>
            <div className="mt-0.5">
              <img
                src="/PMML CONTACT US.png"
                alt="PMML Contact Us QR"
                className="object-contain flex-shrink-0 bg-white p-1 rounded-md"
                style={{ width: "60px", height: "60px" }}
              />
            </div>
          </div>

          {/* COL 5 — Ministry of Culture */}
          <div className="lg:border-l lg:border-[#1e3a6a] lg:pl-6 flex flex-col justify-start">
            <div className="mt-1.5">
              <a
                href="https://culture.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 select-none hover:opacity-90 transition-opacity"
              >
                <img
                  src="/hey.png"
                  alt="National Emblem of India"
                  className="h-10 w-auto object-contain flex-shrink-0 invert mix-blend-screen"
                />
                <div className="flex flex-col justify-center items-start text-left leading-tight">
                  <span className="text-[10px] font-bold text-white font-sans">संस्कृति मंत्रालय</span>
                  <span className="text-[10.5px] font-bold text-white font-sans tracking-wide">Ministry of Culture</span>
                  <span className="text-[7.5px] font-semibold text-gray-300 font-sans tracking-wider">GOVERNMENT OF INDIA</span>
                </div>
              </a>
            </div>
            <div className={`${styles.visitorInfo} mt-3.5`}>
              <span>Visitors: 107488</span>
              <span className={styles.visitorSeparator}>|</span>
              <span>Last Updated: 15-July-2026</span>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className={styles.bottomBar}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p className={styles.bottomText}>
            © 2026 Prime Ministers Museum &amp; Library. All Rights Reserved.
          </p>
          <div className={styles.bottomText}>
            An Autonomous Body of Ministry of Culture
          </div>
        </div>
      </div>

    </footer>
  );
}
