import { Town } from '../types';

export const towns: Town[] = [
  {
    id: 'yangon',
    name: 'Yangon',
    description: 'The former capital and largest city of Myanmar, known for its colonial architecture and sacred Buddhist sites like the Shwedagon Pagoda.',
    image: 'https://images.pexels.com/photos/5845416/pexels-photo-5845416.jpeg?auto=compress&cs=tinysrgb&w=1200',
    rating: 4.6,
    region: 'Yangon Region',
    coordinates: {
      lat: 16.8661,
      lng: 96.1951
    },
    attractions: ['Shwedagon Pagoda', 'Sule Pagoda', 'Bogyoke Aung San Market', 'National Museum'],
    signatureDishes: ['mohinga', 'shan-noodles', 'burmese-curry']
  },
  {
    id: 'mandalay',
    name: 'Mandalay',
    description: 'The second-largest city and last royal capital of Myanmar, known for its cultural heritage, traditional crafts, and the royal palace.',
    image: 'https://images.pexels.com/photos/3689859/pexels-photo-3689859.jpeg?auto=compress&cs=tinysrgb&w=1200',
    rating: 4.5,
    region: 'Mandalay Region',
    coordinates: {
      lat: 21.9747,
      lng: 96.0878
    },
    attractions: ['Mandalay Hill', 'Kuthodaw Pagoda', 'U Bein Bridge', 'Mahamuni Buddha Temple'],
    signatureDishes: ['tea-leaf-salad', 'mont-lin-ma-yar', 'burmese-curry']
  },
  {
    id: 'bagan',
    name: 'Bagan',
    description: 'An ancient city in central Myanmar known for its thousands of Buddhist temples, pagodas, and stupas dating from the 11th to 13th centuries.',
    image: 'https://images.pexels.com/photos/9732138/pexels-photo-9732138.jpeg?auto=compress&cs=tinysrgb&w=1200',
    rating: 4.8,
    region: 'Mandalay Region',
    coordinates: {
      lat: 21.1717,
      lng: 94.8585
    },
    attractions: ['Ananda Temple', 'Shwesandaw Pagoda', 'Dhammayangyi Temple', 'Hot Air Balloon Rides'],
    signatureDishes: ['burmese-curry', 'tea-leaf-salad']
  },
  {
    id: 'inle-lake',
    name: 'Inle Lake',
    description: 'A freshwater lake known for its floating villages, gardens, and the unique leg-rowing technique of the Intha people.',
    image: 'https://images.pexels.com/photos/5238583/pexels-photo-5238583.jpeg?auto=compress&cs=tinysrgb&w=1200',
    rating: 4.7,
    region: 'Shan State',
    coordinates: {
      lat: 20.5862,
      lng: 96.9101
    },
    attractions: ['Phaung Daw Oo Pagoda', 'Nga Hpe Kyaung (Jumping Cat Monastery)', 'Floating Markets', 'Indein Village'],
    signatureDishes: ['shan-noodles', 'inle-fish-curry', 'tomato-salad']
  },
  {
    id: 'hpa-an',
    name: 'Hpa-An',
    description: 'The capital of Kayin State, known for its stunning karst landscape, caves, and tranquil rural setting.',
    image: 'https://images.pexels.com/photos/4011398/pexels-photo-4011398.jpeg?auto=compress&cs=tinysrgb&w=1200',
    rating: 4.5,
    region: 'Kayin State',
    coordinates: {
      lat: 16.8895,
      lng: 97.6380
    },
    attractions: ['Mount Zwegabin', 'Kyauk Ka Lat Pagoda', 'Sadan Cave', 'Lumbini Garden'],
    signatureDishes: ['kayin-sausage', 'mont-lin-ma-yar']
  },
  {
    id: 'ngapali',
    name: 'Ngapali Beach',
    description: 'Myanmar\'s premier beach destination with pristine white sand, clear blue waters, and swaying coconut palms.',
    image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1200',
    rating: 4.9,
    region: 'Rakhine State',
    coordinates: {
      lat: 18.4088,
      lng: 94.3640
    },
    attractions: ['Pearl Island', 'Fishing Villages', 'Sunset Point', 'Snorkeling'],
    signatureDishes: ['seafood-curry', 'grilled-fish', 'coconut-noodles']
  }
];