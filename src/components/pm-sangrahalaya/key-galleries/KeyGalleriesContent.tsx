"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Spectral } from "next/font/google";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

interface Gallery {
  id: string;
  title: string;
  menuLabel: string;
  description: string;
  image: string;
  building: 1 | 2;
  category: string;
}

const GALLERIES: Gallery[] = [
  // BUILDING 1
  // Category 1: Constitution Gallery
  {
    id: "making-constitution",
    title: "Making of Indian Constitution",
    menuLabel: "Making of Constitution",
    description: "Relive the intellectual debates and drafting sessions of the Constituent Assembly that established the framework of modern India.",
    image: "/building 1/making of indian constitution.jpg",
    building: 1,
    category: "Constitution Gallery"
  },
  {
    id: "makers-constitution",
    title: "Makers of Indian Constitution",
    menuLabel: "Makers of Constitution",
    description: "A tribute to the visionary members of the Constituent Assembly who labored to frame a representative constitution for a diverse nation.",
    image: "/building 1/makers of indian constitution.jpg",
    building: 1,
    category: "Constitution Gallery"
  },
  {
    id: "partition-1947",
    title: "Partition",
    menuLabel: "Partition",
    description: "A solemn display exploring the massive migration, human stories, and institutional challenges during the partition of 1947.",
    image: "/building 1/partitionnn.jpg",
    building: 1,
    category: "Constitution Gallery"
  },
  {
    id: "india-republic",
    title: "India Becomes Republic",
    menuLabel: "India Becomes Republic",
    description: "Commemorating 26th January 1950, when the Constitution of India came into effect and India transitioned to a sovereign democratic republic.",
    image: "/building 1/republic1.jpg",
    building: 1,
    category: "Constitution Gallery"
  },
  {
    id: "democratic-india-exhibit",
    title: "Democratic India",
    menuLabel: "Democratic India",
    description: "Celebrates the democratic traditions, general elections, and the strength of the voting system that empowers every Indian citizen.",
    image: "/building 1/di.jpg",
    building: 1,
    category: "Constitution Gallery"
  },
  {
    id: "constitutional-amendments-exhibit",
    title: "Constitutional Amendments",
    menuLabel: "Constitutional Amendments",
    description: "Displays the evolution of the Constitution through landmark amendments that addressed emerging socio-economic needs of the republic.",
    image: "/building 1/constitutional.jpg",
    building: 1,
    category: "Constitution Gallery"
  },

  // Category 2: Gallery 1 - Nehru
  {
    id: "nehru-gallery",
    title: "Nehru Gallery",
    menuLabel: "Gallery 1 - Nehru Gallery",
    description: "The Nehru Gallery presents a holistic view of a newly-independent India and the political developments that followed. It talks about the reorganisations of states, the Kashmir War 1947-48, the projects that Pandit Nehru called 'temples' of modern India, the first general elections, among others.",
    image: "/building 1/ng.jpg",
    building: 1,
    category: "Gallery 1 - Nehru"
  },
  {
    id: "tryst-destiny",
    title: "Tryst with Destiny",
    menuLabel: "Tryst with Destiny",
    description: "Experience the iconic, historical speech 'Tryst with Destiny' delivered by Jawaharlal Nehru on the eve of India's independence, welcoming the birth of a free nation.",
    image: "/building 1/tryst of.jpg",
    building: 1,
    category: "Gallery 1 - Nehru"
  },
  {
    id: "india-china-war",
    title: "India China War",
    menuLabel: "India China War",
    description: "A comprehensive archival exhibit documenting the events, maps, military strategies, and national response during the 1962 conflict.",
    image: "/building 1/war.jpg",
    building: 1,
    category: "Gallery 1 - Nehru"
  },
  {
    id: "toshakhana-zone",
    title: "Toshakhana Zone",
    menuLabel: "Toshakhana Zone",
    description: "Explore the collection of precious gifts, artistic crafts, and ceremonial treasures presented to India's Prime Ministers during their official visits abroad.",
    image: "/building 1/giftt.jpg",
    building: 1,
    category: "Gallery 1 - Nehru"
  },
  {
    id: "early-life-journey",
    title: "Early Life & Political Journey till 1946",
    menuLabel: "Early Life & Political Journey",
    description: "Traces the early childhood, academic years, and rise of Jawaharlal Nehru within the Indian National Congress leading up to independence.",
    image: "/building 1/early life and political journey till 1946.jpg",
    building: 1,
    category: "Gallery 1 - Nehru"
  },
  {
    id: "nehru-bedroom",
    title: "Jawaharlal Nehru's Bedroom",
    menuLabel: "Bedroom",
    description: "The preserved bedroom of the first Prime Minister of India, capturing the but simple and elegant setting of his personal life.",
    image: "/building 1/Bedroom1.jpg",
    building: 1,
    category: "Gallery 1 - Nehru"
  },
  {
    id: "nehru-sitting",
    title: "Jawaharlal Nehru's Sitting Room",
    menuLabel: "Sitting Room",
    description: "The historical room where Prime Minister Nehru engaged in discussions with international leaders, diplomats, and close associates.",
    image: "/building 1/Living.jpg",
    building: 1,
    category: "Gallery 1 - Nehru"
  },
  {
    id: "nehru-study",
    title: "Jawaharlal Nehru's Study",
    menuLabel: "Study",
    description: "The private study room lined with books and writing tables where the Prime Minister drafted critical policies and letters.",
    image: "/building 1/Study Room.jpg",
    building: 1,
    category: "Gallery 1 - Nehru"
  },

  // Category 3: Facilities
  {
    id: "reception-1",
    title: "Reception",
    menuLabel: "Reception",
    description: "The welcoming foyer of Building I, providing visitor navigation, interactive digital directories, and ticket scanning facilities.",
    image: "/building 1/help.jpg",
    building: 1,
    category: "Facilities"
  },
  {
    id: "audio-guide-1",
    title: "Audio Guide Room",
    menuLabel: "Audio Guide Room",
    description: "Collect your interactive audio guides equipped with multi-lingual narrations to enrich your walkthrough of the historical museum.",
    image: "/building 1/audioo.JPG",
    building: 1,
    category: "Facilities"
  },
  {
    id: "welcome-area",
    title: "Welcome Area",
    menuLabel: "Welcome Area",
    description: "The first exhibition area introducing visitors to the rich history and democratic heritage of India.",
    image: "/building 1/welcome area.jpg",
    building: 1,
    category: "Facilities"
  },
  {
    id: "parichay-room",
    title: "Parichay Room",
    menuLabel: "Parichay Room",
    description: "An introductory audio-visual installation that welcomes visitors to the galleries of Teen Murti House.",
    image: "/special shows/parichay2.JPG",
    building: 1,
    category: "Facilities"
  },

  // BUILDING 2
  // Category 1: Prime Ministers Galleries
  {
    id: "pm-corridor-2",
    title: "Prime Ministers Corridor",
    menuLabel: "PM Corridor",
    description: "A walk through the beautifully designed PM Corridor showcasing the journey of India's Prime Ministers through chronological photo exhibits and memorabilia.",
    image: "/building 2/PM Corridor.jpg",
    building: 2,
    category: "Prime Ministers Galleries"
  },
  {
    id: "gulzarilal-nanda-2",
    title: "Shri Gulzarilal Nanda",
    menuLabel: "Gallery 2 - Shri Gulzarilal Nanda",
    description: "Highlights the selfless service of the two-time interim Prime Minister and his contribution to labor welfare and the Planning Commission as its first Deputy Chairman.",
    image: "/building 2/pms/gujju.jpg",
    building: 2,
    category: "Prime Ministers Galleries"
  },
  {
    id: "lal-bahadur-shastri-2",
    title: "Shri Lal Bahadur Shastri",
    menuLabel: "Gallery 3 - Shri Lal Bahadur Shastri",
    description: "Highlights the second PM's integrity, rural reforms, and military leadership during the 1965 war with his slogan 'Jai Jawan Jai Kisan'.",
    image: "/building 2/pms/shastri.jpg",
    building: 2,
    category: "Prime Ministers Galleries"
  },
  {
    id: "indira-gandhi-2",
    title: "Smt. Indira Gandhi",
    menuLabel: "Gallery 4 - Smt. Indira Gandhi",
    description: "Examines the decisive leadership of Indira Gandhi, focus on land reforms, national security, space exploration, and economic policies.",
    image: "/building 2/pms/indira.JPG",
    building: 2,
    category: "Prime Ministers Galleries"
  },
  {
    id: "morarji-desai-2",
    title: "Shri Morarji Desai",
    menuLabel: "Gallery 5 - Shri Morarji Desai",
    description: "Portrays the post-Emergency restoration of fundamental rights, economic stabilization, and initiatives for friendly relations with neighbors.",
    image: "/building 2/pms/desai.jpg",
    building: 2,
    category: "Prime Ministers Galleries"
  },
  {
    id: "charan-singh-2",
    title: "Chaudhary Charan Singh",
    menuLabel: "Gallery 6 - Chaudhary Charan Singh",
    description: "Focuses on the champion of Indian peasants and farmers, highlighting land reforms and agricultural empowerment.",
    image: "/building 2/pms/charan-singh.JPG",
    building: 2,
    category: "Prime Ministers Galleries"
  },
  {
    id: "rajiv-gandhi-2",
    title: "Shri Rajiv Gandhi",
    menuLabel: "Gallery 7 - Shri Rajiv Gandhi",
    description: "Chronicles the modernization of India via the telecom revolution, youth empowerment, technology missions, and computerization.",
    image: "/building 2/pms/rajiv.jpg",
    building: 2,
    category: "Prime Ministers Galleries"
  },
  {
    id: "vp-singh-2",
    title: "Shri VP Singh",
    menuLabel: "Gallery 8 - Shri VP Singh",
    description: "Highlights the implementation of the Mandal Commission report, focus on social justice, and administrative reforms.",
    image: "/building 2/pms/vp.jpg",
    building: 2,
    category: "Prime Ministers Galleries"
  },
  {
    id: "chandra-shekhar-2",
    title: "Shri Chandra Shekhar",
    menuLabel: "Gallery 9 - Shri Chandra Shekhar",
    description: "Highlights his long political march (Padayatra) and his leadership during a critical period of economic transition.",
    image: "/building 2/pms/chandra-shekhar.jpg",
    building: 2,
    category: "Prime Ministers Galleries"
  },
  {
    id: "narasimha-rao-2",
    title: "Shri PV Narasimha Rao",
    menuLabel: "Gallery 10 - Shri PV Narasimha Rao",
    description: "Chronicles the landmark economic reforms of 1991, integration with the global economy, and the 'Look East' foreign policy.",
    image: "/building 2/pms/rao gallery.jpg",
    building: 2,
    category: "Prime Ministers Galleries"
  },
  {
    id: "deve-gowda-2",
    title: "Shri HD Deve Gowda",
    menuLabel: "Gallery 11 - Shri HD Deve Gowda",
    description: "Commemorates the coalition government's efforts towards federal governance, regional development, and agricultural welfare.",
    image: "/building 2/pms/hd gallery.jpg",
    building: 2,
    category: "Prime Ministers Galleries"
  },
  {
    id: "gujral-2",
    title: "Shri Inder Kumar Gujral",
    menuLabel: "Gallery 12 - Shri Inder Kumar Gujral",
    description: "Showcases the 'Gujral Doctrine' which reshaped India's friendly relations with neighboring South Asian nations.",
    image: "/building 2/pms/gujral gallery.jpg",
    building: 2,
    category: "Prime Ministers Galleries"
  },
  {
    id: "atal-bihari-vajpayee-2",
    title: "Shri Atal Bihari Vajpayee",
    menuLabel: "Gallery 13 - Shri Atal Bihari Vajpayee",
    description: "Exhibits the Golden Quadrilateral highway network, key economic reforms, the Pokhran-II tests, and efforts towards global peace.",
    image: "/building 2/pms/atal gallery.jpg",
    building: 2,
    category: "Prime Ministers Galleries"
  },
  {
    id: "manmohan-singh-2",
    title: "Shri Manmohan Singh",
    menuLabel: "Gallery 14 - Shri Manmohan Singh",
    description: "Highlights a decade of high growth, landmark legislations like RTI, Right to Education, NREGA, and civil nuclear agreements.",
    image: "/building 2/pms/manmohan-singh.JPG",
    building: 2,
    category: "Prime Ministers Galleries"
  },
  {
    id: "pm-gallery-2",
    title: "Shri Narendra Modi",
    menuLabel: "Gallery 15 - Shri Narendra Modi",
    description: "Explore the gallery of the 15th Prime Minister Shri Narendra Modi, highlighting key initiatives such as Swachh Bharat, Make in India, Digital India, and the nation's rapid infrastructural growth.",
    image: "/building 2/pms/modi gallery.jpg",
    building: 2,
    category: "Prime Ministers Galleries"
  },

  // Category 2: Anubhuti Zone
  {
    id: "selfie-pm-2",
    title: "Selfie with Prime Minister",
    menuLabel: "Selfie with Prime Minister",
    description: "Take a selfie with your favourite Prime Minister using Augmented Reality.",
    image: "/anubhuti/selfie.jpg",
    building: 2,
    category: "Anubhuti Zone"
  },
  {
    id: "handwriting-robot-2",
    title: "Letter from Prime Minister",
    menuLabel: "Letter from Prime Minister",
    description: "Receive a personalized letter handwritten in the signature style of India's great Prime Ministers.",
    image: "/anubhuti/roboticalligraphy.JPG",
    building: 2,
    category: "Anubhuti Zone"
  },
  {
    id: "unity-wall-2",
    title: "Unity Wall",
    menuLabel: "Unity Wall",
    description: "Collaborate with fellow visitors by holding hands to complete the electrical circuit and light up the Unity Chain.",
    image: "/unit.JPG",
    building: 2,
    category: "Anubhuti Zone"
  },

  // Category 3: Special Shows
  {
    id: "light-sound-show-2",
    title: "Light and Sound Show",
    menuLabel: "Light and Sound Show",
    description: "Watch an Immersive tale of Valliant Women Warriors, Veeranganaon ki Mahagatha; who strived to uphold the nation's pride, in Hindi at 6:30 pm. Also, watch the story of India's space programme and other important achievements of nearly 80 years with the help of laser lights, sound and visuals in English at 7:15 pm.",
    image: "/building 2/las space.jpg",
    building: 2,
    category: "Special Shows"
  },
  {
    id: "suraksha-show-2",
    title: "Suraksha",
    menuLabel: "Suraksha",
    description: "An immersive 360-degree cinematic experience that takes you on a journey through India's advancements in science and technology.",
    image: "/special shows/Suraksha.jpg",
    building: 2,
    category: "Special Shows"
  },
  {
    id: "bhavishya-jhalkiyan-2",
    title: "Bhavishya ki Jhalkiyan",
    menuLabel: "Bhavishya ki Jhalkiyan",
    description: "Take a seat in the helicopter pod and prepare yourselves for a splendid, 360-degree virtual reality projection of the nation's exciting futuristic developments.",
    image: "/building 2/ride.jpg",
    building: 2,
    category: "Special Shows"
  },

  // Category 4: Facilities
  {
    id: "prastuti-conference-2",
    title: "Prastuti Conference Room",
    menuLabel: "Prastuti Conference Room",
    description: "A state-of-the-art orientation hall hosting multimedia briefings, press conferences, and educational seminars.",
    image: "/building 2/Prastuti.jpg",
    building: 2,
    category: "Facilities"
  },
  {
    id: "pms2-reception",
    title: "PMS 2 Reception Area",
    menuLabel: "Reception ",
    description: "The main reception area inside Building II, helping visitors with information desks and digital walkthroughs.",
    image: "/building 2/facilities/reception.jpg",
    building: 2,
    category: "Facilities"
  },
  {
    id: "levitating-emblem",
    title: "Levitating Emblem",
    menuLabel: "Levitating Emblem",
    description: "A spectacular levitating national emblem exhibit representing the integration of modern innovation and Indian heritage.",
    image: "/building 2/facilities/levitatingg.JPG",
    building: 2,
    category: "Facilities"
  },
  {
    id: "canteen-stories",
    title: "Canteen Stories",
    menuLabel: "Canteen ",
    description: "The spacious visitor cafeteria offering dining options, refreshments, and a comfortable seating layout.",
    image: "/building 2/facilities/Canteen Stories.jpg",
    building: 2,
    category: "Facilities"
  },
  {
    id: "entry-gate",
    title: "Entry Gate",
    menuLabel: "Entry Gate",
    description: "The security-monitored entrance gate welcoming visitors to the lawns of Block II.",
    image: "/building 2/facilities/hi.jpg",
    building: 2,
    category: "Facilities"
  },
  {
    id: "forest-table",
    title: "Forest Table",
    menuLabel: "Forest Table",
    description: "A beautiful wooden installation offering visitors a resting spot amid natural architectural accents.",
    image: "/building 2/facilities/Forest table DSC_3625.jpg",
    building: 2,
    category: "Facilities"
  },
  {
    id: "namastey-cafe",
    title: "Namastey Cafe",
    menuLabel: "Namastey Cafe",
    description: "The cafeteria kiosk offering quick bites, hot beverages, and snacks for visitors taking breaks between tours.",
    image: "/building 2/facilities/Namastey Cafe.jpg",
    building: 2,
    category: "Facilities"
  },
  {
    id: "parking-facility",
    title: "Parking Area",
    menuLabel: "Parking Area",
    description: "Spacious vehicle parking zones laid out efficiently for buses, private cars, and two-wheelers.",
    image: "/building 2/facilities/Parking DSC_3248.jpg",
    building: 2,
    category: "Facilities"
  },
  {
    id: "security-check",
    title: "Security",
    menuLabel: "Security",
    description: "Standard security checks and scanners at the entrance gates to guarantee a safe experience.",
    image: "/building 2/facilities/cisf.jpg",
    building: 2,
    category: "Facilities"
  },
  {
    id: "signage-info",
    title: "Wayfinding Signage",
    menuLabel: "Direction Signage",
    description: "Directional sign boards placed across paths to guide visitors to show locations and amenities.",
    image: "/building 2/facilities/direction.jpg",
    building: 2,
    category: "Facilities"
  },
  {
    id: "signage-info-2",
    title: "Information Signage",
    menuLabel: "Information Signage",
    description: "General guidelines and schedule display signage boards helping visitors plan their museum walkthrough.",
    image: "/building 2/facilities/Signage DSC_5254.jpg",
    building: 2,
    category: "Facilities"
  },
  {
    id: "tatsat-gift-shop",
    title: "Tatsat Gift Shop",
    menuLabel: "Tatsat Souvenir Shop",
    description: "The museum gift shop where visitors can purchase souvenirs, customized books, and handicraft items.",
    image: "/building 2/facilities/Tatsat,.jpg",
    building: 2,
    category: "Facilities"
  },
  {
    id: "heritage-art",
    title: "Heritage Art Exhibit",
    menuLabel: "Heritage Art Souvenir Shop",
    description: "A showcase of traditional artwork and national emblems celebrating Indian legacy inside the facility.",
    image: "/building 2/facilities/The Heritage art,.jpg",
    building: 2,
    category: "Facilities"
  },
  {
    id: "ticket-counter",
    title: "Ticket Counter",
    menuLabel: "Ticket Counter",
    description: "Multi-window digital ticket counter for purchasing show passes and museum entries.",
    image: "/building 2/facilities/ticket counter DSC_3242.jpg",
    building: 2,
    category: "Facilities"
  },
  {
    id: "lost-and-found",
    title: "Lost & Found",
    menuLabel: "Lost & Found",
    description: "A dedicated facility to report, submit, or retrieve lost belongings and items found within the museum premises.",
    image: "/building 2/facilities/lost-and-found.jpg",
    building: 2,
    category: "Facilities"
  },
  {
    id: "baby-care-point",
    title: "Baby Care Cubicle",
    menuLabel: "Baby Care",
    description: "A clean and comfortable space equipped for diaper changing, nursing, and baby feeding needs.",
    image: "/building 2/facilities/baby.jpg",
    building: 2,
    category: "Facilities"
  }
];

