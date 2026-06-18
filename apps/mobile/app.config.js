const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');

const appJson = require('./app.json');
const expoConfig = appJson.expo ?? appJson;
const rootEnvPath = resolve(__dirname, '../../.env');

function parseEnvFile(source) {
  const env = {};

  for (const rawLine of source.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;

    const equalsIndex = line.indexOf('=');
    if (equalsIndex === -1) continue;

    const key = line.slice(0, equalsIndex).trim();
    if (!key) continue;

    let value = line.slice(equalsIndex + 1).trim();

    const commentIndex = value.indexOf(' #');
    if (commentIndex !== -1) {
      value = value.slice(0, commentIndex).trim();
    }

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    env[key] = value;
  }

  return env;
}

let rootEnv = {};
try {
  rootEnv = parseEnvFile(readFileSync(rootEnvPath, 'utf8'));
} catch {
  // Ignore missing root env during config evaluation; the runtime guard will explain it.
}

const convexUrl = process.env.EXPO_PUBLIC_CONVEX_URL ?? rootEnv.EXPO_PUBLIC_CONVEX_URL;
const googleMapsApiKey =
  process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY ??
  rootEnv.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;

if (convexUrl) {
  process.env.EXPO_PUBLIC_CONVEX_URL = convexUrl;
}

if (googleMapsApiKey) {
  process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY = googleMapsApiKey;
}

module.exports = () => ({
  ...expoConfig,
  android: {
    ...(expoConfig.android ?? {}),
    ...(googleMapsApiKey
      ? {
          config: {
            ...(expoConfig.android?.config ?? {}),
            googleMaps: {
              ...(expoConfig.android?.config?.googleMaps ?? {}),
              apiKey: googleMapsApiKey,
            },
          },
        }
      : {}),
  },
  extra: {
    ...(expoConfig.extra ?? {}),
    EXPO_PUBLIC_CONVEX_URL: convexUrl,
  },
});
