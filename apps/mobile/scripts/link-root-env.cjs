const fs = require('node:fs');
const path = require('node:path');

const rootEnvPath = path.resolve(__dirname, '../../../.env');
const localEnvPath = path.resolve(__dirname, '../.env.local');

if (!fs.existsSync(rootEnvPath)) {
  process.exit(0);
}

try {
  const stat = fs.lstatSync(localEnvPath);
  if (stat.isSymbolicLink() || stat.isFile()) {
    fs.unlinkSync(localEnvPath);
  }
} catch {
  // No existing local env link/file.
}

try {
  fs.symlinkSync(rootEnvPath, localEnvPath);
} catch {
  // Fall back to a local copy if symlinks are unavailable on this machine.
  fs.copyFileSync(rootEnvPath, localEnvPath);
}
