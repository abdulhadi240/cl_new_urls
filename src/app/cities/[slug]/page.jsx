import Image from "next/image";
import React from "react";
import SectionTitle from "../../Homepage/components/SectionTitle";
import SearchFilters_cities from "./components/SearchFilters_cities";
import HeaderSection from "@/components/HeaderSection";

export const revalidate = 60;

export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const product = await fetch(
    `${process.env.BACKEND_URL}/cities/${params.slug}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": `${process.env.LOCALE_LANGUAGE}`,

      },
    }
  ).then((res) => res.json());

  const title =
    product?.data?.meta_title || "London Crown Institute of Training";
  const description =
    product?.data?.meta_description ||
    "London Crown Institute of Training";
  const keywords =
    product?.data?.meta_keywords ||
    "London Crown Institute of Training";

  return {
    title: title,
    description: description,
    keywords: keywords,
    openGraph: {
      type: "website",
      locale: `${process.env.LOCALE_LANGUAGE}`,
      site_name: "London Crown Institute of Training",
      description: "London Crown Institute of Training",
      url: `https://clinstitute.co.uk/show_cities/${params.slug}`,
      images: [product?.data[0]?.image],
    },
    twitter: {
      site_name: "London Crown Institute of Training",
      description: "London Crown Institute of Training",
      url: `https://clinstitute.co.uk/show_cities/${params.slug}`,
      images: [
        {
          url: "/Logocrown.webp",
          width: 800,
          height: 600,
          alt: "Og Image Alt",
        },
      ],
      card: "summary_large_image",
      creator: "London Crown Institute of Training",
    },
  };
}

export async function generateStaticParams() {
  const posts = await fetch(`${process.env.BACKEND_URL}/courses/`, {
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
  const post = await fetch(
    `${process.env.BACKEND_URL}/courses/${params.slug}/cities`,
    {
      headers: {
        "Content-Type": "application/json",
         "Accept-Language": `${process.env.LOCALE_LANGUAGE}`,

      },
    }
  ).then((res) => res.json());
  console.log(post);
  console.log(params);

  const specialization = await fetch(
    `${process.env.BACKEND_URL}/specializations`,
    {
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": `${process.env.LOCALE_LANGUAGE}`,
      },
    }
  ).then((res) => res.json());

  const Category = await fetch(`${process.env.BACKEND_URL}/categories`, {
    headers: {
      "Content-Type": "application/json",
       "Accept-Language": `${process.env.LOCALE_LANGUAGE}`,

    },
  }).then((res) => res.json());

  return (
    <>
      <HeaderSection />
      <div>
        <section className="mt-12 mb-12 text-center">
          <SectionTitle title="Courses by" highlight={params.slug.replace(/[-_]/g, ' ') // Replace hyphens and underscores with spaces
      .split(' ') // Split the string into an array of words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
      .join(' ')} />

          <div className="flex justify-center my-6">
            <Image
              src="/map.png" // Replace with actual world map image
              alt="World Map"
              width={1000}
              height={200}
            />
          </div>
        </section>
        <SearchFilters_cities
          post={post}
          params={params}
          specialization={specialization}
          Category={Category}
        />
      </div>
    </>
  );
};

export default page;
