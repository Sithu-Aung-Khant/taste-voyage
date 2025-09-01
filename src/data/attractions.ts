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
 
   {
    id: 'mandalay-zay-cho',
    name: 'Mandalay ZayCho',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsj0Try8JoQNz2lJ1W4gIdr1NuSoMow3_Heg&s',
    townId: 'mandalay',
    description:
      'Mandalay ZayCho is the city’s largest and most vibrant market, offering everything from local foods and fresh produce to traditional crafts and textiles.',
  },
  {
    id: 'mandalay-palace-moat',
    name: 'Mandalay Palace Moat',
    image:
      'https://thumbs.dreamstime.com/b/night-view-mandalay-palace-myanmar-located-burma-211670887.jpg',
    townId: 'mandalay',
    description:
      'Mandalay Palace Moat, with its calm waters and striking red palace walls, surrounds the Mandalay Royal Palace and offers one of the city’s most iconic scenic views.',
  },

  // Bagan Attractions
  {
    id: 'ananda-temple',
    name: 'Ananda Temple',
    image:
      'https://evivatour.com/wp-content/uploads/2021/09/Ananda-Temple-in-Bagan-1000x565.jpg',
    townId: 'bagan',
    description:
      'Ananda Temple is one of Bagan’s most beautiful and well-preserved temples, known for its stunning architecture and golden spires. Its serene interior houses four massive standing Buddha statues.',
  },
  {
    id: 'shwesandaw-pagoda',
    name: 'Shwesandaw Pagoda',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHaOp1PQnVigRtndssIpkdOvPWy3cLbuiRyg&s',
    townId: 'bagan',
    description:
      'Famous for its sweeping views of the Bagan plains, Shwesandaw Pagoda is a favorite spot for sunrise and sunset. Its tiered terraces offer a breathtaking vantage point over thousands of ancient temples.',
  },
  {
    id: 'dhammayangyi-temple',
    name: 'Dhammayangyi Temple',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a5/76/20/templo.jpg?w=1200&h=-1&s=1',
    townId: 'bagan',
    description:
      'The largest temple in Bagan, Dhammayangyi is renowned for its massive structure and mysterious history. Its brickwork is considered the finest in Bagan, and legends surround its construction.',
  },
  {
    id: 'bagan-balloons',
    name: 'Hot Air Balloon Rides',
    image:
      'https://media.worldnomads.com/Explore/myanmar/oriental-balloon-bagan-emma-balmforth.jpg',
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
    id: 'htam-sam-cave',
    name: 'Htam Sam Cave',
    image: 'https://www.tmtmtour.com/wp-content/uploads/2019/05/Htam-Sam-Cave-1.jpg',
    townId: 'taunggyi',
    description:
      'Htam Sam Cave is a stunning limestone cave in Shan State, famous for its countless Buddha images, natural rock formations, and peaceful atmosphere.',
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
  {
    id: 'kalaw-view-point',
    name: 'Kalaw View Point',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiE00VKH8Zd7zio-yme8hriSIb0iEka2B1EQ&s',
    townId: 'kalaw',
    description:
      'Kalaw Viewpoint is a must-visit spot for nature lovers, offering sweeping views of Shan State’s rolling hills, green valleys, and traditional farmlands. A perfect place to enjoy sunrise or sunset while experiencing Kalaw’s peaceful charm.',
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

  // Nyaung Shwe Attractions
  {
    id: 'inle-lake-access',
    name: 'Inle Lake Access',
    image:
      'https://images.squarespace-cdn.com/content/v1/59f99a190abd04b6b179d4f6/1562163148945-L3ADO2IULEKODE5P8LFB/inle-lake-fishermen-istock.jpg?format=1500w',
    townId: 'nyaung-shwe',
    description:
      "The main gateway to the stunning Inle Lake, offering boat services, guides, and stunning views of the lake. Perfect starting point for exploring the lake's unique ecosystem and culture.",
  },
  {
    id: 'nyaung-shwe-market',
    name: 'Local Markets',
    image:
      'https://www.myanmaritv.com/sites/default/files/styles/news_detail_image/public/vlcsnap-2021-12-20-12h44m14s136.jpg?itok=Q3q1RBLW&c=6507c45fa1b506ecf24c1c258aab190f',
    townId: 'nyaung-shwe',
    description:
      'Vibrant local markets where visitors can experience authentic Shan culture, fresh produce, traditional crafts, and local delicacies. The five-day rotating market is particularly special.',
  },
  {
    id: 'boat-tours',
    name: 'Boat Tours',
    image:
      'https://theelevatedmoments.com/wp-content/uploads/2020/02/A63I8560.jpg',
    townId: 'nyaung-shwe',
    description:
      'Comprehensive boat tours departing from Nyaung Shwe, taking visitors to floating gardens, local craft workshops, ancient pagodas, and traditional villages around Inle Lake.',
  },
  {
    id: 'red-mountain-estate',
    name: 'Red Mountain Estate Vineyards & Winery',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/9e/66/f8/wine-tasting-mir-erdnusschen.jpg?w=2000&h=-1&s=1',
    townId: 'nyaung-shwe',
    description:
      'A scenic vineyard and winery nestled in the hills near Nyaung Shwe, offering wine tastings, tours, and panoramic views of Inle Lake. Red Mountain Estate is renowned for its locally produced wines and is a perfect spot to relax and enjoy a sunset over the vineyards.',
  },

  // Pyin Oo Lwin Attractions
  {
    id: 'national-kandawgyi-gardens',
    name: 'National Kandawgyi Gardens',
    image: 'https://www.myanmars.net/images/nationalkandawgyi1.jpg',
    townId: 'pyin-oo-lwin',
    description:
      "A stunning 437-acre botanical garden featuring rare orchids, exotic plants, and beautiful walking paths. The gardens showcase Myanmar's rich biodiversity and offer a peaceful retreat with colonial-era architecture and scenic viewpoints.",
  },
  {
    id: 'pwe-kauk-falls',
    name: 'Pwe Kauk Falls',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/c9/0a/4f/water-falls.jpg?w=900&h=500&s=1',
    townId: 'pyin-oo-lwin',
    description:
      "A picturesque waterfall surrounded by lush greenery, perfect for nature walks and photography. The falls are especially beautiful during the rainy season and offer a refreshing escape from the town's heat.",
  },
  {
    id: 'chinese-temple',
    name: 'Chinese Temple',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chinese_Temple_%40_Pyin_Oo_Lwin_%2814210634862%29.jpg/2560px-Chinese_Temple_%40_Pyin_Oo_Lwin_%2814210634862%29.jpg',
    townId: 'pyin-oo-lwin',
    description:
      "A beautiful Chinese temple showcasing the town's multicultural heritage. The temple features traditional Chinese architecture, intricate carvings, and offers insights into the Chinese community's history in Pyin Oo Lwin.",
  },
  {
    id: 'peik-chin-myaung-cave',
    name: 'Peik Chin Myaung Cave',
    image:
      'https://www.myanmartours.us/wp-content/uploads/Peik-Chin-Myaung-Cave-Pyin-Oo-Lwin-Myanmar.jpg',
    townId: 'pyin-oo-lwin',
    description:
      'A fascinating limestone cave system with Buddhist shrines and natural rock formations. The cave is a spiritual site and natural wonder, offering visitors a unique underground experience with guided tours available.',
  },

  // Hpa-an Attractions
  {
    id: 'mount-zwegabin',
    name: 'Mount Zwegabin',
    image:
      'https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/07/01/87b17d566d5bf3c5f72d1a06d362f4eb_1000x1000.jpg',
    townId: 'hpa-an',
    description:
      "A dramatic limestone mountain that dominates Hpa-an's skyline, Mount Zwegabin offers challenging hiking trails and breathtaking panoramic views of the surrounding countryside. The summit provides spectacular vistas of the Kayin State landscape.",
  },
  {
    id: 'kyauk-ka-lat-pagoda',
    name: 'Kyauk Ka Lat Pagoda',
    image:
      'https://cache3.travelfish.org/b/assets/2015/gallery/thumbR/gallery_sight_thumbR_652_1466747563.jpg',
    townId: 'hpa-an',
    description:
      "A stunning pagoda perched on a limestone pinnacle rising from a lake, Kyauk Ka Lat Pagoda is one of Myanmar's most photogenic religious sites. The golden pagoda against the dramatic rock formation creates a magical scene.",
  },
  {
    id: 'sadan-cave',
    name: 'Sadan Cave',
    image:
      'https://www.alittleofftrack.com/wp-content/uploads/2020/09/GOPR0667.jpg',
    townId: 'hpa-an',
    description:
      'A magnificent cave system featuring Buddhist shrines, stalactites, and underground chambers. Sadan Cave is known for its impressive natural formations and religious significance, offering visitors a unique underground exploration experience.',
  },
  {
    id: 'lumbini-garden',
    name: 'Lumbini Garden',
    image:
      'https://cache2.travelfish.org/b/assets/2015/gallery/thumbR/gallery_sight_thumbR_652_1464054556.jpg',
    townId: 'hpa-an',
    description:
      'A peaceful garden complex featuring replicas of famous Buddhist sites from around the world. Lumbini Garden offers a serene setting for meditation and reflection, with beautiful landscaping and religious monuments.',
  },

  // Mawlamyaing Attractions
  {
    id: 'kyaikthanlan-pagoda',
    name: 'Kyaikthanlan Pagoda',
    image:
      'https://t4.ftcdn.net/jpg/01/85/03/33/360_F_185033311_c2ydlUML5rvBqDhAPSc0cGmowM90ITgk.jpg',
    townId: 'mawlamyaing',
    description:
      'Perched on a hill overlooking the city and Thanlwin River, Kyaikthanlan Pagoda is Mawlamyaing’s most prominent landmark, famed for sunset views and peaceful surroundings.',
  },
  {
    id: 'gaungse-kyun',
    name: 'Gaungse Kyun (Shampoo Island)',
    image:
      'https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/07/01/437fbc2c306b2dd066a559b1fdb82822_1000x1000.jpg',
    townId: 'mawlamyaing',
    description:
      'A small scenic island in the Thanlwin River with monasteries and shrines. Historically used by royalty for hair-washing ceremonies, it offers tranquil river views and a short boat trip from town.',
  },
  {
    id: 'bilu-kyun',
    name: 'Bilu Kyun (Ogre Island)',
    image:
      'https://i0.wp.com/openroadbeforeme.com/wp-content/uploads/2012/08/P1030356.jpg?fit=1200%2C900&ssl=1&resize=350%2C200',
    townId: 'mawlamyaing',
    description:
      'A large island known for traditional craft villages producing rubber bands, slate boards, and walking sticks. A day trip here offers insight into local Mon culture and rural life.',
  },

  // Dawei Attractions
  {
    id: 'maungmagan-beach',
    name: 'Maungmagan Beach',
    image:
      'https://www.go-myanmar.com/sites/go-myanmar.com/files/uploads/moscos_islands_0.jpg',
    townId: 'dawei',
    description:
      "A pristine beach with golden sand and clear waters, perfect for swimming and relaxation. Maungmagan Beach is one of Myanmar's most beautiful coastal destinations, offering a peaceful escape from city life.",
  },
  {
    id: 'dawei-central-market',
    name: 'Dawei Central Market',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkTBwpKbsrvUYrLEM77GHKBk4IlP3svWPrRQ&s',
    townId: 'dawei',
    description:
      'A bustling local market where visitors can experience authentic Dawei culture, sample local delicacies, and purchase traditional crafts. The market is a vibrant hub of local commerce and community life.',
  },
  {
    id: 'shin-koe-shin-pagoda',
    name: 'Shin Koe Shin Pagoda',
    image:
      'https://cdn.prod.website-files.com/62de641ce3132f751e31416e/62de641ce3132f7647314c8a_SBLvKoFjTVitGM1IWwTnLE3EeKtJrw7ovkRE5mJu8EtWktBTTyV1nE3tgETQTv07Mo2XwWEdYfbasCAX0DNySNHFTDcpTbeYfz5zpJi7HoDhDLk4USqPYb90Lh8uNHGCM2hu3qiLzvX3PUvTUw.jpeg',
    townId: 'dawei',
    description:
      'A historic pagoda complex with beautiful architecture and serene surroundings. Shin Koe Shin Pagoda is an important religious site that offers visitors a peaceful retreat and insight into local Buddhist traditions.',
  },

  // Kawthaung Attractions
  {
    id: 'victoria-point',
    name: 'Victoria Point',
    image: 'https://www.myanmars.net/images/victoria_point.jpg',
    townId: 'kawthaung',
    description:
      'Victoria Point is the southernmost tip of Myanmar, offering stunning panoramic views of the Andaman Sea and the border with Thailand. This iconic landmark provides breathtaking sunset views and is a perfect spot for photography and relaxation.',
  },
  {
    id: 'pyi-daw-aye-pagoda',
    name: 'Pyi Daw Aye Pagoda',
    image:
      'https://i0.wp.com/globerovers.com/wp-content/uploads/2019/04/Myanmar-Pyi-Daw-Aye-Pagoda-Kawthaung.jpg',
    townId: 'kawthaung',
    description:
      'A beautiful hilltop pagoda offering panoramic views of Kawthaung and the surrounding Andaman Sea. The pagoda is a peaceful spiritual site where visitors can enjoy stunning vistas and experience local Buddhist culture.',
  },
  {
    id: 'king-bayint-naung-statue',
    name: 'King Bayint Naung Statue',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm89UeV2bl7cRc0ImxXGr_TMPcOwN--sfKBg&s',
    townId: 'kawthaung',
    description:
      "A majestic statue honoring King Bayint Naung, one of Myanmar's most revered historical figures. The monument stands as a symbol of national pride and offers visitors insight into Myanmar's rich royal history and cultural heritage.",
  },
  {
    id: 'mergui-archipelago',
    name: 'Mergui Archipelago',
    image:
      'https://b-cdn.springnest.com/media/img/td/mergui-archipelagode68eae.jpg?crop=2000%2C1110%2C0%2C71&width=620',
    townId: 'kawthaung',
    description:
      'A pristine archipelago of over 800 islands in the Andaman Sea, accessible from Kawthaung. The Mergui Archipelago offers world-class diving, pristine beaches, and untouched natural beauty, making it a paradise for adventure seekers and nature lovers.',
  },

  // Myeik Attractions
  {
    id: 'pearl-farms',
    name: 'Pearl Farms',
    image:
      'https://cdn.digitalagencybangkok.com/file/client-cdn/gnlm/wp-content/uploads/2024/04/PHY0WlEq-p6-second.jpg',
    townId: 'myeik',
    description:
      'Visit traditional pearl farms where you can learn about the ancient art of pearl cultivation. Myeik is famous for its high-quality pearls, and these farms offer fascinating insights into the pearl industry and opportunities to purchase authentic Myanmar pearls.',
  },
  {
    id: 'myeik-archipelago',
    name: 'Myeik Archipelago',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-I2Q2eZ-OJcAIsixTh9TDCkMT5iEBySoqyg&s',
    townId: 'myeik',
    description:
      'A stunning collection of over 800 pristine islands in the Andaman Sea, accessible from Myeik. The archipelago offers world-class diving, untouched beaches, and incredible marine biodiversity, making it a paradise for divers and nature enthusiasts.',
  },
  {
    id: 'myeik-night-market',
    name: 'Myeik Night Market',
    image:
      'https://i.ytimg.com/vi/iSc79BVYnok/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgQChNMA8=&rs=AOn4CLCHlnLS1R7Y8V86cOZa9nxIB3yaQQ',
    townId: 'myeik',
    description:
      "A vibrant night market where locals and visitors gather to enjoy fresh seafood, local delicacies, and traditional snacks. The market comes alive in the evening with the aroma of grilled fish, spicy curries, and the lively atmosphere of Myeik's food culture.",
  },
];

export const getAttractionsByTownId = (townId: string): Attraction[] => {
  return attractions.filter((attraction) => attraction.townId === townId);
};
