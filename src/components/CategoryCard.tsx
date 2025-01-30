import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { MetaCategory } from '../types';

interface CategoryCardProps {
  category: MetaCategory;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = Icons[category.icon as keyof typeof Icons];

  return (
    <Link to={category.path} className="block">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
        <div className="flex items-center space-x-4">
          <div className="bg-blue-100 p-3 rounded-full">
            {Icon && <Icon className="h-6 w-6 text-blue-600" />}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
            <p className="text-gray-600 mt-1">{category.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}