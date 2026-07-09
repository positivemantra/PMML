import React from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";
import styles from "./page.module.css";

export const metadata = {
  title: "Recent Updates | Nehru Portal",
  description: "Recent Updates | Nehru Portal",
};

export default function AllRecentUpdatesPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main id="main-content" className="w-full flex-1 innerContent text-left select-none">
        <div className="container">
          <div className="breadCrumbArea cf">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span>Recent Updates</span>
            </div>
          </div>
          
          <div className="spaceArea">
            <h2 className={styles.pageHeader}>Recent Updates</h2>
            
            <div className={styles.flexContainer}>
              <div className={styles.leftColumn}>
                <ul className={styles.updatesList}>
                  <li className={styles.updateItem}>
                    <Link 
                      href="/nehru-portal/strategy-trap-india-and-pakistan-under-nuclear-shadow-lt-gen-prakash-menon" 
                      className={styles.updateLink}
                    >
                      The Strategy Trap India and Pakistan under the Nuclear Shadow by Lt Gen Prakash Menon
                    </Link>
                  </li>
                  <li className={styles.updateItem}>
                    <Link 
                      href="/nehru-portal/forging-nation-congress-demand-representative-bodies-and-muslim-opposition-1885-1892-14th-june18" 
                      className={styles.updateLink}
                    >
                      Forging the Nation: The Congress Demand for Representative Bodies and the Muslim Opposition (1885-1892), 14th June'18
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className={styles.rightColumn}>
                <Link 
                  href="/nehru-portal/archive-recent-updates" 
                  className={styles.archiveLink}
                >
                  Archive Updates
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
