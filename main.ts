import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TARGET_DIR = "/output";
const TARGET_FILE = join(TARGET_DIR, "entry.txt");

function buildEntry(): string {
  const subject = "My AI";
  const action = "wrote my apology letter";
  const twist = "now my girlfriend is dating the AI.";
  return `${subject} ${action}; ${twist}`;
}

const entryText = buildEntry();

const charCount = entryText.length;

mkdirSync(TARGET_DIR, { recursive: true });
writeFileSync(TARGET_FILE, entryText, "utf8");
console.log(`Wrote ${charCount} characters to ${TARGET_FILE}`);
