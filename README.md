# Description du Projet

Ce projet est une application web développée avec Symfony pour la gestion des services et des devis. Il permet aux utilisateurs de sélectionner différents services et de calculer un devis en fonction des services sélectionnés.

## Fonctionnalités

- Affichage des services disponibles
- Sélection de services via des cases à cocher
- Calcul du devis en fonction des services sélectionnés
- Affichage du montant total du devis
- Intégration de fonctionnalités back-end avec Symfony et front-end avec React

## Structure du Projet

Le projet est structuré de la manière suivante :

- **assets/js** : Contient les fichiers JavaScript pour la logique front-end de l'application.
- **src/Controller** : Contient les contrôleurs Symfony pour gérer les requêtes HTTP et les réponses.
- **src/Entity** : Contient les entités Doctrine représentant les données de la base de données.
- **templates** : Contient les fichiers Twig pour les vues HTML de l'application.
- **public** : Contient les fichiers publics accessibles depuis le navigateur, tels que les fichiers CSS, JavaScript, et les images.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- PHP
- Composer
- Symfony CLI
- Node.js
- npm ou Yarn

## Installation

1. Cloner le dépôt du projet depuis GitHub :
git clone https://github.com/Paradize250/FTBE.git

2. Installer les dépendances PHP avec Composer :
composer install

4. Installer les dépendances JavaScript avec npm ou Yarn :
npm install
ou
yarn install


4. Créer la base de données et charger les schémas :
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate


5. Lancer le serveur de développement Symfony :
symfony server:start 

6. Compiler les fichiers JavaScript pour le développement :
npm run dev
ou
yarn dev

7. Accéder à l'application dans votre navigateur :
http://localhost:8000

## Utilisation

1. Sur la page d'accueil, vous verrez la liste des services disponibles.
2. Cochez les services que vous souhaitez inclure dans votre devis.
3. Cliquez sur le bouton "Calculer le devis" pour obtenir le montant total du devis.

## Contribution

Les contributions au projet sont les bienvenues ! Si vous souhaitez contribuer, veuillez suivre ces étapes :

1. Forker le dépôt sur GitHub.
2. Créer une nouvelle branche à partir de la branche principale.
3. Faire vos modifications et effectuer les commits.
4. Pousser vos modifications sur votre fork GitHub.
5. Créer une pull request vers la branche principale du dépôt original.

## Licence


## Contacts

Pour toute question ou préoccupation, veuillez me contacter
