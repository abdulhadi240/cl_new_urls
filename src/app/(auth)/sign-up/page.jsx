import Design from "@/app/homepage1/components/Design";
import AuthFormSignup from "@/components/AuthFormSignup";
import Head from "next/head";
import Image from "next/image";


export const metadata = {
  title: "Sign Up - London Crown Institute of Training",
  description:
    "Create your account at London Crown Institute of Training. Sign Up to manage your courses, track progress, and stay updated with our latest training programs.",
  openGraph: {
    title: "Sign Up - London Crown Institute of Training",
    description:
        "Create your account at London Crown Institute of Training. Sign Up to manage your courses, track progress, and stay updated with our latest training programs.",
      url: "https://clinstitute.co.uk/sign-up",
    type: "website",
    images: [
      {
        url: "https://clinstitute.co.uk/Logocrown.webp", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Sign Up - London Crown Institute of Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign Up - London Crown Institute of Training",
    description:
    "Create your account at London Crown Institute of Training. Sign Up to manage your courses, track progress, and stay updated with our latest training programs.",
    images: ["https://clinstitute.co.uk/Logocrown.webp"], // Replace with actual image URL
  },
  robots: {
    index: true, // Allow indexing
    follow: true, // Allow following links
  },

};



const Page = () => {
  return (
    <>
      <Design secondary={true} bg={true}></Design>
      <section className="flex justify-center md:mt-10 size-full rounded-3xl max-sm:px-6">
        <Image
          src="/sign.webp"
          alt="signin"
          className="hidden h-[500px] w-[500px] m-20 rounded-3xl md:block"
          height={300} // These values are optional but can help with preloading
          width={300}
        />

        <div className="flex flex-col items-center justify-center gap-3 ">
          <div className="flex justify-center mt-2">
            <Image src="/Logocrown.webp" width={200} height={200} alt="logo" />
          </div>
          <div className="flex justify-center mb-10">
            <AuthFormSignup />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
