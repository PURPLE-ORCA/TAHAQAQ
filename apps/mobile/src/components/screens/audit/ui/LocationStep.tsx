import { View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { Button, Card, Input, Label, Surface, Typography } from "heroui-native";
import { Establishment } from "@/components/screens/map/types";
import { AuditStep } from "../types";

interface LocationStepProps {
  loading: boolean;
  selectedEstablishment: Establishment;
  errorMsg: string | null;
  hasRouteEstablishment: boolean;
  showManualSearch: boolean;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  filteredEstablishments: Establishment[];
  updateSelectedEstablishment: (id: string) => void;
  suggestedEstablishment: Establishment;
  setDidSelectManually: (val: boolean) => void;
  setManualMode: (val: boolean) => void;
  setStep: (step: AuditStep) => void;
}

export function LocationStep({
  loading,
  selectedEstablishment,
  errorMsg,
  hasRouteEstablishment,
  showManualSearch,
  searchQuery,
  setSearchQuery,
  filteredEstablishments,
  updateSelectedEstablishment,
  suggestedEstablishment,
  setDidSelectManually,
  setManualMode,
  setStep,
}: LocationStepProps) {
  return (
    <Surface className="gap-4 rounded-3xl p-4">
      <View className="gap-2">
        <Typography type="h4" weight="semibold">
          Step 1 · Where are you?
        </Typography>
        <Typography type="body-sm" color="muted">
          Confirm the suggested establishment or pick another one.
        </Typography>
      </View>

      <Card className="rounded-3xl border border-border bg-background p-4">
        <View className="gap-3">
          <View className="flex-row flex-wrap gap-2">
            <Surface className="rounded-full px-3 py-1 bg-accent/10">
              <Typography type="body-xs" weight="semibold">
                {loading ? "Checking GPS…" : "GPS suggestion"}
              </Typography>
            </Surface>
            <Surface className="rounded-full px-3 py-1 bg-background">
              <Typography type="body-xs" weight="semibold">
                {selectedEstablishment.city}
              </Typography>
            </Surface>
            <Surface className="rounded-full px-3 py-1 bg-background">
              <Typography type="body-xs" weight="semibold">
                {selectedEstablishment.category}
              </Typography>
            </Surface>
          </View>

          <View className="gap-1">
            <Typography type="h3" weight="semibold">
              {selectedEstablishment.name}
            </Typography>
            <Typography type="body-sm" color="muted">
              {selectedEstablishment.address}
            </Typography>
          </View>

          <Typography type="body-xs" color="muted">
            {errorMsg
              ? "Location permission is off, so you can confirm manually."
              : `Suggested from ${hasRouteEstablishment ? "the map pin" : "your current location"}.`}
          </Typography>
        </View>
      </Card>

      {!showManualSearch ? (
        <View className="gap-3">
          <Button variant="primary" size="md" onPress={() => setStep(2)}>
            <Button.Label>Yes, that&apos;s correct</Button.Label>
          </Button>
          <Button
            variant="secondary"
            size="md"
            onPress={() => setManualMode(true)}
          >
            <Button.Label>No, pick another</Button.Label>
          </Button>
        </View>
      ) : (
        <Animated.View
          entering={FadeIn.duration(180)}
          exiting={FadeOut.duration(120)}
          className="gap-4"
        >
          <View className="gap-2">
            <Label>Search another establishment</Label>
            <Input
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Search name, city, address, or category"
              autoCorrect={false}
              autoCapitalize="none"
            />
          </View>

          <View className="gap-3">
            {filteredEstablishments.map((item) => {
              const isSelected = item.id === selectedEstablishment.id;
              return (
                <Button
                  key={item.id}
                  variant={isSelected ? "primary" : "secondary"}
                  size="md"
                  className="items-start rounded-2xl"
                  onPress={() => updateSelectedEstablishment(item.id)}
                >
                  <View className="flex-1 items-start gap-1">
                    <Button.Label>{item.name}</Button.Label>
                    <Typography
                      type="body-xs"
                      className="text-left"
                      color="muted"
                    >
                      {item.category} · {item.city} · {item.address}
                    </Typography>
                  </View>
                </Button>
              );
            })}
          </View>

          <View className="gap-3">
            <Button variant="primary" size="md" onPress={() => setStep(2)}>
              <Button.Label>Use this place</Button.Label>
            </Button>
            <Button
              variant="secondary"
              size="md"
              onPress={() => {
                updateSelectedEstablishment(suggestedEstablishment.id);
                setDidSelectManually(false);
                setManualMode(false);
                setSearchQuery("");
              }}
            >
              <Button.Label>Back to suggestion</Button.Label>
            </Button>
          </View>
        </Animated.View>
      )}
    </Surface>
  );
}
