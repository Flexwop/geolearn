import React from 'react';
import { countries } from '../data/countries';

export function CountryPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Country Information</h1>
        <div className="grid gap-6">
          {countries.map((country) => (
            <div key={country.name} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{country.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-gray-900">Basic Information</h3>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li>Domain: {country.domain}</li>
                    <li>Driving Side: {country.drivingSide}</li>
                    <li>Language(s): {country.language.join(', ')}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Meta Information</h3>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    {country.bollardType && <li>Bollards: {country.bollardType}</li>}
                    {country.licensePlateFormat && <li>License Plates: {country.licensePlateFormat}</li>}
                    {country.googleCar && <li>Google Car: {country.googleCar}</li>}
                  </ul>
                </div>
              </div>
              {country.additionalNotes && (
                <div className="mt-4">
                  <h3 className="font-medium text-gray-900">Additional Notes</h3>
                  <ul className="mt-2 list-disc list-inside space-y-1 text-gray-600">
                    {country.additionalNotes.map((note, index) => (
                      <li key={index}>{note}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}