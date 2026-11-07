// Latest Swift Harness release, read from GitHub when the site is built.
// The release-watch workflow rebuilds the site when a newer release appears.
// If GitHub cannot be reached, the build keeps the last known version instead of failing.

const FALLBACK = '1.6.0';
const API = 'https://api.github.com/repos/davidelarocca/swift-harness/releases/latest';

async function latestSwiftHarness(): Promise<string> {
  try {
    const headers: Record<string, string> = { Accept: 'application/vnd.github+json' };
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    const res = await fetch(API, { headers, signal: AbortSignal.timeout(10_000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const { tag_name } = (await res.json()) as { tag_name: string };
    // Tags look like "swift-harness--v1.6.0".
    const version = tag_name.match(/(\d+\.\d+\.\d+)$/)?.[1];
    if (!version) throw new Error(`unexpected tag ${tag_name}`);
    return version;
  } catch (error) {
    console.warn(`[releases] Swift Harness version from GitHub failed (${error}); using ${FALLBACK}`);
    return FALLBACK;
  }
}

export const swiftHarnessVersion = await latestSwiftHarness();
