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
      'https://images.unsplash.com/photo-1598935898639-81586f7d2129?w=800&auto=format&fit=crop',
    townId: 'yangon',
  },
  {
    id: 'sule-pagoda',
    name: 'Sule Pagoda',
    image:
      'https://images.unsplash.com/photo-1545063914-a1a6c2435e55?w=800&auto=format&fit=crop',
    townId: 'yangon',
  },
  {
    id: 'bogyoke-market',
    name: 'Bogyoke Aung San Market',
    image:
      'https://images.unsplash.com/photo-1555921015-5532091f6026?w=800&auto=format&fit=crop',
    townId: 'yangon',
  },
  {
    id: 'national-museum',
    name: 'National Museum',
    image:
      'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&auto=format&fit=crop',
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
