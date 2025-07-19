interface BeachAttraction {
  id: string;
  name: string;
  description: string;
  image: string;
  beachId: string;
}

const beachAttractions: BeachAttraction[] = [
  // Ngapali Beach Attractions
  {
    id: 'sunset-point',
    name: 'Sunset Point',
    description:
      'A scenic viewpoint offering breathtaking views of the sun setting over the Bay of Bengal. Perfect for photography and romantic evening walks.',
    image: '/beaches/attractions/sunset-point.jpg',
    beachId: 'ngapali',
  },
  {
    id: 'fishing-village',
    name: 'Traditional Fishing Village',
    description:
      'Experience the authentic local life in this traditional fishing village. Watch fishermen bring in their daily catch and learn about their traditional fishing methods.',
    image: '/beaches/attractions/fishing-village.jpg',
    beachId: 'ngapali',
  },
  {
    id: 'pearl-island',
    name: 'Pearl Island',
    description:
      'A small island accessible by boat, known for its pearl cultivation. Visitors can learn about pearl farming and purchase authentic Myanmar pearls.',
    image: '/beaches/attractions/pearl-island.jpg',
    beachId: 'ngapali',
  },

  // Ngwe Saung Beach Attractions
  {
    id: 'lovers-island',
    name: 'Lovers Island',
    description:
      'A romantic island connected to the mainland by a walkable sandbar during low tide. Perfect for couples and photography enthusiasts.',
    image: '/beaches/attractions/lovers-island.jpg',
    beachId: 'ngwe-saung',
  },
  {
    id: 'elephant-point',
    name: 'Elephant Point',
    description:
      'A rocky outcrop offering panoramic views of the coastline. Popular for sunrise viewing and bird watching.',
    image: '/beaches/attractions/elephant-point.jpg',
    beachId: 'ngwe-saung',
  },
  {
    id: 'bird-sanctuary',
    name: 'Bird Sanctuary',
    description:
      'A protected area home to various species of local and migratory birds. Great for nature lovers and bird watchers.',
    image: '/beaches/attractions/bird-sanctuary.jpg',
    beachId: 'ngwe-saung',
  },

  // Chaung Tha Beach Attractions
  {
    id: 'butterfly-island',
    name: 'Butterfly Island',
    description:
      'A beautiful small island known for its butterfly-shaped rock formations and clear waters perfect for snorkeling.',
    image: '/beaches/attractions/butterfly-island.jpg',
    beachId: 'chaung-tha',
  },
  {
    id: 'pagoda-point',
    name: 'Pagoda Point',
    description:
      'A hilltop pagoda offering stunning views of the beach and surrounding area. Especially beautiful during sunset.',
    image: '/beaches/attractions/pagoda-point.jpg',
    beachId: 'chaung-tha',
  },
  {
    id: 'local-market',
    name: 'Chaung Tha Local Market',
    description:
      'A vibrant local market where you can find fresh seafood, local handicrafts, and experience the local culture.',
    image: '/beaches/attractions/local-market.jpg',
    beachId: 'chaung-tha',
  },
];

export const getAttractionsByBeachId = (beachId: string): BeachAttraction[] => {
  return beachAttractions.filter(
    (attraction) => attraction.beachId === beachId
  );
};
