export type Establishment = {
  id: string;
  name: string;
  category: string;
  address: string;
  city: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  status: 'verified' | 'watch' | 'new' | 'priority';
  reviews: number;
  complaints: number;
  recentSignal: string;
};
