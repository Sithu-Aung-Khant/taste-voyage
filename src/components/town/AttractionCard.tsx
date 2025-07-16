import React from 'react';
import { ExternalLink } from 'lucide-react';

interface AttractionCardProps {
  name: string;
  townName: string;
  // Using a placeholder image for now, we can update this when we have real images
  image: string;
}

const AttractionCard: React.FC<AttractionCardProps> = ({
  name,
  townName,
  image,
}) => {
  const getGoogleMapsUrl = (name: string) => {
    return `https://www.google.com/maps/search/${encodeURIComponent(name)}`;
  };

  return (
    <a
      href={getGoogleMapsUrl(name + ' ' + townName)}
      target='_blank'
      rel='noopener noreferrer'
      className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group'
    >
      <div className='relative h-48 overflow-hidden'>
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent'></div>
      </div>

      <div className='p-4'>
        <div className='flex justify-between items-center'>
          <h3 className='font-bold text-lg text-gray-900'>{name}</h3>
          <ExternalLink className='w-4 h-4 text-amber-600' />
        </div>
        <p className='mt-2 text-sm text-gray-600'>View on Google Maps</p>
      </div>
    </a>
  );
};

export default AttractionCard;
