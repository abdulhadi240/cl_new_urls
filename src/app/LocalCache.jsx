import { LRUCache } from "lru-cache";

// Initialize LRU Cache
const cache = new LRUCache({ max: 100, ttl: 1000 * 60 * 60 }); // Cache for 1 hour

// Function to fetch program data and cache it
export async function fetchProgramData() {
  const cacheKey = "programs";
  let programs = cache.get(cacheKey);

  if (!programs) {
    const response = await fetch("https://backendbatd.clinstitute.co.uk/api/programs", {
      headers: { 
        "Content-Type": "application/json",
        "Accept-Language": "en",
      },
    });
    const data = await response.json();
    programs = data.data;

    cache.set(cacheKey, programs); // Store in cache
  }

  return programs;
}