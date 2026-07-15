import React from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";
import styles from "./page.module.css";

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

              <span>About Us</span>
            </div>
          </div>

          <div className="spaceArea">
            <h2 className={styles.aboutHeader}>About Us</h2>
            <h3 style={{ color: "#333", fontSize: "1.4em", fontWeight: "bold", margin: "10px 0 15px 0" }}>
              Nehru Heritage Portal
            </h3>
            <div className="text-slate-600 text-xs sm:text-xs md:text-sm leading-relaxed text-justify max-w-none">
              <p>
                Nehru Heritage Portal run and managed by The Nehru Memorial Museum and Library (NMML), a memorial to Jawaharlal Nehru, the architect of modern India, is housed in the historic Teen Murti House campus located south of Rashtrapati Bhavan in New Delhi, the capital city of India.
              </p>
              <p>
                Designed by Robert Tor Russel and built in 1929-30 as part of Edwin Lutyens' imperial capital, Teen Murti House was the official residence of the Commander-in-Chief in India. In August 1948, after the departure of the last British Commander-in-Chief, Teen Murti House became the official residence of independent India's first Prime Minister, Jawaharlal Nehru, who lived here for sixteen years until his death on May 27, 1964. Soon thereafter, the Government of India decided that the Teen Murti House should be dedicated to him and house a museum and a library.
              </p>
              <p>
                On Jawaharlal Nehru's 75th birth anniversary on November 14, 1964 Dr. Sarvapalli Radhakrishnan, President of India, formally dedicated the Teen Murti House to the nation and inaugurated the Nehru Memorial Museum.
              </p>
              <p>
                Founded as an autonomous institution, the Nehru Memorial Museum and Library (NMML), is dedicated to the objective of promoting advanced research on Modern and Contemporary India.
              </p>
              <p>
                On 1 April 1966, the Government set up the Nehru Memorial Museum and Library Society to manage the institution, which has today emerged as a place of pilgrimage for the Indian masses on the one hand and as a premier research centre and a forum for intellectual activity on the other.
              </p>
              <p>
                Initially, the Museum was set up in the eastern wing of the Teen Murti House and the Library in the western wing. With the rapid growth of research material in the Library over the years, there was a pressing need for more space. An exclusive Library building was constructed adjacent to the Teen Murti House and inaugurated by Shri V. V. Giri, President of India, in January 1974.
              </p>
              <p>
                The steady increase in the volume of research material necessitated the construction of an Annexe building, which was completed in 1989. The Centre for Contemporary Studies was set up as a new unit of NMML in this building in 1990.
              </p>
              <p>
                Over the past four decades, the NMML has emerged as a premier institution of research on the Indian history and society of the modern and contemporary period. Endeavouring constantly to maintain and enhance its reputation as a centre of academic excellence, NMML is simultaneously engaged in trying to popularize the ideas and values of Jawaharlal Nehru and the movement for India's independence.
              </p>
              <p>
                Our institution is an important example of a vibrant and enduring academic culture in India.
              </p>
              <p>
                Lectures and Seminars, which constitute an important activity of the Nehru Memorial Museum and Library, are organized regularly and their deliberations are published.
              </p>
              <p>
                The NMML has enhanced and expanded its academic resources considerably in the recent past. Today, the Library houses not just an exhaustive collection of published material on numerous aspects of modern and contemporary history but also possesses an impressive and diverse archival holding. Regularly updated, expanded and made available for research, these holdings make the NMML a major academic destination for Indian and foreign scholars from diverse disciplines and varied fields of interest.
              </p>
              <p>
                The General Council and the President and the Vice-President of the Nehru Memorial Museum and Library Society are nominated by the Central Government.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
