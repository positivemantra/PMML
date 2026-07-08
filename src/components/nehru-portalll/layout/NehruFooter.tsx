"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

export default function Footer() {
  const { t } = useApp();
  const [visitorCount, setVisitorCount] = useState(8338587); // Padded count from original screenshot

  useEffect(() => {
    // Increment count slightly on load
    const randomIncrement = Math.floor(Math.random() * 5) + 1;
    setVisitorCount((prev) => prev + randomIncrement);
  }, []);

  const handleBackToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="footer select-none">
        <div className="container cf">
          
          {/* Left Column: Analytics, Menus, Copyright */}
          <div className="leftCol">
            
            {/* Site Analytics */}
            <div className="region region-site-analytics">
              <div id="block-visitors-count-site-visitors-count" className="block block-visitors-count">
                <div className="content">
                  <p>
                    <span className="lastUpdate">
                      {t("websiteLastUpdated")}: 07/ 07/ 2022
                    </span>{" "}
                    | {t("visitors")}:{" "}
                    <span
                      style={{
                        backgroundColor: "rgba(0,0,0,0.4)",
                        color: "#d9b863",
                        border: "1px solid rgba(217,184,99,0.3)",
                        padding: "2px 6px",
                        fontFamily: "monospace",
                        fontWeight: "bold",
                        letterSpacing: "2px",
                        fontSize: "13px",
                        borderRadius: "2px"
                      }}
                    >
                      {String(visitorCount).padStart(8, "0")}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Policy Menu */}
            <div className="region region-footer-menu">
              <div id="block-menu-menu-footer-menu" className="block block-menu">
                <div className="content">
                  <ul className="menu">
                    <li className="first leaf">
                      <Link href="/nehru-portal/terms-conditions" title="Terms & Conditions">
                        Terms & Conditions
                      </Link>
                    </li>
                    <li className="leaf">
                      <Link href="/nehru-portal/privacy-policy" title="Privacy Policy">
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="leaf">
                      <Link href="/nehru-portal/copyright-policy" title="Copyright Policy">
                        Copyright Policy
                      </Link>
                    </li>
                    <li className="leaf">
                      <Link href="/nehru-portal/hyperlinking-policy" title="Hyperlinking Policy">
                        Hyperlinking Policy
                      </Link>
                    </li>
                    <li className="leaf">
                      <Link href="/nehru-portal/disclaimer" title="Disclaimer">
                        Disclaimer
                      </Link>
                    </li>
                    <li className="last leaf">
                      <Link href="/nehru-portal/help" title="Help">
                        Help
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Copyright notices */}
            <div className="region region-copyright">
              <div id="block-block-6" className="block block-block">
                <div className="content">
                  <p>&copy; {t("copyrightOwned")}</p>
                  <p>&copy; {t("allRightsReserved")}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: India.gov logo and Share widgets */}
          <div className="rightCol">
            <div className="region region-footer-right">
              <div id="block-block-7" className="block block-block">
                <div className="content">
                  <div className="indiaGov">
                    <a
                      target="_blank"
                      href="https://india.gov.in/"
                      rel="noopener noreferrer"
                      title={t("nationalPortal")}
                    >
                      <img
                        src="/sites/all/themes/nhp/images/indiagov.jpg"
                        alt="National Portal of India"
                        width="116"
                        height="31"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </footer>

      {/* Back to Top Link */}
      <a
        href="#wrapper"
        title="Back to Top"
        id="backtotop"
        onClick={handleBackToTop}
        className="cursor-pointer"
      >
        Back to Top
      </a>
    </>
  );
}
