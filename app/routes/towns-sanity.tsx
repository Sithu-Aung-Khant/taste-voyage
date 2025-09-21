import type { SanityTown } from '../types';
import { client } from '../sanity/client';
import AllTownsSanityPage from '../pages/AllTownsSanityPage';

const TOWNS_QUERY = `*[
  _type == "Town"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, name, slug, description, imageUrl, rating, region, coordinates, attractions, restaurants, signatureDishes}`;

export async function loader() {
  return { sanityTowns: await client.fetch<SanityTown[]>(TOWNS_QUERY) };
}

export default function TownsSanity({
  loaderData,
}: {
  loaderData: { sanityTowns: SanityTown[] };
}) {
  return <AllTownsSanityPage loaderData={loaderData} />;
}
