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
              <Link href="/nehru-portal/prison">In Prison</Link>
              <span>Ninth Imprisonment : 9 August 1942 - 15 June 1945</span>
            </div>
          </div>
          
          <div className="spaceArea">
            <h2 style={{ color: "#a52216" }}>Ninth Imprisonment : 9 August 1942 - 15 June 1945</h2>
            <div className="text-sm leading-relaxed text-justify max-w-none" style={{ color: "#312502" }}>
              
      <div>
        <div className="lifePics alignLeft" style={{ width: "400px" }}>
          <img
            src="/sites/default/files/inprison/Nineth Imprisonment, Ahmednagar Fort Prison.jpg"
            alt="Nineth Imprisonment, Ahmednagar Fort Prison"
            title="Nineth Imprisonment, Ahmednagar Fort Prison"
          />
          <div>Ahmednagar Fort Prison</div>
        </div>
        <p>1942 was a momentous year in the history of India. Within the country there was a mass upsurge in favour of liberation from British rule. After the failure of the Cripp’s Mission, in a statement to the press at Allahabad on 15 April 1942, Jawaharlal Nehru said:</p>
        <p>"...Our blood and tears will flow; it may be that the parched soil of India needs them so that the fine flower of freedom may grow again and its fragrance envelops the land. We shall pay the price and it will be well with us if we remain true to our faith and do not falter."</p>
        <p>On 8 August1942 several Congress leaders, Mahatma Gandhi, Maulana Abul Kalam Azad, Sardar Patel, Jawaharlal Nehru and others assembled in Bombay to pass the 'Quit India' resolution and asked the British to leave India as “the continuation of that rule is degrading and enfeebling India and making her progressively less capable of defending herself and of contributing to the cause of world freedom."</p>
        <p>Speaking in favour of the resolution Jawaharlal Nehru said:</p>
        <p>"This Resolution is not a threat. It is an invitation. It is an explanation... It is an offer of co-operation but of a free India with other free people… On any terms our resolution promises only struggle and conflict....</p>
        <p>The Congress leaders were detained under section 26(i) (b) of the Defence of India Act which empowered the Central Government to detain any particular person if it was necessary to do so “with a view to preventing him from acting in any manner prejudicial to the defence of British India, the public safety the maintenance of public order, relations with foreign or Indian states, or the efficient prosecution of the war."</p>
        <p>The entire country was shaken by an anti-British upsurge for the next few months, which was suppressed by the Government through repression. All Senior Congress members were arrested and taken to an unknown destination to be detained without trial. Jawaharlal Nehru was arrested on 9 August 1942 and imprisoned in Ahmednagar Fort Prison.</p>
        <p>On this ninth prison terms, Nehru spent more than 1,030 days in prison. From 9 August 1942 to 28 March 1945 he was detained at Ahmednagar Fort Prison. He was then kept in Bareilly Central Prison from 30 March 1945 till 9 June 1945. He was taken to Almora Jail on 10 June 1945 from where he was released on 15 June 1945. Jawaharlal Nehru wrote the The Discovery of India during his imprisonment in Ahmednagar Fort Prison which was published in 1946.</p>
        <div className="lifePics" style={{ textAlign: "center", margin: "20px auto", display: "block", maxWidth: "800px" }}>
          <img
            src="/sites/default/files/inprison/Nineth Imprisonment, Ahmednagar Fort.jpg"
            alt="Nineth Imprisonment, Ahmednagar Fort"
            title="Nineth Imprisonment, Ahmednagar Fort"
          />
          <div>Ahmednagar Fort</div>
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
