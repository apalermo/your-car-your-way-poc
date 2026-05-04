# 🚗 Your Car Your Way - PoC Tchat Temps Réel

Bienvenue sur le dépôt de la preuve de concept (PoC) de la messagerie instantanée de "Your Car Your Way".

Ce document est conçu pour vous accompagner dans la prise en main du projet. Son objectif est de valider la faisabilité technique d'une communication en temps réel entre nos clients et nos agents.

## 🏗️ L'Architecture du Projet (Monorepo)

Ce dépôt est divisé en deux écosystèmes distincts :

- [**`/backend`**](./backend/README.md) : L'API Java/Spring Boot agissant comme serveur et broker de messages.
- [**`/frontend`**](./frontend/README.md) : L'application cliente en Angular 21.

### Le concept : "Save-then-Broadcast"

Pour garantir qu'aucun message ne soit perdu en cas de coupure réseau, nous utilisons une architecture hybride :

1. **Envoi :** Le client Angular envoie son message au serveur via un tunnel WebSocket (STOMP).
2. **Sauvegarde :** Le serveur Spring Boot sauvegarde immédiatement le message dans PostgreSQL (Single Source of Truth).
3. **Diffusion :** Si la sauvegarde réussit, le serveur diffuse le message à tous les utilisateurs connectés.

## 🛠️ Prérequis Globaux

Avant de commencer, assurez-vous d'avoir installé :

- **Java 25** (Distribution Temurin recommandée)
- **Node.js** (v20 ou supérieur) & **npm**
- **Angular CLI** (v21)
- **PostgreSQL 17**

👉 **[Consulter les instructions de lancement du Backend](./backend/README.md)**  
👉 **[Consulter les instructions de lancement du Frontend](./frontend/README.md)**
