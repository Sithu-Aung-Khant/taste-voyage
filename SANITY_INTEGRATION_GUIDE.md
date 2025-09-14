# Sanity Integration Guide for React + Vite

## Setup Instructions

### 1. Environment Variables

Create a `.env` file in your project root with the following variables:

```
VITE_SANITY_PROJECT_ID=your-project-id-here
VITE_SANITY_DATASET=production
```

Replace `your-project-id-here` with your actual Sanity project ID.

### 2. Sanity Schema Setup

You'll need to create the following document types in your Sanity Studio:

#### Town Schema

```javascript
{
  name: 'town',
  title: 'Town',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: Rule => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'image', title: 'Image', type: 'image' },
    { name: 'rating', title: 'Rating', type: 'number', validation: Rule => Rule.min(1).max(5) },
    { name: 'region', title: 'Region', type: 'string' },
    {
      name: 'coordinates',
      title: 'Coordinates',
      type: 'object',
      fields: [
        { name: 'lat', title: 'Latitude', type: 'number' },
        { name: 'lng', title: 'Longitude', type: 'number' }
      ]
    },
    { name: 'attractions', title: 'Attractions', type: 'array', of: [{ type: 'string' }] },
    { name: 'restaurants', title: 'Restaurants', type: 'array', of: [{ type: 'string' }] },
    { name: 'signatureDishes', title: 'Signature Dishes', type: 'array', of: [{ type: 'string' }] }
  ]
}
```

#### Food Schema

```javascript
{
  name: 'food',
  title: 'Food',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: Rule => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'image', title: 'Image', type: 'image' },
    { name: 'rating', title: 'Rating', type: 'number', validation: Rule => Rule.min(1).max(5) },
    { name: 'origin', title: 'Origin', type: 'array', of: [{ type: 'string' }] },
    { name: 'tasteTags', title: 'Taste Tags', type: 'array', of: [{ type: 'string' }] },
    { name: 'ingredients', title: 'Ingredients', type: 'array', of: [{ type: 'string' }] },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Main', value: 'main' },
          { title: 'Dessert', value: 'dessert' },
          { title: 'Snack', value: 'snack' },
          { title: 'Drink', value: 'drink' },
          { title: 'Appetizer', value: 'appetizer' }
        ]
      }
    },
    {
      name: 'spiceLevel',
      title: 'Spice Level',
      type: 'number',
      validation: Rule => Rule.min(1).max(5)
    },
    { name: 'isVegetarian', title: 'Vegetarian', type: 'boolean' },
    { name: 'wikipediaUrl', title: 'Wikipedia URL', type: 'url' }
  ]
}
```

### 3. Usage Examples

#### Using Sanity Data in Components

```tsx
import { useTowns } from '../hooks/useSanityData';
import { convertSanityTown } from '../utils/sanityConverters';

function TownsList() {
  const { towns, loading, error } = useTowns();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const convertedTowns = towns.map(convertSanityTown);

  return (
    <div>
      {convertedTowns.map((town) => (
        <div key={town.id}>
          <h2>{town.name}</h2>
          <p>{town.description}</p>
          <img src={town.image} alt={town.name} />
        </div>
      ))}
    </div>
  );
}
```

#### Gradual Migration

You can gradually migrate your components by:

1. Using the Sanity hooks alongside your existing static data
2. Converting Sanity data to your existing format using the converter functions
3. Eventually replacing static data imports with Sanity data

### 4. Next Steps

1. Set up your Sanity Studio with the schemas above
2. Add your project ID to the environment variables
3. Start migrating components one by one
4. Test the integration with your existing UI
