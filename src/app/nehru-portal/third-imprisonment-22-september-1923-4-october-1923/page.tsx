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
              <span>Third Imprisonment : 22 September 1923 - 4 October 1923</span>
            </div>
          </div>
          
          <div className="spaceArea">
            <h2 style={{ color: "#a52216" }}>Third Imprisonment : 22 September 1923 - 4 October 1923</h2>
            <div className="text-sm leading-relaxed text-justify max-w-none" style={{ color: "#312502" }}>
              
      <div>
        <p>The rulers of two Princely States in Punjab, Nabha and Patiala, were locked in a bitter dispute. This resulted in the deposition of Maharaja Ripudaman Singh of Nabha by the British Government of India and the appointment of a British Administrator to rule the State. The deposition of the Maharaja led to a fresh agitation by many Sikhs. Batches of volunteers (Jathas) came to Jaito in Nabha state. These Jathas were brutally assaulted by the police, arrested, and protesters were later abandoned in remote places in the jungle.</p>
        <p>Accompanied by two fellow Congressmen, A.T.Gidwani and K.Santhanam, Jawaharlal Nehru left for Nabha on 19 September 1923.They addressed a public meeting at Muktsar on 20 September. The next day while proceeding towards Jaito they joined the members of a Jatha which in turn was halted by the police. The Superintendent of Police asked them to immediately leave Nabha. On their refusal to do so, they were arrested under Section 188. All were handcuffed, Santhanam's left wrist tied to Jawaharlal's right hand. A policemen led them through the streets by chain and put them aboard on an evening train from Jaito to the main city, Nabha. The handcuffs were removed only after twenty hours. Jawaharlal stated in his An Autobiography:</p>
        <p>"In Nabha Gaol we were all three kept in a most unwholesome and in sanitary cell. It was small and damp, with a very low ceiling which we could almost touch. At night we slept on the floor, and I would wake up with a start, full of horror, to find that a rat or a mouse had just passed over my face."</p>
        <p>During his trial he stated:</p>
        <p>"....I rejoice that I am being tried for a cause which the Sikhs have made their own. I was in jail when the Guru Ka Bagh struggle was gallantly fought and won by the Sikhs. I marvelled at the courage and sacrifice of the Akalis and wished that I could be given an opportunity of showing my deep admiration of them by some form of service. That opportunity has now been given to me and I earnestly hope that I shall prove worthy of their high tradition and fine courage. Sat Sri Akal."</p>
        <p>After days of trial and with no proper judgement Nehru, "demanded arrangements for their defence. "They had no choice but to engage a lawyer from Nabha, because the Nabha rules did not allow them to engage a lawyer from outside the Princely State. However, they were approached by the Superintendent of the jail. He told them that the case would be dropped if they would express their regret and give an undertaking to leave from Nabha. They bluntly refused:</p>
        <p>"There was nothing to express regret about, so far as we were concerned; it was for the administrator to apologies to us."</p>
        <p>After a fortnight under arrest, and being tried under two cases, one breach of the order to leave Nabha territory and other a conspiracy case, they were awarded six months sentence for the first and eighteen months for the latter. But these sentences were suspended by an order of the British Administrator of the Nabha State under the Criminal Procedure Code. A separate Executive Order was issued by the British Administrator. They were now asked to leave Nabha and not to return to the State without special permission. They were escorted to the railway station and released there after a short spell of 12 days on 4 October 1923.</p>
      </div>
    
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
