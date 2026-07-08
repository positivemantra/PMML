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
              <span>First Imprisonment : 6 December 1921 - 3 March 1922</span>
            </div>
          </div>
          
          <div className="spaceArea">
            <h2 style={{ color: "#a52216" }}>First Imprisonment : 6 December 1921 - 3 March 1922</h2>
            <div className="text-sm leading-relaxed text-justify max-w-none" style={{ color: "#312502" }}>
              
      <div>
        <div className="lifePics alignLeft" style={{ width: "400px" }}>
          <img
            src="/sites/default/files/inprison/First Imprisonment, Lucknow District Jail.jpg"
            alt="First Imprisonment, Lucknow District Jail"
            title="First Imprisonment, Lucknow District Jail"
          />
          <div>Lucknow District Jail</div>
        </div>
        <p>The year 1919 and its aftermath witnessed a new era of mass movements under the leadership of Mahatma Gandhi. The Rowlatt Bills, Jallianwala Bagh massacre and the Khilafat issue were the key issues in the non-violent Non-Cooperation Movement launched by Mahatma Gandhi in August 1920. These were three ‘wrongs’ and could only be undone through peaceful protest. The campaign won approval of the Congress at its special session at Calcutta in September 1920. The British Government too was perplexed by the new situation of protest by thousands of peaceful satyagrahis. The position of the Government was further complicated by the fact that the Prince of Wales was due to arrive in November1921. The Congress Working Committee resolved to boycott the visit of the Prince – a hartal or strike was declared. The Congress appealed to all that no one will take part in any celebrations or call on the Prince. The new Viceroy, Lord Reading, cabled the Secretary of State for India that he would have to take action on a drastic scale. When the Prince arrived in Allahabad he drove through the deserted streets.</p>
        <p>Congress and Khilafat volunteers toured India spreading the message of Mahatma Gandhi. As part of the programme mass arrests commenced in November. In the United Provinces of Agra and Oudh, the Khilafat and Congress volunteers were declared unlawful associations. Jawaharlal played an important part in organising the campaign in his home province. On 6 December 1921, police suddenly surrounded the Anand Bhawan and arrested Jawaharlal and his father Motilal Nehru. Jawaharlal was arrested on the charge of distributing a pamphlet in Hindi titled 'Mahatma Gandhi's Order' in Lucknow urging the people to boycott the visit of the Prince of Wales. The latter was scheduled to be in Lucknow on 9 December. Jawaharlal was tried in Lucknow, where he was taken the very night of his arrest. The trial began on 15 December and Jawaharlal was charged under section 17(1) for being part of an 'unlawful association'. The judgement was announced on 17 December - six months imprisonment and a fine of 100 rupees. He refused to pay the fine. Jawaharlal was taken to Lucknow District Jail.</p>
        <p>In a message to his colleagues of the U.P. Congress Committee on his arrest he said:</p>
        <p>.... "There can be no compromise or parleying with evil. This struggle must and can only end in complete victory for the people…"</p>
        <p>In a message to the citizens of Allahabad he said:</p>
        <p>"I go to jail with the greatest pleasure, and with the fullest conviction that therein lies the achievement of our goal. Forget not that there is a complete hartal on the 12 instant, and that it is the duty of every man to enroll himself as a volunteer. The most important thing is to preserve complete peace and an atmosphere of non-violence. In your hands is the honor of Allahabad, and I hope it is quite safe therein. I trust you will always be in the firing line in the battle of Swaraj and make the name of our city immortal in our annals, -I am, your friend.</p>
        <p>He was released on 3 March 1922 on technical grounds, after serving, less than half his sentence, only 87 days in prison. Perturbed on his early release he observed:</p>
        <p>"I do not know why I have been released. My father, who is suffering from asthma, and many hundreds of my comrades are still in jail. I have only this to say –keep on fighting, keep on working for independent India and do not rest."</p>
      </div>
    
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
