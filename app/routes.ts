import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/_index.tsx'),
  route('towns', 'routes/towns._index.tsx'),
  route('towns/top-cities', 'routes/towns.top-cities.tsx'),
  route('towns/shan-highlands', 'routes/towns.shan-highlands.tsx'),
  route('towns/southeast', 'routes/towns.southeast.tsx'),
  route('towns/:id', 'routes/towns.$id.tsx'),
  route('beaches', 'routes/beaches._index.tsx'),
  route('beaches/:id', 'routes/beaches.$id.tsx'),
  route('foods', 'routes/foods.tsx'),
  route('contact', 'routes/contact.tsx'),
] satisfies RouteConfig;
