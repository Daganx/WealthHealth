# HRnet - Application de Gestion des Employés (Version React)

## Description du projet
HRnet est une application interne utilisée par WealthHealth pour la gestion des dossiers des employés. Ce projet modernise l'application initiale, qui utilisait jQuery, en la convertissant entièrement en **React**, améliorant ainsi la performance et la stabilité de l'application.

## Contexte
L'application précédente souffrait de problèmes de lenteur et d'instabilité, principalement en raison des plugins jQuery utilisés pour certaines fonctionnalités clés (sélecteurs de date, fenêtres modales, menus déroulants, et tableaux de données). Ce projet vise à remplacer ces plugins par des composants React pour résoudre ces problèmes.

## Installation

### Prérequis
Avant de commencer, assurez-vous que vous avez installé les logiciels suivants :

- [Node.js](https://nodejs.org/en/download/) (version 14 ou supérieure)
- [npm](https://www.npmjs.com/get-npm) ou [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

### Étapes d'installation

1. **Clonez le dépôt GitHub :**

   ```bash
   git clone https://github.com/Daganx/WealthHealth.git
   cd wealth-health

## Installation des dépendances

Utilisez npm ou yarn pour installer les packages nécessaires :

    npm install

Lancez l'application avec la commande suivante :

    npm start

L'application sera accessible sur http://localhost:3000.

## Fonctionnalités

Cette version React de HRnet inclut les composants suivants pour remplacer les anciens plugins jQuery :

1. Sélecteur de date
2. Fenêtre modale (modal.js)
3. Menu déroulant
4. Table de données
Chaque composant a été développé dans une optique modulaire pour garantir la maintenabilité et la réutilisabilité du code.

Tests de Performance
Pour garantir l'amélioration des performances après la conversion en React, des audits ont été effectués avec Lighthouse :

Temps de chargement : Amélioré de 10% par rapport à l'ancienne version en jQuery.
Appels réseau : Réduction significative du nombre d'appels réseau grâce à une meilleure gestion de l'état.
Performances générales : Score de performance passé de 89 (ancienne version) à 99 (nouvelle version React).





