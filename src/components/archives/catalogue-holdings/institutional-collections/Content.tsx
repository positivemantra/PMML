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

interface InstitutionalCollectionItem {
  id: string;
  srNo: string;
  description: string;
  accessionNumber: string;
  url: string;
  period: string;
}

const INSTITUTIONAL_COLLECTIONS_DATA: InstitutionalCollectionItem[] = [
  {
    "id": "ic1",
    "srNo": "1",
    "description": "Reports of Ahmedabad Mill Owners’ Association Microfilm (Reprography)",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1924-1951"
  },
  {
    "id": "ic2",
    "srNo": "1 ( a )",
    "description": "Akhil Bharat Sarva Seva Sangh See under Sarva Seva Sangh",
    "accessionNumber": "NA",
    "url": "#",
    "period": "-"
  },
  {
    "id": "ic3",
    "srNo": "2",
    "description": "All India Committee for Eradication of Illiteracy among Women",
    "accessionNumber": "43",
    "url": "https://pmml.nic.in/downloadInstitutional/248",
    "period": "1985-2002"
  },
  {
    "id": "ic4",
    "srNo": "3",
    "description": "All India Congress Committee",
    "accessionNumber": "1",
    "url": "https://pmml.nic.in/downloadInstitutional/249",
    "period": "1917-1976"
  },
  {
    "id": "ic5",
    "srNo": "3 ( a )",
    "description": "All India Congress Committee VIth Installment",
    "accessionNumber": "3a",
    "url": "https://pmml.nic.in/downloadInstitutional/396",
    "period": "1917-1976"
  },
  {
    "id": "ic6",
    "srNo": "3 ( b )",
    "description": "All India Congress Committee VIIth Installment",
    "accessionNumber": "3b",
    "url": "https://pmml.nic.in/downloadInstitutional/397",
    "period": "1917-1976"
  },
  {
    "id": "ic7",
    "srNo": "4",
    "description": "All India Congress Committee Papers (received from Anand Bhavan)",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1929-1967"
  },
  {
    "id": "ic8",
    "srNo": "5",
    "description": "All India Congress Committee (Supplementary)",
    "accessionNumber": "1",
    "url": "https://pmml.nic.in/downloadInstitutional/251",
    "period": "1917-1969"
  },
  {
    "id": "ic9",
    "srNo": "6",
    "description": "All India Congress Committee (Press Clippings)",
    "accessionNumber": "1-A",
    "url": "https://pmml.nic.in/downloadInstitutional/252",
    "period": "1895-1977"
  },
  {
    "id": "ic10",
    "srNo": "7",
    "description": "All India Hindu Mahasabha",
    "accessionNumber": "8",
    "url": "https://pmml.nic.in/downloadInstitutional/253",
    "period": "1931-1951"
  },
  {
    "id": "ic11",
    "srNo": "8",
    "description": "All India INA Committee",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1946-1947"
  },
  {
    "id": "ic12",
    "srNo": "9",
    "description": "All India Khadi Board, Wardha Microfilm",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1924-1925"
  },
  {
    "id": "ic13",
    "srNo": "10",
    "description": "All India Kisan Sabha Microfilm (Reprography)",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1929-1949"
  },
  {
    "id": "ic14",
    "srNo": "11",
    "description": "All India Muslim League Microfilm (Reprography)",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1915-"
  },
  {
    "id": "ic15",
    "srNo": "12",
    "description": "All India Shia Conference Microfilm (Reprography)",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1907-1941"
  },
  {
    "id": "ic16",
    "srNo": "13",
    "description": "All India Spinners’ Association Microfilm",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1925-1953"
  },
  {
    "id": "ic17",
    "srNo": "14",
    "description": "All India States’ People’s Conference",
    "accessionNumber": "3",
    "url": "https://pmml.nic.in/downloadInstitutional/265",
    "period": "1923-1949"
  },
  {
    "id": "ic18",
    "srNo": "15",
    "description": "All India Trade Union Congress",
    "accessionNumber": "18",
    "url": "https://pmml.nic.in/downloadInstitutional/266",
    "period": "1925-1966"
  },
  {
    "id": "ic19",
    "srNo": "16",
    "description": "All India Village Industries Association Microfilm",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1934-1950"
  },
  {
    "id": "ic20",
    "srNo": "17",
    "description": "All India Women’s Conference",
    "accessionNumber": "38",
    "url": "https://pmml.nic.in/downloadInstitutional/268",
    "period": "1920-1987"
  },
  {
    "id": "ic21",
    "srNo": "18",
    "description": "Allahabad Municipal Board",
    "accessionNumber": "24",
    "url": "https://pmml.nic.in/downloadInstitutional/269",
    "period": "1921-1925"
  },
  {
    "id": "ic22",
    "srNo": "19",
    "description": "American Baptist Foreign Mission Records Microfilm",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1816-1956"
  },
  {
    "id": "ic23",
    "srNo": "20",
    "description": "American - Marathi Mission Microfilm (Reprography)",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1813-1928"
  },
  {
    "id": "ic24",
    "srNo": "21",
    "description": "Anjuman Islamia Microfilm (Reprography)",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1889-1896"
  },
  {
    "id": "ic25",
    "srNo": "21 ( a )",
    "description": "Apartheid, Committee Against See under Reddy, E. S.",
    "accessionNumber": "NA",
    "url": "#",
    "period": "-"
  },
  {
    "id": "ic26",
    "srNo": "22",
    "description": "Ashram Pratishthan, Sevagram Microfilm",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1941-1960"
  },
  {
    "id": "ic27",
    "srNo": "23",
    "description": "Assam Pradesh Congress Committee",
    "accessionNumber": "28",
    "url": "https://pmml.nic.in/downloadInstitutional/275",
    "period": "1937-1978"
  },
  {
    "id": "ic28",
    "srNo": "24",
    "description": "Bengal Coal Company Microfilm (Reprography)",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1885-1917"
  },
  {
    "id": "ic29",
    "srNo": "25",
    "description": "Bengal Legislative Council Debates Microfilm (Reprography)",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1940-1941"
  },
  {
    "id": "ic30",
    "srNo": "26",
    "description": "Bengal Political Department Microfilm",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1900-1925"
  },
  {
    "id": "ic31",
    "srNo": "27",
    "description": "Bengal Relief Committee Microfilm",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1943-1945"
  },
  {
    "id": "ic32",
    "srNo": "27 ( a )",
    "description": "Bhaiya Records, Bikaner See under Mohta, Karnidan Singh",
    "accessionNumber": "NA",
    "url": "#",
    "period": "-"
  },
  {
    "id": "ic33",
    "srNo": "28",
    "description": "Bombay Pradesh Congress Committee",
    "accessionNumber": "23",
    "url": "https://pmml.nic.in/downloadInstitutional/281",
    "period": "1926-1967"
  },
  {
    "id": "ic34",
    "srNo": "29",
    "description": "Bombay Presidency Association Microfilm",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1885-1922"
  },
  {
    "id": "ic35",
    "srNo": "30",
    "description": "British Indian Association, Awadh",
    "accessionNumber": "10",
    "url": "https://pmml.nic.in/downloadInstitutional/283",
    "period": "1861-1952"
  },
  {
    "id": "ic36",
    "srNo": "31",
    "description": "British Indian Association, Calcutta Microfilm",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1852-1932"
  },
  {
    "id": "ic37",
    "srNo": "32",
    "description": "British Parliament Proceedings Microfilm",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1890-1937"
  },
  {
    "id": "ic38",
    "srNo": "33",
    "description": "Burma Congress Committee Microfilm (Reprography)",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1934-1939"
  },
  {
    "id": "ic39",
    "srNo": "34",
    "description": "Cabinet Papers",
    "accessionNumber": "20",
    "url": "https://pmml.nic.in/downloadInstitutional/287",
    "period": "1939-1945"
  },
  {
    "id": "ic40",
    "srNo": "35",
    "description": "(The) Civil Disobedience Movement Microfilm (Reprography)",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1940-1941"
  },
  {
    "id": "ic41",
    "srNo": "36",
    "description": "Civil Justice Committee Microfilm (Reprography)",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1924-1925"
  },
  {
    "id": "ic42",
    "srNo": "37",
    "description": "Civil Liberties and Human Rights",
    "accessionNumber": "33",
    "url": "https://pmml.nic.in/downloadInstitutional/290",
    "period": "1874-2005"
  },
  {
    "id": "ic43",
    "srNo": "38",
    "description": "Coimbatore Mill Workers Union",
    "accessionNumber": "41",
    "url": "https://pmml.nic.in/downloadInstitutional/291",
    "period": "1952-1963"
  },
  {
    "id": "ic44",
    "srNo": "39",
    "description": "Collected Works of Mahatma Gandhi, papers received from",
    "accessionNumber": "190",
    "url": "#",
    "period": "1849-1948"
  },
  {
    "id": "ic45",
    "srNo": "40",
    "description": "Committee for the Protection of Democratic Rights",
    "accessionNumber": "35",
    "url": "https://pmml.nic.in/downloadInstitutional/293",
    "period": "1980-1987"
  },
  {
    "id": "ic46",
    "srNo": "41",
    "description": "Communist Party of India Partly on microfilm",
    "accessionNumber": "83",
    "url": "#",
    "period": "1924-1966"
  },
  {
    "id": "ic47",
    "srNo": "42",
    "description": "Communist Party of India (Marxist) Microfilm (Reprography)",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1964-1980"
  },
  {
    "id": "ic48",
    "srNo": "43",
    "description": "Congress Socialist Party Microfilm (Reprography)",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1935-1940"
  },
  {
    "id": "ic49",
    "srNo": "44",
    "description": "D. A. V. College Trust and Management Society",
    "accessionNumber": "13",
    "url": "https://pmml.nic.in/downloadInstitutional/297",
    "period": "1886-1947"
  },
  {
    "id": "ic50",
    "srNo": "45",
    "description": "Deccan Sabha Also on microfilm (Reprography)",
    "accessionNumber": "22",
    "url": "#",
    "period": "1896-1972"
  },
  {
    "id": "ic51",
    "srNo": "46",
    "description": "Delhi Police Special Branch, non-current records Part I",
    "accessionNumber": "30",
    "url": "https://pmml.nic.in/downloadInstitutional/299",
    "period": "1915-1976"
  },
  {
    "id": "ic52",
    "srNo": "46",
    "description": "Delhi police special branch records (I To X Inst.)",
    "accessionNumber": "30",
    "url": "https://pmml.nic.in/downloadInstitutional/402",
    "period": "1861-1960"
  },
  {
    "id": "ic53",
    "srNo": "46 ( a )",
    "description": "Delhi Police Special Branch, non-current records Part II",
    "accessionNumber": "30",
    "url": "https://pmml.nic.in/downloadInstitutional/398",
    "period": "1915-1976"
  },
  {
    "id": "ic54",
    "srNo": "46 ( b )",
    "description": "Delhi Police special Branch records (I to X Inst.)",
    "accessionNumber": "30",
    "url": "https://pmml.nic.in/downloadInstitutional/403",
    "period": "1932-1998"
  },
  {
    "id": "ic55",
    "srNo": "47",
    "description": "East – India House Records Microfilm (Reprography)",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1820-1826"
  },
  {
    "id": "ic56",
    "srNo": "48",
    "description": "Federal Papers",
    "accessionNumber": "25",
    "url": "https://pmml.nic.in/downloadInstitutional/301",
    "period": "1935-"
  },
  {
    "id": "ic57",
    "srNo": "49",
    "description": "F I Rs from Police Headquarters, Delhi - Part I",
    "accessionNumber": "30",
    "url": "https://pmml.nic.in/downloadInstitutional/302",
    "period": "1861-1960"
  },
  {
    "id": "ic58",
    "srNo": "49 ( a )",
    "description": "Gandhian Institutions at Sevagram, Wardha Microfilm (Reprography) See under Sl.No. 9, 13, 16, 22, 50, 53, 54, 57, 80, 82, 83, 108, 114, 115",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1924-1966"
  },
  {
    "id": "ic59",
    "srNo": "49 ( b )",
    "description": "F I Rs from Police Headquarters, Delhi - Part II",
    "accessionNumber": "30",
    "url": "https://pmml.nic.in/downloadInstitutional/399",
    "period": "1861-1960"
  },
  {
    "id": "ic60",
    "srNo": "50",
    "description": "Gandhi Seva Sangh, Wardha Microfilm",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1929-1948"
  },
  {
    "id": "ic61",
    "srNo": "51",
    "description": "Gandhi Smarak Sangrahalaya, Sabarmati Ashram, Ahmedabad Microfilm (Reprography)",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1901-1948"
  },
  {
    "id": "ic62",
    "srNo": "52",
    "description": "German Central Archives, Potsdam, documents relating to India Microfilm",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1941-1944"
  },
  {
    "id": "ic63",
    "srNo": "53",
    "description": "Goseva Sangh, Wardha Microfilm",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1942-1950"
  },
  {
    "id": "ic64",
    "srNo": "54",
    "description": "Gram Seva Mandal, Wardha Microfilm",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1934-1960"
  },
  {
    "id": "ic65",
    "srNo": "55",
    "description": "Gurukul Kangari Vishvavidyalaya Microfilm (Reprography)",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1922-1982"
  },
  {
    "id": "ic66",
    "srNo": "56",
    "description": "Hindu Law Committee Microfilm (Reprography)",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1945-"
  },
  {
    "id": "ic67",
    "srNo": "56 ( a )",
    "description": "Hindustan Socialist Republican Army See under Miscellaneous Items Sl.No.26",
    "accessionNumber": "NA",
    "url": "#",
    "period": "-"
  },
  {
    "id": "ic68",
    "srNo": "57",
    "description": "Hindustani Talimi Sangh Also on Microfilm",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1937-1960"
  },
  {
    "id": "ic69",
    "srNo": "58",
    "description": "Home Rule League",
    "accessionNumber": "5",
    "url": "https://pmml.nic.in/downloadInstitutional/317",
    "period": "1916-1921"
  },
  {
    "id": "ic70",
    "srNo": "59",
    "description": "India Office Records, London Microfilm (Reprography)",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1907-1930"
  },
  {
    "id": "ic71",
    "srNo": "59 ( a )",
    "description": "India League See under Krishna Menon papers and Miscellaneous Items Sl.No.69 (Also on microfilm (Reprography)",
    "accessionNumber": "NA",
    "url": "#",
    "period": "-"
  },
  {
    "id": "ic72",
    "srNo": "60",
    "description": "Indian Association Microfilm",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1878-1948"
  },
  {
    "id": "ic73",
    "srNo": "61",
    "description": "Indian freedom struggle, documents available in political archives, Bonn Microfilm in German",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1914-1944"
  },
  {
    "id": "ic74",
    "srNo": "62",
    "description": "Indian Merchants’ Chamber, Bombay",
    "accessionNumber": "17",
    "url": "https://pmml.nic.in/downloadInstitutional/322",
    "period": "1938-1971"
  },
  {
    "id": "ic75",
    "srNo": "63",
    "description": "Indian National Social Conference Microfilm",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1889-1920"
  },
  {
    "id": "ic76",
    "srNo": "64",
    "description": "Indian Records of United Society for Propagation of the Gospel Microfilm",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1840-1900"
  },
  {
    "id": "ic77",
    "srNo": "65",
    "description": "Indore Rajya Praja Mandal",
    "accessionNumber": "6",
    "url": "https://pmml.nic.in/downloadInstitutional/325",
    "period": "1921-1947"
  },
  {
    "id": "ic78",
    "srNo": "66",
    "description": "Jaipur State Praja Mandal",
    "accessionNumber": "19",
    "url": "https://pmml.nic.in/downloadInstitutional/326",
    "period": "1940-1949"
  },
  {
    "id": "ic79",
    "srNo": "67",
    "description": "Jamaitul - Ulema - i - Hind Microfilm",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1921-1978"
  },
  {
    "id": "ic80",
    "srNo": "68",
    "description": "Janata Party Ist Installment",
    "accessionNumber": "46",
    "url": "https://pmml.nic.in/downloadInstitutional/328",
    "period": "1971-1992"
  },
  {
    "id": "ic81",
    "srNo": "68 ( a )",
    "description": "Janata Party IInd Installment",
    "accessionNumber": "46",
    "url": "https://pmml.nic.in/downloadInstitutional/400",
    "period": "1971-1992"
  },
  {
    "id": "ic82",
    "srNo": "69",
    "description": "Jat Gazette On Microfilm Received with the papers of Ram Singh Jakhar",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1966-1968"
  },
  {
    "id": "ic83",
    "srNo": "70",
    "description": "J.P. Lohia Rameshwar Memorial Trust Acc. Nos. 1409 and 1414",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1942-"
  },
  {
    "id": "ic84",
    "srNo": "71",
    "description": "Kalpavriksh",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1979-2008"
  },
  {
    "id": "ic85",
    "srNo": "72",
    "description": "Kasturba Gandhi National Memorial Trust Microfilm",
    "accessionNumber": "16",
    "url": "#",
    "period": "1944-1970"
  },
  {
    "id": "ic86",
    "srNo": "73",
    "description": "Kerala Kaumudi, Prabodhini & Navasakthi Acc. No. 1736",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1936-1966"
  },
  {
    "id": "ic87",
    "srNo": "74",
    "description": "Lahore Conspiracy Case Proceedings",
    "accessionNumber": "29",
    "url": "https://pmml.nic.in/downloadInstitutional/334",
    "period": "1930-"
  },
  {
    "id": "ic88",
    "srNo": "75",
    "description": "Local Government Fortnightly Report on the Political Situation in Assam, Bengal, Central Provinces and Berar, Delhi, Madras, N.W.F.P, Punjab, U.P. Microfilm",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1929-1934"
  },
  {
    "id": "ic89",
    "srNo": "76",
    "description": "Madhya Bharat Hindi Sahitya Samiti",
    "accessionNumber": "42",
    "url": "https://pmml.nic.in/downloadInstitutional/336",
    "period": "1915-1955"
  },
  {
    "id": "ic90",
    "srNo": "77",
    "description": "Madhya Pradesh Congress Committee Part I",
    "accessionNumber": "4",
    "url": "https://pmml.nic.in/downloadInstitutional/337",
    "period": "1922-1957"
  },
  {
    "id": "ic91",
    "srNo": "77 ( a )",
    "description": "Madhya Pradesh Congress Committee Part II",
    "accessionNumber": "4",
    "url": "https://pmml.nic.in/downloadInstitutional/401",
    "period": "1922-1957"
  },
  {
    "id": "ic92",
    "srNo": "78",
    "description": "Madras Legislative Council, Recommendations of Microfilm (Reprography)",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1929-"
  },
  {
    "id": "ic93",
    "srNo": "79",
    "description": "Madras Mahajana Sabha",
    "accessionNumber": "9",
    "url": "https://pmml.nic.in/downloadInstitutional/339",
    "period": "1894-1927"
  },
  {
    "id": "ic94",
    "srNo": "80",
    "description": "Magan Sangrahalaya Microfilm",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1938-1947"
  },
  {
    "id": "ic95",
    "srNo": "81",
    "description": "Mahar Movement Acc. No. 678",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1835-1906"
  },
  {
    "id": "ic96",
    "srNo": "81 ( a )",
    "description": "Maharashtra Pradesh Congress Committee, Poona See under Miscellaneous Item Sl.No.105",
    "accessionNumber": "NA",
    "url": "#",
    "period": "-"
  },
  {
    "id": "ic97",
    "srNo": "82",
    "description": "Maharogi, Seva Samiti, Duttpur, Wardha Microfilm",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1936-1974"
  },
  {
    "id": "ic98",
    "srNo": "83",
    "description": "Mahila Ashram, Wardha Microfilm",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1924-1973"
  },
  {
    "id": "ic99",
    "srNo": "84",
    "description": "Maniben Kara Institute, Mumbai Acc. No. 1930",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1989-1996"
  },
  {
    "id": "ic100",
    "srNo": "85",
    "description": "‘Manushi’ Office Records",
    "accessionNumber": "37",
    "url": "https://pmml.nic.in/downloadInstitutional/346",
    "period": "1978-2003"
  },
  {
    "id": "ic101",
    "srNo": "86",
    "description": "Marwari Association, Calcutta Microfilm (Reprography)",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1914-1943"
  },
  {
    "id": "ic102",
    "srNo": "86 ( a )",
    "description": "Material Received from South Asia Research and Resource Centre – SARRC, Islamabad See under Miscellaneous Items S.No. 99, Acc. No.1952",
    "accessionNumber": "NA",
    "url": "#",
    "period": "-"
  },
  {
    "id": "ic103",
    "srNo": "87",
    "description": "Mazdoor Kisan Shakti Sangathan, Rajasthan",
    "accessionNumber": "44",
    "url": "https://pmml.nic.in/downloadInstitutional/349",
    "period": "1991-2008"
  },
  {
    "id": "ic104",
    "srNo": "88",
    "description": "Meerut Conspiracy Case Proceedings Microfilm Also see Acc. No. 598 and 599",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1929-1933"
  },
  {
    "id": "ic105",
    "srNo": "89",
    "description": "Mehrauli Group of Action India and Sadbhavana Trust",
    "accessionNumber": "50",
    "url": "https://pmml.nic.in/downloadInstitutional/351",
    "period": "1997-2010"
  },
  {
    "id": "ic106",
    "srNo": "89 ( a )",
    "description": "Menoka Village Welfare Association See under Mazumdar, Shudha",
    "accessionNumber": "NA",
    "url": "#",
    "period": "-"
  },
  {
    "id": "ic107",
    "srNo": "89 ( b )",
    "description": "Mizo National Front See under Kaushal, Swaraj",
    "accessionNumber": "NA",
    "url": "#",
    "period": "-"
  },
  {
    "id": "ic108",
    "srNo": "90",
    "description": "Moscow Archives, Moscow Microfilm (Reprography)",
    "accessionNumber": "NA",
    "url": "#",
    "period": "-"
  },
  {
    "id": "ic109",
    "srNo": "91",
    "description": "Municipal Mazdoor Union, Bombay Microfilm (Reprography)",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1957-1986"
  },
  {
    "id": "ic110",
    "srNo": "92",
    "description": "Namboodiri Yogakshema Sabha Acc. No.790",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1909-1918"
  },
  {
    "id": "ic111",
    "srNo": "93",
    "description": "Natal Government House, correspondence relating to Indian question Microfilm",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1897-1910"
  },
  {
    "id": "ic112",
    "srNo": "94",
    "description": "National Archives of India – Donated collections namely INA, Meerut Conspiracy Case, Virendranath Chattopadhyay Soft Copy",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1917-1945"
  },
  {
    "id": "ic113",
    "srNo": "95",
    "description": "National Council of Women in India",
    "accessionNumber": "14",
    "url": "https://pmml.nic.in/downloadInstitutional/359",
    "period": "1938-1969"
  },
  {
    "id": "ic114",
    "srNo": "96",
    "description": "National Mohammedan Associations Microfilm (Reprography)",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1882-"
  },
  {
    "id": "ic115",
    "srNo": "97",
    "description": "Natarang Pratishthan",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1968-2010"
  },
  {
    "id": "ic116",
    "srNo": "98",
    "description": "Pataudi State Praja Mandal",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1939-1940"
  },
  {
    "id": "ic117",
    "srNo": "99",
    "description": "Peasant Movement Pamphlets and reports",
    "accessionNumber": "190",
    "url": "#",
    "period": "1929-1949"
  },
  {
    "id": "ic118",
    "srNo": "99 ( a )",
    "description": "Planning Commission See under Mitra, Asok",
    "accessionNumber": "NA",
    "url": "#",
    "period": "-"
  },
  {
    "id": "ic119",
    "srNo": "100",
    "description": "Poona District Congress Committee",
    "accessionNumber": "2",
    "url": "https://pmml.nic.in/downloadInstitutional/365",
    "period": "1908-1922"
  },
  {
    "id": "ic120",
    "srNo": "101",
    "description": "Praja Socialist Party Microfilm (Reprography)",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1949-1967"
  },
  {
    "id": "ic121",
    "srNo": "102",
    "description": "Proscribed Literature Soft copy only Acc. No. 2154",
    "accessionNumber": "NA",
    "url": "#",
    "period": "-"
  },
  {
    "id": "ic122",
    "srNo": "102 ( a )",
    "description": "Public Interest Litigation in India See under Civil Liberties and Human Rights",
    "accessionNumber": "NA",
    "url": "#",
    "period": "-"
  },
  {
    "id": "ic123",
    "srNo": "103",
    "description": "Punjab Conspiracy Case Proceedings Microfilm (Reprography)",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1930-1933"
  },
  {
    "id": "ic124",
    "srNo": "104",
    "description": "Punjab Photo Service Acc. No. 2010A",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1960-1982"
  },
  {
    "id": "ic125",
    "srNo": "105",
    "description": "Quarterly Survey of the Political and Constitutional Position in British India Microfilm",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1937-1946"
  },
  {
    "id": "ic126",
    "srNo": "106",
    "description": "Swantantra Party",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1959-2007"
  },
  {
    "id": "ic127",
    "srNo": "106",
    "description": "Quit India Movement, papers relating to",
    "accessionNumber": "190",
    "url": "https://pmml.nic.in/downloadInstitutional/372",
    "period": "1942-1943"
  },
  {
    "id": "ic128",
    "srNo": "107",
    "description": "Rashtra Bhasha Prachar Samiti, Wardha Microfilm",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1938-1963"
  },
  {
    "id": "ic129",
    "srNo": "108",
    "description": "Revolutionary patriotic activities in the pre - partitioned Punjab Microfilm",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1901-1935"
  },
  {
    "id": "ic130",
    "srNo": "109",
    "description": "Rewari Town Congress Committee",
    "accessionNumber": "22A",
    "url": "https://pmml.nic.in/downloadInstitutional/375",
    "period": "1944-1956"
  },
  {
    "id": "ic131",
    "srNo": "110",
    "description": "Sachar Committee Report",
    "accessionNumber": "45",
    "url": "https://pmml.nic.in/downloadInstitutional/376",
    "period": "1948-2006"
  },
  {
    "id": "ic132",
    "srNo": "111",
    "description": "Sampradaan Indian Centre for Philanthropy (SICP)",
    "accessionNumber": "51",
    "url": "https://pmml.nic.in/downloadInstitutional/377",
    "period": "1990-2010"
  },
  {
    "id": "ic133",
    "srNo": "111 ( a )",
    "description": "Sarva Seva Sangh Microfilm See under Magan Sangrahalaya",
    "accessionNumber": "NA",
    "url": "#",
    "period": "-"
  },
  {
    "id": "ic134",
    "srNo": "112",
    "description": "Servants of India Society",
    "accessionNumber": "21",
    "url": "https://pmml.nic.in/downloadInstitutional/379",
    "period": "1879-1976"
  },
  {
    "id": "ic135",
    "srNo": "113",
    "description": "Sevagram Ashram Pratishthan Microfilm",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1941-1960"
  },
  {
    "id": "ic136",
    "srNo": "114",
    "description": "Shiksha Mandal, Wardha Microfilm",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1912-1966"
  },
  {
    "id": "ic137",
    "srNo": "115",
    "description": "Socialist Party Also see under Pitti, Badri Vishal",
    "accessionNumber": "39",
    "url": "#",
    "period": "1927-1967"
  },
  {
    "id": "ic138",
    "srNo": "115 ( a )",
    "description": "Socialist Party of India See under Prem Bhasin List No.17A Also on microfilm (Reprography)",
    "accessionNumber": "NA",
    "url": "#",
    "period": "-"
  },
  {
    "id": "ic139",
    "srNo": "115 ( b )",
    "description": "Standing Sectional Committee of Prison Reforms See under Mazumdar, Shudha",
    "accessionNumber": "NA",
    "url": "#",
    "period": "-"
  },
  {
    "id": "ic140",
    "srNo": "116",
    "description": "Swantantra Party",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1959-2007"
  },
  {
    "id": "ic141",
    "srNo": "117",
    "description": "Tamil Nadu Congress Committee",
    "accessionNumber": "31",
    "url": "https://pmml.nic.in/downloadInstitutional/387",
    "period": "1906-1977"
  },
  {
    "id": "ic142",
    "srNo": "118",
    "description": "Tamralipta Swadhinata Sangram Itihas Committee",
    "accessionNumber": "36",
    "url": "https://pmml.nic.in/downloadInstitutional/388",
    "period": "1924-1983"
  },
  {
    "id": "ic143",
    "srNo": "119",
    "description": "Textile Labour Association, Ahmedabad Microfilm",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1918-1970"
  },
  {
    "id": "ic144",
    "srNo": "120",
    "description": "Tilak Maharashtra Vidyapeeth, Pune Microfilm (Reprography)",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1922-1923"
  },
  {
    "id": "ic145",
    "srNo": "121",
    "description": "United Theological College, Bangalore Microfilm (Reprography)",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1816-1970"
  },
  {
    "id": "ic146",
    "srNo": "122",
    "description": "U. P. Congress Committee Microfilm",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1928-1965"
  },
  {
    "id": "ic147",
    "srNo": "123",
    "description": "Unnayan Group",
    "accessionNumber": "48",
    "url": "#",
    "period": "1977-2008"
  },
  {
    "id": "ic148",
    "srNo": "124",
    "description": "U. P. Distress Relief Committee Acc. No. 940",
    "accessionNumber": "NA",
    "url": "#",
    "period": "1936-1946"
  },
  {
    "id": "ic149",
    "srNo": "125",
    "description": "U. P. Zamindar Association, Muzaffarnagar",
    "accessionNumber": "15",
    "url": "https://pmml.nic.in/downloadInstitutional/395",
    "period": "1896-1949"
  }
];

