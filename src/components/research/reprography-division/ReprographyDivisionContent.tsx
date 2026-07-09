"use client";

import React from "react";
import Image from "next/image";
import { Spectral } from "next/font/google";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export default function ReprographyDivisionContent() {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* ── Subpage Hero Banner (CCS image) ── */}
      <section className="relative w-full aspect-[16/7.5] sm:aspect-[2.6/1] lg:aspect-[3.8/1] min-h-[280px] lg:h-auto overflow-hidden">
        {/* Background Image */}
        <Image
          src="/hero section/ccs-building.jpg"
          alt="PMML Research and Reprography Division"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>

      {/* ── Reprography Main Content Section ── */}
      <section className="w-full pt-10 lg:pt-12 pb-5 lg:pb-6 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Column: Single Main Image (Taking 01 1.jpg from public/Reprography) */}
            <div className="lg:col-span-5 w-full flex flex-col h-full min-h-[320px] sm:min-h-[380px] lg:min-h-0">
              <div className="relative flex-1 w-full h-full rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-slate-50 min-h-[320px] sm:min-h-[380px] lg:min-h-0">
                <Image
                  src="/Reprography/DSC_9434.JPG"
                  alt="Reprography Division Archive Storage"
                  fill
                  priority
                  sizes="(max-w-1024px) 100vw, 550px"
                  className="object-cover hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            </div>

            {/* Right Column: Text */}
            <div className="lg:col-span-7 flex flex-col text-left justify-start h-full">
              <div>
                {/* Orange Accent Line */}
                <div className="w-12 h-1 bg-[#f37021] mb-4" />

                {/* Title */}
                <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight mb-6`}>
                  Reprography Division
                </h2>

                {/* Description */}
                <p className="text-sm sm:text-[15px] lg:text-[16px] text-gray-500 font-medium leading-relaxed text-justify">
                  The Reprography Division of the Prime Ministers Museum & Library (PMML) has been preserving the nation's documentary heritage since the launch of its microfilming programme in 1968. The Division undertakes the microfilming and digitization of newspapers, periodicals, private papers, institutional records, theses, and other archival collections to ensure their long-term preservation and accessibility for researchers. Its collections include newspapers published in English, Hindi, Urdu, Malayalam, Kannada, Marathi, Punjabi, Gujarati, Tamil, Telugu, Bengali and Assamese, representing diverse regions of India. The selection of materials is guided by the Library's research priorities and the needs of scholars, particularly in the fields of South Asian Studies and Modern Indian History.
                </p>
              </div>

            </div>

          </div>

          <div className="mt-4">
            <p className="text-sm sm:text-[15px] lg:text-[16px] text-gray-500 font-medium leading-relaxed text-justify">
              The Division has preserved numerous historically significant newspaper titles, including Amrita Bazar Patrika, Hindustan Times, The Tribune, Bombay Chronicle, The Leader, The Telegraph, Aaj, The Times of India, Daily Excelsior, and The Hindu, along with important institutional publications such as the Aligarh Institute Gazette and AICC Papers. At present, it maintains approximately 23,000 microfilm rolls, including 5,000 duplicate rolls, and nearly 58,000 microfiche sheets. The Division has also digitized around 10,000 microfilm rolls, creating nearly 7.5 million (75 lakh) high-quality digital images, thereby significantly enhancing the preservation and accessibility of PMML's archival collections.
            </p>
          </div>

        </div>
      </section>

      {/* ── Microfilming Section ── */}
      <section className="w-full py-5 lg:py-6 bg-white border-t border-gray-100 text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Text Content */}
            <div className="lg:col-span-7 flex flex-col text-left justify-start">
              <div>
                {/* Orange Accent Line */}
                <div className="w-12 h-1 bg-[#f37021] mb-4" />

                {/* Title */}
                <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight mb-6`}>
                  Microfilming
                </h2>

                {/* Descriptions */}
                <div className="text-sm sm:text-[15px] lg:text-[16px] text-gray-500 font-medium leading-relaxed text-justify">
                  <p>
                    Microfilming is one of the most reliable methods for the long-term preservation of archival records. Microfilm Rolls are stored on reels under controlled temperature and humidity conditions to ensure their longevity. The Reprography Division uses both conventional microfilm cameras and modern Archive Writer technology to create microfilms from digital data, ensuring effective preservation of archival materials.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Single Image */}
            <div className="lg:col-span-5 w-full pt-4 lg:pt-0">
              <div className="relative aspect-[3/2] w-full rounded-2xl overflow-hidden shadow-md bg-slate-50">
                <Image
                  src="/Reprography/DSC_9489.JPG"
                  alt="Conventional technique for Microfilming"
                  fill
                  sizes="(max-w-768px) 100vw, 550px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Microfilm Preservation & Quality Assurance Section ── */}
      <section className="w-full py-5 lg:py-6 bg-white border-t border-gray-100 text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Row */}
          <div className="w-full mb-8">
            {/* Orange Accent Line */}
            <div className="w-12 h-1 bg-[#f37021] mb-4" />
            
            {/* Title */}
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight mb-3`}>
              Microfilm Preservation & Quality Assurance
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Stacked Images */}
            <div className="lg:col-span-4 w-full flex flex-col gap-4">
              {/* Image 1 */}
              <div className="relative aspect-[3/2] w-full rounded-2xl overflow-hidden shadow-md bg-slate-50">
                <Image
                  src="/Reprography/Picture2.jpg"
                  alt="Microfilm Processing"
                  fill
                  sizes="(max-w-768px) 100vw, 450px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Image 2 */}
              <div className="relative aspect-[3/2] w-full rounded-2xl overflow-hidden shadow-md bg-slate-50">
                <Image
                  src="/Reprography/DSC_7740.JPG"
                  alt="Microfilm Storage Drawers"
                  fill
                  sizes="(max-w-768px) 100vw, 450px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Column: Content Subsections */}
            <div className="lg:col-span-8 flex flex-col text-left justify-start space-y-6">
              
              {/* Subsection 1 */}
              <div>
                <h4 className="font-bold text-[#052356] text-[15px] lg:text-[16px] uppercase tracking-wide mb-1.5">
                  DUPLICATING
                </h4>
                <p className="text-sm sm:text-[15px] lg:text-[16px] text-gray-500 font-medium leading-relaxed text-justify">
                  The Reprography Division prepares duplicate copies of master microfilms to provide access copies for the Library, ensuring the preservation of original master microfilms while facilitating scholarly consultation.
                </p>
              </div>

              {/* Subsection 2 */}
              <div>
                <h4 className="font-bold text-[#052356] text-[15px] lg:text-[16px] uppercase tracking-wide mb-1.5">
                  QUALITY CHECKING & ACCESSIONING
                </h4>
                <p className="text-sm sm:text-[15px] lg:text-[16px] text-gray-500 font-medium leading-relaxed text-justify">
                  The Reprography Division carries out quality checking of newly prepared microfilms and accessioning of microfilms to ensure proper documentation, identification, and archival control.
                </p>
              </div>

              {/* Subsection 3 */}
              <div>
                <h4 className="font-bold text-[#052356] text-[15px] lg:text-[16px] uppercase tracking-wide mb-1.5">
                  QUALITY CONTROL OF MICROFILMS
                </h4>
                <p className="text-sm sm:text-[15px] lg:text-[16px] text-gray-500 font-medium leading-relaxed text-justify">
                  The Reprography Division periodically inspects microfilms to monitor their archival condition and ensure long-term usability. Each microfilm is examined for scratches, spots, chemical residues, and other defects. Whenever necessary, microfilms are rewind and rewash to maintain prescribed archival standards.
                </p>
              </div>

              {/* Subsection 4 */}
              <div>
                <h4 className="font-bold text-[#052356] text-[15px] lg:text-[16px] uppercase tracking-wide mb-1.5">
                  PRESERVATION OF MICROFILM COLLECTION
                </h4>
                <p className="text-sm sm:text-[15px] lg:text-[16px] text-gray-500 font-medium leading-relaxed text-justify">
                  The Reprography Division preserves archival records on microfilms by maintaining controlled storage conditions. Preservation measures include periodic sample inspections, temperature control, and humidity control to ensure the long-term stability of the collection.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── Reprography Services Section ── */}
      <section className="w-full py-5 lg:py-6 bg-white border-t border-gray-100 text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Row */}
          <div className="w-full mb-8">
            {/* Orange Accent Line */}
            <div className="w-12 h-1 bg-[#f37021] mb-4" />
            
            {/* Title */}
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight mb-3`}>
              Reprography Services
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-12 flex flex-col text-left justify-start space-y-6">
              
              {/* Subsection 1 */}
              <div>
                <h4 className="font-bold text-[#052356] text-[15px] lg:text-[16px] uppercase tracking-wide mb-1.5">
                  Microfilm Scanning
                </h4>
                <p className="text-sm sm:text-[15px] lg:text-[16px] text-gray-500 font-medium leading-relaxed text-justify">
                  The Reprography Division provides microfilm scanning services for scholars for research purposes.
                </p>
              </div>

              {/* Subsection 2 */}
              <div>
                <h4 className="font-bold text-[#052356] text-[15px] lg:text-[16px] uppercase tracking-wide mb-1.5">
                  Supply of Positive Microfilms
                </h4>
                <p className="text-sm sm:text-[15px] lg:text-[16px] text-gray-500 font-medium leading-relaxed text-justify">
                  Positive copies of microfilms are supplied to scholars and researchers for academic and research purposes while ensuring the preservation of master microfilms.
                </p>
              </div>

              {/* Subsection 3 */}
              <div>
                <h4 className="font-bold text-[#052356] text-[15px] lg:text-[16px] uppercase tracking-wide mb-1.5">
                  Photography of Academic and Official Events
                </h4>
                <p className="text-sm sm:text-[15px] lg:text-[16px] text-gray-500 font-medium leading-relaxed text-justify">
                  The Reprography Division provides photographic coverage of academic and official events, including talks, lectures, seminars, panel discussions, exhibitions, VIP visits, and other institutional events organized by PMML. It also offers photography services at the Picture Point Sangrahalaya, providing visitors with high-quality photographic souvenirs.
                </p>
              </div>

              {/* Subsection 4 */}
              <div>
                <h4 className="font-bold text-[#052356] text-[15px] lg:text-[16px] uppercase tracking-wide mb-1.5">
                  Design and Printing Support
                </h4>
                <p className="text-sm sm:text-[15px] lg:text-[16px] text-gray-500 font-medium leading-relaxed text-justify">
                  The Division design and printing support for official publications and promotional materials, including posters, brochures, leaflets, banners, invitations, certificates, and other communication materials.
                </p>
              </div>

              {/* Subsection 5 */}
              <div>
                <h4 className="font-bold text-[#052356] text-[15px] lg:text-[16px] uppercase tracking-wide mb-1.5">
                  Photocopying Services
                </h4>
                <p className="text-sm sm:text-[15px] lg:text-[16px] text-gray-500 font-medium leading-relaxed text-justify">
                  The Division provides photocopying services for official work at the Reprography Section and for scholars at the Library, facilitating easy access to reference and research materials in accordance with institutional guidelines.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── Preservation Unit Section ── */}
      <section className="w-full py-5 lg:py-6 bg-white border-t border-gray-100 text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Row */}
          <div className="w-full mb-8">
            {/* Orange Accent Line */}
            <div className="w-12 h-1 bg-[#f37021] mb-4" />
            
            {/* Title */}
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight mb-3`}>
              Preservation Unit
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Text (Only the paragraph) */}
            <div className="lg:col-span-7 flex flex-col text-left justify-start">
              {/* Description */}
              <p className="text-sm sm:text-[15px] lg:text-[16px] text-gray-500 font-medium leading-relaxed text-justify">
                Established in 1970 to meet the growing conservation needs of the expanding collections, the Preservation Unit is responsible for the systematic conservation and preventive care of library and archival materials, ensuring their long-term physical stability and accessibility for research and reference. The Unit employs scientific conservation methods and archival-quality materials in accordance with established preservation standards. Its activities include minor and tissue repairs, binding and repair of books using Rexene, leather, and cloth, lamination, guarding, flattening, stitching, and reinforcement of damaged documents. Paper conservation follows a structured process involving pagination, deacidification, fumigation, repair, adhesive application, and strengthening of fragile papers to enhance their durability and longevity. The Unit also undertakes the conservation of photographic materials by transferring photographs from acidic albums and preserving them through polyester encapsulation, providing long-term protection against physical, environmental, and biological damage. To date, the Unit has successfully conserved and encapsulated <strong>2,439 photo albums</strong> containing approximately <strong>165,044 photographs</strong>, ensuring their long-term preservation and accessibility. These comprehensive preservation measures safeguard PMML's invaluable library and archival collections for future generations.
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5 w-full pt-4 lg:pt-0">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-md bg-slate-50">
                <Image
                  src="/Picture1.jpg"
                  alt="Preservation Unit Conservation Work"
                  fill
                  sizes="(max-w-768px) 100vw, 450px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
