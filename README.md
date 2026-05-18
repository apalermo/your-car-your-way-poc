# 🚗 Your Car Your Way - PoC Tchat Temps Réel

Bienvenue sur le dépôt de la preuve de concept (PoC) de la messagerie 
instantanée de "Your Car Your Way".

Ce document centralise la configuration globale du projet et permet à n'importe 
quel développeur de l'équipe de déployer l'intégralité de l'environnement de 
manière conteneurisée, homogène et sécurisée.

## 🏗️ L'Architecture du Projet (Monorepo)

Ce dépôt est orchestré sous forme de monorepo divisé en deux briques distinctes :
- [**`/backend`**](./backend/README.md) : L'API Java 25 / Spring Boot (Broker de messages).
- [**`/frontend`**](./frontend/README.md) : L'application cliente Angular 21.

### Le concept architectural : "Save-then-Broadcast"
Pour garantir qu'aucun message ne soit perdu en cas de micro-coupure réseau :
1. **Envoi** : Le client Angular pousse le message via un tunnel WebSocket (STOMP).
2. **Persistance** : Le serveur Spring Boot l'enregistre immédiatement en BDD.
3. **Diffusion** : Après succès de l'écriture, le message est diffusé sur le topic.

---

## 🛠️ Prérequis Globaux

Pour lancer l'écosystème complet sans installer de runtimes locaux :
- **Docker Desktop** (v25+)
- **Docker Compose**

---

## 🚀 Lancement Rapide (Mode Industrialisé)

### 1. Configuration de l'environnement local
À la racine du projet, créez un fichier `.env` (ignoré par Git) :

```text
DB_NAME=ycyw_db
DB_USER=ycyw_admin
DB_PASSWORD=votre_mot_de_passe_securise_2026
```

### 2. Démarrage des conteneurs
Lancez l'ensemble des services en arrière-plan avec une seule commande :

```bash
docker compose up -d
```

### 3. Cartographie des Accès Locaux

| Service | Technologie | URL / Port Externe | Port Interne Docker |
| :--- | :--- | :--- | :--- |
| **Frontend** | Angular 21 / Nginx | [http://localhost:4200](http://localhost:4200) | `80` |
| **Backend** | Java 25 / Spring Boot | [http://localhost:8080](http://localhost:8080) | `8080` |
| **Base de Données** | PostgreSQL 18 | `localhost:5433` | `5432` |

---

## ⚙️ Intégration Continue (CI)

Ce dépôt intègre un pipeline de validation automatisé via **GitHub Actions** (`.github/workflows/ci.yml`). À chaque `push`, il s'assure de :
- Compiler et exécuter les tests unitaires du Backend (Maven / JDK 25).
- Installer les dépendances et valider le build du Frontend (Node 22 / Angular).