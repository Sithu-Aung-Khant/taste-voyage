import { Beach } from '../types';

export const beaches: Beach[] = [
  {
    id: 'ngapali',
    name: 'Ngapali Beach',
    region: 'Rakhine State',
    description:
      "Ngapali Beach is Myanmar's premier beach destination, featuring pristine white sand, crystal-clear waters, and swaying palm trees. Known for its unspoiled natural beauty and laid-back atmosphere, it offers a perfect blend of luxury resorts and traditional fishing village charm.",
    image: '/beaches/ngapali.jpg',
    rating: 4.8,
    restaurants: ['ngapali-kitchen', 'pleasant-view', 'sea-queen'],
    attractions: ['sunset-point', 'fishing-village', 'pearl-island'],
  },
  {
    id: 'ngwe-saung',
    name: 'Ngwe Saung Beach',
    region: 'Ayeyarwady Region',
    description:
      'Ngwe Saung, also known as Silver Beach, is a 15-kilometer stretch of pristine coastline along the Bay of Bengal. This idyllic destination offers stunning sunsets, water sports activities, and fresh seafood, making it a perfect escape for both relaxation and adventure.',
    image: '/beaches/ngwe-saung.jpg',
    rating: 4.6,
    restaurants: ['beach-house', 'seafood-garden', 'sunset-cafe'],
    attractions: ['lovers-island', 'elephant-point', 'bird-sanctuary'],
  },
  {
    id: 'chaung-tha',
    name: 'Chaung Tha Beach',
    region: 'Ayeyarwady Region',
    description:
      'Chaung Tha Beach is a popular weekend getaway for locals and tourists alike. Known for its affordable accommodations and lively atmosphere, this beach offers various activities from boat trips to nearby islands to enjoying local seafood delicacies.',
    image: '/beaches/chaung-tha.jpg',
    rating: 4.3,
    restaurants: ['golden-crab', 'beach-breeze', 'ocean-view'],
    attractions: ['butterfly-island', 'pagoda-point', 'local-market'],
  },
];
