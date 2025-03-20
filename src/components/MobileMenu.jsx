"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaHamburger, FaLock } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { useAuth } from "./context/AuthContext";
import { usePathname } from "next/navigation";

export default function MobileMenu({ color, bg }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const getInitials = (name) => {
    return name
      ? name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
      : "U";
  };

  const handleLanguageChange = () => {
    if (typeof window !== "undefined") {
      const lang = "ar"; // Or get this dynamically
      const subdomain = `${lang}.clinstitute.co.uk`;
      const currentHost = window.location.hostname;

      // Handle cases where there might not be a current host (e.g., local dev)
      if (currentHost) {
        const newHost = subdomain;
        const newUrl = window.location.href.replace(currentHost, newHost);
        window.location.href = newUrl; // Or use router.push(newUrl) if you want to stay within Next.js
      } else {
        // For local development or cases where hostname isn't available
        const newUrl = `http://${subdomain}${window.location.pathname}`; // Reconstruct URL
        window.location.href = newUrl; // Or router.push(newUrl)
      }
    }
  };

  return (
    <div className={`${bg ? "bg-primary" : ""}`}>
      <div className="mx-4 md:hidden ">
        {/* Menu Button */}
        <div className="flex justify-between items-center mx-2 h-16">
          <Link href={'/'}>
            <Image
              src={"/logo13.png"}
              width={120}
              height={120}
              alt="logo"
              className=""
            />
          </Link>
          <div className="flex gap-2 items-center">
            <button
              onClick={handleLanguageChange}
              className="flex items-center text-xs gap-2 h-10  px-2 border-[1px] rounded-md text-white border-slate-50/70"
            >
              <Image src={"/ar.webp"} height={30} width={30} alt="Arab Flag" />
              العربية
            </button>

            <div className="flex gap-3">
              {isAuthenticated && user && (
                // 🎭 Show user avatar & dropdown when logged in
                <div className="items-center relative  md:mt-0">
                  <button
                    className="w-10 h-10 flex items-center justify-center bg-secondary text-white font-bold rounded-full text-sm focus:outline-none"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {getInitials(user.name)}
                  </button>

                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 md:w-auto z-9999 bg-white border rounded shadow-lg text-sm">
                      <div className="p-3 border-b text-gray-700">
                        {user.name}
                      </div>
                      <Link
                        href="/account"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Profile
                      </Link>
                      <button
                        onClick={logout} // Calls `logout()` from `AuthProvider`
                        className="block w-full text-left px-4 py-2 text-white bg-primary "
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}

              <div
                className="flex justify-center items-center text-center"
                onClick={toggleMenu}
              >
                <MdMenu size={28} color={color || "black"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-64 bg-white shadow-md h-full z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="">
          {/* Logo */}

          <div
            aria-label="Close menu"
            onClick={toggleMenu}
            className="flex justify-end py-2 px-2 bg-primary w-full text-secondary hover:text-gray-800 "
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="bg-primary p-4">
            <div className="flex flex-col ">
              <div className="flex justify-center -mt-6">
                <Image
                  src="/logo13.png" // Optimized image usage
                  alt="Logo"
                  width={120}
                  height={120}
                  className=""
                  priority // To load the image faster
                />
              </div>
              {!user && (
                <div className="flex justify-between gap-10">
                  <Link
                    href="/sign-in"
                    className="flex items-center w-full h-8 px-4 mt-4 text-xs  border-secondary border-[1px] text-white rounded hover:bg-blue-700"
                    onClick={toggleMenu}
                  >
                    <FaLock className="mr-2 " /> Login
                  </Link>
                  <Link
                    href="/sign-up"
                    className="flex items-center w-full border-primary border-[1px] h-8 px-4 mt-4 text-xs text-white rounded bg-secondary "
                    onClick={toggleMenu}
                  >
                    <FaLock className="mr-2 " /> Signup
                  </Link>
                </div>
              )}
            </div>
          </div>

          <nav className="mt-8 space-y-4 text-sm space-x-7">
            <Link
              href="/"
              className={`block ml-7 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
                pathname === "/" ? "underline" : ""
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/training-courses"
              className={`block text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
                pathname === "/training-courses" ? "underline" : ""
              }`}
              onClick={toggleMenu}
            >
              Training Courses
            </Link>
            <Link
              href="/diploma"
              className={`block text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
                pathname === "/diploma" ? "underline" : ""
              }`}
              onClick={toggleMenu}
            >
              Diploma
            </Link>
            <Link
              href="/masters"
              className={`block text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
                pathname === "/masters" ? "underline" : ""
              }`}
              onClick={toggleMenu}
            >
              Masters
            </Link>
            <Link
              href="/cities"
              className={`block text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
                pathname === "/cities" ? "underline" : ""
              }`}
              onClick={toggleMenu}
            >
              Cities
            </Link>
            <Link
              href="/consulting-services"
              className={`block text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
                pathname === "/consulting-services" ? "underline" : ""
              }`}
              onClick={toggleMenu}
            >
              Consulting
            </Link>
            <Link
              href="/Blog"
              className={`block text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
                pathname === "/blog" ? "underline" : ""
              }`}
              onClick={toggleMenu}
            >
              Blogs
            </Link>
            <Link
              href="/job"
              className={`block text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
                pathname === "/job" ? "underline" : ""
              }`}
              onClick={toggleMenu}
            >
              Jobs
            </Link>
            <Link
              href="/contact"
              className={`block text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
                pathname === "/contact" ? "underline" : ""
              }`}
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
