/**
 * Shared mock data for the Map page.
 * Sourced from the mobile app's establishment constants.
 * No backend — static prototype data for the hackathon.
 */

export type EstablishmentStatus = "verified" | "watch" | "new" | "priority";

export type MapEstablishment = {
  id: string;
  name: string;
  category: string;
  address: string;
  city: string;
  coordinates: { latitude: number; longitude: number };
  status: EstablishmentStatus;
  reviews: number;
  complaints: number;
  recentSignal: string;
  overallScore: number;
  scoreCategories: {
    bribery: number;
    hygiene: number;
    waitTime: number;
    equipment: number;
    staff: number;
  };
};

export type MapReview = {
  id: string;
  establishmentId: string;
  establishmentName: string;
  category: string;
  score: number;
  snippet: string;
  author: string;
  relativeTime: string;
  status: EstablishmentStatus;
};

export const establishments: MapEstablishment[] = [
  {
    id: "rabat-central-hospital",
    name: "Rabat Central Hospital",
    category: "Hospital",
    address: "Avenue Al Maarif, Rabat",
    city: "Rabat",
    coordinates: { latitude: 33.9902, longitude: -6.8436 },
    status: "priority",
    reviews: 128,
    complaints: 9,
    recentSignal: "2 complaints this week",
    overallScore: 3,
    scoreCategories: { bribery: 2, hygiene: 3, waitTime: 1, equipment: 4, staff: 5 },
  },
  {
    id: "rabat-grand-poste",
    name: "La Grande Poste",
    category: "Public Office",
    address: "Avenue Mohammed V, Rabat",
    city: "Rabat",
    coordinates: { latitude: 34.0195, longitude: -6.8362 },
    status: "verified",
    reviews: 72,
    complaints: 1,
    recentSignal: "Efficient mail processing",
    overallScore: 8,
    scoreCategories: { bribery: 9, hygiene: 8, waitTime: 6, equipment: 8, staff: 9 },
  },
  {
    id: "rabat-parlement",
    name: "Le Parlement du Maroc",
    category: "Public Office",
    address: "Avenue Mohammed V, Rabat",
    city: "Rabat",
    coordinates: { latitude: 34.0182, longitude: -6.8368 },
    status: "priority",
    reviews: 154,
    complaints: 8,
    recentSignal: "High security checkpoint delays",
    overallScore: 4,
    scoreCategories: { bribery: 5, hygiene: 4, waitTime: 2, equipment: 5, staff: 4 },
  },
  {
    id: "hotel-balima",
    name: "Balima Minaret Suites",
    category: "Hotel",
    address: "Avenue Mohammed V, Rabat",
    city: "Rabat",
    coordinates: { latitude: 34.0186, longitude: -6.8372 },
    status: "verified",
    reviews: 90,
    complaints: 0,
    recentSignal: "Renovated historical suites",
    overallScore: 9,
    scoreCategories: { bribery: 10, hygiene: 9, waitTime: 8, equipment: 9, staff: 9 },
  },
  {
    id: "mcdonalds-rabat-ville",
    name: "McDonald's Rabat Ville",
    category: "Restaurant",
    address: "Avenue Mohammed V, Rabat",
    city: "Rabat",
    coordinates: { latitude: 34.0171, longitude: -6.8365 },
    status: "verified",
    reviews: 210,
    complaints: 3,
    recentSignal: "Busy during lunch hours",
    overallScore: 8,
    scoreCategories: { bribery: 10, hygiene: 8, waitTime: 7, equipment: 9, staff: 8 },
  },
  {
    id: "le-petit-beur",
    name: "Le Petit Beur",
    category: "Restaurant",
    address: "Rue Damas, Rabat",
    city: "Rabat",
    coordinates: { latitude: 34.0180, longitude: -6.8350 },
    status: "verified",
    reviews: 88,
    complaints: 2,
    recentSignal: "Authentic tagine and couscous",
    overallScore: 7,
    scoreCategories: { bribery: 9, hygiene: 7, waitTime: 6, equipment: 7, staff: 8 },
  },
  {
    id: "boho-cafe",
    name: "Boho Cafe",
    category: "Cafe",
    address: "Rue Moulay Rachid, Rabat",
    city: "Rabat",
    coordinates: { latitude: 34.0205, longitude: -6.8395 },
    status: "new",
    reviews: 12,
    complaints: 0,
    recentSignal: "Excellent specialty coffee",
    overallScore: 6,
    scoreCategories: { bribery: 8, hygiene: 7, waitTime: 5, equipment: 6, staff: 6 },
  },
  {
    id: "cozy-cafe",
    name: "Cozy Cafe",
    category: "Cafe",
    address: "Avenue Allal Ben Abdallah, Rabat",
    city: "Rabat",
    coordinates: { latitude: 34.0165, longitude: -6.8340 },
    status: "watch",
    reviews: 43,
    complaints: 4,
    recentSignal: "WiFi instability reported",
    overallScore: 5,
    scoreCategories: { bribery: 7, hygiene: 5, waitTime: 4, equipment: 3, staff: 6 },
  },
  {
    id: "rabat-medina-market",
    name: "Bab El Had Medina Market",
    category: "Marketplace",
    address: "Avenue Hassan II, Rabat",
    city: "Rabat",
    coordinates: { latitude: 34.0215, longitude: -6.8405 },
    status: "priority",
    reviews: 320,
    complaints: 18,
    recentSignal: "Congested walkways, watch for pickpockets",
    overallScore: 3,
    scoreCategories: { bribery: 4, hygiene: 2, waitTime: 3, equipment: 2, staff: 3 },
  },
  {
    id: "clinic-des-orangers",
    name: "Clinique des Orangers",
    category: "Clinic",
    address: "Rue d'Orangers, Rabat",
    city: "Rabat",
    coordinates: { latitude: 34.0135, longitude: -6.8445 },
    status: "watch",
    reviews: 55,
    complaints: 6,
    recentSignal: "Long wait times at reception",
    overallScore: 4,
    scoreCategories: { bribery: 6, hygiene: 5, waitTime: 3, equipment: 5, staff: 4 },
  },
  {
    id: "lycee-descartes",
    name: "Lycée Descartes",
    category: "School",
    address: "Avenue Chellah, Rabat",
    city: "Rabat",
    coordinates: { latitude: 34.0112, longitude: -6.8392 },
    status: "verified",
    reviews: 145,
    complaints: 2,
    recentSignal: "Strong academic rating",
    overallScore: 9,
    scoreCategories: { bribery: 10, hygiene: 9, waitTime: 8, equipment: 9, staff: 9 },
  },
  {
    id: "dar-naji",
    name: "Dar Naji Restaurant",
    category: "Restaurant",
    address: "Avenue Al Jazair, Rabat",
    city: "Rabat",
    coordinates: { latitude: 34.0150, longitude: -6.8410 },
    status: "verified",
    reviews: 198,
    complaints: 5,
    recentSignal: "Popular traditional Moroccan dining",
    overallScore: 8,
    scoreCategories: { bribery: 9, hygiene: 8, waitTime: 7, equipment: 8, staff: 9 },
  },
  {
    id: "villa-mandarine",
    name: "Villa Mandarine",
    category: "Hotel",
    address: "Rue Ouled Bousbaa, Rabat",
    city: "Rabat",
    coordinates: { latitude: 33.9725, longitude: -6.8290 },
    status: "verified",
    reviews: 76,
    complaints: 1,
    recentSignal: "Tranquil orange grove gardens",
    overallScore: 9,
    scoreCategories: { bribery: 10, hygiene: 10, waitTime: 9, equipment: 9, staff: 9 },
  },
  {
    id: "mauresque-cafe",
    name: "Café Maure Kasbah",
    category: "Cafe",
    address: "Kasbah of the Udayas, Rabat",
    city: "Rabat",
    coordinates: { latitude: 34.0322, longitude: -6.8315 },
    status: "verified",
    reviews: 112,
    complaints: 1,
    recentSignal: "Stunning river views, tea and pastries",
    overallScore: 8,
    scoreCategories: { bribery: 9, hygiene: 8, waitTime: 7, equipment: 8, staff: 8 },
  },
  {
    id: "national-library-rabat",
    name: "Bibliothèque Nationale",
    category: "Library",
    address: "Avenue Ibn Khaldoun, Rabat",
    city: "Rabat",
    coordinates: { latitude: 34.0068, longitude: -6.8475 },
    status: "verified",
    reviews: 250,
    complaints: 3,
    recentSignal: "Excellent study environment and resources",
    overallScore: 8,
    scoreCategories: { bribery: 9, hygiene: 9, waitTime: 8, equipment: 8, staff: 8 },
  },
  {
    id: "rabat-art-museum",
    name: "Mohammed VI Art Museum",
    category: "Public Office",
    address: "Avenue Allal Ben Abdallah, Rabat",
    city: "Rabat",
    coordinates: { latitude: 34.0155, longitude: -6.8360 },
    status: "verified",
    reviews: 84,
    complaints: 0,
    recentSignal: "Clean facilities and rich exhibits",
    overallScore: 9,
    scoreCategories: { bribery: 10, hygiene: 9, waitTime: 9, equipment: 9, staff: 8 },
  },
  {
    id: "cinema-renaissance",
    name: "Café Renaissance",
    category: "Cafe",
    address: "Avenue Mohammed V, Rabat",
    city: "Rabat",
    coordinates: { latitude: 34.0177, longitude: -6.8369 },
    status: "verified",
    reviews: 49,
    complaints: 1,
    recentSignal: "Cultural hub for music and films",
    overallScore: 7,
    scoreCategories: { bribery: 9, hygiene: 7, waitTime: 7, equipment: 7, staff: 8 },
  },
];

