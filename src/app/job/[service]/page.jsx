import React from "react";
import fetchData from "@/actions/server";
import Design from "@/app/homepage1/components/Design";
import BlogCarousel from "@/components/BlogCarousel";
import HeaderSection from "@/components/HeaderSection";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Consult_form from "@/components/Consult_form";
import Apply from "../components/Apply";

export const revalidate = 60;
export const dynamicParams = true;

async function fetchJobData(slug) {
  return fetchData(`${process.env.BACKEND_URL}/jobs/${slug}`);
}

export async function generateMetadata({ params }) {
  const { service } = params;

  const [consultingData] = await Promise.all([fetchJobData(service)]);

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
      canonical: `https://clinstitute.co.uk/job/${service}`,
    },
    openGraph: {
      title: data?.data?.meta_title,
      description: data?.data?.meta_description,
      url: `https://clinstitute.co.uk/job/${service}`,
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
  const posts = await fetch(`${process.env.BACKEND_URL}/jobs`, {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": `${process.env.LOCALE_LANGUAGE}`,
    },
  }).then((res) => res.json());
  return posts.data.map((post) => ({
    id: post.id,
  }));
}

export default async function JobPosting({ params }) {
  const { service } = params;
  const blogs = await fetch(
    `${process.env.BACKEND_URL}/blogs?per_page=5&page=1`,
    {
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": `${process.env.LOCALE_LANGUAGE}`,
      },
    }
  ).then((res) => res.json());

  const job_data = await fetchJobData(service);
  const data = job_data.data;

  return (
    <>
      <Design secondary={true} bg={true}></Design>
      <div className="max-w-6xl mx-auto py-6 text-base mt-10">
        <div className="bg-white shadow-lg">
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="w-[300%] h-12 bg-primary md:-mx-12 -z-10" />
            {/*
              - w-[300%]: The line is significantly wider than the container,
                so its edges are more visible on the sides.
              - h-16: The line's thickness (4rem). Adjust as you like.
              - bg-primary: Tailwind color class (replace with your own color if needed).
            */}
          </div>

          {/* Header Section */}
          <div className="flex flex-col lg:flex-row z-50">
            {/* Left Column */}
            <div className="flex-1 p-4 md:p-6 lg:border-r lg:border-gray-200">
              <h1 className="text-2xl md:text-3xl font-bold font-inter tracking-tight mb-4 text-primary">
                {data.title}
              </h1>
              <h2 className="text-base text-gray-600 leading-relaxed font-inter">
                {data.short_description}
              </h2>
            </div>

            {/* Right Column */}
            <div className="p-4 md:p-6 lg:w-96 flex flex-col justify-between z-50">
              <Apply />
              <div className="space-y-3">
                <div className="flex items-center gap-3 justify-start">
                  <h3 className="font-medium min-w-[80px] text-primary">Salary:</h3>
                  <span className="text-gray-600">
                    {data.min_salary} - {data.max_salary}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-medium min-w-[80px] text-primary">Job Type:</span>
                  <span className="text-gray-600">{data.job_type}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-medium min-w-[80px] text-primary">Industry:</span>
                  <span className="text-gray-600">{data.company.industry}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary">Job Status:</span>
                  <span className="text-gray-600">{data.status}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Responsibilities */}

          <div className="mt-6 p-3">
            <h2 className="text-2xl font-bold text-primary mb-3">
              Job Description
            </h2>
            <div
              className="text-gray-700 text-base  leading-relaxed"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
          </div>
        </div>
      </div>

      {/* Latest Blog Section */}
      <div className="flex justify-center">
        <h1 className="mt-10 mb-10 text-primary text-center flex justify-center text-3xl font-bold">
          Related Articles You May Find Interesting
        </h1>
      </div>

      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <Wrapper>
          <BlogCarousel data={blogs} />
        </Wrapper>
      </div>
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "JobPosting",
            title: data.title,
            description: data.short_description,
            datePosted: new Date().toISOString(),
            validThrough: new Date(data.end_date).toISOString(),
            employmentType: data.job_type,
            industry: data.company.industry,
            baseSalary: {
              "@type": "MonetaryAmount",
              currency: "USD",
              value: {
                "@type": "QuantitativeValue",
                minValue: data.min_salary.replace("$ ", ""),
                maxValue: data.max_salary.replace("$ ", ""),
                unitText: "YEAR",
              },
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: data.location,
                addressCountry: "UK",
              },
            },
            hiringOrganization: {
              "@type": "Organization",
              name: data.company.name,
              logo: data.company.logo,
              sameAs: data.company.website,
            },
          }),
        }}
      />
    </>
  );
}
