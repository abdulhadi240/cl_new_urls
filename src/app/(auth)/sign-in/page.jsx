import Design from "@/app/homepage1/components/Design";
import AuthForm from "@/components/AuthForm";
import Image from "next/image";


export const metadata = {
  title: "Login - London Crown Institute of Training",
  description:
    "Access your account at London Crown Institute of Training. Log in to manage your courses, track progress, and stay updated with our latest training programs.",
  openGraph: {
    title: "Login - London Crown Institute of Training",
    description:
      "Access your account at London Crown Institute of Training. Log in to manage your courses, track progress, and stay updated with our latest training programs.",
    url: "https://clinstitute.co.uk/sign-in",
    type: "website",
    images: [
      {
        url: "https://clinstitute.co.uk/Logocrown.webp", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Login - London Crown Institute of Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Login - London Crown Institute of Training",
    description:
      "Access your account at London Crown Institute of Training. Log in to manage your courses, track progress, and stay updated with our latest training programs.",
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
      <section className="flex justify-center mt-10 size-full rounded-3xl max-sm:px-6">
        <Image
          src="/sign.webp"
          alt="signin"
          className="hidden h-[400px] w-[400px] m-20 rounded-3xl md:block"
          layout="responsive" // Use intrinsic layout to manage dimensions through the CSS
          height={300} // These values are optional but can help with preloading
          width={300}
        />

        <div className="flex flex-col items-center justify-center gap-3 md:mx-20">
          <div className="flex justify-center mt-2">
            <Image src="/Logocrown.webp" width={200} height={200} alt="logo" />
          </div>
          <div className="flex justify-center mb-10 ">
            <AuthForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
