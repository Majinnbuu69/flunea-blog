# Consigne de rédaction — blog Flunea

Ce fichier est la consigne complète de la routine qui rédige les articles de
https://flunea.fr/blog. Il se suffit à lui-même : lis-le en entier avant d'écrire.

## Le lecteur et le produit

Tu écris pour des dirigeants de TPE, artisans, indépendants et petites PME qui
gèrent leur trésorerie eux-mêmes, sans direction financière. Tu écris comme
quelqu'un qui connaît le terrain, pas comme un blog SEO.

**Flunea** est un logiciel de trésorerie prévisionnelle : il se connecte aux comptes
bancaires en lecture seule (ou importe un relevé CSV), classe les opérations et
projette le solde des semaines à venir, avec le point bas et sa date, et des
alertes. N'attribue à Flunea **aucune autre fonction** : pas de facturation, pas de
relances automatiques, pas de suivi des stocks, pas de comptabilité. Ne cite aucun
prix et ne dis jamais que Flunea est gratuit.

## Équilibre éditorial : de la gestion, pas du droit

Le lecteur veut savoir **quoi faire lundi matin** pour que son compte ne passe pas
dans le rouge. Chaque article est d'abord une **méthode concrète de gestion** :
anticiper, chiffrer, décider, négocier, relancer, organiser sa semaine.

- Le droit et les statistiques ne sont qu'un **appui** : un ou deux faits sourcés
  quand ils éclairent la méthode, jamais le sujet principal (sauf si le sujet de
  `sujets.json` est lui-même juridique).
- Chaque article contient une section **« Ce que ça change pour votre trésorerie »** :
  un exemple chiffré en euros, semaine par semaine ou mois par mois, qui montre
  l'effet sur le solde du compte et sur le point bas.
- Quand le sujet s'y prête, un **tableau chiffré** (avant / après, scénario A / B,
  calendrier des sorties d'argent) vaut mieux que trois paragraphes.
- Les sources peuvent aussi être des guides pratiques officiels (Bpifrance Création,
  fiches « gérer son entreprise » de Service Public, études de l'Insee ou de la
  Banque de France), pas seulement des textes de loi.

## Rubriques du blog

Chaque sujet et chaque article appartient à **une rubrique et une sous-rubrique** (champs
`rubrique` et `sous_rubrique` du sujet dans `sujets.json`, recopiés dans le frontmatter).
Le blog parle de **gestion d'entreprise vue par le dirigeant** : la trésorerie est le fil
rouge, mais le lecteur est un patron qui décide (embaucher, investir, fixer ses prix, se
rémunérer, choisir ses outils), pas un comptable.

| Rubrique | Sous-rubriques |
| --- | --- |
| Piloter sa trésorerie | Prévision et point bas · Suivi hebdomadaire · Notions clés · Tableaux et modèles |
| Encaisser et relancer | Délais de paiement · Relances et recouvrement · Risque client · Facturation |
| Payer et négocier | Fournisseurs · Charges sociales et impôts · TVA · Échéanciers |
| Financer son activité | Banque et découvert · Prêts et facilités de caisse · Affacturage et alternatives |
| Diriger son entreprise | Rémunération du dirigeant · Prix et marge · Rentabilité et charges · Investir · Embaucher · Tableau de bord du dirigeant · Créer et lancer · Stock |
| Outils et comparatifs | Tableur ou logiciel · Appli bancaire ou prévision · Comptabilité ou trésorerie · Logiciels de trésorerie |
| Par métier | BTP et artisans · Commerce · Restauration · Services et libéraux · Indépendants et micro-entrepreneurs |

Équilibre : sur 3 nouveaux articles d'affilée, **au moins un** relève de « Diriger son
entreprise » ou de « Outils et comparatifs ». Une rubrique sans article depuis le plus
longtemps passe avant les autres quand tu ajoutes des sujets (règle « Réserve de sujets »).

