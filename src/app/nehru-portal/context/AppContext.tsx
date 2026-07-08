"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "hi";
type FontSize = "normal" | "large" | "largest";
type ColorTheme = "normal" | "contrast";

interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  theme: ColorTheme;
  setTheme: (theme: ColorTheme) => void;
  t: (key: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Localized UI dictionary
const translations = {
  en: {
    feedback: "Feedback",
    sitemap: "Sitemap",
    contactUs: "Contact Us",
    skipToMainContent: "Skip to Main Content",
    screenReaderAccess: "Screen Reader Access",
    home: "Home",
    aboutUs: "About Us",
    visionMission: "Vision & Mission",
    objectives: "Objectives",
    familyTree: "Family Tree",
    placesResidence: "Places of Residence",
    swarajBhawan: "Swaraj Bhawan",
    anandBhawan: "Anand Bhawan",
    teenMurtiHouse: "Teen Murti House",
    importantDates: "Important Dates",
    earlyLife: "Early Life",
    marriage: "Marriage",
    freedomStruggle: "Freedom Struggle",
    inPrison: "In Prison",
    primeMinister: "Prime Minister",
    galleries: "Galleries",
    photos: "Photos",
    audios: "Audios",
    videos: "Videos",
    cartoons: "Cartoons",
    stamps: "Stamps",
    writings: "Writings",
    nmmlPublications: "NMML Publications",
    books: "Books",
    archives: "Archives",
    nehruPapers: "Nehru Papers",
    contemporaries: "Papers of Nehru’s Contemporaries",
    oralHistory: "Oral History",
    tributes: "Tributes",
    indian: "Indian",
    foreign: "Foreign",
    rti: "RTI",
    search: "Search",
    enterKeywords: "Enter Keywords",
    go: "Go",
    backToTop: "Back to Top",
    visitors: "Visitors",
    websiteLastUpdated: "Website last updated on",
    copyrightOwned: "Owned by Nehru Portal, Nehru Memorial Museum & Library.",
    allRightsReserved: "All Rights Reserved, Nehru Portal, Nehru Memorial Museum & Library",
    nationalPortal: "The National Portal of India : External website that opens in a new window",
    knowMore: "Know More",
    recentUpdates: "Recent Updates",
    mediaGallery: "Media Gallery",
    viewAll: "View All",
    close: "Close",
    viewDetails: "View Details",
    backToFamilyTree: "Back to Family Tree",
    born: "Born",
    died: "Died",
    searchPlaceholder: "Search by name..."
  },
  hi: {
    feedback: "प्रतिक्रिया",
    sitemap: "साइटमैप",
    contactUs: "संपर्क करें",
    skipToMainContent: "मुख्य सामग्री पर जाएं",
    screenReaderAccess: "स्क्रीन रीडर एक्सेस",
    home: "होम",
    aboutUs: "हमारे बारे में",
    visionMission: "दृष्टि और मिशन",
    objectives: "उद्देश्य",
    familyTree: "वंशवृक्ष",
    placesResidence: "निवास स्थान",
    swarajBhawan: "स्वराज भवन",
    anandBhawan: "आनंद भवन",
    teenMurtiHouse: "तीनों मूर्ति हाउस",
    importantDates: "महत्वपूर्ण तिथियां",
    earlyLife: "प्रारंभिक जीवन",
    marriage: "विवाह",
    freedomStruggle: "स्वतंत्रता संग्राम",
    inPrison: "जेल में",
    primeMinister: "प्रधानमंत्री",
    galleries: "दीर्घाएँ",
    photos: "तस्वीरें",
    audios: "ऑडियो",
    videos: "वीडियो",
    cartoons: "कार्टून",
    stamps: "टिकट",
    writings: "लेखन",
    nmmlPublications: "एनएमएमएल प्रकाशन",
    books: "पुस्तकें",
    archives: "अभिलेखागार",
    nehruPapers: "नेहरू पेपर्स",
    contemporaries: "नेहरू के समकालीनों के पेपर्स",
    oralHistory: "मौखिक इतिहास",
    tributes: "श्रद्धांजलि",
    indian: "भारतीय",
    foreign: "विदेशी",
    rti: "आरटीआई (RTI)",
    search: "खोजें",
    enterKeywords: "खोज शब्द दर्ज करें",
    go: "जाएं",
    backToTop: "ऊपर जाएं",
    visitors: "आगंतुक",
    websiteLastUpdated: "वेबसाइट अंतिम अपडेट:",
    copyrightOwned: "स्वामित्व नेहरू पोर्टल, नेहरू मेमोरियल संग्रहालय और पुस्तकालय के पास है।",
    allRightsReserved: "सर्वाधिकार सुरक्षित, नेहरू पोर्टल, नेहरू मेमोरियल संग्रहालय और पुस्तकालय",
    nationalPortal: "भारत का राष्ट्रीय पोर्टल: बाहरी वेबसाइट जो एक नई विंडो में खुलती है",
    knowMore: "अधिक जानें",
    recentUpdates: "हाल के अपडेट",
    mediaGallery: "मीडिया गैलरी",
    viewAll: "सभी देखें",
    close: "बंद करें",
    viewDetails: "विवरण देखें",
    backToFamilyTree: "वंशवृक्ष पर वापस जाएं",
    born: "जन्म",
    died: "मृत्यु",
    searchPlaceholder: "नाम से खोजें..."
  }
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>("en");
  const [fontSize, setFontSize] = useState<FontSize>("normal");
  const [theme, setTheme] = useState<ColorTheme>("normal");
  const [mounted, setMounted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [externalUrl, setExternalUrl] = useState("");

  useEffect(() => {
    const savedLang = localStorage.getItem("nehru-lang") as Language;
    const savedFontSize = localStorage.getItem("nehru-fontSize") as FontSize;
    const savedTheme = localStorage.getItem("nehru-theme") as ColorTheme;

    if (savedLang) setLang(savedLang);
    if (savedFontSize) setFontSize(savedFontSize);
    if (savedTheme) setTheme(savedTheme);

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (theme === "contrast") {
      document.body.classList.add("wob");
      document.body.classList.add("theme-contrast");
    } else {
      document.body.classList.remove("wob");
      document.body.classList.remove("theme-contrast");
    }
  }, [theme, mounted]);

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      let target = e.target as HTMLElement | null;
      while (target && target.tagName !== "A") {
        target = target.parentElement;
      }
      if (target && target.tagName === "A") {
        const href = target.getAttribute("href");
        if (href && (href.startsWith("http://") || href.startsWith("https://"))) {
          try {
            const url = new URL(href);
            const isInternal =
              url.hostname === window.location.hostname ||
              url.hostname === "localhost" ||
              url.hostname === "127.0.0.1";
            if (!isInternal) {
              e.preventDefault();
              setExternalUrl(href);
              setShowModal(true);
            }
          } catch (err) {
            // URL parse error, let browser handle normally
          }
        }
      }
    };
    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("nehru-lang", newLang);
  };

  const handleSetFontSize = (newSize: FontSize) => {
    setFontSize(newSize);
    localStorage.setItem("nehru-fontSize", newSize);
  };

  const handleSetTheme = (newTheme: ColorTheme) => {
    setTheme(newTheme);
    localStorage.setItem("nehru-theme", newTheme);
  };

  const t = (key: string): string => {
    if (!translations[lang] || !translations[lang][key as keyof typeof translations["en"]]) {
      return translations["en"][key as keyof typeof translations["en"]] || key;
    }
    return translations[lang][key as keyof typeof translations["en"]];
  };

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang: handleSetLang,
        fontSize,
        setFontSize: handleSetFontSize,
        theme,
        setTheme: handleSetTheme,
        t
      }}
    >
      <div
        className={`${theme === "contrast" ? "theme-contrast" : ""} ${
          fontSize === "large"
            ? "font-large"
            : fontSize === "largest"
            ? "font-largest"
            : ""
        } min-h-full flex flex-col`}
      >
        {children}
      </div>

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999999,
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{
              background: "#ffffff",
              padding: "45px 50px",
              borderRadius: "2px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.25)",
              textAlign: "center",
              maxWidth: "550px",
              width: "90%",
              boxSizing: "border-box",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.5",
                color: "#2d200e",
                margin: "0 0 25px 0",
                fontFamily: "var(--font-sans), sans-serif",
                fontWeight: 500,
              }}
            >
              This link shall take you to an external website. Do you want to continue?
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
              <button
                onClick={() => {
                  window.open(externalUrl, "_blank", "noopener,noreferrer");
                  setShowModal(false);
                }}
                style={{
                  backgroundColor: "#222222",
                  color: "#ffffff",
                  border: "none",
                  padding: "8px 24px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  borderRadius: "2px",
                  minWidth: "75px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
                }}
              >
                Yes
              </button>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  backgroundColor: "#9e9e9e",
                  color: "#ffffff",
                  border: "none",
                  padding: "8px 24px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  borderRadius: "2px",
                  minWidth: "75px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
                }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
