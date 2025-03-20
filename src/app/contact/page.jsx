// Page.tsx (Server Component)
import ContactPage from "./ContactUs";

export const metadata = {
  title: "Contact Us - London Crown Institute of Training",
  description: "Get in touch with us for inquiries about our Training Courses. We're here to help!",
  openGraph: {
    title: "Contact Us - London Crown Institute of Training",
    description: "Get in touch with us for inquiries about our Training Courses. We're here to help!",
    url: "https://clinstitute.co.uk/contact",
    type: "website",
    images: [
      {
        url: "https://clinstitute.co.uk/Logocrown.webp", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Contact Us - London Crown Institute of Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - London Crown Institute of Training",
    description: "Get in touch with us for inquiries about our Training Courses. We're here to help!",
    images: ["https://clinstitute.co.uk/Logocrown.webp"], // Replace with your actual image URL
  },
  robots: {
    index: true, // Allow indexing
    follow: true, // Allow following links
  },

};

export default function Page() {
  return (
    <div>
      <ContactPage />
    </div>
  );
}
