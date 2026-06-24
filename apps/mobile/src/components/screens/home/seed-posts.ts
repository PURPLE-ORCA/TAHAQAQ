import type { PostProps } from "./post-card";

/**
 * Seed data for Recent Activity feed.
 * Based on real Moroccan citizen stories from r/Morocco, forums, and news sources.
 * Anonymized and reformulated for TAHAQAQ.
 */
export const SEED_POSTS: PostProps[] = [
  {
    id: "post-1",
    facilityName: "CHU Ibn Sina",
    city: "Rabat",
    story:
      "I took my mother to the emergency room last night. She was having chest pains. The nurse told us to wait — we waited 5 hours. When we finally saw the doctor, he barely looked at her and prescribed medication without running any tests. When I asked about an ECG, he said 'the machine is broken.'",
    categories: ["staff", "wait_time", "equipment"],
    timeAgo: "2h ago",
    auditCount: 18,
    avgRating: 2,
    hasPhotos: true,
  },
  {
    id: "post-2",
    facilityName: "CHU Hassan II",
    city: "Agadir",
    story:
      "I went to visit my cousin who just had surgery. Trash piled up next to the nurses' station. The toilets were unusable — no soap, no toilet paper, the floor was wet with God knows what. My cousin's room had no AC and it's June. The nurse came once in 4 hours.",
    categories: ["hygiene", "equipment", "staff"],
    timeAgo: "5h ago",
    auditCount: 24,
    avgRating: 1,
    hasPhotos: true,
  },
  {
    id: "post-3",
    facilityName: "CHU Ibn Rochd",
    city: "Casablanca",
    story:
      "My sister had severe stomach pain. The nurses were all trainees — they didn't want to do their job. One told us to 'go to a clinic if you want real care.' The doctor prescribed something random and disappeared for 3 hours. There was ONE bottle of betadine in the entire ER.",
    categories: ["staff", "equipment", "hygiene"],
    timeAgo: "3h ago",
    auditCount: 31,
    avgRating: 1,
    hasPhotos: false,
  },
  {
    id: "post-4",
    facilityName: "Regional Hospital",
    city: "Agadir",
    story:
      "My father needed surgery. The surgeon quoted us 8,000-12,000 DH — cash. No CNSS coverage at the public hospital. When we said we couldn't afford it, the tone changed. 'Then you'll have to wait. Maybe 3 months.' Other families in the waiting room told us the same story.",
    categories: ["bribery", "equipment", "wait_time"],
    timeAgo: "6h ago",
    auditCount: 12,
    avgRating: 2,
    hasPhotos: true,
  },
  {
    id: "post-5",
    facilityName: "CHU Mohammed V",
    city: "Safi",
    story:
      "I'm a medical student. At Mohammed V Hospital, we don't have an autoclave. We soak surgical instruments in alcohol all night. Gloves are so rare that we wash them, dry them, and reuse them. A military nurse who came for an internship was shocked — he'd never seen anything like it.",
    categories: ["hygiene", "equipment"],
    timeAgo: "12h ago",
    auditCount: 9,
    avgRating: 1,
    hasPhotos: true,
  },
  {
    id: "post-6",
    facilityName: "Regional Hospital",
    city: "Safi",
    story:
      "I went to the ER at 2 AM with a broken wrist. There was no doctor on duty. The nurse told me to 'come back in the morning.' I waited in the hallway — no chairs, so I sat on the floor. At 7 AM, a doctor finally showed up. He set my wrist without proper X-ray because 'the machine is being repaired.'",
    categories: ["staff", "equipment", "wait_time", "hygiene"],
    timeAgo: "5h ago",
    auditCount: 15,
    avgRating: 2,
    hasPhotos: false,
  },
  {
    id: "post-7",
    facilityName: "CHU Hassan II",
    city: "Casablanca",
    story:
      "My aunt went into labor last week. The doctor was not present for the first 2 hours. A trainee was monitoring her. When the doctor finally arrived, he rushed the procedure. My aunt survived, but the woman in the next bed didn't. That's the 8th death in 10 days.",
    categories: ["staff", "equipment"],
    timeAgo: "8h ago",
    auditCount: 22,
    avgRating: 1,
    hasPhotos: true,
  },
  {
    id: "post-8",
    facilityName: "CHU Mohammed V",
    city: "Casablanca",
    story:
      "My uncle needed surgery at a private hospital. The bill was 35,000 DH. CNSS reimbursed only 30%. We paid 24,500 out of pocket. Meanwhile, the waiting room at the public CHU next door has people sleeping on the floor because there are no beds. Two worlds, same country.",
    categories: ["bribery", "equipment", "wait_time"],
    timeAgo: "3h ago",
    auditCount: 27,
    avgRating: 3,
    hasPhotos: false,
  },
];
