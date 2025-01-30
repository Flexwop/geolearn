import React from 'react';
import { CategoryCard } from '../components/CategoryCard';
import { categories } from '../data/categories';
import { Globe } from 'lucide-react';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-b from-blue-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="h-16 w-16 mx-auto text-white mb-6" />
          <h1 className="text-4xl font-bold text-white mb-4">
            Master GeoGuessr Meta Techniques
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Learn country-specific features, practice meta techniques, and improve your GeoGuessr skills
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}