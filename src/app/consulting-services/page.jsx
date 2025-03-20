import React from "react";
import fetchData from "@/actions/server";
import Filteration from "./components/Filteration";
import BlogCarousel from "@/components/BlogCarousel";
import Design from "../homepage1/components/Design";
import Wrapper from "@/components/Wrapper";



export async function generateMetadata() {
  return {
    title: "All Consulting Services - London Crown Institute of Training",
    description:
      "Explore our professional consulting services in the academy, offering expert guidance in education, career development, and personal growth.",
    openGraph: {
      title: "Explore Consulting Services - London Crown Institute of Training",
      description:
        "Get professional consultations in various fields, including career growth, education strategies, and personal development.",
      url: "https://clinstitute.co.uk/consulting-services",
      type: "website",
      images: [
        {
          url: "https://clinstitute.co.uk/Logocrown.webp",
          width: 800,
          height: 600,
          alt: "Consulting Services",
        },
      ],
    },
  };
}

const page = async () => {
  const services = await fetchData(`${process.env.BACKEND_URL}/consultations`);
  const catgory = await fetchData(`${process.env.BACKEND_URL}/categories`);
  const blogs = await fetchData(`${process.env.BACKEND_URL}/blogs`);

  return (
    <div>
      <Design
        icon_white
        iamge={"/image_consult.png"}
        center
        input={false}
        image_height={false}
        search
      >
        <h1 className="max-w-3xl mt-5 text-4xl items-center font-semibold text-white md:text-[55px] md:leading-[60px]">
          Explore Our{" "}
          <span className="text-secondary font-bold">Consultations</span> <br />
        </h1>
      </Design>
      <div className="min-h-screen px-4 py-12 bg-white">
        <div className="mb-12 text-center">
          <h1 className="mb-2 text-4xl text-primary font-bold">
            Consultation Services in Academy
          </h1>
        </div>
        {/* Filter Bar */}
        <Filteration category={catgory} data={services} />
      </div>
      <div className="flex justify-center overflow-hidden">
        <h1 className="mt-10 mb-10 text-primary text-center flex justify-center text-3xl font-bold">
          New Articles You May Find Interesting
        </h1>
      </div>
      <div className="flex flex-col overflow-hidden justify-center gap-4 sm:flex-row">
        <Wrapper>
          <BlogCarousel data={blogs} />
        </Wrapper>
      </div>
    </div>
  );
};

export default page;
