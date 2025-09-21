import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '995sglk8',
  dataset: 'taste-voyage',
  apiVersion: '2024-01-01',
  useCdn: false,
});
