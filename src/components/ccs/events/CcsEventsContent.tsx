"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Spectral } from 'next/font/google';
import { Clock, ChevronDown } from 'lucide-react';
import CcsHeroSlider from "@/components/ccs/CcsHeroSlider";

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

interface CcsEvent {
  id: string;
  title: string;
  category: 'lectures' | 'seminars' | 'discussions';
  date: string;
  day: string;
  monthYear: string;
  time: string;
  venue: string;
  description: string;
  image: string;
}

const EVENTS_DATA: CcsEvent[] = [
  {
    id: 'c1',
    title: 'The Constitution of India: Visionaries & Values',
    category: 'lectures',
    date: '2026-07-22',
    day: '22',
    monthYear: 'Jul, 2026',
    time: '3:00 pm - 5:00 pm',
    venue: 'Main Auditorium, Library Building',
    description: 'A keynote lecture by eminent constitutional historians tracing the debates, visionaries, and enduring democratic values of the Indian Constitution.',
    image: '/seminar.JPG',
  },

  {
    id: 'c3',
    title: "India's Foreign Policy in the 21st Century",
    category: 'discussions',
    date: '2026-08-26',
    day: '26',
    monthYear: 'Aug, 2026',
    time: '2:30 pm - 5:00 pm',
    venue: 'Executive Council Room, Teen Murti House',
    description: 'A roundtable discussion with former diplomats and international relations scholars debating India\'s strategic alignments and geopolitical role.',
    image: '/interview-2.jpg',
  },
  {
    id: 'c4',
    title: 'Remembering Nehru: Archives & Ideas',
    category: 'lectures',
    date: '2026-06-20',
    day: '20',
    monthYear: 'Jun, 2026',
    time: '3:00 pm - 4:30 pm',
    venue: 'Seminar Room 2, CCS Wing',
    description: 'A scholarly lecture reviewing the private letters and official documents of Jawaharlal Nehru to understand his vision of democratic institutions.',
    image: '/pms img-3.png',
  },
  {
    id: 'c5',
    title: 'Democracy & Institutions: The Indian Journey',
    category: 'lectures',
    date: '2026-08-12',
    day: '12',
    monthYear: 'Aug, 2026',
    time: '3:00 pm - 4:30 pm',
    venue: 'Seminar Room 1, CCS Wing, Teen Murti Estate',
    description: 'A public lecture by prominent political scientists analyzing the evolution, resilience, and strength of democratic institutions in post-independence India.',
    image: '/ccs-talk.JPG',
  },
  {
    id: 'c6',
    title: 'Archives as History: Narratives of Nation Building',
    category: 'seminars',
    date: '2026-08-20',
    day: '20',
    monthYear: 'Aug, 2026',
    time: '10:00 am - 1:00 pm',
    venue: 'Library Auditorium, Teen Murti Estate',
    description: 'An academic seminar discussing the significance of private papers and archives in writing the socio-political history of modern India.',
    image: '/room.JPG',
  },
  {
    id: 'c7',
    title: 'Federalism in India: Challenges & Opportunities',
    category: 'discussions',
    date: '2026-08-28',
    day: '28',
    monthYear: 'Aug, 2026',
    time: '2:30 pm - 4:30 pm',
    venue: 'Executive Council Room, Teen Murti House',
    description: 'A panel discussion featuring constitutional experts, economists, and administrators examining fiscal relations and cooperative federalism in India.',
    image: '/interview-1.jpg',
  },
];

const TABS = [
  { id: 'all', label: 'ALL EVENTS', href: '/events', star: true },
  { id: 'sangrahalaya', label: 'SANGRAHALAYA', href: '/pm-sangrahalaya/events' },
  { id: 'planetarium', label: 'NEHRU PLANETARIUM', href: '/about-pmml/nehru-planetarium/events' },
  { id: 'ccs', label: 'CENTER FOR CONTEMPORARY STUDIES', href: '/ccs/events' },
];

