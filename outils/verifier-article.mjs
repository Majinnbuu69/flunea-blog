#!/usr/bin/env node
/**
 * Vérifie qu'un article respecte les règles du blog avant publication.
 * Usage : node outils/verifier-article.mjs articles/<slug>.md
 * Code de sortie 0 = publiable ; 1 = à corriger (la liste des problèmes est affichée).
 * Aucune dépendance : lancé tel quel par la routine de rédaction et par la CI.
 */
import fs from "node:fs";
import path from "node:path";

// Seules sources externes autorisées : sites publics officiels et institutions.
const DOMAINES_SOURCES = [
  "legifrance.gouv.fr", "service-public.gouv.fr", "economie.gouv.fr", "impots.gouv.fr",
  "urssaf.fr", "banque-france.fr", "bpifrance.fr", "bpifrance-creation.fr", "insee.fr",
  "info.gouv.fr", "douane.gouv.fr", "cci.fr", "artisanat.fr",
];

const INTERDITS = [
  "force est de constater", "il est important de", "il est essentiel de", "il est crucial de",
  "il convient de", "la logique veut", "en pratique,", "en somme,", "au final,", "en effet",
  "de plus,", "par ailleurs", "en outre", "dans cet article", "a l'ere du", "de nos jours",
  "dans un monde ou", "voici trois", "voici les raisons", "en adoptant", "plongeons",
  "decortiquons", "en conclusion", "pour conclure,", "en resume,", "revolutionn",
  "jouer un role cle", "au coeur de", "n'hesitez pas", "guide ultime",
];

const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/’/g, "'");

const fichier = process.argv[2];
if (!fichier || !fs.existsSync(fichier)) {
  console.error("Usage : node outils/verifier-article.mjs articles/<slug>.md");
  process.exit(1);
}
const brut = fs.readFileSync(fichier, "utf8").replace(/\r\n/g, "\n");
const problemes = [];
const pb = (m) => problemes.push(m);

// --- Frontmatter ---------------------------------------------------------------------
const fm = brut.match(/^---\n([\s\S]*?)\n---\n/);
if (!fm) {
  console.error("ÉCHEC : pas de frontmatter (--- ... ---) en tête du fichier.");
  process.exit(1);
}
const champ = (nom) => {
  const m = fm[1].match(new RegExp(`^${nom}:\\s*"(.*)"\\s*$`, "m"));
  return m ? m[1] : null;
};
const slugFichier = path.basename(fichier, ".md");
const titre = champ("title") || "";
const description = champ("description") || "";
if (!titre) pb("title manquant");
else if (titre.length < 25 || titre.length > 75) pb(`title : ${titre.length} caractères (attendu 25 à 75)`);
if (!description) pb("description manquante");
else if (description.length < 100 || description.length > 175) pb(`description : ${description.length} caractères (attendu 100 à 175)`);
if (champ("slug") !== slugFichier) pb(`slug du frontmatter (${champ("slug")}) différent du nom de fichier (${slugFichier})`);
for (const c of ["date", "updated"]) if (!/^\d{4}-\d{2}-\d{2}$/.test(champ(c) || "")) pb(`${c} absent ou pas au format AAAA-MM-JJ`);
if (!/^keywords:\n(\s+- ".+"\n)+/m.test(fm[1] + "\n")) pb("keywords : liste absente (le premier = mot-clé principal)");
if (!/^draft:\s*false\s*$/m.test(fm[1])) pb("draft doit valoir false");
for (const cliche of ["guide complet", "tout savoir", "tout ce qu'il faut", "le guide ultime"]) {
  if (norm(titre).includes(norm(cliche))) pb(`titre cliché : « ${cliche} »`);
}

// --- Corps ---------------------------------------------------------------------------
const corps = brut.slice(fm[0].length).trim();
const mots = corps.split(/\s+/).filter(Boolean).length;
if (mots < 900) pb(`${mots} mots (minimum 900)`);
if (/^\s*(#|[-*]\s|>|\|)/.test(corps)) pb("le corps doit commencer par un paragraphe de réponse directe (pas un titre, une liste, une citation ou un tableau)");
const premierPara = corps.split(/\n\s*\n/)[0];
const motsPremier = premierPara.split(/\s+/).filter(Boolean).length;
if (motsPremier < 30 || motsPremier > 80) pb(`premier paragraphe : ${motsPremier} mots (attendu 40 à 60 environ)`);
if (/<\/?[a-z][a-z0-9]*(\s[^>]*)?>/i.test(corps)) pb("HTML détecté dans le corps");
if (/```/.test(corps)) pb("bloc de code détecté");

const titres2 = [...corps.matchAll(/^##\s+(.+)$/gm)].map((m) => m[1].trim());
const titresContenu = titres2.filter((t) => !/^(questions fr[ée]quentes|sources)$/i.test(t));
if (titresContenu.length < 4) pb(`${titresContenu.length} sections ## de contenu (minimum 4, hors FAQ et Sources)`);
if (/^###\s/m.test(corps) && !/^##\s/m.test(corps)) pb("titres en ### sans aucun ## : utiliser ## pour les sections");

// FAQ : ## Questions fréquentes, puis 3 à 5 questions en ### terminées par « ? »
const faqIdx = titres2.findIndex((t) => /^questions fr[ée]quentes$/i.test(t));
if (faqIdx < 0) pb("section « ## Questions fréquentes » absente");
else {
  const faq = corps.split(/^##\s+Questions fr[ée]quentes\s*$/m)[1].split(/^##\s/m)[0];
  const questions = [...faq.matchAll(/^###\s+(.+)$/gm)].map((m) => m[1].trim());
  if (questions.length < 3 || questions.length > 5) pb(`FAQ : ${questions.length} questions (attendu 3 à 5)`);
  for (const q of questions) if (!q.endsWith("?")) pb(`FAQ : la question « ${q} » ne finit pas par « ? »`);
}

// Sources : section finale, chaque lien externe du texte y figure, domaines officiels uniquement
const sourcesBloc = corps.split(/^##\s+Sources\s*$/m)[1];
if (!sourcesBloc) pb("section « ## Sources » absente (en dernier)");
else if (/^##\s/m.test(sourcesBloc)) pb("la section « ## Sources » doit être la dernière");
const urlsSources = new Set([...(sourcesBloc || "").matchAll(/\]\((https:\/\/[^)\s]+)\)/g)].map((m) => m[1]));
if (sourcesBloc && urlsSources.size === 0) pb("section Sources sans aucun lien");
for (const [, texte, url] of corps.matchAll(/\[([^\]]+)\]\(([^)\s]+)[^)]*\)/g)) {
  if (!/^https:\/\//.test(url)) { pb(`lien non https ou interne interdit : ${url} (les liens internes sont posés au build)`); continue; }
  const hote = new URL(url).hostname.replace(/^www\./, "");
  if (!DOMAINES_SOURCES.some((d) => hote === d || hote.endsWith(`.${d}`))) pb(`domaine non autorisé : ${hote} (« ${texte} »)`);
  if (!urlsSources.has(url)) pb(`lien cité dans le texte mais absent de « ## Sources » : ${url}`);
}

// Formules d'IA interdites
const bas = norm(corps);
for (const f of INTERDITS) if (bas.includes(norm(f))) pb(`formule interdite : « ${f} »`);

if (problemes.length) {
  console.error(`ÉCHEC ${fichier} (${mots} mots) :`);
  for (const p of problemes) console.error(`  - ${p}`);
  process.exit(1);
}
console.log(`OK ${fichier} : ${mots} mots, ${titresContenu.length} sections, FAQ et ${urlsSources.size} source(s).`);
