"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";

interface PageData {
  title: string;
  category: string;
  parent?: { label: string; href: string };
  parents?: { label: string; href: string }[];
  content: React.ReactNode;
}

function PrisonContent() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filterTerms = [
    { id: "first", label: "1st Term", days: "88 days" },
    { id: "second", label: "2nd Term", days: "266 days" },
    { id: "third", label: "3rd Term", days: "12 days" },
    { id: "fourth", label: "4th Term", days: "181 days" },
    { id: "fifth", label: "5th Term", days: "100 days" },
    { id: "sixth", label: "6th Term", days: "614 days" },
    { id: "seventh", label: "7th Term", days: "558 days" },
    { id: "eighth", label: "8th Term", days: "399 days" },
    { id: "ninth", label: "9th Term", days: "1041 days" },
  ];

  const terms = [
    { cat: "first", num: "1st", link: "/first-imprisonment-6-december-1921-3-march-1922", date: "From 6 December, 1921 To 3 March, 1922", desc: "Lucknow District Jail, 88 days" },
    { cat: "second", num: "2nd", link: "/second-imprisonment-11-may-1922-31-january-1923", date: "From 11 May, 1922 To 20 May, 1922", desc: "Allahabad District Jail, 10 days" },
    { cat: "second", num: "2nd", link: "/second-imprisonment-11-may-1922-31-january-1923", date: "From 21 May, 1922 To 31 January, 1923", desc: "Lucknow District Jail, 256 days" },
    { cat: "third", num: "3rd", link: "/third-imprisonment-22-september-1923-4-october-1923", date: "From 22 September, 1923 To 4 October, 1923", desc: "Nabha Jail, 12 days" },
    { cat: "fourth", num: "4th", link: "/fourth-imprisonment-14-april-1930-11-october-1930", date: "From 14 April, 1930 To 11 October, 1930", desc: "Naini Central Prison, Allahabad, 181 days" },
    { cat: "fifth", num: "5th", link: "/fifth-imprisonment-19-october-1930-26-january-1931", date: "From 19 October, 1930 To 26 January, 1931", desc: "Naini Central Prison, Allahabad, 100 days" },
    { cat: "sixth", num: "6th", link: "/sixth-imprisonment-26-december-1931-30-august-1933", date: "From 26 December, 1931 To 5 February, 1932", desc: "Naini Central Prison, Allahabad, 42 days" },
    { cat: "sixth", num: "6th", link: "/sixth-imprisonment-26-december-1931-30-august-1933", date: "From 6 February, 1932 To 6 June, 1932", desc: "Bareilly District Jail, 122 days" },
    { cat: "sixth", num: "6th", link: "/sixth-imprisonment-26-december-1931-30-august-1933", date: "From 6 June, 1932 To 23 August, 1933", desc: "Dehra Dun Jail, 443 days" },
    { cat: "sixth", num: "6th", link: "/sixth-imprisonment-26-december-1931-30-august-1933", date: "From 24 August, 1933 To 30 August, 1933", desc: "Naini Central Prison, Allahabad, 7 days" },
    { cat: "seventh", num: "7th", link: "/seventh-imprisonment-12-february-1934-3-september-1935", date: "From 12 February, 1934 To 7 May, 1934", desc: "Alipur Central Jail, Calcutta, 85 days" },
    { cat: "seventh", num: "7th", link: "/seventh-imprisonment-12-february-1934-3-september-1935", date: "From 8 May, 1934 To 11 August, 1934", desc: "Dehra Dun Jail, 96 days" },
    { cat: "seventh", num: "7th", link: "/seventh-imprisonment-12-february-1934-3-september-1935", date: "From 23 August, 1934 To 27 August, 1934", desc: "Naini Central Prison, Allahabad, 66 days" },
    { cat: "seventh", num: "7th", link: "/seventh-imprisonment-12-february-1934-3-september-1935", date: "From 28 October, 1934 To 3 September, 1935", desc: "Almora Jail, 311 days" },
    { cat: "eighth", num: "8th", link: "/eighth-imprisonment-31-october-1940-3-december-1941", date: "From 31 October, 1940 To 16 November, 1940", desc: "Gorakhpur Jail, 17 days" },
    { cat: "eighth", num: "8th", link: "/eighth-imprisonment-31-october-1940-3-december-1941", date: "From 17 November, 1940 To 28 February, 1941", desc: "Dehra Dun Jail, 104 days" },
    { cat: "eighth", num: "8th", link: "/eighth-imprisonment-31-october-1940-3-december-1941", date: "From 1 March, 1941 To 18 April, 1941", desc: "Lucknow District Jail, 49 days" },
    { cat: "eighth", num: "8th", link: "/eighth-imprisonment-31-october-1940-3-december-1941", date: "From 19 April, 1941 To 3 December, 1941", desc: "Dehra Dun Jail, 229 days" },
    { cat: "ninth", num: "9th", link: "/ninth-imprisonment-9-august-1942-15-june-1945", date: "From 9 August, 1942 To 28 March, 1945", desc: "Ahmadnagar Fort Prison, 963 days" },
    { cat: "ninth", num: "9th", link: "/ninth-imprisonment-9-august-1942-15-june-1945", date: "From 30 March, 1945 To 9 June, 1945", desc: "Bareilly Central Prison, 72 days" },
    { cat: "ninth", num: "9th", link: "/ninth-imprisonment-9-august-1942-15-june-1945", date: "From 10 June, 1945 To 15 June, 1945", desc: "Almora Jail, 6 days" }
  ];

  return (
    <div className="inPrison select-none text-left">
      <p style={{ color: "#312502", fontSize: "1.286em", marginBottom: "20px", lineHeight: "26px" }}>
        Jawaharlal Nehru was imprisoned nine times during the freedom struggle and was in jail for 3259 days.
      </p>
      <div className="portfolio-filter">
        <ul id="filters" className="cf">
          {filterTerms.map((term, index) => (
            <li key={term.id} className={index === 0 ? "first" : index === filterTerms.length - 1 ? "last" : ""}>
              <span
                className={`filter ${activeFilter === term.id ? "active" : ""}`}
                onClick={() => setActiveFilter(activeFilter === term.id ? null : term.id)}
              >
                {term.label}
                <br />
                <span>{term.days}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div id="portfoliolist">
        <ul id="plist" className="cf">
          {terms.map((item, index) => {
            const isVisible = activeFilter === null || activeFilter === item.cat;
            return (
              <li
                key={index}
                className={`portfolio ${item.cat} ${index === 0 ? "first" : ""}`}
                style={{ display: isVisible ? "block" : "none" }}
              >
                <h4>
                  {item.num.replace("st", "").replace("nd", "").replace("rd", "").replace("th", "")}
                  <sup>{item.num.slice(-2)}</sup>
                  <br />
                  Term
                </h4>
                <div className="portfolioDetail">
                  <p>
                    <Link href={item.link}>{item.date}</Link>
                    <br />
                    <span>{item.desc}</span>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

const pagesDb: Record<string, PageData> = {
  "contact-us": {
    title: "Contact Us",
    category: "Utility",
    content: (
      <div className="space-y-4">
        <p>For any queries, feedback, or archive research requests, please contact us at:</p>
        <div className="bg-slate-50 border p-5 rounded-xl space-y-2 font-medium">
          <p className="font-bold text-primary">Nehru Memorial Museum & Library (NMML)</p>
          <p>Teen Murti House, New Delhi - 110011</p>
          <p>Email: <a href="mailto:director.nmml@gov.in" className="text-secondary hover:underline">director.nmml@gov.in</a></p>
          <p>Phone: +91-11-23016267</p>
        </div>
      </div>
    )
  },
  "feedback": {
    title: "Feedback Form",
    category: "Utility",
    content: (
      <div className="space-y-4">
        <p>We value your suggestions and feedback. Please fill in the details below to write to us:</p>
        <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for your feedback!"); }} className="space-y-4 bg-slate-50 border p-6 rounded-xl max-w-lg">
          <div className="flex flex-col space-y-1">
            <label className="font-bold text-xs text-primary uppercase">Full Name</label>
            <input type="text" required className="bg-white border rounded px-3 py-2 text-xs focus:ring-1 focus:ring-secondary focus:border-secondary outline-none" />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="font-bold text-xs text-primary uppercase">Email Address</label>
            <input type="email" required className="bg-white border rounded px-3 py-2 text-xs focus:ring-1 focus:ring-secondary focus:border-secondary outline-none" />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="font-bold text-xs text-primary uppercase">Message</label>
            <textarea required rows={4} className="bg-white border rounded px-3 py-2 text-xs focus:ring-1 focus:ring-secondary focus:border-secondary outline-none resize-none" />
          </div>
          <button type="submit" className="bg-secondary hover:bg-secondary-hover text-white text-xs font-bold px-6 py-2.5 rounded shadow-sm cursor-pointer border-none uppercase tracking-wider">
            Submit Feedback
          </button>
        </form>
      </div>
    )
  },
  "sitemap": {
    title: "Sitemap",
    category: "Navigation",
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-2 font-semibold">
        <div className="space-y-2">
          <h4 className="font-serif font-bold text-primary border-b pb-1">Portal Main</h4>
          <ul className="list-disc pl-5 space-y-1 text-slate-500 text-xs">
            <li><Link href="/" className="hover:text-secondary">Home Page</Link></li>
            <li><Link href="/nehru-portal/about" className="hover:text-secondary">About Portal</Link></li>
            <li><Link href="/nehru-portal/about#vision-mission" className="hover:text-secondary">Vision & Mission</Link></li>
            <li><Link href="/nehru-portal/about#objectives" className="hover:text-secondary">Objectives</Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-serif font-bold text-primary border-b pb-1">Biographies</h4>
          <ul className="list-disc pl-5 space-y-1 text-slate-500 text-xs">
            <li><Link href="/nehru-portal/family-tree" className="hover:text-secondary">Family Tree Diagram</Link></li>
            <li><Link href="/nehru-portal/family-tree/details" className="hover:text-secondary">Member Biographies</Link></li>
            <li><Link href="/nehru-portal/important-dates" className="hover:text-secondary">Chronology Timeline</Link></li>
            <li><Link href="/nehru-portal/important-dates#prison" className="hover:text-secondary">Prison Dashboard</Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-serif font-bold text-primary border-b pb-1">Resource Center</h4>
          <ul className="list-disc pl-5 space-y-1 text-slate-500 text-xs">
            <li><Link href="/nehru-portal/writings" className="hover:text-secondary">Writings & Works</Link></li>
            <li><Link href="/nehru-portal/publications" className="hover:text-secondary">Books catalog</Link></li>
            <li><Link href="/nehru-portal/galleries" className="hover:text-secondary">Media Galleries</Link></li>
            <li><Link href="/nehru-portal/oral-history" className="hover:text-secondary">Oral History</Link></li>
            <li><Link href="/nehru-portal/tributes" className="hover:text-secondary">Tributes Catalog</Link></li>
          </ul>
        </div>
      </div>
    )
  },
  "screen-reader-access": {
    title: "Screen Reader Access",
    category: "Accessibility",
    content: (
      <div className="space-y-4">
        <p>The Nehru Heritage Portal complies with World Wide Web Consortium (W3C) Web Content Accessibility Guidelines (WCAG) 2.0 level AA. This ensures that persons with visual impairments can access the portal using assistive technologies, such as screen readers.</p>
        <p>The information of the portal is compatible with various screen readers, such as:</p>
        <table className="w-full text-left text-xs text-slate-700 max-w-md border border-slate-200 border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b">
              <th className="p-3 font-bold border-r">Screen Reader</th>
              <th className="p-3 font-bold">Website / Link</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="p-3 border-r font-semibold">Non Visual Desktop Access (NVDA)</td>
              <td className="p-3 text-secondary hover:underline"><a href="https://www.nvaccess.org/" target="_blank" rel="noreferrer">nvaccess.org</a></td>
            </tr>
            <tr>
              <td className="p-3 border-r font-semibold">JAWS</td>
              <td className="p-3 text-secondary hover:underline"><a href="https://www.freedomscientific.com/" target="_blank" rel="noreferrer">freedomscientific.com</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
  "rti": {
    title: "Right to Information (RTI)",
    category: "Governance",
    content: (
      <div className="space-y-4">
        <p>Under the Right to Information Act, 2005, citizens can request information regarding the administration and activities of the Nehru Memorial Museum & Library.</p>
        <div className="bg-slate-50 border p-5 rounded-xl space-y-4 font-semibold text-xs text-primary uppercase max-w-md">
          <p className="font-bold text-sm">Public Information Officer</p>
          <div className="normal-case text-slate-600 text-xs space-y-2 font-medium">
            <p>Shri Ramesh Kumar, Administrative Officer</p>
            <p>Nehru Memorial Museum & Library, New Delhi - 110011</p>
            <p>Email: <a href="mailto:ao.nmml@gov.in" className="text-secondary hover:underline">ao.nmml@gov.in</a></p>
          </div>
        </div>
        <p>You can also download disclosures:</p>
        <div className="flex gap-4 flex-wrap">
          <a href="/sites/default/files/Right to Information Act, 2005 (389KB).pdf" target="_blank" className="inline-flex bg-primary hover:bg-primary-hover text-white text-xs font-bold px-4 py-2.5 rounded shadow-sm uppercase tracking-wider">
            RTI Act Handbook (PDF)
          </a>
          <a href="/sites/default/files/Proactive Disclosure (389KB).pdf" target="_blank" className="inline-flex bg-white hover:bg-slate-100 text-primary border border-slate-200 text-xs font-bold px-4 py-2.5 rounded shadow-sm uppercase tracking-wider">
            Proactive Disclosure (PDF)
          </a>
        </div>
      </div>
    )
  },
  "terms-conditions": {
    title: "Terms & Conditions",
    category: "Policy",
    content: (
      <div className="space-y-3">
        <p>This website is designed, developed and maintained by Nehru Portal, Nehru Memorial Museum & Library, Ministry of Culture, Government of India.</p>
        <p>Though all efforts have been made to ensure the accuracy and currency of the content on this website, the same should not be construed as a statement of law or used for any legal purposes. In case of any ambiguity or doubts, users are advised to verify/check with the Department(s) and/or other source(s), and to obtain professional advice.</p>
      </div>
    )
  },
  "privacy-policy": {
    title: "Privacy Policy",
    category: "Policy",
    content: (
      <div className="space-y-3">
        <p>Nehru Portal does not automatically capture any specific personal information from you (like name, phone number or e-mail address), that allows us to identify you individually.</p>
        <p>If the Nehru Portal requests you to provide personal information, you will be informed for the particular purposes for which the information is gathered and adequate security measures will be taken to protect your personal information.</p>
      </div>
    )
  },
  "copyright-policy": {
    title: "Copyright Policy",
    category: "Policy",
    content: (
      <div className="space-y-3">
        <p>Material on this site is subject to copyright protection unless otherwise indicated. The material may be downloaded or reproduced without formal permission for private study, research or non-commercial purposes, provided the source and copyright status are acknowledged.</p>
        <p>Any commercial reproduction, redistribution, or publishing of the materials is strictly prohibited without the prior written consent of the Nehru Memorial Museum & Library.</p>
      </div>
    )
  },
  "hyperlinking-policy": {
    title: "Hyperlinking Policy",
    category: "Policy",
    content: (
      <div className="space-y-3">
        <p>We do not object to you linking directly to the information that is hosted on this website and no prior permission is required for the same. However, we would like you to inform us about any links provided to this Portal so that you can be informed of any changes or updates therein.</p>
        <p>Also, we do not permit our pages to be loaded into frames on your site. The pages belonging to this website must load into a newly opened browser window of the user.</p>
      </div>
    )
  },
  "disclaimer": {
    title: "Disclaimer",
    category: "Policy",
    content: (
      <div className="space-y-3">
        <p>The materials on the Nehru Portal are provided "as is" and without warranties of any kind either express or implied. To the fullest extent permissible pursuant to applicable law, Nehru Memorial Museum & Library disclaims all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose.</p>
      </div>
    )
  },
  "help": {
    title: "Help & Navigation Support",
    category: "Policy",
    content: (
      <div className="space-y-3">
        <p>This portal has been designed with responsive grids and flexible navigation bars. If you experience difficulties finding pages, you can use the search bar at the top of the header, browse the sitemap, or email support at director.nmml@gov.in.</p>
      </div>
    ),
  },
  "recent-updates": {
    title: "Recent Updates & Announcements",
    category: "News",
    content: (
      <div className="space-y-6">
        <div className="border-b pb-4 space-y-1">
          <span className="text-[10px] font-bold text-secondary uppercase">June 16, 2018</span>
          <h4 className="font-serif font-bold text-primary text-sm md:text-base">
            <Link href="/nehru-portal/writings/strategy-trap-india-and-pakistan-under-nuclear-shadow-lt-gen-prakash-menon" className="hover:underline">
              The Strategy Trap India and Pakistan under the Nuclear Shadow by Lt Gen Prakash Menon
            </Link>
          </h4>
          <p className="text-slate-600 text-xs mt-1">Book release lecture and catalog details.</p>
        </div>
        <div className="border-b pb-4 space-y-1">
          <span className="text-[10px] font-bold text-secondary uppercase">June 14, 2018</span>
          <h4 className="font-serif font-bold text-primary text-sm md:text-base">
            <Link href="/nehru-portal/writings/forging-nation-congress-demand-representative-bodies-and-muslim-opposition-1885-1892-14th-june18" className="hover:underline">
              Forging the Nation: The Congress Demand for Representative Bodies and the Muslim Opposition (1885-1892), 14th June'18
            </Link>
          </h4>
          <p className="text-slate-600 text-xs mt-1">Lecture transcript and archival details.</p>
        </div>
      </div>
    )
  },
  "jawaharlal-nehru": {
    title: "Jawaharlal Nehru",
    category: "Biography",
    content: (
      <div className="space-y-4 mt-4 font-sans text-justify" style={{ color: "#000000", fontSize: "14px", lineHeight: "1.8" }}>
        <p>Jawaharlal Nehru, the first Prime Minister of India and a prominent personality in the Indian freedom movement, was born on 14 November 1889 in Allahabad, Uttar Pradesh. His father, Motilal Nehru was a renowned lawyer and one of Mahatma Gandhi’s notable lieutenants. His mother, Swarup Rani Nehru came from a well-known Kashmiri Brahmin family settled in Lahore. Jawaharlal Nehru had two sisters Vijyalakshmi Pandit and Krishna Hatheesing. In 1916, Jawaharlal married Kamala Kaul, and they were blessed with a child, Indira Priyadarshini.</p>
        <p>Nehru described his childhood as a “sheltered and uneventful one”. He grew up in an atmosphere of privilege at wealthy homes including a large palatial estate called the Anand Bhawan at Allahabad. His father had him educated at home by private governesses and tutors until he was 16. Under the influence of one of the tutors, Ferdinand T. Brooks, Nehru became interested in science and theosophy.</p>
        <p>In 1905 Nehru went to England and studied at Harrow, then at Trinity College, Cambridge and graduated with an Honours degree in Natural Science in 1910. He later studied Law at the Inns of Court School of Law (Inner Temple), London.</p>
        <p>Nehru returned to India in August 1912, and enrolled himself as an advocate of the Allahabad High Court. However, he did not relish either the practice of law or the company of lawyers. He began to involve in nationalist politics gradually in the coming years. Within months of his return to India in 1912, he had attended an annual session of the Indian National Congress in Patna. He collected funds for the civil rights campaigners led by Mahatma Gandhi in 1913. Later, he campaigned against the indentured labour and other such discriminations faced by Indians in the British colonies. However, Nehru was not satisfied with the pace of the national movement. He became involved with more outspoken nationalist leaders who were demanding Home Rule for Indians.</p>
        <p>The year 1915 witnessed the advent of Mahatma Gandhi in Indian politics, which substantially transformed the course of struggle for India’s Independence. His creed of peace and non-violence made the national movement into a mass all India movement. Nehru met Mahatma Gandhi for the first time in the Congress session at Lucknow in December 1916 and Gandhi had a major impact on Nehru in his active politics. In Fenner Brockway words, “The Association of Gandhi and Nehru for over thirty years is an epic in human co-operation. Their names are indissoluble in the record of India’s struggle for freedom”. He was also deeply impressed by Gautama Buddha. He had written, “The story of Gautama Buddha has influenced me from my childhood. The influence was two-fold. First it influenced me as a story and second I liked the scientific attitude reflected therein, the scientific and ethical attitude”.</p>
        <p>The first major active involvement of Nehru in mass politics came at the onset of the Non-Cooperation movement in 1920. He led the movement in the United Provinces (now Uttar Pradesh), and was arrested on charges of anti-government activities in 1921. He was released a few months later. Gradually, he became intensely involved with the problems of cultivators and the poor. He led the kisan (peasant) movement and no-tax campaign in U.P. in 1930. For him, “imperialism was a curse which should be lifted from the brows of men, that poverty was incompatible with civilization, that nationalism should be poised on a sense of international community and that it was not sufficient to brood on these things when action was urgent and compelling”. These were the principles which inspired and gave vitality to Jawaharlal Nehru’s activities in the years of India’s struggle for freedom. During the first twenty-five years of his political life, i.e. between 1920 and 1945, he spent more time in jail than outside.</p>
        <p>Nehru played a leading role in the development of the internationalist outlook of the Indian independence struggle. His efforts paid off in 1927. The Congress was invited to attend the Congress of Oppressed Nationalities in Brussels, Belgium. The meeting was called to co-ordinate and plan a common struggle against imperialism. Nehru represented India and was elected to the Executive Council of the League against Imperialism that was set up during this meeting. Also, Nehru’s visit to Europe in 1936 proved to be the watershed in his political and economic thinking. Nehru’s real interest in Marxism and his socialist pattern of thought stem from these tours.</p>
        <p>His dynamic leadership, understanding of national and international issues, won for him a significant place in the Indian national movement. He was chosen as Congress President for a number of times before and after Independence -- 1929, 1936, 1937 and 1946 and in 1951-54. He was the President of the Lahore session of the Congress in 1929 when the AICC adopted the resolution for Complete Independence ‘Purna Swaraj’ from the British Raj and also moved the Quit India resolution in 1942. In 1946, Nehru headed an interim Government of India and had to preside over the issue of the partition of India.</p>
        <p>Jawaharlal Nehru also supported the cause of the people in the Princely States and helped to make their struggle as a part of the nationalist movement for independence. The All India States People’s Conference was formed in 1927, and Nehru, who had been supporting the cause of the people of the Princely States for many years, was made the President of the Conference in 1935. This body later played an important role during the political integration of India.</p>
        <p>Nehru took office as the Prime Minister of India on 15 August 1947, and delivered his famous inaugural address titled “Tryst with Destiny”. He knew that India’s tryst with destiny meant the sovereignty of the people and the acceptance of the primacy of equality. His vision for modern India based on a dream of a sovereign and democratic republic. But his immediate task was to set the house in order. The trauma of transition coupled with Partition posed a plethora of problems and challenges.</p>
        <p>The Constitution of India was enacted in 1950, after which he embarked on his ambitious programme of economic, social and political reforms. Chiefly, he oversaw India’s transition from a colony to an independent republic, while nurturing a plural, multi-party democracy. The first major test of Indian democracy came with the general election of 1951-52 held on the basis of adult franchise in which over 173 million voters were registered. The successful conduct of that election received appreciation from various quarters. It was the direct result of his dream being fulfilled by establishing Panchayati Raj and universal adult franchise, which strengthened the parliamentary democracy. To have smooth functioning of administration, he constituted the State Reorganization Committee and set forth the process of re-organising states on linguistic basis. He also gave a clear direction to India’s role in the comity of nations with the policy of non-alignment and the principles of Panchsheel.</p>
        <p>Jawaharlal Nehru believed in planned economic development based on import substitution, industrialisation. He advocated a mixed economy where the government controlled public sector would co-exist with the private sector. He believed that the establishment of basic and heavy industry was fundamental to the development and modernisation of the Indian economy. The government, therefore, directed investment primarily into the key public sector industries -- steel, iron, coal, and power -- promoting their development with subsidies and protectionist policies. The Planning Commission was set up in 1950. Under Nehru’s leadership, the government also attempted to develop India by embarking on agrarian reform, abolition of Zamindari system and rapid industrialisation. The 1960s saw the start of the Green Revolution, an effort to diversify and increase crop production.</p>
        <p>However, in the pursuit of development, the government never lost sight of the Scheduled Tribes people and the Backward Classes. The concern for the Scheduled Tribes people demonstrated in his approach to the needs of backward regions. He has said “I approached them in a spirit of comradeship”. He was in close touch with Verrier Elwin who was well-versed in cultural aspects of Scheduled Tribes of India, to devise approaches to problems faced by the tribals of India. Along with all the efforts to enable national integration, there were efforts to protect their identity and their rich cultural heritage.</p>
        <p>Nehru was an advocate of education for India’s children and youth, believing it essential for India’s future progress. The government oversaw the establishment of many institutions of higher learning and centre for arts and culture such as the All India Institute of Medical Sciences (AIIMS), the Indian Institutes of Technology (IITs), the Indian Institutes of Management (IIMs), the National Institutes of Technology (NITs) and the Indian Council for Cultural Relations, the Sangeet Natak Akademi and the Lalit Kala Akademi, the Sahitya Akademi and Indian Council of World Affairs.</p>
        <p>The Parliament enacted much far reaching legislation such as the Hindu Law and Hindu Civil Code, which increased the legal rights and gave social empowerment to women. A system of reservation in government services, educational institutions and legislatures was created to end the social inequalities and disadvantages faced by the Scheduled Castes and Scheduled Tribes. Nehru also championed secularism and religious harmony by increasing the representation of minorities in government.</p>
        <p>Nehru took great interest in the development of science and technology and firmly believed that scientific temper and scientific approach to problems would liberate India from economic miseries and social justice. Nehru was one of the first persons to use the term “Scientific Temper” and advocated its promotion. He wrote in his book Discovery of India, “It is the scientific approach, the adventurous and yet critical temper of science, the search for truth and new knowledge, the refusal to accept anything without testing and trial, the capacity to change previous conclusions in the face of new evidence, the reliance on observed fact and not on pre-conceived theory, the hard discipline of the mind—all this is necessary, not merely for the application of science but for life itself and the solution of its many problems”. As he himself explained it: “Politics led me to economics and this led me inevitably to science and scientific approach to all our problems and to life itself. It is science alone that would solve the problems of hunger and poverty”. The principal accomplishment in Science and Technology in the Nehru era was the creation of a large infrastructure covering the physical, chemical, biological, engineering services and technology. Two main areas of thrust were the development of the atomic energy and through it, the space programme, and setting up a large chain laboratories under the Council for Science and Industrial Research (CSIR). He also laid the foundation of atomic energy and research. He worked very closely with Homi Bhabha, S.S. Bhatnagar, Vikram Sarabhai and others and made significant efforts to reduce bureaucracy in scientific establishments.</p>
        <p>Nehru also laid the foundation of big dams, such as Bhakra Nangal, Hirakud and Nagarjuna Sagar. He considered them the “Temples of Modern India”. He also laid the foundation of steel plants of Bhilai, Rourkela and Durgapur in collaboration with the Soviet Union, Germany and England. Once Dr. S. Radhakrishnan said about Nehru that “No homage is necessary for him. Modern India is the greatest monument which he has built for himself”.</p>
        <p>Nehru was the architect of India’s foreign policy. He began to take interest in world affairs long before Independence, when India had no international status. In the 1930s his sympathies were with Abyssinia and Republic of Spain. Independent India’s policy of non-alignment and Panchsheela, influenced by Gautama Buddha, were as much the gift of Nehru as of Indian tradition. On 15 August 1949, Nehru declared from the Red Fort, “In our foreign policy, we have proclaimed that we shall join no power bloc and endeavour to co-operate and be friendly with all countries.” As a leader of free India, Nehru recognized that his country could neither stay out of the World nor could it divert of its own interest in world affairs. Hence, he firmly believed that India must follow its own course in world affairs and not allow itself to be used by any other country, however powerful that country might be. The policy of Non-Alignment was the natural growth of such thinking. He wanted international disputes to be settled by peaceful negotiations, failing that by arbitration and not by war. Hence, he supported the role of the United Nations Organisation.</p>
        <p>The Chinese aggression in 1962 was a grave challenge to Nehru’s prestige. It unified the nation in support of its territorial integrity and sovereignty.</p>
        <p>On the international scene, Nehru was a champion of peace and a strong supporter of the United Nations. He pioneered the policy of non-alignment and co-founded the Non-Aligned Movement of nations professing independence from the then rival blocs of nations, the West led by the USA and the socialist bloc of the USSR.</p>
        <p>Nehru, while a champion of peace, was not blind to the political and geo-strategic reality of India in 1947, which resulted in the establishment of the Atomic Energy Commission of India (AEC) in 1948 and also laying the foundation stone of the National Defence Academy (India) in 1949.</p>
        <p>Nehru was a prolific writer. He wrote many books and articles for a number of newspapers and journals. During the freedom struggle, he spent over ten years in prison where he produced his great works such as The Discovery of India, Glimpses of World History, An Autobiography, Towards Freedom, and Letters from a Father to His Daughter.</p>
        <p>In 1955 Nehru was awarded the Bharat Ratna, the highest civilian honour of the country. Nehru was loved by all, including his comrades or opponents. In fact Nehru has written in his Will and Testament that “I have received so much love and affection from the Indian people that nothing that I can repay a small fraction of it, and indeed there can be no repayment of so precious a thing as affection”. His birthday on 14th of November is celebrated in India as Bal Divas (Children’s Day) on behalf of children and young people. Children across India remember him as Chacha Nehru.</p>
        <p>Like Mahatma Gandhi, Nehru also laid great stress on cleanliness. He said that people of India must learn to keep their surroundings clean. It is not only important on hygienic point of view but also in respect of their health medically. He wanted that people should be self-reliant in all respect and not to depend on government agencies totally. In one of the occasions he said that everybody expects the Government should do it but it is quite impossible for any Government to undertake the hundreds and thousands of small village schemes that could easily be undertaken by the villagers themselves. He said, “There is need for developing the spirit of self-reliance among the villagers. Some simple norms should be laid down for testing the people’s preparedness to do things themselves. The community development programme should be extended to any new areas unless people in that region demonstrate their spirit of self-help by undertaking elementary schemes of community benefit like the keeping the village clean. In the existing blocks, additional financial allocations should be contingent on the people’s initiative and capacity for discharging their own responsibilities”.</p>
        <p>The man, who made such a powerful imprint on India, passed away on 27 May 1964. However, he would be remembered not just as India’s foremost and pioneering Prime Minister, but also as one of the greatest statesmen of the modern world. Mahatma Gandhi gave him the greatest compliment, “He is pure as the crystal. He is truthful beyond suspicion.</p>
        <p>Nehru will be remembered for his modern values and thoughts, insistence upon the Unity of India, and in the face of ethnic and religious diversity, taking India into the modern age of scientific innovation and technological progress, social concerns for the marginalised and poor, and respect for democratic values.</p>
      </div>
    )
  },
  "strategy-trap-india-and-pakistan-under-nuclear-shadow-lt-gen-prakash-menon": {
    title: "The Strategy Trap India and Pakistan under the Nuclear Shadow by Lt Gen Prakash Menon",
    category: "News",
    parent: { label: "Recent Updates", href: "/all-recent-updates" },
    content: (
      <div className="space-y-2 mt-4 font-sans" style={{ color: "#000000", fontSize: "14px", lineHeight: "1.8" }}>
        <p>Book Launch in association with <strong>Takshashila Institution and Wisdom Tree</strong></p>
        <p><strong>Gen V P Malik</strong> will launch the Book</p>
        <p><strong>Mr. Arvind Gupta</strong> will be in conversation with the Author</p>
        <br />
        <p><strong>Date:</strong> Saturday, June 16, 2018</p>
        <p><strong>Place:</strong> NMML</p>
      </div>
    )
  },
  "forging-nation-congress-demand-representative-bodies-and-muslim-opposition-1885-1892-14th-june18": {
    title: "Forging the Nation: The Congress Demand for Representative Bodies and the Muslim Opposition (1885-1892), 14th June'18",
    category: "News",
    parent: { label: "Recent Updates", href: "/all-recent-updates" },
    content: (
      <div className="space-y-2 mt-4 font-sans" style={{ color: "#000000", fontSize: "14px", lineHeight: "1.8" }}>
        <p><strong>Dr.Saumya Dey</strong></p>
        <p>O.P. Jindal Global University</p>
        <br />
        <p><strong>Date:</strong> Thursday, June 14, 2018</p>
        <p><strong>Place:</strong> NMML</p>
      </div>
    )
  },
  "forging-nation-congress-demand-representative-bodies-and-muslim-opposition-1885-1892-15-june18": {
    title: "Forging the Nation: The Congress Demand for Representative Bodies and the Muslim Opposition (1885-1892), 15 June'18",
    category: "News",
    parent: { label: "Recent Updates", href: "/all-recent-updates" },
    content: (
      <div className="space-y-2 mt-4 font-sans" style={{ color: "#000000", fontSize: "14px", lineHeight: "1.8" }}>
        <p>Forging the Nation: The Congress Demand for Representative Bodies and the Muslim Opposition (1885-1892), 15 June'18</p>
        <br />
        <p>Date: Friday, June 8, 2018</p>
        <p>Place: Delhi</p>
      </div>
    )
  },
  "search": {
    title: "Search Results",
    category: "Utility",
    content: (
      <div className="space-y-4">
        <p>No matches were found. Try expanding your search queries with different keywords or names.</p>
      </div>
    )
  },
  "swaraj-bhawan": {
    title: "Swaraj Bhawan",
    category: "Places of Residence",
    parent: { label: "Places of Residence", href: "/places" },
    content: (
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
    )
  },
  "anand-bhawan": {
    title: "Anand Bhawan",
    category: "Places of Residence",
    parent: { label: "Places of Residence", href: "/places" },
    content: (
      <div className="swarajBhavan">
        <div className="History cf" id="History">
          <div className="lifePics alignLeft">
            <img
              width="344"
              height="365"
              src="/sites/all/themes/nhp/images/Anand-Bhawan.jpg"
              alt="Anand Bhawan"
              title="Anand Bhawan"
            />
            <div>Anand Bhawan</div>
          </div>
          <p>
            A new House was built in the same complex by Motilal Nehru in 1927. It was named Anand Bhawan. The family shifted in this new house in 1929, which was even grander home not in size, but certainly in quality and considerable splendour. It was designed mainly by Motilal Nehru, and a specialist architect sent by the Tatas. It was two stories high, built of light gray painted brick, with deep, shady verandah circling both floors.
          </p>
          <p>
            Anand Bhawan was not just a building but a symbol of fight for freedom for which many members of the Nehru family had struggled, suffered and sacrificed. Jawaharlal Nehru had a special feeling for Anand Bhawan: 'It is far more than a structure of brick and concrete, more than a private possession. It is connected intimately with our national struggle for freedom and within its walls great events have happened and great decisions have been reached'.
          </p>
          <div className="lifePics alignRight">
            <img
              width="344"
              height="365"
              src="/sites/all/themes/nhp/images/Anand-Bhawan-2.jpg"
              alt="Anand Bhawan"
              title="Anand Bhawan"
            />
            <div>Anand Bhawan</div>
          </div>
          <p>
            The Jawaharlal Nehru Planetarium is also now situated here, which has been striving to inculcate scientific temper among the masses through its sky shows on astronomy and science.
          </p>
          <p>
            Anand Bhawan was donated in 1970 by Smt. Indira Gandhi to the Jawaharlal Nehru Memorial Fund ‘so that it is suitably used to keep alive the name of Jawaharlal Nehru not as a bit of history, frozen into brick and mortar, but as a living memory of the man beckoning us to remain true to his beliefs which are so basic to the survival of our great country'. It has now been converted into a memorial museum.
          </p>
        </div>
      </div>
    )
  },
  "teen-murti-house": {
    title: "Teen Murti House",
    category: "Places of Residence",
    parent: { label: "Places of Residence", href: "/places" },
    content: (
      <div className="swarajBhavan">
        <div className="History cf" id="History">
          <p>
            Jawaharlal Nehru stayed at 17 York Road in New Delhi, now known as Motilal Nehru Road, when he was the Vice-President of Viceroy’s Executive Council (1946). It was used as his headquarters during the whole period of negotiations for India’s independence, and for some time afterwards. He continued to live there after he became the Prime-Minister of Independent India, Later on 2 August 1948, he moved into Teen Murti House, which became the official residence of the Prime Minister.
          </p>
          <p>
            Teen Murti House, located to the south of Rashtrapati Bhawan in New Delhi, derives its name from a group of three statues of soldiers, representing the lancers of Mysore, Jodhpur and Hyderabad states, installed here in 1922 as a memorial to the sacrifice of the soldiers of Indian states during the First World War in Sinai, Palestine and Syria. Designed by Robert Tor Russel as a part of Edwin Lutyen’s imperial capital, the Teen Murti House was built in 1929-30 as the official residence of the Commander-in-Chief of the British Indian Army. This elegant building, designed in an austere classical style, was carefully erected to reflect the military prowess of the Raj. Field Marshal Sir William Birdwood was the first to occupy this house, while General Sir Roy Bucher as the last, vacating it soon after India’s independence in 1947.
          </p>
          <p>
            In August 1948, the Teen Murti House became the official residence of independent India’s first Prime Minister, Jawaharlal Nehru, who lived here for sixteen years until his death on 27 May 1964. The House came so much to be identified with Jawaharlal Nehru that it became turned synonymous with his name.
          </p>
          <p>
            After his death, the Government of India decided to convert the Teen Murti House into a memorial that would perpetuate Nehru’s memory and legacy. On November 14, 1964 Jawaharlal Nehru’s 75th birthday, the then President of India, Dr. S. Radhakrishnan, formally dedicated the Teen Murti House to the nation for housing a museum and a library, now known as Nehru Memorial Museum and Library. The Teen Murti House campus also houses the Nehru Planetarium. ( <a href="http://nehrumemorial.nic.in/" target="_blank" rel="noopener noreferrer">NMML Website </a>).
          </p>
        </div>
      </div>
    )
  },
  "early-life": {
    title: "Early Life",
    category: "Important Dates",
    parent: { label: "Important Dates", href: "/important-dates" },
    content: (
      <p>
        Jawaharlal Nehru was born on 14 November 1889 at Allahabad, United Provinces (now Uttar Pradesh). His father Motilal Nehru was a renowned lawyer and one of the Mahatma Gandhi’s notable lieutenants. His mother, Swarup Rani Nehru came from a well-known Kashmiri family, settled in Lahore. He had two sisters, Vijayalakshmi and Krishna. Nehru grew up in an atmosphere of privilege at wealthy homes, including a palatial estate called Anand Bhawan, Allahabad. Motilal wanted to give his son the best possible education. In 1896, Nehru was sent to St. Mary’s Convent School, Allahabad, but after six months he was removed from that school. As Nehru wrote in his An Autobiography, “An only son of prosperous parents is apt to be spoilt, especially so in India”. He was educated at home till the age of 16. He was taught by Ferdinand T. Brooks, who stimulated his interest in science and theosophy. Encouraged by his tutor Nehru became a voracious reader and read works from Alice in Wonderland to books by Scott, Charles Dickens, H.G. Wells, Mark Twain and Sherlock Holmes. He also read stories of the Buddha, which left a deep impact on his mind. In 1905 Nehru went to England to study at Harrow, then at Trinity College, Cambridge, and graduated with an Honours degree in Natural Science in 1910. He later studied Law at the Inns of Court School of Law (Inner Temple), London. While staying in England he avidly followed political activities in India and the world. Motilal had sent his son to Harrow and Cambridge to prepare him for a career in the Civil Service, but he returned to India in 1912 as a Barrister and enrolled himself as his father’s Junior at the Allahabad High Court.
      </p>
    )
  },
  "marriage": {
    title: "Marriage",
    category: "Important Dates",
    parent: { label: "Important Dates", href: "/important-dates" },
    content: (
      <p>
        At the age of 26 Jawaharlal Nehru married Kamala Kaul, on 8 February 1916 at Haksar Haveli, Delhi. Kamala Nehru was the eldest daughter of Rajpati and Jawaharmal Mull Atal-Kaul. On 19 November 1917, they were blessed with a girl child, Indira Priyadarshani. Kamala Nehru also gave birth to a pre-mature baby boy who died. The initial years of Jawaharlal and Kamala Nehru’s married life found them coming to terms with contrasts in family background. Kamala Nehru hailed from a conservative Kashmiri Brahmin family whereas Jawaharlal Nehru’s family had a more westernized life style. Secondly, Jawaharlal Nehru could not spend much time with Kamala Nehru due to his constant political activities. Soon Kamala Nehru, following the footsteps of her husband, started participating in freedom movement. This brought the young couple much closer. By the end of 1930s she fell seriously ill and was diagnosed with tuberculosis then a dreaded ailment. She underwent treatment in various hospitals in India and abroad. Nehru always accompanied her whenever he was out of jail. Nehru realized the depth of his attachment to her. He has written in his An Autobiography “I almost overlooked her…. We wanted to be together as much as possible during my brief period outside prison”. Kamala Nehru died in Lausanne, Switzerland on 28 February 1936. At that time Jawaharlal Nehru, Indira and Swarup Rani were by her side. Later Jawaharlal Nehru wrote in his Discovery of India, comparing the life of Kamala Nehru with Chitragada, (the English version is ‘Chitra’, one of Tagore’s play) “like Chitra in Tagore’s plays, she (Kamala) seemed to say to me: I am Chitra. No goddess to be worshipped, nor yet the object of common pity to be brushed aside. If you deign to keep me by your side in the path of danger and daring, if you allow me to show the great duties of your life, then you will know me. But she did not say this to me in words and it was only gradually that I read the massage of her eyes”.
      </p>
    )
  },
  "freedom-struggle": {
    title: "Freedom Struggle",
    category: "Important Dates",
    parent: { label: "Important Dates", href: "/important-dates" },
    content: (
      <p>
        Jawaharlal Nehru began his political career as a delegate to the Bankipore Congress session in 1912. He subsequently took part in all the major non-violent movements led by Mahatma Gandhi and spent the equivalent of nine long years in jail between 1920 and 1945. Nehru’s first major involvement with the nationalist movement was his role in the Non-Cooperation movement in Uttar Pradesh. He was arrested on the charges of anti-government activities in 1921. He gradually grew involved with the problems of the poor and the cultivators. He led the Kisan movement in the United Provinces from 1920s and also worked with labour unions. He represented India at the Congress of Oppressed Nationalities at Brussels, 1927, and founded the Independence for India League, 1928. Nehru joined in protest against the all white Simon Commission in Lucknow, 1928 and was one of the signatories to the (Motilal) Nehru Report on Indian Constitutional Reforms, 1928. Jawaharlal Nehru was instrumental in changing the creed of the Congress from Dominion Status to Complete Independence. He moved the resolution of Complete Independence at the Lahore Session of the Congress, 1929. During the Civil Disobedience movement Nehru led the No-Tax campaign in U.P. and was arrested in 1930. Nehru also took a keen interest in the States’ People’s Movement and became the President of the All India States’ People’s Conference in 1939. Nehru also participated in the Individual Satyagraha, 1940-41, and was imprisoned the same year. He moved the Quit India resolution at the AICC, Bombay in 1942 and was arrested on 9 August 1942. He served the longest period of jail from 1942-45. He led the Interim Government of India and was sworn in as its Vice President and Member in Charge, External Affairs on 2 September 1946. At the mid night of 14 and 15 August 1947, he was sworn in as the First Prime Minister of Independent India.
      </p>
    )
  },
  "prison": {
    title: "In Prison",
    category: "Important Dates",
    parent: { label: "Important Dates", href: "/important-dates" },
    content: <PrisonContent />
  },
  "prime-minister": {
    title: "Prime Minister",
    category: "Important Dates",
    parent: { label: "Important Dates", href: "/important-dates" },
    content: (
      <p>
        Prime Minister Nehru took the oath as first Prime Minister of India at midnight of 14-15 August 1947, and then delivered his famous speech “Tryst with Destiny.” Nehru’s vision for an Independent, modern India was that of a sovereign democratic republic. On the domestic front, Nehru faced formidable challenges in the beginning. The government swiftly acted to resettle the uprooted millions of refugees and provide for stable administration. Nehru also took active part in framing the Constitution of India’s Republic which came into existence on 26 January 1950. He helped lay strong foundation of Parliamentary democracy. The first general elections of 1951-52 were conducted on the basis of universal adult franchise without discrimination on basis of income, literacy, gender, caste or creed. The elections were free and fair, a historic event with 173 million eligible voters, who constituted the world’s largest electorate. Nehru favoured a mixed economy where the Government controlled public sector which co-existed with the private sector. His tenure saw the growth of heavy industry. The abolition of Zamindari helped land redistribution. The Hindu civil code was reformed by legislative enactment. He chaired the Planning Commission in ex-officio capacity. Linguistic reorganization in 1956 and 1960 redrew the provincial (state) boundaries. This period also saw the founding of many new institutions for higher education and promoted art, culture and literature. Nehru laid great stress on science and technology and on “Scientific Temper”. He promoted atomic energy and the space programme, and oversaw establishment of a chain of Laboratories under the Council for Science and Industrial Research (CSIR). He also laid the foundation stone of big dams like Bhakra Nangal and Hirakud and the Steel Plants at Bhilai, Rourkela and Durgapur. On the External affairs front, Nehru based his foreign policy on non-alignment and Panchsheela. He strove for good relations with neighboring countries. India joined the Commonwealth despite some opposition, in the interest of cooperation and goodwill. He advocated that international disputes be settled by peaceful negotiation. Nehru had faith in the role of United Nations Organization. On the international scene, he was a champion of peace. In 1955 Nehru was awarded the Bharat Ratna, the highest Civilian honour of the country.
      </p>
    )
  },
  "first-imprisonment-6-december-1921-3-march-1922": {
    title: "First Imprisonment : 6 December 1921 - 3 March 1922",
    category: "Important Dates",
    parents: [
      { label: "Important Dates", href: "/important-dates" },
      { label: "In Prison", href: "/prison" }
    ],
    content: (
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
    )
  },
  "second-imprisonment-11-may-1922-31-january-1923": {
    title: "Second Imprisonment : 11 May 1922 - 31 January 1923",
    category: "Important Dates",
    parents: [
      { label: "Important Dates", href: "/important-dates" },
      { label: "In Prison", href: "/prison" }
    ],
    content: (
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
        <p>The judgement was pronounced on 19 May. Jawaharlal was sentenced to eighteen months rigorous imprisonment and a fine of 100 rupees. He spent more than 260 days in prison and was released on 31 January 1923.</p>
      </div>
    )
  },
  "third-imprisonment-22-september-1923-4-october-1923": {
    title: "Third Imprisonment : 22 September 1923 - 4 October 1923",
    category: "Important Dates",
    parents: [
      { label: "Important Dates", href: "/important-dates" },
      { label: "In Prison", href: "/prison" }
    ],
    content: (
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
    )
  },
  "fourth-imprisonment-14-april-1930-11-october-1930": {
    title: "Fourth Imprisonment : 14 April 1930 - 11 October 1930",
    category: "Important Dates",
    parents: [
      { label: "Important Dates", href: "/important-dates" },
      { label: "In Prison", href: "/prison" }
    ],
    content: (
      <div>
        <div className="lifePics alignLeft" style={{ width: "400px" }}>
          <img
            src="/sites/default/files/inprison/Fourth Imprisonment, Inside view of the cell Kutta Ghar in Naini Central Prison where was imprisoned.jpg"
            alt="Fourth Imprisonment, Inside view of the cell Kutta Ghar in Naini Central Prison where was imprisoned"
            title="Fourth Imprisonment, Inside view of the cell Kutta Ghar in Naini Central Prison where was imprisoned"
          />
          <div>Inside view of the cell Kutta Ghar in Naini Central Prison where was imprisoned</div>
        </div>
        <p>The Indian National Congress passed a resolution at Calcutta in December 1928 that if the British Government did not accept the Swaraj Constitution drawn up by the All Parties Committee within one year, it would organise a campaign of non-violent non-cooperation. The objective would be the attainment of complete independence. In pursuance of this the Lahore session of the Congress in December 1929 resolved upon a complete boycott of legislatures, committees constituted by the Government and future elections. It further directed Congressmen to resign their seats in the legislatures and all official committees. In February 1930, Congress Working Committee authorised Mahatma Gandhi to launch a programme of civil disobedience including the non-payment of taxes. Mahatma Gandhi began the historic Dandi March with a small band of selected followers from Sabarmati Ashram on 12 March 1930. Thousands of people joined him en route and courted arrest. The Dandi march shook the empire to its foundations as salt became symbol of freedom. As President of the Indian National Congress Jawaharlal Nehru was also busy organizing the Congress party and motivating the people with letters, statements and detailed circulars to the provinces outlining the plan of action.</p>
        <p>He was arrested on 14 April 1930 on his way to Raipur in Central Provinces to preside over the third session of the Hindi Provincial Conference and sent to Naini near Allahabad. The trial began on the same day in the court of Magistrate J.S. Grose. The trial lasted only two hours. Nehru was convicted under section 9(c) of the Indian Salt Act XII of 1882. In a message to the people he said: “Keep smiling, fight on and see it through."</p>
        <p>Bidding farewell to the people of Allahabad he stated: "What can I say to the brothers and sisters of Allahabad except that I thank them for their love and kindness and hope that they will participate fully in the great struggle for the freedom of our country. Keep up the honour of Allahabad!"</p>
        <p>He was sentenced to six months’ imprisonment and sent to Naini Central Prison. In a message to Mahatma Gandhi from prison, he exclaimed:</p>
        <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "I have stolen a march over you".</p>
        <p>He spent more than 175 days during his fourth term in prison. He was released on 11 October 1930.</p>
        <div className="lifePics" style={{ textAlign: "center", margin: "20px auto", display: "block", maxWidth: "773px" }}>
          <img
            src="/sites/default/files/inprison/The diagram of his barrack in Naini Central Prison.jpg"
            alt="The diagram of his barrack in Naini Central Prison made by Jawaharlal Nehru"
            title="The diagram of his barrack in Naini Central Prison made by Jawaharlal Nehru"
          />
          <div>The diagram of his barrack in Naini Central Prison made by Jawaharlal Nehru</div>
        </div>
      </div>
    )
  },
  "fifth-imprisonment-19-october-1930-26-january-1931": {
    title: "Fifth Imprisonment : 19 October 1930 - 26 January 1931",
    category: "Important Dates",
    parents: [
      { label: "Important Dates", href: "/important-dates" },
      { label: "In Prison", href: "/prison" }
    ],
    content: (
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
    )
  },
  "sixth-imprisonment-26-december-1931-30-august-1933": {
    title: "Sixth Imprisonment : 26 December 1931 - 30 August 1933",
    category: "Important Dates",
    parents: [
      { label: "Important Dates", href: "/important-dates" },
      { label: "In Prison", href: "/prison" }
    ],
    content: (
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
    )
  },
  "seventh-imprisonment-12-february-1934-3-september-1935": {
    title: "Seventh Imprisonment : 12 February 1934 – 3 September 1935",
    category: "Important Dates",
    parents: [
      { label: "Important Dates", href: "/important-dates" },
      { label: "In Prison", href: "/prison" }
    ],
    content: (
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
    )
  },
  "eighth-imprisonment-31-october-1940-3-december-1941": {
    title: "Eighth Imprisonment : 31 October 1940 - 3 December 1941",
    category: "Important Dates",
    parents: [
      { label: "Important Dates", href: "/important-dates" },
      { label: "In Prison", href: "/prison" }
    ],
    content: (
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
    )
  },
  "ninth-imprisonment-9-august-1942-15-june-1945": {
    title: "Ninth Imprisonment : 9 August 1942 - 15 June 1945",
    category: "Important Dates",
    parents: [
      { label: "Important Dates", href: "/important-dates" },
      { label: "In Prison", href: "/prison" }
    ],
    content: (
      <div>
        <div className="lifePics alignLeft" style={{ width: "400px" }}>
          <img
            src="/sites/default/files/inprison/Nineth Imprisonment, Ahmednagar Fort Prison.jpg"
            alt="Nineth Imprisonment, Ahmednagar Fort Prison"
            title="Nineth Imprisonment, Ahmednagar Fort Prison"
          />
          <div>Ahmednagar Fort Prison</div>
        </div>
        <p>1942 was a momentous year in the history of India. Within the country there was a mass upsurge in favour of liberation from British rule. After the failure of the Cripp’s Mission, in a statement to the press at Allahabad on 15 April 1942, Jawaharlal Nehru said:</p>
        <p>"...Our blood and tears will flow; it may be that the parched soil of India needs them so that the fine flower of freedom may grow again and its fragrance envelops the land. We shall pay the price and it will be well with us if we remain true to our faith and do not falter."</p>
        <p>On 8 August1942 several Congress leaders, Mahatma Gandhi, Maulana Abul Kalam Azad, Sardar Patel, Jawaharlal Nehru and others assembled in Bombay to pass the 'Quit India' resolution and asked the British to leave India as “the continuation of that rule is degrading and enfeebling India and making her progressively less capable of defending herself and of contributing to the cause of world freedom."</p>
        <p>Speaking in favour of the resolution Jawaharlal Nehru said:</p>
        <p>"This Resolution is not a threat. It is an invitation. It is an explanation... It is an offer of co-operation but of a free India with other free people… On any terms our resolution promises only struggle and conflict....</p>
        <p>The Congress leaders were detained under section 26(i) (b) of the Defence of India Act which empowered the Central Government to detain any particular person if it was necessary to do so “with a view to preventing him from acting in any manner prejudicial to the defence of British India, the public safety the maintenance of public order, relations with foreign or Indian states, or the efficient prosecution of the war."</p>
        <p>The entire country was shaken by an anti-British upsurge for the next few months, which was suppressed by the Government through repression. All Senior Congress members were arrested and taken to an unknown destination to be detained without trial. Jawaharlal Nehru was arrested on 9 August 1942 and imprisoned in Ahmednagar Fort Prison.</p>
        <p>On this ninth prison terms, Nehru spent more than 1,030 days in prison. From 9 August 1942 to 28 March 1945 he was detained at Ahmednagar Fort Prison. He was then kept in Bareilly Central Prison from 30 March 1945 till 9 June 1945. He was taken to Almora Jail on 10 June 1945 from where he was released on 15 June 1945. Jawaharlal Nehru wrote the The Discovery of India during his imprisonment in Ahmednagar Fort Prison which was published in 1946.</p>
        <div className="lifePics" style={{ textAlign: "center", margin: "20px auto", display: "block", maxWidth: "800px" }}>
          <img
            src="/sites/default/files/inprison/Nineth Imprisonment, Ahmednagar Fort.jpg"
            alt="Nineth Imprisonment, Ahmednagar Fort"
            title="Nineth Imprisonment, Ahmednagar Fort"
          />
          <div>Ahmednagar Fort</div>
        </div>
      </div>
    )
  }
};

export default function DynamicUtilityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  const page = pagesDb[slug];

  if (!page) {
    return (
      <>
        <TopBar />
        <Header />
        <main className="w-full flex-1 bg-slate-50 py-16 text-center select-none">
          <div className="container-custom max-w-md space-y-4">
            <h1 className="font-serif text-3xl font-extrabold text-primary">Page Not Found</h1>
            <p className="text-slate-500 text-sm">The page you are looking for does not exist or has been moved.</p>
            <div className="pt-2">
              <Link href="/" className="bg-secondary text-white text-xs font-bold px-6 py-2.5 rounded shadow uppercase tracking-wider inline-block">
                Back to Home
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <TopBar />
      <Header />
      <main id="main-content" className="w-full flex-1 innerContent text-left select-none">
        <div className="container">
          {/* Breadcrumb */}
          <div className="breadCrumbArea cf">
            <div className="breadcrumb">
              <Link href="/nehru-portal">Home</Link>
              {page.parents ? (
                page.parents.map((p) => {
                  const href = p.href.startsWith("/nehru-portal") ? p.href : `/nehru-portal${p.href}`;
                  return <Link key={p.href} href={href}>{p.label}</Link>;
                })
              ) : page.parent ? (
                <Link href={page.parent.href.startsWith("/nehru-portal") ? page.parent.href : `/nehru-portal${page.parent.href}`}>
                  {page.parent.label}
                </Link>
              ) : null}
              {page.title}
            </div>
          </div>
          
          <div className="spaceArea">
            {/* Title banner */}
            <h2 style={{ color: "#a52216" }}>{page.title}</h2>

            <div className="text-slate-600 text-xs sm:text-xs md:text-sm leading-relaxed text-justify max-w-none">
              {page.content}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
