import React from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">GeoLearn</span>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link to="/meta/bollards" className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">
              Bollards
            </Link>
            <Link to="/meta/street-signs" className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">
              Street Signs
            </Link>
            <Link to="/countries" className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">
              Countries
            </Link>
          </div>

          <div className="flex items-center sm:hidden">
            <button className="p-2 rounded-md text-gray-400 hover:text-gray-500">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}