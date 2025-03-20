// Page.tsx (Server Component)
import PrivacyPolicy from "./Policy";

export const metadata = {
  title: "Privacy Policy - London Crown Institute of Training",
  description: "Read our Privacy Policy to understand how we handle your data for Training Courses.",
  openGraph: {
    title: "Privacy Policy - London Crown Institute of Training",
    description: "Read our Privacy Policy to understand how we handle your data for Training Courses.",
    url: "https://clinstitute.co.uk/privacy-policy",
    type: "website",
    images: [
      {
        url: "https://clinstitute.co.uk/Logocrown.webp", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Privacy Policy - Training Courses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - London Crown Institute of Training",
    description: "Read our Privacy Policy to understand how we handle your data for Training Courses.",
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
      <PrivacyPolicy />
    </div>
  );
}
