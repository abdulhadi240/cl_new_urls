"use client";
import React, { useState } from "react";
import Image from "next/image";
import HeaderSection from "@/components/HeaderSection";
import Contacts from "./Contacts";
import Design from "../homepage1/components/Design";
import Head from "next/head";

export default function Customer({ params }) {
  const locale = params?.locale || "en";
  const isArabic = locale === "ar";

  const customerServiceHeading = isArabic ? "خدمة العملاء" : "CUSTOMER SERVICE";
  const createTicketTitle = isArabic ? "أنشئ تذكرتك الآن" : "CREATE YOUR TICKET NOW";
  const aboutTicket = isArabic
    ? "هذا نص تجريبي باللغة العربية لتوضيح كيف يمكن للمستخدم إنشاء التذكرة وكتابة تفاصيل المشكلة."
    : "At Crown London Institute, we're committed to assisting you at every stage. Simply fill out the form below with a brief description of your inquiry, and we'll get back to you promptly.";

  const namePlaceholder = isArabic ? "الاسم" : "Name";
  const emailPlaceholder = isArabic ? "البريد الإلكتروني" : "Email";
  const phonePlaceholder = isArabic ? "رقم الهاتف" : "Phone";
  const problemPlaceholder = isArabic ? "المشكلة" : "Problem";
  const createTicketButton = isArabic ? "إنشاء التذكرة" : "Create Ticket";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    po_box: "Problem",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission with FormData
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    // Create FormData object
    const formPayload = new FormData();
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("number", formData.number);
    formPayload.append("po_box", formData.po_box);
    formPayload.append("message", formData.message);

    try {
      const response = await fetch("https://backendbatd.clinstitute.co.uk/api/contact-us", {
        method: "POST",
        body: formPayload, // Sending form data
      });

      const result = await response.json();

      if (response.ok) {
        setResponseMessage("Form submitted successfully!");
        setFormData({ name: "", email: "", number: "", po_box: "", message: "" }); // Clear form
      } else {
        setResponseMessage(result.message || "Something went wrong!");
      }
    } catch (error) {
      setResponseMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Head>
        <title>Customer Service - London Crown Institute of Training</title>
        <meta
          name="description"
          content="At Crown London Institute, we're committed to assisting you at every stage. Fill out the form to contact us with any inquiries about our courses or services."
        />
        <meta property="og:title" content="Customer Service - London Crown Institute of Training" />
        <meta
          property="og:description"
          content="At Crown London Institute, we're committed to assisting you at every stage. Fill out the form to contact us with any inquiries about our courses or services."
        />
        {/* Add more meta tags as needed */}
      </Head>
      <Design secondary={true} bg />
      <div className="bg-[#0A1828] py-8 md:mt-8">
        <h1 className="text-center text-3xl md:pt-6 font-bold text-white">
          {customerServiceHeading}
        </h1>
      </div>

      {/* Contacts Section */}
      <Contacts />

      {/* Divider */}
      <div className="flex justify-center">
        <div className="w-full m-20 md:m-32 flex justify-center h-[1px] border-[1px] border-primary mb-10 mt-10" />
      </div>

      {/* Form Section */}
      <div className={`flex mb-10 text-base justify-center ${isArabic ? "rtl text-right" : "ltr text-left"}`}>
        <div className="w-full sm:w-[450px] bg-white dark:text-black shadow-lg p-6 h-auto sm:h-[530px]">
          <h1 className="mb-4 text-2xl font-bold text-center">{createTicketTitle}</h1>
          <p className="mb-4 text-sm">{aboutTicket}</p>
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder={namePlaceholder}
                value={formData.name}
                onChange={handleChange}
                className={`w-full py-2 border-b border-gray-300 focus:outline-none focus:border-primary ${isArabic ? "text-right" : ""}`}
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder={emailPlaceholder}
                value={formData.email}
                onChange={handleChange}
                className={`w-full py-2 border-b border-gray-300 focus:outline-none focus:border-primary ${isArabic ? "text-right" : ""}`}
                required
              />
            </div>

            {/* Phone Input */}
            <div className="mb-4">
              <input
                type="tel"
                name="number"
                placeholder={phonePlaceholder}
                value={formData.number}
                onChange={handleChange}
                className={`w-full py-2 border-b border-gray-300 focus:outline-none focus:border-primary ${isArabic ? "text-right" : ""}`}
                required
              />
            </div>

            {/* PO Box Input */}

            {/* Message Textarea */}
            <div className="mb-4">
              <textarea
                name="message"
                placeholder={problemPlaceholder}
                value={formData.message}
                onChange={handleChange}
                className={`w-full h-24 py-2 border-b border-gray-300 resize-none focus:outline-none focus:border-primary ${isArabic ? "text-right" : ""}`}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="px-4 py-2 text-white rounded-lg bg-primary focus:border-primary/80"
              disabled={loading}
            >
              {loading ? "Submitting..." : createTicketButton}
            </button>
          </form>

          {/* Response Message */}
          {responseMessage && (
            <p className="mt-4 text-center text-sm text-gray-700">{responseMessage}</p>
          )}
        </div>
      </div>
    </>
  );
}
