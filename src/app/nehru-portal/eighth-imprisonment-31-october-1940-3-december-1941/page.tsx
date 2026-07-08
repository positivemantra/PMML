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
              <span>Eighth Imprisonment : 31 October 1940 - 3 December 1941</span>
            </div>
          </div>
          
          <div className="spaceArea">
            <h2 style={{ color: "#a52216" }}>Eighth Imprisonment : 31 October 1940 - 3 December 1941</h2>
            <div className="text-sm leading-relaxed text-justify max-w-none" style={{ color: "#312502" }}>
              
      <div>
        <div className="lifePics alignLeft" style={{ width: "400px" }}>
          <img
            src="/sites/default/files/inprison/inprison8-3.jpg"
            alt="Eight Imprisonment, Nehru in Dehradun Jail"
            title="Eight Imprisonment, Nehru in Dehradun Jail"
          />
          <div>Nehru in Dehradun Jail</div>
        </div>
        <p>With the advent of the Second World War, the Congress Working Committee at its meeting at Wardha on 8-15 September 1939, set up a War Committee with Jawaharlal Nehru as Chairman and Maulana Abul Kalam Azad and Sardar Vallabhbhai Patel as members 'to deal with questions in connection with the situation.' A resolution on the War Crisis was drafted by this committee and it was endorsed by the All India Congress Committee at its meeting at Wardha, 9-10 October 1939.The Congress was forthright in condemning the aggressor but demanded from the British Government a full statement of their intentions in regard to independence for India and of their war aims. Only then could the Congress decide on whether or not to cooperate in the war effort. The demands were placed before the Viceroy Linlithgow.</p>
        <p>Gandhiji suspended the Civil Disobedience Movement during the period of his talks with the Viceroy. After the failure of the talks Vinobha Bhave was designated as the first satyagrahi. After his arrest on 21 October 1940, Jawaharlal Nehru formally announced that he would begin satyagraha on 7 November, 1940. He was arrested on 31 October, for the three speeches he had made in the district of Gorakhpur, on 6-7 October 1940:</p>
        <p>"Kisan brethren!... The condition of our country has become so bad due to fear. The capitalistic rule has ruined us. It has destroyed our factories... In this manner our business decreased and the whole money started going into pockets of British capitalists. It is a well-known maxim that one who is poor becomes weak and frightened… Mahatma Gandhi came and taught us this lesson – if we strengthen our hearts, our fear will be removed and we shall be united. When everyone works unitedly they gain strength. With a view to make the public strong, I tried all over the country to form sangathan... the British Government wants to crush Swaraj and to create friction amongst us and to break our sangathan...."</p>
        <p>He was tried in Gorakhpur Prison on 3 November 1940 by E.deV.Moss, and condemned to four years’ Rigorous Imprisonment. During his trial he stated:</p>
        <p>"....There were two alternatives before the British Government and each Government engaged in the war – to continue to function in the old imperialist way or to end this in their own domains and become the leaders of the urge for freedom and revolutionary change the world over…. In India we have had over a year of war Government. The people's elected legislature have been suspended and ignored and a greater and more widespread autocracy prevails here than anywhere else in world...."</p>
        <p>On 17 November 1940 he was shifted to Dehradun Jail and confined there till 28 February 1941. He was shifted to Lucknow District Jail on 1 March 1941 and then to Dehradun Jail on 19 April. After spending more than 397 days of imprisonment, Jawaharlal Nehru was released on 3 December 1941 from Dehradun Jail.</p>
        <div className="lifePics alignLeft" style={{ width: "500px" }}>
          <img
            src="/sites/default/files/inprison/inprison8-1.jpg"
            alt="Eight Imprisonment, Dehradun Jail where Nehru was imprisoned in 1932 and 1934"
            title="Eight Imprisonment, Dehradun Jail where Nehru was imprisoned in 1932 and 1934"
          />
          <div>Dehradun Jail where Nehru was imprisoned in 1932 and 1934</div>
        </div>
        <div className="lifePics alignLeft" style={{ width: "630px" }}>
          <img
            src="/sites/default/files/inprison/inprison8-2.jpg"
            alt="Eight Imprisonment, Gorakhpur Jail where Nehru was imprisoned in 1940"
            title="Eight Imprisonment, Gorakhpur Jail where Nehru was imprisoned in 1940"
          />
          <div>Gorakhpur Jail where Nehru was imprisoned in 1940</div>
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
