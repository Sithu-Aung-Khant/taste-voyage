export interface Town {
  id: string;
  name: string;
  description: string;
  image: string;
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

export interface Food {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  origin: string[];
  ingredients: string[];
  category: 'main' | 'dessert' | 'snack' | 'drink' | 'appetizer';
  isVegetarian: boolean;
}

export interface Region {
  id: string;
  name: string;
  description: string;
  image: string;
  towns: string[];
}

export interface Beach {
  id: string;
  name: string;
  region: string;
  description: string;
  image: string;
  rating: number;
  restaurants: string[];
  attractions: string[];
}

// Sanity CMS Types
export interface SanityPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  _type: 'post';
}

export interface SanityTown {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  description?: string;
  imageUrl?: string;
  rating?: number;
  region?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  attractions?: string[];
  restaurants?: string[];
  signatureDishes?: string[];
  _type: 'town';
}
