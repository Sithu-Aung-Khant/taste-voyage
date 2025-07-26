import { towns } from '../data/towns';
import { foods } from '../data/foods';
import { beaches } from '../data/beaches';
import { attractions } from '../data/attractions';

interface SearchResult {
  id: string;
  name: string;
  type: 'town' | 'food' | 'beach' | 'attraction';
  description: string;
  image?: string;
}

export const searchAll = (query: string): SearchResult[] => {
  if (!query.trim()) {
    return [];
  }

  const searchTerm = query.toLowerCase().trim();
  const results: SearchResult[] = [];

  // Search towns
  towns.forEach((town) => {
    if (
      town.name.toLowerCase().includes(searchTerm) ||
      town.description.toLowerCase().includes(searchTerm)
    ) {
      results.push({
        id: town.id,
        name: town.name,
        type: 'town',
        description: town.description,
        image: town.image,
      });
    }
  });

  // Search foods
  foods.forEach((food) => {
    if (
      food.name.toLowerCase().includes(searchTerm) ||
      food.description.toLowerCase().includes(searchTerm)
    ) {
      results.push({
        id: food.id,
        name: food.name,
        type: 'food',
        description: food.description,
        image: food.image,
      });
    }
  });

  // Search beaches
  beaches.forEach((beach) => {
    if (
      beach.name.toLowerCase().includes(searchTerm) ||
      beach.description.toLowerCase().includes(searchTerm)
    ) {
      results.push({
        id: beach.id,
        name: beach.name,
        type: 'beach',
        description: beach.description,
        image: beach.image,
      });
    }
  });

  // Search attractions
  attractions.forEach((attraction) => {
    if (
      attraction.name.toLowerCase().includes(searchTerm) ||
      attraction.description.toLowerCase().includes(searchTerm)
    ) {
      results.push({
        id: attraction.id,
        name: attraction.name,
        type: 'attraction',
        description: attraction.description,
        image: attraction.image,
      });
    }
  });

  // Sort results by relevance (exact matches first, then partial matches)
  return results
    .sort((a, b) => {
      const aExact = a.name.toLowerCase() === searchTerm;
      const bExact = b.name.toLowerCase() === searchTerm;
      if (aExact && !bExact) return -1;
      if (!aExact && bExact) return 1;
      return a.name.localeCompare(b.name);
    })
    .slice(0, 10); // Limit to 10 results
};
