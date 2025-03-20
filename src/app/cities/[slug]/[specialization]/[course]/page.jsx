import React, { Suspense } from "react";
import fetchData, { GetSpecialization } from "@/actions/server";
import BlogPage from "@/app/blogs-details/components/BlogPage";
import Head from "next/head";
import Design from "@/app/homepage1/components/Design";
import Details1 from "@/app/[slug]/components/Details1";
import BlogCarousel from "@/components/BlogCarousel";
import Wrapper from "@/components/Wrapper";
import NotFound from "@/app/not-found";

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

async function fetchBlogDetail(slug) {
  return fetchData(`${process.env.BACKEND_URL}/blogs/${slug}`);
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
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { course, slug, specialization } = params;

  const [
    course1,
    categories,
    blog,
    specializationData,
    courseData,
    blogData,
    cityData,
  ] = await Promise.all([
    fetchCourseData(),
    fetchCategory(specialization),
    fetchBlogData(),
    fetchSpecializationData(),
    fetchCourseDetail(course),
    fetchBlogDetail(course),
    fetchData(`${process.env.BACKEND_URL}/cities`),
  ]);

  // Validate the main course/blog slug
  const courses = course1?.data?.find((c) => c.slug === course);
  const blogs = blog?.data?.find((s) => s.slug === course);
  if (!courses && !blogs) {
    notFound();
  }

  // Validate the slug parameter: should match either a city or a specialization slug
  const city = cityData?.data?.find((c) => c.slug === slug);
  const specializationFromSlug = specializationData?.data?.find((s) => s.slug === slug);
  if (!city && !specializationFromSlug) {
    notFound();
  }

  // Validate the specialization parameter
  const specializationMatch = specializationData?.data?.find((s) => s.slug === specialization);
  const categorie = categories?.data?.find((c) => c.slug === specialization);
  if (!specializationMatch && !categorie) {
    notFound();
  }

  const data = courseData || blogData;
  if (!data) {
    return {
      title: "Page Not Found",
      description: "The requested page does not exist.",
    };
  }

  return {
    title:
      `${data?.data?.meta_title} - ${formatSlug(specialization)} Course in ${formatSlug(slug)}` ||
      "Crown Academy for Training & Development",
    description: data?.data?.meta_description || "Explore top courses and blogs",
    keywords: data?.data?.meta_keywords || "training, courses, blogs, development",
    alternates: {
      canonical: `https://clinstitute.co.uk/${slug}/${specialization}/${course}`,
    },
    openGraph: {
      title: `${data?.data?.meta_title} - ${specialization.charAt(0).toUpperCase() + specialization.slice(1)} Course in ${slug.charAt(0).toUpperCase() + slug.slice(1)}`,
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
      title: `${data?.data?.meta_title} - ${specialization.charAt(0).toUpperCase() + specialization.slice(1)} Course in ${slug.charAt(0).toUpperCase() + slug.slice(1)}`,
      description: data?.data?.meta_description,
      images: [data?.data?.image || "https://clinstitute.co.uk/Logocrown.webp"],
    },
  };
}


const page = async ({ params }) => {
  const { course , slug , specialization } = params;

  const [course1, categories, blog, specializationData, courseData, blogData , cityData] = await Promise.all([
    fetchCourseData(),
    fetchCategory(specialization),
    fetchBlogData(),
    fetchSpecializationData(),
    fetchCourseDetail(course),
    fetchBlogDetail(course),
    fetchData(`${process.env.BACKEND_URL}/cities`), // Fetch cities data

  ]);


  const courses = course1?.data?.find((c) => c.slug === course);
  const blogs = blog?.data?.find((s) => s.slug === course);
  const city = cityData?.data?.find((c) => c.slug === slug);
  const specializations1 = specializationData?.data?.find((s) => s.slug === slug);
  const specializations = specializationData?.data?.find((s) => s.slug === specialization);
  const categorie = categories?.data?.find((c) => c.slug === specialization);

  if (!courses && !blogs) {
    return <NotFound />;
  }

  if(!city && !specializations1){
    return <NotFound />;
  }

  if(!specializations && !categorie){
    return <NotFound />;
  }


  const course_carasoul = await fetchData(`${process.env.BACKEND_URL}/courses`);

  const data = courseData || blogData;
  const type = courses ? "courses" : "blogs";
  console.log(courseData, "courseData");
  // Validate associations
  if (type === "courses") {
    const courseDetail = courseData?.data;
  
    const isCitySlug = courseDetail?.available_cities?.some((c) => c.slug === slug);
    const isSpecializationSlug = courseDetail?.specialization_slug === slug;
  
    if (!isCitySlug && !isSpecializationSlug) {
      return <NotFound />;
    }
  }
  
  

  const category = await GetSpecialization();

  return (
    <>
      {type === "courses" ? (
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
      ) : (
        <div>
          <BlogPage data={data} />
        </div>
      )}
    </>
  );
};

export default page;

export async function generateStaticParams() {
  const [course, blog] = await Promise.all([
    fetchCourseData(),
    fetchBlogData(),
  ]);

  const courses = course?.data?.map((course) => ({ slug: course.slug })) || [];
  const blogs = blog?.data?.map((blog) => ({ slug: blog.slug })) || [];

  return [...courses, ...blogs];
}
