import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HeaderSection from "@/components/HeaderSection";
import Link from "next/link";
import Design from "../homepage1/components/Design";


export const metadata = {
  title: "Board of Advisers - London Crown Institute of Training",
  description:
    "Meet our Board of Advisers, a team of experts in education policy, curriculum development, and educational technology.",
  openGraph: {
    title: "Board of Advisers - London Crown Institute of Training",
    description:
      "Discover our top educational advisors shaping the future of learning.",
    type: "website",
    url: "https://clinstitute.co.uk/board-of-advisors",
    images: [
      {
        url: "https://clinstitute.co.uk/Logocrown.webp",
        width: 1200,
        height: 630,
        alt: "Board of Advisers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Board of Advisers",
    description:
      "Meet our educational experts leading innovations in curriculum and technology.",
    images: ["https://clinstitute.co.uk/Logocrown.webp"],
  },
  alternates: {
    languages: {
      "en-US": "https://clinstitute.co.uk/board-of-advisors",
    },
  },
  other: {
    "robots": "index, follow",
    "author": "London Crown Institute of Training",
  },
};


const advisers = [
  {
    name: {
      en: "Dr. Emily Brown",
      ar: "د. إميلي براون",
    },
    expertise: {
      en: "Education Policy",
      ar: "سياسة التعليم",
    },
    image: "/placeholder.svg?height=200&width=200",
    bio: {
      en: "Dr. Emily Brown is a renowned expert in education policy with over 15 years of experience in shaping educational reforms. She has advised numerous government bodies and international organizations on improving educational systems.",
      ar: "الدكتورة إميلي براون هي خبيرة مشهورة في سياسة التعليم ولديها أكثر من 15 عامًا من الخبرة في تشكيل الإصلاحات التعليمية. لقد قدمت المشورة للعديد من الهيئات الحكومية والمنظمات الدولية لتحسين الأنظمة التعليمية.",
    },
  },
  {
    name: {
      en: "Prof. David Lee",
      ar: "الأستاذ ديفيد لي",
    },
    expertise: {
      en: "Curriculum Development",
      ar: "تطوير المناهج",
    },
    image: "/placeholder.svg?height=200&width=200",
    bio: {
      en: "Professor David Lee is a curriculum specialist with a focus on integrating 21st-century skills into traditional academic subjects. His innovative approaches have been adopted by schools worldwide.",
      ar: "الأستاذ ديفيد لي هو متخصص في تطوير المناهج يركز على دمج مهارات القرن الحادي والعشرين في المواد الأكاديمية التقليدية. تم تبني أساليبه المبتكرة من قبل المدارس في جميع أنحاء العالم.",
    },
  },
  {
    name: {
      en: "Dr. Sarah Chen",
      ar: "د. سارة تشين",
    },
    expertise: {
      en: "Educational Technology",
      ar: "تكنولوجيا التعليم",
    },
    image: "/placeholder.svg?height=200&width=200",
    bio: {
      en: "Dr. Sarah Chen is at the forefront of educational technology research. Her work focuses on leveraging AI and machine learning to create personalized learning experiences for students of all ages.",
      ar: "الدكتورة سارة تشين في طليعة أبحاث تكنولوجيا التعليم. يركز عملها على الاستفادة من الذكاء الاصطناعي والتعلم الآلي لإنشاء تجارب تعليمية مخصصة للطلاب من جميع الأعمار.",
    },
  },
  {
    name: {
      en: "Dr. Michael Rodriguez",
      ar: "د. مايكل رودريغيز",
    },
    expertise: {
      en: "Special Education",
      ar: "التعليم الخاص",
    },
    image: "/placeholder.svg?height=200&width=200",
    bio: {
      en: "With a background in psychology and education, Dr. Michael Rodriguez specializes in developing inclusive educational strategies for students with diverse learning needs.",
      ar: "بخلفية في علم النفس والتعليم، يتخصص الدكتور مايكل رودريغيز في تطوير استراتيجيات تعليمية شاملة للطلاب ذوي الاحتياجات التعليمية المتنوعة.",
    },
  },
  {
    name: {
      en: "Prof. Olivia Taylor",
      ar: "الأستاذة أوليفيا تايلور",
    },
    expertise: {
      en: "STEM Education",
      ar: "تعليم STEM",
    },
    image: "/placeholder.svg?height=200&width=200",
    bio: {
      en: "Professor Olivia Taylor is passionate about promoting STEM education, particularly among underrepresented groups. She has developed several successful outreach programs and hands-on learning initiatives.",
      ar: "الأستاذة أوليفيا تايلور شغوفة بتعزيز تعليم STEM، لا سيما بين الفئات الممثلة تمثيلاً ناقصًا. لقد طورت العديد من البرامج التوعوية الناجحة ومبادرات التعلم العملي.",
    },
  },
  {
    name: {
      en: "Dr. James Wilson",
      ar: "د. جيمس ويلسون",
    },
    expertise: {
      en: "Assessment and Evaluation",
      ar: "التقييم والتقويم",
    },
    image: "/placeholder.svg?height=200&width=200",
    bio: {
      en: "Dr. James Wilson is an expert in educational assessment and evaluation. His research focuses on developing fair and effective methods for measuring student progress and educational outcomes.",
      ar: "الدكتور جيمس ويلسون هو خبير في تقييم التعليم والتقويم. تركز أبحاثه على تطوير طرق عادلة وفعالة لقياس تقدم الطلاب ونتائج التعليم.",
    },
  },
];

export default function BoardOfAdvisers({ params }) {
  const isArabic = params.locale === "ar";

  return (
    <>
        <Design search  iamge={'/consulting.webp'}>
    <div className="w-screen">
    <h1 className=" text-center mt-5 text-4xl items-center font-semibold text-white md:text-[55px] md:leading-[60px]">
          Check Our <span className="text-secondary font-bold">Advisors</span>{" "}
        </h1>
        </div>
    </Design>
    {/** 
      <div
        className={`container mx-auto px-2 sm:px-4 py-6 sm:py-8 ${
          isArabic ? "rtl text-right" : "ltr text-left"
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {advisers.map((adviser, index) => (
            <Card key={index} className="flex flex-col h-full">
              <Image
                src={"/member2.webp"}
                alt={adviser.name[isArabic ? "ar" : "en"]}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>{adviser.name[isArabic ? "ar" : "en"]}</CardTitle>
                <CardDescription>
                  {adviser.expertise[isArabic ? "ar" : "en"]}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm">{adviser.bio[isArabic ? "ar" : "en"]}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">
            {isArabic ? "تأثير مجلس المستشارين لدينا" : "Our Advisory Board's Impact"}
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="text-xl">
              <AccordionTrigger className="text-xl">
                {isArabic ? "تقديم التوجيه الاستراتيجي" : "Providing Strategic Direction"}
              </AccordionTrigger>
              <AccordionContent>
                {isArabic
                  ? "يقدم مجلس المستشارين لدينا توجيهات استراتيجية لا تقدر بثمن، مما يساعدنا على التنقل في تعقيدات المشهد التعليمي واتخاذ قرارات مستنيرة تفيد مؤسستنا وطلابنا."
                  : "Our advisory board offers invaluable strategic direction, helping us to navigate the complexities of the educational landscape and make informed decisions that benefit our institution and students."}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="text-xl">
              <AccordionTrigger className="text-xl">
                {isArabic ? "تعزيز الروابط مع الصناعة" : "Enhancing Industry Connections"}
              </AccordionTrigger>
              <AccordionContent>
                {isArabic
                  ? "من خلال شبكاتهم الواسعة، يسهل مستشارونا الروابط مع قادة الصناعة، مما يوفر للطلاب فرصًا للتدريب الداخلي والإرشاد والخبرة العملية."
                  : "By leveraging their extensive networks, our advisors facilitate connections with industry leaders, providing students with opportunities for internships, mentorships, and real-world experience."}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="text-xl">
              <AccordionTrigger className="text-xl">
                {isArabic ? "تعزيز الابتكار" : "Promoting Innovation"}
              </AccordionTrigger>
              <AccordionContent>
                {isArabic
                  ? "يشجع أعضاء مجلس إدارتنا ثقافة الابتكار، ويدعمون المبادرات التي تدفع حدود التعليم التقليدي وتعزز مهارات حل المشكلات الإبداعية بين الطلاب."
                  : "Our board members encourage a culture of innovation, supporting initiatives that push the boundaries of traditional education and foster creative problem-solving skills among students."}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="text-xl">
              <AccordionTrigger className="text-xl">
                {isArabic ? "ضمان الجودة" : "Ensuring Quality Assurance"}
              </AccordionTrigger>
              <AccordionContent>
                {isArabic
                  ? "يلعب مجلس المستشارين دورًا رئيسيًا في ضمان الجودة، حيث يقوم بمراجعة برامجنا بانتظام وتقديم الملاحظات لضمان الحفاظ على معايير عالية من التميز الأكاديمي."
                  : "The advisory board plays a key role in quality assurance, regularly reviewing our programs and providing feedback to ensure we maintain high standards of academic excellence."}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="text-xl">
              <AccordionTrigger className="text-xl">
                {isArabic ? "دعم تطوير أعضاء هيئة التدريس" : "Supporting Faculty Development"}
              </AccordionTrigger>
              <AccordionContent>
                {isArabic
                  ? "يدعم مستشارونا تطوير أعضاء هيئة التدريس من خلال تقديم التوجيه بشأن النمو المهني، وتشجيع التعلم المستمر، ومشاركة أفضل الممارسات في التدريس والبحث."
                  : "Our advisors support faculty development by offering guidance on professional growth, encouraging continuous learning, and sharing best practices in teaching and research."}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
      */}
    </>
  );
}