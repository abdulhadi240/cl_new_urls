import Design from "@/app/homepage1/components/Design";
import Header from "@/app/homepage1/components/Header";
import BlogCarousel from "@/components/BlogCarousel";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";

const BlogPage = async ({ data }) => {
  // Fetch blogs from the backend
  const blogs = await fetch(`${process.env.BACKEND_URL}/blogs/`, {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": `${process.env.LOCALE_LANGUAGE}`,
    },
  }).then((res) => res.json());

  return (
    <>
      {/* Top header (secondary variant) */}
      <Header secondary={true} bg={true}/>

      {/* Outer container */}
      <div className="p-4 md:mx-12">
        
        {/* Image + Decorative Line Container */}
        <div className="relative flex justify-center w-full p-4">
          {/* The horizontal line behind the image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[300%] h-12 bg-primary md:-mx-12" />
            {/*
              - w-[300%]: The line is significantly wider than the container,
                so its edges are more visible on the sides.
              - h-16: The line's thickness (4rem). Adjust as you like.
              - bg-primary: Tailwind color class (replace with your own color if needed).
            */}
          </div>
          
          {/* Featured image in front of the line */}
          <Image
            src={data.data.featured_image}
            alt="hero"
            height={1000}
            width={1000}
            className="relative z-10 w-full h-auto rounded-3xl"
            priority
          />
        </div>

        {/* Blog Content */}
        <div className="px-4 py-8 mx-auto max-w-7xl">
          <div className="flex justify-center">
            <h1 className="text-lg text-primary md:text-2xl font-bold w-full text-center">
              {data.data.title}
            </h1> 
            </div>
          </div>

          {/* Divider */}
          <div className="mb-8 h-[1px] w-full text-secondary bg-secondary" />

          {/* Blog HTML content */}
          <div
            className="mx-4 md:mx-10 lg:mx-20"
            dangerouslySetInnerHTML={{ __html: data.data.content }}
          />
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
      
    </>
  );
};

export default BlogPage;
