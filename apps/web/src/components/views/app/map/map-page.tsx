"use client";

import { useMemo, useState, useRef } from "react";
import type MapLibreGL from "maplibre-gl";
import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  MapControls,
} from "@/components/ui/map";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  establishments,
  latestReviews,
  scoreColor,
  statusStyles,
  mapCenter,
  type EstablishmentStatus,
  type MapEstablishment,
} from "@/components/data/map";
import {
  getReportsByEstablishment,
  REPORT_CATEGORY_CONFIG,
  type Report,
  type ReportCategory,
} from "@tahaqaq/mock-data";
import {
  Search,
  MapPin,
  AlertTriangle,
  Star,
  FileText,
  Camera,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Status filter chips                                                        */
/* -------------------------------------------------------------------------- */

const STATUS_OPTIONS: { key: EstablishmentStatus | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "priority", label: "Priority" },
  { key: "watch", label: "Watch" },
  { key: "verified", label: "Verified" },
  { key: "new", label: "New" },
];

/* -------------------------------------------------------------------------- */
/*  Score badge helper                                                         */
/* -------------------------------------------------------------------------- */

function ScoreBadge({ score, size = "md" }: { score: number; size?: "sm" | "md" }) {
  const colors = scoreColor(score);
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full font-bold",
        colors.bg,
        colors.text,
        size === "sm" ? "h-7 w-7 text-[11px]" : "h-9 w-9 text-sm"
      )}
    >
      {score}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Status pill                                                                */
/* -------------------------------------------------------------------------- */

function StatusPill({ status }: { status: EstablishmentStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
        statusStyles[status]
      )}
    >
      {status}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Reports sheet (right side panel)                                           */
/* -------------------------------------------------------------------------- */

