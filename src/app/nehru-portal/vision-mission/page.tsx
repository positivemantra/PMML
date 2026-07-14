"use client";

import React from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";
import { useApp } from "@/context/AppContext";

export default function VisionMissionPage() {
  const { theme } = useApp();
  const isContrast = theme === "contrast";
  const headerColor = isContrast ? "#ffffff" : "#a52216";
  const textColor = isContrast ? "#ffffff" : "#393939";
  const subHeaderColor = isContrast ? "#ffff00" : "#3b3614";

  return (
    <>
      <TopBar />
      <Header />
      <main id="main-content" className="w-full flex-1 innerContent text-left select-none">
        <div className="container">
          <div className="breadCrumbArea cf">
            <div className="breadcrumb">
              <Link href="/nehru-portal">Home</Link>
              <span>Vision & Mission</span>
            </div>
          </div>
          
          <div className="spaceArea">
            <h2 style={{ color: headerColor, fontSize: "2em", fontWeight: "bold", marginBottom: "20px" }}>
              Vision & Mission
            </h2>
            
            <div style={{ color: textColor, fontSize: "14px", lineHeight: "1.6" }}>
              <h3 style={{ color: subHeaderColor, fontSize: "1.5em", fontWeight: "bold", margin: "20px 0 10px 0" }}>
                VISION
              </h3>
              <p style={{ textAlign: "justify", marginBottom: "20px" }}>
                Countries honour key figures in their history in a host of ways. Our institution not only honours the memory but seeks to take forward key elements of the vision of India&apos;s first Prime Minister Jawaharlal Nehru. Freedom fighter and patriot, writer and statesman, planner and orator, Nehru&apos;s own life embodied a wider humanist vision. The Nehru Memorial Museum and Library seeks to give a glimpse of Jawaharlal Nehru&apos;s life and work and of the great movement to which he gave his all, and a Centre for study and research. It also provides record of and a glimpse into the early years of independent India. The NMML aims to contribute to a better understanding of the man and his times by succeeding generations, and thus serve as a link with the past and the future of India.
              </p>

              <h3 style={{ color: subHeaderColor, fontSize: "1.5em", fontWeight: "bold", margin: "20px 0 10px 0" }}>
                MISSION
              </h3>
              <p style={{ textAlign: "justify", marginBottom: "20px" }}>
                The Founders of the NMML decided that the Institution should have three main constituents: a Memorial Museum, a Library on modern India, and a Centre for research in modern Indian history. The Museum at the Teen Murti House has been primarily developed as a personalia museum. The Nehru Museum informs visitors of the achievements and life of Jawaharlal Nehru and highlights the ideals cherished by him. The Library has been planned as a research library on modern and contemporary Indian history and social sciences. Its published resources acquired for the Library include books, pamphlets, newspapers, periodicals and other documentary materials. The Library has a rich collection of material on microfilms and microfiche. The NMML Archives, besides the Jawaharlal Nehru family papers, has acquired papers of nationalist leaders of Modern India and other eminent Indians who distinguished themselves in any field. Also records of non-official organizations, associations and societies which played an important role in the development of modern India are also acquired by the NMML. Our collection of private papers, which is largest in the country, continues to grow steadily with fresh acquisitions almost every month. With extensive collections of documentary films, photos and oral history interviews, it is a premier archive of 20th century India and the contemporary period. The NMML&apos;s Centre for Contemporary Studies has been promoting study and research in the field of modern and contemporary Indian history and organizing lectures, seminars and conferences. The Fellowships - held for fixed tenures - have attracted some of the finest scholars in the country, and the on-going seminars (with 380 plus speakers in 2013) is a platform for young and eminent scholars alike. Later additions include a state of art Planetarium and a Nehru Learning Centre for Children and Youth, both vital for outreach. The entire site covers 45 acres and is a key heritage landmark, including the Herbert Baker building (1928) that houses the Museum, the Library building (1974) designed by the late M.M. Rana and a 14th century hunting lodge of Firuz Shah Tughluq. Along with a sprawling garden, it commemorates and preserves historic heritage site in the heart of New Delhi.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
