#!/usr/bin/env bash
set -uo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR/.."

PORT="${PORT:-8081}"
DEVICE="${IOS_DEVICE:-iPhone 17 Pro}"
BUNDLE_ID="${APP_BUNDLE_ID:-com.purpleorca.tahaqaq}"

# Remove any existing install to avoid signing conflicts
echo "▸ Cleaning existing install ..."
xcrun simctl uninstall booted "$BUNDLE_ID" 2>/dev/null || true

# Build + install debug app (expo may fail at URL-open step, that's ok)
echo "▸ Building debug app for $DEVICE ..."
npx expo run:ios --device "$DEVICE" --no-bundler || true

# Start Metro in background
echo "▸ Starting Metro on port $PORT ..."
npx expo start --clear &
DEV_PID=$!

cleanup() {
  if kill -0 "$DEV_PID" >/dev/null 2>&1; then
    kill "$DEV_PID" >/dev/null 2>&1 || true
    wait "$DEV_PID" >/dev/null 2>&1 || true
  fi
}
trap cleanup EXIT

# Wait for Metro
echo "▸ Waiting for Metro ..."
for i in $(seq 1 120); do
  if node -e "require('net').createConnection(${PORT}, 'localhost').on('connect', () => process.exit(0)).on('error', () => process.exit(1))" >/dev/null 2>&1; then
    echo "▸ Metro ready on http://localhost:${PORT}"
    break
  fi
  sleep 1
done

# Launch the app
echo "▸ Launching $BUNDLE_ID ..."
xcrun simctl launch booted "$BUNDLE_ID"

echo ""
echo "▸ Running. Ctrl-C to stop."
wait "$DEV_PID"
