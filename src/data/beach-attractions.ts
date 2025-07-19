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
    image:
      'https://thumbs.dreamstime.com/b/chaung-tha-beach-sunset-myanmar-twilight-sky-over-bengal-bay-scenic-kyauk-pa-hto-pagoda-123467412.jpg',
    beachId: 'ngapali',
  },
  {
    id: 'fishing-village',
    name: 'Traditional Fishing Village',
    description:
      'Experience the authentic local life in this traditional fishing village. Watch fishermen bring in their daily catch and learn about their traditional fishing methods.',
    image:
      'https://safeandhealthytravel.com/wp-content/uploads/2014/01/P1100200-1024x768.jpg',
    beachId: 'ngapali',
  },
  {
    id: 'pearl-island',
    name: 'Pearl Island',
    description:
      'A small island accessible by boat, known for its pearl cultivation. Visitors can learn about pearl farming and purchase authentic Myanmar pearls.',
    image: 'https://www.myanmars.net/images/pearl_island.jpg',
    beachId: 'ngapali',
  },

  // Ngwe Saung Beach Attractions
  {
    id: 'lovers-island',
    name: 'Lovers Island',
    description:
      'A romantic island connected to the mainland by a walkable sandbar during low tide. Perfect for couples and photography enthusiasts.',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/46/ee/46/lovers-island.jpg?w=1200&h=-1&s=1',
    beachId: 'ngwe-saung',
  },
  {
    id: 'elephant-point',
    name: 'Elephant Point',
    description:
      'A rocky outcrop offering panoramic views of the coastline. Popular for sunrise viewing and bird watching.',
    image:
      'https://lh3.googleusercontent.com/proxy/_8PZ0HK85-nVnFT-5lMbKF5KCyDBtNUo2P_th27-TNqflNjy2gLIq8vYzX5uBSz62-FgraiT4DDomOocXUMS5UTTW7KUeqv82pyc3Trd_9_lOveOJV4',
    beachId: 'ngwe-saung',
  },
  {
    id: 'bird-sanctuary',
    name: 'Bird Sanctuary',
    description:
      'A protected area home to various species of local and migratory birds. Great for nature lovers and bird watchers.',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/93/2e/75/20181201-093608-largejpg.jpg?w=900&h=500&s=1',
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
