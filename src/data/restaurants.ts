interface Restaurant {
  id: string;
  name: string;
  image: string;
  townId: string;
}

export const restaurants: Restaurant[] = [
  // Yangon Restaurants
  {
    id: 'feel-myanmar-food',
    name: 'Feel Myanmar Food',
    image:
      'https://images.unsplash.com/photo-1555921015-5532091f6026?w=800&auto=format&fit=crop',
    townId: 'yangon',
  },
  {
    id: '999-shan-noodle',
    name: '999 Shan Noodle Shop',
    image:
      'https://images.unsplash.com/photo-1600458838376-56cf0566d943?w=800&auto=format&fit=crop',
    townId: 'yangon',
  },
  {
    id: 'rangoon-tea-house',
    name: 'Rangoon Tea House',
    image:
      'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&auto=format&fit=crop',
    townId: 'yangon',
  },
  {
    id: 'shan-yoe-yar',
    name: 'Shan Yoe Yar',
    image:
      'https://images.unsplash.com/photo-1600458838859-b71e2a9c4652?w=800&auto=format&fit=crop',
    townId: 'yangon',
  },
  {
    id: 'monsoon',
    name: 'Monsoon Restaurant & Bar',
    image:
      'https://images.unsplash.com/photo-1598935898639-81586f7d2129?w=800&auto=format&fit=crop',
    townId: 'yangon',
  },

  // Add more restaurants for other towns as needed
];

export const getRestaurantsByTownId = (townId: string): Restaurant[] => {
  return restaurants.filter((restaurant) => restaurant.townId === townId);
};
