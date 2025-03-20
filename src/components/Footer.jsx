import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Instagram, Twitter, Youtube } from "lucide-react";
import { FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t-[1px]  border-[#c3c3c3] shadow-lg  overflow-hidden">
      <div className="bg-white text-primary">
        <div className="container  px-4 py-6">
          <div className="md:flex md:flex-row flex flex-col justify-between gap-10">
            {/* Left Column */}
            <div className="">
              <Image
                src="/Logocrown1.webp"
                alt="trainEdge Logo"
                width={150}
                height={150}
                className="mb-4 -mt-12"
              />
              <div className="space-y-4 px-4">
                <h3 className="text-xl font-semibold">About London Crown Institute of Training </h3>
                <p className="text-sm w-full md:w-[250px] leading-relaxed">
                London Crown Institute of Training is a premier training provider committed to delivering high-quality professional development programs. Based in the heart of London, we specialize in equipping individuals and organizations with the skills and knowledge required to excel in today’s dynamic business environment. 
                </p>
                <div className="flex items-start md:space-x-2">
                  <svg
                    className="w-5 hidden md:block h-5 mt-1 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-sm md:w-[250px] w-full">
                  Office address: 6th Floor, 2 Kingdom St, London W2 6BD, United Kingdom
                  </p>
                </div>
              </div>
            </div>

            {/* Middle Column - World Map */}
            <div className="hidden md:block">
              <Image
                src={"/map1.png"}
                width={800}
                height={800}
                alt="map"
                className="flex mt-16 items-center justify-center"
              />
            </div>

            {/* Right Column */}
            <div className="w-96 px-4 md:px-0">
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <nav className="space-y-3">
                {[
                  { name: "Home", link: "/" },
                  { name: "Our Services", link: "/academy-service" },
                  { name: "Customer Service", link: "/customer-service" },
                  { name: "Jobs", link: "/job" },
                  { name: "Team Staff", link: "/team-staff" },
                  { name: "Profile", link: "/account" },
                  { name: "Blog", link: "/blog" },
                  { name: "Privacy Policy", link: "/privacy-policy" },
                  { name: "Contact Us", link: "/contact" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.link}
                    className="block text-sm hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Social Media Bar */}
        <div className="border-t border-gray-800 bg-primary">
          <div className="mx-auto px-4 py-4">
            <div className="flex justify-center space-x-6">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/company/london-crown-institute-of-training/" },
                { Icon: Facebook, href: "https://www.facebook.com/CrownLondonInstitute/" },
                { Icon: Instagram, href: "https://www.instagram.com/cli_trainings/" },
                { Icon: Twitter, href: "https://x.com/CLI_Trainings" },
                { Icon: FaPinterest, href: "https://www.pinterest.com/CLI_Trainings/" },
              ].map(({ Icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
