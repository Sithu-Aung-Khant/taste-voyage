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
  tasteTags: string[];
  ingredients: string[];
  category: 'main' | 'dessert' | 'snack' | 'drink' | 'appetizer';
  spiceLevel: 1 | 2 | 3 | 4 | 5;
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
