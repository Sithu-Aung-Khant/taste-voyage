interface Attraction {
  id: string;
  name: string;
  image: string;
  townId: string;
  description: string;
}

export const attractions: Attraction[] = [
  // Yangon Attractions
  {
    id: 'shwedagon-pagoda',
    name: 'Shwedagon Pagoda',
    image:
      'https://lp-cms-production.imgix.net/2019-06/GettyImages-504376689_super.jpg',
    townId: 'yangon',
    description:
      'The most sacred Buddhist pagoda in Myanmar, Shwedagon Pagoda is a dazzling golden stupa that dominates Yangon’s skyline. It is a spiritual center and a must-visit for its history, architecture, and vibrant atmosphere, especially at sunset.',
  },
  {
    id: 'bogyoke-market',
    name: 'Bogyoke Aung San Market',
    image:
      'https://www.yangongui.de/wp-content/uploads/IMG_2249_edit-1024x683.jpg',
    townId: 'yangon',
    description:
      'A bustling bazaar in the heart of Yangon, Bogyoke Aung San Market is famous for its colonial architecture, handicrafts, jewelry, and local delicacies. It’s the perfect place to experience the city’s vibrant commerce and pick up unique souvenirs.',
  },
  {
    id: 'national-museum',
    name: 'National Museum',
    image:
      'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ygdly62litugr9qmpurl/YangonNationalMuseumTour.jpg',
    townId: 'yangon',
    description:
      'The National Museum of Myanmar houses a rich collection of artifacts, royal regalia, and cultural treasures. It offers a fascinating journey through the country’s history, art, and diverse heritage.',
  },

  // Mandalay Attractions
  {
    id: 'mandalay-hill',
    name: 'Mandalay Hill',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/8/8d/Mandalay_Hill_3.jpg',
    townId: 'mandalay',
    description:
      'Rising above the city, Mandalay Hill offers panoramic views and is a revered pilgrimage site. The climb is lined with pagodas and shrines, making it both a spiritual and scenic experience.',
  },
  {
    id: 'kuthodaw-pagoda',
    name: 'Kuthodaw Pagoda',
    image:
      'https://c8.alamy.com/comp/PYWYHT/aerial-view-of-the-kuthodaw-pagoda-surrounded-by-729-shrines-containing-the-worlds-biggest-book-PYWYHT.jpg',
    townId: 'mandalay',
    description:
      'Known as the world’s largest book, Kuthodaw Pagoda is surrounded by hundreds of marble slabs inscribed with Buddhist scriptures. Its serene grounds and unique history make it a highlight of Mandalay.',
  },
  {
    id: 'u-bein-bridge',
    name: 'U Bein Bridge',
    image:
      'https://www.indochinavoyages.com/wp-content/uploads/2019/12/u_bein_bridge.jpg',
    townId: 'mandalay',
    description:
      'Stretching across Taungthaman Lake, U Bein Bridge is the world’s longest teakwood bridge. It’s especially magical at sunrise and sunset, when locals and monks cross its weathered planks.',
  },
  {
    id: 'mahamuni-buddha',
    name: 'Mahamuni Buddha Temple',
    image:
      'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/events/2020/12/22/38740596-4662-47b4-8b7c-a0b16247cc85-1608644124866-4593e981e24c1109c30a3e114f1202c0.jpg',
    townId: 'mandalay',
    description:
      'One of Myanmar’s most sacred Buddhist sites, the Mahamuni Buddha Temple houses a revered bronze Buddha image. Pilgrims flock here to pay respects and witness the daily face-washing ceremony.',
  },

  // Bagan Attractions
  {
    id: 'ananda-temple',
    name: 'Ananda Temple',
    image: '',
    townId: 'bagan',
    description:
      'Ananda Temple is one of Bagan’s most beautiful and well-preserved temples, known for its stunning architecture and golden spires. Its serene interior houses four massive standing Buddha statues.',
  },
  {
    id: 'shwesandaw-pagoda',
    name: 'Shwesandaw Pagoda',
    image: '',
    townId: 'bagan',
    description:
      'Famous for its sweeping views of the Bagan plains, Shwesandaw Pagoda is a favorite spot for sunrise and sunset. Its tiered terraces offer a breathtaking vantage point over thousands of ancient temples.',
  },
  {
    id: 'dhammayangyi-temple',
    name: 'Dhammayangyi Temple',
    image: '',
    townId: 'bagan',
    description:
      'The largest temple in Bagan, Dhammayangyi is renowned for its massive structure and mysterious history. Its brickwork is considered the finest in Bagan, and legends surround its construction.',
  },
  {
    id: 'bagan-balloons',
    name: 'Hot Air Balloon Rides',
    image: '',
    townId: 'bagan',
    description:
      'Soar above the ancient temples of Bagan in a hot air balloon for a once-in-a-lifetime experience. The breathtaking aerial views at sunrise reveal the full majesty of this archaeological wonder.',
  },

  // Taunggyi Attractions
  {
    id: 'taunggyi-balloon-festival',
    name: 'Taunggyi Balloon Festival',
    image:
      'https://cdn.prod.website-files.com/62de641ce3132f751e31416e/62de641ce3132f6ca331495e_Fire%20Balloon%201.jpg',
    townId: 'taunggyi',
    description:
      "Held in November, featuring massive hot air balloons with fireworks and traditional music. This spectacular festival, also known as the Tazaungdaing Festival, is one of Myanmar's most unique cultural celebrations.",
  },
  {
    id: 'sulamuni-pagoda',
    name: 'Sulamuni Pagoda',
    image: 'https://www.myanmars.net/images/sulamuni_pagoda.jpg',
    townId: 'taunggyi',
    description:
      'A stunning hilltop pagoda offering panoramic views of Taunggyi. The pagoda is a significant religious site and a perfect spot for viewing the city and surrounding Shan hills.',
  },
  {
    id: 'ayetharyar-vineyard',
    name: 'Aye Tharyar Vineyard & Winery',
    image:
      'https://www.myanmar-vineyard.com/sites/default/files/slider-0004.jpg',
    townId: 'taunggyi',
    description:
      'A picturesque vineyard with wine tasting and views over the Shan hills. Visitors can tour the vineyard, learn about local wine production, and enjoy wine tasting sessions with stunning views.',
  },
  {
    id: 'taunggyi-ocean-center',
    name: 'Taunggyi Ocean Center',
    image: 'https://www.opple.com/sites/default/files/1.1_6.jpg',
    townId: 'taunggyi',
    description:
      'A popular shopping and entertainment center in Taunggyi featuring a variety of shops, restaurants, and modern amenities. A great place for locals and travelers to relax and enjoy urban conveniences.',
  },

  // Kalaw Attractions
  {
    id: 'kalaw-inle-trek',
    name: 'Kalaw to Inle Lake Trek',
    image:
      'https://justglobetrotting.com/wp-content/uploads/2016/10/kalaw-inle-lake-trek-myanmar.jpg',
    townId: 'kalaw',
    description:
      'The most popular multi-day trek in Myanmar, through hills, villages, and rice terraces. This scenic trek offers stunning landscapes and opportunities to experience local hill tribe culture.',
  },
  {
    id: 'thein-taung-pagoda',
    name: 'Thein Taung Pagoda and Monastery',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/3d/9c/f2/photo0jpg.jpg?w=1200&h=-1&s=1',
    townId: 'kalaw',
    description:
      'Located on a hill with a panoramic view of Kalaw town. This peaceful monastery complex offers stunning views and a glimpse into Buddhist monastic life.',
  },
  {
    id: 'hnee-pagoda',
    name: 'Hnee Pagoda',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/7f/5b/eb/angolo.jpg?w=1200&h=-1&s=1',
    townId: 'kalaw',
    description:
      'A cave temple with hundreds of golden Buddha images inside. Also known as Shwe Oo Min Natural Cave Pagoda, this unique site combines natural cave formations with religious significance.',
  },

  // Inle Lake Attractions
  {
    id: 'floating-villages',
    name: 'Floating Villages and Gardens',
    image: 'https://images.pexels.com/photos/5238583/pexels-photo-5238583.jpeg',
    townId: 'inle-lake',
    description:
      'Visit stilt-house villages like Ywama or Inthein, with gardens grown on water. Experience the unique lifestyle of the Intha people and their ingenious floating garden cultivation methods.',
  },
  {
    id: 'phaung-daw-oo',
    name: 'Phaung Daw Oo Pagoda',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Phaung_Daw_Oo_Pagoda.jpg/1200px-Phaung_Daw_Oo_Pagoda.jpg',
    townId: 'inle-lake',
    description:
      'One of the most sacred pagodas in Shan State, with 5 revered Buddha images. This important religious site is a center of local spiritual life and annual festivals.',
  },
  {
    id: 'indein-pagoda',
    name: 'Indein Pagoda Complex',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Indein_Pagoda_Complex.jpg/1200px-Indein_Pagoda_Complex.jpg',
    townId: 'inle-lake',
    description:
      "A hidden gem with hundreds of ancient stupas, accessible via a scenic boat ride. This atmospheric complex of weather-worn stupas offers a glimpse into the region's rich history.",
  },
  {
    id: 'leg-rowing-fishermen',
    name: 'Traditional Leg Rowing Fishermen',
    image: 'https://images.pexels.com/photos/6036959/pexels-photo-6036959.jpeg',
    townId: 'inle-lake',
    description:
      "Iconic fishermen who row with one leg while balancing on the other. Watch this unique traditional fishing method that has become a symbol of Inle Lake's cultural heritage.",
  },
];

export const getAttractionsByTownId = (townId: string): Attraction[] => {
  return attractions.filter((attraction) => attraction.townId === townId);
};