function ReportsSheet({
  open,
  onOpenChange,
  establishmentName,
  reports,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  establishmentName: string;
  reports: Report[];
}) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[420px] sm:max-w-[420px] p-0">
        {/* Header */}
        <SheetHeader className="border-b border-border/40 px-5 py-4">
          <div className="flex items-center gap-2">
            <FileText className="size-4 text-[#006020]" />
            <SheetTitle>Reports</SheetTitle>
            <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
              {reports.length}
            </span>
          </div>
          <Text variant="small" className="font-medium text-[#006020]">
            {establishmentName}
          </Text>
        </SheetHeader>

        {/* Reports list */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {reports.length === 0 ? (
            <div className="flex flex-col items-center py-12 text-center">
              <FileText className="mb-2 size-8 text-muted-foreground/50" />
              <Text variant="muted">No reports filed for this establishment</Text>
            </div>
          ) : (
            <div className="space-y-4">
              {reports.map((report) => (
                <div
                  key={report.id}
                  className="rounded-xl border border-border/40 bg-muted/30 p-4"
                >
                  {/* Report header */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Text variant="small" className="font-medium">
                        {report.author}
                      </Text>
                      {report.hasPhotos && (
                        <span className="flex items-center gap-0.5 text-[10px] text-muted-foreground">
                          <Camera className="size-3" />
                          photo
                        </span>
                      )}
                    </div>
                    <Text variant="muted" className="text-[11px]">
                      {report.timeAgo}
                    </Text>
                  </div>

                  {/* Story */}
                  <Text variant="p" className="mt-2 text-sm leading-relaxed text-foreground/80">
                    {report.story}
                  </Text>

                  {/* Categories */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {report.categories.map((cat) => {
                      const config = REPORT_CATEGORY_CONFIG[cat];
                      return (
                        <span
                          key={cat}
                          className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium"
                          style={{
                            backgroundColor: `${config.color}15`,
                            color: config.color,
                          }}
                        >
                          {config.label}
                        </span>
                      );
                    })}
                  </div>

                  {/* Footer */}
                  <div className="mt-2.5 flex items-center gap-3 text-[11px] text-muted-foreground">
                    <span>{report.auditCount} audits</span>
                    <span>·</span>
                    <span className="flex items-center gap-0.5">
                      <Star className="size-3 fill-[#F2C94C] text-[#F2C94C]" />
                      {report.avgRating}/5
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

/* -------------------------------------------------------------------------- */
/*  Selected establishment detail card (floating on map)                       */
/* -------------------------------------------------------------------------- */

function SelectedDetail({
  est,
  onClose,
}: {
  est: MapEstablishment;
  onClose: () => void;
}) {
  const categories = [
    { key: "bribery", label: "Bribery", value: est.scoreCategories.bribery },
    { key: "hygiene", label: "Hygiene", value: est.scoreCategories.hygiene },
    { key: "waitTime", label: "Wait Time", value: est.scoreCategories.waitTime },
    { key: "equipment", label: "Equipment", value: est.scoreCategories.equipment },
    { key: "staff", label: "Staff", value: est.scoreCategories.staff },
  ];

  return (
    <div className="absolute bottom-4 left-4 right-4 z-20 rounded-2xl border border-border/50 bg-white p-5 shadow-[0_8px_30px_rgba(0,96,32,0.08)] dark:bg-card/95 dark:backdrop-blur md:left-auto md:right-4 md:w-[360px]">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <Text as="h3" variant="h5" className="truncate">
              {est.name}
            </Text>
            <StatusPill status={est.status} />
          </div>
          <Text variant="muted" className="mt-0.5">
            {est.city} · {est.category}
          </Text>
          <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Star className="size-3 fill-[#F2C94C] text-[#F2C94C]" />
              {est.reviews} reviews
            </span>
            {est.complaints > 0 && (
              <span className="flex items-center gap-1 text-[#ba1a1a]">
                <AlertTriangle className="size-3" />
                {est.complaints} complaints
              </span>
            )}
          </div>
          {est.recentSignal && (
            <Text variant="muted" className="mt-1.5 text-xs italic">
              &ldquo;{est.recentSignal}&rdquo;
            </Text>
          )}
        </div>
        <ScoreBadge score={est.overallScore} />
      </div>

      {/* Category breakdown */}
      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
        {categories.map((cat) => {
          let barColor = "bg-[#ba1a1a]";
          if (cat.value >= 7) barColor = "bg-[#00A040]";
          else if (cat.value >= 4) barColor = "bg-[#F2C94C]";
          return (
            <div key={cat.key} className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">{cat.label}</span>
              <div className="ml-2 flex items-center gap-1.5">
                <div className="h-1.5 w-14 overflow-hidden rounded-full bg-muted">
                  <div
                    className={cn("h-full rounded-full", barColor)}
                    style={{ width: `${(cat.value / 10) * 100}%` }}
                  />
                </div>
                <span className="w-4 text-right font-medium text-foreground">
                  {cat.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <Button variant="ghost" size="sm" className="mt-3 w-full" onClick={onClose}>
        Close
      </Button>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Reviews panel (right side)                                                 */
/* -------------------------------------------------------------------------- */

function ReviewsPanel({
  reviews,
  searchQuery,
  onSearchChange,
  selectedStatus,
  onStatusChange,
  onReviewClick,
  onReportsClick,
}: {
  reviews: typeof latestReviews;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedStatus: EstablishmentStatus | "all";
  onStatusChange: (s: EstablishmentStatus | "all") => void;
  onReviewClick: (establishmentId: string) => void;
  onReportsClick: (establishmentId: string, establishmentName: string) => void;
}) {
  return (
    <div className="flex h-full flex-col">
      {/* Search */}
      <div className="px-4 pt-4 pb-3">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search establishments..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {/* Status filters */}
      <div className="flex gap-1.5 px-4 pb-3 flex-wrap">
        {STATUS_OPTIONS.map((opt) => (
          <Button
            key={opt.key}
            size="sm"
            variant={selectedStatus === opt.key ? "default" : "outline"}
            className={cn(
              "h-7 rounded-full px-3 text-[11px] font-medium",
              selectedStatus === opt.key && "bg-[#006020] text-white hover:bg-[#006020]"
            )}
            onClick={() => onStatusChange(opt.key)}
          >
            {opt.label}
          </Button>
        ))}
      </div>

      {/* Reviews list */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="space-y-3">
          {reviews.length === 0 ? (
            <div className="flex flex-col items-center py-12 text-center">
              <Search className="mb-2 size-8 text-muted-foreground/50" />
              <Text variant="muted">No reviews found</Text>
            </div>
          ) : (
            reviews.map((rev) => {
              const colors = scoreColor(rev.score);
              return (
                <div
                  key={rev.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => onReviewClick(rev.establishmentId)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onReviewClick(rev.establishmentId);
                    }
                  }}
                  className="w-full text-left rounded-xl border border-border/40 bg-white p-3.5 shadow-sm transition-all hover:shadow-md hover:border-border/80 hover:bg-muted/10 dark:bg-card/60 dark:hover:bg-card/80 cursor-pointer block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006020]/40"
                >
                  <div className="flex items-start justify-between gap-2.5">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <Text as="span" variant="small" className="font-semibold truncate">
                          {rev.establishmentName}
                        </Text>
                        <StatusPill status={rev.status} />
                      </div>
                      <Text variant="muted" className="mt-0.5 text-[11px]">
                        {rev.category} · {rev.author} · {rev.relativeTime}
                      </Text>
                    </div>
                    <ScoreBadge score={rev.score} size="sm" />
                  </div>
                  <Text variant="p" className="mt-2 text-sm leading-relaxed text-foreground/80">
                    {rev.snippet}
                  </Text>
                  <div className="mt-2.5 flex justify-end">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onReportsClick(rev.establishmentId, rev.establishmentName);
                      }}
                      className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-muted/50 px-2.5 py-1 text-[10px] font-medium text-muted-foreground transition-colors hover:bg-[#006020]/10 hover:text-[#006020] hover:border-[#006020]/30"
                    >
                      <FileText className="size-3" />
                      Reports
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Map stats bar                                                              */
/* -------------------------------------------------------------------------- */

function MapStatsBar({ items }: { items: MapEstablishment[] }) {
  const totalReviews = items.reduce((sum, e) => sum + e.reviews, 0);
  const totalComplaints = items.reduce((sum, e) => sum + e.complaints, 0);
  const avgScore = items.length
    ? items.reduce((sum, e) => sum + e.overallScore, 0) / items.length
    : 0;
  const priorityCount = items.filter((e) => e.status === "priority").length;

  const stats = [
    { label: "Establishments", value: items.length.toString() },
    { label: "Total Reviews", value: totalReviews.toLocaleString() },
    { label: "Avg Score", value: avgScore.toFixed(1) },
    { label: "Priority Zones", value: priorityCount.toString() },
    { label: "Complaints", value: totalComplaints.toString() },
  ];

  return (
    <div className="flex gap-4 flex-wrap">
      {stats.map((stat) => (
        <div key={stat.label} className="flex items-center gap-2">
          <Text variant="xs" className="text-muted-foreground">{stat.label}</Text>
          <Text variant="small" className="font-semibold">{stat.value}</Text>
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Main map page                                                              */
/* -------------------------------------------------------------------------- */

export function MapPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<EstablishmentStatus | "all">("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [reportsModal, setReportsModal] = useState<{
    establishmentId: string;
    establishmentName: string;
  } | null>(null);
  const mapRef = useRef<MapLibreGL.Map | null>(null);

  const handleReviewClick = (establishmentId: string) => {
    const est = establishments.find((e) => e.id === establishmentId);
    if (est) {
      setSelectedId(est.id);
      mapRef.current?.flyTo({
        center: [est.coordinates.longitude, est.coordinates.latitude],
        zoom: 15,
        essential: true,
      });
    }
  };

  const filteredEstablishments = useMemo(() => {
    return establishments.filter((est) => {
      if (est.id === selectedId) return true;
      const matchesSearch =
        !searchQuery ||
        est.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        est.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        est.city.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = selectedStatus === "all" || est.status === selectedStatus;
      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, selectedStatus, selectedId]);

  const filteredReviews = useMemo(() => {
    return latestReviews.filter((rev) => {
      const matchesSearch =
        !searchQuery ||
        rev.establishmentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rev.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rev.snippet.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = selectedStatus === "all" || rev.status === selectedStatus;
      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, selectedStatus]);

  const selectedEstablishment = useMemo(
    () => establishments.find((e) => e.id === selectedId) ?? null,
    [selectedId]
  );

  return (
    <div className="flex h-svh max-h-svh flex-col overflow-hidden">
      {/* Stats bar */}
      <div className="flex-shrink-0 border-b border-border/40 bg-white px-6 py-3 dark:bg-card/60">
        <MapStatsBar items={filteredEstablishments} />
      </div>

      {/* Main content: map + reviews panel */}
      <div className="flex flex-1 min-h-0">
        {/* Map area */}
        <div className="relative flex-1 min-w-0">
          <Map
            ref={mapRef}
            center={[mapCenter.longitude, mapCenter.latitude]}
            zoom={13}
            className="h-full w-full"
          >
            {/* Markers */}
            {filteredEstablishments.map((est) => {
              const colors = scoreColor(est.overallScore);
              const isSelected = selectedId === est.id;
              return (
                <MapMarker
                  key={est.id}
                  longitude={est.coordinates.longitude}
                  latitude={est.coordinates.latitude}
                >
                  <MarkerContent>
                    <button
                      onClick={() =>
                        setSelectedId(isSelected ? null : est.id)
                      }
                      className={cn(
                        "flex items-center justify-center rounded-full border-2 border-white font-bold shadow-lg transition-transform hover:scale-110",
                        colors.bg,
                        colors.text,
                        isSelected ? "size-10 text-sm scale-110" : "size-8 text-xs"
                      )}
                    >
                      {est.overallScore}
                    </button>
                  </MarkerContent>
                  <MarkerPopup>
                    <div className="space-y-1 p-1">
                      <p className="text-sm font-medium">{est.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {est.category} · {est.city}
                      </p>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-semibold">Score: {est.overallScore}/10</span>
                        <span className="text-muted-foreground">·</span>
                        <span>{est.reviews} reviews</span>
                      </div>
                      {est.complaints > 0 && (
                        <p className="text-xs text-[#ba1a1a]">
                          ⚠ {est.complaints} complaints
                        </p>
                      )}
                    </div>
                  </MarkerPopup>
                </MapMarker>
              );
            })}

            {/* Controls */}
            <MapControls
              position="top-right"
              showZoom
              showCompass
              showLocate
              showFullscreen
            />
          </Map>

          {/* City label overlay */}
          <div className="absolute left-4 top-4 z-10 rounded-lg bg-white/90 px-3 py-1.5 shadow-sm backdrop-blur-sm dark:bg-card/90">
            <div className="flex items-center gap-1.5">
              <MapPin className="size-3 text-[#006020]" />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#006020] dark:text-[#a1f6a4]">
                Rabat · Live Map
              </span>
            </div>
          </div>

          {/* Legend */}
          <div className="absolute bottom-4 left-4 z-10 flex gap-2 rounded-lg bg-white/90 px-3 py-2 shadow-sm backdrop-blur-sm dark:bg-card/90">
            {(["priority", "watch", "verified", "new"] as const).map((status) => (
              <div key={status} className="flex items-center gap-1">
                <div
                  className={cn(
                    "h-2 w-2 rounded-full",
                    status === "priority" && "bg-[#ba1a1a]",
                    status === "watch" && "bg-[#F2C94C]",
                    status === "verified" && "bg-[#00A040]",
                    status === "new" && "bg-[#1d8cf8]"
                  )}
                />
                <span className="text-[10px] text-muted-foreground capitalize">
                  {status}
                </span>
              </div>
            ))}
          </div>

          {/* Selected establishment detail */}
          {selectedEstablishment && (
            <SelectedDetail
              est={selectedEstablishment}
              onClose={() => setSelectedId(null)}
            />
          )}
        </div>

        {/* Reviews side panel */}
        <div className="w-[360px] flex-shrink-0 border-l border-border/40 bg-white dark:bg-card/60 hidden lg:flex">
          <ReviewsPanel
            reviews={filteredReviews}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedStatus={selectedStatus}
            onStatusChange={setSelectedStatus}
            onReviewClick={handleReviewClick}
            onReportsClick={(id, name) => setReportsModal({ establishmentId: id, establishmentName: name })}
          />
        </div>
      </div>

      {/* Reports sheet */}
      <ReportsSheet
        open={reportsModal !== null}
        onOpenChange={(open) => {
          if (!open) setReportsModal(null);
        }}
        establishmentName={reportsModal?.establishmentName ?? ""}
        reports={reportsModal ? getReportsByEstablishment(reportsModal.establishmentId) : []}
      />
    </div>
  );
}
