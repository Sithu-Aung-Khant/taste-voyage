import React from 'react';
import { ExternalLink } from 'lucide-react';

interface AttractionCardProps {
  name: string;
  townName: string;
  // Using a placeholder image for now, we can update this when we have real images
  image: string;
  description: string;
}

const AttractionCard: React.FC<AttractionCardProps> = ({
  name,
  townName,
  image,
  description,
}) => {
  const getGoogleMapsUrl = (name: string) => {
    return `https://www.google.com/maps/search/${encodeURIComponent(name)}`;
  };

  return (
    <a
      href={getGoogleMapsUrl(name + ' ' + townName)}
      target='_blank'
      rel='noopener noreferrer'
      className='overflow-hidden transition-shadow duration-300 bg-white rounded-lg group'
    >
      <div className='h-44'>
        <div className=''>
          <h3 className='text-lg font-bold text-gray-900 '>{name}</h3>
          <p className='my-3 text-sm text-gray-600'>{description}</p>
        </div>
      </div>
      <div className='relative h-48 overflow-hidden rounded-lg'>
        <img
          src={image}
          alt={name}
          className='object-cover w-full h-full transition-transform duration-700 ease-in-out rounded-lg group-hover:scale-105'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent'></div>
        <div className='absolute flex items-center gap-2 bottom-2 left-2'>
          <p className='text-sm text-white'>View on Google Maps</p>
          <ExternalLink className='w-4 h-4 text-amber-600' />
        </div>
      </div>
    </a>
  );
};

export default AttractionCard;
