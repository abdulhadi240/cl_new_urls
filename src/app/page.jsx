import dynamic from "next/dynamic";
import SectionTitle from "../components/SectionTitle";
import MobileFilter from "../components/MobileFilter";
import fetchData from "@/actions/server";
import Design from "./homepage1/components/Design";
import Latest_course from "@/components/Latest_course";
import ScrollingTestimonials from "@/components/Testimonials";
import Testimonials from "@/components/Testimonials";
import CourseCarousel from "@/components/CourseCarasoul";
import Wrapper from "@/components/Wrapper";

// Dynamically imported components
const SpecializationSection = dynamic(() =>
  import("../components/SpecializationSection")
);
const Carasoul = dynamic(() => import("../components/Carasoul"));
const RequestCourse = dynamic(() => import("../components/RequestCourse"));

// Metadata for the page

const Page = async () => {
  const cities = await fetchData(
    "https://backendbatd.clinstitute.co.uk/api/cities?per_page=6&page=1"
  );
  const cities_all = await fetchData(
    "https://backendbatd.clinstitute.co.uk/api/cities"
  );
  const specialization = await fetchData(
    "https://backendbatd.clinstitute.co.uk/api/specializations_courses"
  );
  const specialization_list = await fetchData(
    "https://backendbatd.clinstitute.co.uk/api/specializations"
  );
  const courses = await fetchData(
    "https://backendbatd.clinstitute.co.uk/api/courses"
  );

  const categories = await fetchData(
    "https://backendbatd.clinstitute.co.uk/api/specializations_categories_courses"
  );


  return (
    <section className="overflow-hidden">
      {/* Hero Section */}
      <Design iamge={"/Images.png"} search center={false} image_height>
        <h1 className="max-w-3xl md:mt-5 mt-10 text-4xl mx-10 font-semibold text-white md:text-[55px] md:leading-[60px]">
          Welcome to <br />
          <span className="text-secondary font-bold">TrainEdge</span> <br />
          Expert Employee <br /> Training Solutions
        </h1>
        <p className="max-w-xl mt-4 text-sm mx-10 text-white md:text-xl">
          Advancing employee skills and driving business growth through tailored
          training programs for companies worldwide.
        </p>
        <div className="mx-4 mb-4 md:mx-0 md:mb-0">
          <MobileFilter
            cities={cities_all?.data}
            specialization={specialization_list.data}
          />
        </div>
      </Design>

      {/* Specialization Section */}
      <SectionTitle
        title="Take Your First Step Towards"
        highlight=" Achieving 
      Professional Goals"
      />
      <div className="md:mx-20">
        <SpecializationSection data={categories.data} />
      </div>
      <div>
        <SectionTitle title="Latest" highlight="Courses" />
        <Wrapper>
        <CourseCarousel courses={courses.data} />
        </Wrapper>
      </div>

      {/* Courses by Cities Carousel */}
      <div className=" sm:mt-16">
        <SectionTitle title="Courses" highlight="Offered By Location" />
        <Carasoul data={cities} />
      </div>

      {/* Request Course Section */}
      <div className="">
        <RequestCourse
          cities={cities_all.data}
          categories={specialization.data}
        />
      </div>

      <div className=" sm:mt-16">
        <SectionTitle title="What Customer are " highlight="Saying?" />
        <Testimonials />
      </div>
    </section>
  );
};

export default Page;
