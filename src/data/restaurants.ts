interface Restaurant {
  id: string;
  name: string;
  image: string;
  townId: string;
  description: string;
}

export const restaurants: Restaurant[] = [
  // Yangon Restaurants
  {
    id: 'rangoon-tea-house',
    name: 'Rangoon Tea House',
    image: '/src/public/IMG_4982.JPG',
    townId: 'yangon',
    description: 'Famous for Mohinga and variety of local dishes',
  },
  {
    id: 'ykko-kyae-oh',
    name: 'YKKO Kyae Oh',
    image: '/src/public/IMG_4983.JPG',
    townId: 'yangon',
    description: 'Famous for unique Kyae Oh',
  },
  {
    id: 'shan-yoe-yar',
    name: 'Shan Yoe Yar',
    image: '/src/public/IMG_4984.JPG',
    townId: 'yangon',
    description: 'Famous for shan cuisine',
  },
  {
    id: 'lucky-seven-tea-house',
    name: 'Lucky Seven Tea House',
    image: '/src/public/IMG_4985.JPG',
    townId: 'yangon',
    description: 'Famous for local breakfast foods',
  },
  {
    id: 'cafe-salween',
    name: 'Cafe Salween',
    image: '/src/public/IMG_4986.JPG',
    townId: 'yangon',
    description: 'Famous for traditional burmese desserts',
  },

  // Add more restaurants for other towns as needed
];

export const getRestaurantsByTownId = (townId: string): Restaurant[] => {
  return restaurants.filter((restaurant) => restaurant.townId === townId);
};
