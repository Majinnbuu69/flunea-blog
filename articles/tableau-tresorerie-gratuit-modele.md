---
title: "Tableau de trésorerie gratuit : modèle et limites"
description: "Le modèle gratuit de tableau de trésorerie à recopier : les huit colonnes essentielles, un exemple chiffré et ses limites face à un compte réel."
slug: "tableau-tresorerie-gratuit-modele"
date: "2026-09-16"
updated: "2026-10-27"
author: "L'équipe Flunea"
keywords:
  - "tableau de trésorerie gratuit"
  - "modèle trésorerie"
  - "colonnes trésorerie"
  - "gestion cash"
  - "prévision trésorerie"
cover: ""
draft: false
---

Un tableau de trésorerie gratuit doit contenir au minimum huit colonnes : date, solde d'ouverture, encaissements et décaissements prévus, encaissements et décaissements réels, solde de clôture et écart prévision-réel. Recopié sous Excel ou Google Sheets, il vous alerte sur votre solde à venir, mais seulement si vous le mettez à jour chaque semaine.

> **En bref**
> - Huit colonnes suffisent : date, solde d'ouverture, prévu et réel pour les encaissements et décaissements, solde de clôture, écart.
> - Le solde de clôture devient le solde d'ouverture du mois suivant : une seule erreur se reporte sur toute la suite.
> - Un tableau statique perd son utilité sans mise à jour hebdomadaire ou mensuelle, selon Bpifrance Création.

## La scène qui révèle le décalage

Prenez un atelier de menuiserie. Le mois dernier, il a encaissé 12 000 € de ventes et réglé 9 500 € de fournisseurs et 2 200 € de charges sociales. Sur le papier, il reste 300 € de marge de trésorerie. Pourtant le compte bancaire affiche un découvert de 1 500 €, parce qu'un client a payé 15 jours plus tard que prévu. Ce décalage ne se voit pas sur un relevé bancaire seul : il faut un tableau qui compare le prévu et le réel pour le repérer avant qu'il ne coûte des agios.

## Les colonnes qui comptent vraiment

Un tableau de trésorerie n'a pas besoin d'être compliqué pour être utile. Il doit réunir ces huit colonnes :

- **Date** : jour ou fin de mois, selon votre fréquence de suivi.
- **Solde d'ouverture** : montant disponible au début de la période.
- **Encaissements prévus** : factures à recevoir, subventions, apports.
- **Encaissements réels** : ce qui a effectivement été perçu.
- **Décaissements prévus** : factures fournisseurs, salaires, charges.
- **Décaissements réels** : paiements effectivement effectués.
- **Solde de clôture** : calcul du solde à la fin de la période.
- **Écart prévision-réel** : différence entre prévu et réalisé, en euros.

C'est la logique que décrit [Bpifrance Création](https://bpifrance-creation.fr/encyclopedie/previsions-financieres-business-plan/previsions-financieres/plan-tresorerie-projet) pour le plan de trésorerie d'un projet de création : une projection mensuelle des encaissements et décaissements, avec un solde qui « doit rester positif chaque mois ». La même structure s'applique à une entreprise déjà en activité, sur un rythme hebdomadaire ou mensuel.

## Modèle à recopier sous Excel ou Google Sheets

Copiez le tableau suivant dans votre feuille de calcul, en commençant en cellule A1. Les colonnes A à H reprennent, dans l'ordre, celles listées plus haut.

| Date | Solde d'ouverture | Encaissements prévus | Encaissements réels | Décaissements prévus | Décaissements réels | Solde de clôture prévu | Écart prévision-réel |
|------------|-------------------|----------------------|---------------------|----------------------|---------------------|------------------------|----------------------|
| 01/10/2026 | 5 200 € | 3 000 € | à saisir | 2 500 € | à saisir | =B2+C2-E2 | =(D2-C2)-(F2-E2) |
| 01/11/2026 | =G2 | 4 500 € | à saisir | 3 200 € | à saisir | =B3+C3-E3 | =(D3-C3)-(F3-E3) |
| 01/12/2026 | =G3 | 2 800 € | à saisir | 2 900 € | à saisir | =B4+C4-E4 | =(D4-C4)-(F4-E4) |

Saisissez vos prévisions dans les colonnes « prévus » dès que vous les connaissez : date de facture client, échéance fournisseur, date de prélèvement Urssaf. Au fil du mois, reportez dans les colonnes « réels » ce qui passe effectivement sur le compte. Le solde de clôture prévu devient le solde d'ouverture du mois suivant, et l'écart devient positif quand la réalité fait mieux que la prévision, négatif quand elle fait moins bien. Une fois le mois terminé, remplacez toujours le solde d'ouverture du mois suivant par le solde bancaire réel, pour repartir d'un chiffre juste plutôt que d'un chiffre calculé.

