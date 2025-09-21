import type { SanityPost } from '../types';

export default function SanityPage({
  loaderData,
}: {
  loaderData: { posts: SanityPost[] };
}) {
  const { posts } = loaderData;

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container max-w-4xl px-4 py-8 mx-auto'>
        <div className='mb-8'>
          <h1 className='mb-2 text-4xl font-bold text-gray-900'>
            Sanity CMS Posts
          </h1>
          <p className='text-gray-600'>Latest posts from our Sanity CMS</p>
        </div>

        <div className='grid gap-6'>
          {posts.length === 0 ? (
            <div className='py-12 text-center'>
              <p className='text-lg text-gray-500'>No posts found.</p>
            </div>
          ) : (
            posts.map((post) => (
              <div
                key={post._id}
                className='p-6 transition-shadow duration-200 bg-white rounded-lg shadow-md hover:shadow-lg'
              >
                <h2 className='mb-3 text-2xl font-semibold text-gray-900'>
                  {post.title}
                </h2>
                <div className='flex items-center justify-between text-sm text-gray-500'>
                  <span>
                    Published: {new Date(post.publishedAt).toLocaleDateString()}
                  </span>
                  <span className='px-2 py-1 text-xs text-blue-800 bg-blue-100 rounded-full'>
                    {post.slug.current}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
