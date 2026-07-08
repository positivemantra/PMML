import React from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";

export const metadata = {
  title: "Galleries | Nehru Portal",
  description:
    "Photos, Audios, Videos, Cartoons, and Stamps of Jawaharlal Nehru | Nehru Portal",
};

const categories = [
  {
    id: "photos",
    label: "Photographs",
    icon: "/sites/default/files/gallery/galleryPhotograph.png",
    href: "/nehru-portal/galleries/photos",
  },
  {
    id: "audios",
    label: "Audios",
    icon: "/sites/default/files/gallery/galleryAudios.png",
    href: "/nehru-portal/galleries/audios",
  },
  {
    id: "videos",
    label: "Videos",
    icon: "/sites/default/files/gallery/galleryVideos.png",
    href: "/nehru-portal/galleries/videos",
  },
  {
    id: "cartoons",
    label: "Cartoons",
    icon: "/sites/default/files/gallery/galleryCartoons.png",
    href: "/nehru-portal/galleries/cartoons",
  },
  {
    id: "stamps",
    label: "Stamps",
    icon: "/sites/default/files/gallery/galleryStamps.png",
    href: "/nehru-portal/galleries/stamps",
  },
];

export default function GalleriesPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main
        id="main-content"
        className="w-full flex-1 innerContent text-left select-none"
      >
        <div className="container">
          {/* Breadcrumb */}
          <div className="breadCrumbArea cf">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span>Galleries</span>
            </div>
          </div>

          {/* Page content */}
          <div className="spaceArea">
            <h2 style={{ color: "#a52216" }}>Galleries</h2>

            {/* Gallery banner — sepia collage background with category cards on right */}
            <div
              className="galleryArea"
              style={{
                background: `#ebe0c2 url('/sites/default/files/gallery/gallerybanner.jpg') no-repeat left top`,
                backgroundSize: "auto 100%",
                minHeight: "358px",
                margin: "20px -20px 0 -20px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-end",
              }}
            >
              <div className="rightContent" style={{ width: "605px" }}>
                <ul
                  style={{
                    margin: 0,
                    padding: 0,
                    textAlign: "center",
                    listStyle: "none",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  {categories.map((cat) => (
                    <li
                      key={cat.id}
                      className="hoverOutline"
                      style={{
                        display: "inline-block",
                        background: "#fbf9ea",
                        borderRadius: "5px",
                        padding: 0,
                        textAlign: "center",
                        margin: "44px 20px 0 20px",
                        width: "150px",
                        position: "relative",
                      }}
                    >
                      <Link
                        href={cat.href}
                        style={{
                          position: "relative",
                          display: "inline-block",
                          padding: "20px 0",
                          width: "100%",
                          textDecoration: "none",
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={cat.icon}
                          alt={cat.label}
                          title={cat.label}
                          style={{
                            display: "block",
                            margin: "0 auto",
                            maxWidth: "60px",
                            height: "auto",
                          }}
                        />
                        <span
                          className="name"
                          style={{
                            color: "#473605",
                            fontSize: "1.1em",
                            lineHeight: "20px",
                            fontWeight: 600,
                            width: "100%",
                            textAlign: "center",
                            paddingTop: "10px",
                            display: "block",
                          }}
                        >
                          {cat.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
