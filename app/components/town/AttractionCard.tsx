import React from 'react';
import { ExternalLink } from 'lucide-react';

interface AttractionCardProps {
  name: string;
  townName: string;
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
      className='relative flex flex-col overflow-hidden transition-all duration-300 bg-white shadow-sm group rounded-xl hover:shadow-md'
    >
      <div className='relative h-56 overflow-hidden'>
        <img
          src={image}
          alt={name}
          className='object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent'></div>
      </div>

      <div className='relative flex-1 p-6'>
        <div className='flex items-start justify-between'>
          <div>
            <h3 className='text-xl font-bold text-gray-900'>{name}</h3>
          </div>
          <span className='flex items-center justify-center w-8 h-8 rounded-full bg-amber-50 text-amber-600'>
            <ExternalLink className='w-4 h-4' />
          </span>
        </div>
        <p className='mt-4 text-sm text-gray-600 line-clamp-6'>{description}</p>
        <div className='absolute bottom-0 left-0 right-0 h-1 transition-transform duration-300 origin-left transform scale-x-0 bg-amber-500 group-hover:scale-x-100'></div>
      </div>
    </a>
  );
};

export default AttractionCard;
