"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { Spectral } from "next/font/google";
import ArchivesHeroSlider from "@/components/archives/ArchivesHeroSlider";
import styles from "./Content.module.css";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

interface MiscellaneousItem {
  id: string;
  srNo: string;
  description: string;
  accessionNumber: string;
  period: string;
  url: string;
}

const MISCELLANEOUS_DATA: MiscellaneousItem[] = [
  { id: 'mc1', srNo: '1', description: "Papers relating to the Jubbal administration", accessionNumber: '703', period: '1855-1863', url: '#' },
  { id: 'mc2', srNo: '2', description: "‘History of the Indian Revolt’ by Mookund Lall", accessionNumber: '1540', period: '1860-', url: '#' },
  { id: 'mc3', srNo: '3', description: "Papers relating to Prarthana Samaj", accessionNumber: '645A', period: '1873-1890', url: '#' },
  { id: 'mc4', srNo: '4', description: "A letter from M.A. Jinnah to Justice Tyabjee", accessionNumber: '527', period: '1900-', url: '#' },
  { id: 'mc5', srNo: '5', description: "Few pages of S.P. Roy’s diary, (medical consultant of Nehru family)", accessionNumber: '925', period: '1900-1913', url: '#' },
  { id: 'mc6', srNo: '6', description: "Papers relating to M.K. Gandhi obtained from Johannesburg, South Africa", accessionNumber: '1624', period: '1903-1904', url: '#' },
  { id: 'mc7', srNo: '7', description: "Magazines mainly relating to women’s issues entitled The Indian Ladies published by K. Satthianadhan, Cannanore and The Indian Magazine and Review published by Archibald Constable & Co. Ltd., London", accessionNumber: '640', period: '1906-1908', url: '#' },
  { id: 'mc8', srNo: '8', description: "‘The First Printed Pamphlet of Songs’ by S. Bharati", accessionNumber: '1112', period: '1907-', url: '#' },
  { id: 'mc9', srNo: '9', description: "List of members from Delhi, Hissar, Gurgaon, Rohtak and Riyasat Jind attending ‘Panchayat Azim Kaum Jat’ at Barona, District Rohtak", accessionNumber: '1013', period: '1911-', url: '#' },
  { id: 'mc10', srNo: '10', description: "A Russian newspapers Pravda", accessionNumber: '1131', period: '1912-', url: '#' },
  { id: 'mc11', srNo: '11', description: "A letter from M.K. Gandhi to Dhanji Ramji", accessionNumber: '509', period: '1912-', url: '#' },
  { id: 'mc12', srNo: '12', description: "Press clippings on Mahatma Gandhi relating to his activities in South Africa", accessionNumber: 'NA', period: '1913-1914', url: '#' },
  { id: 'mc13', srNo: '13', description: "A booklet entitled ‘Ashirwad - Pushpanjali’ published by Indian Press Prayag", accessionNumber: '1914', period: '1916-', url: '#' },
  { id: 'mc14', srNo: '14', description: "Written statement of Raja Jaswant Rao regarding transfer of his property and documents submitted by Motilal Nehru and Jawaharlal Nehru in Manipur District Court", accessionNumber: '899', period: '1916-', url: '#' },
  { id: 'mc15', srNo: '15', description: "Documents produced by the Exiled Indian Nationalists who were in Europe during the First World War", accessionNumber: '1045', period: '1917-', url: '#' },
  { id: 'mc16', srNo: '16', description: "A letter from C.R. Das to Chief Secretary, Punjab", accessionNumber: '206A', period: '1919-', url: '#' },
  { id: 'mc17', srNo: '17', description: "Papers relating to efforts made by Herabai A. Tata, Mithibai Tata and Mrs. J.Petit towards promotions of the cause of women’s suffrage in India", accessionNumber: '612', period: '1919-1976', url: '#' },
  { id: 'mc18', srNo: '18', description: "A speech delivered by Eamon De Valera President of the Republic of Ireland on ‘India and Ireland’ at New York", accessionNumber: '862', period: '1920-', url: '#' },
  { id: 'mc19', srNo: '19', description: "From Motilal Nehru to V.J. Patel enclosing copy of a letter from D.N. Banerjee", accessionNumber: '114', period: '1920-1923', url: '#' },
  { id: 'mc20', srNo: '19 ( a )', description: "Letter from C. Sankaran Nair to Dinshaw Wacha", accessionNumber: 'NA', period: '-', url: '#' },
  { id: 'mc21', srNo: '20', description: "A capsule of ‘The Gadar Movement’ by Govind Behari Lal", accessionNumber: '514', period: '1920-', url: '#' },
  { id: 'mc22', srNo: '21', description: "Diary of Kapur Singh", accessionNumber: 'NA', period: '1922-1926', url: '#' },
  { id: 'mc23', srNo: '22', description: "Notes on ‘Rules Regarding the Residence of Prostitutes’ and ‘The Treatment of the Prostitutes by the Municipality’ by Jawaharlal Nehru", accessionNumber: '2110', period: '1923-', url: '#' },
  { id: 'mc24', srNo: '23', description: "Letter from Taraknath Das to Lala Lajpat Rai", accessionNumber: '512', period: '1926-', url: '#' },
  { id: 'mc25', srNo: '24', description: "A letter from Rajendra Nath Lahiri to B.C. Chatterjee and B.K. Chowdhary", accessionNumber: '1129', period: '1927-', url: '#' },
  { id: 'mc26', srNo: '25', description: "A map of site plan of Saunder’s murder in Lahore", accessionNumber: '1597', period: '1928-', url: '#' },
  { id: 'mc27', srNo: '26', description: "Notice titled ‘John P. Saunders is Dead & Lajpat Rai is Avenged’ issued by the Hindustan Socialist Republican Army Organisation and a letter from J.N. Sanyal and five others to the Commissioner, Special Tribunal, Lahore Conspiracy Case", accessionNumber: '822', period: '1928-1930', url: '#' },
  { id: 'mc28', srNo: '27', description: "Typed copy of a letter from Jawaharlal Nehru to some Congressmen of Lahore", accessionNumber: '1358', period: '1929-', url: '#' },
  { id: 'mc29', srNo: '28', description: "Letters from Krishna Nehru Hutheesing and Jawaharlal Nehru to Din Dayal [Bhargava]", accessionNumber: '176', period: '1930-', url: '#' },
  { id: 'mc30', srNo: '29', description: "An autobiographical letter of Acharya Asudamal Gidwani addressed to Banarsi Das", accessionNumber: '1156', period: '1930-', url: '#' },
  { id: 'mc31', srNo: '30', description: "A letter from M.K. Gandhi to K. Santhanam", accessionNumber: '333', period: '1931-', url: '#' },
  { id: 'mc32', srNo: '31', description: "A copy of the Congress Samachar", accessionNumber: '1701', period: '1931-', url: '#' },
  { id: 'mc33', srNo: '32', description: "Letters from J.G. Laithwaite and M.K. Gandhi to the British Prime Minister", accessionNumber: '302', period: '1931-', url: '#' },
  { id: 'mc34', srNo: '33', description: "A certificate received from Hindustani Sevadal by C.D. Gopalan", accessionNumber: '270', period: '1931-', url: '#' },
  { id: 'mc35', srNo: '34', description: "Copy of letters from Jawaharlal Nehru to Hiralal M. Desai. An anecdote by Hiralal Desai", accessionNumber: '1329', period: '1931-1940', url: '#' },
  { id: 'mc36', srNo: '35', description: "Papers relating to R.K. Patil including some certificates from Honorable Society of Middle Temple, London", accessionNumber: '847', period: '1931-1943', url: '#' },
  { id: 'mc37', srNo: '36', description: "Papers relating to Khan Abdul Ghaffar Khan", accessionNumber: '1551', period: '1931-1968', url: '#' },
  { id: 'mc38', srNo: '37', description: "A letter from Sir Muhammad Iqbal to Sheo Narain Raina", accessionNumber: '615', period: '1932-', url: '#' },
  { id: 'mc39', srNo: '38', description: "Letters from Gandhi to Edith Hope Scott", accessionNumber: '1726', period: '1932-', url: '#' },
  { id: 'mc40', srNo: '39', description: "Correspondence between Jawaharlal Nehru, V.K. Krishna Menon and Alexander regarding resolution passed at the World Peace Congress, Geneva", accessionNumber: '1234', period: '1932-1936', url: '#' },
  { id: 'mc41', srNo: '40', description: "A letter addressed to Anandi Devi. Also includes a letter from Anandi Devi to Indira Gandhi", accessionNumber: '144', period: '1932-1968', url: '#' },
  { id: 'mc42', srNo: '41', description: "A letter from M.K. Gandhi to Mrs. J.M. Sengupta", accessionNumber: '1314', period: '1932-', url: '#' },
  { id: 'mc43', srNo: '42', description: "Letters from M.K. Gandhi and Rabindranath Tagore to Dr. Dasgupta", accessionNumber: '982', period: '1932-1939', url: '#' },
  { id: 'mc44', srNo: '43', description: "A letter from Rabindranath Tagore to Raymond Burnier", accessionNumber: '1612', period: '1932-', url: '#' },
  { id: 'mc45', srNo: '44', description: "Two issues of Budelkhand Kesari", accessionNumber: '897', period: '1932-', url: '#' },
  { id: 'mc46', srNo: '45', description: "Jail certificate and Sammanpatra of Sakharam Kashinath Ijmulwar", accessionNumber: '1245', period: '1932-1971', url: '#' },
  { id: 'mc47', srNo: '46', description: "A letter from M.K. Gandhi to Lala Mohanlal", accessionNumber: '241', period: '1933-', url: '#' },
  { id: 'mc48', srNo: '47', description: "An article ‘Exploitation of India’ by Jawaharlal Nehru published in Daily Herald", accessionNumber: '2003', period: '1933-', url: '#' },
  { id: 'mc49', srNo: '48', description: "Mr. Gandhi’s tour in India &ndash; report of local government", accessionNumber: '1312', period: '1933-1934', url: '#' },
  { id: 'mc50', srNo: '49', description: "Notebook containing correspondence exchanged between Shivapati Singh, Chandra Singh Deva and Raja of Chandapar Estate, Uttar Pradesh and others", accessionNumber: '1111', period: '1933-1940', url: '#' },
  { id: 'mc51', srNo: '50', description: "Letters from Kamala Nehru, Rajendra Prasad, Dinshaw Mehta, M.K. Gandhi and others to Prabhavati Narayan (w/o Jayaprakash Narayan)", accessionNumber: '733', period: '1933-1972', url: '#' },
  { id: 'mc52', srNo: '51', description: "Copy of a Germany local paper Badeblat relating to Jawaharlal Nehru", accessionNumber: '1263', period: '1935-1967', url: '#' },
  { id: 'mc53', srNo: '52', description: "Venugopala Arangam Mandalay’s welcome address presented to Jawaharlal Nehru as President of The Indian National Congress", accessionNumber: '788', period: '1937-', url: '#' },
  { id: 'mc54', srNo: '53', description: "Letters from M.K. Gandhi to Damodar and Laxmi Narayan", accessionNumber: '1367', period: '1937-1947', url: '#' },
  { id: 'mc55', srNo: '54', description: "Jawaharlal Nehru’s note in the visitor’s book of the Government High School, Srinagar, Garhwal", accessionNumber: '1267', period: '1938-', url: '#' },
  { id: 'mc56', srNo: '55', description: "Papers relating to the lifting of ban on Gandhiji’s book Hind Swaraj", accessionNumber: '549', period: '1938-', url: '#' },
  { id: 'mc57', srNo: '56', description: "List of the passenger travelling by P & O.S.S. ‘Strathnaver’ (shipping) Company including names of Jawaharlal and Indira Nehru leaving for Australia from London", accessionNumber: '637', period: '1938-', url: '#' },
  { id: 'mc58', srNo: '57', description: "A short history of Aundh State", accessionNumber: '336', period: '1938-1939', url: '#' },
  { id: 'mc59', srNo: '58', description: "Press clippings from different newspapers such as New York Times, Democrat Chronicle and Bombay Chronicle, etc. relating to Miss Bhicoo Batlivala", accessionNumber: '869', period: '1938-1940', url: '#' },
  { id: 'mc60', srNo: '59', description: "Letter form Jawaharlal Nehru to Rama Rao, including an article entitled ‘The Madhe Sahaba Controversy’ by Jawaharlal Nehru", accessionNumber: '1023', period: '1939-', url: '#' },
  { id: 'mc61', srNo: '60', description: "A letter to Sati Devi of Calcutta from Jawaharlal Nehru and press clippings on Subhas Chandra Bose", accessionNumber: '1840', period: '1939-1997', url: '#' },
  { id: 'mc62', srNo: '61', description: "Issues of The Communist", accessionNumber: '1562', period: '1939-1941', url: '#' },
  { id: 'mc63', srNo: '62', description: "Letters from Jawaharlal Nehru and Rabindranath Tagore to J. Holmes Smith", accessionNumber: '1807', period: '1940-', url: '#' },
  { id: 'mc64', srNo: '63', description: "Letters to Haimanti Devi from Amiya regarding operation of C.F. Andrews", accessionNumber: '1716', period: '1940-', url: '#' },
  { id: 'mc65', srNo: '64', description: "A poem entitled ‘To Jawaharlal Nehru’ by Vir from Karachi. Also includes a visiting card of Dr. Vera Hingorani, Obstetrician and Gynecologist, AIIMS, New Delhi", accessionNumber: '1286', period: '1940-', url: '#' },
  { id: 'mc66', srNo: '65', description: "Three letters received by K.K. Datta from Dr. Sachidananda Sinha", accessionNumber: '381', period: '1940-1949', url: '#' },
  { id: 'mc67', srNo: '66', description: "Copy of a letter from M.K. Gandhi to K. Venkatasami Naidu", accessionNumber: '1417', period: '1941-', url: '#' },
  { id: 'mc68', srNo: '67', description: "Copy of letters from Gandhi to Shwaib", accessionNumber: '1531', period: '1941-', url: '#' },
  { id: 'mc69', srNo: '68', description: "A letter from Mahatma Gandhi to P.S. Ramadorai", accessionNumber: '1803', period: '1941-', url: '#' },
  { id: 'mc70', srNo: '69', description: "The India League collection comprising some handbills and pamphlets. Also includes an article ‘Spain Why’ by Jawaharlal Nehru", accessionNumber: '439', period: '1941-1962', url: '#' },
  { id: 'mc71', srNo: '70', description: "Nine photographs of 1942 martyrs with descriptive captions", accessionNumber: '620', period: '1942-', url: '#' },
  { id: 'mc72', srNo: '71', description: "An article entitled ‘What India Wants’ by Jawaharlal Nehru", accessionNumber: '1583', period: '1942-', url: '#' },
  { id: 'mc73', srNo: '72', description: "Copies of certificates received by Tukaram Baburao Patil, including Samman Patra from Maharashtra Government", accessionNumber: '1217', period: '1942-', url: '#' },
  { id: 'mc74', srNo: '73', description: "A register containing documents on Chimur uprising", accessionNumber: '799', period: '1942-1945', url: '#' },
  { id: 'mc75', srNo: '74', description: "A copy of daily engagement diary of Jayaprakash Narayan entitled ‘Inside Lahore Fort’", accessionNumber: '1139', period: '1944-', url: '#' },
  { id: 'mc76', srNo: '75', description: "Copies of notes and articles received from Bernal Archives, such as ‘The Indian Situation’, ‘The Utilisation of Research on Short- and Long-Term Developments in India’ by J.D. Bernal, ‘Jawaharlal Nehru and Science’, etc. Includes an article entitled some problem of Science and Technology in India by J.D. Bernal", accessionNumber: '1244', period: '1944-1964', url: '#' },
  { id: 'mc77', srNo: '76', description: "A report to the Government of India on ‘Scientific Research in India’ by Professor A.V. Hill", accessionNumber: '1221', period: '1945-', url: '#' },
  { id: 'mc78', srNo: '77', description: "Copy of a Journal of a month’s excursion from Srinagar to Leh and back jointly written by V.G. Kiernan and N.S. Kiernan. Also includes, notices and photographs on Leh (Kashmir), Kargil", accessionNumber: '1606', period: '1945-', url: '#' },
  { id: 'mc79', srNo: '78', description: "Letter from Jawaharlal Nehru to Pyarelal introducing Harold Leventhal", accessionNumber: '1579', period: '1945-', url: '#' },
  { id: 'mc80', srNo: '79', description: "Three letters from M.K. Gandhi to Raman Lal Shah", accessionNumber: '418', period: '1945-', url: '#' },
  { id: 'mc81', srNo: '80', description: "An address presented to Jawaharlal Nehru by Kapoor Singh - President, Shiromani Khalsa, Jammu and Kashmir", accessionNumber: '1353', period: '1945-', url: '#' },
  { id: 'mc82', srNo: '81', description: "A notebook containing signatures with quotes of persons such as Jawaharlal Nehru, Vallabhbhai Patel, Sarojini Naidu, Jayaprakash Narayan, and others", accessionNumber: '1584', period: '1945-1951', url: '#' },
  { id: 'mc83', srNo: '82', description: "Papers and correspondence relating to Naga National Council. Also includes a pamphlet entitled ‘Naga Peoples’ Convention’", accessionNumber: '819', period: '1946-1959', url: '#' },
  { id: 'mc84', srNo: '83', description: "Typescripts of the book Jawaharlal Nehru and Science in the Parliament by Baldev Singh", accessionNumber: '1614', period: '1946-1964', url: '#' },
  { id: 'mc85', srNo: '84', description: "Diary of Lalubhai Samaldas", accessionNumber: '111', period: '1947-', url: '#' },
  { id: 'mc86', srNo: '85', description: "A letter from Sri Prakasa to Shrinivas. Also includes a circular letter to the Member of Council, Education, Health and Agriculture, Government of India by Rajendra Prasad", accessionNumber: '1706', period: '1947-1966', url: '#' },
  { id: 'mc87', srNo: '86', description: "M.K. Gandhi’s letter to Shri Shankaran of Sevagram Ashram, Wardha", accessionNumber: '417', period: '1948-', url: '#' },
  { id: 'mc88', srNo: '87', description: "A good wishes message to the Rice Research Institute from Jawaharlal Nehru", accessionNumber: '1027', period: '1948-', url: '#' },
  { id: 'mc89', srNo: '88', description: "‘Reminiscences: Memoirs: Excerpts: Conversation with Jawaharlal Nehru’ by J.L. Mullick", accessionNumber: '1041', period: '1948-', url: '#' },
  { id: 'mc90', srNo: '89', description: "Papers of John Haynes Holmes, a booklet entitled ‘Mahatma Gandhi: A Memorial Service", accessionNumber: '109', period: '1948-', url: '#' },
  { id: 'mc91', srNo: '90', description: "An incomplete report about Kashmir", accessionNumber: '692', period: '1948-1949', url: '#' },
  { id: 'mc92', srNo: '91', description: "Map of East Punjab capital site and zoning plan of and Chandigarh Sector 8A prepared by Survey of India", accessionNumber: '2175', period: '1948-1952', url: '#' },
  { id: 'mc93', srNo: '92', description: "Citation for conferring the degree of Doctor of Law upon Pt. Jawaharlal Nehru by President Dwight D. Eisenhower at Columbia University. Also includes xerox copies of photographs of Jawaharlal Nehru", accessionNumber: '2062', period: '1949-', url: '#' },
  { id: 'mc94', srNo: '93', description: "Nai Roshni &ndash; journal edited by Dr. Abid Hussain", accessionNumber: '1611', period: '1950-', url: '#' },
  { id: 'mc95', srNo: '94', description: "Correspondence exchanged between W.G. Eagleton, Lord Mountbatten and H.Y. Sharada Prasad", accessionNumber: '995', period: '1950-1985', url: '#' },
  { id: 'mc96', srNo: '95', description: "Press coverage on the death of Sardar Patel", accessionNumber: 'NA', period: '1950-', url: '#' },
  { id: 'mc97', srNo: '96', description: "Extracts from the speeches delivered by Jawaharlal Nehru on (1) Foundation stone laying ceremony of CBRI (2) Opening ceremony of CBRI, Roorkee", accessionNumber: '1001', period: '1951-1953', url: '#' },
  { id: 'mc98', srNo: '97', description: "Visitor’s book of Circuit House, Gardens, Dehradun containing remarks of various leaders such as Indira Gandhi, Sri Prakasa, H.P. Mody, and others", accessionNumber: '1399', period: '1951-1964', url: '#' },
  { id: 'mc99', srNo: '98', description: "Condolence letter received by J.C. Varma from Jawaharlal Nehru, Lal Bahadur Shastri, Mahavir Tyagi, Sri Prakasa, and others on his father Babu Ram Varma’s demise", accessionNumber: '934', period: '1952-1953', url: '#' },
  { id: 'mc100', srNo: '99', description: "Bound volume entitled ‘The Communist Party of West Pakistan in Action’ published by Police Criminal Investigation Department, Punjab, Lahore. Also includes a booklet titled ‘Baghi Larki &ndash; Jhansi ki Rani’", accessionNumber: '1952', period: '1952-', url: '#' },
  { id: 'mc101', srNo: '100', description: "Correspondence exchanged between Jawaharlal Nehru and Shriman Narayan", accessionNumber: '405', period: '1952-1964', url: '#' },
  { id: 'mc102', srNo: '101', description: "A letter from Dr. K.M. Ashraf to Professor Mohibbul Hasan", accessionNumber: '1195', period: '1953-', url: '#' },
  { id: 'mc103', srNo: '102', description: "Manuscript of a book entitled Jawaharlal Nehru: An Autobiography", accessionNumber: '1682', period: '1953-', url: '#' },
  { id: 'mc104', srNo: '103', description: "Photographs relating to Khizrabad Village School (Near Jamia). Also includes a photograph of a letter from Pattabhi Sitaramayya to Maulana Azad stating Rajendra Prasad’s appreciation for Krishnadas’ work", accessionNumber: '653A', period: '1953-', url: '#' },
  { id: 'mc105', srNo: '104', description: "‘Kashmir Pandits Outside Kashmir’, an article by Harihar Nath Muttoo", accessionNumber: '1006', period: '1954-', url: '#' },
  { id: 'mc106', srNo: '105', description: "A notebook containing Maharashtra Pradesh Congress Committee Poona Karyakarini Sabha Vritant", accessionNumber: '445', period: '1954-1960', url: '#' },
  { id: 'mc107', srNo: '106', description: "Jawaharlal Nehru’s letter and a xerox copy of it", accessionNumber: '1975', period: '1954-', url: '#' },
  { id: 'mc108', srNo: '107', description: "A pamphlet containing extracts from the proceedings of the Lok Sabha relating to obituary speeches made in the House from 1921-52", accessionNumber: '1589', period: '1955-', url: '#' },
  { id: 'mc109', srNo: '108', description: "Notes by Jawaharlal Nehru (original) along with photocopy", accessionNumber: '955', period: '1955-', url: '#' },
  { id: 'mc110', srNo: '109', description: "Three letters of Jawaharlal Nehru and six letters of Dr. Zakir Husain to J. Hazrati", accessionNumber: '989', period: '1955-1957', url: '#' },
  { id: 'mc111', srNo: '110', description: "A charge-sheet and judgement in the case of freedom fighters of Goa", accessionNumber: '552', period: '1956-', url: '#' },
  { id: 'mc112', srNo: '111', description: "Congratulatory letter from Jawaharlal Nehru to Mahesh Narayan. Includes Jawaharlal Nehru’s message published in Janata magazine dated. 23 October 1937", accessionNumber: '1193', period: '1957-', url: '#' },
  { id: 'mc113', srNo: '112', description: "A letter from Jawaharlal Nehru to Bappi", accessionNumber: '983', period: '1958-', url: '#' },
  { id: 'mc114', srNo: '113', description: "A letter from Jawaharlal Nehru to the Children of Nocte, Tangsa, Wancho and Singpho (Tribes), Arunachal Pradesh", accessionNumber: '1471', period: '1958-', url: '#' },
  { id: 'mc115', srNo: '115', description: "Copies of National Tahrik created by Maulana Abul Kalam Azad", accessionNumber: '1476', period: '1959-', url: '#' },
  { id: 'mc116', srNo: '115', description: "Congratulatory note from Jawaharlal Nehru to Rajkiya Kirshi Vidalaya Avem Prasar Prashikshan Kendra, Bulandshahr , U.P", accessionNumber: '1159', period: '1959-', url: '#' },
  { id: 'mc117', srNo: '116', description: "Articles entitled ‘Dr. Sir Hari Singh Gour: As Lawyer and Jurist’ and ‘Glimpses of Political Awakening in Nagpur’ by M.B. Niyogi", accessionNumber: '495', period: '1959-1976', url: '#' },
  { id: 'mc118', srNo: '117', description: "Correspondence exchanged between Jawaharlal Nehru, Indira Gandhi, Nurul Hasan, Devaraj Urs and others", accessionNumber: '1315', period: '1959-1981', url: '#' },
  { id: 'mc119', srNo: '118', description: "A notebook of Jawaharlal Nehru containing observations by him in the course of Commonwealth Prime Minister’s Conference, London", accessionNumber: '1473', period: '1960-', url: '#' },
  { id: 'mc120', srNo: '119', description: "A letter from Professor Rahul Sankrityayan to Om Prakash Paliwal, along with the xerox copy of its English translation", accessionNumber: '1435', period: '1960-', url: '#' },
  { id: 'mc121', srNo: '120', description: "Bio-data of Netram Singh along with a photograph", accessionNumber: '813', period: '1960-', url: '#' },
  { id: 'mc122', srNo: '121', description: "A letter from Jawaharlal Nehru to Sivagnanam", accessionNumber: '1345', period: '1961-', url: '#' },
  { id: 'mc123', srNo: '122', description: "A letter jointly signed by Mahavir Tyagi and Jawaharlal Nehru for the ‘Campaign for National Solidarity Oath by the People of Dehradun’", accessionNumber: '966', period: '1961-', url: '#' },
  { id: 'mc124', srNo: '123', description: "Letters from Indra Chandra Narang", accessionNumber: '1070', period: '1961-1962', url: '#' },
  { id: 'mc125', srNo: '124', description: "A letter of Jawaharlal Nehru to Renu Chakravarty and xerox copy of the letter published in Mainstream dated 29 May 2004", accessionNumber: '1965', period: '1962-', url: '#' },
  { id: 'mc126', srNo: '125', description: "Nehru’s letter on Chinese Aggression", accessionNumber: '773', period: '1962-', url: '#' },
  { id: 'mc127', srNo: '126', description: "Memorandum submitted to the Governor of Assam demanding making of Assamese language as a medium of instruction for the students of NEFA, facilities for tribal students for their all-round progress and developments etc., Also includes a letter from Ram Manohar Lohia to Ajit Sharma", accessionNumber: '712', period: '1962-', url: '#' },
  { id: 'mc128', srNo: '127', description: "Papers and correspondence relating to Jawaharlal Nehru. Also includes an article ‘Jawaharlal Nehru-The Leader’ by Albert Sorel and a report of a press conference addressed by him in Colombo", accessionNumber: '1213', period: '1962-1964', url: '#' },
  { id: 'mc129', srNo: '128', description: "Letters from Jawaharlal Nehru and Chief Justice of India addressed to Roshanlal Samar", accessionNumber: '1009', period: '1963-', url: '#' },
  { id: 'mc130', srNo: '129', description: "Jawaharlal Nehru’s convocation address published in journal of Gujarat Vidyapith", accessionNumber: '1053', period: '1963-', url: '#' },
  { id: 'mc131', srNo: '130', description: "One emblemed paper and a note in Japanese along with its English translation", accessionNumber: '1209', period: '1963-', url: '#' },
  { id: 'mc132', srNo: '131', description: "Sadashiv Tukaram Bhute papers containing Sammanpatra and jail certificates", accessionNumber: '1226', period: '1963-1966', url: '#' },
  { id: 'mc133', srNo: '132', description: "A message from Jawaharlal Nehru to Vidya Charan Shukla", accessionNumber: '1412', period: '1964-', url: '#' },
  { id: 'mc134', srNo: '133', description: "Condolence letter from the staff and students of Rockford College, New York to Professor Kesubhai Desai on the demise of Jawaharlal Nehru", accessionNumber: '767', period: '1964-', url: '#' },
  { id: 'mc135', srNo: '134', description: "A poem on Jawaharlal Nehru on his 75th Birth Anniversary by Narayandas", accessionNumber: '1277', period: '1964-', url: '#' },
  { id: 'mc136', srNo: '135', description: "A poem entitled ‘Jawahar Jyoti’ by Bhawani Prasad Mishra. Also includes a leaflet ‘Lament of Bharat’ on the occasion of seventy-fifth birth anniversary of Jawaharlal Nehru", accessionNumber: '1178', period: '1964-', url: '#' },
  { id: 'mc137', srNo: '136', description: "Suit for damages filed by Rammanohar Lohia and Pran Nath Lekhi in the Court of Senior Sub&ndash; Judge, Delhi", accessionNumber: '1534', period: '1965-', url: '#' },
  { id: 'mc138', srNo: '137', description: "An article entitled ‘Nehru and Indian Mountaineering’ by Captain M.S. Kohli, Vice President of Indian Mountaineering Foundation", accessionNumber: '868', period: '1965-', url: '#' },
  { id: 'mc139', srNo: '138', description: "Articles entitled ‘Sardar Bhagat Singh- His Last Moments’ and ‘Gandhi’s Attempt to Save Bhagat Singh: A Revelation’ by Bejoy Kumar Sinha published in Deccan Chronicle", accessionNumber: '1125', period: '1966-1970', url: '#' },
  { id: 'mc140', srNo: '139', description: "Letters from Jawaharlal Nehru to L.R. Zutshi", accessionNumber: '768', period: '1967-', url: '#' },
  { id: 'mc141', srNo: '140', description: "‘The Magna Carta of the Jews in Kerala’", accessionNumber: '113', period: '1967-', url: '#' },
  { id: 'mc142', srNo: '141', description: "An article entitled ‘Nehru as a Philosopher’ by B.K. Mishra, published in AICC Economic Review", accessionNumber: '1176', period: '1968-', url: '#' },
  { id: 'mc143', srNo: '142', description: "Booklets entitled ‘Dr. (Smt.) Thackersey Seventy-Fifth Birthday Felicitation Function’ and ‘Sir Vithaldas Thackersey Birth Centenary Souvenir (1874-1974)’", accessionNumber: '689', period: '1969-1974', url: '#' },
  { id: 'mc144', srNo: '143', description: "Manuscript of the book Buddhist Heritage of Afghanistan by Amrit Lal Puri. Also includes letters to G.L. Puri", accessionNumber: '1084', period: '1971-1983', url: '#' },
  { id: 'mc145', srNo: '144', description: "India of My Dream in the Hands of Vinobaji, a book by Satis Chandra Das Gupta", accessionNumber: '600', period: '1972-', url: '#' },
  { id: 'mc146', srNo: '145', description: "Bulletins issued by the Centre for Study of India and Contemporary Islam", accessionNumber: '1397', period: '1972-', url: '#' },
  { id: 'mc147', srNo: '146', description: "A note on ‘Delhi Revolutionaries’ by S.N. Chopra", accessionNumber: '269', period: '1972-', url: '#' },
  { id: 'mc148', srNo: '147', description: "‘A Dialogue with Nehru’ by Mohammed Hassanein Heikal", accessionNumber: '1097', period: '1973-', url: '#' },
  { id: 'mc149', srNo: '148', description: "Interview of the Prime Minister Indira Gandhi, with the Polish T.V. Team, at 10.00am in South Block", accessionNumber: 'NA', period: '1973-', url: '#' },
  { id: 'mc150', srNo: '149', description: "B.R. Nanda’s draft reply to P.M.’s Secretariat (H.Y. Sharada Prasad) on questions asked by Mr. George Soria (of France) on Spanish Civil War", accessionNumber: '993', period: '1974-', url: '#' },
  { id: 'mc151', srNo: '150', description: "A booklet entitled Jawaharlal Nehru &ndash; As a Journalist &ndash; by Prabha Chand", accessionNumber: '1973', period: '1976-', url: '#' },
  { id: 'mc152', srNo: '151', description: "A letter from Prafulla Chandra Sen to Asoka Mehta, also a copy to P. Ramachandran", accessionNumber: '1030', period: '1976-', url: '#' },
  { id: 'mc153', srNo: '152', description: "A paper presented ‘Ananthakrishna’s Contribution to Anthropological Literature’ by L.K. Bala Ratnam. Also includes press clippings from National Herald relating to the activities of M.K. Gandhi, Maulana Azad, Nehru and others", accessionNumber: '1051', period: '1976-1981', url: '#' },
  { id: 'mc154', srNo: '153', description: "‘Poems on Nehru’ by Dr. Ram Sharan Prasad", accessionNumber: '1300', period: '1977-', url: '#' },
  { id: 'mc155', srNo: '154', description: "Typescripts of ‘Efforts at Political Reforms in British India before Gandhian Era’ and ‘Sir Syed Ahmad - A Muslim Nationalist’ by Dr. Ishwara Topa", accessionNumber: '1467', period: '1978-', url: '#' },
  { id: 'mc156', srNo: '155', description: "Wilhelm Lutz, research on ‘Jana Gana Mana’ and transcript of the documentary feature on the same subject by Chitra Naraina", accessionNumber: '854', period: '1980-', url: '#' },
  { id: 'mc157', srNo: '156', description: "A letter from Bhagwan Das Jain, ex-journalist to Indira Gandhi giving an eye- witness account of Jawaharlal Nehru’s arrest on 10 September 1942", accessionNumber: '780', period: '1981-', url: '#' },
  { id: 'mc158', srNo: '157', description: "An article on Jawaharlal Nehru entitled ‘When Nehru Acted in Children’s Film’ by O. Jos. Thottan", accessionNumber: '769', period: '1981-', url: '#' },
  { id: 'mc159', srNo: '158', description: "Condolence message/tribute to Lord Attlee from Indira Gandhi", accessionNumber: '802', period: '1982-', url: '#' },
  { id: 'mc160', srNo: '159', description: "An article entitled ‘Chandrasekhar vs. Eddington - An Unanticipated Confronta-tion’ by Kameshwar C. Wali reprinted from Physics Today", accessionNumber: '863', period: '1982-', url: '#' },
  { id: 'mc161', srNo: '160', description: "A letter from B.E. Choudhari (MP) to the Home Minister regarding specification of equivalent names, tribes of existing scheduled castes/scheduled Tribes in Karnataka", accessionNumber: '1260', period: '1983-', url: '#' },
  { id: 'mc162', srNo: '161', description: "Summary of a thesis ‘A Community in Exile: The Kashmiri Pandits of Northern India in the late Nineteenth and Early Twentieth Centuries’ by Kusum Pant", accessionNumber: '921', period: '1983-', url: '#' },
  { id: 'mc163', srNo: '162', description: "A letter from Subedar Desraj to Indira Gandhi along with pages of Illustrated Weekly of India containing photo-graphs of Nehru", accessionNumber: '853', period: '1983-', url: '#' },
  { id: 'mc164', srNo: '163', description: "An article entitled ‘A Child Freedom Fighter’s Story: Told When Old’ by Nikunja Behari Chakravarty", accessionNumber: '887', period: '1983-', url: '#' },
  { id: 'mc165', srNo: '164', description: "Copy of a letter from Indira Gandhi to Raja Sajid Husain of Kotwara, Kaisarbagh, Lucknow. Also includes a press clipping entitled ‘Sardar Patel and Prime Minister ship’ published in National Herald, dated 28 November 1970", accessionNumber: '864', period: '1983-', url: '#' },
  { id: 'mc166', srNo: '165', description: "Correspondence exchanged between Imtiaz Mohammad Khan and Indira Gandhi", accessionNumber: '928', period: '1983-', url: '#' },
  { id: 'mc167', srNo: '166', description: "‘Bachpan ki Yadein’ conversation between Indira Gandhi and Uma Chakbast", accessionNumber: '901', period: '1983-', url: '#' },
  { id: 'mc168', srNo: '167', description: "Piece of conversation between King George V and G.K. Gokhale", accessionNumber: '903', period: '1983-', url: '#' },
  { id: 'mc169', srNo: '168', description: "An album containing a poem on Indira Gandhi by Asha Jain and a notebook containing verses by Govind Patel", accessionNumber: '1301', period: '1983-', url: '#' },
  { id: 'mc170', srNo: '169', description: "Memoirs of Sita Ram by his son Professor Satish Chandra", accessionNumber: '1990', period: '1983-1984', url: '#' },
  { id: 'mc171', srNo: '170', description: "Papers relating to Motilal Nehru and Mahmudabad family, extract from the book entitled Partition of India edited by C.H. Phillips and Doreen Wainright", accessionNumber: '1161', period: '1984-', url: '#' },
  { id: 'mc172', srNo: '171', description: "An article entitled ‘Off the Track in Wartime India’ by Philip Mason published in The Times", accessionNumber: '902', period: '1984-', url: '#' },
  { id: 'mc173', srNo: '172', description: "A message from Indira Gandhi to Stanley Wolpert", accessionNumber: '912', period: '1984-', url: '#' },
  { id: 'mc174', srNo: '173', description: "‘Jawaharlal Nehru an Internationalist: Apostle of Peace’ an article by Professor S.S. Bhatia", accessionNumber: '919', period: '1984-', url: '#' },
  { id: 'mc175', srNo: '174', description: "Transcript of an interview of Indira Gandhi with Chitra Narayan of All India Radio", accessionNumber: '936', period: '1984-', url: '#' },
  { id: 'mc176', srNo: '175', description: "Issues of India Weekly", accessionNumber: '974', period: '1984-', url: '#' },
  { id: 'mc177', srNo: '176', description: "An article from South October (magazine) containing book reviews of Jinnah of Pakistan by Stanley Wolpert and Jawaharlal Nehru: A Biography", accessionNumber: '952', period: '1984-', url: '#' },
  { id: 'mc178', srNo: '177', description: "‘Yuganirmata, Pt. Jawaharlal Nehru’ by Sunderlal B. Malhara", accessionNumber: '1072', period: '1984-', url: '#' },
  { id: 'mc179', srNo: '178', description: "A letter from A.M. Deane to Rajiv Gandhi", accessionNumber: '1024', period: '1985-', url: '#' },
  { id: 'mc180', srNo: '179', description: "Original copy of a Foreword to ‘Associated Movements’ by Rajiv Gandhi, published as a part of the Congress Centenary Celebration", accessionNumber: '990', period: '1985-', url: '#' },
  { id: 'mc181', srNo: '180', description: "Personal recollection of the sequence of events of 15th and 16th August 1947 of R.C. Mody", accessionNumber: '1007', period: '1985-', url: '#' },
  { id: 'mc182', srNo: '181', description: "Golden Jubilee volume of Dainik Navjyoti - newspaper", accessionNumber: '1427', period: '1986-', url: '#' },
  { id: 'mc183', srNo: '182', description: "Rajaji memorial lecture delivered by H.Y. Sharada Prasad at the Gokhale Institute of Public Affairs, Bangalore", accessionNumber: '1081', period: '1987-', url: '#' },
  { id: 'mc184', srNo: '183', description: "Eye-witness account of Vinodchandra Shah of the events at Jambusar when Motilal Nehru and Jawaharlal Nehru came there during Dandi March", accessionNumber: '1166', period: '1987-', url: '#' },
  { id: 'mc185', srNo: '184', description: "An article entitled ‘Indian Foreign Policy- Unique and Time Tested’ by R. Rangarajan", accessionNumber: '1138', period: '1987-', url: '#' },
  { id: 'mc186', srNo: '185', description: "A letter from H.R. Abdi Allahabadi (MP) to Rajiv Gandhi regarding historical importance of House No. 77, Meer Ganj Allahabad where Jawaharlal Nehru was born", accessionNumber: '1151', period: '1987-', url: '#' },
  { id: 'mc187', srNo: '186', description: "An article entitled ‘The Communist Party of India and the Second World War’- some reminiscences by Victor Kiernan", accessionNumber: '1132', period: '1987-', url: '#' },
  { id: 'mc188', srNo: '187', description: "A note on B.G. Horniman entitled ‘Benjamin Guy Horniman: A Profile’ along with his biographical details", accessionNumber: '1171', period: '1988-', url: '#' },
  { id: 'mc189', srNo: '188', description: "Papers relating to reminiscences of Captain V. Sundaram, the pilot, who flew Jawaharlal Nehru from Delhi to Bombay soon after his release from prison in 1945", accessionNumber: '1181', period: '1988-', url: '#' },
  { id: 'mc190', srNo: '189', description: "A letter from M.M. Mehta to Rajiv Gandhi regarding birth anniversary of Pt. Jawaharlal Nehru", accessionNumber: '1205', period: '1988-', url: '#' },
  { id: 'mc191', srNo: '190', description: "A letter from Yogesh Praveen to Rajiv Gandhi with enclosed poems entitled ‘Pandit Nehru ke Prati’, ‘Indira ke Prati’ etc. Also includes a bio-data of Yogesh Praveen", accessionNumber: '1208', period: '1988-', url: '#' },
  { id: 'mc192', srNo: '191', description: "A few press clippings relating to Jawaharlal Nehru published in Kompas", accessionNumber: '1265', period: '1988-', url: '#' },
  { id: 'mc193', srNo: '192', description: "Press clippings from different newspapers such as The Guardian, Daily Times, etc. relating to Jawaharlal Nehru and his birth centenary celebration. Also includes a monthly newsletter India on special anniversary issue", accessionNumber: '1203', period: '1988-', url: '#' },
  { id: 'mc194', srNo: '193', description: "First Day Cover with a photograph of Pt. Jawaharlal Nehru released by the Government of Madagascar", accessionNumber: '1232', period: '1989-', url: '#' },
  { id: 'mc195', srNo: '194', description: "Informal observations on a visit to China by Professor F. Tomasson Jannuzi", accessionNumber: '1340', period: '1989-', url: '#' },
  { id: 'mc196', srNo: '195', description: "A note prepared by A. Madhavan, Indian Ambassador in Bonn after a visit to Badenweiler, where Kamala Nehru stayed from September 1935 to January 1936", accessionNumber: '1253', period: '1989-', url: '#' },
  { id: 'mc197', srNo: '196', description: "English translation of speeches delivered by Hungarian Deputy Prime Minister Dr. Peter Medgyessy on the occasion of the release of the book Nehru-A-Portrait", accessionNumber: '1252', period: '1989-', url: '#' },
  { id: 'mc198', srNo: '197', description: "An article entitled ‘Nehru in Barcelona’ by Pilar Casamada. Also includes press clippings from AVUI newspaper (Barcelona)", accessionNumber: '1287', period: '1989-', url: '#' },
  { id: 'mc199', srNo: '198', description: "First Day Cover and a leaflet by Government of Uganda to mark Birth Centenary of Jawaharlal Nehru", accessionNumber: '1289', period: '1989-', url: '#' },
  { id: 'mc200', srNo: '199', description: "A file containing eight stamps on Jawaharlal Nehru presented by the Mongolian Ambassador", accessionNumber: '1285', period: '1989-', url: '#' },
  { id: 'mc201', srNo: '200', description: "A set of facsimile of the commemorative stamps issued by Tunisian government as a part of Jawaharlal Nehru Birth Centenary Celebrations", accessionNumber: '1281', period: '1989-', url: '#' },
  { id: 'mc202', srNo: '201', description: "Papers relating to activities of Indian Missions abroad on the Jawaharlal Nehru centenary celebrations", accessionNumber: '1280', period: '1989-', url: '#' },
  { id: 'mc203', srNo: '202', description: "Copy of a letter from Rajiv Gandhi to C.R. Pakrashi, having stamps of Government of the Republic of Laos", accessionNumber: '1379', period: '1990-', url: '#' },
  { id: 'mc204', srNo: '203', description: "A poem entitled ‘The Leader’ by N.P. Singh", accessionNumber: '1413', period: '1992-', url: '#' },
  { id: 'mc205', srNo: '204', description: "A notebook on ‘South Asian Newspapers, primarily in microform, in reporting prepared under the auspices of the Committee on South Asian Libraries and Documentation, South Asia Council Association for Asian Studies’ &ndash; compiled by Irene Joshi", accessionNumber: '1502', period: '1994-', url: '#' },
  { id: 'mc206', srNo: '205', description: "A letter from Razzaq Afsar to the Chairman of IGMT regarding poetical tribute paid to Jawaharlal Nehru, Indira Gandhi, Rajiv Gandhi and Sanjay Gandhi", accessionNumber: '1514', period: '1995-', url: '#' },
  { id: 'mc207', srNo: '206', description: "A souvenir released on the first death anniversary of late Bah Peter G. Marbaniang", accessionNumber: '1645', period: '1998-', url: '#' },
  { id: 'mc208', srNo: '207', description: "Papers, press clippings of The Hindustan, Indian Express, etc. relating to tribute paid to S.L. Shakdher (ex-official of Lok Sabha). Also includes an article ‘Extraneous Pressures at Work’ by A.G. Noorani", accessionNumber: '2176', period: '2002-', url: '#' },
  { id: 'mc209', srNo: '208', description: "A book entitled ‘With the Sanction of Government: The Memoirs of Leonard George Pinnell (1896-1979)’ by Martin Pinnell and also published by him", accessionNumber: '1822', period: '2002-', url: '#' },
  { id: 'mc210', srNo: '209', description: "Note on ‘The Life and Times of Kamla Bakaya (1900-73), My Mother: Teacher, Poet’ by Ravi M. Bakaya", accessionNumber: '1895', period: '2006-', url: '#' },
  { id: 'mc211', srNo: '210', description: "“Lotus Sutra Manuscripts Series 12: Gilgit Manuscript from the National Archives of India, Facsimile Edition”", accessionNumber: '2012', period: '2012-', url: '#' },
  { id: 'mc212', srNo: '211', description: "A letter from Rajpati Kaul to Kasturi Narain", accessionNumber: '529', period: '-', url: '#' },
  { id: 'mc213', srNo: '212', description: "A letter from M.K. Gandhi to Mrinalini Sen", accessionNumber: '857', period: '-', url: '#' },
  { id: 'mc214', srNo: '213', description: "An article ‘Congress Radio Calling’- relating to 1942 Movement. Also includes photo copy of a Congress Transmitter", accessionNumber: '99', period: '-', url: '#' },
  { id: 'mc215', srNo: '214', description: "Letter from G.K. Gokhale to the P.S. to Governor of Bombay, regarding the statements made by Gokhale about the plague operation in Poona to a representative of the Manchester Guardian", accessionNumber: '104', period: '-', url: '#' },
  { id: 'mc216', srNo: '215', description: "Russian documents on October Revolution", accessionNumber: '124', period: '-', url: '#' },
  { id: 'mc217', srNo: '216', description: "Account of an interview of Surendranath Banerjee and Rao Bahadur R.N. Mudholkar with the Secretary of State and the Viceroy", accessionNumber: '145', period: '-', url: '#' },
  { id: 'mc218', srNo: '217', description: "Draft of a biography of Ganga Prasad Verma, Editor, Advocate", accessionNumber: '306', period: '-', url: '#' },
  { id: 'mc219', srNo: '218', description: "India’s Declaration of Independence and a picture of Dandi March", accessionNumber: '579', period: '-', url: '#' },
  { id: 'mc220', srNo: '219', description: "Transcript of a B.B.C. interview of Lord Mountbatten", accessionNumber: '656', period: '-', url: '#' },
  { id: 'mc221', srNo: '220', description: "Posters of the Ramayana Group of the Children Theatre", accessionNumber: '696', period: '-', url: '#' },
  { id: 'mc222', srNo: '221', description: "A register containing manuscript of the autobiography of Joy Kissen Mookerjee", accessionNumber: '910', period: '-', url: '#' },
  { id: 'mc223', srNo: '222', description: "An autobiographical sketch of Ashalata Sen, mother of S.R. Sen", accessionNumber: '915', period: '-', url: '#' },
  { id: 'mc224', srNo: '223', description: "A file containing fragments of Madame Victoria Ocampo’s autobiography with its English (renderings) translation. Including letter from Rabindranath Tagore", accessionNumber: '978', period: '-', url: '#' },
  { id: 'mc225', srNo: '224', description: "Manuscript of an article ‘Revolutionary Morals’ by Devulapalli Venkateswara Rao", accessionNumber: '985', period: '-', url: '#' },
  { id: 'mc226', srNo: '225', description: "Sources on S.C. Bose and the freedom struggle of India in the Central State Archives of G.D.R. some preliminary remarks by Professor Diethelm Weidemann", accessionNumber: '998', period: '-', url: '#' },
  { id: 'mc227', srNo: '226', description: "‘Bharatiyon ke Anmol Jawahar’ by Ganesh Shankar R. Maheshwari", accessionNumber: '1068', period: '-', url: '#' },
  { id: 'mc228', srNo: '227', description: "An article ‘The Three Classes and The Three Tactics, Lahore: The Cynosure of the Petty Bourgeoisie’", accessionNumber: '1106', period: '-', url: '#' },
  { id: 'mc229', srNo: '228', description: "Horoscopes of Motilal Nehru, Jawaharlal Nehru, Swarup Rani Nehru and Indira Nehru", accessionNumber: '1266', period: '-', url: '#' },
  { id: 'mc230', srNo: '229', description: "An article entitled ‘Azad Hind Fauj mein Garhwali Sainiko ki Wafadari’ by Shiv Singh Chauhan", accessionNumber: '1349', period: '-', url: '#' },
  { id: 'mc231', srNo: '230', description: "Copy of an article on ‘Jawaharlal Nehru - Sportsman’ by Surjit Singh Majithia", accessionNumber: '1369', period: '-', url: '#' },
  { id: 'mc232', srNo: '231', description: "An autobiography of Ram Nath Kak entitled Autumn Leaves: Kashmiri Reminiscences", accessionNumber: '1494', period: '-', url: '#' },
  { id: 'mc233', srNo: '232', description: "A manuscript written by Majji W. Tulasidas", accessionNumber: '1527', period: '-', url: '#' },
  { id: 'mc234', srNo: '233', description: "‘Swatantrata Sangram Senani Late Shri Triveni Sahai ke Kuchh Sansmaran’ by Tulsidas Srivastav", accessionNumber: '1563', period: '-', url: '#' },
  { id: 'mc235', srNo: '234', description: "‘Genesis of the Talwars of Ghalla Dher with Brief History’", accessionNumber: '1598', period: '-', url: '#' },
  { id: 'mc236', srNo: '235', description: "Copy of a book entitled Gandhi and South Africa: Principles and Politics, edited by Judith M. Brown and Martin Prozesky", accessionNumber: '1621', period: '-', url: '#' },
  { id: 'mc237', srNo: '236', description: "Copy of The Passive Resistance Movement in South Africa", accessionNumber: '1622', period: '-', url: '#' },
  { id: 'mc238', srNo: '237', description: "Manuscripts by K.C. Mammen Mappillai", accessionNumber: '1805', period: '-', url: '#' },
  { id: 'mc239', srNo: '238', description: "Articles entitled ‘Subhas Chandra and Germany’ by Shivbrat Roy ‘Tripuri Congress Phire Dekha’ by Sumit Mukerjee", accessionNumber: '1866', period: '-', url: '#' },
  { id: 'mc240', srNo: '239', description: "Xerox copies of a Farman", accessionNumber: '771', period: '-', url: '#' },
  { id: 'mc241', srNo: '240', description: "Few pages of Bahi maintained by Pandas at Rameshwaram temple containing the list of visitors’ who visit the temple such as Swaroop Rani (w/o Motilal Nehru), Pandit Madan Mohan Malviya and others", accessionNumber: '1199', period: '-', url: '#' }
];

export default function MiscellaneousCollectionsContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter and Sort items
  const processedItems = useMemo(() => {
    let result = MISCELLANEOUS_DATA.filter((item) =>
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortBy === "az") {
      result.sort((a, b) => a.description.localeCompare(b.description));
    } else if (sortBy === "za") {
      result.sort((a, b) => b.description.localeCompare(a.description));
    }

    return result;
  }, [searchQuery, sortBy]);

  // Reset page when queries change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, sortBy, itemsPerPage]);

  // Pagination calculation
  const totalPages = Math.ceil(processedItems.length / itemsPerPage);
  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return processedItems.slice(startIndex, startIndex + itemsPerPage);
  }, [processedItems, currentPage, itemsPerPage]);

  return (
    <div className="w-full flex flex-col bg-white">
      {/* ── Subpage Hero Banner ── */}
      <ArchivesHeroSlider />

      {/* ── Main List Section ── */}
      <section className="w-full py-12 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Page Heading */}
          <div className="mb-6 text-left">
            <div className="w-12 h-1 bg-[#f37021] mb-2.5" />
            <h2 className={`${spectral.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#052356] tracking-tight`}>
              Miscellaneous Collections
            </h2>
          </div>

          {/* Filter and Search controls */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {/* Search Box */}
            <div className="relative md:col-span-2">
              <input
                type="text"
                placeholder="Search collections..."
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
                <option value="default">Sort: Default Sequence</option>
                <option value="az">Sort: Description (A-Z)</option>
                <option value="za">Sort: Description (Z-A)</option>
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
                    <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider w-24 text-center">Sr No.</th>
                    <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider">Description of the collection</th>
                    <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-center w-64 whitespace-nowrap">Accession Number/List Number</th>
                    <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-center w-48 whitespace-nowrap">Period</th>
                    <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-center w-32">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {paginatedItems.length > 0 ? (
                    paginatedItems.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50/50 transition-colors duration-150">
                        {/* Sr No. */}
                        <td className="py-4 px-6 text-sm text-gray-600 text-center font-medium">
                          {item.srNo}
                        </td>

                        {/* Description */}
                        <td className="py-4 px-6 flex items-start gap-3">
                          <svg className="w-5.5 h-5.5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                          </svg>
                          <a 
                            href={item.url} 
                            className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors leading-snug cursor-pointer"
                          >
                            {item.description}
                          </a>
                        </td>
                        
                        {/* Accession Number */}
                        <td className="py-4 px-6 text-sm text-gray-600 text-center font-medium">
                          {item.accessionNumber === "-" ? "" : item.accessionNumber}
                        </td>

                        {/* Period */}
                        <td className="py-4 px-6 text-sm text-gray-600 text-center font-medium">
                          {item.period === "-" ? "" : item.period}
                        </td>

                        {/* View Action */}
                        <td className="py-4 px-6 text-center">
                          <a
                            href={item.url}
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
                          <p className="text-sm font-medium">No collections found matching your filters.</p>
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
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 bg-white py-3 border-t border-gray-100 px-2 select-none">
              <p className="text-xs text-gray-500 font-medium">
                Showing <span className="font-semibold text-gray-700">{(currentPage - 1) * itemsPerPage + 1}</span> to{' '}
                <span className="font-semibold text-gray-700">
                  {Math.min(currentPage * itemsPerPage, processedItems.length)}
                </span>{' '}
                of <span className="font-semibold text-gray-700">{processedItems.length}</span> entries
              </p>

              <div className="flex items-center gap-1.5 max-w-full">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white transition-colors cursor-pointer flex-shrink-0"
                >
                  Previous
                </button>

                <div 
                  className={`flex items-center gap-1 overflow-x-auto max-w-[130px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-[400px] py-1 px-1 border border-gray-100 rounded-lg bg-gray-50/50 ${styles.pagesContainer}`}
                >
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-8 h-8 rounded-lg text-xs font-semibold transition-all cursor-pointer flex-shrink-0 ${
                        currentPage === pageNum
                          ? 'bg-[#052356] text-white shadow-sm'
                          : 'border border-gray-200 text-gray-600 hover:bg-gray-50 bg-white'
                      }`}
                    >
                      {pageNum}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white transition-colors cursor-pointer flex-shrink-0"
                >
                  Next
                </button>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
