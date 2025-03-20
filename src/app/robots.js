export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/register',
      },
      sitemap: 'https://clinstitute.co.uk/sitemap.xml',
    }
  }