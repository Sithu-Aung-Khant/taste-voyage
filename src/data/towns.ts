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
      'Dawei, the southern jewel of Myanmar, is a city where time seems to slow down, offering a peaceful retreat from the hectic pace of modern life. Surrounded by emerald hills and the sparkling waters of the Andaman Sea, it is a place where natural beauty and cultural heritage coexist in harmony. The city’s streets are lined with traditional wooden houses, vibrant local markets, and ancient pagodas that tell stories of centuries past. Dawei is also famed for its golden beaches and quiet coastal villages, where fresh seafood and warm smiles welcome visitors. Whether wandering through lush landscapes, exploring hidden temples, or enjoying the serene coastline, Dawei captivates travelers with its tranquil charm and authentic Myanmar spirit.',
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
    signatureDishes: ['kat-kyi-kaik', 'seafood-curry'],
  },
  {
    id: 'kawthaung',
    name: 'Kawthaung',
    description:
      'Kawthaung, Myanmar’s southernmost town, is a captivating gateway to the Andaman Sea where nature, culture, and history intertwine. Perched on the border with Thailand, the town is a lively hub of trade and travel, yet it preserves a laid-back charm that reflects the slow rhythm of life in southern Myanmar. Lush tropical forests and winding rivers embrace the town, while golden beaches and nearby islands invite travelers to explore serene coastal escapes. Its bustling markets brim with fresh seafood, local produce, and handmade crafts, giving a glimpse into the daily life and traditions of the people. Kawthaung is not just a border town—it is a place of contrasts, where vibrant human activity meets tranquil natural beauty, leaving every visitor with a lasting impression of Myanmar’s southernmost wonders.',
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
    signatureDishes: ['seafood-curry', 'grilled-fish'],
  },
  {
    id: 'myeik',
    name: 'Myeik',
    description:
      'Myeik, often called the gateway to the Myeik Archipelago, is a coastal city in southern Myanmar where history, culture, and nature converge. The city’s streets are lined with colonial-era buildings, vibrant markets, and traditional wooden houses that echo the charm of its past. Myeik is surrounded by lush hills, winding rivers, and the turquoise waters of the Andaman Sea, offering both scenic beauty and abundant marine life. From bustling local markets filled with fresh seafood to serene coastal villages and nearby islands, Myeik is a place of contrasts—alive with energy yet effortlessly tranquil. Travelers can explore hidden temples, watch traditional fishing communities at work, or take boat trips to countless islands, each offering untouched beaches and natural splendor. Myeik captures the essence of southern Myanmar, blending culture, history, and nature into a destination full of discovery.',
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
    signatureDishes: ['seafood-curry', 'grilled-fish', 'kat-kyi-kaik'],
  },
  {
    id: 'nay-pyi-daw',
    name: 'Nay Pyi Daw',
    description:
      'Nay Pyi Daw, Myanmar’s sprawling modern capital, is a city of wide boulevards, landscaped gardens, and monumental government buildings. Designed with meticulous planning, it offers a sense of calm and order rarely found in bustling cities, making it a striking contrast to Myanmar’s historic towns. Beyond its administrative significance, Nay Pyi Taw is home to cultural and spiritual landmarks like Uppatasanti Pagoda and Maravijaya Buddha, as well as serene retreats such as the Water Fountain Garden and National Landmark Garden. With its blend of contemporary design, natural beauty, and cultural heritage, the city presents a unique experience for visitors seeking both modernity and tradition.',
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
      'cafe-dibar',
      'u-soe-gyi',
    ],
    signatureDishes: ['mohinga', 'bambooshoot'],
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
    image:
      'https://media02.stockfood.com/largepreviews/MjIwMzQyODQ0Nw==/71078337-Mandalay-City-Fort-and-Palace-reflected-in-the-moat-surrrounding-the-compound-at-night-Mandalay-Myanmar-Burma.jpg',
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
    signatureDishes: [
      'nan-gyi-thoke',
      'htoe-mont',
      'tea-leaf-salad',
      'mee-shay',
    ],
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
    signatureDishes: ['burmese-curry', 'palm-wine'],
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
      'Inle Lake, located in the heart of the Shan Hills, is one of Myanmar’s most enchanting destinations. Famous for its floating gardens, stilted villages, and the unique leg-rowing fishermen, the lake offers a glimpse into a way of life that has remained unchanged for centuries. Local communities cultivate vegetables and flowers directly on the water, while colorful markets and temples thrive along the shores. Visitors can explore the lake by traditional wooden boats, witnessing artisans crafting silverware, weaving silk, and preparing local delicacies. Misty mornings, calm waters, and vibrant local culture create a magical atmosphere, making Inle Lake a perfect blend of natural beauty, tradition, and serenity.',
    image: 'https://inledaytours.com/wp-content/uploads/2015/11/slide-1.jpg',
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
    signatureDishes: ['shan-noodles', 'inle-fish-curry', 'yellow-rice'],
  },
  {
    id: 'hpa-an',
    name: 'Hpa-An',
    description:
      'Hpa-An, the peaceful capital of Kayin State, is a city where striking natural beauty and rich cultural heritage come together in perfect harmony. Cradled by the Thanlwin River and surrounded by towering limestone mountains, Hpa-An offers travelers a stunning backdrop of emerald hills and winding waterways. The city is scattered with ancient pagodas, vibrant local markets, and charming wooden houses that reflect its deep-rooted traditions. Iconic natural attractions like Mount Zwekabin, Sadan Cave, and Kawgun Cave reveal dramatic landscapes, hidden shrines, and centuries-old Buddhist carvings, creating a sense of wonder for every visitor. Life in Hpa-An flows at a gentle, calming pace—riverside strolls, lush rice paddies, and interactions with welcoming local communities immerse travelers in an authentic Burmese experience. From tranquil mornings along the river to breathtaking sunsets over the mountains, Hpa-An captivates all who visit, leaving an unforgettable impression of Myanmar’s serene southern heartland.',
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
    signatureDishes: ['talabaw'],
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
      'Taunggyi, the lively capital of Shan State, rests high in the mountains, offering a refreshing climate and sweeping views of rolling hills. Unlike many cities in Myanmar, it feels both modern and traditional—bustling markets sit alongside serene pagodas, while quiet neighborhoods are framed by pine trees and misty ridges. The city is famous for its colorful Tazaungdaing Balloon Festival, when hot-air balloons carrying fireworks light up the night sky in a dazzling spectacle. Taunggyi also serves as a cultural hub, home to diverse ethnic groups such as Shan, Pa-O, and Intha, each adding their own traditions, cuisines, and festivals to the city’s character. With its cool weather, vibrant local life, and easy access to attractions like Inle Lake and nearby caves, Taunggyi is more than a hill station—it’s a city where nature, culture, and celebration blend together beautifully.',
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
    signatureDishes: ['shan-noodles', 'tofu-nway', 'yellow-rice'],
  },
  {
    id: 'kalaw',
    name: 'Kalaw',
    description:
      'Kalaw, a charming hill town in Shan State, is known for its cool mountain air, pine forests, and colonial-era ambiance. Once a British hill station, the town still carries traces of old-world charm with its quaint houses, flower gardens, and quiet streets. Kalaw is especially famous as a trekking paradise travelers set out on scenic trails that wind through green hills, tea plantations, and remote ethnic villages of the Pa-O, Danu, and Taung Yo communities. The town’s lively morning market offers fresh produce and local crafts, giving visitors a taste of authentic daily life. Beyond trekking, Kalaw enchants with its peaceful monasteries, caves filled with Buddha images, and the laid-back rhythm of a town surrounded by natural beauty. Often seen as a gateway to Inle Lake, Kalaw is more than just a stopover it is a refreshing retreat where culture and nature meet in harmony.',
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
      'maluca-villa',
      'kalaw-cafeyard',
      'sky-house',
      'thu-maung',
      'kalaw-market',
    ],
    signatureDishes: ['shan-noodles', 'tofu-nway', 'local-coffee'],
  },
  {
    id: 'nyaung-shwe',
    name: 'Nyaung Shwe',
    description:
      'Nyaung Shwe, the lively gateway to Inle Lake, is a town that beautifully blends tradition with modern charm. It is the main hub where travelers begin their journey to the famous lake, yet the town itself has much to offer. Bustling canals lined with boats, narrow streets filled with cozy guesthouses, teahouses, and colorful markets create an inviting atmosphere. Visitors can explore historic monasteries such as Yadana Man Aung Pagoda and Shwe Yan Pyay Monastery, known for its unique oval windows and red teakwood structure. The town is also home to vibrant local markets where ethnic groups like the Pa-O and Shan come to trade fresh produce, handicrafts, and traditional textiles. Cycling around Nyaung Shwe reveals hidden vineyards, peaceful countryside views, and glimpses of daily village life. With its relaxed energy, cultural richness, and convenient access to Inle, Nyaung Shwe is more than just a starting point—it is a destination worth savoring on its own.',
    image: 'https://kite-tales.org/files/uploads/haw.jpg',
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
    restaurants: [
      'pwe-taw-win',
      'mann-mann-rooftop',
      'thanakha-garden',
      'golden-kite',
    ],
    signatureDishes: ['inle-fish-curry', 'yellow-rice', 'shan-noodles'],
  },
  {
    id: 'Kyauk-se',
    name: 'Kyaukse',
    description:
      'Kyaukse, nestled in central Myanmar, is a city where history and culture blend seamlessly. Known as the birthplace of Myanmar’s famous pagodas, it is dotted with ancient stupas and temples that tell tales of a rich heritage. The city comes alive during the annual Elephant Pagoda Festival, where locals and visitors celebrate with vibrant processions, traditional rituals, and colorful decorations. Beyond its historic charm, Kyaukse is a hub of local life, with bustling markets, friendly communities, and scenic landscapes of surrounding fields and hills. Its unique blend of spiritual significance, cultural festivities, and everyday warmth makes Kyaukse a memorable destination for travelers seeking both history and authenticity.',
    image:
      'https://www.shutterstock.com/image-photo/sunset-view-kyaukse-townmandalaymyanmarasia-260nw-1230259012.jpg',
    rating: 4.1,
    region: 'Mandalay Region',
    coordinates: {
      lat: 20.7333,
      lng: 96.1167,
    },
    attractions: [
      'Mahar Shwe Theindaw Buddhist Temple',
      'Tamote Shinbin Shwegu',
      'Mahar Shwe Theindaw Buddhist Temple',
      'Sin Gaung Taung',
    ],
    restaurants: ['daw-mya-chit', 'htun-thitsa', 'kyar-pauk'],
    signatureDishes: ['phat-htamin', 'pratha'],
  },
  {
    id: 'mawlamyaing',
    name: 'Mawlamyaing',
    description:
      'Mawlamyaing, the charming capital of Mon State, is a riverside city that beautifully weaves together history, culture, and natural scenery. Once an important colonial trading port, the city still preserves its heritage in the form of old churches, mosques, and colonial-era buildings that line its streets, standing gracefully alongside bustling markets and gilded pagodas. Set against the backdrop of the Thanlwin River and rolling green hills, Mawlamyaing is renowned for its breathtaking sunsets—scenes so captivating they inspired poets and writers like Rudyard Kipling. Beyond its urban charm, the city serves as a gateway to unique experiences such as exploring limestone caves filled with Buddha images, visiting quiet islands scattered along the river, and discovering Mon traditions that have shaped the region for centuries. With its blend of cultural diversity, historical significance, and stunning natural landscapes, Mawlamyaing offers travelers a journey into the timeless spirit of southern Myanmar.',
    image:
      'https://t3.ftcdn.net/jpg/01/11/67/46/240_F_111674657_xksnWF95QW8FUL7Q9y5Jhb7pWK4glokZ.jpg',
    rating: 4.4,
    region: 'Mon State',
    coordinates: {
      lat: 16.4833,
      lng: 97.6167,
    },
    attractions: ['Kyaikthanlan Pagoda', 'Gaungse Kyun', 'Bilu Kyun'],
    signatureDishes: ['mohinga', 'thingyan-rice', 'hsi-htamin'],
    restaurants: [
      'mawlamyaing-strand-night-market',
      'pyaw-yar-camp',
      'bamboo-hut',
      'doh-yoe-yar',
    ],
  },
  {
    id: 'tachileik',
    name: 'Tachileik',
    description:
      "Tachileik, a vibrant border town in eastern Myanmar, serves as a gateway between Myanmar and Thailand, offering a unique blend of cultures and cuisines. Located in the heart of the Golden Triangle region, the town is known for its bustling markets, diverse ethnic communities, and stunning mountain scenery. Visitors can explore traditional Shan architecture, visit local temples, and experience the rich cultural heritage of the region. The town's strategic location makes it a hub for trade and cultural exchange, with influences from both Myanmar and Thailand evident in its food, language, and customs. Tachileik offers travelers an authentic glimpse into border town life while providing access to the natural beauty and cultural richness of eastern Myanmar.",
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Tachileik_Myanmar.jpg/1200px-Tachileik_Myanmar.jpg',
    rating: 4.3,
    region: 'Shan State',
    coordinates: {
      lat: 20.4475,
      lng: 99.8808,
    },
    attractions: [
      'Border Market',
      'Shan Temples',
      'Mountain Views',
      'Cultural Villages',
    ],
    restaurants: [
      'vela-varee',
      'sora-cafe',
      'akha-zone-cafe',
      'tachileik-night-market',
    ],
    signatureDishes: ['shan-noodles', 'thai-curry', 'akha-traditional-food'],
  },
  {
    id: 'kengtung',
    name: 'Keng Tung',
    description:
      "Keng Tung, a historic city in eastern Shan State, is known for its rich cultural heritage, diverse ethnic communities, and stunning natural landscapes. The city is home to various ethnic groups including Shan, Akha, Lahu, and Wa, each contributing to its vibrant cultural tapestry. Keng Tung features traditional Shan architecture, ancient temples, and bustling markets where local crafts and produce are traded. The surrounding mountains and valleys offer opportunities for trekking and exploring remote ethnic villages. The city's unique location and cultural diversity make it a fascinating destination for travelers interested in experiencing the authentic culture and traditions of eastern Myanmar.",
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Kengtung_Myanmar.jpg/1200px-Kengtung_Myanmar.jpg',
    rating: 4.4,
    region: 'Shan State',
    coordinates: {
      lat: 21.2833,
      lng: 99.6167,
    },
    attractions: [
      'Traditional Markets',
      'Ethnic Villages',
      'Mountain Trekking',
      'Cultural Heritage Sites',
    ],
    restaurants: [
      'i-visit-keng-tung',
      'golden-orchid-cafe',
      'naung-lay-fish-pond',
    ],
    signatureDishes: ['shan-noodles', 'ethnic-traditional-food', 'fresh-fish'],
  },
];
