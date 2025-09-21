import type { SanityTown } from '../types';
import { client } from '../sanity/client';
import SanityPage from '../pages/SanityPage';

const TOWNS_QUERY = `*[
  _type == "Town"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, name, slug, description, imageUrl, rating, region, coordinates, attractions, restaurants, signatureDishes}`;

export async function loader() {
  return { towns: await client.fetch<SanityTown[]>(TOWNS_QUERY) };
}

export default function Sanity({
  loaderData,
}: {
  loaderData: { towns: SanityTown[] };
}) {
  return <SanityPage loaderData={loaderData} />;
}
