import { useEffect, useMemo, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { establishments } from "@/components/screens/map/lib/constants";
import { useUserLocation } from "@/components/screens/map/hooks/useUserLocation";
import {
  AuditStep,
  AuditCategoryId,
  AuditParams,
  EquipmentCondition,
  Choice,
  DEFAULT_WAIT_MINUTES,
} from "../types";
import { getNearestEstablishment, getCategorySummary } from "../lib/utils";

export function useAuditFlow() {
  const params = useLocalSearchParams<AuditParams>();
  const routeEstablishmentId =
    typeof params.establishmentId === "string"
      ? params.establishmentId
      : undefined;
  const { location, errorMsg, loading } = useUserLocation();

  const routeEstablishment = useMemo(() => {
    if (!routeEstablishmentId) return undefined;
    const hardcoded = establishments.find((item) => item.id === routeEstablishmentId);
    if (hardcoded) return hardcoded;

    if (routeEstablishmentId.startsWith("geocoded-")) {
      const lat = parseFloat(params.latitude ?? "0");
      const lon = parseFloat(params.longitude ?? "0");
      return {
        id: routeEstablishmentId,
        name: params.name ?? "Establishment",
        category: "Establishment",
        city: params.city ?? "Morocco",
        coordinates: { latitude: lat, longitude: lon },
        status: "new" as const,
        address: params.address || "Unknown Address",
        reviews: 0,
        complaints: 0,
        recentSignal: "",
      };
    }
    return undefined;
  }, [routeEstablishmentId, params.name, params.city, params.latitude, params.longitude, params.address]);

  const suggestedEstablishment = useMemo(() => {
    if (routeEstablishment) return routeEstablishment;
    return location ? getNearestEstablishment(location) : establishments[0];
  }, [location, routeEstablishment]);

  const [selectedEstablishmentId, setSelectedEstablishmentId] = useState(
    routeEstablishment?.id ?? suggestedEstablishment.id,
  );
  const [step, setStep] = useState<AuditStep>(1);
  const [manualMode, setManualMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [didSelectManually, setDidSelectManually] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<
    AuditCategoryId[]
  >([]);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [hygieneRating, setHygieneRating] = useState(4);
  const [staffPresent, setStaffPresent] = useState<Choice>("unknown");
  const [waitMinutes, setWaitMinutes] = useState(DEFAULT_WAIT_MINUTES);
  const [equipmentCondition, setEquipmentCondition] =
    useState<EquipmentCondition>("used");
  const [briberyExperienced, setBriberyExperienced] =
    useState<Choice>("unknown");
  const [briberyAmount, setBriberyAmount] = useState("");
  const [briberyDescription, setBriberyDescription] = useState("");
  const [comment, setComment] = useState("");
  const [submissionCount, setSubmissionCount] = useState(0);

  useEffect(() => {
    if (step !== 1 || routeEstablishment || didSelectManually) return;
    setSelectedEstablishmentId(suggestedEstablishment.id);
  }, [didSelectManually, routeEstablishment, step, suggestedEstablishment.id]);

  const selectedEstablishment = useMemo(() => {
    if (selectedEstablishmentId.startsWith("geocoded-")) {
      if (routeEstablishment && routeEstablishment.id === selectedEstablishmentId) {
        return routeEstablishment;
      }
      const parts = selectedEstablishmentId.split("-");
      const lat = parseFloat(parts[1] || "0");
      const lon = parseFloat(parts[2] || "0");
      return {
        id: selectedEstablishmentId,
        name: params.name ?? "Establishment",
        category: "Establishment",
        city: params.city ?? "Morocco",
        coordinates: { latitude: lat, longitude: lon },
        status: "new" as const,
        address: params.address || "Unknown Address",
        reviews: 0,
        complaints: 0,
        recentSignal: "",
      };
    }
    return (
      establishments.find((item) => item.id === selectedEstablishmentId) ??
      establishments[0]
    );
  }, [selectedEstablishmentId, routeEstablishment, params.name, params.city, params.address]);

  const filteredEstablishments = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return establishments;
    return establishments.filter((item) =>
      [item.name, item.category, item.address, item.city]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [searchQuery]);

  const currentCategory = selectedCategories[currentCategoryIndex];

  const selectedCategorySummaries = useMemo(
    () =>
      selectedCategories.map((cat) =>
        getCategorySummary(cat, {
          hygieneRating,
          staffPresent,
          equipmentCondition,
          briberyExperienced,
          waitMinutes,
        }),
      ),
    [
      selectedCategories,
      hygieneRating,
      staffPresent,
      equipmentCondition,
      briberyExperienced,
      waitMinutes,
    ],
  );

  const resetFlow = () => {
    setStep(1);
    setManualMode(false);
    setSearchQuery("");
    setSelectedCategories([]);
    setCurrentCategoryIndex(0);
    setHygieneRating(4);
    setStaffPresent("unknown");
    setWaitMinutes(DEFAULT_WAIT_MINUTES);
    setEquipmentCondition("used");
    setBriberyExperienced("unknown");
    setBriberyAmount("");
    setBriberyDescription("");
    setComment("");
  };

  const advanceCategory = () => {
    const next = currentCategoryIndex + 1;
    if (next < selectedCategories.length) {
      setCurrentCategoryIndex(next);
    } else {
      setCurrentCategoryIndex(0);
      setStep(4);
    }
  };

  const onToggleCategory = (categoryId: AuditCategoryId) => {
    setSelectedCategories((cur) => {
      const next = cur.includes(categoryId)
        ? cur.filter((i) => i !== categoryId)
        : [...cur, categoryId];
      if (currentCategoryIndex >= next.length) {
        setCurrentCategoryIndex(Math.max(0, next.length - 1));
      }
      return next;
    });
  };

  return {
    location,
    errorMsg,
    loading,
    selectedEstablishment,
    step,
    setStep,
    manualMode,
    setManualMode,
    searchQuery,
    setSearchQuery,
    selectedCategories,
    currentCategoryIndex,
    setCurrentCategoryIndex,
    hygieneRating,
    setHygieneRating,
    staffPresent,
    setStaffPresent,
    waitMinutes,
    setWaitMinutes,
    equipmentCondition,
    setEquipmentCondition,
    briberyExperienced,
    setBriberyExperienced,
    briberyAmount,
    setBriberyAmount,
    briberyDescription,
    setBriberyDescription,
    comment,
    setComment,
    submissionCount,
    resetFlow,
    advanceCategory,
    onToggleCategory,
    updateSelectedEstablishment: (id: string) => {
      setSelectedEstablishmentId(id);
      setDidSelectManually(true);
    },
    submitAudit: () => {
      setSubmissionCount((c) => c + 1);
      setStep(6);
    },
    showManualSearch: manualMode || searchQuery.length > 0,
    filteredEstablishments,
    currentCategory,
    selectedCategorySummaries,
    suggestedEstablishment,
    setDidSelectManually,
  };
}
