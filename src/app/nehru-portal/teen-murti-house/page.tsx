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
              <span>Teen Murti House</span>
            </div>
          </div>
          
          <div className="spaceArea">
            <h2 style={{ color: "#a52216" }}>Teen Murti House</h2>
            <div className="text-slate-600 text-xs sm:text-xs md:text-sm leading-relaxed text-justify max-w-none">
              
      <div className="swarajBhavan">
        <div className="History cf" id="History">
          <p>
            Jawaharlal Nehru stayed at 17 York Road in New Delhi, now known as Motilal Nehru Road, when he was the Vice-President of Viceroy’s Executive Council (1946). It was used as his headquarters during the whole period of negotiations for India’s independence, and for some time afterwards. He continued to live there after he became the Prime-Minister of Independent India, Later on 2 August 1948, he moved into Teen Murti House, which became the official residence of the Prime Minister.
          </p>
          <p>
            Teen Murti House, located to the south of Rashtrapati Bhawan in New Delhi, derives its name from a group of three statues of soldiers, representing the lancers of Mysore, Jodhpur and Hyderabad states, installed here in 1922 as a memorial to the sacrifice of the soldiers of Indian states during the First World War in Sinai, Palestine and Syria. Designed by Robert Tor Russel as a part of Edwin Lutyen’s imperial capital, the Teen Murti House was built in 1929-30 as the official residence of the Commander-in-Chief of the British Indian Army. This elegant building, designed in an austere classical style, was carefully erected to reflect the military prowess of the Raj. Field Marshal Sir William Birdwood was the first to occupy this house, while General Sir Roy Bucher as the last, vacating it soon after India’s independence in 1947.
          </p>
          <p>
            In August 1948, the Teen Murti House became the official residence of independent India’s first Prime Minister, Jawaharlal Nehru, who lived here for sixteen years until his death on 27 May 1964. The House came so much to be identified with Jawaharlal Nehru that it became turned synonymous with his name.
          </p>
          <p>
            After his death, the Government of India decided to convert the Teen Murti House into a memorial that would perpetuate Nehru’s memory and legacy. On November 14, 1964 Jawaharlal Nehru’s 75th birthday, the then President of India, Dr. S. Radhakrishnan, formally dedicated the Teen Murti House to the nation for housing a museum and a library, now known as Nehru Memorial Museum and Library. The Teen Murti House campus also houses the Nehru Planetarium. ( <a href="http://nehrumemorial.nic.in/" target="_blank" rel="noopener noreferrer">NMML Website </a>).
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
