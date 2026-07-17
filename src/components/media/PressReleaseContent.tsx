"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Spectral } from 'next/font/google';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
});

const PRESS_RELEASES_DATA = [
  {
    id: 'pr-1',
    title: 'PMML Announces Fellowship Program for 2026-2027',
    date: '12.07.2026',
    year: 2026,
    size: '245 KB',
    type: 'PDF',
    url: '#',
    isExternal: false
  },
  {
    id: 'pr-2',
    title: 'Special Commemorative Lecture on Lokmanya Tilak held at Teen Murti House PMML',
    date: '05.07.2026',
    year: 2026,
    size: '1.55 MB',
    type: 'PDF',
    url: '#',
    isExternal: false
  },
  {
    id: 'pr-3',
    title: 'Ministry of Culture Invites Applications for Kala Sanskriti Vikas Yojana (KSVY) 2026-27',
    date: '02.07.2026',
    year: 2026,
    size: '236.76 KB',
    type: 'PDF',
    url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2280430',
    isExternal: true
  },
  {
    id: 'pr-4',
    title: 'PMML Signs MoU with National Archives for Digitization of Rare Historical Maps',
    date: '20.06.2026',
    year: 2026,
    size: '150.12 KB',
    type: 'PDF',
    url: '#',
    isExternal: false
  },
  {
    id: 'pr-5',
    title: 'Exhibition on the Making of the Constitution Extended till August at PM Sangrahalaya',
    date: '10.06.2026',
    year: 2026,
    size: '135.09 KB',
    type: 'PDF',
    url: '#',
    isExternal: false
  },
  {
    id: 'pr-6',
    title: 'PM Sangrahalaya Welcomes its 2 Millionth Visitor since Inauguration',
    date: '28.05.2026',
    year: 2026,
    size: '81.29 KB',
    type: 'PDF',
    url: '#',
    isExternal: false
  },
  {
    id: 'pr-7',
    title: 'Hon\'ble Minister of Culture Inaugurates New Interactive Gallery on Democratic Traditions at PMML',
    date: '15.05.2026',
    year: 2026,
    size: '364.46 KB',
    type: 'PDF',
    url: '#',
    isExternal: false
  },
  {
    id: 'pr-8',
    title: 'Annual Zonal Works for Conservation and Beautification of Teen Murti House Campus Approved',
    date: '02.05.2026',
    year: 2026,
    size: '556.69 KB',
    type: 'PDF',
    url: '#',
    isExternal: false
  },
  {
    id: 'pr-9',
    title: 'PMML Library Announces New Advanced Digital Subscriptions for Academic Research Scholars',
    date: '20.04.2026',
    year: 2026,
    size: '400.39 KB',
    type: 'PDF',
    url: '#',
    isExternal: false
  },
  {
    id: 'pr-10',
    title: 'Summer Sky-Gazing Programme and Astro-Workshops Announced by Nehru Planetarium, PMML',
    date: '10.04.2026',
    year: 2026,
    size: '185 KB',
    type: 'PDF',
    url: '#',
    isExternal: false
  },
  {
    id: 'pr-11',
    title: 'PM Sangrahalaya Introduces Multilingual Smart Audio Guides for International Museum Visitors',
    date: '25.03.2026',
    year: 2026,
    size: '120 KB',
    type: 'PDF',
    url: '#',
    isExternal: false
  },
  {
    id: 'pr-12',
    title: 'National Seminar on Netaji Subhas Chandra Bose and INA Legacy Organized at PMML Auditorium',
    date: '15.03.2026',
    year: 2026,
    size: '310 KB',
    type: 'PDF',
    url: '#',
    isExternal: false
  },
  {
    id: 'pr-13',
    title: 'Special Light and Sound Show on India\'s Technological Achievements Launched at PM Sangrahalaya',
    date: '01.03.2026',
    year: 2026,
    size: '420 KB',
    type: 'PDF',
    url: '#',
    isExternal: false
  },
  {
    id: 'pr-14',
    title: 'External Finishing Works of the Library Building and Heritage Structures at Teen Murti Campus Completed',
    date: '20.02.2026',
    year: 2026,
    size: '290 KB',
    type: 'PDF',
    url: '#',
    isExternal: false
  }
];

