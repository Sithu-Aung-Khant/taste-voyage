import { useState, useEffect } from 'react';
import { client } from '../lib/sanity';
import {
  SanityTown,
  SanityFood,
  SanityRegion,
  SanityBeach,
  SanityRestaurant,
  SanityAttraction,
} from '../types/sanity';

// GROQ queries
const TOWNS_QUERY = `*[_type == "town"] | order(name asc) {
  _id, _type, name, slug, description, image, rating, region, 
  coordinates, attractions, restaurants, signatureDishes
}`;

const FOODS_QUERY = `*[_type == "food"] | order(name asc) {
  _id, _type, name, slug, description, image, rating, origin, 
  tasteTags, ingredients, category, spiceLevel, isVegetarian, wikipediaUrl
}`;

const REGIONS_QUERY = `*[_type == "region"] | order(name asc) {
  _id, _type, name, slug, description, image, towns
}`;

const BEACHES_QUERY = `*[_type == "beach"] | order(name asc) {
  _id, _type, name, slug, region, description, image, rating, 
  restaurants, attractions
}`;

const RESTAURANTS_QUERY = `*[_type == "restaurant"] | order(name asc) {
  _id, _type, name, slug, description, image, rating, location, 
  cuisine, priceRange, specialties, town
}`;

const ATTRACTIONS_QUERY = `*[_type == "attraction"] | order(name asc) {
  _id, _type, name, slug, description, image, category, location, town
}`;

// Hook for fetching towns
export const useTowns = () => {
  const [towns, setTowns] = useState<SanityTown[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTowns = async () => {
      try {
        setLoading(true);
        if (!client) {
          setError(
            'Sanity client not configured. Please set VITE_SANITY_PROJECT_ID in your .env file'
          );
          return;
        }
        const data = await client.fetch<SanityTown[]>(TOWNS_QUERY);
        setTowns(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch towns');
      } finally {
        setLoading(false);
      }
    };

    fetchTowns();
  }, []);

  return { towns, loading, error };
};

// Hook for fetching a single town by slug
export const useTown = (slug: string) => {
  const [town, setTown] = useState<SanityTown | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchTown = async () => {
      try {
        setLoading(true);
        if (!client) {
          setError(
            'Sanity client not configured. Please set VITE_SANITY_PROJECT_ID in your .env file'
          );
          return;
        }
        const query = `*[_type == "town" && slug.current == $slug][0]`;
        const data = await client.fetch<SanityTown>(query, { slug });
        setTown(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch town');
      } finally {
        setLoading(false);
      }
    };

    fetchTown();
  }, [slug]);

  return { town, loading, error };
};

// Hook for fetching foods
export const useFoods = () => {
  const [foods, setFoods] = useState<SanityFood[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        setLoading(true);
        if (!client) {
          setError(
            'Sanity client not configured. Please set VITE_SANITY_PROJECT_ID in your .env file'
          );
          return;
        }
        const data = await client.fetch<SanityFood[]>(FOODS_QUERY);
        setFoods(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch foods');
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  return { foods, loading, error };
};

// Hook for fetching regions
export const useRegions = () => {
  const [regions, setRegions] = useState<SanityRegion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        setLoading(true);
        if (!client) {
          setError(
            'Sanity client not configured. Please set VITE_SANITY_PROJECT_ID in your .env file'
          );
          return;
        }
        const data = await client.fetch<SanityRegion[]>(REGIONS_QUERY);
        setRegions(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to fetch regions'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchRegions();
  }, []);

  return { regions, loading, error };
};

// Hook for fetching beaches
export const useBeaches = () => {
  const [beaches, setBeaches] = useState<SanityBeach[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBeaches = async () => {
      try {
        setLoading(true);
        if (!client) {
          setError(
            'Sanity client not configured. Please set VITE_SANITY_PROJECT_ID in your .env file'
          );
          return;
        }
        const data = await client.fetch<SanityBeach[]>(BEACHES_QUERY);
        setBeaches(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to fetch beaches'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBeaches();
  }, []);

  return { beaches, loading, error };
};

// Hook for fetching restaurants
export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState<SanityRestaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setLoading(true);
        if (!client) {
          setError(
            'Sanity client not configured. Please set VITE_SANITY_PROJECT_ID in your .env file'
          );
          return;
        }
        const data = await client.fetch<SanityRestaurant[]>(RESTAURANTS_QUERY);
        setRestaurants(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to fetch restaurants'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  return { restaurants, loading, error };
};

// Hook for fetching attractions
export const useAttractions = () => {
  const [attractions, setAttractions] = useState<SanityAttraction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAttractions = async () => {
      try {
        setLoading(true);
        if (!client) {
          setError(
            'Sanity client not configured. Please set VITE_SANITY_PROJECT_ID in your .env file'
          );
          return;
        }
        const data = await client.fetch<SanityAttraction[]>(ATTRACTIONS_QUERY);
        setAttractions(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to fetch attractions'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchAttractions();
  }, []);

  return { attractions, loading, error };
};
