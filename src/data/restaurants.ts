interface Restaurant {
  id: string;
  name: string;
  image: string;
  townId: string;
  description: string;
}

export const restaurants: Restaurant[] = [
  // Pyin Oo Lwin Restaurants
  {
    id: 'maw-da-nu',
    name: 'Maw Da Nu',
    image: '/restaurants/pyinoolwin/1.jpg',
    townId: 'pyin-oo-lwin',
    description: 'Famous for Shan Noodle',
  },
  {
    id: 'san-francisco',
    name: 'San Francisco Restaurant',
    image: '/restaurants/pyinoolwin/2.jpg',
    townId: 'pyin-oo-lwin',
    description: 'Known for Chinese-Shan fusion dishes',
  },
  {
    id: 'feel-restaurant',
    name: 'Feel Restaurant (Lake Front)',
    image: '/restaurants/pyinoolwin/3.jpg',
    townId: 'pyin-oo-lwin',
    description: 'Famous for asian cuisine',
  },
  {
    id: 'december-waterfall',
    name: 'December Waterfall and Garden',
    image: '/restaurants/pyinoolwin/4.jpg',
    townId: 'pyin-oo-lwin',
    description: 'Known for dairy products',
  },
  {
    id: 'forest-cafe',
    name: 'Forest Cafe',
    image: '/restaurants/pyinoolwin/5.jpg',
    townId: 'pyin-oo-lwin',
    description: 'Famous for speciality coffee and pastries',
  },
  {
    id: 'one-piece-bbq',
    name: 'One Piece BBQ',
    image: '/restaurants/pyinoolwin/6.jpg',
    townId: 'pyin-oo-lwin',
    description: 'Famous for its bbq and grilled meat',
  },
  // Kyaukse Restaurants
  {
    id: 'daw-mya-chit',
    name: 'Daw Mya Chit Myanmar Cuisine',
    image: '/restaurants/pyinoolwin/6.jpg',
    townId: 'Kyauk-se',
    description: 'Famous for burmese lunch packed with lotus leaves',
  },
  {
    id: 'tun-thitsa',
    name: 'Tun Thitsa Cafe',
    image: 'https://tazaproducts.com/blog/wp-content/uploads/sites/8/2024/05/Why-chai-paratha-is-the-ultimate-comfort-food-scaled.jpg',
    townId: 'Kyauk-se',
    description: 'Famous for its tea and pratha',
  },
  {
    id: 'kyar-pauk',
    name: 'Kyar Pauk Noodle',
    image: '/restaurants/pyinoolwin/6.jpg',
    townId: 'Kyauk-se',
    description: 'Famous for fried noodles packed with lotus leaves and chinese stir fry dishes',
  },
  // Hpa-An Restaurants
  {
    id: 'hpa-an-night-market',
    name: 'Hpa An night market',
    image: '/restaurants/hpa-an/1.jpg',
    townId: 'hpa-an',
    description: 'Famous for variety of Karen local foods',
  },
  {
    id: 'cafe-kto',
    name: "Cafe' KTO",
    image: '/restaurants/hpa-an/2.jpg',
    townId: 'hpa-an',
    description: 'Famous for coffee and its scenery',
  },
  {
    id: 'veranda-ycc',
    name: 'Veranda YCC',
    image: '/restaurants/hpa-an/3.jpg',
    townId: 'hpa-an',
    description: 'Famous for its cozy space and light beverages',
  },
  {
    id: 'naw-ta-yar',
    name: 'Naw Ta Yar Karen Traditional Food',
    image: '/restaurants/hpa-an/4.jpg',
    townId: 'hpa-an',
    description: 'Famous for authentic Karen cuisine',
  },
  {
    id: 'eat-me',
    name: 'EAT ME',
    image: '/restaurants/hpa-an/5.jpg',
    townId: 'hpa-an',
    description: 'Famous for asian BBQ and drinks',
  },

  // Mawlamyaing Restaurants
  {
    id: 'mawlamyaing-strand-night-market',
    name: 'Mawlamyaing Strand Road Night Market',
    image: '/restaurants/mawlamyaing/1.jpg',
    townId: 'mawlamyaing',
    description: 'Known for variety of street foods',
  },
  {
    id: 'pyaw-yar-camp',
    name: 'Pyaw Yar Camp & Restaurant',
    image: '/restaurants/mawlamyaing/2.jpg',
    townId: 'mawlamyaing',
    description: 'Known for light food and beverages',
  },
  {
    id: 'bamboo-hut',
    name: 'Bamboo Hut Restaurant',
    image: '/restaurants/mawlamyaing/3.jpg',
    townId: 'mawlamyaing',
    description: 'Famous for Mon-Burmese lunch',
  },
  {
    id: 'doh-yoe-yar',
    name: 'Doh Yoe Yar Mon Style Vermicelli',
    image: '/restaurants/mawlamyaing/4.jpg',
    townId: 'mawlamyaing',
    description: 'Famous for soaked rice vermicelli with fish soup',
  },

  // Dawei Restaurants
  {
    id: 'bamboo-garden',
    name: 'Bamboo Garden',
    image: '/restaurants/dawei/1.jpg',
    townId: 'dawei',
    description: 'Known for various breakfast menu',
  },
  {
    id: 'shwe-hnin-si',
    name: 'Shwe Hnin Si Seafood Restaurant',
    image: '/restaurants/dawei/2.jpg',
    townId: 'dawei',
    description: 'Famous for fresh seafood dishes',
  },
  {
    id: 'old-house-cafe',
    name: 'Old House Café',
    image: '/restaurants/dawei/3.jpg',
    townId: 'dawei',
    description: 'Famous for breakfast,coffee and pizzas',
  },
  {
    id: 'little-eden',
    name: 'Little Eden in Dawei',
    image: '/restaurants/dawei/4.jpg',
    townId: 'dawei',
    description: 'Known for European light foods and pastries',
  },
  {
    id: 'sawardi',
    name: 'Sawardi Restaurant',
    image: '/restaurants/dawei/5.jpg',
    townId: 'dawei',
    description: 'Famous for Thai Cuisine and Grilled seafood',
  },

  // Kawthaung Restaurants
  {
    id: 'sky-view',
    name: 'Sky View Kaw Thaung',
    image: '/restaurants/kawthaung/1.jpg',
    townId: 'kawthaung',
    description: 'Known for asian cuisine',
  },
  {
    id: 'victoria-cliff',
    name: 'Victoria Cliff Hotel and Resort',
    image: '/restaurants/kawthaung/2.jpg',
    townId: 'kawthaung',
    description: 'Famous for local seafood and fine dining',
  },
  {
    id: 'kawthaung-yummy',
    name: 'Kawthaung Yummy Restaurant',
    image: '/restaurants/kawthaung/3.jpg',
    townId: 'kawthaung',
    description: 'Known for local-Thai fusion cuisine',
  },

  // Myeik Restaurants
  {
    id: 'pin-lae-may',
    name: 'Pin Lae May (Sea Goddess) Restaurant',
    image: '/restaurants/myeik/1.jpg',
    townId: 'myeik',
    description: 'Famous for beer accompanied with seafood dishes',
  },
  {
    id: 'my-mergui-bar',
    name: 'My Mergui Bar',
    image: '/restaurants/myeik/2.jpg',
    townId: 'myeik',
    description: 'Known for asian cuisine and unplugged entertainment',
  },
  {
    id: 'hotel-drift',
    name: 'Hotel Drift',
    image: '/restaurants/myeik/3.jpg',
    townId: 'myeik',
    description: 'Famous for variety of cocktails and sunset view',
  },
  {
    id: 'mr-bamboo',
    name: 'Mr Bamboo Restaurant',
    image: '/restaurants/myeik/4.jpg',
    townId: 'myeik',
    description: 'Known for local and seafood cuisines',
  },
  // Nay Pyi Daw Restaurants
  {
    id: 'hta-naung',
    name: 'Hta Naung Restaurant',
    image: '/src/public/restaurants/naypyidaw/1.jpg',
    townId: 'nay-pyi-daw',
    description: 'Famous for Burmese Lunch',
  },
  {
    id: 'mon-ma-2',
    name: 'Mon Ma (II) Restaurant',
    image: '/src/public/restaurants/naypyidaw/2.jpg',
    townId: 'nay-pyi-daw',
    description: 'Famous for Mon style dishes',
  },
  {
    id: 'new-thai-yai',
    name: 'New Thai Yai Restaurant',
    image: '/src/public/restaurants/naypyidaw/3.jpg',
    townId: 'nay-pyi-daw',
    description: 'Famous for Thai and Shan dishes',
  },
  {
    id: 'nature-tea-house',
    name: 'Nature Tea House',
    image: '/src/public/restaurants/naypyidaw/4.jpg',
    townId: 'nay-pyi-daw',
    description: 'Famous for wide variety of breakfast',
  },
  {
    id: 'la-la-leora',
    name: 'La La Leora',
    image: '/src/public/restaurants/naypyidaw/5.jpg',
    townId: 'nay-pyi-daw',
    description: 'Known for speciality coffee',
  },
  {
    id: 'u-soe-gyi',
    name: 'U Soe Gyi Grilled Pork Ribs',
    image: '/src/public/restaurants/naypyidaw/6.jpg',
    townId: 'nay-pyi-daw',
    description: 'Known for its special grilled pork ribs',
  },
  // Mandalay Restaurants
  {
    id: 'unique-mandalay-tea-room',
    name: 'Unique Mandalay Tea Room',
    image: '/restaurants/mandalay/1.jpg',
    townId: 'mandalay',
    description: 'Famous for variety of breakfast dishes',
  },
  {
    id: 'bbb-european-restaurant',
    name: 'BBB European Restaurant',
    image: '/restaurants/mandalay/2.jpg',
    townId: 'mandalay',
    description: 'Famous for unique European cuisine',
  },
  {
    id: 'mingalarbar-restaurants',
    name: 'Mingalarbar Restaurants',
    image: '/restaurants/mandalay/3.jpg',
    townId: 'mandalay',
    description: 'Famous for Burmese curry and lunch',
  },
  {
    id: 'the-palace-by-golden-duck',
    name: 'The Palace by Golden Duck',
    image: '/restaurants/mandalay/4.jpg',
    townId: 'mandalay',
    description: 'Famous for signature Chinese Cuisine',
  },
  {
    id: 'karaweik-cafe',
    name: 'Karaweik Cafe',
    image: '/restaurants/mandalay/5.jpg',
    townId: 'mandalay',
    description: 'Famous for Biryani and Indian food',
  },
  // Bagan Restaurants
  {
    id: 'shwe-myanmar-bagan',
    name: 'Shwe Myanmar Restaurant',
    image: '/restaurants/bagan/1.jpg',
    townId: 'bagan',
    description: 'Famous for buffet style Burmese lunch',
  },
  {
    id: 'tharabar-3',
    name: 'Tharabar 3 Restaurants',
    image: '/restaurants/bagan/2.jpg',
    townId: 'bagan',
    description: 'Famous for Burmese salad and lunch',
  },
  {
    id: 'zee-yeik-fritters',
    name: 'Zee Yeik Fritters Shop',
    image: '/restaurants/bagan/3.jpg',
    townId: 'bagan',
    description: 'Famous for Burmese style fritters',
  },
  {
    id: 'hnan-phat-chin',
    name: 'Hnan Phat Chin Restaurant',
    image: '/restaurants/bagan/4.jpg',
    townId: 'bagan',
    description: 'Famous for myanmar curry made with fermented bean paste',
  },
  {
    id: 'sharkys-bagan',
    name: "Sharky's Bagan Deli and Cafe",
    image: '/restaurants/bagan/5.jpg',
    townId: 'bagan',
    description: 'Famous for European cuisine and Pizzas',
  },

  // Yangon Restaurants
  {
    id: 'rangoon-tea-house',
    name: 'Rangoon Tea House',
    image: '/IMG_4982.JPG',
    townId: 'yangon',
    description: 'Famous for Mohinga and variety of local dishes',
  },
  {
    id: 'ykko-kyae-oh',
    name: 'YKKO Kyae Oh',
    image: '/IMG_4983.JPG',
    townId: 'yangon',
    description: 'Famous for unique Kyae Oh',
  },
  {
    id: 'shan-yoe-yar',
    name: 'Shan Yoe Yar',
    image: '/IMG_4984.JPG',
    townId: 'yangon',
    description: 'Famous for shan cuisine',
  },
  {
    id: 'lucky-seven-tea-house',
    name: 'Lucky Seven Tea House',
    image: '/IMG_4985.JPG',
    townId: 'yangon',
    description: 'Famous for local breakfast foods',
  },
  {
    id: 'cafe-salween',
    name: 'Cafe Salween',
    image: '/IMG_4986.JPG',
    townId: 'yangon',
    description: 'Famous for traditional burmese desserts',
  },

  // Taunggyi Restaurants
  {
    id: 'win-restaurant',
    name: 'Win Restaurant',
    image: '/src/public/restaurants/taunggyi/1.jpg',
    townId: 'taunggyi',
    description:
      'Popular local restaurant serving authentic Shan cuisine and hotpot',
  },
  {
    id: 'golden-crown',
    name: 'Golden Crown Restaurant',
    image: '/src/public/restaurants/taunggyi/2.jpg',
    townId: 'taunggyi',
    description: 'Famous for traditional Shan and Chinese fusion dishes',
  },
  {
    id: 'shwe-myanmar',
    name: 'Shwe Myanmar Restaurant',
    image: '/src/public/restaurants/taunggyi/3.jpg',
    townId: 'taunggyi',
    description: 'Local favorite serving Shan noodles and traditional dishes',
  },
  {
    id: 'royal-taunggyi',
    name: 'Royal Taunggyi Restaurant',
    image: '/src/public/restaurants/taunggyi/4.jpg',
    townId: 'taunggyi',
    description: 'Upscale dining with panoramic views of Taunggyi',
  },

  // Kalaw Restaurants
  {
    id: 'seven-sisters',
    name: 'Seven Sisters Restaurant',
    image: '/src/public/restaurants/kalaw/1.jpg',
    townId: 'kalaw',
    description: 'Famous for traditional Nepali and Shan cuisine',
  },
  {
    id: 'thirigayhar',
    name: 'Thirigayhar Restaurant',
    image: '/src/public/restaurants/kalaw/2.jpg',
    townId: 'kalaw',
    description: 'Local favorite serving authentic Myanmar dishes',
  },
  {
    id: 'dream-restaurant',
    name: 'Dream Restaurant',
    image: '/src/public/restaurants/kalaw/3.jpg',
    townId: 'kalaw',
    description: 'Popular spot for traditional breakfast and lunch',
  },
  {
    id: 'everest-nepali',
    name: 'Everest Nepali Food Center',
    image: '/src/public/restaurants/kalaw/4.jpg',
    townId: 'kalaw',
    description: 'Authentic Nepali cuisine in the heart of Kalaw',
  },

  // Nyaung-shwe Restaurants
  {
    id: 'pwe-taw-win',
    name: 'Pwe Taw Win Nature Restaurant',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4np8Omy80S6VcVajATOfRo7NJWXjcePjkqEpFF8JHssxyIJk_wQTbz1x6q9uTgOFSsdvgj0Oou9gBkMy5xK2RFUcvUAzAVhI7AQaJuuXXHp5-AU_CwXfFWQrey3fefdGy2XKUj-2AA=s680-w680-h510-rw',
    townId: 'nyaung-shwe',
    description: 'Popular for Shan and Intha Style Traditional Food',
  },
  {
    id: 'mann-mann-rooftop',
    name: 'Mann Mann Rooftop Bar and Restaurant',
    image: 'https://lh3.googleusercontent.com/p/AF1QipPIvmb1hV-OPDzGtFMR-C_kSgwlTZ1_VOrs40C3=s680-w680-h510-rw',
    townId: 'nyaung-shwe',
    description: 'Foods and Beverages with Rooftop View',
  },
  {
    id: 'thanakha-garden',
    name: 'Thanakha Garden Restaurant',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npW8hN-Gc1V9VZ54Hp6fWMLjNeq48SKcgtHxtieV3SJ9FplgCzdW_HHDykD4IiziI0rhbP3T432zTuI3ohX9Caz0ouImjHRrbLQDII-KrqlRitvYaStv_18M4KcORlj8R3malzG=s680-w680-h510-rw',
    townId: 'nyaung-shwe',
    description: 'Traditional Shan cuisine and chinese cuisine',
  },
  {
    id: 'golden-kite',
    name: 'Golden Kite Restaurant',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqAQ9pQ-EV6jnSAezZCvw4zmVfxjVTpYBlro4r3tEyI7EBr-uM162mrLCom-Kzjb_e7QRTu4uAp6CSoWBYoSQIufCcfITMZ1PVXK6wKaYlD_imxBwKnbsp2Jtv2oBId9hHwTu-s=s680-w680-h510-rw',
    townId: 'nyaung-shwe',
    description: 'Famous for Shan and Intha traditional dishes',
  },
];

export const getRestaurantsByTownId = (townId: string): Restaurant[] => {
  return restaurants.filter((restaurant) => restaurant.townId === townId);
};
