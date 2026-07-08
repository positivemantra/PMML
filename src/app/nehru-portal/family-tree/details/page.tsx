"use client";

import React, { useState } from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";
import membersData from "@/data/familyTree.json";
import { useApp } from "@/context/AppContext";

interface MemberBio {
  id: string;
  name: string;
  img: string;
  dates: string;
  description: string;
}

export default function FamilyTreeDetailsPage() {
  const { theme } = useApp();
  const members = membersData as MemberBio[];
  const [search, setSearch] = useState("");

  const filteredMembers = members.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  const getImageUrl = (imgPath: string) => {
    if (!imgPath) return "/sites/all/themes/nhp/images/men.jpg";
    if (imgPath.startsWith("http")) return imgPath;
    return imgPath.startsWith("/") ? imgPath : `/${imgPath}`;
  };

  const isContrast = theme === "contrast";

  // Dynamic Theme Colors
  const headerColor = isContrast ? "#ffffff" : "#a52216";
  const headerBorder = isContrast ? "1px solid #444444" : "1px solid #ddd7c6";
  
  const backBtnBg = isContrast ? "#ffff00" : "#a52216";
  const backBtnColor = isContrast ? "#000000" : "#ffffff";
  
  const searchBorder = isContrast ? "1px solid #ffff00" : "1px solid #78620b";
  const searchBg = isContrast ? "#000000" : "#ffffff";
  const searchColor = isContrast ? "#ffffff" : "#312502";
  
  const blockBorder = isContrast ? "1px solid #444444" : "1px solid #dcd7c5";
  const blockBg = isContrast ? "#000000" : "#fbf9f4";

  return (
    <>
      <TopBar />
      <Header />
      <main id="main-content" className="w-full flex-1 innerContent text-left select-none">
        <div className="container">
          {/* Breadcrumb */}
          <div className="breadCrumbArea cf">
            <div className="breadcrumb">
              <Link href="/nehru-portal">Home</Link>
              <Link href="/nehru-portal/family-tree">Family Tree</Link>
              <span>Details</span>
            </div>
          </div>

          <div className="spaceArea">
            {/* Header block with floating back button */}
            <div className="cf" style={{ marginBottom: "25px", borderBottom: headerBorder, paddingBottom: "15px" }}>
              <Link
                href="/nehru-portal/family-tree"
                style={{
                  background: backBtnBg,
                  color: backBtnColor,
                  padding: "8px 18px",
                  borderRadius: "4px",
                  fontSize: "13px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  float: "right",
                  lineHeight: "1.4"
                }}
                className="hover:opacity-90"
              >
                Back to Family Tree
              </Link>
              <h2 style={{ color: headerColor, margin: 0, float: "left", lineHeight: "1.4" }}>
                Family Tree Details
              </h2>
            </div>

            {/* Search Box */}
            <div style={{ marginBottom: "25px" }}>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name..."
                style={{
                  border: searchBorder,
                  borderRadius: "20px",
                  fontSize: "14px",
                  height: "27px",
                  padding: "0 12px",
                  width: "260px",
                  background: searchBg,
                  color: searchColor,
                  outline: "none"
                }}
              />
            </div>

            {/* Alternating layout details block */}
            <div className="familyTreeBlock cf" style={{ border: blockBorder, background: blockBg }}>
              {filteredMembers.map((member, idx) => {
                const isEven = idx % 2 === 1;
                
                // Dynamic block bg
                const blockItemBg = isContrast
                  ? (isEven ? "#222222" : "#000000")
                  : (isEven ? "#ddd7c6" : "transparent");
                
                // Dynamic border and backgrounds for portrait container
                const imgBlockBorder = isContrast ? "1px solid #444444" : (isEven ? "1px solid #9c9686" : "1px solid #dcd7c5");
                const imgBlockBg = isContrast ? "#111111" : "#eae5d8";
                
                const nameColor = isContrast ? "#ffffff" : "#312502";
                const datesColor = isContrast ? "#ffff00" : "#312502";
                const descColor = isContrast ? "#ffffff" : "#312502";

                return (
                  <div
                    key={member.id}
                    id={member.id}
                    className={`familyTreeBox ${isEven ? "even" : ""} cf`}
                    style={{
                      display: "flex",
                      flexDirection: isEven ? "row-reverse" : "row",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      background: blockItemBg,
                      padding: "30px 40px",
                      borderBottom: idx < filteredMembers.length - 1 ? blockBorder : "none",
                      boxSizing: "border-box"
                    }}
                  >
                    {/* Portrait Image Block */}
                    <div
                      className="familyImgBlock"
                      style={{
                        width: "24.350%",
                        border: imgBlockBorder,
                        padding: "5px",
                        textAlign: "center",
                        boxSizing: "border-box",
                        background: imgBlockBg
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={getImageUrl(member.img)}
                        alt={member.name}
                        style={{ width: "100%", height: "auto", display: "block" }}
                      />
                      <div className="familyName" style={{ color: nameColor, fontSize: "14px", padding: "6px 0", fontWeight: "bold" }}>
                        {member.name}
                      </div>
                    </div>

                    {/* Biography Description Box */}
                    <div className="familyTextBox" style={{ width: "72.734%", boxSizing: "border-box" }}>
                      <h4 style={{ fontSize: "18px", color: nameColor, margin: "0 0 4px 0", fontWeight: "bold", fontFamily: "Georgia, serif" }}>
                        {member.name}
                      </h4>
                      {member.dates && (
                        <div className="bornAndDied" style={{ fontSize: "13px", color: datesColor, fontWeight: "bold", marginBottom: "15px" }}>
                          Born/Died: {member.dates}
                        </div>
                      )}
                      <p style={{ fontSize: "14px", color: descColor, lineHeight: "1.6", margin: 0, textAlign: "justify" }}>
                        {member.description}
                      </p>
                    </div>
                  </div>
                );
              })}

              {filteredMembers.length === 0 && (
                <div style={{ padding: "40px", textAlign: "center", color: isContrast ? "#ffffff" : "#312502", fontStyle: "italic" }}>
                  No family members match your search criteria.
                </div>
              )}
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
