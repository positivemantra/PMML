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
              <span>Fourth Imprisonment : 14 April 1930 - 11 October 1930</span>
            </div>
          </div>
          
          <div className="spaceArea">
            <h2 style={{ color: "#a52216" }}>Fourth Imprisonment : 14 April 1930 - 11 October 1930</h2>
            <div className="text-sm leading-relaxed text-justify max-w-none" style={{ color: "#312502" }}>
              
      <div>
        <div className="lifePics alignLeft" style={{ width: "400px" }}>
          <img
            src="/sites/default/files/inprison/Fourth Imprisonment, Inside view of the cell Kutta Ghar in Naini Central Prison where was imprisoned.jpg"
            alt="Fourth Imprisonment, Inside view of the cell Kutta Ghar in Naini Central Prison where was imprisoned"
            title="Fourth Imprisonment, Inside view of the cell Kutta Ghar in Naini Central Prison where was imprisoned"
          />
          <div>Inside view of the cell Kutta Ghar in Naini Central Prison where was imprisoned</div>
        </div>
        <p>The Indian National Congress passed a resolution at Calcutta in December 1928 that if the British Government did not accept the Swaraj Constitution drawn up by the All Parties Committee within one year, it would organise a campaign of non-violent non-cooperation. The objective would be the attainment of complete independence. In pursuance of this the Lahore session of the Congress in December 1929 resolved upon a complete boycott of legislatures, committees constituted by the Government and future elections. It further directed Congressmen to resign their seats in the legislatures and all official committees. In February 1930, Congress Working Committee authorised Mahatma Gandhi to launch a programme of civil disobedience including the non-payment of taxes. Mahatma Gandhi began the historic Dandi March with a small band of selected followers from Sabarmati Ashram on 12 March 1930. Thousands of people joined him en route and courted arrest. The Dandi march shook the empire to its foundations as salt became symbol of freedom. As President of the Indian National Congress Jawaharlal Nehru was also busy organizing the Congress party and motivating the people with letters, statements and detailed circulars to the provinces outlining the plan of action.</p>
        <p>He was arrested on 14 April 1930 on his way to Raipur in Central Provinces to preside over the third session of the Hindi Provincial Conference and sent to Naini near Allahabad. The trial began on the same day in the court of Magistrate J.S. Grose. The trial lasted only two hours. Nehru was convicted under section 9(c) of the Indian Salt Act XII of 1882. In a message to the people he said: “Keep smiling, fight on and see it through."</p>
        <p>Bidding farewell to the people of Allahabad he stated: "What can I say to the brothers and sisters of Allahabad except that I thank them for their love and kindness and hope that they will participate fully in the great struggle for the freedom of our country. Keep up the honour of Allahabad!"</p>
        <p>He was sentenced to six months’ imprisonment and sent to Naini Central Prison. In a message to Mahatma Gandhi from prison, he exclaimed:</p>
        <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "I have stolen a march over you".</p>
        <p>He spent more than 175 days during his fourth term in prison. He was released on 11 October 1930.</p>
        <div className="lifePics" style={{ textAlign: "center", margin: "20px auto", display: "block", maxWidth: "773px" }}>
          <img
            src="/sites/default/files/inprison/The diagram of his barrack in Naini Central Prison.jpg"
            alt="The diagram of his barrack in Naini Central Prison made by Jawaharlal Nehru"
            title="The diagram of his barrack in Naini Central Prison made by Jawaharlal Nehru"
          />
          <div>The diagram of his barrack in Naini Central Prison made by Jawaharlal Nehru</div>
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
