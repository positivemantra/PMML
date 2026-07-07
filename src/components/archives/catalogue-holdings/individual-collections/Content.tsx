"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { Spectral } from "next/font/google";
import ArchivesHeroSlider from "@/components/archives/ArchivesHeroSlider";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

interface IndividualCollectionItem {
  id: string;
  srNo: string;
  description: string;
  digitalArchive: string;
  period: string;
  url: string;
}

const INDIVIDUAL_COLLECTIONS_DATA: IndividualCollectionItem[] = [
  { id: 'ic1', srNo: '1', description: "Abdul Bari (Maulana)", digitalArchive: '436', period: '1918-1924', url: '#' },
  { id: 'ic2', srNo: '2', description: "Abdul Majid Khan", digitalArchive: '190', period: '1940-1949', url: '#' },
  { id: 'ic3', srNo: '3', description: "Abhyananda (Swami)", digitalArchive: '190', period: '1933-1936', url: '#' },
  { id: 'ic4', srNo: '4', description: "Abhyankar, G. R.", digitalArchive: '168', period: '1900-1936', url: '#' },
  { id: 'ic5', srNo: '5', description: "Abhyankar, M. B.", digitalArchive: '190', period: '1926-', url: '#' },
  { id: 'ic6', srNo: '6', description: "Abid Hussain (Soft copy (DVD), Acc. No. 2108)", digitalArchive: 'NA', period: '1995-2012', url: '#' },
  { id: 'ic7', srNo: '7', description: "Abraham, Abu", digitalArchive: '541', period: '1950-2001', url: '#' },
  { id: 'ic8', srNo: '7 (a)', description: "Abul Kalam Azad (Maulana) See under Ajmal Khan", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic9', srNo: '8', description: "Achal Singh (Seth)", digitalArchive: '190', period: '1951-1964', url: '#' },
  { id: 'ic10', srNo: '9', description: "Acharya, M. K.", digitalArchive: '291', period: '1926-1935', url: '#' },
  { id: 'ic11', srNo: '10', description: "Agarkar, G. G. Also See Acc. No. 1310", digitalArchive: '190(V)', period: '1882-1896', url: '#' },
  { id: 'ic12', srNo: '11', description: "Agarkar, S. M.", digitalArchive: '190', period: '1932-1953', url: '#' },
  { id: 'ic13', srNo: '12', description: "Agarwal, Ram Kumar Acc. No. 1359", digitalArchive: 'NA', period: '1947-1987', url: '#' },
  { id: 'ic14', srNo: '13', description: "Agarwal, Shriman Narayan On Microfilm Also", digitalArchive: 'NA', period: '1928-1978', url: '#' },
  { id: 'ic15', srNo: '14', description: "Agarwala, Jyotiprosad", digitalArchive: '299', period: '1928-1976', url: '#' },
  { id: 'ic16', srNo: '15', description: "Ahluwalia, M. L.", digitalArchive: '448', period: '1923-1990', url: '#' },
  { id: 'ic17', srNo: '16', description: "Aiyar, C. P. Ramaswami Microfilm", digitalArchive: 'NA', period: '1913-1966', url: '#' },
  { id: 'ic18', srNo: '17', description: "Aiyar, V. V. S.", digitalArchive: '152', period: '1907-1925', url: '#' },
  { id: 'ic19', srNo: '18', description: "Aiyer, P. S. Sivaswamy", digitalArchive: '85', period: '1922-1937', url: '#' },
  { id: 'ic20', srNo: '19', description: "Ajazi, Maghfoor A. Acc. 718, 729, 740, 793", digitalArchive: 'NA', period: '1921-1992', url: '#' },
  { id: 'ic21', srNo: '20', description: "Ajmal Khan Papers related to Maulana Abul Kalam Azad", digitalArchive: '190(lV', period: '1938-1955', url: '#' },
  { id: 'ic22', srNo: '21', description: "Ajudhianath", digitalArchive: '190XlV', period: '1901-2002', url: '#' },
  { id: 'ic23', srNo: '22', description: "Alexander, Horace G.", digitalArchive: '20', period: '1927-1954', url: '#' },
  { id: 'ic24', srNo: '22 (a)', description: "Ali, Salim", digitalArchive: '319', period: '1908-1987', url: '#' },
  { id: 'ic25', srNo: '23', description: "Alvares, Alice Acc. No. 1931", digitalArchive: 'NA', period: '1942-2002', url: '#' },
  { id: 'ic26', srNo: '24', description: "Amar Singh (Chaudhary)", digitalArchive: '158', period: '1964-1977', url: '#' },
  { id: 'ic27', srNo: '25', description: "Amar Singh of Kanota (Maj. Gen.) (Microfilm)", digitalArchive: 'NA', period: '1898-1942', url: '#' },
  { id: 'ic28', srNo: '26', description: "Ambedkar, B.R. Microfilm, Also see Acc. No. 699", digitalArchive: 'NA', period: '1916-1956', url: '#' },
  { id: 'ic29', srNo: '27', description: "Ambujammal (Smt.)", digitalArchive: '86', period: '1931-1971', url: '#' },
  { id: 'ic30', srNo: '28', description: "Ammal, Subbalakshmi Acc. No. 1317", digitalArchive: 'NA', period: '1924-1948', url: '#' },
  { id: 'ic31', srNo: '29', description: "Amrit Kaur (Raj Kumari)", digitalArchive: '14', period: '1924-1963', url: '#' },
  { id: 'ic32', srNo: '30', description: "Amrita Pritam Acc. No. 1907 & 1980", digitalArchive: 'NA', period: '1986-1987', url: '#' },
  { id: 'ic33', srNo: '31', description: "Amtul Salam (Bibi)", digitalArchive: '145', period: '1931-1948', url: '#' },
  { id: 'ic34', srNo: '32', description: "Anand Kumar", digitalArchive: '613', period: '1946-1978', url: '#' },
  { id: 'ic35', srNo: '32 (a)', description: "Anandi Devi See under miscellaneous items Sl.No.40", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic36', srNo: '33', description: "Aney, M. S.", digitalArchive: '109', period: '1921-1968', url: '#' },
  { id: 'ic37', srNo: '34', description: "Ansari, M. A. Also on microfilm , Acc.No. 672(a), 700, 702, 988", digitalArchive: 'NA', period: '1911-1935', url: '#' },
  { id: 'ic38', srNo: '35', description: "Antrolikar, K. B.", digitalArchive: '376', period: '1930-1979', url: '#' },
  { id: 'ic39', srNo: '36', description: "Arora, Leela Acc. No. 1825", digitalArchive: 'NA', period: '1972-1986', url: '#' },
  { id: 'ic40', srNo: '37', description: "Arora, Narain Prasad", digitalArchive: '169', period: '1906-1972', url: '#' },
  { id: 'ic41', srNo: '38', description: "Arora, Pritam", digitalArchive: '512', period: '1963-2005', url: '#' },
  { id: 'ic42', srNo: '39', description: "Arya, Baldev Singh", digitalArchive: '381', period: '1939-1951', url: '#' },
  { id: 'ic43', srNo: '40', description: "Asaf Ali, Aruna See Asaf Ali Also", digitalArchive: '190', period: '1944-1946', url: '#' },
  { id: 'ic44', srNo: '41', description: "Asaf Ali, M. Also on microfilm (Reprography)", digitalArchive: '190', period: '1943-1944', url: '#' },
  { id: 'ic45', srNo: '42', description: "Asawa, Gokul Lal", digitalArchive: '227', period: '1920-1980', url: '#' },
  { id: 'ic46', srNo: '43', description: "Ashraf, K. M. Microfilm (Reprography)", digitalArchive: 'NA', period: '1937-1960', url: '#' },
  { id: 'ic47', srNo: '44', description: "Ashwini Kumar Acc. No. 1900, Closed with clause", digitalArchive: 'NA', period: '1984-', url: '#' },
  { id: 'ic48', srNo: '45', description: "Atma Charan ((Gandhi Murder Case Volumes) See Ganpat Rai papers also)", digitalArchive: '190', period: '1948-', url: '#' },
  { id: 'ic49', srNo: '46', description: "(Sri) Aurobindo’s Services at Baroda - Selections from the Baroda Record Office Microfilm", digitalArchive: 'NA', period: '1893-1912', url: '#' },
  { id: 'ic50', srNo: '47', description: "Austin, Henry (Dr.)", digitalArchive: '310', period: '1938-1987', url: '#' },
  { id: 'ic51', srNo: '48', description: "Ayyangar, Ananthasayanam", digitalArchive: 'NA', period: '1949-1973', url: '#' },
  { id: 'ic52', srNo: '49', description: "Ayyangar, N. Gopalaswamy", digitalArchive: '470', period: '1882-1953', url: '#' },
  { id: 'ic53', srNo: '49 (a)', description: "Azad, Abul Kalam", digitalArchive: '190', period: '1938-1955', url: '#' },
  { id: 'ic54', srNo: '50', description: "Azad, Prithvi Singh", digitalArchive: '132', period: '1938-1974', url: '#' },
  { id: 'ic55', srNo: '51', description: "Bagaitkar, Sadashiv", digitalArchive: '319A', period: '1942-1946', url: '#' },
  { id: 'ic56', srNo: '52', description: "Bahuguna, H. N.", digitalArchive: 'NA', period: '1947-1992', url: '#' },
  { id: 'ic57', srNo: '53', description: "Baig, Rashid Ali", digitalArchive: '584', period: '1903-1966', url: '#' },
  { id: 'ic58', srNo: '54', description: "Bajaj, Jamnalal (Seth)", digitalArchive: '124', period: '1912-1946', url: '#' },
  { id: 'ic59', srNo: '55', description: "Bajaj, Kamalnayan", digitalArchive: '406', period: '1942-1979', url: '#' },
  { id: 'ic60', srNo: '56', description: "Bajaj, Rahul", digitalArchive: '587', period: '1995-2011', url: '#' },
  { id: 'ic61', srNo: '57', description: "Bajaj, Ramkrishna", digitalArchive: '407', period: '1931-1994', url: '#' },
  { id: 'ic62', srNo: '58', description: "Bajpai, Ramlal B.", digitalArchive: '190XlX', period: '1944-1962', url: '#' },
  { id: 'ic63', srNo: '59', description: "Bakht, Sikander", digitalArchive: '497', period: '1972-2004', url: '#' },
  { id: 'ic64', srNo: '60', description: "Bakshi, Kamala", digitalArchive: '417', period: '1942-1995', url: '#' },
  { id: 'ic65', srNo: '60 (a)', description: "Bakshi, Raja See under Raja Bakshi", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic66', srNo: '61', description: "Bakshi, Tek Chand Acc. No. 896", digitalArchive: 'NA', period: '1962-', url: '#' },
  { id: 'ic67', srNo: '62', description: "Balamani, N. (Amma)", digitalArchive: 'NA', period: '1931-1992', url: '#' },
  { id: 'ic68', srNo: '62 (a)', description: "Baldev Singh See under Miscellaneous Item S.No.83", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic69', srNo: '63', description: "Baldwin, Stanley Microfilm", digitalArchive: 'NA', period: '1923-1940', url: '#' },
  { id: 'ic70', srNo: '64', description: "Baleshwar Prasad", digitalArchive: '435', period: '1940-1973', url: '#' },
  { id: 'ic71', srNo: '65', description: "Bandyopadhyay, Jayanta", digitalArchive: '579', period: '1978-2006', url: '#' },
  { id: 'ic72', srNo: '66', description: "Banerjee, Ashwini Coomar", digitalArchive: '89', period: '1886-1942', url: '#' },
  { id: 'ic73', srNo: '67', description: "Banerjee, B. K.", digitalArchive: '142', period: '1950-1967', url: '#' },
  { id: 'ic74', srNo: '68', description: "Banerjee, Gooroodas", digitalArchive: '187', period: '1885-1919', url: '#' },
  { id: 'ic75', srNo: '69', description: "", digitalArchive: '187(2)', period: '1885-1919', url: '#' },
  { id: 'ic76', srNo: '69', description: "Banerjee, Sibnath", digitalArchive: '236', period: '1922-1982', url: '#' },
  { id: 'ic77', srNo: '70', description: "Banerji, N. C. and Banerjea, B. N.", digitalArchive: '358', period: '1921-1946', url: '#' },
  { id: 'ic78', srNo: '71', description: "Bapat, Senapati", digitalArchive: '388', period: '1913-1983', url: '#' },
  { id: 'ic79', srNo: '72', description: "Bardoloi, G. N.", digitalArchive: '170', period: '1930-1950', url: '#' },
  { id: 'ic80', srNo: '73', description: "Barlingay, W. S.", digitalArchive: '167', period: '1932-1973', url: '#' },
  { id: 'ic81', srNo: '74', description: "Barooah, D. K.", digitalArchive: '413', period: '1952-1996', url: '#' },
  { id: 'ic82', srNo: '75', description: "Barooah, Liladhar", digitalArchive: '172', period: '1939-1972', url: '#' },
  { id: 'ic83', srNo: '76', description: "Barrow, A. E. T. Acc. No. 1348", digitalArchive: 'NA', period: '1930-1990', url: '#' },
  { id: 'ic84', srNo: '77', description: "Baruah, Hem Unpublished poem", digitalArchive: '190', period: '-', url: '#' },
  { id: 'ic85', srNo: '78', description: "Basheer, Vaikom Muhammad", digitalArchive: 'NA', period: '1958-2005', url: '#' },
  { id: 'ic86', srNo: '79', description: "Basu, Bhupendra Nath", digitalArchive: '40', period: '1910-1924', url: '#' },
  { id: 'ic87', srNo: '80', description: "Basu, Sajal", digitalArchive: '377', period: '1945-2009', url: '#' },
  { id: 'ic88', srNo: '81', description: "Basu, Upendra Nath", digitalArchive: '190', period: '1894-1996', url: '#' },
  { id: 'ic89', srNo: '82', description: "Bedi, B. P. L. Acc. No. 1643", digitalArchive: 'NA', period: '1970-1998', url: '#' },
  { id: 'ic90', srNo: '83', description: "Bedi, Rajinder Singh Acc. No. 1148", digitalArchive: 'NA', period: '1940-1961', url: '#' },
  { id: 'ic91', srNo: '84', description: "Benipuri, Rambriksha", digitalArchive: '355', period: '1933-1969', url: '#' },
  { id: 'ic92', srNo: '85', description: "Beohar, Rajendra Singh", digitalArchive: '111', period: '1935-1967', url: '#' },
  { id: 'ic93', srNo: '86', description: "Besant, Annie (Dr.) Microfilm", digitalArchive: 'NA', period: '1907-1934', url: '#' },
  { id: 'ic94', srNo: '87', description: "Bhabha, H. J. Acc. No. 1389", digitalArchive: 'NA', period: '1966-1987', url: '#' },
  { id: 'ic95', srNo: '88', description: "Bhagat Singh Acc. No. 711, 716", digitalArchive: 'NA', period: '1919-1930', url: '#' },
  { id: 'ic96', srNo: '89', description: "Bhagavan Das", digitalArchive: '7 A', period: '1907-1958', url: '#' },
  { id: 'ic97', srNo: '90', description: "Bhakt Darshan", digitalArchive: '408', period: '1918-1993', url: '#' },
  { id: 'ic98', srNo: '91', description: "Bhanu Pratap Singh acc. No. 1926", digitalArchive: 'NA', period: '1973-2006', url: '#' },
  { id: 'ic99', srNo: '92', description: "Bharathy, K. A. Sivarama", digitalArchive: '368', period: '1941-1989', url: '#' },
  { id: 'ic100', srNo: '93', description: "Bharadwaj, Krishna", digitalArchive: '551', period: '1969-1991', url: '#' },
  { id: 'ic101', srNo: '94', description: "Bhargava, Balkrishan", digitalArchive: '149', period: '1942-1944', url: '#' },
  { id: 'ic102', srNo: '94 (a)', description: "Bhargava, Din Dayal See under Miscellaneous Items Sl.No.28", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic103', srNo: '95', description: "Bhargava, Gopichand", digitalArchive: '155', period: '1908-1966', url: '#' },
  { id: 'ic104', srNo: '96', description: "Bhartendu’ Harischandra", digitalArchive: '265', period: '1874-1906', url: '#' },
  { id: 'ic105', srNo: '97', description: "Bhasin, Prem Also see Socialist Party of India", digitalArchive: '17 A', period: '1952-1965', url: '#' },
  { id: 'ic106', srNo: '98', description: "Bhattacharyya, Ramnath Acc. No. 1948", digitalArchive: 'NA', period: '1913-1918', url: '#' },
  { id: 'ic107', srNo: '99', description: "Bhatia, Prem", digitalArchive: '442', period: '1911-1995', url: '#' },
  { id: 'ic108', srNo: '100', description: "Bhatt, A. R.", digitalArchive: '214', period: '1925-1929', url: '#' },
  { id: 'ic109', srNo: '101', description: "Bhattacharjea, Ajit", digitalArchive: 'NA', period: '1961-2005', url: '#' },
  { id: 'ic110', srNo: '102', description: "Bhave, Vinoba Also on microfilm (Reprography)", digitalArchive: '273', period: '1910-1965', url: '#' },
  { id: 'ic111', srNo: '103', description: "Bhembre, L. V. P.", digitalArchive: 'NA', period: '1947-1960', url: '#' },
  { id: 'ic112', srNo: '104', description: "Bhende, V. R.", digitalArchive: '317', period: '1885-1978', url: '#' },
  { id: 'ic113', srNo: '105', description: "Bhole, R. R. (Justice) Also on microfilm (Reprography)", digitalArchive: '315', period: '1925-1951', url: '#' },
  { id: 'ic114', srNo: '105 (a)', description: "Bhute, Sadashivrao See under Miscellaneous Items Sl.No.131", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic115', srNo: '106', description: "Bilgrami, Syed Hassan", digitalArchive: '178', period: '1864-1926', url: '#' },
  { id: 'ic116', srNo: '107', description: "Birkenhead, Ist Earl of Microfilm", digitalArchive: 'NA', period: '1924-1928', url: '#' },
  { id: 'ic117', srNo: '108', description: "Birla, G. D.", digitalArchive: '296', period: '1942-1964', url: '#' },
  { id: 'ic118', srNo: '109', description: "Biyani, Brijlal", digitalArchive: '190', period: '1938-1956', url: '#' },
  { id: 'ic119', srNo: '110', description: "Blackett, P.M.S. Microfilm", digitalArchive: 'NA', period: '1945-1973', url: '#' },
  { id: 'ic120', srNo: '111', description: "Bomanji, S. R.", digitalArchive: '285', period: '1921-1951', url: '#' },
  { id: 'ic121', srNo: '112', description: "Bommai, S. R. Xerox copies of his writings only Acc. No. 1977", digitalArchive: 'NA', period: '1985-1986', url: '#' },
  { id: 'ic122', srNo: '113', description: "Bonarjee, N. B.", digitalArchive: 'NA', period: '1940-1944', url: '#' },
  { id: 'ic123', srNo: '114', description: "Bora, Sheila Acc. No. 1182", digitalArchive: 'NA', period: '1941-1942', url: '#' },
  { id: 'ic124', srNo: '115', description: "Bose, Arun", digitalArchive: '580', period: '1937-2006', url: '#' },
  { id: 'ic125', srNo: '116', description: "Bose, B. K.", digitalArchive: '126', period: '1915-1931', url: '#' },
  { id: 'ic126', srNo: '117', description: "Bose, Maitreyee (Dr.) Acc. No. 997", digitalArchive: 'NA', period: '1887-1931', url: '#' },
  { id: 'ic127', srNo: '118', description: "Bose, S. K. (Prof.) Manuscript of 12 books in Persian and Arabic", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic128', srNo: '119', description: "Bose, Sarat Chandra Microfilm (Reprography)", digitalArchive: 'NA', period: '1931-1942', url: '#' },
  { id: 'ic129', srNo: '120', description: "Bose, Satyanand", digitalArchive: '316(A)', period: '1912-1936', url: '#' },
  { id: 'ic130', srNo: '121', description: "Brahaman, Ratanlal Acc. No. 1240", digitalArchive: 'NA', period: '1947-1989', url: '#' },
  { id: 'ic131', srNo: '122', description: "Brahmanand Closed With Clause", digitalArchive: '185', period: '1921-1981', url: '#' },
  { id: 'ic132', srNo: '123', description: "Brelvi, S. A.", digitalArchive: '59', period: '1911-1949', url: '#' },
  { id: 'ic133', srNo: '124', description: "Brij Mohan Acc. No. 1684", digitalArchive: 'NA', period: '1962-1968', url: '#' },
  { id: 'ic134', srNo: '125', description: "Bronson, Miles Microfilm", digitalArchive: 'NA', period: '1831-1883', url: '#' },
  { id: 'ic135', srNo: '126', description: "Bucher, Roy (Sir) Closed with clause", digitalArchive: '190', period: '1948-', url: '#' },
  { id: 'ic136', srNo: '127', description: "Butler, Spencer Harcourt M", digitalArchive: 'NA', period: '1881-1934', url: '#' },
  { id: 'ic137', srNo: '128', description: "Cama, Bhikaji", digitalArchive: '190LXX', period: '1895-1875', url: '#' },
  { id: 'ic138', srNo: '129', description: "Candeth, M. A.", digitalArchive: '220', period: '1907-1935', url: '#' },
  { id: 'ic139', srNo: '130', description: "Casey, Richard G. Microfilm", digitalArchive: 'NA', period: '1944-1946', url: '#' },
  { id: 'ic140', srNo: '131', description: "Caveeshar, Sardul Singh", digitalArchive: '12', period: '1925-1965', url: '#' },
  { id: 'ic141', srNo: '132', description: "Chagla, M. C.", digitalArchive: '110', period: '1918-1980', url: '#' },
  { id: 'ic142', srNo: '132 (a)', description: "Chakbast, Uma See under Miscellaneous Item S.No.166", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic143', srNo: '133', description: "Chakravarty, Amiya", digitalArchive: '190', period: '1949-', url: '#' },
  { id: 'ic144', srNo: '134', description: "Chaman Lall (Dewan)", digitalArchive: '56', period: '1930-1968', url: '#' },
  { id: 'ic145', srNo: '135', description: "Chandiwala, Brij Krishan", digitalArchive: '74', period: '1915-1987', url: '#' },
  { id: 'ic146', srNo: '136', description: "Chandra, Jag Parvesh", digitalArchive: '478', period: '1936-2001', url: '#' },
  { id: 'ic147', srNo: '136 (a)', description: "Chandra, Romesh See under Romesh Chandra", digitalArchive: '', period: '-', url: '#' },
  { id: 'ic148', srNo: '137', description: "Chandrachudan, R. Acc. No. 1134, 1212", digitalArchive: 'NA', period: '1954-1976', url: '#' },
  { id: 'ic149', srNo: '138', description: "Chandra Shekhar", digitalArchive: '575', period: '1969-1989', url: '#' },
  { id: 'ic150', srNo: '139', description: "Charan Singh (Chaudhary)", digitalArchive: '361', period: '1924-1987', url: '#' },
  { id: 'ic151', srNo: '140', description: "Chatterjee, Bhola closed With Clause", digitalArchive: 'NA', period: '1946-1992', url: '#' },
  { id: 'ic152', srNo: '141', description: "Chatterjee, Jogeswar", digitalArchive: '297', period: '1903-1921', url: '#' },
  { id: 'ic153', srNo: '142', description: "Chatterjee, N. C.", digitalArchive: '78', period: '1940-1970', url: '#' },
  { id: 'ic154', srNo: '143', description: "Chatterjee, R. M.", digitalArchive: '34', period: '1933-1936', url: '#' },
  { id: 'ic155', srNo: '144', description: "Chatterjee, Ramanand Microfilm", digitalArchive: 'NA', period: '1895-1945', url: '#' },
  { id: 'ic156', srNo: '145', description: "Chattopadhyaya, Kamaladevi", digitalArchive: '238', period: '1923-1988', url: '#' },
  { id: 'ic157', srNo: '146', description: "Chaturevdi, B.K. Acc. No. 2029", digitalArchive: 'NA', period: '1920-1957', url: '#' },
  { id: 'ic158', srNo: '147', description: "Chaturvedi, T. K.", digitalArchive: '190', period: '1941-', url: '#' },
  { id: 'ic159', srNo: '148', description: "Chaubal, M. B.", digitalArchive: '190', period: '1914-1915', url: '#' },
  { id: 'ic160', srNo: '149', description: "Chaudhuri, B. M.", digitalArchive: '363', period: '1929-1991', url: '#' },
  { id: 'ic161', srNo: '150', description: "Chauhan, Shivdan Singh", digitalArchive: '456', period: '1941-1999', url: '#' },
  { id: 'ic162', srNo: '151', description: "Chelmsford (Lord) Microfilm", digitalArchive: 'NA', period: '1916-1921', url: '#' },
  { id: 'ic163', srNo: '152', description: "Chelliah, L.K.", digitalArchive: '570', period: '1944-1979', url: '#' },
  { id: 'ic164', srNo: '153', description: "Chettiar, G. Chelvapathy", digitalArchive: '186', period: '1918-1975', url: '#' },
  { id: 'ic165', srNo: '154', description: "Chetty, R.K. Shanmukham Microfilm", digitalArchive: 'NA', period: '1932-1940', url: '#' },
  { id: 'ic166', srNo: '155', description: "Chhatari, Nawab of", digitalArchive: '65', period: '1923-1948', url: '#' },
  { id: 'ic167', srNo: '156', description: "Chintamani, C. Y. & C.B. Rao", digitalArchive: '10', period: '1924-1942', url: '#' },
  { id: 'ic168', srNo: '157', description: "Chiplonkar, S. H. Microfilm", digitalArchive: 'NA', period: '1880-1910', url: '#' },
  { id: 'ic169', srNo: '158', description: "Chitnavis, G. M.", digitalArchive: '32', period: '1900-1929', url: '#' },
  { id: 'ic170', srNo: '159', description: "Chitnavis, M. G.", digitalArchive: '133', period: '1922-1947', url: '#' },
  { id: 'ic171', srNo: '160', description: "Chopra, Madan Mohan (Dr.)", digitalArchive: '290', period: '1914-1998', url: '#' },
  { id: 'ic172', srNo: '161', description: "Chopra, Pran", digitalArchive: 'NA', period: '1965-2009', url: '#' },
  { id: 'ic173', srNo: '162', description: "Chopra, Raghuvansh Acc. No. 1729 and 1783", digitalArchive: 'NA', period: '1937-1959', url: '#' },
  { id: 'ic174', srNo: '163', description: "Choudhary, Bharati Acc. No. 1746", digitalArchive: 'NA', period: '1943-1997', url: '#' },
  { id: 'ic175', srNo: '164', description: "Choudhary, Valmiki", digitalArchive: '506', period: '1910-1996', url: '#' },
  { id: 'ic176', srNo: '165', description: "Choudhury, Jaglal", digitalArchive: '76', period: '1948-1969', url: '#' },
  { id: 'ic177', srNo: '166', description: "Chowdhuri, Gopabandhu", digitalArchive: '174', period: '1928-1958', url: '#' },
  { id: 'ic178', srNo: '167', description: "Chowdhury, Nabakrushna Microfilm (Reprography)", digitalArchive: 'NA', period: '1934-1937', url: '#' },
  { id: 'ic179', srNo: '167 (a)', description: "Chowdhury, Subrata Roy See under Roy Chowdhury, Subrata", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic180', srNo: '168', description: "Chowhan, Bharat Singh Acc. No. 1133 & 1135", digitalArchive: 'NA', period: '1987-', url: '#' },
  { id: 'ic181', srNo: '169', description: "Cross, Richard Asheton Microfilm", digitalArchive: 'NA', period: '1886-1892', url: '#' },
  { id: 'ic182', srNo: '170', description: "V. K. Krishna Menon", digitalArchive: '119', period: '1920-1977', url: '#' },
  { id: 'ic183', srNo: '171', description: "Curry, J. C. Acc. No. 1010", digitalArchive: 'NA', period: '1925-', url: '#' },
  { id: 'ic184', srNo: '172', description: "Dalip Singh (Choudhary) Acc. No.1566", digitalArchive: 'NA', period: '1946-', url: '#' },
  { id: 'ic185', srNo: '173', description: "Damar, Amar Singh Acc. No. 1690", digitalArchive: 'NA', period: '1975-1997', url: '#' },
  { id: 'ic186', srNo: '174', description: "Damodaran, A.K.", digitalArchive: 'NA', period: '1957-2005', url: '#' },
  { id: 'ic187', srNo: '175', description: "Dandavate, Madhu", digitalArchive: '513', period: '1959-2005', url: '#' },
  { id: 'ic188', srNo: '176', description: "Dang, Satyapal", digitalArchive: '527', period: '1974-2006', url: '#' },
  { id: 'ic189', srNo: '177', description: "Dange, S.A.", digitalArchive: '536', period: '1918-1990', url: '#' },
  { id: 'ic190', srNo: '178', description: "Daryabadi, Abdul Majid", digitalArchive: '33', period: '1907-1973', url: '#' },
  { id: 'ic191', srNo: '179', description: "Das, Buchi See under Indira Gandhi papers (VI Inst.)", digitalArchive: 'NA', period: '1947-1971', url: '#' },
  { id: 'ic192', srNo: '180', description: "Das, C.R. Microfilm (Reprography)", digitalArchive: 'NA', period: '1892-1925', url: '#' },
  { id: 'ic193', srNo: '181', description: "Das, Nilkantha", digitalArchive: '190LV', period: '1955-1959', url: '#' },
  { id: 'ic194', srNo: '182', description: "Das, Omeo Kumar", digitalArchive: '171', period: '1919-1974', url: '#' },
  { id: 'ic195', srNo: '183', description: "Das, Pushpa Lata", digitalArchive: '171 A', period: '1941-1981', url: '#' },
  { id: 'ic196', srNo: '183 (a)', description: "Dasgupta (Dr.) See under Miscellaneous Items Sl.No.42", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic197', srNo: '184', description: "Dasgupta, A. K.", digitalArchive: '595', period: '1938-2004', url: '#' },
  { id: 'ic198', srNo: '185', description: "Dasgupta, R. K.", digitalArchive: '393', period: '1953-1960', url: '#' },
  { id: 'ic199', srNo: '186', description: "Datta, K. K.", digitalArchive: '117', period: '1905-1942', url: '#' },
  { id: 'ic200', srNo: '187', description: "Daudi, Mohd. Shafi", digitalArchive: '190', period: '1931-1948', url: '#' },
  { id: 'ic201', srNo: '188', description: "Davar, F. C.", digitalArchive: '173', period: '1942-1969', url: '#' },
  { id: 'ic202', srNo: '189', description: "Davar, M. C.", digitalArchive: '190', period: '1947-1964', url: '#' },
  { id: 'ic203', srNo: '190', description: "Dave, family papers:", digitalArchive: '221', period: '1885-1965', url: '#' },
  { id: 'ic204', srNo: '190 (a)', description: "Dave, Sunderlal", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic205', srNo: '190 (b)', description: "Dave, Govind Ram", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic206', srNo: '190 (c)', description: "Dave, R. K.", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic207', srNo: '190 (d)', description: "Dave, Baldev Ram", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic208', srNo: '190 (e)', description: "Dave, Lakshmi Chand", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic209', srNo: '190 (f)', description: "Dave, Kanhaiya lal", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic210', srNo: '191', description: "Deepak Kumar", digitalArchive: '615', period: '1804-1996', url: '#' },
  { id: 'ic211', srNo: '191 (a)', description: "Deo, Shankarrao See under Shankarrao Deo", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic212', srNo: '192', description: "Deogirikar, T. R.", digitalArchive: '190LlX', period: '1936-1962', url: '#' },
  { id: 'ic213', srNo: '193', description: "Derashri, R.S.", digitalArchive: '576', period: '1915-1960', url: '#' },
  { id: 'ic214', srNo: '194', description: "Desai, Bhulabhai Also on microfilm (Reprography)", digitalArchive: '43', period: '1898-1953', url: '#' },
  { id: 'ic215', srNo: '195', description: "Desai, H. M. Acc. No. 1329", digitalArchive: 'NA', period: '1937-1940', url: '#' },
  { id: 'ic216', srNo: '196', description: "Desai, Hitendra", digitalArchive: '382', period: '1929-1993', url: '#' },
  { id: 'ic217', srNo: '197', description: "Desai, Khandubhai", digitalArchive: '190', period: '1949-1968', url: '#' },
  { id: 'ic218', srNo: '198', description: "Desai, Mahadev", digitalArchive: '401', period: '1924-1942', url: '#' },
  { id: 'ic219', srNo: '199', description: "Desai, Upendra", digitalArchive: '246', period: '1921-1949', url: '#' },
  { id: 'ic220', srNo: '200', description: "Deshmukh, C. D.", digitalArchive: '106', period: '1916-1975', url: '#' },
  { id: 'ic221', srNo: '200 (a)', description: "Deshmukh, C.D. (I Inst.)", digitalArchive: '106', period: '1916-1975', url: '#' },
  { id: 'ic222', srNo: '201', description: "Deshmukh, Durgabai Acc. No. 87", digitalArchive: 'NA', period: '1954-1962', url: '#' },
  { id: 'ic223', srNo: '202', description: "Deshmukh, G. V.", digitalArchive: '190XV', period: '1936-1956', url: '#' },
  { id: 'ic224', srNo: '203', description: "Deshmukh, R. M.", digitalArchive: '134', period: '1919-1954', url: '#' },
  { id: 'ic225', srNo: '204', description: "Deshpande, Gangadhar Rao Also on microfilm (Reprography)", digitalArchive: '190', period: '1947-1959', url: '#' },
  { id: 'ic226', srNo: '205', description: "Devadhar, G. K. Also on microfilm (Reprography)", digitalArchive: '60', period: '1900-1918', url: '#' },
  { id: 'ic227', srNo: '206', description: "Devi Prasad", digitalArchive: '539', period: '1924-2001', url: '#' },
  { id: 'ic228', srNo: '207', description: "Dey, Eileen Woods", digitalArchive: '190', period: '1920-1946', url: '#' },
  { id: 'ic229', srNo: '208', description: "Devy, G.N.", digitalArchive: 'NA', period: '1983-2017', url: '#' },
  { id: 'ic230', srNo: '209', description: "Dharampal Acc. No. 1593", digitalArchive: 'NA', period: '1811-1813', url: '#' },
  { id: 'ic231', srNo: '210', description: "Dharma Vira", digitalArchive: '462', period: '1946-2001', url: '#' },
  { id: 'ic232', srNo: '211', description: "Dharia, Mohan", digitalArchive: '314', period: '1967-2010', url: '#' },
  { id: 'ic233', srNo: '212', description: "Dharmadhikaree (Dada)", digitalArchive: '127', period: '1929-1974', url: '#' },
  { id: 'ic234', srNo: '213', description: "Dhebar, U. N. Microfilm", digitalArchive: 'NA', period: '1955-1975', url: '#' },
  { id: 'ic235', srNo: '214', description: "Dickinson, Sybil C. Acc. No. 1031", digitalArchive: 'NA', period: '1930-1931', url: '#' },
  { id: 'ic236', srNo: '215', description: "Dikshit, Uma Shankar Closed with clause", digitalArchive: 'NA', period: '1942-1990', url: '#' },
  { id: 'ic237', srNo: '215 (a)', description: "Dilkishore Prasad Singh See under Singh, Dilkishore Prasad", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic238', srNo: '216', description: "Dinesh Singh Acc. No. 1201", digitalArchive: 'NA', period: '1957-1961', url: '#' },
  { id: 'ic239', srNo: '217', description: "Diwakar, R. R.", digitalArchive: 'NA', period: '1943-1988', url: '#' },
  { id: 'ic240', srNo: '218', description: "O. Douglas, William Acc. No. 1170", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic241', srNo: '219', description: "Dubey, K.N . Acc. No. 1951", digitalArchive: 'NA', period: '1953-1954', url: '#' },
  { id: 'ic242', srNo: '220', description: "Dubey, (Prof.) Lakshmi Narayan", digitalArchive: '607', period: '1956-1991', url: '#' },
  { id: 'ic243', srNo: '221', description: "Dubey, Suman Acc. No. 2061", digitalArchive: 'NA', period: '1962-', url: '#' },
  { id: 'ic244', srNo: '222', description: "Duni Chand (Lala) Acc. No. 598, 599, Also See under Meerut Conspiracy Case Sl.No.89", digitalArchive: 'NA', period: '1955-', url: '#' },
  { id: 'ic245', srNo: '223', description: "Dutt, Srikant Closed with clause", digitalArchive: '546', period: '-', url: '#' },
  { id: 'ic246', srNo: '224', description: "Dutt, Subimal", digitalArchive: '177', period: '1950-1976', url: '#' },
  { id: 'ic247', srNo: '225', description: "Dutta, B.K. Acc. No. 1962", digitalArchive: 'NA', period: '1949-1965', url: '#' },
  { id: 'ic248', srNo: '226', description: "Dutta, Mohinder Paul", digitalArchive: '386', period: '1953-1993', url: '#' },
  { id: 'ic249', srNo: '227', description: "Dwivedi, M.L. Acc. No. 1564", digitalArchive: 'NA', period: '1944-1949', url: '#' },
  { id: 'ic250', srNo: '228', description: "Dwivedi, Nageshwar", digitalArchive: '300', period: '1964-1977', url: '#' },
  { id: 'ic251', srNo: '229', description: "Dwivedy, Surendranath Also on microfilm (Reprography)", digitalArchive: '67(M)', period: '1931-1992', url: '#' },
  { id: 'ic252', srNo: '229 (a)', description: "Eagleton, W. G. See under Miscellaneous Items Sl.No.94", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic253', srNo: '230', description: "Eisenhower, Dwight D. Library", digitalArchive: '94', period: '1948-1960', url: '#' },
  { id: 'ic254', srNo: '231', description: "Elenkath, K. R", digitalArchive: '232', period: '1974-1980', url: '#' },
  { id: 'ic255', srNo: '232', description: "Elwin, Verrier", digitalArchive: '222', period: '1935-1967', url: '#' },
  { id: 'ic256', srNo: '233', description: "Erskine (Lord) Microfilm", digitalArchive: 'NA', period: '1934-1940', url: '#' },
  { id: 'ic257', srNo: '234', description: "Ezhuthachan, V.R. Krishnan", digitalArchive: '465', period: '1921-2001', url: '#' },
  { id: 'ic258', srNo: '235', description: "Faridoon Mulk", digitalArchive: '295', period: '1866-1951', url: '#' },
  { id: 'ic259', srNo: '236', description: "Fateh Chand (Dr.)", digitalArchive: '212', period: '1939-1974', url: '#' },
  { id: 'ic260', srNo: '237', description: "(Justice) Fathima Beevi, M. Acc. No. 2130", digitalArchive: 'NA', period: '1947-2009', url: '#' },
  { id: 'ic261', srNo: '238', description: "Gadgil, Madhav", digitalArchive: 'NA', period: '1985-2010', url: '#' },
  { id: 'ic262', srNo: '239', description: "Gadgil, N. V.", digitalArchive: '39', period: '1915-1995', url: '#' },
  { id: 'ic263', srNo: '240', description: "Gajendragadkar, P. B. (Justice)", digitalArchive: '244', period: '1964-1977', url: '#' },
  { id: 'ic264', srNo: '241', description: "Gandhi, Devadas", digitalArchive: '269', period: '1920-1957', url: '#' },
  { id: 'ic265', srNo: '242', description: "Gandhi, Gopalkrishna", digitalArchive: '350', period: '1897-1902', url: '#' },
  { id: 'ic266', srNo: '243', description: "Gandhi, Indira. Closed with clause", digitalArchive: '338', period: '1926-1985', url: '#' },
  { id: 'ic267', srNo: '243 (b)', description: "Gandhi, M.K. See under Collected Works of Mahatma Gandhi, papers received from Sl.No.39", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic268', srNo: '243 (b)', description: "Gandhi, M.K. See under Gandhi Smarak Sangrahalaya, Sabarmati Ashram, Ahmedabad Sl.No.51", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic269', srNo: '244', description: "Gandhi, M. K. (Girdhari Kripalani)", digitalArchive: '190', period: '1920-1921', url: '#' },
  { id: 'ic270', srNo: '245', description: "Gandhi, M.K. (recd. from South Africa and London) Acc. No. 1621 to 1625, 1939", digitalArchive: 'NA', period: '1869-1969', url: '#' },
  { id: 'ic271', srNo: '246', description: "Gandhi, M.K. (V. Kalyanam) Acc. No. 1596", digitalArchive: 'NA', period: '1947-1948', url: '#' },
  { id: 'ic272', srNo: '246 (b)', description: "Gandhi, M.K. See under Tom Tar Singh", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic273', srNo: '247', description: "Gandhi, M.K. On microfilm (Reprography)", digitalArchive: 'NA', period: '1895-1926', url: '#' },
  { id: 'ic274', srNo: '248', description: "Gandhi, M.K. (Pyarelal)", digitalArchive: '416', period: '1904-1947', url: '#' },
  { id: 'ic275', srNo: '249', description: "Gandhi M.K. – Kallenbach correspondence Xeror", digitalArchive: '310 A', period: '1909-1946', url: '#' },
  { id: 'ic276', srNo: '250', description: "Gandhi’s tour in India, Reports of local Govts. Microfilm", digitalArchive: 'NA', period: '1933-1934', url: '#' },
  { id: 'ic277', srNo: '251', description: "Gandhi Murder Trial", digitalArchive: '190', period: '1948-', url: '#' },
  { id: 'ic278', srNo: '252', description: "Gandhi, Nirmala", digitalArchive: '121', period: '1924-1946', url: '#' },
  { id: 'ic279', srNo: '253', description: "Gandhi, Rajiv", digitalArchive: 'NA', period: '1984-1991', url: '#' },
  { id: 'ic280', srNo: '254', description: "Gandhi, Rajmohan", digitalArchive: '445', period: '1915-1980', url: '#' },
  { id: 'ic281', srNo: '255', description: "Gandhi, Ramchandra", digitalArchive: 'NA', period: '1959-2006', url: '#' },
  { id: 'ic282', srNo: '256', description: "Gandhi, Ramdas Acc. No. 1424", digitalArchive: 'NA', period: '1917-1947', url: '#' },
  { id: 'ic283', srNo: '257', description: "Ganpat Rai", digitalArchive: '72', period: '1933-1949', url: '#' },
  { id: 'ic284', srNo: '258', description: "Ganpuley, N. G. Microfilm (Reprography)", digitalArchive: 'NA', period: '1922-1976', url: '#' },
  { id: 'ic285', srNo: '258 (b)', description: "Gaurihar, Rani Saroj See under Rawat, Jagan Prasad", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic286', srNo: '259', description: "Gauba, K. L.", digitalArchive: '190', period: '1967-1970', url: '#' },
  { id: 'ic287', srNo: '260', description: "George Fernandes", digitalArchive: '606', period: '1984-2010', url: '#' },
  { id: 'ic288', srNo: '261', description: "George, K.M.", digitalArchive: '511', period: '1948-2001', url: '#' },
  { id: 'ic289', srNo: '262', description: "Ghatate, N.M. Acc. No. 2144, 2155, 2160, 2174", digitalArchive: 'NA', period: '1957-1977', url: '#' },
  { id: 'ic290', srNo: '263', description: "Ghatikachalam, V. M.", digitalArchive: '80', period: '1930-1971', url: '#' },
  { id: 'ic291', srNo: '264', description: "Ghosh, Ganesh", digitalArchive: '420', period: '1931-1989', url: '#' },
  { id: 'ic292', srNo: '265', description: "Ghosh, Sudhir", digitalArchive: '23', period: '1939-1967', url: '#' },
  { id: 'ic293', srNo: '266', description: "Ghosal, Aurobindo", digitalArchive: 'NA', period: '1948-1954', url: '#' },
  { id: 'ic294', srNo: '267', description: "Ghulam Rabbani Taban", digitalArchive: '446', period: '1957-1999', url: '#' },
  { id: 'ic295', srNo: '268', description: "Gill, M.S.", digitalArchive: '620', period: '2010-2011', url: '#' },
  { id: 'ic296', srNo: '269', description: "Girdharilal Also on microfilm (Reprography)", digitalArchive: '190', period: '1929-1933', url: '#' },
  { id: 'ic297', srNo: '269 (b)', description: "Gokhale, G. K. See under Servants of India Society", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic298', srNo: '270', description: "Gole, Prakash Acc. No. 2043", digitalArchive: 'NA', period: '1981-2004', url: '#' },
  { id: 'ic299', srNo: '271', description: "Golwalkar, M. S. Microfilm (Reprography)", digitalArchive: 'NA', period: '1931-1973', url: '#' },
  { id: 'ic300', srNo: '272', description: "Gool, Jane (Family Papers) (Xerox Acc. No. 1626)", digitalArchive: 'NA', period: '1963-1997', url: '#' },
  { id: 'ic301', srNo: '273', description: "Gopal Singh Closed with clause", digitalArchive: '378', period: '1956-1990', url: '#' },
  { id: 'ic302', srNo: '274', description: "Gopi Krishna Prasad Acc.No. 1439, Closed with clause", digitalArchive: 'NA', period: '1951-1955', url: '#' },
  { id: 'ic303', srNo: '275', description: "Goray, N. G.", digitalArchive: '391', period: '1954-1993', url: '#' },
  { id: 'ic304', srNo: '276', description: "Gorwala, A.D. Acc. No. 2073", digitalArchive: 'NA', period: '1950-1976', url: '#' },
  { id: 'ic305', srNo: '277', description: "Goswami, S.P.", digitalArchive: '218', period: '1916-1980', url: '#' },
  { id: 'ic306', srNo: '278', description: "Govind Das (Seth)", digitalArchive: '107', period: '1919-1973', url: '#' },
  { id: 'ic307', srNo: '279', description: "Govind Narain Singh Acc. No. 1856", digitalArchive: 'NA', period: '1988-1999', url: '#' },
  { id: 'ic308', srNo: '280', description: "Guha, A.C.", digitalArchive: '237', period: '1899-1980', url: '#' },
  { id: 'ic309', srNo: '281', description: "Guha, B.C. Acc. No. 1983", digitalArchive: 'NA', period: '1960-1963', url: '#' },
  { id: 'ic310', srNo: '282', description: "Guha, Phulrenu Acc. No. 1982", digitalArchive: 'NA', period: '1974-2006', url: '#' },
  { id: 'ic311', srNo: '283', description: "Guhan, S.", digitalArchive: '565', period: '1959-1998', url: '#' },
  { id: 'ic312', srNo: '284', description: "Gujral, I.K.", digitalArchive: '495', period: '1981-2004', url: '#' },
  { id: 'ic313', srNo: '284 (a)', description: "Gujran, Pritam Singh and Phaguwalia, Jagir Singh Microfilm See under Pritam Singh Gujran and Jagir Singh Phaguwalia", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic314', srNo: '285', description: "(Babu) Gulab Rai", digitalArchive: '588', period: '1932-2013', url: '#' },
  { id: 'ic315', srNo: '286', description: "Gulam Rasul Koreishi", digitalArchive: '190', period: '1908-1946', url: '#' },
  { id: 'ic316', srNo: '287', description: "Gundevia, Y. D.", digitalArchive: '324', period: '1931-1988', url: '#' },
  { id: 'ic317', srNo: '288', description: "Gunther, Frances", digitalArchive: '190', period: '1938-1949', url: '#' },
  { id: 'ic318', srNo: '289', description: "Gupt, Roshanlal", digitalArchive: 'NA', period: '1940-1997', url: '#' },
  { id: 'ic319', srNo: '290', description: "Gupta, Arvind CDs transferred to NYCLC", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic320', srNo: '291', description: "Gupta, Ashoka", digitalArchive: '466', period: '1946-2000', url: '#' },
  { id: 'ic321', srNo: '292', description: "Gupta, Chandrakanta", digitalArchive: '190LLX', period: '1926-1953', url: '#' },
  { id: 'ic322', srNo: '293', description: "Gupta, Charu", digitalArchive: '581', period: '1983-2007', url: '#' },
  { id: 'ic323', srNo: '294', description: "Gupta, Manmathnath", digitalArchive: '529', period: '1968-1973', url: '#' },
  { id: 'ic324', srNo: '295', description: "Gupta, Nagendra Nath", digitalArchive: '17', period: '1901-1952', url: '#' },
  { id: 'ic325', srNo: '296', description: "Gupta, Partha Sarthi", digitalArchive: 'NA', period: '1907-1951', url: '#' },
  { id: 'ic326', srNo: '297', description: "Gupta, Prem Sagar Acc. No. 1326", digitalArchive: 'NA', period: '1946-1983', url: '#' },
  { id: 'ic327', srNo: '298', description: "Gupta, R.K.", digitalArchive: '507', period: '1971-1983', url: '#' },
  { id: 'ic328', srNo: '299', description: "Gupta, S. P. K. (Also on microfilm (Reprography)", digitalArchive: '182', period: '1957-1958', url: '#' },
  { id: 'ic329', srNo: '300', description: "Gupta, Saibal Kumar", digitalArchive: 'NA', period: '1942-1987', url: '#' },
  { id: 'ic330', srNo: '301', description: "Gurtu, Iqbal Narain", digitalArchive: '19', period: '1927-1962', url: '#' },
  { id: 'ic331', srNo: '302', description: "Gyani Pratap Singh", digitalArchive: '225', period: '1920-1925', url: '#' },
  { id: 'ic332', srNo: '303', description: "Habibur Rehman Ludhianvi", digitalArchive: '190', period: '1921-1954', url: '#' },
  { id: 'ic333', srNo: '304', description: "Haig, H. G. Microfilm", digitalArchive: 'NA', period: '1932-1939', url: '#' },
  { id: 'ic334', srNo: '304 (a)', description: "Hakeem Mohd. Haseem See under Khan Mohd. Haseem", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic335', srNo: '305', description: "Haksar, Nandita and Civil Liberties and Human Rights Also see under Civil Liberties and Human Rights Sl.No.37", digitalArchive: 'NA', period: '1978-1987', url: '#' },
  { id: 'ic336', srNo: '306', description: "Haksar, P. N.", digitalArchive: '389', period: '1932-1998', url: '#' },
  { id: 'ic337', srNo: '306 (a)', description: "Haksar, P.N. (III Inst.)", digitalArchive: '389', period: '1932-1998', url: '#' },
  { id: 'ic338', srNo: '307', description: "Halifax (Lord) Microfilm", digitalArchive: 'NA', period: '1926-1931', url: '#' },
  { id: 'ic339', srNo: '308', description: "Halstead, Gordon B. Closed With Clause", digitalArchive: '323', period: '1931-1936', url: '#' },
  { id: 'ic340', srNo: '309', description: "Hamilton, Buchanan Microfilm", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic341', srNo: '310', description: "Hamilton, George Francis Microfilm", digitalArchive: 'NA', period: '1895-1903', url: '#' },
  { id: 'ic342', srNo: '311', description: "Hanumanthaiya, K. I & II Installment", digitalArchive: 'NA', period: '1926-1980', url: '#' },
  { id: 'ic343', srNo: '311 (a)', description: "Hanumanthaiya, K. III Installment", digitalArchive: '', period: '1926-1980', url: '#' },
  { id: 'ic344', srNo: '312', description: "Har Dayal (Lala) Also on microfilm (Reprography)", digitalArchive: '46', period: '1907-1910', url: '#' },
  { id: 'ic345', srNo: '313', description: "Hardat, Madan Mohan", digitalArchive: 'NA', period: '1941-1961', url: '#' },
  { id: 'ic346', srNo: '314', description: "Hardiker, N. S.", digitalArchive: '3', period: '1913-1965', url: '#' },
  { id: 'ic347', srNo: '315', description: "Hardinge (Lord) (Microfilm)", digitalArchive: 'NA', period: '1910-1916', url: '#' },
  { id: 'ic348', srNo: '316', description: "Hardwari Lal", digitalArchive: '450', period: '1916-1997', url: '#' },
  { id: 'ic349', srNo: '317', description: "Harihar Nath Shastri", digitalArchive: '190', period: '1941-1953', url: '#' },
  { id: 'ic350', srNo: '318', description: "Harinarayanananda (Swami)", digitalArchive: '286', period: '1960-1983', url: '#' },
  { id: 'ic351', srNo: '319', description: "Hathi, Jaisukhlal", digitalArchive: '229', period: '1965-1981', url: '#' },
  { id: 'ic352', srNo: '319 (a)', description: "Hazrati, J. See under Miscellaneous Items Sl.No.109", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic353', srNo: '320', description: "Heda, H. C. and Gyankumari", digitalArchive: '403', period: '1927-1999', url: '#' },
  { id: 'ic354', srNo: '321', description: "Hedgewar, K. B. Microfilm", digitalArchive: 'NA', period: '1929-1940', url: '#' },
  { id: 'ic355', srNo: '322', description: "Heptulla, Najma (Nee Yousuf) (Acc. No. 1357)", digitalArchive: 'NA', period: '1958-1972', url: '#' },
  { id: 'ic356', srNo: '323', description: "Higginbottom, Sam", digitalArchive: '115', period: '1924-1944', url: '#' },
  { id: 'ic357', srNo: '324', description: "Hindocha, Hutta D. (Acc. No. 1949)", digitalArchive: 'NA', period: '1980-1985', url: '#' },
  { id: 'ic358', srNo: '325', description: "Hingorani, A. T. (Acc. No. 1120)", digitalArchive: 'NA', period: '1942-', url: '#' },
  { id: 'ic359', srNo: '326', description: "Hiralal Shastri", digitalArchive: '54', period: '1917-1970', url: '#' },
  { id: 'ic360', srNo: '327', description: "Hodarkar, Romesh", digitalArchive: '116', period: '1949-1961', url: '#' },
  { id: 'ic361', srNo: '327 (a)', description: "Home, Amal See under Dasgupta, R.K.", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic362', srNo: '328', description: "Humayun Kabir", digitalArchive: '213', period: '1957-1965', url: '#' },
  { id: 'ic363', srNo: '329', description: "Husain Zaheer (Dr.)", digitalArchive: 'NA', period: '1937-1975', url: '#' },
  { id: 'ic364', srNo: '329 (a)', description: "(Mohammed) Iftikhar Ali Khan of Malerkotla See Malerkotla, Nawab of", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic365', srNo: '329 (b)', description: "Ijmulwar Sakharam Kashinath See under Miscellaneous Items Sl.No.45", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic366', srNo: '330', description: "Inamdar, S. V. (Acc. No. 986, Also see N.S. Hardiker (V and VI Inst.))", digitalArchive: 'NA', period: '1946-1963', url: '#' },
  { id: 'ic367', srNo: '331', description: "(Princess) Indira of Kapurthala", digitalArchive: '345', period: '1912-1979', url: '#' },
  { id: 'ic368', srNo: '332', description: "Ismail, Mirza M. (Also on microfilm (Reprography))", digitalArchive: '91', period: '1920-1958', url: '#' },
  { id: 'ic369', srNo: '333', description: "Iswara Dutt, K.", digitalArchive: '162', period: '1915-1968', url: '#' },
  { id: 'ic370', srNo: '334', description: "Iyengar, A. Rangaswami", digitalArchive: '469', period: '1927-1933', url: '#' },
  { id: 'ic371', srNo: '335', description: "Iyengar, S. Srinivasa", digitalArchive: '87', period: '1922-1941', url: '#' },
  { id: 'ic372', srNo: '335 (a)', description: "Iyer, Parameswara See under Ulloor, Mahakavi", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic373', srNo: '336', description: "Iyer, Vaidyanatha (Acc. No. 1211)", digitalArchive: 'NA', period: '1945-1948', url: '#' },
  { id: 'ic374', srNo: '337', description: "Iyer, V. R. Krishna", digitalArchive: '431', period: '1975-2002', url: '#' },
  { id: 'ic375', srNo: '338', description: "Jagadisan, T. N. (Acc. No. 1324)", digitalArchive: 'NA', period: '1945-1990', url: '#' },
  { id: 'ic376', srNo: '339', description: "Jagdish Prasad (Sir)", digitalArchive: '144', period: '1921-1956', url: '#' },
  { id: 'ic377', srNo: '340', description: "Jain, Ajit Prasad", digitalArchive: '150', period: '1950-1976', url: '#' },
  { id: 'ic378', srNo: '341', description: "Jain, Akshaya Kumar", digitalArchive: '439', period: '1915-1993', url: '#' },
  { id: 'ic379', srNo: '342', description: "Jain, Amit", digitalArchive: '552', period: '2007-2011', url: '#' },
  { id: 'ic380', srNo: '343', description: "Jain, Jainendra Kumar", digitalArchive: '438', period: '1930-1989', url: '#' },
  { id: 'ic381', srNo: '344', description: "Jain, Mahabir Pershad", digitalArchive: '282', period: '1943-1953', url: '#' },
  { id: 'ic382', srNo: '345', description: "Jain, Nemi Chandra", digitalArchive: '508', period: '1934-2003', url: '#' },
  { id: 'ic383', srNo: '346', description: "Jaipal, Rikhi", digitalArchive: 'NA', period: '1938-1998', url: '#' },
  { id: 'ic384', srNo: '347', description: "Jairam Ramesh", digitalArchive: '597', period: '2009-2014', url: '#' },
  { id: 'ic385', srNo: '348', description: "Jairamdas Doulatram", digitalArchive: '176', period: '1928-1976', url: '#' },
  { id: 'ic386', srNo: '349', description: "Jakhar, Ram Singh", digitalArchive: '301', period: '1919-1989', url: '#' },
  { id: 'ic387', srNo: '350', description: "Jalali, P. N.", digitalArchive: '493', period: '1947-2003', url: '#' },
  { id: 'ic388', srNo: '351', description: "Jamnadas Dwarkadas (Also on microfilm (Reprography))", digitalArchive: '135', period: '1910-1939', url: '#' },
  { id: 'ic389', srNo: '352', description: "Jardin, Du (Also on microfilm)", digitalArchive: '399', period: '1779-1787', url: '#' },
  { id: 'ic390', srNo: '353', description: "Jayaprakash Narayan", digitalArchive: '82', period: '1929-1983', url: '#' },
  { id: 'ic391', srNo: '353 (a)', description: "Jayaprakash Narayan III Installment", digitalArchive: '82', period: '1929-1983', url: '#' },
  { id: 'ic392', srNo: '354', description: "Jha, Bhogendra", digitalArchive: '330', period: '1954-2005', url: '#' },
  { id: 'ic393', srNo: '355', description: "Jha, Shreemohan", digitalArchive: '411', period: '1970-1995', url: '#' },
  { id: 'ic394', srNo: '356', description: "Jharwal, Laxminarayan", digitalArchive: '524', period: '1947-2018', url: '#' },
  { id: 'ic395', srNo: '357', description: "Joseph, George (Acc. No. 1108, 1299)", digitalArchive: 'NA', period: '1923-1938', url: '#' },
  { id: 'ic396', srNo: '358', description: "Joseph, Pothan and Joseph, Jaiboy", digitalArchive: '500', period: '1931-2006', url: '#' },
  { id: 'ic397', srNo: '359', description: "Joshi, Leela Dhar (Acc. No. 751)", digitalArchive: 'NA', period: '1867-1912', url: '#' },
  { id: 'ic398', srNo: '360', description: "Joshi, N. M.", digitalArchive: '25', period: '1920-1968', url: '#' },
  { id: 'ic399', srNo: '361', description: "Joshi, S. M.", digitalArchive: '272', period: '1949-1982', url: '#' },
  { id: 'ic400', srNo: '362', description: "Joshi, Umashankar (Microfilm ,(Reprography))", digitalArchive: 'NA', period: '1933-1989', url: '#' },
  { id: 'ic401', srNo: '363', description: "Jung Bahadur Singh", digitalArchive: '190ll', period: '1955-1965', url: '#' },
  { id: 'ic402', srNo: '364', description: "Jussawalla, J.M. Closed with clause", digitalArchive: 'NA', period: '1961-2012', url: '#' },
  { id: 'ic403', srNo: '364 (a)', description: "Kabir, Humayun See under Humayun Kabir", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic404', srNo: '365', description: "Kailash, N. N. (Dr.) (Acc. No. 1488)", digitalArchive: 'NA', period: '1964-1991', url: '#' },
  { id: 'ic405', srNo: '366', description: "Kalakankar, Suresh Singh", digitalArchive: '190', period: '1932-1942', url: '#' },
  { id: 'ic406', srNo: '367', description: "Kalbag, Chaitanya", digitalArchive: '614', period: '1976-2014', url: '#' },
  { id: 'ic407', srNo: '368', description: "Kalelkar, Kaka Saheb", digitalArchive: '244', period: '1945-1955', url: '#' },
  { id: 'ic408', srNo: '369', description: "Kalka Dass", digitalArchive: '418', period: '1966-1999', url: '#' },
  { id: 'ic409', srNo: '369 (a)', description: "Kallenbach - Gandhi Correspondence See under Gandhi, M.K.", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic410', srNo: '369 (b)', description: "Kalyanam, V. See under Gandhi M.K.", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic411', srNo: '370', description: "Kamtekar Family (Acc. No. 1261 and 1526)", digitalArchive: 'NA', period: '1947-1948', url: '#' },
  { id: 'ic412', srNo: '371', description: "Kamath, H. V.", digitalArchive: '447', period: '1934-1988', url: '#' },
  { id: 'ic413', srNo: '372', description: "Kao, R. N. (Closed with clause )", digitalArchive: 'NA', period: '1977-', url: '#' },
  { id: 'ic414', srNo: '373 (a)', description: "Karamchand of Jubbal See Under Miscellaneous Items Sl.No.1", digitalArchive: 'NA', period: '1855-1863', url: '#' },
  { id: 'ic415', srNo: '373', description: "Kapadia, Rangildas M.", digitalArchive: '200', period: '1931-1947', url: '#' },
  { id: 'ic416', srNo: '374', description: "Karat, Brinda", digitalArchive: '603', period: '2005-2011', url: '#' },
  { id: 'ic417', srNo: '374 (a)', description: "‘Karunesh’ See under Gupt, Roshanlal Papers", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic418', srNo: '375', description: "Karve, D. K. (Maharshi) (Also on microfilm , (Reprography)", digitalArchive: '190LLl', period: '1904-1950', url: '#' },
  { id: 'ic419', srNo: '376', description: "Kasturbhai Lalbhai (Microfilm)", digitalArchive: 'NA', period: '1933-1950', url: '#' },
  { id: 'ic420', srNo: '377', description: "Katial, C. L.", digitalArchive: '190', period: '1933-1936', url: '#' },
  { id: 'ic421', srNo: '378', description: "Kaul, C. B.", digitalArchive: '190(l)', period: '1900-1926', url: '#' },
  { id: 'ic422', srNo: '379', description: "Kaul, T. N.", digitalArchive: '476', period: '1946-2001', url: '#' },
  { id: 'ic423', srNo: '380', description: "Kaushal, Swaraj", digitalArchive: '370', period: '1966-1992', url: '#' },
  { id: 'ic424', srNo: '381', description: "Keskar, B. V.", digitalArchive: '302', period: '1940-1967', url: '#' },
  { id: 'ic425', srNo: '382', description: "Kesry, Dayalbhai (Acc. No. 1604)", digitalArchive: 'NA', period: '1973-1993', url: '#' },
  { id: 'ic426', srNo: '383', description: "Keswani, Wadhu T.", digitalArchive: '190', period: '1929-1947', url: '#' },
  { id: 'ic427', srNo: '384', description: "Ketkar, G.V. (Acc. No. 704, 715)", digitalArchive: 'NA', period: '1961-1979', url: '#' },
  { id: 'ic428', srNo: '385', description: "Khadilkar, R. K. Acc. No. 927", digitalArchive: 'NA', period: '1955-1971', url: '#' },
  { id: 'ic429', srNo: '385 (a)', description: "Khan, Abdul Majid See under Abdul Majid Khan", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic430', srNo: '386', description: "Khan, Mohd. Haseem (Acc. No. 833)", digitalArchive: 'NA', period: '1978-1982', url: '#' },
  { id: 'ic431', srNo: '386 (a)', description: "Khan, Sham Kumari See under Nehru, Sham Kumari", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic432', srNo: '387', description: "Khandelwal, Tarachand", digitalArchive: '387', period: '1944-1996', url: '#' },
  { id: 'ic433', srNo: '388', description: "Khankhoje, P. S.", digitalArchive: '123', period: '1900-1967', url: '#' },
  { id: 'ic434', srNo: '389', description: "Khanna, D. D. (Interviews Conducted by) (Acc. No. 1487, 1493)", digitalArchive: 'NA', period: '1987-1989', url: '#' },
  { id: 'ic435', srNo: '390', description: "Khanna, Kalicharan", digitalArchive: '35', period: '1934-1947', url: '#' },
  { id: 'ic436', srNo: '391', description: "Khanna, K.C.", digitalArchive: 'NA', period: '1839-1849', url: '#' },
  { id: 'ic437', srNo: '392', description: "Khanna, Mehr Chand (Acc. No.1854)", digitalArchive: 'NA', period: '1948-1967', url: '#' },
  { id: 'ic438', srNo: '393', description: "Kher, B. G.", digitalArchive: '63', period: '1888-1994', url: '#' },
  { id: 'ic439', srNo: '394', description: "Khode, V. S.", digitalArchive: '129', period: '1931-1976', url: '#' },
  { id: 'ic440', srNo: '395', description: "Khosla, G. D. (Justice) (Closed with clause )", digitalArchive: '412', period: '1923-1995', url: '#' },
  { id: 'ic441', srNo: '396', description: "Khwaja, Abdul Majid", digitalArchive: '112', period: '1906-1962', url: '#' },
  { id: 'ic442', srNo: '397', description: "Kincaid - Brown", digitalArchive: '190lll', period: '1922-1932', url: '#' },
  { id: 'ic443', srNo: '398', description: "Kitchlew, S. D. (Also on microfilm , (Reprography))", digitalArchive: '156(A)', period: '1921-1965', url: '#' },
  { id: 'ic444', srNo: '399', description: "Koirala, B. P. (Microfilm)", digitalArchive: 'NA', period: '1976-1979', url: '#' },
  { id: 'ic445', srNo: '400', description: "Kosambi, D. D.", digitalArchive: '574', period: '1926-1965', url: '#' },
  { id: 'ic446', srNo: '401', description: "Kothari, D. S.", digitalArchive: '471', period: '1908-1993', url: '#' },
  { id: 'ic447', srNo: '402', description: "Kripalani, J. B.", digitalArchive: '396', period: '1947-1978', url: '#' },
  { id: 'ic448', srNo: '403', description: "Kripalani, Krishna", digitalArchive: '240', period: '1937-1968', url: '#' },
  { id: 'ic449', srNo: '404', description: "Kripalani, Sucheta (Also on microfilm)", digitalArchive: '396(A)', period: '1947-1974', url: '#' },
  { id: 'ic450', srNo: '405', description: "Krishna Nath, Achyut Patwardhan, Vishvanath Sharma", digitalArchive: '384', period: '1950-1998', url: '#' },
  { id: 'ic451', srNo: '406', description: "Krishnamachari, T. T.", digitalArchive: '294', period: '1947-1973', url: '#' },
  { id: 'ic452', srNo: '407', description: "Krishnan, M.", digitalArchive: '572', period: '1959-1998', url: '#' },
  { id: 'ic453', srNo: '408', description: "Krishnappa, M. V. (Acc. No. 875)", digitalArchive: 'NA', period: '1962-1979', url: '#' },
  { id: 'ic454', srNo: '409', description: "Krishnaswamy, N.", digitalArchive: '499', period: '1933-1999', url: '#' },
  { id: 'ic455', srNo: '410', description: "Krishnatry, S. M.", digitalArchive: '490', period: '1940-2001', url: '#' },
  { id: 'ic456', srNo: '411', description: "Kulkarni Vinayak", digitalArchive: '190', period: '1942-1943', url: '#' },
  { id: 'ic457', srNo: '412', description: "Kumaramangalam, P. Rangarajan (Acc. No.1780)", digitalArchive: 'NA', period: '1989-2000', url: '#' },
  { id: 'ic458', srNo: '413', description: "Kumaran, Asan (Microfilm)", digitalArchive: 'NA', period: '1910-1923', url: '#' },
  { id: 'ic459', srNo: '414', description: "Kumarappa, J. C.", digitalArchive: '128', period: '1913-1960', url: '#' },
  { id: 'ic460', srNo: '415', description: "Kunte, Prabhakar K. (Acc. No. 1934)", digitalArchive: 'NA', period: '1950-1968', url: '#' },
  { id: 'ic461', srNo: '416', description: "Kunzru, H. N.", digitalArchive: '160', period: '1946-1977', url: '#' },
  { id: 'ic462', srNo: '417', description: "Kutty, V. K. Madhavan", digitalArchive: 'NA', period: '1953-2005', url: '#' },
  { id: 'ic463', srNo: '418', description: "Laha, Prabir Kumar", digitalArchive: 'NA', period: '2008-2012', url: '#' },
  { id: 'ic464', srNo: '418 (a)', description: "Lahiri, Rajendra Nath See Under Miscellaneous Items Sl.No.24", digitalArchive: 'NA', period: '1927-', url: '#' },
  { id: 'ic465', srNo: '419', description: "Lahiry, Asutosh", digitalArchive: '64', period: '1927-1968', url: '#' },
  { id: 'ic466', srNo: '420', description: "Lakhani, G. F.", digitalArchive: '259', period: '1945-1963', url: '#' },
  { id: 'ic467', srNo: '421', description: "Lakshminarayan Sudhanshu (Microfilm , (Reprography))", digitalArchive: 'NA', period: '1934-1970', url: '#' },
  { id: 'ic468', srNo: '422', description: "Lal, Jagat Narain", digitalArchive: '75', period: '1932-1942', url: '#' },
  { id: 'ic469', srNo: '422 (a)', description: "Lal Bahadur Shastri See under Shastri, Lal Bahadur", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic470', srNo: '423', description: "Laldenga (Acc. No. 1320)", digitalArchive: 'NA', period: '1979-1988', url: '#' },
  { id: 'ic471', srNo: '424', description: "Latifi, Danial", digitalArchive: '433', period: '1930-1984', url: '#' },
  { id: 'ic472', srNo: '425', description: "Lesney, V", digitalArchive: '190', period: '1935-1936', url: '#' },
  { id: 'ic473', srNo: '426', description: "Lewis, Primila", digitalArchive: '569', period: '1970-1986', url: '#' },
  { id: 'ic474', srNo: '427', description: "Limaye, Madhu", digitalArchive: 'NA', period: '1935-1993', url: '#' },
  { id: 'ic475', srNo: '428', description: "Linlithgow, Marquis (Microfilm)", digitalArchive: 'NA', period: '1936-1943', url: '#' },
  { id: 'ic476', srNo: '429', description: "Lohia, Rammanohar (See under Mitra Roma, Also see Acc. No. 1451, 1534, 1610 , Also on microfilm )", digitalArchive: 'NA', period: '1943-1964', url: '#' },
  { id: 'ic477', srNo: '430', description: "Lokesh Chandra", digitalArchive: 'NA', period: '1947-2016', url: '#' },
  { id: 'ic478', srNo: '430 (a)', description: "Ludhianvi, Habibur Rehman See under Habibur Rehman Ludhianvi", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic479', srNo: '431', description: "Lulla, S. H. (Acc. No. 1331)", digitalArchive: 'NA', period: '1933-1967', url: '#' },
  { id: 'ic480', srNo: '432', description: "Machwe, Prabhakar (Closed with clause)", digitalArchive: '390', period: '1933-1991', url: '#' },
  { id: 'ic481', srNo: '433', description: "Madan Gopal", digitalArchive: '437', period: '1931-1998', url: '#' },
  { id: 'ic482', srNo: '434', description: "Madan, Sarla Acc. No. 1976", digitalArchive: 'NA', period: '1949-1950', url: '#' },
  { id: 'ic483', srNo: '434 (a)', description: "Madhavan Kutty, V. K. See under Kutty, V. K. Madhavan", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic484', srNo: '435', description: "Mahajan, Mehr Chand (Justice)", digitalArchive: '88', period: '1919-1958', url: '#' },
  { id: 'ic485', srNo: '436', description: "Mahalanobis, P. C.", digitalArchive: '179', period: '1910-1976', url: '#' },
  { id: 'ic486', srNo: '437', description: "Mahmudabad, Raja (Also on microfilm , (Reprography) , Also see under Miscellaneous Items Sl.No.170)", digitalArchive: '47', period: '1920-1957', url: '#' },
  { id: 'ic487', srNo: '438', description: "Mahtab, (Dr.) Harekrushna", digitalArchive: '105', period: '1921-1972', url: '#' },
  { id: 'ic488', srNo: '439', description: "Maitra, Sunil (Acc. No. 1617)", digitalArchive: 'NA', period: '1974-1997', url: '#' },
  { id: 'ic489', srNo: '440', description: "Majithia, Sardar Kripal Singh", digitalArchive: '41(A)', period: '1893-1942', url: '#' },
  { id: 'ic490', srNo: '441', description: "Majithia, Sundar Singh", digitalArchive: '41', period: '1890-1944', url: '#' },
  { id: 'ic491', srNo: '442', description: "Majumdar, Gunada Charan (Acc. No. 942)", digitalArchive: 'NA', period: '1959-1965', url: '#' },
  { id: 'ic492', srNo: '443', description: "Malaviya, Govind", digitalArchive: '230', period: '1928-1932', url: '#' },
  { id: 'ic493', srNo: '444', description: "Malaviya, H. D.", digitalArchive: '337', period: '1928-1984', url: '#' },
  { id: 'ic494', srNo: '445', description: "Malaviya, K. D.", digitalArchive: '205', period: '1940-1990', url: '#' },
  { id: 'ic495', srNo: '446', description: "Malaviya, M. M. (Microfilm)", digitalArchive: 'NA', period: '1902-1942', url: '#' },
  { id: 'ic496', srNo: '447', description: "Malerkotla, Nawab", digitalArchive: '194', period: '1948-1976', url: '#' },
  { id: 'ic497', srNo: '448', description: "Malkani, K. R.", digitalArchive: '287', period: '1936-1985', url: '#' },
  { id: 'ic498', srNo: '449', description: "Malkani, N. R.", digitalArchive: '13', period: '1936-1963', url: '#' },
  { id: 'ic499', srNo: '450', description: "Mangatrai, E. N.", digitalArchive: '492', period: '1927-2003', url: '#' },
  { id: 'ic500', srNo: '451', description: "Mani, P.R.S. (Acc. No. 2027)", digitalArchive: 'NA', period: '1949-', url: '#' },
  { id: 'ic501', srNo: '452', description: "Manmohan Singh", digitalArchive: '610', period: '2004-2014', url: '#' },
  { id: 'ic502', srNo: '452 (a)', description: "Mappillai, K.C. Mammen See under Miscellaneous Items Sl.No.237", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic503', srNo: '453', description: "Mariwalla H. D. (Acc. No. 1246)", digitalArchive: 'NA', period: '1919-', url: '#' },
  { id: 'ic504', srNo: '454', description: "Masani, R. P.", digitalArchive: '4(1,4a', period: '1901-1967', url: '#' },
  { id: 'ic505', srNo: '455', description: "Mashruwala, Kishorlal G. (Acc. No. 471, In Gujarati, Also on microfilm , (Reprography))", digitalArchive: 'NA', period: '1925-1952', url: '#' },
  { id: 'ic506', srNo: '456', description: "Master, M. A.", digitalArchive: '136', period: '1913-1967', url: '#' },
  { id: 'ic507', srNo: '457', description: "Mathai, John (Dr) (Microfilm)", digitalArchive: 'NA', period: '1946-1950', url: '#' },
  { id: 'ic508', srNo: '458', description: "Mathai, M. O.", digitalArchive: '1A,2A', period: '1905-1964', url: '#' },
  { id: 'ic509', srNo: '459', description: "Mavalankar, G. V. (Partly on Microfilm , (Reprography), Closed with clause )", digitalArchive: '485', period: '1850-1958', url: '#' },
  { id: 'ic510', srNo: '460', description: "Mavalankar, P. G.", digitalArchive: '486', period: '1926-2002', url: '#' },
  { id: 'ic511', srNo: '461', description: "Mayor, Albert (Microfilm)", digitalArchive: 'NA', period: '1937-1972', url: '#' },
  { id: 'ic512', srNo: '462', description: "Mazharul Haque", digitalArchive: '190', period: '1910-1930', url: '#' },
  { id: 'ic513', srNo: '463', description: "Mazumdar, Shudha", digitalArchive: 'NA', period: '1911-1988', url: '#' },
  { id: 'ic514', srNo: '464', description: "Medhi, Bisnuram", digitalArchive: '190', period: '1947-1968', url: '#' },
  { id: 'ic515', srNo: '465', description: "Mehdi Nawaz Jung", digitalArchive: 'NA', period: '1960-1967', url: '#' },
  { id: 'ic516', srNo: '466', description: "Mehdi, S.M. (Acc. No. 2000)", digitalArchive: 'NA', period: '1942-2008', url: '#' },
  { id: 'ic517', srNo: '467', description: "Mehar Singh (Giani) (Acc. No. 1986)", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic518', srNo: '468', description: "Meherally, Yusuf", digitalArchive: '197', period: '1926-1955', url: '#' },
  { id: 'ic519', srNo: '469', description: "Mehrotra, Parasram", digitalArchive: '190LLX', period: '1921-1939', url: '#' },
  { id: 'ic520', srNo: '470', description: "Mehrotra, S. R. (Also on Microfilm)", digitalArchive: '103', period: '1935-1968', url: '#' },
  { id: 'ic521', srNo: '471', description: "Mehta, Chandralekha (Acc. No. 2051)", digitalArchive: 'NA', period: '1944-1966', url: '#' },
  { id: 'ic522', srNo: '472', description: "Mehta, G. L.", digitalArchive: '118', period: '1920-1995', url: '#' },
  { id: 'ic523', srNo: '473', description: "Mehta, Hansa", digitalArchive: '119(A)', period: '1920-1967', url: '#' },
  { id: 'ic524', srNo: '474', description: "Mehta, Jivraj (Dr.) (Also see under Mehta, Hansa)", digitalArchive: '119(B)', period: '1914-1971', url: '#' },
  { id: 'ic525', srNo: '475', description: "Mehta, Mohan Sinha", digitalArchive: '219', period: '1938-1969', url: '#' },
  { id: 'ic526', srNo: '476', description: "Mehta, Pherozeshah", digitalArchive: '53(a)', period: '1862-1910', url: '#' },
  { id: 'ic527', srNo: '477', description: "Mehta, Rohit (Acc. No. 1559)", digitalArchive: 'NA', period: '1928-1938', url: '#' },
  { id: 'ic528', srNo: '478', description: "Mehta, V. L.", digitalArchive: '93', period: '1909-1969', url: '#' },
  { id: 'ic529', srNo: '479', description: "Menon, Achutha (Acc. No. 1860)", digitalArchive: 'NA', period: '1977-1988', url: '#' },
  { id: 'ic530', srNo: '480', description: "Menon, C.P.S. (Acc. No. 2125)", digitalArchive: 'NA', period: '1931-', url: '#' },
  { id: 'ic531', srNo: '481', description: "Menon, K. A. Damodara", digitalArchive: '463', period: '1950-1996', url: '#' },
  { id: 'ic532', srNo: '482', description: "Menon, K. B.", digitalArchive: '51', period: '1937-1966', url: '#' },
  { id: 'ic533', srNo: '483', description: "Menon, K. P. K.", digitalArchive: '151', period: '1924-1954', url: '#' },
  { id: 'ic534', srNo: '484', description: "Menon, K. P. S.", digitalArchive: '210', period: '1898-1979', url: '#' },
  { id: 'ic535', srNo: '485', description: "Menon, Karthat Balachandran", digitalArchive: '547', period: '1934-2005', url: '#' },
  { id: 'ic536', srNo: '486', description: "Menon, Lakshmi, N.", digitalArchive: '464', period: '1932-1994', url: '#' },
  { id: 'ic537', srNo: '487', description: "Menon, M.G.K.", digitalArchive: 'NA', period: '1956-2016', url: '#' },
  { id: 'ic538', srNo: '488', description: "Menon, P. Govinda", digitalArchive: '190', period: '1963-1970', url: '#' },
  { id: 'ic539', srNo: '489', description: "Menon, R. Raghava (Acc. No. 1818)", digitalArchive: 'NA', period: '1938-1977', url: '#' },
  { id: 'ic540', srNo: '490', description: "Menon, V. K. Krishna", digitalArchive: '119', period: '1918-1974', url: '#' },
  { id: 'ic541', srNo: '491', description: "Menon, V. P. (Also on Microfilm)", digitalArchive: 'NA', period: '1937-1950', url: '#' },
  { id: 'ic542', srNo: '492', description: "Meston, James (Sir) (Microfilm)", digitalArchive: 'NA', period: '1912-1940', url: '#' },
  { id: 'ic543', srNo: '493', description: "Mir Mushtaq Ahmad", digitalArchive: '27', period: '1944-1963', url: '#' },
  { id: 'ic544', srNo: '494', description: "Mira Behn", digitalArchive: '131', period: '1918-1982', url: '#' },
  { id: 'ic545', srNo: '495', description: "Mishra, D. P.", digitalArchive: '146', period: '1922-1980', url: '#' },
  { id: 'ic546', srNo: '496', description: "Mishra, Govind", digitalArchive: 'NA', period: '1965-2005', url: '#' },
  { id: 'ic547', srNo: '497', description: "Mishra, Ramnandan", digitalArchive: '204', period: '1925-1954', url: '#' },
  { id: 'ic548', srNo: '498', description: "Mishra, Shiv Prasad (Acc. No. 1574)", digitalArchive: 'NA', period: '1942-', url: '#' },
  { id: 'ic549', srNo: '499', description: "Mishra, Vishvambhar (Acc. No. 1025)", digitalArchive: 'NA', period: '1943-1944', url: '#' },
  { id: 'ic550', srNo: '500', description: "Mitra, Asok", digitalArchive: '186A', period: '1901-1991', url: '#' },
  { id: 'ic551', srNo: '500 (a)', description: "Mitra, Asok", digitalArchive: '186A', period: '1901-1991', url: '#' },
  { id: 'ic552', srNo: '501', description: "Mitra, Roma", digitalArchive: '256', period: '1951-1967', url: '#' },
  { id: 'ic553', srNo: '502', description: "Mitter, P. C.", digitalArchive: '77', period: '1930-1932', url: '#' },
  { id: 'ic554', srNo: '503', description: "Mody, H. P.", digitalArchive: '53', period: '1874-1896', url: '#' },
  { id: 'ic555', srNo: '504', description: "Mohamed Ali (Maulana) (Acc.No. 898, 907, 958, 1003, Also on microfilm)", digitalArchive: 'NA', period: '1902-1932', url: '#' },
  { id: 'ic556', srNo: '505', description: "Mohta, Karnidan Singh Acc. No. 1087, 1093 Also on microfilm (Reprography)", digitalArchive: 'NA', period: '1900-2000', url: '#' },
  { id: 'ic557', srNo: '506', description: "Montagu, Edwin Samuel (Microfilm)", digitalArchive: 'Na', period: '1917-1922', url: '#' },
  { id: 'ic558', srNo: '507', description: "Mookerjee, Asutosh (Also on microfilm)", digitalArchive: '68 M', period: '1836-1925', url: '#' },
  { id: 'ic559', srNo: '508', description: "Mookerjee, Ganga Prasad", digitalArchive: 'NA', period: '1866-1991', url: '#' },
  { id: 'ic560', srNo: '509', description: "Mookerjee, Hemontho Kumar", digitalArchive: '362', period: '1883-1887', url: '#' },
  { id: 'ic561', srNo: '510', description: "Mookerjee, Syama Prasad (I - IX Installments)", digitalArchive: '79', period: '1901-1965', url: '#' },
  { id: 'ic562', srNo: '511', description: "Moonje, B. S.", digitalArchive: '45', period: '1898-1900', url: '#' },
  { id: 'ic563', srNo: '512', description: "Morley (Lord) (Microfilm)", digitalArchive: 'NA', period: '1905-1911', url: '#' },
  { id: 'ic564', srNo: '513', description: "Mountbatten (Lord) (Microfilm)", digitalArchive: 'NA', period: '1947-1948', url: '#' },
  { id: 'ic565', srNo: '514', description: "Mukerji, Dhan Gopal (Acc. No. 1961 Microfilm (Reprography))", digitalArchive: 'NA', period: '1928-1936', url: '#' },
  { id: 'ic566', srNo: '515', description: "Mukharjee, Sabyasachi (Acc. No. 1362)", digitalArchive: 'NA', period: '1981-1990', url: '#' },
  { id: 'ic567', srNo: '516', description: "Mukherjee, Anand Gopal", digitalArchive: '339', period: '1975-1989', url: '#' },
  { id: 'ic568', srNo: '517', description: "Mukherjee, Jatindranath (The collection also includes the papers of Prithwindra Mukherjee)", digitalArchive: '331', period: '1903-1915', url: '#' },
  { id: 'ic569', srNo: '518', description: "Mukherji, Sunil Acc. No. 1434", digitalArchive: 'NA', period: '1975-1985', url: '#' },
  { id: 'ic570', srNo: '518 (a)', description: "Mulk, Faridoon See under Faridoon Mulk", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic571', srNo: '519', description: "Munshi, K. M. (Microfilm Acc. No. 628)", digitalArchive: 'NA', period: '1913-1969', url: '#' },
  { id: 'ic572', srNo: '520', description: "Musafir, Gurmukh Singh", digitalArchive: '161', period: '1919-1976', url: '#' },
  { id: 'ic573', srNo: '521', description: "Nag, Kalidas", digitalArchive: '52', period: '1915-1967', url: '#' },
  { id: 'ic574', srNo: '522', description: "Nagasundaram, S.", digitalArchive: '190', period: '1926-1957', url: '#' },
  { id: 'ic575', srNo: '523', description: "Nahal, Chaman", digitalArchive: '553', period: '1970-2008', url: '#' },
  { id: 'ic576', srNo: '524', description: "Nahar, Bijoy Singh", digitalArchive: '428', period: '1923-1994', url: '#' },
  { id: 'ic577', srNo: '525', description: "Naidu, Padmaja", digitalArchive: '139', period: '1905-1975', url: '#' },
  { id: 'ic578', srNo: '526', description: "Naidu, R. Venkata Ratnam", digitalArchive: '165', period: '1909-1932', url: '#' },
  { id: 'ic579', srNo: '527', description: "Naidu Sarojini", digitalArchive: '139A', period: '1895-1949', url: '#' },
  { id: 'ic580', srNo: '527 (a)', description: "Naidu, M.G.", digitalArchive: 'NA', period: '1917-1949', url: '#' },
  { id: 'ic581', srNo: '527 (b)', description: "Naidu, Leilamani", digitalArchive: 'NA', period: '1912-1958', url: '#' },
  { id: 'ic582', srNo: '527 (c)', description: "Naidu, Jaisoorya", digitalArchive: 'NA', period: '1911-1949', url: '#' },
  { id: 'ic583', srNo: '527 (d)', description: "Naidu, Randheer", digitalArchive: 'NA', period: '1913-1945', url: '#' },
  { id: 'ic584', srNo: '528', description: "Nair, A. C. Kannan", digitalArchive: '248', period: '1920-1963', url: '#' },
  { id: 'ic585', srNo: '529', description: "Nair, C.K. (Microfilm (Reprography))", digitalArchive: 'NA', period: '1930-1935', url: '#' },
  { id: 'ic586', srNo: '530', description: "Nair, C. Sankaran (From a part of M. A. Candeth papers)", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic587', srNo: '531', description: "Nair, G. Sankaran (Also on microfilm (Reprography))", digitalArchive: '190', period: '1922-1966', url: '#' },
  { id: 'ic588', srNo: '532', description: "Nair, K. P. Madhavan", digitalArchive: '190', period: '1955-', url: '#' },
  { id: 'ic589', srNo: '533', description: "Nair, M. T. Vasudevan", digitalArchive: '480', period: '1995-2000', url: '#' },
  { id: 'ic590', srNo: '534', description: "Nair, N.A. Krishnan (Acc. No. 1955)", digitalArchive: 'NA', period: '1917-1981', url: '#' },
  { id: 'ic591', srNo: '535', description: "Nair, V. M (Acc. No. 1792)", digitalArchive: 'NA', period: '1950-1977', url: '#' },
  { id: 'ic592', srNo: '536', description: "Nambiar, A. C. N", digitalArchive: '71', period: '1947-1976', url: '#' },
  { id: 'ic593', srNo: '537', description: "Nambiar, T. C. Narayanan", digitalArchive: '481', period: '1950-1993', url: '#' },
  { id: 'ic594', srNo: '538', description: "Nambudiripad, K. (Acc. No. 295,298)", digitalArchive: 'NA', period: '1957-1971', url: '#' },
  { id: 'ic595', srNo: '539', description: "Nana Sita (Acc. NO. 1620)", digitalArchive: 'NA', period: '1962-1994', url: '#' },
  { id: 'ic596', srNo: '540', description: "Nanavati, Manilal B.", digitalArchive: '29', period: '1878-1967', url: '#' },
  { id: 'ic597', srNo: '541', description: "Nanavati, Saroj Behn (On Microfilm Also)", digitalArchive: 'NA', period: '1940-1971', url: '#' },
  { id: 'ic598', srNo: '542', description: "Nanda, B. R.", digitalArchive: '505', period: '1962-2002', url: '#' },
  { id: 'ic599', srNo: '543', description: "Nanda, Gulzarilal Microfilm", digitalArchive: 'NA', period: '1952-1978', url: '#' },
  { id: 'ic600', srNo: '543 (a)', description: "Nandini Sundar See under Sundar, Nandini", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic601', srNo: '544', description: "Nanhu Ram (Master) (Acc. No. 1067)", digitalArchive: 'NA', period: '1942-1972', url: '#' },
  { id: 'ic602', srNo: '545', description: "Naoroji, Dadabhai", digitalArchive: '4A,190', period: '1871-1913', url: '#' },
  { id: 'ic603', srNo: '546', description: "Naoroji, Rishad (Acc. No. 2013)", digitalArchive: 'NA', period: '1983-2011', url: '#' },
  { id: 'ic604', srNo: '547', description: "Narain (Sahai), Chitra (Acc. No. 2092)", digitalArchive: 'NA', period: '1988-1999', url: '#' },
  { id: 'ic605', srNo: '548', description: "Narayan, Madalsa", digitalArchive: '460', period: '1940-2000', url: '#' },
  { id: 'ic606', srNo: '548 (a)', description: "Narayan, Shriman See under Agarwal, Shriman Narayan", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic607', srNo: '549', description: "Narayanan, K.R.", digitalArchive: 'NA', period: '1954-2002', url: '#' },
  { id: 'ic608', srNo: '550', description: "Narendra Deva", digitalArchive: '280', period: '1909-1956', url: '#' },
  { id: 'ic609', srNo: '551', description: "Narielwala, P. A. (Acc. No.1110)", digitalArchive: 'NA', period: '1974-1984', url: '#' },
  { id: 'ic610', srNo: '552', description: "Nariman, G.K.", digitalArchive: '190', period: '-', url: '#' },
  { id: 'ic611', srNo: '553', description: "Natesan, G. A.", digitalArchive: '3A', period: '1899-1948', url: '#' },
  { id: 'ic612', srNo: '554', description: "Nath Pai, B.", digitalArchive: '104', period: '1945-1970', url: '#' },
  { id: 'ic613', srNo: '555', description: "Natwar Singh Acc. No. 2010 & 2011", digitalArchive: 'NA', period: '1954-1970', url: '#' },
  { id: 'ic614', srNo: '555 (a)', description: "Navaratna Rama Rao See under Rao, Navaratna Rama", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic615', srNo: '556', description: "Nayak, Shanti", digitalArchive: '277', period: '1947-1963', url: '#' },
  { id: 'ic616', srNo: '557', description: "Nayar, Sushila (Closed with clause)", digitalArchive: '383', period: '1936-1993', url: '#' },
  { id: 'ic617', srNo: '558', description: "Nayyar, Ishwar Das (Acc. No. 811)", digitalArchive: 'NA', period: '1931-1940', url: '#' },
  { id: 'ic618', srNo: '559', description: "Nehru, B.K.", digitalArchive: '498', period: '1929-1967', url: '#' },
  { id: 'ic619', srNo: '560', description: "Nehru, Jawaharlal (Post Independence)", digitalArchive: '2', period: '1947-1964', url: '#' },
  { id: 'ic620', srNo: '560 (a)', description: "Nehru, Jawaharlal", digitalArchive: '', period: '1903-1947', url: '#' },
  { id: 'ic621', srNo: '560 (b)', description: "Nehru, Jawaharlal", digitalArchive: '', period: '1903-1947', url: '#' },
  { id: 'ic622', srNo: '561', description: "Nehru, Motilal", digitalArchive: '1', period: '1883-1931', url: '#' },
  { id: 'ic623', srNo: '562', description: "Nehru, R. K.", digitalArchive: '444', period: '1948-1987', url: '#' },
  { id: 'ic624', srNo: '563', description: "Nehru, Rameshwari", digitalArchive: '26', period: '1928-1966', url: '#' },
  { id: 'ic625', srNo: '564', description: "Nehru, Sham Kumari", digitalArchive: '190', period: '1926-1927', url: '#' },
  { id: 'ic626', srNo: '565', description: "Nigam, Daya Narain (Acc. No. 1099, Also see under Premchand (Munshi))", digitalArchive: 'NA', period: '1903-1942', url: '#' },
  { id: 'ic627', srNo: '566', description: "Nijalingappa, S.", digitalArchive: '195', period: '1937-1980', url: '#' },
  { id: 'ic628', srNo: '567', description: "Nilkanth, Vidyagauri", digitalArchive: '153', period: '1889-1941', url: '#' },
  { id: 'ic629', srNo: '568', description: "Nimbkar, Krishnabai", digitalArchive: '305', period: '1920-1985', url: '#' },
  { id: 'ic630', srNo: '569', description: "Niranjan Singh Talib", digitalArchive: '190', period: '1957-1960', url: '#' },
  { id: 'ic631', srNo: '570', description: "Noronha, R. P.", digitalArchive: '245', period: '1951-1981', url: '#' },
  { id: 'ic632', srNo: '571', description: "Olcott’s Diary (Col.) (Microfilm)", digitalArchive: 'NA', period: '1878-1907', url: '#' },
  { id: 'ic633', srNo: '572', description: "Omar Khalidi (Acc. No. 1796)", digitalArchive: 'NA', period: '1948-1950', url: '#' },
  { id: 'ic634', srNo: '573', description: "Ouwerkerk, L.C.M. (Microfilm (Reprography))", digitalArchive: 'NA', period: '1936-1938', url: '#' },
  { id: 'ic635', srNo: '574', description: "Padmanabhan, A.", digitalArchive: '519', period: '1986-2004', url: '#' },
  { id: 'ic636', srNo: '575', description: "Pai, A.V.", digitalArchive: '515', period: '1939-1950', url: '#' },
  { id: 'ic637', srNo: '575 (a)', description: "Pakrashi, C.R. See Miscellaneous Items Sl.No.202", digitalArchive: 'NA', period: '1990-', url: '#' },
  { id: 'ic638', srNo: '576', description: "Pakvasa, M. M.", digitalArchive: '325', period: '1944-1961', url: '#' },
  { id: 'ic639', srNo: '577', description: "Paliwal, Chiranjilal", digitalArchive: '190', period: '1930-1964', url: '#' },
  { id: 'ic640', srNo: '578', description: "Paliwal, S.K.D. (Microfilm (Reprography))", digitalArchive: 'NA', period: '1938-1943', url: '#' },
  { id: 'ic641', srNo: '579', description: "Palpu, Padmanabhan (Dr.)", digitalArchive: '175', period: '1891-1952', url: '#' },
  { id: 'ic642', srNo: '580', description: "Pandit, Nanak Chand", digitalArchive: '83', period: '1931-1965', url: '#' },
  { id: 'ic643', srNo: '581', description: "Pandit, Ramu", digitalArchive: 'NA', period: '1949-2005', url: '#' },
  { id: 'ic644', srNo: '582', description: "Pandit, Vijaya Lakshmi", digitalArchive: '482', period: '1911-1986', url: '#' },
  { id: 'ic645', srNo: '583', description: "Pandya, Kamalashanker", digitalArchive: '137', period: '1923-1985', url: '#' },
  { id: 'ic646', srNo: '584', description: "Pant, Apa B.", digitalArchive: '216', period: '1922-1986', url: '#' },
  { id: 'ic647', srNo: '585', description: "Pant, G. B. Also on Microfilm", digitalArchive: 'NA', period: '1908-1968', url: '#' },
  { id: 'ic648', srNo: '585 (a)', description: "Pant, Kusum See under Miscellaneous Items Sl.No.161", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic649', srNo: '586', description: "Pant, Pitambar (Also see under 190 (LII))", digitalArchive: '535', period: '1946-1964', url: '#' },
  { id: 'ic650', srNo: '587', description: "Parameswaran, M.P.", digitalArchive: 'NA', period: '1964-2013', url: '#' },
  { id: 'ic651', srNo: '588', description: "Paranjpye, R. P.", digitalArchive: '5', period: '1896-1966', url: '#' },
  { id: 'ic652', srNo: '589', description: "Parikh, Suryakant", digitalArchive: '190', period: '1962-1963', url: '#' },
  { id: 'ic653', srNo: '590', description: "Parmanand Prasad (Acc. No. 2113)", digitalArchive: 'NA', period: '1945-1967', url: '#' },
  { id: 'ic654', srNo: '591', description: "Patel, Chimanbhai", digitalArchive: '484', period: '1961-1996', url: '#' },
  { id: 'ic655', srNo: '592', description: "Patel, Prabhubhai (Acc. No. 1567)", digitalArchive: 'NA', period: '1947-', url: '#' },
  { id: 'ic656', srNo: '593', description: "Patel, Vallabhbhai (Microfilm (Reprography))", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic657', srNo: '594', description: "Patel, Vithalbhai J.", digitalArchive: '36', period: '1926-1929', url: '#' },
  { id: 'ic658', srNo: '595', description: "Pathak, R.S. (Acc. No. 1966)", digitalArchive: 'NA', period: '1970-2007', url: '#' },
  { id: 'ic659', srNo: '596', description: "Patil, S. K.", digitalArchive: '215', period: '1957-1981', url: '#' },
  { id: 'ic660', srNo: '596 (a)', description: "Patil, Tukaram Baburao See under Miscellaneous Items Sl.No.72", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic661', srNo: '597', description: "Patro, A. P.", digitalArchive: '98', period: '1911-1951', url: '#' },
  { id: 'ic662', srNo: '597 (a)', description: "Pattabhi Sitaramayya See under Sitaramayya, B. Pattabhi", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic663', srNo: '598', description: "Pattani, Prabhashankar", digitalArchive: '348', period: '1921-1937', url: '#' },
  { id: 'ic664', srNo: '598 (a)', description: "Patwardhan, Achyut See under Krishna Nath", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic665', srNo: '599', description: "Pavry, Bapsy Banoo", digitalArchive: '190', period: '1927-1955', url: '#' },
  { id: 'ic666', srNo: '599 (a)', description: "Petit, J., (Mrs.) See under Miscellaneous Items Sl.No.17", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic667', srNo: '600', description: "Phadnis, Urmila", digitalArchive: '356', period: '1920-1994', url: '#' },
  { id: 'ic668', srNo: '601', description: "Pillai, A. K.", digitalArchive: '483', period: '1922-1996', url: '#' },
  { id: 'ic669', srNo: '601 (a)', description: "Pillai, Champakraman", digitalArchive: 'NA', period: '1908-1934', url: '#' },
  { id: 'ic670', srNo: '601 (b)', description: "Pillai, Champakraman", digitalArchive: '', period: '1908-1934', url: '#' },
  { id: 'ic671', srNo: '602', description: "Pillai, Chidambaram (Acc. No. 1037,1291)", digitalArchive: 'NA', period: '1892-1936', url: '#' },
  { id: 'ic672', srNo: '603', description: "Pillai, G. P.", digitalArchive: '333', period: '1877-1903', url: '#' },
  { id: 'ic673', srNo: '604', description: "Pillai, Lakshmi", digitalArchive: 'NA', period: '1935-1972', url: '#' },
  { id: 'ic674', srNo: '605', description: "Pillai, Nanoo", digitalArchive: '233', period: '1872-1886', url: '#' },
  { id: 'ic675', srNo: '606', description: "Pillai, P. K. (Also on microfilm (Reprography)", digitalArchive: '48', period: '1892-1939', url: '#' },
  { id: 'ic676', srNo: '607', description: "Pillai, Pattom Thanu", digitalArchive: '50', period: '1938-1957', url: '#' },
  { id: 'ic677', srNo: '608', description: "Pillai, Swadesabhimani Ramkrishna", digitalArchive: 'NA', period: '1903-1981', url: '#' },
  { id: 'ic678', srNo: '609', description: "Pillay, Ramy (Acc. No. 1619)", digitalArchive: 'NA', period: '1986-1997', url: '#' },
  { id: 'ic679', srNo: '610', description: "Pitti, Badri Vishal", digitalArchive: '394', period: '1942-1977', url: '#' },
  { id: 'ic680', srNo: '611', description: "Poddar, S. S. Includes his family papers", digitalArchive: 'NA', period: '1863-1945', url: '#' },
  { id: 'ic681', srNo: '611 (a)', description: "Polak, H. S. L. Acc. No. 1472 See under E.S. Reddy papers", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic682', srNo: '612', description: "Poonacha, C. M. (Acc. No. 1333)", digitalArchive: 'NA', period: '1950-1969', url: '#' },
  { id: 'ic683', srNo: '613', description: "Prasad, N. Giri Acc. No. 1641", digitalArchive: 'NA', period: '1978-1997', url: '#' },
  { id: 'ic684', srNo: '613 (a)', description: "Pratap Chand Soni See under Soni, Pratap Chand", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic685', srNo: '613 (b)', description: "Pratap Singh (Gyani) See under Gyani Pratap Singh", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic686', srNo: '614', description: "Premchand Munshi", digitalArchive: '241', period: '1909-1936', url: '#' },
  { id: 'ic687', srNo: '615', description: "Prinsep Family papers", digitalArchive: '457', period: '1819-1992', url: '#' },
  { id: 'ic688', srNo: '616', description: "Pritam Singh Gujran and Jagir Singh Phaguwalia (Also on microfilm (Reprography))", digitalArchive: 'NA', period: '1961-1963', url: '#' },
  { id: 'ic689', srNo: '617', description: "Puri, Balraj", digitalArchive: 'NA', period: '1953-1995', url: '#' },
  { id: 'ic690', srNo: '618', description: "Puri, B.N. Acc. No. 1519", digitalArchive: 'NA', period: '1938-1965', url: '#' },
  { id: 'ic691', srNo: '618 (a)', description: "Puri, G. L. See under Miscellansous Item S.No.143", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic692', srNo: '619', description: "Purohit Swami", digitalArchive: '274', period: '1913-1966', url: '#' },
  { id: 'ic693', srNo: '620', description: "Purshotamdas Thakurdas", digitalArchive: '11', period: '1900-1959', url: '#' },
  { id: 'ic694', srNo: '621', description: "Purshottam Trikamdas", digitalArchive: '122', period: '1938-1969', url: '#' },
  { id: 'ic695', srNo: '622', description: "Pyarelal (Also on microfilm (Reprography),Closed with clause)", digitalArchive: '416A', period: '1886-1987', url: '#' },
  { id: 'ic696', srNo: '623', description: "(Lala) Radha Krishan (Acc. No. 2056)", digitalArchive: 'NA', period: '1920-1939', url: '#' },
  { id: 'ic697', srNo: '624', description: "Rahman, A.", digitalArchive: '452', period: '1938-1999', url: '#' },
  { id: 'ic698', srNo: '624 (a)', description: "Rai, (Babu) Gulab See under (Babu) Gulab Rai", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic699', srNo: '624 (b)', description: "Raina, Pt. Sheo Narain See under Miscellaneous Items Sl.No.37", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic700', srNo: '625', description: "Raj Bahadur (Also on microfilm ,(Reprography) Closed with clause)", digitalArchive: 'NA', period: '1935-1987', url: '#' },
  { id: 'ic701', srNo: '626', description: "Raja Bakshi", digitalArchive: '190', period: '1935-1951', url: '#' },
  { id: 'ic702', srNo: '627', description: "Rajabhoj, P. N. (ACC. No. 849,900)", digitalArchive: 'NA', period: '1955-1962', url: '#' },
  { id: 'ic703', srNo: '628', description: "Rajagopalachari, C.", digitalArchive: '342', period: '1913-1972', url: '#' },
  { id: 'ic704', srNo: '628 (a)', description: "Rajagopalachari, C.", digitalArchive: '342', period: '1913-1972', url: '#' },
  { id: 'ic705', srNo: '628 (b)', description: "Rajagopalachari, C.", digitalArchive: '342', period: '1913-1972', url: '#' },
  { id: 'ic706', srNo: '628 (c)', description: "Rajagopalachari, C.", digitalArchive: '342', period: '1913-1972', url: '#' },
  { id: 'ic707', srNo: '629', description: "Rajah, M. C.", digitalArchive: '97', period: '1929-1942', url: '#' },
  { id: 'ic708', srNo: '630', description: "Rajalingam, M.S. (Acc. No. 1978)", digitalArchive: 'NA', period: '1949-1958', url: '#' },
  { id: 'ic709', srNo: '631', description: "Rajendra Prasad Also on microfilm", digitalArchive: '443', period: '1935-1941', url: '#' },
  { id: 'ic710', srNo: '631 (a)', description: "Rajendra Singh Beohar See under Beohar, Rajendra Singh", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic711', srNo: '632', description: "Ram Chandra (Baba)", digitalArchive: '163', period: '1918-1955', url: '#' },
  { id: 'ic712', srNo: '633', description: "Ram Chandra (Comrade)", digitalArchive: '276', period: '1847-1994', url: '#' },
  { id: 'ic713', srNo: '634', description: "Ramchandani, Atmaram (Acc. No. 1204)", digitalArchive: 'NA', period: '1945-', url: '#' },
  { id: 'ic714', srNo: '635', description: "Ramiah, K", digitalArchive: '322', period: '1931-1987', url: '#' },
  { id: 'ic715', srNo: '636', description: "Ramunny, Mukot (Acc. No. 1833)", digitalArchive: 'NA', period: '1946-1988', url: '#' },
  { id: 'ic716', srNo: '637', description: "Ranga, N. G.", digitalArchive: '90', period: '1936-1963', url: '#' },
  { id: 'ic717', srNo: '638', description: "Rangasami, Amrita", digitalArchive: '563', period: '1902-2010', url: '#' },
  { id: 'ic718', srNo: '639', description: "Rangaswami, K. V.", digitalArchive: '239', period: '1903-1954', url: '#' },
  { id: 'ic719', srNo: '640', description: "Rangnekar, D. K.", digitalArchive: '326', period: '1952-1984', url: '#' },
  { id: 'ic720', srNo: '641', description: "Rao, B. Joga and B.V. Nath", digitalArchive: 'NA', period: '1929-1955', url: '#' },
  { id: 'ic721', srNo: '642', description: "Rao, B. Shiva", digitalArchive: '130', period: '1928-1963', url: '#' },
  { id: 'ic722', srNo: '643', description: "Rao , C.B. (See under Chintamani, C.Y. Papers )", digitalArchive: '10', period: '-', url: '#' },
  { id: 'ic723', srNo: '644', description: "Rao, C. Hanumantha (Acc. No. 1979)", digitalArchive: 'NA', period: '1959-2000', url: '#' },
  { id: 'ic724', srNo: '645', description: "Rao, E. Raghavendra", digitalArchive: '16', period: '1919-1963', url: '#' },
  { id: 'ic725', srNo: '646', description: "Rao, Kala Venkata (Acc. No. 1316)", digitalArchive: 'NA', period: '1921-1944', url: '#' },
  { id: 'ic726', srNo: '647', description: "Rao, Navaratna Rama (Acc. No. 1881)", digitalArchive: 'NA', period: '1947-1972', url: '#' },
  { id: 'ic727', srNo: '648', description: "Rao, P. Kodanda", digitalArchive: '84', period: '1908-1975', url: '#' },
  { id: 'ic728', srNo: '649', description: "Rao, P. Vaman (Acc. No. 1898)", digitalArchive: 'NA', period: '1946-1957', url: '#' },
  { id: 'ic729', srNo: '650', description: "Rao, S. Prakasa (Acc.No. 1422)", digitalArchive: 'NA', period: '1952-1988', url: '#' },
  { id: 'ic730', srNo: '651', description: "Rao, S.R.", digitalArchive: '589', period: '1958-2006', url: '#' },
  { id: 'ic731', srNo: '652', description: "Rao, Thirumal", digitalArchive: '190', period: '1950-1970', url: '#' },
  { id: 'ic732', srNo: '653', description: "Rao, V. K. R. V.", digitalArchive: 'NA', period: '1957-2009', url: '#' },
  { id: 'ic733', srNo: '654', description: "Rao, V. S. Narayana (Acc. No. 1410)", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic734', srNo: '655', description: "Rath, Radhanath", digitalArchive: 'NA', period: '1918-1988', url: '#' },
  { id: 'ic735', srNo: '656', description: "Rau, B.N.", digitalArchive: '6', period: '1925-1954', url: '#' },
  { id: 'ic736', srNo: '657', description: "Rau, M. Chalapathi (Also on microfilm (Reprography))", digitalArchive: 'NA', period: '1928-1983', url: '#' },
  { id: 'ic737', srNo: '658', description: "Rau, R. L. (Cap.)", digitalArchive: '441', period: '1880-2001', url: '#' },
  { id: 'ic738', srNo: '659', description: "Rauf , M.A.", digitalArchive: '365', period: '1950-1964', url: '#' },
  { id: 'ic739', srNo: '660', description: "Rawat, Jagan Prasad", digitalArchive: '618', period: '1904-1990', url: '#' },
  { id: 'ic740', srNo: '661', description: "Ray, P.K.", digitalArchive: 'NA', period: '1869-1930', url: '#' },
  { id: 'ic741', srNo: '662', description: "Ray , Rabi (Microfilm (Two diaries containing letters of Rammanohar Lohia))", digitalArchive: 'NA', period: '1962-1963', url: '#' },
  { id: 'ic742', srNo: '663', description: "Ray , Renuka", digitalArchive: '243', period: '1900-1982', url: '#' },
  { id: 'ic743', srNo: '664', description: "Ray , Sarla", digitalArchive: '55', period: '1904-1915', url: '#' },
  { id: 'ic744', srNo: '665', description: "Reading (Lord) ( Microfilm)", digitalArchive: 'NA', period: '1921-1926', url: '#' },
  { id: 'ic745', srNo: '666', description: "Reddi, S. Muthulakshmi", digitalArchive: '99', period: '1915-1963', url: '#' },
  { id: 'ic746', srNo: '667', description: "Reddiar, O. P. Ramaswamy", digitalArchive: '81', period: '1932-1955', url: '#' },
  { id: 'ic747', srNo: '668', description: "Reddy, C.R.", digitalArchive: '61', period: '1904-1953', url: '#' },
  { id: 'ic748', srNo: '669', description: "Reddy, E.S. (31st Instalment Closed with clause)", digitalArchive: '398', period: '1888-2000', url: '#' },
  { id: 'ic749', srNo: '670', description: "Reddy, K. Brahmananda Acc. No. 1492", digitalArchive: 'NA', period: '1988-1990', url: '#' },
  { id: 'ic750', srNo: '670 (a)', description: "Rikhi Jaipal See under Jaipal, Rikhi", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic751', srNo: '671', description: "Roja Muthiah (Acc. No. 1438)", digitalArchive: 'NA', period: '1987-1993', url: '#' },
  { id: 'ic752', srNo: '672', description: "Romesh Chandra", digitalArchive: '477', period: '1938-2000', url: '#' },
  { id: 'ic753', srNo: '673', description: "Roosevelt, Franklin D. Library", digitalArchive: '95', period: '1933-1945', url: '#' },
  { id: 'ic754', srNo: '674', description: "Roy, B.C.", digitalArchive: '66', period: '1920-1962', url: '#' },
  { id: 'ic755', srNo: '675', description: "Roy Burman, B. K. (See under Indira Gandhi papers (II Inst.))", digitalArchive: 'NA', period: '1980-', url: '#' },
  { id: 'ic756', srNo: '676', description: "Roy Choudhuri, Subrata, Roy Choudhury, Manmatha Nath (See under Santosh, Raja)", digitalArchive: '190', period: '1938-1945', url: '#' },
  { id: 'ic757', srNo: '676 (a)', description: "Roy Choudhury, Manmatha Nath See under Santosh, Raja of", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic758', srNo: '677', description: "Roy, Dunu", digitalArchive: '571', period: '1960-1998', url: '#' },
  { id: 'ic759', srNo: '678', description: "Roy, M.N. (I Inst.)", digitalArchive: '70', period: '1922-1969', url: '#' },
  { id: 'ic760', srNo: '678 (a)', description: "Roy, M.N. (II - V Inst.)", digitalArchive: '70', period: '1922-1969', url: '#' },
  { id: 'ic761', srNo: '679', description: "Roy, Motilal Microfilm", digitalArchive: 'NA', period: '1912-1920', url: '#' },
  { id: 'ic762', srNo: '679 (a)', description: "Roy, S.P. See under Miscellaneous Items Sl.No.5", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic763', srNo: '680', description: "Rukmini Lakshmipathi (Acc. No. 1036)", digitalArchive: 'NA', period: '1930-1931', url: '#' },
  { id: 'ic764', srNo: '681', description: "Russell, Bertrand", digitalArchive: '190', period: '1912-1965', url: '#' },
  { id: 'ic765', srNo: '682', description: "Russell, Henry Norris (Acc. No. 1322)", digitalArchive: 'NA', period: '1921-1936', url: '#' },
  { id: 'ic766', srNo: '683', description: "Rustamji, K. F.", digitalArchive: '320', period: '1928-1998', url: '#' },
  { id: 'ic767', srNo: '684', description: "Rustomji N. K.", digitalArchive: '405', period: '1942-1994', url: '#' },
  { id: 'ic768', srNo: '685', description: "Saadulla, Syed M.", digitalArchive: '223', period: '1932-1965', url: '#' },
  { id: 'ic769', srNo: '685 (a)', description: "Sabarmati Collection of Gandhi papers Microfilm (Reprography) See under Gandhi Smarak Sangrahalaya Sabarmati Ashram, Ahmedabad Sl.No. 51", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic770', srNo: '686', description: "Sachar, Bhimsen", digitalArchive: '49', period: '1910-1978', url: '#' },
  { id: 'ic771', srNo: '687', description: "Sachar, Rajinder", digitalArchive: '461', period: '1923-2017', url: '#' },
  { id: 'ic772', srNo: '688', description: "Saha, A. K", digitalArchive: '367', period: '1931-1990', url: '#' },
  { id: 'ic773', srNo: '689', description: "Saha, Meghnad", digitalArchive: '92', period: '1921-1958', url: '#' },
  { id: 'ic774', srNo: '690', description: "Sahai, Jainarain Acc.No. 1139,Prison Diary of Jayaprakash Narayan (xerox)", digitalArchive: 'NA', period: '1944-', url: '#' },
  { id: 'ic775', srNo: '691', description: "Sahai, Raghubir", digitalArchive: '188', period: '1915-1977', url: '#' },
  { id: 'ic776', srNo: '692', description: "Sahai, Ram", digitalArchive: '327', period: '1948-1988', url: '#' },
  { id: 'ic777', srNo: '693', description: "Sahajanand Saraswati (Partly on microfilm)", digitalArchive: '121(A)', period: '1911-1953', url: '#' },
  { id: 'ic778', srNo: '694', description: "Sahasrabudhe, Annasaheb", digitalArchive: '278', period: '1946-1978', url: '#' },
  { id: 'ic779', srNo: '695', description: "Sahay, Anand Mohan (Acc. No.1713, 1740 and 1769)", digitalArchive: 'NA', period: '1929-1967', url: '#' },
  { id: 'ic780', srNo: '696', description: "Sahay, Shivpujan Also on microfilm (Reprography)", digitalArchive: '473', period: '1912-1963', url: '#' },
  { id: 'ic781', srNo: '697', description: "Sahagal, Nayantara (Closed with clause)", digitalArchive: 'NA', period: '1910-2007', url: '#' },
  { id: 'ic782', srNo: '698', description: "Sahni, Birbal", digitalArchive: '164', period: '1920-1946', url: '#' },
  { id: 'ic783', srNo: '699', description: "Sahni, Ruchi Ram (Acc. No. 2089,2102)", digitalArchive: 'NA', period: '1914-1978', url: '#' },
  { id: 'ic784', srNo: '700', description: "Saiyidain, K.G", digitalArchive: 'NA', period: '1947-1984', url: '#' },
  { id: 'ic785', srNo: '701', description: "Saklatwala, Shapurji", digitalArchive: '190', period: '1934-1964', url: '#' },
  { id: 'ic786', srNo: '702', description: "Saksena, Mohanlal", digitalArchive: '21', period: '1938-1965', url: '#' },
  { id: 'ic787', srNo: '703', description: "Salim Ali (Dr.)", digitalArchive: '319', period: '1908-1987', url: '#' },
  { id: 'ic788', srNo: '704', description: "Samarth, M.B.", digitalArchive: '206', period: '1942-1961', url: '#' },
  { id: 'ic789', srNo: '705', description: "Sane Guruji", digitalArchive: '184', period: '-', url: '#' },
  { id: 'ic790', srNo: '706', description: "Sankalia, H. D. (Acc. No. 1311)", digitalArchive: 'NA', period: '1987-1989', url: '#' },
  { id: 'ic791', srNo: '707', description: "Santhanam, K. (Also see Miscellaneous Items Sl.No.30)", digitalArchive: '57', period: '1957-1970', url: '#' },
  { id: 'ic792', srNo: '708', description: "Santosh (Raja of)", digitalArchive: '102', period: '1924-1941', url: '#' },
  { id: 'ic793', srNo: '709', description: "Santram, B.A.", digitalArchive: '430', period: '1935-1988', url: '#' },
  { id: 'ic794', srNo: '710', description: "Sanyal, Sachindra Nath", digitalArchive: 'NA', period: '1925-1983', url: '#' },
  { id: 'ic795', srNo: '711', description: "Sapru, T. B. (Partly on microfilm)", digitalArchive: '157', period: '1911-1949', url: '#' },
  { id: 'ic796', srNo: '712', description: "Sarabhai, Mridula (Also on Microfilm)", digitalArchive: 'NA', period: '1920-1974', url: '#' },
  { id: 'ic797', srNo: '713', description: "Sarala Behn", digitalArchive: '231', period: '1978-1982', url: '#' },
  { id: 'ic798', srNo: '714', description: "Sarda, Chand Karan", digitalArchive: '18', period: '1915-1967', url: '#' },
  { id: 'ic799', srNo: '715', description: "Sarda, Har Bilas", digitalArchive: '62', period: '1886-1951', url: '#' },
  { id: 'ic800', srNo: '716', description: "Sarkar, Nalini Ranjan", digitalArchive: 'NA', period: '1933-1952', url: '#' },
  { id: 'ic801', srNo: '717', description: "Sarmah, Debeswar", digitalArchive: '156', period: '1938-1980', url: '#' },
  { id: 'ic802', srNo: '717 (a)', description: "(Rani) Saroj Gaurihar See under Rawat, Jagan Prasad", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic803', srNo: '718', description: "Sastri, R. V. Peri (Acc. No. 1342)", digitalArchive: 'NA', period: '1989-1990', url: '#' },
  { id: 'ic804', srNo: '719', description: "Sastri, T. R. Venkatarama", digitalArchive: '101', period: '1912-1958', url: '#' },
  { id: 'ic805', srNo: '720', description: "Sastri, V. S. Srinivasa (on Microfilm also)", digitalArchive: '100', period: '1904-1969', url: '#' },
  { id: 'ic806', srNo: '721', description: "Sathaye, D. D.", digitalArchive: '9', period: '1918-1945', url: '#' },
  { id: 'ic807', srNo: '722', description: "Sathaye, V. D.", digitalArchive: '28', period: '1920-1921', url: '#' },
  { id: 'ic808', srNo: '723', description: "Satya Bhakta (First Indian Communist Conference Papers 1925)", digitalArchive: '190', period: '1924-1926', url: '#' },
  { id: 'ic809', srNo: '724', description: "Satyamurti, S. (Partly on microfilm)", digitalArchive: '38', period: '1909-1988', url: '#' },
  { id: 'ic810', srNo: '725', description: "Savarkar, V. D. (Microfilm)", digitalArchive: 'NA', period: '1924-1945', url: '#' },
  { id: 'ic811', srNo: '726', description: "Sayani, Kulsum (Begum)", digitalArchive: '37', period: '1940-1955', url: '#' },
  { id: 'ic812', srNo: '727', description: "Scindia, Madhavrao Acc. No. 1762", digitalArchive: 'NA', period: '1992-2001', url: '#' },
  { id: 'ic813', srNo: '728', description: "Sen, G.E. Boshi", digitalArchive: '262', period: '1927-1982', url: '#' },
  { id: 'ic814', srNo: '729', description: "Sen, lllina", digitalArchive: 'NA', period: '1995-2010', url: '#' },
  { id: 'ic815', srNo: '730', description: "Sen, Jai", digitalArchive: '566', period: '1977-2008', url: '#' },
  { id: 'ic816', srNo: '731', description: "Sen, P.C. (Acc. No. 1508)", digitalArchive: '392', period: '1947-1990', url: '#' },
  { id: 'ic817', srNo: '732', description: "Sen, Santosh Kumar", digitalArchive: '190', period: '1921-1941', url: '#' },
  { id: 'ic818', srNo: '733', description: "Sen, Sukumar", digitalArchive: '468', period: '1922-1987', url: '#' },
  { id: 'ic819', srNo: '733 (a)', description: "Sengupta, J. M. (Mrs.) See Miscellaneous Items Sl.No.41", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic820', srNo: '734', description: "Sengupta, Promode", digitalArchive: '143A', period: '1967-1968', url: '#' },
  { id: 'ic821', srNo: '735', description: "Setalvad, Chimanlal", digitalArchive: '73', period: '1899-1940', url: '#' },
  { id: 'ic822', srNo: '736', description: "Sethi, Lehna Singh (Biography only, Acc. No. 1396)", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic823', srNo: '737', description: "Sethna, Phiroze", digitalArchive: '44', period: '1897-1938', url: '#' },
  { id: 'ic824', srNo: '738', description: "Shah, Madhuri", digitalArchive: '336', period: '1969-1988', url: '#' },
  { id: 'ic825', srNo: '739', description: "Shah, Munnalal G.", digitalArchive: '120', period: '1920-1972', url: '#' },
  { id: 'ic826', srNo: '740', description: "Shahane, M.D. (Acc. No. 1147, 1214)", digitalArchive: 'NA', period: '1959-1963', url: '#' },
  { id: 'ic827', srNo: '741', description: "Shamlal (Lala)", digitalArchive: '148', period: '1940-1957', url: '#' },
  { id: 'ic828', srNo: '742', description: "Shankardass, R.K.P.", digitalArchive: 'NA', period: '1991-2001', url: '#' },
  { id: 'ic829', srNo: '743', description: "Shankarlal of Delhi", digitalArchive: '190', period: '1942-1943', url: '#' },
  { id: 'ic830', srNo: '744', description: "Shankarrao Deo", digitalArchive: '159', period: '1934-1972', url: '#' },
  { id: 'ic831', srNo: '745', description: "Sharat, Satyendra", digitalArchive: '617', period: '1923-2010', url: '#' },
  { id: 'ic832', srNo: '746', description: "Sharma, Bhagwat Dayal", digitalArchive: '380', period: '1941-1997', url: '#' },
  { id: 'ic833', srNo: '747', description: "Sharma, Dhanraj", digitalArchive: 'NA', period: '1933-1968', url: '#' },
  { id: 'ic834', srNo: '748', description: "Sharma, Din Dayalu (Pt.)", digitalArchive: '141', period: '1881-1993', url: '#' },
  { id: 'ic835', srNo: '749', description: "Sharma, Hari Dev", digitalArchive: '502', period: '1904-2001', url: '#' },
  { id: 'ic836', srNo: '750', description: "Sharma, Harihar Swarup", digitalArchive: '414', period: '1901-1977', url: '#' },
  { id: 'ic837', srNo: '751', description: "Sharma, Jhabarmal (Closed with Clause)", digitalArchive: '183', period: '1893-1899', url: '#' },
  { id: 'ic838', srNo: '752', description: "Sharma, K.L (Acc. No. 1390 , 1993)", digitalArchive: 'NA', period: '1942-1944', url: '#' },
  { id: 'ic839', srNo: '753', description: "Sharma, Khusiram (Also see under Rewari Town Congress Committee,Sl. No.110)", digitalArchive: '202', period: '1944-1956', url: '#' },
  { id: 'ic840', srNo: '754', description: "Sharma, Neki Ram", digitalArchive: '147', period: '1908-1953', url: '#' },
  { id: 'ic841', srNo: '755', description: "Sharma, Shankar Dayal", digitalArchive: '479', period: '1952-1997', url: '#' },
  { id: 'ic842', srNo: '756', description: "Sharma, Shiv (Pt.)", digitalArchive: '313', period: '1927-1980', url: '#' },
  { id: 'ic843', srNo: '757', description: "Sharma, Shri Ram Acc. No. 1338 & 1573", digitalArchive: 'NA', period: '1976-1991', url: '#' },
  { id: 'ic844', srNo: '758', description: "Sharma, Vimala", digitalArchive: '491', period: '1985-2000', url: '#' },
  { id: 'ic845', srNo: '758 (a)', description: "Sharma, Vishvanath See under Krishna Nath", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic846', srNo: '759', description: "Sharma, Y.D.", digitalArchive: 'NA', period: '1939-2003', url: '#' },
  { id: 'ic847', srNo: '759 (a)', description: "Shastri, Harihar Nath See under Harihar Nath Shastri", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic848', srNo: '760', description: "Shastri, Lal Bahadur", digitalArchive: '397', period: '1926-1966', url: '#' },
  { id: 'ic849', srNo: '761', description: "Shastri, S. Gopal Acc. No. 1929", digitalArchive: 'NA', period: '1966-2006', url: '#' },
  { id: 'ic850', srNo: '762', description: "Shaukat Ali (Maulana) (Microfilm also)", digitalArchive: 'NA', period: '1911-1930', url: '#' },
  { id: 'ic851', srNo: '763', description: "Shekhar Singh (II Inst. Closed with clause)", digitalArchive: '530', period: '1961-2005', url: '#' },
  { id: 'ic852', srNo: '764', description: "Sherwani, H. K. (Prof.)", digitalArchive: '108', period: '1909-1976', url: '#' },
  { id: 'ic853', srNo: '765', description: "Sherwani, M. R. Acc. No. 728 Also on microfilm (Reprography)", digitalArchive: 'NA', period: '1946-1981', url: '#' },
  { id: 'ic854', srNo: '765 (a)', description: "Shiva Rao, B. See under Rao, B. Shiva", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic855', srNo: '765 (b)', description: "Shriman Narayan See under Agarwal, Shriman Narayan Also on microfilm", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic856', srNo: '766', description: "Shukla, Ramchandra Acharya", digitalArchive: '309', period: '1928-1987', url: '#' },
  { id: 'ic857', srNo: '767', description: "Shukla, Ramchandra Acharya", digitalArchive: '558', period: '1905-1940', url: '#' },
  { id: 'ic858', srNo: '768', description: "Shukla, Shyama Charan", digitalArchive: '542', period: '1976-2007', url: '#' },
  { id: 'ic859', srNo: '769', description: "Shukla, Prayag Dutt", digitalArchive: '190', period: '1916-1944', url: '#' },
  { id: 'ic860', srNo: '770', description: "Simeon, (Dr.) Dilip", digitalArchive: 'NA', period: '1869-1963', url: '#' },
  { id: 'ic861', srNo: '771', description: "Simeon, E.J.", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic862', srNo: '771 (a)', description: "Singh, Bhanu Pratap See under Bhanu Pratap Singh", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic863', srNo: '772', description: "Singh, C.P.N Acc. No. 1355", digitalArchive: 'NA', period: '1970-1989', url: '#' },
  { id: 'ic864', srNo: '773', description: "Singh, Dilkishore Prasad", digitalArchive: '334', period: '1938-1988', url: '#' },
  { id: 'ic865', srNo: '774', description: "Singh, J.J Partly on microfilm (Reprography)", digitalArchive: '261', period: '1924-1990', url: '#' },
  { id: 'ic866', srNo: '775', description: "Singh, K.P Acc. No. 1896 & 1901", digitalArchive: 'NA', period: '1965-1970', url: '#' },
  { id: 'ic867', srNo: '776', description: "Singh, Karan", digitalArchive: 'NA', period: '1953-1979', url: '#' },
  { id: 'ic868', srNo: '776 (a)', description: "Singh, Manmohan See under Manmohan Singh", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic869', srNo: '777', description: "Singh, P.J. Acc. No. 1111", digitalArchive: 'NA', period: '1933-1940', url: '#' },
  { id: 'ic870', srNo: '778', description: "Singh Roy, B.P", digitalArchive: '69', period: '1921-1961', url: '#' },
  { id: 'ic871', srNo: '779', description: "Singh, Tarlok Acc. No. 1841, See under Tarlok Singh", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic872', srNo: '780', description: "Singh, V.P", digitalArchive: 'NA', period: '1936-2008', url: '#' },
  { id: 'ic873', srNo: '781', description: "Sinha, Anugraha Narayan (Dr.) Diaries only", digitalArchive: 'NA', period: '1932-1940', url: '#' },
  { id: 'ic874', srNo: '781 (a)', description: "Sinha, Bejoy Kumar Relating to Bhagat Singh Acc. No. 1125 See Miscllaneous Items S.No.138", digitalArchive: 'NA', period: '1966-1970', url: '#' },
  { id: 'ic875', srNo: '782', description: "Sita Ram Acc. No. 1113", digitalArchive: '307', period: '1949-1969', url: '#' },
  { id: 'ic876', srNo: '783', description: "Sita Ram (Rai) Acc. No. 1572", digitalArchive: 'NA', period: '1946-1968', url: '#' },
  { id: 'ic877', srNo: '784', description: "Sitaramayya, B. Pattabhi", digitalArchive: '191', period: '1905-1959', url: '#' },
  { id: 'ic878', srNo: '784 (a)', description: "Slade Madeleine (Miss) See under Mira Behn", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic879', srNo: '785', description: "Smedley, Agnes Microfilm (Reprography)", digitalArchive: 'NA', period: '1919-1921', url: '#' },
  { id: 'ic880', srNo: '785 (a)', description: "Smith, J. Holmes See under Miscellaneous Items Sl.No.62", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic881', srNo: '786', description: "Sokal, Champa Lal Acc. No. 2004", digitalArchive: 'NA', period: '1930-1989', url: '#' },
  { id: 'ic882', srNo: '787', description: "Sondhi, M.L", digitalArchive: 'NA', period: '1961-2003', url: '#' },
  { id: 'ic883', srNo: '788', description: "Soni, Pratap Chand", digitalArchive: '154', period: '1924-1934', url: '#' },
  { id: 'ic884', srNo: '789', description: "Spiegal, M. Also on microfilm (Reprography)", digitalArchive: '42', period: '1933-1968', url: '#' },
  { id: 'ic885', srNo: '790', description: "Sri Prakasa", digitalArchive: '7', period: '1907-1991', url: '#' },
  { id: 'ic886', srNo: '791', description: "Stokes, Satyanand", digitalArchive: '190', period: '1933-1936', url: '#' },
  { id: 'ic887', srNo: '792', description: "SubbaRow, Y. (Dr.)", digitalArchive: '559', period: '1920-2000', url: '#' },
  { id: 'ic888', srNo: '793', description: "Suda, J.P Acc. No. 1086", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic889', srNo: '794', description: "Sudarshan (Seth)", digitalArchive: '140', period: '1936-1946', url: '#' },
  { id: 'ic890', srNo: '795', description: "Sukhdev", digitalArchive: '190', period: '1929-1930', url: '#' },
  { id: 'ic891', srNo: '796', description: "Sumangal Prakash", digitalArchive: '190', period: '1927-1976', url: '#' },
  { id: 'ic892', srNo: '797', description: "Sundar Lal (Pt.)", digitalArchive: '29A', period: '1941-1968', url: '#' },
  { id: 'ic893', srNo: '798', description: "Sundar, Nandini", digitalArchive: '608', period: '1875-2007', url: '#' },
  { id: 'ic894', srNo: '799', description: "Sundaram, K. V. K. Acc. No. 1430", digitalArchive: 'NA', period: '1932-1942', url: '#' },
  { id: 'ic895', srNo: '800', description: "Sunderland, J.T.", digitalArchive: '143', period: '1895-1936', url: '#' },
  { id: 'ic896', srNo: '801', description: "Suresh Singh of Kalakankar", digitalArchive: '190(L)', period: '1932-1942', url: '#' },
  { id: 'ic897', srNo: '802', description: "Syud Hossain (Dr.)", digitalArchive: '22', period: '1920-1949', url: '#' },
  { id: 'ic898', srNo: '803', description: "Syed Mahmud", digitalArchive: '24', period: '1909-1967', url: '#' },
  { id: 'ic899', srNo: '804', description: "Tagore, Rabindranath Microfilm", digitalArchive: 'NA', period: '1914-1940', url: '#' },
  { id: 'ic900', srNo: '805', description: "Talegaonker, Raghunath", digitalArchive: '619', period: '1952-2019', url: '#' },
  { id: 'ic901', srNo: '806', description: "Taleyarkhan, J. H.", digitalArchive: '440', period: '1940-1994', url: '#' },
  { id: 'ic902', srNo: '807', description: "Talib, Niranjan Singh", digitalArchive: '190', period: '1957-1960', url: '#' },
  { id: 'ic903', srNo: '808', description: "Tandon, P. D. Acc. No. 886,2079", digitalArchive: 'NA', period: '1939-1981', url: '#' },
  { id: 'ic904', srNo: '809', description: "Tandon, P. K.", digitalArchive: 'NA', period: '1944-2006', url: '#' },
  { id: 'ic905', srNo: '810', description: "Tankha, M. N.", digitalArchive: '190', period: '1918-', url: '#' },
  { id: 'ic906', srNo: '811', description: "Tankha, R. N. Acc. No. 1757", digitalArchive: 'NA', period: '1932-1988', url: '#' },
  { id: 'ic907', srNo: '812', description: "Tankha, T. N. Same as Tankha, R. N", digitalArchive: '472', period: '1932-1984', url: '#' },
  { id: 'ic908', srNo: '813', description: "Tanvir, Habib", digitalArchive: '257', period: '1952-2010', url: '#' },
  { id: 'ic909', srNo: '814', description: "Taqi, Muhammed Acc. No. 1052", digitalArchive: 'NA', period: '1910-1938', url: '#' },
  { id: 'ic910', srNo: '815', description: "Tarachand (Dr.)", digitalArchive: 'NA', period: '1944-1973', url: '#' },
  { id: 'ic911', srNo: '816', description: "Tarkunde, V.M.", digitalArchive: '503', period: '1931-2003', url: '#' },
  { id: 'ic912', srNo: '817', description: "Tarlok Singh", digitalArchive: 'NA', period: '1937-2005', url: '#' },
  { id: 'ic913', srNo: '818', description: "Templewood, Viscount Microfilm", digitalArchive: 'NA', period: '1931-1935', url: '#' },
  { id: 'ic914', srNo: '819', description: "Tendulkar, D. G.", digitalArchive: '67', period: '1928-1971', url: '#' },
  { id: 'ic915', srNo: '820', description: "Thimayya, K. S. (Gen.)", digitalArchive: '180', period: '1947-1967', url: '#' },
  { id: 'ic916', srNo: '821', description: "Thompson, Edward", digitalArchive: '190', period: '1935-1956', url: '#' },
  { id: 'ic917', srNo: '822', description: "Thorat, S. P. P.", digitalArchive: '375', period: '1920-1988', url: '#' },
  { id: 'ic918', srNo: '823', description: "Tikam Singh Acc. No. 1089", digitalArchive: 'NA', period: '1922-1924', url: '#' },
  { id: 'ic919', srNo: '824', description: "Tilak, B. G. Also on microfilm", digitalArchive: 'NA', period: '1868-1920', url: '#' },
  { id: 'ic920', srNo: '825', description: "Tilak, Raghukul", digitalArchive: '341', period: '1938-1989', url: '#' },
  { id: 'ic921', srNo: '826', description: "Tiwari, Bhola Nath", digitalArchive: 'NA', period: '1947-1994', url: '#' },
  { id: 'ic922', srNo: '827', description: "Tom Tar Singh", digitalArchive: 'NA', period: '1921-1948', url: '#' },
  { id: 'ic923', srNo: '828', description: "Tonki, S. M.", digitalArchive: '190', period: '1964-', url: '#' },
  { id: 'ic924', srNo: '829', description: "Toofan, Brij Mohan Acc. No. 1490", digitalArchive: 'NA', period: '1948-1949', url: '#' },
  { id: 'ic925', srNo: '830', description: "Tripathi, Kamalapati", digitalArchive: '351', period: '1971-1990', url: '#' },
  { id: 'ic926', srNo: '831', description: "Truman, Harry S. Library Selections of papers relating to India, Also see Acc. No. 324, 1241 and 1264", digitalArchive: '96', period: '1945-1952', url: '#' },
  { id: 'ic927', srNo: '832', description: "Tyabji, Abbas", digitalArchive: '166', period: '1874-1940', url: '#' },
  { id: 'ic928', srNo: '833', description: "Tyabji, Badruddin & his family papers", digitalArchive: 'NA', period: '1885-1964', url: '#' },
  { id: 'ic929', srNo: '834', description: "Tyabji, S. A. S.", digitalArchive: '138', period: '1973-1976', url: '#' },
  { id: 'ic930', srNo: '835', description: "Tyagi, Mahavir Microfilm (Reprography)", digitalArchive: 'NA', period: '1952-1957', url: '#' },
  { id: 'ic931', srNo: '836', description: "Uday Shankar", digitalArchive: '270', period: '1931-1968', url: '#' },
  { id: 'ic932', srNo: '837', description: "(Mahakavi) Ulloor Parameswar Iyer Also on microfilm (Reprography)", digitalArchive: 'NA', period: '1883-1949', url: '#' },
  { id: 'ic933', srNo: '838', description: "Upadhyaya, Haribhau Also on microfilm (Reprography)", digitalArchive: '31', period: '1920-1972', url: '#' },
  { id: 'ic934', srNo: '839', description: "Upadhyaya, S. D.", digitalArchive: 'NA', period: '1925-1960', url: '#' },
  { id: 'ic935', srNo: '840', description: "Upendra, P. Acc.no. 2006, Soft copy only (Telugu)", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic936', srNo: '841', description: "Upendranath, Ashk", digitalArchive: 'NA', period: '1956-1988', url: '#' },
  { id: 'ic937', srNo: '842', description: "Vaidik, Ved Pratap", digitalArchive: 'NA', period: '1970-2009', url: '#' },
  { id: 'ic938', srNo: '842 (a)', description: "Vaikom Muhammad Basheer See under Basheer, Vaikom Muhammad", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic939', srNo: '843', description: "Vairale, Madhusudan Acc. No. 1274", digitalArchive: 'NA', period: '1951-1959', url: '#' },
  { id: 'ic940', srNo: '844', description: "Varadarajan, S.", digitalArchive: 'NA', period: '1934-2014', url: '#' },
  { id: 'ic941', srNo: '844 (a)', description: "Varma, J. C. See under Miscellaneous Items Sl.No.98", digitalArchive: 'NA', period: '-', url: '#' },
  { id: 'ic942', srNo: '845', description: "Varma, Manikyalal", digitalArchive: '364', period: '1930-1970', url: '#' },
  { id: 'ic943', srNo: '846', description: "Vedaratnam, Sardar A Acc. No. 1879", digitalArchive: 'NA', period: '1929-1930', url: '#' },
  { id: 'ic944', srNo: '847', description: "Venkataraman, R.", digitalArchive: '496', period: '1959-1987', url: '#' },
  { id: 'ic945', srNo: '848', description: "Venkataramani, M.S.", digitalArchive: 'NA', period: '1933-1999', url: '#' },
  { id: 'ic946', srNo: '849', description: "Venu, A. S.", digitalArchive: '190', period: '1923-1968', url: '#' },
  { id: 'ic947', srNo: '850', description: "Verma, J.S. (Justice) (Acc. No. 1903)", digitalArchive: 'NA', period: '1997-2005', url: '#' },
  { id: 'ic948', srNo: '851', description: "Verma, Nirmal Acc. No. 1905", digitalArchive: 'NA', period: '1967-1982', url: '#' },
  { id: 'ic949', srNo: '852', description: "Vidyalankar, Chandragupta", digitalArchive: '283', period: '1933-1985', url: '#' },
  { id: 'ic950', srNo: '853', description: "Vidyarthi, Ganesh Shanker Also on microfilm (Reprography), Acc. No. 852", digitalArchive: 'NA', period: '1919-1930', url: '#' },
  { id: 'ic951', srNo: '854', description: "Vidyarthi, Govind", digitalArchive: '429', period: '1933-1990', url: '#' },
  { id: 'ic952', srNo: '854 (a)', description: "Vijiaraghavachariar, C.", digitalArchive: '189', period: '-', url: '#' },
  { id: 'ic953', srNo: '855', description: "Visveswaraya, M. Microfilm", digitalArchive: 'NA', period: '1899-1942', url: '#' },
  { id: 'ic954', srNo: '856', description: "Vohra, Bhagwati Charan Acc. No. 720", digitalArchive: 'NA', period: '1924-1929', url: '#' },
  { id: 'ic955', srNo: '857', description: "Vyas, Jainarain", digitalArchive: '57A', period: '1925-1961', url: '#' },
  { id: 'ic956', srNo: '858', description: "Walchand Hirachand", digitalArchive: '144', period: '1915-1968', url: '#' },
  { id: 'ic957', srNo: '859', description: "Wankhede, S.K. Acc. No. 1544", digitalArchive: 'NA', period: '1967-1979', url: '#' },
  { id: 'ic958', srNo: '860', description: "Waraich, M.J.S. Acc. No. 1884, 1947", digitalArchive: 'NA', period: '1915-1917', url: '#' },
  { id: 'ic959', srNo: '861', description: "Wright, Anne", digitalArchive: 'NA', period: '1968-2011', url: '#' },
  { id: 'ic960', srNo: '862', description: "Yadav, D.P. Acc. No. 2005", digitalArchive: 'NA', period: '1976-2008', url: '#' },
  { id: 'ic961', srNo: '863', description: "Yajnik, Indulal", digitalArchive: '30', period: '1845-1972', url: '#' },
  { id: 'ic962', srNo: '864', description: "Prof. Yash Pal", digitalArchive: '598', period: '1952-2012', url: '#' },
  { id: 'ic963', srNo: '865', description: "Yudhvir Singh", digitalArchive: '190', period: '1931-1967', url: '#' },
  { id: 'ic964', srNo: '866', description: "Zafar Futehally Acc. No. 2017", digitalArchive: 'NA', period: '1999-2003', url: '#' },
  { id: 'ic965', srNo: '867', description: "Zail Singh Acc. No. 1760", digitalArchive: 'NA', period: '1985-1987', url: '#' },
  { id: 'ic966', srNo: '868', description: "Zetland, Marquis Microfilm", digitalArchive: 'NA', period: '1917-1940', url: '#' }
];

export default function IndividualCollectionsContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter and Sort items
  const processedItems = useMemo(() => {
    let result = INDIVIDUAL_COLLECTIONS_DATA.filter((item) =>
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
              Individual Collections
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
                    <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-center w-48 whitespace-nowrap">Digital Archive</th>
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
                        
                        {/* Digital Archive */}
                        <td className="py-4 px-6 text-sm text-gray-600 text-center font-medium">
                          {item.digitalArchive}
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

                {/* Horizontally scrollable page numbers */}
                <div 
                  className="flex items-center gap-1 overflow-x-auto max-w-[130px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-[400px] py-1 px-1 border border-gray-100 rounded-lg bg-gray-50/50"
                  style={{
                    scrollbarWidth: 'thin',
                  }}
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
