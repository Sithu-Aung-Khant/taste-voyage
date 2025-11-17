import { Food } from '../types';

export const foods: Food[] = [
  {
    id: 'mohinga',
    name: 'Mohinga',
    description:
      "The national dish of Myanmar, Mohinga is a flavorful fish soup with rice noodles, topped with crispy fritters and fresh herbs. Traditionally eaten for breakfast, it's now enjoyed throughout the day across the country.",
    image:
      'https://pinkysnowfoods.co.uk/cdn/shop/files/A5A48E2A-5072-489B-B768-95EB2EAB65F3.webp?v=1723143581&width=1445',
    rating: 4.8,
    origin: ['Yangon', 'Nationwide'],
    ingredients: [
      'rice noodles',
      'fish',
      'banana stem',
      'lemongrass',
      'garlic',
      'onions',
      'ginger',
      'fish sauce',
    ],
    category: 'main',
    isVegetarian: false,
  },
  {
    id: 'tea-leaf-salad',
    name: 'Lahpet Thoke (Tea Leaf Salad)',
    description:
      "A unique savory salad made from fermented tea leaves, mixed with crunchy fried beans, peas, peanuts, and sesame seeds. The dish showcases Myanmar's distinctive culinary heritage as one of the few cultures that eats tea leaves rather than just drinking them.",
    image:
      'https://image.vovworld.vn/w500/Uploaded/vovworld/qosino/2019_05_10/myanmarsalad_AJRI.jpg',
    rating: 4.7,
    origin: ['Shan State', 'Nationwide'],
    ingredients: [
      'fermented tea leaves',
      'cabbage',
      'tomatoes',
      'peanuts',
      'sesame seeds',
      'fried garlic',
      'dried shrimp',
      'lime juice',
    ],
    category: 'appetizer',
    isVegetarian: false,
  },
  {
    id: 'shan-noodles',
    name: 'Shan Noodles',
    description:
      'A beloved dish from Shan State featuring thin rice noodles with marinated chicken or pork, tomatoes, and garlic in a flavorful broth. Often served with a side of pickled vegetables.',
    image:
      'https://hsaba.com/wp-content/uploads/2009/01/shan_noodles_hsaba.jpg',
    rating: 4.6,
    origin: ['Shan State'],
    ingredients: [
      'rice noodles',
      'chicken',
      'tomatoes',
      'garlic',
      'ground peanuts',
      'chili oil',
    ],
    category: 'main',
    isVegetarian: false,
  },
  {
    id: 'burmese-curry',
    name: 'Burmese Curry',
    description:
      "Rich and oil-based, Burmese curries are less spicy than those of neighboring countries but full of flavor. They're typically served with rice, a variety of side dishes, and soup.",
    image: 'https://www.mingalabarrestaurant.com/images/meals.jpg',
    rating: 4.5,
    origin: ['Mandalay', 'Yangon'],
    ingredients: [
      'meat or fish',
      'onions',
      'garlic',
      'ginger',
      'turmeric',
      'paprika',
      'fish sauce',
    ],
    category: 'main',
    isVegetarian: false,
  },
  {
    id: 'mont-lin-ma-yar',
    name: 'Mont Lin Ma Yar (Couple Snack)',
    description:
      'These small rice pancake "couples" are a popular street food. Made from rice flour batter cooked in a special pan with half-spherical molds, then joined together with various sweet or savory fillings.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsseoMjSA23qJJNH3jJuqoX4lgxoz6_26kPg&s',
    rating: 4.4,
    origin: ['Yangon'],
    ingredients: ['rice flour', 'quail eggs', 'scallions', 'roasted chickpeas'],
    category: 'snack',
    isVegetarian: true,
  },
  {
    id: 'ohn-no-khao-swe',
    name: 'Ohn No Khao Swe (Coconut Noodles)',
    description:
      'Wheat noodlesin a rich coconut milk broth with chicken, garnished with boiled eggs, sliced onions, chili, and lime. A delicious comfort food with a perfect balance of flavors.',
    image:
      'https://images.squarespace-cdn.com/content/v1/56201ac6e4b00f43cb4f11ed/1582598044263-IWSZLBAS8NCBM2TOF9RD/Umi_Rangoon_2447.jpg',
    rating: 4.7,
    origin: ['Central Myanmar'],
    ingredients: [
      'wheat noodles',
      'coconut milk',
      'chicken',
      'fish sauce',
      'turmeric',
      'onions',
      'eggs',
      'chickpea flour',
    ],
    category: 'main',
    isVegetarian: false,
  },
];
