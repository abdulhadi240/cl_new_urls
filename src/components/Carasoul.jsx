import Image from "next/image";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
const BlogPostCarousel = ({ data }) => {
  return (
    <section className="py-8">
      <div className="relative overflow-hidden p-4">
        <div className="">
          <div className="flex gap-5 justify-center flex-wrap">
            {data?.data.map((post, index) => (
              <Link
                href={`/${post.slug}`}
                key={index}
                className="w-40 border-secondary group border-2 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="h-24 w-full">
                  <Image
                    src={post.icon}
                    width={200}
                    height={200}
                    alt={post.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="py-2 text-center">
                  <h3 className="font-bold text-sm text-primary">
                    {post.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Link
          href={"/cities"}
          className="flex pt-10 justify-end text-sm items-center text-primary font-bold >"
        >
          Show More Venues
          <IoMdArrowDropright size={24} />
        </Link>
      </div>
    </section>
  );
};

export default BlogPostCarousel;