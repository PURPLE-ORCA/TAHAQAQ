// =============================================================================
// @tahaqaq/mock-data — Reports
//
// Individual citizen reports/posts linked to establishments.
// This is the single source of truth for both mobile and web apps.
// =============================================================================

export type ReportCategory =
  | "hygiene"
  | "staff"
  | "equipment"
  | "bribery"
  | "wait_time";

export type Report = {
  id: string;
  establishmentId: string;
  author: string;
  story: string;
  categories: ReportCategory[];
  timeAgo: string;
  auditCount: number;
  avgRating: number;
  hasPhotos: boolean;
};

// ─────────────────────────────────────────────────────────────────────────────
// REPORTS — linked to establishments by id
// ─────────────────────────────────────────────────────────────────────────────

export const reports: Report[] = [
  // ── rabat-central-hospital ──────────────────────────────────────────────
  {
    id: "rpt-001",
    establishmentId: "rabat-central-hospital",
    author: "Citizen #4821",
    story:
      "I took my mother to the emergency room last night. She was having chest pains. The nurse told us to wait — we waited 5 hours. When we finally saw the doctor, he barely looked at her and prescribed medication without running any tests. When I asked about an ECG, he said 'the machine is broken.'",
    categories: ["staff", "wait_time", "equipment"],
    timeAgo: "2h ago",
    auditCount: 18,
    avgRating: 2,
    hasPhotos: true,
  },
  {
    id: "rpt-002",
    establishmentId: "rabat-central-hospital",
    author: "Citizen #3102",
    story:
      "The nurse at the reception told us we need to 'take care of her' first before she can register us. 200 MAD just to get a bed number. This is not healthcare, it's organized extraction.",
    categories: ["bribery", "staff"],
    timeAgo: "5h ago",
    auditCount: 12,
    avgRating: 1,
    hasPhotos: false,
  },
  {
    id: "rpt-003",
    establishmentId: "rabat-central-hospital",
    author: "Citizen #5504",
    story:
      "I went for a routine blood test. The lab technician was on break. Waited 45 minutes. When he came back, he handled my sample with bare hands — no gloves. I asked for a new needle. He said 'it's fine, it's sterile.' I don't think it was.",
    categories: ["hygiene", "staff", "wait_time"],
    timeAgo: "1d ago",
    auditCount: 8,
    avgRating: 2,
    hasPhotos: true,
  },

  // ── rabat-parlement ─────────────────────────────────────────────────────
  {
    id: "rpt-004",
    establishmentId: "rabat-parlement",
    author: "Citizen #1577",
    story:
      "Security checkpoint was painfully slow. 45 minutes just to enter the building. No signage, no staff to guide you. Every person I asked gave a different answer. It's like they don't want citizens to access public services.",
    categories: ["staff", "wait_time"],
    timeAgo: "1h ago",
    auditCount: 14,
    avgRating: 3,
    hasPhotos: false,
  },
  {
    id: "rpt-005",
    establishmentId: "rabat-parlement",
    author: "Citizen #2209",
    story:
      "I needed a stamped document from the records office. The clerk told me the printer was broken. I saw it working for the person before me. When I asked why, he said 'come back tomorrow.' Same story the next day.",
    categories: ["equipment", "staff"],
    timeAgo: "3h ago",
    auditCount: 9,
    avgRating: 2,
    hasPhotos: false,
  },

  // ── rabat-medina-market ─────────────────────────────────────────────────
  {
    id: "rpt-006",
    establishmentId: "rabat-medina-market",
    author: "Citizen #3019",
    story:
      "Congested walkways near the spice section. Saw someone pickpocketing a tourist. No security in sight. The sanitation situation near the fish stalls is unbearable — flies everywhere, standing water.",
    categories: ["hygiene", "staff"],
    timeAgo: "28m ago",
    auditCount: 32,
    avgRating: 3,
    hasPhotos: true,
  },
  {
    id: "rpt-007",
    establishmentId: "rabat-medina-market",
    author: "Citizen #4412",
    story:
      "The meat vendors near the south entrance are selling expired products. I pointed at a date on a package and the seller told me 'that's just the packaging date, the meat is fine.' It smelled awful.",
    categories: ["hygiene", "bribery"],
    timeAgo: "4h ago",
    auditCount: 20,
    avgRating: 2,
    hasPhotos: true,
  },
  {
    id: "rpt-008",
    establishmentId: "rabat-medina-market",
    author: "Citizen #1887",
    story:
      "Fire exits are completely blocked by stacked crates. If anything happened, there's no way out. I reported it to the market manager. He shrugged and said 'we've been like this for years.'",
    categories: ["equipment", "staff"],
    timeAgo: "1d ago",
    auditCount: 15,
    avgRating: 2,
    hasPhotos: false,
  },

  // ── clinic-des-orangers ─────────────────────────────────────────────────
  {
    id: "rpt-009",
    establishmentId: "clinic-des-orangers",
    author: "Citizen #2903",
    story:
      "Reception desk unstaffed for 30 minutes. Multiple patients left waiting. When someone finally showed up, she was on a phone call and told us to 'wait a moment.' That moment became 20 minutes.",
    categories: ["staff", "wait_time"],
    timeAgo: "2h ago",
    auditCount: 11,
    avgRating: 3,
    hasPhotos: false,
  },
  {
    id: "rpt-010",
    establishmentId: "clinic-des-orangers",
    author: "Citizen #3655",
    story:
      "The waiting room AC has been broken for a week. It's 38°C outside. Elderly patients were visibly struggling. The water dispenser was empty too. Basic comfort is non-existent.",
    categories: ["equipment", "hygiene"],
    timeAgo: "6h ago",
    auditCount: 7,
    avgRating: 2,
    hasPhotos: true,
  },

  // ── hotel-balima ────────────────────────────────────────────────────────
  {
    id: "rpt-011",
    establishmentId: "hotel-balima",
    author: "Citizen #884",
    story:
      "Beautifully renovated rooms. Staff were attentive and professional. The historical suites have been tastefully updated. Breakfast buffet was excellent with local pastries.",
    categories: ["hygiene", "staff"],
    timeAgo: "3h ago",
    auditCount: 6,
    avgRating: 5,
    hasPhotos: true,
  },

  // ── lycee-descartes ─────────────────────────────────────────────────────
  {
    id: "rpt-012",
    establishmentId: "lycee-descartes",
    author: "Citizen #4401",
    story:
      "Excellent facility. Well-maintained labs and engaged teachers. The library resources are comprehensive. Only issue: the school canteen food quality has declined this semester.",
    categories: ["hygiene", "equipment"],
    timeAgo: "4h ago",
    auditCount: 5,
    avgRating: 4,
    hasPhotos: false,
  },

  // ── dar-naji ────────────────────────────────────────────────────────────
  {
    id: "rpt-013",
    establishmentId: "dar-naji",
    author: "Citizen #772",
    story:
      "Authentic Moroccan cuisine. Portions generous and pricing fair. The tagine was perfectly cooked. Only downside: the wait during Friday lunch hour was about 35 minutes without a reservation.",
    categories: ["wait_time", "staff"],
    timeAgo: "5h ago",
    auditCount: 4,
    avgRating: 4,
    hasPhotos: true,
  },

  // ── cozy-cafe ───────────────────────────────────────────────────────────
  {
    id: "rpt-014",
    establishmentId: "cozy-cafe",
    author: "Citizen #3310",
    story:
      "WiFi dropped twice during my visit. Coffee was decent though. The pastries tasted like they were baked yesterday. Staff friendly but overwhelmed — only one person handling orders and tables.",
    categories: ["equipment", "staff"],
    timeAgo: "6h ago",
    auditCount: 9,
    avgRating: 3,
    hasPhotos: false,
  },

  // ── mcdonalds-rabat-ville ───────────────────────────────────────────────
  {
    id: "rpt-015",
    establishmentId: "mcdonalds-rabat-ville",
    author: "Citizen #2210",
    story:
      "Order was wrong twice. Staff argued about whose fault it was in front of me. The dining area had sticky tables. At least the drive-through was fast — 4 minutes.",
    categories: ["staff", "hygiene"],
    timeAgo: "1h ago",
    auditCount: 3,
    avgRating: 3,
    hasPhotos: false,
  },

  // ── le-petit-beur ───────────────────────────────────────────────────────
  {
    id: "rpt-016",
    establishmentId: "le-petit-beur",
    author: "Citizen #1990",
    story:
      "Hidden gem in Rabat. The mechoui was the best I've had. Owner personally checked on our table. Fair prices, generous portions. Will definitely come back.",
    categories: ["staff", "hygiene"],
    timeAgo: "8h ago",
    auditCount: 2,
    avgRating: 5,
    hasPhotos: true,
  },

  // ── boho-cafe ───────────────────────────────────────────────────────────
  {
    id: "rpt-017",
    establishmentId: "boho-cafe",
    author: "Citizen #4021",
    story:
      "Excellent specialty coffee. The pour-over was precisely brewed. Cozy atmosphere, good music. The pastries are homemade and fresh. A welcome addition to the neighborhood.",
    categories: ["hygiene", "staff"],
    timeAgo: "3h ago",
    auditCount: 1,
    avgRating: 5,
    hasPhotos: true,
  },

  // ── rabat-grand-poste ───────────────────────────────────────────────────
  {
    id: "rpt-018",
    establishmentId: "rabat-grand-poste",
    author: "Citizen #3301",
    story:
      "Efficient mail processing. Sent a package to Casablanca and it arrived the next morning. The staff member at counter 3 was particularly helpful and patient with my questions.",
    categories: ["staff", "equipment"],
    timeAgo: "2h ago",
    auditCount: 3,
    avgRating: 4,
    hasPhotos: false,
  },

  // ── national-library-rabat ──────────────────────────────────────────────
  {
    id: "rpt-019",
    establishmentId: "national-library-rabat",
    author: "Citizen #5102",
    story:
      "Excellent study environment and resources. The digital archives section is well-organized. Only issue: the group study rooms need better soundproofing. People outside can hear everything.",
    categories: ["equipment"],
    timeAgo: "5h ago",
    auditCount: 4,
    avgRating: 4,
    hasPhotos: false,
  },

  // ── villa-mandarine ─────────────────────────────────────────────────────
  {
    id: "rpt-020",
    establishmentId: "villa-mandarine",
    author: "Citizen #6201",
    story:
      "Tranquil orange grove gardens. The room was spotless and beautifully furnished. Staff remembered our names from check-in. The spa was a highlight — truly world-class service.",
    categories: ["hygiene", "staff"],
    timeAgo: "1d ago",
    auditCount: 2,
    avgRating: 5,
    hasPhotos: true,
  },

  // ── mauresque-cafe ──────────────────────────────────────────────────────
  {
    id: "rpt-021",
    establishmentId: "mauresque-cafe",
    author: "Citizen #3055",
    story:
      "Stunning river views, tea and pastries. The mint tea was traditional and perfectly sweet. The terrace seating is the best in Rabat. Slight wait for a table on weekends.",
    categories: ["wait_time", "staff"],
    timeAgo: "4h ago",
    auditCount: 3,
    avgRating: 4,
    hasPhotos: true,
  },

  // ── rabat-art-museum ────────────────────────────────────────────────────
  {
    id: "rpt-022",
    establishmentId: "rabat-art-museum",
    author: "Citizen #4100",
    story:
      "Clean facilities and rich exhibits. The temporary collection on Moroccan modern art was exceptional. The café inside is overpriced but the museum itself is worth every dirham.",
    categories: ["hygiene", "equipment"],
    timeAgo: "6h ago",
    auditCount: 2,
    avgRating: 5,
    hasPhotos: true,
  },

  // ── cinema-renaissance ──────────────────────────────────────────────────
  {
    id: "rpt-023",
    establishmentId: "cinema-renaissance",
    author: "Citizen #2776",
    story:
      "Cultural hub for music and films. The live music night was fantastic. Sound quality could be better — some feedback during the louder numbers. Drinks reasonably priced.",
    categories: ["equipment", "staff"],
    timeAgo: "1d ago",
    auditCount: 3,
    avgRating: 4,
    hasPhotos: false,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────

/** Get all reports for a specific establishment */
export function getReportsByEstablishment(establishmentId: string): Report[] {
  return reports.filter((r) => r.establishmentId === establishmentId);
}

/** Get report count for a specific establishment */
export function getReportCount(establishmentId: string): number {
  return reports.filter((r) => r.establishmentId === establishmentId).length;
}

/** Category display config */
export const REPORT_CATEGORY_CONFIG: Record<
  ReportCategory,
  { label: string; color: string }
> = {
  hygiene: { label: "Hygiene", color: "#10B981" },
  staff: { label: "Staff", color: "#3B82F6" },
  equipment: { label: "Equipment", color: "#F59E0B" },
  bribery: { label: "Bribery", color: "#EF4444" },
  wait_time: { label: "Wait Time", color: "#8B5CF6" },
};
