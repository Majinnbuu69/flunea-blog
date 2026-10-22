---
title: "Tableau de trésorerie gratuit : le modèle à recopier et ses limites"
description: "Découvrez un modèle gratuit de tableau de trésorerie, les colonnes essentielles et pourquoi un fichier statique perd rapidement le réalisme."
slug: "tableau-tresorerie-gratuit-modele"
date: "2026-09-16"
updated: "2026-10-22"
author: "L'equipe Flunea"
keywords:
  - "tableau de trésorerie gratuit"
  - "modèle trésorerie"
  - "colonnes trésorerie"
  - "gestion cash"
  - "prévision trésorerie"
cover: ""
draft: false
---

Un tableau de trésorerie gratuit tient sur huit colonnes : date, solde d'ouverture, encaissements et décaissements prévus puis réels, solde de clôture et écart. Sous Excel ou Google Sheets, quelques formules suffisent à le construire. Sa limite apparaît vite : un client qui paie en retard rend le solde affiché faux dès le lendemain, sans qu'aucune alerte ne vous prévienne.

> **En bref**
> - Un tableau de trésorerie gratuit tient sur huit colonnes : solde, encaissements, décaissements, écart prévu/réel.
> - Sans accord particulier, le délai légal de paiement est de 30 jours, parfois 60 si le contrat le prévoit (Service Public).
> - Une facture payée en retard, même d'un jour, déclenche une indemnité forfaitaire de 40 €.

Imaginez un atelier de menuiserie. Le mois dernier, l'artisan a encaissé 12 000 € de ventes, réglé 9 500 € de fournisseurs et 2 200 € de charges sociales. Sur le papier, il reste 300 €. Mais le compte bancaire affiche un découvert de 1 500 €, parce qu'un client a payé 15 jours plus tard que prévu. Rien dans le tableau ne l'annonçait : personne n'avait reporté le retard.

## Les colonnes qui comptent vraiment

Un tableau de trésorerie ne doit pas être une suite de cases vides. Les colonnes indispensables :

- **Date** : jour ou fin de mois, selon votre fréquence de suivi.
- **Solde d'ouverture** : montant disponible au début de la période.
- **Encaissements prévus** : factures à recevoir, subventions, apports.
- **Encaissements réels** : ce qui a effectivement été perçu.
- **Décaissements prévus** : factures fournisseurs, salaires, charges.
- **Décaissements réels** : paiements effectivement effectués.
- **Solde de clôture** : calcul du solde à la fin de la période.
- **Écart prévision-réel** : différence entre prévisions et réalisations, en euros ou en pourcentage.

