"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Spectral } from 'next/font/google';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export default function DisclaimerContent() {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* ── Page Hero Section ── */}
      <section className="relative w-full aspect-[16/7.5] sm:aspect-[2.6/1] lg:aspect-[3.8/1] min-h-[280px] lg:h-auto overflow-hidden">
        <Image
          src="/hero.png"
          alt="Disclaimer"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>



      {/* ── Disclaimer Header Strip (bg-[#f4f4f4] matching RTI strip) ── */}
      <section className="w-full bg-[#f4f4f4] py-8 text-left border-b border-slate-200/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            {/* Top orange accent line */}
            <div className="w-12 h-1 bg-[#f37021] mb-4" />
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
              Disclaimer
            </h2>
          </div>
        </div>
      </section>

      <section className="w-full py-12 lg:py-16 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-600 space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            The information contained in this website is for general information purposes only. The information is provided by the <strong>Prime Ministers Museum and Library (PMML)</strong> and while we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
          </p>
          <p>
            Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
          </p>
          <p>
            Through this website you are able to link to other websites which are not under the control of PMML. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
          </p>
          <p>
            Every effort is made to keep the website up and running smoothly. However, PMML takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
          </p>
        </div>
      </section>
    </div>
  );
}
