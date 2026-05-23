// Rewrites markdown links that target other .md files (using kiberone-management
// folder structure) into proper portal URLs.
//
// Example transforms (from src/content/positions/02-tutor/01-rol-i-funkcii.md):
//   04-cheklisty.md                      -> /positions/tutor/cheklisty/
//   ../03-assistent/                     -> /positions/assistent/
//   ../03-assistent/README.md            -> /positions/assistent/
//   ../09-fermer/04-cheklisty.md         -> /positions/fermer/cheklisty/
//   ../../24-reglament-kiber-yarmarki.md -> /regulations/reglament-kiber-yarmarki/
//   ../../01-script-prodleniya.md        -> /scripts/prodlenie/
//
// .csv / .pdf / .html / .docx links are not rewritten — they 404 today.
// Unknown .md links get href="#" so they don't 404 silently.

import path from 'node:path';
import { visit } from 'unist-util-visit';

// kiberone-management/positions/<folder> -> portal slug
const POS = {
  '01-metodist': 'metodist',
  '02-tutor': 'tutor',
  '03-assistent': 'assistent',
  '04-manager-razvitiya': 'manager-razvitiya',
  '05-rukovoditel-filiala': 'rukovoditel-filiala',
  '07-hanter': 'hanter',
  '08-rop': 'rop',
  '09-fermer': 'fermer',
  '10-ros': 'ros',
  '11-hr': 'hr',
  '14-ofis-menedzher': 'ofis-menedzher',
  '15-operacionnyy-direktor': 'operacionnyy-direktor',
  '16-rukovoditel-otdela-razvitiya': 'rukovoditel-otdela-razvitiya',
};

// position section file -> URL section slug
const SEC = {
  '01-rol-i-funkcii.md': 'rol',
  '02-sistema-adaptacii.md': 'adaptaciya',
  '03-snimok-rabochego-dnya.md': 'den',
  '04-cheklisty.md': 'cheklisty',
  '05-pokazateli-i-istochniki.md': 'pokazateli',
  '06-ruka-na-pulse.md': 'puls',
  '07-kpi-i-mesyachnye-metriki.md': 'kpi',
};

// management root file -> regulation slug
const REG = {
  '03-reglament-fermera-propuski.md': 'reglament-propuski',
  '04-tz-rukovoditel-otdela-soprovozhdeniya.md': 'tz-ros',
  '05-plan-razvorota-krasnodara.md': 'plan-razvorota-krasnodara',
  '07-dashboard-metrik.md': 'dashboard-metrik',
  '08-onboarding-tutora.md': 'onboarding-tutora',
  '09-business-case-letnego-produkta.md': 'biznes-keys-leto',
  '10-cheklist-probnogo-uroka.md': 'cheklist-probnogo',
  '17-reglament-dovodimost-probnogo.md': 'reglament-dovodimost',
  '22-reglament-utrennih-planerok-rukovoditelei.md': 'reglament-planerok',
  '23-reglament-attestacii-i-obucheniya.md': 'reglament-attestacii',
  '24-reglament-kiber-yarmarki.md': 'reglament-kiber-yarmarki',
  '25-reglament-reanimacii-avgust.md': 'reglament-reanimacii',
  '02-otchet-progressa-roditelyu.md': 'otchet-progressa',
  '23-pamyatka-roditelyu-whatsapp.md': 'pamyatka-roditelyu',
  '28-plan-pilota-perezagruzka-cheln.md': 'plan-pilota-perezagruzka',
};

// management root file -> script slug
const SCR = {
  '01-script-prodleniya.md': 'prodlenie',
  '06-script-fermera-letnih-prodazh.md': 'fermer-letnie-prodazhi',
  '11-script-soprovozhdeniya-leto.md': 'soprovozhdenie-leto',
  '12-script-prodaj-novye-lidy-leto.md': 'novye-lidy-leto',
  '13-script-reaktivacii-bazy-ai-probnoe.md': 'reaktivaciya-ai-probnoe',
  '14-script-vhodjashie-zayavki-lager-cherez-probnoe.md': 'lager-cherez-probnoe',
  '15-shpargalka-menedzhera-leto-AI.md': 'shpargalka-leto-ai',
  '16-script-soprovozhdenie-INDEX.md': 'soprovozhdenie-index',
  '16a-script-znakomstvo.md': 'znakomstvo',
  '16b-script-pogruzhenie.md': 'pogruzhenie',
  '16c-script-loyalnost-prodlenie-modulya.md': 'loyalnost-prodlenie',
  '16d-tochka-kontrolya-snizhenie-motivacii.md': 'tochka-snizhenie-motivacii',
  '16e-tochka-kontrolya-minecraft-roblox.md': 'tochka-minecraft-roblox',
  '16f-script-doplata-5-zanyatie.md': 'doplata-5',
  '16g-bank-vozrazhenij.md': 'bank-vozrazhenij',
  '18-script-kuratora-probnyh.md': 'kurator-probnyh',
  '19-whatsapp-shablony.md': 'whatsapp-shablony',
  '21-script-perezagruzka-zakrytie.md': 'perezagruzka-zakrytie',
  '24-script-fermera-priglashenie-na-otkrytyi-urok.md': 'priglashenie-otkrytyj-urok',
  '29-script-prozvon-ushedshih-perezagruzka.md': 'prozvon-ushedshih',
};

