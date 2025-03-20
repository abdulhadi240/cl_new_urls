import React from "react";
import fetchData from "@/actions/server";
import Design from "@/app/homepage1/components/Design";
import BlogCarousel from "@/components/BlogCarousel";
import Wrapper from "@/components/Wrapper";
import Consult_form from "@/components/Consult_form";

export const revalidate = 60;
export const dynamicParams = true;

async function fetchConsultData(slug) {
  return fetchData(`${process.env.BACKEND_URL}/consultations/${slug}`);
}

export async function generateMetadata({ params }) {
  const { service } = params;

  const [consultingData] = await Promise.all([fetchConsultData(service)]);

  const data = consultingData;

  if (!data) {
    return {
      title: "Page Not Found",
      description: "The requested page does not exist.",
    };
  }

  return {
    title: data?.data?.meta_title || "London Crown Institute of Training",
    description:
      data?.data?.meta_description || "Explore top courses and blogs",
    keywords:
      data?.data?.meta_keywords || "training, courses, blogs, development",
    alternates: {
      canonical: `https://clinstitute.co.uk/consulting-services/${service}`,
    },
    openGraph: {
      title: data?.data?.meta_title,
      description: data?.data?.meta_description,
      url: `https://clinstitute.co.uk/consulting-services/${service}`,
      images: [
        {
          url: data?.data?.image || "/logocrown.webp",
          width: 800,
          height: 600,
          alt: data?.data?.meta_title || "Course Image",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data?.data?.meta_title,
      description: data?.data?.meta_description,
      images: [data?.data?.image || "/logocrown.webp"],
    },
  };
}

export async function generateStaticParams() {
  const posts = await fetch(`${process.env.BACKEND_URL}/consultations`, {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": `${process.env.LOCALE_LANGUAGE}`,
    },
  }).then((res) => res.json());
  return posts.data.map((post) => ({
    id: post.id,
  }));
}

const page = async ({ params }) => {
  const details = await fetch(
    `${process.env.BACKEND_URL}/consultations/${params.service}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": `${process.env.LOCALE_LANGUAGE}`,
      },
    }
  ).then((res) => res.json());

  const blogs = await fetchData(`${process.env.BACKEND_URL}/blogs`);

  return (
    <div className="overflow-hidden">
      <Design
        icon_white
        iamge={"/blog3.png"}
        center
        input={false}
        image_height={false}
        search
      >
        <h1 className="max-w-3xl mt-5 text-4xl items-center font-semibold text-white md:text-[55px] md:leading-[60px]">
          {details.data.title
            .replace(/[-_]/g, " ") // Replace hyphens and underscores with spaces
            .split(" ") // Split the string into an array of words
            .map(
              (word) =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            ) // Capitalize the first letter of each word
            .join(" ")}
        </h1>
      </Design>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-2xl text-primary font-bold mb-2">
            Why Choose {details.data.title}
          </h1>
          <div className="h-[1px] bg-secondary w-full text-secondary" />
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: details.data.content }}
          className="text-base"
        ></div>

        <div className="text-2xl text-primary font-bold mb-3 text-center mt-32">
          Consult with Us
        </div>
        <div className="h-[2px] bg-secondary w-full text-secondary" />
        <p className="text-center text-primary mt-3 text-base">
          Let’s shape the future of learning together. Book a consultation
          today!
        </p>
      </main>
      <div className="-mt-4 text-base">
        <Wrapper>
          <Consult_form title={details.data.title} />
        </Wrapper>
      </div>

      <div className="flex justify-center overflow-hidden">
        <h2 className="mt-10 mb-10 text-primary text-center flex justify-center text-2xl font-bold">
          New Articles You May Find Interesting
        </h2>
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
