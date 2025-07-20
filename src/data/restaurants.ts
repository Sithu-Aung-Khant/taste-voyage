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

  // Taunggyi Restaurants
  {
    id: 'win-restaurant',
    name: 'Win Restaurant',
    image:
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000',
    townId: 'taunggyi',
    description:
      'Popular local restaurant serving authentic Shan cuisine and hotpot',
  },
  {
    id: 'golden-crown',
    name: 'Golden Crown Restaurant',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000',
    townId: 'taunggyi',
    description: 'Famous for traditional Shan and Chinese fusion dishes',
  },
  {
    id: 'shwe-myanmar',
    name: 'Shwe Myanmar Restaurant',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000',
    townId: 'taunggyi',
    description: 'Local favorite serving Shan noodles and traditional dishes',
  },
  {
    id: 'royal-taunggyi',
    name: 'Royal Taunggyi Restaurant',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000',
    townId: 'taunggyi',
    description: 'Upscale dining with panoramic views of Taunggyi',
  },

  // Kalaw Restaurants
  {
    id: 'seven-sisters',
    name: 'Seven Sisters Restaurant',
    image:
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000',
    townId: 'kalaw',
    description: 'Famous for traditional Nepali and Shan cuisine',
  },
  {
    id: 'thirigayhar',
    name: 'Thirigayhar Restaurant',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000',
    townId: 'kalaw',
    description: 'Local favorite serving authentic Myanmar dishes',
  },
  {
    id: 'dream-restaurant',
    name: 'Dream Restaurant',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000',
    townId: 'kalaw',
    description: 'Popular spot for traditional breakfast and lunch',
  },
  {
    id: 'everest-nepali',
    name: 'Everest Nepali Food Center',
    image:
      'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=1000',
    townId: 'kalaw',
    description: 'Authentic Nepali cuisine in the heart of Kalaw',
  },

  // Nyaung-shwe Restaurants
  {
    id: 'live-dim-sum',
    name: 'Live Dim Sum House',
    image:
      'https://images.unsplash.com/photo-1526318896980-cf78c088247c?q=80&w=1000',
    townId: 'nyaung-shwe',
    description: 'Popular for fresh dim sum and Shan specialties',
  },
  {
    id: 'viewpoint',
    name: 'Viewpoint Restaurant',
    image:
      'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?q=80&w=1000',
    townId: 'nyaung-shwe',
    description: 'Fine dining with local ingredients and lake views',
  },
  {
    id: 'lin-htett',
    name: 'Lin Htett Restaurant',
    image:
      'https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=1000',
    townId: 'nyaung-shwe',
    description: 'Traditional Shan cuisine with fresh local ingredients',
  },
  {
    id: 'golden-kite',
    name: 'Golden Kite Restaurant',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000',
    townId: 'nyaung-shwe',
    description: 'Famous for Shan and Intha traditional dishes',
  },
];

export const getRestaurantsByTownId = (townId: string): Restaurant[] => {
  return restaurants.filter((restaurant) => restaurant.townId === townId);
};
