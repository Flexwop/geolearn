export interface CountryInfo {
  name: string;
  domain: string;
  drivingSide: 'left' | 'right';
  language: string[];
  bollardType?: string;
  licensePlateFormat?: string;
  googleCar?: string;
  additionalNotes?: string[];
}

export interface MetaCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
}

export interface MetaItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  content: string;
}