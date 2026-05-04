# 💻 Frontend : Interface de Tchat (Angular)

Ce dossier contient l'interface utilisateur de la messagerie, développée avec Angular 21. Elle communique avec le backend via le protocole WebSocket/STOMP en utilisant la librairie `@stomp/stompjs` et les `Signals` d'Angular pour des performances optimales.

## 🚀 Installation et Lancement

Assurez-vous d'être dans le dossier `/frontend` et que le backend Spring Boot est déjà en cours d'exécution.

1. Installez les dépendances du projet :

   ```bash
   npm install
   ```

2. Lancez le serveur de développement :
   ```bash
   ng serve
   ```

L'application sera accessible sur **`http://localhost:4200`**.

## 🧪 Comment tester le flux temps réel ?

Pour valider le fonctionnement de la Preuve de Concept :

1. Ouvrez **deux fenêtres de votre navigateur** côte à côte sur `http://localhost:4200` (ou utilisez un onglet normal et un onglet de navigation privée).
2. Dans la barre d'outils en bas de l'écran, modifiez le nom de l'expéditeur pour simuler deux utilisateurs différents (ex: `Agent_Sarah` à gauche, `Client_Jean` à droite).
3. Envoyez un message depuis l'une des fenêtres.
4. Vous le verrez apparaître instantanément sur les deux écrans grâce au système de souscription STOMP !
