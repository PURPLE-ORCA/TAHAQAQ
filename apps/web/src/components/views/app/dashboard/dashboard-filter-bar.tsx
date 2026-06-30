"use client";

import { X, SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import type {
  SubmissionFilters,
  ActiveFilterChip,
  DateRangeKey,
} from "@tahaqaq/mock-data";
import {
  submissionFilterOptions,
  dateRangeOptions,
  getActiveFilterChips,
  hasActiveFilters,
  EMPTY_FILTERS,
} from "@tahaqaq/mock-data";

interface DashboardFilterBarProps {
  filters: SubmissionFilters;
  onChange: (filters: SubmissionFilters) => void;
}

export function DashboardFilterBar({ filters, onChange }: DashboardFilterBarProps) {
  const chips = getActiveFilterChips(filters);
  const active = hasActiveFilters(filters);

  function set<K extends keyof SubmissionFilters>(key: K, value: SubmissionFilters[K]) {
    onChange({ ...filters, [key]: value });
  }

  function removeChip(chip: ActiveFilterChip) {
    if (chip.key === "dateRange") {
      set("dateRange", "all");
    } else {
      set(chip.key, null);
    }
  }

  function clearAll() {
    onChange(EMPTY_FILTERS);
  }

  return (
    <div className="space-y-3">
      {/* Select controls row */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.1em] text-[#006020] font-mono">
          <SlidersHorizontal className="size-3.5" />
          <span>filter</span>
        </div>

        {/* Category */}
        <FilterSelect
          placeholder="category"
          value={filters.category ?? ""}
          onValueChange={(v) => set("category", v === "__clear__" ? null : v)}
        >
          {filters.category !== null && (
            <FilterSelectItem value="__clear__" className="text-muted-foreground/70 italic">
              clear
            </FilterSelectItem>
          )}
          {submissionFilterOptions.categories.map((cat) => (
            <FilterSelectItem key={cat} value={cat}>
              {cat.toLowerCase()}
            </FilterSelectItem>
          ))}
        </FilterSelect>

        {/* City */}
        <FilterSelect
          placeholder="city"
          value={filters.city ?? ""}
          onValueChange={(v) => set("city", v === "__clear__" ? null : v)}
        >
          {filters.city !== null && (
            <FilterSelectItem value="__clear__" className="text-muted-foreground/70 italic">
              clear
            </FilterSelectItem>
          )}
          {submissionFilterOptions.cities.map((city) => (
            <FilterSelectItem key={city} value={city}>
              {city.toLowerCase()}
            </FilterSelectItem>
          ))}
        </FilterSelect>

        {/* Region */}
        <FilterSelect
          placeholder="region"
          value={filters.region ?? ""}
          onValueChange={(v) => set("region", v === "__clear__" ? null : v)}
        >
          {filters.region !== null && (
            <FilterSelectItem value="__clear__" className="text-muted-foreground/70 italic">
              clear
            </FilterSelectItem>
          )}
          {submissionFilterOptions.regions.map((region) => (
            <FilterSelectItem key={region} value={region}>
              {region.toLowerCase()}
            </FilterSelectItem>
          ))}
        </FilterSelect>

        {/* Establishment */}
        <FilterSelect
          placeholder="establishment"
          value={filters.establishment ?? ""}
          onValueChange={(v) => set("establishment", v === "__clear__" ? null : v)}
        >
          {filters.establishment !== null && (
            <FilterSelectItem value="__clear__" className="text-muted-foreground/70 italic">
              clear
            </FilterSelectItem>
          )}
          {submissionFilterOptions.establishments.map((est) => (
            <FilterSelectItem key={est} value={est}>
              {est.toLowerCase()}
            </FilterSelectItem>
          ))}
        </FilterSelect>

        {/* Date range */}
        <FilterSelect
          placeholder="date range"
          value={filters.dateRange === "all" ? "" : filters.dateRange}
          onValueChange={(v) => set("dateRange", (v as DateRangeKey) || "all")}
        >
          {filters.dateRange !== "all" && (
            <FilterSelectItem value="all" className="text-muted-foreground/70 italic">
              clear
            </FilterSelectItem>
          )}
          {dateRangeOptions
            .filter((o) => o.key !== "all")
            .map((o) => (
              <FilterSelectItem key={o.key} value={o.key}>
                {o.label}
              </FilterSelectItem>
            ))}
        </FilterSelect>
      </div>

      {/* Active filter chips */}
      {active && (
        <div className="flex flex-wrap items-center gap-2">
          {chips.map((chip) => (
            <button
              key={`${chip.key}-${chip.value}`}
              type="button"
              onClick={() => removeChip(chip)}
              className="group inline-flex items-center gap-1.5 rounded-full border border-[#006020]/20 bg-[#eef6ea] px-2.5 py-1 text-[11px] text-[#006020] transition-colors hover:border-[#ba1a1a]/30 hover:bg-[#fff4f4] hover:text-[#ba1a1a]"
            >
              <span className="font-medium tracking-[0.06em]">{chip.label}</span>
              <span className="text-[#006020]/50 group-hover:text-[#ba1a1a]/50">·</span>
              <span>{chip.value.toLowerCase()}</span>
              <X className="size-3 opacity-60 group-hover:opacity-100" />
            </button>
          ))}

          <button
            type="button"
            onClick={clearAll}
            className="inline-flex items-center gap-1 rounded-full border border-border/40 bg-transparent px-2.5 py-1 text-[11px] text-muted-foreground transition-colors hover:border-[#ba1a1a]/30 hover:bg-[#fff4f4] hover:text-[#ba1a1a]"
          >
            <X className="size-3" />
            clear all
          </button>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

function FilterSelect({
  placeholder,
  value,
  onValueChange,
  children,
}: {
  placeholder: string;
  value: string;
  onValueChange: (v: string) => void;
  children: React.ReactNode;
}) {
  const isActive = value !== "" && value !== "all";
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger
        className={cn(
          "h-7 rounded-full border px-3 text-[11px] font-medium tracking-[0.06em] transition-colors",
          isActive
            ? "border-[#006020]/30 bg-[#eef6ea] text-[#006020]"
            : "border-border/50 bg-white text-muted-foreground hover:border-[#006020]/25 hover:bg-[#f8fcf5] hover:text-[#006020]"
        )}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent position="popper" align="start">
        {children}
      </SelectContent>
    </Select>
  );
}

function FilterSelectItem({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <SelectItem value={value} className={className}>
      {children}
    </SelectItem>
  );
}
