import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The text: one small scene — fear on a ladder, patient waiting,
// the rung that holds, and one small brave reach at the end.
const TEXT = [
  "The ladder swayed when I reached the third rung.",
  "I stopped and held the sides.",
  "The wind moved through the leaves and left.",
  "The rung under my boots did not give.",
  "Below me the grass was soft with fallen apples.",
  "The apple was right there, red in the sun.",
  "I reached for it.",
].join("\n");

const outDir = (process.env.MAKEFUN_OUTPUT_DIR || "").trim() || "/output";
// The entry must be UTF-8 text of 1-280 characters, not only white space,
// and with clean line breaks only.
if (TEXT.length < 1 || TEXT.length > 280 || TEXT.trim().length === 0 || TEXT.includes("\r")) {
  throw new Error("text must be 1-280 characters, not blank, no carriage returns");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
