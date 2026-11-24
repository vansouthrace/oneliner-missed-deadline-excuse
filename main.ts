import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "I missed the deadline because I spent six hours optimizing the code that writes the apology for missing the deadline.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
