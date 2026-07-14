"use client";

import React, { useState, useEffect, useRef } from "react";
import timelineData from "@/data/timeline.json";

type TimelineData = Record<string, Array<{ text: string; date: string }>>;

export default function ChronologyTimeline() {
  const data = timelineData as TimelineData;
  const years = Object.keys(data).sort((a, b) => parseInt(a) - parseInt(b));
  const [activeYear, setActiveYear] = useState(years[0] || "1912");
  const [yearOffset, setYearOffset] = useState(0);
  const [yearsPerPage, setYearsPerPage] = useState(9);
  const [evtPerPage, setEvtPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setYearsPerPage(4);
        setEvtPerPage(1);
      } else if (window.innerWidth < 1024) {
        setYearsPerPage(6);
        setEvtPerPage(2);
      } else {
        setYearsPerPage(9);
        setEvtPerPage(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Events for active year */
  const activeEvents = data[activeYear] || [];

  // Safeguard offset boundaries on window resize
  const maxYearOffset = Math.max(0, years.length - yearsPerPage);
  const safeYearOffset = Math.min(yearOffset, maxYearOffset);

  /* Visible year window */
  const visibleYears = years.slice(safeYearOffset, safeYearOffset + yearsPerPage);

  const canPrevYears = safeYearOffset > 0;
  const canNextYears = safeYearOffset + yearsPerPage < years.length;

  /* Event carousel state */
  const [evtOffset, setEvtOffset] = useState(0);
  const maxEvtOffset = Math.max(0, activeEvents.length - evtPerPage);
  const safeEvtOffset = Math.min(evtOffset, maxEvtOffset);

  const canPrevEvt = safeEvtOffset > 0;
  const canNextEvt = safeEvtOffset + evtPerPage < activeEvents.length;
  const visibleEvents = activeEvents.slice(safeEvtOffset, safeEvtOffset + evtPerPage);

  const handleYearClick = (year: string) => {
    setActiveYear(year);
    setEvtOffset(0);
  };

  return (
    <section>

      {/* ── Timeline year selector bar ── */}
      <div className="timeLineSection">
        <div className="container">
          <div className="carouselBlock owlCarousel cf" style={{ position: "relative", display: "flex", alignItems: "center" }}>

            {/* Prev arrow */}
            <button
              onClick={() => setYearOffset(o => Math.max(0, o - 1))}
              disabled={!canPrevYears}
              className="owl-prev"
              style={{
                position: "absolute",
                left: "-40px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
              }}
              aria-label="Previous years"
            >&#8249;</button>

            {/* Year items */}
            <div style={{ display: "flex", flex: 1, justifyContent: "space-between" }}>
              {visibleYears.map((year) => (
                <div key={year} className="item">
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); handleYearClick(year); }}
                    className={year === activeYear ? "yActive" : ""}
                  >
                    {year}
                  </a>
                </div>
              ))}
            </div>

            {/* Next arrow */}
            <button
              onClick={() => setYearOffset(o => Math.min(years.length - yearsPerPage, o + 1))}
              disabled={!canNextYears}
              className="owl-next"
              style={{
                position: "absolute",
                right: "-40px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
              }}
              aria-label="Next years"
            >&#8250;</button>

          </div>
        </div>
      </div>

      {/* ── Event Chronology panel ── */}
      <div className="eventChronology">
        <div className="container">
          <h2>Event<br />Chronology</h2>

          <div id={activeYear} className="eventYearGallery">
            {/* Prev/Next arrows for events */}
            <div className="eventChronologyGallery owlCarousel cf" style={{ position: "relative", display: "flex", alignItems: "center" }}>

              {/* Prev event arrow */}
              <button
                onClick={() => setEvtOffset(o => Math.max(0, o - 1))}
                disabled={!canPrevEvt}
                style={{
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: canPrevEvt ? "pointer" : "default",
                  fontSize: "36px",
                  color: canPrevEvt ? "#ffffff" : "transparent",
                  zIndex: 10,
                }}
                aria-label="Previous events"
              >&#8249;</button>

              {/* Event cards wrapper */}
              <div style={{ display: "flex", flex: 1, gap: "40px", margin: "0 40px" }}>
                {visibleEvents.map((event, idx) => (
                  <div key={`${activeYear}-${safeEvtOffset + idx}`} className="item" style={{ flex: 1, minWidth: 0 }}>
                    <div className="slideBox">
                      <p>{event.text}</p>
                      <div className="bottomCol cf">
                        <div className="date">{event.date}</div>
                      </div>
                    </div>
                  </div>
                ))}

                {activeEvents.length === 0 && (
                  <div className="item" style={{ flex: 1 }}>
                    <div className="slideBox">
                      <p>No events recorded for this year.</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Next event arrow */}
              <button
                onClick={() => setEvtOffset(o => Math.min(activeEvents.length - evtPerPage, o + 1))}
                disabled={!canNextEvt}
                style={{
                  position: "absolute",
                  right: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: canNextEvt ? "pointer" : "default",
                  fontSize: "36px",
                  color: canNextEvt ? "#ffffff" : "transparent",
                  zIndex: 10,
                }}
                aria-label="Next events"
              >&#8250;</button>

            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
