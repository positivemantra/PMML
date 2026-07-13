"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import NehruMenuBar from "./NehruMenuBar";

export default function NehruHeader() {
  const { lang, setLang, fontSize, setFontSize, theme, setTheme, t } = useApp();

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value as "en" | "hi");
  };

  return (
    <header className="select-none">
      <div className="topHeader">
        <div className="container">
          <div className="topSection cf">
            {/* Top Bar Left Links (Removed Feedback, Sitemap, Contact Us) */}
            <div className="toplink"></div>

            {/* Top Bar Right — all tools in one flex row */}
            <div className="rightpart">
              <div style={{ display: "flex", alignItems: "center", gap: "8px", height: "100%", justifyContent: "flex-end" }}>

                {/* Skip / Screen Reader links */}
                <a tabIndex={1} href="#main-content" title="Skip to Main Content"
                  style={{ fontSize: "12px", color: "#555", textDecoration: "none", whiteSpace: "nowrap" }}>
                  {t("skipToMainContent")}
                </a>
                <span style={{ color: "#aaa", fontSize: "11px" }}>|</span>
                <Link href="/nehru-portal/screen-reader-access" title="Screen Reader Access"
                  style={{ fontSize: "12px", color: "#555", textDecoration: "none", whiteSpace: "nowrap" }}>
                  {t("screenReaderAccess")}
                </Link>

                {/* Spacer */}
                <span style={{ color: "#aaa", fontSize: "11px", marginLeft: "4px" }}>|</span>

                {/* Font size buttons: A  A+ */}
                <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                  <button type="button" onClick={() => setFontSize("normal")} title="Normal Font Size"
                    style={{ background: "none", border: "none", cursor: "pointer", fontSize: "13px", fontWeight: fontSize === "normal" ? 700 : 400, color: "#333", padding: "0 2px", lineHeight: 1 }}>
                    A
                  </button>
                  <button type="button" onClick={() => setFontSize("large")} title="Increase Font Size"
                    style={{ background: "none", border: "none", cursor: "pointer", fontSize: "15px", fontWeight: fontSize !== "normal" ? 700 : 400, color: "#333", padding: "0 2px", lineHeight: 1 }}>
                    A+
                  </button>
                </div>

                {/* Contrast toggle boxes: [A] [A] */}
                <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                  <button type="button" onClick={() => setTheme("normal")} title="Standard View"
                    style={{
                      width: "22px", height: "22px",
                      border: "1px solid #999",
                      borderRadius: "2px",
                      cursor: "pointer",
                      background: "#fff",
                      color: "#333",
                      fontSize: "12px",
                      fontWeight: 700,
                      padding: 0,
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      lineHeight: "22px",
                      boxShadow: theme === "normal" ? "0 0 0 2px #666" : "none",
                    }}>A</button>
                  <button type="button" onClick={() => setTheme("contrast")} title="High Contrast View"
                    style={{
                      width: "22px", height: "22px",
                      border: "1px solid #111",
                      borderRadius: "2px",
                      cursor: "pointer",
                      background: "#111",
                      color: "#fff",
                      fontSize: "12px",
                      fontWeight: 700,
                      padding: 0,
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      lineHeight: "22px",
                      boxShadow: theme === "contrast" ? "0 0 0 2px #000" : "none",
                    }}>A</button>
                </div>

                {/* Language dropdown — transparent bg matches header parchment */}
                <div style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
                  <select
                    value={lang}
                    onChange={(e) => setLang(e.target.value as "en" | "hi")}
                    style={{
                      appearance: "none",
                      WebkitAppearance: "none",
                      border: "1px solid #bbb",
                      borderRadius: "3px",
                      padding: "3px 26px 3px 10px",
                      fontSize: "13px",
                      color: "#333",
                      background: "transparent",  /* lets header background show through */
                      cursor: "pointer",
                      fontWeight: 500,
                      outline: "none",
                      minWidth: "78px",
                      lineHeight: "20px",
                    }}
                  >
                    <option value="en" style={{ background: "#f0ebe0" }}>English</option>
                    <option value="hi" style={{ background: "#f0ebe0" }}>हिन्दी</option>
                  </select>
                  {/* Custom chevron ∨ */}
                  <span style={{
                    position: "absolute", right: "7px", pointerEvents: "none",
                    color: "#555", fontSize: "10px", lineHeight: 1, top: "50%", transform: "translateY(-50%)",
                  }}>&#8964;</span>
                </div>

              </div>
            </div>
          </div>

          {/* Logo */}
          <div className="logo">
            <h1 className="alignLeft" id="logo">
              <Link href="/nehru-portal" title="Nehru Portal">
                <img src="/sites/all/themes/nhp/logo.png" alt="Nehru Portal" width="417" height="100" />
              </Link>
            </h1>
          </div>

          {/* Government of India Logo */}
          <div className="govLogo mrgT10">
            <div className="region region-headergovlogo">
              <div id="block-block-1" className="block block-block">
                <div className="content">
                  <img src="/sites/all/themes/nhp/images/GovernmentOfIndia.png" title="Government Of India" alt="Government Of India" width="292" height="85" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky navigation menu bar */}
      <NehruMenuBar />
    </header>
  );
}
