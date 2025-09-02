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
    id: 'kandawgyi-lake',
    name: 'Kandawgyi Lake',
    image:
      'data:image/jpeg;base64,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',
    townId: 'yangon',
    description:
      'Kandawgyi Lake is Yangon’s serene escape, where gardens meet shimmering waters and the Karaweik Palace floats like a golden dream.',
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
  {
    id: 'inya-lake',
    name: 'Inya Lake',
    image:
      'data:image/jpeg;base64,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',
    townId: 'yangon',
    description:
      'Inya Lake, the largest lake in Yangon, is a peaceful retreat surrounded by trees and open spaces. Its calm waters and scenic shores make it ideal for leisurely walks, jogging, or simply enjoying the sunset',
  },
  {
    id: 'the-secretariat-yangon',
    name: 'The Secretariar Yangon',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXBugqjiQalaZL40l1xwMYJBBfh5faAkj7ag&s',
    townId: 'yangon',
    description:
      'The Secretariat in Yangon is a historic colonial-era building, once the administrative heart of Burma, where history whispers through its grand halls and faded red brick walls.',
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
  // Nay Pyi Daw Attractions
  {
    id: 'Uppatasanti-pagoda',
    name: 'Uppatasanti Pagoda',
    image:
      'https://media.istockphoto.com/id/1161307342/photo/golden-bright-uppatasanti-pagoda-while-under-the-renovation-work-in-nay-pyi-taw-myanmar.jpg?s=612x612&w=0&k=20&c=buyBpItDVmMdEei8uCBongxTTs6POE7UHo5Bd9DeChs=',
    townId: 'nay-pyi-daw',
    description:
      'Uppatasanti Pagoda in Nay Pyi Taw, known as the “Peace Pagoda,” is a golden replica of Shwedagon Pagoda. Standing 99 meters tall and housing a sacred Buddha tooth relic, it shines as both a spiritual and cultural landmark of Myanmar’s modern capital.',
  },
  {
    id: 'myanmar-gems-museum',
    name: 'Myanmar Gems Museum',
    image:
      'https://www.myanmars.net/images/gem_museum.jpg',
    townId: 'nay-pyi-daw',
    description:
      'Myanmar Gems Museum in Nay Pyi Taw showcases the nation’s finest rubies, sapphires, jade, and pearls, reflecting the country’s rich heritage in precious stones.',
  },
  {
    id: 'national-landmark-garden',
    name: 'National Landmark Garden',
    image:
      'https://www.nationallandmarksgarden.com/wp-content/uploads/2020/09/shan-6-2.jpg',
    townId: 'nay-pyi-daw',
    description:
      'National Landmark Garden in Nay Pyi Taw showcases miniature replicas of Myanmar’s most iconic pagodas, palaces, and cultural sites. Spread across vast green landscapes, it offers visitors a chance to explore the country’s rich heritage in one place, making it both educational and scenic.',
  },
  {
    id: 'water-fountain-garden',
    name: 'Water Fountain Garden',
    image:
      'https://aureumpalacehotel.com/wp-content/uploads/2022/10/0-02-06-07ae585ce5195a7bfc386a36d32dafa17de697f20ddc81533dbc98b5846d4729_666a9a26d29319dc-856x450.jpg',
    townId: 'nay-pyi-daw',
    description:
      'Water Fountain Garden in Nay Pyi Taw is a serene retreat featuring beautifully designed fountains, landscaped greenery, and walking paths. Visitors can relax by the sparkling waters, enjoy peaceful strolls, and take in the harmonious blend of nature and artistry.',
  },
  {
    id: 'maravijaya-buddha',
    name: 'Maravijaya Buddha',
    image:
      'https://www.mtnewstoday.com/en/wp-content/uploads/2023/07/347253538_131599433290873_5686295993439138745_n.jpg',
    townId: 'nay-pyi-daw',
    description:
      'Maravijaya Buddha in Nay Pyi Taw is a towering white statue standing as a symbol of peace and devotion. Visitors are drawn to its impressive height, serene expression, and the surrounding grounds that offer a tranquil space for reflection and worship.',
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
      'https://luxurymyanmarrivercruises.com/uploads/Dhammayangyi-Temple-1.jpg',
    townId: 'bagan',
    description:
      'The largest temple in Bagan, Dhammayangyi is renowned for its massive structure and mysterious history. Its brickwork is considered the finest in Bagan, and legends surround its construction.',
  },
  {
    id: 'shwe-zigon-pagoda',
    name: 'Shwe Zigon Pagoda',
    image:
      'https://bagandaytours.com/wp-content/uploads/2016/01/Shwezigon-Pagoda2.jpg',
    townId: 'bagan',
    description:
      'Shwe Zigon Pagoda in Bagan is a revered golden temple believed to house sacred Buddha relics. Its gleaming stupa and intricate architecture attract both pilgrims and travelers. The pagoda also comes alive during local festivals, showcasing Myanmar’s rich cultural and spiritual heritage.',
  },
  {
    id: 'bagan-golden-palace',
    name: 'Bagan Golden Palace',
    image:
      'https://thumbs.dreamstime.com/b/thiri-zaya-bumi-bagan-golden-palace-bagan-myanmar-ancient-city-located-mandalay-region-th-to-th-centuries-95238829.jpg',
    townId: 'bagan',
    description:
      'Bagan Golden Palace is a magnificent reconstruction of the ancient royal palace, showcasing Myanmar’s regal architecture and cultural heritage. Its ornate halls, grand courtyards, and intricate carvings transport visitors to the era of Bagan’s royal kingdom.',
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
  {
    id: 'shwe-bhone-pwint',
    name: 'Shwe Bhone Pwint Pagoda',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Shwe_Bone_Pwint_Pagoda%2C_Taunggyi%2CShan.jpg/2560px-Shwe_Bone_Pwint_Pagoda%2C_Taunggyi%2CShan.jpg',
    townId: 'taunggyi',
    description:
      'The Shwe Bhone Pwint Pagoda, located in the hill city of Taunggyi, is a revered Buddhist site that offers both spiritual significance and scenic charm. The pagoda is gracefully perched on an elevated spot, allowing visitors to enjoy sweeping views of the surrounding Shan hills and the vibrant town below.',
  },
  // Kyaukse Attractions
  {
    id: 'shwe-theindaw',
    name: 'Mahar Shwe Theindaw Buddhist Temple',
    image:
      'https://www.bloggang.com/data/m/morkmek/picture/1712821578.jpg',
    townId: 'Kyauk-se',
    description:
      'Mahar Shwe Theindaw Buddhist Temple is a revered spiritual site in Myanmar, celebrated for its gleaming golden stupa and intricate architectural details. The temple’s serene courtyards, ornate carvings, and peaceful ambiance make it a focal point for meditation and prayer.',
  },
  {
    id: 'shwe-thalyaung',
    name: 'Shwe Thalyaung Pagoda',
    image:
      'https://t4.ftcdn.net/jpg/05/27/17/07/360_F_527170743_SvQ7Aak8bXa9SRPh5VlOUihYyBFaswyY.jpg',
    townId: 'Kyauk-se',
    description:
      'Shwe Thalyaung Pagoda  is famed for its massive reclining Buddha statue, a striking symbol of serenity and devotion. The gilded figure stretches gracefully across the temple grounds, drawing pilgrims and visitors who come to admire its intricate details and tranquil presence',
  },
  {
    id: 'shwe-gu',
    name: 'Tamote Shinbin Shwegu',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Tamote_Shwe_Gu_Gyi_Pagoda_02.JPG/1200px-Tamote_Shwe_Gu_Gyi_Pagoda_02.JPG',
    townId: 'Kyauk-se',
    description:
      'Tamote Shinbin Shwegu is a historic pagoda since Bagan era and it is famous rarest type of buddha stupa and its artisan temples. It is one the tourist attraction closely located near Kyaukse.',
  },
  {
    id: 'sin-gaung-taung',
    name: 'Sin Gaung Taung',
    image:
      'https://i.ytimg.com/vi/MPdbwr48W8Q/maxresdefault.jpg',
    townId: 'Kyauk-se',
    description:
      'Sin Gaung Taung is a scenic hill near Kyaukse,looking alike with an elephant head, offering panoramic views of the surrounding plains and a serene setting for visitors and pilgrims alike.',
  },
  {
    id: 'elephant-festival',
    name: 'Kyaukse Elephant Festival',
    image:
      'https://www.moi.gov.mm/moi:eng/sites/default/files/news-image/2023-11/07.JPG',
    townId: 'Kyauk-se',
    description:
      'The Kyaukse Elephant Festival is a vibrant annual event in Myanmar, celebrating the town’s rich cultural heritage. Locals decorate real and replica elephants, participate in lively processions, and perform traditional rituals, creating a colorful and energetic spectacle that draws visitors from across the region.',
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
    image: 'https://www.trailsofindochina.com/wp-content/uploads/2018/04/Inle_Lake_Header.jpg',
    townId: 'inle-lake',
    description:
      'Visit stilt-house villages like Ywama or Inthein, with gardens grown on water. Experience the unique lifestyle of the Intha people and their ingenious floating garden cultivation methods.',
  },
  {
    id: 'phaung-daw-oo',
    name: 'Phaung Daw Oo Pagoda',
    image:
      'https://www.myanmartours.us/wp-content/uploads/Phaung-Daw-Oo-Pagoda.jpg',
    townId: 'inle-lake',
    description:
      'One of the most sacred pagodas in Shan State, with 5 revered Buddha images. This important religious site is a center of local spiritual life and annual festivals.',
  },
  {
    id: 'indein-pagoda',
    name: 'Indein Pagoda Complex',
    image:
      'https://static.vecteezy.com/system/resources/previews/006/971/606/non_2x/the-group-of-oldest-pagoda-named-shwe-indein-pagoda-located-at-indein-village-in-the-area-of-inle-lake-of-myanmar-photo.jpg',
    townId: 'inle-lake',
    description:
      "A hidden gem with hundreds of ancient stupas, accessible via a scenic boat ride. This atmospheric complex of weather-worn stupas offers a glimpse into the region's rich history.",
  },
  {
    id: 'leg-rowing-fishermen',
    name: 'Traditional Leg Rowing Fishermen',
    image: 'https://images.locationscout.net/2017/05/one-leg-rower-on-inle-lake-myanmar.webp?h=1400&q=80',
    townId: 'inle-lake',
    description:
      "Iconic fishermen who row with one leg while balancing on the other. Watch this unique traditional fishing method that has become a symbol of Inle Lake's cultural heritage.",
  },

  // Nyaung Shwe Attractions
  {
    id: 'inle-lake-access',
    name: 'Inle Lake Access',
    image:
      'https://live.staticflickr.com/65535/48114078003_7daed3edaa_b.jpg',
    townId: 'nyaung-shwe',
    description:
      "The main gateway to the stunning Inle Lake, offering boat services, guides, and stunning views of the lake. Perfect starting point for exploring the lake's unique ecosystem and culture.",
  },
  {
    id: 'nyaung-shwe-market',
    name: 'Local Markets',
    image:
      'https://thumbs.dreamstime.com/b/crowded-mingalar-market-nyaungshwe-myanmar-february-numerous-fish-sellers-sitting-floor-offering-fresh-local-155889889.jpg',
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
      'https://www.worldtravelbug.com/ro/red-mountain-winery-myanmar/red-mountain-myanmar/',
    townId: 'nyaung-shwe',
    description:
      'A scenic vineyard and winery nestled in the hills near Nyaung Shwe, offering wine tastings, tours, and panoramic views of Inle Lake. Red Mountain Estate is renowned for its locally produced wines and is a perfect spot to relax and enjoy a sunset over the vineyards.',
  },
  {
    id: 'nyaung-shwe-haw',
    name: 'Nyaung Shwe Haw',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Nyaung_Shwe_Cultural_Museum.jpg/250px-Nyaung_Shwe_Cultural_Museum.jpg',
    townId: 'nyaung-shwe',
    description:
      'Nyaung Shwe Haw, the former Shan prince’s palace, now serves as a museum showcasing Shan culture and history.It resembles the monarchies of Shan distinctly.',
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
    id: 'taung-wine',
    name: 'Taung Wine',
    image:
      'https://www.jonnymelon.com/wp-content/uploads/2018/12/taung-wine-pagoda-19.jpg',
    townId: 'hpa-an',
    description:
      "Taung Wine, a picturesque hill near Hpa-An, is a must-visit for travelers seeking both adventure and tranquility. Rising above the plains, it offers sweeping views of emerald rice fields, winding rivers, and dramatic limestone mountains that define the region’s unique landscape.",
  },
  {
    id: 'kyauk-ka-lat-pagoda',
    name: 'Kyauk Ka Lat Pagoda',
    image:
      'https://as2.ftcdn.net/v2/jpg/03/71/95/79/1000_F_371957946_DMrERiaRVbyfmdFW3qPkydlsi46ArK2u.jpg',
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
      'https://www.dztraveler.com/wp-content/uploads/2016/01/DSC_0356-Edit-1.jpg',
    townId: 'hpa-an',
    description:
      'A peaceful garden complex featuring replicas of famous Buddhist sites from around the world. Lumbini Garden offers a serene setting for meditation and reflection, with beautiful landscaping and religious monuments.',
  },

  // Mawlamyaing Attractions
  {
    id: 'kyaikthanlan-pagoda',
    name: 'Kyaikthanlan Pagoda',
    image:
      'https://t4.ftcdn.net/jpg/01/01/59/59/240_F_101595908_fUGTk4fZ5YMgAEwXMR7K6maebNe1BaDg.jpg',
    townId: 'mawlamyaing',
    description:
      'Perched on a hill overlooking the city and Thanlwin River, Kyaikthanlan Pagoda is Mawlamyaing’s most prominent landmark, famed for sunset views and peaceful surroundings.',
  },
  {
    id: 'gaungse-kyun',
    name: 'Gaungse Kyun (Shampoo Island)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/93/ShampooIsland.jpg',
    townId: 'mawlamyaing',
    description:
      'A small scenic island in the Thanlwin River with monasteries and shrines. Historically used by royalty for hair-washing ceremonies, it offers tranquil river views and a short boat trip from town.',
  },
  {
    id: 'bilu-kyun',
    name: 'Bilu Kyun (Ogre Island)',
    image:
      'https://lp-cms-production.imgix.net/2025-04/Shutterstock1124482919.jpg?w=3840&auto=format&q=75',
    townId: 'mawlamyaing',
    description:
      'A large island known for traditional craft villages producing rubber bands, slate boards, and walking sticks. A day trip here offers insight into local Mon culture and rural life.',
  },
  {
    id: 'win-sein-tawya',
    name: 'Win Sein Taw Ya Buddha',
    image:
      'https://t4.ftcdn.net/jpg/03/21/91/13/240_F_321911348_3oY4GKaFIrWnNaMoTObSVaFnP1UbWVAQ.jpg',
    townId: 'mawlamyaing',
    description:
      'Win Sein Taw Ya Buddha is the world’s largest reclining Buddha statue, stretching over 180 meters. Visitors can explore its interior filled with Buddhist teachings and artwork, while the surrounding grounds dotted with pagodas create a serene, spiritual atmosphere.',
  },

  // Dawei Attractions
  {
    id: 'maungmagan-beach',
    name: 'Maungmagan Beach',
    image:
      'https://b-cdn.springnest.com/media/img/td/img_3476a1b7869.jpg?crop=4032%2C2489%2C0%2C394&width=460',
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
      'https://www.myanmardigitalnewspaper.com/sites/default/files/articles/82936363_1580212938786585_1317350749826449408_n.jpg',
    townId: 'dawei',
    description:
      'A historic pagoda complex with beautiful architecture and serene surroundings. Shin Koe Shin Pagoda is an important religious site that offers visitors a peaceful retreat and insight into local Buddhist traditions.',
  },

  // Kawthaung Attractions
  {
    id: 'victoria-point',
    name: 'Victoria Point',
    image: 'https://thumbs.dreamstime.com/b/pier-kawthaung-victoria-point-myanmar-pier-kawthaung-victoria-point-myanmar-harbor-111291491.jpg',
    townId: 'kawthaung',
    description:
      'Victoria Point is the southernmost tip of Myanmar, offering stunning panoramic views of the Andaman Sea and the border with Thailand. This iconic landmark provides breathtaking sunset views and is a perfect spot for photography and relaxation.',
  },
  {
    id: 'pyi-daw-aye-pagoda',
    name: 'Pyi Daw Aye Pagoda',
    image:
      'https://t3.ftcdn.net/jpg/01/64/71/38/360_F_164713842_XEjPQdtkr0k50Cauz4j8eu0LBTld2g0P.jpg',
    townId: 'kawthaung',
    description:
      'A beautiful hilltop pagoda offering panoramic views of Kawthaung and the surrounding Andaman Sea. The pagoda is a peaceful spiritual site where visitors can enjoy stunning vistas and experience local Buddhist culture.',
  },
  {
    id: 'king-bayint-naung-statue',
    name: 'King Bayint Naung Statue',
    image:
      'https://t4.ftcdn.net/jpg/04/07/84/71/360_F_407847182_6E2vuTZOcGTBA8tn4lG4F4Rn6HxMlqui.jpg',
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
      'https://www.gomyanmartours.com/wp-content/uploads/2019/10/myeik-archipelago.jpg',
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
