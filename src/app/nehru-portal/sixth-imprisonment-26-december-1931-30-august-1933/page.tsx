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
              <span>Sixth Imprisonment : 26 December 1931 - 30 August 1933</span>
            </div>
          </div>
          
          <div className="spaceArea">
            <h2 style={{ color: "#a52216" }}>Sixth Imprisonment : 26 December 1931 - 30 August 1933</h2>
            <div className="text-sm leading-relaxed text-justify max-w-none" style={{ color: "#312502" }}>
              
      <div>
        <div className="lifePics alignLeft" style={{ width: "400px" }}>
          <img
            src="/sites/default/files/inprison/Sixth Imprisonment, Dehradun jail.jpg"
            alt="Sixth Imprisonment, Dehradun jail"
            title="Sixth Imprisonment, Dehradun jail"
          />
          <div>Dehradun jail</div>
        </div>
        <p>At a mass meeting of tenants in Allahabad on 23 October 1931, Nehru inaugurated the No-Rent campaign advising the peasants not to pay rent to their landlords unless the Government of India adopted suitable measures to relieve their distress. The campaign spread like wild fire through the United Provinces. In a letter to the Private Secretary to Viceroy, Jawaharlal Nehru wrote:</p>
        <p>"I am sorry to inform you that all our efforts to secure an honourable compromise for the unfortunate tenantry have failed to achieve any substantial result and we have been compelled to advise the peasantry in Allahabad district to withhold payment of rent and revenue till relief is obtained."</p>
        <p>The U.P. government struck back by promulgating an Ordinance making it a crime to campaign among tenants to refuse to pay rent. It served an internment order and forbade Jawaharlal to leave Allahabad or take part in any political activity.</p>
        <p>Nehru wrote to the District Magistrate that, “I am not in the habit of taking orders from anyone except the great organisation of which I have the honour to be a member. It is for the Indian National Congress to order me and I recognise no other authority...."</p>
        <p>He further said he would leave the town whenever any work required his presence elsewhere. He would travel to Bombay to meet Gandhiji on 26 December and to attend the scheduled meeting of the Congress Working Committee. On the morning of 26 December 1931, he boarded the Bombay Mail. Shortly after leaving Allahabad the train made an unscheduled halt. Jawaharlal Nehru and his companion Tasadduq Ahmad Khan Sherwani were arrested for breach of the Ordinance which prohibited them from leaving the limits of Allahabad municipality.</p>
        <p>After the trial, Jawaharlal was sentenced to two years’ Rigorous Imprisonment and a fine of 500 rupees, in default, to six months' further imprisonment. The fine was not paid and it was recovered by attachments and auction of his motor car. He was confined in Naini Central Prison, Allahabad till 5 February 1932, and then sent to Bareilly District Jail. On 6 June 1932 he was shifted to Dehradun Jail where he was confined till 23 August 1933. On 24 August 1933 he was again shifted to Naini Central Prison. He was released on 30 August 1933, after spending more than 610 days in prison.</p>
        <p>While in prison he completed the writing of letters to his daughter Indira that he began writing in Naini Central Prison in October 1930. These were published in 1934 under the title Glimpses of World History.</p>
        <div className="lifePics" style={{ textAlign: "center", margin: "20px auto", display: "block", maxWidth: "400px" }}>
          <img
            src="/sites/default/files/inprison/Sixth Imprisonment, Locking system of Bareilly Jail where Nehru was kept during his imprisonment .jpg"
            alt="Sixth Imprisonment, Locking system of Bareilly Jail where Nehru was kept during his imprisonment"
            title="Sixth Imprisonment, Locking system of Bareilly Jail where Nehru was kept during his imprisonment"
          />
          <div>Locking system of Bareilly Jail where Nehru was kept during his imprisonment</div>
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
