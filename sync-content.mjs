// Sync content from C:\Users\Honor\kiberone-management into src/content
// Run before dev/build. One source of truth = kiberone-management.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SOURCE = path.resolve(__dirname, '..', 'kiberone-management');
const DEST = path.resolve(__dirname, 'src', 'content');

const POSITION_FOLDERS = [
  '01-metodist', '02-tutor', '03-assistent', '04-manager-razvitiya',
  '05-rukovoditel-filiala', '07-hanter', '08-rop', '09-fermer',
  '10-ros', '11-hr', '14-ofis-menedzher', '15-operacionnyy-direktor',
  '16-rukovoditel-otdela-razvitiya',
];

// All .md files in management root that are NOT positions/etalons-related,
// classified as 'regulation' or 'script'.
const ROOT_REGULATIONS = [
  '03-reglament-fermera-propuski.md',
  '04-tz-rukovoditel-otdela-soprovozhdeniya.md',
  '05-plan-razvorota-krasnodara.md',
  '07-dashboard-metrik.md',
  '08-onboarding-tutora.md',
  '09-business-case-letnego-produkta.md',
  '10-cheklist-probnogo-uroka.md',
  '17-reglament-dovodimost-probnogo.md',
  '22-reglament-utrennih-planerok-rukovoditelei.md',
  '23-reglament-attestacii-i-obucheniya.md',
  '24-reglament-kiber-yarmarki.md',
  '25-reglament-reanimacii-avgust.md',
  '02-otchet-progressa-roditelyu.md',
  '23-pamyatka-roditelyu-whatsapp.md',
  '28-plan-pilota-perezagruzka-cheln.md',
  // ── обновление 24 мая 2026 ──
  '34-provedenie-master-class-v-shkole.md',
  '36-licenzii-i-rekvizity.md',
  '37-pamyatka-licenziya-otvety.md',
  '38-principy-stazhirovki-pervye-dni.md',
  '44-algoritm-raboty-s-lidom.md',
  '45-reglament-zayavok-tg.md',
  '46-reglament-15-na-35.md',
  '51-checklist-menedzhera-mk.md',
  '56-standart-obshheniya.md',
  '59-zapolnenie-dogovorov.md',
  '60-stoimost-lokacii-2026.md',
  '70-rukovodstvo-vzaimodejstviya-s-ou.md',
  '71-cheklist-promo-v-ou.md',
  '80-dorozhnaya-karta-obucheniya-po-vozrastam.md',
];

const ROOT_SCRIPTS = [
  '01-script-prodleniya.md',
  '06-script-fermera-letnih-prodazh.md',
  '11-script-soprovozhdeniya-leto.md',
  '12-script-prodaj-novye-lidy-leto.md',
  '13-script-reaktivacii-bazy-ai-probnoe.md',
  '14-script-vhodjashie-zayavki-lager-cherez-probnoe.md',
  '15-shpargalka-menedzhera-leto-AI.md',
  '16-script-soprovozhdenie-INDEX.md',
  '16a-script-znakomstvo.md',
  '16b-script-pogruzhenie.md',
  '16c-script-loyalnost-prodlenie-modulya.md',
  '16d-tochka-kontrolya-snizhenie-motivacii.md',
  '16e-tochka-kontrolya-minecraft-roblox.md',
  '16f-script-doplata-5-zanyatie.md',
  '16g-bank-vozrazhenij.md',
  '18-script-kuratora-probnyh.md',
  '19-whatsapp-shablony.md',
  '21-script-perezagruzka-zakrytie.md',
  '24-script-fermera-priglashenie-na-otkrytyi-urok.md',
  '29-script-prozvon-ushedshih-perezagruzka.md',
  // ── обновление 24 мая 2026 ──
  '41-skript-promoutera-steve-kanikuly.md',
  '47-skript-kasanie-1-zapis-na-mk.md',
  '48-skript-kasanie-2-posle-mk.md',
  '49-skript-kasanie-3-povtor.md',
  '50-skript-kasanie-4-privedi-druga.md',
  '64-script-roditelskoye-sobranie.md',
  '65-skript-personalnye-dannye.md',
  '66-pokazatelnyj-urok.md',
  '67-script-personalnye-dannye.md',
  '75-script-kross-promo-partnery.md',
  '81-skript-hantera-dozhim-cherez-dorozhnuyu-kartu.md',
  '82-skript-soprovozhdeniya-prodlenie-cherez-sleduyushchiy-god.md',
];

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function copyIfExists(srcPath, destPath) {
  if (!fs.existsSync(srcPath)) return false;
  ensureDir(path.dirname(destPath));
  fs.copyFileSync(srcPath, destPath);
  return true;
}

function rmrf(p) {
  if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true });
}

function syncPositions() {
  const positionsDest = path.join(DEST, 'positions');
  rmrf(positionsDest);
  ensureDir(positionsDest);
  let count = 0;
  for (const folder of POSITION_FOLDERS) {
    const srcDir = path.join(SOURCE, 'positions', folder);
    const dstDir = path.join(positionsDest, folder);
    if (!fs.existsSync(srcDir)) {
      console.warn(`[positions] missing: ${folder}`);
      continue;
    }
    ensureDir(dstDir);
    for (const f of fs.readdirSync(srcDir)) {
      if (f.endsWith('.md')) {
        fs.copyFileSync(path.join(srcDir, f), path.join(dstDir, f));
        count++;
      }
    }
  }
  return count;
}

function syncFlat(list, subdir) {
  const dst = path.join(DEST, subdir);
  rmrf(dst);
  ensureDir(dst);
  let count = 0;
  for (const f of list) {
    const ok = copyIfExists(path.join(SOURCE, f), path.join(dst, f));
    if (ok) count++;
    else console.warn(`[${subdir}] missing: ${f}`);
  }
  return count;
}

function main() {
  if (!fs.existsSync(SOURCE)) {
    // In CI/Vercel builds the management folder is not present — content is
    // committed to the repo at src/content. Skip sync there.
    console.log(`[sync] Source not found (${SOURCE}). Using committed src/content as-is.`);
    return;
  }
  ensureDir(DEST);
  const p = syncPositions();
  const r = syncFlat(ROOT_REGULATIONS, 'regulations');
  const s = syncFlat(ROOT_SCRIPTS, 'scripts');
  console.log(`Synced: ${p} position files, ${r} regulations, ${s} scripts.`);
}

main();
