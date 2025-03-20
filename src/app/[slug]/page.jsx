// app/[slug]/page.js
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import Programs from "@/components/Programs";
import Specialization from "@/components/Specialization";
import City from "@/components/City";

// Metadata generation
export async function generateMetadata({ params }) {
  const { slug } = params;
  
  // Check which type of page this is
  const [cityData, specializationData, programData] = await Promise.all([
    fetchCity(slug).catch(() => null),
    fetchSpecialization(slug).catch(() => null),
    fetchProgram(slug).catch(() => null)
  ]);
  
  const data = cityData || specializationData || programData;
  
  if (!data) {
    return {
      title: 'Page Not Found - London Crown Institute',
      description: 'The requested page could not be found.'
    };
  }
  
  return {
    title: `${data.data?.meta_title || data.name} - London Crown Institute`,
    description: data.data?.meta_description || `Explore the top courses in ${data.name} at London Crown Institute. Discover high-quality programs designed to enhance your skills and career prospects.`,
    keywords: data.data?.meta_keywords || 'training, courses, programs, specialization',
    openGraph: {
      title: data.data?.meta_title || data.name,
      description: data.data?.meta_description,
      url: `https://clinstitute.co.uk/${slug}`,
      images: [{
        url: data.data?.image || '/Logocrown.webp',
        width: 1200,
        height: 630
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: data.data?.meta_title || data.name,
      description: data.data?.meta_description,
      images: [data.data?.image || '/Logocrown.webp']
    },
    alternates: {
      canonical: `https://clinstitute.co.uk/${slug}`
    }
  };
}

// Fetch functions with explicit 404 handling
async function fetchCity(slug) {
  const res = await fetch(`${process.env.BACKEND_URL}/cities/${slug}`, {
    next: { revalidate: 3600 },
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": `${process.env.LOCALE_LANGUAGE || 'en'}`
    }
  });
  
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Failed to fetch city: ${res.status}`);
  return res.json();
}

async function fetchSpecialization(slug) {
  const res = await fetch(`${process.env.BACKEND_URL}/specializations/${slug}`, {
    next: { revalidate: 3600 },
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": `${process.env.LOCALE_LANGUAGE || 'en'}`
    }
  });
  
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Failed to fetch specialization: ${res.status}`);
  return res.json();
}

async function fetchProgram(slug) {
  const res = await fetch(`${process.env.BACKEND_URL}/programs/${slug}`, {
    next: { revalidate: 3600 },
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": `${process.env.LOCALE_LANGUAGE || 'en'}`
    }
  });
  
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Failed to fetch program: ${res.status}`);
  return res.json();
}

// Fetch additional required data
async function fetchCommonData() {
  const [cityData, specializationData, specializationCategory, categoryData] = await Promise.all([
    fetch(`${process.env.BACKEND_URL}/cities`, {
      next: { revalidate: 3600 },
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": `${process.env.LOCALE_LANGUAGE || 'en'}`
      }
    }).then(res => res.ok ? res.json() : { data: [] }),
    
    fetch(`${process.env.BACKEND_URL}/specializations`, {
      next: { revalidate: 3600 },
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": `${process.env.LOCALE_LANGUAGE || 'en'}`
      }
    }).then(res => res.ok ? res.json() : { data: [] }),
    
    fetch(`${process.env.BACKEND_URL}/specializations_categories`, {
      next: { revalidate: 3600 },
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": `${process.env.LOCALE_LANGUAGE || 'en'}`
      }
    }).then(res => res.ok ? res.json() : { data: [] }),
    
    fetch(`${process.env.BACKEND_URL}/categories`, {
      next: { revalidate: 3600 },
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": `${process.env.LOCALE_LANGUAGE || 'en'}`
      }
    }).then(res => res.ok ? res.json() : { data: [] })
  ]);

  return {
    cityData,
    specializationData,
    specializationCategory,
    categoryData
  };
}

// Main page component
export default async function Page({ params }) {
  const { slug } = params;
  
  // Try to get data from each API endpoint to determine the page type
  let cityData, specializationData, programData, cityCourses, programCourses;
  
  // Check city first
  try {
    cityData = await fetchCity(slug);
  } catch (error) {
    console.error("Error fetching city:", error);
  }
  
  // If not a city, check specialization
  if (!cityData) {
    try {
      specializationData = await fetchSpecialization(slug);
    } catch (error) {
      console.error("Error fetching specialization:", error);
    }
  }
  
  // If not a specialization, check program
  if (!cityData && !specializationData) {
    try {
      programData = await fetchProgram(slug);
    } catch (error) {
      console.error("Error fetching program:", error);
    }
  }
  
  // If none of the API calls returned data, trigger not found
  if (!cityData && !specializationData && !programData) {
    notFound();
  }
  
  // Fetch additional data based on the type
  if (cityData) {
    cityCourses = await fetch(`${process.env.BACKEND_URL}/courses/${slug}/cities`, {
      next: { revalidate: 3600 },
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": `${process.env.LOCALE_LANGUAGE || 'en'}`
      }
    }).then(res => res.ok ? res.json() : null);
  }
  
  if (programData) {
    programCourses = await fetch(`${process.env.BACKEND_URL}/programs/${slug}`, {
      next: { revalidate: 3600 },
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": `${process.env.LOCALE_LANGUAGE || 'en'}`
      }
    }).then(res => res.ok ? res.json() : null);
  }
  
  // Get common data needed for all page types
  const commonData = await fetchCommonData();
  
  // Return the appropriate component based on what data we found
  if (cityData) {
    return (
      <Suspense fallback={''}>
        <City
          details={cityData}
          check_city_courses={true}
          cities={true}
          params={slug}
          data={cityData.data || []}
          city={commonData.cityData}
          specialization={commonData.specializationData}
          SpecializationCategory={commonData.specializationCategory}
          category={commonData.categoryData}
        />
      </Suspense>
    );
  } else if (specializationData) {
    return (
      <Suspense fallback={''}>
        <Specialization
          params={slug}
          data={specializationData.data}
          city={commonData.cityData}
          specialization={commonData.specializationData}
          SpecializationCategory={commonData.specializationCategory}
          category={commonData.categoryData}
        />
      </Suspense>
    );
  } else {
    return (
      <Suspense fallback={''}>
        <Programs
          params={slug}
          data={programCourses?.data || programData.data}
          city={commonData.cityData}
          specialization={commonData.specializationData}
          SpecializationCategory={commonData.specializationCategory}
          category={commonData.categoryData}
        />
      </Suspense>
    );
  }
}

// Generate static paths for static site generation (optional)
{/** export async function generateStaticParams() {
  try {
    const [cityData, specializationData, programData] = await Promise.all([
      fetch(`${process.env.BACKEND_URL}/cities`).then(res => res.ok ? res.json() : { data: [] }),
      fetch(`${process.env.BACKEND_URL}/specializations`).then(res => res.ok ? res.json() : { data: [] }),
      fetch(`${process.env.BACKEND_URL}/programs`).then(res => res.ok ? res.json() : { data: [] })
    ]);

    const cityPaths = (cityData?.data || []).map(city => ({ slug: city.slug }));
    const specializationPaths = (specializationData?.data || []).map(spec => ({ slug: spec.slug }));
    const programPaths = (programData?.data || []).map(program => ({ slug: program.slug }));

    return [...cityPaths, ...specializationPaths, ...programPaths];
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}*/}