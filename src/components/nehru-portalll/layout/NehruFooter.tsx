"use client";

import React from "react";
import { useApp } from "@/context/AppContext";

export default function Footer() {
  const { t } = useApp();

  const handleBackToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="footer select-none" style={{ minHeight: "122px", display: "flex", alignItems: "center" }}>
        <div className="container cf">
          
          {/* Left Column: Copyright only */}
          <div className="leftCol" style={{ float: "none", textAlign: "left" }}>
            {/* Copyright notices */}
            <div className="region region-copyright">
              <div id="block-block-6" className="block block-block">
                <div className="content">
                  <p>&copy; {t("allRightsReserved")}</p>
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