export default function KeyGalleriesContent() {
  const [building, setBuilding] = useState<1 | 2>(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeId, setActiveId] = useState("making-constitution");
  const [isPaused, setIsPaused] = useState(false);

  // Check url query param on mount to allow deep linking
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const galleryId = params.get("gallery");
      if (galleryId) {
        const found = GALLERIES.find((g) => g.id === galleryId);
        if (found) {
          setBuilding(found.building);
          setActiveId(found.id);
        }
      }
    }
  }, []);

  // Drag-to-scroll and auto-scroll states
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [dragged, setDragged] = useState(false);

  // Filter galleries by active building and search query
  const filteredGalleries = GALLERIES.filter(
    (g) =>
      g.building === building &&
      g.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group filtered galleries by category
  const categories = building === 1
    ? ["Constitution Gallery", "Gallery 1 - Nehru", "Facilities"]
    : ["Prime Ministers Galleries", "Anubhuti Zone", "Special Shows", "Facilities"];

  // Sync activeId when building changes or search filters change
  useEffect(() => {
    if (filteredGalleries.length > 0) {
      const exists = filteredGalleries.some((g) => g.id === activeId);
      if (!exists) {
        setActiveId(filteredGalleries[0].id);
      }
    } else {
      setActiveId("");
    }
  }, [building, searchQuery, filteredGalleries, activeId]);

  // Smooth scroll active tab into view
  useEffect(() => {
    if (!scrollContainerRef.current) return;
    const activeElement = scrollContainerRef.current.querySelector(
      '[data-active="true"]'
    ) as HTMLElement;
    if (activeElement) {
      activeElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeId]);

  const activeGallery = GALLERIES.find((g) => g.id === activeId) || null;
  const activeIndex = filteredGalleries.findIndex((g) => g.id === activeId);

  // Auto-change active gallery every 3 seconds
  useEffect(() => {
    if (filteredGalleries.length <= 1 || isPaused) return;
    const timer = setTimeout(() => {
      const nextIndex = (activeIndex + 1) % filteredGalleries.length;
      setActiveId(filteredGalleries[nextIndex].id);
    }, 3000);
    return () => clearTimeout(timer);
  }, [activeId, filteredGalleries, activeIndex, isPaused]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setDragged(false);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftState(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) {
      setDragged(true);
    }
    scrollContainerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handlePrev = () => {
    if (filteredGalleries.length === 0) return;
    const prevIndex =
      (activeIndex - 1 + filteredGalleries.length) % filteredGalleries.length;
    setActiveId(filteredGalleries[prevIndex].id);
  };

  const handleNext = () => {
    if (filteredGalleries.length === 0) return;
    const nextIndex = (activeIndex + 1) % filteredGalleries.length;
    setActiveId(filteredGalleries[nextIndex].id);
  };

  return (
    <div className="w-full flex flex-col bg-white">
      <style>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #d9d9d9 transparent !important;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
          height: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d9d9d9 !important;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1 !important;
        }
      `}</style>
      {/* ── Main Hero Section ── */}
       <div className="relative w-full aspect-[16/7.5] sm:aspect-[2.6/1] lg:aspect-[3.8/1] min-h-[280px] lg:h-auto overflow-hidden">
        <Image
          src="/hero-key gallery.jpg"
          alt="Key Galleries"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* ── Title Bar (Grey Band) ── */}
      <div className="w-full bg-[#f4f4f4] py-8 text-[#052356] border-t border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-start text-left">
            <div className="w-12 h-1 bg-[#f37021] mb-4" />
            <h1 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
              Galleries
            </h1>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-[#052356] font-medium pl-4 pr-10 py-2 rounded-lg text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#f37021] placeholder-slate-400 shadow-sm"
            />
            <Search className="absolute right-3 top-3 w-4 h-4 text-[#f37021] pointer-events-none" />
          </div>
        </div>
      </div>

      {/* ── Content Layout ── */}
      <section className="w-full pt-8 pb-12 lg:pt-10 lg:pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Building Selection Toggle Pills */}
          <div className="flex justify-start items-center gap-6 pb-0 border-b border-gray-200 mb-8">
            <button
              onClick={() => {
                setBuilding(1);
                setSearchQuery("");
                setActiveId("making-constitution");
              }}
              className={`px-5 py-2 rounded-lg text-sm font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                building === 1
                  ? "bg-[#052356] text-[#f37021] shadow-md"
                  : "text-[#052356] hover:text-[#f37021]"
              }`}
            >
              BLOCK I
            </button>
            <button
              onClick={() => {
                setBuilding(2);
                setSearchQuery("");
                setActiveId("pm-corridor-2");
              }}
              className={`px-5 py-2 rounded-lg text-sm font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                building === 2
                  ? "bg-[#052356] text-[#f37021] shadow-md"
                  : "text-[#052356] hover:text-[#f37021]"
              }`}
            >
              BLOCK II
            </button>
          </div>

          {/* Main Grid: Left Sidebar and Right Display Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
            
            {/* Left Column: Vertical Sub-tabs Sidebar */}
            <div className="col-span-1 lg:col-span-4 w-full border-r lg:border-r border-slate-100 pr-0 lg:pr-6 select-none">
              {filteredGalleries.length > 0 ? (
                <div 
                  ref={scrollContainerRef}
                  onMouseDown={handleMouseDown}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseUp}
                  onMouseMove={handleMouseMove}
                  className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-hidden overflow-y-hidden lg:overflow-y-auto gap-4 lg:gap-3 pb-3 lg:pb-0 scroll-smooth cursor-grab active:cursor-grabbing custom-scrollbar h-auto lg:h-[485px] max-h-[485px] pr-2"
                >
                  {categories.map((category) => {
                    const items = filteredGalleries.filter((g) => g.category === category);
                    if (items.length === 0) return null;

                    return (
                      <div key={category} className="flex flex-row lg:flex-col items-center lg:items-stretch gap-2 lg:gap-1 flex-shrink-0 lg:flex-shrink w-auto lg:w-full">
                        {/* Category Header */}
                        <div className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#052356] bg-[#052356]/10 px-2.5 py-2 lg:py-2.5 lg:px-4 rounded-lg lg:mb-1.5 lg:mt-3 whitespace-nowrap select-none">
                          {category}
                        </div>

                        {/* Sub-items */}
                        <div className="flex flex-row lg:flex-col gap-1.5 lg:gap-1 w-full">
                          {items.map((item) => {
                            const isActive = item.id === activeId;
                            return (
                              <button
                                key={item.id}
                                data-active={isActive ? "true" : "false"}
                                onClick={(e) => {
                                  if (dragged) {
                                    e.preventDefault();
                                    return;
                                  }
                                  setActiveId(item.id);
                                }}
                                className={`relative flex items-center text-left py-2 px-3 lg:py-4 lg:pl-10 lg:pr-3 transition-all duration-300 cursor-pointer whitespace-nowrap lg:whitespace-normal w-auto lg:w-full ${
                                  isActive
                                    ? "bg-[#f4f4f4] text-[#f37021] border-b-[3px] border-[#052356] lg:border-b-0 lg:border-l-[4px] lg:border-[#f37021] rounded-lg animate-fade-in"
                                    : "bg-transparent text-[#5c6f84] hover:text-[#f37021] border-b border-slate-100/50"
                                }`}
                              >
                                {isActive && (
                                  <div className="flex lg:absolute lg:left-3 lg:top-1/2 lg:-translate-y-1/2 items-center justify-center w-5 h-5 mr-2 lg:mr-0 flex-shrink-0">
                                    <svg 
                                      className="w-5 h-5 text-[#052356] fill-[#052356] flex-shrink-0" 
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M12 3l1.9 2.5 3.1-.7.2 3.1 2.8 1.4-1.6 2.7 1.6 2.7-2.8 1.4-.2 3.1-3.1-.7L12 21l-1.9-2.5-3.1.7-.2-3.1-2.8-1.4 1.6-2.7-1.6-2.7 2.8-1.4.2-3.1 3.1.7z" />
                                    </svg>
                                  </div>
                                )}
                                <span className="text-xs sm:text-[13px] uppercase tracking-wider font-bold truncate">
                                  {item.menuLabel}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="py-2 text-slate-400 text-xs sm:text-sm font-medium">
                  No subcategories matches search query.
                </div>
              )}
            </div>

            {/* Right Column: Active Gallery Display Card */}
            <div className="col-span-1 lg:col-span-8 flex flex-col items-start w-full">
              {activeGallery ? (
                <>
                  <div 
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className="relative w-full aspect-[16/10] sm:aspect-[1.8/1] rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 group"
                  >
                    {/* Gallery Image Display */}
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                      <Image
                        src={activeGallery.image}
                        alt={activeGallery.title}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 800px"
                        className="object-cover object-center"
                      />
                    </div>

                    {/* Left Arrow Button */}
                    <button
                      onClick={handlePrev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200/50 text-[#f37021] flex items-center justify-center hover:bg-[#f37021] hover:text-white transition-all cursor-pointer z-10 shadow-md active:scale-95"
                      aria-label="Previous gallery"
                    >
                      <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                    </button>

                    {/* Right Arrow Button */}
                    <button
                      onClick={handleNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200/50 text-[#f37021] flex items-center justify-center hover:bg-[#f37021] hover:text-white transition-all cursor-pointer z-10 shadow-md active:scale-95"
                      aria-label="Next gallery"
                    >
                      <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                    </button>
                  </div>

                  {/* Gallery Title & Description below the image */}
                  <div className="w-full mt-8 text-left px-2">
                    <h2 className={`${spectral.className} text-xl sm:text-2xl font-bold text-[#052356] mb-3`}>
                      {activeGallery.title}
                    </h2>
                    <p className="text-[#052356]/85 text-xs sm:text-[14px] md:text-[15px] leading-relaxed text-justify font-medium">
                      {activeGallery.description}
                    </p>
                  </div>
                </>
              ) : (
                <div className="w-full aspect-[16/10] rounded-3xl bg-slate-50 flex items-center justify-center border border-dashed border-slate-200">
                  <span className="text-slate-400 text-sm font-medium">Please refine your search query.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
