import { EstablishmentStatus } from "./types";
import { establishments } from "./establishments";

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

export const mapProperties = {
  selectionEnabled: false,
};

export const markers = establishments.map((item) => ({
  id: item.id,
  coordinates: item.coordinates,
  showCallout: false,
  zIndex: item.status === "priority" ? 10 : 1,
  title: item.overallScore !== undefined
    ? `Score: ${item.overallScore.toFixed(1)}`
    : undefined,
  monogram: item.overallScore !== undefined
    ? item.overallScore.toFixed(1)
    : undefined,
  tintColor:
    item.overallScore !== undefined && item.overallScore >= 7
      ? "#22C55E"
      : item.overallScore !== undefined && item.overallScore >= 4
        ? "#EAB308"
        : "#EF4444",
}));