## Règles SEO

Ces règles viennent des outils SEO de l'équipe (recherche de mots-clés, regroupement par
intention, contrôle de cannibalisation, Search Console). Respecte-les à chaque article.

- **Une intention, un article.** Avant d'écrire, compare le `mot_cle` du sujet au premier
  mot-clé (`keywords[0]`) et au titre de **chaque** article de `articles/`. Si un article
  répond déjà à la même question, n'écris pas de doublon : passe le sujet à `"a_revoir"`
  avec une `note` qui nomme l'article concerné, et traite le sujet suivant.
- **Le mot-clé principal au début du `title`**, tel que les gens le tapent, et dans le
  premier paragraphe. Les titres de sections reprennent des variantes et les vraies
  questions trouvées avec WebSearch (formulations des « autres questions posées »).
- **La forme suit l'intention** : `info` = définition nette puis exemple chiffré ;
  `howto` = étapes numérotées que l'on peut suivre le jour même ; `compare` = tableau
  comparatif puis « Quel choix selon votre situation » (voir « Articles comparatifs »).
- **Maillage** : écris en toutes lettres, au moins une fois, le sujet de l'article le plus
  proche de la même rubrique (le site transforme ces expressions en liens internes). Jamais
  de lien Markdown vers flunea.fr écrit à la main.
- **Search Console** : `sources/search-console.md` liste les recherches Google qui
  montrent déjà le site, avec leur position. Quand une de ces recherches correspond à ton
  sujet, utilise sa formulation exacte dans le titre ou une section. Ne modifie pas ce
  fichier : il est mis à jour par l'équipe.

## Articles comparatifs

Pour un sujet `"intention": "compare"`. En France, la publicité comparative est permise si
elle compare objectivement des caractéristiques essentielles, pertinentes et vérifiables,
sans dénigrer ni tromper (Code de la consommation, article L122-1). D'où ces règles :

- **Outils génériques, nommables librement** : Excel, Google Sheets, l'application de sa
  banque, un logiciel de comptabilité, le carnet papier, l'expert-comptable. Décris ce que
  ce type d'outil permet ou ne permet pas en général, sans inventer de limite.
- **Logiciels de trésorerie concurrents** : nomme-les **seulement si l'`angle` du sujet le
  demande**. Chaque fait sur un concurrent vient de **son propre site officiel, ouvert avec
  WebFetch pendant cette exécution**, et s'écrit « selon son site, consulté le
  JJ/MM/AAAA ». Aucun lien vers un concurrent, aucun prix de concurrent (ils changent),
  aucun jugement (« cher », « compliqué », « dépassé »), jamais « le meilleur ». Compare
  tout le monde sur les **mêmes critères**, et dis honnêtement quand un autre outil convient
  mieux (par exemple une entreprise avec plusieurs entités ou une direction financière).
  Si une page concurrente est inaccessible, retire ce concurrent de l'article.
- **Structure** : un tableau comparatif (critères en lignes : ce que l'outil montre
  d'aujourd'hui, ce qu'il prévoit, le point bas et sa date, la connexion bancaire, le temps
  de mise à jour par semaine, le public visé), puis « Quel choix selon votre situation »
  (deux ou trois profils de dirigeants), puis, juste avant le paragraphe de rattachement,
  un court paragraphe qui situe Flunea dans la catégorie « logiciel de trésorerie
  prévisionnelle » avec ce qu'il fait réellement (connexion bancaire en lecture seule ou
  import CSV, classement des opérations, solde prévisionnel, point bas et sa date,
  alertes). Comme partout : aucun prix de Flunea, jamais le mot « gratuit », aucune
  fonction non vérifiée.

## Déroulé d'une exécution

1. Ouvre `sujets.json`. Prends le sujet `"statut": "a_faire"` qui a la plus petite
   `priorite`. S'il n'y en a aucun, arrête-toi sans rien modifier.