export default function InstitutionalCollectionsContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter and Sort items
  const processedItems = useMemo(() => {
    let result = INSTITUTIONAL_COLLECTIONS_DATA.filter((item) =>
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortBy === "az") {
      result.sort((a, b) => a.description.localeCompare(b.description));
    } else if (sortBy === "za") {
      result.sort((a, b) => b.description.localeCompare(a.description));
    }

    return result;
  }, [searchQuery, sortBy]);

  // Reset page when query settings change
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
              Institutional Collections
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
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
                    <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-center w-64 whitespace-nowrap">Roll No. / Ref No.</th>
                    <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-center w-48">Period</th>
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
                          {item.url !== "#" ? (
                            <a 
                              href={item.url} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors leading-snug cursor-pointer"
                            >
                              {item.description}
                            </a>
                          ) : (
                            <span className="text-sm font-semibold text-gray-700 leading-snug">
                              {item.description}
                            </span>
                          )}
                        </td>
                        
                        {/* Roll No / Ref No */}
                        <td className="py-4 px-6 text-sm text-gray-600 text-center font-medium">
                          {item.accessionNumber === "-" ? "" : item.accessionNumber}
                        </td>

                        {/* Period */}
                        <td className="py-4 px-6 text-sm text-gray-600 text-center font-medium">
                          {item.period === "-" ? "" : item.period}
                        </td>

                        {/* View Action */}
                        <td className="py-4 px-6 text-center">
                          {item.url !== "#" ? (
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
                          ) : (
                            <span className="inline-flex items-center justify-center gap-1 px-4 py-1.5 rounded-full border border-gray-200 text-gray-400 text-xs font-bold tracking-wide select-none cursor-not-allowed">
                              <span>-</span>
                            </span>
                          )}
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
