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
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/cc/c0/2c/ngapali-kitchen.jpg?w=900&h=500&s=1',
    beachId: 'ngapali',
  },
  {
    id: 'pleasant-view',
    name: 'Pleasant View Restaurant',
    description:
      'An elegant dining venue offering a mix of European and Asian cuisine. Features a romantic setting with panoramic ocean views.',
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/11/a0/a2/83/pvi-restaurant-on-sunset.jpg',
    beachId: 'ngapali',
  },
  {
    id: 'sea-queen',
    name: 'Sea Queen Restaurant',
    description:
      'A local favorite known for its authentic Myanmar seafood dishes and friendly service. Perfect for trying local delicacies.',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/bd/19/1b/original-sunset-view.jpg?w=1200&h=900&s=1',
    beachId: 'ngapali',
  },
  {
    id: 'bay-view-bistro',
    name: 'Bay View Bistro',
    description:
      'A modern bistro offering fusion cuisine that combines local flavors with international techniques. Famous for its innovative seafood dishes and craft cocktails.',
    image:
      'https://media-cdn.tripadvisor.com/media/photo-m/1280/2a/e5/08/1d/our-sunset-bar.jpg',
    beachId: 'ngapali',
  },

  // Ngwe Saung Beach Restaurants
  {
    id: 'beach-house',
    name: 'Beach House Restaurant',
    description:
      'A charming restaurant offering fresh seafood and international cuisine. Known for its cozy atmosphere and beachfront dining.',
    image:
      'https://pix10.agoda.net/hotelImages/111/1119997/1119997_16062915170044237777.jpg?ca=6&ce=1&s=414x232',
    beachId: 'ngwe-saung',
  },
  {
    id: 'seafood-garden',
    name: 'Seafood Garden',
    description:
      'Set in a beautiful garden setting, this restaurant specializes in local seafood dishes and traditional Myanmar cuisine.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6sHzEKXvhAZYy-lIfJvYkeSFpr8LZZtuWtw&s',
    beachId: 'ngwe-saung',
  },
  {
    id: 'sunset-cafe',
    name: 'Sunset Café',
    description:
      'A casual beachfront café serving light meals, refreshing drinks, and amazing sunset views. Popular for its fresh fruit smoothies.',
    image:
      'https://wpengine-myanmore.s3.amazonaws.com/uploads/2024/12/462530603_854680743528029_6249668609232124997_n.jpg',
    beachId: 'ngwe-saung',
  },
  {
    id: 'brizo-bar',
    name: 'Brizo Bar',
    description:
      'Day start from Eskala special Breakfast buffet The rest of the day guests can dine from our a la carte menu, which combines Western, Asian and local options. The fresh seafood - everything from fish to prawns, crab and giant lobster - is a highlight and should be tried at least once during your stay',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/c0/12/fd/brizo-restaurant.jpg?w=1400&h=800&s=1',
    beachId: 'ngwe-saung',
  },

  // Chaung Tha Beach Restaurants
  {
    id: 'golden-crab',
    name: 'Golden Crab Restaurant',
    description:
      'Famous for its crab dishes and local seafood specialties. Offers a casual dining experience with ocean views.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5urM6Kq-PnoN5mQe06YowJzfTS4bmwNZJog&s',
    beachId: 'chaung-tha',
  },
  {
    id: 'beach-breeze',
    name: 'Beach Breeze Restaurant',
    description:
      'A family-friendly restaurant serving both local and Western dishes. Known for its relaxed atmosphere and reasonable prices.',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/a3/ac/ef/img-20170211-wa0004-largejpg.jpg?w=1600&h=900&s=1',
    beachId: 'chaung-tha',
  },
  {
    id: 'ocean-view',
    name: 'Ocean View Restaurant',
    description:
      'An upscale dining venue offering a mix of Asian and European cuisine. Features a romantic setting perfect for special occasions.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyzDk1znU_9RF7ysEtmMsKPWR4cecGKDSiaw&s',
    beachId: 'chaung-tha',
  },
  {
    id: 'palm-grove',
    name: 'Palm Grove Restaurant',
    description:
      'A rustic beachside eatery specializing in traditional Myanmar coastal cuisine. Known for its authentic flavors and peaceful garden setting under palm trees.',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/a2/bc/88/the-palm-grove-resort.jpg?w=2000&h=-1&s=1',
    beachId: 'chaung-tha',
  },
];

export const getRestaurantsByBeachId = (beachId: string): BeachRestaurant[] => {
  return beachRestaurants.filter(
    (restaurant) => restaurant.beachId === beachId
  );
};
