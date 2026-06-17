import { useMemo, useState } from 'react';
import { router } from 'expo-router';
import { Button } from 'heroui-native/button';
import { View, TextInput, StyleSheet, Pressable } from 'react-native';

import { SafeScreen } from '@/components/layout/SafeScreen';
import { Text } from '@/components/ui/text';

export default function LoginScreen() {
  const [email, setEmail] = useState('orca@boilate.dev');
  const [password, setPassword] = useState('');

  const canContinue = useMemo(() => email.trim().length > 0, [email]);

  return (
    <SafeScreen safeArea="both" className="bg-background">
      <View style={styles.container}>
        <View style={styles.header}>
          <Text variant="title">Sign in to the starter shell</Text>
        </View>

        <View className="">
          <View className="gap-2">
            <Text variant="smallBold">Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              autoComplete="email"
              placeholder="you@example.com"
              placeholderTextColor="#94a3b8"
              style={styles.input}
            />
          </View>

          <View className="gap-2">
            <Text variant="smallBold">Password</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoComplete="password"
              placeholder="••••••••"
              placeholderTextColor="#94a3b8"
              style={styles.input}
            />
          </View>

          <Button
            onPress={() => router.replace('/')}
            isDisabled={!canContinue}
            style={styles.primaryButton}
          >
            Continue
          </Button>

          <Pressable onPress={() => router.replace('/')}>
            <Text variant="small" className="text-center text-muted">
              Skip for now and open the app shell
            </Text>
          </Pressable>
        </View>

        <Text variant="xs" className="text-center text-muted">
          This screen is the auth placeholder until Convex auth is wired in.
        </Text>
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
    justifyContent: 'center',
  },
  header: {
    gap: 12,
  },
  input: {
    minHeight: 52,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    color: '#0f172a',
    fontSize: 16,
  },
  primaryButton: {
    marginTop: 4,
  },
});
