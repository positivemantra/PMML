"use client";

import React, { useState } from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";

export default function PrisonPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filterTerms = [
    { id: "first", label: "1st Term", days: "88 days" },
    { id: "second", label: "2nd Term", days: "266 days" },
    { id: "third", label: "3rd Term", days: "12 days" },
    { id: "fourth", label: "4th Term", days: "181 days" },
    { id: "fifth", label: "5th Term", days: "100 days" },
    { id: "sixth", label: "6th Term", days: "614 days" },
    { id: "seventh", label: "7th Term", days: "558 days" },
    { id: "eighth", label: "8th Term", days: "399 days" },
    { id: "ninth", label: "9th Term", days: "1041 days" },
  ];

  const terms = [
    { cat: "first", num: "1st", link: "/nehru-portal/first-imprisonment-6-december-1921-3-march-1922", date: "From 6 December, 1921 To 3 March, 1922", desc: "Lucknow District Jail, 88 days" },
    { cat: "second", num: "2nd", link: "/nehru-portal/second-imprisonment-11-may-1922-31-january-1923", date: "From 11 May, 1922 To 20 May, 1922", desc: "Allahabad District Jail, 10 days" },
    { cat: "second", num: "2nd", link: "/nehru-portal/second-imprisonment-11-may-1922-31-january-1923", date: "From 21 May, 1922 To 31 January, 1923", desc: "Lucknow District Jail, 256 days" },
    { cat: "third", num: "3rd", link: "/nehru-portal/third-imprisonment-22-september-1923-4-october-1923", date: "From 22 September, 1923 To 4 October, 1923", desc: "Nabha Jail, 12 days" },
    { cat: "fourth", num: "4th", link: "/nehru-portal/fourth-imprisonment-14-april-1930-11-october-1930", date: "From 14 April, 1930 To 11 October, 1930", desc: "Naini Central Prison, Allahabad, 181 days" },
    { cat: "fifth", num: "5th", link: "/nehru-portal/fifth-imprisonment-19-october-1930-26-january-1931", date: "From 19 October, 1930 To 26 January, 1931", desc: "Naini Central Prison, Allahabad, 100 days" },
    { cat: "sixth", num: "6th", link: "/nehru-portal/sixth-imprisonment-26-december-1931-30-august-1933", date: "From 26 December, 1931 To 5 February, 1932", desc: "Naini Central Prison, Allahabad, 42 days" },
    { cat: "sixth", num: "6th", link: "/nehru-portal/sixth-imprisonment-26-december-1931-30-august-1933", date: "From 6 February, 1932 To 6 June, 1932", desc: "Bareilly District Jail, 122 days" },
    { cat: "sixth", num: "6th", link: "/nehru-portal/sixth-imprisonment-26-december-1931-30-august-1933", date: "From 6 June, 1932 To 23 August, 1933", desc: "Dehra Dun Jail, 443 days" },
    { cat: "sixth", num: "6th", link: "/nehru-portal/sixth-imprisonment-26-december-1931-30-august-1933", date: "From 24 August, 1933 To 30 August, 1933", desc: "Naini Central Prison, Allahabad, 7 days" },
    { cat: "seventh", num: "7th", link: "/nehru-portal/seventh-imprisonment-12-february-1934-3-september-1935", date: "From 12 February, 1934 To 7 May, 1934", desc: "Alipur Central Jail, Calcutta, 85 days" },
    { cat: "seventh", num: "7th", link: "/nehru-portal/seventh-imprisonment-12-february-1934-3-september-1935", date: "From 8 May, 1934 To 11 August, 1934", desc: "Dehra Dun Jail, 96 days" },
    { cat: "seventh", num: "7th", link: "/nehru-portal/seventh-imprisonment-12-february-1934-3-september-1935", date: "From 23 August, 1934 To 27 August, 1934", desc: "Naini Central Prison, Allahabad, 66 days" },
    { cat: "seventh", num: "7th", link: "/nehru-portal/seventh-imprisonment-12-february-1934-3-september-1935", date: "From 28 October, 1934 To 3 September, 1935", desc: "Almora Jail, 311 days" },
    { cat: "eighth", num: "8th", link: "/nehru-portal/eighth-imprisonment-31-october-1940-3-december-1941", date: "From 31 October, 1940 To 16 November, 1940", desc: "Gorakhpur Jail, 17 days" },
    { cat: "eighth", num: "8th", link: "/nehru-portal/eighth-imprisonment-31-october-1940-3-december-1941", date: "From 17 November, 1940 To 28 February, 1941", desc: "Dehra Dun Jail, 104 days" },
    { cat: "eighth", num: "8th", link: "/nehru-portal/eighth-imprisonment-31-october-1940-3-december-1941", date: "From 1 March, 1941 To 18 April, 1941", desc: "Lucknow District Jail, 49 days" },
    { cat: "eighth", num: "8th", link: "/nehru-portal/eighth-imprisonment-31-october-1940-3-december-1941", date: "From 19 April, 1941 To 3 December, 1941", desc: "Dehra Dun Jail, 229 days" },
    { cat: "ninth", num: "9th", link: "/nehru-portal/ninth-imprisonment-9-august-1942-15-june-1945", date: "From 9 August, 1942 To 28 March, 1945", desc: "Ahmadnagar Fort Prison, 963 days" },
    { cat: "ninth", num: "9th", link: "/nehru-portal/ninth-imprisonment-9-august-1942-15-june-1945", date: "From 30 March, 1945 To 9 June, 1945", desc: "Bareilly Central Prison, 72 days" },
    { cat: "ninth", num: "9th", link: "/nehru-portal/ninth-imprisonment-9-august-1942-15-june-1945", date: "From 10 June, 1945 To 15 June, 1945", desc: "Almora Jail, 6 days" }
  ];

  return (
    <>
      <TopBar />
      <Header />
      <main id="main-content" className="w-full flex-1 innerContent text-left select-none">
        <div className="container">
          <div className="breadCrumbArea cf">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <Link href="/nehru-portal/important-dates">Important Dates</Link>
              <span>In Prison</span>
            </div>
          </div>
          
          <div className="spaceArea">
            <h2 style={{ color: "#a52216" }}>In Prison</h2>
            <div className="text-slate-600 text-xs sm:text-xs md:text-sm leading-relaxed text-justify max-w-none">
              <div className="inPrison select-none text-left">
                <p style={{ color: "#312502", fontSize: "1.286em", marginBottom: "20px", lineHeight: "26px" }}>
                  Jawaharlal Nehru was imprisoned nine times during the freedom struggle and was in jail for 3259 days.
                </p>
                <div className="portfolio-filter">
                  <ul id="filters" className="cf">
                    {filterTerms.map((term, index) => (
                      <li key={term.id} className={index === 0 ? "first" : index === filterTerms.length - 1 ? "last" : ""}>
                        <span
                          className={`filter ${activeFilter === term.id ? "active" : ""}`}
                          onClick={() => setActiveFilter(activeFilter === term.id ? null : term.id)}
                        >
                          {term.label}
                          <br />
                          <span>{term.days}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div id="portfoliolist">
                  <ul id="plist" className="cf">
                    {terms.map((item, index) => {
                      const isVisible = activeFilter === null || activeFilter === item.cat;
                      return (
                        <li
                          key={index}
                          className={`portfolio ${item.cat} ${index === 0 ? "first" : ""}`}
                          style={{ display: isVisible ? "block" : "none" }}
                        >
                          <h4>
                            {item.num.replace("st", "").replace("nd", "").replace("rd", "").replace("th", "")}
                            <sup>{item.num.slice(-2)}</sup>
                            <br />
                            Term
                          </h4>
                          <div className="portfolioDetail">
                            <p>
                              <Link href={item.link} style={{ color: "#1a56db", textDecoration: "underline" }}>{item.date}</Link>
                              <br />
                              <span>{item.desc}</span>
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
