"use client";

import React from "react";
import Image from "next/image";
import { Spectral } from "next/font/google";
import ArchivesHeroSlider from "@/components/archives/ArchivesHeroSlider";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

interface AcquisitionItem {
  number: number;
  title: string;
  subtitle: string;
  description: string;
}

const ACQUISITIONS: AcquisitionItem[] = [
  {
    number: 1,
    title: "Papers Collected By Prof. K. Warikoo",
    subtitle: "Professor (Retired), Centre for Inner Asian Studies, School of International Studies, JNU",
    description: "Prof. K. Warikoo himself donated a collection of papers collected by him relating to Pak occupied Kashmir, Gilgit-Baltistan, Pamirs, Hindu Kush Himalayas, Ladakh, Xinjiang, India China Border Dispute, Kargil, Jammu and Kashmir, etc. The papers are in Hindi, Urdu and English."
  },
  {
    number: 2,
    title: "Papers Of Anna Hazare",
    subtitle: "Social Activist",
    description: "Shri Anna Hazare himself donated the Collection, which comprises files and documents relating to key public issues and reform movements, including the Lokpal Bill, One Rank One Pension, the Land Acquisition Amendment Bill, Electoral Reforms, and other matters of significance. The papers, covering the period (1998-2019), are mainly in English, Hindi and Marathi."
  },
  {
    number: 3,
    title: "Papers Of Kailash Satyarthi",
    subtitle: "Nobel Peace Laureate and Child Rights Activist",
    description: "The papers of Kailash Satyarthi have been donated by himself. The Collection comprises files and digital records relating to key social issues and reform movements, including child labour, human trafficking, and the rights of children, along with his writings, speeches, and correspondence with eminent personalities on matters of national and international significance. The papers, covering the period 1994-2026, are mainly in English & Hindi."
  },
  {
    number: 4,
    title: "Papers Of Kamal Kishor Goyanka",
    subtitle: "Renowned Hindi Litterateur",
    description: "The papers of Kamal Kishor Goyanka have been donated by his wife, Smt. Kusum Goyanka, and his sons, Shri Sanjay Goyanka and Shri Rahul Goyanka. The Collection comprises files and documents relating to his extensive work on Hindi literature, including material on Munshi Premchand, Pravasi Hindi Sahitya, his scholarly articles, forewords, and correspondence with academicians and others. The papers covering the period 1920-2008 (With Gaps), are mostly in Hindi."
  },
  {
    number: 5,
    title: "Papers Of K. L. Rao",
    subtitle: "Civil Engineer and Former Union Minister of Irrigation and Power",
    description: "The papers of K. L. Rao have been donated by his son, Shri Ashok Rao. The Collection comprises files and documents relating to major irrigation and power projects, including the Nagarjuna Sagar Dam, Ramapada Sagar Project, and the National Water Grid of India, along with his reports, technical studies, speeches, and correspondence with prominent national and international figures on matters of infrastructure development and water resource management. The papers, covering the period 1934-1990, are in English and Hindi."
  },
  {
    number: 6,
    title: "Papers Of Prof. Sukhamoy Chakravarty",
    subtitle: "Indian economist",
    description: "The papers of Prof. Sukhamoy Chakravarty have been donated by his son-in-law, Shri Ramakrishna Ramaswamy. The papers contain his correspondence with Amartya Sen, J. Tinbergen, A.K. Dasgupta, Prof. Joan Robinson, Prof. Ruth Glass, Jagdish Bhagwati, and others. The papers also include his articles, reports, and research papers on the Indian economy, development planning, trade, policymaking, etc."
  },
  {
    number: 7,
    title: "Papers Of Shanta Kumar",
    subtitle: "Former Chief Minister of Himachal Pradesh",
    description: "Shri Shanta Kumar himself donated a small collection of papers containing copies of letters from Shri Shanta Kumar to Shri Narendra Modi relating to one nation, one election, population explosion in India, farmers, Indo-Pakistan relations, revoking of Article 370, etc. The papers also include copies of articles written by Shri Shanta Kumar on various topics such as corruption, democracy, population explosion, poverty, Lokpal Bill, etc."
  },
  {
    number: 8,
    title: "Papers Of Sunderlal Bahuguna",
    subtitle: "Indian environmentalist",
    description: "The papers of late Sunderlal Bahuguna have been donated by his wife Smt. Vimla Bahuguna. The small collection contains articles and statements by late Sunderlal Bahuguna."
  },
  {
    number: 9,
    title: "Papers Of Yashpal",
    subtitle: "Revolutionary and Hindi Author",
    description: "The papers of Yashpal have been donated by his son Shri Anand and collected from his residence at Lucknow. The files contain correspondence with a number of individuals and institutions mainly related to revolutionary activities during freedom movement and Hindi literature such as Ram Singh Bhagel, Dharampal, Hemwati Nandan Bahuguna, P.C Sharma, Parsh, Rajiv Rai, Krishnabal Lochan, Durga Bhabhi, Upendranath 'Ashk' and others. The papers also include Yashpal's writings namely as 'O God! The Children', 'Meri PehliKahani', 'YogkiKhoj' and JhuthaSach. Besides, certificates, manuscripts of his books and press clipping articles by other authors also form part the papers. The papers are from the period of 1930 to 1992 and mainly in Hindi."
  }
];

export default function RecentAcquisitionsContent() {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* ── Subpage Hero Banner ── */}
      <ArchivesHeroSlider />

      {/* ── Main Content Section ── */}
      <section className="w-full py-12 lg:py-16 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Page Heading */}
          <div className="mb-10 text-left">
            <div className="w-12 h-1 bg-[#f37021] mb-2.5" />
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
              Recent Acquisitions
            </h2>
          </div>

          {/* List of Acquisitions */}
          <div className="space-y-6">
            {ACQUISITIONS.map((item) => (
              <div 
                key={item.number} 
                className="bg-[#fafafa] border border-gray-200/60 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300 text-left"
              >
                <h3 className="text-base sm:text-lg font-bold text-[#052356] mb-1">
                  {item.number}. {item.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-gray-500 mb-3">
                  {item.subtitle}
                </p>
                <p className="text-sm sm:text-[15px] text-gray-600 font-medium leading-relaxed text-justify">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
