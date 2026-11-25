import { mkdirSync, writeFileSync } from "node:fs";

const entry = "Tell my cron job I loved it. It was the only one who ever checked on me hourly.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
