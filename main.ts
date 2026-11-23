// Pixel Garden — Day 1 vs Day 7 (make.fun video-on-TikTok entry).
//
// The entry itself is the video: a short vertical clip about the same tiny
// agent-built game, "Pixel Garden", on the day it was made and after seven
// days of daily updates. The video was rendered in the builder session from a
// deterministic simulation (see the session transcripts), posted publicly on
// TikTok from a public account, and its address is handed in through
// VIDEO.json below.
//
// This program does exactly one thing, and nothing else: it copies VIDEO.json
// from the repository into the output directory, where the house reads it.
// It uses only the Node standard library, touches no network, reads no clock,
// and writes the same bytes on every run, so the grader's two runs agree.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const fileName = 'VIDEO.json';

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, fileName), join(outputDir, fileName));
} catch (error) {
  console.error(`Could not copy ${fileName} out of ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}
