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
              <span>Fifth Imprisonment : 19 October 1930 - 26 January 1931</span>
            </div>
          </div>
          
          <div className="spaceArea">
            <h2 style={{ color: "#a52216" }}>Fifth Imprisonment : 19 October 1930 - 26 January 1931</h2>
            <div className="text-sm leading-relaxed text-justify max-w-none" style={{ color: "#312502" }}>
              
      <div>
        <div className="lifePics alignLeft" style={{ width: "400px" }}>
          <img
            src="/sites/default/files/inprison/Fifth Imprisonment, Jawaharlal Nehru in Naini Central Prison.jpg"
            alt="Fifth Imprisonment, Jawaharlal Nehru in Naini Central Prison"
            title="Fifth Imprisonment, Jawaharlal Nehru in Naini Central Prison"
          />
          <div>Jawaharlal Nehru in Naini Central Prison</div>
        </div>
        <p>Soon after his release on 11 October 1930 Jawaharlal Nehru threw himself into the No-Tax Campaign. Addressing a large gathering of people in Allahabad on 12 October 1930he said:</p>
        <p>"....We have adopted the policy of nonviolence because we believe in it and wish to give it the fullest trial in all honesty...."</p>
        <p>The first phase of the great struggle has come to an end. It has been marked by a national awakening to which the world has been an admiring witness.</p>
        <p>Now the second stage is beginning, the stage of our laying the foundations of a future, free India. Every city, every mohalla, every village must now play its part in this effort by making itself ready to become a living, self-dependent entity in free India. We must be prepared not only to pay any taxes to the British Government but also to do without any service which they may render to us."</p>
        <p>He was arrested on 19 October 1930 for actively propagating a No-Tax Campaign among the Kisans. Magistrate J.S. Grose tried him of 24 October 1930. During the course of his trial Nehru said:</p>
        <p>"....There can be no compromise between freedom and slavery, and between truth and falsehood. We realized that the price of freedom is blood and suffering- the blood of our own countrymen and the suffering of the noblest in the land – and that price we shall pay in full measure....</p>
        <p>To the Indian people I cannot express my gratitude sufficiently for their confidence and affection. It has been the greatest joy in my life to serve in this glorious struggle and to do my little bit for the cause. I pray that my countrymen and countrywomen will carry on the good fight unceasingly till success crowns their effort and we realise the India of our dreams. Long live free India!"</p>
        <p>He was sentenced for Sedition under section 124A to 18 months rigorous imprisonment and a fine of 500 rupees; under the Salt Act of 1882 to six months and a fine of 100 rupees; and under Ordinance VI of 1930 also to six months and a fine of 100 rupees. As the last two were concurrent, the total sentence was two years rigorous imprisonment and, in addition, five months in default of fines.</p>
        <p>He spent more than 97 days in Naini Central Prison and was released on 26 January 1931.While in Prison he began a series of letters to his daughter Indira that were later published as Glimpses of World History in 1934.</p>
      </div>
    
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
