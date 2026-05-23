// After build, copy dist/pagefind into public/pagefind so the search index
// is also served by `astro dev`. Without this step, /search/ on dev shows
// the fallback "index not built" message.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(__dirname, 'dist', 'pagefind');
const DST = path.join(__dirname, 'public', 'pagefind');

if (!fs.existsSync(SRC)) {
  console.warn('[pagefind] dist/pagefind not found — skipping copy.');
  process.exit(0);
}

fs.rmSync(DST, { recursive: true, force: true });
fs.cpSync(SRC, DST, { recursive: true });

const fileCount = fs.readdirSync(DST, { recursive: true }).length;
console.log(`[pagefind] copied ${fileCount} files to public/pagefind/`);
