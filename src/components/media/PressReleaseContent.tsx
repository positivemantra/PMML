"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Spectral } from 'next/font/google';
import { ChevronDown } from 'lucide-react';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
});

const PRESS_RELEASES_DATA = [
  {
    id: 1,
    title: 'PMML Announces Fellowship Program for 2026-2027',
    date: '12/07/2026',
    day: '12',
    monthYear: 'Jul, 2026',
    description: 'The Prime Ministers Museum & Library invites applications for its prestigious fellowship program, focusing on post-independence Indian history, governance, and democratic institutions.',
    image: '/ccs-talk.JPG',
  },
  {
    id: 2,
    title: 'Special Commemorative Lecture on Lokmanya Tilak held at Teen Murti',
    date: '05/07/2026',
    day: '05',
    monthYear: 'Jul, 2026',
    description: 'A special national seminar was organized at the PMML auditorium to commemorate the birth anniversary of Lokmanya Bal Gangadhar Tilak, featuring keynote addresses by distinguished historians.',
    image: '/seminar.JPG',
  },
  {
    id: 3,
    title: 'PMML Signs MoU for Digitization of Rare Historical Maps',
    date: '20/06/2026',
    day: '20',
    monthYear: 'Jun, 2026',
    description: 'The Prime Ministers Museum & Library signed a memorandum of understanding with the National Archives to launch a joint project for high-resolution digitizing of 18th and 19th-century maps of India.',
    image: '/room.JPG',
  },
  {
    id: 4,
    title: 'Exhibition on the Making of the Constitution Extended till August',
    date: '10/06/2026',
    day: '10',
    monthYear: 'Jun, 2026',
    description: "Due to overwhelming public response and high student turnout, the special exhibition 'The Constitution of India: Visionaries & Values' has been extended.",
    image: '/pms img-3.png',
  },
];

export default function PressReleaseContent() {
  const [sortBy, setSortBy] = useState<'latest' | 'oldest'>('latest');
  const [currentPage, setCurrentPage] = useState(1);

  // Parse DD/MM/YYYY into timestamp
  const parseDateStr = (dateStr: string) => {
    const [day, month, year] = dateStr.split('/').map(Number);
    return new Date(year, month - 1, day).getTime();
  };

  // Sort press release items dynamically
  const sortedReleases = useMemo(() => {
    const result = [...PRESS_RELEASES_DATA];
    return result.sort((a, b) => {
      const timeA = parseDateStr(a.date);
      const timeB = parseDateStr(b.date);
      return sortBy === 'latest' ? timeB - timeA : timeA - timeB;
    });
  }, [sortBy]);

  // Reset page to 1 when sort changes
  const handleSortChange = (value: 'latest' | 'oldest') => {
    setSortBy(value);
    setCurrentPage(1);
  };

  // Pagination (3 items per page)
  const itemsPerPage = 3;
  const totalPages = Math.ceil(sortedReleases.length / itemsPerPage);
  const paginatedReleases = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sortedReleases.slice(start, start + itemsPerPage);
  }, [sortedReleases, currentPage]);

  return (
    <div className="w-full flex flex-col bg-white">
      {/* ── Page Hero Section ── */}
       <section className="relative w-full aspect-[16/7.5] sm:aspect-[2.6/1] lg:aspect-[3.8/1] min-h-[280px] lg:h-auto overflow-hidden">
        <Image
          src="/hee.jpg"
          alt="Press Releases"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>

      {/* ── Press Release Header Strip ── */}
      <section className="w-full bg-[#f4f4f4] py-8 text-left border-b border-slate-200/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              {/* Top orange accent line */}
              <div className="w-12 h-1 bg-[#f37021] mb-4" />
              <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
                Press Releases
              </h2>
            </div>

            {/* Sort Dropdown aligned to the right */}
            <div className="relative mb-2 sm:mb-0">
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value as any)}
                className="pl-4 pr-12 py-2 text-xs font-bold text-gray-500 bg-white border border-gray-200 rounded-lg outline-none appearance-none cursor-pointer min-w-[180px]"
              >
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-5.5 h-5.5 border border-[#f37021] rounded-full bg-transparent pointer-events-none">
                <ChevronDown className="w-3.5 h-3.5 text-[#f37021]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content Block (bg-white) ── */}
      <section className="w-full py-12 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Releases List Container */}
          <div className="flex flex-col mb-12">
            {paginatedReleases.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-8 border-b border-slate-200 last:border-0"
              >
                {/* Left: Date Badge with calendar straps */}
                <div className="flex-shrink-0 mt-1 sm:mt-0">
                  <div className="relative border border-gray-200 shadow-[3px_3px_0px_#fcd2af] rounded-lg px-4 py-3 bg-white text-center flex flex-col justify-center min-w-[95px] h-fit">
                    {/* Calendar Straps */}
                    <div className="absolute -top-2 left-4 w-1.5 h-3.5 bg-[#fcd2af] rounded-sm"></div>
                    <div className="absolute -top-2 right-4 w-1.5 h-3.5 bg-[#fcd2af] rounded-sm"></div>
                    
                    <span className="text-2xl font-extrabold text-[#052356] leading-none mb-1">
                      {item.day}
                    </span>
                    <span className="text-[10px] font-bold text-gray-500 tracking-wide leading-none whitespace-nowrap uppercase">
                      {item.monthYear}
                    </span>
                  </div>
                </div>

                {/* Center: Title & Description */}
                <div className="flex-grow flex flex-col gap-2">
                  <h3 className={`${spectral.className} text-lg sm:text-xl font-bold text-[#052356] leading-snug hover:text-[#f37021] cursor-pointer transition-colors line-clamp-2`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed font-medium line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Right: Rounded Image Block */}
                <div className="flex-shrink-0 w-full sm:w-48 aspect-[16/10] sm:aspect-auto sm:h-28 relative rounded-2xl overflow-hidden bg-gray-100 border border-slate-200/60 shadow-sm self-stretch sm:self-auto">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 192px"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Centered Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 text-xs font-bold text-[#f37021] select-none mt-8">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`hover:underline cursor-pointer ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : ''}`}
              >
                &lt;
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-7 h-7 rounded flex items-center justify-center transition-colors ${
                    currentPage === pageNum
                      ? 'bg-[#f37021] text-white'
                      : 'text-[#052356] hover:bg-slate-50'
                  }`}
                >
                  {pageNum}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`hover:underline cursor-pointer ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : ''}`}
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
