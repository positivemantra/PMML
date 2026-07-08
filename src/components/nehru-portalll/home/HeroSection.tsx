"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

const slides = [
  {
    id: "s1",
    title: "INDIA'S FIRST PRIME MINISTER",
    subtitle: "(15 AUGUST 1947 to 27 MAY 1964)",
    quote: "\u201cJawaharlalji, as his name implies, is a jewel of a man. His lovable personality, his charming manners, his unimpeachable integrity, his transparent sincerity, and above all, his indomitable courage endear him to his friends and admirers, and inspire the esteem of his critics\u201d \u2013 Mohanlal Saxena, Cabinet Colleague",
    name: "Jawaharlal Nehru",
    img: "/sites/default/files/banners/slider1.png",
    href: "/nehru-portal/jawaharlal-nehru",
  },
];

export default function HeroSection() {
  const { t } = useApp();

  return (
    <section className="sliderSection cf">
      <div className="container">

        {/* Left: Slider banner */}
        <div className="indexBanner">
          <div className="region region-home-banner">
            <div id="block-views-homepage-banner-block" className="block block-views">
              <div className="content">
                <div className="sliderBanner owlCarousel">
                  <div id="s1" className="item">
                    <div className="sliderDetailLeft">
                      <h2>{slides[0].title}</h2>
                      <p>{slides[0].subtitle}</p>
                      <p>{slides[0].quote}</p>
                      <h3>{slides[0].name}</h3>
                      <Link className="slider-link" href={slides[0].href}>{t("knowMore")}</Link>
                    </div>
                    <div className="sliderImage">
                      <img
                        src={slides[0].img}
                        alt="Jawaharlal Nehru"
                        title="Jawaharlal Nehru"
                        width={529}
                        height={499}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Testimonials 2x2 grid */}
        <div className="region region-home-testimonial">
          <div id="block-block-9" className="block block-block">
            <div className="content">
              <div className="testimonialSection">
                <ul>
                  <li className="commonTestimonial testimonial1">
                    <img
                      src="/sites/all/themes/nhp/images/thumbOne.png"
                      alt="Testimonial Image"
                      title="Testimonial Image"
                      width={310}
                      height={265}
                    />
                  </li>
                  <li className="commonTestimonial testimonial2">
                    <p>
                      We have accepted the democratic process, because &hellip; it promotes
                      the growth of human beings and a society&hellip; we attach great value
                      to individual freedom.
                    </p>
                  </li>
                  <li className="commonTestimonial testimonial3">
                    <p>
                      Democracy means tolerance, tolerance not merely of those who agree
                      with us, but of those who do not agree with us
                    </p>
                  </li>
                  <li className="commonTestimonial testimonial4">
                    <img
                      src="/sites/all/themes/nhp/images/thumbTwo.png"
                      alt="Testimonial Image"
                      title="Testimonial Image"
                      width={310}
                      height={265}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
