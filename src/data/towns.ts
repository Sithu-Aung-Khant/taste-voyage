import { Town } from '../types';

export const towns: Town[] = [
  {
    id: 'pyin-oo-lwin',
    name: 'Pyin Oo Lwin',
    description:
      'Pyin Oo Lwin, a charming hill town in Myanmar, is famed for its cool climate, colonial-era architecture, and vibrant botanical gardens. Once a summer retreat for British officials, the town blends history with natural beauty, featuring flower-filled parks, cascading waterfalls, and scenic viewpoints. Pyin Oo Lwin is also known for its local strawberry farms, bustling markets, and cultural festivals, offering visitors a peaceful yet lively escape from the lowland heat. Its unique combination of heritage, nature, and local charm makes it a must-visit destination in the Shan Highlands.',
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
      "Nay Pyi Daw, Myanmar’s sprawling modern capital, is a city of wide boulevards, landscaped gardens, and monumental government buildings. Designed with meticulous planning, it offers a sense of calm and order rarely found in bustling cities, making it a striking contrast to Myanmar’s historic towns. Beyond its administrative significance, Nay Pyi Taw is home to cultural and spiritual landmarks like Uppatasanti Pagoda and Maravijaya Buddha, as well as serene retreats such as the Water Fountain Garden and National Landmark Garden. With its blend of contemporary design, natural beauty, and cultural heritage, the city presents a unique experience for visitors seeking both modernity and tradition.",
    image:
      'https://blog.bangkokair.com/wp-content/uploads/2019/05/Pyidaungsu-Hluttaw.jpg',
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
      'Yangon, the former capital and the largest city of Myanmar, stands as a vibrant and dynamic metropolis that reflects the country’s cultural and historical richness. The city is known for its unique blend of colonial-era architecture, modern developments, and traditional influences, which create a striking urban landscape. Its bustling street markets offer an authentic glimpse into local life, with colorful stalls selling fresh produce, handmade crafts, and traditional snacks. Tranquil lakes and green parks provide refreshing escapes from the busy streets, adding to the city’s charm. At the heart of Yangon’s identity is its spiritual heritage, highlighted by the magnificent Shwedagon Pagoda, a golden stupa that rises majestically over the skyline and serves as one of the most sacred Buddhist sites in the world. Beyond its religious landmarks, Yangon presents a rich tapestry of cultures shaped by diverse communities, offering visitors the chance to explore an array of cuisines, from traditional Burmese dishes to international flavors. The city also boasts a lively arts and cultural scene, with galleries, theaters, and music events that showcase Myanmar’s evolving creativity.',
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
    signatureDishes: ['mohinga', 'Burmese-pork-offal-skewers', 'biryani'],
  },
  {
    id: 'mandalay',
    name: 'Mandalay',
    description:
      'Mandalay, the last royal capital of Myanmar, is a city where tradition and modern life beautifully intertwine. Known as the cultural heart of the country, it is home to majestic monasteries, intricate teakwood architecture, and the famed Mandalay Palace. The city holds a deep spiritual aura, with thousands of monks residing in its monasteries and the revered Mahamuni Pagoda drawing daily worshippers. Beyond its history, Mandalay thrives with craftsmanship—gold leaf making, silk weaving, and stone carving remain part of its living heritage. From the panoramic sunset at Mandalay Hill to the timeless beauty of U Bein Bridge, the world’s longest teak bridge, the city offers a journey through history, culture, and local life. Its unique blend of royal legacy and vibrant tradition makes Mandalay an unforgettable destination in Myanmar.',
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
    signatureDishes: ['nan-gyi-thoke', 'htoe-mont', 'tea-leaf-salad','mee-shay'],
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
      'Bagan, the ancient capital of Myanmar, is a breathtaking archaeological wonder dotted with thousands of temples and pagodas rising across the plains. Once the heart of a powerful kingdom, it remains a spiritual and cultural treasure, where history lingers in every brick and stupa. Visitors are enchanted by its golden sunrises and sunsets, casting a magical glow over the endless temple landscape. Beyond its iconic skyline, Bagan offers vibrant local markets, traditional lacquerware crafts, and a glimpse into the daily rhythms of rural life. With its rare combination of history, spirituality, and timeless beauty, Bagan stands as one of the most unique and unforgettable destinations in the world.',
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
    signatureDishes: ['burmese-curry'],
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
      'https://inledaytours.com/wp-content/uploads/2015/11/slide-1.jpg',
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
      'https://kite-tales.org/files/uploads/haw.jpg',
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
    restaurants: ['pwe-taw-win', 'mann-mann-rooftop', 'thanakha-garden', 'golden-kite'],
    signatureDishes: [],
  },
  {
    id: 'Kyauk-se',
    name: 'Kyaukse',
    description:
      'Kyaukse, nestled in central Myanmar, is a city where history and culture blend seamlessly. Known as the birthplace of Myanmar’s famous pagodas, it is dotted with ancient stupas and temples that tell tales of a rich heritage. The city comes alive during the annual Elephant Pagoda Festival, where locals and visitors celebrate with vibrant processions, traditional rituals, and colorful decorations. Beyond its historic charm, Kyaukse is a hub of local life, with bustling markets, friendly communities, and scenic landscapes of surrounding fields and hills. Its unique blend of spiritual significance, cultural festivities, and everyday warmth makes Kyaukse a memorable destination for travelers seeking both history and authenticity.',
    image:
      'https://www.shutterstock.com/image-photo/gorgeous-dramatic-sunrise-mandalay-hill-260nw-386376520.jpg',
    rating: 4.1,
    region: 'Mandalay Region',
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
    restaurants: ['pwe-taw-win', 'mann-mann-rooftop', 'thanakha-garden', 'golden-kite'],
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
