/** @type {import('next').NextConfig} */
const nextConfig = {
  output:"standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'backendbatd.clinstitute.co.uk',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'clinstitute.co.uk',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'batdacademy.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
    ],
  },
  rewrites: async () => [
    // Rewrite for paths with a slug (e.g., internet-of-things-training-program12)
    {
      source: '/:city/:id/:slug/:course', // Match URLs like /manchester/safety-mangement/internet-of-things-training-program12
      destination: '/cities/:city/:id/:slug/:course', // Rewrite to /cities/manchester/safety-mangement/internet-of-things-training-program12
    },
    // Rewrite for paths without a slug (e.g., /manchester/safety-mangement/)
    
  ],
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
