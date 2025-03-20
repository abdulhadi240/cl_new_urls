import React, { Suspense } from "react";
import fetchData, { GetSpecialization } from "@/actions/server";
import BlogPage from "@/app/blogs-details/components/BlogPage";
import Head from "next/head";
import Design from "@/app/homepage1/components/Design";
import Details1 from "@/app/[slug]/components/Details1";
import BlogCarousel from "@/components/BlogCarousel";
import Wrapper from "@/components/Wrapper";
import NotFound from "@/app/not-found";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

async function fetchCourseData() {
  return fetchData(`${process.env.BACKEND_URL}/courses`);
}

async function fetchBlogData() {
  return fetchData(`${process.env.BACKEND_URL}/blogs?per_page=5&page=1`);
}


async function fetchCourseDetail(slug) {
  return fetchData(`${process.env.BACKEND_URL}/courses/${slug}`);
}


async function fetchCategory() {
  return fetchData(`${process.env.BACKEND_URL}/categories`);
}


async function fetchSpecializationData() {
  const res = await fetch(`${process.env.BACKEND_URL}/specializations`, {
    next: { revalidate: 60 },
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "en",
    },
  });
  return res.json();
}


function formatSlug(slug) {
  return slug
    .split(/[-_+]/) // Split by '-', '_', or '+'
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize first letter
    .join(' '); // Join back with a space
}

// --------- GENERATE METADATA FUNCTION ---------
 export async function generateMetadata({ params }) {
  const { detail , course , specialization , slug } = await params;

  // Fetch course or blog details based on slug
  const [courseData] = await Promise.all([
    fetchCourseDetail(detail),
  ]);


  const data = courseData;
  const courseDetail = courseData?.data;

  const isCitySlug = courseDetail?.available_cities?.some((c) => c.slug === slug);
  const isSpecializationSlug = courseDetail?.specialization_slug === specialization;
  const isCategorySlug = courseDetail.category_slug === course

  if (!isCitySlug || !isSpecializationSlug || !isCategorySlug) {
    return notFound();
  }


  if (!data) {
    return {
      title: "Page Not Found",
      description: "The requested page does not exist.",
    };
  }

  return {
    title: `${data?.data?.meta_title} - ${formatSlug(specialization)} Course in ${formatSlug(slug)} `
 || "Crown Academy for Training & Development",
    description:
      data?.data?.meta_description || "Explore top courses and blogs",
    keywords:
      data?.data?.meta_keywords || "training, courses, blogs, development",
    alternates: {
      canonical: `https://clinstitute.co.uk/${slug}/${specialization}/${course}`,
    },
    openGraph: {
      title: `${data?.data?.meta_title} - ${params.specialization?.charAt(0).toUpperCase() + params.specialization?.slice(1)} Course in ${params.city?.charAt(0).toUpperCase() + params.city?.slice(1)} `,
      description: data?.data?.meta_description,
      url: `https://clinstitute.co.uk/${slug}/${specialization}/${course}`,
      images: [
        {
          url: data?.data?.image || "https://clinstitute.co.uk/Logocrown.webp",
          width: 800,
          height: 600,
          alt: data?.data?.meta_title || "Course Image",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${data?.data?.meta_title} - ${params.specialization?.charAt(0).toUpperCase() + params.specialization?.slice(1)} Course in ${params.city?.charAt(0).toUpperCase() + params.city?.slice(1)} `,
      description: data?.data?.meta_description,
      images: [data?.data?.image || "https://clinstitute.co.uk/Logocrown.webp"],
    },
  };
}

const page = async ({ params }) => {
  const { course , slug , specialization , detail } = await params;

  const [course1, categories, blog , specializationData, courseData , cityData] = await Promise.all([
    fetchCourseData(),
    fetchCategory(specialization),
    fetchBlogData(),
    fetchSpecializationData(),
    fetchCourseDetail(detail),
    fetchData(`${process.env.BACKEND_URL}/cities`), // Fetch cities data

  ]);


  const courses = course1?.data?.find((c) => c.slug === detail);
  const city = cityData?.data?.find((c) => c.slug === slug);
  const specializations = specializationData?.data?.find((s) => s.slug === specialization);
  const categorie = categories?.data?.find((c) => c.slug === course);


  if (!categorie) {
    return <NotFound />;
  }

  if(!courses)
  {
    return <NotFound />;

  }

  if(!city){
    return <NotFound />;
  }

  if(!specializations){
    return <NotFound />;
  }


  const course_carasoul = await fetchData(`${process.env.BACKEND_URL}/courses`);

  const data = courseData;
  const type = "courses" ;

  const category = await GetSpecialization();

  return (
    <>
        <>
          <Design
            icon_white
            iamge={"/image_consult.png"}
            center
            search
            input={false}
            image_height={false}
          >
            <h1 className="max-w-3xl mt-5 text-4xl items-center font-semibold text-white md:text-[55px] md:leading-[60px]">
              {data?.data.title
                .replace(/[-_]/g, " ") // Replace hyphens and underscores with spaces
                .split(" ") // Split the string into an array of words
                .map(
                  (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                ) // Capitalize the first letter of each word
                .join(" ")}
            </h1>
          </Design>
          <Suspense fallback={"loading..."}>
            <Details1 course={data.data} params={params}/>
          </Suspense>

          <div className="flex justify-center overflow-hidden">
            <h1 className="mt-10 mb-10 text-primary text-center flex justify-center text-2xl font-bold">
              New Articles You May Find Interesting
            </h1>
          </div>
          <div className="flex flex-col overflow-hidden justify-center gap-4 sm:flex-row">
            <Wrapper>
              <BlogCarousel data={blog} />
            </Wrapper>
          </div>
        </>
      
    </>
  );
};

export default page;

export async function generateStaticParams() {
  const [course] = await Promise.all([
    fetchCourseData(),
  ]);

  const courses = course?.data?.map((course) => ({ slug: course.slug })) || [];

  return [...courses];
}
