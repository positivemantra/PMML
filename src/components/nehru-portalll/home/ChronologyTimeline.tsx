"use client";

import React, { useState, useRef } from "react";
import timelineData from "@/data/timeline.json";

type TimelineData = Record<string, Array<{ text: string; date: string }>>;

const YEARS_PER_PAGE = 9;

export default function ChronologyTimeline() {
  const data = timelineData as TimelineData;
  const years = Object.keys(data).sort((a, b) => parseInt(a) - parseInt(b));
  const [activeYear, setActiveYear] = useState(years[0] || "1912");
  const [yearOffset, setYearOffset] = useState(0);

  /* Events for active year */
  const activeEvents = data[activeYear] || [];

  /* Visible year window */
  const visibleYears = years.slice(yearOffset, yearOffset + YEARS_PER_PAGE);

  const canPrevYears = yearOffset > 0;
  const canNextYears = yearOffset + YEARS_PER_PAGE < years.length;

  /* Event carousel state */
  const [evtOffset, setEvtOffset] = useState(0);
  const EVT_PER_PAGE = 3;
  const canPrevEvt = evtOffset > 0;
  const canNextEvt = evtOffset + EVT_PER_PAGE < activeEvents.length;
  const visibleEvents = activeEvents.slice(evtOffset, evtOffset + EVT_PER_PAGE);

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
              onClick={() => setYearOffset(o => Math.min(years.length - YEARS_PER_PAGE, o + 1))}
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
                  <div key={`${activeYear}-${evtOffset + idx}`} className="item" style={{ flex: 1, minWidth: 0 }}>
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
                onClick={() => setEvtOffset(o => Math.min(activeEvents.length - EVT_PER_PAGE, o + 1))}
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
