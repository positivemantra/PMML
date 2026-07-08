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
              <span>Seventh Imprisonment : 12 February 1934 – 3 September 1935</span>
            </div>
          </div>
          
          <div className="spaceArea">
            <h2 style={{ color: "#a52216" }}>Seventh Imprisonment : 12 February 1934 – 3 September 1935</h2>
            <div className="text-sm leading-relaxed text-justify max-w-none" style={{ color: "#312502" }}>
              
      <div>
        <div className="lifePics alignLeft" style={{ width: "400px" }}>
          <img
            src="/sites/default/files/inprison/Seventh Imprisonment, Alipur Central Jail where Nehru was imprisoned during 1934.jpg"
            alt="Seventh Imprisonment, Alipur Central Jail where Nehru was imprisoned during 1934"
            title="Seventh Imprisonment, Alipur Central Jail where Nehru was imprisoned during 1934"
          />
          <div>Alipur Central Jail where Nehru was imprisoned during 1934</div>
        </div>
        <p>Bengal had long paid an active and leading role in the struggle for freedom. The people of Bengal had endured repressive policies since the days of the Partition of Bengal under Lord Curzon.</p>
        <p>Jawaharlal Nehru visited Calcutta and addressed three public meetings at Albert Hall in Calcutta on 17 and 18 January 1934, condemning and arguing against terrorist acts. He also strongly spoke out against the Government's repressive policies. Commenting on this in An Autobiography he wrote:</p>
        <p>"what pained me most was the manner in which human dignity had been outraged by indiscriminate suppression of whole populations. The political problem, urgent as it was, took second place before this human problem."</p>
        <p>These speeches formed the basis of his seventh imprisonment and trial. He was arrested on 12 February 1934 from Allahabad and taken to Calcutta. He was charged under section 124(A) for sedition. His trial began on 15 February. During his trial he stated:</p>
        <p>"....This statement of mine will perhaps lighten the burden of decision resting on the court.... by my assuring the court that my activities in the past have been seditious, if by sedition is meant an attempt to achieve the independence of India and to end completely all traces of foreign domination in this country….my conviction has gained strength that only by the elimination of all British control and the establishment of independence, can the Indian people free themselves from the terrible exploitation that has sucked them dry and made this rich country a land of poverty stricken and miserable men and women...."</p>
        <p>Nehru was sentenced to two years’ imprisonment at Alipore Central Jail, Calcutta. On 8 May 1934 he was shifted to Dehradun Jail and confined there till 11 August. He was released on parole from 12 August to 23 August 1934, to visit his wife Kamala who was very ill and was in a sanatorium in Bhowali in the Himalayan foothills. At the end of the period of parole on 24 August he was moved to Naini Central Prison, Allahabad where he was confined till 27 October 1934. He was shifted to Almora Jail on 28 October1934 and released on 3 September 1935 after spending more than 565 days in prison. The rest of the sentence was suspended under Section 401 of the Criminal Penal Code to allow him to join his wife who was seriously ill in Badenweiler, Germany. Kamala Nehru died on 28 February 1936.</p>
        <div className="lifePics" style={{ textAlign: "center", margin: "20px auto", display: "block", maxWidth: "800px" }}>
          <img
            src="/sites/default/files/inprison/Seventh Imprisonment, The bed, the table and chair allotted to Jawaharlal Nehru in Almora Jail.jpg"
            alt="Seventh Imprisonment, The bed, the table and chair allotted to Jawaharlal Nehru in Almora Jail"
            title="Seventh Imprisonment, The bed, the table and chair allotted to Jawaharlal Nehru in Almora Jail"
          />
          <div>The bed, the table and chair allotted to Jawaharlal Nehru in Almora Jail</div>
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
