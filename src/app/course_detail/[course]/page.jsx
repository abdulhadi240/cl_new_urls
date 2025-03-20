import React, { Suspense } from "react";
import Content_extend from "../components/Content_extend";
import Carasoul from "../../blogs/components/Carasoul";
import DesktopCarasoul from "../../blogs-details/components/DesktopCarasoul";
import Details from "../components/Details";
import { GetSpecialization } from "@/actions/server";
import HeaderSection from "@/components/HeaderSection";

export async function generateMetadata({ params }) {
  const product = await fetch(
    `${process.env.BACKEND_URL}/courses/${params.course}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": "en",
      },
    }
  ).then((res) => res.json());

  const title =
    product?.data?.meta_title || "British Academy for Training & Development";
  const description =
    product?.data?.meta_description ||
    "British Academy for Training & Development";
  const keywords =
    product?.data?.meta_keywords ||
    "British Academy for Training & Development";

  return {
    title: title,
    description: description,
    keywords: keywords,
    openGraph: {
      type: "website",
      locale: "en_US",
      site_name: "British Academy for Training & Development",
      description: "British Academy for Training & Development",
      url: `https://client-academy.vercel.app/blogs/${params.course}`,
      images: [product?.data?.image],
    },
    twitter: {
      site_name: "British Academy for Training & Development",
      description: "British Academy for Training & Development",
      url: `https://client-academy.vercel.app/blogs/${params.course}`,
      images: [
        {
          url: "/logobat.png",
          width: 800,
          height: 600,
          alt: "Og Image Alt",
        },
      ],
      card: "summary_large_image",
      creator: "British Acadmey",
    },
  };
}

export async function generateStaticParams() {
  const posts = await fetch(`${process.env.BACKEND_URL}/courses/`, {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "en",
    },
  }).then((res) => res.json());
  return posts.data.map((post) => ({
    id: post.id,
  }));
}

const page = async ({ params }) => {
  const course = await fetch(
    `${process.env.BACKEND_URL}/courses/${params.course}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": "en",
      },
    }
  ).then((res) => res.json());
  const category = await GetSpecialization();

  return (
    <>
      <HeaderSection />
      <div>
        <Content_extend categories={category}>
          <div className="mt-10 font-semibold text-center md:text-left title text-xl">
            {course?.data?.title}
          </div>
          <Suspense fallback={"loading..."}>
            <Details course={course} />
          </Suspense>
        </Content_extend>
        <h1 className="mx-6 mt-10 text-xl font-bold text-center md:text-start md:mb-10 text-primary">
          Trending Courses
        </h1>
        <div className="hidden sm:block">
          <DesktopCarasoul />
        </div>
        <div className="flex justify-center sm:hidden">
          <Carasoul />
        </div>
      </div>
    </>
  );
};

export default page;
