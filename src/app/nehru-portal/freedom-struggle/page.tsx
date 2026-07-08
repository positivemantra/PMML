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
              <span>Freedom Struggle</span>
            </div>
          </div>
          
          <div className="spaceArea">
            <h2 style={{ color: "#a52216" }}>Freedom Struggle</h2>
            <div className="text-slate-600 text-xs sm:text-xs md:text-sm leading-relaxed text-justify max-w-none">
              
      <p>
        Jawaharlal Nehru began his political career as a delegate to the Bankipore Congress session in 1912. He subsequently took part in all the major non-violent movements led by Mahatma Gandhi and spent the equivalent of nine long years in jail between 1920 and 1945. Nehru’s first major involvement with the nationalist movement was his role in the Non-Cooperation movement in Uttar Pradesh. He was arrested on the charges of anti-government activities in 1921. He gradually grew involved with the problems of the poor and the cultivators. He led the Kisan movement in the United Provinces from 1920s and also worked with labour unions. He represented India at the Congress of Oppressed Nationalities at Brussels, 1927, and founded the Independence for India League, 1928. Nehru joined in protest against the all white Simon Commission in Lucknow, 1928 and was one of the signatories to the (Motilal) Nehru Report on Indian Constitutional Reforms, 1928. Jawaharlal Nehru was instrumental in changing the creed of the Congress from Dominion Status to Complete Independence. He moved the resolution of Complete Independence at the Lahore Session of the Congress, 1929. During the Civil Disobedience movement Nehru led the No-Tax campaign in U.P. and was arrested in 1930. Nehru also took a keen interest in the States’ People’s Movement and became the President of the All India States’ People’s Conference in 1939. Nehru also participated in the Individual Satyagraha, 1940-41, and was imprisoned the same year. He moved the Quit India resolution at the AICC, Bombay in 1942 and was arrested on 9 August 1942. He served the longest period of jail from 1942-45. He led the Interim Government of India and was sworn in as its Vice President and Member in Charge, External Affairs on 2 September 1946. At the mid night of 14 and 15 August 1947, he was sworn in as the First Prime Minister of Independent India.
      </p>
    
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
