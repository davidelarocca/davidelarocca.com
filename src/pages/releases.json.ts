// The versions this build shows, so the release-watch workflow can compare them with GitHub.
import { swiftHarnessVersion } from '../data/releases';

export const GET = () => new Response(JSON.stringify({ swiftHarness: swiftHarnessVersion }) + '\n');
