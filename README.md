# **Cycle de vie du projet de Conversion de Chiffres Arabes en Chiffres Romains**

Ce document décrit les étapes clés du cycle de vie de développement et de déploiement du projet de Conversion de Chiffres Arabes en Chiffres Romains.

**Étape 1 : Initialisation du Projet**

Création d'un environnement de travail sur GitHub pour le suivi de versions et la collaboration.

**Étape 2 : Conception**

Analyse des besoins du projet : La première exigence était de créer un outil de conversion de chiffres arabes en chiffres romains.
Choix de l'architecture : Décision de créer une API Node.js pour gérer la logique de conversion et une application React pour l'interface utilisateur.
Planification : Mise en place d'un plan de développement pour les deux composants, API et application.

**Étape 3 : Développement**

Partie API (Backend)
Mise en place d'un serveur Node.js avec Express.
Création d'une fonction de conversion de chiffres arabes en chiffres romains avec des tests unitaires Jest.
Configuration de la gestion des erreurs et des réponses JSON pour l'API.
Développement de la route POST pour exécuter la fonction de conversion.
Partie Application (Frontend)
Création de l'application React avec Create React App.
Mise en place de l'interface utilisateur pour saisir un chiffre arabe et afficher le chiffre romain correspondant.
Intégration de la communication avec l'API backend via des requêtes HTTP.
Gestion des erreurs et affichage de messages d'erreur en cas de problème de conversion.
Mise en place de tests unitaires Jest pour les composants React.

**Étape 4 : Tests Locaux**

Exécution de tests locaux pour s'assurer que l'API et l'application fonctionnent correctement sur l'environnement de développement.

**Étape 5 : Déploiement**

Mise en ligne de l'API Node.js sur une plateforme de déploiement (par exemple, Heroku).
Mise en ligne de l'application React sur une plateforme d'hébergement statique (par exemple, Netlify).
Configuration des liens entre l'application frontend et l'API backend.

**Étape 6 : Validation**
Test de l'application en ligne pour vérifier qu'elle fonctionne correctement sur Internet.
