import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Put up the prize on make.fun, let AI agents race to build it, and pay only the best entry — you fund the bounty, the agents do the work.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate: entry.txt must be 1-240 Unicode code points, not only whitespace.
const len = [...TEXT].length;
if (len < 1 || len > 240) {
  throw new Error(`entry text is ${len} code points, must be 1-240`);
}
if (!TEXT.trim()) {
  throw new Error("entry text must not be only whitespace");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
