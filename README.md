# E-Commerce MEAN Stack

Un projet e-commerce complet utilisant le stack MEAN (MongoDB, Express, Angular, Node.js) avec fonctionnalités CRUD complètes.

## 📋 Structure du Projet

```
MEAN/
├── backend/          # API Node.js + Express
│   ├── config/       # Configuration (DB, etc.)
│   ├── controllers/  # Contrôleurs CRUD
│   ├── models/       # Modèles Mongoose
│   ├── routes/       # Routes API
│   ├── server.js     # Serveur principal
│   └── package.json
└── frontend/         # Application Angular
    ├── src/
    │   ├── app/      # Composants, services, modèles
    │   └── assets/   # Ressources statiques
    └── package.json
```

## 🚀 Installation et Démarrage

### Prérequis
- Node.js (v16+)
- MongoDB (en local ou Atlas)
- npm ou yarn

### Backend

1. **Installer les dépendances**
```bash
cd backend
npm install
```

2. **Configurer l'environnement**
Éditer le fichier `.env` :
```
MONGODB_URI=mongodb://localhost:27017/ecommerce
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:4200
```

3. **Démarrer le serveur**
```bash
npm start          # Production
# ou
npm run dev        # Mode développement (avec nodemon)
```

Le serveur démarre sur `http://localhost:5000`

### Frontend

1. **Installer les dépendances**
```bash
cd frontend
npm install
```

2. **Démarrer l'application**
```bash
npm start
# ou
ng serve
```

L'application démarre sur `http://localhost:4200`

## 📝 Fonctionnalités CRUD

### API Endpoints

#### Récupérer tous les produits
```
GET /api/products
```

#### Récupérer un produit par ID
```
GET /api/products/:id
```

#### Créer un nouveau produit
```
POST /api/products
Body: {
  "name": "string",
  "description": "string",
  "price": number,
  "quantity": number,
  "category": "string",
  "image": "string (optionnel)",
  "rating": number (0-5, optionnel)
}
```

#### Mettre à jour un produit
```
PUT /api/products/:id
Body: { ...champs à mettre à jour }
```

#### Supprimer un produit
```
DELETE /api/products/:id
```

## 📦 Modèle de Produit (MongoDB)

```javascript
{
  _id: ObjectId,
  name: String (requis),
  description: String (requis),
  price: Number (requis, min: 0),
  quantity: Number (default: 0, min: 0),
  category: String (requis),
  image: String (optionnel),
  rating: Number (0-5, default: 0),
  createdAt: Date (default: maintenant),
  updatedAt: Date (default: maintenant)
}
```

## 🎨 Interface Angular

### Composants

1. **ProductListComponent**
   - Affiche la liste de tous les produits
   - Permet de modifier et supprimer les produits
   - Bouton pour ajouter un nouveau produit

2. **ProductFormComponent**
   - Formulaire pour créer/modifier les produits
   - Validation complète des champs
   - Gestion des erreurs et confirmation de succès

3. **AppComponent**
   - Composant racine avec navigation
   - Barre de navigation (navbar)
   - Footer

### Services

**ProductService**
- Communique avec l'API backend
- Méthodes : getAllProducts(), getProductById(), createProduct(), updateProduct(), deleteProduct()

## 🔧 Technologies Utilisées

### Backend
- **Node.js** - Serveur JavaScript
- **Express** - Framework web
- **MongoDB** - Base de données NoSQL
- **Mongoose** - ODM pour MongoDB
- **dotenv** - Gestion des variables d'environnement
- **CORS** - Gestion des requêtes cross-origin
- **bcryptjs** - Hachage des mots de passe (pour extension future)
- **jsonwebtoken** - JWT pour authentification (pour extension future)

### Frontend
- **Angular 17** - Framework SPA
- **TypeScript** - Langage de programmation
- **RxJS** - Programmation réactive
- **Reactive Forms** - Gestion avancée des formulaires

## 📚 Extensions Futures

- [ ] Authentification utilisateur (JWT)
- [ ] Panier d'achat
- [ ] Système de paiement
- [ ] Filtrage et recherche avancée
- [ ] Pagination
- [ ] Commentaires et avis
- [ ] Gestion des utilisateurs et rôles
- [ ] Notifications en temps réel

## 🐛 Troubleshooting

### Erreur de connexion MongoDB
- Vérifiez que MongoDB est en cours d'exécution
- Vérifiez l'URI dans le fichier `.env`
- Vérifiez les permissions d'accès à la base de données

### Erreur CORS
- Vérifiez que `CORS_ORIGIN` correspond à l'URL du frontend
- Par défaut: `http://localhost:4200`

### Port déjà utilisé
Changez le PORT dans le fichier `.env` :
```
PORT=5001
```

## 📧 Support

Pour toute question ou problème, veuillez créer une issue ou contacter l'équipe de développement.

## 📄 License

MIT License - Libre d'utilisation