export default function PressReleaseContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Parse DD.MM.YYYY into timestamp
  const parseDateStr = (dateStr: string) => {
    const [day, month, year] = dateStr.split('.').map(Number);
    return new Date(year, month - 1, day).getTime();
  };

  // Filter and Sort releases
  const processedReleases = useMemo(() => {
    let result = PRESS_RELEASES_DATA.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortBy === "newest") {
      result.sort((a, b) => parseDateStr(b.date) - parseDateStr(a.date));
    } else {
      result.sort((a, b) => parseDateStr(a.date) - parseDateStr(b.date));
    }

    return result;
  }, [searchQuery, sortBy]);

  // Reset page when queries change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, sortBy, itemsPerPage]);

  // Pagination calculation
  const totalPages = Math.ceil(processedReleases.length / itemsPerPage);
  const paginatedReleases = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return processedReleases.slice(startIndex, startIndex + itemsPerPage);
  }, [processedReleases, currentPage, itemsPerPage]);

  // External click handler with standard confirm box
  const handleExternalClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, url: string) => {
    e.preventDefault();
    const confirmLeave = window.confirm("This would take you to an external website that opens in a new tab. Do you want to continue anyway?");
    if (confirmLeave) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

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

      {/* ── Main Content Section (Same layout structure as Annual Reports) ── */}
      <section className="w-full py-12 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Page Heading */}
          <div className="mb-6 text-left">
            <div className="w-12 h-1 bg-[#f37021] mb-2.5" />
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
              Press Releases
            </h2>
          </div>

          {/* Filter and Search controls */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {/* Search Box */}
            <div className="relative md:col-span-2">
              <input
                type="text"
                placeholder="Search press releases..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm text-black border border-gray-200 rounded-lg focus:border-[#f37021] focus:ring-1 focus:ring-[#f37021] outline-none transition-all bg-gray-50/20"
              />
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Sort By Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:border-[#f37021] focus:ring-1 focus:ring-[#f37021] outline-none bg-white text-gray-600 appearance-none cursor-pointer"
              >
                <option value="newest">Sort: Newest Date</option>
                <option value="oldest">Sort: Oldest Date</option>
              </select>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Items Per Page Dropdown */}
            <div className="relative">
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:border-[#f37021] focus:ring-1 focus:ring-[#f37021] outline-none bg-white text-gray-600 appearance-none cursor-pointer"
              >
                <option value={5}>5 per page</option>
                <option value={10}>10 per page</option>
                <option value={20}>20 per page</option>
              </select>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Documents Table */}
          <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f4f4f4] text-[#052356] border-b border-gray-200">
                    <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider">Title</th>
                    <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-center w-40 whitespace-nowrap">Published Date</th>
                    <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-center w-40">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {paginatedReleases.length > 0 ? (
                    paginatedReleases.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50/50 transition-colors duration-150">
                        {/* Document Title */}
                        <td className="py-4 px-6 flex items-start gap-3">
                          <svg className="w-5.5 h-5.5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                          </svg>
                          <a 
                            href={item.url === '#' ? undefined : item.url} 
                            onClick={(e) => {
                              if (item.url === '#') {
                                e.preventDefault();
                              } else if (item.isExternal) {
                                handleExternalClick(e, item.url);
                              }
                            }}
                            target={item.url === '#' ? undefined : "_blank"}
                            rel={item.url === '#' ? undefined : "noopener noreferrer"}
                            className={`text-sm font-semibold text-gray-700 transition-colors leading-snug ${
                              item.url === '#' ? 'cursor-default' : 'hover:text-blue-600 cursor-pointer'
                            }`}
                          >
                            {item.title}
                          </a>
                        </td>
                        
                        {/* Published Date */}
                        <td className="py-4 px-6 text-sm text-gray-600 text-center font-medium">
                          {item.date}
                        </td>

                        {/* Action */}
                        <td className="py-4 px-6 text-center">
                          {item.isExternal ? (
                            <a
                              href={item.url}
                              onClick={(e) => handleExternalClick(e, item.url)}
                              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-full border border-blue-200 text-blue-600 text-xs font-bold tracking-wide transition-all select-none hover:bg-blue-600 hover:text-white cursor-pointer whitespace-nowrap"
                            >
                              <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                              </svg>
                              <span>VISIT WEBSITE</span>
                            </a>
                          ) : (
                            <a
                              href={item.url === '#' ? undefined : item.url}
                              target={item.url === '#' ? undefined : "_blank"}
                              rel={item.url === '#' ? undefined : "noopener noreferrer"}
                              className={`inline-flex items-center justify-center gap-1 px-4 py-1.5 rounded-full border border-blue-200 text-blue-600 text-xs font-bold tracking-wide transition-all select-none whitespace-nowrap ${
                                item.url === '#' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600 hover:text-white cursor-pointer'
                              }`}
                            >
                              <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span>VIEW</span>
                            </a>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} className="py-12 text-center text-gray-500">
                        <div className="flex flex-col items-center justify-center gap-2">
                          <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="text-sm font-medium">No press releases found matching your search.</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-6 bg-white py-3 border-t border-gray-100 px-2 select-none">
              {/* Results summary */}
              <p className="text-xs text-gray-500 font-medium">
                Showing <span className="font-semibold text-gray-700">{(currentPage - 1) * itemsPerPage + 1}</span> to{' '}
                <span className="font-semibold text-gray-700">
                  {Math.min(currentPage * itemsPerPage, processedReleases.length)}
                </span>{' '}
                of <span className="font-semibold text-gray-700">{processedReleases.length}</span> entries
              </p>

              {/* Pagination buttons */}
              <div className="flex items-center gap-1.5">
                {/* Prev Button */}
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white transition-colors cursor-pointer"
                >
                  Previous
                </button>

                {/* Page numbers */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-8 h-8 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        currentPage === pageNum
                          ? 'bg-[#052356] text-white shadow-sm'
                          : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {pageNum}
                    </button>
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white transition-colors cursor-pointer"
                >
                  Next
                </button>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
