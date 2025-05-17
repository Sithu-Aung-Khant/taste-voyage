import { Region } from '../types';

export const regions: Region[] = [
  {
    id: 'yangon-region',
    name: 'Yangon Region',
    description: 'Home to Myanmar\'s largest city and commercial hub, blending colonial architecture with sacred Buddhist sites.',
    image: 'https://images.pexels.com/photos/3689946/pexels-photo-3689946.jpeg?auto=compress&cs=tinysrgb&w=1200',
    towns: ['yangon']
  },
  {
    id: 'mandalay-region',
    name: 'Mandalay Region',
    description: 'The cultural heartland of Myanmar with ancient capitals, traditional crafts, and thousands of temples in Bagan.',
    image: 'https://images.pexels.com/photos/17829930/pexels-photo-17829930/free-photo-of-couple-entering-building-in-myanmar.jpeg?auto=compress&cs=tinysrgb&w=1200',
    towns: ['mandalay', 'bagan']
  },
  {
    id: 'shan-state',
    name: 'Shan State',
    description: 'Known for its highlands, diverse ethnic groups, cool climate, and the beautiful Inle Lake with its unique floating gardens.',
    image: 'https://images.pexels.com/photos/6036959/pexels-photo-6036959.jpeg?auto=compress&cs=tinysrgb&w=1200',
    towns: ['inle-lake']
  },
  {
    id: 'kayin-state',
    name: 'Kayin State',
    description: 'Characterized by dramatic karst mountains, caves, and the rich cultural heritage of the Karen people.',
    image: 'https://images.pexels.com/photos/4011399/pexels-photo-4011399.jpeg?auto=compress&cs=tinysrgb&w=1200',
    towns: ['hpa-an']
  },
  {
    id: 'rakhine-state',
    name: 'Rakhine State',
    description: 'Home to Myanmar\'s finest beaches and ancient archaeological sites like Mrauk U.',
    image: 'https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=1200',
    towns: ['ngapali']
  }
];