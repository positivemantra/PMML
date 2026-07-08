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
              <span>Swaraj Bhawan</span>
            </div>
          </div>
          
          <div className="spaceArea">
            <h2 style={{ color: "#a52216" }}>Swaraj Bhawan</h2>
            <div className="text-slate-600 text-xs sm:text-xs md:text-sm leading-relaxed text-justify max-w-none">
              
      <div className="swarajBhavan">
        <div className="History cf" id="History">
          <div className="lifePics alignLeft">
            <img
              width="344"
              height="365"
              src="/sites/all/themes/nhp/images/Swaraj-Bhawan-1.jpg"
              alt="Swaraj Bhawan"
              title="Swaraj Bhawan"
            />
            <div>Swaraj Bhawan</div>
          </div>
          <p>
            In 1900, Motilal Nehru, the father of Jawaharlal Nehru, bought a palatial Victorian bungalow at 1, Church Road in Allahabad situated near the Bhardwaj Ashram, next to the confluence of the Ganga and Yamuna, a spot associated with episodes in the epic Ramayana.
          </p>
          <p>
            The bungalow belonged to Kanwar Parmanand of Moradabad. He was unable to maintain the huge estate with lawns, fruit gardens and even a swimming pool. He sold it to Motilal Nehru who was looking for a bungalow to match his rising status as a legal luminary in Allahabad. Though the house was in complete disrepair, he bought it for Rs. 19,000. He got the entire bungalow renovated. The renovation witnessed the entire modernisation of the estate with electricity, water, and other modern amenities. The house was decorated and furnished with furniture that Motilal picked from his visits to Europe. The mansion was multisioned, with high ceilinged rooms, furnished in a regal way. The furniture was Mahogany and teak; the tapestry was from Persia, the glassware from Venice, and the Chinaware from Dresden, the most exquisite product of that German city famous for its porcelain.
          </p>
          <div className="lifePics alignRight">
            <img
              width="344"
              height="365"
              src="/sites/all/themes/nhp/images/Swaraj-Bhawan-2.jpg"
              alt="Swaraj Bhawan"
              title="Swaraj Bhawan"
            />
            <div>Swaraj Bhawan</div>
          </div>
          <p>
            Motilal turned the mansion into a veritable palace, ‘an elaborate replica of an English country estate … bifurcated between east and west’ the house was named Anand Bhawan (Abode of Happiness).
          </p>
          <p>
            Hidden from the public gaze by spreading branches of magnificent old trees, the house rich in its historical memories is associated with many campaigns in the country’s fight for freedom. The joint Congress-League committee met in 1916 at Anand Bhawan. The building had intimate connection with the non-cooperation movement. It was here that the first foundation of non-cooperation movement was laid in 1920 by Mahatma Gandhi who was then residing here. During the non-cooperation movement, Jawaharlal and Motilal were arrested from Anand Bhawan on 6 December 1921 and sentenced to six months’ imprisonment and fine. Soon after their arrest the police started paying frequent visits to Anand Bhawan. They came to realize the fines which had been imposed on them and later on other members of the family. As it was the policy of Congress not to pay fines so the police carried away bits of furniture. They took also other articles such as carpets, silver, the car, whose value was far in excess of the amount of the fine.
          </p>
          <p>
            Anand Bhawan was not only the venue of heated discussions, important meetings and rallies, it became the soul of freedom fighters and a place where the policies related to future of the nation were decided. The name Anand Bhawan was changed to Swaraj Bhawan (Abode of Freedom) and Motilal dedicated Swaraj Bhawan to the nation on 9 April 1930 during the civil disobedience movement. It remained the headquarters of the Indian National Congress until the office moved to Delhi in 1946. It has been now converted into a museum.
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
