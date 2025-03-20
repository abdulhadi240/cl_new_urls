import React from 'react';
import Account from './Account';

// Define metadata for the account profile page
export async function generateMetadata() {
  return {
    title: "Account Profile - London Crown Institute of Training",
    description: "Manage your account with London Crown Institute of Training. Access your profile, update personal details, and track your learning progress.",
    keywords: "account profile, user dashboard, London Crown Institute, training account, personal settings",
    openGraph: {
      title: "Account Profile - London Crown Institute of Training",
      description: "Manage your account and track your progress with London Crown Institute of Training.",
      url: "https://clinstitute.co.uk/account", // Replace with your actual domain
      type: "website",
      images: [
        {
          url: "https://clinstitute.co.uk/Logocrown.webp", // Replace with an actual image URL
          width: 1200,
          height: 630,
          alt: "Account Profile - London Crown Institute",
        },
      ],
    },
  };
}

const Page = () => {
  return (
    <div>
      <Account />
    </div>
  );
};

export default Page;