"use client";

import React, { useState } from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";

export default function PlacesPage() {
  const [activeTab, setActiveTab] = useState<"residence" | "map">("residence");
  const [selectedPlace, setSelectedPlace] = useState("0"); // "0" = Anand Bhawan, "1" = Swaraj Bhawan, "2" = Teen Murti House

  const mapData = [
    {
      name: "Anand Bhawan",
      img: "/sites/all/themes/nhp/images/Anand-Bhavan.png",
      link: "https://www.google.co.in/maps/place/Anand+Bhawan,+Mahanagar,+Lucknow,+Uttar+Pradesh+226006/@26.8767482,80.9599431,17z/data=!3m1!4b1!4m2!3m1!1s0x399bfd66a3daaf4b:0x7c3ed3fe1166e6a0"
    },
    {
      name: "Swaraj Bhawan",
      img: "/sites/all/themes/nhp/images/Anand-Bhavan.png",
      link: "https://www.google.co.in/maps/place/Swaraj+Bhavan,+Mahanagar,+Lucknow,+Uttar+Pradesh+226006"
    },
    {
      name: "Teen Murti House",
      img: "/sites/all/themes/nhp/images/Anand-Bhavan.png",
      link: "https://www.google.co.in/maps/place/Teen+Murti+Bhavan,+New+Delhi"
    }
  ];

  return (
    <>
      <TopBar />
      <Header />
      <main id="main-content" className="w-full flex-1 innerContent text-left select-none">
        <div className="container">
          {/* Breadcrumb */}
          <div className="breadCrumbArea cf">
            <div className="breadcrumb">
              <a href="/">Home</a>
              Places of Residence
            </div>
          </div>

          <div className="spaceArea">
            {/* Title banner */}
            <h2 style={{ color: "#a52216" }}>Places of Residence</h2>

            {/* Tabbing Container */}
            <div className="tabbing placesResidence cf">
              <ul className="tabNav">
                <li className={activeTab === "residence" ? "tabsStateActive" : "tabsStateDefault"}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("residence");
                    }}
                  >
                    Places of Residence
                  </a>
                </li>
                <li className={activeTab === "map" ? "tabsStateActive" : "tabsStateDefault"}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("map");
                    }}
                  >
                    View Map
                  </a>
                </li>
              </ul>
              
              <div className="mask">
                <div className="tabContainer cf">
                  
                  {activeTab === "residence" && (
                    <div id="tab-1" className="tabPanel" style={{ display: "block" }}>
                      <table className="tableData">
                        <thead>
                          <tr>
                            <th style={{ textAlign: "center", verticalAlign: "top", width: "10%" }}>Sr. No.</th>
                            <th style={{ textAlign: "left", verticalAlign: "top" }}>Residence Name</th>
                            <th style={{ textAlign: "left", verticalAlign: "top", width: "25%" }}>Place</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ textAlign: "center", verticalAlign: "top" }}>1</td>
                            <td style={{ textAlign: "left", verticalAlign: "top" }}>
                              <Link href="/nehru-portal/anand-bhawan">Anand Bhawan</Link>
                            </td>
                            <td style={{ textAlign: "left", verticalAlign: "top" }}>Allahabad</td>
                          </tr>
                          <tr>
                            <td style={{ textAlign: "center", verticalAlign: "top" }}>2</td>
                            <td style={{ textAlign: "left", verticalAlign: "top" }}>
                              <Link href="/nehru-portal/swaraj-bhawan">Swaraj Bhawan</Link>
                            </td>
                            <td style={{ textAlign: "left", verticalAlign: "top" }}>Allahabad</td>
                          </tr>
                          <tr>
                            <td style={{ textAlign: "center", verticalAlign: "top" }}>3</td>
                            <td style={{ textAlign: "left", verticalAlign: "top" }}>
                              <Link href="/nehru-portal/teen-murti-house">Teen Murti House</Link>
                            </td>
                            <td style={{ textAlign: "left", verticalAlign: "top" }}>New Delhi</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {activeTab === "map" && (
                    <div id="tab-2" className="tabPanel" style={{ display: "block" }}>
                      <div className="gallerySearchArea cf">
                        <div className="searchCol">
                          <label>Search Location:</label>
                          <div className="searchSelect">
                            <select
                              name="place"
                              id="place"
                              className="customSelect"
                              value={selectedPlace}
                              onChange={(e) => setSelectedPlace(e.target.value)}
                              style={{ width: "100%", background: "transparent", border: "none", outline: "none", color: "#332902" }}
                            >
                              <option value="0">Anand Bhawan</option>
                              <option value="1">Swaraj Bhawan</option>
                              <option value="2">Teen Murti House</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div id="gmap" className="gmap3">
                        <a href={mapData[Number(selectedPlace)].link} target="_blank" rel="noopener noreferrer">
                          <img
                            id="mapimg"
                            src={mapData[Number(selectedPlace)].img}
                            alt={mapData[Number(selectedPlace)].name}
                          />
                        </a>
                      </div>
                      <span className="infomap">*Click on map to Navigate on Google Map.</span>
                    </div>
                  )}

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

