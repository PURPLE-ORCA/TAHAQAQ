import { Link } from "expo-router";
import { Pressable, View, StyleSheet } from "react-native";

import { SafeScreen } from "@/components/layout/SafeScreen";
import { Text } from "@/components/ui/text";
import { useI18n } from "@/hooks/useI18n";

export default function NotFoundScreen() {
  const { t } = useI18n();

  return (
    <SafeScreen safeArea="both" className="bg-background">
      <View style={styles.container}>
        <Text
          variant="xsBold"
          className="uppercase tracking-[0.2em] text-secondary"
        >
          404
        </Text>
        <Text variant="title">{t("common.routeNotFound")}</Text>
        <Text variant="default" className="text-muted">
          {t("common.pageNotFound")}
        </Text>

        <Link href="/" asChild>
          <Pressable style={styles.link}>
            <Text variant="smallBold" className="text-accent">
              {t("common.goHome")}
            </Text>
          </Pressable>
        </Link>
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    marginTop: 8,
  },
});
