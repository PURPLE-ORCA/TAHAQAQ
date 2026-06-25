import { Establishment } from "./index";

export const extraEstablishments: Establishment[] = [
  {
    id: "est-extra-001",
    name: "CHU Ibn Rochd Casablanca",
    category: "Hospital",
    address: "Avenue 2 Mars, Casablanca",
    city: "Casablanca",
    coordinates: { latitude: 33.5733, longitude: -7.6264 },
    status: "watch",
    reviews: 33,
    complaints: 9,
    recentSignal: "Clean waiting rooms and prompt triage.",
    overallScore: 8.2,
    scoreCategories: {
      bribery: Math.round(bribery: 7.replace("bribery: ","")),
      hygiene: 8,
      waitTime: 8,
      equipment: 9,
      staff: 8
    }
  },
  {
    id: "est-extra-002",
    name: "CHU Ibn Sina Rabat",
    category: "Hospital",
    address: "Rue Ghandi, Rabat",
    city: "Rabat",
    coordinates: { latitude: 33.9983, longitude: -6.8476 },
    status: "verified",
    reviews: 23,
    complaints: 6,
    recentSignal: "Staff shortage during the night shift.",
    overallScore: 4.2,
    scoreCategories: {
      bribery: Math.round(bribery: 6.replace("bribery: ","")),
      hygiene: 3,
      waitTime: 1,
      equipment: 6,
      staff: 5
    }
  },
  {
    id: "est-extra-003",
    name: "CHU Hassan II Fez",
    category: "Hospital",
    address: "Avenue Hassan II, Ville Nouvelle",
    city: "Fez",
    coordinates: { latitude: 34.0331, longitude: -5.0003 },
    status: "verified",
    reviews: 53,
    complaints: 0,
    recentSignal: "Bribery allegation at the registration desk.",
    overallScore: 4.8,
    scoreCategories: {
      bribery: Math.round(bribery: 8.replace("bribery: ","")),
      hygiene: 1,
      waitTime: 9,
      equipment: 4,
      staff: 1
    }
  },
  {
    id: "est-extra-004",
    name: "CHU Mohammed VI Marrakech",
    category: "Hospital",
    address: "Rue de la Liberté, Marrakech",
    city: "Marrakech",
    coordinates: { latitude: 31.6295, longitude: -7.9811 },
    status: "new",
    reviews: 60,
    complaints: 6,
    recentSignal: "Lack of heating in ward rooms.",
    overallScore: 5.6,
    scoreCategories: {
      bribery: Math.round(bribery: 6.replace("bribery: ","")),
      hygiene: 8,
      waitTime: 4,
      equipment: 7,
      staff: 3
    }
  },
  {
    id: "est-extra-005",
    name: "CHU Mohammed VI Tangier",
    category: "Hospital",
    address: "Rue de la Plage, Tangier",
    city: "Tangier",
    coordinates: { latitude: 35.7595, longitude: -5.834 },
    status: "watch",
    reviews: 127,
    complaints: 2,
    recentSignal: "Clean and sterile conditions maintained.",
    overallScore: 8.4,
    scoreCategories: {
      bribery: Math.round(bribery: 8.replace("bribery: ","")),
      hygiene: 9,
      waitTime: 6,
      equipment: 10,
      staff: 9
    }
  },
  {
    id: "est-extra-006",
    name: "CHU Agadir",
    category: "Hospital",
    address: "Boulevard du 20 Août, Agadir",
    city: "Agadir",
    coordinates: { latitude: 30.4278, longitude: -9.5981 },
    status: "verified",
    reviews: 26,
    complaints: 0,
    recentSignal: "Shortage of basic medical supplies.",
    overallScore: 7.5,
    scoreCategories: {
      bribery: Math.round(bribery: 9.replace("bribery: ","")),
      hygiene: 9,
      waitTime: 7,
      equipment: 4,
      staff: 9
    }
  },
  {
    id: "est-extra-007",
    name: "CHU Oujda",
    category: "Hospital",
    address: "Avenue Allal El Fassi, Oujda",
    city: "Oujda",
    coordinates: { latitude: 34.6867, longitude: -1.9114 },
    status: "priority",
    reviews: 116,
    complaints: 10,
    recentSignal: "Staff shortage during the night shift.",
    overallScore: 6.2,
    scoreCategories: {
      bribery: Math.round(bribery: 9.replace("bribery: ","")),
      hygiene: 6,
      waitTime: 6,
      equipment: 6,
      staff: 3
    }
  },
  {
    id: "est-extra-008",
    name: "CHU Kenitra",
    category: "Hospital",
    address: "Avenue Diouri, Kenitra",
    city: "Kenitra",
    coordinates: { latitude: 34.261, longitude: -6.5802 },
    status: "watch",
    reviews: 17,
    complaints: 14,
    recentSignal: "Clean and sterile conditions maintained.",
    overallScore: 5.6,
    scoreCategories: {
      bribery: Math.round(bribery: 7.replace("bribery: ","")),
      hygiene: 9,
      waitTime: 1,
      equipment: 9,
      staff: 2
    }
  },
  {
    id: "est-extra-009",
    name: "CHU Tetouan",
    category: "Hospital",
    address: "Avenue Hassan II, Tetouan",
    city: "Tetouan",
    coordinates: { latitude: 35.5785, longitude: -5.3684 },
    status: "priority",
    reviews: 199,
    complaints: 2,
    recentSignal: "Excellent care by the nursing staff.",
    overallScore: 5.7,
    scoreCategories: {
      bribery: Math.round(bribery: 10.replace("bribery: ","")),
      hygiene: 4,
      waitTime: 6,
      equipment: 4,
      staff: 5
    }
  },
  {
    id: "est-extra-010",
    name: "CHU Beni Mellal",
    category: "Hospital",
    address: "Route de Marrakech, Beni Mellal",
    city: "Beni Mellal",
    coordinates: { latitude: 32.3373, longitude: -6.3498 },
    status: "verified",
    reviews: 57,
    complaints: 9,
    recentSignal: "Clean and sterile conditions maintained.",
    overallScore: 4.8,
    scoreCategories: {
      bribery: Math.round(bribery: 8.replace("bribery: ","")),
      hygiene: 2,
      waitTime: 1,
      equipment: 10,
      staff: 4
    }
  },
  {
    id: "est-extra-011",
    name: "Hopital Provincial Settat",
    category: "Hospital",
    address: "Quartier El Farah, Settat",
    city: "Settat",
    coordinates: { latitude: 32.9942, longitude: -7.62 },
    status: "watch",
    reviews: 121,
    complaints: 8,
    recentSignal: "Bribery allegation at the registration desk.",
    overallScore: 5.4,
    scoreCategories: {
      bribery: Math.round(bribery: 8.replace("bribery: ","")),
      hygiene: 6,
      waitTime: 6,
      equipment: 5,
      staff: 2
    }
  },
  {
    id: "est-extra-012",
    name: "Hopital Provincial El Jadida",
    category: "Hospital",
    address: "Avenue Mohamed VI, El Jadida",
    city: "El Jadida",
    coordinates: { latitude: 33.2549, longitude: -8.5009 },
    status: "watch",
    reviews: 68,
    complaints: 11,
    recentSignal: "Excellent care by the nursing staff.",
    overallScore: 5.3,
    scoreCategories: {
      bribery: Math.round(bribery: 10.replace("bribery: ","")),
      hygiene: 1,
      waitTime: 3,
      equipment: 8,
      staff: 5
    }
  },
  {
    id: "est-extra-013",
    name: "Hopital Provincial Safi",
    category: "Hospital",
    address: "Avenue Sidi Bouzid, Safi",
    city: "Safi",
    coordinates: { latitude: 32.2994, longitude: -9.2372 },
    status: "priority",
    reviews: 77,
    complaints: 13,
    recentSignal: "Clean waiting rooms and prompt triage.",
    overallScore: 6.4,
    scoreCategories: {
      bribery: Math.round(bribery: 9.replace("bribery: ","")),
      hygiene: 7,
      waitTime: 5,
      equipment: 4,
      staff: 6
    }
  },
  {
    id: "est-extra-014",
    name: "Hopital Provincial Taza",
    category: "Hospital",
    address: "Avenue de la Gare, Taza",
    city: "Taza",
    coordinates: { latitude: 34.2133, longitude: -4.0103 },
    status: "priority",
    reviews: 90,
    complaints: 10,
    recentSignal: "Long wait times in emergency room.",
    overallScore: 5.4,
    scoreCategories: {
      bribery: Math.round(bribery: 6.replace("bribery: ","")),
      hygiene: 4,
      waitTime: 5,
      equipment: 2,
      staff: 10
    }
  },
  {
    id: "est-extra-015",
    name: "Hopital Provincial Nador",
    category: "Hospital",
    address: "Avenue Hassan II, Nador",
    city: "Nador",
    coordinates: { latitude: 35.1688, longitude: -2.9286 },
    status: "priority",
    reviews: 17,
    complaints: 3,
    recentSignal: "Clean waiting rooms and prompt triage.",
    overallScore: 5.3,
    scoreCategories: {
      bribery: Math.round(bribery: 4.replace("bribery: ","")),
      hygiene: 8,
      waitTime: 7,
      equipment: 3,
      staff: 4
    }
  },
  {
    id: "est-extra-016",
    name: "Hopital Provincial Tiznit",
    category: "Hospital",
    address: "Boulevard Mohammed V, Tiznit",
    city: "Tiznit",
    coordinates: { latitude: 29.6974, longitude: -9.8022 },
    status: "verified",
    reviews: 116,
    complaints: 3,
    recentSignal: "Overcrowding in the outpatient clinic.",
    overallScore: 4.7,
    scoreCategories: {
      bribery: Math.round(bribery: 9.replace("bribery: ","")),
      hygiene: 3,
      waitTime: 1,
      equipment: 9,
      staff: 1
    }
  },
  {
    id: "est-extra-017",
    name: "Hopital Provincial Errachidia",
    category: "Hospital",
    address: "Avenue Hassan II, Errachidia",
    city: "Errachidia",
    coordinates: { latitude: 31.9314, longitude: -4.4271 },
    status: "watch",
    reviews: 55,
    complaints: 8,
    recentSignal: "Clean waiting rooms and prompt triage.",
    overallScore: 6.8,
    scoreCategories: {
      bribery: Math.round(bribery: 6.replace("bribery: ","")),
      hygiene: 7,
      waitTime: 5,
      equipment: 10,
      staff: 7
    }
  },
  {
    id: "est-extra-018",
    name: "Hopital Provincial Khouribga",
    category: "Hospital",
    address: "Boulevard Moulay Youssef, Khouribga",
    city: "Khouribga",
    coordinates: { latitude: 32.8811, longitude: -6.9063 },
    status: "verified",
    reviews: 36,
    complaints: 2,
    recentSignal: "Staff shortage during the night shift.",
    overallScore: 6.5,
    scoreCategories: {
      bribery: Math.round(bribery: 6.replace("bribery: ","")),
      hygiene: 1,
      waitTime: 7,
      equipment: 9,
      staff: 9
    }
  },
  {
    id: "est-extra-019",
    name: "Hopital Provincial Sidi Kacem",
    category: "Hospital",
    address: "Boulevard Mohammed V, Sidi Kacem",
    city: "Sidi Kacem",
    coordinates: { latitude: 34.2333, longitude: -5.7 },
    status: "verified",
    reviews: 20,
    complaints: 6,
    recentSignal: "Staff shortage during the night shift.",
    overallScore: 6.4,
    scoreCategories: {
      bribery: Math.round(bribery: 8.replace("bribery: ","")),
      hygiene: 1,
      waitTime: 9,
      equipment: 10,
      staff: 4
    }
  },
  {
    id: "est-extra-020",
    name: "Hopital Provincial Taza",
    category: "Hospital",
    address: "Avenue Allal El Fassi, Taza",
    city: "Taza",
    coordinates: { latitude: 34.2133, longitude: -4.0103 },
    status: "watch",
    reviews: 121,
    complaints: 9,
    recentSignal: "Staff shortage during the night shift.",
    overallScore: 6.8,
    scoreCategories: {
      bribery: Math.round(bribery: 9.replace("bribery: ","")),
      hygiene: 10,
      waitTime: 5,
      equipment: 8,
      staff: 2
    }
  },
  {
    id: "est-extra-021",
    name: "Hopital Provincial Larache",
    category: "Hospital",
    address: "Avenue Hassan II, Larache",
    city: "Larache",
    coordinates: { latitude: 35.1933, longitude: -6.1558 },
    status: "verified",
    reviews: 63,
    complaints: 2,
    recentSignal: "Clean and sterile conditions maintained.",
    overallScore: 5.0,
    scoreCategories: {
      bribery: Math.round(bribery: 6.replace("bribery: ","")),
      hygiene: 1,
      waitTime: 8,
      equipment: 3,
      staff: 6
    }
  },
  {
    id: "est-extra-022",
    name: "Hopital Provincial Al Hoceima",
    category: "Hospital",
    address: "Plage Quemado, Al Hoceima",
    city: "Al Hoceima",
    coordinates: { latitude: 35.2517, longitude: -3.9372 },
    status: "watch",
    reviews: 39,
    complaints: 6,
    recentSignal: "Clean waiting rooms and prompt triage.",
    overallScore: 5.9,
    scoreCategories: {
      bribery: Math.round(bribery: 2.replace("bribery: ","")),
      hygiene: 9,
      waitTime: 8,
      equipment: 6,
      staff: 5
    }
  },
  {
    id: "est-extra-023",
    name: "Hopital Provincial Ouarzazate",
    category: "Hospital",
    address: "Boulevard Moulay Rachid, Ouarzazate",
    city: "Ouarzazate",
    coordinates: { latitude: 30.9197, longitude: -6.8933 },
    status: "watch",
    reviews: 111,
    complaints: 9,
    recentSignal: "Clean waiting rooms and prompt triage.",
    overallScore: 5.0,
    scoreCategories: {
      bribery: Math.round(bribery: 8.replace("bribery: ","")),
      hygiene: 6,
      waitTime: 2,
      equipment: 1,
      staff: 8
    }
  },
  {
    id: "est-extra-024",
    name: "Hopital Provincial Zagora",
    category: "Hospital",
    address: "Boulevard Mohammed V, Zagora",
    city: "Zagora",
    coordinates: { latitude: 30.3306, longitude: -5.8364 },
    status: "priority",
    reviews: 117,
    complaints: 4,
    recentSignal: "Excellent care by the nursing staff.",
    overallScore: 6.7,
    scoreCategories: {
      bribery: Math.round(bribery: 10.replace("bribery: ","")),
      hygiene: 7,
      waitTime: 6,
      equipment: 7,
      staff: 4
    }
  },
  {
    id: "est-extra-025",
    name: "Hopital Provincial Tinghir",
    category: "Hospital",
    address: "Avenue Mohammed V, Tinghir",
    city: "Tinghir",
    coordinates: { latitude: 31.5156, longitude: -5.5 },
    status: "watch",
    reviews: 53,
    complaints: 4,
    recentSignal: "Lack of heating in ward rooms.",
    overallScore: 4.8,
    scoreCategories: {
      bribery: Math.round(bribery: 9.replace("bribery: ","")),
      hygiene: 2,
      waitTime: 8,
      equipment: 2,
      staff: 3
    }
  },
  {
    id: "est-extra-026",
    name: "Hopital Provincial Taroudant",
    category: "Hospital",
    address: "Boulevard Hassan II, Taroudant",
    city: "Taroudant",
    coordinates: { latitude: 30.4703, longitude: -8.8772 },
    status: "priority",
    reviews: 96,
    complaints: 15,
    recentSignal: "Excellent care by the nursing staff.",
    overallScore: 6.8,
    scoreCategories: {
      bribery: Math.round(bribery: 8.replace("bribery: ","")),
      hygiene: 7,
      waitTime: 9,
      equipment: 6,
      staff: 4
    }
  },
  {
    id: "est-extra-027",
    name: "Hopital Provincial Essaouira",
    category: "Hospital",
    address: "Avenue Lalla Aicha, Essaouira",
    city: "Essaouira",
    coordinates: { latitude: 31.5085, longitude: -9.7595 },
    status: "new",
    reviews: 8,
    complaints: 0,
    recentSignal: "Clean and sterile conditions maintained.",
    overallScore: 6.7,
    scoreCategories: {
      bribery: Math.round(bribery: 5.replace("bribery: ","")),
      hygiene: 7,
      waitTime: 9,
      equipment: 4,
      staff: 8
    }
  },
  {
    id: "est-extra-028",
    name: "Hopital Provincial Khenifra",
    category: "Hospital",
    address: "Avenue Hassan II, Khenifra",
    city: "Khenifra",
    coordinates: { latitude: 32.9347, longitude: -5.66 },
    status: "verified",
    reviews: 18,
    complaints: 10,
    recentSignal: "Staff shortage during the night shift.",
    overallScore: 5.8,
    scoreCategories: {
      bribery: Math.round(bribery: 8.replace("bribery: ","")),
      hygiene: 5,
      waitTime: 1,
      equipment: 6,
      staff: 10
    }
  },
  {
    id: "est-extra-029",
    name: "Hopital Provincial Midelt",
    category: "Hospital",
    address: "Boulevard Mohammed V, Midelt",
    city: "Midelt",
    coordinates: { latitude: 32.6794, longitude: -4.7367 },
    status: "verified",
    reviews: 110,
    complaints: 10,
    recentSignal: "Clean and sterile conditions maintained.",
    overallScore: 5.6,
    scoreCategories: {
      bribery: Math.round(bribery: 3.replace("bribery: ","")),
      hygiene: 1,
      waitTime: 9,
      equipment: 7,
      staff: 8
    }
  },
  {
    id: "est-extra-030",
    name: "Hopital Provincial Azrou",
    category: "Hospital",
    address: "Boulevard Mohammed V, Azrou",
    city: "Azrou",
    coordinates: { latitude: 33.4344, longitude: -5.2214 },
    status: "watch",
    reviews: 37,
    complaints: 5,
    recentSignal: "Excellent care by the nursing staff.",
    overallScore: 5.3,
    scoreCategories: {
      bribery: Math.round(bribery: 6.replace("bribery: ","")),
      hygiene: 4,
      waitTime: 7,
      equipment: 5,
      staff: 4
    }
  },
  {
    id: "est-extra-031",
    name: "Lycée Mohammed V Casablanca",
    category: "School",
    address: "Boulevard de la Corniche, Ain Diab",
    city: "Casablanca",
    coordinates: { latitude: 33.5731, longitude: -7.6108 },
    status: "new",
    reviews: 47,
    complaints: 7,
    recentSignal: "Lack of textbooks and school supplies.",
    overallScore: 6.5,
    scoreCategories: {
      bribery: Math.round(bribery: 9.replace("bribery: ","")),
      hygiene: 6,
      waitTime: 3,
      equipment: 10,
      staff: 4
    }
  },
  {
    id: "est-extra-032",
    name: "Lycée Ibn Khaldoun Rabat",
    category: "School",
    address: "Avenue Allal Ben Abdallah, Hassan",
    city: "Rabat",
    coordinates: { latitude: 34.0209, longitude: -6.8316 },
    status: "verified",
    reviews: 195,
    complaints: 15,
    recentSignal: "Crowded classrooms reported by parents.",
    overallScore: 6.4,
    scoreCategories: {
      bribery: Math.round(bribery: 7.replace("bribery: ","")),
      hygiene: 4,
      waitTime: 6,
      equipment: 8,
      staff: 6
    }
  },
  {
    id: "est-extra-033",
    name: "Lycée Moulay Youssef Fez",
    category: "School",
    address: "Avenue des Almohades, Fez",
    city: "Fez",
    coordinates: { latitude: 34.061, longitude: -4.9746 },
    status: "verified",
    reviews: 176,
    complaints: 2,
    recentSignal: "Renovated classrooms and new desks.",
    overallScore: 4.6,
    scoreCategories: {
      bribery: Math.round(bribery: 3.replace("bribery: ","")),
      hygiene: 2,
      waitTime: 8,
      equipment: 3,
      staff: 7
    }
  },
  {
    id: "est-extra-034",
    name: "Lycée Ibn Batouta Tangier",
    category: "School",
    address: "Rue de la Plage, Tangier",
    city: "Tangier",
    coordinates: { latitude: 35.7595, longitude: -5.81 },
    status: "watch",
    reviews: 84,
    complaints: 5,
    recentSignal: "Complaint about administrative delays for certificates.",
    overallScore: 7.8,
    scoreCategories: {
      bribery: Math.round(bribery: 10.replace("bribery: ","")),
      hygiene: 9,
      waitTime: 3,
      equipment: 9,
      staff: 9
    }
  },
  {
    id: "est-extra-035",
    name: "Lycée Marrakech",
    category: "School",
    address: "Rue de la Liberté, Marrakech",
    city: "Marrakech",
    coordinates: { latitude: 31.6295, longitude: -8.0089 },
    status: "verified",
    reviews: 135,
    complaints: 9,
    recentSignal: "Inoperative computers in the IT lab.",
    overallScore: 4.8,
    scoreCategories: {
      bribery: Math.round(bribery: 4.replace("bribery: ","")),
      hygiene: 7,
      waitTime: 10,
      equipment: 2,
      staff: 2
    }
  },
  {
    id: "est-extra-036",
    name: "Lycée Agadir",
    category: "School",
    address: "Quartier Talborjt, Agadir",
    city: "Agadir",
    coordinates: { latitude: 30.4278, longitude: -9.58 },
    status: "watch",
    reviews: 121,
    complaints: 12,
    recentSignal: "High absenteeism among teaching staff.",
    overallScore: 3.5,
    scoreCategories: {
      bribery: Math.round(bribery: 3.replace("bribery: ","")),
      hygiene: 1,
      waitTime: 3,
      equipment: 6,
      staff: 5
    }
  },
  {
    id: "est-extra-037",
    name: "Ecole Primaire Anfa Casablanca",
    category: "School",
    address: "Boulevard Mohammed V, Casablanca",
    city: "Casablanca",
    coordinates: { latitude: 33.585, longitude: -7.62 },
    status: "verified",
    reviews: 110,
    complaints: 4,
    recentSignal: "Excellent extracurricular activities.",
    overallScore: 7.1,
    scoreCategories: {
      bribery: Math.round(bribery: 10.replace("bribery: ","")),
      hygiene: 4,
      waitTime: 8,
      equipment: 5,
      staff: 9
    }
  },
  {
    id: "est-extra-038",
    name: "Ecole Primaire Hassan Rabat",
    category: "School",
    address: "Avenue Mohammed V, Centre",
    city: "Rabat",
    coordinates: { latitude: 34.015, longitude: -6.83 },
    status: "verified",
    reviews: 75,
    complaints: 7,
    recentSignal: "Complaint about administrative delays for certificates.",
    overallScore: 5.2,
    scoreCategories: {
      bribery: Math.round(bribery: 4.replace("bribery: ","")),
      hygiene: 3,
      waitTime: 4,
      equipment: 10,
      staff: 6
    }
  },
  {
    id: "est-extra-039",
    name: "Ecole Primaire Fes Medina",
    category: "School",
    address: "Avenue des Almohades, Fez",
    city: "Fez",
    coordinates: { latitude: 34.061, longitude: -4.97 },
    status: "priority",
    reviews: 102,
    complaints: 9,
    recentSignal: "High absenteeism among teaching staff.",
    overallScore: 6.5,
    scoreCategories: {
      bribery: Math.round(bribery: 9.replace("bribery: ","")),
      hygiene: 7,
      waitTime: 4,
      equipment: 6,
      staff: 8
    }
  },
  {
    id: "est-extra-040",
    name: "Ecole Primaire Guéliz Marrakech",
    category: "School",
    address: "Medina, Derb Dabachi",
    city: "Marrakech",
    coordinates: { latitude: 31.634, longitude: -8 },
    status: "new",
    reviews: 55,
    complaints: 14,
    recentSignal: "Friendly and supportive administration.",
    overallScore: 5.8,
    scoreCategories: {
      bribery: Math.round(bribery: 6.replace("bribery: ","")),
      hygiene: 5,
      waitTime: 4,
      equipment: 10,
      staff: 4
    }
  },
  {
    id: "est-extra-041",
    name: "Lycée Meknes",
    category: "School",
    address: "Boulevard Hassan II, Meknes",
    city: "Meknes",
    coordinates: { latitude: 33.8935, longitude: -5.5473 },
    status: "watch",
    reviews: 119,
    complaints: 1,
    recentSignal: "Complaint about administrative delays for certificates.",
    overallScore: 6.1,
    scoreCategories: {
      bribery: Math.round(bribery: 4.replace("bribery: ","")),
      hygiene: 10,
      waitTime: 2,
      equipment: 5,
      staff: 10
    }
  },
  {
    id: "est-extra-042",
    name: "Lycée Oujda",
    category: "School",
    address: "Boulevard Mohammed V, Oujda",
    city: "Oujda",
    coordinates: { latitude: 34.6867, longitude: -1.9 },
    status: "watch",
    reviews: 136,
    complaints: 2,
    recentSignal: "Excellent extracurricular activities.",
    overallScore: 4.5,
    scoreCategories: {
      bribery: Math.round(bribery: 3.replace("bribery: ","")),
      hygiene: 2,
      waitTime: 9,
      equipment: 2,
      staff: 6
    }
  },
  {
    id: "est-extra-043",
    name: "Lycée Kenitra",
    category: "School",
    address: "Boulevard Mohammed V, Kenitra",
    city: "Kenitra",
    coordinates: { latitude: 34.261, longitude: -6.57 },
    status: "verified",
    reviews: 151,
    complaints: 12,
    recentSignal: "Excellent extracurricular activities.",
    overallScore: 3.3,
    scoreCategories: {
      bribery: Math.round(bribery: 1.replace("bribery: ","")),
      hygiene: 2,
      waitTime: 4,
      equipment: 5,
      staff: 4
    }
  },
  {
    id: "est-extra-044",
    name: "Lycée Tetouan",
    category: "School",
    address: "Avenue Mohamed V, Tetouan",
    city: "Tetouan",
    coordinates: { latitude: 35.5785, longitude: -5.36 },
    status: "new",
    reviews: 113,
    complaints: 3,
    recentSignal: "Lack of textbooks and school supplies.",
    overallScore: 5.0,
    scoreCategories: {
      bribery: Math.round(bribery: 9.replace("bribery: ","")),
      hygiene: 1,
      waitTime: 8,
      equipment: 4,
      staff: 3
    }
  },
  {
    id: "est-extra-045",
    name: "Lycée Beni Mellal",
    category: "School",
    address: "Route de Marrakech, Beni Mellal",
    city: "Beni Mellal",
    coordinates: { latitude: 32.3373, longitude: -6.34 },
    status: "priority",
    reviews: 62,
    complaints: 6,
    recentSignal: "Excellent extracurricular activities.",
    overallScore: 4.4,
    scoreCategories: {
      bribery: Math.round(bribery: 5.replace("bribery: ","")),
      hygiene: 3,
      waitTime: 8,
      equipment: 2,
      staff: 5
    }
  },
  {
    id: "est-extra-046",
    name: "Lycée Settat",
    category: "School",
    address: "Quartier El Farah, Settat",
    city: "Settat",
    coordinates: { latitude: 32.9942, longitude: -7.61 },
    status: "verified",
    reviews: 37,
    complaints: 12,
    recentSignal: "Clean and safe school yard.",
    overallScore: 8.3,
    scoreCategories: {
      bribery: Math.round(bribery: 10.replace("bribery: ","")),
      hygiene: 7,
      waitTime: 8,
      equipment: 8,
      staff: 8
    }
  },
  {
    id: "est-extra-047",
    name: "Lycée El Jadida",
    category: "School",
    address: "Avenue Mohamed VI, El Jadida",
    city: "El Jadida",
    coordinates: { latitude: 33.2549, longitude: -8.49 },
    status: "new",
    reviews: 45,
    complaints: 1,
    recentSignal: "Crowded classrooms reported by parents.",
    overallScore: 6.2,
    scoreCategories: {
      bribery: Math.round(bribery: 8.replace("bribery: ","")),
      hygiene: 9,
      waitTime: 6,
      equipment: 2,
      staff: 6
    }
  },
  {
    id: "est-extra-048",
    name: "Lycée Safi",
    category: "School",
    address: "Plateau, Rue du Riad, Safi",
    city: "Safi",
    coordinates: { latitude: 32.2994, longitude: -9.23 },
    status: "verified",
    reviews: 200,
    complaints: 6,
    recentSignal: "Renovated classrooms and new desks.",
    overallScore: 6.3,
    scoreCategories: {
      bribery: Math.round(bribery: 6.replace("bribery: ","")),
      hygiene: 6,
      waitTime: 7,
      equipment: 10,
      staff: 3
    }
  },
  {
    id: "est-extra-049",
    name: "Lycée Taza",
    category: "School",
    address: "Avenue Allal El Fassi, Taza",
    city: "Taza",
    coordinates: { latitude: 34.2133, longitude: -4 },
    status: "verified",
    reviews: 135,
    complaints: 11,
    recentSignal: "Excellent extracurricular activities.",
    overallScore: 3.2,
    scoreCategories: {
      bribery: Math.round(bribery: 3.replace("bribery: ","")),
      hygiene: 3,
      waitTime: 4,
      equipment: 6,
      staff: 1
    }
  },
  {
    id: "est-extra-050",
    name: "Lycée Nador",
    category: "School",
    address: "Quartier Lmatar, Nador",
    city: "Nador",
    coordinates: { latitude: 35.1688, longitude: -2.92 },
    status: "verified",
    reviews: 150,
    complaints: 1,
    recentSignal: "Crowded classrooms reported by parents.",
    overallScore: 4.9,
    scoreCategories: {
      bribery: Math.round(bribery: 4.replace("bribery: ","")),
      hygiene: 1,
      waitTime: 6,
      equipment: 7,
      staff: 6
    }
  },
  {
    id: "est-extra-051",
    name: "Lycée Tiznit",
    category: "School",
    address: "Avenue Hassan II, Tiznit",
    city: "Tiznit",
    coordinates: { latitude: 29.6974, longitude: -9.79 },
    status: "watch",
    reviews: 192,
    complaints: 6,
    recentSignal: "Complaint about administrative delays for certificates.",
    overallScore: 5.6,
    scoreCategories: {
      bribery: Math.round(bribery: 10.replace("bribery: ","")),
      hygiene: 4,
      waitTime: 4,
      equipment: 4,
      staff: 6
    }
  },
  {
    id: "est-extra-052",
    name: "Lycée Errachidia",
    category: "School",
    address: "Avenue Hassan II, Errachidia",
    city: "Errachidia",
    coordinates: { latitude: 31.9314, longitude: -4.42 },
    status: "watch",
    reviews: 176,
    complaints: 14,
    recentSignal: "Crowded classrooms reported by parents.",
    overallScore: 6.3,
    scoreCategories: {
      bribery: Math.round(bribery: 10.replace("bribery: ","")),
      hygiene: 6,
      waitTime: 3,
      equipment: 9,
      staff: 4
    }
  },
  {
    id: "est-extra-053",
    name: "Lycée Khouribga",
    category: "School",
    address: "Avenue Hassan II, Khouribga",
    city: "Khouribga",
    coordinates: { latitude: 32.8811, longitude: -6.89 },
    status: "new",
    reviews: 147,
    complaints: 5,
    recentSignal: "High hygiene standards in sanitation facilities.",
    overallScore: 4.4,
    scoreCategories: {
      bribery: Math.round(bribery: 8.replace("bribery: ","")),
      hygiene: 3,
      waitTime: 3,
      equipment: 5,
      staff: 3
    }
  },
  {
    id: "est-extra-054",
    name: "Lycée Sidi Kacem",
    category: "School",
    address: "Avenue Hassan II, Sidi Kacem",
    city: "Sidi Kacem",
    coordinates: { latitude: 34.2333, longitude: -5.69 },
    status: "verified",
    reviews: 96,
    complaints: 4,
    recentSignal: "High absenteeism among teaching staff.",
    overallScore: 5.3,
    scoreCategories: {
      bribery: Math.round(bribery: 5.replace("bribery: ","")),
      hygiene: 2,
      waitTime: 6,
      equipment: 8,
      staff: 6
    }
  },
  {
    id: "est-extra-055",
    name: "Lycée Larache",
    category: "School",
    address: "Boulevard Mohamed V, Larache",
    city: "Larache",
    coordinates: { latitude: 35.1933, longitude: -6.15 },
    status: "watch",
    reviews: 158,
    complaints: 11,
    recentSignal: "High absenteeism among teaching staff.",
    overallScore: 6.2,
    scoreCategories: {
      bribery: Math.round(bribery: 6.replace("bribery: ","")),
      hygiene: 4,
      waitTime: 6,
      equipment: 10,
      staff: 6
    }
  },
  {
    id: "est-extra-056",
    name: "Lycée Al Hoceima",
    category: "School",
    address: "Boulevard Mohammed V, Al Hoceima",
    city: "Al Hoceima",
    coordinates: { latitude: 35.2517, longitude: -3.93 },
    status: "watch",
    reviews: 15,
    complaints: 14,
    recentSignal: "Renovated classrooms and new desks.",
    overallScore: 5.2,
    scoreCategories: {
      bribery: Math.round(bribery: 8.replace("bribery: ","")),
      hygiene: 3,
      waitTime: 5,
      equipment: 3,
      staff: 7
    }
  },
  {
    id: "est-extra-057",
    name: "Lycée Ouarzazate",
    category: "School",
    address: "Avenue Mohammed V, Ouarzazate",
    city: "Ouarzazate",
    coordinates: { latitude: 30.9197, longitude: -6.88 },
    status: "verified",
    reviews: 29,
    complaints: 3,
    recentSignal: "Renovated classrooms and new desks.",
    overallScore: 7.2,
    scoreCategories: {
      bribery: Math.round(bribery: 9.replace("bribery: ","")),
      hygiene: 5,
      waitTime: 9,
      equipment: 6,
      staff: 7
    }
  },
  {
    id: "est-extra-058",
    name: "Lycée Taroudant",
    category: "School",
    address: "Boulevard Hassan II, Taroudant",
    city: "Taroudant",
    coordinates: { latitude: 30.4703, longitude: -8.87 },
    status: "verified",
    reviews: 172,
    complaints: 8,
    recentSignal: "Lack of textbooks and school supplies.",
    overallScore: 8.9,
    scoreCategories: {
      bribery: Math.round(bribery: 9.replace("bribery: ","")),
      hygiene: 8,
      waitTime: 9,
      equipment: 8,
      staff: 10
    }
  },
  {
    id: "est-extra-059",
    name: "Lycée Essaouira",
    category: "School",
    address: "Medina, Rue de la Sqala, Essaouira",
    city: "Essaouira",
    coordinates: { latitude: 31.5085, longitude: -9.75 },
    status: "verified",
    reviews: 199,
    complaints: 3,
    recentSignal: "Crowded classrooms reported by parents.",
    overallScore: 5.0,
    scoreCategories: {
      bribery: Math.round(bribery: 10.replace("bribery: ","")),
      hygiene: 2,
      waitTime: 6,
      equipment: 6,
      staff: 2
    }
  },
  {
    id: "est-extra-060",
    name: "Lycée Khenifra",
    category: "School",
    address: "Boulevard Mohammed V, Khenifra",
    city: "Khenifra",
    coordinates: { latitude: 32.9347, longitude: -5.65 },
    status: "verified",
    reviews: 53,
    complaints: 5,
    recentSignal: "Inoperative computers in the IT lab.",
    overallScore: 5.9,
    scoreCategories: {
      bribery: Math.round(bribery: 9.replace("bribery: ","")),
      hygiene: 7,
      waitTime: 2,
      equipment: 2,
      staff: 9
    }
  },
  {
    id: "est-extra-061",
    name: "Commune Casablanca Anfa",
    category: "Municipality",
    address: "Boulevard de la Corniche, Ain Diab",
    city: "Casablanca",
    coordinates: { latitude: 33.5731, longitude: -7.6108 },
    status: "verified",
    reviews: 106,
    complaints: 11,
    recentSignal: "Rude behavior from desk officer.",
    overallScore: 5.0,
    scoreCategories: {
      bribery: Math.round(bribery: 5.replace("bribery: ","")),
      hygiene: 6,
      waitTime: 6,
      equipment: 2,
      staff: 6
    }
  },
  {
    id: "est-extra-062",
    name: "Commune Rabat Medina",
    category: "Municipality",
    address: "Avenue Hassan II, Rabat",
    city: "Rabat",
    coordinates: { latitude: 34.015, longitude: -6.835 },
    status: "verified",
    reviews: 169,
    complaints: 14,
    recentSignal: "Unauthorized fees requested for fast-track service.",
    overallScore: 6.4,
    scoreCategories: {
      bribery: Math.round(bribery: 5.replace("bribery: ","")),
      hygiene: 7,
      waitTime: 10,
      equipment: 9,
      staff: 2
    }
  },
  {
    id: "est-extra-063",
    name: "Commune Fes Medina",
    category: "Municipality",
    address: "Boulevard Allal El Fassi, Fez",
    city: "Fez",
    coordinates: { latitude: 34.061, longitude: -4.975 },
    status: "verified",
    reviews: 111,
    complaints: 9,
    recentSignal: "Helpful staff guiding through paperwork.",
    overallScore: 5.5,
    scoreCategories: {
      bribery: Math.round(bribery: 7.replace("bribery: ","")),
      hygiene: 5,
      waitTime: 3,
      equipment: 7,
      staff: 5
    }
  },
  {
    id: "est-extra-064",
    name: "Commune Marrakech Medina",
    category: "Municipality",
    address: "Medina, Derb Dabachi",
    city: "Marrakech",
    coordinates: { latitude: 31.6295, longitude: -8.005 },
    status: "new",
    reviews: 135,
    complaints: 14,
    recentSignal: "Bribery requested for certificate legalization.",
    overallScore: 6.5,
    scoreCategories: {
      bribery: Math.round(bribery: 8.replace("bribery: ","")),
      hygiene: 2,
      waitTime: 10,
      equipment: 6,
      staff: 6
    }
  },
  {
    id: "est-extra-065",
    name: "Commune Tangier Medina",
    category: "Municipality",
    address: "Boulevard Pasteur, Tangier",
    city: "Tangier",
    coordinates: { latitude: 35.7595, longitude: -8.12 },
    status: "verified",
    reviews: 9,
    complaints: 11,
    recentSignal: "Bribery requested for certificate legalization.",
    overallScore: 5.7,
    scoreCategories: {
      bribery: Math.round(bribery: 7.replace("bribery: ","")),
      hygiene: 2,
      waitTime: 9,
      equipment: 5,
      staff: 5
    }
  },
  {
    id: "est-extra-066",
    name: "Commune Agadir",
    category: "Municipality",
    address: "Avenue Hassan II, Agadir",
    city: "Agadir",
    coordinates: { latitude: 30.4278, longitude: -9.59 },
    status: "new",
    reviews: 170,
    complaints: 9,
    recentSignal: "Modernized digital queuing system working well.",
    overallScore: 4.4,
    scoreCategories: {
      bribery: Math.round(bribery: 6.replace("bribery: ","")),
      hygiene: 1,
      waitTime: 8,
      equipment: 4,
      staff: 4
    }
  },
  {
    id: "est-extra-067",
    name: "Commune Meknes",
    category: "Municipality",
    address: "Boulevard Hassan II, Meknes",
    city: "Meknes",
    coordinates: { latitude: 33.8935, longitude: -5.55 },
    status: "verified",
    reviews: 115,
    complaints: 11,
    recentSignal: "Slow processing of administrative documents.",
    overallScore: 5.0,
    scoreCategories: {
      bribery: Math.round(bribery: 3.replace("bribery: ","")),
      hygiene: 10,
      waitTime: 3,
      equipment: 1,
      staff: 8
    }
  },
  {
    id: "est-extra-068",
    name: "Commune Oujda",
    category: "Municipality",
    address: "Boulevard Mohammed V, Oujda",
    city: "Oujda",
    coordinates: { latitude: 34.6867, longitude: -1.91 },
    status: "new",
    reviews: 47,
    complaints: 13,
    recentSignal: "Bribery requested for certificate legalization.",
    overallScore: 4.4,
    scoreCategories: {
      bribery: Math.round(bribery: 6.replace("bribery: ","")),
      hygiene: 9,
      waitTime: 2,
      equipment: 2,
      staff: 3
    }
  },
  {
    id: "est-extra-069",
    name: "Commune Kenitra",
    category: "Municipality",
    address: "Quartier Mimosa, Kenitra",
    city: "Kenitra",
    coordinates: { latitude: 34.261, longitude: -6.58 },
    status: "priority",
    reviews: 115,
    complaints: 15,
    recentSignal: "Bribery requested for certificate legalization.",
    overallScore: 5.3,
    scoreCategories: {
      bribery: Math.round(bribery: 3.replace("bribery: ","")),
      hygiene: 6,
      waitTime: 6,
      equipment: 4,
      staff: 7
    }
  },
  {
    id: "est-extra-070",
    name: "Commune Tetouan",
    category: "Municipality",
    address: "Medina, Bab Okba, Tetouan",
    city: "Tetouan",
    coordinates: { latitude: 35.5785, longitude: -5.37 },
    status: "priority",
    reviews: 59,
    complaints: 9,
    recentSignal: "Friendly and efficient civil registry service.",
    overallScore: 4.8,
    scoreCategories: {
      bribery: Math.round(bribery: 3.replace("bribery: ","")),
      hygiene: 9,
      waitTime: 2,
      equipment: 6,
      staff: 4
    }
  },
  {
    id: "est-extra-071",
    name: "Commune Beni Mellal",
    category: "Municipality",
    address: "Boulevard Hassan II, Beni Mellal",
    city: "Beni Mellal",
    coordinates: { latitude: 32.3373, longitude: -6.35 },
    status: "watch",
    reviews: 165,
    complaints: 0,
    recentSignal: "Bribery requested for certificate legalization.",
    overallScore: 4.7,
    scoreCategories: {
      bribery: Math.round(bribery: 5.replace("bribery: ","")),
      hygiene: 9,
      waitTime: 1,
      equipment: 4,
      staff: 5
    }
  },
  {
    id: "est-extra-072",
    name: "Commune Settat",
    category: "Municipality",
    address: "Quartier El Farah, Settat",
    city: "Settat",
    coordinates: { latitude: 32.9942, longitude: -7.62 },
    status: "priority",
    reviews: 5,
    complaints: 4,
    recentSignal: "Modernized digital queuing system working well.",
    overallScore: 4.9,
    scoreCategories: {
      bribery: Math.round(bribery: 6.replace("bribery: ","")),
      hygiene: 6,
      waitTime: 6,
      equipment: 4,
      staff: 2
    }
  },
  {
    id: "est-extra-073",
    name: "Commune El Jadida",
    category: "Municipality",
    address: "Avenue Mohamed VI, El Jadida",
    city: "El Jadida",
    coordinates: { latitude: 33.2549, longitude: -8.5 },
    status: "new",
    reviews: 82,
    complaints: 14,
    recentSignal: "Modernized digital queuing system working well.",
    overallScore: 6.5,
    scoreCategories: {
      bribery: Math.round(bribery: 7.replace("bribery: ","")),
      hygiene: 7,
      waitTime: 6,
      equipment: 8,
      staff: 4
    }
  },
  {
    id: "est-extra-074",
    name: "Commune Safi",
    category: "Municipality",
    address: "Avenue Sidi Bouzid, Safi",
    city: "Safi",
    coordinates: { latitude: 32.2994, longitude: -9.24 },
    status: "watch",
    reviews: 82,
    complaints: 1,
    recentSignal: "Helpful staff guiding through paperwork.",
    overallScore: 6.3,
    scoreCategories: {
      bribery: Math.round(bribery: 6.replace("bribery: ","")),
      hygiene: 7,
      waitTime: 8,
      equipment: 4,
      staff: 6
    }
  },
  {
    id: "est-extra-075",
    name: "Commune Taza",
    category: "Municipality",
    address: "Avenue de la Gare, Taza",
    city: "Taza",
    coordinates: { latitude: 34.2133, longitude: -4.01 },
    status: "verified",
    reviews: 32,
    complaints: 8,
    recentSignal: "Friendly and efficient civil registry service.",
    overallScore: 1.9,
    scoreCategories: {
      bribery: Math.round(bribery: 2.replace("bribery: ","")),
      hygiene: 1,
      waitTime: 1,
      equipment: 3,
      staff: 2
    }
  },
  {
    id: "est-extra-076",
    name: "Commune Nador",
    category: "Municipality",
    address: "Quartier Lmatar, Nador",
    city: "Nador",
    coordinates: { latitude: 35.1688, longitude: -2.93 },
    status: "watch",
    reviews: 189,
    complaints: 11,
    recentSignal: "Slow processing of administrative documents.",
    overallScore: 4.9,
    scoreCategories: {
      bribery: Math.round(bribery: 4.replace("bribery: ","")),
      hygiene: 5,
      waitTime: 4,
      equipment: 3,
      staff: 8
    }
  },
  {
    id: "est-extra-077",
    name: "Commune Tiznit",
    category: "Municipality",
    address: "Avenue Hassan II, Tiznit",
    city: "Tiznit",
    coordinates: { latitude: 29.6974, longitude: -9.8 },
    status: "watch",
    reviews: 129,
    complaints: 7,
    recentSignal: "Unauthorized fees requested for fast-track service.",
    overallScore: 6.1,
    scoreCategories: {
      bribery: Math.round(bribery: 6.replace("bribery: ","")),
      hygiene: 3,
      waitTime: 5,
      equipment: 9,
      staff: 7
    }
  },
  {
    id: "est-extra-078",
    name: "Commune Errachidia",
    category: "Municipality",
    address: "Avenue Moulay Ali Cherif, Errachidia",
    city: "Errachidia",
    coordinates: { latitude: 31.9314, longitude: -4.43 },
    status: "verified",
    reviews: 128,
    complaints: 8,
    recentSignal: "Slow processing of administrative documents.",
    overallScore: 3.6,
    scoreCategories: {
      bribery: Math.round(bribery: 3.replace("bribery: ","")),
      hygiene: 3,
      waitTime: 8,
      equipment: 2,
      staff: 3
    }
  },
  {
    id: "est-extra-079",
    name: "Commune Khouribga",
    category: "Municipality",
    address: "Quartier El Qods, Khouribga",
    city: "Khouribga",
    coordinates: { latitude: 32.8811, longitude: -6.91 },
    status: "verified",
    reviews: 53,
    complaints: 3,
    recentSignal: "Modernized digital queuing system working well.",
    overallScore: 6.9,
    scoreCategories: {
      bribery: Math.round(bribery: 7.replace("bribery: ","")),
      hygiene: 5,
      waitTime: 8,
      equipment: 10,
      staff: 4
    }
  },
  {
    id: "est-extra-080",
    name: "Commune Sidi Kacem",
    category: "Municipality",
    address: "Boulevard Mohammed V, Sidi Kacem",
    city: "Sidi Kacem",
    coordinates: { latitude: 34.2333, longitude: -5.7 },
    status: "watch",
    reviews: 101,
    complaints: 9,
    recentSignal: "Delays in trash collection near the building.",
    overallScore: 6.4,
    scoreCategories: {
      bribery: Math.round(bribery: 2.replace("bribery: ","")),
      hygiene: 10,
      waitTime: 8,
      equipment: 6,
      staff: 5
    }
  },
  {
    id: "est-extra-081",
    name: "Commune Larache",
    category: "Municipality",
    address: "Avenue Hassan II, Larache",
    city: "Larache",
    coordinates: { latitude: 35.1933, longitude: -6.16 },
    status: "watch",
    reviews: 164,
    complaints: 9,
    recentSignal: "Rude behavior from desk officer.",
    overallScore: 5.3,
    scoreCategories: {
      bribery: Math.round(bribery: 3.replace("bribery: ","")),
      hygiene: 3,
      waitTime: 5,
      equipment: 7,
      staff: 8
    }
  },
  {
    id: "est-extra-082",
    name: "Commune Al Hoceima",
    category: "Municipality",
    address: "Plage Quemado, Al Hoceima",
    city: "Al Hoceima",
    coordinates: { latitude: 35.2517, longitude: -3.94 },
    status: "new",
    reviews: 161,
    complaints: 3,
    recentSignal: "Unauthorized fees requested for fast-track service.",
    overallScore: 6.3,
    scoreCategories: {
      bribery: Math.round(bribery: 9.replace("bribery: ","")),
      hygiene: 3,
      waitTime: 8,
      equipment: 9,
      staff: 3
    }
  },
  {
    id: "est-extra-083",
    name: "Commune Ouarzazate",
    category: "Municipality",
    address: "Boulevard Moulay Rachid, Ouarzazate",
    city: "Ouarzazate",
    coordinates: { latitude: 30.9197, longitude: -6.89 },
    status: "watch",
    reviews: 161,
    complaints: 7,
    recentSignal: "Long queues for building permit approvals.",
    overallScore: 5.1,
    scoreCategories: {
      bribery: Math.round(bribery: 4.replace("bribery: ","")),
      hygiene: 10,
      waitTime: 4,
      equipment: 5,
      staff: 2
    }
  },
  {
    id: "est-extra-084",
    name: "Commune Zagora",
    category: "Municipality",
    address: "Boulevard Mohammed V, Zagora",
    city: "Zagora",
    coordinates: { latitude: 30.3306, longitude: -5.84 },
    status: "new",
    reviews: 44,
    complaints: 15,
    recentSignal: "Slow processing of administrative documents.",
    overallScore: 4.7,
    scoreCategories: {
      bribery: Math.round(bribery: 8.replace("bribery: ","")),
      hygiene: 2,
      waitTime: 3,
      equipment: 4,
      staff: 7
    }
  },
  {
    id: "est-extra-085",
    name: "Commune Tinghir",
    category: "Municipality",
    address: "Avenue Mohammed V, Tinghir",
    city: "Tinghir",
    coordinates: { latitude: 31.5156, longitude: -5.5 },
    status: "verified",
    reviews: 47,
    complaints: 4,
    recentSignal: "Delays in trash collection near the building.",
    overallScore: 6.6,
    scoreCategories: {
      bribery: Math.round(bribery: 7.replace("bribery: ","")),
      hygiene: 7,
      waitTime: 6,
      equipment: 7,
      staff: 5
    }
  },
  {
    id: "est-extra-086",
    name: "Commune Taroudant",
    category: "Municipality",
    address: "Avenue Moulay Rachid, Taroudant",
    city: "Taroudant",
    coordinates: { latitude: 30.4703, longitude: -8.88 },
    status: "priority",
    reviews: 30,
    complaints: 2,
    recentSignal: "Friendly and efficient civil registry service.",
    overallScore: 6.6,
    scoreCategories: {
      bribery: Math.round(bribery: 5.replace("bribery: ","")),
      hygiene: 5,
      waitTime: 9,
      equipment: 6,
      staff: 7
    }
  },
  {
    id: "est-extra-087",
    name: "Commune Essaouira",
    category: "Municipality",
    address: "Avenue Lalla Aicha, Essaouira",
    city: "Essaouira",
    coordinates: { latitude: 31.5085, longitude: -9.76 },
    status: "new",
    reviews: 135,
    complaints: 12,
    recentSignal: "Slow processing of administrative documents.",
    overallScore: 6.9,
    scoreCategories: {
      bribery: Math.round(bribery: 7.replace("bribery: ","")),
      hygiene: 3,
      waitTime: 8,
      equipment: 8,
      staff: 8
    }
  },
  {
    id: "est-extra-088",
    name: "Commune Khenifra",
    category: "Municipality",
    address: "Boulevard Mohammed V, Khenifra",
    city: "Khenifra",
    coordinates: { latitude: 32.9347, longitude: -5.66 },
    status: "watch",
    reviews: 178,
    complaints: 10,
    recentSignal: "Slow processing of administrative documents.",
    overallScore: 4.6,
    scoreCategories: {
      bribery: Math.round(bribery: 8.replace("bribery: ","")),
      hygiene: 1,
      waitTime: 2,
      equipment: 2,
      staff: 10
    }
  },
  {
    id: "est-extra-089",
    name: "Commune Midelt",
    category: "Municipality",
    address: "Boulevard Mohammed V, Midelt",
    city: "Midelt",
    coordinates: { latitude: 32.6794, longitude: -4.74 },
    status: "watch",
    reviews: 72,
    complaints: 12,
    recentSignal: "Slow processing of administrative documents.",
    overallScore: 6.0,
    scoreCategories: {
      bribery: Math.round(bribery: 5.replace("bribery: ","")),
      hygiene: 7,
      waitTime: 2,
      equipment: 8,
      staff: 9
    }
  },
  {
    id: "est-extra-090",
    name: "Commune Azrou",
    category: "Municipality",
    address: "Boulevard Mohammed V, Azrou",
    city: "Azrou",
    coordinates: { latitude: 33.4344, longitude: -5.22 },
    status: "verified",
    reviews: 77,
    complaints: 5,
    recentSignal: "Friendly and efficient civil registry service.",
    overallScore: 6.9,
    scoreCategories: {
      bribery: Math.round(bribery: 10.replace("bribery: ","")),
      hygiene: 8,
      waitTime: 6,
      equipment: 5,
      staff: 6
    }
  },
  {
    id: "est-extra-091",
    name: "Barid Casablanca Centre",
    category: "Post Office",
    address: "Avenue 2 Mars, Casablanca",
    city: "Casablanca",
    coordinates: { latitude: 33.5731, longitude: -7.615 },
    status: "verified",
    reviews: 100,
    complaints: 11,
    recentSignal: "Only one counter active during peak hours.",
    overallScore: 4.7,
    scoreCategories: {
      bribery: Math.round(bribery: 2.replace("bribery: ","")),
      hygiene: 9,
      waitTime: 1,
      equipment: 9,
      staff: 2
    }
  },
  {
    id: "est-extra-092",
    name: "Barid Rabat Centre",
    category: "Post Office",
    address: "Rue Ghandi, Rabat",
    city: "Rabat",
    coordinates: { latitude: 34.015, longitude: -6.832 },
    status: "verified",
    reviews: 172,
    complaints: 14,
    recentSignal: "Long queues for pension payouts.",
    overallScore: 5.7,
    scoreCategories: {
      bribery: Math.round(bribery: 9.replace("bribery: ","")),
      hygiene: 10,
      waitTime: 2,
      equipment: 4,
      staff: 4
    }
  },
  {
    id: "est-extra-093",
    name: "Barid Fes Centre",
    category: "Post Office",
    address: "Boulevard Allal El Fassi, Fez",
    city: "Fez",
    coordinates: { latitude: 34.061, longitude: -4.972 },
    status: "watch",
    reviews: 60,
    complaints: 13,
    recentSignal: "Lost package complaint registered.",
    overallScore: 5.0,
    scoreCategories: {
      bribery: Math.round(bribery: 6.replace("bribery: ","")),
      hygiene: 6,
      waitTime: 6,
      equipment: 2,
      staff: 6
    }
  },
  {
    id: "est-extra-094",
    name: "Barid Marrakech Centre",
    category: "Post Office",
    address: "Rue de la Liberté, Marrakech",
    city: "Marrakech",
    coordinates: { latitude: 31.6295, longitude: -8.002 },
    status: "verified",
    reviews: 21,
    complaints: 9,
    recentSignal: "System offline for two hours in the morning.",
    overallScore: 7.5,
    scoreCategories: {
      bribery: Math.round(bribery: 8.replace("bribery: ","")),
      hygiene: 10,
      waitTime: 5,
      equipment: 6,
      staff: 9
    }
  },
  {
    id: "est-extra-095",
    name: "Barid Tangier Centre",
    category: "Post Office",
    address: "Boulevard Mohamed V, Tangier",
    city: "Tangier",
    coordinates: { latitude: 35.7595, longitude: -5.815 },
    status: "watch",
    reviews: 86,
    complaints: 11,
    recentSignal: "Inoperative parcel tracking system.",
    overallScore: 5.8,
    scoreCategories: {
      bribery: Math.round(bribery: 2.replace("bribery: ","")),
      hygiene: 7,
      waitTime: 10,
      equipment: 8,
      staff: 2
    }
  },
  {
    id: "est-extra-096",
    name: "Barid Agadir Centre",
    category: "Post Office",
    address: "Quartier Talborjt, Agadir",
    city: "Agadir",
    coordinates: { latitude: 30.4278, longitude: -9.585 },
    status: "watch",
    reviews: 65,
    complaints: 5,
    recentSignal: "Lost package complaint registered.",
    overallScore: 6.3,
    scoreCategories: {
      bribery: Math.round(bribery: 4.replace("bribery: ","")),
      hygiene: 6,
      waitTime: 4,
      equipment: 9,
      staff: 9
    }
  },
  {
    id: "est-extra-097",
    name: "Barid Meknes Centre",
    category: "Post Office",
    address: "Avenue des FAR, Meknes",
    city: "Meknes",
    coordinates: { latitude: 33.8935, longitude: -5.549 },
    status: "watch",
    reviews: 194,
    complaints: 4,
    recentSignal: "Package delivery delays reported.",
    overallScore: 6.7,
    scoreCategories: {
      bribery: Math.round(bribery: 8.replace("bribery: ","")),
      hygiene: 2,
      waitTime: 9,
      equipment: 6,
      staff: 10
    }
  },
  {
    id: "est-extra-098",
    name: "Barid Oujda Centre",
    category: "Post Office",
    address: "Avenue Allal El Fassi, Oujda",
    city: "Oujda",
    coordinates: { latitude: 34.6867, longitude: -1.908 },
    status: "watch",
    reviews: 153,
    complaints: 7,
    recentSignal: "Shortage of stamps and envelope supplies.",
    overallScore: 6.7,
    scoreCategories: {
      bribery: Math.round(bribery: 6.replace("bribery: ","")),
      hygiene: 9,
      waitTime: 8,
      equipment: 7,
      staff: 3
    }
  },
  {
    id: "est-extra-099",
    name: "Barid Kenitra Centre",
    category: "Post Office",
    address: "Avenue Diouri, Kenitra",
    city: "Kenitra",
    coordinates: { latitude: 34.261, longitude: -6.575 },
    status: "verified",
    reviews: 112,
    complaints: 4,
    recentSignal: "Package delivery delays reported.",
    overallScore: 5.4,
    scoreCategories: {
      bribery: Math.round(bribery: 8.replace("bribery: ","")),
      hygiene: 8,
      waitTime: 4,
      equipment: 1,
      staff: 5
    }
  },
  {
    id: "est-extra-100",
    name: "Barid Tetouan Centre",
    category: "Post Office",
    address: "Avenue Mohamed V, Tetouan",
    city: "Tetouan",
    coordinates: { latitude: 35.5785, longitude: -5.365 },
    status: "verified",
    reviews: 60,
    complaints: 0,
    recentSignal: "Lost package complaint registered.",
    overallScore: 7.7,
    scoreCategories: {
      bribery: Math.round(bribery: 7.replace("bribery: ","")),
      hygiene: 8,
      waitTime: 6,
      equipment: 8,
      staff: 10
    }
  },
  {
    id: "est-extra-101",
    name: "Barid Beni Mellal Centre",
    category: "Post Office",
    address: "Avenue Mohamed V, Beni Mellal",
    city: "Beni Mellal",
    coordinates: { latitude: 32.3373, longitude: -6.345 },
    status: "verified",
    reviews: 100,
    complaints: 15,
    recentSignal: "Lost package complaint registered.",
    overallScore: 4.9,
    scoreCategories: {
      bribery: Math.round(bribery: 3.replace("bribery: ","")),
      hygiene: 5,
      waitTime: 7,
      equipment: 3,
      staff: 7
    }
  },
  {
    id: "est-extra-102",
    name: "Barid Settat Centre",
    category: "Post Office",
    address: "Avenue Hassan II, Settat",
    city: "Settat",
    coordinates: { latitude: 32.9942, longitude: -7.615 },
    status: "watch",
    reviews: 126,
    complaints: 15,
    recentSignal: "Clean environment and helpful security guard.",
    overallScore: 7.0,
    scoreCategories: {
      bribery: Math.round(bribery: 3.replace("bribery: ","")),
      hygiene: 9,
      waitTime: 5,
      equipment: 8,
      staff: 9
    }
  },
  {
    id: "est-extra-103",
    name: "Barid El Jadida Centre",
    category: "Post Office",
    address: "Avenue de Suez, El Jadida",
    city: "El Jadida",
    coordinates: { latitude: 33.2549, longitude: -8.495 },
    status: "watch",
    reviews: 50,
    complaints: 7,
    recentSignal: "Long queues for pension payouts.",
    overallScore: 4.6,
    scoreCategories: {
      bribery: Math.round(bribery: 3.replace("bribery: ","")),
      hygiene: 8,
      waitTime: 3,
      equipment: 9,
      staff: 1
    }
  },
  {
    id: "est-extra-104",
    name: "Barid Safi Centre",
    category: "Post Office",
    address: "Plateau, Rue du Riad, Safi",
    city: "Safi",
    coordinates: { latitude: 32.2994, longitude: -9.235 },
    status: "watch",
    reviews: 8,
    complaints: 6,
    recentSignal: "Lost package complaint registered.",
    overallScore: 4.9,
    scoreCategories: {
      bribery: Math.round(bribery: 3.replace("bribery: ","")),
      hygiene: 4,
      waitTime: 7,
      equipment: 8,
      staff: 2
    }
  },
  {
    id: "est-extra-105",
    name: "Barid Taza Centre",
    category: "Post Office",
    address: "Avenue Allal El Fassi, Taza",
    city: "Taza",
    coordinates: { latitude: 34.2133, longitude: -4.005 },
    status: "watch",
    reviews: 158,
    complaints: 6,
    recentSignal: "Package delivery delays reported.",
    overallScore: 6.0,
    scoreCategories: {
      bribery: Math.round(bribery: 2.replace("bribery: ","")),
      hygiene: 8,
      waitTime: 10,
      equipment: 5,
      staff: 5
    }
  },
  {
    id: "est-extra-106",
    name: "Barid Nador Centre",
    category: "Post Office",
    address: "Boulevard de la Corniche, Nador",
    city: "Nador",
    coordinates: { latitude: 35.1688, longitude: -2.925 },
    status: "new",
    reviews: 112,
    complaints: 5,
    recentSignal: "System offline for two hours in the morning.",
    overallScore: 5.3,
    scoreCategories: {
      bribery: Math.round(bribery: 5.replace("bribery: ","")),
      hygiene: 8,
      waitTime: 2,
      equipment: 6,
      staff: 5
    }
  },
  {
    id: "est-extra-107",
    name: "Barid Tiznit Centre",
    category: "Post Office",
    address: "Avenue Hassan II, Tiznit",
    city: "Tiznit",
    coordinates: { latitude: 29.6974, longitude: -9.795 },
    status: "priority",
    reviews: 19,
    complaints: 8,
    recentSignal: "Clean environment and helpful security guard.",
    overallScore: 5.2,
    scoreCategories: {
      bribery: Math.round(bribery: 2.replace("bribery: ","")),
      hygiene: 9,
      waitTime: 10,
      equipment: 3,
      staff: 2
    }
  },
  {
    id: "est-extra-108",
    name: "Barid Errachidia Centre",
    category: "Post Office",
    address: "Avenue Moulay Ali Cherif, Errachidia",
    city: "Errachidia",
    coordinates: { latitude: 31.9314, longitude: -4.425 },
    status: "watch",
    reviews: 89,
    complaints: 6,
    recentSignal: "Friendly staff and quick money transfer service.",
    overallScore: 4.1,
    scoreCategories: {
      bribery: Math.round(bribery: 3.replace("bribery: ","")),
      hygiene: 3,
      waitTime: 4,
      equipment: 4,
      staff: 6
    }
  },
  {
    id: "est-extra-109",
    name: "Barid Khouribga Centre",
    category: "Post Office",
    address: "Quartier El Qods, Khouribga",
    city: "Khouribga",
    coordinates: { latitude: 32.8811, longitude: -6.895 },
    status: "priority",
    reviews: 159,
    complaints: 11,
    recentSignal: "Long queues for pension payouts.",
    overallScore: 5.9,
    scoreCategories: {
      bribery: Math.round(bribery: 9.replace("bribery: ","")),
      hygiene: 7,
      waitTime: 3,
      equipment: 1,
      staff: 9
    }
  },
  {
    id: "est-extra-110",
    name: "Barid Sidi Kacem Centre",
    category: "Post Office",
    address: "Boulevard Mohammed V, Sidi Kacem",
    city: "Sidi Kacem",
    coordinates: { latitude: 34.2333, longitude: -5.695 },
    status: "verified",
    reviews: 5,
    complaints: 10,
    recentSignal: "Inoperative parcel tracking system.",
    overallScore: 4.8,
    scoreCategories: {
      bribery: Math.round(bribery: 6.replace("bribery: ","")),
      hygiene: 6,
      waitTime: 4,
      equipment: 7,
      staff: 2
    }
  },
  {
    id: "est-extra-111",
    name: "Barid Larache Centre",
    category: "Post Office",
    address: "Boulevard Mohamed V, Larache",
    city: "Larache",
    coordinates: { latitude: 35.1933, longitude: -6.155 },
    status: "verified",
    reviews: 11,
    complaints: 12,
    recentSignal: "Inoperative parcel tracking system.",
    overallScore: 3.6,
    scoreCategories: {
      bribery: Math.round(bribery: 2.replace("bribery: ","")),
      hygiene: 2,
      waitTime: 8,
      equipment: 2,
      staff: 3
    }
  },
  {
    id: "est-extra-112",
    name: "Barid Al Hoceima Centre",
    category: "Post Office",
    address: "Boulevard Mohammed V, Al Hoceima",
    city: "Al Hoceima",
    coordinates: { latitude: 35.2517, longitude: -3.935 },
    status: "verified",
    reviews: 12,
    complaints: 4,
    recentSignal: "Long queues for pension payouts.",
    overallScore: 5.2,
    scoreCategories: {
      bribery: Math.round(bribery: 4.replace("bribery: ","")),
      hygiene: 2,
      waitTime: 9,
      equipment: 6,
      staff: 5
    }
  },
  {
    id: "est-extra-113",
    name: "Barid Ouarzazate Centre",
    category: "Post Office",
    address: "Boulevard Moulay Rachid, Ouarzazate",
    city: "Ouarzazate",
    coordinates: { latitude: 30.9197, longitude: -6.885 },
    status: "verified",
    reviews: 83,
    complaints: 15,
    recentSignal: "Friendly staff and quick money transfer service.",
    overallScore: 5.6,
    scoreCategories: {
      bribery: Math.round(bribery: 4.replace("bribery: ","")),
      hygiene: 9,
      waitTime: 10,
      equipment: 4,
      staff: 1
    }
  },
  {
    id: "est-extra-114",
    name: "Barid Zagora Centre",
    category: "Post Office",
    address: "Avenue Hassan II, Zagora",
    city: "Zagora",
    coordinates: { latitude: 30.3306, longitude: -5.835 },
    status: "verified",
    reviews: 122,
    complaints: 13,
    recentSignal: "Clean environment and helpful security guard.",
    overallScore: 4.5,
    scoreCategories: {
      bribery: Math.round(bribery: 7.replace("bribery: ","")),
      hygiene: 2,
      waitTime: 8,
      equipment: 5,
      staff: 2
    }
  },
  {
    id: "est-extra-115",
    name: "Barid Tinghir Centre",
    category: "Post Office",
    address: "Boulevard Bir Anzarane, Tinghir",
    city: "Tinghir",
    coordinates: { latitude: 31.5156, longitude: -5.495 },
    status: "watch",
    reviews: 67,
    complaints: 4,
    recentSignal: "Only one counter active during peak hours.",
    overallScore: 5.7,
    scoreCategories: {
      bribery: Math.round(bribery: 9.replace("bribery: ","")),
      hygiene: 8,
      waitTime: 7,
      equipment: 3,
      staff: 1
    }
  },
  {
    id: "est-extra-116",
    name: "Barid Taroudant Centre",
    category: "Post Office",
    address: "Boulevard Hassan II, Taroudant",
    city: "Taroudant",
    coordinates: { latitude: 30.4703, longitude: -8.875 },
    status: "new",
    reviews: 16,
    complaints: 3,
    recentSignal: "Package delivery delays reported.",
    overallScore: 4.5,
    scoreCategories: {
      bribery: Math.round(bribery: 4.replace("bribery: ","")),
      hygiene: 2,
      waitTime: 2,
      equipment: 5,
      staff: 10
    }
  },
  {
    id: "est-extra-117",
    name: "Barid Essaouira Centre",
    category: "Post Office",
    address: "Medina, Rue de la Sqala, Essaouira",
    city: "Essaouira",
    coordinates: { latitude: 31.5085, longitude: -9.755 },
    status: "new",
    reviews: 194,
    complaints: 15,
    recentSignal: "System offline for two hours in the morning.",
    overallScore: 6.2,
    scoreCategories: {
      bribery: Math.round(bribery: 8.replace("bribery: ","")),
      hygiene: 6,
      waitTime: 4,
      equipment: 3,
      staff: 10
    }
  },
  {
    id: "est-extra-118",
    name: "Barid Khenifra Centre",
    category: "Post Office",
    address: "Boulevard Mohammed V, Khenifra",
    city: "Khenifra",
    coordinates: { latitude: 32.9347, longitude: -5.655 },
    status: "watch",
    reviews: 51,
    complaints: 11,
    recentSignal: "Smooth and quick mail deposit.",
    overallScore: 6.4,
    scoreCategories: {
      bribery: Math.round(bribery: 2.replace("bribery: ","")),
      hygiene: 9,
      waitTime: 10,
      equipment: 5,
      staff: 7
    }
  },
  {
    id: "est-extra-119",
    name: "Barid Midelt Centre",
    category: "Post Office",
    address: "Boulevard Mohammed V, Midelt",
    city: "Midelt",
    coordinates: { latitude: 32.6794, longitude: -4.735 },
    status: "verified",
    reviews: 142,
    complaints: 11,
    recentSignal: "Smooth and quick mail deposit.",
    overallScore: 5.6,
    scoreCategories: {
      bribery: Math.round(bribery: 8.replace("bribery: ","")),
      hygiene: 10,
      waitTime: 2,
      equipment: 7,
      staff: 2
    }
  },
  {
    id: "est-extra-120",
    name: "Barid Azrou Centre",
    category: "Post Office",
    address: "Avenue Hassan II, Azrou",
    city: "Azrou",
    coordinates: { latitude: 33.4344, longitude: -5.215 },
    status: "verified",
    reviews: 159,
    complaints: 1,
    recentSignal: "Smooth and quick mail deposit.",
    overallScore: 6.2,
    scoreCategories: {
      bribery: Math.round(bribery: 8.replace("bribery: ","")),
      hygiene: 4,
      waitTime: 6,
      equipment: 8,
      staff: 4
    }
  },
  {
    id: "est-extra-121",
    name: "Tribunal Casablanca",
    category: "Court",
    address: "Boulevard Mohammed V, Casablanca",
    city: "Casablanca",
    coordinates: { latitude: 33.5731, longitude: -7.613 },
    status: "new",
    reviews: 130,
    complaints: 5,
    recentSignal: "Helpful public guidance desk.",
    overallScore: 5.4,
    scoreCategories: {
      bribery: Math.round(bribery: 3.replace("bribery: ","")),
      hygiene: 8,
      waitTime: 5,
      equipment: 8,
      staff: 1
    }
  },
  {
    id: "est-extra-122",
    name: "Tribunal Rabat",
    category: "Court",
    address: "Avenue Allal Ben Abdallah, Hassan",
    city: "Rabat",
    coordinates: { latitude: 34.015, longitude: -6.833 },
    status: "new",
    reviews: 13,
    complaints: 4,
    recentSignal: "Crowded hallways and lack of seating.",
    overallScore: 5.3,
    scoreCategories: {
      bribery: Math.round(bribery: 1.replace("bribery: ","")),
      hygiene: 8,
      waitTime: 4,
      equipment: 5,
      staff: 8
    }
  },
  {
    id: "est-extra-123",
    name: "Tribunal Fes",
    category: "Court",
    address: "Boulevard Allal El Fassi, Fez",
    city: "Fez",
    coordinates: { latitude: 34.061, longitude: -4.973 },
    status: "verified",
    reviews: 129,
    complaints: 11,
    recentSignal: "Lost case files causing delays.",
    overallScore: 6.1,
    scoreCategories: {
      bribery: Math.round(bribery: 7.replace("bribery: ","")),
      hygiene: 7,
      waitTime: 9,
      equipment: 6,
      staff: 2
    }
  },
  {
    id: "est-extra-124",
    name: "Tribunal Marrakech",
    category: "Court",
    address: "Medina, Derb Dabachi",
    city: "Marrakech",
    coordinates: { latitude: 31.6295, longitude: -8.003 },
    status: "verified",
    reviews: 54,
    complaints: 14,
    recentSignal: "Helpful public guidance desk.",
    overallScore: 3.7,
    scoreCategories: {
      bribery: Math.round(bribery: 2.replace("bribery: ","")),
      hygiene: 2,
      waitTime: 6,
      equipment: 6,
      staff: 2
    }
  },
  {
    id: "est-extra-125",
    name: "Tribunal Tangier",
    category: "Court",
    address: "Boulevard Pasteur, Tangier",
    city: "Tangier",
    coordinates: { latitude: 35.7595, longitude: -5.813 },
    status: "verified",
    reviews: 103,
    complaints: 15,
    recentSignal: "Efficient processing of criminal record copies.",
    overallScore: 4.8,
    scoreCategories: {
      bribery: Math.round(bribery: 5.replace("bribery: ","")),
      hygiene: 6,
      waitTime: 3,
      equipment: 4,
      staff: 6
    }
  },
  {
    id: "est-extra-126",
    name: "Tribunal Agadir",
    category: "Court",
    address: "Avenue Hassan II, Agadir",
    city: "Agadir",
    coordinates: { latitude: 30.4278, longitude: -9.583 },
    status: "watch",
    reviews: 155,
    complaints: 14,
    recentSignal: "Alleged corruption in judicial archive access.",
    overallScore: 6.1,
    scoreCategories: {
      bribery: Math.round(bribery: 5.replace("bribery: ","")),
      hygiene: 7,
      waitTime: 6,
      equipment: 5,
      staff: 7
    }
  },
  {
    id: "est-extra-127",
    name: "Tribunal Meknes",
    category: "Court",
    address: "Boulevard Hassan II, Meknes",
    city: "Meknes",
    coordinates: { latitude: 33.8935, longitude: -5.548 },
    status: "watch",
    reviews: 38,
    complaints: 13,
    recentSignal: "Difficulties accessing digital court portal.",
    overallScore: 4.9,
    scoreCategories: {
      bribery: Math.round(bribery: 2.replace("bribery: ","")),
      hygiene: 4,
      waitTime: 1,
      equipment: 8,
      staff: 10
    }
  },
  {
    id: "est-extra-128",
    name: "Tribunal Oujda",
    category: "Court",
    address: "Boulevard Mohammed V, Oujda",
    city: "Oujda",
    coordinates: { latitude: 34.6867, longitude: -1.909 },
    status: "watch",
    reviews: 50,
    complaints: 12,
    recentSignal: "Alleged corruption in judicial archive access.",
    overallScore: 4.9,
    scoreCategories: {
      bribery: Math.round(bribery: 6.replace("bribery: ","")),
      hygiene: 1,
      waitTime: 7,
      equipment: 9,
      staff: 2
    }
  },
  {
    id: "est-extra-129",
    name: "Tribunal Kenitra",
    category: "Court",
    address: "Quartier Mimosa, Kenitra",
    city: "Kenitra",
    coordinates: { latitude: 34.261, longitude: -6.578 },
    status: "priority",
    reviews: 182,
    complaints: 2,
    recentSignal: "Significant delay in case scheduling.",
    overallScore: 7.0,
    scoreCategories: {
      bribery: Math.round(bribery: 7.replace("bribery: ","")),
      hygiene: 9,
      waitTime: 4,
      equipment: 9,
      staff: 7
    }
  },
  {
    id: "est-extra-130",
    name: "Tribunal Tetouan",
    category: "Court",
    address: "Avenue Mohamed V, Tetouan",
    city: "Tetouan",
    coordinates: { latitude: 35.5785, longitude: -5.363 },
    status: "verified",
    reviews: 105,
    complaints: 11,
    recentSignal: "Significant delay in case scheduling.",
    overallScore: 4.2,
    scoreCategories: {
      bribery: Math.round(bribery: 1.replace("bribery: ","")),
      hygiene: 6,
      waitTime: 9,
      equipment: 1,
      staff: 3
    }
  },
  {
    id: "est-extra-131",
    name: "Tribunal Beni Mellal",
    category: "Court",
    address: "Route de Marrakech, Beni Mellal",
    city: "Beni Mellal",
    coordinates: { latitude: 32.3373, longitude: -6.343 },
    status: "watch",
    reviews: 175,
    complaints: 13,
    recentSignal: "Helpful public guidance desk.",
    overallScore: 4.8,
    scoreCategories: {
      bribery: Math.round(bribery: 6.replace("bribery: ","")),
      hygiene: 7,
      waitTime: 5,
      equipment: 4,
      staff: 2
    }
  },
  {
    id: "est-extra-132",
    name: "Tribunal Settat",
    category: "Court",
    address: "Boulevard Mohamed V, Settat",
    city: "Settat",
    coordinates: { latitude: 32.9942, longitude: -7.613 },
    status: "watch",
    reviews: 141,
    complaints: 3,
    recentSignal: "Long waiting time for translation services.",
    overallScore: 5.4,
    scoreCategories: {
      bribery: Math.round(bribery: 1.replace("bribery: ","")),
      hygiene: 6,
      waitTime: 4,
      equipment: 7,
      staff: 10
    }
  },
  {
    id: "est-extra-133",
    name: "Tribunal El Jadida",
    category: "Court",
    address: "Quartier Plateau, El Jadida",
    city: "El Jadida",
    coordinates: { latitude: 33.2549, longitude: -8.493 },
    status: "verified",
    reviews: 123,
    complaints: 1,
    recentSignal: "Efficient processing of criminal record copies.",
    overallScore: 4.6,
    scoreCategories: {
      bribery: Math.round(bribery: 4.replace("bribery: ","")),
      hygiene: 1,
      waitTime: 5,
      equipment: 7,
      staff: 6
    }
  },
  {
    id: "est-extra-134",
    name: "Tribunal Safi",
    category: "Court",
    address: "Avenue Sidi Bouzid, Safi",
    city: "Safi",
    coordinates: { latitude: 32.2994, longitude: -9.233 },
    status: "new",
    reviews: 187,
    complaints: 1,
    recentSignal: "Efficient processing of criminal record copies.",
    overallScore: 5.5,
    scoreCategories: {
      bribery: Math.round(bribery: 1.replace("bribery: ","")),
      hygiene: 8,
      waitTime: 2,
      equipment: 9,
      staff: 7
    }
  },
  {
    id: "est-extra-135",
    name: "Tribunal Taza",
    category: "Court",
    address: "Avenue de la Gare, Taza",
    city: "Taza",
    coordinates: { latitude: 34.2133, longitude: -4.003 },
    status: "verified",
    reviews: 140,
    complaints: 12,
    recentSignal: "Long waiting time for translation services.",
    overallScore: 6.3,
    scoreCategories: {
      bribery: Math.round(bribery: 5.replace("bribery: ","")),
      hygiene: 8,
      waitTime: 7,
      equipment: 7,
      staff: 5
    }
  },
  {
    id: "est-extra-136",
    name: "Tribunal Nador",
    category: "Court",
    address: "Quartier Lmatar, Nador",
    city: "Nador",
    coordinates: { latitude: 35.1688, longitude: -2.923 },
    status: "priority",
    reviews: 181,
    complaints: 4,
    recentSignal: "Helpful public guidance desk.",
    overallScore: 3.4,
    scoreCategories: {
      bribery: Math.round(bribery: 2.replace("bribery: ","")),
      hygiene: 3,
      waitTime: 2,
      equipment: 7,
      staff: 3
    }
  },
  {
    id: "est-extra-137",
    name: "Tribunal Tiznit",
    category: "Court",
    address: "Bab El Khemis, Tiznit",
    city: "Tiznit",
    coordinates: { latitude: 29.6974, longitude: -9.793 },
    status: "verified",
    reviews: 144,
    complaints: 15,
    recentSignal: "Alleged corruption in judicial archive access.",
    overallScore: 5.2,
    scoreCategories: {
      bribery: Math.round(bribery: 6.replace("bribery: ","")),
      hygiene: 6,
      waitTime: 5,
      equipment: 2,
      staff: 7
    }
  },
  {
    id: "est-extra-138",
    name: "Tribunal Errachidia",
    category: "Court",
    address: "Avenue Hassan II, Errachidia",
    city: "Errachidia",
    coordinates: { latitude: 31.9314, longitude: -4.423 },
    status: "verified",
    reviews: 126,
    complaints: 7,
    recentSignal: "Long waiting time for translation services.",
    overallScore: 5.8,
    scoreCategories: {
      bribery: Math.round(bribery: 5.replace("bribery: ","")),
      hygiene: 4,
      waitTime: 6,
      equipment: 4,
      staff: 10
    }
  },
  {
    id: "est-extra-139",
    name: "Tribunal Khouribga",
    category: "Court",
    address: "Boulevard Moulay Youssef, Khouribga",
    city: "Khouribga",
    coordinates: { latitude: 32.8811, longitude: -6.893 },
    status: "verified",
    reviews: 48,
    complaints: 14,
    recentSignal: "Helpful and professional court clerks.",
    overallScore: 6.2,
    scoreCategories: {
      bribery: Math.round(bribery: 8.replace("bribery: ","")),
      hygiene: 7,
      waitTime: 9,
      equipment: 3,
      staff: 4
    }
  },
  {
    id: "est-extra-140",
    name: "Tribunal Sidi Kacem",
    category: "Court",
    address: "Boulevard Mohammed V, Sidi Kacem",
    city: "Sidi Kacem",
    coordinates: { latitude: 34.2333, longitude: -5.693 },
    status: "verified",
    reviews: 98,
    complaints: 4,
    recentSignal: "Difficulties accessing digital court portal.",
    overallScore: 5.8,
    scoreCategories: {
      bribery: Math.round(bribery: 8.replace("bribery: ","")),
      hygiene: 7,
      waitTime: 3,
      equipment: 2,
      staff: 9
    }
  },
  {
    id: "est-extra-141",
    name: "Tribunal Larache",
    category: "Court",
    address: "Boulevard Mohamed V, Larache",
    city: "Larache",
    coordinates: { latitude: 35.1933, longitude: -6.153 },
    status: "priority",
    reviews: 159,
    complaints: 1,
    recentSignal: "Efficient processing of criminal record copies.",
    overallScore: 5.6,
    scoreCategories: {
      bribery: Math.round(bribery: 4.replace("bribery: ","")),
      hygiene: 6,
      waitTime: 4,
      equipment: 7,
      staff: 7
    }
  },
  {
    id: "est-extra-142",
    name: "Tribunal Al Hoceima",
    category: "Court",
    address: "Plage Quemado, Al Hoceima",
    city: "Al Hoceima",
    coordinates: { latitude: 35.2517, longitude: -3.933 },
    status: "priority",
    reviews: 83,
    complaints: 6,
    recentSignal: "Difficulties accessing digital court portal.",
    overallScore: 4.2,
    scoreCategories: {
      bribery: Math.round(bribery: 3.replace("bribery: ","")),
      hygiene: 3,
      waitTime: 6,
      equipment: 4,
      staff: 5
    }
  },
  {
    id: "est-extra-143",
    name: "Tribunal Ouarzazate",
    category: "Court",
    address: "Boulevard Moulay Rachid, Ouarzazate",
    city: "Ouarzazate",
    coordinates: { latitude: 30.9197, longitude: -6.883 },
    status: "verified",
    reviews: 12,
    complaints: 13,
    recentSignal: "Long waiting time for translation services.",
    overallScore: 4.0,
    scoreCategories: {
      bribery: Math.round(bribery: 2.replace("bribery: ","")),
      hygiene: 4,
      waitTime: 4,
      equipment: 7,
      staff: 3
    }
  },
  {
    id: "est-extra-144",
    name: "Tribunal Zagora",
    category: "Court",
    address: "Boulevard Mohammed V, Zagora",
    city: "Zagora",
    coordinates: { latitude: 30.3306, longitude: -5.833 },
    status: "verified",
    reviews: 194,
    complaints: 8,
    recentSignal: "Clean and well-maintained courtrooms.",
    overallScore: 4.7,
    scoreCategories: {
      bribery: Math.round(bribery: 4.replace("bribery: ","")),
      hygiene: 6,
      waitTime: 1,
      equipment: 5,
      staff: 7
    }
  },
  {
    id: "est-extra-145",
    name: "Tribunal Tinghir",
    category: "Court",
    address: "Avenue Mohammed V, Tinghir",
    city: "Tinghir",
    coordinates: { latitude: 31.5156, longitude: -5.493 },
    status: "verified",
    reviews: 116,
    complaints: 1,
    recentSignal: "Helpful public guidance desk.",
    overallScore: 5.9,
    scoreCategories: {
      bribery: Math.round(bribery: 1.replace("bribery: ","")),
      hygiene: 9,
      waitTime: 6,
      equipment: 6,
      staff: 7
    }
  },
  {
    id: "est-extra-146",
    name: "Tribunal Taroudant",
    category: "Court",
    address: "Avenue Moulay Rachid, Taroudant",
    city: "Taroudant",
    coordinates: { latitude: 30.4703, longitude: -8.873 },
    status: "new",
    reviews: 172,
    complaints: 15,
    recentSignal: "Long waiting time for translation services.",
    overallScore: 6.9,
    scoreCategories: {
      bribery: Math.round(bribery: 9.replace("bribery: ","")),
      hygiene: 8,
      waitTime: 8,
      equipment: 3,
      staff: 7
    }
  },
  {
    id: "est-extra-147",
    name: "Tribunal Essaouira",
    category: "Court",
    address: "Boulevard Mohammed V, Essaouira",
    city: "Essaouira",
    coordinates: { latitude: 31.5085, longitude: -9.753 },
    status: "new",
    reviews: 17,
    complaints: 14,
    recentSignal: "Clean and well-maintained courtrooms.",
    overallScore: 4.4,
    scoreCategories: {
      bribery: Math.round(bribery: 5.replace("bribery: ","")),
      hygiene: 5,
      waitTime: 2,
      equipment: 7,
      staff: 3
    }
  },
  {
    id: "est-extra-148",
    name: "Tribunal Khenifra",
    category: "Court",
    address: "Avenue Hassan II, Khenifra",
    city: "Khenifra",
    coordinates: { latitude: 32.9347, longitude: -5.653 },
    status: "watch",
    reviews: 185,
    complaints: 14,
    recentSignal: "Clean and well-maintained courtrooms.",
    overallScore: 5.1,
    scoreCategories: {
      bribery: Math.round(bribery: 4.replace("bribery: ","")),
      hygiene: 7,
      waitTime: 2,
      equipment: 9,
      staff: 3
    }
  },
  {
    id: "est-extra-149",
    name: "Tribunal Midelt",
    category: "Court",
    address: "Avenue Hassan II, Midelt",
    city: "Midelt",
    coordinates: { latitude: 32.6794, longitude: -4.733 },
    status: "verified",
    reviews: 19,
    complaints: 6,
    recentSignal: "Difficulties accessing digital court portal.",
    overallScore: 4.5,
    scoreCategories: {
      bribery: Math.round(bribery: 1.replace("bribery: ","")),
      hygiene: 4,
      waitTime: 8,
      equipment: 8,
      staff: 2
    }
  },
  {
    id: "est-extra-150",
    name: "Tribunal Azrou",
    category: "Court",
    address: "Boulevard Mohammed V, Azrou",
    city: "Azrou",
    coordinates: { latitude: 33.4344, longitude: -5.213 },
    status: "verified",
    reviews: 67,
    complaints: 1,
    recentSignal: "Alleged corruption in judicial archive access.",
    overallScore: 5.4,
    scoreCategories: {
      bribery: Math.round(bribery: 7.replace("bribery: ","")),
      hygiene: 2,
      waitTime: 5,
      equipment: 6,
      staff: 8
    }
  },
  {
    id: "est-extra-151",
    name: "CAF Casablanca",
    category: "Government Office",
    address: "Boulevard Zerktouni, Anfa",
    city: "Casablanca",
    coordinates: { latitude: 33.5731, longitude: -7.617 },
    status: "verified",
    reviews: 146,
    complaints: 1,
    recentSignal: "Friendly service and clean facilities.",
    overallScore: 5.1,
    scoreCategories: {
      bribery: Math.round(bribery: 4.replace("bribery: ","")),
      hygiene: 4,
      waitTime: 6,
      equipment: 6,
      staff: 6
    }
  },
  {
    id: "est-extra-152",
    name: "CNSS Rabat",
    category: "Government Office",
    address: "Quartier Ryad, Avenue Annakhil",
    city: "Rabat",
    coordinates: { latitude: 34.015, longitude: -6.834 },
    status: "watch",
    reviews: 125,
    complaints: 3,
    recentSignal: "Friendly service and clean facilities.",
    overallScore: 5.7,
    scoreCategories: {
      bribery: Math.round(bribery: 5.replace("bribery: ","")),
      hygiene: 5,
      waitTime: 6,
      equipment: 5,
      staff: 7
    }
  },
  {
    id: "est-extra-153",
    name: "CAF Fes",
    category: "Government Office",
    address: "Boulevard Allal El Fassi, Fez",
    city: "Fez",
    coordinates: { latitude: 34.061, longitude: -4.971 },
    status: "watch",
    reviews: 116,
    complaints: 8,
    recentSignal: "Friendly service and clean facilities.",
    overallScore: 4.4,
    scoreCategories: {
      bribery: Math.round(bribery: 6.replace("bribery: ","")),
      hygiene: 7,
      waitTime: 4,
      equipment: 4,
      staff: 1
    }
  },
  {
    id: "est-extra-154",
    name: "CNSS Marrakech",
    category: "Government Office",
    address: "Avenue Hassan II, Marrakech",
    city: "Marrakech",
    coordinates: { latitude: 31.6295, longitude: -8.001 },
    status: "verified",
    reviews: 115,
    complaints: 0,
    recentSignal: "Helpful guidance on pension registration.",
    overallScore: 4.7,
    scoreCategories: {
      bribery: Math.round(bribery: 2.replace("bribery: ","")),
      hygiene: 5,
      waitTime: 7,
      equipment: 5,
      staff: 5
    }
  },
  {
    id: "est-extra-155",
    name: "CAF Tangier",
    category: "Government Office",
    address: "Medina, Rue de la Marine",
    city: "Tangier",
    coordinates: { latitude: 35.7595, longitude: -5.811 },
    status: "watch",
    reviews: 54,
    complaints: 15,
    recentSignal: "Long queues at the reception desk.",
    overallScore: 6.6,
    scoreCategories: {
      bribery: Math.round(bribery: 9.replace("bribery: ","")),
      hygiene: 7,
      waitTime: 6,
      equipment: 8,
      staff: 4
    }
  },
];
