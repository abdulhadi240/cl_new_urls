"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { menu } from "../../../components/Menu";
import MobileMenu from "../../../components/MobileMenu";
import Login_ from "@/components/Login_";
import { usePathname } from "next/navigation";
import Head from "next/head";

const FaLock = dynamic(() => import("react-icons/fa").then((mod) => mod.FaLock));

const Header = ({ secondary, icon_white, bg }) => {
  const currentPath = usePathname() || "/"; // Get dynamic path correctly
  const [scrolled, setScrolled] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Set up the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ✅ JSON-LD: Site Navigation
  const siteNavigationJsonLd = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "@id": "https://clinstitute.co.uk/#site-navigation",
    "name": "London Crown Institute of Training",
    "url": "https://clinstitute.co.uk",
    "hasPart": menu.map((item) => ({
      "@type": "SiteNavigationElement",
      "name": item.name,
      "url": `https://clinstitute.co.uk${item.link}`,
    })),
  };

  // ✅ JSON-LD: Breadcrumbs (Now Fully Dynamic)
  const pathSegments = currentPath.split("/").filter(Boolean);
  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://clinstitute.co.uk/",
      },
      ...pathSegments.map((segment, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": segment.replace(/-/g, " ").toUpperCase(),
        "item": `https://clinstitute.co.uk/${pathSegments.slice(0, index + 1).join("/")}`,
      })),
    ],
  };

  // ✅ JSON-LD: Organization Schema
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://clinstitute.co.uk/#organization",
    "name": "London Crown Institute of Training",
    "url": "https://clinstitute.co.uk",
    "logo": "/logocrown.webp",
    "sameAs": [
      "https://www.facebook.com/crowninstitute",
      "https://www.linkedin.com/company/crowninstitute",
      "https://twitter.com/crowninstitute"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44 20 1234 5678",
      "contactType": "customer service",
      "email": "privacy@clinstitute.co.uk"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6th Floor, 2 Kingdom St",
      "addressLocality": "London",
      "postalCode": "W2 6BD",
      "addressCountry": "UK"
    }
  };

  return (
    <>
      {/* Inject JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(siteNavigationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbsJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />

      {/* Mobile Header */}
      <header className="md:hidden z-[9999]">
        <MobileMenu color={icon_white ? "white" : "black"} bg={bg} />
      </header>

      {/* Desktop Header */}
      <section className="fixed top-0 w-full z-[999]">
        <nav
          className={`z-[999] text-sm items-center justify-between hidden p-4 text-white bg-primary ${secondary ? "bg-opacity-100" : "bg-opacity-70"
            } md:flex transition-all duration-300 ease-in-out ${scrolled ? "bg-opacity-100 shadow-lg z-[99999]" : "z-[50]"
            }`}
        >
          {/* Logo */}
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                src={"/logo13.png"}
                alt="London Crown Institute of Training
 logo"
                width={120}
                height={120}
                priority
                className={`absolute top-0 -mt-7 transition-all duration-300 ease-in-out`}
              />
            </Link>
          </div>

          <div className="hidden space-x-6 sm:flex ml-16 sm:gap-4">
            {menu.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={`hover:text-white/80 pb-1 border-b-2 transition-colors duration-300 ${currentPath === item.link
                    ? "border-secondary"
                    : "border-transparent"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>



          {/* Login and Sign Up */}
          <Login_ />
        </nav>
      </section>
    </>
  );
};

export default Header;
