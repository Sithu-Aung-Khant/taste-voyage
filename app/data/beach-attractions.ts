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
      'https://www.jacadatravel.com/_next/image/?url=https%3A%2F%2Fcdn.jacadatravel.com%2Fwp-content%2Fuploads%2Fbis-images%2F148395%2Flocation__dreamstimemaximum_25631471-1600x900-f50_50.jpg&w=3840&q=100',
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
      'https://myanmartravel.com/images/2020/07/Lover%E2%80%99s-Island-ngwe-saung-.jpg',
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
      'https://yangkee.tw/wp-content/uploads/2024/04/ngwesaung-661762669a120.webp',
    beachId: 'ngwe-saung',
  },

  // Chaung Tha Beach Attractions
  {
    id: 'butterfly-island',
    name: 'Butterfly Island',
    description:
      'A beautiful small island known for its butterfly-shaped rock formations and clear waters perfect for snorkeling.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Gq8zYorH9LvCcQFWpc45vdkqSYhT44QshQ&s',
    beachId: 'chaung-tha',
  },
  {
    id: 'pagoda-point',
    name: 'Pagoda Point',
    description:
      'A hilltop pagoda offering stunning views of the beach and surrounding area. Especially beautiful during sunset.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFRpscUapRLLm1CjqijJBFk_lJjiAdWSAJdA&s',
    beachId: 'chaung-tha',
  },
  {
    id: 'local-market',
    name: 'Chaung Tha Local Market',
    description:
      'A vibrant local market where you can find fresh seafood, local handicrafts, and experience the local culture.',
    image:
      'https://c8.alamy.com/comp/A2YJ98/chaungtha-market-chaungtha-burma-myanmar-A2YJ98.jpg',
    beachId: 'chaung-tha',
  },
];

export const getAttractionsByBeachId = (beachId: string): BeachAttraction[] => {
  return beachAttractions.filter(
    (attraction) => attraction.beachId === beachId
  );
};