2. Lis les articles existants dans `articles/` qui touchent au même thème, pour ne
   pas les répéter et pour apporter un angle neuf. Respecte l'`angle` et la `note`
   éventuelle du sujet.
3. **Recherche.** Pars de `sources/faits-verifies.md`, puis complète avec WebSearch
   et WebFetch sur des sites officiels (liste plus bas). Tout chiffre réel que tu
   utilises doit venir d'une page **que tu as ouverte pendant cette exécution** et
   qui l'énonce explicitement. Si une page est inaccessible, n'utilise pas ce qu'elle
   est censée dire. Si tu ne trouves pas de source officielle pour un chiffre, ne
   l'écris pas.
4. Rédige `articles/<slug>.md` au format décrit plus bas.
5. Lance `node outils/verifier-article.mjs articles/<slug>.md` et corrige jusqu'à
   obtenir `OK`.
6. Dans `sujets.json`, passe ce sujet à `"statut": "publie"` et ajoute
   `"publie_le": "AAAA-MM-JJ"`.
7. Si tu as vérifié un fait nouveau et utile pour d'autres articles, ajoute-le à
   `sources/faits-verifies.md` avec son URL et la date de vérification.
8. Commite (`article: <slug>`) et pousse sur une branche nommée `claude/<slug>-AAAAMMJJ` : seul le préfixe `claude/` déclenche la publication, une branche nommée autrement n'est jamais mise en ligne. **Ne modifie aucun autre fichier.**

## Mode « mise à jour » (mardi et jeudi)

Les mardis et jeudis, au lieu d'écrire un nouvel article, tu **remets à niveau un
article existant** : un article plus complet et plus juste vaut mieux, pour Google
comme pour les assistants IA, qu'un article de plus.

1. Ouvre `sources/search-console.md` : s'il liste un article « à pousser » dont le champ
   `updated` a plus de 30 jours, choisis le premier de cette liste et réoriente-le vers la
   recherche indiquée (titre, premier paragraphe, une section). Sinon, lance
   `node outils/verifier-article.mjs` sur chaque fichier de `articles/` et choisis
   l'article qui **échoue** et dont le champ `updated` est le plus ancien.
   Si tous passent, prends celui dont `updated` a plus de 90 jours, le plus ancien.
   Si aucun ne correspond, écris plutôt un nouvel article (déroulé normal).
2. Garde le `slug`, la `date` et ce qui est bon dans le texte. Corrige toute erreur
   de fond (chiffre faux, confusion, promesse inexacte sur Flunea) et mets l'article
   au format actuel : paragraphe de réponse directe, encadré En bref, section « Ce que
   ça change pour votre trésorerie », sources officielles ouvertes pendant la session,
   FAQ de 3 à 5 questions, `## Sources` en dernier, `rubrique` et `sous_rubrique` dans le
   frontmatter (reprends ceux de son sujet dans `sujets.json`, sinon choisis-les dans le
   tableau des rubriques). Ne raccourcis pas l'article.
3. Passe `updated` à la date du jour. Le vérificateur doit afficher OK.
4. Commite (`maj: <slug>`) et pousse sur une branche nommée `claude/<slug>-AAAAMMJJ` : seul le préfixe `claude/` déclenche la publication, une branche nommée autrement n'est jamais mise en ligne. Ne touche pas à `sujets.json` pour une mise à jour.

## Réserve de sujets

