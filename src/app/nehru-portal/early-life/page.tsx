import React from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";

export default function Page() {
  return (
    <>
      <TopBar />
      <Header />
      <main id="main-content" className="w-full flex-1 innerContent text-left select-none">
        <div className="container">
          <div className="breadCrumbArea cf">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <Link href="/nehru-portal/important-dates">Important Dates</Link>
              <span>Early Life</span>
            </div>
          </div>
          
          <div className="spaceArea">
            <h2 style={{ color: "#a52216" }}>Early Life</h2>
            <div className="text-slate-600 text-xs sm:text-xs md:text-sm leading-relaxed text-justify max-w-none">
              
      <p>
        Jawaharlal Nehru was born on 14 November 1889 at Allahabad, United Provinces (now Uttar Pradesh). His father Motilal Nehru was a renowned lawyer and one of the Mahatma Gandhi’s notable lieutenants. His mother, Swarup Rani Nehru came from a well-known Kashmiri family, settled in Lahore. He had two sisters, Vijayalakshmi and Krishna. Nehru grew up in an atmosphere of privilege at wealthy homes, including a palatial estate called Anand Bhawan, Allahabad. Motilal wanted to give his son the best possible education. In 1896, Nehru was sent to St. Mary’s Convent School, Allahabad, but after six months he was removed from that school. As Nehru wrote in his An Autobiography, “An only son of prosperous parents is apt to be spoilt, especially so in India”. He was educated at home till the age of 16. He was taught by Ferdinand T. Brooks, who stimulated his interest in science and theosophy. Encouraged by his tutor Nehru became a voracious reader and read works from Alice in Wonderland to books by Scott, Charles Dickens, H.G. Wells, Mark Twain and Sherlock Holmes. He also read stories of the Buddha, which left a deep impact on his mind. In 1905 Nehru went to England to study at Harrow, then at Trinity College, Cambridge, and graduated with an Honours degree in Natural Science in 1910. He later studied Law at the Inns of Court School of Law (Inner Temple), London. While staying in England he avidly followed political activities in India and the world. Motilal had sent his son to Harrow and Cambridge to prepare him for a career in the Civil Service, but he returned to India in 1912 as a Barrister and enrolled himself as his father’s Junior at the Allahabad High Court.
      </p>
    
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
