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
              <span>Marriage</span>
            </div>
          </div>
          
          <div className="spaceArea">
            <h2 style={{ color: "#a52216" }}>Marriage</h2>
            <div className="text-slate-600 text-xs sm:text-xs md:text-sm leading-relaxed text-justify max-w-none">
              
      <p>
        At the age of 26 Jawaharlal Nehru married Kamala Kaul, on 8 February 1916 at Haksar Haveli, Delhi. Kamala Nehru was the eldest daughter of Rajpati and Jawaharmal Mull Atal-Kaul. On 19 November 1917, they were blessed with a girl child, Indira Priyadarshani. Kamala Nehru also gave birth to a pre-mature baby boy who died. The initial years of Jawaharlal and Kamala Nehru’s married life found them coming to terms with contrasts in family background. Kamala Nehru hailed from a conservative Kashmiri Brahmin family whereas Jawaharlal Nehru’s family had a more westernized life style. Secondly, Jawaharlal Nehru could not spend much time with Kamala Nehru due to his constant political activities. Soon Kamala Nehru, following the footsteps of her husband, started participating in freedom movement. This brought the young couple much closer. By the end of 1930s she fell seriously ill and was diagnosed with tuberculosis then a dreaded ailment. She underwent treatment in various hospitals in India and abroad. Nehru always accompanied her whenever he was out of jail. Nehru realized the depth of his attachment to her. He has written in his An Autobiography “I almost overlooked her…. We wanted to be together as much as possible during my brief period outside prison”. Kamala Nehru died in Lausanne, Switzerland on 28 February 1936. At that time Jawaharlal Nehru, Indira and Swarup Rani were by her side. Later Jawaharlal Nehru wrote in his Discovery of India, comparing the life of Kamala Nehru with Chitragada, (the English version is ‘Chitra’, one of Tagore’s play) “like Chitra in Tagore’s plays, she (Kamala) seemed to say to me: I am Chitra. No goddess to be worshipped, nor yet the object of common pity to be brushed aside. If you deign to keep me by your side in the path of danger and daring, if you allow me to show the great duties of your life, then you will know me. But she did not say this to me in words and it was only gradually that I read the massage of her eyes”.
      </p>
    
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
