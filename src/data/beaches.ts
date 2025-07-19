import { Beach } from '../types';

export const beaches: Beach[] = [
  {
    id: 'ngapali',
    name: 'Ngapali Beach',
    region: 'Rakhine State',
    description:
      "Ngapali Beach is Myanmar's premier beach destination, featuring pristine white sand, crystal-clear waters, and swaying palm trees. Known for its unspoiled natural beauty and laid-back atmosphere, it offers a perfect blend of luxury resorts and traditional fishing village charm.",
    image:
      'https://asialinkstravel.com/ckfinder/userfiles/images/Ngapali-beach-1.jpg',
    rating: 4.8,
    restaurants: [
      'ngapali-kitchen',
      'pleasant-view',
      'sea-queen',
      'bay-view-bistro',
    ],
    attractions: ['sunset-point', 'fishing-village', 'pearl-island'],
  },
  {
    id: 'ngwe-saung',
    name: 'Ngwe Saung Beach',
    region: 'Ayeyarwady Region',
    description:
      'Ngwe Saung, also known as Silver Beach, is a 15-kilometer stretch of pristine coastline along the Bay of Bengal. This idyllic destination offers stunning sunsets, water sports activities, and fresh seafood, making it a perfect escape for both relaxation and adventure.',
    image:
      'https://www.mcs-myanmartravel.com/wp-content/uploads/2015/07/ngwesaung.jpg',
    rating: 4.6,
    restaurants: [
      'beach-house',
      'seafood-garden',
      'sunset-cafe',
      'silver-moon',
    ],
    attractions: ['lovers-island', 'elephant-point', 'bird-sanctuary'],
  },
  {
    id: 'chaung-tha',
    name: 'Chaung Tha Beach',
    region: 'Ayeyarwady Region',
    description:
      'Chaung Tha Beach is a popular weekend getaway for locals and tourists alike. Known for its affordable accommodations and lively atmosphere, this beach offers various activities from boat trips to nearby islands to enjoying local seafood delicacies.',
    image:
      'https://pix6.agoda.net/hotelImages/110/1101602/1101602_16101310580047708855.jpg?s=600x450',
    rating: 4.3,
    restaurants: ['golden-crab', 'beach-breeze', 'ocean-view', 'palm-grove'],
    attractions: ['butterfly-island', 'pagoda-point', 'local-market'],
  },
];
