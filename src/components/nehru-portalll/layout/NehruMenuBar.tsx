"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";

/* ─── Design tokens matching nehruportal.nic.in ──────────────────────────── */
const NAV_BG       = "#3b3614";   /* dark olive/army green                    */
const NAV_HOVER    = "#a81b1b";   /* red – hover & active item bg             */
const DROP_BG      = "#cc1111";   /* brighter red – dropdown panel            */
const DROP_HOVER   = "#a00e0e";   /* darker red – dropdown item hover         */
const DROP_BORDER  = "#dd3333";   /* subtle separator between dropdown items  */
const TEXT_COLOR   = "#ffffff";   /* white nav text                           */
const SEARCH_TEXT  = "#d9b863";   /* gold – search input text                 */
const NAV_HEIGHT   = 42;          /* px                                       */

export default function MenuBar() {
  const { lang, t } = useApp();
  const router   = useRouter();
  const pathname = usePathname();
  const [isMobileOpen,   setIsMobileOpen]   = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery,    setSearchQuery]    = useState("");
  const [isSticky,       setIsSticky]       = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  /* ── Search handler ───────────────────────────────────────────────────── */
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (q && q !== "Search" && q !== "खोज") {
      router.push(`/nehru-portal/search?q=${encodeURIComponent(q)}`);
    }
  };

  /* ── Sticky scroll listener ───────────────────────────────────────────── */
  useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    const offset = el.getBoundingClientRect().top + window.scrollY;
    const onScroll = () => setIsSticky(window.scrollY >= offset);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close dropdown on outside click ─────────────────────────────────── */
  useEffect(() => {
    const close = () => setActiveDropdown(null);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  /* ── Navigation data ──────────────────────────────────────────────────── */
  const navigation = [
    {
      label: t("home"), href: "/nehru-portal", id: "home",
      dropdown: [
        { label: t("aboutUs"),       href: "/nehru-portal/about" },
        { label: t("visionMission"), href: "/nehru-portal/about#vision-mission" },
        { label: t("objectives"),    href: "/nehru-portal/about#objectives" },
      ],
    },
    { label: t("familyTree"), href: "/nehru-portal/family-tree", id: "family-tree" },
    {
      label: t("placesResidence"), href: "/nehru-portal/places", id: "places",
      dropdown: [
        { label: t("swarajBhawan"),  href: "/nehru-portal/swaraj-bhawan" },
        { label: t("anandBhawan"),   href: "/nehru-portal/anand-bhawan" },
        { label: t("teenMurtiHouse"),href: "/nehru-portal/teen-murti-house" },
      ],
    },
    {
      label: t("importantDates"), href: "/nehru-portal/important-dates", id: "important-dates",
      dropdown: [
        { label: t("earlyLife"),       href: "/nehru-portal/early-life" },
        { label: t("marriage"),        href: "/nehru-portal/marriage" },
        { label: t("freedomStruggle"), href: "/nehru-portal/freedom-struggle" },
        { label: t("inPrison"),        href: "/nehru-portal/prison" },
        { label: t("primeMinister"),   href: "/nehru-portal/prime-minister" },
      ],
    },
    {
      label: t("galleries"), href: "/nehru-portal/galleries", id: "galleries",
      dropdown: [
        { label: t("photos"),   href: "/nehru-portal/galleries/photos" },
        { label: t("audios"),   href: "/nehru-portal/galleries/audios" },
        { label: t("videos"),   href: "/nehru-portal/galleries/videos" },
        { label: t("cartoons"), href: "/nehru-portal/galleries/cartoons" },
        { label: t("stamps"),   href: "/nehru-portal/galleries/stamps" },
      ],
    },
    { label: t("writings"), href: "/nehru-portal/writings", id: "writings" },
    {
      label: t("nmmlPublications"), href: "/nehru-portal/publications", id: "publications",
      dropdown: [
        { label: t("books"), href: "/nehru-portal/books" },
      ],
    },
    {
      label: t("archives"), href: "/nehru-portal/nehru-papers", id: "archives",
      dropdown: [
        { label: t("nehruPapers"),    href: "/nehru-portal/nehru-papers" },
        { label: t("contemporaries"), href: "/nehru-portal/contemporaries" },
      ],
    },
    { label: t("oralHistory"), href: "/nehru-portal/oral-history", id: "oral-history" },
    {
      label: t("tributes"), href: "/nehru-portal/tributes", id: "tributes",
      dropdown: [
        { label: t("indian"),  href: "/nehru-portal/tributes/indian" },
        { label: t("foreign"), href: "/nehru-portal/tributes/foreign" },
      ],
    },
  ];

  /* ── Styles ───────────────────────────────────────────────────────────── */
  const barStyle: React.CSSProperties = {
    background:   NAV_BG,
    width:        "100%",
    zIndex:       1000,
    ...(isSticky ? { position: "fixed", top: 0, left: 0, right: 0, boxShadow: "0 2px 8px rgba(0,0,0,0.45)" } : {}),
  };

  const innerStyle: React.CSSProperties = {
    display:       "flex",
    alignItems:    "center",
    maxWidth:      "1240px",
    margin:        "0 auto",
    padding:       "0 12px",
    height:        `${NAV_HEIGHT}px`,
    position:      "relative",
  };

  const ulStyle: React.CSSProperties = {
    display:    "flex",
    listStyle:  "none",
    margin:     0,
    padding:    0,
    height:     "100%",
    alignItems: "stretch",
    flex:       1,
  };

  const getLiStyle = (id: string, href: string): React.CSSProperties => {
    const isActive = activeDropdown === id;
    return {
      position:   "relative",
      display:    "flex",
      alignItems: "stretch",
      background: isActive ? NAV_HOVER : "transparent",
      transition: "background 0.15s",
    };
  };

  const linkStyle: React.CSSProperties = {
    color:          TEXT_COLOR,
    textDecoration: "none",
    fontSize:       "12px",
    fontWeight:     500,
    padding:        "0 7px",
    display:        "flex",
    alignItems:     "center",
    whiteSpace:     "nowrap",
    letterSpacing:  "0.01em",
  };

  const dropdownUlStyle: React.CSSProperties = {
    position:        "absolute",
    top:             "100%",
    left:            0,
    background:      DROP_BG,
    listStyle:       "none",
    margin:          0,
    padding:         0,
    minWidth:        "155px",
    zIndex:          2000,
    boxShadow:       "2px 3px 6px rgba(0,0,0,0.3)",
  };

  const dropItemStyle: React.CSSProperties = {
    borderBottom: `1px solid ${DROP_BORDER}`,
  };

  const dropLinkStyle: React.CSSProperties = {
    display:        "block",
    color:          TEXT_COLOR,
    textDecoration: "none",
    fontSize:       "13px",
    padding:        "9px 14px",
    whiteSpace:     "nowrap",
  };

  /* ── Search styles ────────────────────────────────────────────────────── */
  const searchWrapStyle: React.CSSProperties = {
    display:    "flex",
    alignItems: "center",
    gap:        0,
    marginLeft: "auto",
    marginRight: "20px",
    flexShrink: 0,
    border:     "1px solid #d9b863",
    borderRadius: "4px",
    overflow:   "hidden",
    background: "#ffffff",
  };

  const searchInputStyle: React.CSSProperties = {
    background:  "transparent",
    border:      "none",
    color:       "#333333",
    fontSize:    "12px",
    padding:     "5px 8px 5px 6px",
    width:       "120px",
    outline:     "none",
  };

  /* ── Mobile toggle ────────────────────────────────────────────────────── */
  const hamburgerStyle: React.CSSProperties = {
    display:       "none",
    flexDirection: "column",
    gap:           "4px",
    background:    "none",
    border:        "none",
    cursor:        "pointer",
    padding:       "6px",
    marginRight:   "10px",
  };

  return (
    <>
      {/* Spacer prevents page-jump when bar becomes fixed */}
      {isSticky && <div style={{ height: `${NAV_HEIGHT}px` }} aria-hidden="true" />}

      <style>{`
        .nhp-nav-link:hover { background: ${NAV_HOVER} !important; }
        .nhp-drop-link:hover { background: ${DROP_HOVER} !important; }
        .nhp-back-to-pmml-link:hover { background: #d85c15 !important; }
        @media (max-width: 768px) {
          .nhp-nav-ul { display: none !important; flex-direction: column !important; height: auto !important; }
          .nhp-nav-ul.open { display: flex !important; }
          .nhp-hamburger { display: flex !important; }
          .nhp-bar-inner { flex-wrap: wrap; height: auto !important; padding: 8px 12px !important; }
          .nhp-nav-li { width: 100%; }
          .nhp-dropdown-ul { position: static !important; width: 100% !important; box-shadow: none !important; }
          .nhp-search-wrap { margin-left: 0 !important; margin-top: 8px; width: 100%; }
          .nhp-search-input { width: 100% !important; }
          .nhp-back-to-pmml-li { padding: 10px 14px !important; width: 100% !important; box-sizing: border-box; }
          .nhp-back-to-pmml-link { width: 100% !important; justify-content: center; }
        }
      `}</style>

      <nav ref={navRef} style={barStyle} aria-label="Main navigation" id="navigationSection">
        <div className="nhp-bar-inner" style={innerStyle}>

          {/* Mobile hamburger */}
          <button
            className="nhp-hamburger"
            style={hamburgerStyle}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            {[0,1,2].map(i => (
              <span key={i} style={{ width:"22px", height:"2px", background: TEXT_COLOR, display:"block" }} />
            ))}
          </button>

          {/* Nav items */}
          <ul
            className={`nhp-nav-ul${isMobileOpen ? " open" : ""}`}
            style={ulStyle}
          >
            {navigation.map((item, idx) => (
              <li
                key={idx}
                className="nhp-nav-li"
                style={getLiStyle(item.id, item.href)}
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
                onClick={(e) => {
                  if (item.dropdown) {
                    e.stopPropagation();
                    setActiveDropdown(activeDropdown === item.id ? null : item.id);
                  }
                }}
              >
                <Link
                  href={item.href}
                  className="nhp-nav-link"
                  style={linkStyle}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.label}
                </Link>

                {/* Dropdown */}
                {item.dropdown && activeDropdown === item.id && (
                  <ul style={dropdownUlStyle}>
                    {item.dropdown.map((sub, sIdx) => (
                      <li key={sIdx} style={dropItemStyle}>
                        <Link
                          href={sub.href}
                          className="nhp-drop-link"
                          style={dropLinkStyle}
                          onClick={() => { setActiveDropdown(null); setIsMobileOpen(false); }}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li
              className="nhp-nav-li nhp-back-to-pmml-li"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0 10px",
              }}
            >
              <Link
                href="/"
                className="nhp-back-to-pmml-link"
                onClick={() => setIsMobileOpen(false)}
                style={{
                  backgroundColor: "#f37021",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "600",
                  padding: "5px 12px",
                  borderRadius: "4px",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  transition: "background-color 0.15s ease",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                Back to PMML
              </Link>
            </li>
          </ul>

          {/* Search */}
          <form onSubmit={handleSearch} className="nhp-search-wrap" style={searchWrapStyle}>
            <span style={{ display: "flex", alignItems: "center", paddingLeft: "8px", color: "#3b3614" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14" height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              type="text"
              className="nhp-search-input"
              style={searchInputStyle}
              placeholder={lang === "hi" ? "खोज" : "Search"}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => { if (searchQuery === "Search" || searchQuery === "खोज") setSearchQuery(""); }}
              onBlur={() => { if (!searchQuery.trim()) setSearchQuery(lang === "hi" ? "खोज" : "Search"); }}
              maxLength={128}
              aria-label="Search"
            />
            <button type="submit" style={{ display: "none" }} aria-label="Submit search" />
          </form>

        </div>
      </nav>
    </>
  );
}
