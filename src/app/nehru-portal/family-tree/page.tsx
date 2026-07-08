import React from "react";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";
import FamilyTreeViewer from "@/components/family/FamilyTreeViewer";

export default function FamilyTreePage() {
  return (
    <>
      <TopBar />
      <Header />
      <main id="main-content" className="w-full flex-1 innerContent text-left">
        <div className="container">
          {/* Breadcrumb */}
          <div className="breadCrumbArea cf">
            <div className="breadcrumb">
              <a href="/">Home</a>
              Family Tree
            </div>
          </div>

          <div className="spaceArea">
            {/* Title banner */}
            <h2 style={{ color: "#a52216" }}>Family Tree</h2>

            {/* Tree Viewer */}
            <FamilyTreeViewer />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
