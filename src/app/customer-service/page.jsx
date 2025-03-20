import React from 'react'
import Customer from './Customer'

export async function generateMetadata(){
    return {
      title: "Customer Services - London Crown Institute of Training",
      description:
        "Get professional customer service support for all your inquiries. We are here to assist you with your needs and provide the best experience.",
      openGraph: {
        title: "Customer Services - London Crown Institute of Training",
        description:
          "Need help? Our customer service team is here to provide guidance, resolve issues, and enhance your experience.",
        url: "https://clinstitute.co.uk/customer-service",
        type: "website",
        images: [
          {
            url: "https://clinstitute.co.uk/Logocrown.webp",
            width: 800,
            height: 600,
            alt: "Customer Service Support",
          },
        ],
      },
    };
  }


const Page = () => {
  return (
    <div>
        <Customer/>
    </div>
  )
}

export default Page