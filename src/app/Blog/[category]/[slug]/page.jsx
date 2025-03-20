import Image from "next/image";
import ArticleCard from "../../ArticleCard";
import Header from "@/app/homepage1/components/Header";

export async function generateMetadata({ params }) {
  const product = await fetch(
    `${process.env.BACKEND_URL}/blogs/${params.slug}`,
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
      locale:`${process.env.LOCALE_LANGUAGE}`,
      site_name: "London Crown Institute of Training",
      description: "London Crown Institute of Training",
      url: `https://clinstitute.co.uk/blogs/${params.slug}`,
      images: [product?.data[0]?.image || 'https://clinstitute.co.uk/Logocrown.webp'],
    },
    twitter: {
      site_name: "London Crown Institute of Training",
      description: "London Crown Institute of Training",
      url: `https://clinstitute.co.uk/blogs/${params.slug}`,
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

{/** export async function generateStaticParams() {
  const posts = await fetch(`${process.env.BACKEND_URL}/blogs/`, {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": `${process.env.LOCALE_LANGUAGE}`,

    },
  }).then((res) => res.json());
  return posts.data.map((post) => ({
    id: post.id,
  }));
}*/}

const BlogPost = async ({ params }) => {
  const data = await fetch(`${process.env.BACKEND_URL}/blogs/${params.slug}`, {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": `${process.env.LOCALE_LANGUAGE}`,

    },
  }).then((res) => res.json());

  const blogs = await fetch(`${process.env.BACKEND_URL}/blogs/`, {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": `${process.env.LOCALE_LANGUAGE}`,

    },
  }).then((res) => res.json());

  return (
    <>
      <Header/>
      <div className="p-4 md:mx-12 lg:mx-24 xl:mx-48">
        <div className="flex justify-center">
         
        </div>
        <div className="px-4 py-8 mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row">
            <h1 className="text-2xl md:text-4xl font-bold md:w-[500px]">
              {data.data.title}
            </h1>
            <div className="flex items-center mt-4 md:mt-0 md:ml-4">
              <div className="relative w-12 h-12">
                <Image
                  src={data.data.featured_image}
                  alt={data.data.author}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  sizes="90vw"
                />
              </div>
              <span className="ml-2 text-sm text-gray-600 dark:text-white/70">
                {data.data.author}
              </span>
              <div>- {data.data.published_date}</div>
            </div>
          </div>
          <hr className="my-20" />
          <div
            className="mx-4 md:mx-10 lg:mx-20"
            dangerouslySetInnerHTML={{ __html: data.data.content }}
          ></div>
        </div>
        <div className="flex justify-between">
          <h1 className="mt-10 mb-10 text-3xl font-bold tracking-wider">
            Latest Blog
          </h1>
        </div>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          {blogs.data.map((article, index) => (
         <ArticleCard
           key={index}
           title={article.title}
           category={article.category}
           date={article.date}
           description={article.description}
           imageSrc={article.imageSrc}
           button_data={article.tags}
           slug={article.slug} // Pass the slug to ArticleCard
         />
       ))} 
        </div>
      </div>
    </>
  );
};

export default BlogPost;
