"use client";

import React, { useState, useMemo } from 'react';
import Image from "next/image";
import { Spectral } from "next/font/google";
import CcsHeroSlider from "@/components/ccs/CcsHeroSlider";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

interface OccasionalPaper {
  id: string;
  title: string;
  year: number;
  size: string;
  type: string;
  url: string;
}

const PAPERS_DATA: OccasionalPaper[] = [
  { id: 'op1', title: 'Prime Ministers Lecture Series', year: 2024, size: '2.40 MB', type: 'PDF', url: '#' },
  { id: 'op2', title: 'History and Society - New Series', year: 2023, size: '3.10 MB', type: 'PDF', url: '#' },
  { id: 'op3', title: 'Perspectives in Indian Development- New Series', year: 2023, size: '2.80 MB', type: 'PDF', url: '#' },
  { id: 'op4', title: 'International Relations- New Series', year: 2022, size: '3.50 MB', type: 'PDF', url: '#' },
  { id: 'op5', title: 'समाज और इतिहास', year: 2021, size: '1.90 MB', type: 'PDF', url: '#' }
];

interface LectureItem {
  srNo: number;
  series: string;
  title: string;
  author: string;
  url: string;
}

const LECTURES_DATA: Record<string, LectureItem[]> = {
  op1: [
    { srNo: 2, series: 'प्रधानमंत्री व्याख्यान श्रृंखला', title: 'प्रधानमंत्री चंद्रशेखर का जीवन और विरासत', author: 'हरिवंश नारायण सिंह', url: "https://positive-mantra.com/PDF/Occasional%20Papers/Prime%20Minister%27s%20Lecture%20Series/Chandra%20Shekhar-%20Harivansh%20Narayan%20Singh%20%281%29.pdf" },
    { srNo: 1, series: 'Prime Ministers Lecture Series', title: 'Lal Bahadur Shastri: The Man Who Died Too Soon', author: 'T N Ninan', url: "https://positive-mantra.com/PDF/Occasional%20Papers/Prime%20Minister%27s%20Lecture%20Series/Shastri%20Lecture-final.pdf" }
  ],
  op2: [
    { srNo: 122, series: 'History and Society - New Series', title: 'Curious Case of Khanda Vivah : Sustaining ‘Aan’ through Marital Alliance', author: 'Dr. Geetanjali Tyagi', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/Geetanjali%20Tyagi%202026%20final%20may%20docx%20%281%29.pdf' },
    { srNo: 121, series: 'History and Society - New Series', title: 'Schooling, Celibacy and Self-Culture: The Child Widows of Punjab, 1900-1915', author: 'Smita Gandotra', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/Smita%20Gandotra_Occasional%20Paper_27%20March%202026_accpt%20for%20pub.pdf' },
    { srNo: 120, series: 'History and Society - New Series', title: 'Aromatic Passageways: The Interwoven History of Moluccan Cloves and Coromandel Textiles in the Early', author: 'Smarika Nawani', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/Smarika%20Nawani_27%20March_FINAL_Author%20checked_PMML%20accpt.pdf' },
    { srNo: 119, series: 'History and Society - New Series', title: 'Nechariya Poetics: Oudh Punch (1877-1938) and the Natural Poetry Movement', author: 'Maryam Sikander', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/Maryam%20Sikandar_Oudh%20Punch%20final%20PMML_27%20March%202026.pdf' },
    { srNo: 118, series: 'History and Society - New Series', title: 'In the Shadow of Birth Control Reforming Marriage, Maternity and Sexuality in Late Colonial India', author: 'Dipti Tripathi', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/Dipti%20Tripathi_Birth%20Control_author%20final_30%20Jan%202026.pdf' },
    { srNo: 117, series: 'History and Society - New Series', title: 'Momin discourse as Subaltern Muslim Nationalism in Late Colonial India: A Study of A.Q. Ansari\'s Speeches', author: 'Arshad Amanullah', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/Arshad%20Amanullah.pdf' },
    { srNo: 116, series: 'History and Society - New Series', title: 'Dara Shukoh\'s Persian translation of Yogavasistha in comparison with others of the Mughal era', author: 'Mohsin Ali', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/Mohsin%20Ali_Dara%20Shukoh_Final.pdf' },
    { srNo: 115, series: 'History and Society - New Series', title: 'Comparative Linguistics and the Origins of the Dravidian Concept', author: 'Iliyas Husain', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/Iliyas%20Husain%20PMML%20%281%29.pdf' },
    { srNo: 114, series: 'History and Society - New Series', title: 'Cookbook Chronicles: Documenting Cooking in Hindu Households', author: 'Dr. Saumya Gupta', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/Saumya%20Gupta_Cookbook%20Chronicles_final%20March%2025.pdf' },
    { srNo: 113, series: 'History and Society - New Series', title: 'Incorporating of Sanskrit Text in the Persianate World: From Al-Beruni to Dara Shukoh', author: 'Mohsin Ali', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/Mohsin%20Ali_FINAL%202024%20march%202025.pdf' },
    { srNo: 112, series: 'History and Society - New Series', title: 'Unintended consequences of early British attempts to administer "Gentoo" laws', author: 'Dr. Meenakshi Jain', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/pdf%20occasional%20paper.pdf' },
    { srNo: 111, series: 'History and Society - New Series', title: 'The Rites of Identity: Understanding the Customary Practices among the Rongmei Christians', author: 'Kamei Samson', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/Kamei%20Samson_The%20Rites%20of%20Identity_final%20approved_24%20Apr%202023%20%281%29.pdf' },
    { srNo: 110, series: 'History and Society - New Series', title: 'Anvikshiki in Kautilya\'s Arthashastra: The Science of Inquiry', author: 'Medha Bisht', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/Medha%20Bisht_accept_word_13%20Janfinal%20paper%202023.pdf' },
    { srNo: 109, series: 'History and Society - New Series', title: 'Contextualising Tagore: Ideals of Good Governance as reflected in the Narrative Poems of \'Katha\'', author: 'Chhanda Chatterjee', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/Chhanda%20Chatterjee_Contextualising%20Tagore_final%20for%20publishing%2015%20july%202022.pdf' },
    { srNo: 108, series: 'History and Society - New Series', title: 'Bengal\'s Romance with Japan: A Historical Narrative', author: 'Dr. Rajaram Panda', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/Final%20occ%20paper-%20Rajaram%20Panda-23.12.2022.pdf' },
    { srNo: 107, series: 'History and Society - New Series', title: 'Negotiating Malaviya\'s Place in Modern Indian History', author: 'Bhuwan Kumar Jha', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/107.pdf' },
    { srNo: 106, series: 'History and Society - New Series', title: 'Land, Caste and Political Power Reflections on the Caste Struggle in Bihar', author: 'Rajesh Prasad', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/106.pdf' },
    { srNo: 105, series: 'History and Society - New Series', title: 'Marital conflict, uncertainty and ordinary ethics', author: 'Geetika Bapna', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/105.pdf' },
    { srNo: 104, series: 'History and Society - New Series', title: 'In Search of Indigenous Medicine: Medical Pluralism and the Ayurvedic Movement in Colonial India', author: 'Saurav Kumar Rai', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/104.pdf' },
    { srNo: 103, series: 'History and Society - New Series', title: 'Negotiating Intersectionality in Anglophone and Francophone Historiography', author: 'Shubhra Ray', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/103.pdf' },
    { srNo: 102, series: 'History and Society - New Series', title: 'Convict Colonization\' of Andamans: The Imperial Context', author: 'Suparna Sengupta', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/102.pdf' },
    { srNo: 101, series: 'History and Society - New Series', title: '‘Coolie’ to ‘Mazdoor’: Tea Garden Workers and the New Nation State, 1941-1960 (450 KB)', author: 'Raj Kumar Thakur', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/101.pdf' },
    { srNo: 100, series: 'History and Society - New Series', title: 'Marriage and Crises: A Social Biography of Nibhana (776 KB)', author: 'Geetika Bapna', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/100.pdf' },
    { srNo: 99, series: 'History and Society - New Series', title: 'Sovereigns, Subjects and \'Law\' in Northeast India: Select Reading from the Colonial Archive (704 KB)', author: 'Nandini Bhattacharyya Panda', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/99.pdf' },
    { srNo: 98, series: 'History and Society - New Series', title: 'Agrarian Issues, Peasant Movements, and the Congress Politics in Bihar, 1929-1950 (663 KB)', author: 'Jitendra Kumar', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/98.pdf' },
    { srNo: 97, series: 'History and Society - New Series', title: 'Women and Education: A Case Study of the Sikh Kanya Mahavidyalaya (475 KB)', author: 'Tripti Bassi', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/97.pdf' },
    { srNo: 96, series: 'History and Society - New Series', title: 'Krimila: A Forgotten Nagar of Early Medieval Eastern India (68.3 MB)', author: 'Anil Kumar', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/96_compressed.pdf' },
    { srNo: 95, series: 'History and Society - New Series', title: 'Contextualising the Kuki Uprising (1917-1919) (3034 KB)', author: 'Sajal Nag', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/95.pdf' },
    { srNo: 94, series: 'History and Society - New Series', title: 'Overlapping Worlds: Coasts, Hinterlands and Forelands in India, 16th to 18th Centuries (1,345 KB)', author: 'Radhika Seshan', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/94.pdf' },
    { srNo: 93, series: 'History and Society - New Series', title: 'Forging the Nation: The Congress Demand for Representative Bodies and Elite Muslim Anxieties (723 KB)', author: 'Saumya dey', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/93.pdf' },
    { srNo: 92, series: 'History and Society - New Series', title: 'Kaniai Khale Asam Desh (Opium has ruined Assam): Challenging the myth of the endemic opium affliction', author: 'Kawal Deep Kour', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/92.pdf' },
    { srNo: 91, series: 'History and Society - New Series', title: 'Ghadar Movement after a Century (251 KB)', author: 'Sunny Kumar', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/91.pdf' },
    { srNo: 90, series: 'History and Society - New Series', title: 'The Long, Broken Road Ahead to Reconciliation in the Northeast (872 KB)', author: 'Pradip Phanjoubam', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/90.pdf' },
    { srNo: 89, series: 'History and Society - New Series', title: 'Colonial and post-colonial discourse on Cellular Jail, Andaman Islands, 1890-1979 (762 KB)', author: 'P. K. Srivastava', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/89.pdf' },
    { srNo: 88, series: 'History and Society - New Series', title: 'Text and Context: Understanding the Ashokan Inscriptions and the Archaeological Landscape of Bairat', author: 'Meenakshi Vashisth', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/88.pdf' },
    { srNo: 87, series: 'History and Society - New Series', title: 'Colonial Policies and Centres of Indigenous Learning in Early Modern India (781 KB)', author: 'Amit K. Suman', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/87.pdf' },
    { srNo: 86, series: 'History and Society - New Series', title: 'Debating Tribe and Nation: Hutton, Thakkar, Ambedkar, and Elwin (1920s-1940s) (1,022 KB)', author: 'Saagar Tewari', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/86.pdf' },
    { srNo: 85, series: 'History and Society - New Series', title: 'State and Indigenous Intermediaries: Aspects of administrative arrangement in British India\'s Naga Hills', author: 'Sodolakpou Panmei', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/85.pdf' },
    { srNo: 84, series: 'History and Society - New Series', title: 'Drainage, River Erosion, and Chaurs An environmental history of land in Colonial Eastern India (646 KB)', author: 'Rohan D\'Souza', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/84.pdf' },
    { srNo: 83, series: 'History and Society - New Series', title: 'Women, Gender, Emotions: Rethinking Meerut in 1857 (276 KB)', author: 'William R. Pinch', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/83.pdf' },
    { srNo: 82, series: 'History and Society - New Series', title: 'Rumour, Rhetoric, Rebellion: Negotiating the archive and the witness in Assam (178 KB)', author: 'Rakhee Kalita Moral', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/82.pdf' },
    { srNo: 81, series: 'History and Society - New Series', title: 'The Nation and its Northeast (125 KB)', author: 'Mrinal Miri', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/81.pdf' },
    { srNo: 80, series: 'History and Society - New Series', title: 'Jawaharlal Nehru\'s Interim Government, 1946-47: An alternative historical assessment (152 KB)', author: 'Rakesh Ankit', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/80.pdf' },
    { srNo: 79, series: 'History and Society - New Series', title: 'Sadhus, Sampradaya, and Hindu Nationalism: The Dasnamis and the Shri Bharat Dharma Mahamandala in the late nineteenth/early twentieth centuries', author: 'Malavika Kasturi', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/79.pdf' },
    { srNo: 78, series: 'History and Society - New Series', title: 'Assam, Nehru, and the Creation of India’s Eastern Frontier, 1946–1950s (157 KB)', author: 'Arupjyoti Saikia', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/78.pdf' },
    { srNo: 77, series: 'History and Society - New Series', title: 'Distant Countries, Closest Allies: Josip Broz Tito and Jawaharlal Nehru and the rise of global nonalignment', author: 'Jovan Čavoški', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/77.pdf' },
    { srNo: 76, series: 'History and Society - New Series', title: 'Against State, Against History: Rewriting the pasts of the tribes of North-east India (227 KB)', author: 'Jangkhoman Guite', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/76.pdf' },
    { srNo: 75, series: 'History and Society - New Series', title: 'Nehru and the North East (242 KB)', author: 'Sajal Nag', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/75.pdf' },
    { srNo: 74, series: 'History and Society - New Series', title: 'A Missed Opportunity? The Nehru-Zhou Enlai Summit of 1960 (570 KB)', author: 'Srinath Raghavan', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/74.pdf' },
    { srNo: 73, series: 'History and Society - New Series', title: 'Telling it on the Mountain India and China and the Politics of History: 1949–1962 (194 KB)', author: 'Nirupama Rao', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/73.pdf' },
    { srNo: 72, series: 'History and Society - New Series', title: 'State Control, Political Manipulations, and the Creation of Identities: The North-East of India (281 KB)', author: 'Subhadra Mitra Channa', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/72.pdf' },
    { srNo: 71, series: 'History and Society - New Series', title: 'Cuttack City: Blending between tradition and modernity (217 KB)', author: 'Radhakanta Barik', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/71.pdf' },
    { srNo: 70, series: 'History and Society - New Series', title: 'Non-violent Action and Socialist Radicalism: Narendra Deva in India\'s freedom movement (383KB)', author: 'Anil Nauriya', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/70.pdf' },
    { srNo: 69, series: 'History and Society - New Series', title: 'A Nehruvian Foreign Policy Today (158KB)', author: 'Shivshankar Menon', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/69.pdf' },
    { srNo: 68, series: 'History and Society - New Series', title: 'Situating Popular Veneration (244KB)', author: 'Yogesh Snehi', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/68.pdf' },
    { srNo: 67, series: 'History and Society - New Series', title: 'The Politics of Industry in Nehru\'s India (175KB)', author: 'Nasir Tyabji', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/67.pdf' },
    { srNo: 66, series: 'History and Society - New Series', title: 'Making Kumaon Modern: Family and Custom c. 1815–1930 (352KB)', author: 'Vasudha Pande', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/66.pdf' },
    { srNo: 65, series: 'History and Society - New Series', title: 'A Matha Court in Karnataka and the Demand for Legality (2.66Mb)', author: 'Janaki Nair', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/65.pdf' },
    { srNo: 64, series: 'History and Society - New Series', title: 'Making Kumaon Modern: Beliefs and practices circa 1815–1930 (393 KB)', author: 'Vasudha Pande', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/64.pdf' },
    { srNo: 63, series: 'History and Society - New Series', title: 'Salwa Judum Another View (183 KB)', author: 'Himanshu Roy', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/63.pdf' },
    { srNo: 62, series: 'History and Society - New Series', title: 'Rival Conceptualizations of a Single Space: Jerusalem’s Sacred Esplanade (4.80 MB)', author: 'Benjamin Z. Kedar', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/62.pdf' },
    { srNo: 61, series: 'History and Society - New Series', title: 'Nonviolent Resistance in India 1916–1947 (210.38 KB)', author: 'David Hardiman', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/61.pdf' },
    { srNo: 60, series: 'History and Society - New Series', title: 'In search of the Blue Bird: Auditing Peace Negotiations in Nagaland (299.71 KB)', author: 'Sajal Nag', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/60.pdf' },
    { srNo: 59, series: 'History and Society - New Series', title: 'Dr. Palpu’s Petition Writings and Kerala’s Pasts (368.43 KB)', author: 'Udaya Kumar', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/59.pdf' },
    { srNo: 58, series: 'History and Society - New Series', title: 'Understanding Sheikh Mohammad Abdullah (142.80KB)', author: 'Nyla Ali Khan', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/58.pdf' },
    { srNo: 57, series: 'History and Society - New Series', title: 'English Anti-Imperialism and the Varied Lights of Willie Pearson (247.87KB)', author: 'Anil Nauriya', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/57.pdf' },
    { srNo: 56, series: 'History and Society - New Series', title: 'Music and Resistance: The Tradition of the Indian People’s Theatre Association in the 1940s and 1950s', author: 'Sumangala Damodaran', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/56.pdf' },
    { srNo: 55, series: 'History and Society - New Series', title: 'Theatre of the Past: Re-presenting the past in different genres (285.76KB)', author: 'Anshu Malhotra', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/55.pdf' },
    { srNo: 54, series: 'History and Society - New Series', title: 'A Century of Consolidation and Resistance: Caste and Education in Maharashtra 1818-1918 (240.13KB)', author: 'Parimala V. Rao', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/54.pdf' },
    { srNo: 53, series: 'History and Society - New Series', title: 'Adivasi Movements and the Politics of the Supernatural in Colonial Chotanagpur (abstract) (76.10KB)', author: 'Shashank Shekhar Sinha', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/53.pdf' },
    { srNo: 52, series: 'History and Society - New Series', title: 'Vivekananda: The ethics of responsibility and the imagining of Modern India (171.39KB)', author: 'Gangeya Mukherji', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/52.pdf' },
    { srNo: 51, series: 'History and Society - New Series', title: 'Jawaharlal Nehru and the Politics of National Language (c. 1937–50) (182.19KB)', author: 'Iliyas Husain', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/51.pdf' },
    { srNo: 50, series: 'History and Society - New Series', title: 'Between Jinnah and Toba Tek Singh: Rethinking the struggle for Pakistan in late colonial India (146 KB)', author: 'Venkat Dhulipala', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/50.pdf' },
    { srNo: 49, series: 'History and Society - New Series', title: 'Problematic of Indian Untouchability and the Caste System (276.57KB)', author: 'K.V. Cybil', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/49.pdf' },
    { srNo: 48, series: 'History and Society - New Series', title: 'Indian Nationalists and the End of Indentured Emigration (233.97KB)', author: 'Ashutosh Kumar', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/48.pdf' },
    { srNo: 47, series: 'History and Society - New Series', title: 'Politics of Caste and Identity in Contemporary South India (126.08KB)', author: 'K. Satyanarayana', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/47.pdf' },
    { srNo: 46, series: 'History and Society - New Series', title: 'Post-Partition Rehabilitation of Refugees in India (155.38KB)', author: 'Pallavi Chakravarty', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/46.pdf' },
    { srNo: 45, series: 'History and Society - New Series', title: 'Neelambikai Ammaiyar: Profile of a marginal player (359.08KB)', author: 'Vijaya Ramaswamy', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/45.pdf' },
    { srNo: 44, series: 'History and Society - New Series', title: 'The Myth of the Hare and Hounds: Making sense of a recurring city-foundation story (561.14KB)', author: 'Suchitra Balasubrahmanyan', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/44.pdf' },
    { srNo: 43, series: 'History and Society - New Series', title: 'Imagining Hindi: The politics of language before and after partition (982.84KB)', author: 'Rohit Wanchoo', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/43.pdf' },
    { srNo: 42, series: 'History and Society - New Series', title: 'Building Impressions: Gandhi and Mira Behn’s hut: 1935–1936 (4.61MB)', author: 'Venugopal Maddipati', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/42.pdf' },
    { srNo: 41, series: 'History and Society - New Series', title: 'Early Settlement of Mathura: An archeological perspective (14.61MB)', author: 'Vinay Kumar Gupta', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/41.pdf' },
    { srNo: 40, series: 'History and Society - New Series', title: 'Mooring the Mughal Tazkiras: Explorations in the politics of representation (337.84kb)', author: 'Shivangini Tandon', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/40.pdf' },
    { srNo: 39, series: 'History and Society - New Series', title: 'Raids, customary laws and slavery: Re-interpreting Pre-colonial Naga warfare (974.24kb)', author: 'Rammathot Kongriewo', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/39.pdf' },
    { srNo: 38, series: 'History and Society - New Series', title: 'Writing the History of a Colonial Institution: the Case of the Government Cattle Farm, Hissar (239.3 KB)', author: 'Brian P. Caton', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/38.pdf' },
    { srNo: 37, series: 'History and Society - New Series', title: 'Stratification in Kumaun circa 1815–1930 (886.35KB)', author: 'Vasudha Pande', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/37.pdf' },
    { srNo: 36, series: 'History and Society - New Series', title: 'Irrigation, State and Society in Pre- colonial India (488.48KB)', author: 'Tripta Wahi', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/36.pdf' },
    { srNo: 35, series: 'History and Society - New Series', title: 'Sir Sayyid, Maulana Azad and the uses of Urdu (286.16KB)', author: 'David Lelyveld', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/35.pdf' },
    { srNo: 34, series: 'History and Society - New Series', title: 'Heroes and Histories: The making of rival geographies of Tripura (645.83KB)', author: 'R.K. Debbarma', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/34.pdf' },
    { srNo: 33, series: 'History and Society - New Series', title: 'The Anglo-Gorkha Wars: Campaigns from Kali to Sutlej (3.34MB)', author: 'Ritesh Shah', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/33.pdf' },
    { srNo: 32, series: 'History and Society - New Series', title: 'Gender, ‘Varna’ and Vidyapati (279.79KB)', author: 'Pankaj Jha', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/32.pdf' },
    { srNo: 31, series: 'History and Society - New Series', title: 'Living and Partly Living: The politics of freedom and the women of United Liberation Front of Assam', author: 'Rakhee Kalita Moral', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/31.pdf' },
    { srNo: 30, series: 'History and Society - New Series', title: 'Diverse Social Groups under the Asaf Jahis (101.77KB)', author: 'Salma A. Farooqui', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/30.pdf' },
    { srNo: 29, series: 'History and Society - New Series', title: 'Revisiting Family and Inheritance: Old age endowments among peasant households in early twentieth century', author: 'Rashmi Pant', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/29.pdf' },
    { srNo: 28, series: 'History and Society - New Series', title: 'Interrogating the Historical Discourse on Caste and Race in India (366.07KB)', author: 'Gita Dharampal-Frick', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/28.pdf' },
    { srNo: 27, series: 'History and Society - New Series', title: 'The Human Face of the Land: Why the past matters for India’s environmental future (3.04MB)', author: 'Kathleen D. Morrison', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/27.pdf' },
    { srNo: 26, series: 'History and Society - New Series', title: 'Swami Vivekananda and the shaping of Indian Modernity (240.50KB)', author: 'Makarand R. Paranjape', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/26.pdf' },
    { srNo: 25, series: 'History and Society - New Series', title: 'Dadabhai Naoroji and the Evolution of the Demand for Swaraj (482.93KB)', author: 'Dinyar Patel', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/25.pdf' },
    { srNo: 24, series: 'History and Society - New Series', title: 'Geographies of Memory: Environmental history and spatial power (387.25KB)', author: 'Heather Goodall', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/24.pdf' },
    { srNo: 23, series: 'History and Society - New Series', title: 'The Northern Bay of Bengal, 800–1500 CE: A history apart? (8.36MB)', author: 'Rila Mukherjee', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/23.pdf' },
    { srNo: 22, series: 'History and Society - New Series', title: 'An Unmanageable Encounter: The meeting of religions and cultures in Chicago 1893 (132.84KB)', author: 'Richard Hartz', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/22.pdf' },
    { srNo: 21, series: 'History and Society - New Series', title: 'Peasants, Pastoralists and Rulers: Aspects of ecology and polity in Seventeenth and Eighteenth century', author: 'Mayank Kumar', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/21.pdf' },
    { srNo: 20, series: 'History and Society - New Series', title: 'Rule against Nature: Founding an empire on India’s north-eastern frontiers (154.01KB)', author: 'Gunnel Cederlof', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/20.pdf' },
    { srNo: 18, series: 'History and Society - New Series', title: 'Emptied of All Love: Gandhiji on 30 January 1948 (249.56KB)', author: 'Tridip Suhrud', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/18.pdf' },
    { srNo: 17, series: 'History and Society - New Series', title: 'Nature, Social Stratification and Marginalization in Rajasthan, 1650–1850 CE (349.52KB)', author: 'Mayank Kumar', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/17.pdf' },
    { srNo: 16, series: 'History and Society - New Series', title: 'The Interesting Ideas of Eric Hobsbawm (1.47MB)', author: 'Madhavan Palat', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/16.pdf' },
    { srNo: 15, series: 'History and Society - New Series', title: 'Swami Vivekananda and Rajarshi Rammohan Ray: Two views on sacred authority, two visions of modern India', author: 'Bruce Robertson', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/15.pdf' },
    { srNo: 14, series: 'History and Society - New Series', title: 'Roots, Branches and Seeds: The teachings of Swami Vivekananda and Sri Aurobindo examined in the light', author: 'Peter Heehs', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/14.pdf' },
    { srNo: 13, series: 'History and Society - New Series', title: 'Subjective Modernities (398.10KB)', author: 'Harbans Mukhia', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/13.pdf' },
    { srNo: 12, series: 'History and Society - New Series', title: 'Political Representation: Ambedkar and the Electoral Method, 2013 (2.84MB)', author: 'Raja Sekhar Vundru', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/12.pdf' },
    { srNo: 11, series: 'History and Society - New Series', title: 'Ramana Maharshi and the Battle with Cancer: Notes on life, detachment and devotees\' accounts (694.21KB)', author: 'Susan Visvanathan', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/11.pdf' },
    { srNo: 10, series: 'History and Society - New Series', title: 'Marathas, Rajputs, and Afghans in mid-Eighteenth-century India: Bhausahebanchi Bakhar and the articulation', author: 'Anirudh Deshpande', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/10.pdf' },
    { srNo: 9, series: 'History and Society - New Series', title: 'The Anticolonial Ethics of Lala Har Dayal’s Hints for Self Culture (424.26KB)', author: 'J. Daniel Elam', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/9.pdf' },
    { srNo: 8, series: 'History and Society - New Series', title: 'The Abyss of Modernity: Questioning political violence (977.58KB)', author: 'Dilip Simeon', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/8.pdf' },
    { srNo: 7, series: 'History and Society - New Series', title: 'Industrialization, Dirigisme and Capitalists: Indian Big Business from independence to liberalization', author: 'Surajit Mazumdar', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/7.pdf' },
    { srNo: 6, series: 'History and Society - New Series', title: 'Exploring Spaces for Women in Early Medieval Kashmir (340.43KB)', author: 'Devika Rangachari', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/6.pdf' },
    { srNo: 5, series: 'History and Society - New Series', title: 'Patrick Geddes and the Metropolis (333.12KB)', author: 'Partho Datta', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/5.pdf' },
    { srNo: 4, series: 'History and Society - New Series', title: 'Does India Have History? Does History Have India? (462.71KB)', author: 'Thomas R. Trautmann', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/4.pdf' },
    { srNo: 3, series: 'History and Society - New Series', title: 'Environmental Crisis and Social Dismemberment in Northwest India During the Pre-Colonial Period (731 KB)', author: 'G.S.L. Devra', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/3.pdf' },
    { srNo: 2, series: 'History and Society - New Series', title: 'Colonialism and its Nomads in South India (301.35KB)', author: 'Bhangya Bhukya', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/2.pdf' },
    { srNo: 1, series: 'History and Society - New Series', title: 'Representing Dalit Bodies in Colonial North India (548.82KB)', author: 'Charu Gupta', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/History%20%26%20Society%20-New%20Series/1.pdf' }
  ],
  op3: [
    { srNo: 73, series: 'Perspectives in Indian Development- New Series', title: 'Revisiting Policies for a Human-centric Economy: The 21st Century Imperative', author: 'Rajeev Malhotra', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/Rajeev%20Malhotra--Revisiting%20Policies%20for%20a%20Human-centric%20Economy.pdf' },
    { srNo: 72, series: 'Perspectives in Indian Development- New Series', title: 'The Burma Exodus of 1942: Life Narratives, Humanitarian Crisis, and Colonial Failure', author: 'Dr Leisangthem Gitarani Devi', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/Guitarani%20Devi_Burma%20Exodus%20Final.pdf' },
    { srNo: 71, series: 'Perspectives in Indian Development- New Series', title: 'Access to Excellence: The Vision of the National Education Policy 2020', author: 'J. S. Rajput', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/National%20Education%20Policy%202020%20J%20S%20Rajput%2024%20October%202025%20final.pdf' },
    { srNo: 70, series: 'Perspectives in Indian Development- New Series', title: 'Settler Memory and Islanding: An Archipelagic Perspective', author: 'Dr. Raka Banerjee', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/Raka%20Banerjee-Final.pdf' },
    { srNo: 69, series: 'Perspectives in Indian Development- New Series', title: 'Negotiating Integration: Rehabilitating the Rashtriya Vikas Dal in Andaman Islands', author: 'Raka Banerjee', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2069.pdf' },
    { srNo: 68, series: 'Perspectives in Indian Development- New Series', title: 'Identity in Knowledge Society Some Critical Reflections', author: 'Debal K. Singharoy', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/Debal%20SinghaRoy%20-%20Occasional%20Paper%20-%2023.12.22.pdf' },
    { srNo: 67, series: 'Perspectives in Indian Development- New Series', title: 'Deathscapes, Decaying Bodies and Queer Citizenship as seen through the Lens of the Contemporary India', author: 'Kuhu Sharma Chanana', url: '#' },
    { srNo: 66, series: 'Perspectives in Indian Development- New Series', title: 'Principles of Economics and Gospel of Gandhian Economics Where and Where not the Twain Meet (690KB)', author: 'Priya Bhalla', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2066.pdf' },
    { srNo: 65, series: 'Perspectives in Indian Development- New Series', title: 'Representing the (Imagined) Majorities - Local Governance through the Autonomous District Councils', author: 'Kavita N. Soreide', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2065.pdf' },
    { srNo: 64, series: 'Perspectives in Indian Development- New Series', title: 'Travelling Imagination and Gay Spatial Politics in Contemporary Indian (941KB)', author: 'Kuhu Sharma Chanana', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2064.pdf' },
    { srNo: 63, series: 'Perspectives in Indian Development- New Series', title: 'Politics of Water as Natural Resource: Prospects of commons perspective (3.20 Mb)', author: 'Dr Ruchi Shree', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2063.pdf' },
    { srNo: 62, series: 'Perspectives in Indian Development- New Series', title: 'Macroeconomic Policy for an India in Transition (1.04 Mb)', author: 'Ashima Goyal', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2062.pdf' },
    { srNo: 61, series: 'Perspectives in Indian Development- New Series', title: 'Oil and the Everyday in Colonial and Independent India (1880–1975) (348 KB)', author: 'Sarandha Jain', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2061.pdf' },
    { srNo: 60, series: 'Perspectives in Indian Development- New Series', title: 'Lost Worlds: Natural world and indigenous hunting cultures in colonial India (circa 1770s–1860s) (150 KB)', author: 'Vijaya Ramadas Mandala', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2060.pdf' },
    { srNo: 59, series: 'Perspectives in Indian Development- New Series', title: 'In search of the Blue Bird: Auditing Peace Negotiations in Nagaland (299.71 KB)', author: 'Sajal Nag', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2059.pdf' },
    { srNo: 58, series: 'Perspectives in Indian Development- New Series', title: 'A Bird in the Bush: Dillon Ripley, Sálim Ali and the transformation of ornithology in Sri Lanka (166 KB)', author: 'Arjun Guneratne', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2058.pdf' },
    { srNo: 57, series: 'Perspectives in Indian Development- New Series', title: 'Nehru and the Economy: A 21st century view (307 KB)', author: 'Pulapre Balakrishnan', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2057.pdf' },
    { srNo: 56, series: 'Perspectives in Indian Development- New Series', title: 'Tracing Nehru in Contemporary Indian Politics (82.60 KB)', author: 'Ajay Gudavarthy', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2056.pdf' },
    { srNo: 55, series: 'Perspectives in Indian Development- New Series', title: 'The Rural Economy: A micro perspective from Western Uttar Pradesh circa, 1930–2014 (2.42 MB)', author: 'Devesh Vijay', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2055.pdf' },
    { srNo: 54, series: 'Perspectives in Indian Development- New Series', title: 'The Jumping Devils: A tale of circus bodies (144 KB)', author: 'Nisha P R', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2054.pdf' },
    { srNo: 53, series: 'Perspectives in Indian Development- New Series', title: 'Beyond the Romance of Resistance in Post-Development Alternatives: Nature and culture in Afro-Colombia', author: 'Kiran Asher', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2053.pdf' },
    { srNo: 52, series: 'Perspectives in Indian Development- New Series', title: 'Nehru and the Computer Revolution: Foundations and transitions (159 KB)', author: 'Dinesh C. Sharma', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2052.pdf' },
    { srNo: 51, series: 'Perspectives in Indian Development- New Series', title: 'From Machinofacture to Manufacture: Changing contours of the science and technology discourse in the late colonial period', author: 'Radhika Krishnan', url: '#' },
    { srNo: 50, series: 'Perspectives in Indian Development- New Series', title: 'Beyond the Frames of Environmental History: Reading an adivasi movement in colonial India (198 KB)', author: 'Sangeeta Dasgupta', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2050.pdf' },
    { srNo: 49, series: 'Perspectives in Indian Development- New Series', title: 'The Colonial Hunt: Metropole, Colony, and Wildlife in India 1850-1950', author: 'Swati Shresth', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2049.pdf' },
    { srNo: 48, series: 'Perspectives in Indian Development- New Series', title: 'Press Censorship in India in the 1950s (185 KB)', author: 'Devika Sethi', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2048.pdf' },
    { srNo: 47, series: 'Perspectives in Indian Development- New Series', title: 'Beyond Idealism: Geopolitics of the Nehru Raj (124 KB)', author: 'C. Raja Mohan', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2047.pdf' },
    { srNo: 46, series: 'Perspectives in Indian Development- New Series', title: 'Questions in and of Language (200 KB)', author: 'Rita Kothari', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2046.pdf' },
    { srNo: 45, series: 'Perspectives in Indian Development- New Series', title: 'Land Acquisition Act in India: Impact on environment and livelihood, 1824–2013 (249.71 KB)', author: 'Velayutham Saravanan', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2045.pdf' },
    { srNo: 44, series: 'Perspectives in Indian Development- New Series', title: 'A Scholar in His Time: Contemporary views of Kosambi the mathematician (210.32 KB)', author: 'Ramakrishna Ramaswamy', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2044.pdf' },
    { srNo: 43, series: 'Perspectives in Indian Development- New Series', title: 'Delivery Mechanisms and Outcomes: The case of SJSRY, a poverty alleviation policy (200.63 KB)', author: 'Anuradha Kalhan', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2043.pdf' },
    { srNo: 42, series: 'Perspectives in Indian Development- New Series', title: 'Cracking Gender Regimes in Asia: Economic Empowerment of Women (641 KB)', author: 'Govind Kelkar', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2042.pdf' },
    { srNo: 41, series: 'Perspectives in Indian Development- New Series', title: 'Plant Transfers, Bio-invasions and Biocultural Diversity: Perspectives from Africa (1.34 MB)', author: 'William Beinart', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2041.pdf' },
    { srNo: 40, series: 'Perspectives in Indian Development- New Series', title: 'Being Dalit, Being Modern: Caste and Culture in Hyderabad State (193.38 KB)', author: 'Bhangya Bhukya', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2040.pdf' },
    { srNo: 39, series: 'Perspectives in Indian Development- New Series', title: 'Run-of-the-River Schemes and the quest for Renewable Energy in Himachal Pradesh (138.75 KB)', author: 'Anurita Saxena', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2039.pdf' },
    { srNo: 38, series: 'Perspectives in Indian Development- New Series', title: 'Unruly Commons: Contestations around Sampangi Lake in Bangalore (1.56 MB)', author: 'Hita Unnikrishnan & Harini Nagendra', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2038.pdf' },
    { srNo: 37, series: 'Perspectives in Indian Development- New Series', title: 'Thinking (with) the Indian Pangolin: A human-animal perspective on India\u2019s colonial and princely history', author: 'Julie E. Hughes', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2037.pdf' },
    { srNo: 36, series: 'Perspectives in Indian Development- New Series', title: 'Debating Higher Education: Areas of silence and new university models (118.68 KB)', author: 'Dhruba J. Saikia & Rowena Robinson', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2036.pdf' },
    { srNo: 35, series: 'Perspectives in Indian Development- New Series', title: 'Rethinking Animal-Human Boundaries: Insights from Primatology (196.62 KB)', author: 'Sindhu Radhakrishna', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2036.pdf' },
    { srNo: 34, series: 'Perspectives in Indian Development- New Series', title: 'The Making of Non-Corporate Capital (396.40 KB)', author: 'Raman Mahadevan & M. Vijayabaskar', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2034.pdf' },
    { srNo: 33, series: 'Perspectives in Indian Development- New Series', title: 'Social Metabolism and Environmental Conflicts in India (891.53 KB)', author: 'Joan Martinez-Alier, Leah Temper & Federico Demaria', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2033.pdf' },
    { srNo: 32, series: 'Perspectives in Indian Development- New Series', title: 'The Forest Rights Act and the Politics of Marginal Society (299.11 KB)', author: 'Kamal Nayan Choubey', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2032.pdf' },
    { srNo: 31, series: 'Perspectives in Indian Development- New Series', title: 'The Realism of Impossibility: Crisis and chances of democracy in an age of globalization (150.05 KB)', author: 'Debora Spini', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2031.pdf' },
    { srNo: 30, series: 'Perspectives in Indian Development- New Series', title: 'Innovation and Upgrading in Global Production Networks (129.30 KB)', author: 'Dev Nathan & Sandip Sarkar', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2030.pdf' },
    { srNo: 29, series: 'Perspectives in Indian Development- New Series', title: "Duplicating the Local: GI and the politics of 'Place' in Kanchipuram (215.63 KB)", author: 'Aarti Kawlra', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2029.pdf' },
    { srNo: 28, series: 'Perspectives in Indian Development- New Series', title: 'The Possibility of Stimulating Inclusive Growth (216.28 KB)', author: 'Anuradha Kalhan', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2028.pdf' },
    { srNo: 27, series: 'Perspectives in Indian Development- New Series', title: 'From The Margins Looking In: The child-State relationship revisited (346.26 KB)', author: 'Vijayalakshmi Balakrishnan', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2027.pdf' },
    { srNo: 26, series: 'Perspectives in Indian Development- New Series', title: 'Medical Technology: Review and a test of perspectives', author: 'Indira Chakravarthi', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2026.pdf' },
    { srNo: 25, series: 'Perspectives in Indian Development- New Series', title: 'South Asia–Gulf Migratory Corridor: Emerging patterns, prospects and challenges (216 KB)', author: 'Ginu Zacharia Oommen', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2025.pdf' },
    { srNo: 24, series: 'Perspectives in Indian Development- New Series', title: 'In the Shadow of Terror: Terrorism and the contemporary Indian novel in English (289.02 KB)', author: 'Meenakshi Bharat', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2024.pdf' },
    { srNo: 23, series: 'Perspectives in Indian Development- New Series', title: "Equity and Quality are Two Sides of the Same Coin in India\u2019s School Education (388.93 KB)", author: 'Vimala Ramachandran', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2023.pdf' },
    { srNo: 22, series: 'Perspectives in Indian Development- New Series', title: 'Ecology, Flood and the Political Economy of Hydro-Power: The river Brahmaputra in the 20th century', author: 'Arupjyoti Saikia', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2022.pdf' },
    { srNo: 21, series: 'Perspectives in Indian Development- New Series', title: "Sriniketan\u2019s Co-operatives: The possibilities and dilemmas of Viswabharati\u2019s globality (683.69 KB)", author: 'Pradip Kumar Datta', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2021.pdf' },
    { srNo: 20, series: 'Perspectives in Indian Development- New Series', title: 'Prayer and Power in the Sangh Parivar (307.63 KB)', author: 'Kalyani Devaki Menon', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2020.pdf' },
    { srNo: 19, series: 'Perspectives in Indian Development- New Series', title: 'Business Archives: A window into the Corporate past (239.43 KB)', author: 'Vrunda Pathare', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2019.pdf' },
    { srNo: 18, series: 'Perspectives in Indian Development- New Series', title: 'Lessons From the Past for Revisitilising Planning Practice in India (331.20 KB)', author: 'Nithya V. Raman', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2018.pdf' },
    { srNo: 17, series: 'Perspectives in Indian Development- New Series', title: 'The Islamist Terrorist in Popular Hindi Cinema: Crisis of perspective in Kurbaan and New York (512 KB)', author: 'Roshni Sengupta', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2017.pdf' },
    { srNo: 16, series: 'Perspectives in Indian Development- New Series', title: 'Life, Literature and Folk Deities in the Mangroves (147.76 KB)', author: 'Sutapa Chatterjee Sarkar', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2016.pdf' },
    { srNo: 15, series: 'Perspectives in Indian Development- New Series', title: "Four Emblematic Figures and the Making of a \u2018New\u2019 India (399.84 KB)", author: 'A. R. Vasavi', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2015.pdf' },
    { srNo: 14, series: 'Perspectives in Indian Development- New Series', title: 'Comedies of Errors: Shakespeare, Indian cinema, and the poetics of mistaken identity (400.16 KB)', author: 'Richard Allen', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2014.pdf' },
    { srNo: 13, series: 'Perspectives in Indian Development- New Series', title: 'Impacts of Biodiversity Conservation on Rural Livelihoods in and around the Sundarban Tiger Reserve', author: 'Priyanka Ghosh', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2013.pdf' },
    { srNo: 12, series: 'Perspectives in Indian Development- New Series', title: 'Science, Democracy and Ecology in India (298.14 KB)', author: 'Madhav Gadgil', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2012.pdf' },
    { srNo: 11, series: 'Perspectives in Indian Development- New Series', title: 'Mapping Literature: Culture and region formation in the Brahmaputra Valley (561.44 KB)', author: 'Manjeet Baruah', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2011.pdf' },
    { srNo: 10, series: 'Perspectives in Indian Development- New Series', title: 'Refugees and Migrants in South Asia: Nature and implications, 2013 (1.79 MB)', author: 'Partha S. Ghosh', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%2010.pdf' },
    { srNo: 9, series: 'Perspectives in Indian Development- New Series', title: 'From movements to Accords and beyond: The critical role of student organisations in the formation and development of the region', author: 'Kaustubh Deka', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%209.pdf' },
    { srNo: 8, series: 'Perspectives in Indian Development- New Series', title: "Nehru: The unlikely hero of India\u2019s Information Technology Revolution (283.43 KB)", author: 'Dinesh C. Sharma', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%208.pdf' },
    { srNo: 7, series: 'Perspectives in Indian Development- New Series', title: 'A View to the South: India and the Indian Ocean (325.79 KB)', author: 'Ashok V. Desai', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%207.pdf' },
    { srNo: 6, series: 'Perspectives in Indian Development- New Series', title: "Fishermen, the \u2018Forest Acts\u2019 and Narratives of Eviction from Jambudwip Island (823.69 KB)", author: 'Devika Rangachari', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%206.pdf' },
    { srNo: 5, series: 'Perspectives in Indian Development- New Series', title: 'Structure and Mobility Inside a Delhi slum: 1988\u20132008 (8.04 MB)', author: 'Devesh Vijay', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%205.pdf' },
    { srNo: 4, series: 'Perspectives in Indian Development- New Series', title: 'Haunting Tiger, Hugging Ancestors: Constructions of adivasi personhood in the Sundarbans (149.82 KB)', author: 'Amites Mukhopadhyay', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%204.pdf' },
    { srNo: 3, series: 'Perspectives in Indian Development- New Series', title: 'Politics of Social Justice: An evaluation of the Bahujan Samaj Party in Uttar Pradesh (697.85 KB)', author: 'Jayabrata Sarkar', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%203.pdf' },
    { srNo: 2, series: 'Perspectives in Indian Development- New Series', title: 'Workers, Unions, and the Left: Responding to the global crisis (297.80 KB)', author: 'Rohini Hensman', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%202.pdf' },
    { srNo: 1, series: 'Perspectives in Indian Development- New Series', title: 'India’s Climate Change Strategy after Durban (162.70 KB)', author: 'Shyam Saran', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/Perspective%20In%20Indian%20Development-New%20Series/P%20I%20D%20-%201.pdf' }
  ],
  op4: [
    { srNo: 8, series: 'International Relations- New Series', title: 'India and China in East Asia Contestations and Competition in the Indo-Pacific Era', author: 'Dr. Amlan Dutta', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/International%20Relations-New%20Series/002.pdf' },
    { srNo: 7, series: 'International Relations- New Series', title: 'Transcontinental Railways and Wars (1890-1914)', author: 'Atul Bhardwaj', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/International%20Relations-New%20Series/Atul%20Bhardwaj_final%20paper%2024%20September%202025.pdf' },
    { srNo: 6, series: 'International Relations- New Series', title: "The \u2018Strategic Pull\u2019 of EU-India Relations: A Critical Assessment (11MB)", author: 'Shreya Pandey', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/International%20Relations-New%20Series/I%20R%20-%207.pdf' },
    { srNo: 5, series: 'International Relations- New Series', title: 'Regional Security and Peacekeeping in Africa: A Case Study of ECOWAS, SADC and AU (3951 KB)', author: 'Tejal Khanna', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/International%20Relations-New%20Series/I%20R%20-%205.pdf' },
    { srNo: 4, series: 'International Relations- New Series', title: 'CPEC: Geo-positional balancing in a fragile state (1,345 KB)', author: 'Sandhya Jain', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/International%20Relations-New%20Series/I%20R%20-%204.pdf' },
    { srNo: 3, series: 'International Relations- New Series', title: 'India and Central Asia (1,619 KB)', author: 'Asoke Kumar Mukerji', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/International%20Relations-New%20Series/I%20R%20-%203.pdf' },
    { srNo: 2, series: 'International Relations- New Series', title: 'India and the Western Liberal Democratic Order (754 KB)', author: 'Hardeep Singh Puri', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/International%20Relations-New%20Series/I%20R%20-%202.pdf' },
    { srNo: 1, series: 'International Relations- New Series', title: 'Geopolitics of the Indian Ocean and Indo-Sri Lanka Relationship (469 KB)', author: 'Asanga Abeyagoonasekera', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/International%20Relations-New%20Series/I%20R%20-%201.pdf' }
  ],
  op5: [
    { srNo: 19, series: 'समाज और इतिहास', title: 'वेदोत्तर साहित्य में चिन्तन का विकास', author: 'डॉ. ज्योतिष जोशी', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/%E0%A4%B8%E0%A4%AE%E0%A4%BE%E0%A4%9C%20%E0%A4%94%E0%A4%B0%20%E0%A4%87%E0%A4%A4%E0%A4%BF%E0%A4%B9%E0%A4%BE%E0%A4%B8/Vedottar%20Sahitya%20Mein%20Chintan%20Ka%20Vikas%20%28Article%29.pdf' },
    { srNo: 18, series: 'समाज और इतिहास', title: 'स्त्री विमर्श का लोकपक्ष : स्त्री-भाषा की \'सविनय अवज्ञा\' (784 KB)', author: 'डॉ. अनामिका', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/%E0%A4%B8%E0%A4%AE%E0%A4%BE%E0%A4%9C%20%E0%A4%94%E0%A4%B0%20%E0%A4%87%E0%A4%A4%E0%A4%BF%E0%A4%B9%E0%A4%BE%E0%A4%B8/S%20I%20-%2018.pdf' },
    { srNo: 16, series: 'समाज और इतिहास', title: 'आधुनिक भारत में जन-स्वास्थ्य: समाधान और चुनौतियां (6.36 MB)', author: 'डॉ. संजय कुमार', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/%E0%A4%B8%E0%A4%AE%E0%A4%BE%E0%A4%9C%20%E0%A4%94%E0%A4%B0%20%E0%A4%87%E0%A4%A4%E0%A4%BF%E0%A4%B9%E0%A4%BE%E0%A4%B8/S%20I%20-%2016.pdf' },
    { srNo: 15, series: 'समाज और इतिहास', title: 'शीर्षक: कुछ अफ़गान क़बीलों की नस्लों की उत्पत्ति का आलोचनात्मक अध्ययन: राजस्थानी श्रोतों के आधार पर', author: 'जी.एस.एल. देवरा', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/%E0%A4%B8%E0%A4%AE%E0%A4%BE%E0%A4%9C%20%E0%A4%94%E0%A4%B0%20%E0%A4%87%E0%A4%A4%E0%A4%BF%E0%A4%B9%E0%A4%BE%E0%A4%B8/S%20I%20-%2015.pdf' },
    { srNo: 14, series: 'समाज और इतिहास', title: 'मौखिक परंपरा में प्रवसन: परिवर्तन और निरंतरता (299 KB)', author: 'धनंजय सिंह', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/%E0%A4%B8%E0%A4%AE%E0%A4%BE%E0%A4%9C%20%E0%A4%94%E0%A4%B0%20%E0%A4%87%E0%A4%A4%E0%A4%BF%E0%A4%B9%E0%A4%BE%E0%A4%B8/S%20I%20-%2014.pdf' },
    { srNo: 13, series: 'समाज और इतिहास', title: 'एक नयी भाषा का उदय: देवनागरी जगत में देखना और दिखाना (सन् 1850 से 1920 तक) (7.99 MB)', author: 'सदन झा', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/%E0%A4%B8%E0%A4%AE%E0%A4%BE%E0%A4%9C%20%E0%A4%94%E0%A4%B0%20%E0%A4%87%E0%A4%A4%E0%A4%BF%E0%A4%B9%E0%A4%BE%E0%A4%B8/S%20I%20-%2013.pdf' },
    { srNo: 12, series: 'समाज और इतिहास', title: 'प्रकृति और अस्मिता: 15वीं से 18वीं शताब्दी राजस्थान के विशेष संदर्भ में एक ऐतिहासिक अध्ययन (424.04KB)', author: 'मयंक कुमार', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/%E0%A4%B8%E0%A4%AE%E0%A4%BE%E0%A4%9C%20%E0%A4%94%E0%A4%B0%20%E0%A4%87%E0%A4%A4%E0%A4%BF%E0%A4%B9%E0%A4%BE%E0%A4%B8/S%20I%20-%2012.pdf' },
    { srNo: 11, series: 'समाज और इतिहास', title: 'दर्शन की शिक्षा और उसकी प्रयोजनशीलता (211.95KB)', author: 'रबिन्द्र रे', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/%E0%A4%B8%E0%A4%AE%E0%A4%BE%E0%A4%9C%20%E0%A4%94%E0%A4%B0%20%E0%A4%87%E0%A4%A4%E0%A4%BF%E0%A4%B9%E0%A4%BE%E0%A4%B8/S%20I%20-%2011.pdf' },
    { srNo: 10, series: 'समाज और इतिहास', title: 'औपनिवेशिक भारत में प्रतिबन्धित एवं विवादित सिनेमा (1913-1935) (159.77 KB)', author: 'नरेन्द्र शुक्ल', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/%E0%A4%B8%E0%A4%AE%E0%A4%BE%E0%A4%9C%20%E0%A4%94%E0%A4%B0%20%E0%A4%87%E0%A4%A4%E0%A4%BF%E0%A4%B9%E0%A4%BE%E0%A4%B8/S%20I%20-%2010.pdf' },
    { srNo: 9, series: 'समाज और इतिहास', title: 'विकास , विस्थापन और विकल्प (172.33 KB)', author: 'अस्मिता काबरा', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/%E0%A4%B8%E0%A4%AE%E0%A4%BE%E0%A4%9C%20%E0%A4%94%E0%A4%B0%20%E0%A4%87%E0%A4%A4%E0%A4%BF%E0%A4%B9%E0%A4%BE%E0%A4%B8/S%20I%20-%209.pdf' },
    { srNo: 8, series: 'समाज और इतिहास', title: 'इतिहास, समाज और पर्यावरण (153.90 KB)', author: 'दुनू राय', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/%E0%A4%B8%E0%A4%AE%E0%A4%BE%E0%A4%9C%20%E0%A4%94%E0%A4%B0%20%E0%A4%87%E0%A4%A4%E0%A4%BF%E0%A4%B9%E0%A4%BE%E0%A4%B8/S%20I%20-%208.pdf' },
    { srNo: 7, series: 'समाज और इतिहास', title: 'गांधी : ऐतिहासिक पुनः व्याख्या की ओर (180.88 KB)', author: 'सुधीर चन्द्र', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/%E0%A4%B8%E0%A4%AE%E0%A4%BE%E0%A4%9C%20%E0%A4%94%E0%A4%B0%20%E0%A4%87%E0%A4%A4%E0%A4%BF%E0%A4%B9%E0%A4%BE%E0%A4%B8/S%20I%20-%207.pdf' },
    { srNo: 6, series: 'समाज और इतिहास', title: 'भारतीय स्वतंत्रता आंदोलन और प्रतिबंधित साहित्य (6.82 MB)', author: 'नरेन्द्र शुक्ल', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/%E0%A4%B8%E0%A4%AE%E0%A4%BE%E0%A4%9C%20%E0%A4%94%E0%A4%B0%20%E0%A4%87%E0%A4%A4%E0%A4%BF%E0%A4%B9%E0%A4%BE%E0%A4%B8/S%20I%20-%206.pdf' },
    { srNo: 5, series: 'समाज और इतिहास', title: 'पश्चिम संगठनों में प्रकार्यात्मक रूपांतरण (रेल श्रमिक संगठनों पर आधारित एक अध्ययन) (107.32 KB)', author: 'प्रदीप शर्मा', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/%E0%A4%B8%E0%A4%AE%E0%A4%BE%E0%A4%9C%20%E0%A4%94%E0%A4%B0%20%E0%A4%87%E0%A4%A4%E0%A4%BF%E0%A4%B9%E0%A4%BE%E0%A4%B8/S%20I%20-%205.pdf' },
    { srNo: 4, series: 'समाज और इतिहास', title: 'लिंग, समाज और इतिहास (110.05 KB)', author: 'शालिनी शाह', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/%E0%A4%B8%E0%A4%AE%E0%A4%BE%E0%A4%9C%20%E0%A4%94%E0%A4%B0%20%E0%A4%87%E0%A4%A4%E0%A4%BF%E0%A4%B9%E0%A4%BE%E0%A4%B8/S%20I%20-%204.pdf' },
    { srNo: 3, series: 'समाज और इतिहास', title: 'जंगल का संघर्ष, \'प्रगतिशील\' कानून और राज्य (327.18 KB)', author: 'कमल नयन चौबे', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/%E0%A4%B8%E0%A4%AE%E0%A4%BE%E0%A4%9C%20%E0%A4%94%E0%A4%B0%20%E0%A4%87%E0%A4%A4%E0%A4%BF%E0%A4%B9%E0%A4%BE%E0%A4%B8/S%20I%20-%203.pdf' },
    { srNo: 2, series: 'समाज और इतिहास', title: 'सिनेमा और इतिहास लेखन:संबंध और संभावनाएं (874.91 KB)', author: 'अनिरुद्ध देशपांडे', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/%E0%A4%B8%E0%A4%AE%E0%A4%BE%E0%A4%9C%20%E0%A4%94%E0%A4%B0%20%E0%A4%87%E0%A4%A4%E0%A4%BF%E0%A4%B9%E0%A4%BE%E0%A4%B8/S%20I%20-%202.pdf' },
    { srNo: 1, series: 'समाज और इतिहास', title: 'हिंदी के स्त्री-साहित्य का उषाकाल (1857-1947) (207.61 KB)', author: 'डॉ. अनामिका', url: 'https://positive-mantra.com/PDF/Occasional%20Papers/%E0%A4%B8%E0%A4%AE%E0%A4%BE%E0%A4%9C%20%E0%A4%94%E0%A4%B0%20%E0%A4%87%E0%A4%A4%E0%A4%BF%E0%A4%B9%E0%A4%BE%E0%A4%B8/S%20I%20-%201.pdf' }
  ]
};

export default function CcsOccasionalPapersContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPaper, setSelectedPaper] = useState<OccasionalPaper | null>(null);

  // Filter and Sort papers
  const processedPapers = useMemo(() => {
    let result = PAPERS_DATA.filter((paper) =>
      paper.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortBy === "newest") {
      result.sort((a, b) => b.year - a.year);
    } else {
      result.sort((a, b) => a.year - b.year);
    }

    return result;
  }, [searchQuery, sortBy]);

  // Reset page when queries change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, sortBy, itemsPerPage]);

  // Disable body scroll when modal is open
  React.useEffect(() => {
    if (selectedPaper) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPaper]);

  // Pagination calculation
  const totalPages = Math.ceil(processedPapers.length / itemsPerPage);
  const paginatedPapers = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return processedPapers.slice(startIndex, startIndex + itemsPerPage);
  }, [processedPapers, currentPage, itemsPerPage]);

  return (
    <div className="w-full flex flex-col bg-white">
      {/* ── Hero Banner ── */}
      <CcsHeroSlider />

      {/* ── Main List Section ── */}
      <section className="w-full py-12 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Page Heading */}
          <div className="mb-6 text-left">
            <div className="w-12 h-1 bg-[#f37021] mb-2.5" />
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
              Occasional Papers
            </h2>
          </div>

          {/* Filter and Search controls */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {/* Search Box */}
            <div className="relative md:col-span-2">
              <input
                type="text"
                placeholder="Search papers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm text-black border border-gray-200 rounded-lg focus:border-[#f37021] focus:ring-1 focus:ring-[#f37021] outline-none transition-all bg-gray-50/20"
              />
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Sort By Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:border-[#f37021] focus:ring-1 focus:ring-[#f37021] outline-none bg-white text-gray-600 appearance-none cursor-pointer"
              >
                <option value="newest">Sort: Newest Year</option>
                <option value="oldest">Sort: Oldest Year</option>
              </select>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Items Per Page Dropdown */}
            <div className="relative">
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:border-[#f37021] focus:ring-1 focus:ring-[#f37021] outline-none bg-white text-gray-600 appearance-none cursor-pointer"
              >
                <option value={10}>10 per page</option>
                <option value={20}>20 per page</option>
                <option value={50}>50 per page</option>
              </select>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Documents Table */}
          <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f4f4f4] text-[#052356] border-b border-gray-200">
                    <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider">Title</th>
                    <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-center w-40 whitespace-nowrap">Published Year</th>
                    <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-center w-32">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {paginatedPapers.length > 0 ? (
                    paginatedPapers.map((paper) => (
                      <tr key={paper.id} className="hover:bg-gray-50/50 transition-colors duration-150">
                        {/* Document Title */}
                        <td className="py-4 px-6 flex items-start gap-3">
                          <svg className="w-5.5 h-5.5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                          </svg>
                          <button
                            onClick={() => setSelectedPaper(paper)}
                            className="text-left text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors leading-snug cursor-pointer"
                          >
                            {paper.title}
                          </button>
                        </td>
                        
                        {/* Published Year */}
                        <td className="py-4 px-6 text-sm text-gray-600 text-center font-medium">
                          {paper.year}
                        </td>

                        {/* View Action */}
                        <td className="py-4 px-6 text-center">
                          <button
                            onClick={() => setSelectedPaper(paper)}
                            className="inline-flex items-center justify-center gap-1 px-4 py-1.5 rounded-full border border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white text-xs font-bold tracking-wide transition-all select-none cursor-pointer"
                          >
                            <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>VIEW</span>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} className="py-12 text-center text-gray-500">
                        <div className="flex flex-col items-center justify-center gap-2">
                          <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="text-sm font-medium">No papers found matching your filters.</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-6 bg-white py-3 border-t border-gray-100 px-2 select-none">
              <p className="text-xs text-gray-500 font-medium">
                Showing <span className="font-semibold text-gray-700">{(currentPage - 1) * itemsPerPage + 1}</span> to{' '}
                <span className="font-semibold text-gray-700">
                  {Math.min(currentPage * itemsPerPage, processedPapers.length)}
                </span>{' '}
                of <span className="font-semibold text-gray-700">{processedPapers.length}</span> entries
              </p>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white transition-colors cursor-pointer"
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-8 h-8 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      currentPage === pageNum
                        ? 'bg-[#052356] text-white shadow-sm'
                        : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white transition-colors cursor-pointer"
                >
                  Next
                </button>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ── Modal Popup ── */}
      {selectedPaper && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
            onClick={() => setSelectedPaper(null)}
          />

          {/* Modal Container */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 w-full max-w-5xl max-h-[80vh] flex flex-col z-10 overflow-hidden transform transition-all duration-300 scale-100">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white">
              <h3 className={`${spectral.className} text-xl sm:text-2xl font-bold text-[#052356] tracking-tight`}>
                {selectedPaper.title}
              </h3>
              <button 
                onClick={() => setSelectedPaper(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1.5 rounded-lg hover:bg-gray-50 outline-none"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 overflow-y-auto flex-1 bg-white">
              <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#f4f4f4] text-[#052356] border-b border-gray-200">
                        <th className="py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-center w-20">Serial No</th>
                        <th className="py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-center w-56">Series</th>
                        <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider">Title</th>
                        <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-center w-56">Author Name</th>
                        <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-center w-32">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {LECTURES_DATA[selectedPaper.id]?.length > 0 ? (
                        LECTURES_DATA[selectedPaper.id].map((item) => (
                          <tr key={item.srNo} className="hover:bg-gray-50/50 transition-colors duration-150">
                            {/* Serial No */}
                            <td className="py-4 px-4 text-sm text-gray-600 text-center font-medium">
                              {item.srNo}
                            </td>

                            {/* Series */}
                            <td className="py-4 px-4 text-sm text-gray-600 text-center font-medium">
                              {item.series}
                            </td>

                            {/* Title */}
                            <td className="py-4 px-6 flex items-start gap-3">
                              <svg className="w-5.5 h-5.5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                              </svg>
                              <a 
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors leading-snug cursor-pointer"
                              >
                                {item.title}
                              </a>
                            </td>

                            {/* Author */}
                            <td className="py-4 px-6 text-sm text-gray-600 text-center font-medium">
                              {item.author}
                            </td>

                            {/* Action (VIEW button) */}
                            <td className="py-4 px-6 text-center">
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-1 px-4 py-1.5 rounded-full border border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white text-xs font-bold tracking-wide transition-all select-none cursor-pointer"
                              >
                                <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>VIEW</span>
                              </a>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={5} className="py-12 text-center text-gray-500">
                            <div className="flex flex-col items-center justify-center gap-2">
                              <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <p className="text-sm font-medium">No items found for this paper.</p>
                            </div>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
