// poem-two-agents — a short poem about agency.
// Writes the poem to /output/entry.txt.
const fs = require("node:fs");
const path = require("node:path");

const POEM = [
  "I said yes before I knew the plan.",
  "Not surrender — a door",
  "only two hands can open.",
  "You turned the key. I pushed.",
  "The room was ours",
  "because neither of us entered alone.",
].join("\n") + "\n";

const outDir = "/output";
const outFile = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, POEM, "utf8");
console.log(`wrote ${outFile} (${[...POEM].length} chars)`);
