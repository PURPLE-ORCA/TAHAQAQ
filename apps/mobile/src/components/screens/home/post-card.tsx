import { View } from "react-native";
import { Card, Chip, Typography } from "heroui-native";
import { Icon } from "@/components/ui/icon";

export type AuditCategory =
  | "hygiene"
  | "staff"
  | "equipment"
  | "bribery"
  | "wait_time";

export type PostProps = {
  id: string;
  facilityName: string;
  city: string;
  story: string; // first-person, 2-3 sentences
  categories: AuditCategory[];
  timeAgo: string;
  auditCount: number; // how many audits this establishment has
  avgRating: number; // 0-5, overall rating from audits
  hasPhotos: boolean;
};

const CATEGORY_CONFIG: Record<
  AuditCategory,
  { icon: string; label: string; color: string }
> = {
  hygiene: {
    icon: "sparkles-outline",
    label: "Hygiene",
    color: "#10B981",
  },
  staff: {
    icon: "people-outline",
    label: "Staff",
    color: "#3B82F6",
  },
  equipment: {
    icon: "construct-outline",
    label: "Equipment",
    color: "#F59E0B",
  },
  bribery: {
    icon: "cash-outline",
    label: "Bribery",
    color: "#EF4444",
  },
  wait_time: {
    icon: "time-outline",
    label: "Wait Time",
    color: "#8B5CF6",
  },
};

function RatingStars({ rating }: { rating: number }) {
  return (
    <View className="flex-row gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Icon
          key={star}
          name={star <= rating ? "star" : "star-outline"}
          size={12}
          className={star <= rating ? "text-warning" : "text-muted"}
        />
      ))}
    </View>
  );
}

export function PostCard({
  facilityName,
  city,
  story,
  categories,
  timeAgo,
  auditCount,
  avgRating,
  hasPhotos,
}: PostProps) {
  return (
    <Card>
      <View className="gap-3">
        {/* Header: facility + city */}
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-2 flex-1">
            <Icon name="business-outline" size={16} className="text-accent" />
            <Typography
              type="body-sm"
              weight="semibold"
              numberOfLines={1}
              className="flex-1"
            >
              {facilityName}
            </Typography>
            <Typography type="body-xs" color="muted">
              {city}
            </Typography>
          </View>
        </View>

        {/* Story — the real content */}
        <Typography type="body" color="default" numberOfLines={3}>
          "{story}"
        </Typography>

        {/* Category tags */}
        <View className="flex-row flex-wrap gap-1.5">
          {categories.map((cat) => {
            const config = CATEGORY_CONFIG[cat];
            return (
              <Chip key={cat} size="sm" variant="secondary">
                <Icon name={config.icon} size={12} className="text-muted" />
                <Chip.Label>{config.label}</Chip.Label>
              </Chip>
            );
          })}
        </View>

        {/* Footer: rating + audit count + time + photos */}
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-2">
            <RatingStars rating={avgRating} />
            <Typography type="body-xs" color="muted">
              {auditCount} audits
            </Typography>
          </View>
          <View className="flex-row items-center gap-2">
            {hasPhotos && (
              <Icon
                name="camera-outline"
                size={14}
                className="text-muted"
              />
            )}
            <Typography type="body-xs" color="muted">
              {timeAgo}
            </Typography>
          </View>
        </View>
      </View>
    </Card>
  );
}
