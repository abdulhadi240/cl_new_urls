import Image from "next/image";
import Content_extend from "../../course_detail/components/Content_extend";
import Courses_Card from "../../account/components/Courses_Card";
import { GetCategory, GetSpecialization } from "@/actions/server";
import HeaderSection from "@/components/HeaderSection";



export const revalidate = 60

export const dynamicParams = true 



export async function generateMetadata({ params }) {
  const product = await fetch(`${process.env.BACKEND_URL}/courses/${params.program}/programs`,{
    headers : {
      'Content-Type': 'application/json',
      "Accept-Language": `${process.env.LOCALE_LANGUAGE}`,

    },
  }).then(
    (res) => res.json()
  )

  const title = product?.data?.meta_title || 'British Academy for Training & Development'
  const description = product?.data?.meta_description || 'British Academy for Training & Development'
  const keywords = product?.data?.meta_keywords || 'British Academy for Training & Development'

  
  return {
    title: title,
    description: description,
    keywords: keywords,
    openGraph: {
        type: "website",
        locale: "en_US",
        site_name: "British Academy for Training & Development",
        description: "British Academy for Training & Development",
        url: `https://client-academy.vercel.app/search_course/${params.program}`,
        images: [product?.data?.image],
      },
      twitter: {
        site_name: "British Academy for Training & Development",
        description: "British Academy for Training & Development",
        url: `https://client-academy.vercel.app/search_course/${params.program}`,
        images: [
          {
            url: "/logobat.png",
            width: 800,
            height: 600,
            alt: "Og Image Alt",
          },
        ],
        card: "summary_large_image",
        creator: "British Acadmey"
      },
    }
  }



  export async function generateStaticParams() {
    const posts = await fetch(`${process.env.BACKEND_URL}/courses/`,{
      headers : {
        'Content-Type': 'application/json',
        "Accept-Language": `${process.env.LOCALE_LANGUAGE}`,

      },
    }
    ).then((res) =>
      res.json()
    )
    return posts.data.map((post) => ({
      id:(post.id),
    }))
  }
  



const Page = async ({params}) => {

  const data = await fetch(`${process.env.BACKEND_URL}/courses/${params.program}/programs`,{
    headers: {
      'Accept': 'application/json',
      "Accept-Language": `${process.env.LOCALE_LANGUAGE}`,

    }
  })
  const res = await data.json()


  const category = await GetSpecialization()
  
  
  
  return (
    <>
    <HeaderSection/>
      <div className="relative flex items-center justify-center min-h-screen bg-white">
        {/* Background Image */}
        <div className="">
          <Image
            src="/search_course.webp" // Replace with your image path
            alt="Background"
            layout="fill"
            priority
            objectFit="cover"
            className="opacity-70"
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute flex items-center justify-center w-full max-w-4xl p-6 rounded-lg ">
          <div className="flex flex-col justify-center gap-2 text-black bg-transparent">
            {/* Search Input */}
            <div className="flex justify-between p-1 bg-white rounded-md md:p-3 ">
              <input
                type="text"
                placeholder="Search in specific course"
                value={''}
              
                className="w-full px-4 py-2 text-sm border border-gray-300 border-none rounded-md md:text-base placeholder:text-sm md:flex-1 focus:outline-none focus:ring-0"
              />
              <button className="px-4 py-1 text-sm text-white transition-colors rounded-md md:text-base md:px-6 md:py-2 bg-primary hover:bg-primary/80">
                Search
              </button>
            </div>
            <div className="flex justify-center gap-2 ">
              {/* Dropdowns */}
              <div className="grid justify-center grid-cols-2 gap-2 md:space-y-0 md:flex md:space-x-2">
                <select className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md md:text-base md:px-4 md:w-auto focus:outline-none focus:ring-2 focus:ring-primary">
                  <option className="text-white bg-primary">Language</option>
                </select>
                <select className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md md:text-base md:px-4 md:w-auto focus:outline-none focus:ring-2 focus:ring-primary">
                  <option className="text-white bg-primary">Month</option>
                </select>
                <select className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md md:text-base md:px-4 md:w-auto focus:outline-none focus:ring-2 focus:ring-primary">
                  <option className="text-white bg-primary">Year</option>
                </select>
                <select className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md md:text-base md:px-4 md:w-auto focus:outline-none focus:ring-2 focus:ring-primary">
                  <option className="text-white bg-primary">Category</option>
                </select>
                <select className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md md:text-base md:px-4 md:w-auto focus:outline-none focus:ring-2 focus:ring-primary">
                  <option className="text-white bg-primary">
                    Specialization
                  </option>
                </select>
                <select className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md md:text-base md:px-4 md:w-auto focus:outline-none focus:ring-2 focus:ring-primary">
                  <option className="text-white bg-primary">Place</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
          </div>
        </div>
      </div>
      <Content_extend categories = {category} params = {params.program}>
        <div className="grid grid-cols-1 gap-4 mt-3 sm:grid-cols-2 md:grid-cols-3 ">
          {res?.data?.map((course) => {
            return (
              <Courses_Card data={course} params={params}/>
            )
          })}
          
        </div>
       
        <div className="flex flex-col gap-2 mt-10">
        <h1 className="flex items-center justify-center p-1 text-2xl font-bold text-center md:p-0">Mini Masters Programmes In Management</h1>
      <p className="mb-4 text-base text-center md:text-start">We offer different short and mini master courses across (Non-Academic) our branches in Europe. Course will help you improve your professional experience and give you more support to your CV. </p>
      </div>
      </Content_extend>
    </>
  );
};

export default Page;
