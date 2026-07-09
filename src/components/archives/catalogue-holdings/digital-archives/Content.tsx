"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { Spectral } from "next/font/google";
import ArchivesHeroSlider from "@/components/archives/ArchivesHeroSlider";
import styles from "./Content.module.css";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

interface DigitalArchiveItem {
  id: string;
  title: string;
  accessionNumber: string;
  period: string;
  url: string;
}

const DIGITAL_ARCHIVES_DATA: DigitalArchiveItem[] = [
  { id: 'da1', title: 'Abhyankar, G.R.', accessionNumber: '', period: '', url: '#' },
  { id: 'da2', title: 'Abid Hussain', accessionNumber: '', period: '', url: '#' },
  { id: 'da3', title: 'All India Hindu Mahasabha', accessionNumber: '', period: '', url: '#' },
  { id: 'da4', title: 'All India State Peoples\' Conference', accessionNumber: '', period: '', url: '#' },
  { id: 'da5', title: 'All India Women\'s Conference', accessionNumber: '', period: '', url: '#' },
  { id: 'da6', title: 'Bajaj Rahul', accessionNumber: '', period: '', url: '#' },
  { id: 'da7', title: 'Bombay PCC', accessionNumber: '', period: '', url: '#' },
  { id: 'da8', title: 'B.S. Moonje', accessionNumber: '', period: '', url: '#' },
  { id: 'da9', title: 'Cabinet Papers', accessionNumber: '', period: '', url: '#' },
  { id: 'da10', title: 'Chaudhary Charan Singh I Inst.', accessionNumber: '', period: '', url: '#' },
  { id: 'da11', title: 'Chauhan, Shivdan Singh', accessionNumber: '', period: '', url: '#' },
  { id: 'da12', title: 'Chauhan, (Smt.) Vijay Shivdan Singh', accessionNumber: '', period: '', url: '#' },
  { id: 'da13', title: 'Chhagan Lal Jadav papers in 4 parts', accessionNumber: '', period: '', url: '#' },
  { id: 'da14', title: 'Civil Liberties and Human Rights', accessionNumber: '', period: '', url: '#' },
  { id: 'da15', title: 'Desai, Mahadev', accessionNumber: '', period: '', url: '#' },
  { id: 'da16', title: 'Gandhi, M.K. (Pyarelal) (V) Inst', accessionNumber: '', period: '', url: '#' },
  { id: 'da17', title: 'Gandhi M.K.(Pyarelal) (XV) Inst', accessionNumber: '', period: '', url: '#' },
  { id: 'da18', title: 'Gujarat Mitra', accessionNumber: '', period: '', url: '#' },
  { id: 'da19', title: 'Hariprasad Desai', accessionNumber: '', period: '', url: '#' },
  { id: 'da20', title: 'H.D. (Poli) Pamphlet, regarding Gandhi', accessionNumber: '', period: '', url: '#' },
  { id: 'da21', title: 'INA Papers', accessionNumber: '', period: '', url: '#' },
  { id: 'da22', title: 'Jairam Ramesh', accessionNumber: '', period: '', url: '#' },
  { id: 'da23', title: 'Janata Party (I) Inst', accessionNumber: '', period: '', url: '#' },
  { id: 'da24', title: 'Kakasaheb Kalelkar', accessionNumber: '', period: '', url: '#' },
  { id: 'da25', title: 'Kamath H.V.', accessionNumber: '', period: '', url: '#' },
  { id: 'da26', title: 'Kishorlal G. Mashruwala', accessionNumber: '', period: '', url: '#' },
  { id: 'da27', title: 'Kumar Weekly', accessionNumber: '', period: '', url: '#' },
  { id: 'da28', title: 'Mahadev Desai', accessionNumber: '', period: '', url: '#' },
  { id: 'da29', title: 'Maniben Patel', accessionNumber: '', period: '', url: '#' },
  { id: 'da30', title: 'Meerut Conspiracy Case', accessionNumber: '', period: '', url: '#' },
  { id: 'da31', title: 'Mehta, M.S.', accessionNumber: '', period: '', url: '#' },
  { id: 'da32', title: 'Mitra, Asok', accessionNumber: '', period: '', url: '#' },
  { id: 'da33', title: 'Morarji Desai', accessionNumber: '', period: '', url: '#' },
  { id: 'da34', title: 'Narayan, Jayaprakash (I & II) Inst', accessionNumber: '', period: '', url: '#' },
  { id: 'da35', title: 'Narayan, Jayaprakash (III) Inst', accessionNumber: '', period: '', url: '#' },
  { id: 'da36', title: 'Navjivan Trust', accessionNumber: '', period: '', url: '#' },
  { id: 'da37', title: 'Nehru, B.K.', accessionNumber: '', period: '', url: '#' },
  { id: 'da38', title: 'Nehru, Motilal', accessionNumber: '', period: '', url: '#' },
  { id: 'da39', title: 'Nehru, Rameshwari (II) Inst', accessionNumber: '', period: '', url: '#' },
  { id: 'da40', title: 'Nehru, Rameshwari (I) Inst', accessionNumber: '', period: '', url: '#' },
  { id: 'da41', title: 'Oral History Transcripts (831)', accessionNumber: '', period: '', url: '#' },
  { id: 'da42', title: 'Professor K.K. Shastri', accessionNumber: '', period: '', url: '#' },
  { id: 'da43', title: 'PurshotamdasThakurdas', accessionNumber: '', period: '', url: '#' },
  { id: 'da44', title: 'Rajagopalachari, C. (IV) Inst', accessionNumber: '', period: '', url: '#' },
  { id: 'da45', title: 'Rajagopalachari, C. (V) Inst', accessionNumber: '', period: '', url: '#' },
  { id: 'da46', title: 'Rajagopalachari, C. (VI to XII Inst)', accessionNumber: '', period: '', url: '#' },
  { id: 'da47', title: 'Rajagopalachari, C. (XII Inst)', accessionNumber: '', period: '', url: '#' },
  { id: 'da48', title: 'Ratilal Naranji Somani', accessionNumber: '', period: '', url: '#' },
  { id: 'da49', title: 'Sardar Patel', accessionNumber: '', period: '', url: '#' },
  { id: 'da50', title: 'Sayed Mustufahasan Kadri', accessionNumber: '', period: '', url: '#' },
  { id: 'da51', title: 'Singh, Manmohan', accessionNumber: '', period: '', url: '#' },
  { id: 'da52', title: 'Sketches of Dandi March by Chhagan Lal Jadav', accessionNumber: '', period: '', url: '#' },
  { id: 'da53', title: 'S.L. Mehta', accessionNumber: '', period: '', url: '#' },
  { id: 'da54', title: 'Unseen Drawings of Dandi March', accessionNumber: '', period: '', url: '#' },
  { id: 'da55', title: 'U.P. Zamindar Association (Muzaffarnagar)', accessionNumber: '', period: '', url: '#' },
  { id: 'da56', title: 'Virendranath Chattopadhyaya', accessionNumber: '', period: '', url: '#' },
  { id: 'da57', title: 'Vismi Sadi', accessionNumber: '', period: '', url: '#' },
  { id: 'da58', title: 'Y. Subbarow', accessionNumber: '', period: '', url: '#' }
];