## Pourquoi un tableau statique décroche vite du réel

Ce modèle fonctionne, à une condition : être réalimenté sans relâche. Trois phénomènes le font dévier dès la première semaine. D'abord les délais de paiement : un encaissement prévu le 5 du mois mais réglé le 25 fausse le solde de clôture dès le jour où il aurait dû tomber. Ensuite la variabilité des charges : une facture de carburant ou de matières premières prévue à 1 200 € peut grimper à 1 600 € sans que le tableau ne le signale avant votre saisie manuelle. Enfin les imprévus : un arrêt maladie, une panne d'équipement ou la perte d'un client modifient brutalement les flux, et chaque changement doit être ré-entré à la main, ce qui prend du temps et multiplie le risque d'erreur de saisie.

Pris isolément, ces écarts semblent mineurs. Accumulés, ils dérivent vite vers un découvert réel que le tableau n'a pas vu venir, simplement parce que personne n'a eu le temps de le remettre à jour chaque jour.

## Ce que ça change pour votre trésorerie

Reprenons l'atelier de menuiserie, sur trois mois, avec un tableau mis à jour une fois par mois seulement.

| Mois | Écart non reporté dans le mois | Écart cumulé | Solde bancaire réel vs prévu |
|------|-------------------------------|--------------|-------------------------------|
| Octobre | − 500 € (facture client payée en retard) | − 500 € | 4 700 € au lieu de 5 200 € |
| Novembre | − 300 € (achat de bois plus cher que prévu) | − 800 € | 3 700 € au lieu de 4 500 € |
| Décembre | − 600 € (charge sociale oubliée dans la saisie) | − 1 400 € | 1 400 € au lieu de 2 800 € |

Aucun de ces trois écarts ne dépasse 600 € pris isolément. Mais faute d'avoir été corrigés semaine après semaine, ils se cumulent et ramènent le solde réel de décembre à 1 400 €, loin des 2 800 € annoncés par le tableau. C'est ce point bas sous-estimé, pas un seul écart isolé, qui provoque le découvert surprise.

## Passer à une solution qui se met à jour seule

Quand la saisie manuelle devient le principal frein à la fiabilité du tableau, l'étape suivante est d'automatiser la collecte des mouvements bancaires plutôt que les colonnes elles-mêmes. Un logiciel de trésorerie prévisionnelle connecté à vos comptes en lecture seule importe chaque opération, la classe et reconstruit le solde de clôture et le point bas tous les jours, sans ressaisie.

Flunea reprend exactement cette logique de colonnes, encaissements, décaissements, solde, écart, mais la remplit automatiquement à partir de vos relevés bancaires. Vous gardez le tableau que vous connaissez, sans la case que vous auriez oublié de remplir ce mois-ci.

## Questions fréquentes

### Que doit contenir un tableau de trésorerie gratuit ?

Au minimum huit colonnes : date, solde d'ouverture, encaissements prévus et réels, décaissements prévus et réels, solde de clôture, écart prévision-réel. Le solde de clôture devient le solde d'ouverture de la période suivante.

### À quelle fréquence mettre à jour le tableau ?

Chaque semaine si votre solde descend parfois sous un mois de charges fixes, chaque mois sinon : c'est la fourchette que recommande [Bpifrance Création](https://bpifrance-creation.fr/moments-de-vie/comment-gerer-piloter-au-mieux-mon-entreprise) pour le suivi des tableaux de bord d'une TPE.

### Tableau de trésorerie ou compte de résultat : quelle différence ?

Le compte de résultat mesure ce que l'entreprise gagne, le tableau de trésorerie mesure l'argent réellement disponible à la date où il bouge. Une facture de 5 000 € émise en juin compte dans le résultat de juin, mais n'entre dans la trésorerie qu'au jour du virement.

### Un tableau de trésorerie gratuit suffit-il pour une TPE ?

Oui tant que les mouvements sont peu nombreux et que quelqu'un le met à jour sans faillir chaque semaine. Dès que la saisie prend plus de temps que l'analyse des écarts, un outil connecté aux comptes bancaires devient plus fiable qu'un fichier statique.

## Sources

- [Le plan de trésorerie dans un projet de création d'entreprise](https://bpifrance-creation.fr/encyclopedie/previsions-financieres-business-plan/previsions-financieres/plan-tresorerie-projet)
- [Comment gérer et piloter au mieux mon entreprise](https://bpifrance-creation.fr/moments-de-vie/comment-gerer-piloter-au-mieux-mon-entreprise)
