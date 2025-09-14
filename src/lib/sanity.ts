import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Get environment variables with fallbacks
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || '995sglk8';
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';

// Only create client if we have a valid project ID
export const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: false, // Set to true for production
    })
  : null;

// Image URL builder for Sanity images (only if client exists)
const builder = client ? imageUrlBuilder(client) : null;

export const urlFor = (source: SanityImageSource) => {
  if (!builder) {
    console.warn(
      'Sanity client not configured. Please set VITE_SANITY_PROJECT_ID in your .env file'
    );
    return null;
  }
  return builder.image(source);
};
