import React from "react";
import Vision_Card from "./components/Vision_Card";
import Image from "next/image";
import Card_Quality from "./components/Card_Quality";
import { LuBadgeCheck } from "react-icons/lu";
import { FaHandshake } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import Design from "../homepage1/components/Design";

export async function generateMetadata() {
  return {
    title: "Academy Vision - London Crown insttitute of trainig",
    description:
      "At Crown London Institute, we empower professionals with cutting-edge training programs that transform futures. Discover our mission and vision.",
    openGraph: {
      title: "Academy Vision- London Crown insttitute of trainig",
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
      title: "Academy Vision - London Crown insttitute of trainig",
      description:
        "At Crown London Institute, we empower professionals with cutting-edge training programs that transform futures. Discover our mission and vision.",
    },
  };
}
const page = () => {
  return (
    
    <div className="mb-10">
    <Design  iamge={'/consulting.webp'} search>
    <div className="w-screen">
    <h1 className=" text-center mt-5 text-4xl items-center font-semibold text-white md:text-[55px] md:leading-[60px]">
          Explore Our <span className="text-secondary font-bold">Consultations</span>{" "}
        </h1>
        </div>
    </Design>
      <div className="mx-5 md:mx-10 ">
        <Vision_Card text={"Overview of Crown Academy"}>
          The Crown Academy for Training and Development, located in
          London, is an academy specialized and accredited in
          the field of training, development and consultation for human and
          corporate cadres in several and various areas. The Academy holds its
          training courses and programs, studies and conferences in Britain in
          addition to other 30 countries in Europe, Africa, Asia, North and
          South America. It provides a unique educational model featured with
          its flexibility in time, dates and place. It provides the latest
          information and modern sciences in a group of specializations up to
          1300 different programs through specialists and experts from all over
          the world and in five languages. The Academy carries out its programs
          professionally using the latest technologies of the world. These
          programs are presented in Arabic or English in addition to other
          languages such as (Spanish, French and German) based on the request of
          the trainee entity.
        </Vision_Card>
        <div className="flex justify-center gap-10 my-10">
        <div className="grid justify-between grid-cols-1 gap-5 md:gap-10 md:grid-cols-3 sm:grid-cols-2">
        <Card_Quality Icon={LuBadgeCheck} src={'/handshake.png'} text={'Quality'} para={'We ensure excellence in every aspect of our educational offerings.'}/>
        <Card_Quality Icon={FaHandshake} src={'/handshake.png'} text={'Integrity'} para={'We uphold the highest ethical standards in all our interactions.'}/>
        <Card_Quality Icon={FaBookOpen} src={'/handshake.png'} text={'Experience'} para={'Our team brings years of expertise to deliver unparalleled learning experiences.'}/>

        </div>
        </div>
        <Vision_Card text={"Our Vision"}>
          The Crown Academy  is one of the
          best training and developmental institutions in the world. This is
          demonstrated through its ability to combine between the scientific and
          practical methods needed by its trainees. In addition, it opens the
          field for everyone and all specializations to benefit and gain
          experience. This is based on our belief that science and knowledge are
          basic right for all. We also promote the Academy leadership and cadres
          through continuous training and development, upgrading the level of
          performance, and continuous contact and interaction with the society
          and similar institutions within the state and abroad. The Academy
          measures its performance by applying high-level standards respecting
          great ambitions and seeking excellence through our commitment to the
          finest intellectual standards.
        </Vision_Card>

        <Vision_Card text={"Our Mission"}>
          The institution seeks, through providing specialized training
          programs, to achieve the following: 1. Improving the employees’
          corporate performance. 2. Upgrading the scientific and practical level
          of employees to perform their duties in line with the new development
          in the training field. 3. Connecting institutions, companies and
          individuals with international institutions and companies to achieve
          their interests and raise their performance level through conferences,
          workshops and specialized exchange programs. 4. Transferring the
          experience of governmental and private companies and institutions in
          Britain and Europe to the other countries of the world.
        </Vision_Card>
      </div>
    </div>
  );
};

export default page;