export default function CcsEventsContent() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSort, setSelectedSort] = useState('upcoming');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter and Sort events
  const processedEvents = useMemo(() => {
    let result = [...EVENTS_DATA];

    // Filter by Category
    if (selectedCategory !== 'all') {
      result = result.filter(e => e.category === selectedCategory);
    }

    // Filter by Upcoming vs Past
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayTime = today.getTime();

    if (selectedSort === 'upcoming') {
      result = result.filter(e => new Date(e.date).getTime() >= todayTime);
      result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    } else if (selectedSort === 'past') {
      result = result.filter(e => new Date(e.date).getTime() < todayTime);
      result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    return result;
  }, [selectedCategory, selectedSort]);

  // Pagination (6 cards per page)
  const itemsPerPage = 6;
  const totalPages = Math.ceil(processedEvents.length / itemsPerPage);
  const paginatedEvents = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return processedEvents.slice(start, start + itemsPerPage);
  }, [processedEvents, currentPage]);

  return (
    <div className="w-full flex flex-col bg-white">
      {/* ── Page Hero Section ── */}
      <CcsHeroSlider />

      {/* ── Upcoming Events Header Strip ── */}
      <section className="w-full bg-[#f4f4f4] py-8 text-left border-b border-slate-200/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              {/* Top orange accent line */}
              <div className="w-12 h-1 bg-[#f37021] mb-4" />
              <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
                Events
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main content block (bg-white) ── */}
      <section className="w-full py-10 lg:py-12 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Sub-navigation Tabs */}
          <div className="flex flex-row flex-wrap items-center justify-start gap-2.5 sm:gap-4 md:gap-6 mb-8 border-b border-solid border-slate-200 pb-0 w-full">
            {TABS.map((tab) => {
              const isActive = tab.id === 'ccs';
              return (
                <Link
                  key={tab.id}
                  href={tab.href}
                  className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded text-[10px] sm:text-[11px] md:text-xs font-bold tracking-wider transition-all select-none cursor-pointer flex items-center whitespace-nowrap w-fit ${
                    isActive
                      ? 'bg-[#052356] text-[#f37021] shadow-sm'
                      : 'text-gray-400 bg-transparent hover:text-[#052356]'
                  }`}
                >
                  {tab.star && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`w-3.5 h-3.5 mr-1.5 flex-shrink-0 ${isActive ? 'text-white' : 'text-gray-400'}`}
                    >
                      <path d="M12 2l1.91 2.3 2.91-1.01.99 2.83 2.82.97-1 2.82 2.3 1.91-2.3 1.91 1 2.82-2.82.97-.99 2.83-2.91-1.01L12 22l-1.91-2.3-2.91 1.01-.99-2.83-2.82-.97 1-2.82-2.3-1.91 2.3-1.91-1-2.82 2.82-.97.99-2.83 2.91 1.01L12 2z" />
                    </svg>
                  )}
                  {tab.label}
                </Link>
              );
            })}
          </div>

          {/* Filters Row */}
          <div className="flex justify-end gap-4 mb-10">
            {/* Category Dropdown */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-4 pr-12 py-2.5 text-xs font-bold text-gray-500 bg-[#f4f4f4] border border-gray-200 rounded-lg outline-none appearance-none cursor-pointer min-w-[220px]"
              >
                <option value="all">All Categories</option>
                <option value="lectures">Lectures</option>
                <option value="seminars">Seminars</option>
                <option value="discussions">Discussions</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-5.5 h-5.5 border border-[#f37021] rounded-full bg-transparent pointer-events-none">
                <ChevronDown className="w-3 h-3 text-[#f37021]" />
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={selectedSort}
                onChange={(e) => {
                  setSelectedSort(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-4 pr-12 py-2.5 text-xs font-bold text-gray-500 bg-[#f4f4f4] border border-gray-200 rounded-lg outline-none appearance-none cursor-pointer min-w-[220px]"
              >
                <option value="upcoming">Upcoming</option>
                <option value="past">Past</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-5.5 h-5.5 border border-[#f37021] rounded-full bg-transparent pointer-events-none">
                <ChevronDown className="w-3 h-3 text-[#f37021]" />
              </div>
            </div>
          </div>

          {/* Events Grid */}
          {paginatedEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {paginatedEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-[#f4f4f4] border border-[#052356] rounded-2xl flex flex-col hover:shadow-md transition-all duration-300 pt-6 px-6 pb-0"
                >
                  {/* Date & Category Badge Header */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    {/* Date Badge */}
                    <div className="relative border border-gray-200 shadow-[3px_3px_0px_#fcd2af] rounded-lg px-3.5 py-3 bg-white text-center flex flex-col justify-center min-w-[85px] mt-1.5">
                      {/* Calendar Straps */}
                      <div className="absolute -top-2 left-4 w-1.5 h-3.5 bg-[#fcd2af] rounded-sm"></div>
                      <div className="absolute -top-2 right-4 w-1.5 h-3.5 bg-[#fcd2af] rounded-sm"></div>
                      
                      <span className="text-xl sm:text-2xl font-extrabold text-[#052356] leading-none mb-1">
                        {event.day}
                      </span>
                      <span className="text-[10px] font-bold text-gray-500 tracking-wide leading-none whitespace-nowrap">
                        {event.monthYear}
                      </span>
                    </div>

                    {/* Category Pill */}
                    <span className="bg-[#052356] text-white text-[10px] font-extrabold px-4 py-1.5 rounded uppercase tracking-wider">
                      {event.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className={`${spectral.className} text-lg sm:text-xl font-bold text-[#052356] leading-snug mb-3 hover:text-[#f37021] transition-colors line-clamp-2`}>
                    {event.title}
                  </h3>

                  <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed mb-5 text-left font-medium line-clamp-3">
                    {event.description}
                  </p>

                  {/* Time (above divider) */}
                  <div className="flex items-center gap-1.5 text-[#052356] font-bold text-xs sm:text-[13px] mb-4">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span>{event.time}</span>
                  </div>

                  {/* Divider Line (edge-to-edge) */}
                  <div className="border-t border-slate-200/80 -mx-6 mb-0 mt-auto"></div>

                  {/* See Details link (below divider, aligned left) */}
                  <div className="flex items-center justify-start text-xs sm:text-[13px] py-3.5">
                    <Link
                      href={`/events/${event.id}`}
                      className="text-[#052356] hover:text-[#f37021] font-bold flex items-center gap-1 cursor-pointer select-none"
                    >
                      <span>See Details</span>
                      <span className="text-[#f37021] font-sans">↗</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full bg-white border border-gray-100 rounded-2xl p-12 text-center shadow-sm mb-12">
              <p className="text-sm font-semibold text-[#052356]">No events found matching your filters.</p>
            </div>
          )}

          {/* Centered Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 text-xs font-bold text-[#f37021] select-none">
              <button
                onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="hover:underline disabled:opacity-30 disabled:hover:no-underline cursor-pointer"
              >
                &lt;
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-7 h-7 rounded flex items-center justify-center transition-all cursor-pointer ${
                    currentPage === pageNum
                      ? 'bg-[#f37021] text-white'
                      : 'text-[#052356] hover:bg-slate-50'
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="hover:underline disabled:opacity-30 disabled:hover:no-underline cursor-pointer"
              >
                Next &gt;
              </button>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
