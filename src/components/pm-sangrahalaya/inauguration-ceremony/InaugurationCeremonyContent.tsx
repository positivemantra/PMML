"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Spectral } from "next/font/google";
import { ZoomIn } from "lucide-react";
import HeroSection from "@/components/Home/HeroSection";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export default function InaugurationCeremonyContent() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isSpeechModalOpen, setIsSpeechModalOpen] = useState(false);

  return (
    <div className="w-full flex flex-col bg-white">
      {/* ── Main Hero Section ── */}
      <HeroSection />

      {/* ── Title Bar (Grey Band) ── */}
      <div className="w-full bg-[#f4f4f4] py-8 text-[#052356] border-t border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start text-left">
          <div className="w-12 h-1 bg-[#f37021] mb-4" />
          <h1 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight mb-2`}>
            Inauguration Ceremony
          </h1>
        </div>
      </div>

      {/* ── Section 1: Overview & Vision ── */}
      <section className="w-full py-10 sm:py-12 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="w-12 h-1 bg-[#f37021] mb-4" />
              <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] mb-4 leading-tight`}>
                Honoring Every Prime Minister of India
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4 text-justify">
                Conceptualized by Prime Minister Narendra Modi, the Pradhanmantri Sangrahalaya is a non-partisan tribute to every Prime Minister of India since Independence. 
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify">
                The museum honors their unique leadership, vision, and contributions in rebuilding the nation, irrespective of their ideology or political tenure, aiming to inspire the younger generation to take pride in India's robust democratic journey.
              </p>
            </div>
            <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px] rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 hover:scale-[1.02] transition-transform duration-500">
              <Image
                src="/inauguration of museum/EY2B4281.JPG"
                alt="Honoring every Prime Minister"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Ceremony Highlights ── */}
      <section className="w-full py-10 sm:py-12 bg-slate-50 text-left border-t border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px] rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 lg:order-1 hover:scale-[1.02] transition-transform duration-500">
              <Image
                src="/inauguration of museum/EY2B4034 copy.jpg"
                alt="First ticket purchased by PM Modi"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-6 flex flex-col lg:order-2 justify-center">
              <div className="w-12 h-1 bg-[#f37021] mb-4" />
              <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] mb-4 leading-tight`}>
                The Historic Launch Ceremony
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4 text-justify">
                The grand inauguration of the museum took place on April 14, 2022. The event marked a new chapter in historical documentation and immersive public education.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify">
                As a symbolic gesture, Prime Minister Modi purchased the very first ticket at the counter before entering the building, emphasizing accessibility and transparency in public monuments before dedicating the Sangrahalaya to the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: The Venue & Design ── */}
      <section className="w-full py-10 sm:py-12 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="w-12 h-1 bg-[#f37021] mb-4" />
              <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] mb-4 leading-tight`}>
                Integration of Heritage and Modernity
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4 text-justify">
                Located within the iconic Teen Murti Bhawan complex, the museum spans a total built-up area of over 15,600 square meters. 
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify">
                It seamlessly integrates the renovated Block I (the former residence of Pandit Jawaharlal Nehru) and Block II (the new structure representing a rising India). The building design is inspired by the narrative of a growing India, constructed with sustainable guidelines ensuring no trees were felled.
              </p>
            </div>
            <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px] rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 hover:scale-[1.02] transition-transform duration-500">
              <Image
                src="/inauguration of museum/EY2B4177.JPG"
                alt="Architecture and Venue"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Dharma Chakra Logo ── */}
      <section className="w-full py-10 sm:py-12 bg-slate-50 text-left border-t border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px] rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 lg:order-1 hover:scale-[1.02] transition-transform duration-500">
              <Image
                src="/building 2/reception.jpg"
                alt="Ashoka Chakra Lobby"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-6 flex flex-col lg:order-2 justify-center">
              <div className="w-12 h-1 bg-[#f37021] mb-4" />
              <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] mb-4 leading-tight`}>
                The Logo: Dharma Chakra
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4 text-justify">
                The logo of the Pradhanmantri Sangrahalaya represents the hands of the citizens of India holding the Dharma Chakra.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify">
                The logo symbolizes the nation's shared commitment to democratic principles, representation, and public power. The Dharma Chakra wheel represents continuous growth, righteousness, and the collective building of the world's largest democracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Speeches & Highlights ── */}
      <section className="w-full py-10 sm:py-12 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">


          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10">
            <div className="lg:col-span-6 aspect-video rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 relative group">
              <a
                href="https://youtu.be/5abCdIvOs0Q"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full block relative"
              >
                <img
                  src="https://img.youtube.com/vi/5abCdIvOs0Q/maxresdefault.jpg"
                  alt="Speech by Shri Narendra Modi, Hon'ble Prime Minister"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://img.youtube.com/vi/5abCdIvOs0Q/hqdefault.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 flex items-center justify-center transition-colors duration-300">
                  <div className="w-16 h-16 bg-[#f37021] rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

              </a>
            </div>
            <div className="lg:col-span-6 flex flex-col">
              <div className="w-12 h-1 bg-[#f37021] mb-4" />
              <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] mb-4 leading-tight`}>
                Prime Minister's Speech
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 text-justify">
                Hon'ble Prime Minister Shri Narendra Modi delivered an inspiring speech celebrating the journey of India and the flag bearers of the nation at the Inauguration Ceremony of the Pradhanmantri Sangrahalaya.
              </p>
              <button
                onClick={() => setIsSpeechModalOpen(true)}
                className="inline-flex items-center gap-2 bg-[#E88B1D] hover:bg-[#d85c15] text-white font-bold text-[11px] sm:text-[12px] tracking-wider uppercase rounded-lg px-5 py-2.5 shadow-md hover:shadow-lg transition-all duration-200 active:scale-98 cursor-pointer select-none outline-none border-none w-fit"
              >
                <span>Read More</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Key Highlights (3 columns) */}
          <div className="border-t border-slate-100 pt-10">
            <div className="w-12 h-1 bg-[#f37021] mb-4" />
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] mb-8 leading-tight`}>
              Key Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Chairman's Speech */}
              <div className="flex flex-col">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-slate-50 mb-4 relative group">
                  <a
                    href="https://youtu.be/ZOIf6dQGrw0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full block relative"
                  >
                    <img
                      src="https://img.youtube.com/vi/ZOIf6dQGrw0/maxresdefault.jpg"
                      alt="Chairman's Speech"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://img.youtube.com/vi/ZOIf6dQGrw0/hqdefault.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 flex items-center justify-center transition-colors duration-300">
                      <div className="w-12 h-12 bg-[#f37021] rounded-full flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110">
                        <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
                <h5 className="text-[#052356] text-xs font-extrabold uppercase tracking-wider mb-1">
                  Chairman's Speech
                </h5>
                <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed text-justify">
                  Shri Nripendra Misra, Hon'ble Chairman, EC, PMML extended a warm welcome to the esteemed guests at the Inauguration Ceremony.
                </p>
              </div>

              {/* Minister of Culture's Speech */}
              <div className="flex flex-col">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-slate-50 mb-4 relative group">
                  <a
                    href="https://youtu.be/SEjUTfHY9bc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full block relative"
                  >
                    <img
                      src="https://img.youtube.com/vi/SEjUTfHY9bc/maxresdefault.jpg"
                      alt="Minister of Culture's Speech"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://img.youtube.com/vi/SEjUTfHY9bc/hqdefault.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 flex items-center justify-center transition-colors duration-300">
                      <div className="w-12 h-12 bg-[#f37021] rounded-full flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110">
                        <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
                <h5 className="text-[#052356] text-xs font-extrabold uppercase tracking-wider mb-1">
                  Minister of Culture's Speech
                </h5>
                <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed text-justify">
                  Shri G. Kishan Reddy, Hon'ble Minister of Culture, talked about the legacy of democratic India and the path ahead at the Inauguration Ceremony.
                </p>
              </div>

              {/* Vice-Chairman's Speech */}
              <div className="flex flex-col">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-slate-50 mb-4 relative group">
                  <a
                    href="https://youtu.be/4iodpC3GWTM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full block relative"
                  >
                    <img
                      src="https://img.youtube.com/vi/4iodpC3GWTM/maxresdefault.jpg"
                      alt="Vice-Chairman's Speech"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://img.youtube.com/vi/4iodpC3GWTM/hqdefault.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 flex items-center justify-center transition-colors duration-300">
                      <div className="w-12 h-12 bg-[#f37021] rounded-full flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110">
                        <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
                <h5 className="text-[#052356] text-xs font-extrabold uppercase tracking-wider mb-1">
                  Vice-Chairman's Speech
                </h5>
                <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed text-justify">
                  Dr. A. Surya Prakash, Hon'ble Vice Chairman, EC, PMML presented his vote of thanks and extended appreciation to the guests at the Inauguration Ceremony.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Inaugural Photo Gallery ── */}
      <section className="w-full py-10 sm:py-12 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-10">
            <div className="w-12 h-1 bg-[#f37021] mb-4" />
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] leading-tight`}>
              Glimpses of the Historic Day
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/inauguration of museum/EY2B4034 copy.jpg", caption: "Prime Minister purchasing the first ticket at the counter." },
              { src: "/inauguration of museum/EY2B4177.JPG", caption: "Hon’ble PM inspecting the newly designed corridors of Block II." },
              { src: "/inauguration of museum/EY2B4281.JPG", caption: "PM Narendra Modi addressing the delegates at the ceremony." }
            ].map((photo, idx) => (
              <div 
                key={idx} 
                onClick={() => setLightboxImage(photo.src)}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md border border-slate-200/60 bg-slate-100 group cursor-pointer"
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay Text & Zoom Icon on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 flex flex-col justify-end p-5 transition-colors duration-300">
                  <div className="flex items-center justify-center w-10 h-10 bg-white/90 rounded-full shadow-md mb-auto ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-5 h-5 text-[#052356]" />
                  </div>
                  <p className="text-white text-xs font-semibold leading-normal opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo Lightbox Overlay ── */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative w-full max-w-4xl aspect-[16/10]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightboxImage}
              alt="Enlarged Glimpse"
              fill
              priority
              className="object-contain"
            />
            <button 
              className="absolute top-4 right-4 text-white text-3xl font-light hover:text-[#f37021] select-none cursor-pointer border-none bg-transparent"
              onClick={() => setLightboxImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* ── Speech Modal Overlay ── */}
      {isSpeechModalOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm"
          onClick={() => setIsSpeechModalOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[80vh] flex flex-col shadow-2xl overflow-hidden border border-slate-100 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-[#f4f4f4]">
              <h3 className={`${spectral.className} text-lg sm:text-xl font-bold text-[#052356]`}>
                Prime Minister's Speech
              </h3>
              <button 
                className="text-slate-400 hover:text-[#f37021] text-2xl font-light select-none cursor-pointer border-none bg-transparent"
                onClick={() => setIsSpeechModalOpen(false)}
              >
                &times;
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-6 sm:p-8 custom-scrollbar text-left text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
              <p className="mb-4 font-semibold text-[#052356]">
                केंद्रीय मंत्रिमंडल के मेरे साथी, संसद में मेरे अन्य वरिष्ठ सहयोगीगण, विभिन्न राजनीतिक दलों के सम्मानित साथी, अन्य महानुभाव, देवियों और सज्जनों,
              </p>
              <p className="mb-4">
                देश के अलग-अलग हिस्सों में आज त्योहारों और उत्सवों का अवसर है। आज बैसाखी है, बोहाग बीहू है, आज से ओडिया नव वर्ष भी शुरू हो रहा है, हमारे तमिलनाडु के भाई-बहन भी नए वर्ष का स्वागत कर रहे हैं, मैं उन्हें ‘पुत्तांड’ की बधाई देता हूं। इसके अलावा भी कई क्षेत्रों में नव वर्ष शुरू हो रहा है, अनेक पर्व मनाए जा रहे हैं। मैं समस्त देशवासियों को सभी पर्वों की बहुत-बहुत बधाई देता हूं। आप सभी को भगवान महावीर जयंती की भी बहुत-बहुत शुभकामनाएं !
              </p>
              <p className="mb-4 font-bold text-[#052356]">साथियों,</p>
              <p className="mb-4">
                आज का ये अवसर तो अन्य कारणों से और विशेष हो गया है। आज पूरा देश बाबा साहेब भीमराव आंबेडकर को उनकी जयंती पर आदरपूर्वक, श्रद्धापूर्वक याद कर रहा है। बाबा साहेब जिस संविधान के मुख्य शिल्पकार रहे, उस संविधान ने हमें संसदीय प्रणाली का आधार दिया। इस संसदीय प्रणाली का प्रमुख दायित्व देश के प्रधानमंत्री का पद रहा है। ये मेरा सौभाग्य है कि आज मुझे, प्रधानमंत्री संग्रहालय, देश को समर्पित करने का अवसर मिला है। ऐसे समय में, जब देश अपनी आजादी के 75 वर्ष का पर्व, आजादी का अमृत महोत्सव मना रहा है, तब ये म्यूजियम, एक भव्य प्रेरणा बनकर आया है। इन 75 वर्षों में देश ने अनेक गौरवमय पल देखे हैं। इतिहास के झरोखे में इन पलों का जो महत्व है, वो अतुलनीय है। ऐसे बहुत से पलों की झलक प्रधानमंत्री संग्रहालय में भी देखने को मिलेगी। मैं सभी देशवासियों को बहुत-बहुत बधाई देता हूं। थोड़ी देर पहले इस प्रोजेक्ट से जुड़े सभी साथियों से मिलने का भी मुझे अवसर मिला। सभी लोगों ने बहुत प्रशंसनीय काम किया है। इसके लिए पूरी टीम को मैं बधाई देता हूं। मैं आज यहां पूर्व प्रधानमंत्रियों के परिवारों को भी देख रहा हूं। आप सभी का अभिनंदन है, स्वागत है। प्रधानमंत्री संग्रहालय के लोकार्पण का ये अवसर आप सभी की उपस्थिति से और भव्य बन गया है। आपकी उपस्थिति ने प्रधानमंत्री संग्रहालय की सार्थकता को, इसकी प्रासंगिकता को और बढ़ा दिया है।
              </p>
              <p className="mb-4 font-bold text-[#052356]">साथियों,</p>
              <p className="mb-4">
                देश आज जिस ऊंचाई पर है, वहां तक उसे पहुंचाने में स्वतंत्र भारत के बाद बनी प्रत्येक सरकार का योगदान है। मैंने लाल किले से भी ये बात कई बार दोहराई है। आज ये संग्रहालय भी प्रत्येक सरकार की साझा विरासत का जीवंत प्रतिबिंब बन गया है। देश के हर प्रधानमंत्री ने अपने समय की अलग-अलग चुनौतियों को पार करते हुए देश को आगे ले जाने की कोशिश की है। सबके व्यक्तित्व, कृतित्व, नेतृत्व के अलग-अलग आयाम रहे। ये सब लोक स्मृति की चीजें हैं। देश की जनता, विशेषकर युवा वर्ग, भावी पीढ़ी सभी प्रधानमंत्रियों के बारे में जानेगी, तो उन्हें प्रेरणा मिलेगी। इतिहास और वर्तमान से भविष्य के निर्माण की राह पर राष्ट्रकवि रामधारी सिंह दिनकर जी ने कभी लिखा था-
              </p>
              <p className="italic text-[#f37021] font-medium my-3 pl-4 border-l-2 border-[#f37021]/60">
                प्रियदर्शन इतिहास कंठ में, आज ध्वनित हो काव्य बने।<br />
                वर्तमान की चित्रपटी पर, भूतकाल सम्भाव्य बने।
              </p>
              <p className="mb-4">
                भाव ये कि, हमारी सांस्कृतिक चेतना में जो गौरवशाली अतीत समाहित है वो काव्य में बदलकर गूंजे, इस देश का सम्पन्न इतिहास हम वर्तमान पटल पर भी संभव कर सकें। आने वाले 25 वर्ष, आजादी का ये अमृतकाल, देश के लिए बहुत अहम है। मुझे विश्वास है कि ये नवनिर्मित प्रधानमंत्री संग्रहालय, भविष्य के निर्माण का भी एक ऊर्जा केंद्र बनेगा। अलग-अलग दौर में लीडरशिप की क्या चुनौतियां रहीं, कैसे उनसे निपटा गया, इसको लेकर भी भावी पीढ़ी के लिए ये एक बड़ी प्रेरणा का माध्यम बनेगा। यहां प्रधानमंत्रियों से संबंधित दुर्लभ तस्वीरें, भाषण, साक्षात्कार, मूल लेखन जैसी स्मरणीय वस्तुएं रखी गयी हैं।
              </p>
              <p className="mb-4 font-bold text-[#052356]">साथियों,</p>
              <p className="mb-4">
                सार्वजनिक जीवन में जो लोग उच्च पदों पर रहते हैं, जब हम उनके जीवन पर दृष्टि डालते हैं, तो ये भी एक तरह से इतिहास का अवलोकन करना ही होता है। उनके जीवन की घटनाएं, उनके सामने आई चुनौतियां, उनके फैसले, बहुत कुछ सिखाते हैं। यानी एक तरह से उनका जीवन चल रहा होता है और साथ-साथ इतिहास का निर्माण भी होता चलता है। इस जीवन को पढ़ना, इतिहास के अध्ययन की तरह है। इस म्यूजियम से स्वतंत्र भारत का इतिहास जाना जा सकेगा। हमने कुछ साल पहले ही संविधान दिवस मनाने की शुरुआत कर राष्ट्रीय चेतना जगाने की तरफ अहम कदम उठाया है। ये उसी दिशा में एक और महत्वपूर्ण पड़ाव है।
              </p>
              <p className="mb-4 font-bold text-[#052356]">साथियों,</p>
              <p className="mb-4">
                देश के हर प्रधानमंत्री ने संविधान सम्मत लोकतंत्र के लक्ष्यों की उसकी पूर्ति में भरसक योगदान दिया है। उन्हें स्मरण करना स्वतंत्र भारत की यात्रा को जानना है। यहां आने वाले लोग देश के पूर्व प्रधानमंत्रियों की योगदान से रूबरू होंगे, उनकी पृष्ठभूमि, उनके संघर्ष-सृजन को जानेंगे। भावी पीढ़ी को ये भी सीख मिलेगी कि हमारे लोकतांत्रिक देश में किस-किस पृष्ठभूमि से आकर अलग-अलग प्रधानमंत्री बनते रहे हैं। ये हम भारतवासियों के लिए बहुत गौरव की बात है कि हमारे ज्यादातर प्रधानमंत्री बहुत ही साधारण परिवार से रहे हैं। सुदूर देहात से आकर, एकदम गरीब परिवार से आकर, किसान परिवार से आकर भी प्रधानमंत्री पद पर पहुंचना भारतीय लोकतंत्र की महान परंपराओं के प्रति विश्वास को दृढ़ करता है। ये देश को युवाओं को भी विश्वास देता है कि भारत की लोकतांत्रिक व्यवस्था में सामान्य परिवार में जन्म लेने वाला व्यक्ति भी शीर्षतम पदों पर पहुंच सकता है।
              </p>
              <p className="mb-4 font-bold text-[#052356]">साथियों,</p>
              <p className="mb-4">
                इस संग्रहालय में जितना अतीत है, उतना ही भविष्य भी है। यह संग्रहालय, देश के लोगों को बीते समय की यात्रा करवाते हुए नई दिशा, नए रूप में भारत की विकास यात्रा पर ले जाएगा। एक ऐसी यात्रा जहां पर आप एक नए भारत के सपने को प्रगति के पथ पर आगे बढ़ते हुए निकट से देख सकेंगे। इस बिल्डिंग में 40 से अधिक गैलरियां हैं और लगभग 4 हज़ार लोगों के एक साथ भ्रमण की व्यवस्था है। वर्चुअल रियल्टी, रोबोट्स और दूसरी आधुनिक टेक्नोलॉजी के माध्यम से तेज़ी से बदल रहे भारत की तस्वीर ये संग्रहालय दुनिया को दिखाएगा। ये टेक्नॉलॉजी के माध्यम से ऐसा अनुभव देगा जैसे हम वाकई उसी दौर में जी रहे हैं, उन्हीं प्रधानमंत्रियों के साथ सेल्फी ले रहे हैं, उनसे संवाद कर रहे हैं।
              </p>
              <p className="mb-4 font-bold text-[#052356]">साथियों,</p>
              <p className="mb-4">
                हमें अपने युवा साथियों को इस म्यूजियम में आने के लिए अधिक से अधिक प्रोत्साहित करना चाहिए। ये म्यूजियम उनके अनुभवों को और विस्तार देगा। हमारे युवा सक्षम हैं, और उनमें देश को नई ऊंचाइयों तक ले जाने की क्षमता है। वे अपने देश के बारे में, स्वतंत्र भारत के महत्वपूर्ण अवसरों के बारे में जितना अधिक जानेंगे, समझगें, उतना ही वो सटीक फैसले लेने में सक्षम भी बनेंगे। ये संग्रहालय, आने वाली पीढ़ियों के लिए ज्ञान का, विचार का, अनुभवों का एक द्वार खोलने का काम करेगा। यहां आकर उन्हें जो जानकारी मिलेगी, जिन तथ्यों से वो परिचित होंगे, वो उन्हें भविष्य के निर्णय लेने में मदद करेगी। इतिहास के जो विद्यार्थी रिसर्च करना चाहते हैं, उन्हें भी यहां आकर बहुत लाभ होगा।
              </p>
              <p className="mb-4 font-bold text-[#052356]">साथियों,</p>
              <p className="mb-4">
                भारत, लोकतंत्र की जननी है, Mother of Democracy है। भारत के लोकतंत्र की बड़ी विशेषता ये भी है कि समय के साथ इसमें निरंतर बदलाव आता रहा है। हर युग में, हर पीढ़ी में, लोकतंत्र को और आधुनिक बनाने, और अधिक सशक्त करने का निरंतर प्रयास हुआ है। समय के साथ जिस तरह कई बार समाज में कुछ कमियां घर कर जाती हैं, वैसे ही लोकतंत्र के सामने भी समय-समय पर चुनौतियां आती रही हैं। इन कमियों को दूर करते रहना, खुद को परिष्कृत करते रहना, भारतीय लोकतंत्र की खूबी है। और इसमें हर किसी ने अपना योगदान दिया है। एक दो अपवाद छोड़ दें तो हमारे यहां लोकतंत्र को लोकतांत्रिक तरीके से मजबूत करने की गौरवशाली परंपरा रही है। इसलिए हमारा भी ये दायित्व है कि अपने प्रयासों से हम लोकतंत्र को और ज्यादा मजबूत करते रहें। आज जो भी चुनौतियां हमारे लोकतंत्र के सामने हैं, समय के साथ जो भी कमियां घर कर गई हैं, उन्हें दूर करते हुए हम आगे बढ़ें, ये लोकतंत्र की भी हमसे अपेक्षा है और देश की भी हम सभी से अपेक्षा है। आज का ये ऐतिहासिक अवसर, लोकतंत्र को सशक्त और समृद्ध करने के संकल्प को दोहराने का भी एक बेहतरीन अवसर है। हमारे भारत में, विभिन्न विचारों, विभिन्न परंपराओं का समावेश होता रहा है। और हमारा लोकतंत्र हमें ये बात सिखाता है कि कोई एक विचार ही उत्तम हो, ये जरूरी नहीं है। हम तो उस सभ्यता से पले-बढ़े हैं जिसमें कहा जाता है-
              </p>
              <p className="italic text-[#f37021] font-medium my-3 pl-4 border-l-2 border-[#f37021]/60">
                आ नो भद्राः<br />
                क्रतवो यन्तु विश्वतः
              </p>
              <p className="mb-4">
                यानि हर तरफ से नेक विचार हमारे पास आएं ! हमारा लोकतंत्र हमें प्रेरणा देता है, नवीनता को स्वीकारने की, नए विचारों को स्वीकारने की। प्रधानमंत्री संग्रहालय में आने वाले लोगों को लोकतंत्र की इस ताकत के भी दर्शन होंगे। विचारों को लेकर सहमति-असहमति हो सकती है, अलग-अलग राजनीतिक धाराएं हो सकती हैं लेकिन लोकतंत्र में सबका ध्येय एक ही होता है- देश का विकास। इसलिए ये म्यूजियम सिर्फ प्रधानमंत्रियों की उपलब्धियों, उनके योगदान तक ही सीमित नहीं है। ये हर विषम परिस्थितियों के बावजूद देश में गहरे होते लोकतंत्र, हमारी संस्कृति में हज़ारों वर्षों से फले-फूले लोकतांत्रिक संस्कारों की मज़बूती और संविधान के प्रति सशक्त होती आस्था का भी प्रतीक है।
              </p>
              <p className="mb-4 font-bold text-[#052356]">साथियों,</p>
              <p className="mb-4">
                अपनी विरासत को सहेजना, उसे भावी पीढ़ी तक पहुंचाना प्रत्येक राष्ट्र का दायित्व होता है। अपने स्वतंत्रता आंदोलन, अपने सांस्कृतिक वैभव के तमाम प्रेरक प्रसंगों और प्रेरक व्यक्तित्वों को सामने, जनता जनार्दन के सामने लाने के लिए हमारी सरकार निरंतर काम कर रही है। देश से चोरी हुई मूर्तियों और कलाकृतियों को वापस लाना हो, पुराने म्यूज़ियम का पुनर्निर्माण हो, नए संग्रहालय बनाना हो, एक बहुत बड़ा अभियान बीते 7-8 वर्षों से लगातार जारी है। और इन प्रयासों के पीछे एक और बड़ा मकसद है। जब हमारी नौजवान पीढ़ी, ये जीवंत प्रतीक देखती है, तो उसे तथ्य का भी बोध होता है और सत्य का भी बोध होता है। जब कोई जलियांवाला बाग स्मारक को देखता है, तो उसे उस आजादी के महत्व का पता चलता है, जिसका वो आनंद ले रहा है। जब कोई आदिवासी स्वतंत्रता सेनानी संग्रहालय देखता है, तो उन्हें पता चलता है कि आजादी की लड़ाई में दूर से दूर जंगलों में रहने वाले हमारे आदिवासी भाई-बहनों ने कैसे हर क्षेत्र का योगदान रहा, हर वर्ग ने अपना सर्वस्व न्योछावर किया। जब कोई क्रांतिकारियों पर बने संग्रहालय को देखता है, तो उन्हें एहसास होता है कि देश के लिए बलिदान होने का मतलब क्या होता है। ये हमारी सरकार का सौभाग्य है कि यहां दिल्ली में हमने बाबा साहेब की महापरिनिर्वाण स्थली, अलीपुर रोड पर बाबा साहेब मेमोरियल का निर्माण करवाया है। बाबा साहेब आंबेडकर के जो पंचतीर्थ विकसित किए गए हैं, वो सामाजिक न्याय और अटूट राष्ट्रनिष्ठा के लिए प्रेरणा के केंद्र हैं।
              </p>
              <p className="mb-4 font-bold text-[#052356]">साथियों,</p>
              <p className="mb-4">
                यह प्रधानमंत्री संग्रहालय भी लोगों द्वारा चुने गए प्रधान मंत्रियों की विरासत को प्रदर्शित करके, सबका प्रयास की भावना का उत्सव मनाता है। इसका जो Logo है, उस पर भी आप सबका जरूर ध्यान होगा। प्रधानमंत्री संग्रहालय का Logo कुछ इस तरह का है कि उसमें कोटि-कोटि भारतीयों के हाथ चक्र को थामे हुए हैं। ये चक्र, 24 घंटे निरंतरता का प्रतीक है, समृद्धि के संकल्प के लिए परिश्रम का प्रतीक है। यही वो प्रण है, यही तो वो चेतना है, यही वो ताकत है, जो आने वाले 25 वर्षों में भारत के विकास को परिभाषित करने वाली है।
              </p>
              <p className="mb-4 font-bold text-[#052356]">साथियों,</p>
              <p className="mb-4">
                भारत के इतिहास की महानता से, भारत के समृद्धि काल से हम सभी परिचित रहे हैं। हमें इसका हमेशा बहुत गर्व भी रहा है। भारत की विरासत से और भारत के वर्तमान से, विश्व सही रूप में परिचित हो, ये भी उतना ही आवश्यक है। आज जब एक नया वर्ल्ड ऑर्डर उभर रहा है, विश्व, भारत को एक आशा और विश्वास भरी नजरों से देख रहा है, तो भारत को भी हर पल नई ऊंचाई पर पहुंचने के लिए अपने प्रयास बढ़ाने होंगे। और ऐसे समय में, आजादी के बाद के ये 75 वर्ष, भारत के प्रधानमंत्रियों का कार्यकाल, ये प्रधानमंत्री संग्रहालय, हमें निरंतर प्रेरणा देगा। ये संग्रहालय, हमारे भीतर, भारत के लिए बड़े संकल्पों का बीज बोने का सामर्थ्य रखता है। ये संग्रहालय, भारत के भविष्य को बनाने वाले युवाओं में कुछ कर गुजरने की भावना पैदा करेगा। आने वाले समय में यहां जो भी नाम जुड़ेंगे, उनके जो भी काम जुड़ेंगे, उनमें हम सभी एक विकसित भारत के सपने को साकार होने का सुकून ढूंढ पाएंगे। इसके लिए आज मेहनत करने का समय है। आज़ादी का ये अमृतकाल एकजुट, एकनिष्ठ, प्रयासों का है। देशवासियों से मेरा आग्रह है कि आप खुद भी आएं और अपने बच्चों को भी इस म्यूजियम का दर्शन कराने जरूर लाएं। इसी आमंत्रण के साथ, इसी आग्रह के साथ, एक बार फिर प्रधानमंत्री संग्रहालय की बहुत-बहुत बधाई देता हूं। धन्यवाद !
              </p>

              <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col items-end">
                <span className="font-bold text-[#052356] text-sm sm:text-base">- Narendra Modi</span>
                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Prime Minister of India</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
