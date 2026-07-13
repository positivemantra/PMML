"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

interface UpdateItem {
  title: string;
  date: string;
  href: string;
}

export default function RecentUpdatesAndMedia() {
  const { t } = useApp();
  const [activeUpdateIdx, setActiveUpdateIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const updates: UpdateItem[] = [
    {
      title: "The Strategy Trap India and Pakistan under the Nuclear Shadow by Lt Gen Prakash Menon",
      date: "June 16, 2018",
      href: "/nehru-portal/strategy-trap-india-and-pakistan-under-nuclear-shadow-lt-gen-prakash-menon",
    },
    {
      title: "Forging the Nation: The Congress Demand for Representative Bodies and the Muslim Opposition (1885-1892), 14th June'18",
      date: "June 14, 2018",
      href: "/nehru-portal/forging-nation-congress-demand-representative-bodies-and-muslim-opposition-1885-1892-14th-june18",
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveUpdateIdx((prev) => (prev + 1) % updates.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [updates.length, isPlaying]);

  return (
    <div className="recentUpdateArea select-none">
      <div className="container cf">
        
        {/* Left Column: Recent Updates */}
        <div className="recentUpdates">
          <div className="animationMain">
            <div className="latestNews">
              <div className="region region-recent-updates">
                <div id="block-views-recent-updates-block" className="block block-views">
                  <h2>{t("recentUpdates")}</h2>
                  <div className="content">
                    <div className="view view-recent-updates">
                      <div className="view-content">
                        <div className="ticker">
                          {/* Play/Pause button */}
                          <a
                            href="#"
                            className={`playPauseBtn ${isPlaying ? "stop" : "play"}`}
                            onClick={(e) => {
                              e.preventDefault();
                              setIsPlaying(!isPlaying);
                            }}
                            title={isPlaying ? "Pause" : "Play"}
                          >
                            {isPlaying ? "Pause" : "Play"}
                          </a>

                          <div className="newsSec cf" style={{ minHeight: "80px" }}>
                            <div className="views-field views-field-title">
                              <span className="field-content">
                                <Link href={updates[activeUpdateIdx].href}>
                                  {updates[activeUpdateIdx].title}
                                </Link>
                              </span>
                            </div>
                            <div className="views-field views-field-created">
                              <span className="field-content">
                                {updates[activeUpdateIdx].date}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="viewAll">
            <Link href="/nehru-portal/all-recent-updates" title="View All">
              {t("viewAll")}
            </Link>
          </div>
        </div>

        <div className="mediaGallery text-left">
          <h2>{t("mediaGallery")}</h2>
          <div className="mediaMain">
            <ul>
              <li className="hoverOutline">
                <Link href="/nehru-portal/galleries/photos">
                  <img
                    src="/sites/all/themes/nhp/images/photograph.png"
                    title="Photographs"
                    alt="Photographs"
                    width={37}
                    height={30}
                  />
                  <span className="name">{t("photos")}</span>
                </Link>
              </li>
              <li className="hoverOutline">
                <Link href="/nehru-portal/galleries/audios">
                  <img
                    src="/sites/all/themes/nhp/images/audios.png"
                    title="Audios"
                    alt="Audios"
                    width={37}
                    height={30}
                  />
                  <span className="name">{t("audios")}</span>
                </Link>
              </li>
              <li className="hoverOutline">
                <Link href="/nehru-portal/galleries/videos">
                  <img
                    src="/sites/all/themes/nhp/images/videos.png"
                    title="Videos"
                    alt="Videos"
                    width={37}
                    height={30}
                  />
                  <span className="name">{t("videos")}</span>
                </Link>
              </li>
              <li className="hoverOutline">
                <Link href="/nehru-portal/galleries/cartoons">
                  <img
                    src="/sites/all/themes/nhp/images/posters.png"
                    title="Cartoons"
                    alt="Cartoons"
                    width={37}
                    height={30}
                  />
                  <span className="name">{t("cartoons")}</span>
                </Link>
              </li>
              <li className="hoverOutline">
                <Link href="/nehru-portal/galleries/stamps">
                  <img
                    src="/sites/all/themes/nhp/images/stamps.png"
                    title="Stamps"
                    alt="Stamps"
                    width={37}
                    height={30}
                  />
                  <span className="name">{t("stamps")}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
