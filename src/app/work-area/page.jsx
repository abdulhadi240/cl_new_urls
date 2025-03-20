import Image from "next/image";
import Design from "../homepage1/components/Design";

const workAreas = [
  {
    name: "Modern Classrooms",
    image:
      "https://img.freepik.com/free-photo/conference-room-with-televisions-presentations_181624-26085.jpg?ga=GA1.1.1272105974.1733207627&semt=ais_hybrid",
  },
  {
    name: "Science Laboratories",
    image:
      "https://img.freepik.com/free-photo/lab-technicians-talking-video-call-with-professional-chemist-doctor-explaning-vaccine-reactions_482257-507.jpg?ga=GA1.1.1272105974.1733207627&semt=ais_hybrid",
  },
  {
    name: "Computer Labs",
    image:
      "https://img.freepik.com/free-photo/boy-thinking-looking-charging-board_259150-60316.jpg?ga=GA1.1.1272105974.1733207627&semt=ais_hybrid",
  },
  {
    name: "Library",
    image:
      "https://img.freepik.com/free-photo/clean-empty-library-hall_23-2149215414.jpg?ga=GA1.1.1272105974.1733207627&semt=ais_hybrid",
  },
  {
    name: "Sports Facilities",
    image:
      "https://img.freepik.com/free-photo/indoors-tennis-court_1385-1395.jpg?ga=GA1.1.1272105974.1733207627&semt=ais_hybrid",
  },
  {
    name: "Art Studios",
    image:
      "https://img.freepik.com/free-photo/empty-art-studio-with-nobody-it-is-ready-drawing-lesson-art-studio-modern-atelier-with-vase-chair-using-imagination-professional-sketch-tools-table-concept-creativity_482257-30103.jpg?ga=GA1.1.1272105974.1733207627&semt=ais_hybrid",
  },
];


export async function generateMetadata() {
  return {
    title: "Work Areas - London Crown Institute of Training",
    description:
      "Discover our modern work areas including classrooms, science labs, libraries, and more. Explore a state-of-the-art learning environment.",
    openGraph: {
      title: "Work Areas - London Crown Institute of Training",
      description:
        "A glimpse into our top-notch facilities, including modern classrooms, science labs, computer labs, and more.",
      url: "https://clinstitute.co.uk/work-area",
      type: "website",
      images: [
        {
          url: 'https://clinstitute.co.uk/Logocrown.webp', // First image from work areas
          width: 800,
          height: 600,
          alt: "Modern Classrooms",
        },
      ],
    },
  };
}


export default function WorkArea({ params }) {
  return (
    <>
      {" "}
      <Design secondary bg></Design>
      <div className="bg-[#0A1828] py-8">
        <h1 className="text-center text-3xl font-bold text-white">Work Area</h1>
      </div>
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workAreas.map((area, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={area.image}
                alt={area.name}
                width={300}
                height={300}
                className="w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <h2 className="absolute bottom-4 left-4 text-white text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {area.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
