# Your Car Your Way - Proof of Concept (PoC)

## 📋 Présentation
Ce dépôt contient la preuve de concept technique pour la fonctionnalité de tchat en temps réel. L'objectif est de valider l'architecture technique, le modèle de données et la communication bidirectionnelle (WebSockets) au sein de l'écosystème Your Car Your Way.

## 🛠 Stack Technique
- **Backend** : Spring Boot 4.0.x
- **Runtime** : Java 25 (LTS) - Distribution Temurin
- **Base de données** : PostgreSQL 17
- **Protocole** : WebSocket / STOMP

## ⚙️ Configuration Locale

### 1. Prérequis Système
- Java JDK 25 (Temurin recommandé via SDKMAN!)
- Instance PostgreSQL locale
- Maven 3.9+ (ou utilisation du wrapper `./mvnw`)

### 2. Initialisation de la Base de Données
Exécuter les instructions suivantes pour configurer l'instance locale :

```sql
-- Création de l'environnement
CREATE DATABASE ycyw_db;
CREATE USER ycyw_user WITH PASSWORD 'votre_mot_de_passe';
GRANT ALL PRIVILEGES ON DATABASE ycyw_db TO ycyw_user;

-- Configuration des accès au schéma public
\c ycyw_db
GRANT ALL ON SCHEMA public TO ycyw_user;
```

### 3. Variables d'Environnement
L'application requiert l'injection des secrets via les variables d'environnement suivantes pour assurer la sécurité des accès :

| Variable      | Description                           | Exemple       |
|---------------|---------------------------------------|---------------|
| `DB_USER`     | Identifiant de connexion PostgreSQL   | `ycyw_user`   |
| `DB_PASSWORD` | Mot de passe de l'utilisateur dédié   | `************`|

### 4. Lancement de l'Application
Le démarrage du serveur s'effectue via Maven. Les variables d'environnement doivent être présentes au runtime :

`bash
DB_USER=ycyw_user DB_PASSWORD=votre_mot_de_passe ./mvnw spring-boot:run
`

L'API est exposée par défaut sur le port `8080`.

## 🛡️ Bonnes Pratiques Appliquées
- **Sécurité** : Aucune donnée sensible ou identifiant n'est stocké en dur dans les fichiers de configuration.
- **Performance** : Le pattern `spring.jpa.open-in-view` est désactivé par défaut.
- **Maintenance** : Utilisation de l'auto-détection du dialecte Hibernate pour une meilleure portabilité.