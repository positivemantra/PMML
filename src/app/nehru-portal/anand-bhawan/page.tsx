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
              <Link href="/nehru-portal/places">Places of Residence</Link>
              <span>Anand Bhawan</span>
            </div>
          </div>
          
          <div className="spaceArea">
            <h2 style={{ color: "#a52216" }}>Anand Bhawan</h2>
            <div className="text-slate-600 text-xs sm:text-xs md:text-sm leading-relaxed text-justify max-w-none">
              
      <div className="swarajBhavan">
        <div className="History cf" id="History">
          <div className="lifePics alignLeft">
            <img
              width="344"
              height="365"
              src="/sites/all/themes/nhp/images/Anand-Bhawan.jpg"
              alt="Anand Bhawan"
              title="Anand Bhawan"
            />
            <div>Anand Bhawan</div>
          </div>
          <p>
            A new House was built in the same complex by Motilal Nehru in 1927. It was named Anand Bhawan. The family shifted in this new house in 1929, which was even grander home not in size, but certainly in quality and considerable splendour. It was designed mainly by Motilal Nehru, and a specialist architect sent by the Tatas. It was two stories high, built of light gray painted brick, with deep, shady verandah circling both floors.
          </p>
          <p>
            Anand Bhawan was not just a building but a symbol of fight for freedom for which many members of the Nehru family had struggled, suffered and sacrificed. Jawaharlal Nehru had a special feeling for Anand Bhawan: 'It is far more than a structure of brick and concrete, more than a private possession. It is connected intimately with our national struggle for freedom and within its walls great events have happened and great decisions have been reached'.
          </p>
          <div className="lifePics alignRight">
            <img
              width="344"
              height="365"
              src="/sites/all/themes/nhp/images/Anand-Bhawan-2.jpg"
              alt="Anand Bhawan"
              title="Anand Bhawan"
            />
            <div>Anand Bhawan</div>
          </div>
          <p>
            The Jawaharlal Nehru Planetarium is also now situated here, which has been striving to inculcate scientific temper among the masses through its sky shows on astronomy and science.
          </p>
          <p>
            Anand Bhawan was donated in 1970 by Smt. Indira Gandhi to the Jawaharlal Nehru Memorial Fund ‘so that it is suitably used to keep alive the name of Jawaharlal Nehru not as a bit of history, frozen into brick and mortar, but as a living memory of the man beckoning us to remain true to his beliefs which are so basic to the survival of our great country'. It has now been converted into a memorial museum.
          </p>
        </div>
      </div>
    
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
