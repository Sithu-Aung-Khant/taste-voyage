interface BeachRestaurant {
  id: string;
  name: string;
  description: string;
  image: string;
  beachId: string;
}

const beachRestaurants: BeachRestaurant[] = [
  // Ngapali Beach Restaurants
  {
    id: 'ngapali-kitchen',
    name: 'Ngapali Kitchen',
    description:
      'A beachfront restaurant serving fresh seafood and traditional Rakhine cuisine. Known for its grilled fish and spectacular sunset views.',
    image: '/beaches/restaurants/ngapali-kitchen.jpg',
    beachId: 'ngapali',
  },
  {
    id: 'pleasant-view',
    name: 'Pleasant View Restaurant',
    description:
      'An elegant dining venue offering a mix of European and Asian cuisine. Features a romantic setting with panoramic ocean views.',
    image: '/beaches/restaurants/pleasant-view.jpg',
    beachId: 'ngapali',
  },
  {
    id: 'sea-queen',
    name: 'Sea Queen Restaurant',
    description:
      'A local favorite known for its authentic Myanmar seafood dishes and friendly service. Perfect for trying local delicacies.',
    image: '/beaches/restaurants/sea-queen.jpg',
    beachId: 'ngapali',
  },
  {
    id: 'bay-view-bistro',
    name: 'Bay View Bistro',
    description:
      'A modern bistro offering fusion cuisine that combines local flavors with international techniques. Famous for its innovative seafood dishes and craft cocktails.',
    image: '/beaches/restaurants/bay-view-bistro.jpg',
    beachId: 'ngapali',
  },

  // Ngwe Saung Beach Restaurants
  {
    id: 'beach-house',
    name: 'Beach House Restaurant',
    description:
      'A charming restaurant offering fresh seafood and international cuisine. Known for its cozy atmosphere and beachfront dining.',
    image: '/beaches/restaurants/beach-house.jpg',
    beachId: 'ngwe-saung',
  },
  {
    id: 'seafood-garden',
    name: 'Seafood Garden',
    description:
      'Set in a beautiful garden setting, this restaurant specializes in local seafood dishes and traditional Myanmar cuisine.',
    image: '/beaches/restaurants/seafood-garden.jpg',
    beachId: 'ngwe-saung',
  },
  {
    id: 'sunset-cafe',
    name: 'Sunset Café',
    description:
      'A casual beachfront café serving light meals, refreshing drinks, and amazing sunset views. Popular for its fresh fruit smoothies.',
    image: '/beaches/restaurants/sunset-cafe.jpg',
    beachId: 'ngwe-saung',
  },
  {
    id: 'silver-moon',
    name: 'Silver Moon Restaurant',
    description:
      'An upscale dining establishment featuring a blend of local and Mediterranean cuisine. Known for its extensive wine selection and fresh catch of the day.',
    image: '/beaches/restaurants/silver-moon.jpg',
    beachId: 'ngwe-saung',
  },

  // Chaung Tha Beach Restaurants
  {
    id: 'golden-crab',
    name: 'Golden Crab Restaurant',
    description:
      'Famous for its crab dishes and local seafood specialties. Offers a casual dining experience with ocean views.',
    image: '/beaches/restaurants/golden-crab.jpg',
    beachId: 'chaung-tha',
  },
  {
    id: 'beach-breeze',
    name: 'Beach Breeze Restaurant',
    description:
      'A family-friendly restaurant serving both local and Western dishes. Known for its relaxed atmosphere and reasonable prices.',
    image: '/beaches/restaurants/beach-breeze.jpg',
    beachId: 'chaung-tha',
  },
  {
    id: 'ocean-view',
    name: 'Ocean View Restaurant',
    description:
      'An upscale dining venue offering a mix of Asian and European cuisine. Features a romantic setting perfect for special occasions.',
    image: '/beaches/restaurants/ocean-view.jpg',
    beachId: 'chaung-tha',
  },
  {
    id: 'palm-grove',
    name: 'Palm Grove Restaurant',
    description:
      'A rustic beachside eatery specializing in traditional Myanmar coastal cuisine. Known for its authentic flavors and peaceful garden setting under palm trees.',
    image: '/beaches/restaurants/palm-grove.jpg',
    beachId: 'chaung-tha',
  },
];

export const getRestaurantsByBeachId = (beachId: string): BeachRestaurant[] => {
  return beachRestaurants.filter(
    (restaurant) => restaurant.beachId === beachId
  );
};
