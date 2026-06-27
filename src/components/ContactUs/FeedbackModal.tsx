"use client";

import React, { useState } from 'react';
import { Spectral } from 'next/font/google';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FeedbackModal({ isOpen, onClose }: FeedbackModalProps) {
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [name, setName] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [gender, setGender] = useState("");
  const [firstVisit, setFirstVisit] = useState("");
  const [purposeOfVisit, setPurposeOfVisit] = useState<string[]>([]);
  
  const [ratings, setRatings] = useState<Record<string, string>>({
    displays: "",
    panels: "",
    exhibits: "",
    cleanliness: "",
    staff: "",
    facilities: "",
  });

  const [otherLanguages, setOtherLanguages] = useState("");
  const [otherLanguagesSpecify, setOtherLanguagesSpecify] = useState("");
  const [accessible, setAccessible] = useState("");
  const [accessibilityImprovements, setAccessibilityImprovements] = useState("");
  const [interactiveActivity, setInteractiveActivity] = useState("");
  const [interests, setInterests] = useState<string[]>([]);

  const [overallSatisfaction, setOverallSatisfaction] = useState("");
  const [recommend, setRecommend] = useState("");
  const [suggestions, setSuggestions] = useState("");

  if (!isOpen) return null;

  const handlePurposeChange = (purpose: string) => {
    setPurposeOfVisit((prev) =>
      prev.includes(purpose)
        ? prev.filter((p) => p !== purpose)
        : [...prev, purpose]
    );
  };

  const handleInterestChange = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleRatingChange = (aspect: string, value: string) => {
    setRatings((prev) => ({
      ...prev,
      [aspect]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    console.log("Feedback Submitted:", {
      name,
      ageGroup,
      gender,
      firstVisit,
      purposeOfVisit,
      ratings,
      otherLanguages,
      otherLanguagesSpecify,
      accessible,
      accessibilityImprovements,
      interactiveActivity,
      interests,
      overallSatisfaction,
      recommend,
      suggestions,
    });
    setSubmitted(true);
  };

  const resetForm = () => {
    setName("");
    setAgeGroup("");
    setGender("");
    setFirstVisit("");
    setPurposeOfVisit([]);
    setRatings({
      displays: "",
      panels: "",
      exhibits: "",
      cleanliness: "",
      staff: "",
      facilities: "",
    });
    setOtherLanguages("");
    setOtherLanguagesSpecify("");
    setAccessible("");
    setAccessibilityImprovements("");
    setInteractiveActivity("");
    setInterests([]);
    setOverallSatisfaction("");
    setRecommend("");
    setSuggestions("");
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 sm:p-6 md:p-10 transition-opacity duration-300">
      
      {/* Modal Container */}
      <div className="relative max-w-4xl w-full h-[90vh] bg-[#f7f5f0] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100 flex-shrink-0">
          <div className="flex flex-col">
            <h3 className={`${spectral.className} text-xl md:text-2xl font-bold text-[#052356]`}>
              Visitors Feedback Form
            </h3>
            <p className="text-xs text-gray-500 font-medium">Help us make your next visit even better</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Form Content */}
        <div className="flex-grow overflow-y-auto p-6 sm:p-8">
          
          {submitted ? (
            /* Success View */
            <div className="h-full flex flex-col items-center justify-center text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm max-w-md mx-auto my-12">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className={`${spectral.className} text-2xl font-bold text-[#052356] mb-3`}>
                Thank You!
              </h4>
              <p className="text-sm text-gray-500 font-medium leading-relaxed mb-8">
                Your feedback has been successfully submitted. We appreciate you taking the time to share your experience with us.
              </p>
              <button
                onClick={resetForm}
                className="w-full py-2.5 bg-[#052356] hover:bg-[#f37021] text-white text-sm font-bold tracking-wider rounded-full shadow-md transition-all duration-200 cursor-pointer"
              >
                Close Feedback Window
              </button>
            </div>
          ) : (
            /* Main Form */
            <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl mx-auto text-left">
              
              {/* SECTION 1: Personal Details */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm select-none">
                    1
                  </div>
                  <h4 className={`${spectral.className} text-xl font-bold text-[#052356]`}>
                    Personal Details
                  </h4>
                </div>

                <hr className="border-gray-100" />

                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="modal-name" className="text-[13px] font-bold text-gray-700">
                    Name:
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name (optional)"
                    className="w-full border border-gray-200 focus:border-[#052356] rounded-xl px-4 py-2.5 text-sm text-black placeholder-gray-300 outline-none transition-all bg-gray-50/30"
                  />
                </div>

                {/* Age Group */}
                <div className="flex flex-col gap-3">
                  <span className="text-[13px] font-bold text-gray-700">Age Group:</span>
                  <div className="flex flex-wrap gap-2">
                    {["Below 18", "18-25", "26-40", "41-60", "Above 60"].map((group) => (
                      <label
                        key={group}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border cursor-pointer select-none transition-all duration-150 ${
                          ageGroup === group
                            ? "bg-[#f37021]/10 border-[#f37021] text-[#f37021]"
                            : "bg-gray-50 border-gray-100 hover:border-gray-300 text-gray-600"
                        }`}
                      >
                        <input
                          type="radio"
                          name="ageGroup"
                          required
                          checked={ageGroup === group}
                          onChange={() => setAgeGroup(group)}
                          className="accent-[#f37021]"
                        />
                        {group}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Gender */}
                <div className="flex flex-col gap-3">
                  <span className="text-[13px] font-bold text-gray-700">Gender:</span>
                  <div className="flex flex-wrap gap-2">
                    {["Male", "Female", "Other", "Prefer not to say"].map((g) => (
                      <label
                        key={g}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border cursor-pointer select-none transition-all duration-150 ${
                          gender === g
                            ? "bg-[#f37021]/10 border-[#f37021] text-[#f37021]"
                            : "bg-gray-50 border-gray-100 hover:border-gray-300 text-gray-600"
                        }`}
                      >
                        <input
                          type="radio"
                          name="gender"
                          required
                          checked={gender === g}
                          onChange={() => setGender(g)}
                          className="accent-[#f37021]"
                        />
                        {g}
                      </label>
                    ))}
                  </div>
                </div>

                {/* First Visit */}
                <div className="flex flex-col gap-3">
                  <span className="text-[13px] font-bold text-gray-700">Is this your first visit to PMML?</span>
                  <div className="flex gap-2">
                    {["Yes", "No"].map((opt) => (
                      <label
                        key={opt}
                        className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold border cursor-pointer select-none transition-all duration-150 ${
                          firstVisit === opt
                            ? "bg-[#f37021]/10 border-[#f37021] text-[#f37021]"
                            : "bg-gray-50 border-gray-100 hover:border-gray-300 text-gray-600"
                        }`}
                      >
                        <input
                          type="radio"
                          name="firstVisit"
                          required
                          checked={firstVisit === opt}
                          onChange={() => setFirstVisit(opt)}
                          className="accent-[#f37021]"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Purpose of Visit */}
                <div className="flex flex-col gap-3">
                  <span className="text-[13px] font-bold text-gray-700">Purpose of Visit:</span>
                  <div className="flex flex-wrap gap-2">
                    {["Educational", "Tourism", "Research", "Family Visit", "Official Visit", "Other"].map((purpose) => (
                      <label
                        key={purpose}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border cursor-pointer select-none transition-all duration-150 ${
                          purposeOfVisit.includes(purpose)
                            ? "bg-[#f37021]/10 border-[#f37021] text-[#f37021]"
                            : "bg-gray-50 border-gray-100 hover:border-gray-300 text-gray-600"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={purposeOfVisit.includes(purpose)}
                          onChange={() => handlePurposeChange(purpose)}
                          className="rounded text-[#f37021] focus:ring-[#f37021] accent-[#f37021]"
                        />
                        {purpose}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* SECTION 2: Museum Experience */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm select-none">
                    2
                  </div>
                  <h4 className={`${spectral.className} text-xl font-bold text-[#052356]`}>
                    Museum Experience
                  </h4>
                </div>

                <hr className="border-gray-100" />

                {/* Rating Table */}
                <div className="space-y-3">
                  <span className="text-[13px] font-bold text-gray-700">Please rate the following:</span>
                  <div className="overflow-x-auto border border-gray-100 rounded-xl">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-100">
                          <th className="p-3 sm:p-4 font-bold text-gray-700 uppercase tracking-wider text-[11px]">Aspect</th>
                          {["Excellent", "Good", "Average", "Poor"].map((col) => (
                            <th key={col} className="p-3 sm:p-4 text-center font-bold text-gray-700 uppercase tracking-wider text-[11px]">{col}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {[
                          { key: "displays", label: "Museum Displays" },
                          { key: "panels", label: "Information Panels" },
                          { key: "exhibits", label: "Interactive Exhibits" },
                          { key: "cleanliness", label: "Cleanliness" },
                          { key: "staff", label: "Staff Assistance" },
                          { key: "facilities", label: "Facilities (Washrooms, Seating, Drinking Water)" },
                        ].map((row) => (
                          <tr key={row.key} className="hover:bg-gray-50/50">
                            <td className="p-3 sm:p-4 font-semibold text-gray-700">{row.label}</td>
                            {["Excellent", "Good", "Average", "Poor"].map((val) => (
                              <td key={val} className="p-3 sm:p-4 text-center">
                                <input
                                  type="radio"
                                  name={`rating-${row.key}`}
                                  required
                                  checked={ratings[row.key] === val}
                                  onChange={() => handleRatingChange(row.key, val)}
                                  className="w-4 h-4 accent-[#f37021] cursor-pointer"
                                />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Labels in other languages */}
                <div className="flex flex-col gap-3">
                  <span className="text-[13px] font-bold text-gray-700">Would you like museum labels in other languages besides Hindi and English?</span>
                  <div className="flex gap-2">
                    {["Yes", "No"].map((opt) => (
                      <label
                        key={opt}
                        className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold border cursor-pointer select-none transition-all duration-150 ${
                          otherLanguages === opt
                            ? "bg-[#f37021]/10 border-[#f37021] text-[#f37021]"
                            : "bg-gray-50 border-gray-100 hover:border-gray-300 text-gray-600"
                        }`}
                      >
                        <input
                          type="radio"
                          name="otherLanguages"
                          required
                          checked={otherLanguages === opt}
                          onChange={() => setOtherLanguages(opt)}
                          className="accent-[#f37021]"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>

                  {otherLanguages === "Yes" && (
                    <div className="pt-2 animate-in slide-in-from-top-2 duration-200">
                      <label htmlFor="otherLanguagesSpecify" className="text-xs text-gray-500 font-bold mb-1 block">
                        If yes, please specify:
                      </label>
                      <input
                        id="otherLanguagesSpecify"
                        type="text"
                        required
                        value={otherLanguagesSpecify}
                        onChange={(e) => setOtherLanguagesSpecify(e.target.value)}
                        placeholder="Please specify which languages..."
                        className="w-full border border-gray-200 focus:border-[#052356] rounded-xl px-4 py-2 text-sm text-black placeholder-gray-300 outline-none bg-gray-50/20"
                      />
                    </div>
                  )}
                </div>

                {/* Museum Accessibility */}
                <div className="flex flex-col gap-3">
                  <span className="text-[13px] font-bold text-gray-700">Did you find the museum accessible and visitor-friendly?</span>
                  <div className="flex gap-2">
                    {["Yes", "No"].map((opt) => (
                      <label
                        key={opt}
                        className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold border cursor-pointer select-none transition-all duration-150 ${
                          accessible === opt
                            ? "bg-[#f37021]/10 border-[#f37021] text-[#f37021]"
                            : "bg-gray-50 border-gray-100 hover:border-gray-300 text-gray-600"
                        }`}
                      >
                        <input
                          type="radio"
                          name="accessible"
                          required
                          checked={accessible === opt}
                          onChange={() => setAccessible(opt)}
                          className="accent-[#f37021]"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>

                  {accessible === "No" && (
                    <div className="pt-2 animate-in slide-in-from-top-2 duration-200">
                      <label htmlFor="accessibilityImprovements" className="text-xs text-gray-500 font-bold mb-1 block">
                        If No, please suggest improvements:
                      </label>
                      <textarea
                        id="accessibilityImprovements"
                        required
                        rows={3}
                        value={accessibilityImprovements}
                        onChange={(e) => setAccessibilityImprovements(e.target.value)}
                        placeholder="How can we make it more visitor-friendly?"
                        className="w-full border border-gray-200 focus:border-[#052356] rounded-xl px-4 py-2 text-sm text-black placeholder-gray-300 outline-none bg-gray-50/20 resize-none"
                      />
                    </div>
                  )}
                </div>

                {/* Interactive Activity */}
                <div className="flex flex-col gap-3">
                  <span className="text-[13px] font-bold text-gray-700">Did you participate in any interactive activity?</span>
                  <div className="flex gap-2">
                    {["Yes", "No"].map((opt) => (
                      <label
                        key={opt}
                        className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold border cursor-pointer select-none transition-all duration-150 ${
                          interactiveActivity === opt
                            ? "bg-[#f37021]/10 border-[#f37021] text-[#f37021]"
                            : "bg-gray-50 border-gray-100 hover:border-gray-300 text-gray-600"
                        }`}
                      >
                        <input
                          type="radio"
                          name="interactiveActivity"
                          required
                          checked={interactiveActivity === opt}
                          onChange={() => setInteractiveActivity(opt)}
                          className="accent-[#f37021]"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Would you be interested in */}
                <div className="flex flex-col gap-3">
                  <span className="text-[13px] font-bold text-gray-700">Would you be interested in:</span>
                  <div className="flex flex-wrap gap-2">
                    {["Guided Tours", "Temporary Exhibitions", "Digital Learning Resources"].map((interest) => (
                      <label
                        key={interest}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border cursor-pointer select-none transition-all duration-150 ${
                          interests.includes(interest)
                            ? "bg-[#f37021]/10 border-[#f37021] text-[#f37021]"
                            : "bg-gray-50 border-gray-100 hover:border-gray-300 text-gray-600"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={interests.includes(interest)}
                          onChange={() => handleInterestChange(interest)}
                          className="rounded text-[#f37021] focus:ring-[#f37021] accent-[#f37021]"
                        />
                        {interest}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* SECTION 3: Overall Satisfaction */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm select-none">
                    3
                  </div>
                  <h4 className={`${spectral.className} text-xl font-bold text-[#052356]`}>
                    Overall Satisfaction
                  </h4>
                </div>

                <hr className="border-gray-100" />

                {/* Overall Satisfaction */}
                <div className="flex flex-col gap-3">
                  <span className="text-[13px] font-bold text-gray-700">How satisfied are you with your visit to PMML?</span>
                  <div className="flex flex-wrap gap-2">
                    {["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"].map((opt) => (
                      <label
                        key={opt}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border cursor-pointer select-none transition-all duration-150 ${
                          overallSatisfaction === opt
                            ? "bg-[#f37021]/10 border-[#f37021] text-[#f37021]"
                            : "bg-gray-50 border-gray-100 hover:border-gray-300 text-gray-600"
                        }`}
                      >
                        <input
                          type="radio"
                          name="overallSatisfaction"
                          required
                          checked={overallSatisfaction === opt}
                          onChange={() => setOverallSatisfaction(opt)}
                          className="accent-[#f37021]"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Recommend */}
                <div className="flex flex-col gap-3">
                  <span className="text-[13px] font-bold text-gray-700">Would you recommend PMML to others?</span>
                  <div className="flex gap-2">
                    {["Definitely", "Probably", "Not Sure"].map((opt) => (
                      <label
                        key={opt}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border cursor-pointer select-none transition-all duration-150 ${
                          recommend === opt
                            ? "bg-[#f37021]/10 border-[#f37021] text-[#f37021]"
                            : "bg-gray-50 border-gray-100 hover:border-gray-300 text-gray-600"
                        }`}
                      >
                        <input
                          type="radio"
                          name="recommend"
                          required
                          checked={recommend === opt}
                          onChange={() => setRecommend(opt)}
                          className="accent-[#f37021]"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Suggestions for Improvement */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="modal-suggestions" className="text-[13px] font-bold text-gray-700">
                    Suggestions for Improvement:
                  </label>
                  <textarea
                    id="modal-suggestions"
                    rows={4}
                    value={suggestions}
                    onChange={(e) => setSuggestions(e.target.value)}
                    placeholder="Share your thoughts..."
                    className="w-full border border-gray-200 focus:border-[#052356] rounded-xl px-4 py-2.5 text-sm text-black placeholder-gray-300 outline-none transition-all bg-gray-50/30 resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="px-10 py-3 bg-[#052356] hover:bg-[#f37021] text-white text-sm font-bold tracking-widest rounded-full shadow-lg hover:shadow-xl transition-all duration-200 select-none cursor-pointer transform hover:-translate-y-0.5 active:scale-95 outline-none"
                >
                  SUBMIT FEEDBACK
                </button>
              </div>

            </form>
          )}

        </div>

      </div>

    </div>
  );
}
