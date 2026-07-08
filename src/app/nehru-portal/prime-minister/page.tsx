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
              <span>Prime Minister</span>
            </div>
          </div>
          
          <div className="spaceArea">
            <h2 style={{ color: "#a52216" }}>Prime Minister</h2>
            <div className="text-slate-600 text-xs sm:text-xs md:text-sm leading-relaxed text-justify max-w-none">
              
      <p>
        Prime Minister Nehru took the oath as first Prime Minister of India at midnight of 14-15 August 1947, and then delivered his famous speech “Tryst with Destiny.” Nehru’s vision for an Independent, modern India was that of a sovereign democratic republic. On the domestic front, Nehru faced formidable challenges in the beginning. The government swiftly acted to resettle the uprooted millions of refugees and provide for stable administration. Nehru also took active part in framing the Constitution of India’s Republic which came into existence on 26 January 1950. He helped lay strong foundation of Parliamentary democracy. The first general elections of 1951-52 were conducted on the basis of universal adult franchise without discrimination on basis of income, literacy, gender, caste or creed. The elections were free and fair, a historic event with 173 million eligible voters, who constituted the world’s largest electorate. Nehru favoured a mixed economy where the Government controlled public sector which co-existed with the private sector. His tenure saw the growth of heavy industry. The abolition of Zamindari helped land redistribution. The Hindu civil code was reformed by legislative enactment. He chaired the Planning Commission in ex-officio capacity. Linguistic reorganization in 1956 and 1960 redrew the provincial (state) boundaries. This period also saw the founding of many new institutions for higher education and promoted art, culture and literature. Nehru laid great stress on science and technology and on “Scientific Temper”. He promoted atomic energy and the space programme, and oversaw establishment of a chain of Laboratories under the Council for Science and Industrial Research (CSIR). He also laid the foundation stone of big dams like Bhakra Nangal and Hirakud and the Steel Plants at Bhilai, Rourkela and Durgapur. On the External affairs front, Nehru based his foreign policy on non-alignment and Panchsheela. He strove for good relations with neighboring countries. India joined the Commonwealth despite some opposition, in the interest of cooperation and goodwill. He advocated that international disputes be settled by peaceful negotiation. Nehru had faith in the role of United Nations Organization. On the international scene, he was a champion of peace. In 1955 Nehru was awarded the Bharat Ratna, the highest Civilian honour of the country.
      </p>
    
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
