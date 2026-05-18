# 💻 Frontend : Interface utilisateur (Angular 21)

Ce dossier héberge l'interface graphique de la messagerie instantanée, 
propulsée par **Angular 21** et **Node 22**. Elle implémente `@stomp/stompjs` 
pour la gestion des flux WebSockets et utilise les **Signals** pour un rendu 
d'interface ultra-réactif.

## 🚀 Options d'Exécution

### Option A : Via le Docker Compose Global (Standard)
Déployé en une commande depuis la racine. Le projet Angular est compilé en mode 
production, ses fichiers statiques sont purgés, puis servis par un serveur 
**Nginx stable-alpine** isolé sur le port externe `4200`.

### Option B : Mode Dev Hot-Reload (Local)
Pour modifier les composants ou les services TypeScript avec rechargement à chaud :

1. **Prérequis** : L'API et la BDD doivent tourner en tâche de fond.
2. **Installation propre des dépendances** :
   ```bash
   npm ci
   ```
3. **Démarrage du serveur de développement** :
   ```bash
   npm run start
   ```
   L'application en mode développement écoute sur [http://localhost:4200](http://localhost:4200).

---

## 🧪 Protocole de Validation du Flux Temps Réel

Pour simuler et valider le comportement de la PoC devant le jury :

1. Ouvrez **deux fenêtres de navigateur distinctes** (ex: un onglet normal et 
   une fenêtre de navigation privée) sur `http://localhost:4200`.
2. Utilisez la barre d'outils de test inférieure pour modifier l'identité de 
   l'expéditeur sur chaque écran (ex: `Agent_Sarah` à gauche, `Client_Jean` à droite).
3. Envoyez un message depuis une fenêtre.
4. **Constat attendu** : Le message transite par le backend, s'enregistre en 
   base de données, et réapparaît instantanément sur les deux fenêtres sans 
   avoir besoin de rafraîchir la page.