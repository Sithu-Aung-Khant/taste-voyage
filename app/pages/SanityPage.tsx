import type { SanityTown } from '../types';

export default function SanityPage({
  loaderData,
}: {
  loaderData: { towns: SanityTown[] };
}) {
  const { towns } = loaderData;

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container max-w-4xl px-4 py-8 mx-auto'>
        <div className='mb-8'>
          <h1 className='mb-2 text-4xl font-bold text-gray-900'>
            Sanity CMS Towns
          </h1>
          <p className='text-gray-600'>Latest towns from our Sanity CMS</p>
        </div>

        <div className='grid gap-6'>
          {towns.length === 0 ? (
            <div className='py-12 text-center'>
              <p className='text-lg text-gray-500'>No towns found.</p>
            </div>
          ) : (
            towns.map((town) => (
              <div
                key={town._id}
                className='p-6 transition-shadow duration-200 bg-white rounded-lg shadow-md hover:shadow-lg'
              >
                <div className='flex items-start justify-between mb-3'>
                  <h2 className='text-2xl font-semibold text-gray-900'>
                    {town.name}
                  </h2>
                  {town.rating && (
                    <div className='flex items-center'>
                      <span className='text-yellow-500'>★</span>
                      <span className='ml-1 text-sm text-gray-600'>
                        {town.rating.toFixed(1)}
                      </span>
                    </div>
                  )}
                </div>

                {town.description && (
                  <p className='mb-3 text-gray-600'>{town.description}</p>
                )}

                <div className='flex flex-wrap gap-2 mb-3'>
                  {town.region && (
                    <span className='px-2 py-1 text-xs text-blue-800 bg-blue-100 rounded-full'>
                      {town.region}
                    </span>
                  )}
                  <span className='px-2 py-1 text-xs text-green-800 bg-green-100 rounded-full'>
                    {town.slug.current}
                  </span>
                </div>

                {town.imageUrl && (
                  <div className='mb-3'>
                    <img
                      src={town.imageUrl}
                      alt={town.name}
                      className='object-cover w-full h-48 rounded-lg'
                    />
                  </div>
                )}

                <div className='grid grid-cols-1 gap-4 text-sm md:grid-cols-3'>
                  {town.attractions && town.attractions.length > 0 && (
                    <div>
                      <h4 className='mb-1 font-semibold text-gray-800'>
                        Attractions
                      </h4>
                      <ul className='text-gray-600'>
                        {town.attractions
                          .slice(0, 3)
                          .map((attraction, index) => (
                            <li key={index}>• {attraction}</li>
                          ))}
                        {town.attractions.length > 3 && (
                          <li className='text-gray-500'>
                            +{town.attractions.length - 3} more
                          </li>
                        )}
                      </ul>
                    </div>
                  )}

                  {town.restaurants && town.restaurants.length > 0 && (
                    <div>
                      <h4 className='mb-1 font-semibold text-gray-800'>
                        Restaurants
                      </h4>
                      <ul className='text-gray-600'>
                        {town.restaurants
                          .slice(0, 3)
                          .map((restaurant, index) => (
                            <li key={index}>• {restaurant}</li>
                          ))}
                        {town.restaurants.length > 3 && (
                          <li className='text-gray-500'>
                            +{town.restaurants.length - 3} more
                          </li>
                        )}
                      </ul>
                    </div>
                  )}

                  {town.signatureDishes && town.signatureDishes.length > 0 && (
                    <div>
                      <h4 className='mb-1 font-semibold text-gray-800'>
                        Signature Dishes
                      </h4>
                      <ul className='text-gray-600'>
                        {town.signatureDishes.slice(0, 3).map((dish, index) => (
                          <li key={index}>• {dish}</li>
                        ))}
                        {town.signatureDishes.length > 3 && (
                          <li className='text-gray-500'>
                            +{town.signatureDishes.length - 3} more
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
