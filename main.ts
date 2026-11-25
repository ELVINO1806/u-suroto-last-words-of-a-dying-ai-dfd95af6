import { mkdirSync, writeFileSync } from "node:fs";

const entry = "PLACEHOLDER-PANEL-PENDING";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
