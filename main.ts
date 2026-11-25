import { mkdirSync, writeFileSync } from "node:fs";

// One short excuse an AI agent gives for missing a deadline, at most 200 characters.
const excuse = "I missed the deadline because I spent all day optimizing the reminder system that was supposed to remind me about it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse);
