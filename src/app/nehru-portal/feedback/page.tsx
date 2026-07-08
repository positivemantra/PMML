"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import TopBar from "@/components/layout/NehruTopBar";
import Header from "@/components/layout/NehruHeader";
import Footer from "@/components/layout/NehruFooter";

export default function Page() {
  const [captchaText, setCaptchaText] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [feedbackText, setFeedbackText] = useState("");

  const generateCaptcha = () => {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaInput.toLowerCase().trim() !== captchaText.toLowerCase().trim()) {
      alert("The security code you entered is incorrect. Please try again.");
      generateCaptcha();
      setCaptchaInput("");
      return;
    }
    alert("Thank you for your feedback!");
    setName("");
    setSubject("");
    setEmail("");
    setFeedbackText("");
    setCaptchaInput("");
    generateCaptcha();
  };

  return (
    <>
      <TopBar />
      <Header />
      <main id="main-content" className="w-full flex-1 innerContent text-left select-none">
        <div className="container">
          <div className="breadCrumbArea cf">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span>Feedback</span>
            </div>
          </div>
          
          <div className="spaceArea">
            <h2 style={{ color: "#a52216", marginBottom: "20px" }}>Feedback</h2>
            <div className="text-slate-700 text-xs sm:text-xs md:text-sm leading-relaxed text-justify max-w-none">
              <p style={{ marginBottom: "25px", color: "#2d200e" }}>
                Complete the below form to send us your comments and feedback on the website. Your opinion, suggestions and feedback will be very much appreciated. If you provide us with your contact information, we will be able to answer your questions.
              </p>

              <form onSubmit={handleSubmit} style={{ maxWidth: "800px", marginTop: "20px" }}>
                {/* Name Row */}
                <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "15px", alignItems: "center" }}>
                  <label htmlFor="name" style={{ flex: "0 0 150px", fontWeight: "600", color: "#2d200e" }}>
                    Name
                  </label>
                  <div style={{ flex: "1 1 300px" }}>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{
                        width: "100%",
                        maxWidth: "400px",
                        padding: "6px 12px",
                        border: "1px solid #ccc",
                        borderRadius: "3px",
                        backgroundColor: "#fff",
                        color: "#000",
                        outline: "none"
                      }}
                    />
                  </div>
                </div>

                {/* Subject Row */}
                <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "15px", alignItems: "center" }}>
                  <label htmlFor="subject" style={{ flex: "0 0 150px", fontWeight: "600", color: "#2d200e" }}>
                    Subject
                  </label>
                  <div style={{ flex: "1 1 300px" }}>
                    <input
                      type="text"
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      style={{
                        width: "100%",
                        maxWidth: "400px",
                        padding: "6px 12px",
                        border: "1px solid #ccc",
                        borderRadius: "3px",
                        backgroundColor: "#fff",
                        color: "#000",
                        outline: "none"
                      }}
                    />
                  </div>
                </div>

                {/* Email Row */}
                <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "15px", alignItems: "center" }}>
                  <label htmlFor="email" style={{ flex: "0 0 150px", fontWeight: "600", color: "#2d200e" }}>
                    Email <span style={{ color: "red" }}>*</span>
                  </label>
                  <div style={{ flex: "1 1 300px" }}>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      style={{
                        width: "100%",
                        maxWidth: "400px",
                        padding: "6px 12px",
                        border: "1px solid #ccc",
                        borderRadius: "3px",
                        backgroundColor: "#fff",
                        color: "#000",
                        outline: "none"
                      }}
                    />
                  </div>
                </div>

                {/* Feedback Row */}
                <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "15px", alignItems: "flex-start" }}>
                  <label htmlFor="feedbackText" style={{ flex: "0 0 150px", fontWeight: "600", color: "#2d200e", paddingTop: "6px" }}>
                    Feedback <span style={{ color: "red" }}>*</span>
                  </label>
                  <div style={{ flex: "1 1 300px" }}>
                    <textarea
                      id="feedbackText"
                      value={feedbackText}
                      onChange={(e) => setFeedbackText(e.target.value)}
                      required
                      rows={6}
                      style={{
                        width: "100%",
                        maxWidth: "400px",
                        padding: "6px 12px",
                        border: "1px solid #ccc",
                        borderRadius: "3px",
                        backgroundColor: "#fff",
                        color: "#000",
                        outline: "none",
                        resize: "vertical"
                      }}
                    />
                  </div>
                </div>

                {/* Security Code Row */}
                <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "20px", alignItems: "flex-start" }}>
                  <label htmlFor="captchaInput" style={{ flex: "0 0 150px", fontWeight: "600", color: "#2d200e", paddingTop: "6px" }}>
                    Security Code <span style={{ color: "red" }}>*</span>
                  </label>
                  <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column" }}>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#fdfbf7",
                        border: "1px solid #ccc",
                        padding: "8px 20px",
                        fontSize: "22px",
                        fontWeight: "bold",
                        fontStyle: "italic",
                        fontFamily: "var(--font-serif), Georgia, serif",
                        color: "#392b15",
                        userSelect: "none",
                        marginBottom: "10px",
                        borderRadius: "3px",
                        width: "fit-content",
                        boxShadow: "inset 0 0 3px rgba(0,0,0,0.05)"
                      }}
                    >
                      {captchaText.split("").map((char, index) => (
                        <span
                          key={index}
                          style={{
                            transform: `rotate(${index % 2 === 0 ? "8deg" : "-8deg"}) translateY(${index % 2 === 0 ? "1px" : "-1px"})`,
                            display: "inline-block",
                            marginRight: "8px",
                            textShadow: "1px 1px 1px #ccc"
                          }}
                        >
                          {char}
                        </span>
                      ))}
                    </div>

                    <input
                      type="text"
                      id="captchaInput"
                      value={captchaInput}
                      onChange={(e) => setCaptchaInput(e.target.value)}
                      required
                      style={{
                        width: "100%",
                        maxWidth: "400px",
                        padding: "6px 12px",
                        border: "1px solid #ccc",
                        borderRadius: "3px",
                        backgroundColor: "#fff",
                        color: "#000",
                        outline: "none"
                      }}
                    />
                    <span style={{ color: "#666", fontSize: "0.85em", marginTop: "6px" }}>
                      Enter the characters shown in the image.
                    </span>
                  </div>
                </div>

                {/* Submit Row */}
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <div style={{ flex: "0 0 150px" }}></div>
                  <div style={{ flex: "1 1 300px" }}>
                    <button
                      type="submit"
                      style={{
                        backgroundColor: "#392b15",
                        color: "#fff",
                        border: "none",
                        borderRadius: "3px",
                        padding: "8px 24px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        textTransform: "capitalize",
                        transition: "background-color 0.2s ease"
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#2b1e10")}
                      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#392b15")}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
