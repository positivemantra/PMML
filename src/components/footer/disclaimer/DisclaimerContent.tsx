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
          src="/hee.jpg"
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
            The Prime Ministers Museum and Library disclaims liability for any loss or damage from using this site.
          </p>
          <p>
            Prime Ministers Museum and Library is committed to the highest standard of quality information and every attempt has been made to present up to date and accurate information. However, the Prime Ministers Museum and Library gives no warranty as to the accuracy of the information on the web site and accepts no liability for any loss, damage or inconvenience caused as a result of reliance on such information.
          </p>
          <p>
            The portal, its software and all content found on it are provided on an &quot;as is&quot; and &quot;as available&quot; basis and although the Prime Ministers Museum and Library takes all reasonable measures to ensure that the information provided to it from third parties is not defamatory or offensive, it cannot control the content or take responsibility for pages provided by external providers.
          </p>
        </div>
      </section>
    </div>
  );
}
