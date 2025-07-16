interface Attraction {
  id: string;
  name: string;
  image: string;
  townId: string;
}

export const attractions: Attraction[] = [
  // Yangon Attractions
  {
    id: 'shwedagon-pagoda',
    name: 'Shwedagon Pagoda',
    image:
      'https://lp-cms-production.imgix.net/2019-06/GettyImages-504376689_super.jpg',
    townId: 'yangon',
  },
  {
    id: 'bogyoke-market',
    name: 'Bogyoke Aung San Market',
    image:
      'https://www.yangongui.de/wp-content/uploads/IMG_2249_edit-1024x683.jpg',
    townId: 'yangon',
  },
  {
    id: 'national-museum',
    name: 'National Museum',
    image:
      'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ygdly62litugr9qmpurl/YangonNationalMuseumTour.jpg',
    townId: 'yangon',
  },

  // Mandalay Attractions
  {
    id: 'mandalay-hill',
    name: 'Mandalay Hill',
    image:
      'https://images.unsplash.com/photo-1600458838376-56cf0566d943?w=800&auto=format&fit=crop',
    townId: 'mandalay',
  },
  {
    id: 'kuthodaw-pagoda',
    name: 'Kuthodaw Pagoda',
    image:
      'https://images.unsplash.com/photo-1600458838859-b71e2a9c4652?w=800&auto=format&fit=crop',
    townId: 'mandalay',
  },
  {
    id: 'u-bein-bridge',
    name: 'U Bein Bridge',
    image:
      'https://images.unsplash.com/photo-1545063914-a1a6c2435e55?w=800&auto=format&fit=crop',
    townId: 'mandalay',
  },
  {
    id: 'mahamuni-buddha',
    name: 'Mahamuni Buddha Temple',
    image:
      'https://images.unsplash.com/photo-1600458838376-56cf0566d943?w=800&auto=format&fit=crop',
    townId: 'mandalay',
  },

  // Bagan Attractions
  {
    id: 'ananda-temple',
    name: 'Ananda Temple',
    image:
      'https://images.unsplash.com/photo-1600458838859-b71e2a9c4652?w=800&auto=format&fit=crop',
    townId: 'bagan',
  },
  {
    id: 'shwesandaw-pagoda',
    name: 'Shwesandaw Pagoda',
    image:
      'https://images.unsplash.com/photo-1598935898639-81586f7d2129?w=800&auto=format&fit=crop',
    townId: 'bagan',
  },
  {
    id: 'dhammayangyi-temple',
    name: 'Dhammayangyi Temple',
    image:
      'https://images.unsplash.com/photo-1600458838376-56cf0566d943?w=800&auto=format&fit=crop',
    townId: 'bagan',
  },
  {
    id: 'bagan-balloons',
    name: 'Hot Air Balloon Rides',
    image:
      'https://images.unsplash.com/photo-1545063914-a1a6c2435e55?w=800&auto=format&fit=crop',
    townId: 'bagan',
  },
];

export const getAttractionsByTownId = (townId: string): Attraction[] => {
  return attractions.filter((attraction) => attraction.townId === townId);
};
