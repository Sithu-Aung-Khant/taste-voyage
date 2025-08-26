import { Town } from '../types';

export const towns: Town[] = [
  {
    id: 'pyin-oo-lwin',
    name: 'Pyin Oo Lwin',
    description:
      'Pyin Oo Lwin, formerly known as Maymyo, is a scenic hill town known for its colonial architecture, botanical gardens, and pleasant climate. The town offers a unique blend of British colonial history and local culture, with beautiful gardens, waterfalls, and a thriving food scene.',
    image:
      'https://www.goodlifemyanmar.net/wp-content/uploads/2017/06/Botanical-Garden.jpg',
    rating: 4.5,
    region: 'Mandalay Region',
    coordinates: {
      lat: 22.0359,
      lng: 96.4568,
    },
    attractions: [
      'National Kandawgyi Gardens',
      'Pwe Kauk Falls',
      'Chinese Temple',
      'Peik Chin Myaung Cave',
    ],
    restaurants: [
      'maw-da-nu',
      'san-francisco',
      'feel-restaurant',
      'december-waterfall',
      'forest-cafe',
      'one-piece-bbq',
    ],
    signatureDishes: ['maymyo-coffee', 'strawberry-products', 'dairy-products'],
  },
  {
    id: 'dawei',
    name: 'Dawei',
    description:
      'Dawei is a charming coastal town in southern Myanmar, known for its pristine beaches, local markets, and authentic Burmese culture. The town offers a glimpse into traditional life while providing modern amenities and diverse dining options.',
    image:
      'https://images.skypicker.com/?image=https%3A%2F%2Fimages.kiwi.com%2Fphotos%2Foriginals%2Fdawei-township_mm.jpg&width=768&height=395&fit=crop&format=original&dpr=2',
    rating: 4.4,
    region: 'Tanintharyi Region',
    coordinates: {
      lat: 14.0823,
      lng: 98.1915,
    },
    attractions: [
      'Maungmagan Beach',
      'Dawei Night Market',
      'Shwe Taung Zar Pagoda',
      'Traditional Market',
    ],
    restaurants: [
      'bamboo-garden',
      'shwe-hnin-si',
      'old-house-cafe',
      'little-eden',
      'sawardi',
    ],
    signatureDishes: ['seafood', 'local-breakfast', 'traditional-snacks'],
  },
  {
    id: 'kawthaung',
    name: 'Kawthaung',
    description:
      "Kawthaung, Myanmar's southernmost city, is a vibrant port town with stunning views of the Andaman Sea. Known for its seafood, mixed culture, and gateway to the Mergui Archipelago, it offers unique dining experiences combining Thai and Burmese flavors.",
    image:
      'https://cdn.prod.website-files.com/62de641ce3132f751e31416e/63691851ff42b16ac7bec6a7_mrC3tGOv8SBkf5_a7FBCZb4VVtwYT7xwGfuyxGKda7HL9Ycs5sD_8Wy6R4PVkjr_t-pPir1Roo7E2wBbsXow5rZuhUicrNKbHu5cLMRvplhSPALMaJBSu2eMYcK-ZqxQTSrkd49AeO3l9loPEE1vo1_SsEnH08p_hofbcQqkGo8AFgQR6J1MgJXAVj5Stg.jpeg',
    rating: 4.3,
    region: 'Tanintharyi Region',
    coordinates: {
      lat: 10.0492,
      lng: 98.5519,
    },
    attractions: [
      'Victoria Point',
      'Pyi Daw Aye Pagoda',
      'King Bayint Naung Statue',
      'Mergui Archipelago',
    ],
    restaurants: ['sky-view', 'victoria-cliff', 'kawthaung-yummy'],
    signatureDishes: ['seafood', 'thai-fusion', 'local-specialties'],
  },
  {
    id: 'myeik',
    name: 'Myeik',
    description:
      'Myeik is a historic port city known for its pearl industry and seafood. The city offers a unique blend of colonial architecture, bustling markets, and waterfront dining, making it a fascinating destination for food enthusiasts and culture seekers.',
    image:
      'https://cdn.kimkim.com/files/a/content_articles/featured_photos/68082503913e99005eb9ab105c382a58b8bd82c7/big-38d1d89484040ac054f90a3e77b4097e.jpg',
    rating: 4.4,
    region: 'Tanintharyi Region',
    coordinates: {
      lat: 12.4318,
      lng: 98.6062,
    },
    attractions: [
      'Theindawgyi Pagoda',
      'Pearl Farms',
      'Myeik Archipelago',
      'Night Market',
    ],
    restaurants: ['pin-lae-may', 'my-mergui-bar', 'hotel-drift', 'mr-bamboo'],
    signatureDishes: ['seafood', 'local-cuisine', 'fresh-fish'],
  },
  {
    id: 'nay-pyi-daw',
    name: 'Nay Pyi Daw',
    description:
      "Nay Pyi Daw, Myanmar's modern capital city, is known for its wide boulevards, government buildings, and emerging dining scene. The city offers a unique blend of contemporary architecture, hotels, and restaurants, making it an interesting destination for visitors interested in modern Myanmar.",
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000',
    rating: 4.3,
    region: 'Nay Pyi Daw Union Territory',
    coordinates: {
      lat: 19.7475,
      lng: 96.115,
    },
    attractions: [
      'Uppatasanti Pagoda',
      'Myanmar Gems Museum',
      'National Landmark Garden',
      'Water Fountain Garden',
    ],
    restaurants: [
      'hta-naung',
      'mon-ma-2',
      'new-thai-yai',
      'nature-tea-house',
      'la-la-leora',
      'u-soe-gyi',
    ],
    signatureDishes: ['mohinga', 'shan-noodles', 'mont-hin-gar'],
  },
  {
    id: 'yangon',
    name: 'Yangon',
    description:
      'The former capital and largest city of Myanmar, Yangon is a vibrant metropolis blending colonial-era architecture with bustling street markets and tranquil lakes. It is renowned for its sacred Buddhist sites, especially the golden Shwedagon Pagoda, which dominates the skyline. Visitors can explore a rich tapestry of cultures, diverse cuisine, and a lively arts scene.',
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
    signatureDishes: ['mohinga', 'tea-leaf-salad', 'biryani'],
  },
  {
    id: 'mandalay',
    name: 'Mandalay',
    description:
      'Mandalay, the last royal capital of Myanmar, is a city steeped in history and tradition. It is famous for its ancient palaces, vibrant monasteries, and skilled artisans crafting gold leaf and intricate woodwork. The city offers a gateway to cultural treasures, scenic hills, and the timeless Irrawaddy River.',
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
    signatureDishes: ['nan-gyi-thoke', 'htoe-mont', 'tea-leaf-salad'],
    restaurants: [
      'unique-mandalay-tea-room',
      'bbb-european-restaurant',
      'mingalarbar-restaurants',
      'the-palace-by-golden-duck',
      'karaweik-cafe',
    ],
  },
  {
    id: 'bagan',
    name: 'Bagan',
    description:
      'Bagan is an ancient city in central Myanmar, home to over 2,000 Buddhist temples, pagodas, and stupas that rise majestically from the plains. This UNESCO World Heritage Site offers breathtaking sunrise and sunset views, hot air balloon rides, and a glimpse into the spiritual heart of Myanmar. Its archaeological wonders and serene landscapes make it a must-visit destination.',
    image:
      'https://content.r9cdn.net/rimg/dimg/39/01/de981725-city-41060-167f64bd01e.jpg?crop=true&width=1366&height=768&xhint=1548&yhint=1584',
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
    signatureDishes: [],
    restaurants: [
      'shwe-myanmar-bagan',
      'tharabar-3',
      'zee-yeik-fritters',
      'hnan-phat-chin',
      'sharkys-bagan',
    ],
  },
  {
    id: 'inle-lake',
    name: 'Inle Lake',
    description:
      'Inle Lake is a tranquil freshwater lake in Shan State, famous for its floating villages, lush gardens, and the unique leg-rowing fishermen of the Intha people. The area is rich in biodiversity and traditional crafts, with vibrant markets and stilt-house communities. Visitors can experience serene boat rides, local cuisine, and the region’s distinctive culture.',
    image:
      'https://images.pexels.com/photos/5238583/pexels-photo-5238583.jpeg?auto=compress&cs=tinysrgb&w=1200',
    rating: 4.7,
    region: 'Shan State',
    coordinates: {
      lat: 20.5862,
      lng: 96.9101,
    },
    attractions: [
      'Floating Villages and Gardens',
      'Phaung Daw Oo Pagoda',
      'Indein Pagoda Complex',
      'Traditional Leg Rowing Fishermen',
    ],
    signatureDishes: ['shan-noodles', 'inle-fish-curry', 'tomato-salad'],
  },
  {
    id: 'hpa-an',
    name: 'Hpa-An',
    description:
      'Nestled amid dramatic limestone mountains, Hpa-An is the capital of Kayin State and a haven for nature lovers. The town is surrounded by lush rice paddies, mysterious caves adorned with Buddhist art, and tranquil riverside scenery. Its laid-back atmosphere and stunning landscapes make it a favorite for trekkers and explorers.',
    image:
      'https://t3.ftcdn.net/jpg/01/41/01/00/360_F_141010058_KNn5kstKlcVvhckx8B0wdikQVlbiKI7V.jpg',
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
    signatureDishes: [],
    restaurants: [
      'hpa-an-night-market',
      'cafe-kto',
      'veranda-ycc',
      'naw-ta-yar',
      'eat-me',
    ],
  },
  {
    id: 'ngapali',
    name: 'Ngapali Beach',
    description:
      'Ngapali Beach is Myanmar’s premier coastal retreat, boasting powdery white sands, crystal-clear waters, and swaying coconut palms. The area is perfect for relaxation, water sports, and fresh seafood feasts. Local fishing villages and vibrant sunsets add to the charm of this idyllic beach destination.',
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
      'Ngwe Saung is a serene beach town along the Bay of Bengal, known for its long stretches of white sand and clear turquoise waters. It offers a peaceful escape with opportunities for island hopping, snorkeling, and sunset watching. The laid-back vibe and natural beauty make it a favorite among travelers seeking relaxation.',
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
      'Chaung Tha is a lively beach resort town popular with locals and visitors alike. It features golden sands, gentle waves, and a relaxed, friendly atmosphere. The town is dotted with fishing villages, local markets, and offers a range of water activities for all ages.',
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
      'Taunggyi, the capital of Shan State, sits atop cool highlands and is famous for its vibrant hill tribe culture and annual Tazaungdaing Festival, featuring spectacular hot air balloons. The city is surrounded by scenic vineyards, bustling markets, and ancient pagodas. Its unique blend of traditions and natural beauty attracts visitors year-round.',
    image:
      'https://cdn.prod.website-files.com/62de641ce3132f751e31416e/62de641ce3132f6ca331495e_Fire%20Balloon%201.jpg',
    rating: 4.6,
    region: 'Shan State',
    coordinates: {
      lat: 20.7833,
      lng: 97.0333,
    },
    attractions: [
      'Taunggyi Balloon Festival',
      'Sulamuni Pagoda',
      'Aye Tharyar Vineyard & Winery',
      'Taunggyi Myoma Market',
    ],
    restaurants: [
      'win-restaurant',
      'golden-crown',
      'shwe-myanmar',
      'royal-taunggyi',
    ],
    signatureDishes: [],
  },
  {
    id: 'kalaw',
    name: 'Kalaw',
    description:
      "Kalaw is a charming hill station with a cool climate, pine forests, and colonial-era buildings. It is a trekking paradise, offering scenic routes through ethnic villages and rolling hills. The town's relaxed pace and fresh mountain air make it a perfect retreat for nature lovers.",
    image:
      'https://pohcdn.com/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Kalaw_0.jpg',
    rating: 4.7,
    region: 'Shan State',
    coordinates: {
      lat: 20.6333,
      lng: 96.5667,
    },
    attractions: [
      'Kalaw to Inle Lake Trek',
      'Thein Taung Pagoda and Monastery',
      'Hnee Pagoda',
      'Kalaw Local Market',
    ],
    restaurants: [
      'seven-sisters',
      'thirigayhar',
      'dream-restaurant',
      'everest-nepali',
    ],
    signatureDishes: [],
  },
  {
    id: 'nyaung-shwe',
    name: 'Nyaung Shwe',
    description:
      'Nyaung Shwe is the bustling gateway to Inle Lake, known for its traditional wooden architecture and lively local markets. The town is a hub for boat tours, cycling, and exploring the unique culture of the Intha people. Its welcoming atmosphere and scenic surroundings make it a favorite stop for travelers.',
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
    restaurants: ['live-dim-sum', 'viewpoint', 'lin-htett', 'golden-kite'],
    signatureDishes: [],
  },
  {
    id: 'mawlamyaing',
    name: 'Mawlamyaing',
    description:
      'Mawlamyaing, the fourth-largest city in Myanmar, is set along the Thanlwin River and is known for its colonial architecture and riverside charm. The city features historic pagodas, bustling markets, and scenic islands nearby. Its blend of Mon, Burmese, and colonial influences creates a unique cultural tapestry.',
    image:
      'https://c8.alamy.com/comp/K46JWK/buddhist-pagoda-at-moke-ta-ma-burma-towering-above-mawlamyine-highway-K46JWK.jpg',
    rating: 4.4,
    region: 'Mon State',
    coordinates: {
      lat: 16.4833,
      lng: 97.6167,
    },
    attractions: ['Kyaikthanlan Pagoda', 'Gaungse Kyun', 'Bilu Kyun'],
    signatureDishes: [],
    restaurants: [
      'mawlamyaing-strand-night-market',
      'pyaw-yar-camp',
      'bamboo-hut',
      'doh-yoe-yar',
    ],
  },
];