Ces colonnes reprennent la logique du [plan de trésorerie tel que le décrit Bpifrance Création](https://bpifrance-creation.fr/encyclopedie/previsions-financieres-business-plan/previsions-financieres/plan-tresorerie-projet) : une projection des encaissements et décaissements, mois par mois, dont le solde doit rester positif chaque mois. Elles permettent de comparer ce qui était prévu à ce qui s'est réellement passé, et d'identifier vite les écarts qui menacent le solde.

## Le modèle à recopier sous Excel ou Google Sheets

Copiez le tableau suivant dans votre feuille de calcul, en commençant en cellule A1. Les colonnes A à H reprennent, dans l'ordre, celles décrites plus haut.

| Date | Solde d'ouverture | Encaissements prévus | Encaissements réels | Décaissements prévus | Décaissements réels | Solde de clôture prévu | Écart prévision-réel |
|------------|-------------------|----------------------|---------------------|----------------------|---------------------|------------------------|----------------------|
| 01/10/2026 | 5 200 € | 3 000 € | à saisir | 2 500 € | à saisir | =B2+C2-E2 | =(D2-C2)-(F2-E2) |
| 01/11/2026 | =G2 | 4 500 € | à saisir | 3 200 € | à saisir | =B3+C3-E3 | =(D3-C3)-(F3-E3) |
| 01/12/2026 | =G3 | 2 800 € | à saisir | 2 900 € | à saisir | =B4+C4-E4 | =(D4-C4)-(F4-E4) |

Pour s'en servir :

1. Saisissez vos prévisions dans les colonnes « Encaissements prévus » et « Décaissements prévus ».
2. Au fil du mois, reportez dans les colonnes « réels » ce qui est effectivement passé sur le compte.
3. Le solde de clôture prévu devient le solde d'ouverture du mois suivant. L'écart est positif quand la réalité fait mieux que la prévision, négatif quand elle fait moins bien.

Une fois le mois terminé, remplacez le solde d'ouverture du mois suivant par le solde bancaire réel : la prévision repart ainsi chaque mois d'un chiffre juste, au lieu d'accumuler les écarts non corrigés.

## Pourquoi un tableau statique décroche du réel

Même le meilleur tableau gratuit devient vite obsolète si personne ne le met à jour. Trois mécanismes l'expliquent.

Le premier tient aux délais de paiement eux-mêmes. [Entre professionnels, le délai légal par défaut est de 30 jours après réception des marchandises ou exécution de la prestation ; un contrat peut porter ce délai jusqu'à 60 jours après la facture, ou 45 jours fin de mois](https://entreprendre.service-public.gouv.fr/vosdroits/F23211). Si vous notez un encaissement prévu au 30e jour et que le client se cale sur le maximum légal ou le dépasse, votre solde de clôture du mois est faux dès cette date, sans que le tableau ne vous le signale. Une facture payée en retard expose en plus le débiteur à une indemnité forfaitaire de 40 € pour frais de recouvrement, due même si le retard n'est que de quelques jours.

Le deuxième mécanisme tient aux charges variables : carburant, matières premières, intérim. Une dépense prévue à 1 200 € peut grimper à 1 600 € sans que le tableau ne s'ajuste tant que vous n'avez pas ressaisi le nouveau montant.

Le troisième mécanisme tient aux événements imprévus : un congé maladie, une panne d'équipement, la perte d'un client important. Sans automatisation, chaque changement doit être ressaisi à la main, ce qui augmente le risque d'erreur et prend du temps que vous n'avez pas toujours.

Un tableau statique donne une photo juste au jour où vous le remplissez, pas un film de votre trésorerie. Les écarts non corrigés s'accumulent : un dépassement de 500 € un mois, puis 800 € le suivant, peut conduire à un découvert de plusieurs milliers d'euros alors qu'une donnée actualisée aurait permis d'alerter bien plus tôt.

## Automatiser plutôt que ressaisir chaque semaine

Quand la saisie manuelle devient un frein, la solution n'est pas d'abandonner le tableau, mais d'automatiser sa collecte. Un logiciel connecté aux comptes bancaires importe chaque opération, la classe et reconstruit les mêmes colonnes tous les jours, sans intervention.

Vous gardez la clarté d'un tableau, avec les mêmes repères, mais avec des chiffres qui reflètent la réalité du moment plutôt que la dernière saisie. Vous éliminez les oublis de mise à jour, vous gagnez le temps de ressaisie et vous êtes alerté dès qu'un solde menace de passer sous votre seuil de sécurité, avant le rejet plutôt qu'après.

## Ce que ça change pour votre trésorerie

Reprenons l'atelier de menuiserie, sur les quatre semaines d'un mois où le tableau n'est mis à jour qu'en début de mois.

| Semaine | Solde affiché dans le tableau | Solde réel du compte bancaire | Écart |
|---|---|---|---|
| Semaine 1 | 5 500 € | 5 500 € | 0 € |
| Semaine 2 | 5 500 € | 2 900 € (fournisseur et charges sociales prélevés) | -2 600 € |
| Semaine 3 | 5 500 € | 300 € (client toujours pas réglé) | -5 200 € |
| Semaine 4 | 5 500 € | -1 200 € (loyer prélevé) | -6 700 € |

Le montant des charges est le même quel que soit l'outil. Ce qui change, c'est le moment où le dirigeant voit venir l'écart : avec une synchronisation bancaire quotidienne, le décalage apparaît dès la semaine 2, assez tôt pour relancer le client ou négocier un découvert ; avec un tableau mis à jour une fois par mois, il n'apparaît qu'au moment du rejet, en semaine 4.

Flunea reprend cette même logique de colonnes, mais remplie automatiquement à partir des opérations bancaires, en lecture seule, avec le point bas des semaines à venir et sa date. Il ne reste plus une cellule à toucher pour que le chiffre affiché corresponde au compte réel.

## Questions fréquentes

### Que doit contenir un tableau de trésorerie ?

Au minimum, pour chaque période : le solde d'ouverture, les encaissements, les décaissements et le solde de clôture, qui devient le solde d'ouverture suivant. Ajoutez une colonne prévu et une colonne réel pour mesurer l'écart et mieux prévoir le mois suivant.

### Tableau de trésorerie ou compte de résultat : quelle différence ?

Le compte de résultat mesure ce que l'entreprise gagne ; le tableau de trésorerie mesure l'argent réellement disponible, à la date où il bouge. Une facture de 5 000 € émise en juin compte dans le résultat de juin, mais n'entre dans la trésorerie qu'au jour du virement, parfois deux mois plus tard.

### À quelle fréquence mettre à jour un tableau de trésorerie ?

Chaque semaine si le solde descend parfois sous un mois de charges fixes, chaque mois sinon. Un tableau mis à jour trop rarement accumule les écarts : un retard client de 15 jours non reporté suffit à fausser tout le mois suivant.

### Un fournisseur peut-il m'imposer un délai de paiement de 90 jours ?

Seulement dans des cas précis, par exemple pour des marchandises expédiées hors de l'Union européenne par un vendeur en franchise de TVA, si le contrat le prévoit. Dans les autres cas, le délai maximal convenu reste 60 jours après la facture ou 45 jours fin de mois.

## Sources

- [Le plan de trésorerie dans un projet de création d'entreprise](https://bpifrance-creation.fr/encyclopedie/previsions-financieres-business-plan/previsions-financieres/plan-tresorerie-projet)
- [Délais de paiement entre professionnels et pénalités de retard](https://entreprendre.service-public.gouv.fr/vosdroits/F23211)
