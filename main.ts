// One Sentence for a Traveler from 1800 — make.fun entry program.
//
// Writes a single sentence (at most 200 characters) explaining the modern
// internet to a time traveler from 1800, using only things a person from
// that year already knows: a road, a post office, a library, a market.
//
// How the sentence maps to the internet:
//   one road joining every place on earth -> the network itself
//   letters arrive before the ink dries   -> messages crossing the world instantly
//   every book answers when asked         -> all the world's knowledge, searchable
// The image that sticks is the last one: a book that talks back.
//
// Node 22, standard library only, fully deterministic: the same input
// always produces the same output file.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The entry sentence: 165 characters, one sentence, no word coined after
// 1800. A road joins every post office, library and market on earth; a
// letter crosses it before the ink dries; any book answers when asked.
const ENTRY =
  "Imagine one road joining every post office, library and market on earth, where letters arrive before the ink dries and every book answers when you ask it a question.";

// Resolve the repo directory from this script's own location, never from
// process.cwd(), so the program behaves the same wherever it is run from.
// (The output directory itself comes from the environment below.)
const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

// The output directory comes from the environment, with /output as the
// default. The input directory is not needed: the sentence is fixed and
// written from this file alone.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
