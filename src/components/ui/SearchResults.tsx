import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Utensils, Waves, Landmark } from 'lucide-react';

interface SearchResult {
  id: string;
  name: string;
  type: 'town' | 'food' | 'beach' | 'attraction';
  description: string;
  image?: string;
}

interface SearchResultsProps {
  results: SearchResult[];
  onClose: () => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, onClose }) => {
  const navigate = useNavigate();

  const getIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'town':
        return <MapPin className='w-4 h-4' />;
      case 'food':
        return <Utensils className='w-4 h-4' />;
      case 'beach':
        return <Waves className='w-4 h-4' />;
      case 'attraction':
        return <Landmark className='w-4 h-4' />;
    }
  };

  const handleClick = (result: SearchResult) => {
    switch (result.type) {
      case 'town':
        navigate(`/towns/${result.id}`);
        break;
      case 'food':
        navigate(`/foods`); // Since we don't have individual food pages
        break;
      case 'beach':
        navigate(`/beaches/${result.id}`);
        break;
      case 'attraction':
        // Find the parent town and navigate there
        navigate(`/towns/${result.id.split('-')[0]}`);
        break;
    }
    onClose();
  };

  if (results.length === 0) {
    return null;
  }

  return (
    <div className='absolute left-0 right-0 z-50 mt-2 overflow-hidden bg-white rounded-lg shadow-lg'>
      <div className='max-h-96 overflow-y-auto'>
        {results.map((result) => (
          <button
            key={`${result.type}-${result.id}`}
            className='flex items-start w-full p-4 text-left transition-colors hover:bg-gray-50'
            onClick={() => handleClick(result)}
          >
            <div className='flex items-center justify-center w-8 h-8 mr-4 text-amber-600 bg-amber-100 rounded-full'>
              {getIcon(result.type)}
            </div>
            <div className='flex-1 min-w-0'>
              <div className='flex items-center gap-2'>
                <p className='text-sm font-medium text-gray-900'>
                  {result.name}
                </p>
                <span className='px-2 py-1 text-xs font-medium text-amber-800 bg-amber-100 rounded-full'>
                  {result.type}
                </span>
              </div>
              <p className='mt-1 text-sm text-gray-500 line-clamp-2'>
                {result.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