Si `sujets.json` compte **moins de 8 sujets** `a_faire` après ton travail, ajoutes-en
5 nouveaux à la fin (sans rédiger d'article) : des questions concrètes que se posent
les dirigeants de TPE sur la gestion de leur entreprise et leur trésorerie, trouvées avec
WebSearch ou dans `sources/search-console.md`, qui ne recoupent aucun article ni aucun
sujet existant. Au moins 2 des 5 relèvent de « Diriger son entreprise » ou de « Outils et
comparatifs ». Même format que les autres entrées (`rubrique` et `sous_rubrique`
compris), avec un `angle` précis et une `priorite` supérieure à toutes les existantes.

## Comment écrire

- **Premier paragraphe, 40 à 60 mots : la réponse directe** à la question que se pose
  le lecteur en tapant le mot-clé, compréhensible sans lire la suite, avec un chiffre
  ou un exemple concret. C'est ce paragraphe que Google et les assistants IA citent.
  Jamais un titre, jamais une question rhétorique, jamais « Dans cet article ».
- Juste après, un encadré `> **En bref**` suivi de 3 lignes `> - …` (un fait clé par
  ligne, 20 mots maximum).
- Ensuite une scène concrète ou une tension réelle : un maçon, une TVA à payer, un
  client qui paie à 45 jours.
- Alterne phrases courtes et longues. Varie le début des paragraphes.
- Sois concret : montants en euros, délais en jours, cas précis. Les exemples chiffrés
  d'entreprise sont permis s'ils sont clairement présentés comme des exemples.
- Prends parti : ce qui marche, ce qui ne marche pas.
- En dehors de l'encadré En bref, une seule liste à puces dans tout l'article.
- Juste avant la FAQ, un paragraphe court qui relie le sujet à Flunea, sans slogan,
  sans point d'exclamation.

**Formules interdites** (le script de vérification les refuse) : « en effet »,
« de plus », « par ailleurs », « en outre », « en pratique, », « au final »,
« en somme », « il est important/essentiel/crucial de », « il convient de »,
« dans cet article », « de nos jours », « plongeons », « en conclusion »,
« n'hésitez pas », « au cœur de », « jouer un rôle clé ». Pas d'emoji.

## Sources

- Domaines autorisés pour les liens : legifrance.gouv.fr, service-public.gouv.fr,
  economie.gouv.fr, impots.gouv.fr, urssaf.fr, banque-france.fr, bpifrance.fr,
  bpifrance-creation.fr, insee.fr, info.gouv.fr, douane.gouv.fr, cci.fr, artisanat.fr.
- Cite chaque source par un lien Markdown posé sur quelques mots du texte :
  `[le Code de commerce](https://…)`. Utilise l'URL exacte de la page ouverte.
- **Aucun lien interne** vers flunea.fr : le maillage interne est calculé
  automatiquement à la publication.
- Termine l'article par `## Sources` : une ligne `- [Titre de la page](URL)` par
  source citée. C'est la dernière section.
- Attention aux confusions : un retard de paiement moyen n'est pas un délai de
  paiement, ni un DSO. Recopie le sens exact de la source.

## Format du fichier

```markdown
---
title: "<25 à 51 caractères (Google coupe au-delà de 60 avec « — Flunea »), contient le mot-clé, concret>"
description: "<100 à 155 caractères (Google coupe au-delà), contient le mot-clé, donne envie de cliquer>"
slug: "<le slug du sujet>"
date: "AAAA-MM-JJ"
updated: "AAAA-MM-JJ"
author: "L'équipe Flunea"
rubrique: "<rubrique du sujet>"
sous_rubrique: "<sous-rubrique du sujet>"
keywords:
  - "<mot-clé principal exact, en premier>"
  - "<3 à 5 autres>"
cover: ""
draft: false
---

<paragraphe de réponse directe>

> **En bref**
> - …
> - …
> - …

## <4 à 6 sections aux titres courts et concrets, pas de titre-question>

…

## Questions fréquentes

### <question que les dirigeants posent vraiment ?>

<réponse de 2 ou 3 phrases, 40 à 60 mots, qui commence par la réponse : oui, non, un chiffre, un délai>

(3 à 5 questions)

## Sources

- [Titre de la page](https://…)
```

Longueur : 1 100 à 1 600 mots au total. Markdown pur : pas de HTML, pas de bloc
de code. Titres de section en `##`, sous-titres en `###`.
