// app/blogs/[category]/category/page.js
import Design from "@/app/homepage1/components/Design";
import { Blog_Category } from "@/components/Blog_Category";
import BlogCarousel from "@/components/BlogCarousel";
import Wrapper from "@/components/Wrapper";
import { notFound } from "next/navigation";

export const revalidate = 60; // Revalidate data every 60 seconds

export const dynamicParams = true;

// Fetch Metadata Dynamically
export async function generateMetadata({ params }) {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/blogs/${params.category}/category`,
      {
        next: { revalidate: 60 },
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": "en",
        },
      }
    );

    if (!response.ok) {
      return {
        title: "Category Not Found - London Crown Institute of Training",
        description: "The requested blog category could not be found.",
      };
    }

    const product = await response.json();

    const title = `{product?.data?.meta_title} - London Crown Institute of Training` || `${formatCategoryName(params.category)} - London Crown Institute of Training`;
    const description = product?.data?.meta_description || "Explore our blog articles and insights";
    const keywords = product?.data?.meta_keywords || "training, education, blog, articles";

    return {
      title,
      description,
      keywords,
      openGraph: {
        type: "website",
        title,
        description,
        siteName: "London Crown Institute of Training",
        url: `https://clinstitute.co.uk/Blog/${params.category}`,
        images: [
          {
            url: product?.data?.featured_image || 'https://clinstitute.co.uk/Logocrown.webp',
            width: 1200,
            height: 630,
            alt: `${formatCategoryName(params.category)} - London Crown Institute of Training`,
          }
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        site: "@LondonCrownInst",
        images: [product?.data?.featured_image || 'https://clinstitute.co.uk/Logocrown.webp'],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blog - London Crown Institute of Training",
      description: "Explore our blog articles and insights",
    };
  }
}

// Helper function to format category name
function formatCategoryName(category) {
  return category
    .replace(/[-_]/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

// Fetch blog category data
async function fetchCategoryArticles(category) {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/blogs/${category}/category?per_page=20&page=1`,
      {
        next: { revalidate: 60 },
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": "en",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch articles for category: ${category}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching category articles:", error);
    return { data: [] };
  }
}

// Fetch all blogs for related articles
async function fetchAllBlogs() {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/blogs`, {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": "en",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching all blogs:", error);
    return { data: [] };
  }
}

export async function generateStaticParams() {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/blogs/categories`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return [];
    }

    const categories = await response.json();
    
    // Check if categories.data is an array and generate paths
    if (Array.isArray(categories?.data)) {
      return categories.data.map((category) => ({
        category: category.slug,
      }));
    }

    return [];
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

// Main Page Component with SSR
export default async function Page({ params }) {
  const { category } = params;

  try {
    const [articles, blogs] = await Promise.all([
      fetchCategoryArticles(category),
      fetchAllBlogs()
    ]);

    // If no articles found for this category
    if (!articles?.data || articles.data.length === 0) {
      return notFound();
    }

    return (
      <>
        <Design iamge={"/blog3.png"} search center input={false} image_height={false}>
          <h1 className="max-w-3xl mt-5 text-4xl items-center font-semibold text-white md:text-[55px] md:leading-[60px]">
            Explore <span className="text-secondary">{formatCategoryName(category)}</span>
            <br />
          </h1>
        </Design>
        
        <div className="px-4 py-8 mx-auto max-w-7xl">    
          <div className="flex justify-center">
            <Blog_Category initialArticles={articles} params={params} />
          </div>
        </div>

        {/* Related Articles Section */}
        {blogs?.data && blogs.data.length > 0 && (
          <>
            <div className="flex justify-center">
              <h2 className="mt-10 mb-10 text-primary text-center flex justify-center text-3xl font-bold">
                Related Articles You May Find Interesting
              </h2>
            </div>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Wrapper>
                <BlogCarousel data={blogs} />
              </Wrapper>
            </div>
          </>
        )}
      </>
    );
  } catch (error) {
    console.error("Error rendering page:", error);
    return notFound();
  }
}