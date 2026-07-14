"use client";

import React from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";
import { useApp } from "@/context/AppContext";

export default function ObjectivesPage() {
  const { theme } = useApp();
  const isContrast = theme === "contrast";
  const headerColor = isContrast ? "#ffffff" : "#a52216";
  const textColor = isContrast ? "#ffffff" : "#393939";

  const listItems = [
    "To establish a Museum of Jawaharlal Nehru personalia, memorabilia, mementos and other objects pertaining to his life and the Indian freedom movement.",
    "To acquire, maintain and preserve the personal papers and other historical materials pertaining to Jawaharlal Nehru and papers relating to his life and work.",
    "To acquire, maintain and preserve the papers of Jawaharlal Nehru's Family, close friends, colleagues, associates and officials who served in his administration and the records of organizations, associations and societies with which he was intimately concerned.",
    "To acquire, maintain and preserve papers of nationalist leaders of Modern India and other eminent Indians who distinguished themselves in any field.",
    "To arrange for the exhibition of the collections of the museum at different places in India and abroad.",
    "To collaborate with institutions engaged in similar activities in India and abroad with a view to further the aims and objects of the society.",
    "To establish and maintain a library of books, pamphlets, newspapers, periodicals, microfilms, still photographs, motion pictures, sound recordings and materials bearing on the history of Modern India, with special reference to the freedom movement.",
    "To make available to the public in a suitable place the collections of papers and the library resources for serious study and research.",
    "To organize, undertake, conduct, encourage and promote study and research in the field of modern Indian history, especially the study of Indian Nationalism, and the life and work of Jawaharlal Nehru.",
    "To organize lectures, seminars, symposia, conferences, and exhibitions in India and abroad to promote and encourage the study of the modern Indian history.",
    "To undertake and to promote publication of books, monographs, periodicals and papers incorporating the results of the studies and research carried out at the Museum and Library.",
    "To foster academic contacts within India as well as with other countries through exchange of personnel and research materials.",
    "To institute and award fellowships, scholarships and monetary assistance in accordance with the rules and bye-laws.",
    "To undertake all such activities as are incidentally necessary or conducive to the attainment of all or any of the above-mentioned objects."
  ];

  return (
    <>
      <TopBar />
      <Header />
      <main id="main-content" className="w-full flex-1 innerContent text-left select-none">
        <div className="container">
          <div className="breadCrumbArea cf">
            <div className="breadcrumb">
              <Link href="/nehru-portal">Home</Link>
              <span>Objectives</span>
            </div>
          </div>
          
          <div className="spaceArea">
            <h2 style={{ color: headerColor, fontSize: "2em", fontWeight: "bold", marginBottom: "20px" }}>
              Objectives
            </h2>
            
            <div style={{ color: textColor, fontSize: "14px", lineHeight: "1.6" }}>
              <ul className="bulletText" style={{ listStyleType: "none", paddingLeft: 0 }}>
                {listItems.map((item, idx) => (
                  <li 
                    key={idx} 
                    style={{ 
                      paddingLeft: "24px", 
                      position: "relative",
                      marginBottom: "14px",
                      textAlign: "justify"
                    }}
                  >
                    <span 
                      style={{ 
                        position: "absolute", 
                        left: 0, 
                        top: "2px", 
                        color: isContrast ? "#ffff00" : "#a52216", 
                        fontWeight: "bold" 
                      }}
                    >
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
