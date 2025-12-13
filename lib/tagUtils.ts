import { fetchTagsByType } from './api';

let tagSlugCache: Set<string> | null = null;
let tagSlugCacheTime: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

/**
 * Gets all tag slugs from the API and caches them
 */
async function getAllTagSlugs(): Promise<Set<string>> {
  const now = Date.now();
  
  // Return cached data if still valid
  if (tagSlugCache && (now - tagSlugCacheTime) < CACHE_DURATION) {
    return tagSlugCache;
  }

  try {
    // Fetch all tags (no type filter)
    const response = await fetchTagsByType();
    const slugs = new Set(response.data.map(tag => tag.slug));
    
    tagSlugCache = slugs;
    tagSlugCacheTime = now;
    
    return slugs;
  } catch (error) {
    console.error('Error fetching tag slugs:', error);
    // Return empty set on error, or cached data if available
    return tagSlugCache || new Set();
  }
}

/**
 * Checks if a slug is a tag slug
 */
export async function isTagSlug(slug: string): Promise<boolean> {
  const tagSlugs = await getAllTagSlugs();
  return tagSlugs.has(slug);
}

/**
 * Gets tag by slug
 */
export async function getTagBySlug(slug: string) {
  try {
    const response = await fetchTagsByType();
    return response.data.find(tag => tag.slug === slug);
  } catch (error) {
    console.error('Error fetching tag by slug:', error);
    return null;
  }
}

