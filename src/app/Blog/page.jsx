import React from "react";
import Design from "../homepage1/components/Design";
import BlogsCategory from "@/components/BlogsCategory";
import fetchData from "@/actions/server";
import Wrapper from "@/components/Wrapper";
import BlogCarousel from "@/components/BlogCarousel";



export async function generateMetadata({ params }) {

  const title =
    "Explore All Blogs - London Crown Institute of Training";
  const description =
    "Discover insightful articles and updates from London Crown Institute of Training, your trusted source for professional development and educational resources.";
  const keywords =
    "London Crown Institute, professional training, education blogs, career development, learning resources";

  return {
    title: title,
    description: description,
    keywords: keywords,
    openGraph: {
      type: "website",
      locale:`${process.env.LOCALE_LANGUAGE}`,
      site_name: "London Crown Institute of Training",
      description: "London Crown Institute of Training",
      url: `https://clinstitute.co.uk/Blog`,
      images: 'https://clinstitute.co.uk/Logocrown.webp',
    },
    twitter: {
      site_name: "London Crown Institute of Training",
      description: "London Crown Institute of Training",
      url: `https://clinstitute.co.uk/Blog`,
      images: [
        {
          url: "https://clinstitute.co.uk/Logocrown.webp",
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


const page = async () => {

    const category = await fetchData(`${process.env.BACKEND_URL}/blog_categories`)
    const blogs = await fetchData(`${process.env.BACKEND_URL}/blogs`)
    

  return (
    <div>
      <Design icon_white iamge={"/blog3.png"} search center input={false} image_height={false}>
        <h1 className="max-w-3xl mt-5 text-4xl items-center font-semibold text-white md:text-[55px] md:leading-[60px]">
          Explore Our <span className="text-secondary font-bold">Blogs</span>{" "}
          <br />
        </h1>
      </Design>


      <div>
        <BlogsCategory category={category?.data}/>
      </div>
      {/* Latest Blog Section */}
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
