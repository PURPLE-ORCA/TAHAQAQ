import type { Establishment } from '../types';

export const establishments: Establishment[] = [
  {
    id: 'rabat-central-hospital',
    name: 'Rabat Central Hospital',
    category: 'Hospital',
    address: 'Avenue Al Maarif, Rabat',
    city: 'Rabat',
    coordinates: { latitude: 33.9902, longitude: -6.8436 },
    status: 'priority',
    reviews: 128,
    complaints: 9,
    recentSignal: '2 complaints this week',
  },
  {
    id: 'casablanca-tech-school',
    name: 'Casablanca Tech School',
    category: 'School',
    address: 'Bourgogne District, Casablanca',
    city: 'Casablanca',
    coordinates: { latitude: 33.5899, longitude: -7.6039 },
    status: 'verified',
    reviews: 64,
    complaints: 2,
    recentSignal: 'Top-rated by students',
  },
  {
    id: 'marrakesh-civic-office',
    name: 'Marrakesh Civic Office',
    category: 'Public Office',
    address: 'Gueliz, Marrakesh',
    city: 'Marrakesh',
    coordinates: { latitude: 31.6288, longitude: -7.9811 },
    status: 'watch',
    reviews: 47,
    complaints: 5,
    recentSignal: 'Queue delays reported',
  },
  {
    id: 'tangier-community-clinic',
    name: 'Tangier Community Clinic',
    category: 'Clinic',
    address: 'Iberia Quarter, Tangier',
    city: 'Tangier',
    coordinates: { latitude: 35.7595, longitude: -5.834 },
    status: 'new',
    reviews: 18,
    complaints: 1,
    recentSignal: 'Recently added to the map',
  },
  {
    id: 'fez-central-library',
    name: 'Fez Central Library',
    category: 'Library',
    address: 'Ville Nouvelle, Fez',
    city: 'Fez',
    coordinates: { latitude: 34.0243, longitude: -5.0003 },
    status: 'verified',
    reviews: 92,
    complaints: 0,
    recentSignal: 'Clean record for 30 days',
  },
  {
    id: 'agadir-coastal-market',
    name: 'Agadir Coastal Market',
    category: 'Marketplace',
    address: 'Corniche, Agadir',
    city: 'Agadir',
    coordinates: { latitude: 30.4278, longitude: -9.5981 },
    status: 'watch',
    reviews: 35,
    complaints: 4,
    recentSignal: 'Access and pricing concerns',
  },
];

export const statusStyles: Record<Establishment['status'], string> = {
  verified: 'bg-emerald-100 text-emerald-700',
  watch: 'bg-amber-100 text-amber-800',
  new: 'bg-sky-100 text-sky-700',
  priority: 'bg-rose-100 text-rose-700',
};

export const statusLabels: Record<Establishment['status'], string> = {
  verified: 'Verified',
  watch: 'Watchlist',
  new: 'New',
  priority: 'Priority',
};

export const mapCenter = {
  latitude: 33.5731,
  longitude: -7.5898,
};

export const mapCamera = {
  coordinates: mapCenter,
  zoom: 6.5,
};

export const markers = establishments.map((item) => ({
  id: item.id,
  coordinates: item.coordinates,
  title: item.name,
  snippet: `${item.category} • ${item.city}`,
  showCallout: true,
  zIndex: item.status === 'priority' ? 10 : 1,
}));
