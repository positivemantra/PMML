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
              <span>Second Imprisonment : 11 May 1922 - 31 January 1923</span>
            </div>
          </div>
          
          <div className="spaceArea">
            <h2 style={{ color: "#a52216" }}>Second Imprisonment : 11 May 1922 - 31 January 1923</h2>
            <div className="text-sm leading-relaxed text-justify max-w-none" style={{ color: "#312502" }}>
              
      <div>
        <div className="lifePics alignLeft" style={{ width: "400px" }}>
          <img
            src="/sites/default/files/inprison/Second Imprisonment, A view from inside the cell in which Jawaharlal Nehru was kept in Lucknow District jail.jpg"
            title="Second Imprisonment, A view from inside the cell in which Jawaharlal Nehru was kept in Lucknow District jail"
            alt="Second Imprisonment, A view from inside the cell in which Jawaharlal Nehru was kept in Lucknow District jail"
          />
          <div>A view from inside the cell in which Jawaharlal Nehru was kept in Lucknow District jail</div>
        </div>
        <p>After his release from prison on 3 March 1922, Jawaharlal Nehru concentrated on the boycott of foreign cloth. Foreign mill-made cloth was a symbol of the economic exploitation. This boycott actively drew cultivators, weavers and artisans into the non-violent struggle. A pamphlet in Hindi "Aap Kidhar Hai?" ("Where are you?") written by Jawaharlal Nehru, Bishambhar Nath Bajpai and Raghunath Prasad, for the Publicity Department of Allahabad Provincial Congress Committee was seized by the police on 2 May 1922. Jawaharlal went to Lucknow District Jail on 11 May 1922 to visit his father who was still serving a sentence. He was arrested at the goal gate and charged under Section 116, 117, 385 and 506 of the Indian Penal Code. He was taken to Allahabad the same night and lodged in the District Jail.</p>
        <p>On 17 May 1922, Jawaharlal Nehru was tried by K.N. Knox, District Magistrate of Allahabad. The charge was one of intimidating cloth merchants by organizing the picketing of sales of foreign cloth. During his trial he said:</p>
        <p>"If peaceful picketing for a lawful object is a crime then indeed I am guilty of having advised it and helped in it…Does anyone believe that we could achieve success in this by criminal intimidation and extortion? All the world knows that our strength lies in the support of our people and the goodwill of our countrymen. Our weapons are not the old time ones of force and coercion. The weapons which our great leader has put in our hands are those of love and self-sacrifice. We suffer ourselves, and by our suffering seek to convert our adversary....</p>
        <p>I shall go to jail again most willingly and joyfully. Jail has indeed become a heaven for us, a holy place of pilgrimage since our saintly and beloved leader was sentenced…</p>
        <p>I marvel at my good fortune. To serve India in the battle of freedom is honor enough. To serve her under a leader like Mahatma Gandhi is doubly fortunate. But to suffer for the dear country; what greater good fortune could befall an Indian unless it be death for the cause or the full realization of our glorious dream."</p>
        <p>The judgement was announced on 19 May. Jawaharlal was sentenced to eighteen months rigorous imprisonment and a fine of 100 rupees. He spent more than 260 days in prison and was released on 31 January 1923.</p>
      </div>
    
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
