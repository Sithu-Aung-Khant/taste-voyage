import type { SanityPost } from '../types';
import { client } from '../sanity/client';
import SanityPage from '../pages/SanityPage';

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

export async function loader() {
  return { posts: await client.fetch<SanityPost[]>(POSTS_QUERY) };
}

export default function Sanity({
  loaderData,
}: {
  loaderData: { posts: SanityPost[] };
}) {
  return <SanityPage loaderData={loaderData} />;
}
