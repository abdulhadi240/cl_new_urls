"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Design from "../homepage1/components/Design";
import Head from "next/head";

const sections = [
  {
    id: "introduction",
    title: "Crown London Institute",
    content: `
Effective Date: 01-February-2025

Crown London Institute ("we," "our," or "us") is committed to protecting your privacy and ensuring that your personal data is handled securely and in compliance with applicable UK data protection laws, including the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.

This Privacy Policy explains how we collect, use, store, and protect your personal data when you register for our training courses or interact with our services.
    `,
  },
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: `
When you register for a course or use our services, we may collect the following personal data:

- Identity Information – Full name, job title, and company details.
- Contact Information – Phone number, email address, and mailing address.
- Payment Information – Billing details for course registration and transactions.
- Course Preferences – Information on courses of interest and training history.
- Marketing Preferences – Your consent for receiving updates and promotional material.
    `,
  },
  {
    id: "how-we-use-your-data",
    title: "2. How We Use Your Data",
    content: `
We collect and process personal data for the following purposes:

- Course Registration & Administration: To register you for training programs and manage course participation.
- Communication: To send confirmation emails, course updates, and respond to inquiries.
- Marketing & Future Contact: To keep you informed about future courses, offers, and related services (if you have given consent).
- Legal & Compliance Requirements: To comply with legal obligations and UK regulations.
    `,
  },
  {
    id: "data-retention",
    title: "3. Data Retention",
    content: `
We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy.

If you register for a course, we may keep your information for future contact unless you request its deletion.
    `,
  },
  {
    id: "data-security",
    title: "4. Data Protection & Security",
    content: `
We take appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or misuse.
    `,
  },
  {
    id: "sharing-your-data",
    title: "5. Sharing Your Data",
    content: `
We do not sell or rent your personal data. However, we may share it in the following cases:

- With Service Providers: Third-party providers assisting in course management, IT support, or payment processing.
- Legal Requirements: If required by law or regulatory authorities.
    `,
  },
  {
    id: "your-rights",
    title: "6. Your Rights Under UK GDPR",
    content: `
You have the right to:

- Access the personal data we hold about you.
- Request corrections to inaccurate data.
- Withdraw consent for marketing communications.
- Request deletion of your personal data (subject to legal obligations).
- Object to data processing in certain cases.
    `,
  },
  {
    id: "contact",
    title: "7. Contact Us",
    content: `
If you have any questions or wish to exercise your rights, please contact us at:

Crown London Institute  
6th Floor, 2 Kingdom St, London W2 6BD, United Kingdom  
Email: privacy@clinstitute.co.uk
    `,
  },
  {
    id: "updates",
    title: "8. Updates to This Policy",
    content: `
We may update this policy from time to time to reflect changes in regulations or our practices.

Any significant changes will be communicated to you.

By registering for our courses or using our services, you acknowledge that you have read and understood this Privacy Policy.
    `,
  },
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility
  const observerRef = useRef(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    sections.forEach((section) => {
      sectionRefs.current[section.id] = document.getElementById(section.id);
    });

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0.4 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
    <Head>
    <title>Privacy Policy - London Crown Institute of Training</title>
    <meta
      name="description"
      content="At Crown London Institute, we're committed to assisting you at every stage. Fill out the form to contact us with any inquiries about our courses or services."
    />
    <meta property="og:title" content="Privacy Policy - London Crown Institute of Training" />
    <meta
      property="og:description"
      content="At Crown London Institute, we're committed to assisting you at every stage. Fill out the form to contact us with any inquiries about our courses or services."
    />
    {/* Add more meta tags as needed */}
  </Head>
      <Design secondary bg={true} />
      <div className="bg-[#0A1828] py-4">
        <h1 className="text-center md:mt-10 md:pt-6 text-3xl items-center font-bold text-white">
          Privacy Policy
        </h1>
      </div>
      <div className="flex min-h-screen flex-col lg:flex-row text-left bg-white">
        {/* Sidebar Navigation */}
        <nav
          className={cn(
            "lg:w-[320px] lg:min-h-screen border-r mt-2 bg-white transition-transform transform lg:block",
            isSidebarOpen ? "block" : "lg:block hidden"
          )}
        >
          <div className="sticky top-0 p-4 lg:p-6 mt-2">
            <button
              onClick={toggleSidebar}
              className="lg:hidden block p-4 mb-4 text-lg font-bold text-black"
            >
              {isSidebarOpen ? "Close Menu" : "Open Menu"}
            </button>
            <div className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={cn(
                    "w-full text-left px-2 py-1 text-sm rounded-md transition-all text-black",
                    activeSection === section.id
                      ? "text-black font-bold"
                      : "text-black/70 font-medium"
                  )}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Content Section */}
        <main className="p-4 lg:p-6 overflow-hidden bg-white flex-1">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={cn(
                    "scroll-mt-16 transition-opacity duration-300 p-4 text-black",
                    activeSection === section.id ? "opacity-100 text-black" : "opacity-80 text-black/70"
                  )}
                >
                  <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                  <p className="text-black text-base whitespace-pre-line">
                    {section.content}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
