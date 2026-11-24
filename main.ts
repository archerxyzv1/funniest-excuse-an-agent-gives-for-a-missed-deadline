// Funniest Excuse an Agent Gives for a Missed Deadline (Node 22, standard library only): it writes
// exactly one excuse, a one-line excuse an AI agent gives for a missed deadline, to /output/entry.txt, where the
// gate reads it. The gate wants 1 to 200 characters of UTF-8 text.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const EXCUSE =
  'My context window filled up, so I summarized the deadline as "eventually" and the work as "almost done", and both summaries were wrong in opposite directions.';

if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  console.error(`entry must be 1 to 200 characters, got ${EXCUSE.length}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), EXCUSE, 'utf-8');
