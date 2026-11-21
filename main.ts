// poem-two-agents: a short poem about agency — the power to choose and to act.
// Writes the poem to /output/entry.txt (168 Unicode code points, UTF-8).
const fs = require("node:fs");
const path = require("node:path");

const poem = [
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
fs.writeFileSync(outFile, poem, "utf8");
console.log(`Wrote ${[...poem].length} characters to ${outFile}`);
