import HeaderSection from "@/components/HeaderSection";
import Image from "next/image";
import Stats from "./components/Stats";
import { CheckCircle } from "lucide-react";
import Carasoul from "./components/Carasoul";
import Link from "next/link";
import Hero from "./components/Hero";
import Design from "../homepage1/components/Design";

export async function generateMetadata() {
  return {
    title: "About us - London Crown insttitute of trainig",
    description:
      "At Crown London Institute, we empower professionals with cutting-edge training programs that transform futures. Discover our mission and vision.",
    openGraph: {
      title: "About us - London Crown insttitute of trainig",
      description:
        "At Crown London Institute, we empower professionals with cutting-edge training programs that transform futures. Discover our mission and vision.",
      url: "https://clinstitute.co.uk//about", // Update with your domain or page URL
      type: "website",
      images: [
        {
          url: "/Logocrown.webp", // Update with an appropriate image URL
          width: 800,
          height: 600,
          alt: "Crown London Institute",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "About us - London Crown insttitute of trainig",
      description:
        "At Crown London Institute, we empower professionals with cutting-edge training programs that transform futures. Discover our mission and vision.",
    },
  };
}

const benefits = [
  {
    title: "Expert Instructors",
    description: "Our courses are led by experienced professionals, industry experts, and thought leaders who bring real-world insights into the classroom.",
  },
  {
    title: "Practical Learning Approach",
    description: "We focus on hands-on training, case studies, and interactive sessions to ensure that participants gain practical knowledge that can be immediately applied in their professional roles.",
  },
  {
    title: "Customized Training Solutions",
    description: "Understanding that every organization has unique training needs, we offer customized training solutions that align with specific business objectives.",
  },


];

const team = [
  {
    name: "Cameron Robinson",
    role: "Product Designer",
    image: "/about.webp",
  },
  {
    name: "Carmen Williams",
    role: "Product Designer",
    image: "/about.webp",
  },
  {
    name: "Cameron Robinson",
    role: "Product Designer",
    image: "/about.webp",
  },
  {
    name: "Cameron Robinson",
    role: "Product Designer",
    image: "/about.webp",
  },
];

export default function ConsultingPage({params}) {  
  return (
    <>

      <Design secondary bg></Design>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-base">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:mt-10 md:pt-6 font-bold mb-2 uppercase">About Crown London Institute </h1>
          <p className="text-gray-600">
          Empowering Professionals, Transforming Futures.
          </p>
        </div>

        {/* Hero Section */}
        <Hero/>

        {/* What We Do Section */}
        <div className="my-16">
          <h2 className="text-2xl font-bold mb-4">What we do</h2>
          <p className="text-gray-600 mb-4">
          Crown London Institute is a premier training provider committed to delivering high-quality professional development programs. Based in the heart of London, we specialize in equipping individuals and organizations with the skills and knowledge required to excel in today’s dynamic business environment. Our courses are designed to meet the evolving needs of professionals across various industries, ensuring that they stay ahead in an increasingly competitive world.
          </p>
        </div>
        <div className="flex justify-center mb-20">
          <div className="flex flex-row gap-16 justify-center md:p-6 md:px-10 rounded-full md:bg-[#f9f9f9] flex-wrap">
            <Stats number={95} icon={"%"} text={"Course Satisfaction Rate"} />
            <Stats number={5000} icon={"+"} text={"Professionals Trained"} />
            <Stats number={100} icon={"+"} text={"Corporate Companies Partners"} />
            <Stats number={85} icon={"%"} text={"Repeat Clients"} />
          </div>
        </div>

        {/* Our Lorem Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
            At Crown London Institute, our mission is to empower professionals and organizations through cutting-edge training programs that foster innovation, leadership, and excellence. We believe that continuous learning is the key to success, and we are dedicated to providing practical, industry-relevant education that enhances career growth and business performance.
            </p>
          </div>
          <div>
            <Image
              src="/aboutus.webp"
              alt="Digital tablet"
              width={500}
              height={300}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-8">
          What We Offer
          </h2>
          <div className="grid md:grid-cols-2 items-start gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary p-4 rounded-lg">
                <div className="w-8 h-8 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-left">
                <h3 className="font-bold mb-2">Corporate Training</h3>
                <p className="text-gray-600">
                Tailored programs for organizations looking to upskill their workforce.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary p-4 rounded-lg">
                <div className="w-8 h-8 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-left">
                <h3 className="font-bold mb-2">Executive Development</h3>
                <p className="text-gray-600">
                Advanced training for business leaders and senior professionals.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary p-4 rounded-lg">
                <div className="w-8 h-8 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-left">
                <h3 className="font-bold mb-2">Technical & Industry-Specific Courses</h3>
                <p className="text-gray-600">
                Specialized training in finance, project management, technology, healthcare, and more.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary p-4 rounded-lg">
                <div className="w-8 h-8 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-left">
                <h3 className="font-bold mb-2">Compliance & Regulatory Training</h3>
                <p className="text-gray-600">
                Ensuring businesses and individuals stay compliant with industry standards.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* What Will You Get Section */}
        <div className="">
          <div className="grid md:grid-cols-2 md:mx-20 mb-20 ">
            <div className="hidden md:block relative">
              <Image
                src="/about.webp"
                alt="Person pointing"
                width={500}
                height={500}
                className="rounded-lg z-50 p-4"
              />
              <div className="bg-[#efd8c9] absolute bottom-0 w-[70%] -z-10 rounded-lg h-[70%]"/>
            </div>
            <div className="flex justify-center">
              <div className="flex justify-center flex-col">
                <h2 className="text-2xl text-center font-bold mb-6">
                Why Choose Us?
                </h2>
                <div className="flex justify-center">
                  <div className="space-y-6">
                    {benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-start md:gap-4 gap-2"
                      >
                        <CheckCircle className=" w-10 md:w-6 h-6 text-blue-900 flex-shrink-0" />
                        <div>
                          <p className="text-gray-600">{benefit.title}</p>
                          <p className="text-sm text-gray-400 mt-1">
                           {benefit.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members Section 
        <div className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-start md:text-center">Colleague & team members</h2>
          </div>

          <div className="">
            <Carasoul />
          </div>
        </div>*/}
      </main>
    </>
  );
}
