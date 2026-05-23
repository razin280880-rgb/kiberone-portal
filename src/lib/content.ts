// Helpers to access synced markdown content via Astro's import.meta.glob.
// All .md files live under src/content/{positions,regulations,scripts}.

type MdModule = {
  Content: any;
  default: any;
  frontmatter?: Record<string, any>;
  rawContent?: () => string;
  compiledContent?: () => string;
};

// Eager glob — we need data at build time, and total volume is small (~140 files).
const positionFiles = import.meta.glob<MdModule>(
  '/src/content/positions/**/*.md',
  { eager: true }
);
const regulationFiles = import.meta.glob<MdModule>(
  '/src/content/regulations/*.md',
  { eager: true }
);
const scriptFiles = import.meta.glob<MdModule>(
  '/src/content/scripts/*.md',
  { eager: true }
);

function pickByEnding(map: Record<string, MdModule>, suffix: string): MdModule | null {
  const key = Object.keys(map).find((k) => k.endsWith(suffix));
  return key ? map[key] : null;
}

export function getPositionFile(folder: string, file: string): MdModule | null {
  return pickByEnding(positionFiles, `/${folder}/${file}`);
}

export function getPositionReadme(folder: string): MdModule | null {
  return getPositionFile(folder, 'README.md');
}

export function getRegulation(file: string): MdModule | null {
  return pickByEnding(regulationFiles, `/${file}`);
}

export function getScript(file: string): MdModule | null {
  return pickByEnding(scriptFiles, `/${file}`);
}

export function listRegulationFiles(): string[] {
  return Object.keys(regulationFiles)
    .map((k) => k.split('/').pop()!)
    .sort();
}

export function listScriptFiles(): string[] {
  return Object.keys(scriptFiles)
    .map((k) => k.split('/').pop()!)
    .sort();
}

// Heuristic: pull first H1 / first non-empty meaningful line as a title.
export function extractTitle(raw: string, fallback: string): string {
  const lines = raw.split(/\r?\n/);
  for (const line of lines) {
    const m = line.match(/^#\s+(.+?)\s*$/);
    if (m) return m[1].replace(/[*_`]/g, '').trim();
  }
  return fallback;
}

// Pull a short summary: first non-heading paragraph (cleaned).
export function extractSummary(raw: string, maxLen = 240): string {
  const lines = raw.split(/\r?\n/);
  const buf: string[] = [];
  for (const line of lines) {
    const t = line.trim();
    if (!t) {
      if (buf.length) break;
      continue;
    }
    if (t.startsWith('#')) continue;
    if (t.startsWith('---')) continue;
    if (t.startsWith('|')) continue;
    if (t.startsWith('```')) continue;
    buf.push(t);
    if (buf.join(' ').length >= maxLen) break;
  }
  const text = buf.join(' ').replace(/[*_`>]/g, '').replace(/\s+/g, ' ').trim();
  return text.length > maxLen ? text.slice(0, maxLen - 1) + '…' : text;
}
