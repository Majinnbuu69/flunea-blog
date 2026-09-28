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
8. Commite (`article: <slug>`) et pousse. **Ne modifie aucun autre fichier.**

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
title: "<25 à 75 caractères, contient le mot-clé, concret>"
description: "<100 à 175 caractères, contient le mot-clé, donne envie de cliquer>"
slug: "<le slug du sujet>"
date: "AAAA-MM-JJ"
updated: "AAAA-MM-JJ"
author: "L'équipe Flunea"
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
