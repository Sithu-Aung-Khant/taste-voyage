import {
  SanityTown,
  SanityFood,
  SanityRegion,
  SanityBeach,
  SanityRestaurant,
  SanityAttraction,
} from '../types/sanity';
import { Town, Food, Region, Beach } from '../types';
import { urlFor } from '../lib/sanity';

// Convert Sanity Town to your existing Town interface
export const convertSanityTown = (sanityTown: SanityTown): Town => {
  return {
    id: sanityTown.slug.current,
    name: sanityTown.name,
    description: sanityTown.description,
    image: sanityTown.image
      ? urlFor(sanityTown.image)?.width(800).height(600).url() || ''
      : '',
    rating: sanityTown.rating,
    region: sanityTown.region,
    coordinates: sanityTown.coordinates,
    attractions: sanityTown.attractions,
    restaurants: sanityTown.restaurants,
    signatureDishes: sanityTown.signatureDishes,
  };
};

// Convert Sanity Food to your existing Food interface
export const convertSanityFood = (sanityFood: SanityFood): Food => {
  return {
    id: sanityFood.slug.current,
    name: sanityFood.name,
    description: sanityFood.description,
    image: sanityFood.image
      ? urlFor(sanityFood.image)?.width(800).height(600).url() || ''
      : '',
    rating: sanityFood.rating,
    origin: sanityFood.origin,
    tasteTags: sanityFood.tasteTags,
    ingredients: sanityFood.ingredients,
    category: sanityFood.category,
    spiceLevel: sanityFood.spiceLevel,
    isVegetarian: sanityFood.isVegetarian,
    wikipediaUrl: sanityFood.wikipediaUrl || null,
  };
};

// Convert Sanity Region to your existing Region interface
export const convertSanityRegion = (sanityRegion: SanityRegion): Region => {
  return {
    id: sanityRegion.slug.current,
    name: sanityRegion.name,
    description: sanityRegion.description,
    image: sanityRegion.image
      ? urlFor(sanityRegion.image)?.width(800).height(600).url() || ''
      : '',
    towns: sanityRegion.towns,
  };
};

// Convert Sanity Beach to your existing Beach interface
export const convertSanityBeach = (sanityBeach: SanityBeach): Beach => {
  return {
    id: sanityBeach.slug.current,
    name: sanityBeach.name,
    region: sanityBeach.region,
    description: sanityBeach.description,
    image: sanityBeach.image
      ? urlFor(sanityBeach.image)?.width(800).height(600).url() || ''
      : '',
    rating: sanityBeach.rating,
    restaurants: sanityBeach.restaurants,
    attractions: sanityBeach.attractions,
  };
};

// Convert Sanity Restaurant to a restaurant object
export const convertSanityRestaurant = (sanityRestaurant: SanityRestaurant) => {
  return {
    id: sanityRestaurant.slug.current,
    name: sanityRestaurant.name,
    description: sanityRestaurant.description,
    image: sanityRestaurant.image
      ? urlFor(sanityRestaurant.image)?.width(800).height(600).url() || ''
      : '',
    rating: sanityRestaurant.rating,
    location: sanityRestaurant.location,
    cuisine: sanityRestaurant.cuisine,
    priceRange: sanityRestaurant.priceRange,
    specialties: sanityRestaurant.specialties,
    town: sanityRestaurant.town,
  };
};

// Convert Sanity Attraction to an attraction object
export const convertSanityAttraction = (sanityAttraction: SanityAttraction) => {
  return {
    id: sanityAttraction.slug.current,
    name: sanityAttraction.name,
    description: sanityAttraction.description,
    image: sanityAttraction.image
      ? urlFor(sanityAttraction.image)?.width(800).height(600).url() || ''
      : '',
    category: sanityAttraction.category,
    location: sanityAttraction.location,
    town: sanityAttraction.town,
  };
};
