"use client";

import React, { useState } from 'react';
import FeedbackModal from './FeedbackModal';

export default function ContactForm() {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  
  // Enquiry form state
  const [enquiryName, setEnquiryName] = useState("");
  const [enquiryEmail, setEnquiryEmail] = useState("");
  const [enquiryMobile, setEnquiryMobile] = useState("");
  const [enquiryMessage, setEnquiryMessage] = useState("");
  
  // Validation errors state
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    mobile?: string;
    message?: string;
  }>({});

  const validate = (): boolean => {
    const newErrors: typeof errors = {};
    
    // Name validation: Only letters and spaces, 3-50 chars
    if (!enquiryName.trim()) {
      newErrors.name = "Full Name is required.";
    } else if (!/^[a-zA-Z\s]{3,50}$/.test(enquiryName.trim())) {
      newErrors.name = "Name must be between 3 and 50 characters and contain only letters.";
    }

    // Email validation
    if (!enquiryEmail.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiryEmail.trim())) {
      newErrors.email = "Please enter a valid email address (e.g. name@domain.com).";
    }

    // Mobile validation: 10-digit Indian number starting with 6-9
    if (!enquiryMobile.trim()) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!/^[6-9]\d{9}$/.test(enquiryMobile.trim())) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number starting with 6-9.";
    }

    // Message validation
    if (!enquiryMessage.trim()) {
      newErrors.message = "Message is required.";
    } else if (enquiryMessage.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    alert(`Enquiry submitted!\nName: ${enquiryName}\nEmail: ${enquiryEmail}\nMobile: ${enquiryMobile}\nMessage: ${enquiryMessage}`);
    // Clear state
    setEnquiryName("");
    setEnquiryEmail("");
    setEnquiryMobile("");
    setEnquiryMessage("");
    setErrors({});
  };

  return (
    <div className="w-full h-full flex flex-col gap-6 text-left">
      
      {/* Label */}
      <div className="flex flex-col gap-2">
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-gray-500 uppercase">
          GET IN TOUCH
        </span>
      </div>

      {/* Box-shadowed White Card */}
      <div className="w-full flex-grow bg-white rounded-2xl border border-gray-100 shadow-md p-6 sm:p-8 flex flex-col gap-6 relative">
        
        {/* Header containing title and orange Give Feedback button */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-4 select-none">
          <div className="pb-1 text-sm sm:text-base font-bold text-[#052356] border-b-2 border-[#052356] -mb-[18px]">
            General Enquiry
          </div>
          <button
            onClick={() => setIsFeedbackOpen(true)}
            className="bg-[#f37021] hover:bg-[#d85c15] text-white text-xs sm:text-sm font-bold px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-95 outline-none"
          >
            Give Feedback
          </button>
        </div>

        {/* GENERAL ENQUIRY FORM */}
        <form noValidate onSubmit={handleEnquirySubmit} className="flex flex-col gap-6 flex-grow mt-2">
          {/* Full Name */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="enquiry-name" className="text-[11px] font-bold text-black uppercase tracking-wide">
              Full Name
            </label>
            <input
              id="enquiry-name"
              type="text"
              value={enquiryName}
              onChange={(e) => {
                setEnquiryName(e.target.value);
                if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
              }}
              placeholder="Enter your full name"
              className={`w-full border-t-0 border-x-0 border-b ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:border-[#052356] rounded-none outline-none focus:ring-0 px-0 pb-2 text-sm text-black placeholder-gray-300 transition-all`}
            />
            {errors.name && <span className="text-xs text-red-500 font-semibold">{errors.name}</span>}
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="enquiry-email" className="text-[11px] font-bold text-black uppercase tracking-wide">
              Email Address
            </label>
            <input
              id="enquiry-email"
              type="email"
              value={enquiryEmail}
              onChange={(e) => {
                setEnquiryEmail(e.target.value);
                if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
              }}
              placeholder="Enter your email address"
              className={`w-full border-t-0 border-x-0 border-b ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:border-[#052356] rounded-none outline-none focus:ring-0 px-0 pb-2 text-sm text-black placeholder-gray-300 transition-all`}
            />
            {errors.email && <span className="text-xs text-red-500 font-semibold">{errors.email}</span>}
          </div>

          {/* Mobile Number */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="enquiry-mobile" className="text-[11px] font-bold text-black uppercase tracking-wide">
              Mobile Number
            </label>
            <input
              id="enquiry-mobile"
              type="tel"
              value={enquiryMobile}
              onChange={(e) => {
                setEnquiryMobile(e.target.value);
                if (errors.mobile) setErrors(prev => ({ ...prev, mobile: undefined }));
              }}
              placeholder="Enter your mobile number"
              className={`w-full border-t-0 border-x-0 border-b ${errors.mobile ? 'border-red-500' : 'border-gray-200'} focus:border-[#052356] rounded-none outline-none focus:ring-0 px-0 pb-2 text-sm text-black placeholder-gray-300 transition-all`}
            />
            {errors.mobile && <span className="text-xs text-red-500 font-semibold">{errors.mobile}</span>}
          </div>

          {/* Message Area */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="enquiry-message" className="text-[11px] font-bold text-black uppercase tracking-wide">
              Message
            </label>
            <textarea
              id="enquiry-message"
              rows={3}
              value={enquiryMessage}
              onChange={(e) => {
                setEnquiryMessage(e.target.value);
                if (errors.message) setErrors(prev => ({ ...prev, message: undefined }));
              }}
              placeholder="Type your query message here..."
              className={`w-full border-t-0 border-x-0 border-b ${errors.message ? 'border-red-500' : 'border-gray-200'} focus:border-[#052356] rounded-none outline-none focus:ring-0 px-0 pb-2 text-sm text-black placeholder-gray-300 transition-all resize-none`}
            />
            {errors.message && <span className="text-xs text-red-500 font-semibold">{errors.message}</span>}
          </div>

          {/* Submit */}
          <div className="pt-2 mt-auto">
            <button
              type="submit"
              className="inline-flex items-center justify-center px-8 py-2.5 bg-[#052356] hover:bg-[#f37021] text-white text-xs sm:text-sm font-bold tracking-wider rounded-full shadow-md hover:shadow-lg transition-all duration-200 select-none cursor-pointer transform hover:-translate-y-0.5 active:scale-95 outline-none"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>

      {/* Popup Feedback Modal */}
      <FeedbackModal isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />

    </div>
  );
}
