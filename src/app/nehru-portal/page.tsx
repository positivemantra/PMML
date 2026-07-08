import React from "react";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";
import HeroSection from "@/components/home/HeroSection";
import ChronologyTimeline from "@/components/home/ChronologyTimeline";
import RecentUpdatesAndMedia from "@/components/home/RecentUpdatesAndMedia";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main id="main-content" className="w-full flex-1">
        <HeroSection />
        <ChronologyTimeline />
        <RecentUpdatesAndMedia />
      </main>
      <Footer />
    </>
  );
}
