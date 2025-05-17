import { Food } from '../types';

export const foods: Food[] = [
  {
    id: 'mohinga',
    name: 'Mohinga',
    description: 'The national dish of Myanmar, Mohinga is a flavorful fish soup with rice noodles, topped with crispy fritters and fresh herbs. Traditionally eaten for breakfast, it\'s now enjoyed throughout the day across the country.',
    image: 'https://images.pexels.com/photos/5409015/pexels-photo-5409015.jpeg?auto=compress&cs=tinysrgb&w=1200',
    rating: 4.8,
    origin: ['Yangon', 'Nationwide'],
    tasteTags: ['savory', 'aromatic', 'spicy', 'fresh'],
    ingredients: ['rice noodles', 'fish', 'banana stem', 'lemongrass', 'garlic', 'onions', 'ginger', 'fish sauce'],
    category: 'main',
    spiceLevel: 3,
    isVegetarian: false
  },
  {
    id: 'tea-leaf-salad',
    name: 'Lahpet Thoke (Tea Leaf Salad)',
    description: 'A unique savory salad made from fermented tea leaves, mixed with crunchy fried beans, peas, peanuts, and sesame seeds. The dish showcases Myanmar\'s distinctive culinary heritage as one of the few cultures that eats tea leaves rather than just drinking them.',
    image: 'https://images.pexels.com/photos/6278958/pexels-photo-6278958.jpeg?auto=compress&cs=tinysrgb&w=1200',
    rating: 4.7,
    origin: ['Shan State', 'Nationwide'],
    tasteTags: ['umami', 'tangy', 'crunchy', 'earthy'],
    ingredients: ['fermented tea leaves', 'cabbage', 'tomatoes', 'peanuts', 'sesame seeds', 'fried garlic', 'dried shrimp', 'lime juice'],
    category: 'appetizer',
    spiceLevel: 2,
    isVegetarian: false
  },
  {
    id: 'shan-noodles',
    name: 'Shan Noodles',
    description: 'A beloved dish from Shan State featuring thin rice noodles with marinated chicken or pork, tomatoes, and garlic in a flavorful broth. Often served with a side of pickled vegetables.',
    image: 'https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=1200',
    rating: 4.6,
    origin: ['Shan State'],
    tasteTags: ['savory', 'tangy', 'spicy', 'hearty'],
    ingredients: ['rice noodles', 'chicken', 'tomatoes', 'garlic', 'ground peanuts', 'chili oil'],
    category: 'main',
    spiceLevel: 3,
    isVegetarian: false
  },
  {
    id: 'burmese-curry',
    name: 'Burmese Curry',
    description: 'Rich and oil-based, Burmese curries are less spicy than those of neighboring countries but full of flavor. They\'re typically served with rice, a variety of side dishes, and soup.',
    image: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1200',
    rating: 4.5,
    origin: ['Mandalay', 'Yangon'],
    tasteTags: ['rich', 'aromatic', 'savory', 'complex'],
    ingredients: ['meat or fish', 'onions', 'garlic', 'ginger', 'turmeric', 'paprika', 'fish sauce'],
    category: 'main',
    spiceLevel: 4,
    isVegetarian: false
  },
  {
    id: 'mont-lin-ma-yar',
    name: 'Mont Lin Ma Yar (Couple Snack)',
    description: 'These small rice pancake "couples" are a popular street food. Made from rice flour batter cooked in a special pan with half-spherical molds, then joined together with various sweet or savory fillings.',
    image: 'https://images.pexels.com/photos/2313682/pexels-photo-2313682.jpeg?auto=compress&cs=tinysrgb&w=1200',
    rating: 4.4,
    origin: ['Yangon'],
    tasteTags: ['sweet', 'savory', 'crispy', 'soft'],
    ingredients: ['rice flour', 'quail eggs', 'scallions', 'roasted chickpeas'],
    category: 'snack',
    spiceLevel: 1,
    isVegetarian: true
  },
  {
    id: 'ohn-no-khao-swe',
    name: 'Ohn No Khao Swe (Coconut Noodles)',
    description: 'Wheat noodles in a rich coconut milk broth with chicken, garnished with boiled eggs, sliced onions, chili, and lime. A delicious comfort food with a perfect balance of flavors.',
    image: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1200',
    rating: 4.7,
    origin: ['Central Myanmar'],
    tasteTags: ['creamy', 'aromatic', 'spicy', 'savory'],
    ingredients: ['wheat noodles', 'coconut milk', 'chicken', 'fish sauce', 'turmeric', 'onions', 'eggs', 'chickpea flour'],
    category: 'main',
    spiceLevel: 2,
    isVegetarian: false
  }
];