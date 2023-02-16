## Launch Scripts

To start project run:

### `npm i`
### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

Le projet est composé d'une page principale (Dashboard)
L'ébauche d'autres pages sont également disponible (Account, Settings)

Un Service http pour faire des requête à une API est déjà configuré.

Quelques composant UI sont également fait

### `To do`

L'exercice consiste en 4 points:

Sur la page Dashboard, ajouter un bouton qui permet de reset les filtres et d'afficher à nouveau la liste de tous les business.

Sur le projet, ajouter un rooting pour qu'au click sur les éléments de la navBar, on soit redirigé vers les pages correspondantes (Dashboard, Account, Settings). Si la page est rafraichie alors qu'on est sur Account, on doit retomber sur Account.

Sur la page Dashboard, il faut qu'au click sur une ligne "business", la modale qui affiche le composant BusinessDetailCard affiche les informations du business séléctionné. Ils sont numeroté par des entier de 1 à 2000 environs. Vous êtes libre de vous servir de l'existant sur le composant BusinessDetailCard.

Sur la page BusinessDetailPage, ajouter un bouton 'Businnes suivant' qui permet d'afficher les informations de la business suivante.

Vous pouvez par exemple utiliser: [reactrouter](https://reactrouter.com/en/main) to