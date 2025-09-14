// Sanity-specific types that extend your existing types
export interface SanityDocument {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

export interface SanitySlug {
  _type: 'slug';
  current: string;
}

// Sanity versions of your existing types
export interface SanityTown extends SanityDocument {
  _type: 'town';
  name: string;
  slug: SanitySlug;
  description: string;
  image: SanityImage;
  rating: number;
  region: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  attractions: string[];
  restaurants?: string[];
  signatureDishes: string[];
}

export interface SanityFood extends SanityDocument {
  _type: 'food';
  name: string;
  slug: SanitySlug;
  description: string;
  image: SanityImage;
  rating: number;
  origin: string[];
  tasteTags: string[];
  ingredients: string[];
  category: 'main' | 'dessert' | 'snack' | 'drink' | 'appetizer';
  spiceLevel: 1 | 2 | 3 | 4 | 5;
  isVegetarian: boolean;
  wikipediaUrl?: string;
}

export interface SanityRegion extends SanityDocument {
  _type: 'region';
  name: string;
  slug: SanitySlug;
  description: string;
  image: SanityImage;
  towns: string[];
}

export interface SanityBeach extends SanityDocument {
  _type: 'beach';
  name: string;
  slug: SanitySlug;
  region: string;
  description: string;
  image: SanityImage;
  rating: number;
  restaurants: string[];
  attractions: string[];
}

export interface SanityRestaurant extends SanityDocument {
  _type: 'restaurant';
  name: string;
  slug: SanitySlug;
  description: string;
  image: SanityImage;
  rating: number;
  location: string;
  cuisine: string[];
  priceRange: 'budget' | 'mid-range' | 'high-end';
  specialties: string[];
  town: string; // Reference to town
}

export interface SanityAttraction extends SanityDocument {
  _type: 'attraction';
  name: string;
  slug: SanitySlug;
  description: string;
  image: SanityImage;
  category: 'temple' | 'nature' | 'cultural' | 'historical' | 'adventure';
  location: string;
  town: string; // Reference to town
}
