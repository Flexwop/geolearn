import { MetaCategory } from '../types';

export const categories: MetaCategory[] = [
  {
    id: 'bollards',
    title: 'Bollards',
    description: 'Learn about different types of bollards across countries',
    icon: 'pole',
    path: '/meta/bollards'
  },
  {
    id: 'street-signs',
    title: 'Street Signs',
    description: 'Identify countries by their street sign designs',
    icon: 'traffic-sign',
    path: '/meta/street-signs'
  },
  {
    id: 'countries',
    title: 'Country Guide',
    description: 'Detailed information about specific countries',
    icon: 'globe',
    path: '/countries'
  },
  {
    id: 'car-meta',
    title: 'Google Cars',
    description: 'Learn about different Google Street View cars',
    icon: 'car',
    path: '/meta/cars'
  }
];