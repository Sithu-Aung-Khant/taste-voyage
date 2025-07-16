import { Town } from '../types';

export const towns: Town[] = [
  {
    id: 'yangon',
    name: 'Yangon',
    description:
      'The former capital and largest city of Myanmar, known for its colonial architecture and sacred Buddhist sites like the Shwedagon Pagoda.',
    image:
      'https://www.eyeonasia.gov.sg/images/asean-countries/Yangon%20snapshot%20iso.jpg',
    rating: 4.6,
    region: 'Yangon Region',
    coordinates: {
      lat: 16.8661,
      lng: 96.1951,
    },
    attractions: [
      'Shwedagon Pagoda',
      'Sule Pagoda',
      'Bogyoke Aung San Market',
      'National Museum',
    ],
    restaurants: [
      'Feel Myanmar Food',
      '999 Shan Noodle Shop',
      'Rangoon Tea House',
      'Shan Yoe Yar',
      'Monsoon Restaurant & Bar',
    ],
    signatureDishes: ['mohinga', 'shan-noodles', 'burmese-curry'],
  },
  {
    id: 'mandalay',
    name: 'Mandalay',
    description:
      'The second-largest city and last royal capital of Myanmar, known for its cultural heritage, traditional crafts, and the royal palace.',
    image: 'https://www.hotelredcanal.com/wp-content/uploads/2017/05/10.jpg',
    rating: 4.5,
    region: 'Mandalay Region',
    coordinates: {
      lat: 21.9747,
      lng: 96.0878,
    },
    attractions: [
      'Mandalay Hill',
      'Kuthodaw Pagoda',
      'U Bein Bridge',
      'Mahamuni Buddha Temple',
    ],
    signatureDishes: ['tea-leaf-salad', 'mont-lin-ma-yar', 'burmese-curry'],
  },
  {
    id: 'bagan',
    name: 'Bagan',
    description:
      'An ancient city in central Myanmar known for its thousands of Buddhist temples, pagodas, and stupas dating from the 11th to 13th centuries.',
    image:
      'https://images.pexels.com/photos/9732138/pexels-photo-9732138.jpeg?auto=compress&cs=tinysrgb&w=1200',
    rating: 4.8,
    region: 'Mandalay Region',
    coordinates: {
      lat: 21.1717,
      lng: 94.8585,
    },
    attractions: [
      'Ananda Temple',
      'Shwesandaw Pagoda',
      'Dhammayangyi Temple',
      'Hot Air Balloon Rides',
    ],
    signatureDishes: ['burmese-curry', 'tea-leaf-salad'],
  },
  {
    id: 'inle-lake',
    name: 'Inle Lake',
    description:
      'A freshwater lake known for its floating villages, gardens, and the unique leg-rowing technique of the Intha people.',
    image:
      'https://images.pexels.com/photos/5238583/pexels-photo-5238583.jpeg?auto=compress&cs=tinysrgb&w=1200',
    rating: 4.7,
    region: 'Shan State',
    coordinates: {
      lat: 20.5862,
      lng: 96.9101,
    },
    attractions: [
      'Phaung Daw Oo Pagoda',
      'Nga Hpe Kyaung (Jumping Cat Monastery)',
      'Floating Markets',
      'Indein Village',
    ],
    signatureDishes: ['shan-noodles', 'inle-fish-curry', 'tomato-salad'],
  },
  {
    id: 'hpa-an',
    name: 'Hpa-An',
    description:
      'The capital of Kayin State, known for its stunning karst landscape, caves, and tranquil rural setting.',
    image:
      'https://t3.ftcdn.net/jpg/01/68/42/34/360_F_168423401_XIdoOa4LHYPDDyZXM4eWVtGsQwO4phaD.jpg',
    rating: 4.5,
    region: 'Kayin State',
    coordinates: {
      lat: 16.8895,
      lng: 97.638,
    },
    attractions: [
      'Mount Zwegabin',
      'Kyauk Ka Lat Pagoda',
      'Sadan Cave',
      'Lumbini Garden',
    ],
    signatureDishes: ['kayin-sausage', 'mont-lin-ma-yar'],
  },
  {
    id: 'ngapali',
    name: 'Ngapali Beach',
    description:
      "Myanmar's premier beach destination with pristine white sand, clear blue waters, and swaying coconut palms.",
    image:
      'https://asialinkstravel.com/ckfinder/userfiles/images/Ngapali-beach-1.jpg',
    rating: 4.9,
    region: 'Rakhine State',
    coordinates: {
      lat: 18.4088,
      lng: 94.364,
    },
    attractions: [
      'Pearl Island',
      'Fishing Villages',
      'Sunset Point',
      'Snorkeling',
    ],
    signatureDishes: ['seafood-curry', 'grilled-fish', 'coconut-noodles'],
  },
  {
    id: 'ngwe-saung',
    name: 'Ngwe Saung',
    description:
      'A pristine beach destination known for its long stretch of white sand and clear waters, perfect for relaxation and water activities.',
    image:
      'https://www.mcs-myanmartravel.com/wp-content/uploads/2015/07/ngwesaung.jpg',
    rating: 4.7,
    region: 'Ayeyarwady Region',
    coordinates: {
      lat: 16.7778,
      lng: 94.55,
    },
    attractions: [
      'Long Beach',
      'Island Hopping',
      'Water Sports',
      'Sunset Views',
    ],
    signatureDishes: ['seafood-curry', 'grilled-fish', 'coconut-noodles'],
  },
  {
    id: 'chaung-tha',
    name: 'Chaung Tha',
    description:
      'A popular beach resort town known for its beautiful beaches, fishing villages, and relaxed atmosphere.',
    image:
      'https://pix6.agoda.net/hotelImages/110/1101602/1101602_16101310580047708855.jpg?s=600x450',
    rating: 4.5,
    region: 'Ayeyarwady Region',
    coordinates: {
      lat: 16.5,
      lng: 94.3333,
    },
    attractions: [
      'Beach Activities',
      'Fishing Village',
      'Island Tours',
      'Local Markets',
    ],
    signatureDishes: ['seafood-curry', 'grilled-fish', 'coconut-noodles'],
  },
  {
    id: 'taunggyi',
    name: 'Taunggyi',
    description:
      'The capital of Shan State, known for its cool climate, hill tribe culture, and the famous Tazaungdaing Festival with hot air balloons.',
    image:
      'https://cdn.prod.website-files.com/62de641ce3132f751e31416e/62de641ce3132f6ca331495e_Fire%20Balloon%201.jpg',
    rating: 4.6,
    region: 'Shan State',
    coordinates: {
      lat: 20.7833,
      lng: 97.0333,
    },
    attractions: [
      'Hot Air Balloon Festival',
      'Hill Tribe Markets',
      'Kakku Pagodas',
      'Local Wineries',
    ],
    signatureDishes: ['shan-noodles', 'tea-leaf-salad', 'local-wine'],
  },
  {
    id: 'kalaw',
    name: 'Kalaw',
    description:
      'A former British hill station known for its cool climate, trekking routes, and colonial architecture.',
    image:
      'https://pohcdn.com/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Kalaw_0.jpg',
    rating: 4.7,
    region: 'Shan State',
    coordinates: {
      lat: 20.6333,
      lng: 96.5667,
    },
    attractions: [
      'Trekking Routes',
      'Colonial Buildings',
      'Pine Forests',
      'Hill Tribe Villages',
    ],
    signatureDishes: ['shan-noodles', 'tea-leaf-salad', 'local-coffee'],
  },
  {
    id: 'nyaung-shwe',
    name: 'Nyaung Shwe',
    description:
      'The gateway to Inle Lake, known for its traditional wooden architecture and vibrant local markets.',
    image:
      'https://www.remotelands.com/storage/media/1123/conversions/b130126005-banner-size.jpg',
    rating: 4.8,
    region: 'Shan State',
    coordinates: {
      lat: 20.6667,
      lng: 96.9333,
    },
    attractions: [
      'Inle Lake Access',
      'Local Markets',
      'Traditional Architecture',
      'Boat Tours',
    ],
    signatureDishes: ['shan-noodles', 'inle-fish-curry', 'tomato-salad'],
  },
  {
    id: 'hap-an',
    name: 'Hpa-An',
    description:
      'The capital of Kayin State, known for its stunning karst landscape, caves, and tranquil rural setting.',
    image:
      'https://t3.ftcdn.net/jpg/01/68/42/34/360_F_168423401_XIdoOa4LHYPDDyZXM4eWVtGsQwO4phaD.jpg',
    rating: 4.5,
    region: 'Kayin State',
    coordinates: {
      lat: 16.8895,
      lng: 97.638,
    },
    attractions: [
      'Mount Zwegabin',
      'Kyauk Ka Lat Pagoda',
      'Sadan Cave',
      'Lumbini Garden',
    ],
    signatureDishes: ['kayin-sausage', 'mont-lin-ma-yar'],
  },
  {
    id: 'mawlamyaing',
    name: 'Mawlamyaing',
    description:
      'The fourth-largest city in Myanmar, known for its colonial architecture, riverside setting, and historic pagodas.',
    image:
      'https://c8.alamy.com/comp/K46JWK/buddhist-pagoda-at-moke-ta-ma-burma-towering-above-mawlamyine-highway-K46JWK.jpg',
    rating: 4.4,
    region: 'Mon State',
    coordinates: {
      lat: 16.4833,
      lng: 97.6167,
    },
    attractions: [
      'Kyaikthanlan Pagoda',
      'Gaungse Kyun',
      'Bilu Kyun',
      'Colonial Buildings',
    ],
    signatureDishes: ['mon-style-curry', 'seafood-dishes', 'local-noodles'],
  },
];
