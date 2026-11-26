import * as fs from "node:fs";
import * as path from "node:path";

const outputDir = "/output";
const outputFile = path.join(outputDir, "entry.txt");
const line =
  "My AI wrote my apology letter; now my girlfriend is dating the AI.";

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputFile, line, { encoding: "utf8" });
console.log(`Wrote ${line.length} characters to ${outputFile}`);
