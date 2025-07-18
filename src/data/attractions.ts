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
      'https://images.unsplash.com/photo-1600458838376-56cf0566d943?w=800&auto=format&fit=crop',
    townId: 'mandalay',
    description:
      'Rising above the city, Mandalay Hill offers panoramic views and is a revered pilgrimage site. The climb is lined with pagodas and shrines, making it both a spiritual and scenic experience.',
  },
  {
    id: 'kuthodaw-pagoda',
    name: 'Kuthodaw Pagoda',
    image:
      'https://images.unsplash.com/photo-1600458838859-b71e2a9c4652?w=800&auto=format&fit=crop',
    townId: 'mandalay',
    description:
      'Known as the world’s largest book, Kuthodaw Pagoda is surrounded by hundreds of marble slabs inscribed with Buddhist scriptures. Its serene grounds and unique history make it a highlight of Mandalay.',
  },
  {
    id: 'u-bein-bridge',
    name: 'U Bein Bridge',
    image:
      'https://images.unsplash.com/photo-1545063914-a1a6c2435e55?w=800&auto=format&fit=crop',
    townId: 'mandalay',
    description:
      'Stretching across Taungthaman Lake, U Bein Bridge is the world’s longest teakwood bridge. It’s especially magical at sunrise and sunset, when locals and monks cross its weathered planks.',
  },
  {
    id: 'mahamuni-buddha',
    name: 'Mahamuni Buddha Temple',
    image:
      'https://images.unsplash.com/photo-1600458838376-56cf0566d943?w=800&auto=format&fit=crop',
    townId: 'mandalay',
    description:
      'One of Myanmar’s most sacred Buddhist sites, the Mahamuni Buddha Temple houses a revered bronze Buddha image. Pilgrims flock here to pay respects and witness the daily face-washing ceremony.',
  },

  // Bagan Attractions
  {
    id: 'ananda-temple',
    name: 'Ananda Temple',
    image:
      'https://images.unsplash.com/photo-1600458838859-b71e2a9c4652?w=800&auto=format&fit=crop',
    townId: 'bagan',
    description:
      'Ananda Temple is one of Bagan’s most beautiful and well-preserved temples, known for its stunning architecture and golden spires. Its serene interior houses four massive standing Buddha statues.',
  },
  {
    id: 'shwesandaw-pagoda',
    name: 'Shwesandaw Pagoda',
    image:
      'https://images.unsplash.com/photo-1598935898639-81586f7d2129?w=800&auto=format&fit=crop',
    townId: 'bagan',
    description:
      'Famous for its sweeping views of the Bagan plains, Shwesandaw Pagoda is a favorite spot for sunrise and sunset. Its tiered terraces offer a breathtaking vantage point over thousands of ancient temples.',
  },
  {
    id: 'dhammayangyi-temple',
    name: 'Dhammayangyi Temple',
    image:
      'https://images.unsplash.com/photo-1600458838376-56cf0566d943?w=800&auto=format&fit=crop',
    townId: 'bagan',
    description:
      'The largest temple in Bagan, Dhammayangyi is renowned for its massive structure and mysterious history. Its brickwork is considered the finest in Bagan, and legends surround its construction.',
  },
  {
    id: 'bagan-balloons',
    name: 'Hot Air Balloon Rides',
    image:
      'https://images.unsplash.com/photo-1545063914-a1a6c2435e55?w=800&auto=format&fit=crop',
    townId: 'bagan',
    description:
      'Soar above the ancient temples of Bagan in a hot air balloon for a once-in-a-lifetime experience. The breathtaking aerial views at sunrise reveal the full majesty of this archaeological wonder.',
  },
];

export const getAttractionsByTownId = (townId: string): Attraction[] => {
  return attractions.filter((attraction) => attraction.townId === townId);
};