export default function DigitalArchivesContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("az");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter and Sort items
  const processedItems = useMemo(() => {
    let result = DIGITAL_ARCHIVES_DATA.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortBy === "az") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      result.sort((a, b) => b.title.localeCompare(a.title));
    }

    return result;
  }, [searchQuery, sortBy]);

  // Reset page when queries change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, sortBy, itemsPerPage]);

  // Pagination calculation
  const totalPages = Math.ceil(processedItems.length / itemsPerPage);
  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return processedItems.slice(startIndex, startIndex + itemsPerPage);
  }, [processedItems, currentPage, itemsPerPage]);

  return (
    <div className="w-full flex flex-col bg-white">
      {/* ── Subpage Hero Banner ── */}
      <ArchivesHeroSlider />

      {/* ── Main List Section ── */}
      <section className="w-full py-12 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Page Heading */}
          <div className="mb-6 text-left">
            <div className="w-12 h-1 bg-[#f37021] mb-2.5" />
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
              Digital Archives
            </h2>
          </div>

          {/* Filter and Search controls */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {/* Search Box */}
            <div className="relative md:col-span-2">
              <input
                type="text"
                placeholder="Search archives..."
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
                <option value="az">Sort: Title (A-Z)</option>
                <option value="za">Sort: Title (Z-A)</option>
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
                <option value={10}>10 per page</option>
                <option value={20}>20 per page</option>
                <option value={50}>50 per page</option>
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
                    <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider">PDF Link</th>
                    <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-center w-64 whitespace-nowrap">Accession Number/List Number</th>
                    <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-center w-48">Period</th>
                    <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-center w-32">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {paginatedItems.length > 0 ? (
                    paginatedItems.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50/50 transition-colors duration-150">
                        {/* Document Title */}
                        <td className="py-4 px-6 flex items-start gap-3">
                          <svg className="w-5.5 h-5.5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                          </svg>
                          <a 
                            href={item.url} 
                            className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors leading-snug cursor-pointer"
                          >
                            {item.title}
                          </a>
                        </td>
                        
                        {/* Accession Number */}
                        <td className="py-4 px-6 text-sm text-gray-600 text-center font-medium">
                          {item.accessionNumber}
                        </td>

                        {/* Period */}
                        <td className="py-4 px-6 text-sm text-gray-600 text-center font-medium">
                          {item.period}
                        </td>

                        {/* View Action */}
                        <td className="py-4 px-6 text-center">
                          <a
                            href={item.url}
                            className="inline-flex items-center justify-center gap-1 px-4 py-1.5 rounded-full border border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white text-xs font-bold tracking-wide transition-all select-none cursor-pointer"
                          >
                            <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>VIEW</span>
                          </a>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="py-12 text-center text-gray-500">
                        <div className="flex flex-col items-center justify-center gap-2">
                          <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="text-sm font-medium">No archives found matching your filters.</p>
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
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 bg-white py-3 border-t border-gray-100 px-2 select-none">
              <p className="text-xs text-gray-500 font-medium">
                Showing <span className="font-semibold text-gray-700">{(currentPage - 1) * itemsPerPage + 1}</span> to{' '}
                <span className="font-semibold text-gray-700">
                  {Math.min(currentPage * itemsPerPage, processedItems.length)}
                </span>{' '}
                of <span className="font-semibold text-gray-700">{processedItems.length}</span> entries
              </p>

              <div className="flex items-center gap-1.5 max-w-full">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white transition-colors cursor-pointer flex-shrink-0"
                >
                  Previous
                </button>

                <div 
                  className={`flex items-center gap-1 overflow-x-auto max-w-[130px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-[400px] py-1 px-1 border border-gray-100 rounded-lg bg-gray-50/50 ${styles.pagesContainer}`}
                >
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-8 h-8 rounded-lg text-xs font-semibold transition-all cursor-pointer flex-shrink-0 ${
                        currentPage === pageNum
                          ? 'bg-[#052356] text-white shadow-sm'
                          : 'border border-gray-200 text-gray-600 hover:bg-gray-50 bg-white'
                      }`}
                    >
                      {pageNum}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white transition-colors cursor-pointer flex-shrink-0"
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