export const latestReviews: MapReview[] = [
  {
    id: "rev-1",
    establishmentId: "rabat-central-hospital",
    establishmentName: "Rabat Central Hospital",
    category: "Hospital",
    score: 2,
    snippet: "Waited 4 hours in the emergency ward. Nurse demanded 200 MAD to skip the queue.",
    author: "Citizen #4821",
    relativeTime: "12 min ago",
    status: "priority",
  },
  {
    id: "rev-2",
    establishmentId: "rabat-medina-market",
    establishmentName: "Bab El Had Medina Market",
    category: "Marketplace",
    score: 3,
    snippet: "Congested walkways near the spice section. Saw someone pickpocketing.",
    author: "Citizen #3019",
    relativeTime: "28 min ago",
    status: "priority",
  },
  {
    id: "rev-3",
    establishmentId: "rabat-parlement",
    establishmentName: "Le Parlement du Maroc",
    category: "Public Office",
    score: 4,
    snippet: "Security checkpoint was painfully slow. 45 min just to enter the building.",
    author: "Citizen #1577",
    relativeTime: "1 hr ago",
    status: "priority",
  },
  {
    id: "rev-4",
    establishmentId: "clinic-des-orangers",
    establishmentName: "Clinique des Orangers",
    category: "Clinic",
    score: 4,
    snippet: "Reception desk unstaffed for 30 minutes. Multiple patients left waiting.",
    author: "Citizen #2903",
    relativeTime: "2 hr ago",
    status: "watch",
  },
  {
    id: "rev-5",
    establishmentId: "hotel-balima",
    establishmentName: "Balima Minaret Suites",
    category: "Hotel",
    score: 9,
    snippet: "Beautifully renovated rooms. Staff were attentive and professional.",
    author: "Citizen #884",
    relativeTime: "3 hr ago",
    status: "verified",
  },
  {
    id: "rev-6",
    establishmentId: "lycee-descartes",
    establishmentName: "Lycée Descartes",
    category: "School",
    score: 9,
    snippet: "Excellent facility. Well-maintained labs and engaged teachers.",
    author: "Citizen #4401",
    relativeTime: "4 hr ago",
    status: "verified",
  },
  {
    id: "rev-7",
    establishmentId: "dar-naji",
    establishmentName: "Dar Naji Restaurant",
    category: "Restaurant",
    score: 8,
    snippet: "Authentic Moroccan cuisine. Portions generous and pricing fair.",
    author: "Citizen #772",
    relativeTime: "5 hr ago",
    status: "verified",
  },
  {
    id: "rev-8",
    establishmentId: "cozy-cafe",
    establishmentName: "Cozy Cafe",
    category: "Cafe",
    score: 5,
    snippet: "WiFi dropped twice during my visit. Coffee was decent though.",
    author: "Citizen #3310",
    relativeTime: "6 hr ago",
    status: "watch",
  },
];

export const statusStyles: Record<EstablishmentStatus, string> = {
  verified: "bg-[#00A040]/15 text-[#006020] dark:bg-[#00A040]/20 dark:text-[#7cfd8f]",
  watch: "bg-[#F2C94C]/20 text-[#8B6914] dark:bg-[#F2C94C]/20 dark:text-[#F2C94C]",
  new: "bg-[#1d8cf8]/15 text-[#1d8cf8] dark:bg-[#1d8cf8]/20 dark:text-[#60a5fa]",
  priority: "bg-[#ba1a1a]/10 text-[#ba1a1a] dark:bg-[#ba1a1a]/20 dark:text-[#ffdad6]",
};

export const scoreColor = (score: number) => {
  if (score >= 7) return { bg: "bg-[#00A040]", text: "text-white" };
  if (score >= 4) return { bg: "bg-[#F2C94C]", text: "text-[#161d16]" };
  return { bg: "bg-[#ba1a1a]", text: "text-white" };
};

export const mapCenter = { latitude: 34.02, longitude: -6.84 };