function urlForResolvedPath(rel) {
  // rel: posix path relative to src/content/, e.g. "positions/02-tutor/04-cheklisty.md"

  // Position section file: positions/<folder>/<file>
  const m1 = rel.match(/^positions\/([^/]+)\/([^/]+)$/);
  if (m1) {
    const [, folder, file] = m1;
    const slug = POS[folder];
    if (!slug) return null;
    if (file === 'README.md' || file === '') return `/positions/${slug}/`;
    const sec = SEC[file];
    if (sec) return `/positions/${slug}/${sec}/`;
    return `/positions/${slug}/`;
  }

  // Position folder root: positions/<folder>  (or with trailing /)
  const m2 = rel.match(/^positions\/([^/]+)\/?$/);
  if (m2) {
    const slug = POS[m2[1]];
    if (slug) return `/positions/${slug}/`;
  }

  // Bare filename at content root — originally pointed at kiberone-management root
  const m3 = rel.match(/^([^/]+\.md)$/);
  if (m3) {
    const file = m3[1];
    if (REG[file]) return `/regulations/${REG[file]}/`;
    if (SCR[file]) return `/scripts/${SCR[file]}/`;
  }

  // Subfolder references (rare — already-correct paths)
  const m4 = rel.match(/^regulations\/([^/]+\.md)$/);
  if (m4 && REG[m4[1]]) return `/regulations/${REG[m4[1]]}/`;
  const m5 = rel.match(/^scripts\/([^/]+\.md)$/);
  if (m5 && SCR[m5[1]]) return `/scripts/${SCR[m5[1]]}/`;

  return null;
}

function getContentRoot(sourcePath) {
  const marker = '/src/content/';
  const idx = sourcePath.indexOf(marker);
  if (idx === -1) return null;
  return sourcePath.slice(0, idx + marker.length - 1); // no trailing slash
}

export default function remarkRewriteLinks() {
  return (tree, file) => {
    const sourcePath = (file?.path || file?.history?.[file.history.length - 1] || '')
      .replace(/\\/g, '/');
    const contentRoot = getContentRoot(sourcePath);
    if (!contentRoot) return;

    // Regulations and scripts originally lived in kiberone-management root;
    // after sync they live in subfolders. Links like `positions/02-tutor/...` were
    // written as if the file is in management root. Compensate by treating their
    // base dir for relative resolution as <contentRoot> instead of the file's own dir.
    const inFlatSubfolder =
      sourcePath.startsWith(`${contentRoot}/regulations/`) ||
      sourcePath.startsWith(`${contentRoot}/scripts/`);

    visit(tree, 'link', (node) => {
      const url = node.url;
      if (!url || typeof url !== 'string') return;
      // external, mailto, tel, anchor-only, absolute portal URLs — skip
      if (/^(https?:|mailto:|tel:|\/|#)/i.test(url)) return;

      const [rawPath, hashPart] = url.split('#');
      const cleanPath = decodeURI(rawPath.trim());
      if (!cleanPath) return;

      // 1) Try resolving relative to source file's own dir.
      const ownDir = path.posix.dirname(sourcePath);
      const r1 = path.posix.normalize(path.posix.join(ownDir, cleanPath));
      let rel = r1.startsWith(contentRoot)
        ? r1.slice(contentRoot.length + 1)
        : null;
      let newUrl = rel ? urlForResolvedPath(rel) : null;

      // 2) For regulations/scripts files, also try resolving relative to content root.
      if (!newUrl && inFlatSubfolder && !cleanPath.startsWith('.')) {
        const r2 = path.posix.normalize(path.posix.join(contentRoot, cleanPath));
        if (r2.startsWith(contentRoot)) {
          rel = r2.slice(contentRoot.length + 1);
          newUrl = urlForResolvedPath(rel);
        }
      }

      if (newUrl) {
        node.url = newUrl + (hashPart ? `#${hashPart}` : '');
      } else if (cleanPath.endsWith('.md') || cleanPath.endsWith('/')) {
        node.url = '#';
      }
    });
  };
}
