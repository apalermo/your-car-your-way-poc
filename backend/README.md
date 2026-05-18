# ⚙️ Backend : API de Messagerie (Spring Boot)

Ce dossier contient l'API de gestion du tchat, développée avec **Spring Boot**, 
**Java 25 (LTS)** et configurée pour **PostgreSQL 18**. Elle expose les 
endpoints WebSocket/STOMP et sécurise l'historique des échanges.

## 🛠️ Spécificités Techniques
- **Runtime** : Java 25 (Distribution Temurin recommandée)
- **Gestionnaire de build** : Maven 3.9+ (ou via le wrapper `./mvnw`)
- **Persistance** : Spring Data JPA / Hibernate

---

## 🚀 Options d'Exécution

### Option A : Via le Docker Compose Global (Recommandé)
Si vous travaillez sur l'intégration globale, lancez l'orchestrateur depuis la 
racine du monorepo. L'image de l'API intègre un build multi-stage optimisé.

### Option B : Mode Développement Local (Nativement)
Si vous devez modifier et debugger le code Java en direct :

1. **Prérequis** : Assurez-vous qu'une instance PostgreSQL écoute sur le port 
   `5432` (ou lancez uniquement le conteneur de base de données via 
   `docker compose up -d postgres-db`).
2. **Initialisation SQL** (Si base locale brute) :
   ```sql
   CREATE DATABASE ycyw_db;
   CREATE USER ycyw_admin WITH PASSWORD 'votre_mot_de_passe_securise_2026';
   GRANT ALL PRIVILEGES ON DATABASE ycyw_db TO ycyw_admin;
   ```
3. **Lancement de l'application** :
   Injectez les variables requises directement au runtime de votre terminal :
   ```bash
   DB_USER=ycyw_admin \
   DB_PASSWORD=votre_mot_de_passe_securise_2026 \
   SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5433/ycyw_db \
   ./mvnw spring-boot:run
   ```

---

## 🛡️ Bonnes Pratiques de Production Appliquées

- **Externalisation des secrets** : Les identifiants `DB_USER` et `DB_PASSWORD` 
  sont injectés dynamiquement et ne sont jamais écrits en dur dans le fichier 
  `application.properties`.
- **Performance de la couche Data** : La propriété `spring.jpa.open-in-view` 
  est explicitement désactivée pour éviter le pattern de fuite de connexions 
  (Anti-pattern anti-performant en production).
- **Maintenance** : Auto-détection du dialecte Hibernate activée pour garantir 
  la portabilité de la couche d'accès aux données.