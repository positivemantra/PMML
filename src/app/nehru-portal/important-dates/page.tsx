import React from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";

export default function ImportantDatesPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main id="main-content" className="w-full flex-1 innerContent text-left select-none">
        <div className="container">
          {/* Breadcrumb */}
          <div className="breadCrumbArea cf">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              Important Dates
            </div>
          </div>

          <div className="spaceArea">
            {/* Title banner */}
            <h2 style={{ color: "#a52216" }}>Important Dates</h2>

            {/* Important Dates Container */}
            <div className="impDates">
              
              {/* Sub-navigation strap */}
              <div className="topListing">
                <ul className="lifeCycleList">
                  <li>
                    <a href="#earlyLife">Early Life</a>
                  </li>
                  <li>
                    <a href="#marriage">Marriage</a>
                  </li>
                  <li>
                    <a href="#freedomStruggle">Freedom Struggle</a>
                  </li>
                  <li>
                    <a href="#inPrison">In Prison</a>
                  </li>
                  <li className="last">
                    <a href="#primeMinister">Prime Minister</a>
                  </li>
                </ul>
              </div>

              {/* Block 1: Early Life */}
              <div className="earlyLife" id="earlyLife">
                <h3 className="heading">Early Life</h3>
                <p>
                  Jawaharlal Nehru was born on 14 November 1889 at Allahabad, Uttar Pradesh. His father Motilal Nehru was a renowned lawyer and one of the Mahatma Gandhi’s notable Lieutenants. His mother, Swarup Rani Nehru came from a well-known Kashmiri family, settled in Lahore.
                </p>
                <Link href="/nehru-portal/early-life" className="button">
                  Know more
                </Link>
              </div>

              {/* Block 2: Marriage */}
              <div className="marriage cf" id="marriage">
                <div className="lifeContent alignLeft">
                  <h3 className="heading">Marriage</h3>
                  <p>
                    Jawaharlal Nehru at the age of 26 got married to Kamala Kaul, on 8 February 1916 at Haksar Haveli, Delhi. Kamala Nehru was the eldest daughter of Rajpati and Jawaharmal Mull Atal-Kaul. On 19 November 1917, they were blessed with a girl child, Indira Priyadarshani. Kamala Nehru also gave birth to a pre-mature baby boy who died. The initial years of Jawaharlal Nehru and Kamala Nehru’s married life were not very happy mainly owing to their family background as Kamala Nehru belonged to a conservative Kashmiri Brahmin family and Jawaharlal Nehru’s family had western life style.
                  </p>
                  <Link href="/nehru-portal/marriage" className="button">
                    Know more
                  </Link>
                </div>
                <div className="lifePics alignLeft">
                  <img
                    width="344"
                    height="302"
                    src="/sites/all/themes/nhp/images/married.jpg"
                    alt="Jawaharlal Nehru Married to Kamla Nehru"
                    title="Jawaharlal Nehru Married to Kamla Nehru"
                  />
                  <div>Jawaharlal Nehru Married to Kamla Nehru</div>
                </div>
              </div>

              {/* Block 3: Freedom Struggle */}
              <div className="freedomStruggle cf" id="freedomStruggle">
                <div className="lifePics alignLeft">
                  <img
                    width="344"
                    height="302"
                    src="/sites/all/themes/nhp/images/struggle-for-india.jpg"
                    alt="Struggle for Indian Independence"
                    title="Struggle for Indian Independence"
                  />
                  <div>Struggle for Indian Independence</div>
                </div>
                <div className="lifeContent alignLeft">
                  <h3 className="heading">Freedom Struggle</h3>
                  <p>
                    Jawaharlal Nehru began his political career during the freedom movement as a delegate to the Bankipore Congress in 1912. Since then he participated in all the non-violent movements led by Mahatma Gandhi and spent about 9 years in jail between 1920 to 1945. Nehru’s first major involvement with the nationalist movement started with the participation in the Non-cooperation movement in Uttar Pradesh. He was arrested on the charges of anti-Government activities in 1921, gradually he become intensely involved with the problems of poor and oppressed in the land.
                  </p>
                  <Link href="/nehru-portal/freedom-struggle" className="button">
                    Know more
                  </Link>
                </div>
              </div>

              {/* Block 4: In Prison */}
              <div className="marriage cf" id="inPrison">
                <div className="lifeContent alignLeft">
                  <h3 className="heading">In Prison</h3>
                  <p>
                    Jawaharlal Nehru’s major involvement with the nationalist movement started with the participation in the Non-cooperation movement in 1920 and since then he participated in all the movements led by Mahatma Gandhi and went to jail nine times between 1920 and 1945. He spent about 9 years, i.e. approximately 3,230 days in various jails such as Naini Central Prison, Allahabad, Lucknow District Jail, Almora Jail and Ahmadnagar Fort Prison.
                  </p>
                  <Link href="/nehru-portal/prison" className="button">
                    Know more
                  </Link>
                </div>
                <div className="lifePics alignLeft">
                  <img
                    width="344"
                    height="302"
                    src="/sites/all/themes/nhp/images/naini-central-jail.jpg"
                    alt="Pandit Nehru was put in Naini Central Jail"
                    title="Pandit Nehru was put in Naini Central Jail"
                  />
                  <div>Pandit Nehru was put in Naini Central Jail</div>
                </div>
              </div>

              {/* Block 5: Prime Minister */}
              <div className="freedomStruggle cf" id="primeMinister">
                <div className="lifePics alignLeft">
                  <img
                    width="344"
                    height="302"
                    src="/sites/all/themes/nhp/images/first-pm.jpg"
                    alt="India’s First Prime Minister"
                    title="India’s First Prime Minister"
                  />
                  <div>India’s First Prime Minister</div>
                </div>
                <div className="lifeContent alignLeft">
                  <h3 className="heading">Prime Minister</h3>
                  <p>
                    Nehru took the oath of the first Prime Minister of India at the midnight of 14-15 August 1947, and delivered his famous speech “Tryst with Destiny.” Nehru’s vision for Independent, modern India was based on sovereign democratic republic. On domestic front, Nehru faced formidable challenges in the beginning but he acted with great vision to resettle the uprooted millions of refugees, to tone up the administrative machinery, integration of Princely States, etc.
                  </p>
                  <Link href="/nehru-portal/prime-minister" className="button">
                    Know more
                  </Link>
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
